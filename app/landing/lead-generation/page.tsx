'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import WebsiteShowcaseSection from '@/components/landing/WebsiteShowcaseSection'
import { leadGenerationLandingConfig } from './lead-generation-landing-config'

export default function LeadGenerationLandingPage() {
  return (
    <>
      <ChannelLandingPageContent
        config={leadGenerationLandingConfig}
        showcase={<WebsiteShowcaseSection />}
      />
      <ApplyModal />
    </>
  )
}
