'use client'

import { useEffect, useRef } from 'react'
import { ELFSIGHT_LANDING_HIDE_SELECTORS } from '@/lib/elfsight-widgets'
import { readLandingLeadPrefill, toE164 } from '@/lib/landing/booking-prefill'

/* eslint-disable @typescript-eslint/no-explicit-any */

const CAL_NAMESPACE = 'marketing-discussion'
const CAL_ELEMENT_ID = 'my-cal-inline-marketing-discussion'

/** Qualified thank-you page: confirms the request and lets the lead book a call right away. */
export default function ThankYouBookingPage() {
  const calInitialized = useRef(false)

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

  // Cal.com inline embed: the official snippet, guarded against double-init in dev.
  useEffect(() => {
    if (calInitialized.current) return
    calInitialized.current = true

    const w = window as any
    ;(function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar)
      }
      const d = C.document
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal
          const ar = arguments
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            d.head.appendChild(d.createElement('script')).src = A
            cal.loaded = true
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments)
            }
            const namespace = ar[1]
            api.q = api.q || []
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api
              p(cal.ns[namespace], ar)
              p(cal, ['initNamespace', namespace])
            } else p(cal, ar)
            return
          }
          p(cal, ar)
        }
    })(w, 'https://app.cal.com/embed/embed.js', 'init')

    w.Cal('init', CAL_NAMESPACE, { origin: 'https://app.cal.com' })
    w.Cal.config = w.Cal.config || {}
    w.Cal.config.forwardQueryParams = true

    // Prefill the booking form with what the lead just entered on the landing page.
    const lead = readLandingLeadPrefill()
    const prefill = Object.fromEntries(
      Object.entries({
        name: lead?.name,
        email: lead?.email,
        attendeePhoneNumber: toE164(lead?.phone),
        notes: lead?.website && lead.website !== 'https://' ? `Website: ${lead.website}` : undefined,
      }).filter(([, value]) => Boolean(value))
    )

    w.Cal.ns[CAL_NAMESPACE]('inline', {
      elementOrSelector: `#${CAL_ELEMENT_ID}`,
      config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true', theme: 'light', ...prefill },
      calLink: 'andrew-rohm/marketing-discussion',
    })

    w.Cal.ns[CAL_NAMESPACE]('ui', { theme: 'light', hideEventTypeDetails: false, layout: 'month_view' })
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

        <div id={CAL_ELEMENT_ID} style={{ width: '100%', height: '100%', overflow: 'auto' }} className="mx-auto mt-8 min-h-[720px] max-w-5xl" />
      </section>
    </main>
  )
}
