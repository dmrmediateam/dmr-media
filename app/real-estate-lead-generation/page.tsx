import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import RealEstateLeadGenerationPageContent from './RealEstateLeadGenerationPageContent'
import { FAQ_ITEMS } from './lead-generation-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'Real Estate Lead Generation That Books Conversations | DMR Media',
  description:
    'Luxury inbound systems: SEO, Google Ads, landing capture, and CRM velocity—exclusive pipeline you can measure. Apply for a market-ready first conversation.',
  keywords: [
    'real estate lead generation',
    'luxury real estate lead generation',
    'real estate lead generation system',
    'real estate lead generation services',
    'inbound leads for real estate agents',
    'Google Ads real estate leads',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/real-estate-lead-generation`,
  },
  openGraph: {
    title: 'Real Estate Lead Generation That Books Conversations | DMR Media',
    description:
      'Luxury inbound systems: SEO, Google Ads, landing capture, and CRM velocity—exclusive pipeline you can measure.',
    url: `${BASE}/real-estate-lead-generation`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Lead Generation That Books Conversations | DMR Media',
    description:
      'Luxury inbound systems: SEO, Google Ads, landing capture, and CRM velocity—exclusive pipeline you can measure.',
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

export default function RealEstateLeadGenerationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/real-estate-lead-generation">
        <RealEstateLeadGenerationPageContent />
      </SEOWrapper>
    </>
  )
}
