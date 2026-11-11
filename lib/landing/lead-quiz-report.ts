/**
 * Content for the four quiz result reports (one custom page per stage), from
 * reports/Quiz results report for agents.md and its notes. Every benchmark is
 * attributed on the page; keep the source line when editing a number.
 *
 * Also the scorecard: a 0 to 100 read of the agent's own answers, so the
 * report opens with something that is clearly about them.
 */

import type { QuizAnswers, StageSlug } from '@/lib/landing/lead-quiz'

/* ── Peer benchmarks ─────────────────────────────────────────── */

export type PeerStat = { value: string; label: string; source: string }

export const PEER_STATS: Record<StageSlug, { title: string; sub: string; stats: PeerStat[] }> = {
  foundation: {
    title: "You're not behind",
    sub: 'Most agents are where you are. Here is what the numbers say about the typical agent.',
    stats: [
      { value: '$2.7M', label: 'Annual volume of the typical solo agent', source: 'NAR Member Profile, 2026' },
      { value: '$8,000', label: 'Median income for agents in their first 2 years', source: 'NAR Member Profile, 2026' },
      { value: '43%', label: 'Of buyers found their agent through a referral', source: 'NAR Profile of Home Buyers and Sellers, 2025' },
      { value: '47%', label: "Of consumers won't use a business with fewer than 20 reviews", source: 'BrightLocal, 2026' },
    ],
  },
  consistency: {
    title: 'Where you stand',
    sub: 'You are already ahead of the typical agent. These are the numbers that decide the next step.',
    stats: [
      { value: '$2.7M', label: 'Volume of the typical solo agent. You are well past it.', source: 'NAR Member Profile, 2026' },
      { value: '68%', label: 'Of website inquiries to agents got no reply within 24 hours', source: 'Pied Piper study, 2026' },
      { value: '$157', label: 'Median cost per lead for agents on Google Search', source: 'LocaliQ benchmarks, 2026' },
      { value: '15 to 40%', label: 'Of your commission goes to a portal on a referral-fee lead', source: 'Zillow Preferred, published ranges' },
    ],
  },
  scaling: {
    title: 'Why $20M to $40M is the swamp',
    sub: 'Volume this size exposes the leaks: response time, follow-up, and the business depending on you.',
    stats: [
      { value: '10%', label: 'Of website inquiries heard from an agent within an hour', source: 'Pied Piper study, 2026' },
      { value: '$17.5M', label: 'Median volume of a real estate team, vs $2.7M solo', source: 'NAR Member Profile, 2026' },
      { value: '45%', label: 'Of consumers now ask AI tools for local recommendations, up from 6%', source: 'BrightLocal, 2026' },
      { value: '50%', label: 'Of the typical Realtor’s business is repeat clients and referrals', source: 'NAR Member Profile, 2026' },
    ],
  },
  'brand-building': {
    title: 'What a brand is worth at your level',
    sub: 'At $40M+, the next listing is decided before anyone searches. The numbers behind that.',
    stats: [
      { value: '80%', label: 'Of sellers contacted only one agent', source: 'NAR Profile of Home Buyers and Sellers, 2025' },
      { value: '88%', label: 'Of buyers would use their agent again or recommend them', source: 'NAR Profile of Home Buyers and Sellers, 2026' },
      { value: '12 yrs', label: 'Median time a seller stays in a home. Your brand has to last that long.', source: 'NAR Profile of Home Buyers and Sellers, 2026' },
      { value: '45%', label: 'Of consumers now ask AI tools for local recommendations', source: 'BrightLocal, 2026' },
    ],
  },
}

/* ── 90-day plan ─────────────────────────────────────────────── */

export type Phase = { weeks: string; title: string; items: string[] }

export const ROADMAP_90: Record<StageSlug, Phase[]> = {
  foundation: [
    {
      weeks: 'Weeks 1 to 4',
      title: 'Set up your base',
      items: ['Get your own website live with a home-value page', 'Claim your Google Business Profile and add 10+ photos', 'Load your whole database into a CRM'],
    },
    {
      weeks: 'Weeks 5 to 8',
      title: 'Show up every week',
      items: ['Post on Facebook and Instagram 3 times a week', 'Block lead generation time on your calendar every day', 'Ask every past client for a Google review'],
    },
    {
      weeks: 'Weeks 9 to 12',
      title: 'Find what works',
      items: ['Track where every appointment came from', 'Put more time into the one source that booked appointments', 'Work toward 20 reviews on your profile'],
    },
  ],
  consistency: [
    {
      weeks: 'Weeks 1 to 4',
      title: 'Know your numbers',
      items: ['Write down your average price, close rate, and cost per closing', 'Add conversion tracking to every form on your site', 'Build a manual home-valuation page for sellers'],
    },
    {
      weeks: 'Weeks 5 to 8',
      title: 'Launch one source you own',
      items: ['Start Google Search campaigns for buyers and sellers', 'Call new leads within minutes, then 3 value touches for every ask', 'Send your sphere a newsletter twice a month'],
    },
    {
      weeks: 'Weeks 9 to 12',
      title: 'Double down',
      items: ['Move budget to whatever books appointments', 'Add Google retargeting so leads keep seeing you', 'Review cost per appointment every week'],
    },
  ],
  scaling: [
    {
      weeks: 'Weeks 1 to 4',
      title: 'Find the leaks',
      items: ['Measure your real response time to new leads', 'Set lead routing and one follow-up cadence', 'Tag every deal by source so you know what works'],
    },
    {
      weeks: 'Weeks 5 to 8',
      title: 'Build what compounds',
      items: ['Publish your first community and zip code pages', 'Run a main and a test Google Ads campaign', 'Turn every closing into a review and a referral ask'],
    },
    {
      weeks: 'Weeks 9 to 12',
      title: 'Add leverage',
      items: ['Hire for your biggest bottleneck (usually an assistant or coordinator first)', 'Start a weekly scorecard: appointments, signed, closed', 'Add 1 to 2 new area pages every week'],
    },
  ],
  'brand-building': [
    {
      weeks: 'Weeks 1 to 4',
      title: 'Audit the brand',
      items: ['Make every channel tell the same story', 'Gather your proof: results, years, reviews, real photography', 'Set the numbers you will run the business on'],
    },
    {
      weeks: 'Weeks 5 to 8',
      title: 'Run the plan',
      items: ['SEO and AI search to own your market long term', 'Google Ads to capture people searching now', 'Meta Ads to keep your brand in front of people who know you'],
    },
    {
      weeks: 'Weeks 9 to 12',
      title: 'Step back from production',
      items: ['Route leads by agent with one shared cadence', 'Weekly scorecards for every agent', 'Recruiting content that shows the brand you built'],
    },
  ],
}

/* ── Straight answers to what agents at each stage ask ───────── */

export type QA = { q: string; a: string }

export const STAGE_QUESTIONS: Record<StageSlug, QA[]> = {
  foundation: [
    {
      q: 'What should I do first?',
      a: 'A website of your own and a Google Business Profile with reviews. Both are the first thing a referral looks up. Then a daily block of time to talk to your sphere.',
    },
    {
      q: 'How much should I spend on marketing?',
      a: 'Mostly time, not money, right now. Newer agents who succeed tend to spend a few thousand dollars a year, budgeted monthly, on the basics before any paid ads.',
    },
    {
      q: 'Will paid leads work for a new agent?',
      a: 'Usually not yet. Online leads often take months to close, and at this volume you would be paying to learn. Get your base and your follow-up right first.',
    },
    {
      q: 'Why does my business feel so inconsistent?',
      a: 'Because it is at this stage. You haven’t found the source that works for you yet. Track where every appointment comes from and the answer shows up within a few months.',
    },
  ],
  consistency: [
    {
      q: 'Which source should I double down on?',
      a: 'The one that books appointments at a cost you can measure. For most agents here that is the sphere plus one paid source you own, usually Google Search.',
    },
    {
      q: 'What does a closing really cost me?',
      a: 'Cost per lead divided by your close rate. A $60 lead at a 2% close rate is $3,000 per closing. Use the calculator below with your own numbers.',
    },
    {
      q: 'Should I keep Zillow or Realtor.com?',
      a: 'Keep what is profitable, but know the cost: referral-fee leads take 15% to 40% of your commission and the portal owns the relationship. Build a source you own alongside it.',
    },
    {
      q: 'How fast will Google Ads work?',
      a: 'Leads start within days. Closings take longer, because most online leads buy or sell months later. Plan on 6 to 12 months before you judge it.',
    },
  ],
  scaling: [
    {
      q: 'Why did I plateau?',
      a: 'Usually because the business runs through you. Leads wait, follow-up slips, and you can’t add volume without adding hours. More leads at that point just leak.',
    },
    {
      q: 'Am I wasting the leads I already have?',
      a: 'Probably some. Only 10% of web inquiries hear from an agent within an hour. Response time, a set cadence, and retargeting usually return more than new spend.',
    },
    {
      q: 'Who should I hire first?',
      a: 'Whoever removes your biggest bottleneck. For most agents that is an assistant or transaction coordinator first, then a buyer’s agent once buyers pull you off listings.',
    },
    {
      q: 'Is SEO worth it at my level?',
      a: 'Yes. It is slow for 4 to 6 months, then it compounds without more ad spend. It also feeds AI search, which a fast-growing share of people now use to find local pros.',
    },
  ],
  'brand-building': [
    {
      q: 'How do I step out of production without losing deals?',
      a: 'Systems first: lead routing by agent, one shared follow-up cadence, weekly scorecards. Then the brand keeps bringing in business the team can close without you.',
    },
    {
      q: 'Do I need Meta Ads if Google already works?',
      a: 'Google captures people searching now. Meta keeps your brand, listings, and results in front of the people who already know you, so you are the first call when they are ready.',
    },
    {
      q: 'How much of my business should come from portals?',
      a: 'As little as you can manage. Referral fees of 15% to 40% add up fast at your volume. A brand you own is the margin you keep.',
    },
    {
      q: 'What should I hire next?',
      a: 'At this level, usually operations or marketing leadership, so you are running the business instead of every campaign and every deal.',
    },
  ],
}

/* ── Calculator defaults ─────────────────────────────────────── */

/** Average sale price to start the calculators at, from the agent's price-point answer. */
export function defaultPrice(price: string | undefined): number {
  if (price === '500k-1m') return 750_000
  if (price === '1m-2-5m') return 1_600_000
  if (price === '2-5m-plus') return 3_500_000
  return 415_000 // about the 2025 US median existing-home price (NAR)
}

export const AD_BUDGET_DEFAULT: Record<StageSlug, number> = {
  foundation: 0,
  consistency: 1500,
  scaling: 3000,
  'brand-building': 6000,
}

/* ── Diagnosis ───────────────────────────────────────────────── */

export type ScoreStatus = 'Strong' | 'Building' | 'Gap'
export type ScoreItem = { key: string; label: string; score: number; status: ScoreStatus; note: string }

const clamp = (n: number) => Math.max(0, Math.min(100, Math.round(n)))

/**
 * A plain read of the agent's own answers: what they have, what's missing, what's next.
 * Statuses, not scores, because 8 answers can't justify a precise number.
 */
export function scorecard(a: QuizAnswers, stage: StageSlug): { gaps: number; items: ScoreItem[] } {
  const has = (v: string) => a.setup.includes(v)
  const presence = clamp((has('website') ? 35 : 0) + (has('gbp') ? 30 : 0) + (has('social') ? 20 : 0) + (has('youtube') ? 15 : 0))
  const missing = [!has('website') && 'a website', !has('gbp') && 'a Google Business Profile', !has('social') && 'social profiles'].filter(Boolean) as string[]

  const inv = (v: string) => a.investing.includes(v)
  const owned = clamp((inv('referrals') ? 35 : 0) + (inv('seo') ? 30 : 0) + (inv('online-ads') ? 25 : 0) + (inv('mailers') ? 10 : 0) + (inv('other') ? 10 : 0) - (inv('portals') ? 15 : 0))

  const flow = a.difficulty === 'connecting' ? 35 : a.difficulty === 'other' ? 60 : 50

  const leverageTable: Record<StageSlug, Record<string, number>> = {
    foundation: { solo: 75, '2-4': 85, '5-10': 90, '10-plus': 90 },
    consistency: { solo: 50, '2-4': 75, '5-10': 85, '10-plus': 90 },
    scaling: { solo: 30, '2-4': 60, '5-10': 80, '10-plus': 90 },
    'brand-building': { solo: 20, '2-4': 40, '5-10': 70, '10-plus': 90 },
  }
  const leverage = leverageTable[stage][a.team] ?? 50
  const readiness = clamp(a.commitment * 10)

  const status = (n: number): ScoreStatus => (n >= 70 ? 'Strong' : n >= 45 ? 'Building' : 'Gap')
  const items: ScoreItem[] = (
    [
    {
      key: 'presence',
      label: 'Online presence',
      score: presence,
      note: missing.length ? `Missing ${missing.length > 1 ? `${missing.slice(0, -1).join(', ')} and ${missing[missing.length - 1]}` : missing[0]}. That’s where referrals look you up first.` : 'Your base is in place. Now make it bring in business.',
    },
    {
      key: 'owned',
      label: 'Lead sources you own',
      score: owned,
      note: inv('portals')
        ? 'Portal leads are shared and cost a share of your commission. Build a source you own.'
        : owned >= 60
          ? 'You invest in sources you own. Next is making them consistent.'
          : 'Most of your business depends on one or two sources. Add one you control.',
    },
    {
      key: 'flow',
      label: 'Lead flow and follow-up',
      score: flow,
      note:
        a.difficulty === 'connecting'
          ? 'You said connecting is the hard part. Fix response time and cadence before buying more leads.'
          : a.difficulty === 'sellers'
            ? 'You said finding sellers is the hard part. Sellers need a home-value offer and a reason to trust you.'
            : a.difficulty === 'buyers'
              ? 'You said finding buyers is the hard part. Buyers search by area, so meet them there.'
              : 'Track which source books appointments, then put more into it.',
    },
    {
      key: 'leverage',
      label: 'Leverage for your volume',
      score: leverage,
      note: leverage >= 75 ? 'Your team size fits your volume.' : 'Your volume is outgrowing your capacity. Leverage is the next unlock.',
    },
    {
      key: 'readiness',
      label: 'Readiness to change',
      score: readiness,
      note: readiness >= 80 ? 'You’re ready to move. Start this month.' : readiness >= 50 ? 'You’re leaning in. Start with step one.' : 'No rush. Start small and build.',
    },
    ] as Omit<ScoreItem, 'status'>[]
  ).map((it) => ({
    ...it,
    // Low readiness is the agent's call, not a gap in their business.
    status: it.key === 'readiness' && status(it.score) === 'Gap' ? 'Building' : status(it.score),
  }))
  return { gaps: items.filter((i) => i.status === 'Gap').length, items }
}
