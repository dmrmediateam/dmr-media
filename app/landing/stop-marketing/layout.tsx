import type { ReactNode } from 'react'
import '../google-general/google-general-landing.css'
import { channelLandingFaqJsonLd, channelLandingMetadata } from '@/lib/landing/channel-landing-metadata'
import { stopMarketingLandingConfig } from './stop-marketing-landing-config'

export const metadata = channelLandingMetadata(stopMarketingLandingConfig)

const faqJsonLd = channelLandingFaqJsonLd(stopMarketingLandingConfig)

export default function StopMarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  )
}
