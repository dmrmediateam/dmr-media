import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import RealEstateLeadGenerationPageContent from './RealEstateLeadGenerationPageContent'
import { FAQ_ITEMS } from './lead-generation-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'Real Estate Lead Generation Services | Exclusive Buyer Leads | DMR Media',
  description:
    'Real estate lead generation services built around your brand: 46 qualified inbound leads in 3 weeks, exclusive to you. SEO, Google Ads, and CRM follow-up from one team.',
  keywords: [
    'real estate lead generation',
    'luxury real estate lead generation',
    'real estate lead generation system',
    'real estate lead generation services',
    'real estate lead generation company',
    'real estate buyer leads',
    'inbound leads for real estate agents',
    'Google Ads real estate leads',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/real-estate-lead-generation`,
  },
  openGraph: {
    title: 'Real Estate Lead Generation Services | Exclusive Buyer Leads | DMR Media',
    description:
      'Real estate lead generation services built around your brand: 46 qualified inbound leads in 3 weeks, exclusive to you. SEO, Google Ads, and CRM follow-up from one team.',
    url: `${BASE}/real-estate-lead-generation`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Lead Generation Services | Exclusive Buyer Leads | DMR Media',
    description:
      'Real estate lead generation services built around your brand: 46 qualified inbound leads in 3 weeks, exclusive to you. SEO, Google Ads, and CRM follow-up from one team.',
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
