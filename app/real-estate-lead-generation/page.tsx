import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import RealEstateLeadGenerationPageContent from './RealEstateLeadGenerationPageContent'
import { FAQ_ITEMS } from './lead-generation-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'Real Estate Lead Generation — 46 Qualified Buyers & Sellers in 3 Weeks | DMR Media',
  description:
    'Documented: 46 qualified inbound leads in 3 weeks, 3× pipeline in 90 days, exclusive to your brand. 30-day pilot guarantee: 10+ qualified leads or your setup fee is on us.',
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
    title: 'Real Estate Lead Generation — 46 Qualified Buyers & Sellers in 3 Weeks | DMR Media',
    description:
      'Documented: 46 qualified inbound leads in 3 weeks, 3× pipeline in 90 days, exclusive to your brand. 30-day pilot guarantee: 10+ qualified leads or setup fee is on us.',
    url: `${BASE}/real-estate-lead-generation`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Lead Generation — 46 Qualified Buyers & Sellers in 3 Weeks | DMR Media',
    description:
      'Documented: 46 qualified inbound leads in 3 weeks, 3× pipeline in 90 days, exclusive to your brand. 30-day pilot guarantee: 10+ qualified leads or setup fee is on us.',
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
