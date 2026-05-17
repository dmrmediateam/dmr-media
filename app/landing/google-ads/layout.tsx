import type { ReactNode } from 'react'
import '../google-general/google-general-landing.css'
import { channelLandingFaqJsonLd, channelLandingMetadata } from '@/lib/landing/channel-landing-metadata'
import { googleAdsLandingConfig } from './google-ads-landing-config'

export const metadata = channelLandingMetadata(googleAdsLandingConfig)

const faqJsonLd = channelLandingFaqJsonLd(googleAdsLandingConfig)

export default function GoogleAdsLandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  )
}
