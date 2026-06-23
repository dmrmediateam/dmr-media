import type { ReactNode } from 'react'
import '../google-general/google-general-landing.css'
import { channelLandingFaqJsonLd, channelLandingMetadata } from '@/lib/landing/channel-landing-metadata'
import { ourGuarenteeLandingConfig } from './our-guarentee-landing-config'

export const metadata = channelLandingMetadata(ourGuarenteeLandingConfig)

const faqJsonLd = channelLandingFaqJsonLd(ourGuarenteeLandingConfig)

export default function OurGuarenteeLandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  )
}
