'use client'

import ApplyModal from '@/components/ApplyModal'
import ChannelLandingPageContent from '@/components/landing/ChannelLandingPageContent'
import { quitPortalsTeamLandingConfig } from './quit-portals-team-landing-config'

export default function QuitPortalsTeamLandingPage() {
  return (
    <>
      <ChannelLandingPageContent config={quitPortalsTeamLandingConfig} />
      <ApplyModal />
    </>
  )
}
