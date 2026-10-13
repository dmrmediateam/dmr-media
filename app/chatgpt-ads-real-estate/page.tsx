import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import {
  buildChatgptAdsJsonLd,
  CHATGPT_ADS_DESCRIPTION,
  CHATGPT_ADS_IMAGE,
  CHATGPT_ADS_MODIFIED,
  CHATGPT_ADS_PUBLISHED,
  CHATGPT_ADS_TITLE,
} from '@/lib/chatgpt-ads-jsonld'
import ChatgptAdsRealEstatePageContent from './ChatgptAdsRealEstatePageContent'
import { FAQ_ITEMS } from './chatgpt-ads-data'

const BASE = 'https://www.dmrmedia.org'
const URL = `${BASE}/chatgpt-ads-real-estate`
const OG_IMAGE = {
  url: CHATGPT_ADS_IMAGE,
  width: 3024,
  height: 1516,
  alt: 'ChatGPT Ads Manager showing live campaigns for real estate agents and teams',
}

export const metadata: Metadata = {
  title: { absolute: CHATGPT_ADS_TITLE },
  description: CHATGPT_ADS_DESCRIPTION,
  keywords: [
    'ChatGPT ads for real estate agents',
    'ChatGPT ads for real estate teams',
    'ChatGPT ads real estate',
    'ChatGPT ads for realtors',
    'OpenAI ads real estate',
    'AI advertising for real estate agents',
    'ChatGPT marketing for agents',
  ].join(', '),
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: CHATGPT_ADS_TITLE,
    description:
      'ChatGPT Ads are out of beta and live. DMR runs the channel for real estate agents and teams, with no onboarding fee and no monthly retainer for the founding cohort.',
    url: URL,
    siteName: 'DMR Media',
    type: 'website',
    locale: 'en_US',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: CHATGPT_ADS_TITLE,
    description:
      'ChatGPT Ads for real estate agents and teams: creative, landing paths, and CRM handoffs tied to qualified conversations.',
    images: [OG_IMAGE.url],
  },
  other: {
    'article:published_time': CHATGPT_ADS_PUBLISHED,
    'article:modified_time': CHATGPT_ADS_MODIFIED,
  },
}

export default function ChatgptAdsRealEstatePage() {
  return (
    <SEOWrapper
      slug="/chatgpt-ads-real-estate"
      includePageJsonLd={false}
      includeBreadcrumbJsonLd={false}
      pageJsonLd={buildChatgptAdsJsonLd(FAQ_ITEMS)}
    >
      <ChatgptAdsRealEstatePageContent />
    </SEOWrapper>
  )
}
