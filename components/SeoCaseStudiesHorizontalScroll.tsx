'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import SeoCarouselArrows from '@/components/SeoCarouselArrows'
import SeoCaseStudyCard, { type SeoCaseStudyTemplate } from '@/components/SeoCaseStudyCard'
import { useSeoHorizontalCardScroll } from '@/components/useSeoHorizontalCardScroll'

const SCROLL_CARDS: SeoCaseStudyTemplate[] = [
  {
    id: 'willow-brook-realty',
    href: '/case-study/willow-brook-realty',
    image: '/images/Cities/NewHampshire.jpg',
    imageAlt: 'Willow Brook case study results',
    badge: 'Vermont Realtor of the Year',
    metric: '2 Clients / 3 Weeks',
    title: 'Willow Brook Realty',
    description:
      'From zero visibility to 46 leads and 2 new clients in 3 weeks. Built a complete inbound foundation with local SEO, Google Business Profile optimization, and targeted ads across Vermont and New Hampshire.',
    variant: 'compact',
  },
  {
    id: 'jade-legendary-real-estate',
    href: '/case-study/jade-legendary-real-estate',
    image: '/images/Cities/LakeGeneva.jpg',
    imageAlt: 'Legendary Real Estate case study results',
    badge: 'Wisconsin Realtor of the Year',
    metric: '3x Lead Generation',
    title: 'Legendary Real Estate Services',
    description:
      'Tripled the inbound pipeline in 90 days. 42 content assets rebuilt, 12-hour automation velocity, and a ranking system built to own the Geneva Lakes luxury market.',
    variant: 'compact',
  },
  {
    id: 'marquis-farwell-group',
    href: '/case-study/marquis-farwell-group',
    image: '/images/Cities/Sonoma.jpg',
    imageAlt: 'Marquis & Farwell case study results',
    badge: 'Luxury Realtor in Sonoma',
    metric: '19x Daily Clicks',
    title: 'Marquis + Farwell Group',
    description:
      'Transformed organic visibility in Sonoma County, growing from 2 clicks per day to 38, generating qualified buyer leads directly from search.',
    variant: 'compact',
  },
  {
    id: 'eagan-luxury-real-estate',
    href: '/case-study/eagan-luxury-real-estate',
    image: '/images/Cities/Stpet.jpg',
    imageAlt: 'Eagan Luxury Real Estate, St. Petersburg, Florida',
    badge: '#1 Realtor in Dolphin Cay, FL',
    metric: '$11,075,000 Closed Volume, Q1 2026',
    title: 'Eagan Luxury Real Estate',
    description:
      'Starting from zero organic traffic, we built the brand, dominated search, and layered in Google Ads. Eagan Luxury closed $11,075,000 in Q1 2026, the quarter immediately after launch. Daily impressions: 0 to 812. Cost per home valuation lead: $36.93.',
    variant: 'compact',
  },
]

function SectionRule({ align = 'left' }: { align?: 'left' | 'center' }) {
  return (
    <div
      className={`mt-5 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent sm:w-20 ${align === 'center' ? 'mx-auto' : ''}`}
      aria-hidden
    />
  )
}

export type SeoCaseStudiesHorizontalScrollProps = {
  /** Defaults to “Client results” */
  eyebrow?: string
  title?: string
  description?: ReactNode
  /** Accessible name for the section */
  ariaLabel?: string
}

export default function SeoCaseStudiesHorizontalScroll({
  eyebrow = 'Client results',
  title,
  description,
  ariaLabel = 'Client case studies',
}: SeoCaseStudiesHorizontalScrollProps) {
  const { scrollerRef, atStart, atEnd, scrollByCard } = useSeoHorizontalCardScroll()

  return (
    <section
      className="border-b border-[var(--color-ink-200)] bg-white pb-14 pt-8 md:pb-16 md:pt-10"
      aria-label={ariaLabel}
    >
      <div className="container-max mb-6 md:mb-8">
        <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">{eyebrow}</p>
        {title ? (
          <>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              {title}
            </h2>
            <SectionRule />
            {description ? (
              <div className="mt-6 max-w-2xl font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
                {description}
              </div>
            ) : null}
          </>
        ) : null}
      </div>

      <div className="container-max">
        <div className="relative">
          <div
            ref={scrollerRef}
            className="-mx-4 overflow-x-auto overflow-y-visible overscroll-x-contain scroll-smooth px-4 pb-2 [scrollbar-width:thin] md:-mx-6 md:px-6 lg:-mx-8 lg:px-8"
          >
            <ul className="flex w-max snap-x snap-mandatory gap-5 md:gap-6" role="list">
              {SCROLL_CARDS.map((study) => (
                <SeoCaseStudyCard key={study.id} study={study} />
              ))}
            </ul>
          </div>

          <SeoCarouselArrows
            atStart={atStart}
            atEnd={atEnd}
            onPrev={() => scrollByCard(-1)}
            onNext={() => scrollByCard(1)}
            prevAriaLabel="Previous case study"
            nextAriaLabel="Next case study"
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] transition-opacity hover:opacity-60"
          >
            View all success stories
          </Link>
        </div>
      </div>
    </section>
  )
}
