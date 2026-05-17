import { FAQ_ITEMS } from '@/app/google-ads-management/google-ads-data'
import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import {
  channelLandingCaseStudies,
  channelLandingPartnerStats,
} from '@/lib/landing/channel-landing-shared-data'

const googleAdsMarketingCorePillars = [
  {
    number: '01',
    title: 'High-intent search & Maps',
    body:
      'Capture buyers and sellers while they are searching—not browsing social. Geo-segmented campaigns with negatives that protect luxury budgets.',
  },
  {
    number: '02',
    title: 'Landing paths & conversion',
    body:
      'Message match from keyword to page to CRM so clicks become conversations your team recognizes as real—not mystery form fills.',
  },
  {
    number: '03',
    title: 'Optimization & reporting',
    body:
      'Weekly search-term reviews, bidding discipline, and executive summaries tied to CPL and appointments—not vanity impressions.',
  },
] as const

export const googleAdsLandingConfig: ChannelLandingConfig = {
  path: '/landing/google-ads',
  formName: 'landing-google-ads-modal',
  heroTitleEmphasis: 'Partner',
  heroIntro:
    'Paid search should feel accountable, not like a subscription to hope. DMR runs Google Ads for luxury teams with intent maps, landing continuity, and reporting tied to qualified conversations—not blended dashboards.',
  marketingCoreHeading: 'Google Ads built on intent—not cheap clicks.',
  marketingCorePillars: googleAdsMarketingCorePillars,
  partnerStats: channelLandingPartnerStats,
  caseStudies: channelLandingCaseStudies,
  faqItems: FAQ_ITEMS,
  metadata: {
    title: 'Google Ads Management for Luxury Real Estate | DMR Media',
    description:
      'High-intent Google Ads for luxury brokerages: search, Maps, landing paths, and CPL reporting. 5/5 on Trustpilot & Google. Book a strategy review.',
    openGraphTitle: 'Google Ads Management for Luxury Real Estate | DMR Media',
    openGraphDescription:
      'Intent-driven Google Ads for luxury teams—geo discipline, conversion tracking, and reporting tied to pipeline.',
  },
}
