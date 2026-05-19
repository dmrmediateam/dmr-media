'use client'

import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import type { ChannelLandingByTheNumbersSection as ByTheNumbersConfig } from '@/lib/landing/channel-landing-types'

type Props = {
  section: ByTheNumbersConfig
}

function SectionRule() {
  return <div className="mt-6 h-px w-full max-w-[4.5rem] bg-[var(--color-off-black)]/20" aria-hidden />
}

export default function ChannelLandingByTheNumbersSection({ section }: Props) {
  return (
    <section
      id="by-the-numbers"
      className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-16 md:py-20"
      aria-labelledby="by-the-numbers-heading"
    >
      <div className="container-max px-4 sm:px-6">
        <SeoReveal>
          <p className="gg-eyebrow">{section.eyebrow}</p>
          <h2
            id="by-the-numbers-heading"
            className="gg-display mt-3 max-w-2xl text-3xl font-light tracking-tight md:text-4xl"
          >
            {section.title}
          </h2>
          <SectionRule />
        </SeoReveal>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" role="list">
          {section.stats.map((stat, i) => (
            <SeoReveal key={stat.label} delay={i * 0.06}>
              <li className="list-none border-t border-[var(--color-ink-200)] pt-8 first:border-t-0 first:pt-0 sm:border-t-0 sm:pt-0 lg:border-t lg:pt-8 lg:first:border-t-0 lg:first:pt-0">
                <p className="gg-display text-2xl font-light leading-snug tracking-tight md:text-[1.75rem]">
                  {stat.value}
                </p>
                <p className="gg-body mt-3 max-w-xs">{stat.label}</p>
              </li>
            </SeoReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
