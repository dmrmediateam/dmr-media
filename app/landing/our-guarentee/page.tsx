'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import { ourGuarenteeLandingConfig } from './our-guarentee-landing-config'

export default function OurGuarenteeLandingPage() {
  return (
    <>
      <ChannelLandingPageContent config={ourGuarenteeLandingConfig} />
      <ApplyModal />
    </>
  )
}
