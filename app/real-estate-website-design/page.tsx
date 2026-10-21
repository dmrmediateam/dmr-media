import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import RealEstateWebsiteDesignPageContent from './RealEstateWebsiteDesignPageContent'
import { FAQ_ITEMS } from './website-design-data'

const BASE = 'https://www.dmrmedia.org'

const TITLE = 'Luxury Real Estate Website Design | DMR Media'
const DESCRIPTION =
  'Luxury real estate website design for agents, teams, and developments: DesignRush-nominated builds, IDX search, and lead capture that feeds your CRM.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'luxury real estate website design',
    'real estate website design',
    'luxury real estate websites',
    'custom real estate website design',
    'new development websites',
    'luxury condo websites',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/real-estate-website-design`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${BASE}/real-estate-website-design`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
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

export default function RealEstateWebsiteDesignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/real-estate-website-design">
        <RealEstateWebsiteDesignPageContent />
      </SEOWrapper>
    </>
  )
}
