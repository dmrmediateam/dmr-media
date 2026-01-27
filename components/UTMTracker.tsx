'use client'

import { useEffect } from 'react'
import { initUTMTracking } from '@/lib/utmTracking'

export default function UTMTracker() {
  useEffect(() => {
    initUTMTracking()
  }, [])

  return null // This component doesn't render anything
}
