import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import { buildPropertyMarketingJsonLd } from '@/lib/property-marketing-jsonld'
import PropertyMarketingPageContent from './PropertyMarketingPageContent'
import { FAQ_ITEMS } from './property-marketing-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'New Development & Condo Property Marketing | DMR Media',
  description:
    'Property marketing for new developments, luxury condos, and trophy listings. Dedicated sites, 30-day Google Ads bursts with media included, and launch email copy.',
  keywords: [
    'new development marketing',
    'luxury condo marketing',
    'property marketing for real estate',
    'presale marketing',
    'condo launch marketing',
    'single property marketing',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/property-marketing`,
  },
  openGraph: {
    title: 'New Development & Condo Property Marketing | DMR Media',
    description:
      'Sites, Google Ads, and launch email for new developments, luxury condos, and exceptional listings. Media included in the flat fee.',
    url: `${BASE}/property-marketing`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Development & Condo Property Marketing | DMR Media',
    description:
      'Property marketing for new developments, luxury condos, and trophy listings. Dedicated sites plus 30-day paid bursts.',
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

export default function PropertyMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/property-marketing" includePageJsonLd={false} pageJsonLd={buildPropertyMarketingJsonLd()}>
        <PropertyMarketingPageContent />
      </SEOWrapper>
    </>
  )
}
