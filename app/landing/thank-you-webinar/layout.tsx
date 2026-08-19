import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { landingThankYouRobots } from '@/app/landing/thank-you-robots-metadata'

export const metadata: Metadata = {
  ...landingThankYouRobots,
  title: 'Your Seat Is Saved | DMR Media',
  description: 'Webinar registration confirmed — check your email for how to add it to your calendar.',
}

export default function ThankYouWebinarLayout({ children }: { children: ReactNode }) {
  return children
}
