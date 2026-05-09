'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export type SeoHeroCaseStudySlide = {
  id: string
  href: string
  teamName: string
  region: string
  highlight: string
  image: string
  imageAlt: string
}

const DEFAULT_SLIDES: SeoHeroCaseStudySlide[] = [
  {
    id: 'marquis-farwell-group',
    href: '/case-study/marquis-farwell-group',
    teamName: 'Marquis + Farwell Group',
    region: 'Sonoma County, CA',
    highlight: '19× daily organic clicks',
    image: '/images/MarquisFarwellGoogleSearchConsole.png',
    imageAlt: 'Google Search Console growth for Marquis + Farwell luxury real estate',
  },
  {
    id: 'eagan-luxury-real-estate',
    href: '/case-study/eagan-luxury-real-estate',
    teamName: 'Eagan Luxury Real Estate',
    region: 'St. Petersburg, FL',
    highlight: '$11M+ closed volume, Q1 2026',
    image: '/images/EaganCaseStudy/GoogleSearchConsole.png',
    imageAlt: 'Organic visibility growth for Eagan Luxury Real Estate',
  },
  {
    id: 'jade-legendary-real-estate',
    href: '/case-study/jade-legendary-real-estate',
    teamName: 'Legendary Real Estate Services',
    region: 'Lake Geneva, WI',
    highlight: '3× inbound pipeline in 90 days',
    image: '/images/LegendaryRealEstateCaseSTudy/SEMRUSHTraffic.png',
    imageAlt: 'Semrush traffic trend for Legendary Real Estate Services',
  },
]

const AUTO_MS = 5600

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

const arrowOuter =
  'pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[#141414]/85 text-white shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-200 hover:border-white/45 hover:bg-[#1a1a1a] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 md:h-12 md:w-12'

type SeoHeroCaseStudyShowcaseProps = {
  slides?: SeoHeroCaseStudySlide[]
  className?: string
  /** Accessible name for the carousel region (e.g. lead gen vs. SEO). */
  ariaLabel?: string
}

function BrowserChrome({ tabLabel }: { tabLabel: string }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-black/[0.06] bg-gradient-to-b from-[#ececec] to-[#e2e2e2] px-3 py-2.5 sm:px-3.5">
      <div className="flex shrink-0 gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] shadow-sm ring-1 ring-black/[0.04]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] shadow-sm ring-1 ring-black/[0.04]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] shadow-sm ring-1 ring-black/[0.04]" />
      </div>
      <div className="min-w-0 flex-1 truncate rounded-md border border-black/[0.05] bg-white px-3 py-1.5 text-center font-sans text-[10px] font-medium tracking-wide text-neutral-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:text-[11px]">
        <span className="text-neutral-400">dmrmedia.org</span>
        <span className="text-neutral-300"> · </span>
        <span className="text-neutral-600">{tabLabel}</span>
      </div>
    </div>
  )
}

export default function SeoHeroCaseStudyShowcase({
  slides = DEFAULT_SLIDES,
  className = '',
  ariaLabel = 'Client SEO performance demos',
}: SeoHeroCaseStudyShowcaseProps) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = slides.length
  const active = slides[index]!

  const goPrev = () => setIndex((i) => (i - 1 + n) % n)
  const goNext = () => setIndex((i) => (i + 1) % n)

  useEffect(() => {
    if (reduceMotion || paused || n < 2) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % n)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [paused, reduceMotion, n])

  const imageTransition = { duration: reduceMotion ? 0 : 0.42, ease: [0.25, 0.1, 0.25, 1] as const }
  const copyTransition = { duration: reduceMotion ? 0 : 0.32, ease: [0.25, 0.1, 0.25, 1] as const }

  const shortTitle =
    active.teamName.length > 28 ? `${active.teamName.slice(0, 26)}…` : active.teamName

  return (
    <div
      className={`relative w-full max-w-md lg:max-w-xl ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="relative px-3 sm:px-5"
        animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <button type="button" className={`${arrowOuter} absolute left-0 top-[42%] z-20 -translate-y-1/2`} onClick={goPrev} aria-label="Previous demo">
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button type="button" className={`${arrowOuter} absolute right-0 top-[42%] z-20 -translate-y-1/2`} onClick={goNext} aria-label="Next demo">
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        <div className="relative mx-auto max-w-[min(100%,420px)] overflow-hidden rounded-xl bg-[#d8d8d8] p-[3px] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.12)_inset] ring-1 ring-black/20 sm:max-w-[460px] lg:max-w-[480px]">
          <div className="overflow-hidden rounded-[10px] bg-white">
            <BrowserChrome tabLabel={shortTitle} />

            <div className="relative aspect-[4/3] w-full bg-neutral-50">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={active.id}
                  className="absolute inset-0"
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.995 }}
                  transition={imageTransition}
                >
                  <Image
                    src={active.image}
                    alt={active.imageAlt}
                    fill
                    className="object-contain object-center p-2 sm:p-3"
                    sizes="(max-width: 768px) 100vw, 480px"
                    priority={index === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="border-t border-black/[0.06] bg-white px-4 py-3.5 sm:px-5 sm:py-4">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={active.id}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                  transition={copyTransition}
                >
                  <p className="font-serif text-lg font-light leading-snug tracking-tight text-[var(--color-off-black)] sm:text-xl">
                    {active.highlight}
                  </p>
                  <p className="mt-1.5 font-serif text-[13px] text-neutral-600 sm:text-sm">{active.teamName}</p>
                  <p className="mt-0.5 font-serif text-[10px] uppercase tracking-[0.2em] text-neutral-400">{active.region}</p>
                </motion.div>
              </AnimatePresence>

              <nav className="mt-3 flex justify-center gap-2" aria-label="Demo slides">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    aria-label={`Show ${s.teamName}`}
                    aria-current={i === index ? 'true' : undefined}
                    onClick={() => setIndex(i)}
                    className="group flex h-5 min-w-[1.25rem] items-center justify-center px-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/20 focus-visible:ring-offset-2 rounded-full"
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ease-out ${
                        i === index ? 'h-1.5 w-7 bg-[var(--color-off-black)]' : 'h-1.5 w-1.5 bg-neutral-300 group-hover:bg-neutral-500'
                      }`}
                    />
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  )
}
