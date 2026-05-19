'use client'

import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import type { ChannelLandingTimelineSection as TimelineSectionConfig } from '@/lib/landing/channel-landing-types'

type Props = {
  section: TimelineSectionConfig
}

function SectionRule() {
  return <div className="mt-6 h-px w-full max-w-[4.5rem] bg-[var(--color-off-black)]/20" aria-hidden />
}

export default function ChannelLandingTimelineSection({ section }: Props) {
  return (
    <section
      id="first-30-days"
      className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-20 md:py-28"
      aria-labelledby="timeline-section-heading"
    >
      <div className="container-max px-4 sm:px-6">
        <SeoReveal>
          <p className="gg-eyebrow">{section.eyebrow}</p>
          <h2
            id="timeline-section-heading"
            className="gg-display mt-3 max-w-3xl text-3xl font-light tracking-tight md:text-4xl"
          >
            {section.title}
          </h2>
          <SectionRule />
          <p className="gg-body gg-body-lg mt-6 max-w-2xl">{section.intro}</p>
        </SeoReveal>

        <ol className="gg-timeline mt-14 space-y-0" role="list">
          {section.weeks.map((week, i) => (
            <SeoReveal key={week.label} delay={i * 0.07}>
              <li className="gg-timeline__step list-none border-t border-[var(--color-ink-200)] py-8 first:border-t-0 first:pt-0 md:py-10">
                <article className="grid gap-4 md:grid-cols-[7.5rem_minmax(0,1fr)] md:gap-10 lg:gap-14">
                  <p className="gg-eyebrow gg-eyebrow--strong !text-xs md:pt-1">{week.label}</p>
                  <div>
                    <h3 className="gg-display text-xl font-light md:text-2xl">{week.title}</h3>
                    <p className="gg-body mt-3 max-w-2xl">{week.body}</p>
                  </div>
                </article>
              </li>
            </SeoReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
