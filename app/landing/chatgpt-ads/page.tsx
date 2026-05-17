'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import { chatgptAdsLandingConfig } from './chatgpt-ads-landing-config'

export default function ChatgptAdsLandingPage() {
  return (
    <>
      <ChannelLandingPageContent config={chatgptAdsLandingConfig} />
      <ApplyModal />
    </>
  )
}
