import type { CaseStudyData } from '@/types/case-study'

export const eaganLuxuryData: CaseStudyData = {
  slug: 'eagan-luxury-real-estate',
  client: 'Eagan Luxury Real Estate',
  location: 'St. Petersburg, Florida',
  market: 'Tampa Bay / St. Petersburg',
  status: 'Ongoing',
  seo: {
    title: 'Eagan Luxury Real Estate — $11M Closed Volume, Q1 2026 | DMR Media',
    description:
      'From zero organic traffic to $11,075,000 in closed sales volume in Q1 2026. DMR Media built the brand, dominated organic search, and layered in Google Ads for Eagan Luxury Real Estate in St. Petersburg, FL.',
    canonical: 'https://www.dmrmedia.org/case-study/eagan-luxury-real-estate',
    ogImage: '/images/screencapture-eaganluxury-2025-12-17-21_25_49.png',
    datePublished: '2024-12-17',
    dateModified: '2026-03-25',
  },
  hero: {
    image: '',
    imageAlt: 'Eagan Luxury Real Estate website homepage — DMR Media St. Petersburg Florida',
    subtitle:
      'Zero organic traffic. Zero rankings. Strong agents with no digital foundation. We built the system — brand consolidation, full SEO, and targeted Google Ads — and Eagan Luxury closed $11,075,000 in Q1 2026.',
  },
  metrics: [
    { number: '$11.07M', label: 'Closed Volume', context: 'Q1 2026' },
    { number: '0 → 812', label: 'Daily Impressions', context: 'Google Search Console' },
    { number: '#1', label: 'Ranked', context: '"Realtor in Dolphin Cay"' },
    { number: '$36.93', label: 'Cost Per Lead', context: 'Home valuation (Google Ads)' },
  ],
  reviews: [],
  sections: [
    {
      id: 'the-problem',
      eyebrow: 'The Problem',
      headline: 'Strong Agents. Zero Online Presence.',
      body: [
        `Eagan Luxury Real Estate had everything it takes to dominate the St. Petersburg luxury market — elite agents, deep community knowledge, and a high-quality brand. What they didn't have was a single buyer finding them online.`,
        `Before DMR Media, their website generated zero organic traffic. Not a trickle. Zero. Luxury buyers searching for homes in Dolphin Cay, waterfront properties in Tierra Verde, and high-end listings across greater Pinellas County were landing on competitor websites. Eagan Luxury didn't even show up.`,
        `The team was competing at the highest level of real estate without a digital foundation to match. No keyword rankings. No local SEO authority. No content strategy. No paid system to capture demand. Fragmented legacy websites were splitting what little authority existed across multiple domains — none of them strong enough to rank for anything meaningful.`,
        `Every day without a digital system was a day a buyer chose someone else.`,
      ],
    },
    {
      id: 'the-diagnosis',
      eyebrow: 'The Diagnosis',
      headline: 'The Market Was Winnable. They Just Needed the System.',
      body: [
        `Our audit confirmed the damage: multiple fragmented legacy websites, split domain authority, zero keyword rankings, and no content architecture. The Dolphin Cay community website, the Tierra Verde community website, and several other properties were each operating independently — diluting the brand and canceling each other out in search.`,
        `But the opportunity was obvious. St. Petersburg luxury real estate — especially niche waterfront communities like Dolphin Cay — had real buyer demand and thin competition at the top. The market was winnable. Eagan Luxury had the brand. They just needed a unified system to go take it.`,
        `The plan: consolidate the brand into one authoritative presence, build an <a href="/seo-optimization">SEO engine</a> designed to own their niche, then layer in <a href="/google-ads-management">Google Ads</a> to capture qualified buyers already searching. Every piece built on the last.`,
      ],
    },
    {
      id: 'the-solution',
      eyebrow: 'The Solution',
      headline: 'Three Phases. One System.',
      body: [],
      phases: [
        {
          label: 'Phase 01',
          name: 'Build the Foundation — December 2024',
          body: `We consolidated multiple fragmented websites into one unified brand presence at eaganluxury.com. The new site launched December 17, 2024 with surgical 301 redirects mapping every legacy URL to its new home. Result: zero measurable ranking loss and a 10% increase in tracked keywords at launch. The foundation was set without losing a single position — and with more firepower than any of the legacy sites had individually.`,
        },
        {
          label: 'Phase 02',
          name: 'Dominate Organic Search',
          body: `With the foundation live, we deployed a full SEO campaign built around owning Eagan Luxury's niche. Five blog posts per month targeting both top-of-funnel discovery content ("Green Parrots in St. Pete," "Retiring in Florida") and high-intent buyer searches ("Dolphin Cay homes for sale," "luxury waterfront homes St. Petersburg"). Five hundred citations per month to build local authority. Two high-quality backlinks per month to build domain strength. The result: daily impressions climbed from 0 to 812. Eagan Luxury now ranks #1 for "Realtor in Dolphin Cay" — their most valuable niche search.`,
        },
        {
          label: 'Phase 03',
          name: 'Layer in Paid Demand — Google Search Ads',
          body: `Once the organic foundation was in place, we launched Google Search Ads optimized for qualified buyers. The campaign generates home valuation leads at $36.93 each — well below industry benchmarks for luxury real estate. Within the first 30 days of ads running, Eagan Luxury secured a $1,000,000 listing. That listing sold in one day.`,
        },
      ],
    },
    {
      id: 'results',
      eyebrow: 'The Results',
      headline: '$11,075,000 in Closed Volume. Starting From Zero.',
      body: [
        `Starting from zero organic traffic, Eagan Luxury Real Estate closed <strong>$11,075,000 in sales volume in Q1 2026</strong> — the quarter immediately following their site launch. That is not a projection. That is the scoreboard.`,
        `Daily search impressions grew from 0 to 812. They now hold the #1 ranking for "Realtor in Dolphin Cay." Their Google Ads generate qualified home valuation leads at $36.93 each. Within the first 30 days of ads going live, they landed a $1M listing that sold in a single day.`,
        `This is what happens when brand, SEO, and paid search work together as a system — not as separate tactics, but as one compounding machine built to produce results.`,
      ],
      screenshots: [
        {
          src: '/images/EaganCaseStudy/GoogleSearchConsole.png',
          alt: 'Google Search Console showing Eagan Luxury Real Estate impressions growing from 0 to 812 daily — DMR Media',
          caption: 'Google Search Console — Daily impressions: 0 → 812',
        },
        {
          src: '/images/EaganCaseStudy/SearchAds.png',
          alt: 'Google Ads transparency showing Eagan Luxury Real Estate active campaigns — DMR Media St. Petersburg',
          caption: 'Google Search Ads — 22 active ads for eaganluxury.com',
        },
      ],
    },
  ],
}
