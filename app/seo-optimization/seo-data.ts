/** Shared copy & structured data for `/seo-optimization` (server + client). */

export const FAQ_ITEMS = [
  {
    question: 'How long until we see movement in search?',
    answer:
      'Technical fixes and long-tail terms often move first, sometimes within weeks. Competitive head terms compound over quarters as authority stacks. We report weekly on leading indicators (coverage, impressions, crawl health) so you always know what the work is doing, not just where you hope to land someday.',
  },
  {
    question: 'Do you guarantee #1 rankings?',
    answer:
      'No ethical partner guarantees a position you do not control. What we do guarantee is a disciplined system: clear priorities, accountable execution, and reporting tied to pipeline, not vanity charts. When you need demand while organic compounds, we pair SEO with Google Ads so you are not betting the business on a single channel.',
  },
  {
    question: 'What does ongoing SEO actually look like?',
    answer:
      'Search is a moving target: algorithms shift, competitors publish, inventory changes. Retainers include monitoring, technical hygiene, content cadence, and internal linking so your site earns trust from Google and from buyers. You stay in your lane; we own the execution rhythm.',
  },
  {
    question: 'We already have a site. Do we have to rebuild?',
    answer:
      'Usually no. Most teams need audit-first prioritization: fix what blocks crawl and conversion, then scale content. We only recommend rebuilds when the stack caps growth or makes every change expensive and slow.',
  },
  {
    question: 'How is pricing scoped?',
    answer:
      'After audit we align scope to market difficulty, site size, content velocity, and your growth target, then we put deliverables in writing. No opaque “packages,” no surprise invoices for basic edits.',
  },
] as const

/** Portfolio sites: same assets as `/real-estate-agent-website-samples` (SEO + design proof). */
export const websiteExamplesForSeo = [
  {
    id: 'legendary-real-estate',
    subheading: 'Wisconsin Realtor of the Year',
    name: 'Legendary Real Estate Services',
    description:
      'Lake Geneva luxury positioning with a site built to match Ritz-level expectations: clear story, fast UX, and search-ready structure.',
    url: 'https://legendaryrealestateservices.com/',
    image: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png',
    imageRight: true,
  },
  {
    id: 'eagan-luxury',
    subheading: 'Top team · St. Petersburg, FL',
    name: 'Eagan Luxury',
    description:
      'Coastal luxury collective with organic + paid systems behind the brand, built to win high-intent waterfront searches.',
    url: 'https://www.eaganluxury.com/',
    image: '/images/screencapture-eaganluxury-2025-12-17-21_25_49.png',
    imageRight: false,
  },
  {
    id: 'ocean-breeze',
    subheading: 'Luxury waterfront villa · Turks & Caicos',
    name: 'Ocean Breeze',
    description:
      'Single-property storytelling for a $6.5M Chalk Sound estate with cinematic visuals, fast UX, and site structure buyers (and search) can trust before they ever tour.',
    url: 'https://ocean-breeze-one.vercel.app/',
    image: '/images/ClientWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-29-19_49_50.png',
    imageRight: true,
  },
  {
    id: 'valoria-homes',
    subheading: 'Builder + brokerage',
    name: 'Valoria Homes',
    description:
      'Custom modular story + conversion paths for Midwest families, with design and messaging aligned to how people actually decide.',
    url: 'https://www.valoriahomes.com/',
    image: '/images/ClientWebsites/screencapture-valoriahomes-2026-03-04-03_34_12.png',
    imageRight: false,
  },
] as const

export type SeoWebsiteExampleForCarousel = (typeof websiteExamplesForSeo)[number]

export const stakesThree = [
  {
    title: 'Identity',
    subtitle: 'The invisible brand',
    body:
      'You have done the hard work to win listings, yet search still introduces someone else as “the” expert. If Google does not position you as the guide, buyers default to whoever looks inevitable.',
  },
  {
    title: 'Control',
    subtitle: 'The hostage stack',
    body:
      'Templates, bloated plugins, and mystery retainers quietly cap what you can publish, how fast you can ship, and what you can measure. You pay for a website, but you do not fully own the growth engine.',
  },
  {
    title: 'Performance',
    subtitle: 'Hope is not a channel',
    body:
      'Traffic without intent is noise. Rankings without GCI-aligned pages are vanity. The cost is not “bad SEO.” It is deals you never see because the right buyer searched and chose a competitor’s narrative.',
  },
] as const

export const dmrVsAlternatives = [
  { label: 'Strategy', dmr: 'Roadmap tied to your market, inventory, and GCI goals', other: 'Generic keyword lists' },
  { label: 'Execution', dmr: 'Technical + content shipped on a weekly cadence', other: 'Quarterly “reports,” little shipping' },
  { label: 'Ownership', dmr: 'You approve; we execute, with no permission theater', other: 'Ticket queues and surprise billable hours' },
  { label: 'Proof', dmr: 'Documented lifts in impressions, clicks, and pipeline', other: 'Screenshots without business context' },
  { label: 'Integration', dmr: 'SEO + Ads + site work from one accountable team', other: 'Fragmented vendors, conflicting advice' },
] as const

export const processPhases = [
  {
    title: 'Diagnose',
    description:
      'We map the gap between how buyers search your market and how your site answers, then prioritize fixes by revenue impact, not ego metrics.',
  },
  {
    title: 'Stabilize',
    description:
      'Crawl clarity, speed, schema, and indexation: remove friction so every future page compounds instead of fighting the foundation.',
  },
  {
    title: 'Scale',
    description:
      'Editorial systems, neighborhood depth, and internal linking that earn trust from Google and from humans ready to transact.',
  },
  {
    title: 'Compound',
    description:
      'Measurement loops tied to leads and listings. Iterate weekly so rankings, content, and spend reinforce one another.',
  },
] as const

export const frameworkPillars = [
  {
    title: 'Technical SEO',
    body: 'Architecture, Core Web Vitals, schema, and crawl budget, so luxury media and IDX footprints do not silently cap growth.',
    image: '/images/EaganCaseStudy/GoogleSearchConsole.png',
    imageAlt: 'Search visibility and performance signals',
  },
  {
    title: 'On-page precision',
    body: 'Entities, headings, and internal links aligned to how affluent buyers actually phrase intent, not generic volume chasing.',
    image: '/images/landing/google-general/03-semrush-ranking.png',
    imageAlt: 'Competitive visibility and keyword context',
  },
  {
    title: 'Content systems',
    body: 'Neighborhood pillars, market proof, and listing support pages that earn links and defend your price tier over time.',
    image: '/images/MarquisFarwellGoogleSearchConsole.png',
    imageAlt: 'Organic growth trajectory example',
  },
] as const
