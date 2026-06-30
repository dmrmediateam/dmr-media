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
    image: '/images/Cities/LakeGeneva.jpg',
    imageAlt: 'Lake Geneva, Wisconsin — Legendary Real Estate Services market',
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
    image: '/images/Cities/Stpet.jpg',
    imageAlt: 'St. Petersburg, Florida — Eagan Luxury Real Estate market',
    outcomes: [
      '$11M+ volume within 3 months',
      '0 to 812 daily impressions',
      'Home valuation leads under $40 CPL',
    ],
  },
  {
    id: 'vignette-realty',
    title: 'Vignette Realty',
    region: 'Franklin, NC',
    badge: 'Western North Carolina',
    metric: '$93 cost per conversion',
    summary:
      'Replaced Luxury Presence Smart campaigns with custom creative, Demand Gen, Search, and AI lead nurture. Cost per conversion fell from $317 to $93 with 50% more qualified handoffs.',
    image: '/images/case-studies/vignette-realty/pearsons-falls-wnc.jpg',
    imageAlt: 'Pearson’s Falls, Western North Carolina — Vignette Realty market',
    outcomes: [
      '71% lower cost per conversion',
      '48 leads at 27% less spend',
      '8.11% buyer search conversion rate',
    ],
  },
  {
    id: 'hitchcock-properties',
    title: 'Hitchcock Properties',
    region: 'Panama City Beach, FL',
    badge: 'Panama City Beach, FL',
    metric: '$10.46 cost per lead',
    summary:
      'Replaced generic Sierra PPC with niche Google Search and P-Max. CPL fell from $86.36 to $10.46 with 28+ vacation rental leads per week in three weeks.',
    image: '/images/case-studies/hitchcock-properties/panama-city-beach.jpg',
    imageAlt: 'Panama City Beach, Florida — Hitchcock Properties',
    outcomes: [
      '88% lower cost per lead',
      '1,323% estimated ROAS',
      '30%+ lead-to-conversation rate',
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
