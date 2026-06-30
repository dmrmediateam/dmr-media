import type { CaseStudyData } from '@/types/case-study'

const IMG = {
  hero: '/images/case-studies/vignette-realty/pearsons-falls-wnc.jpg',
  card: '/images/case-studies/vignette-realty/pearsons-falls-wnc.jpg',
  googleAdsMay: '/images/case-studies/vignette-realty/google-ads-may-luxury-presence.png',
  googleAdsJune: '/images/case-studies/vignette-realty/google-ads-june-dmr.png',
  leadCrm: '/images/case-studies/vignette-realty/lead-nurture-crm.png',
} as const

export const vignetteRealtyData: CaseStudyData = {
  slug: 'vignette-realty',
  client: 'Vignette Realty',
  location: 'Franklin, North Carolina',
  market: 'Western North Carolina Mountains',
  status: 'Ongoing',
  seo: {
    title: 'Vignette Realty — 71% Lower Cost Per Lead in 30 Days | DMR Media',
    description:
      'DMR Media rebuilt Vignette Realty’s Google Ads from Smart campaigns to intent-based Search and Demand Gen. Cost per conversion fell from $317 to $93 while qualified leads rose 50% at 27% lower spend.',
    canonical: 'https://www.dmrmedia.org/case-study/vignette-realty',
    ogImage: IMG.hero,
    datePublished: '2026-06-29',
    dateModified: '2026-06-29',
  },
  hero: {
    image: IMG.hero,
    imageAlt: 'Pearson’s Falls near Franklin, North Carolina — Vignette Realty market',
    subtitle:
      'Kristie Brennan and Rashaune De La Cruz built Vignette Realty on a simple idea: every home has a story. With 550+ closings and 300+ five-star reviews, their marketing should match their service. DMR replaced Luxury Presence Smart campaigns with custom creative, intent-based Search, Demand Gen, and AI lead nurture — cutting cost per conversion 71% in 30 days.',
  },
  metrics: [
    { number: '-71%', label: 'Cost per conversion', context: '$317 → $93' },
    { number: '48', label: 'Total leads', context: '+41% vs May' },
    { number: '9', label: 'Qualified handoffs', context: '+50% vs May' },
    { number: '8.11%', label: 'Buyer search CVR', context: 'Intent-based campaigns' },
    { number: '-27%', label: 'Ad spend', context: '$6,023 → $4,376' },
  ],
  reviews: [
    {
      text: 'THE best experience I have had working with a media specialist. Fast response time and most importantly knowledgeable. Andrew is a master at his craft, honest, transparent and it feels like a partnership not a product. I know our company is in good hands. I highly recommend!',
      author: 'Vignette Realty',
      role: 'Kristie Brennan & Rashaune De La Cruz, Co-Founders',
      image: null,
    },
  ],
  sections: [
    {
      id: 'the-problem',
      eyebrow: 'The Problem',
      headline: 'Smart Campaigns Looked Busy — But Burned Budget on the Wrong Traffic',
      body: [
        `Vignette Realty is not your typical real estate team. Founded in 2021 by Kristie Brennan and Rashaune De La Cruz, Vignette serves the mountain communities of Western North Carolina — Highlands, Cashiers, Otto, Sylva, Bryson City, and beyond. With 550+ closed transactions, $182M+ in sales volume, and 300+ five-star reviews, they had built something most teams spend a decade chasing.`,
        `But their Google Ads were not working. Their previous provider — Luxury Presence — had built two Smart campaigns running on "Maximize Clicks" bidding. In May 2026, Vignette spent $6,023 on Google Ads and generated 34 leads. Only 6 were qualified enough to hand off to an agent. That is a $317 cost per conversion and over $1,000 per qualified lead.`,
        `Kristie and Rashaune did not start Vignette to babysit ad dashboards. They started it to help families find homes in the mountains they love. But the lack of results created a nagging frustration — the feeling that their growth was being held hostage by a platform, not a partner.`,
        `A team that has closed 550+ transactions and built 300+ five-star reviews should not have to wonder whether their marketing dollars are doing anything. Teams that deliver at this level deserve marketing that matches their standard of service.`,
      ],
      screenshot: {
        src: IMG.googleAdsMay,
        alt: 'Google Ads dashboard for Vignette Realty in May 2026 showing Luxury Presence Smart campaigns with $6,023 spend and 19 conversions',
      },
    },
    {
      id: 'the-guide',
      eyebrow: 'The Guide',
      headline: 'An Embedded Partner Built for Luxury Real Estate',
      body: [
        `DMR Media Specialists stepped in as an extension of the team — embedded in the business, accountable to real outcomes, and built specifically for the luxury real estate industry.`,
        `We understood immediately what Vignette was dealing with. Smart campaigns with maximize-clicks bidding is a set-it-and-forget-it approach. It looks busy on paper — 587,000+ impressions in May — but there was no intent targeting, no campaign segmentation, and no system to separate tire-kickers from serious buyers.`,
        `DMR has built Google Ads infrastructure for real estate teams across the country, from Panama City Beach vacation rental specialists to $6.5M luxury listings. We have driven results like an 88% cost-per-lead reduction for Hitchcock Properties and $11M+ in closed volume from zero organic traffic for Eagan Luxury Real Estate. We do not guess. We build systems that convert.`,
      ],
    },
    {
      id: 'the-plan',
      eyebrow: 'The Plan',
      headline: 'Five Moves That Replaced Autopilot With Intent',
      body: [],
      phases: [
        {
          label: 'Step 1',
          name: 'Custom Ad Creative',
          body: 'Designed graphics tailored to Vignette’s brand, their mountain market, and the lifestyle buyers are actually searching for. Stock imagery and generic templates were out.',
        },
        {
          label: 'Step 2',
          name: 'Demand Gen Campaigns',
          body: 'Deployed Demand Gen across YouTube, Gmail, and Discover with custom creative and Maximize Conversions bidding — massive brand visibility with tight cost efficiency.',
        },
        {
          label: 'Step 3',
          name: 'Intent-Based Search',
          body: 'Launched buyer Search campaigns for Highlands, Franklin, Cashiers, and surrounding WNC communities with Maximize Conversions and Target CPA. Built a dedicated Seller campaign for home valuations — 12 conversions at $182 each.',
        },
        {
          label: 'Step 4',
          name: 'Paused Legacy Smart Campaigns',
          body: 'Shut down the two Luxury Presence Smart campaigns that had served as proof of what was not working.',
        },
        {
          label: 'Step 5',
          name: 'AI Lead Nurture',
          body: 'Implemented AI-powered lead nurture to engage, qualify, and warm leads automatically — turning 48 raw leads into 9 qualified handoffs agents could actually work.',
        },
      ],
    },
    {
      id: 'avoiding-failure',
      eyebrow: 'Avoiding Failure',
      headline: 'Where Smart Campaigns Were Headed Without a Restructure',
      body: [
        `At $317 per conversion and $1,000+ per qualified lead, the math does not hold. A team spending $6,000/month on ads that produce 6 qualified leads is effectively paying $1,000 per at-bat — and that is before a single showing, offer, or closing.`,
        `Over 12 months, that is $72,000 in ad spend for roughly 72 qualified leads. In a competitive mountain market where not every lead converts to a closing, the ROI collapses.`,
        `Worse, Smart campaigns give you almost zero control. Google decides who sees your ads, what searches trigger them, and where they show up. The longer they ran unchecked, the more the algorithm trained itself on low-quality traffic patterns. The campaigns were not just underperforming. They were actively getting worse.`,
      ],
    },
    {
      id: 'results',
      eyebrow: 'The Results',
      headline: 'More Leads. More Qualified Leads. 27% Less Spend.',
      body: [
        `In June 2026, DMR spent $4,376 — 27% less than May — while delivering 48 total leads (+41%), 9 qualified handoffs (+50%), and 47 Google conversions (+148%). Cost per conversion dropped from $317 to $93, a 71% reduction. Cost per qualified lead fell from $1,004 to $486.`,
        `This is not a marginal improvement. It is a structural transformation in how Vignette generates business from paid search.`,
        `Buyer Search campaigns reached an 8.11% conversion rate. The dedicated Seller campaign opened a brand-new listing pipeline with 12 conversions at $182 each — a lead type most teams ignore entirely.`,
      ],
      screenshots: [
        {
          src: IMG.googleAdsJune,
          alt: 'Google Ads dashboard for Vignette Realty in June 2026 showing DMR Demand Gen and Search campaigns with improved conversion metrics',
          caption: 'June 2026 — DMR Search, Demand Gen, and seller campaigns live',
        },
        {
          src: IMG.leadCrm,
          alt: 'AI lead nurture CRM overview for a Vignette Realty seller lead with persona, location, and qualification data',
          caption: 'AI lead nurture qualifying seller intent before agent handoff',
        },
      ],
    },
    {
      id: 'transformation',
      eyebrow: 'The Transformation',
      headline: 'From Paying for a Product to Running a System',
      body: [
        `Before DMR: Vignette was paying a platform for a product. Two generic Smart campaigns. No custom creative. No segmentation. No seller strategy. No lead qualification. $317 per conversion and climbing.`,
        `After DMR: Vignette has a system. Custom-designed ad creative that matches their brand. Demand Gen campaigns building awareness across Google’s highest-value surfaces. Intent-based Search campaigns capturing buyers and sellers at the moment of action. AI-driven lead nurture filtering noise and delivering qualified prospects to agents. $93 per conversion and improving.`,
        `The difference is not just in the numbers. Agents are not chasing dead leads. Kristie and Rashaune are not questioning whether their ad spend is doing anything. The marketing runs in the background, feeding the business, so the team can focus on what they do best — helping families write their next chapter in the mountains of Western North Carolina.`,
      ],
    },
  ],
}
