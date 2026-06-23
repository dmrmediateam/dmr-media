import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import { channelLandingCaseStudies } from '@/lib/landing/channel-landing-shared-data'
import {
  googleGeneralByTheNumbersSection,
  googleGeneralTimelineSection,
} from '@/app/landing/google-general/google-general-landing-sections'
import { FAQ_ITEMS, marketingCorePillars } from './our-guarentee-landing-data'

const guaranteeTimelineSection = {
  ...googleGeneralTimelineSection,
  intro:
    'The guarantee clock starts when your account is live and tracking is in place. Here is the same week-by-week execution we run for new partners while those 30 days are ticking.',
}

export const ourGuarenteeLandingConfig: ChannelLandingConfig = {
  path: '/landing/our-guarentee',
  formName: 'our-guarentee-modal',
  headerApplyLabel: 'Get audit',
  clientLogosRepeat: 1,
  formConfig: {
    title: 'Get your free marketing audit',
    subtitle: 'See if the guarantee fits your market',
    question: 'Where should we send it?',
    submitLabel: 'Send me the audit',
    footnote: 'No spam. No sales call unless you want one.',
    ariaLabel: 'Free marketing audit request',
    fieldSet: 'compact',
  },
  heroLayout: 'conversion',
  heroTitle: 'Qualified Leads in 30 Days Using Our Paid Ads System Or We Waive Our Fees.',
  heroTitleEmphasis: '',
  heroIntro: '',
  heroIntroParagraphs: [
    [
      {
        text: 'Have you been burned by a real estate marketing company before? Most agencies take $2k/m or 15% ad spend and leave you wondering where your money went. ',
      },
      { text: 'We guarantee qualified leads within 30 days.', italic: true },
    ],
    [
      {
        text: 'If we do not deliver under your signed scope, we waive our management fees and keep working at no management charge for up to 90 days. DMR Media is the ',
      },
      { text: '#1 ranked U.S. real estate marketing agency on SEMrush', italic: true },
      {
        text: '. The same Google Ads, AI SEO, and follow-up system behind the results below is what we build for partners nationwide.',
      },
    ],
  ],
  marketingCoreHeading: 'How the guarantee works, without the fine-print runaround.',
  marketingCorePillars,
  partnerStats: [
    'Hitchcock Properties got 88% reduction in lead costs in 28 days',
    'Debi Eagan has sold $20M+ in volume year to date',
    "Legendary Real Estate 3×'d their leads in 30 days",
  ],
  caseStudies: channelLandingCaseStudies,
  faqItems: FAQ_ITEMS,
  timelineSection: guaranteeTimelineSection,
  byTheNumbersSection: googleGeneralByTheNumbersSection,
  reviewsSection: {
    eyebrow: 'Social proof',
    title: 'Teams who bet on the guarantee and stayed',
  },
  caseStudiesSection: {
    eyebrow: 'Proof',
    title: 'Results behind the 30-day promise',
  },
  metadata: {
    title: '30-Day Qualified Lead Guarantee | DMR Media',
    description:
      'DMR Media guarantees qualified leads within 30 days, or we waive management fees for up to 90 days. #1 on SEMrush. Get your free marketing audit.',
    openGraphTitle: 'Our 30-Day Qualified Lead Guarantee | DMR Media',
    openGraphDescription:
      'Burned by marketing agencies before? DMR puts qualified leads in 30 days in writing, or we waive our fees. See the proof, then request your audit.',
  },
}
