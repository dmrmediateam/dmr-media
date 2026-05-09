import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { FAQ_ITEMS } from './google-general-landing-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'Luxury Real Estate SEO & PPC | #1 U.S. on SEMrush | DMR Media',
  description:
    'Five-star luxury agency, ranked #1 in the United States on SEMrush in our category. Organic SEO plus Google Ads (PPC)—one team, shared intent maps, pipeline-tied reporting.',
  alternates: {
    canonical: `${BASE}/landing/google-general`,
  },
  openGraph: {
    title: 'Luxury Real Estate SEO & PPC | #1 U.S. on SEMrush | DMR Media',
    description:
      'Five-star luxury agency: #1 U.S. on SEMrush. Organic search and Google Ads together for luxury real estate growth.',
    url: `${BASE}/landing/google-general`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Real Estate SEO & PPC | #1 U.S. on SEMrush | DMR Media',
    description:
      'Five-star luxury agency: #1 U.S. on SEMrush. Organic search and Google Ads together for luxury real estate growth.',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function GoogleGeneralLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  )
}
