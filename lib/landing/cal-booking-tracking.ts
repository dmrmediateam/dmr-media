/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Fires the Meta Pixel "Schedule" event when a Cal.com inline booking succeeds.
 * `content_name` is the Cal namespace (the event slug, e.g. "quiz-guidance",
 * "marketing-discussion", "2-week-trial") so Meta custom conversions can split
 * bookings by event type with an event-parameter rule. No personal data is sent.
 */
const trackedBookings = new Set<string>()

export function trackCalBookings(namespace: string) {
  const w = window as any
  w.Cal.ns[namespace]('on', {
    action: 'bookingSuccessfulV2',
    callback: (e: any) => {
      const uid: string | undefined = e?.detail?.data?.uid
      const key = uid ?? `${namespace}-${Date.now()}`
      if (trackedBookings.has(key)) return
      trackedBookings.add(key)

      w.fbq?.(
        'track',
        'Schedule',
        { content_name: namespace, content_category: 'cal_booking' },
        uid ? { eventID: `cal-${uid}` } : undefined
      )
    },
  })
}
