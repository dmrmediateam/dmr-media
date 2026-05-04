import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import SEOOptimizationPageContent from './SEOOptimizationPageContent'
import { FAQ_ITEMS } from './seo-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'Real Estate SEO That Earns the First Conversation | DMR Media',
  description:
    'Luxury real estate SEO with documented lifts in impressions and pipeline. Technical foundations, on-page precision, and content systems—plus portfolio sites built to rank.',
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
    title: 'Real Estate SEO That Earns the First Conversation | DMR Media',
    description:
      'Luxury real estate SEO with documented lifts in impressions and pipeline. Technical foundations, on-page precision, and content systems.',
    url: `${BASE}/seo-optimization`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate SEO That Earns the First Conversation | DMR Media',
    description:
      'Luxury real estate SEO with documented lifts in impressions and pipeline. Technical foundations, on-page precision, and content systems.',
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
