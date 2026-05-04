'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import SeoCaseStudyCard, { type SeoCaseStudyTemplate } from '@/components/SeoCaseStudyCard'

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
      'Transformed organic visibility in Sonoma County, growing from 2 clicks per day to 38 — generating qualified buyer leads directly from search.',
    variant: 'compact',
  },
  {
    id: 'eagan-luxury-real-estate',
    href: '/case-study/eagan-luxury-real-estate',
    image: '/images/Cities/Stpet.jpg',
    imageAlt: 'Eagan Luxury Real Estate — St. Petersburg, Florida',
    badge: '#1 Realtor in Dolphin Cay, FL',
    metric: '$11,075,000 Closed Volume — Q1 2026',
    title: 'Eagan Luxury Real Estate',
    description:
      'Starting from zero organic traffic, we built the brand, dominated search, and layered in Google Ads. Eagan Luxury closed $11,075,000 in Q1 2026 — the quarter immediately after launch. Daily impressions: 0 to 812. Cost per home valuation lead: $36.93.',
    quote:
      'Andrew was great to work with on setting up new Real Estate website and getting everything linked and functional. He was always willing to listen and help guide us through the process to get what we considered to be the best outcome. We highly recommend him.',
    quoteAttribution: '— William Breaden, Eagan Luxury Real Estate',
    variant: 'featured',
  },
]

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
    </svg>
  )
}

export default function SeoCaseStudiesHorizontalScroll() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const syncScrollEdges = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const left = el.scrollLeft
    setAtStart(left <= 2)
    setAtEnd(max <= 2 || left >= max - 2)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    syncScrollEdges()
    el.addEventListener('scroll', syncScrollEdges, { passive: true })
    const ro = new ResizeObserver(syncScrollEdges)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', syncScrollEdges)
      ro.disconnect()
    }
  }, [syncScrollEdges])

  const activeIndex = useCallback(() => {
    const scroller = scrollerRef.current
    const items = scroller?.querySelectorAll<HTMLLIElement>(':scope > ul > li')
    if (!scroller || !items?.length) return 0
    const ul = items[0].parentElement as HTMLElement
    const slop = 16
    let idx = 0
    for (let i = 0; i < items.length; i++) {
      const leftEdge = items[i].offsetLeft + ul.offsetLeft
      if (leftEdge <= scroller.scrollLeft + slop) idx = i
    }
    return idx
  }, [])

  const scrollByCard = useCallback(
    (direction: 1 | -1) => {
      const scroller = scrollerRef.current
      const items = scroller?.querySelectorAll<HTMLLIElement>(':scope > ul > li')
      if (!scroller || !items?.length) return
      const idx = activeIndex()
      const next = Math.min(Math.max(0, idx + direction), items.length - 1)
      items[next].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    },
    [activeIndex],
  )

  return (
    <section className="border-b border-[var(--color-ink-200)] bg-white pb-14 pt-8 md:pb-16 md:pt-10" aria-label="Client case studies">
      <div className="container-max mb-6 md:mb-8">
        <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Client results</p>
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

          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-[1] flex items-center justify-between px-0 md:px-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-14 bg-gradient-to-r from-white via-white/80 to-transparent md:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-14 bg-gradient-to-l from-white via-white/80 to-transparent md:w-20" />
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Previous case study"
              className="pointer-events-auto relative z-[2] ml-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink-200)] bg-white/95 text-[var(--color-off-black)] shadow-md backdrop-blur-sm transition-all duration-200 hover:border-[var(--color-off-black)]/20 hover:bg-white disabled:pointer-events-none disabled:opacity-30 md:ml-1 md:h-12 md:w-12"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Next case study"
              className="pointer-events-auto relative z-[2] mr-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink-200)] bg-white/95 text-[var(--color-off-black)] shadow-md backdrop-blur-sm transition-all duration-200 hover:border-[var(--color-off-black)]/20 hover:bg-white disabled:pointer-events-none disabled:opacity-30 md:mr-1 md:h-12 md:w-12"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
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
