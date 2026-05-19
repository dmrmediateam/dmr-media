import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import { channelLandingCaseStudies } from '@/lib/landing/channel-landing-shared-data'
import {
  FAQ_ITEMS,
  googleGeneralPartnerStats,
  marketingCorePillars,
} from './google-general-landing-data'
import {
  googleGeneralByTheNumbersSection,
  googleGeneralTimelineSection,
} from './google-general-landing-sections'

export const googleGeneralLandingConfig: ChannelLandingConfig = {
  path: '/landing/google-general',
  formName: 'google-general-modal',
  heroTitleSegments: [
    { text: 'A Real Estate Marketing ' },
    { text: 'Partner', italic: true },
    { text: ' that values ' },
    { text: 'Quality', italic: true },
    { text: ' Leads.' },
  ],
  heroTitleEmphasis: 'Partner',
  heroIntro:
    'Have you been burned by a real estate marketing company before? We get it. Most vendors take $2k/m or 15% of ad spend and you are left wondering where the money went, maybe some "SEO traffic" and a few junk forms. Whether you are a solo agent, a growing team, or a brokerage, we built a 30-day guarantee around qualified leads: name, phone, email, and real buy/sell intent. If we do not hit that bar in 30 days, we work for FREE until we do.',
  marketingCoreHeading: 'The marketing system built for real estate teams.',
  marketingCorePillars,
  partnerStatsEyebrow: "Our Partner's have",
  partnerStats: googleGeneralPartnerStats,
  caseStudies: channelLandingCaseStudies,
  faqItems: FAQ_ITEMS,
  timelineSection: googleGeneralTimelineSection,
  byTheNumbersSection: googleGeneralByTheNumbersSection,
  reviewsSection: {
    eyebrow: 'Reviews',
    title: 'What real estate teams say',
  },
  caseStudiesSection: {
    eyebrow: 'Proof',
    title: 'Results from teams like yours',
  },
  metadata: {
    title: 'A Real Estate Marketing Partner that values Quality Leads | DMR Media',
    description:
      'Google Ads, AI SEO, and follow-up for real estate teams and brokerages. 30-day qualified-lead guarantee. 5/5 on Trustpilot & Google.',
    openGraphTitle: 'Real Estate Marketing for Teams That Want Quality Leads | DMR Media',
    openGraphDescription:
      'One partner for Google Ads, SEO, and lead follow-up. Built for solo agents, teams, and brokerages, with a 30-day qualified-lead guarantee.',
  },
}
