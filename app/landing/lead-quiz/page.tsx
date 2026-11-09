'use client'

import { ChannelLandingHeader } from '@/components/landing/ChannelLandingPageContent'
import { STAGES, STAGE_ORDER } from '@/lib/landing/lead-quiz'
import LeadQuiz from './LeadQuiz'
import QuizProof from './QuizProof'
import { useHideSiteChrome } from './useLandingChrome'

/** Quiz funnel: headline, the quiz itself, the four stages it sorts agents into, then social proof. */
export default function LeadQuizPage() {
  useHideSiteChrome()

  return (
    <div className="google-general-landing min-h-screen bg-[var(--surface-base)] text-[var(--color-off-black)]">
      <ChannelLandingHeader applyLabel="Take the quiz" />

      <main className="container-max px-4 pt-28 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="gg-eyebrow gg-eyebrow--strong">60-second quiz</p>
          <h1 className="gg-display mt-4 text-[2.3rem] font-light leading-[1.06] tracking-tight sm:text-5xl md:text-[3.4rem]">
            Where&apos;s your next <em className="italic">$10M in volume</em> coming from?
          </h1>
          <p className="gg-body gg-body-lg mx-auto mt-5 max-w-xl">
            Take the 60-second quiz to find out exactly where to focus in 2026.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <LeadQuiz />
        </div>

        <section className="mx-auto mt-16 max-w-4xl" aria-labelledby="stages-heading">
          <p id="stages-heading" className="gg-eyebrow text-center">
            The four stages we see agents in
          </p>
          <ol className="mt-6 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {STAGE_ORDER.map((slug) => {
              const s = STAGES[slug]
              return (
                <li key={slug} className="rounded-2xl border border-[var(--color-ink-200)] bg-white p-5">
                  <p className="gg-eyebrow">Stage {s.number}</p>
                  <p className="gg-display mt-2 text-xl font-light">{s.name}</p>
                  <p className="gg-body mt-1 !text-xs !text-[var(--gg-text-muted)]">{s.phase}</p>
                </li>
              )
            })}
          </ol>
        </section>
      </main>

      <div className="mt-20">
        <QuizProof />
      </div>
    </div>
  )
}
