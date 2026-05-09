'use client'

import type { ReactNode } from 'react'

/** Primary white CTA on video-hero service landing pages (heavier type for readability). */
export const SEO_LANDING_HERO_PRIMARY_CTA_CLASSNAME =
  'inline-flex min-h-[52px] w-full max-w-xs items-center justify-center rounded-sm bg-white px-5 sm:px-10 font-serif text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[var(--color-off-black)] shadow-[0_4px_24px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-[0_8px_32px_rgba(0,0,0,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] motion-reduce:hover:translate-y-0 sm:w-auto sm:min-w-[12rem]'

type StickyProps = {
  onApply: () => void
  children: ReactNode
}

/** Fixed bottom-right duplicate of the hero primary CTA so the offer stays visible while scrolling. */
export function SeoLandingStickyPrimaryCta({ onApply, children }: StickyProps) {
  return (
    <div className="pointer-events-none fixed bottom-6 right-4 z-[80] sm:bottom-8 sm:right-6" role="presentation">
      <button
        type="button"
        onClick={onApply}
        className={`pointer-events-auto ${SEO_LANDING_HERO_PRIMARY_CTA_CLASSNAME} max-w-[min(21rem,calc(100vw-2rem))] border-2 border-white/95 shadow-[0_14px_48px_-4px_rgba(0,0,0,0.55),0_0_0_1px_rgba(15,15,15,0.12)]`}
      >
        {children}
      </button>
    </div>
  )
}
