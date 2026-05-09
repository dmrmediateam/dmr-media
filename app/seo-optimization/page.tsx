import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import SEOOptimizationPageContent from './SEOOptimizationPageContent'
import { FAQ_ITEMS } from './seo-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'Real Estate SEO — 19× More Organic Clicks in 90 Days | DMR Media',
  description:
    'Luxury real estate SEO with documented 19× organic-click lifts and 300%+ traffic in 90 days. Free 30-minute audit: if we don\'t find $50K+ in missed opportunity, you owe nothing.',
  keywords: [
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
    title: 'Real Estate SEO — 19× More Organic Clicks in 90 Days | DMR Media',
    description:
      'Luxury real estate SEO with documented 19× organic-click lifts and 300%+ traffic in 90 days. Free audit: if we don\'t find $50K+ in missed opportunity, you owe nothing.',
    url: `${BASE}/seo-optimization`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate SEO — 19× More Organic Clicks in 90 Days | DMR Media',
    description:
      'Luxury real estate SEO with documented 19× organic-click lifts and 300%+ traffic in 90 days. Free audit: if we don\'t find $50K+ in missed opportunity, you owe nothing.',
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
