/**
 * The roadmap email each quiz lead gets, one per stage, written in Andrew
 * Rohm's voice: short lines, "1: Title" points, his caps for emphasis, and a
 * P.S. Tailored steps from the agent's own answers go in under "Based on your
 * answers". Plain text only, so it reads like a note from Andrew, not a newsletter.
 */

import {
  QUESTIONS,
  STAGES,
  stageFor,
  tailoredRecommendations,
  type QuizAnswers,
  type StageSlug,
} from '@/lib/landing/lead-quiz'

const BOOK_A_CALL_URL = 'https://cal.com/andrew-rohm/marketing-discussion'
const WEBSITES_URL = 'https://www.dmrmedia.org/landing/website-development'
/** Andrew's full AI lead generation walkthrough on YouTube. */
const VIDEO_URL = 'https://www.youtube.com/watch?v=UUjS_e36Vno'

type StageEmail = {
  subject: string
  /** Opening lines, before the numbered roadmap. */
  intro: string[]
  roadmap: { title: string; lines: string[] }[]
  cta: { lead: string; label: string; url: string }
  /** Moments from Andrew's full walkthrough video that match this stage. */
  watch: { label: string; at: string; seconds: number }[]
  ps: string
}

const EMAILS: Record<StageSlug, StageEmail> = {
  foundation: {
    subject: 'Your roadmap (don’t run ads yet)',
    intro: [
      'You’re in the Foundation stage.',
      'Not a bad thing. Every agent doing $40M+ started right here',
      'But this is where agents waste the most money.',
      'They see someone crushing it with ads and copy them. At your volume that’s paying Google to learn lessons you can learn for free',
    ],
    roadmap: [
      {
        title: 'Get a website that’s YOURS',
        lines: ['Not your brokerage page. Not a Zillow profile.', 'When a referral looks you up, this is what they judge'],
      },
      {
        title: 'Post on Facebook & Instagram every week',
        lines: ['Your next deals are coming from people who already know you.', 'Stay in front of them. It’s free'],
      },
      {
        title: 'Hold off on Paid Ads',
        lines: ['For now. Get the foundation right first and the ads actually work when you turn them on'],
      },
    ],
    cta: { lead: 'Step one is the website. Here’s what we build for agents:', label: 'See our websites', url: WEBSITES_URL },
    watch: [
      { label: 'Setting up your Google Business Profile', at: '4:41', seconds: 281 },
      { label: 'The email newsletter that keeps your sphere warm', at: '3:03:21', seconds: 11001 },
    ],
    ps: 'P.S. If your website right now is your brokerage page, that’s your first move. Don’t overthink it.',
  },
  consistency: {
    subject: 'Your roadmap: why your best months don’t repeat',
    intro: [
      'You’re in the Consistency stage.',
      'You can close. That part’s proven.',
      'The problem is the pipeline. Great month, slow month, great month. All depending on who referred you that week',
      'That’s not a skill problem. It’s a lead problem.',
    ],
    roadmap: [
      {
        title: 'Turn on Google Ads',
        lines: [
          'Get in front of people searching “homes for sale” and “what’s my home worth” in your market TODAY.',
          'Those leads land in your CRM and they’re yours. Not shared with 3 other agents',
        ],
      },
      {
        title: 'Call every lead RIGHT AWAY',
        lines: ['New leads go cold fast. Call within the hour. Text if they don’t pick up'],
      },
      {
        title: 'Hold off on SEO',
        lines: ['SEO is great! It’s also slow.', 'Get cash coming in from ads first, then reinvest some of it into SEO'],
      },
    ],
    cta: { lead: 'Book a call and we’ll map this to your market:', label: 'Book a call', url: BOOK_A_CALL_URL },
    watch: [
      { label: 'Google Search Ads, start to finish', at: '1:30:34', seconds: 5434 },
      { label: 'AI follow-up, and what NOT to let it do', at: '3:16:18', seconds: 11778 },
    ],
    ps: 'P.S. Most agents stuck here are waiting for referrals to get consistent. They won’t. You have to go get them.',
  },
  scaling: {
    subject: 'Your roadmap: getting out of the Agent Swamp',
    intro: [
      'You’re in the Scaling stage.',
      'I call it the Agent Swamp.',
      'Busy enough to be stretched thin. Not big enough to own your market.',
      'This is where good agents get stuck. Not because they’re bad at the job. Because they stop pushing',
    ],
    roadmap: [
      {
        title: 'Run Google Ads AND SEO together',
        lines: [
          'Ads keep leads coming this month.',
          'SEO builds rankings that keep paying without more Ad Spend. You need both',
        ],
      },
      {
        title: 'Own your neighborhoods',
        lines: ['A page for every community you sell.', 'Be the name Google (and ChatGPT) gives when someone asks who to call'],
      },
      {
        title: 'Stop waiting',
        lines: ['This is the big one. Waiting a year is how agents stay in the swamp.', 'The ones who get out commit now'],
      },
    ],
    cta: { lead: 'Book a call and we’ll show you the first 90 days:', label: 'Book a call', url: BOOK_A_CALL_URL },
    watch: [
      { label: 'SEO vs AIO vs GEO', at: '37:19', seconds: 2239 },
      { label: 'Google Search Ads, start to finish', at: '1:30:34', seconds: 5434 },
    ],
    ps: 'P.S. If you’ve been “about to start SEO” for more than 6 months, this email is for you.',
  },
  'brand-building': {
    subject: 'Your roadmap: moving out of production',
    intro: [
      'You’re in the Brand Building stage.',
      'At this point your time is the most expensive thing on your team.',
      'Growth doesn’t come from you closing more deals.',
      'It comes from your market knowing your name before they ever search.',
    ],
    roadmap: [
      {
        title: 'SEO + Google Ads for the people searching now',
        lines: ['Capture every buyer and seller looking in your market. Route it to your team, not your cell'],
      },
      {
        title: 'Meta Ads for everyone else',
        lines: ['Your brand, your listings, your results in front of your market between searches.', 'So you’re the first call when they’re ready'],
      },
      {
        title: 'Don’t rely on one channel',
        lines: ['One channel caps you. When it gets expensive, you’re exposed'],
      },
    ],
    cta: { lead: 'Book a call and we’ll build your brand marketing plan:', label: 'Book a call', url: BOOK_A_CALL_URL },
    watch: [
      { label: 'AI ads and Performance Max', at: '2:04:03', seconds: 7443 },
      { label: 'Retargeting ads', at: '2:08:47', seconds: 7727 },
    ],
    ps: 'P.S. The goal at your level isn’t more leads for you. It’s more leads for your team. Big difference.',
  },
}

/** Rebuilds trusted answers from an untrusted request body; null when anything is off. */
export function parseQuizAnswers(raw: unknown): QuizAnswers | null {
  if (!raw || typeof raw !== 'object') return null
  const r = raw as Record<string, unknown>
  const allowed = (id: string) => new Set(QUESTIONS.find((q) => q.id === id)?.options.map((o) => o.value) ?? [])
  const one = (id: string) => (typeof r[id] === 'string' && allowed(id).has(r[id] as string) ? (r[id] as string) : null)
  const many = (id: string) =>
    Array.isArray(r[id]) ? (r[id] as unknown[]).filter((v): v is string => typeof v === 'string' && allowed(id).has(v)) : []
  const commitment = Number(r.commitment)
  const answers = {
    experience: one('experience'),
    investing: many('investing'),
    setup: many('setup'),
    difficulty: one('difficulty'),
    team: one('team'),
    volume: one('volume'),
    price: one('price'),
    commitment: Number.isFinite(commitment) ? Math.min(10, Math.max(1, Math.round(commitment))) : 5,
  }
  if (!answers.experience || !answers.difficulty || !answers.team || !answers.volume || !answers.price) return null
  return answers as QuizAnswers
}

/** Subject and plain-text body for one lead's roadmap email. */
export function buildRoadmapEmail(firstName: string, answers: QuizAnswers) {
  const slug = stageFor(answers.volume)
  const stage = STAGES[slug]
  const e = EMAILS[slug]
  const tailored = tailoredRecommendations(answers).map((t) => t.title)
  const greeting = `Hey ${firstName.trim() || 'there'},`

  const text = [
    greeting,
    '',
    ...e.intro.flatMap((l) => [l, '']),
    'Here’s your roadmap:',
    '',
    ...e.roadmap.flatMap((r, i) => [`${i + 1}: ${r.title}`, ...r.lines, '']),
    ...(tailored.length ? ['Based on your answers, here’s where I’d start:', ...tailored.map((t) => `- ${t}`), ''] : []),
    'Want to see exactly how I’d do it? I walk through it here:',
    ...e.watch.flatMap((w) => [`${w.label} (at ${w.at})`, `${VIDEO_URL}&t=${w.seconds}s`]),
    '',
    e.cta.lead,
    `${e.cta.label}: ${e.cta.url}`,
    '',
    'Talk soon,',
    'Andrew',
    'Andrew Rohm, Founder, DMR Media',
    '',
    e.ps,
    '',
    `You’re getting this because you took the “Where’s your next $10M in volume coming from?” quiz at dmrmedia.org. Your result: Stage ${stage.number}, ${stage.name}.`,
  ].join('\n')

  return { subject: e.subject, text }
}
