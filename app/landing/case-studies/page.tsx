'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import { caseStudiesLandingConfig } from './case-studies-landing-config'

export default function CaseStudiesLandingPage() {
  return (
    <>
      <ChannelLandingPageContent config={caseStudiesLandingConfig} />
      <ApplyModal />
    </>
  )
}
