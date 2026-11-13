'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import CalInlineEmbed from '@/components/landing/CalInlineEmbed'
import { ChannelLandingHeader } from '@/components/landing/ChannelLandingPageContent'
import { ELFSIGHT_LANDING_HIDE_SELECTORS } from '@/lib/elfsight-widgets'
import {
  STAGES,
  STAGE_STEPS,
  answersSummary,
  readQuizAnswers,
  readQuizPlan,
  stageFor,
  type QuizAnswers,
  type QuizPlan,
  type StageSlug,
} from '@/lib/landing/lead-quiz'
import { StageIcon } from '../RoadmapGraphic'
import { useHideSiteChrome } from '../useLandingChrome'
import StageProof from './StageProof'

const INTER = '![font-family:var(--font-inter),ui-sans-serif,system-ui,sans-serif] [&_*]:![font-family:var(--font-inter),ui-sans-serif,system-ui,sans-serif]'
const lightBtn = `inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-white px-9 text-base font-semibold !text-[var(--color-off-black)] transition-transform hover:-translate-y-0.5 motion-reduce:transition-none sm:w-auto ${INTER}`
const LABEL = `gg-body !text-xs font-semibold uppercase tracking-[0.14em] ${INTER}`

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

function scrollToBook() {
  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * The quiz result, kept deliberately simple (one narrow column, after Mobbin's
 * Origin "forecast is ready" and Ramp "four simple steps" layouts):
 * stage, where you are, what to do next, what not to do, four steps, a disclaimer, the next
 * step tied to their commitment score, then social proof.
 * "What to do" / "what not to do" / steps are written by Gemini from their
 * answers at submit (lib/landing/lead-quiz-ai.ts), with standard text as the
 * fallback. Stage 1 never offers a call.
 */
export default function QuizResult({ slug }: { slug: StageSlug }) {
  useHideSiteChrome()
  const stage = STAGES[slug]
  const consult = stage.offersConsultation
  useHideChatWidget(consult)

  // Answers live in sessionStorage; undefined until read, null when this page was opened directly.
  const [answers, setAnswers] = useState<QuizAnswers | null | undefined>(undefined)
  const [plan, setPlan] = useState<QuizPlan | null>(null)
  useEffect(() => {
    const a = readQuizAnswers()
    const matches = !!a && stageFor(a.volume) === slug
    setAnswers(matches ? a : null)
    setPlan(matches ? readQuizPlan() : null)
  }, [slug])

  const whereYouAre = plan?.whereYouAre || stage.summary
  const whatToDo = plan?.whatToDo || stage.recommend.body
  const whatNotToDo = plan?.whatNotToDo || `${stage.avoid.title}. ${stage.avoid.body}`
  const steps = plan?.steps?.length ? plan.steps : STAGE_STEPS[slug]

  return (
    <div className="google-general-landing min-h-screen bg-[var(--surface-base)] text-[var(--color-off-black)]">
      <ChannelLandingHeader applyLabel={consult ? 'Book a call' : 'See our websites'} onApply={consult ? scrollToBook : undefined} />

      <main className="mx-auto max-w-2xl px-4 pb-16 pt-28 sm:px-6 sm:pt-36">
        {/* Stage */}
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)] !text-white">
            <StageIcon slug={slug} className="h-5 w-5" />
          </span>
          <p className={`${LABEL} !text-[var(--gg-text-muted)]`}>
            Your result · Stage {stage.number} of 4{plan ? ' · Written for your 8 answers' : ''}
          </p>
        </div>
        <h1 className="gg-display mt-5 text-[2.75rem] font-light leading-[1.04] tracking-tight sm:text-6xl">
          Stage {stage.number}: <em className="italic">{stage.name}</em>
        </h1>
        <p className="gg-body mt-3 !text-lg !text-[var(--gg-text-muted)]">{stage.phase}</p>

        {/* Where you are */}
        <section className="mt-10 border-t border-[var(--color-ink-200)] pt-6" aria-labelledby="where-heading">
          <h2 id="where-heading" className={`${LABEL} !text-[var(--gg-text-muted)]`}>
            Where you are
          </h2>
          <p className="gg-body mt-3 !text-[17px] !leading-relaxed !text-[var(--color-off-black)]">{whereYouAre}</p>
        </section>

        {/* What to do next */}
        <section className="mt-8 rounded-3xl border border-[var(--color-off-black)] bg-white p-6 sm:p-8" aria-labelledby="todo-heading">
          <h2 id="todo-heading" className={`${LABEL} !text-[var(--color-off-black)]`}>
            What to do next
          </h2>
          <p className="gg-body mt-3 !text-[17px] !leading-relaxed !text-[var(--color-off-black)]">{whatToDo}</p>
                  </section>

        {/* What not to do */}
        <section className="mt-4 rounded-3xl border border-[var(--color-ink-200)] bg-[#f6efe9] p-6 sm:p-8" aria-labelledby="nottodo-heading">
          <h2 id="nottodo-heading" className={`${LABEL} !text-[#7a2e0e]`}>
            What not to do
          </h2>
          <p className="gg-body mt-3 !text-[17px] !leading-relaxed !text-[var(--color-off-black)]">{whatNotToDo}</p>
        </section>

        {/* Steps */}
        <section className="mt-14" aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="gg-display text-[2rem] font-light leading-tight tracking-tight">
            Your next {steps.length} steps
          </h2>
          <ol className="mt-6 list-none border-t border-[var(--color-ink-200)] p-0">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5 border-b border-[var(--color-ink-200)] py-6">
                <span className="gg-body flex h-8 shrink-0 items-center rounded-md border border-[var(--color-ink-300)] px-2 !text-xs font-semibold !text-[var(--color-off-black)]">
                  Step {i + 1}
                </span>
                <div>
                  <p className="gg-body !text-[17px] font-semibold !leading-snug !text-[var(--color-off-black)]">{step.title}</p>
                  <p className="gg-body mt-1 !text-[15px] !leading-relaxed !text-[var(--gg-text-muted)]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Disclaimer */}
        <p className="gg-body mt-8 !text-xs !leading-relaxed !text-[var(--gg-text-muted)]">
          Disclaimer: This plan is general guidance based on your quiz answers, partly written by AI. It isn&apos;t a guarantee of results, and costs and
          timelines vary by market. Use your own judgment, and follow your brokerage, MLS and Fair Housing rules.
        </p>
      </main>

      {/* Next step, tied to their commitment score */}
      <section id="book" className="scroll-mt-20 bg-[var(--color-off-black)] px-4 py-16 sm:px-6 sm:py-20">
        <div className={`mx-auto ${consult ? 'max-w-4xl' : 'max-w-2xl'}`}>
          <div className="mx-auto max-w-2xl">
            {consult ? (
              <>
                {answers ? <p className="gg-body !text-lg font-semibold !text-white">You said you&apos;re {answers.commitment} out of 10 committed.</p> : null}
                <p className="gg-body mt-3 !text-lg !leading-relaxed !text-white/70">
                  A vast majority of serious agents said they are 5 or more committed to talking to our team of experts to get the best course of action
                  possible.
                </p>
                <h2 className="gg-display mt-6 text-[2.2rem] font-light leading-[1.1] tracking-tight !text-white sm:text-5xl">
                  When would be a good time to connect you with <em className="italic !text-white">one of our team experts?</em>
                </h2>
              </>
            ) : (
              <>
                {answers ? <p className="gg-body !text-lg !text-white/70">You said you were {answers.commitment}/10 committed to making the change.</p> : null}
                <h2 className="gg-display mt-3 text-[2.2rem] font-light leading-[1.1] tracking-tight !text-white sm:text-5xl">
                  The easiest next step is <em className="italic !text-white">a website built to win listings.</em>
                </h2>
                <div className="mt-8">
                  <Link href="/landing/website-development" className={lightBtn}>
                    See our websites <span aria-hidden className="!text-[var(--color-off-black)]">→</span>
                  </Link>
                </div>
              </>
            )}
          </div>
          {consult ? (
            <div className="mt-6 overflow-hidden rounded-3xl bg-white p-2 sm:p-4">
              {answers !== undefined ? <CalInlineEmbed calLink="andrew-rohm/quiz-guidance" notes={answers ? answersSummary(answers) : undefined} /> : <div className="min-h-[720px]" />}
            </div>
          ) : null}
        </div>
      </section>

      {/* Social proof */}
      <div className="pt-16">
        <StageProof slug={slug} />
      </div>
    </div>
  )
}
