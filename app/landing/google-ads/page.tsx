'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import ConversionLandingBody from '@/components/landing/conversion/ConversionLandingBody'
import GoogleAdsShowcase from './GoogleAdsShowcase'
import { googleAdsLandingConfig } from './google-ads-landing-config'

export default function GoogleAdsLandingPage() {
  return (
    <>
      <ChannelLandingPageContent
        config={googleAdsLandingConfig}
        body={<ConversionLandingBody config={googleAdsLandingConfig} showcase={<GoogleAdsShowcase />} />}
      />
      <ApplyModal />
    </>
  )
}
