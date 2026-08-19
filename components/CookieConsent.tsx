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
      className="fixed bottom-4 left-4 right-4 z-[70] rounded-lg border border-[var(--color-ink-200)] bg-white p-5 shadow-[0_16px_48px_-16px_rgba(15,15,15,0.3)] sm:left-auto sm:right-5 sm:bottom-5 sm:max-w-sm"
    >
      <p className="font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
        We use cookies to run this site, improve your experience, and measure our marketing. See our{' '}
        <Link href="/privacy-policy" className="text-[var(--color-off-black)] underline underline-offset-2 hover:opacity-70">
          Privacy Policy
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={accept}
        className="mt-4 inline-flex min-h-[42px] w-full items-center justify-center rounded-lg bg-[var(--color-off-black)] px-6 font-serif text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-[var(--color-off-black)]/88 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 focus-visible:ring-offset-2"
      >
        Accept
      </button>
    </div>
  )
}
