import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import GoogleAdsManagementPageContent from './GoogleAdsManagementPageContent'
import { FAQ_ITEMS } from './google-ads-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'PPC Management for Real Estate | Pay-Per-Click Agency | DMR Media',
  description:
    'Real estate PPC management with documented 88% CPL drops and 3× pipeline lifts. Google Ads, Maps, and P-Max run by one accountable team. Free 30-minute PPC audit: if we don\'t find $30K+ in wasted spend or missed pipeline, you owe nothing.',
  keywords: [
    'PPC management for real estate',
    'real estate PPC management',
    'real estate PPC',
    'pay per click management for realtors',
    'Google Ads management for real estate',
    'real estate PPC agency',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/google-ads-management`,
  },
  openGraph: {
    title: 'PPC Management for Real Estate | Pay-Per-Click Agency | DMR Media',
    description:
      'Real estate PPC management: Search, Maps, landing paths, and reporting tied to qualified conversations. Free PPC audit: wasted spend and CPL fixes for your market.',
    url: `${BASE}/google-ads-management`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PPC Management for Real Estate | Pay-Per-Click Agency | DMR Media',
    description:
      'PPC management for luxury real estate teams. Free audit: wasted spend, match types, and CPL fixes for your market.',
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
