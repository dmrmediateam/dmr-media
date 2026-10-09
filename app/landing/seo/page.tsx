'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import ConversionLandingBody from '@/components/landing/conversion/ConversionLandingBody'
import SeoShowcase from './SeoShowcase'
import { seoLandingConfig } from './seo-landing-config'

export default function SeoLandingPage() {
  return (
    <>
      <ChannelLandingPageContent
        config={seoLandingConfig}
        body={<ConversionLandingBody config={seoLandingConfig} showcase={<SeoShowcase />} />}
      />
      <ApplyModal />
    </>
  )
}
