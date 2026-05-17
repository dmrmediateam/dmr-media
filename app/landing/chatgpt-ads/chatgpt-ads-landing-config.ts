import { FAQ_ITEMS } from '@/app/chatgpt-ads-real-estate/chatgpt-ads-data'
import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import {
  channelLandingCaseStudies,
  channelLandingPartnerStats,
} from '@/lib/landing/channel-landing-shared-data'

const chatgptAdsMarketingCorePillars = [
  {
    number: '01',
    title: 'ChatGPT placements (beta)',
    body:
      'Hands-on pilots with a small cohort of luxury teams while formats and markets roll out—honest guardrails on what is stable today.',
  },
  {
    number: '02',
    title: 'Creative & landing alignment',
    body:
      'Listings and point of view that still look like your brokerage when the UI changes next month—UTMs and paths buyers actually use.',
  },
  {
    number: '03',
    title: 'CRM & attribution',
    body:
      'Routing and reporting that separate beta noise from real conversations, paired with search foundations so you are never single-channel dependent.',
  },
] as const

export const chatgptAdsLandingConfig: ChannelLandingConfig = {
  path: '/landing/chatgpt-ads',
  formName: 'landing-chatgpt-ads-modal',
  heroTitleEmphasis: 'Partner',
  heroIntro:
    'Buyers already ask language models for neighborhoods and short lists. DMR is running an invite-only ChatGPT Ads test for luxury teams—with creative, landing paths, and CRM hooks wired to how you actually sell.',
  marketingCoreHeading: 'ChatGPT Ads with signal—not hype.',
  marketingCorePillars: chatgptAdsMarketingCorePillars,
  partnerStats: channelLandingPartnerStats,
  caseStudies: channelLandingCaseStudies,
  faqItems: FAQ_ITEMS,
  metadata: {
    title: 'ChatGPT Ads for Luxury Real Estate (Beta) | DMR Media',
    description:
      'Invite-only ChatGPT Ads pilots for luxury brokerages—creative, landing paths, and attribution alongside search. Book a strategy review.',
    openGraphTitle: 'ChatGPT Ads for Luxury Real Estate (Beta) | DMR Media',
    openGraphDescription:
      'Small-cohort ChatGPT Ads test for luxury real estate: honest beta guardrails, creative alignment, and stack fit with SEO and Google Ads.',
  },
}
