import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import { channelLandingCaseStudies } from '@/lib/landing/channel-landing-shared-data'
import {
  googleGeneralByTheNumbersSection,
  googleGeneralTimelineSection,
} from '@/app/landing/google-general/google-general-landing-sections'
import { FAQ_ITEMS, marketingCorePillars } from './stop-marketing-landing-data'

const stopMarketingTimelineSection = {
  ...googleGeneralTimelineSection,
  intro:
    'You are not buying ads. You are buying your time back. Here is the plan we run with teams who are done marketing themselves, while the clock on your 30-day qualified-lead guarantee runs.',
}

export const stopMarketingLandingConfig: ChannelLandingConfig = {
  path: '/landing/stop-marketing',
  formName: 'stop-marketing-modal',
  heroLayout: 'conversion',
  heroTitle: 'Stop Marketing Yourself. Let a Trusted Marketing Agency Do It For You.',
  heroTitleEmphasis: '',
  heroIntro: '',
  heroIntroParagraphs: [
    [
      {
        text: 'You became an agent to serve clients, not to become a full-time marketer. Yet most teams we talk to are stuck posting, tweaking ads, and chasing vendors while listings slip through the cracks. ',
      },
      { text: 'That ends here.', italic: true },
    ],
    [
      {
        text: 'DMR Media is the ',
      },
      { text: '#1 ranked U.S. real estate marketing agency on SEMrush', italic: true },
      {
        text: ' because we practice what we preach: the same Google Ads, AI SEO, and follow-up system that brought you to this page is what we build for partners nationwide. Our clients generate leads at ',
      },
      { text: '88% lower cost', italic: true },
      { text: ' than typical providers, and ' },
      { text: '3× their pipeline within 3 weeks', italic: true },
      { text: ' on average.' },
    ],
  ],
  marketingCoreHeading: 'Your marketing system, without you running it.',
  marketingCorePillars,
  partnerStats: [],
  caseStudies: channelLandingCaseStudies,
  faqItems: FAQ_ITEMS,
  timelineSection: stopMarketingTimelineSection,
  byTheNumbersSection: googleGeneralByTheNumbersSection,
  reviewsSection: {
    eyebrow: 'Social proof',
    title: 'Teams who stopped DIY marketing and stayed',
  },
  caseStudiesSection: {
    eyebrow: 'Proof',
    title: 'Results from teams who handed marketing off',
  },
  metadata: {
    title: 'Stop Marketing Yourself | Trusted Real Estate Marketing Partner | DMR Media',
    description:
      'Stop DIY marketing. DMR runs Google Ads, AI SEO, and follow-up for real estate teams: #1 on SEMrush, 5/5 on Trustpilot & Google, 30-day qualified-lead guarantee.',
    openGraphTitle: 'Stop Marketing Yourself | Let DMR Run Your Pipeline | DMR Media',
    openGraphDescription:
      'Trusted marketing partner for real estate teams: intent, capture, and follow-up handled, so you get back to selling.',
  },
}
