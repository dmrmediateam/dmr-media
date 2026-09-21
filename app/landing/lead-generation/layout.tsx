import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../google-general/google-general-landing.css'
import { channelLandingMetadata } from '@/lib/landing/channel-landing-metadata'
import { leadGenerationLandingConfig } from './lead-generation-landing-config'

/** Paid-traffic Google Ads landing page, not for search or general crawling. */
export const metadata: Metadata = {
  ...channelLandingMetadata(leadGenerationLandingConfig),
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-image-preview': 'none',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function LeadGenerationLandingLayout({ children }: { children: ReactNode }) {
  return children
}
