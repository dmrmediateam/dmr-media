'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, type ReactNode } from 'react'
import ClientLogosSlider from '@/components/ClientLogosSlider'
import CalInlineEmbed from '@/components/landing/CalInlineEmbed'
import { ChannelLandingHeader } from '@/components/landing/ChannelLandingPageContent'
import { readLandingLeadPrefill } from '@/lib/landing/booking-prefill'
import { ELFSIGHT_LANDING_HIDE_SELECTORS } from '@/lib/elfsight-widgets'
import { ALTERNATIVES } from '@/lib/landing/lead-quiz-alternatives'
import {
  STAGES,
  answersSummary,
  readQuizAnswers,
  readQuizPlan,
  readinessNote,
  stageFor,
  tailoredRecommendations,
  type QuizAnswers,
  type QuizPlan,
  type StageSlug,
} from '@/lib/landing/lead-quiz'
import RoadmapGraphic, { StageIcon } from '../RoadmapGraphic'
import SystemClip from '../SystemClip'
import { useHideSiteChrome } from '../useLandingChrome'
import {
  ChannelMix,
  ConversationCalculator,
  FoundationChecklist,
  OwnVsRent,
  PeerStats,
  ReturnCalculator,
  Roadmap90,
  Scorecard,
  StageQuestions,
  SwampSignals,
} from './ReportSections'
import StageProof from './StageProof'
import { AD_BUDGET_DEFAULT, PEER_STATS, defaultPrice, scorecard } from '@/lib/landing/lead-quiz-report'

const GUIDE = { name: 'Andrew Rohm', role: 'Founder, DMR Media', photo: '/images/team/andrew-rohm-avatar.webp' }
const INTER = '![font-family:var(--font-inter),ui-sans-serif,system-ui,sans-serif] [&_*]:![font-family:var(--font-inter),ui-sans-serif,system-ui,sans-serif]'
const darkBtn = `inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-[var(--color-off-black)] px-9 text-base font-semibold !text-white transition-transform hover:-translate-y-0.5 motion-reduce:transition-none sm:w-auto ${INTER}`
const lightBtn = `inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-white px-9 text-base font-semibold !text-[var(--color-off-black)] transition-transform hover:-translate-y-0.5 motion-reduce:transition-none sm:w-auto ${INTER}`

/** Keep the AI chat widget off the calendar. */
function useHideChatWidget(active: boolean) {
  useEffect(() => {
    if (!active) return
    const hide = () =>
      ELFSIGHT_LANDING_HIDE_SELECTORS.forEach((selector) => {
        try {
          document.querySelectorAll(selector).forEach((el) => {
            ;(el as HTMLElement).style.display = 'none'
          })
        } catch {}
      })
    hide()
    const observer = new MutationObserver(hide)
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [active])
}

function scrollToNextStep() {
  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/** The one action each result asks for: book a call (stages 2-4) or see our websites (stage 1). */
function PrimaryCta({ consult, tone }: { consult: boolean; tone: 'dark' | 'light' }) {
  const cls = tone === 'light' ? lightBtn : darkBtn
  const arrowCls = tone === 'light' ? '!text-[var(--color-off-black)]' : '!text-white'
  return consult ? (
    <button type="button" onClick={scrollToNextStep} className={cls}>
      Book a call <span aria-hidden className={arrowCls}>→</span>
    </button>
  ) : (
    <Link href="/landing/website-development" className={cls}>
      See our websites <span aria-hidden className={arrowCls}>→</span>
    </Link>
  )
}

/** The agent's stage: its roadmap icon, "Stage N of 4", and a four-step progress bar. */
function StageMark({ slug, number, phase }: { slug: StageSlug; number: number; phase: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white !text-[var(--color-off-black)] sm:h-16 sm:w-16">
        <StageIcon slug={slug} className="h-7 w-7 sm:h-8 sm:w-8" />
      </span>
      <span className="flex flex-col gap-2">
        <span className="gg-body !text-xs font-semibold uppercase tracking-[0.18em] !text-white/70">
          Stage {number} of 4 · {phase}
        </span>
        <span className="flex gap-1" aria-hidden>
          {[1, 2, 3, 4].map((n) => (
            <span key={n} className={`h-1 w-8 rounded-full ${n === number ? 'bg-white' : n < number ? 'bg-white/45' : 'bg-white/15'}`} />
          ))}
        </span>
      </span>
    </div>
  )
}

function SectionHead({ n, title, sub }: { n: number; title: string; sub?: string }) {
  return (
    <div className="flex items-start gap-4 border-t border-[var(--color-ink-200)] pt-6">
      <span className="gg-body shrink-0 !text-sm font-semibold !text-[var(--gg-text-muted)]">{String(n).padStart(2, '0')}</span>
      <div>
        <h2 className="gg-display text-[1.75rem] font-light leading-tight tracking-tight sm:text-[2.1rem]">{title}</h2>
        {sub ? <p className="gg-body mt-1.5 !text-[15px] !leading-relaxed !text-[var(--gg-text-muted)]">{sub}</p> : null}
      </div>
    </div>
  )
}

/**
 * Quiz result as a personal report, one custom page per stage. Built from the
 * "Quiz results report for agents" research: open with something about them
 * (scorecard from their answers), give the plan, then stage-specific tools and
 * benchmarks, a 90-day plan, straight answers, and one closing next step.
 * Stages 2 to 4 end with a booking calendar; Stage 1 never offers a call.
 */
export default function QuizResult({ slug }: { slug: StageSlug }) {
  useHideSiteChrome()
  const stage = STAGES[slug]
  const consult = stage.offersConsultation
  useHideChatWidget(consult)

  // Answers live in sessionStorage; undefined until read, null when this page was opened directly.
  const [answers, setAnswers] = useState<QuizAnswers | null | undefined>(undefined)
  // The AI-written plan saved at submit; null shows the stage's standard advice.
  const [plan, setPlan] = useState<QuizPlan | null>(null)
  const [firstName, setFirstName] = useState('')
  const [today, setToday] = useState('')
  useEffect(() => {
    const a = readQuizAnswers()
    const matches = !!a && stageFor(a.volume) === slug
    setAnswers(matches ? a : null)
    setPlan(matches ? readQuizPlan() : null)
    setFirstName(readLandingLeadPrefill()?.name?.trim().split(/\s+/)[0] ?? '')
    setToday(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }))
  }, [slug])

  const tailored = answers ? tailoredRecommendations(answers) : []
  const alternatives = ALTERNATIVES[slug]
  const score = answers ? scorecard(answers, slug) : null
  const price = defaultPrice(answers?.price)

  /* ── Sections, in each stage's own order ── */
  type Block = { id: string; label: string; title: string; sub?: string; node: ReactNode }

  const opening: Block =
    answers && score
      ? {
          id: 'diagnosis',
          label: 'Your diagnosis',
          title: score.gaps === 0 ? 'No major gaps. Time to build on it.' : score.gaps === 1 ? '1 gap is holding you back' : `${score.gaps} gaps are holding you back`,
          sub: 'A plain read of your 8 answers: what you have, what is missing, and what is next.',
          node: <Scorecard answers={answers} stage={slug} />,
        }
      : {
          id: 'where',
          label: 'Where you are',
          title: 'Where you are',
          sub: 'The four stages we see agents in.',
          node: <RoadmapGraphic current={slug} youAreHere />,
        }

  const planBlock: Block = {
    id: 'plan',
    label: plan ? 'Your plan' : 'Our recommendation',
    title: plan ? 'Your plan' : 'Our recommendation',
    sub: plan ? `Written for your answers, at Stage ${stage.number}.` : `What we'd do at Stage ${stage.number}, and what we'd skip.`,
    node: (
      <>
        <div className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-[var(--color-off-black)] bg-white p-6 sm:p-8">
            <p className="gg-eyebrow gg-eyebrow--strong">Do this</p>
            <p className="gg-display mt-3 text-[1.75rem] font-light leading-[1.15] sm:text-[2.1rem]">{plan?.doTitle || stage.recommend.title}</p>
            <p className="gg-body mt-3 !text-base !leading-relaxed">{plan ? plan.note : stage.recommend.body}</p>
            {plan ? (
              <p className="mt-5 flex items-center gap-2.5">
                <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
                  <Image src={GUIDE.photo} alt="" fill sizes="32px" className="object-cover" />
                </span>
                <span className="gg-body !text-sm font-semibold !text-[var(--color-off-black)]">{GUIDE.name}</span>
              </p>
            ) : null}
          </div>
          <div className="rounded-3xl border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6 sm:p-8">
            <p className="gg-eyebrow">Skip this for now</p>
            <p className="gg-display mt-3 text-xl font-light leading-snug">{plan?.skipTitle || stage.avoid.title}</p>
            <p className="gg-body mt-3 !text-[15px] !leading-relaxed !text-[var(--gg-text-muted)]">{plan?.skipBody || stage.avoid.body}</p>
          </div>
        </div>
        {(plan?.moves ?? tailored.slice(0, 3)).length ? (
          <>
            <p className="gg-body mt-10 !text-xs font-semibold uppercase tracking-[0.14em] !text-[var(--color-off-black)]">Your next three moves</p>
            <ol className="mt-3 list-none divide-y divide-[var(--color-ink-200)] rounded-2xl border border-[var(--color-ink-200)] bg-white p-0">
              {(plan?.moves ?? tailored.slice(0, 3)).map((m, i) => (
                <li key={m.title} className="flex gap-4 px-5 py-5 sm:px-7">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)] text-xs font-semibold !text-white" aria-hidden>
                    {i + 1}
                  </span>
                  <div>
                    <p className="gg-body !text-base font-semibold !leading-snug !text-[var(--color-off-black)]">{m.title}</p>
                    <p className="gg-body mt-1 !text-[15px] !leading-relaxed">{m.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </>
        ) : null}
        {plan ? (
          <div className="mt-4 flex flex-col gap-5 rounded-2xl bg-[var(--color-off-black)] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="gg-body !text-[15px] !leading-relaxed !text-white">{plan.callNudge}</p>
            <div className="shrink-0">
              <PrimaryCta consult={consult} tone="light" />
            </div>
          </div>
        ) : null}
      </>
    ),
  }

  const calcBlock: Block = consult
    ? {
        id: 'calculator',
        label: 'Return calculator',
        title: 'What your ad budget should return',
        sub: 'Set it to your numbers. It starts at your price point.',
        node: <ReturnCalculator key={price} startPrice={price} startBudget={AD_BUDGET_DEFAULT[slug]} />,
      }
    : {
        id: 'calculator',
        label: 'Your daily number',
        title: 'Your income goal, in daily conversations',
        sub: 'Set your goal and price point. This is the activity it takes.',
        node: <ConversationCalculator key={price} startPrice={price} />,
      }

  const peersBlock: Block = { id: 'benchmarks', label: 'Benchmarks', title: PEER_STATS[slug].title, sub: PEER_STATS[slug].sub, node: <PeerStats stage={slug} /> }
  const roadmapBlock: Block = {
    id: 'roadmap',
    label: '90-day plan',
    title: 'Your 90-day plan',
    sub: 'Three phases. Check them off as you go.',
    node: <Roadmap90 stage={slug} />,
  }
  const questionsBlock: Block = {
    id: 'questions',
    label: 'Straight answers',
    title: 'Straight answers to what you’re asking',
    sub: `The questions agents at Stage ${stage.number} ask us most.`,
    node: <StageQuestions stage={slug} />,
  }
  const alternativesBlock: Block = {
    id: 'alternatives',
    label: 'Alternatives',
    title: 'Alternatives worth looking into',
    sub: `Other options agents at Stage ${stage.number} use.`,
    node: (
      <>
        <div className="flex items-start gap-3 rounded-2xl border border-[var(--color-ink-200)] bg-white px-5 py-4">
          <span
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink-300)] text-[11px] font-semibold leading-none !text-[var(--gg-text-muted)]"
            aria-hidden
          >
            i
          </span>
          <p className="gg-body !text-sm !leading-relaxed !text-[var(--color-off-black)]">
            <span className="font-semibold">We don&apos;t offer or help with these.</span> We compiled them from industry research so you can look into them
            yourself. Tap any option for details. Costs are rough estimates, so confirm pricing before you commit.
          </p>
        </div>
        <ol className="mt-5 list-none divide-y divide-[var(--color-ink-200)] overflow-hidden rounded-2xl border border-[var(--color-ink-200)] bg-white p-0">
          {alternatives.map((alt, i) => (
            <li key={alt.title}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 transition-colors hover:bg-[var(--surface-base)] sm:px-6 [&::-webkit-details-marker]:hidden">
                  <span className="gg-body w-6 shrink-0 !text-xs font-semibold !text-[var(--gg-text-muted)]">0{i + 1}</span>
                  <span className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between sm:gap-4">
                    <span className="gg-body block !text-base font-semibold !leading-snug !text-[var(--color-off-black)]">{alt.title}</span>
                    <span className="gg-body mt-1.5 inline-block shrink-0 whitespace-nowrap rounded-full border border-[var(--color-ink-200)] bg-[var(--surface-base)] px-2.5 py-1 !text-xs font-medium !leading-none !text-[var(--color-off-black)] sm:mt-0">
                      {alt.tag}
                    </span>
                  </span>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink-200)] text-base leading-none !text-[var(--color-off-black)] transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <div className="grid gap-4 px-5 pb-6 pl-[3.75rem] sm:grid-cols-2 sm:gap-8 sm:px-6 sm:pl-[4.25rem]">
                  <div>
                    <p className="gg-body !text-[11px] font-semibold uppercase tracking-[0.12em] !text-[var(--gg-text-muted)]">Why it fits</p>
                    <p className="gg-body mt-1 !text-[15px] !leading-relaxed">{alt.why}</p>
                    <p className="gg-body mt-2 !text-sm !text-[var(--gg-text-muted)]">Rough cost: {alt.cost}</p>
                  </div>
                  <div>
                    <p className="gg-body !text-[11px] font-semibold uppercase tracking-[0.12em] !text-[var(--gg-text-muted)]">Watch out</p>
                    <p className="gg-body mt-1 !text-[15px] !leading-relaxed">{alt.watchOut}</p>
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ol>
      </>
    ),
  }

  const unique: Record<StageSlug, Block> = {
    foundation: {
      id: 'checklist',
      label: 'Foundation checklist',
      title: 'Your foundation checklist',
      sub: 'The basics every listing starts from, checked against what you told us.',
      node: <FoundationChecklist answers={answers ?? null} />,
    },
    consistency: {
      id: 'own-vs-rent',
      label: 'Own vs. rent',
      title: 'Rented leads vs. leads you own',
      sub: 'Consistency comes from a source you control. Here is the difference.',
      node: <OwnVsRent answers={answers ?? null} />,
    },
    scaling: {
      id: 'bottleneck',
      label: 'Bottleneck check',
      title: 'Are you the bottleneck?',
      sub: 'The usual signs an agent has hit the swamp. We flagged the ones your answers point to.',
      node: <SwampSignals answers={answers ?? null} />,
    },
    'brand-building': {
      id: 'channel-mix',
      label: 'Channel mix',
      title: 'Your channel mix',
      sub: 'Three channels, three jobs. Together they make you the obvious choice.',
      node: <ChannelMix />,
    },
  }

  const ORDER: Record<StageSlug, Block[]> = {
    foundation: [opening, planBlock, unique.foundation, calcBlock, roadmapBlock, peersBlock, questionsBlock, alternativesBlock],
    consistency: [opening, planBlock, peersBlock, calcBlock, unique.consistency, roadmapBlock, questionsBlock, alternativesBlock],
    scaling: [opening, planBlock, unique.scaling, calcBlock, roadmapBlock, peersBlock, questionsBlock, alternativesBlock],
    'brand-building': [opening, planBlock, unique['brand-building'], calcBlock, roadmapBlock, peersBlock, questionsBlock, alternativesBlock],
  }
  const blocks = ORDER[slug]

  return (
    <div className="google-general-landing min-h-screen bg-[var(--surface-base)] text-[var(--color-off-black)]">
      <ChannelLandingHeader applyLabel={consult ? 'Book a call' : 'See our websites'} onApply={consult ? scrollToNextStep : undefined} />

      {/* Report header: the report on the left, one unmissable next step on the right */}
      <header className="bg-[var(--color-off-black)] px-4 pb-10 pt-28 sm:px-6 sm:pt-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-center lg:gap-14">
          <div>
            <StageMark slug={slug} number={stage.number} phase={stage.phase} />
            <h1 className="gg-display mt-6 text-[2.6rem] font-light leading-[1.02] tracking-tight !text-white sm:mt-8 sm:text-6xl md:text-7xl">
              Stage {stage.number}: <em className="italic !text-white">{stage.name}</em>
            </h1>
            <p className="gg-body mt-4 max-w-2xl !text-base !leading-relaxed !text-white/75 sm:mt-6 sm:!text-lg">{plan?.description || stage.headline}</p>
            <a href={`#${blocks[0].id}`} className="gg-body mt-6 hidden items-center gap-2 !text-sm font-semibold !text-white/80 underline-offset-4 hover:underline lg:inline-flex">
              Read your full report <span aria-hidden className="!text-white/80">↓</span>
            </a>
          </div>

          {/* The CTA card */}
          <div className="rounded-3xl bg-white p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-8">
            <p className="gg-eyebrow gg-eyebrow--strong">{consult ? 'Free 30-minute call' : 'Your next step'}</p>
            <p className="gg-display mt-3 text-[1.9rem] font-light leading-[1.1] tracking-tight">
              {consult ? (
                <>
                  Want tailored solutions? <em className="italic">Talk to our team today.</em>
                </>
              ) : (
                <>
                  Start with a website <em className="italic">that wins listings.</em>
                </>
              )}
            </p>
            <ul className="mt-5 list-none space-y-2.5 p-0">
              {(consult
                ? ['Your Stage ' + stage.number + ' plan, built for your market', 'What to spend and what a lead should cost', 'What to launch first, and what to skip']
                : ['A home-value page that captures sellers', 'Built to show your reviews and listings', 'A home base every referral and post can send people to']
              ).map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)]" aria-hidden>
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.5 6.2 5 8.5l4.5-5" />
                    </svg>
                  </span>
                  <span className="gg-body !text-[15px] !leading-snug !text-[var(--color-off-black)]">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 [&>*]:!w-full">
              <PrimaryCta consult={consult} tone="dark" />
            </div>
            <div className="mt-5 flex items-center gap-3 border-t border-[var(--color-ink-200)] pt-5">
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <Image src={GUIDE.photo} alt="" fill sizes="40px" className="object-cover" />
              </span>
              <span className="gg-body !text-xs !leading-snug !text-[var(--gg-text-muted)]">
                {consult ? 'With' : 'Built by'} {GUIDE.name}, founder of DMR Media.
                <br />
                {consult ? 'No pressure. If we’re not a fit, we’ll say so.' : 'Websites made for real estate agents.'}
              </span>
            </div>
          </div>

          <a href={`#${blocks[0].id}`} className="gg-body -mt-4 inline-flex items-center gap-2 !text-sm font-semibold !text-white/80 lg:hidden">
            Read your full report <span aria-hidden className="!text-white/80">↓</span>
          </a>

          {/* Report details */}
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/15 pt-5 sm:flex sm:flex-wrap sm:gap-x-12 lg:col-span-2">
            <div>
              <dt className="gg-body !text-[10px] font-semibold uppercase tracking-[0.18em] !text-white/45">Prepared for</dt>
              <dd className="gg-body mt-1 !text-sm !text-white">{firstName || 'You'}</dd>
            </div>
            {today ? (
              <div>
                <dt className="gg-body !text-[10px] font-semibold uppercase tracking-[0.18em] !text-white/45">Date</dt>
                <dd className="gg-body mt-1 !text-sm !text-white">{today}</dd>
              </div>
            ) : null}
            {answers ? (
              <div>
                <dt className="gg-body !text-[10px] font-semibold uppercase tracking-[0.18em] !text-white/45">Based on</dt>
                <dd className="gg-body mt-1 !text-sm !text-white">Your 8 answers</dd>
              </div>
            ) : null}
            {answers ? (
              <div>
                <dt className="gg-body !text-[10px] font-semibold uppercase tracking-[0.18em] !text-white/45">Resources</dt>
                <dd className="gg-body mt-1 !text-sm !text-white">✓ Sent to your email</dd>
              </div>
            ) : null}
          </dl>
        </div>
      </header>

      {/* Report body: contents rail + numbered sections, in this stage's order */}
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:grid lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-12">
        <nav className="hidden lg:block" aria-label="Report contents">
          <div className="sticky top-28">
            <p className="gg-eyebrow">Contents</p>
            <ol className="mt-4 list-none space-y-3 border-l border-[var(--color-ink-200)] p-0 pl-4">
              {blocks.map((b, i) => (
                <li key={b.id}>
                  <a href={`#${b.id}`} className="gg-body block !text-sm !leading-snug !text-[var(--gg-text-muted)] transition-colors hover:!text-[var(--color-off-black)]">
                    <span className="font-semibold">{String(i + 1).padStart(2, '0')}</span> {b.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#book" className="gg-body block !text-sm font-semibold !leading-snug !text-[var(--color-off-black)] hover:opacity-70">
                  → {consult ? 'Book a call' : 'Your next step'}
                </a>
              </li>
            </ol>
          </div>
        </nav>

        <main className="min-w-0 space-y-20 pb-4">
          {blocks.map((b, i) => (
            <section key={b.id} id={b.id} className="scroll-mt-28">
              <SectionHead n={i + 1} title={b.title} sub={b.sub} />
              <div className="mt-8">{b.node}</div>
            </section>
          ))}
        </main>
      </div>

      {/* The system in under a minute, then who we work with and proof matched to the stage */}
      <SystemClip full className="mt-24" />
      <div className="mt-20">
        <ClientLogosSlider />
      </div>
      <div className="mt-16">
        <StageProof slug={slug} />
      </div>

      {/* Closing next step: a call for Stages 2 to 4, websites for Stage 1 (no call offered) */}
      <section id="book" className="scroll-mt-20 bg-[var(--color-off-black)] px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          {consult ? (
            <>
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-end">
                <div>
                  <p className="gg-eyebrow !text-white/55">Your next step</p>
                  <h2 className="gg-display mt-4 text-[2.5rem] font-light leading-[1.05] tracking-tight !text-white sm:text-6xl">
                    Want tailored solutions? <em className="italic !text-white">Talk to our team today.</em>
                  </h2>
                  <p className="gg-body mt-5 max-w-xl !text-[17px] !leading-relaxed !text-white/75">
                    A free 30-minute call. We&apos;ll come with your Stage {stage.number} plan and the real numbers for your market: what to spend, what a
                    lead should cost, and what to launch first.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white/80">
                      <Image src={GUIDE.photo} alt={GUIDE.name} fill sizes="48px" className="object-cover" />
                    </span>
                    <span>
                      <span className="gg-body block !text-sm font-semibold !text-white">{GUIDE.name}</span>
                      <span className="gg-body block !text-xs !text-white/60">{GUIDE.role}</span>
                    </span>
                  </div>
                </div>
                <div>
                  <p className="gg-body !text-xs font-semibold uppercase tracking-[0.14em] !text-white/55">We&apos;ll cover</p>
                  <ul className="mt-3 list-none space-y-2.5 p-0">
                    {(plan
                      ? [...plan.moves.map((m) => m.title), 'What it costs in your market']
                      : tailored.length
                        ? tailored.slice(0, 4).map((t) => t.title)
                        : [stage.recommend.title, 'What to do first in your market', 'What it costs and what to expect']
                    ).map((line) => (
                      <li key={line} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[10px] leading-none !text-[var(--color-off-black)]" aria-hidden>
                          ✓
                        </span>
                        <span className="gg-body !text-[15px] !leading-snug !text-white">{line}</span>
                      </li>
                    ))}
                  </ul>
                  {answers ? <p className="gg-body mt-4 !text-sm !text-white/60">{readinessNote(answers.commitment)}</p> : null}
                </div>
              </div>
              <div className="mt-10 overflow-hidden rounded-3xl bg-white p-2 sm:p-4">
                {answers !== undefined ? <CalInlineEmbed notes={answers ? answersSummary(answers) : undefined} /> : <div className="min-h-[720px]" />}
              </div>
            </>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_auto] lg:items-end">
              <div>
                <p className="gg-eyebrow !text-white/55">Your next step</p>
                <h2 className="gg-display mt-4 text-[2.5rem] font-light leading-[1.05] tracking-tight !text-white sm:text-6xl">
                  Build the base <em className="italic !text-white">your next listings land on.</em>
                </h2>
                <p className="gg-body mt-5 max-w-xl !text-[17px] !leading-relaxed !text-white/75">
                  At Stage 1, the move is a website of your own: a home-value page, your reviews, and a place every referral and post can send people.
                  See what we build for agents.
                </p>
              </div>
              <PrimaryCta consult={false} tone="light" />
              <div className="border-t border-white/15 pt-8 lg:col-span-2">
                <p className="gg-body !text-xs font-semibold uppercase tracking-[0.14em] !text-white/55">You&apos;re ready for paid marketing when</p>
                <ul className="mt-4 grid list-none gap-3 p-0 sm:grid-cols-3">
                  {['You’re closing around $5M a year', 'You’re closing about a deal a month', 'You have 20+ Google reviews'].map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/40 text-[10px] leading-none !text-white" aria-hidden>
                        ✓
                      </span>
                      <span className="gg-body !text-[15px] !leading-snug !text-white">{t}</span>
                    </li>
                  ))}
                </ul>
                <p className="gg-body mt-5 !text-sm !text-white/60">
                  Hit those, then{' '}
                  <Link href="/landing/lead-quiz" className="!text-white underline underline-offset-2 hover:opacity-80">
                    retake the quiz
                  </Link>{' '}
                  for your Stage 2 plan.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
