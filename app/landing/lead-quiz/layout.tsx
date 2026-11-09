import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../google-general/google-general-landing.css'

/** Paid/social quiz funnel, not for search or general crawling. */
export const metadata: Metadata = {
  title: 'Where’s Your Next $10M in Volume Coming From? | DMR Media',
  description:
    'Take the 60-second quiz to find out exactly where to focus your real estate marketing in 2026, with a roadmap tailored to your answers.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
}

export default function LeadQuizLayout({ children }: { children: ReactNode }) {
  return children
}
