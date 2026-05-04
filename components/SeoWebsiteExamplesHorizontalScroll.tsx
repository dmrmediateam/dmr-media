'use client'

import Link from 'next/link'
import SeoCarouselArrows from '@/components/SeoCarouselArrows'
import SeoWebsiteExampleCard from '@/components/SeoWebsiteExampleCard'
import { websiteExamplesForSeo } from '@/app/seo-optimization/seo-data'
import { useSeoHorizontalCardScroll } from '@/components/useSeoHorizontalCardScroll'

const INTRO = {
  seo: {
    kicker: 'Design + search',
    title: 'Sites built to rank, and to look like the leader you already are.',
    body: (
      <>
        SEO without a credible site is pressure without leverage. Here is how we pair brand-grade presentation with
        architectures buyers and bots both trust. See the full portfolio on{' '}
        <Link href="/real-estate-agent-website-samples" className="underline underline-offset-2 hover:opacity-70">
          real estate website examples
        </Link>
        .
      </>
    ),
  },
  ads: {
    kicker: 'Design + conversion',
    title: 'Landings that keep the promise your ads make.',
    body: (
      <>
        Ads without a credible onsite story leak trust at the click. Here is how we pair brand-grade presentation with
        layouts buyers complete on mobile. See the full portfolio on{' '}
        <Link href="/real-estate-agent-website-samples" className="underline underline-offset-2 hover:opacity-70">
          real estate website examples
        </Link>
        .
      </>
    ),
  },
  about: {
    kicker: 'Our Websites',
    title: 'Sample sites',
    body: (
      <>
        Live agent, team, and listing experiences we&apos;ve designed and shipped. Explore the full portfolio on{' '}
        <Link href="/real-estate-agent-website-samples" className="underline underline-offset-2 hover:opacity-70">
          real estate website examples
        </Link>
        .
      </>
    ),
  },
} as const

type SeoWebsiteExamplesHorizontalScrollProps = {
  /** Defaults to SEO page copy. */
  variant?: keyof typeof INTRO
  /** Override section id (default: websites) */
  sectionId?: string
}

/** Horizontal portfolio strip; matches case-study carousel UX. */
export default function SeoWebsiteExamplesHorizontalScroll({
  variant = 'seo',
  sectionId = 'websites',
}: SeoWebsiteExamplesHorizontalScrollProps) {
  const { scrollerRef, atStart, atEnd, scrollByCard } = useSeoHorizontalCardScroll()
  const intro = INTRO[variant]

  return (
    <section
      className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]"
      id={sectionId}
      aria-label="Website design examples"
    >
      <div className="container-max mb-8 md:mb-10">
        <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">{intro.kicker}</p>
        <h2 className="mt-2 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
          {intro.title}
        </h2>
        <div className="mt-6 h-[2px] w-72 max-w-full bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)] to-transparent" />
        <p className="mt-6 max-w-2xl font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{intro.body}</p>
      </div>

      <div className="container-max">
        <div className="relative">
          <div
            ref={scrollerRef}
            className="-mx-4 overflow-x-auto overflow-y-visible overscroll-x-contain scroll-smooth px-4 pb-2 [scrollbar-width:thin] md:-mx-6 md:px-6 lg:-mx-8 lg:px-8"
          >
            <ul className="flex w-max snap-x snap-mandatory gap-5 md:gap-6" role="list">
              {websiteExamplesForSeo.map((site) => (
                <SeoWebsiteExampleCard key={site.id} site={site} />
              ))}
            </ul>
          </div>

          <SeoCarouselArrows
            atStart={atStart}
            atEnd={atEnd}
            onPrev={() => scrollByCard(-1)}
            onNext={() => scrollByCard(1)}
            prevAriaLabel="Previous website example"
            nextAriaLabel="Next website example"
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/real-estate-agent-website-samples"
            className="inline-flex items-center font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] transition-opacity hover:opacity-60"
          >
            View full portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
