'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import MarketingAgencyBody, { AgencyHero } from './MarketingAgencyBody'
import { marketingAgencyLandingConfig } from './marketing-agency-landing-config'

export default function MarketingAgencyLandingPage() {
  return (
    <>
      <ChannelLandingPageContent
        config={marketingAgencyLandingConfig}
        heroVisual={<AgencyHero />}
        body={<MarketingAgencyBody config={marketingAgencyLandingConfig} />}
      />
      <ApplyModal />
    </>
  )
}
