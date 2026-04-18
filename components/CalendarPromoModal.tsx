'use client'

import { useCallback, useEffect, useState } from 'react'
import GrowthPartnerPromoCard from '@/components/GrowthPartnerPromoCard'

const DELAY_MS = 15_000

export default function CalendarPromoModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setOpen(true), DELAY_MS)
    return () => window.clearTimeout(id)
  }, [])

  const dismiss = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[rgba(15,15,15,0.45)] backdrop-blur-sm"
        onClick={dismiss}
        aria-label="Close"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="calendar-promo-heading"
        className="relative z-10 w-full max-w-[480px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center text-[var(--color-ink-400)] transition-colors hover:text-[var(--color-off-black)]"
          aria-label="Close dialog"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <GrowthPartnerPromoCard
          headingId="calendar-promo-heading"
          className="w-full"
          onPrimaryCtaClick={dismiss}
        />
      </div>
    </div>
  )
}
