'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import WebsiteShowcaseSection from '@/components/landing/WebsiteShowcaseSection'
import { websiteDevelopmentLandingConfig } from './website-development-landing-config'

export default function WebsiteDevelopmentLandingPage() {
  return (
    <>
      <ChannelLandingPageContent
        config={websiteDevelopmentLandingConfig}
        showcase={<WebsiteShowcaseSection />}
      />
      <ApplyModal />
    </>
  )
}
