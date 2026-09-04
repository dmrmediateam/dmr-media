/** Shared copy & structured data for `/google-ads-management` (server + client). */

import type { SeoHeroCaseStudySlide } from '@/components/SeoHeroCaseStudyShowcase'

export const FAQ_ITEMS = [
  {
    question: 'What is PPC management for real estate?',
    answer:
      'PPC (pay-per-click) management is the ongoing strategy, build, and optimization of your paid search program: keyword research and intent mapping, hyper-local geo-targeting, negative keywords, ad copy and extensions, landing pages, bid and budget management, remarketing, and conversion tracking. For real estate that means campaigns across Google Ads Search, Maps, and Performance Max tuned to how buyers and sellers actually search your markets, with reporting tied to qualified conversations instead of raw clicks.',
  },
  {
    question: 'How much does PPC management for real estate cost?',
    answer:
      'Two parts: ad spend you pay Google directly for clicks, and a management fee that covers strategy, build, optimization, landing support, and reporting. Real estate click costs vary widely by market and intent, which is why disciplined management matters more than raw budget. Documented client rebuilds have cut cost per lead by as much as 88 percent, from $86.36 to $10.46. Scope is agreed after we map your markets, inventory, and goals.',
  },
  {
    question: 'Is PPC worth it for real estate agents?',
    answer:
      'When it is managed around intent, yes. Unlike portal leads you rent from Zillow or Realtor.com, PPC puts your brand in front of buyers and sellers at the moment they search, and every lead lands in your CRM as a contact you own. The teams we manage have documented 3x pipeline lifts and 28-plus qualified leads per week after restructures. PPC underperforms when campaigns chase clicks instead of qualified conversations, which is exactly what management is for.',
  },
  {
    question: 'How quickly will real estate PPC produce leads?',
    answer:
      'Search and Maps can move within days of launch. Lead quality and cost per lead usually stabilize over the first few weeks as conversion data accumulates. Retargeting and nurture are built to compound over 60 to 90 days.',
  },
  {
    question: 'How do you prevent wasted PPC spend?',
    answer:
      'Intent layers on keywords, disciplined geography, placement exclusions, conversion-based bidding once signals exist, weekly search term reviews, and CRM feedback loops. We prioritize qualified conversations, not vanity clicks.',
  },
  {
    question: 'Can you manage PPC campaigns in multiple markets?',
    answer:
      'Yes. Accounts use geo-segmented campaigns, shared brand assets where it helps, and market-specific negatives and copy so budgets do not bleed across metros. Reporting breaks out performance by region.',
  },
  {
    question: 'Do you manage Facebook ads too, or just Google?',
    answer:
      'Google Ads is the core of our PPC management because search captures active intent: someone typing "homes for sale in your market" is closer to a transaction than someone scrolling a feed. Where paid social fits a goal, such as listing launches or retargeting, we advise on the mix, but we optimize the budget toward the channel producing qualified conversations at the best cost.',
  },
  {
    question: 'How is PPC management pricing scoped?',
    answer:
      'After your account audit we align scope to market competition, campaign count, landing needs, and your growth target, then we put deliverables in writing. No opaque packages, no surprise invoices for basic optimization.',
  },
] as const

/** What DMR's PPC management includes — rendered as the deliverables grid. */
export const ppcDeliverables = [
  {
    title: 'Keyword research & intent mapping',
    body: 'Buyer, seller, luxury, relocation, and investment queries mapped to your inventory and GCI goals — not a keyword dump from last year\'s playbook.',
  },
  {
    title: 'Hyper-local geo-targeting',
    body: 'Budgets focused on the neighborhoods, zip codes, and price bands where you actually work, with bid adjustments where your margin lives.',
  },
  {
    title: 'Negative keywords & search-term reviews',
    body: 'Weekly reviews that cut rentals, jobs, DIY, and out-of-market queries before they burn budget. Discipline is where PPC margin is won.',
  },
  {
    title: 'Ad copy, extensions & message match',
    body: 'Ads, sitelinks, and calls that keep the promise the click was sold — protecting Quality Score, click cost, and conversion rate together.',
  },
  {
    title: 'Landing page strategy',
    body: 'Message-matched paths on your existing site, or purpose-built landing pages when the site caps conversion. The ad and the page work as one unit.',
  },
  {
    title: 'Bid & budget management',
    body: 'Conversion-based bidding once signals exist, seasonal pacing, and budget shifts toward the campaigns producing qualified conversations.',
  },
  {
    title: 'Remarketing for long sales cycles',
    body: 'Real estate decisions take months. Retargeting and nurture keep you in front of serious prospects between first search and signed agreement.',
  },
  {
    title: 'Tracking, CRM feedback & reporting',
    body: 'Calls, forms, and offline outcomes fed back into bidding, with weekly reporting on CPL, search themes, and pipeline your team can trace to names.',
  },
] as const

export const heroCaseStudySlides: SeoHeroCaseStudySlide[] = [
  {
    id: 'vignette-realty',
    href: '/case-study/vignette-realty',
    teamName: 'Vignette Realty',
    region: 'Franklin, NC',
    highlight: '71% lower cost per conversion',
    image: '/images/case-studies/vignette-realty/google-ads-june-dmr.png',
    imageAlt: 'Google Ads dashboard showing improved conversion metrics for Vignette Realty',
  },
  {
    id: 'hitchcock-properties',
    href: '/case-study/hitchcock-properties',
    teamName: 'Hitchcock Properties',
    region: 'Panama City Beach, FL',
    highlight: '88% lower cost per lead',
    image: '/images/case-studies/hitchcock-properties/google-ads-dashboard.png',
    imageAlt: 'Google Ads dashboard showing lower CPL for Hitchcock Properties',
  },
  {
    id: 'eagan-luxury-real-estate',
    href: '/case-study/eagan-luxury-real-estate',
    teamName: 'Eagan Luxury Real Estate',
    region: 'St. Petersburg, FL',
    highlight: '$11M+ closed volume, Q1 2026',
    image: '/images/EaganCaseStudy/GoogleSearchConsole.png',
    imageAlt: 'Growth trajectory for Eagan Luxury with Google Ads and organic',
  },
  {
    id: 'jade-legendary-real-estate',
    href: '/case-study/jade-legendary-real-estate',
    teamName: 'Legendary Real Estate Services',
    region: 'Lake Geneva, WI',
    highlight: '3× inbound pipeline in 90 days',
    image: '/images/LegendaryRealEstateCaseSTudy/SEMRUSHTraffic.png',
    imageAlt: 'Demand growth for Legendary Real Estate Services',
  },
]

export const stakesThree = [
  {
    title: 'Intent',
    subtitle: 'Paying for the wrong click',
    body:
      'Broad match chaos, generic landing pages, and budgets that chase volume instead of appointments bleed margin fast. If campaigns are not mapped to how buyers search your inventory, you fund Google’s auction, not your pipeline.',
  },
  {
    title: 'Trust',
    subtitle: 'The message-match gap',
    body:
      'Ads promise luxury service; the site delivers a template. Quality Score drops, CPL rises, and your team stops believing paid search is a channel they can defend to leadership.',
  },
  {
    title: 'Measurement',
    subtitle: 'Optimizing in the dark',
    body:
      'Form fills without CRM feedback teach algorithms the wrong lesson. The cost is not “bad ads.” It is qualified conversations you never get because bidding never learned what a real appointment looks like.',
  },
] as const

export const dmrVsAlternatives = [
  { label: 'Strategy', dmr: 'Intent maps tied to listings, markets, and GCI goals', other: 'Keyword dumps from last year’s playbook' },
  { label: 'Execution', dmr: 'Search, Maps, P-Max, and landing paths shipped weekly', other: 'Set-and-forget campaigns' },
  { label: 'Message match', dmr: 'Ads, extensions, and landings aligned to the click', other: 'Generic site sends that kill conversion' },
  { label: 'Proof', dmr: 'CPL, CPA, and pipeline tied to CRM names', other: 'Dashboard screenshots without business context' },
  { label: 'Integration', dmr: 'Ads + SEO + site work from one accountable team', other: 'Agency blames the website; web vendor blames ads' },
] as const

export const processPhases = [
  {
    title: 'Audit',
    description:
      'We map wasted spend, match-type risk, conversion gaps, and where budgets should move first, prioritized by revenue impact, not platform defaults.',
  },
  {
    title: 'Architect',
    description:
      'Campaign structure, negatives, geo layers, and landing paths built so Search, Maps, and Performance Max reinforce one intent map.',
  },
  {
    title: 'Launch',
    description:
      'Tracking, call routing, and CRM handoffs verified before scale. No “go live” until names, sources, and qualified definitions match how you sell.',
  },
  {
    title: 'Optimize',
    description:
      'Weekly search-term reviews, bid and budget shifts, and creative tests tied to cost per qualified conversation, not vanity CTR.',
  },
] as const

export const frameworkPillars = [
  {
    title: 'Search & Maps intent',
    body: 'Keyword layers, geo discipline, and negatives that protect margin while you scale luxury, relocation, and investment queries.',
    image: '/images/case-studies/hitchcock-properties/google-ads-dashboard.png',
    imageAlt: 'Google Ads campaign performance example',
  },
  {
    title: 'Landing path precision',
    body: 'Headlines, extensions, and on-site experiences that keep the promise made in the ad so Quality Score and conversion rate defend CPL.',
    image: '/images/screencapture-eaganluxury-2026-09-04.png',
    imageAlt: 'Luxury real estate landing experience',
  },
  {
    title: 'Closed-loop measurement',
    body: 'Calls, forms, and offline outcomes fed back into bidding so automation learns from appointments and revenue, not junk leads.',
    image: '/images/case-studies/hitchcock-properties/lead-crm.png',
    imageAlt: 'Lead tracking and CRM handoff example',
  },
] as const

export const adsProof = [
  {
    term: 'Our own Google Ads',
    result: 'Profitable demand',
    note: 'We run the same Search and conversion stack on DMR that we build for clients, so recommendations come from live accounts, not slides.',
  },
  {
    term: 'Client CPL rebuilds',
    result: '88% lower lead cost',
    note: 'Hitchcock Properties moved from $86.36 to $10.46 CPL with niche Search and Performance Max in weeks, not quarters.',
  },
  {
    term: 'Pipeline outcomes',
    result: '3× qualified volume',
    note: 'Legendary and Eagan programs pair paid demand with landing and follow-up so ads feed conversations sales can run.',
  },
] as const

export const serviceStats = [
  {
    value: '88%',
    label: 'Lower CPL',
    description: 'Documented Hitchcock Properties rebuild vs. prior broad PPC setup.',
  },
  {
    value: '28+',
    label: 'Leads per week',
    description: 'High-intent vacation-rental conversations after account restructure.',
  },
  {
    value: '3×',
    label: 'Qualified pipeline',
    description: 'Typical lift when intent, landing paths, and CRM feedback align.',
  },
] as const
