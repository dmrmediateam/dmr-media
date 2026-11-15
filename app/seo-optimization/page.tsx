import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import SEOOptimizationPageContent from './SEOOptimizationPageContent'
import { FAQ_ITEMS } from './seo-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'Real Estate SEO Company & Services | DMR Media',
  description:
    'DMR Media is a real estate SEO company for agents and teams: SEO services, local and AI search, and expert strategy. Documented 19× more organic clicks in 90 days.',
  keywords: [
    'real estate seo company',
    'real estate seo services',
    'real estate seo agency',
    'real estate seo expert',
    'SEO optimization for real estate',
    'real estate SEO',
    'luxury real estate SEO',
    'local SEO for real estate',
    'real estate search engine optimization',
    'technical SEO real estate',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/seo-optimization`,
  },
  openGraph: {
    title: 'Real Estate SEO Company & Services | DMR Media',
    description:
      'DMR Media is a real estate SEO company for agents and teams: SEO services, local and AI search, and expert strategy. Documented 19× more organic clicks in 90 days.',
    url: `${BASE}/seo-optimization`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate SEO Company & Services | DMR Media',
    description:
      'DMR Media is a real estate SEO company for agents and teams: SEO services, local and AI search, and expert strategy. Documented 19× more organic clicks in 90 days.',
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

export default function SEOOptimizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/seo-optimization">
        <SEOOptimizationPageContent />
      </SEOWrapper>
    </>
  )
}
