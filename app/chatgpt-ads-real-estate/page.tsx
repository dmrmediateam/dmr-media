import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import ChatgptAdsRealEstatePageContent from './ChatgptAdsRealEstatePageContent'
import { FAQ_ITEMS } from './chatgpt-ads-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'ChatGPT Ads for Real Estate — Fully Launched | DMR Media',
  description:
    'ChatGPT Ads are out of beta and fully live. DMR runs the channel for luxury real estate teams—creative, landing paths, and CRM handoffs tied to qualified conversations. No onboarding fee for our founding cohort.',
  keywords: [
    'ChatGPT ads real estate',
    'ChatGPT ads for realtors',
    'OpenAI ads real estate',
    'AI advertising luxury real estate',
    'ChatGPT marketing for agents',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/chatgpt-ads-real-estate`,
  },
  openGraph: {
    title: 'ChatGPT Ads for Real Estate — Fully Launched | DMR Media',
    description:
      'ChatGPT Ads are fully live. Founding real estate cohort with DMR—no onboarding fee, no monthly retainer. Apply to run the newest ad channel.',
    url: `${BASE}/chatgpt-ads-real-estate`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChatGPT Ads for Real Estate — Fully Launched | DMR Media',
    description:
      'Out of beta and fully live. DMR runs ChatGPT Ads for luxury real estate teams—no onboarding fee, no monthly retainer for the founding cohort.',
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

export default function ChatgptAdsRealEstatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/chatgpt-ads-real-estate">
        <ChatgptAdsRealEstatePageContent />
      </SEOWrapper>
    </>
  )
}
