import type { Metadata } from 'next'
import type { ReactNode } from 'react'

/** Paid-traffic Google Ads landing page — not for search or general crawling. */
export const metadata: Metadata = {
  title: 'Real Estate Website Development | DMR Media',
  description:
    'Custom-designed real estate websites for agents, teams, and brokers. See our portfolio and request a quote.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-image-preview': 'none',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function WebsiteDevelopmentLandingLayout({ children }: { children: ReactNode }) {
  return children
}
