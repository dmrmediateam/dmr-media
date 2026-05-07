import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import SEOConsultingPageContent from './SEOConsultingPageContent'
import { FAQ_ITEMS } from './seo-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'SEO Consulting for Real Estate Teams | DMR Media',
  description:
    'SEO consulting for luxury real estate teams: audit, strategy, and an execution roadmap from the same team behind DMR SEO optimization.',
  keywords: [
    'SEO consulting for real estate',
    'real estate SEO consulting',
    'luxury real estate SEO strategy',
    'real estate SEO audit',
    'SEO roadmap for real estate teams',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/seo-consulting`,
  },
  openGraph: {
    title: 'SEO Consulting for Real Estate Teams | DMR Media',
    description:
      'A strategy-first SEO package for real estate teams that want expert direction before committing to full execution.',
    url: `${BASE}/seo-consulting`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Consulting for Real Estate Teams | DMR Media',
    description:
      'Audit, strategy, and execution roadmaps for luxury real estate teams. Start with consulting, scale to SEO execution when ready.',
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

export default function SEOConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/seo-consulting">
        <SEOConsultingPageContent />
      </SEOWrapper>
    </>
  )
}
