'use client'

import Image from 'next/image'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'

type DevelopmentProof = {
  name: string
  services: string
  image: string
  imageAlt: string
  logo: string
  logoAlt: string
  logoHeightClass: string
  quote: string
  attribution: string
  source: string
}

const DEVELOPMENTS: DevelopmentProof[] = [
  {
    name: 'Black Coast Estates',
    services: 'SEO & Paid Ads',
    image: '/images/developments/black-coast-development.jpg',
    imageAlt: 'Luxury residence interior at Black Coast Estates',
    logo: '/images/developments/black-coast-logo-white.png',
    logoAlt: 'Black Coast Estates',
    logoHeightClass: 'h-6 sm:h-7',
    quote:
      'We’ve been working with DMR Media to help us with our luxury real estate projects SEO and have been impressed by how proactive and helpful they have been as they have gotten our websites optimization to a much better place. They have never been hesitant to walk through things and help us understand what they are doing and why, and have clearly shown the progress we are making and we are very happy with the results.',
    attribution: 'Seth Barber, Partner, Black Coast Estates',
    source: '5-star Google review',
  },
  {
    name: 'Zenith MKE',
    services: 'Paid Ads',
    image: '/images/developments/zenith-development.jpg',
    imageAlt: 'The Zenith tower development in Milwaukee at dusk',
    logo: '/images/developments/zenith-frg-logo-white.png',
    logoAlt: 'Zenith and FRG',
    logoHeightClass: 'h-6 sm:h-7',
    quote:
      'Andrew and his team have been great to work with. Enthusiastic, knowledgeable, and quick to respond. It feels like a true partnership, as they are as invested in our success as we are!',
    attribution: 'Sarah Vogelsang, Operations Lead, FRG (representing Zenith)',
    source: '5-star Trustpilot review',
  },
]

/** Development-specific proof: the projects we market, with their partners' own words. */
export default function DevelopmentProofSection() {
  return (
    <section
      className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]"
      id="developments"
      aria-labelledby="dev-proof-heading"
    >
      <div className="container-max">
        <SeoReveal>
          <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
            Developments we market
          </p>
          <h2
            id="dev-proof-heading"
            className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl"
          >
            Real projects, and their partners&apos; own words
          </h2>
          <div
            className="mt-5 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent sm:w-20"
            aria-hidden
          />
        </SeoReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {DEVELOPMENTS.map((dev, i) => (
            <SeoReveal key={dev.name} delay={i * 0.06} className="h-full">
              <article className="group relative flex h-full min-h-[480px] flex-col overflow-hidden rounded-2xl shadow-[0_16px_48px_-16px_rgba(15,15,15,0.35)] ring-1 ring-black/10 sm:min-h-[520px]">
                <Image
                  src={dev.image}
                  alt={dev.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30"
                  aria-hidden
                />

                <div className="relative flex flex-1 flex-col p-7 md:p-9">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={dev.logo} alt={dev.logoAlt} className={`w-auto ${dev.logoHeightClass}`} />
                      <span className="font-serif text-sm font-light text-white/50" aria-hidden>
                        ×
                      </span>
                      <span className="font-serif text-lg tracking-[0.08em] text-white">DMR</span>
                    </div>
                    <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 font-serif text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                      {dev.services}
                    </span>
                  </div>

                  <blockquote className="mt-auto pt-10">
                    <div className="text-sm tracking-[0.18em] text-white" aria-label="5 out of 5 stars">
                      ★★★★★
                    </div>
                    <p className="mt-3 font-serif text-sm italic leading-relaxed text-white/90 md:text-[15px]">
                      &ldquo;{dev.quote}&rdquo;
                    </p>
                    <footer className="mt-4 font-serif text-sm text-white/60">
                      <span className="font-medium text-white">{dev.attribution}</span>
                      <span className="mx-2">&middot;</span>
                      {dev.source}
                    </footer>
                  </blockquote>
                </div>
              </article>
            </SeoReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
