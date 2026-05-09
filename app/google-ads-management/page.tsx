import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import GoogleAdsManagementPageContent from './GoogleAdsManagementPageContent'
import { FAQ_ITEMS } from './google-ads-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'Cut Cost Per Lead by 65% | Luxury Real Estate Google Ads | DMR Media',
  description:
    'Documented client averages: 65% lower CPL, 1.8× more booked appointments, 3× qualified pipeline. Free Google Ads audit: if we don\'t find $30K+ in wasted spend, you owe nothing.',
  keywords: [
    'Google Ads management for real estate',
    'real estate PPC',
    'Google Ads for real estate agents',
    'luxury real estate Google Ads',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/google-ads-management`,
  },
  openGraph: {
    title: 'Cut Cost Per Lead by 65% | Luxury Real Estate Google Ads | DMR Media',
    description:
      'Documented averages: 65% lower CPL, 1.8× more appointments, 3× pipeline. Free Google Ads audit: if we don\'t find $30K+ in wasted spend, you owe nothing.',
    url: `${BASE}/google-ads-management`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cut Cost Per Lead by 65% | Luxury Real Estate Google Ads | DMR Media',
    description:
      'Documented averages: 65% lower CPL, 1.8× more appointments, 3× pipeline. Free Google Ads audit: if we don\'t find $30K+ in wasted spend, you owe nothing.',
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

export default function GoogleAdsManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/google-ads-management">
        <GoogleAdsManagementPageContent />
      </SEOWrapper>
    </>
  )
}
