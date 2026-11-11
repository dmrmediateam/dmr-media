'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
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
  readinessNote,
  stageFor,
  tailoredRecommendations,
  type QuizAnswers,
  type StageSlug,
} from '@/lib/landing/lead-quiz'
import RoadmapGraphic from '../RoadmapGraphic'
import SystemClip from '../SystemClip'
import { useHideSiteChrome } from '../useLandingChrome'
import StageProof from './StageProof'

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
  document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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

/** Half-circle gauge with four segments, the agent's stage lit and a needle on it. */
function StageGauge({ number }: { number: number }) {
  const cx = 120
  const cy = 112
  const r = 96
  const point = (deg: number) => {
    const a = (deg * Math.PI) / 180
    return `${cx + r * Math.cos(a)} ${cy - r * Math.sin(a)}`
  }
  const segments = [0, 1, 2, 3].map((i) => {
    const start = 180 - i * 45 - 2.5
    const end = 180 - (i + 1) * 45 + 2.5
    return `M ${point(start)} A ${r} ${r} 0 0 1 ${point(end)}`
  })
  const needleDeg = 180 - (number - 0.5) * 45
  const needleRad = (needleDeg * Math.PI) / 180
  const nx = cx + (r - 30) * Math.cos(needleRad)
  const ny = cy - (r - 30) * Math.sin(needleRad)

  return (
    <svg viewBox="0 0 240 182" className="h-auto w-[220px] sm:w-[260px]" role="img" aria-label={`Stage ${number} of 4`}>
      {segments.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          strokeWidth="18"
          stroke="#ffffff"
          strokeOpacity={i + 1 === number ? 1 : i + 1 < number ? 0.4 : 0.14}
        />
      ))}
      <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="7" fill="#ffffff" />
      {/* Number sits below the pivot, clear of the needle */}
      <text x={cx} y={cy + 46} textAnchor="middle" fill="#ffffff" fontSize="34" fontWeight="600" fontFamily="ui-sans-serif, system-ui">
        {number}
      </text>
      <text x={cx} y={cy + 66} textAnchor="middle" fill="#ffffff" fillOpacity="0.6" fontSize="11" fontFamily="ui-sans-serif, system-ui" letterSpacing="2">
        OF 4
      </text>
    </svg>
  )
}

const SECTIONS = [
  { id: 'where', label: 'Where you are' },
  { id: 'recommendation', label: 'Our recommendation' },
  { id: 'hero-form', label: 'Your next step' },
  { id: 'alternatives', label: 'Alternatives to look into' },
] as const

function SectionHead({ n, title, sub }: { n: number; title: string; sub?: string }) {
  return (
    <div className="flex items-start gap-4 border-t border-[var(--color-ink-200)] pt-6">
      <span className="gg-body shrink-0 !text-sm font-semibold !text-[var(--gg-text-muted)]">0{n}</span>
      <div>
        <h2 className="gg-display text-[1.75rem] font-light leading-tight tracking-tight sm:text-[2.1rem]">{title}</h2>
        {sub ? <p className="gg-body mt-1.5 !text-[15px] !leading-relaxed !text-[var(--gg-text-muted)]">{sub}</p> : null}
      </div>
    </div>
  )
}

/**
 * Quiz result as a personal report, so it reads differently from the quiz page:
 * a dark header with a stage gauge, then numbered sections (where you are, our
 * recommendation, your next step, alternatives to look into) with a contents
 * rail on desktop, then the video, logos, and proof.
 */
export default function QuizResult({ slug }: { slug: StageSlug }) {
  useHideSiteChrome()
  const stage = STAGES[slug]
  const consult = stage.offersConsultation
  useHideChatWidget(consult)

  // Answers live in sessionStorage; undefined until read, null when this page was opened directly.
  const [answers, setAnswers] = useState<QuizAnswers | null | undefined>(undefined)
  const [firstName, setFirstName] = useState('')
  const [today, setToday] = useState('')
  useEffect(() => {
    const a = readQuizAnswers()
    setAnswers(a && stageFor(a.volume) === slug ? a : null)
    setFirstName(readLandingLeadPrefill()?.name?.trim().split(/\s+/)[0] ?? '')
    setToday(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }))
  }, [slug])

  const tailored = answers ? tailoredRecommendations(answers) : []
  const alternatives = ALTERNATIVES[slug]

  return (
    <div className="google-general-landing min-h-screen bg-[var(--surface-base)] text-[var(--color-off-black)]">
      <ChannelLandingHeader applyLabel={consult ? 'Book a call' : 'See our websites'} onApply={consult ? scrollToNextStep : undefined} />

      {/* Report header: dark, with the stage gauge */}
      <header className="bg-[var(--color-off-black)] px-4 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-14">
          <div className="flex justify-center lg:justify-start">
            <StageGauge number={stage.number} />
          </div>
          <div className="text-center lg:text-left">
            <p className="gg-eyebrow !text-white/60">Your real estate sales roadmap · {stage.phase}</p>
            <h1 className="gg-display mt-3 text-[2.4rem] font-light leading-[1.06] tracking-tight !text-white sm:text-5xl md:text-[3.4rem]">
              Stage {stage.number}: <em className="italic !text-white">{stage.name}</em>
            </h1>
            <p className="gg-body gg-body-lg mx-auto mt-3 max-w-2xl !text-white/75 lg:mx-0">{stage.headline}</p>
            <p className="gg-body mt-5 !text-sm !text-white/55">
              {firstName ? `Prepared for ${firstName}` : 'Prepared for you'}
              {today ? ` · ${today}` : ''}
              {answers ? ' · Based on your 8 answers' : ''}
            </p>
            {answers ? (
              <p className="gg-body mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 !text-sm font-medium !text-white">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] leading-none !text-[var(--color-off-black)]" aria-hidden>
                  ✓
                </span>
                Additional resources sent to your email
              </p>
            ) : null}
            <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <PrimaryCta consult={consult} tone="light" />
              <span className="flex items-center gap-2.5">
                <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-white/80">
                  <Image src={GUIDE.photo} alt="" fill sizes="36px" className="object-cover" />
                </span>
                <span className="gg-body text-left !text-xs !leading-snug !text-white/70">
                  {consult ? 'A free 30-minute call with' : 'Your roadmap from'}
                  <br />
                  {GUIDE.name}, founder of DMR Media
                </span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Report body: contents rail + numbered sections */}
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:grid lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-12">
        <nav className="hidden lg:block" aria-label="Report contents">
          <div className="sticky top-28">
            <p className="gg-eyebrow">Contents</p>
            <ol className="mt-4 list-none space-y-3 border-l border-[var(--color-ink-200)] p-0 pl-4">
              {SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="gg-body block !text-sm !leading-snug !text-[var(--gg-text-muted)] transition-colors hover:!text-[var(--color-off-black)]">
                    <span className="font-semibold">0{i + 1}</span> {s.id === 'hero-form' && consult ? 'Book a call' : s.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <main className="min-w-0 space-y-16 pb-4">
          {/* 01 Where you are */}
          <section id="where" className="scroll-mt-28">
            <SectionHead n={1} title="Where you are" sub="The four stages we see agents in, and where your answers put you." />
            <div className="mt-8">
              <RoadmapGraphic current={slug} youAreHere />
            </div>
          </section>

          {/* 02 Our recommendation */}
          <section id="recommendation" className="scroll-mt-28">
            <SectionHead n={2} title="Our recommendation" sub={`What we'd do at Stage ${stage.number}, and what we'd skip.`} />
            <div className="mt-8 grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <div className="rounded-3xl border border-[var(--color-off-black)] bg-white p-6 sm:p-8">
                <p className="gg-eyebrow gg-eyebrow--strong">Do this</p>
                <p className="gg-display mt-3 text-[1.75rem] font-light leading-[1.15] sm:text-[2.1rem]">{stage.recommend.title}</p>
                <p className="gg-body mt-3 !text-base !leading-relaxed">{stage.recommend.body}</p>
              </div>
              <div className="rounded-3xl border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6 sm:p-8">
                <p className="gg-eyebrow">Skip this for now</p>
                <p className="gg-display mt-3 text-xl font-light leading-snug">{stage.avoid.title}</p>
                <p className="gg-body mt-3 !text-[15px] !leading-relaxed !text-[var(--gg-text-muted)]">{stage.avoid.body}</p>
              </div>
            </div>
          </section>

          {/* 03 Your next step */}
          {consult ? (
            <section id="hero-form" className="scroll-mt-28" aria-labelledby="consult-heading">
              <SectionHead n={3} title="Book a call" sub={`A free 30-minute Google Meet. We'll come prepared with your Stage ${stage.number} roadmap.`} />
              <div className="mt-8 grid gap-6 md:grid-cols-[auto_minmax(0,1fr)] md:items-start">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white ring-2 ring-[var(--color-off-black)] ring-offset-2 ring-offset-[var(--surface-base)]">
                    <Image src={GUIDE.photo} alt={GUIDE.name} fill sizes="56px" className="object-cover" />
                  </div>
                  <div>
                    <p id="consult-heading" className="gg-body !text-sm font-semibold !text-[var(--color-off-black)]">
                      {GUIDE.name}
                    </p>
                    <p className="gg-body !text-xs !text-[var(--gg-text-muted)]">{GUIDE.role}</p>
                  </div>
                </div>
                <div>
                  <p className="gg-body !text-xs font-semibold uppercase tracking-[0.14em] !text-[var(--color-off-black)]">We&apos;ll cover</p>
                  <ul className="mt-3 grid list-none gap-x-6 gap-y-2.5 p-0 sm:grid-cols-2">
                    {(tailored.length ? tailored.map((t) => t.title) : [stage.recommend.title, 'What to do first in your market', 'What it costs and what to expect']).map((line) => (
                      <li key={line} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)] text-[10px] leading-none !text-white" aria-hidden>
                          ✓
                        </span>
                        <span className="gg-body !text-[15px] !leading-snug !text-[var(--color-off-black)]">{line}</span>
                      </li>
                    ))}
                  </ul>
                  {answers ? <p className="gg-body mt-4 !text-sm !text-[var(--gg-text-muted)]">{readinessNote(answers.commitment)}</p> : null}
                </div>
              </div>
              <div className="mt-6">
                {answers !== undefined ? <CalInlineEmbed notes={answers ? answersSummary(answers) : undefined} /> : <div className="min-h-[720px]" />}
              </div>
            </section>
          ) : (
            <section id="hero-form" className="scroll-mt-28" aria-labelledby="tailored-heading">
              <SectionHead n={3} title="Your next step" sub="Your roadmap, based on your answers." />
              {answers ? (
                <ol className="mt-8 list-none divide-y divide-[var(--color-ink-200)] rounded-2xl border border-[var(--color-ink-200)] bg-white p-0">
                  {tailored.map((t, i) => (
                    <li key={t.title} className="flex gap-4 px-5 py-5 sm:px-7">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)] text-xs font-semibold !text-white" aria-hidden>
                        {i + 1}
                      </span>
                      <div>
                        <p id={i === 0 ? 'tailored-heading' : undefined} className="gg-body !text-base font-semibold !leading-snug !text-[var(--color-off-black)]">
                          {t.title}
                        </p>
                        <p className="gg-body mt-1 !text-[15px] !leading-relaxed">{t.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : answers === null ? (
                <p className="gg-body mt-6">
                  Your answers aren&apos;t saved on this device.{' '}
                  <Link href="/landing/lead-quiz" className="underline underline-offset-2 hover:opacity-70">
                    Take the 60-second quiz
                  </Link>{' '}
                  for a roadmap tailored to you.
                </p>
              ) : null}
              <div className="mt-8">
                <PrimaryCta consult={false} tone="dark" />
              </div>
            </section>
          )}

          {/* 04 Alternatives to look into: options DMR doesn't offer */}
          <section id="alternatives" className="scroll-mt-28" aria-labelledby="alternatives-heading">
            <SectionHead n={4} title="Alternatives worth looking into" sub={`Other options agents at Stage ${stage.number} use.`} />
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[var(--color-ink-200)] bg-white px-5 py-4">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink-300)] text-[11px] font-semibold leading-none !text-[var(--gg-text-muted)]"
                aria-hidden
              >
                i
              </span>
              <p id="alternatives-heading" className="gg-body !text-sm !leading-relaxed !text-[var(--color-off-black)]">
                <span className="font-semibold">We don&apos;t offer or help with these.</span> We compiled them from industry research so
                you can look into them yourself. Tap any option for details. Costs are rough estimates, so confirm pricing before you commit.
              </p>
            </div>
            {/* Accordion: one scannable row per option (title + cost tag); details open on tap. */}
            <ol className="mt-5 list-none divide-y divide-[var(--color-ink-200)] overflow-hidden rounded-2xl border border-[var(--color-ink-200)] bg-white p-0">
              {alternatives.map((alt, i) => (
                <li key={alt.title}>
                  <details className="group" open={i === 0}>
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
          </section>
        </main>
      </div>

      {/* The system in under a minute, then who we work with and proof matched to the stage */}
      <SystemClip className="mt-20" />
      <div className="mt-20">
        <ClientLogosSlider />
      </div>
      <div className="mt-16">
        <StageProof slug={slug} />
      </div>
    </div>
  )
}
