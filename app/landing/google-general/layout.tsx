import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { FAQ_ITEMS } from './google-general-landing-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: '#1 U.S. Real Estate Agency on SEMrush · 3× Pipeline · 65% Lower CPL | DMR Media',
  description:
    '#1 U.S. real estate marketing agency on SEMrush. SEO + Google Ads as one engine: 3× pipeline, 65% lower CPL, 19× organic clicks. Free integrated audit: if we don\'t find $30K+ in missed opportunity, you owe nothing.',
  alternates: {
    canonical: `${BASE}/landing/google-general`,
  },
  openGraph: {
    title: '#1 U.S. Real Estate Agency on SEMrush · 3× Pipeline · 65% Lower CPL | DMR Media',
    description:
      '#1 U.S. real estate marketing agency on SEMrush. SEO + Google Ads as one engine: 3× pipeline, 65% lower CPL, 19× organic clicks. Free integrated audit.',
    url: `${BASE}/landing/google-general`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 U.S. Real Estate Agency on SEMrush · 3× Pipeline · 65% Lower CPL | DMR Media',
    description:
      '#1 U.S. real estate marketing agency on SEMrush. SEO + Google Ads as one engine: 3× pipeline, 65% lower CPL, 19× organic clicks. Free integrated audit.',
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
