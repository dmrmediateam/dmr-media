import type { ChannelLandingCaseStudy } from '@/lib/landing/channel-landing-types'

/** Partner proof lines shared across channel landing pages. */
export const channelLandingPartnerStats = [
  'Tripled the teams Pipeline in 3 weeks',
  'Single agent did $11m in Volume within 3 months',
  'Sonoma County Team got 19x organic search traffic',
] as const

/** Case study cards (full list; each landing shows top 3). */
export const channelLandingCaseStudies: ChannelLandingCaseStudy[] = [
  {
    id: 'jade-legendary-real-estate',
    title: 'Legendary Real Estate Services',
    region: 'Lake Geneva, WI',
    badge: 'Wisconsin Realtor of the Year',
    metric: '3× inbound pipeline',
    summary:
      'Tripled the inbound pipeline in 90 days with shared intent across Google Ads and organic—42 content assets rebuilt and automation that kept velocity high.',
    image: '/images/LegendaryRealEstateCaseSTudy/GoogleAdsSCreenshot.png',
    imageAlt: 'Google Ads campaign performance for Legendary Real Estate Services',
    outcomes: [
      '3× pipeline lift in weeks, not quarters',
      'Google Ads + organic under one playbook',
      'CRM-ready conversations, not vanity clicks',
    ],
  },
  {
    id: 'eagan-luxury-real-estate',
    title: 'Eagan Luxury Real Estate',
    region: 'St. Petersburg, FL',
    badge: '#1 Realtor in Dolphin Cay, FL',
    metric: '$11M+ closed volume',
    summary:
      'Built brand and search from zero: organic visibility, Google Ads, and follow-up aligned to luxury inventory. $11M+ closed volume within three months of launch.',
    image: '/images/EaganCaseStudy/GoogleSearchConsole.png',
    imageAlt: 'Organic visibility growth for Eagan Luxury Real Estate',
    outcomes: [
      '$11M+ volume within 3 months',
      '0 to 812 daily impressions',
      'Home valuation leads under $40 CPL',
    ],
  },
  {
    id: 'marquis-farwell-group',
    title: 'Marquis + Farwell Group',
    region: 'Sonoma County, CA',
    badge: 'Luxury Realtor in Sonoma',
    metric: '19× daily organic clicks',
    summary:
      'Transformed organic visibility in Sonoma County—from 2 clicks per day to 38—generating qualified buyer leads directly from search.',
    image: '/images/MarquisFarwellGoogleSearchConsole.png',
    imageAlt: 'Google Search Console growth for Marquis + Farwell',
    outcomes: [
      '19× daily organic traffic',
      'Neighborhood authority at scale',
      'Qualified buyers from search intent',
    ],
  },
  {
    id: 'willow-brook-realty',
    title: 'Willow Brook Realty',
    region: 'Vermont & New Hampshire',
    badge: 'Vermont Realtor of the Year',
    metric: '2 clients in 3 weeks',
    summary:
      'From zero visibility to 46 leads and 2 new clients in 3 weeks—local SEO, Google Business Profile, and targeted ads across dual markets.',
    image: '/images/Cities/NewHampshire.jpg',
    imageAlt: 'Willow Brook Realty market presence',
    outcomes: [
      '46 leads in the launch window',
      '2 new clients in 3 weeks',
      'Full inbound foundation in dual states',
    ],
  },
]
