'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import LeadGenBody, { LeadsHero } from './LeadGenBody'
import { leadGenerationLandingConfig } from './lead-generation-landing-config'

export default function LeadGenerationLandingPage() {
  return (
    <>
      <ChannelLandingPageContent
        config={leadGenerationLandingConfig}
        heroVisual={<LeadsHero />}
        body={<LeadGenBody config={leadGenerationLandingConfig} />}
      />
      <ApplyModal />
    </>
  )
}
