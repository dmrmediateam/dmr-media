import { FAQ_ITEMS } from '@/app/seo-optimization/seo-data'
import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import {
  channelLandingCaseStudies,
  channelLandingPartnerStats,
} from '@/lib/landing/channel-landing-shared-data'

const seoMarketingCorePillars = [
  {
    number: '01',
    title: 'Technical & local foundation',
    body:
      'Crawl health, site speed, and market-level signals so Google—and buyers—trust your inventory before you publish another blog post.',
  },
  {
    number: '02',
    title: 'Content & authority',
    body:
      'Neighborhood guides, listing stories, and internal linking that compound visibility for the searches luxury buyers actually run.',
  },
  {
    number: '03',
    title: 'AI search visibility',
    body:
      'Show up in Google, ChatGPT, and Perplexity as the team agents recommend—not a template site buried on page two.',
  },
] as const

export const seoLandingConfig: ChannelLandingConfig = {
  path: '/landing/seo',
  formName: 'landing-seo-modal',
  heroTitleEmphasis: 'Partner',
  heroIntro:
    'Most SEO vendors chase rankings you cannot tie to pipeline. DMR builds search systems for luxury real estate—technical foundation, content velocity, and reporting your leadership can defend week to week.',
  marketingCoreHeading: 'SEO built on intent—not vanity charts.',
  marketingCorePillars: seoMarketingCorePillars,
  partnerStats: channelLandingPartnerStats,
  caseStudies: channelLandingCaseStudies,
  faqItems: FAQ_ITEMS,
  metadata: {
    title: 'Real Estate SEO for Luxury Teams | DMR Media',
    description:
      'Technical SEO, local authority, and AI search visibility for luxury brokerages. 5/5 on Trustpilot & Google. Book a strategy review.',
    openGraphTitle: 'Real Estate SEO for Luxury Teams | DMR Media',
    openGraphDescription:
      'Search systems for luxury real estate: technical foundation, content authority, and AI visibility—with pipeline metrics leadership can defend.',
  },
}
