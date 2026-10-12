'use client'

import Image from 'next/image'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import type { ChannelLandingCaseStudy } from '@/lib/landing/channel-landing-types'

const FEATURED_COUNT = 3

type Props = {
  studies: readonly ChannelLandingCaseStudy[]
  eyebrow?: string
  title?: string
}

function SectionRule() {
  return <div className="mt-6 h-px w-full max-w-[4.5rem] bg-[var(--color-off-black)]/20" aria-hidden />
}

export default function GoogleGeneralCaseStudies({
  studies,
  eyebrow = 'Proof',
  title = 'Case studies from luxury markets',
}: Props) {
  const featured = studies.slice(0, FEATURED_COUNT)

  return (
    <section
      id="case-studies"
      className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-20 md:py-28"
      aria-labelledby="case-studies-heading"
    >
      <div className="container-max px-4 sm:px-6">
        <SeoReveal>
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            <div className="min-w-0 flex-1">
              <p className="gg-eyebrow">{eyebrow}</p>
              <h2
                id="case-studies-heading"
                className="gg-display mt-3 max-w-2xl text-3xl font-light tracking-tight md:text-4xl"
              >
                {title}
              </h2>
            </div>
          </div>
          <SectionRule />
        </SeoReveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((study, i) => (
            <SeoReveal key={study.id} delay={i * 0.05} className="h-full">
              <li className="h-full list-none">
                <div
                  className="group flex h-full w-full flex-col overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] text-left shadow-[0_1px_0_rgba(15,15,15,0.04)]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[var(--color-ink-200)] bg-white">
                    <Image
                      src={study.image}
                      alt={study.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-off-black)]/50 via-transparent to-transparent"
                      aria-hidden
                    />
                    <span className="absolute left-4 top-4 z-[1] font-serif text-[10px] uppercase tracking-[0.18em] text-white drop-shadow-md">
                      {study.badge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="gg-eyebrow">{study.metric}</p>
                    <h3 className="gg-display mt-2 text-lg font-light leading-snug">{study.title}</h3>
                    <p className="gg-eyebrow mt-1 !text-xs">{study.region}</p>
                  </div>
                </div>
              </li>
            </SeoReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
