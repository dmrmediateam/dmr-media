import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import GoogleAdsManagementPageContent from './GoogleAdsManagementPageContent'
import { FAQ_ITEMS } from './google-ads-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'Google Ads for Real Estate | Management & PPC | DMR Media',
  description:
    'Luxury real estate Google Ads with documented 88% CPL drops and 3× pipeline lifts. Free 30-minute audit: if we don\'t find $30K+ in wasted spend or missed pipeline, you owe nothing.',
  keywords: [
    'Google Ads for real estate',
    'Google Ads management for real estate',
    'real estate PPC',
    'real estate Google Ads agency',
    'luxury real estate Google Ads',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/google-ads-management`,
  },
  openGraph: {
    title: 'Google Ads for Real Estate | Management & PPC | DMR Media',
    description:
      'Google Ads for luxury real estate: Search, Maps, landing paths, and reporting tied to qualified conversations. Free audit: wasted spend and CPL fixes for your market.',
    url: `${BASE}/google-ads-management`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads for Real Estate | Management & PPC | DMR Media',
    description:
      'Google Ads management for luxury real estate teams. Free audit: wasted spend, match types, and CPL fixes for your market.',
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
