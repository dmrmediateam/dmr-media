import type { ReactNode } from 'react'
import { landingThankYouRobots } from '@/app/landing/thank-you-robots-metadata'

export const metadata = landingThankYouRobots

export default function ThankYouQLayout({ children }: { children: ReactNode }) {
  return children
}
