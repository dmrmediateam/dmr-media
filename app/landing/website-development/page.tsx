'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import WebsiteDevBody, { LaptopHero } from './WebsiteDevBody'
import { websiteDevelopmentLandingConfig } from './website-development-landing-config'

export default function WebsiteDevelopmentLandingPage() {
  return (
    <>
      <ChannelLandingPageContent
        config={websiteDevelopmentLandingConfig}
        heroVisual={<LaptopHero />}
        body={<WebsiteDevBody config={websiteDevelopmentLandingConfig} />}
      />
      <ApplyModal />
    </>
  )
}
