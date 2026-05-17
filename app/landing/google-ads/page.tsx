'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import { googleAdsLandingConfig } from './google-ads-landing-config'

export default function GoogleAdsLandingPage() {
  return (
    <>
      <ChannelLandingPageContent config={googleAdsLandingConfig} />
      <ApplyModal />
    </>
  )
}
