import type { ReactNode } from 'react'
import '../google-general/google-general-landing.css'
import { channelLandingFaqJsonLd, channelLandingMetadata } from '@/lib/landing/channel-landing-metadata'
import { seoLandingConfig } from './seo-landing-config'

export const metadata = channelLandingMetadata(seoLandingConfig)

const faqJsonLd = channelLandingFaqJsonLd(seoLandingConfig)

export default function SeoLandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  )
}
