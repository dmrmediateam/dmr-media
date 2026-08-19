'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import WebinarFreeWebsiteSection from '@/components/landing/WebinarFreeWebsiteSection'
import WebinarLuxuryHero from '@/components/landing/WebinarLuxuryHero'
import { paidAdsWebinarLandingConfig } from './paid-ads-webinar-landing-config'

export default function PaidAdsWebinarLandingPage() {
  return (
    <>
      <ChannelLandingPageContent
        config={paidAdsWebinarLandingConfig}
        hero={<WebinarLuxuryHero />}
        showcase={<WebinarFreeWebsiteSection />}
      />
      <ApplyModal />
    </>
  )
}
