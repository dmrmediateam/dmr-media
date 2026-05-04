import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import GoogleAdsManagementPageContent from './GoogleAdsManagementPageContent'
import { FAQ_ITEMS } from './google-ads-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'Google Ads Management for Luxury Real Estate | DMR Media',
  description:
    'Story-led Google Ads for teams who close at a high level: intent architecture, message match on landings, and reporting tied to qualified conversations and CRM truth.',
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
    title: 'Google Ads Management for Luxury Real Estate | DMR Media',
    description:
      'Intent-led campaigns, disciplined geography, and measurement your sales team recognizes. Built for luxury markets where trust is earned at the click.',
    url: `${BASE}/google-ads-management`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Management for Luxury Real Estate | DMR Media',
    description:
      'Intent-led campaigns, disciplined geography, and measurement your sales team recognizes. Built for luxury markets where trust is earned at the click.',
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
