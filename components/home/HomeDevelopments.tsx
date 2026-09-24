'use client'

import Image from 'next/image'
import Link from 'next/link'
import '@/app/landing/google-general/google-general-landing.css'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import { DEVELOPMENTS } from '@/app/luxury-development-marketing/DevelopmentProofSection'

/**
 * Homepage proof for the development side of the business: each project as a photo with its
 * mark, and the partner's own review beside it. Data is shared with /luxury-development-marketing.
 */
export default function HomeDevelopments() {
  return (
    <section
      id="developments"
      aria-labelledby="home-developments-heading"
      className="google-general-landing scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y,theme(spacing.20))] md:py-[var(--seo-section-y,theme(spacing.28))]"
    >
      <div className="container-max px-4 sm:px-6">
        <SeoReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="gg-eyebrow">Developments we market</p>
              <h2
                id="home-developments-heading"
                className="gg-display mt-3 max-w-2xl text-3xl font-light tracking-tight md:text-4xl"
              >
                The developments we&rsquo;ve worked with, and what they say
              </h2>
            </div>
            <Link
              href="/luxury-development-marketing"
              className="gg-eyebrow gg-eyebrow--strong inline-flex items-center gap-2 self-start border-b border-[var(--color-off-black)]/40 pb-1 transition-colors hover:border-[var(--color-off-black)] md:self-auto"
            >
              How we market developments
              <span aria-hidden>→</span>
            </Link>
          </div>
        </SeoReveal>

        <ul className="mt-14 grid list-none gap-10 md:mt-16 md:grid-cols-2 md:gap-8 lg:gap-12" role="list">
          {DEVELOPMENTS.map((dev, i) => (
            <li key={dev.name} className="list-none">
              <SeoReveal delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[var(--color-off-black)]">
                    <Image
                      src={dev.image}
                      alt={dev.imageAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                      aria-hidden
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={dev.logo} alt={dev.logoAlt} className={`w-auto ${dev.logoHeightClass}`} />
                      <span className="gg-eyebrow !text-[10px] !text-white/80">{dev.services}</span>
                    </div>
                  </div>

                  <blockquote className="mt-7 flex flex-1 flex-col">
                    <p className="font-serif text-lg font-light leading-relaxed text-[var(--color-off-black)] md:text-xl">
                      &ldquo;{dev.quote}&rdquo;
                    </p>
                    <footer className="mt-auto border-t border-[var(--color-ink-200)] pt-5">
                      <p className="font-serif text-base text-[var(--color-off-black)]">{dev.attribution}</p>
                      <p className="gg-eyebrow mt-1 !text-xs">
                        {dev.name} · {dev.source}
                      </p>
                    </footer>
                  </blockquote>
                </article>
              </SeoReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
