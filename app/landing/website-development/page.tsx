'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import ConversionLandingBody from '@/components/landing/conversion/ConversionLandingBody'
import WebsiteDevShowcase from './WebsiteDevShowcase'
import { websiteDevelopmentLandingConfig } from './website-development-landing-config'

export default function WebsiteDevelopmentLandingPage() {
  return (
    <>
      <ChannelLandingPageContent
        config={websiteDevelopmentLandingConfig}
        body={<ConversionLandingBody config={websiteDevelopmentLandingConfig} showcase={<WebsiteDevShowcase />} />}
      />
      <ApplyModal />
    </>
  )
}
