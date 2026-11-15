import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import SellerLeadGenerationPageContent from './SellerLeadGenerationPageContent'
import { FAQ_ITEMS } from './seller-lead-data'

const BASE = 'https://www.dmrmedia.org'
const TITLE = 'Seller Lead Generation for Realtors | Listing Leads | DMR Media'
const DESCRIPTION =
  'Exclusive seller leads for realtors: home valuation campaigns, manual valuations, and nurture that turns homeowners into listings. $36.93 per valuation lead, documented.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'seller lead generation',
    'real estate seller leads',
    'seller leads for realtors',
    'listing leads for realtors',
    'real estate listing leads',
    'real estate listing lead generation',
    'home valuation leads',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/seller-lead-generation`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${BASE}/seller-lead-generation`,
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

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Seller Lead Generation for Realtors',
  serviceType: 'Real estate seller lead generation',
  provider: { '@type': 'Organization', name: 'DMR Media', url: BASE },
  areaServed: { '@type': 'Country', name: 'United States' },
  url: `${BASE}/seller-lead-generation`,
  description: DESCRIPTION,
}

export default function SellerLeadGenerationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <SEOWrapper slug="/seller-lead-generation">
        <SellerLeadGenerationPageContent />
      </SEOWrapper>
    </>
  )
}
