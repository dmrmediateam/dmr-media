import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import {
  googleGeneralByTheNumbersSection,
  googleGeneralTimelineSection,
} from '@/app/landing/google-general/google-general-landing-sections'
import {
  authorityCaseStudies,
  FAQ_ITEMS,
  marketingCorePillars,
} from './case-studies-landing-data'

const caseStudiesTimelineSection = {
  ...googleGeneralTimelineSection,
  intro:
    'These case studies did not happen by accident. Here is the same week-by-week execution we run for new partners while your qualified-lead guarantee clock is ticking.',
}

export const caseStudiesLandingConfig: ChannelLandingConfig = {
  path: '/landing/case-studies',
  formName: 'case-studies-modal',
  headerApplyLabel: 'Get audit',
  clientLogosRepeat: 1,
  formConfig: {
    title: 'Get your free marketing audit',
    subtitle: 'See if we can take this off your plate',
    question: 'Where should we send it?',
    submitLabel: 'Send me the audit',
    footnote: 'No spam. No sales call unless you want one.',
    ariaLabel: 'Free marketing audit request',
    fieldSet: 'compact',
  },
  heroLayout: 'conversion',
  heroTitle: 'Real Estate Marketing Results You Can Measure Before You Commit.',
  heroTitleEmphasis: '',
  heroIntro: '',
  heroIntroParagraphs: [
    [
      {
        text: 'You should not have to trust a pitch deck. ',
      },
      { text: 'Legendary Real Estate', italic: true },
      { text: ' tripled inbound pipeline in 90 days. ' },
      { text: 'Hitchcock Properties', italic: true },
      { text: ' cut cost per lead from $86 to $10.46. ' },
      { text: 'Eagan Luxury', italic: true },
      { text: ' closed $11M+ in volume within three months of launch, starting from zero visibility. ' },
      { text: 'We guarantee you get qualified leads within 30 days.', italic: true },
    ],
    [
      {
        text: 'DMR Media is the ',
      },
      { text: '#1 ranked U.S. real estate marketing agency on SEMrush', italic: true },
      {
        text: '. We publish outcomes like these because we run the same Google Ads, AI SEO, and follow-up stack for ourselves that we build for teams and brokerages nationwide.',
      },
    ],
  ],
  marketingCoreHeading: 'The same playbook behind these case studies.',
  marketingCorePillars,
  partnerStats: [
    'Hitchcock Properties got 88% reduction in lead costs in 28 days',
    'Debi Eagan has sold $20M+ in volume year to date',
    "Legendary Real Estate 3×'d their leads in 30 days",
  ],
  caseStudies: authorityCaseStudies,
  faqItems: FAQ_ITEMS,
  timelineSection: caseStudiesTimelineSection,
  byTheNumbersSection: googleGeneralByTheNumbersSection,
  reviewsSection: {
    eyebrow: 'Peer validation',
    title: 'What partners say after the numbers landed',
  },
  caseStudiesSection: {
    eyebrow: 'Case studies',
    title: 'Legendary. Hitchcock. Eagan. Measured outcomes, not promises.',
  },
  metadata: {
    title: 'Real Estate Marketing Case Studies | DMR Media',
    description:
      'See how Legendary Real Estate, Hitchcock Properties, and Eagan Luxury grew pipeline with DMR, the #1 real estate marketing agency on SEMrush. Get your free marketing audit.',
    openGraphTitle: 'Real Estate Marketing Case Studies | DMR Media',
    openGraphDescription:
      'Authority-backed results: 3× pipeline, 88% lower CPL, $11M+ volume. The same system DMR runs for top teams.',
  },
}
