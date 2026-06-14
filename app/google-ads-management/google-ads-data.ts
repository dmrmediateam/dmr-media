/** Shared copy & structured data for `/google-ads-management` (server + client). */

import type { SeoHeroCaseStudySlide } from '@/components/SeoHeroCaseStudyShowcase'

export const FAQ_ITEMS = [
  {
    question: 'How much does Google Ads cost for real estate?',
    answer:
      'You pay Google directly for clicks. We set daily budgets from market depth and conversation targets. Our management fee covers strategy, build, optimization, landing support, and reporting. Scope is agreed after we map your markets, inventory, and goals.',
  },
  {
    question: 'How quickly will Google Ads produce leads?',
    answer:
      'Search and Maps can move within days of launch. Lead quality and cost per lead usually stabilize over the first few weeks as conversion data accumulates. Retargeting and nurture are built to compound over 60 to 90 days.',
  },
  {
    question: 'Can you manage Google Ads in multiple markets?',
    answer:
      'Yes. Accounts use geo-segmented campaigns, shared brand assets where it helps, and market-specific negatives and copy so budgets do not bleed across metros. Reporting breaks out performance by region.',
  },
  {
    question: 'How do you prevent wasted ad spend?',
    answer:
      'Intent layers on keywords, disciplined geography, placement exclusions, conversion-based bidding once signals exist, weekly search term reviews, and CRM feedback loops. We prioritize qualified conversations, not vanity clicks.',
  },
  {
    question: 'How is pricing scoped?',
    answer:
      'After your account audit we align scope to market competition, campaign count, landing needs, and your growth target, then we put deliverables in writing. No opaque packages, no surprise invoices for basic optimization.',
  },
] as const

export const heroCaseStudySlides: SeoHeroCaseStudySlide[] = [
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
    image: '/images/screencapture-eaganluxury-2025-12-17-21_25_49.png',
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
