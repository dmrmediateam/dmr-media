'use client'

import { useEffect } from 'react'
import CalInlineEmbed from '@/components/landing/CalInlineEmbed'
import { ELFSIGHT_LANDING_HIDE_SELECTORS } from '@/lib/elfsight-widgets'

/** Qualified thank-you page: confirms the request and lets the lead book a call right away. */
export default function ThankYouBookingPage() {
  // Keep the AI chat widget from covering the calendar.
  useEffect(() => {
    const hideElfsightWidgets = () => {
      ELFSIGHT_LANDING_HIDE_SELECTORS.forEach((selector) => {
        try {
          document.querySelectorAll(selector).forEach((el) => {
            ;(el as HTMLElement).style.display = 'none'
          })
        } catch {}
      })
    }
    hideElfsightWidgets()
    const observer = new MutationObserver(hideElfsightWidgets)
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-[var(--surface-base)]">
      <section className="px-4 pb-20 pt-16 sm:px-6 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center rounded-full border border-[var(--color-ink-200)] bg-white px-5 py-2.5 font-serif text-[10px] uppercase tracking-[0.24em] text-[var(--color-ink-400)] sm:text-[11px]">
            Thank you, your request is in
          </p>
          <h1 className="font-serif text-3xl font-light leading-[1.1] tracking-tight text-[var(--color-off-black)] sm:text-4xl md:text-5xl">
            Talk 1:1 with our team as early as today
          </h1>
        </div>

        <CalInlineEmbed className="mx-auto mt-8 max-w-5xl" />
      </section>
    </main>
  )
}
