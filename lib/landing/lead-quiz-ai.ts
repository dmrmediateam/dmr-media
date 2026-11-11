import 'server-only'

import { unstable_cache } from 'next/cache'
import { labelFor, STAGES, stageFor, type QuestionId, type QuizAnswers, type QuizPlan, type StageSlug } from '@/lib/landing/lead-quiz'
import { QUIZ_PLAN_SYSTEM_PROMPT, QUIZ_PLAN_PROMPT_VERSION } from '@/lib/landing/lead-quiz-prompt'

/**
 * AI-written, personalized plan for a lead-quiz result, in Andrew's voice.
 *
 * Kept cheap on purpose:
 * - Called once, server-side, when a quiz lead is submitted (after the spam
 *   filter), never from the result page, so refreshes and bots cost nothing.
 * - Every answer is a fixed choice, so identical answer sets share one cached
 *   plan (Next data cache, keyed by the answers + prompt version + model).
 * - Gemini Flash with minimal thinking, a short JSON-schema reply, and the
 *   same system instruction on every call so Gemini's implicit caching
 *   discounts the repeated prefix.
 * Any failure or timeout returns null and the page shows the stage's standard advice.
 */

const MODEL = process.env.GEMINI_QUIZ_MODEL || 'gemini-3.5-flash'
const TIMEOUT_MS = 12000

/** Gemini responseJsonSchema (JSON Schema subset). */
const PLAN_SCHEMA = {
  type: 'object',
  required: ['description', 'doTitle', 'note', 'skipTitle', 'skipBody', 'moves', 'callNudge'],
  properties: {
    description: { type: 'string', description: 'Their stage description, rewritten for them. 2 to 3 sentences.' },
    doTitle: { type: 'string', description: 'Headline of the Do this card: the stage recommendation, reworded for them. 3 to 8 words.' },
    note: { type: 'string', description: 'Under the Do this headline: 2 sentences on why it fits them.' },
    skipTitle: { type: 'string', description: 'Headline of the Skip this for now card: the stage skip item. 2 to 7 words.' },
    skipBody: { type: 'string', description: '1 to 2 sentences on why to skip it for now, tied to their answers.' },
    moves: {
      type: 'array',
      minItems: 3,
      maxItems: 3,
      items: {
        type: 'object',
        required: ['title', 'body'],
        properties: {
          title: { type: 'string', description: 'Imperative, 3 to 7 words.' },
          body: { type: 'string', description: '1 to 2 sentences.' },
        },
      },
    },
    callNudge: { type: 'string', description: '1 to 2 sentences: what only a call can pin down for them.' },
  },
} as const

function commitmentBand(n: number): 'low' | 'medium' | 'high' {
  return n >= 8 ? 'high' : n >= 5 ? 'medium' : 'low'
}

/** Canonical answers: sorted multi-selects and a banded commitment, so equal situations share a cache entry. */
export function canonical(a: QuizAnswers) {
  return {
    experience: a.experience,
    investing: [...a.investing].sort(),
    setup: [...a.setup].sort(),
    difficulty: a.difficulty,
    team: a.team,
    volume: a.volume,
    price: a.price,
    commitment: commitmentBand(a.commitment),
  }
}

export type Canonical = ReturnType<typeof canonical>

function userMessage(c: Canonical): string {
  const stage = STAGES[stageFor(c.volume)]
  const list = (id: QuestionId, values: string[]) => values.map((v) => labelFor(id, v)).join(', ') || 'None'
  return [
    `STAGE: ${stage.number}, ${stage.name} ("${stage.phase}")`,
    `STAGE DESCRIPTION (rewrite this for them, keep its core message): ${stage.headline}`,
    `DO THIS (the stage's main recommendation; reword it for them, never change it): ${stage.recommend.title}`,
    `SKIP THIS FOR NOW (the stage's skip item; reword it for them, never change it): ${stage.avoid.title}`,
    '',
    'QUIZ ANSWERS:',
    `- Years in real estate: ${labelFor('experience', c.experience)}`,
    `- Investing in today: ${list('investing', c.investing)}`,
    `- Already set up: ${list('setup', c.setup)}`,
    `- Hardest part: ${labelFor('difficulty', c.difficulty)}`,
    `- Team size: ${labelFor('team', c.team)}`,
    `- Annual sales volume: ${labelFor('volume', c.volume)}`,
    `- Average price point: ${labelFor('price', c.price)}`,
    `- Readiness to change now: ${c.commitment}`,
    '',
    stage.offersConsultation
      ? 'CLOSE: push for the free 30-minute call with me (the calendar is right below this plan).'
      : 'CLOSE: invite them to see the websites we build (the "See our websites" button below), and to book a call from that page when they are ready.',
  ].join('\n')
}

/** No em or en dashes in copy, trimmed, capped. */
function clean(s: unknown, max: number): string {
  if (typeof s !== 'string') return ''
  return s
    .replace(/\s*[—–]\s*/g, ', ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max)
}

/** Words that keep their capitals when a Title Case title is turned into sentence case. */
const KEEP_CASE = /^(Google|Ads|Search|Performance|Max|Business|Profile|Facebook|Instagram|Meta|YouTube|SEO|AI|CRM|GCI|Zillow|Realtor\.com|I|DMR|[$\d].*)$/

function sentenceCase(title: string): string {
  const words = title.split(' ')
  // Title Case = every word longer than 3 letters (after the first) starts with a capital.
  const long = words.slice(1).filter((w) => w.length > 3)
  if (words.length < 3 || !long.length || !long.every((w) => /^[A-Z$\d]/.test(w))) return title
  return words.map((w, i) => (i === 0 || KEEP_CASE.test(w) ? w : w.toLowerCase())).join(' ')
}

/**
 * Guards that keep the four stages distinct: the Do this headline must still name
 * the stage's main channel, and the skip must still be the stage's skip item.
 * A miss falls back to the standard text for that card only.
 */
const STAGE_GUARDS: Record<StageSlug, { doThis: RegExp; skip: RegExp }> = {
  foundation: { doThis: /website|facebook|instagram/i, skip: /paid|ads|advertis|seo/i },
  consistency: { doThis: /google ads|google search|search ads|performance max/i, skip: /seo|search engine optimization/i },
  scaling: { doThis: /seo|ai search|organic/i, skip: /wait|hold|delay|sidelines|stall/i },
  'brand-building': { doThis: /brand/i, skip: /one channel|single channel|one source|single source|one lead source/i },
}

function validate(raw: unknown, slug: StageSlug): QuizPlan | null {
  if (!raw || typeof raw !== 'object') return null
  const r = raw as Record<string, unknown>
  const moves = Array.isArray(r.moves)
    ? r.moves
        .slice(0, 3)
        .map((m) => ({ title: sentenceCase(clean((m as Record<string, unknown>)?.title, 80)), body: clean((m as Record<string, unknown>)?.body, 320) }))
        .filter((m) => m.title && m.body)
    : []
  const stage = STAGES[slug]
  const guard = STAGE_GUARDS[slug]
  const doTitle = sentenceCase(clean(r.doTitle, 90))
  // The card is already labeled "Skip this for now", so drop a leading "Skip".
  const skipTitle = sentenceCase(clean(r.skipTitle, 90).replace(/^skip\s+/i, '')).replace(/^./, (c) => c.toUpperCase())
  const skipBody = clean(r.skipBody, 320)
  const skipOk = guard.skip.test(`${skipTitle} ${skipBody}`) && skipTitle && skipBody
  const plan: QuizPlan = {
    description: clean(r.description, 520),
    doTitle: doTitle && guard.doThis.test(doTitle) ? doTitle : stage.recommend.title,
    note: clean(r.note, 520),
    skipTitle: skipOk ? skipTitle : stage.avoid.title,
    skipBody: skipOk ? skipBody : stage.avoid.body,
    moves,
    callNudge: clean(r.callNudge, 300),
  }
  return plan.description && plan.note && plan.moves.length === 3 && plan.callNudge ? plan : null
}

/** Uncached call; exported for the prompt test script only. */
export async function callModel(c: Canonical): Promise<QuizPlan | null> {
  const started = Date.now()
  let res = await requestPlan(c, TIMEOUT_MS)
  // One quick retry when Gemini is overloaded (failed calls aren't billed), if there's time left.
  if ((res.status === 503 || res.status === 429) && Date.now() - started < TIMEOUT_MS / 2) {
    await new Promise((r) => setTimeout(r, 400))
    res = await requestPlan(c, TIMEOUT_MS - (Date.now() - started))
  }
  if (!res.ok) throw new Error(`Gemini ${res.status}: ${(await res.text()).slice(0, 200)}`)
  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[]
    usageMetadata?: Record<string, unknown>
  }
  const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('')
  if (!text) return null
  console.info('[lead-quiz-ai] plan generated', { model: MODEL, ms: Date.now() - started, usage: data.usageMetadata })
  return validate(JSON.parse(text), stageFor(c.volume))
}

function requestPlan(c: Canonical, timeoutMs: number): Promise<Response> {
  return fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': process.env.GEMINI_API_KEY ?? '' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: QUIZ_PLAN_SYSTEM_PROMPT }] },
      contents: [{ role: 'user', parts: [{ text: userMessage(c) }] }],
      generationConfig: {
        temperature: 0.6,
        maxOutputTokens: 700,
        responseMimeType: 'application/json',
        responseJsonSchema: PLAN_SCHEMA,
        thinkingConfig: { thinkingLevel: 'minimal' },
      },
    }),
    signal: AbortSignal.timeout(timeoutMs),
    cache: 'no-store',
  })
}

/** Cached across requests and instances; a null result is not cached, so a failure can retry next time. */
const cachedPlan = unstable_cache(
  async (key: string): Promise<QuizPlan> => {
    const plan = await callModel(JSON.parse(key) as Canonical)
    if (!plan) throw new Error('invalid plan')
    return plan
  },
  ['lead-quiz-plan', QUIZ_PLAN_PROMPT_VERSION, MODEL],
  { revalidate: false, tags: ['lead-quiz-plan'] },
)

export async function generateQuizPlan(answers: QuizAnswers): Promise<QuizPlan | null> {
  if (!process.env.GEMINI_API_KEY) return null
  try {
    return await cachedPlan(JSON.stringify(canonical(answers)))
  } catch (error) {
    console.error('[lead-quiz-ai] plan failed; showing standard advice', error instanceof Error ? error.message : error)
    return null
  }
}
