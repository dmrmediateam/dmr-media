'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import { seoLandingConfig } from './seo-landing-config'

export default function SeoLandingPage() {
  return (
    <>
      <ChannelLandingPageContent config={seoLandingConfig} />
      <ApplyModal />
    </>
  )
}
