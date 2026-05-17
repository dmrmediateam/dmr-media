'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export type GoogleGeneralHeroProofSlide = {
  id: string
  teamName: string
  region: string
  highlight: string
  image: string
  imageAlt: string
}

const AUTO_MS = 5000

type GoogleGeneralHeroProofProps = {
  slides: GoogleGeneralHeroProofSlide[]
  className?: string
}

export default function GoogleGeneralHeroProof({ slides, className = '' }: GoogleGeneralHeroProofProps) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const n = slides.length
  const active = slides[index]!

  useEffect(() => {
    if (reduceMotion || n < 2) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % n), AUTO_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion, n])

  const transition = { duration: reduceMotion ? 0 : 0.35, ease: [0.25, 0.1, 0.25, 1] as const }

  return (
    <div
      className={`w-full max-w-lg ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Documented client SEO and Google Ads results"
    >
      <div className="overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_12px_40px_-16px_rgba(15,15,15,0.12)]">
        <div className="flex items-center justify-between border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] px-4 py-3 sm:px-5">
          <p className="font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">
            Documented results
          </p>
          <div className="flex gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Show ${s.teamName}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => setIndex(i)}
                className="flex h-6 w-6 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/20"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    i === index ? 'h-1.5 w-5 bg-[var(--color-off-black)]' : 'h-1.5 w-1.5 bg-[var(--color-ink-200)] hover:bg-[var(--color-ink-400)]'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="relative aspect-[4/3] w-full bg-[var(--surface-base)]">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={active.id}
                className="absolute inset-0"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
                transition={transition}
              >
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  className="object-contain object-center p-3 sm:p-4"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority={index === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div className="border-t border-[var(--color-ink-200)] px-4 py-4 sm:px-5 sm:py-5">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={active.id}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
                transition={transition}
              >
                <p className="font-serif text-xl font-light leading-snug tracking-tight text-[var(--color-off-black)] sm:text-2xl">
                  {active.highlight}
                </p>
                <p className="mt-2 font-serif text-sm text-[var(--color-ink-300)]">{active.teamName}</p>
                <p className="mt-0.5 font-serif text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)]">
                  {active.region}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
