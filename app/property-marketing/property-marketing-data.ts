/** Shared copy & structured data for `/property-marketing` (server + client). */

export const FAQ_ITEMS = [
  {
    question: 'Do you market single listings, new developments, and condos?',
    answer:
      'Yes. We specialize in new developments and luxury condos: presale sites, phased inventory, tower launches, and boutique condo collections. We also run listing campaigns for trophy homes when the story warrants a dedicated destination and paid burst.',
  },
  {
    question: 'What is included in a property marketing campaign?',
    answer:
      'A custom property or development website, a 30-day Google Ads burst with media covered in the flat fee, listing or launch email copy, lead capture wired to your CRM, and weekly optimization against tours and qualified inquiries.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'Current DMR clients pay $2,500 per listing on pay-at-close with a 90-day cap. Non-clients pay $3,250 upfront before work begins. Development and condo programs are scoped after kickoff based on phases, unit count, and markets.',
  },
  {
    question: 'How fast can you launch?',
    answer:
      'Most single-property campaigns go live within five business days after assets and approvals. New development and condo launches are phased: we can ship a credible presale hub early, then expand as renders, floor plans, and availability modules are ready.',
  },
  {
    question: 'Can you handle phased condo or tower releases?',
    answer:
      'Yes. We structure URLs, navigation, and ads so each phase inherits authority from the project hub. Availability updates and new plan drops should add depth, not reset SEO equity or break retargeting audiences.',
  },
] as const

export const websiteExamplesForPropertyMarketing = [
  {
    id: 'ocean-breeze',
    subheading: 'Luxury waterfront villa',
    name: 'Ocean Breeze',
    description:
      'Single-property storytelling for a $6.5M Chalk Sound estate with cinematic visuals and paid search aimed at international luxury buyers.',
    url: 'https://ocean-breeze-one.vercel.app/',
    image: '/images/ClientWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-29-19_49_50.png',
    imageRight: true,
  },
  {
    id: 'valoria-homes',
    subheading: 'New construction · Midwest',
    name: 'Valoria Homes',
    description:
      'Builder-grade narrative, phased plan pages, and conversion paths for buyers comparing custom modular and spec inventory.',
    url: 'https://www.valoriahomes.com/',
    image: '/images/ClientWebsites/screencapture-valoriahomes-2026-03-04-03_34_12.png',
    imageRight: false,
  },
  {
    id: '2100-pine',
    subheading: 'Manhattan Beach, CA',
    name: '2100 Pine Ave',
    description:
      'Custom Tree Section residence with architecture-led creative, SEO-ready structure, and a 30-day paid burst aligned to South Bay intent.',
    url: 'https://2100pine.vercel.app/',
    image: '/images/propertyWebsiteImages/screencapture-2100pine-vercel-app-2026-03-25-19_45_27.png',
    imageRight: true,
  },
  {
    id: 'eagan-luxury',
    subheading: 'Coastal luxury · St. Petersburg, FL',
    name: 'Eagan Luxury',
    description:
      'Team site and listing surfaces built for waterfront condos and luxury inventory, with organic and paid systems behind the brand.',
    url: 'https://www.eaganluxury.com/',
    image: '/images/screencapture-eaganluxury-2026-09-04.png',
    imageRight: false,
  },
] as const

export const heroCaseStudySlides = [
  {
    id: 'ocean-breeze',
    href: 'https://ocean-breeze-one.vercel.app/',
    teamName: 'Ocean Breeze',
    region: 'Turks & Caicos',
    highlight: '$6.5M waterfront estate',
    image: '/images/ClientWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-29-19_49_50.png',
    imageAlt: 'Ocean Breeze luxury property marketing website',
  },
  {
    id: 'valoria-homes',
    href: 'https://www.valoriahomes.com/',
    teamName: 'Valoria Homes',
    region: 'New construction',
    highlight: 'Presale + spec buyer journey',
    image: '/images/ClientWebsites/screencapture-valoriahomes-2026-03-04-03_34_12.png',
    imageAlt: 'Valoria Homes new development website',
  },
  {
    id: '2100-pine',
    href: 'https://2100pine.vercel.app/',
    teamName: '2100 Pine Ave',
    region: 'Manhattan Beach, CA',
    highlight: 'Custom build showcase',
    image: '/images/propertyWebsiteImages/screencapture-2100pine-vercel-app-2026-03-25-19_45_27.png',
    imageAlt: '2100 Pine Ave single-property marketing site',
  },
] as const

export const stakesThree = [
  {
    title: 'Discovery',
    subtitle: 'MLS is not a launch strategy',
    body:
      'New developments and condo collections need a owned destination before the sales office opens. A thumbnail and a PDF do not carry renders, phase story, or broker-ready proof the way a dedicated site and paid burst can.',
  },
  {
    title: 'Velocity',
    subtitle: 'Phases cannot reset every drop',
    body:
      'Tower releases, plan updates, and availability changes break campaigns when the site and ads were built for a single static listing. We architect for phased inventory so each drop compounds instead of starting over.',
  },
  {
    title: 'Intent',
    subtitle: 'Luxury buyers compare narratives',
    body:
      'Affluent buyers and presale registrants decide on story, proof, and speed. Without geo-targeted search and retargeting, the most qualified visitors never return after the first scroll.',
  },
] as const

export const dmrVsAlternatives = [
  { label: 'Focus', dmr: 'New developments, condos, and trophy listings', other: 'Generic agent brochure sites' },
  { label: 'Delivery', dmr: 'Site + 30-day ads + email in one coordinated launch', other: 'Website only, media sold separately' },
  { label: 'Media', dmr: 'Google Ads spend included in flat fee', other: 'Client funds ads on top of retainers' },
  { label: 'Phasing', dmr: 'URLs and campaigns built for multi-phase releases', other: 'One-page launches that age poorly' },
  { label: 'Proof', dmr: 'Reporting on tours, leads, and CPL weekly', other: 'Impression screenshots without pipeline context' },
] as const

export const processPhases = [
  {
    title: 'Position',
    description:
      'Buyer personas, comp context, phase story, and creative direction so the site and ads match how this development or condo collection actually sells.',
  },
  {
    title: 'Build',
    description:
      'Custom property or development site: renders, plans, availability modules, SEO-ready structure, and lead capture wired to your workflow.',
  },
  {
    title: 'Launch',
    description:
      'Coordinated go-live: site, Google Ads burst, and launch email ready the same week your market sees the story.',
  },
  {
    title: 'Optimize',
    description:
      'Search terms, CPL, lead quality, and landing behavior reviewed weekly. Budget follows tours and qualified inquiries.',
  },
] as const

export const frameworkPillars = [
  {
    title: 'Development & condo sites',
    body: 'Presale hubs, phased plan pages, and boutique condo storytelling with fast mobile performance and broker-ready disclosures.',
    image: '/images/propertyWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-25-19_45_37.png',
    imageAlt: 'Luxury development property marketing website',
  },
  {
    title: 'Google Ads burst',
    body: 'Intent-led keywords, geo layers, and retargeting for in-market buyers, relocation intent, and investors watching new supply.',
    image: '/images/EaganCaseStudy/SearchAds.png',
    imageAlt: 'Google Ads performance for luxury property marketing',
  },
  {
    title: 'Launch email & nurture',
    body: 'Listing and phase-announcement copy in your voice, aligned to tour timing and CRM follow-up so no launch day lead goes cold.',
    image: '/images/JadeCRM.png',
    imageAlt: 'CRM pipeline for property marketing leads',
  },
] as const
