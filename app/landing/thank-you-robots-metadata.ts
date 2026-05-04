import type { Metadata } from 'next'

/** Post-conversion / confirmation pages: not for search or general crawling. */
export const landingThankYouRobots: Metadata = {
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
