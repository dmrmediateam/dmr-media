import type { ReactNode } from 'react'
import './google-general-landing.css'
import { channelLandingFaqJsonLd, channelLandingMetadata } from '@/lib/landing/channel-landing-metadata'
import { googleGeneralLandingConfig } from './google-general-landing-config'

export const metadata = channelLandingMetadata(googleGeneralLandingConfig)

const faqJsonLd = channelLandingFaqJsonLd(googleGeneralLandingConfig)

export default function GoogleGeneralLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  )
}
