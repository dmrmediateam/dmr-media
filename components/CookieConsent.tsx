'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'dmr-cookie-consent'

/** Simple cookie notice — bottom right, accept to dismiss, remembered in localStorage. */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === 'accepted') return
    } catch {
      // Storage unavailable (private mode etc.) — still show the notice.
    }
    const timer = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted')
    } catch {
      // Ignore storage failures — the notice still dismisses for this visit.
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-[70] flex items-center gap-3 border-t border-[var(--color-ink-200)] bg-white px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-16px_rgba(15,15,15,0.3)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:block sm:max-w-sm sm:rounded-lg sm:border sm:p-5 sm:shadow-[0_16px_48px_-16px_rgba(15,15,15,0.3)]"
    >
      <p className="flex-1 font-serif text-[12px] leading-snug text-[var(--color-ink-300)] sm:text-sm sm:leading-relaxed">
        We use cookies to run this site, improve your experience, and measure our marketing. See our{' '}
        <Link href="/privacy-policy" className="text-[var(--color-off-black)] underline underline-offset-2 hover:opacity-70">
          Privacy Policy
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={accept}
        className="inline-flex min-h-[40px] shrink-0 items-center px-5 sm:mt-4 sm:min-h-[42px] sm:w-full justify-center rounded-lg bg-[var(--color-off-black)] font-serif sm:px-6 text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-[var(--color-off-black)]/88 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 focus-visible:ring-offset-2"
      >
        Accept
      </button>
    </div>
  )
}
