'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ClientLogosSlider from '@/components/ClientLogosSlider'
import CalInlineEmbed from '@/components/landing/CalInlineEmbed'
import { ChannelLandingHeader } from '@/components/landing/ChannelLandingPageContent'
import { ELFSIGHT_LANDING_HIDE_SELECTORS } from '@/lib/elfsight-widgets'
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
const primaryBtn = `inline-flex min-h-[60px] w-full items-center justify-center gap-2 rounded-full bg-[var(--color-off-black)] px-10 text-base font-semibold !text-white shadow-[0_16px_40px_-16px_rgba(15,15,15,0.6)] transition-transform hover:-translate-y-0.5 motion-reduce:transition-none sm:w-auto ${INTER}`

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
function PrimaryCta({ consult }: { consult: boolean }) {
  return consult ? (
    <button type="button" onClick={scrollToNextStep} className={primaryBtn}>
      Book a call <span aria-hidden className="!text-white">→</span>
    </button>
  ) : (
    <Link href="/landing/website-development" className={primaryBtn}>
      See our websites <span aria-hidden className="!text-white">→</span>
    </Link>
  )
}

function GuideLine({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm">
        <Image src={GUIDE.photo} alt="" fill sizes="40px" className="object-cover" />
      </div>
      <p className="gg-body text-left !text-xs !leading-snug !text-[var(--gg-text-muted)]">{text}</p>
    </div>
  )
}

/**
 * Quiz result, in the same style as the quiz page: the result and one clear
 * action up top, the roadmap with their stage highlighted, the recommendation,
 * then the booking step (stages 2-4) and proof.
 */
export default function QuizResult({ slug }: { slug: StageSlug }) {
  useHideSiteChrome()
  const stage = STAGES[slug]
  const consult = stage.offersConsultation
  useHideChatWidget(consult)

  // Answers live in sessionStorage; undefined until read, null when this page was opened directly.
  const [answers, setAnswers] = useState<QuizAnswers | null | undefined>(undefined)
  useEffect(() => {
    const a = readQuizAnswers()
    setAnswers(a && stageFor(a.volume) === slug ? a : null)
  }, [slug])

  const tailored = answers ? tailoredRecommendations(answers) : []

  return (
    <div className="google-general-landing min-h-screen bg-[var(--surface-base)] text-[var(--color-off-black)]">
      <ChannelLandingHeader applyLabel={consult ? 'Book a call' : 'See our websites'} onApply={consult ? scrollToNextStep : undefined} />

      <main className="px-4 pt-28 sm:px-6 sm:pt-36">
        {/* 1. The result, and the one action */}
        <section className="mx-auto max-w-2xl text-center" aria-labelledby="result-heading">
          {answers ? (
            <p className="gg-body mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-ink-200)] bg-white px-4 py-2 !text-sm font-medium !text-[var(--color-off-black)]">
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-off-black)] text-[10px] leading-none !text-white"
                aria-hidden
              >
                ✓
              </span>
              Additional resources sent to your email
            </p>
          ) : null}
          <p className="gg-eyebrow gg-eyebrow--strong">Your result · Stage {stage.number} of 4</p>
          <h1 id="result-heading" className="gg-display mt-4 text-[2.4rem] font-light leading-[1.06] tracking-tight sm:text-5xl md:text-[3.5rem]">
            You&apos;re in the <em className="italic">{stage.name}</em> stage.
          </h1>
          <p className="gg-body gg-body-lg mx-auto mt-5 max-w-xl">{stage.headline}</p>
          <div className="mt-9">
            <PrimaryCta consult={consult} />
          </div>
          <div className="mt-6">
            <GuideLine
              text={consult ? `A free 30-minute call with ${GUIDE.name}, founder of DMR Media` : `Your roadmap from ${GUIDE.name}, founder of DMR Media`}
            />
          </div>
        </section>

        {/* 2. Where they are on the roadmap */}
        <section className="mx-auto mt-16 max-w-5xl" aria-label="The four stages">
          <RoadmapGraphic current={slug} youAreHere />
        </section>

        {/* 3. The recommendation, ending in the same action */}
        <section
          className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[var(--color-off-black)] bg-white p-6 text-center shadow-[0_24px_60px_-36px_rgba(15,15,15,0.45)] sm:p-10"
          aria-labelledby="recommendation-heading"
        >
          <p className="gg-eyebrow">Our recommendation for Stage {stage.number}</p>
          <h2 id="recommendation-heading" className="gg-display mt-3 text-[1.9rem] font-light leading-[1.12] sm:text-[2.4rem]">
            {stage.recommend.title}
          </h2>
          <p className="gg-body mx-auto mt-4 max-w-xl !text-base !leading-relaxed sm:!text-[17px]">{stage.recommend.body}</p>
          <p className="gg-body mx-auto mt-6 max-w-xl border-t border-[var(--color-ink-200)] pt-5 !text-sm !leading-relaxed !text-[var(--gg-text-muted)]">
            <span className="font-semibold !text-[var(--color-off-black)]">We don&apos;t recommend: {stage.avoid.title}.</span> {stage.avoid.body}
          </p>
          <div className="mt-8">
            <PrimaryCta consult={consult} />
          </div>
        </section>

        {/* 4. The booking step (stages 2-4): what we'll cover beside the calendar */}
        {consult ? (
          <section id="hero-form" className="mx-auto mt-20 max-w-6xl scroll-mt-28" aria-labelledby="consult-heading">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.5fr)] lg:gap-10">
              <div className="lg:pt-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white ring-2 ring-[var(--color-off-black)] ring-offset-2 ring-offset-[var(--surface-base)]">
                    <Image src={GUIDE.photo} alt={GUIDE.name} fill sizes="56px" className="object-cover" />
                  </div>
                  <div>
                    <p className="gg-body !text-sm font-semibold !text-[var(--color-off-black)]">{GUIDE.name}</p>
                    <p className="gg-body !text-xs !text-[var(--gg-text-muted)]">{GUIDE.role}</p>
                  </div>
                </div>
                <p className="gg-eyebrow gg-eyebrow--strong mt-8">Book a call</p>
                <h2 id="consult-heading" className="gg-display mt-2 text-[2rem] font-light leading-[1.1] tracking-tight sm:text-[2.4rem]">
                  Your free lead consultation
                </h2>
                <p className="gg-body mt-3 !text-[15px] !leading-relaxed">
                  30 minutes on Google Meet. Pick a time and we&apos;ll come prepared with your Stage {stage.number} roadmap.
                </p>
                <p className="gg-body mt-7 !text-xs font-semibold uppercase tracking-[0.14em] !text-[var(--color-off-black)]">
                  We&apos;ll cover
                </p>
                <ul className="mt-3 list-none space-y-3 p-0">
                  {(tailored.length ? tailored.map((t) => t.title) : [stage.recommend.title, 'What to do first in your market', 'What it costs and what to expect']).map(
                    (line) => (
                      <li key={line} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)] text-[10px] leading-none !text-white"
                          aria-hidden
                        >
                          ✓
                        </span>
                        <span className="gg-body !text-[15px] !leading-snug !text-[var(--color-off-black)]">{line}</span>
                      </li>
                    ),
                  )}
                </ul>
                {answers ? <p className="gg-body mt-6 !text-sm !text-[var(--gg-text-muted)]">{readinessNote(answers.commitment)}</p> : null}
              </div>
              <div className="min-w-0">
                {answers !== undefined ? (
                  <CalInlineEmbed notes={answers ? answersSummary(answers) : undefined} />
                ) : (
                  <div className="min-h-[720px]" />
                )}
              </div>
            </div>
          </section>
        ) : (
          /* Stage 1: the tailored roadmap as a checklist, then the website step */
          <section id="hero-form" className="mx-auto mt-16 max-w-3xl scroll-mt-28" aria-labelledby="tailored-heading">
            <p className="gg-eyebrow text-center">Based on your answers</p>
            <h2 id="tailored-heading" className="gg-display mt-2 text-center text-[1.9rem] font-light leading-tight sm:text-4xl">
              Your roadmap
            </h2>
            {answers ? (
              <ol className="mt-7 list-none divide-y divide-[var(--color-ink-200)] rounded-2xl border border-[var(--color-ink-200)] bg-white p-0">
                {tailored.map((t, i) => (
                  <li key={t.title} className="flex gap-4 px-5 py-5 sm:px-7">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)] text-xs font-semibold !text-white"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="gg-body !text-base font-semibold !leading-snug !text-[var(--color-off-black)]">{t.title}</p>
                      <p className="gg-body mt-1 !text-[15px] !leading-relaxed">{t.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            ) : answers === null ? (
              <p className="gg-body mx-auto mt-5 max-w-xl text-center">
                Your answers aren&apos;t saved on this device.{' '}
                <Link href="/landing/lead-quiz" className="underline underline-offset-2 hover:opacity-70">
                  Take the 60-second quiz
                </Link>{' '}
                for a roadmap tailored to you.
              </p>
            ) : null}
            <div className="mt-10 text-center">
              <PrimaryCta consult={false} />
            </div>
          </section>
        )}
      </main>

      {/* 5. The system in under a minute, below the booking step so it backs it up */}
      <SystemClip className="mt-20" />

      {/* 6. Who we work with, then proof matched to the stage */}
      <div className="mt-20">
        <ClientLogosSlider />
      </div>
      <div className="mt-16">
        <StageProof slug={slug} />
      </div>
    </div>
  )
}
