import type { ReactNode } from 'react'
import '../google-general/google-general-landing.css'
import { channelLandingFaqJsonLd, channelLandingMetadata } from '@/lib/landing/channel-landing-metadata'
import { caseStudiesLandingConfig } from './case-studies-landing-config'

export const metadata = channelLandingMetadata(caseStudiesLandingConfig)

const faqJsonLd = channelLandingFaqJsonLd(caseStudiesLandingConfig)

export default function CaseStudiesLandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  )
}
