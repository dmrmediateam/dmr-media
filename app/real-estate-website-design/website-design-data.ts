/** Shared copy & structured data for `/real-estate-website-design` (server + client). */

/** Plain-string answers so the same list feeds the FAQ JSON-LD. */
export const FAQ_ITEMS = [
  {
    question: 'What is luxury real estate website design?',
    answer:
      'A website designed around your brand, your brokerage, and the price point you sell, with live MLS search, lead capture, and SEO built in. It is the site referrals, sign calls, Google, and AI tools judge you by, so it has to look like the agent who wins the listing and turn visitors into leads in your CRM.',
  },
  {
    question: 'Is it a template or a custom design?',
    answer:
      'You choose. The templated build styles a proven layout to your brand, the semi-custom build adds a custom home page plus meet-the-team and about pages, and the fully custom build is designed from scratch. Every tier connects to your MLS through IDX, and the listing pages follow your MLS display rules.',
  },
  {
    question: 'How much does a luxury real estate website cost?',
    answer:
      'It depends on the build: templated, semi-custom, or fully custom. Each is paired with a monthly retainer that covers hosting, your MLS/IDX feed, updates, and campaign management. Ad spend is separate. Request a proposal and we send exact pricing and examples for your market.',
  },
  {
    question: 'How long does a build take?',
    answer:
      'Templated sites can launch in about a week. Semi-custom and fully custom agent and team sites typically launch in about four weeks from kickoff. Single-property sites usually take one to two weeks, timed to your listing launch.',
  },
  {
    question: 'Will it work with my MLS?',
    answer:
      'Yes. We connect through IDX Broker, which covers more than 600 MLSs across all 50 states. Your listings, sold homes, and saved searches live on your own site, and buyers register with you instead of a portal.',
  },
  {
    question: 'Do you build websites for new developments and condo buildings?',
    answer:
      'Yes. Developments and condo buildings get a site built around the project: residences and floor plans, amenities, phase and availability updates, and registration that routes to the sales team. We pair it with Google and Meta campaigns when the launch needs demand fast.',
  },
  {
    question: 'Will the site be ready for Google and AI search at launch?',
    answer:
      'Yes. Page architecture, schema, internal linking, and community pages are part of the build. For ongoing growth after launch, most teams pair the site with SEO so Google, ChatGPT, and Perplexity keep finding them.',
  },
  {
    question: 'Who owns the website?',
    answer:
      'Your domain, your content, and your leads are yours from day one, and ownership of the website design transfers to you after 6 months of working with us. We host, manage, and maintain the site throughout.',
  },
] as const

export const stakesThree = [
  {
    title: 'First impression',
    subtitle: 'Your site is judged before you are',
    body:
      'Referrals, sign calls, and sellers interviewing agents all look you up first. If the site looks like every other agent in town, they assume your service does too.',
  },
  {
    title: 'Ownership',
    subtitle: 'Portals keep the buyer',
    body:
      'Zillow and brokerage pages send the buyer to whoever pays most. A site on your own domain, with live MLS search, keeps the search and the registration with you.',
  },
  {
    title: 'Pipeline',
    subtitle: 'Beautiful is not enough',
    body:
      'A site can look premium and still produce nothing. Lead capture, CRM routing, and pages built for search are what turn the design into conversations.',
  },
] as const

/** What every DMR website includes, rendered as the scope grid. */
export const websiteDeliverables = [
  {
    title: 'Design built to your brand',
    body: 'Typography, photography, and layout matched to you and your brokerage, from a styled template up to a fully custom design.',
  },
  {
    title: 'Live MLS search (IDX)',
    body: 'Listings, sold homes, saved searches, and alerts on your own domain, through IDX Broker’s 600+ MLS coverage.',
  },
  {
    title: 'Premium lead capture',
    body: 'Buyers register to see full listing details, and the lead lands in your CRM with the source attached.',
  },
  {
    title: 'Community & neighborhood pages',
    body: 'Pages for the areas and buildings you sell, written to rank for the searches buyers and sellers actually type.',
  },
  {
    title: 'SEO & AI search foundations',
    body: 'Clean architecture, schema, and internal linking so Google, ChatGPT, and Perplexity understand who you are and where you sell.',
  },
  {
    title: 'CRM & analytics wiring',
    body: 'Forms, calls, and registrations tracked and routed to your CRM, so you can see which pages and campaigns produce leads.',
  },
  {
    title: 'Copy written for you',
    body: 'We write the first draft of every page in your voice. You review on a live preview link and approve before launch.',
  },
  {
    title: 'Hosting, updates & follow-up scripts',
    body: 'We host and maintain the site, make changes when you send them, and hand you the follow-up scripts we test across clients.',
  },
] as const

export const dmrVsAlternatives = [
  { label: 'Design', dmr: 'Built to your brand and brokerage, up to fully custom', other: 'The same theme as other agents in your market' },
  { label: 'Listings', dmr: 'Live IDX search and registration on your domain', other: 'Buyers sent to a portal or brokerage page' },
  { label: 'Leads', dmr: 'Registration routed to your CRM, source attached', other: 'A contact form that emails an inbox' },
  { label: 'Search', dmr: 'Community pages, schema, and AI search built in', other: 'SEO retrofitted after launch, if at all' },
  { label: 'Support', dmr: 'One team for the site, SEO, and ads', other: 'Web vendor blames ads; ad agency blames the site' },
] as const

/** Sourced numbers only: each one names where it comes from. */
export const serviceStats = [
  {
    value: '3',
    label: 'DesignRush Design Awards nominations',
    description: 'Alexa Devaney (The Oppenheim Group), Carole Tierney (Coldwell Banker), and Dominick Florio (The RE/MAX Collection).',
  },
  {
    value: '600+',
    label: 'MLSs available through IDX',
    description: 'Live listings on your own site through IDX Broker, which covers more than 600 MLSs across all 50 states.',
  },
  {
    value: '3 of 3',
    label: 'AI tools name our client first',
    description: 'Google AI Overview, ChatGPT, and Perplexity each name Debi Eagan of Eagan Luxury first for Dolphin Cay, St. Petersburg.',
  },
] as const

export const processPhases = [
  {
    title: 'Discover',
    description: 'A short call on your market, brokerage, price point, and the leads you want, plus a look at what to keep from your current site.',
  },
  {
    title: 'Design',
    description: 'We design the home page and key templates to your brand and write the first draft of your copy. You review on a live preview link.',
  },
  {
    title: 'Build',
    description: 'IDX search, lead capture, community pages, CRM routing, and tracking are built and tested before anything goes live.',
  },
  {
    title: 'Launch + grow',
    description: 'We move your domain and launch, then keep the site updated and, if you want, run SEO and ads behind it.',
  },
] as const
