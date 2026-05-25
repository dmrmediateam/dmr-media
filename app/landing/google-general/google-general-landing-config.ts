import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import { channelLandingCaseStudies } from '@/lib/landing/channel-landing-shared-data'
import { FAQ_ITEMS, marketingCorePillars } from './google-general-landing-data'
import {
  googleGeneralByTheNumbersSection,
  googleGeneralTimelineSection,
} from './google-general-landing-sections'

export const googleGeneralLandingConfig: ChannelLandingConfig = {
  path: '/landing/google-general',
  formName: 'google-general-modal',
  heroLayout: 'conversion',
  heroTitle: 'The Luxury Real Estate Marketing Agency That Practices What It Preaches.',
  heroTitleEmphasis: '',
  heroIntro: '',
  heroIntroParagraphs: [
    [
      {
        text: 'You\'ve gotten 2,000 calls from "lead providers"; Google Ads pitches, META Ads, mailers. Here\'s the difference with us: you found us using the exact same system we\'ll build for your business. And it\'s why our clients generate leads at ',
      },
      { text: '88% cheaper', italic: true },
      {
        text: ' than the competition. And why our clients on average ',
      },
      { text: '3x their pipeline within 3 weeks', italic: true },
      { text: ' of working with us.' },
    ],
  ],
  marketingCoreHeading: 'The marketing system built for real estate teams.',
  marketingCorePillars,
  partnerStats: [],
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
