/** Shared copy & structured data for `/seller-lead-generation` (server + client). */

export const FAQ_ITEMS = [
  {
    question: 'How much do seller leads cost?',
    answer:
      'Seller leads usually cost two to three times what buyer leads cost, because fewer homeowners are searching and every listing is worth more. In one documented DMR account, Eagan Luxury, home valuation leads cost $36.93 each. Your cost depends on your market, price point, and competition, which we map in the audit before recommending a budget.',
  },
  {
    question: 'Where do seller leads come from?',
    answer:
      'The highest-intent seller leads come from people searching "what is my home worth," "home valuation," or "sell my house" in your area. We capture them with Google Search campaigns, Local Services Ads, and Google Business Profile reviews, then keep them warm with retargeting and a home value newsletter until they are ready to list.',
  },
  {
    question: 'Are the seller leads exclusive?',
    answer:
      'Yes. Every lead comes from your own campaigns, website, and profiles, so it belongs to you and is never sold to other agents. That is the difference from portal referral programs, which share sellers across agents and take a cut of your commission at closing.',
  },
  {
    question: 'How fast will I get listing appointments?',
    answer:
      'Home valuation searches can start producing leads within days of launch once tracking is right. Listing appointments take longer, because most homeowners research for months before they sell. That is why the system pairs fast search campaigns with nurture that keeps you in front of them until they are ready.',
  },
  {
    question: 'How is this different from your lead generation page?',
    answer:
      'Our real estate lead generation service covers the full inbound system for buyers and sellers. This page is the seller side only: home valuation campaigns, listing-focused landing pages, and the nurture that turns curious homeowners into signed listings.',
  },
] as const

export const stakesThree = [
  {
    title: 'Intent',
    subtitle: 'Most sellers are not ready today',
    body:
      'A homeowner who checks their home value may list in two months or two years. Agents who only call the hottest leads lose the rest to whoever keeps showing up with useful numbers until the timing is right.',
  },
  {
    title: 'Trust',
    subtitle: 'Automated estimates feel cheap',
    body:
      'Instant valuation widgets are easy to ignore. A manual valuation, with a short video walking through the comps, shows a seller you did the work. It is the moment most sellers decide which agent actually cares.',
  },
  {
    title: 'Ownership',
    subtitle: 'Paying a portal for your own listings',
    body:
      'Portal seller programs share the homeowner with several agents and take a share of your commission at closing. When the seller finds you through your own search presence, the relationship and the full commission stay yours.',
  },
] as const

export const dmrVsAlternatives = [
  {
    label: 'Targeting',
    dmr: 'Homeowners searching for a home value in the towns you list in, with presence-only location targeting',
    other: 'Broad audiences that include renters and people outside your market',
  },
  {
    label: 'Offer',
    dmr: 'A manual home valuation with a short walkthrough video, written for your price point',
    other: 'An automated estimate the seller has already seen on a portal',
  },
  {
    label: 'Follow-up',
    dmr: 'Speed-to-lead, a set cadence, retargeting, and a home value newsletter until they list',
    other: 'One call, then the lead goes cold in the CRM',
  },
  {
    label: 'Ownership',
    dmr: 'Exclusive leads from your own campaigns and profiles, no referral fee at closing',
    other: 'Shared portal sellers and a cut of your commission',
  },
  {
    label: 'Proof',
    dmr: 'Cost per valuation lead and listing appointments, reported in plain language',
    other: 'Clicks and impressions with no pipeline context',
  },
] as const

export const processPhases = [
  {
    title: 'Map seller demand',
    description:
      'We pull home valuation and "sell my house" search volume for your towns and price bands, and audit your Google Business Profile, reviews, and current seller funnel.',
  },
  {
    title: 'Build the valuation offer',
    description:
      'A seller landing page that leads with a fact about your market, a short form (just the address and contact details), and a manual valuation your team can deliver with a short video.',
  },
  {
    title: 'Launch seller campaigns',
    description:
      'Google Search campaigns for home valuation terms, with conversion tracking on every form and Google retargeting so homeowners keep seeing you after their first visit.',
  },
  {
    title: 'Nurture to the listing',
    description:
      'Call scripts, a set follow-up cadence, and a home value newsletter so the seller who is a year out still thinks of you first. We report cost per valuation lead and listing appointments.',
  },
] as const

export const frameworkPillars = [
  {
    title: 'Seller intent',
    body:
      'Google Search campaigns for "home valuation" and "what is my home worth," backed by Google Business Profile reviews so homeowners see a trusted local name when they search.',
    image: '/images/EaganCaseStudy/SearchAds.png',
    imageAlt: 'Google Search campaign structure for home valuation keywords',
  },
  {
    title: 'Valuation capture',
    body:
      'A focused valuation page with one ask and real social proof. The seller gets a manual valuation, not a widget, which is what earns the listing appointment.',
    image: '/images/MarquisFarwellGoogleSearchConsole.png',
    imageAlt: 'Search demand for home valuation pages in a local market',
  },
  {
    title: 'Listing nurture',
    body:
      'Instant routing to your CRM, a follow-up cadence with three value touches for every ask, and an annual home value email that brings past contacts back when they are ready.',
    image: '/images/JadeCRM.png',
    imageAlt: 'CRM pipeline tracking seller leads to listing appointments',
  },
] as const

export const programProof = [
  {
    label: 'Eagan Luxury · home valuation leads',
    result: '$36.93 per lead',
    note: 'Cost per home valuation lead after DMR built the brand, search presence, and Google Ads for a St. Petersburg luxury agent.',
  },
  {
    label: 'Eagan Luxury · Q1 2026',
    result: '$11,075,000 closed',
    note: 'Closed volume in the quarter right after launch, starting from zero organic traffic.',
  },
  {
    label: 'Your listings · always',
    result: '100% exclusive',
    note: 'Seller leads from your own campaigns and profiles. Never shared with other agents, and no referral fee at closing.',
  },
] as const
