'use client'

import { useEffect, useRef } from 'react'
import { trackGoogleAdsLandingPageConversion } from '@/lib/utmTracking'

/**
 * Fires the Google Ads "/Landing Page Conversion" event once on page load.
 * Renders nothing; drop it on a qualified thank-you page only.
 */
export default function GoogleAdsLandingPageConversion() {
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true
    trackGoogleAdsLandingPageConversion()
  }, [])

  return null
}
