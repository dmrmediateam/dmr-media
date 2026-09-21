import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import LuxuryDevelopmentPageContent from './LuxuryDevelopmentPageContent'
import { FAQ_ITEMS } from './luxury-development-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'Luxury Development Marketing | Qualified Buyer Leads, Guaranteed | DMR Media',
  description:
    'Marketing for luxury real estate developments: project websites, paid media, SEO through phase releases, and our exact follow-up scripts. Qualified buyer leads in 2 weeks, or we refund the fee and ad spend.',
  keywords: [
    'luxury development marketing',
    'real estate development marketing',
    'new development marketing agency',
    'condo development marketing',
    'presale marketing for developments',
    'luxury real estate development leads',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/luxury-development-marketing`,
  },
  openGraph: {
    title: 'Luxury Development Marketing | Qualified Buyer Leads, Guaranteed | DMR Media',
    description:
      'One accountable team for your development: website, paid media, SEO, and follow-up scripts. Qualified buyer leads in 2 weeks, or we refund the fee and ad spend.',
    url: `${BASE}/luxury-development-marketing`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Development Marketing | Qualified Buyer Leads, Guaranteed | DMR Media',
    description:
      'Development marketing judged on absorption, not impressions. Qualified buyer leads in 2 weeks, or we refund the fee and ad spend.',
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

export default function LuxuryDevelopmentMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/luxury-development-marketing">
        <LuxuryDevelopmentPageContent />
      </SEOWrapper>
    </>
  )
}
