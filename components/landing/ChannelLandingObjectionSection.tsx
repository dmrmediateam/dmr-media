'use client'

import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import type { ChannelLandingObjectionSection as ObjectionSectionConfig } from '@/lib/landing/channel-landing-types'

type Props = {
  section: ObjectionSectionConfig
}

function SectionRule() {
  return <div className="mt-6 h-px w-full max-w-[4.5rem] bg-[var(--color-off-black)]/20" aria-hidden />
}

export default function ChannelLandingObjectionSection({ section }: Props) {
  return (
    <section
      id="why-ads-failed"
      className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-20 md:py-28"
      aria-labelledby="objection-section-heading"
    >
      <div className="container-max px-4 sm:px-6">
        <SeoReveal>
          <p className="gg-eyebrow">{section.eyebrow}</p>
          <h2
            id="objection-section-heading"
            className="gg-display mt-3 max-w-3xl text-3xl font-light tracking-tight md:text-4xl"
          >
            {section.title}
          </h2>
          <SectionRule />
          <p className="gg-body gg-body-lg mt-6 max-w-2xl">{section.intro}</p>
        </SeoReveal>

        {section.layout === 'cards' ? (
          <ul className="mt-14 grid gap-5 md:grid-cols-2" role="list">
            {section.items.map((item, i) => (
              <SeoReveal key={item.title} delay={(i % 2) * 0.06} className="h-full">
                <li className="flex h-full list-none flex-col rounded-2xl border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6 shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-shadow duration-300 hover:shadow-[0_18px_44px_-24px_rgba(15,15,15,0.25)] md:p-8">
                  <h3 className="gg-display text-2xl font-light">{item.title}</h3>
                  <p className="gg-body gg-body-sm mt-3 text-[var(--gg-text-muted)]">{item.problem}</p>
                  <div className="mt-5 border-t border-[var(--color-ink-200)] pt-5">
                    <p className="gg-eyebrow gg-eyebrow--strong">{section.fixLabel ?? 'How we fix it'}</p>
                    <p className="gg-body mt-2">{item.fix}</p>
                  </div>
                </li>
              </SeoReveal>
            ))}
          </ul>
        ) : (
        <ul className="mt-14 space-y-0" role="list">
          {section.items.map((item, i) => (
            <SeoReveal key={item.title} delay={i * 0.06}>
              <li className="list-none border-t border-[var(--color-ink-200)] py-8 first:border-t-0 first:pt-0 md:py-10">
                <article className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div>
                    <h3 className="gg-display text-xl font-light md:text-2xl">{item.title}</h3>
                    <p className="gg-body mt-3 max-w-xl text-[var(--gg-text-muted)]">{item.problem}</p>
                  </div>
                  <div className="border-l-0 border-[var(--color-ink-200)] pl-0 lg:border-l lg:pl-10">
                    <p className="gg-eyebrow gg-eyebrow--strong">{section.fixLabel ?? 'How we fix it'}</p>
                    <p className="gg-body mt-3 max-w-xl">{item.fix}</p>
                  </div>
                </article>
              </li>
            </SeoReveal>
          ))}
        </ul>
        )}
      </div>
    </section>
  )
}
