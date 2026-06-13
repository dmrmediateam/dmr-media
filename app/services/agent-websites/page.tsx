import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import ServicePageTemplate, { type ServicePageData } from '@/components/ServicePageTemplate'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'Real Estate Agent Websites — Custom Design & Built-In SEO | DMR Media',
  description: 'Custom real estate agent websites that rank and convert. Built-in SEO architecture, sub-2s load times, and brand-aligned design for luxury agents since 2022.',
  keywords: ['real estate agent websites', 'website for real estate agent', 'custom real estate website', 'luxury real estate website design', 'real estate website SEO'].join(', '),
  alternates: { canonical: `${BASE}/services/agent-websites` },
  openGraph: { title: 'Real Estate Agent Websites — Custom Design & Built-In SEO | DMR Media', description: 'Custom real estate agent websites that rank and convert.', url: `${BASE}/services/agent-websites`, siteName: 'DMR Media', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Real Estate Agent Websites — Custom Design & Built-In SEO | DMR Media', description: 'Custom real estate agent websites that rank and convert.' },
}

const faqItems = [
  { question: 'How much does a custom real estate agent website cost?', answer: 'Investment varies based on complexity, number of pages, and whether IDX or MLS integration is included. We scope after a discovery conversation so pricing reflects your actual requirements — not a package tier built for the broadest possible market.' },
  { question: 'How long does the build take?', answer: 'Most agent websites are live within four to six weeks from brief to launch. Development microsites for luxury condos or new developments may take longer due to phased inventory and gallery requirements.' },
  { question: 'Do you integrate with MLS or IDX?', answer: 'Yes. We integrate with the major MLS and IDX providers and have built custom search experiences, property feeds, and listing pages for luxury agents and brokerages across the U.S.' },
  { question: 'Will my website rank on Google?', answer: 'Every DMR website launches with keyword architecture, local SEO signals, schema markup, and on-page optimization already built in. Ranking timelines depend on market competition and domain history, but search visibility is built into the site from day one — not treated as an afterthought.' },
  { question: 'Can I make edits myself?', answer: 'Yes. Sites are built on accessible CMS platforms and we train your team to handle routine content updates. For structural or design changes, we handle those directly without a support ticket queue.' },
]

const pageData: ServicePageData = {
  applyFormName: 'real-estate-agent-websites-apply',
  hero: {
    eyebrow: '#1 U.S. real estate agency on SEMrush · 24+ luxury teams · 5★ partner',
    headline: 'Real estate agent websites that rank, convert, and hold their value.',
    subheadline: 'Custom-designed sites with SEO architecture, sub-2s load times, and brand alignment baked in at build — not bolted on after. Your market, your positioning, your first impression.',
    primaryCtaLabel: 'Get my free site audit',
    guarantee: 'We review your current site and identify the changes that would most impact your search visibility and lead capture. No pitch deck.',
    slides: [
      { id: 'legendary', href: '/case-study/jade-legendary-real-estate', teamName: 'Legendary Real Estate Services', region: 'Lake Geneva, WI', highlight: '920% organic traffic growth', image: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png', imageAlt: 'Legendary Real Estate Services — custom website by DMR Media' },
      { id: 'cheryl-towey', href: '/real-estate-agent-website-samples', teamName: 'Cheryl Towey Real Estate', region: 'New Jersey', highlight: '5-star rated design since 2022', image: '/images/ClientWebsites/screencapture-realestatebycherylnj-2026-03-04-03_35_34.png', imageAlt: 'Cheryl Towey real estate website — designed by DMR Media' },
      { id: 'valoria-homes', href: '/websites-for-new-developments', teamName: 'Valoria Homes', region: 'Development Project', highlight: 'Presale capture system', image: '/images/ClientWebsites/screencapture-valoriahomes-2026-03-04-03_34_12.png', imageAlt: 'Valoria Homes development website — designed by DMR Media' },
    ],
  },
  stakes: {
    eyebrow: 'The problem',
    heading: 'Your website is the first showing. Most lose the buyer before hello.',
    subheading: 'Three patterns we see when high-producing agents carry a website that costs them more than it earns.',
    items: [
      { eyebrow: 'Templates', heading: 'You look like every other agent', body: 'Brokerage templates and DIY builders produce sites that are functionally identical to competitors. Luxury buyers read that as a signal — consciously or not — that your brand operates at the same level as everyone else.' },
      { eyebrow: 'Search Invisibility', heading: "Your site doesn't exist on Google", body: "A website without technical SEO is a digital brochure that only people who already know you will ever see. If you're not ranking for your market's buyer searches, you're invisible at the exact moment intent is highest." },
      { eyebrow: 'Conversion', heading: 'Visitors leave without a next step', body: 'Most real estate websites are designed to display information, not capture qualified interest. Without clear CTAs, fast mobile load times, and trust signals in the right places, traffic converts at a fraction of what it should.' },
    ],
  },
  guide: {
    eyebrow: 'Our approach',
    heading: "We don't build websites. We build market positions.",
    body: "Every DMR site starts with a search strategy. Keyword architecture, local intent mapping, and technical SEO baked in before a single page goes live — not bolted on after. The design follows the positioning.",
    bullets: [
      'Positioning: your brand story aligned to how luxury buyers search in your market',
      'Performance: sub-2s load times, mobile-first, and Core Web Vitals in the top tier',
      'Visibility: on-page SEO, schema markup, and content architecture built for long-term ranking',
    ],
    comparisonRows: [
      { label: 'Design', dmr: 'Custom brand-aligned design built around your positioning', other: 'Template customization with generic layouts' },
      { label: 'SEO', dmr: 'Technical SEO, schema, and keyword architecture baked in at build', other: 'SEO as an afterthought or separate engagement' },
      { label: 'Performance', dmr: 'Sub-2s load times, Core Web Vitals, and image optimization by default', other: 'Page speed treated as optional' },
      { label: 'Support', dmr: 'Direct team access — no helpdesk tickets, no outsourced support', other: 'Support queues and account managers' },
      { label: 'Ownership', dmr: 'Full site ownership and portability — your code, your domain, your data', other: 'Locked into proprietary platforms and vendor contracts' },
    ],
  },
  pillars: {
    eyebrow: 'Three layers',
    heading: 'Design, performance, and search authority — built as one system.',
    subheading: "A premium website is useless if it doesn't rank. An SEO-optimized site fails if it doesn't convert. DMR builds all three simultaneously.",
    items: [
      { title: 'Brand design', body: "Custom design built around your positioning, your market, and the type of client you want to attract — not a template with your logo swapped in.", image: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png', imageAlt: 'Legendary Real Estate Services — brand design by DMR Media' },
      { title: 'Technical performance', body: "Sub-2 second load times, Core Web Vitals in the top tier, and mobile-first architecture that converts visitors on the device they're actually using.", image: '/images/ClientWebsites/screencapture-realestatebycherylnj-2026-03-04-03_35_34.png', imageAlt: 'Cheryl Towey Real Estate — high-performance website' },
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
    heading: 'From brief to live in a structured build',
    subheading: 'A clear timeline reduces uncertainty and ensures the site we launch is the site that earns.',
    steps: [
      { title: 'Discovery & positioning', description: "We map your market, your ideal client, and the keywords they're already searching. Brand positioning and search strategy happen before any design decisions." },
      { title: 'Design & architecture', description: 'Custom wireframes, then design — with SEO structure, content hierarchy, and conversion paths built in from the first page layout.' },
      { title: 'Build & technical optimization', description: 'Development with performance optimization baked in: image compression, Core Web Vitals, schema markup, and technical SEO implemented at build, not retrofitted.' },
      { title: 'Launch & visibility ramp', description: 'Live launch with Search Console submission, sitemap, and indexing request. First-month tracking confirms rankings are moving in the right direction.' },
    ],
  },
  ctaHints: {
    mid: '15 minutes. We review your current site and show you the three changes that would most impact your search visibility and lead capture.',
    bottom: "Pick a slot. We arrive with website samples from your specific market segment, competitor analysis, and a positioning brief — ready to build on day one.",
  },
  faq: faqItems,
  testimonialIds: [3, 'sandy-reavill', 'jorge-elizondo'],
  relatedServices: [
    { label: 'SEO Optimization', href: '/seo-optimization' },
    { label: 'Real Estate Lead Generation', href: '/real-estate-lead-generation' },
    { label: 'New Development Websites', href: '/websites-for-new-developments' },
    { label: 'Single Property Websites', href: '/single-property-websites' },
    { label: 'Analytics & Reporting', href: '/analytics-reporting' },
  ],
  finalCta: {
    eyebrow: 'Your market deserves a better digital presence',
    heading: 'See what a DMR site looks like in your market.',
    subheading: "We review your current website against the search queries your ideal clients are already running, then show you what premium positioning looks like for your brand.",
    primaryLabel: 'Get my free site audit',
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
