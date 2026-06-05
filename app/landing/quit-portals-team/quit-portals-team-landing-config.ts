import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import { channelLandingCaseStudies } from '@/lib/landing/channel-landing-shared-data'
import {
  googleGeneralByTheNumbersSection,
  googleGeneralTimelineSection,
} from '@/app/landing/google-general/google-general-landing-sections'
import { FAQ_ITEMS, marketingCorePillars } from './quit-portals-team-landing-data'

const quitPortalsTimelineSection = {
  ...googleGeneralTimelineSection,
  intro:
    'Portals reset every month. Here is the week-by-week plan we run to build a lead channel your brokerage keeps, while your 30-day qualified-lead guarantee clock is ticking.',
}

const quitPortalsByTheNumbersSection = {
  ...googleGeneralByTheNumbersSection,
  title: 'What ownership looks like on paper',
  stats: [
    {
      value: '88%',
      label: 'Lower lead cost vs. prior portal-heavy setups (Hitchcock Properties)',
    },
    {
      value: '3×',
      label: 'Pipeline lift in 90 days when intent and follow-up align (Legendary Real Estate)',
    },
    {
      value: '#1',
      label: 'U.S. real estate marketing agency on SEMrush',
    },
  ],
}

export const quitPortalsTeamLandingConfig: ChannelLandingConfig = {
  path: '/landing/quit-portals-team',
  formName: 'quit-portals-team-modal',
  heroLayout: 'conversion',
  heroTitle: 'Stop Renting Leads You\'ll Never Own.',
  heroTitleEmphasis: '',
  heroIntro: '',
  heroIntroParagraphs: [
    [
      {
        text: 'Paying $10k+ a month to portals? Add three years of spend and ask what you keep. ',
      },
      { text: 'Nothing that compounds.', italic: true },
      { text: ' The day you stop paying, the leads stop coming.' },
    ],
    [
      {
        text: 'DMR Media builds a ',
      },
      { text: 'brokerage-owned pipeline', italic: true },
      {
        text: ': Google Ads, AI SEO, and follow-up under your brand, not shared inventory your competitor can buy. Same system that brought you here. Clients average ',
      },
      { text: '88% lower cost per lead', italic: true },
      { text: ' and ' },
      { text: '3× pipeline within 3 weeks', italic: true },
      { text: ' when they exit the portal tax.' },
    ],
  ],
  marketingCoreHeading: 'Own the channel. Stop scaling the portal bill.',
  marketingCorePillars,
  partnerStats: [],
  caseStudies: channelLandingCaseStudies,
  faqItems: FAQ_ITEMS,
  timelineSection: quitPortalsTimelineSection,
  byTheNumbersSection: quitPortalsByTheNumbersSection,
  reviewsSection: {
    eyebrow: 'Social proof',
    title: 'Teams who stopped renting and started owning',
  },
  caseStudiesSection: {
    eyebrow: 'Proof',
    title: 'Results from teams who quit the portal dependency',
  },
  metadata: {
    title: 'Quit Portal Leads | Build a Brokerage-Owned Pipeline | DMR Media',
    description:
      'Stop paying $10k+ a month to rent leads you never own. DMR builds Google Ads, AI SEO, and follow-up your team keeps. #1 on SEMrush, 30-day qualified-lead guarantee.',
    openGraphTitle: 'Stop Renting Leads You\'ll Never Own | DMR Media',
    openGraphDescription:
      'Build a lead channel your brokerage owns. No portal reset, no shared inventory, no 40% referral tax on your hardest wins.',
  },
}
