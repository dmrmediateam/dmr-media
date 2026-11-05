import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../google-general/google-general-landing.css'

/** Email/paid-traffic squeeze page, not for search or general crawling. */
export const metadata: Metadata = {
  title: '5 Website Build Slots for December | DMR Media',
  description:
    'DMR Media is at capacity on website builds through November, so we are opening 5 slots starting December 1, with $500 off for those 5. Apply and we will call you.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
}

export default function WebsiteWaitlistLayout({ children }: { children: ReactNode }) {
  return children
}
