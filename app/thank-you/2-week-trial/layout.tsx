import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { landingThankYouRobots } from '@/app/landing/thank-you-robots-metadata'

export const metadata: Metadata = {
  ...landingThankYouRobots,
  title: 'Claim Your 2-Week Trial | DMR Media',
  description: 'Book your kickoff call and let us run your Google Ads for two weeks — free — to prove it works.',
}

export default function TwoWeekTrialLayout({ children }: { children: ReactNode }) {
  return children
}
