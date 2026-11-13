'use client'

import { useEffect, useRef } from 'react'
import { readLandingLeadPrefill, toE164 } from '@/lib/landing/booking-prefill'

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Cal.com inline booking, prefilled with what the lead just entered on a
 * /landing form (sessionStorage, never the URL). `calLink` picks the event
 * (default "marketing-discussion"; the quiz results use "quiz-guidance").
 * `notes` replaces the default "Website: …" note, e.g. with quiz results.
 */
export default function CalInlineEmbed({
  notes,
  className = '',
  calLink = 'andrew-rohm/marketing-discussion',
}: {
  notes?: string
  className?: string
  calLink?: string
}) {
  const calInitialized = useRef(false)
  const CAL_NAMESPACE = calLink.split('/').pop() || 'marketing-discussion'
  const CAL_ELEMENT_ID = `my-cal-inline-${CAL_NAMESPACE}`

  // The official snippet, guarded against double-init in dev.
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
    const websiteNote = lead?.website && lead.website !== 'https://' ? `Website: ${lead.website}` : undefined
    const prefill = Object.fromEntries(
      Object.entries({
        name: lead?.name,
        email: lead?.email,
        attendeePhoneNumber: toE164(lead?.phone),
        notes: notes ?? websiteNote,
      }).filter(([, value]) => Boolean(value))
    )

    w.Cal.ns[CAL_NAMESPACE]('inline', {
      elementOrSelector: `#${CAL_ELEMENT_ID}`,
      config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true', theme: 'light', ...prefill },
      calLink,
    })

    w.Cal.ns[CAL_NAMESPACE]('ui', { theme: 'light', hideEventTypeDetails: false, layout: 'month_view' })
  }, [notes, calLink, CAL_NAMESPACE, CAL_ELEMENT_ID])

  return <div id={CAL_ELEMENT_ID} style={{ width: '100%', height: '100%', overflow: 'auto' }} className={`min-h-[720px] ${className}`} />
}
