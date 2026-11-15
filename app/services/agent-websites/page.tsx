import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import ServicePageTemplate, { type ServicePageData } from '@/components/ServicePageTemplate'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'IDX Websites for Realtors | IDX Real Estate Websites | DMR Media',
  description: 'IDX websites for realtors: custom real estate sites with MLS home search, indexable listing and area pages, lead capture, and CRM routing. Built to rank and convert.',
  keywords: ['idx website', 'idx websites', 'idx real estate websites', 'idx websites for realtors', 'real estate website with idx', 'idx real estate', 'real estate agent websites'].join(', '),
  alternates: { canonical: `${BASE}/services/agent-websites` },
  openGraph: { title: 'IDX Websites for Realtors | DMR Media', description: 'Custom IDX real estate websites with MLS home search, indexable listing pages, and lead capture.', url: `${BASE}/services/agent-websites`, siteName: 'DMR Media', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'IDX Websites for Realtors | DMR Media', description: 'Custom IDX real estate websites with MLS home search, indexable listing pages, and lead capture.' },
}

const faqItems = [
  { question: 'What is an IDX website?', answer: 'IDX (Internet Data Exchange) is the set of rules that lets an agent show MLS listings on their own website. An IDX website pulls live listings from your MLS so visitors can search homes on your site instead of leaving for a portal, and every inquiry comes to you.' },
  { question: 'What is the difference between IDX and MLS?', answer: 'The MLS is the database of listings that agents in your market share. IDX is the permission and data feed that lets you display those listings publicly on your website. You need MLS membership to get an IDX feed, and each MLS sets its own display rules.' },
  { question: 'Does IDX help my website rank on Google?', answer: 'It can, if the listings are built as real, indexable pages on your domain. Many IDX tools load listings in an iframe or script widget that search engines cannot read, so the site gets no SEO credit. We build IDX so neighborhood and listing pages live on your domain and can rank.' },
  { question: 'How much does an IDX website cost?', answer: 'Cost depends on the IDX provider your MLS supports, how many custom pages and areas you need, and whether lead routing into your CRM is included. We scope after a discovery call so pricing reflects your market and MLS, not a one-size package.' },
  { question: 'Which MLSs do you work with?', answer: 'We connect to the IDX providers that serve most U.S. MLSs. You can check your market in our MLS integrations directory, and we confirm your MLS display rules (attribution, disclaimers, brokerage logo) before launch.' },
  { question: 'Can I keep my current website and add IDX?', answer: 'Often, yes. If your site is fast and well built, we can add IDX search, listing pages, and lead capture to it. If it is slow, template-bound, or hard to index, a rebuild usually pays off faster.' },
]

const pageData: ServicePageData = {
  applyFormName: 'real-estate-agent-websites-apply',
  hero: {
    eyebrow: '#1 U.S. real estate agency on SEMrush · 24+ luxury teams · 5★ partner',
    headline: 'IDX websites for realtors that turn home searches into leads.',
    subheadline: 'Custom real estate websites with live MLS home search on your own domain, listing and neighborhood pages Google can index, and lead capture that routes every inquiry to your CRM.',
    primaryCtaLabel: 'Get my free IDX site audit',
    guarantee: 'We review your current site and identify the changes that would most impact your search visibility and lead capture. No pitch deck.',
    slides: [
      { id: 'legendary', href: '/case-study/jade-legendary-real-estate', teamName: 'Legendary Real Estate Services', region: 'Lake Geneva, WI', highlight: '920% organic traffic growth', image: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png', imageAlt: 'Legendary Real Estate Services — custom website by DMR Media' },
      { id: 'cheryl-towey', href: '/real-estate-agent-website-samples', teamName: 'Cheryl Towey Real Estate', region: 'New Jersey', highlight: '5-star rated design since 2022', image: '/images/ClientWebsites/screencapture-realestatebycherylnj-2026-03-04-03_35_34.png', imageAlt: 'Cheryl Towey real estate website — designed by DMR Media' },
      { id: 'valoria-homes', href: '/real-estate-website-design', teamName: 'Valoria Homes', region: 'Development Project', highlight: 'Presale capture system', image: '/images/ClientWebsites/screencapture-valoriahomes-2026-03-04-03_34_12.png', imageAlt: 'Valoria Homes development website — designed by DMR Media' },
    ],
  },
  stakes: {
    eyebrow: 'The problem',
    heading: 'Most IDX setups send your buyers somewhere else.',
    subheading: 'Three patterns we see when agents add home search to a website and still lose the lead.',
    items: [
      { eyebrow: 'Widgets', heading: 'Listings Google cannot read', body: 'Many IDX tools load listings in an iframe or script widget. Visitors can search, but search engines see an empty box, so your listing and neighborhood pages never rank and the portals keep the traffic.' },
      { eyebrow: 'Capture', heading: 'Searches that never become leads', body: 'Home search with no registration prompt lets buyers browse forever and leave. Gate too early and they bounce. Asking after about three property views is the balance we use, with a short form that asks only what your team needs.' },
      { eyebrow: 'Follow-up', heading: 'Leads that stall outside your CRM', body: 'IDX leads that land in a separate inbox wait hours for a reply. Without routing, tags, and saved-search data in your CRM, the buyer who was ready this week talks to whoever answered first.' },
    ],
  },
  guide: {
    eyebrow: 'Our approach',
    heading: 'IDX built for search, capture, and compliance.',
    body: "Every DMR IDX website starts with the searches your buyers run: towns, neighborhoods, zip codes, and property types. We turn those into indexable pages powered by your MLS feed, add lead capture at the right moment, and route every inquiry to your CRM.",
    bullets: [
      'Search: neighborhood, zip code, and property-type pages on your domain, filled with live listings',
      'Capture: registration after a few property views, saved searches, and a manual home valuation offer for sellers',
      'Compliance: MLS attribution, IDX disclaimers, and brokerage logo rules checked before launch',
    ],
    comparisonRows: [
      { label: 'IDX listings', dmr: 'Indexable listing and area pages on your domain', other: 'Iframe or widget search that search engines cannot read' },
      { label: 'Lead capture', dmr: 'Registration after a few views, saved searches, routed to your CRM', other: 'A generic contact form, or no capture at all' },
      { label: 'Design', dmr: 'Custom brand-aligned design built around your positioning', other: 'Template customization with generic layouts' },
      { label: 'Performance', dmr: 'Sub-2s load times, Core Web Vitals, and image optimization by default', other: 'Page speed treated as optional' },
      { label: 'Support', dmr: 'Direct team access — no helpdesk tickets, no outsourced support', other: 'Support queues and account managers' },
      { label: 'Ownership', dmr: 'Full site ownership and portability — your code, your domain, your data', other: 'Locked into proprietary platforms and vendor contracts' },
    ],
  },
  pillars: {
    eyebrow: 'Three layers',
    heading: 'IDX home search, area pages, and lead capture, built as one system.',
    subheading: "IDX search without SEO brings no traffic. Traffic without capture brings no leads. DMR builds all three together.",
    items: [
      { title: 'IDX home search', body: "Live MLS listings on your own domain with fast, mobile-friendly search, map views, and saved searches, designed around your brand instead of a vendor template.", image: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png', imageAlt: 'Legendary Real Estate Services — brand design by DMR Media' },
      { title: 'Neighborhood and zip code pages', body: "Pages for the towns, neighborhoods, zip codes, and property types your buyers search, each filled with live IDX listings and local detail portals can't match.", image: '/images/ClientWebsites/screencapture-realestatebycherylnj-2026-03-04-03_35_34.png', imageAlt: 'Cheryl Towey Real Estate — high-performance website' },
      { title: 'Search authority', body: 'Keyword architecture, schema markup, local SEO signals, and on-page structure that earns search visibility from the day the site goes live.', image: '/images/MarquisFarwellGoogleSearchConsole.png', imageAlt: 'Google Search Console showing organic ranking improvement' },
    ],
  },
  proof: {
    eyebrow: 'Documented outcomes',
    heading: 'Sites that rank, convert, and hold their value over time.',
    subheading: 'DMR websites are measured by search visibility gains, lead capture rates, and client satisfaction — not aesthetic awards.',
    items: [
      { label: 'Legendary Real Estate · organic search', result: '920% traffic growth', note: 'From a standing start in a competitive luxury market to dominating key neighborhood and city searches — built on the search architecture baked into the site at launch.' },
      { label: 'Cheryl Towey · client satisfaction', result: '5-star rated since 2022', note: "Consistent 5-star ratings from an agent who has been live since 2022 — a site that keeps earning without needing a rebuild." },
      { label: 'Client portfolio · average', result: 'Sub-2s load time', note: 'Every DMR site ships with performance optimization included — not as an add-on. Core Web Vitals in the top tier, out of the box.' },
    ],
  },
  process: {
    eyebrow: 'How it works',
    heading: 'From MLS approval to a live IDX website',
    subheading: 'A clear timeline so you know what happens and when.',
    steps: [
      { title: 'Discovery & MLS setup', description: "We confirm your MLS and IDX provider, map the towns, neighborhoods, and property types your buyers search, and start the IDX feed approval with your MLS." },
      { title: 'Design & architecture', description: 'Custom wireframes, then design — with SEO structure, content hierarchy, and conversion paths built in from the first page layout.' },
      { title: 'Build & technical optimization', description: 'Development with performance optimization baked in: image compression, Core Web Vitals, schema markup, and technical SEO implemented at build, not retrofitted.' },
      { title: 'Launch & visibility ramp', description: 'Live launch with Search Console submission, sitemap, and indexing request. First-month tracking confirms rankings are moving in the right direction.' },
    ],
  },
  ctaHints: {
    mid: '15 minutes. We review your current site and IDX setup and show you the three changes that would most impact search visibility and lead capture.',
    bottom: "Pick a slot. We arrive with website samples from your specific market segment, competitor analysis, and a positioning brief — ready to build on day one.",
  },
  faq: faqItems,
  testimonialIds: [3, 'sandy-reavill', 'jorge-elizondo'],
  relatedServices: [
    { label: 'MLS Integrations', href: '/mls-integrations' },
    { label: 'SEO Optimization', href: '/seo-optimization' },
    { label: 'Real Estate Lead Generation', href: '/real-estate-lead-generation' },
    { label: 'Luxury Real Estate Website Design', href: '/real-estate-website-design' },
    { label: 'Single Property Websites', href: '/single-property-websites' },
    { label: 'Analytics & Reporting', href: '/analytics-reporting' },
  ],
  finalCta: {
    eyebrow: 'Your market deserves a better digital presence',
    heading: 'See what an IDX website looks like in your market.',
    subheading: "We review your current website and IDX setup against the searches your buyers already run, then show you what an indexable, lead-capturing IDX site looks like for your brand.",
    primaryLabel: 'Get my free IDX site audit',
    guarantee: 'No pitch deck. Just an honest review of what your website is costing you and what it could earn.',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function AgentWebsitesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/services/agent-websites">
        <ServicePageTemplate data={pageData} />
      </SEOWrapper>
    </>
  )
}
