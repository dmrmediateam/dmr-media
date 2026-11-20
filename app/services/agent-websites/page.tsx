import type { Metadata } from 'next'
import '@/app/landing/google-general/google-general-landing.css'
import SEOWrapper from '@/components/SEOWrapper'
import IdxWebsitesPageContent from './IdxWebsitesPageContent'
import { IDX_FAQ, IDX_META, PAGE_PATH } from './idx-websites-data'

const BASE = 'https://www.dmrmedia.org'
const URL = `${BASE}${PAGE_PATH}`

export const metadata: Metadata = {
  title: IDX_META.title,
  description: IDX_META.description,
  keywords: [
    'idx website',
    'idx websites',
    'idx websites for realtors',
    'idx real estate websites',
    'idx website development',
    'real estate website with idx',
    'idx real estate',
  ].join(', '),
  alternates: { canonical: URL },
  openGraph: {
    title: IDX_META.ogTitle,
    description: IDX_META.ogDescription,
    url: URL,
    siteName: 'DMR Media',
    type: 'website',
    images: [{ url: `${BASE}/images/seo/alexa-devaney-hero.jpg`, alt: 'Alexa Devaney IDX website designed by DMR Media' }],
  },
  twitter: { card: 'summary_large_image', title: IDX_META.ogTitle, description: IDX_META.ogDescription },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: IDX_FAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function AgentWebsitesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug={PAGE_PATH} schemaType="service">
        <IdxWebsitesPageContent />
      </SEOWrapper>
    </>
  )
}
