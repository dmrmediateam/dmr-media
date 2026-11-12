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
const TIMEOUT_MS = 15000

/** Gemini responseJsonSchema (JSON Schema subset). */
const PLAN_SCHEMA = {
  type: 'object',
  required: ['whereYouAre', 'whatToDo', 'whatNotToDo', 'steps'],
  properties: {
    whereYouAre: { type: 'string', description: 'Where they are: 2 to 3 sentences built from at least four of their specific answers, phrased as things they told you.' },
    whatToDo: { type: 'string', description: 'What to do next: 2 to 3 sentences, high level, tied to their answers.' },
    whatNotToDo: { type: 'string', description: 'What not to do at their stage: 1 to 2 sentences.' },
    steps: {
      type: 'array',
      minItems: 4,
      maxItems: 4,
      items: {
        type: 'object',
        required: ['title', 'body'],
        properties: {
          title: { type: 'string', description: 'Imperative, 3 to 7 words.' },
          body: { type: 'string', description: '1 to 2 sentences, under 35 words.' },
        },
      },
    },
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
 * Guards that keep the four stages distinct: "what to do" must still name the
 * stage's main channel, and "what not to do" must still be the stage's skip item.
 * A miss falls back to the standard text for that part only.
 */
const STAGE_GUARDS: Record<StageSlug, { doThis: RegExp; skip: RegExp }> = {
  foundation: { doThis: /website|facebook|instagram|business profile|review|sphere/i, skip: /paid|ads|advertis|seo/i },
  consistency: { doThis: /google ads|google search|search ads|performance max|sphere/i, skip: /seo|search engine optimization/i },
  scaling: { doThis: /seo|ai search|organic|google ads|follow-up|follow up|response time|cadence/i, skip: /more leads|lead volume|answer|respond|response|follow/i },
  'brand-building': { doThis: /brand|seo|google|meta/i, skip: /one channel|single channel|one source|single source|one lead source/i },
}

function validate(raw: unknown, slug: StageSlug): QuizPlan | null {
  if (!raw || typeof raw !== 'object') return null
  const r = raw as Record<string, unknown>
  const steps = Array.isArray(r.steps)
    ? r.steps
        .slice(0, 4)
        .map((m) => ({ title: sentenceCase(clean((m as Record<string, unknown>)?.title, 80)), body: clean((m as Record<string, unknown>)?.body, 300) }))
        .filter((m) => m.title && m.body)
    : []
  if (steps.length !== 4) return null
  const stage = STAGES[slug]
  const guard = STAGE_GUARDS[slug]
  const whereYouAre = clean(r.whereYouAre, 600)
  const whatToDo = clean(r.whatToDo, 560)
  const whatNotToDo = clean(r.whatNotToDo, 360)
  return {
    whereYouAre: whereYouAre || stage.summary,
    whatToDo: whatToDo && guard.doThis.test(whatToDo) ? whatToDo : stage.recommend.body,
    whatNotToDo: whatNotToDo && guard.skip.test(whatNotToDo) ? whatNotToDo : `${stage.avoid.title}. ${stage.avoid.body}`,
    steps,
  }
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
