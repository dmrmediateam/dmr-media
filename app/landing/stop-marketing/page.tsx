'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import { stopMarketingLandingConfig } from './stop-marketing-landing-config'

export default function StopMarketingLandingPage() {
  return (
    <>
      <ChannelLandingPageContent config={stopMarketingLandingConfig} />
      <ApplyModal />
    </>
  )
}
