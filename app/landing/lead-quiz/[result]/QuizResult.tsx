'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import CalInlineEmbed from '@/components/landing/CalInlineEmbed'
import { ChannelLandingHeader } from '@/components/landing/ChannelLandingPageContent'
import { ELFSIGHT_LANDING_HIDE_SELECTORS } from '@/lib/elfsight-widgets'
import {
  STAGES,
  STAGE_ORDER,
  answersSummary,
  readQuizAnswers,
  readinessNote,
  stageFor,
  tailoredRecommendations,
  type QuizAnswers,
  type StageSlug,
} from '@/lib/landing/lead-quiz'
import { useHideSiteChrome } from '../useLandingChrome'
import StageProof from './StageProof'

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

/**
 * Quiz result: one clear recommendation, then the next step right under it
 * (the consultation calendar, or for Stage 1 our websites), then the tailored
 * checklist and social proof.
 */
export default function QuizResult({ slug }: { slug: StageSlug }) {
  useHideSiteChrome()
  const stage = STAGES[slug]
  useHideChatWidget(stage.offersConsultation)

  // Answers live in sessionStorage; undefined until read, null when this page was opened directly.
  const [answers, setAnswers] = useState<QuizAnswers | null | undefined>(undefined)
  useEffect(() => {
    const a = readQuizAnswers()
    setAnswers(a && stageFor(a.volume) === slug ? a : null)
  }, [slug])

  const tailored = answers ? tailoredRecommendations(answers) : []

  return (
    <div className="google-general-landing min-h-screen bg-[var(--surface-base)] text-[var(--color-off-black)]">
      <ChannelLandingHeader applyLabel={stage.offersConsultation ? 'Book my consultation' : 'See our websites'} />

      <main className="px-4 pt-28 sm:px-6 sm:pt-32">
        {/* 1. The result */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="gg-eyebrow gg-eyebrow--strong">Your result · Stage {stage.number} of 4</p>
          <h1 className="gg-display mt-3 text-[2.25rem] font-light leading-[1.08] tracking-tight sm:text-5xl">
            You&apos;re in the <em className="italic">{stage.name}</em> stage.
          </h1>
          <p className="gg-body gg-body-lg mx-auto mt-3 max-w-xl">{stage.headline}</p>

          <ol className="mx-auto mt-7 grid max-w-xl list-none grid-cols-4 gap-2 p-0" aria-label="The four stages">
            {STAGE_ORDER.map((s) => {
              const st = STAGES[s]
              const current = s === slug
              return (
                <li key={s} aria-current={current ? 'step' : undefined}>
                  <div
                    className={`h-1.5 rounded-full ${current ? 'bg-[var(--color-off-black)]' : 'bg-[var(--color-ink-200)]'}`}
                    aria-hidden
                  />
                  <p
                    className={`gg-body mt-2 !text-[11px] !leading-tight sm:!text-xs ${
                      current ? 'font-semibold !text-[var(--color-off-black)]' : '!text-[var(--gg-text-muted)]'
                    }`}
                  >
                    {st.name}
                    {current ? <span className="sr-only"> (you are here)</span> : null}
                  </p>
                </li>
              )
            })}
          </ol>
        </header>

        {/* 2. The recommendation */}
        <section
          className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[var(--color-off-black)] bg-white p-6 shadow-[0_24px_60px_-36px_rgba(15,15,15,0.45)] sm:p-9"
          aria-labelledby="recommendation-heading"
        >
          <p className="gg-eyebrow">Our recommendation</p>
          <h2 id="recommendation-heading" className="gg-display mt-2 text-[1.75rem] font-light leading-[1.15] sm:text-[2.1rem]">
            {stage.recommend.title}
          </h2>
          <p className="gg-body mt-3 !text-base !leading-relaxed sm:!text-[17px]">{stage.recommend.body}</p>
          <p className="gg-body mt-6 border-t border-[var(--color-ink-200)] pt-5 !text-sm !leading-relaxed !text-[var(--gg-text-muted)]">
            <span className="font-semibold !text-[var(--color-off-black)]">We don&apos;t recommend: {stage.avoid.title}.</span>{' '}
            {stage.avoid.body}
          </p>
        </section>

        {/* 3. The next step, right under the recommendation */}
        {stage.offersConsultation ? (
          <section id="hero-form" className="mx-auto mt-12 max-w-5xl scroll-mt-28" aria-labelledby="consult-heading">
            <div className="mx-auto max-w-2xl text-center">
              <p className="gg-eyebrow gg-eyebrow--strong">Next step</p>
              <h2 id="consult-heading" className="gg-display mt-2 text-[2rem] font-light leading-[1.1] tracking-tight sm:text-[2.6rem]">
                Book your free lead consultation
              </h2>
              <p className="gg-body gg-body-lg mt-3">
                A free 30-minute Google Meet. We&apos;ll map this plan to your market and show you what to do first.
              </p>
            </div>
            {answers !== undefined ? (
              <CalInlineEmbed notes={answers ? answersSummary(answers) : undefined} className="mt-4" />
            ) : (
              <div className="mt-4 min-h-[720px]" />
            )}
          </section>
        ) : (
          <section
            id="hero-form"
            className="mx-auto mt-12 max-w-3xl scroll-mt-28 text-center"
            aria-labelledby="next-heading"
          >
            <p className="gg-eyebrow gg-eyebrow--strong">Next step</p>
            <h2 id="next-heading" className="gg-display mt-2 text-[2rem] font-light leading-[1.1] tracking-tight sm:text-[2.6rem]">
              Start with your website
            </h2>
            <p className="gg-body gg-body-lg mx-auto mt-3 max-w-xl">
              See the award-nominated sites we build for agents, with pricing and examples for your market.
            </p>
            <Link
              href="/landing/website-development"
              className="mt-7 inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-[var(--color-off-black)] px-10 font-sans text-base font-semibold !text-white transition-opacity hover:opacity-90"
            >
              See our websites <span aria-hidden>→</span>
            </Link>
          </section>
        )}

        {/* 4. The tailored checklist */}
        <section className="mx-auto mt-16 max-w-3xl" aria-labelledby="tailored-heading">
          <p className="gg-eyebrow text-center">Based on your answers</p>
          <h2 id="tailored-heading" className="gg-display mt-2 text-center text-[1.75rem] font-light leading-tight sm:text-3xl">
            Your roadmap
          </h2>
          {answers ? (
            <>
              <ol className="mt-7 list-none divide-y divide-[var(--color-ink-200)] rounded-2xl border border-[var(--color-ink-200)] bg-white p-0">
                {tailored.map((t, i) => (
                  <li key={t.title} className="flex gap-4 px-5 py-5 sm:px-7">
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)] font-sans text-xs font-semibold !text-white"
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
              <p className="gg-body mt-5 text-center !text-sm">{readinessNote(answers.commitment)}</p>
            </>
          ) : answers === null ? (
            <p className="gg-body mx-auto mt-5 max-w-xl text-center">
              Your answers aren&apos;t saved on this device.{' '}
              <Link href="/landing/lead-quiz" className="underline underline-offset-2 hover:opacity-70">
                Take the 60-second quiz
              </Link>{' '}
              for a roadmap tailored to you.
            </p>
          ) : null}
        </section>
      </main>

      {/* 5. Social proof, matched to the stage */}
      <div className="mt-20">
        <StageProof slug={slug} />
      </div>
    </div>
  )
}
