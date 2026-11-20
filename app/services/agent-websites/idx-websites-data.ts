/**
 * Copy & data for `/services/agent-websites` (IDX websites for realtors).
 * Layout mirrors the /landing/website-development page; copy is written for
 * search (Copyblogger structure: problem, teaching, proof, one CTA).
 * Shared by the server page (metadata, JSON-LD) and the client content.
 */
import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'

export const PAGE_PATH = '/services/agent-websites'
export const QUOTE_CTA = 'Get my quote & examples'

export const IDX_META = {
  title: 'IDX Websites for Realtors: Design & Development | DMR Media',
  description:
    'IDX websites for realtors, designed to your brand: live MLS search on your own domain, listing pages Google can read, and lead capture built in.',
  ogTitle: 'IDX Websites for Realtors, Built to Capture More Leads',
  ogDescription:
    'Custom IDX real estate websites with live MLS home search on your domain, indexable listing pages, and lead capture.',
} as const

/** Hero + form settings, in the shape the shared conversion hero expects. */
export const idxHeroConfig: Pick<
  ChannelLandingConfig,
  | 'formName'
  | 'formConfig'
  | 'heroTitleSegments'
  | 'heroTitleEmphasis'
  | 'heroIntro'
  | 'heroIntroShort'
  | 'heroIntroParagraphs'
  | 'partnerStats'
> = {
  // Same form name this page has always submitted, so CRM routing is unchanged.
  formName: 'real-estate-agent-websites-apply',
  formConfig: {
    title: 'Get your IDX website quote',
    subtitle: 'Takes about 60 seconds',
    question: 'Where should we send pricing, timelines, and examples?',
    submitLabel: QUOTE_CTA,
    footnote: 'No spam. Custom pricing and live examples for your market, usually same day.',
    ariaLabel: 'IDX website quote request',
    fieldSet: 'full',
  },
  heroTitleSegments: [
    { text: 'IDX Websites for Realtors, ' },
    { text: 'Built to Capture More Leads', italic: true },
    { text: '.' },
  ],
  heroTitleEmphasis: '',
  heroIntro: '',
  heroIntroShort:
    'Live MLS home search on your own domain, listing pages Google can read, and lead capture built in. We design, build, and host it for you.',
  heroIntroParagraphs: [
    [
      { text: 'IDX website development for agents and teams: a site designed to your brand, with live MLS home search on your own domain and ' },
      { text: 'lead capture built in', italic: true },
      { text: '. Buyers search, save, and register with you, not a portal.' },
    ],
  ],
  partnerStats: [],
}

/** The three terms agents mix up, explained in one line each. */
export const IDX_TERMS = [
  { term: 'MLS', body: 'The listing database the agents in your market share. You need a membership to use it.' },
  { term: 'IDX', body: 'Internet Data Exchange: the feed and rules that let you show those listings to the public.' },
  { term: 'IDX website', body: 'Your own site, where buyers search those listings, save homes, and register with you.' },
] as const

/** Why most IDX setups lose the lead (the problem section). */
export const IDX_PROBLEMS = [
  {
    number: '01',
    title: 'Listings Google cannot read',
    body: 'Many IDX tools load listings in an iframe or widget. Buyers can search, but Google sees an empty box, so your neighborhood and listing pages never rank and the portals keep the traffic.',
  },
  {
    number: '02',
    title: 'Searches that never become leads',
    body: 'Home search with no registration prompt lets buyers browse forever and leave. Ask too early and they bounce. Asking after a few property views is the balance we build in, with a short form.',
  },
  {
    number: '03',
    title: 'Leads that stall outside your CRM',
    body: 'IDX leads that land in a separate inbox wait hours for a reply. The buyer who was ready this week talks to whoever answered first. Every lead on a DMR site goes straight to your CRM.',
  },
] as const

export const IDX_INCLUDED = [
  {
    title: '600+ MLSs integrated',
    body: 'Live listings, saved searches, and alerts on your own site, with your MLS display rules checked before launch.',
    photo: '/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg',
  },
  {
    title: 'Pages Google can read',
    body: 'Neighborhood, zip code, and listing pages on your domain, so the searches your buyers run can find you.',
    photo: '/images/StockHomes/spacious-living-room-with-staircase-in-residence-2025-10-10-15-17-44-utc (1).jpg',
  },
  {
    title: 'Lead capture built in',
    body: 'Listing registration and home-valuation forms that send every buyer and seller to your CRM.',
    photo: '/images/StockHomes/modern-villa-interior-with-sparkle-floor-2024-10-18-09-40-13-utc.jpg',
  },
] as const

export const IDX_PROCESS = {
  eyebrow: 'From kickoff to launch',
  title: 'How IDX website development works',
  intro: 'Three steps from kickoff to a live IDX website. Most agent and team sites launch in about four weeks.',
  weeks: [
    {
      label: 'Step 1',
      title: 'Discovery & MLS setup',
      body: 'We confirm your MLS, map the towns and neighborhoods your buyers search, and start the IDX approval. You approve a design direction.',
    },
    {
      label: 'Step 2',
      title: 'Build on a live preview',
      body: 'We build on preview links with IDX search, area pages, and lead capture. You review every page and approve it.',
    },
    {
      label: 'Step 3',
      title: 'Launch & ongoing updates',
      body: 'We move your domain, submit your sitemap to Google, and launch. After that, send us a change and we make it.',
    },
  ],
}

export const IDX_FURTHER_READING = [
  { label: 'iHomefinder vs IDX Broker: which IDX provider fits you', href: '/blog/ihomefinder-vs-idx-broker-in-2026' },
  { label: 'Showcase IDX reviews: the SEO-friendly IDX option', href: '/blog/showcase-idx-reviews' },
  { label: 'Which MLSs we connect to', href: '/mls-integrations' },
  { label: 'Real estate website design', href: '/real-estate-website-design' },
  { label: 'Real estate website examples & templates', href: '/real-estate-agent-website-samples' },
  { label: 'Single property websites', href: '/single-property-websites' },
] as const

export const IDX_FINAL_CTA = {
  eyebrow: 'Ready when you are',
  title: 'Your next buyer is searching homes tonight. Make it on your website.',
  body: 'Get pricing, timelines, and live IDX website examples for your market, usually the same day.',
  ctaLabel: QUOTE_CTA,
  reassurance: ['Approve it on a live preview before launch', 'Design ownership after 6 months', 'Connected to your MLS'],
}

/** Informational answers only (no pitches): these also feed the FAQPage schema. */
export const IDX_FAQ = [
  {
    question: 'What is an IDX website?',
    answer:
      'An IDX website is a real estate website that shows live MLS listings on your own domain. IDX (Internet Data Exchange) is the set of rules that lets agents display MLS listings publicly, so buyers search homes on your site instead of leaving for a portal, and every inquiry comes to you.',
  },
  {
    question: 'What is the difference between IDX and MLS?',
    answer:
      'The MLS is the database of listings that agents in your market share. IDX is the permission and data feed that lets you display those listings publicly on your website. You need MLS membership to get an IDX feed, and each MLS sets its own display rules.',
  },
  {
    question: 'Does IDX help my website rank on Google?',
    answer:
      'It can, if listings are built as real pages on your domain. Many IDX tools load listings in an iframe or script widget that search engines cannot read, so the site gets no SEO credit. Neighborhood and listing pages that live on your domain can rank for the searches your buyers run.',
  },
  {
    question: 'How much does an IDX website cost?',
    answer:
      'It depends on the build: templated, semi-custom (a custom home page plus team and about pages), or fully custom, plus a monthly fee for hosting, your MLS/IDX feed, and updates. Your MLS and the number of neighborhood pages also affect price. Both fees are in writing before you start.',
  },
  {
    question: 'Which MLSs do you work with?',
    answer:
      'We connect through IDX Broker, which covers more than 600 MLSs across all 50 states. Before launch we confirm your MLS display rules, such as listing attribution, disclaimers, and brokerage logo placement.',
  },
  {
    question: 'Can I keep my current website and add IDX?',
    answer:
      'Often, yes. If your site is fast and well built, IDX search, listing pages, and lead capture can be added to it. If it is slow, locked to a template, or hard for Google to read, a rebuild usually pays off faster.',
  },
  {
    question: 'My brokerage or CRM already gives me an IDX site. Why pay for one?',
    answer:
      'Brokerage and CRM sites usually live on their domain and look like every other agent at the company. A DMR site lives on your own domain, connects to your MLS through IDX, and its design transfers to you after 6 months, so the traffic you build follows your career.',
  },
  {
    question: 'Is it a template or a custom design?',
    answer:
      'You choose. The templated build styles a proven layout to your brand, the semi-custom build adds a custom home page plus team and about pages, and the fully custom build is designed from scratch. On every build, the IDX listing pages follow your MLS display rules.',
  },
  {
    question: 'How long does an IDX website take to build?',
    answer:
      'Templated sites can launch in about a week. Semi-custom and fully custom agent and team sites typically launch in about four weeks from kickoff, including IDX feed approval from your MLS.',
  },
  {
    question: 'Who owns the website?',
    answer:
      'Your domain, your content, and your leads are yours from day one, and ownership of the website design transfers to you after 6 months. We host, manage, and maintain the site and your IDX feed throughout.',
  },
  {
    question: 'What happens to my current site?',
    answer:
      'Nothing changes until you approve the new site on a live preview link. Then we handle the move, including your domain and your IDX feed.',
  },
] as const
