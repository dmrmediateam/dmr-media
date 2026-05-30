'use client'

import { useEffect } from 'react'

const DELAY_MS = 15_000
const PROMO_FORM_NAME = 'site-promo-modal'

export default function CalendarPromoModal() {
  useEffect(() => {
    const id = window.setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent('openApplyModal', { detail: { formName: PROMO_FORM_NAME } })
      )
    }, DELAY_MS)
    return () => window.clearTimeout(id)
  }, [])

  return null
}
