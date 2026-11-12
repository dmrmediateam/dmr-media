/**
 * The "Where's your next $10M in volume coming from?" quiz: questions, the
 * stage each agent lands in, and the recommendations tailored to their answers.
 *
 * The stage comes from annual sales volume alone; every other answer tailors
 * the recommendations inside that stage (buyer vs. seller focus, gaps in what
 * they have set up, where their money goes today). Answers travel from the quiz
 * to /landing/lead-quiz/{stage} in sessionStorage, never in the URL.
 */

export type ChoiceQuestion = {
  id: QuestionId
  title: string
  kind: 'single' | 'multi'
  options: readonly { value: string; label: string }[]
  /** Multi-select option that clears the others (e.g. "None"). */
  exclusive?: string
}

export type QuestionId =
  | 'experience'
  | 'investing'
  | 'setup'
  | 'difficulty'
  | 'team'
  | 'volume'
  | 'price'

export type QuizAnswers = {
  experience: string
  investing: string[]
  setup: string[]
  difficulty: string
  team: string
  volume: string
  price: string
  commitment: number
}

export const QUESTIONS: readonly ChoiceQuestion[] = [
  {
    id: 'experience',
    title: 'How long have you been in real estate?',
    kind: 'single',
    options: [
      { value: 'under-2', label: 'Under 2 years' },
      { value: '2-5', label: '2 to 5 years' },
      { value: '5-10', label: '5 to 10 years' },
      { value: '10-plus', label: '10+ years' },
    ],
  },
  {
    id: 'investing',
    title: 'Are you currently investing in any of these?',
    kind: 'multi',
    options: [
      { value: 'portals', label: 'Zillow / Realtor.com / other portals' },
      { value: 'online-ads', label: 'Online advertising' },
      { value: 'seo', label: 'Search engine optimization' },
      { value: 'mailers', label: 'Mailers / billboards' },
      { value: 'referrals', label: 'Referral marketing / working your sphere' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 'setup',
    title: 'Which of these do you currently have set up?',
    kind: 'multi',
    exclusive: 'none',
    options: [
      { value: 'social', label: 'Facebook / Instagram' },
      { value: 'youtube', label: 'YouTube' },
      { value: 'website', label: 'Website' },
      { value: 'gbp', label: 'Google Business Profile' },
      { value: 'none', label: 'None' },
    ],
  },
  {
    id: 'difficulty',
    title: 'Which of these do you find most difficult?',
    kind: 'single',
    options: [
      { value: 'buyers', label: 'Finding buyers' },
      { value: 'sellers', label: 'Finding sellers' },
      { value: 'connecting', label: 'Connecting with the prospect' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    id: 'team',
    title: 'How large is your team?',
    kind: 'single',
    options: [
      { value: 'solo', label: 'Solo' },
      { value: '2-4', label: '2 to 4' },
      { value: '5-10', label: '5 to 10' },
      { value: '10-plus', label: '10+' },
    ],
  },
  {
    id: 'volume',
    title: 'What is your annual sales volume?',
    kind: 'single',
    options: [
      { value: 'sub-5m', label: 'Under $5M' },
      { value: '5-20m', label: '$5M to $20M' },
      { value: '20-40m', label: '$20M to $40M' },
      { value: '40m-plus', label: '$40M+' },
    ],
  },
  {
    id: 'price',
    title: 'What is your average price point?',
    kind: 'single',
    options: [
      { value: 'sub-500k', label: 'Under $500K' },
      { value: '500k-1m', label: '$500K to $1M' },
      { value: '1m-2-5m', label: '$1M to $2.5M' },
      { value: '2-5m-plus', label: '$2.5M+' },
    ],
  },
]

export const COMMITMENT_QUESTION = 'On a scale of 1 to 10, how committed are you to changing this right now?'

/* ── Stages ─────────────────────────────────────────────────── */

export type StageSlug = 'foundation' | 'consistency' | 'scaling' | 'brand-building'

export type Stage = {
  slug: StageSlug
  number: 1 | 2 | 3 | 4
  name: string
  /** Short phase label under the stage name, e.g. "Doubling down on ONE source". */
  phase: string
  volume: string
  headline: string
  summary: string
  recommend: { title: string; body: string }
  avoid: { title: string; body: string }
  /** Sub-$5M agents get no calendar on their result page. */
  offersConsultation: boolean
}

export const STAGES: Record<StageSlug, Stage> = {
  foundation: {
    slug: 'foundation',
    number: 1,
    name: 'Foundation',
    phase: 'Finding what works',
    volume: 'Under $5M',
    headline:
      'This is where you need to find a solid foundation to get listings. We recommend you build out your marketing with a website and Facebook. The business will feel inconsistent here because it is. You haven’t found exactly what works just yet.',
    summary:
      'At this stage, every dollar has to work hard. Your next deals come from people who already know you, so the goal is a home base that makes you look established and a simple way to stay in front of your sphere.',
    recommend: {
      title: 'Website build + Facebook & Instagram organic nurture',
      body: 'A website of your own gives every referral, sign call, and social post somewhere credible to land. Organic Facebook and Instagram keep you in front of your sphere for free, every week, until they are ready to move.',
    },
    avoid: {
      title: 'Heavy paid advertising',
      body: 'Paid ads are too expensive to learn on at this volume. You would be paying Google and Meta for lessons a website and a consistent posting habit teach for free.',
    },
    offersConsultation: false,
  },
  consistency: {
    slug: 'consistency',
    number: 2,
    name: 'Consistency',
    phase: 'Doubling down on ONE source',
    volume: '$5M to $20M',
    headline:
      'Now that you have a marketing source that works, you need to double down on it and make it consistent. We recommend working your current sphere and adding Google Ads. They are consistently profitable when done correctly. This is where you make your business consistent.',
    summary:
      'You have proven you can close. What is missing is a steady flow of new conversations that does not depend on referrals landing at the right time. The fastest way to get it is to show up when buyers and sellers are already searching.',
    recommend: {
      title: 'Google Ads',
      body: 'Search and Performance Max put you in front of people typing "homes for sale" and "what is my home worth" in your market today. Leads land in your CRM within days, and every one is yours, not shared.',
    },
    avoid: {
      title: 'Search engine optimization (for now)',
      body: 'SEO compounds, but it takes months to pay back. Get cash flowing from Google Ads first, then reinvest some of it into SEO once the pipeline is steady.',
    },
    offersConsultation: true,
  },
  scaling: {
    slug: 'scaling',
    number: 3,
    name: 'Scaling',
    phase: 'The Agent Swamp',
    volume: '$20M to $40M',
    headline:
      'This is where most agents get stuck. They’ve built a business that pays the bills and then some, but can’t seem to scale it. Here’s the issue: you need to learn to take your current marketing sources and scale them. It takes experimentation and testing to find what works. We recommend an organic channel such as SEO/AIO, plus Google Ads, to break out of this cycle.',
    summary:
      'Between $20M and $40M is where good agents stall: busy enough to be stretched, not big enough to dominate. Growth from here comes from owning both paid and organic search in the areas you sell.',
    recommend: {
      title: 'SEO + Google Ads',
      body: 'Google Ads keeps leads coming this month while SEO builds rankings and AI-search visibility that keep paying without more ad spend. Together they make you the default name in your market.',
    },
    avoid: {
      title: 'Buying more leads than you can answer fast',
      body: 'At this volume the leak is response time and follow-up, not lead count. More leads before you fix that just cost more. Fix the cadence, then scale.',
    },
    offersConsultation: true,
  },
  'brand-building': {
    slug: 'brand-building',
    number: 4,
    name: 'Brand Building',
    phase: 'Moving out of Production',
    volume: '$40M+',
    headline: 'Build a brand your market knows by name.',
    summary:
      'At $40M+, growth comes from being the obvious choice before a buyer or seller ever searches. That takes a brand marketing plan: every channel working together, with your name on all of it.',
    recommend: {
      title: 'Brand marketing plan: SEO + Google Ads + Meta Ads',
      body: 'SEO and Google Ads capture people searching now. Meta Ads keep your brand, listings, and results in front of your market between searches, so you are the first call when they are ready.',
    },
    avoid: {
      title: 'Relying on a single channel',
      body: 'At your volume, one channel caps growth and leaves you exposed when it gets expensive. A plan across search and social keeps leads steady and your brand compounding.',
    },
    offersConsultation: true,
  },
}

export const STAGE_ORDER: readonly StageSlug[] = ['foundation', 'consistency', 'scaling', 'brand-building']

export function stageFor(volume: string): StageSlug {
  if (volume === '5-20m') return 'consistency'
  if (volume === '20-40m') return 'scaling'
  if (volume === '40m-plus') return 'brand-building'
  return 'foundation'
}

/* ── Labels and storage ─────────────────────────────────────── */

export function labelFor(id: QuestionId, value: string): string {
  return QUESTIONS.find((q) => q.id === id)?.options.find((o) => o.value === value)?.label ?? value
}

/** Plain-text answers for the team email and the booking notes. */
export function answersSummary(a: QuizAnswers): string {
  const list = (id: QuestionId, values: string[]) => values.map((v) => labelFor(id, v)).join(', ') || 'None'
  const stage = STAGES[stageFor(a.volume)]
  return [
    `Lead quiz result: Stage ${stage.number}, ${stage.name} (${stage.recommend.title})`,
    `Experience: ${labelFor('experience', a.experience)}`,
    `Investing in: ${list('investing', a.investing)}`,
    `Set up: ${list('setup', a.setup)}`,
    `Most difficult: ${labelFor('difficulty', a.difficulty)}`,
    `Team: ${labelFor('team', a.team)}`,
    `Volume: ${labelFor('volume', a.volume)}`,
    `Price point: ${labelFor('price', a.price)}`,
    `Commitment: ${a.commitment}/10`,
  ].join('\n')
}

/** AI-written plan for one quiz result (see lib/landing/lead-quiz-ai.ts), in Andrew's voice. */
export type QuizPlan = {
  /** Where you are: a brief read of their situation from their answers. */
  whereYouAre: string
  /** What to do next: a short, high-level recommendation. */
  whatToDo: string
  /** What not to do at this stage. */
  whatNotToDo: string
  /** Four steps, in order. */
  steps: { title: string; body: string }[]
}

/** Standard four steps per stage, shown when there's no AI plan (page opened directly, or the AI call failed). */
export const STAGE_STEPS: Record<StageSlug, { title: string; body: string }[]> = {
  foundation: [
    { title: 'Get your own website live', body: 'A credible home base with a home-value page, so every referral and post has somewhere to land.' },
    { title: 'Claim your Google Business Profile', body: 'It is free and shows you on Google Maps. Ask every past client for a review.' },
    { title: 'Post on Facebook and Instagram weekly', body: 'Stay in front of your sphere between deals with listings, market updates, and local tips.' },
    { title: 'Block lead generation time every day', body: 'Talk to your sphere daily and track where every appointment comes from.' },
  ],
  consistency: [
    { title: 'Know your numbers', body: 'Write down your average price, close rate, and what a closing costs you today.' },
    { title: 'Launch Google Search campaigns', body: 'Separate buyer and seller campaigns, with conversion tracking on every form.' },
    { title: 'Set a follow-up cadence', body: 'Call new leads within minutes, then give value three times for every ask.' },
    { title: 'Double down on what books appointments', body: 'Review cost per appointment weekly and move budget to what works.' },
  ],
  scaling: [
    { title: 'Fix response time and follow-up', body: 'Measure how fast new leads hear from you, and set one cadence for everyone.' },
    { title: 'Build community and zip code pages', body: 'SEO and AI search visibility that keeps paying without more ad spend.' },
    { title: 'Run a main and a test Google Ads campaign', body: 'Test new angles with a small share of budget and move money to what wins.' },
    { title: 'Hire for your biggest bottleneck', body: 'Usually an assistant or transaction coordinator first, so you stay on listings.' },
  ],
  'brand-building': [
    { title: 'Make every channel tell one story', body: 'Your results, years, reviews, and real photography, everywhere you show up.' },
    { title: 'Own your market with SEO and AI search', body: 'Community pages and mentions that keep you first for years.' },
    { title: 'Capture and stay known with paid', body: 'Google Ads for people searching now, Meta Ads for people who already know you.' },
    { title: 'Run the team on systems', body: 'Lead routing, one shared follow-up cadence, and weekly scorecards for every agent.' },
  ],
}

const PLAN_STORAGE_KEY = 'dmr:lead-quiz-plan'

export function saveQuizPlan(plan: QuizPlan | null) {
  try {
    if (plan) window.sessionStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(plan))
    else window.sessionStorage.removeItem(PLAN_STORAGE_KEY)
  } catch {
    // Blocked storage: the result page shows the stage's standard advice.
  }
}

export function readQuizPlan(): QuizPlan | null {
  try {
    const raw = window.sessionStorage.getItem(PLAN_STORAGE_KEY)
    const p = raw ? (JSON.parse(raw) as QuizPlan) : null
    return p && typeof p.whatToDo === 'string' && typeof p.whatNotToDo === 'string' && Array.isArray(p.steps) && p.steps.length ? p : null
  } catch {
    return null
  }
}

const STORAGE_KEY = 'dmr:lead-quiz'

export function saveQuizAnswers(answers: QuizAnswers) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers))
  } catch {
    // Private mode or blocked storage: the result page falls back to the stage's general advice.
  }
}

export function readQuizAnswers(): QuizAnswers | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as QuizAnswers) : null
  } catch {
    return null
  }
}

/** Flat, labeled quiz fields for Zapier / the CRM, one per answer plus the result. */
export function quizFieldsForCrm(a: QuizAnswers) {
  const stage = STAGES[stageFor(a.volume)]
  const list = (id: QuestionId, values: string[]) => values.map((v) => labelFor(id, v)).join(', ') || 'None'
  return {
    quizStage: stage.number,
    quizStageName: stage.name,
    quizRecommendation: stage.recommend.title,
    quizResultUrl: `https://www.dmrmedia.org/landing/lead-quiz/${stage.slug}`,
    quizExperience: labelFor('experience', a.experience),
    quizInvestingIn: list('investing', a.investing),
    quizSetUp: list('setup', a.setup),
    quizMostDifficult: labelFor('difficulty', a.difficulty),
    quizTeamSize: labelFor('team', a.team),
    quizSalesVolume: labelFor('volume', a.volume),
    quizPricePoint: labelFor('price', a.price),
    quizCommitment: a.commitment,
  }
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
