import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import ChatgptAdsRealEstatePageContent from './ChatgptAdsRealEstatePageContent'
import { FAQ_ITEMS } from './chatgpt-ads-data'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'ChatGPT Ads for Real Estate (BETA) — New Wave of PPC | DMR Media',
  description:
    'ChatGPT Ads are rolling out gradually worldwide; the U.S. is among the first markets. DMR is testing with a handful of luxury real estate teams—no onboarding fee, no monthly retainer. Apply to see if you fit.',
  keywords: [
    'ChatGPT ads real estate',
    'OpenAI ads beta real estate',
    'AI advertising luxury real estate',
    'ChatGPT marketing for agents',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/chatgpt-ads-real-estate`,
  },
  openGraph: {
    title: 'ChatGPT Ads for Real Estate (BETA) — New Wave of PPC | DMR Media',
    description:
      'Global rollout, U.S. in the first wave. Small real estate test cohort with DMR—no onboarding fee, no monthly retainer. Apply for access.',
    url: `${BASE}/chatgpt-ads-real-estate`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChatGPT Ads for Real Estate (BETA) | DMR Media',
    description:
      'Slow worldwide rollout; U.S. among the first markets. DMR test with a handful of real estate teams—no onboarding fee, no monthly retainer. Apply.',
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
