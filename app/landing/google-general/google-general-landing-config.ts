import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import {
  channelLandingCaseStudies,
  channelLandingPartnerStats,
} from '@/lib/landing/channel-landing-shared-data'
import { FAQ_ITEMS, marketingCorePillars } from './google-general-landing-data'

export const googleGeneralLandingConfig: ChannelLandingConfig = {
  path: '/landing/google-general',
  formName: 'google-general-modal',
  heroTitleEmphasis: 'Partner',
  heroIntro:
    'Almost all "Agencies" will get you leads but they won\'t partner with you to get those leads to convert. Distinguished Marketing for Real Estate (DMR) is different. We work with you to ensure those leads are not only actual buyers & sellers but to ensure that your team knows how to convert them.',
  marketingCoreHeading: 'The Marketing Core built on Intent.',
  marketingCorePillars,
  partnerStats: channelLandingPartnerStats,
  caseStudies: channelLandingCaseStudies,
  faqItems: FAQ_ITEMS,
  metadata: {
    title: "The Last Real Estate Marketing Partner You'll Ever Need | DMR Media",
    description:
      '#1 U.S. real estate agency on SEMrush. Google Ads, AI SEO, and tailored follow-up—built on intent so luxury teams convert the leads they earn. 5/5 on Trustpilot & Google.',
    openGraphTitle: '#1 Rated U.S. Real Estate Marketing Agency on SEMrush | DMR Media',
    openGraphDescription:
      '#1 U.S. real estate marketing agency on SEMrush. SEO + Google Ads as one engine: 3× pipeline, 65% lower CPL, 19× organic clicks. Free integrated audit.',
  },
}
