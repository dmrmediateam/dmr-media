import type { ReactNode } from 'react'
import '../google-general/google-general-landing.css'
import { channelLandingFaqJsonLd, channelLandingMetadata } from '@/lib/landing/channel-landing-metadata'
import { quitPortalsTeamLandingConfig } from './quit-portals-team-landing-config'

export const metadata = channelLandingMetadata(quitPortalsTeamLandingConfig)

const faqJsonLd = channelLandingFaqJsonLd(quitPortalsTeamLandingConfig)

export default function QuitPortalsTeamLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  )
}
