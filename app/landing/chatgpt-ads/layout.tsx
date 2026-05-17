import type { ReactNode } from 'react'
import '../google-general/google-general-landing.css'
import { channelLandingFaqJsonLd, channelLandingMetadata } from '@/lib/landing/channel-landing-metadata'
import { chatgptAdsLandingConfig } from './chatgpt-ads-landing-config'

export const metadata = channelLandingMetadata(chatgptAdsLandingConfig)

const faqJsonLd = channelLandingFaqJsonLd(chatgptAdsLandingConfig)

export default function ChatgptAdsLandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  )
}
