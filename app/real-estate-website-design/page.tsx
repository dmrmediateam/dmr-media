import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import RealEstateWebsiteDesignPageContent from './RealEstateWebsiteDesignPageContent'

const BASE = 'https://www.dmrmedia.org'

const FAQ_ITEMS = [
  {
    question: 'Do you build custom websites or use templates?',
    answer:
      'We build custom websites around your brand, markets, and conversion goals. We do not deploy one-size-fits-all template themes and call it strategy.',
  },
  {
    question: 'How is this different from Luxury Presence or Agent Image?',
    answer:
      'Those platforms can be useful for certain teams, but they are still platform-led products. DMR leads with strategy and custom development so your site fits your business model instead of fitting a template constraint.',
  },
  {
    question: 'Will the site be SEO-ready at launch?',
    answer:
      'Yes. Technical SEO foundations, page architecture, schema, internal linking, and performance are built into the process so your launch does not start with a visibility penalty.',
  },
  {
    question: 'Can we pair this with ongoing SEO or Google Ads?',
    answer:
      'Absolutely. Most teams pair website design with SEO optimization and Google Ads so demand capture starts immediately while organic authority compounds.',
  },
  {
    question: 'How is pricing scoped?',
    answer:
      'After discovery we scope by site complexity, page count, integrations, and content support, then provide a clear proposal with deliverables and milestones.',
  },
] as const

export const metadata: Metadata = {
  title: 'Real Estate Website Design | Custom Development for Luxury Teams | DMR Media',
  description:
    'Custom real estate website design for luxury agents, teams, and brokerages. Not template platforms. SEO-ready architecture, conversion-focused UX, and integrated growth systems.',
  keywords: [
    'real estate website design',
    'custom real estate website developer',
    'luxury real estate website design',
    'real estate web development',
    'real estate website design services',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/real-estate-website-design`,
  },
  openGraph: {
    title: 'Real Estate Website Design | Custom Development for Luxury Teams | DMR Media',
    description:
      'Custom-developed real estate websites built for luxury positioning, SEO readiness, and lead conversion.',
    url: `${BASE}/real-estate-website-design`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Website Design | DMR Media',
    description:
      'Custom website development for real estate teams that need more than template platforms.',
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
