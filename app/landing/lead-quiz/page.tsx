'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'
import ClientLogosSlider from '@/components/ClientLogosSlider'
import { ChannelLandingHeader } from '@/components/landing/ChannelLandingPageContent'
import LeadQuiz from './LeadQuiz'
import QuizProof from './QuizProof'
import RoadmapGraphic from './RoadmapGraphic'
import SystemClip from './SystemClip'
import { useHideSiteChrome } from './useLandingChrome'

/** Quiz funnel: headline and one "Start the quiz" button that opens the quiz popup, then the stages and social proof. */
export default function LeadQuizPage() {
  useHideSiteChrome()
  const [open, setOpen] = useState(false)
  const start = useCallback(() => setOpen(true), [])
  const close = useCallback(() => setOpen(false), [])

  return (
    <div className="google-general-landing min-h-screen bg-[var(--surface-base)] text-[var(--color-off-black)]">
      <ChannelLandingHeader applyLabel="Take the quiz" onApply={start} />

      <main className="px-4 pt-28 sm:px-6 sm:pt-36">
        <section id="hero-form" className="mx-auto max-w-2xl scroll-mt-28 text-center">
          <p className="gg-eyebrow gg-eyebrow--strong">60-second quiz</p>
          <h1 className="gg-display mt-4 text-[2.4rem] font-light leading-[1.06] tracking-tight sm:text-5xl md:text-[3.5rem]">
            Where&apos;s your next <em className="italic">$10M in volume</em> coming from?
          </h1>
          <p className="gg-body gg-body-lg mx-auto mt-5 max-w-xl">
            Take the 60-second quiz to find out exactly where to focus in 2026.
          </p>

          <button
            type="button"
            onClick={start}
            className="mt-9 inline-flex min-h-[60px] w-full max-w-sm items-center justify-center gap-2 rounded-full bg-[var(--color-off-black)] px-10 ![font-family:var(--font-inter),ui-sans-serif,system-ui,sans-serif] text-base font-semibold !text-white shadow-[0_16px_40px_-16px_rgba(15,15,15,0.6)] [&_*]:![font-family:var(--font-inter),ui-sans-serif,system-ui,sans-serif] transition-transform hover:-translate-y-0.5 motion-reduce:transition-none sm:w-auto"
          >
            Start the quiz <span aria-hidden className="!text-white">→</span>
          </button>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm">
              <Image src="/images/team/andrew-rohm-avatar.webp" alt="" fill sizes="40px" className="object-cover" />
            </div>
            <p className="gg-body text-left !text-xs !leading-snug !text-[var(--gg-text-muted)]">
              8 quick questions with Andrew Rohm,
              <br />
              founder of DMR Media
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-5xl" aria-labelledby="stages-heading">
          <p id="stages-heading" className="gg-eyebrow text-center">
            The four stages we see agents in
          </p>
          <div className="mt-6">
            <RoadmapGraphic />
          </div>
        </section>
      </main>

      {/* The brokerages our clients work with, right under the roadmap */}
      <div className="mt-10">
        <ClientLogosSlider />
      </div>

      <SystemClip className="mt-20" />

      <div className="mt-20">
        <QuizProof onStart={start} />
      </div>

      <LeadQuiz open={open} onClose={close} />
    </div>
  )
}
