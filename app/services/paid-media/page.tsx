import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import ServicePageTemplate, { type ServicePageData } from '@/components/ServicePageTemplate'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'Paid Media for Real Estate — Google Ads, Meta & Multi-Channel | DMR Media',
  description: 'Paid media management for real estate teams. Google Ads, Meta, and multi-channel campaigns tied to qualified pipeline — not impressions. Luxury agent specialists since 2022.',
  keywords: ['paid media for real estate', 'real estate Google Ads', 'real estate Facebook ads', 'real estate PPC agency', 'paid advertising real estate'].join(', '),
  alternates: { canonical: `${BASE}/services/paid-media` },
  openGraph: { title: 'Paid Media for Real Estate — Google Ads, Meta & Multi-Channel | DMR Media', description: 'Paid media tied to qualified pipeline, not impressions.', url: `${BASE}/services/paid-media`, siteName: 'DMR Media', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Paid Media for Real Estate — Google Ads, Meta & Multi-Channel | DMR Media', description: 'Paid media tied to qualified pipeline, not impressions.' },
}

const faqItems = [
  { question: 'What is the minimum ad spend you work with?', answer: 'We typically work with teams running $3,000 or more in monthly ad spend. Below that threshold, the testing budget required to optimize performance competes too directly with the media budget itself.' },
  { question: 'Which channels do you manage?', answer: 'Google Search, Google Display, YouTube, Meta (Facebook + Instagram), and LinkedIn for commercial or development campaigns. We recommend channel mix based on your market segment, not based on what we prefer to manage.' },
  { question: 'What does reporting look like?', answer: "You receive a monthly performance report with campaign metrics, lead quality breakdown, and a forward-looking recommendation summary. We don't report vanity metrics — you'll see cost-per-qualified-lead and pipeline contribution." },
  { question: 'Do you work exclusively with one agent per market?', answer: "In most cases, yes. We don't run competing campaigns for two agents in the same market segment. That policy protects your investment and keeps our incentives aligned with your growth." },
  { question: 'How quickly will I see results?', answer: 'Most campaigns enter a 30-day optimization phase after launch. Qualified leads typically begin flowing by week two. By month two, we have enough data to make meaningful bid and targeting adjustments that improve cost-per-lead progressively.' },
]

const pageData: ServicePageData = {
  applyFormName: 'paid-media-real-estate-apply',
  hero: {
    eyebrow: '#1 U.S. real estate agency on SEMrush · 24+ luxury teams · 5★ partner',
    headline: 'Paid media for real estate — tied to pipeline, not impressions.',
    subheadline: 'Google Ads, Meta, and multi-channel campaigns built around your market and your buyer. We optimize for qualified leads and closed pipeline — not click-through rates and branded reach metrics.',
    primaryCtaLabel: 'Get my free ads audit',
    guarantee: 'We review your current campaigns and show you exactly where spend is leaking. No obligation, no pitch.',
    slides: [
      { id: 'eagan-luxury', href: '/case-studies', teamName: 'Eagan Luxury Team', region: 'Minnesota', highlight: 'Pipeline-positive in 45 days', image: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png', imageAlt: 'Eagan Luxury Team — paid media campaign by DMR Media' },
      { id: 'rick-visions', href: '/case-studies', teamName: 'Rick Visions First Realty', region: 'Southeast', highlight: 'Inbound leads 3× in 60 days', image: '/images/ClientWebsites/screencapture-realestatebycherylnj-2026-03-04-03_35_34.png', imageAlt: 'Rick Visions First Realty — Google Ads by DMR Media' },
      { id: 'marquis-farwell', href: '/case-studies', teamName: 'Marquis Farwell Group', region: 'Chicago', highlight: 'Cost-per-lead under market average', image: '/images/MarquisFarwellGoogleSearchConsole.png', imageAlt: 'Marquis Farwell Group — paid search performance by DMR Media' },
    ],
  },
  stakes: {
    eyebrow: 'The problem',
    heading: 'Most real estate ad spend goes to impressions that never become appointments.',
    subheading: "Three patterns we see when high-producing agents run paid media that burns budget without building pipeline.",
    items: [
      { eyebrow: 'Weak targeting', heading: 'Your ads reach people who will never buy', body: "Broad interest targeting and lookalike audiences built on low-quality data reach renters, tire-kickers, and out-of-market browsers. You're paying for activity that doesn't move toward a closed transaction." },
      { eyebrow: 'Wrong metrics', heading: "You're optimizing for clicks, not closings", body: "Campaigns built around click-through rate, cost-per-click, and impressions are designed for e-commerce, not real estate. High-intent buyer searches and qualified lead capture require a different bidding and optimization strategy." },
      { eyebrow: 'No pipeline connection', heading: 'Ad spend and revenue are treated as separate systems', body: "If your advertising agency can't show you how your media spend connects to qualified appointments and pipeline value, they're not managing real estate campaigns — they're running generic digital ads." },
    ],
  },
  guide: {
    eyebrow: 'Our approach',
    heading: 'We build campaigns around buyer intent and market timing.',
    body: "Every DMR paid media engagement starts with a search demand analysis for your market. We identify the queries your ideal buyers are actually running, match them to the right channels, and build campaigns that capture intent at the right moment.",
    bullets: [
      'Intent mapping: keyword research specific to your market, price point, and property type',
      'Channel selection: platform mix based on where your buyers are — not what we prefer to manage',
      'Pipeline reporting: monthly breakdown of cost-per-qualified-lead and pipeline contribution',
    ],
    comparisonRows: [
      { label: 'Targeting', dmr: 'Intent-based audiences built from buyer search behavior in your market', other: 'Broad interest and demographic targeting' },
      { label: 'Optimization', dmr: 'Optimized toward qualified leads and pipeline value', other: 'Optimized toward clicks and impressions' },
      { label: 'Reporting', dmr: 'Cost-per-qualified-lead and pipeline contribution, monthly', other: 'Vanity metrics: impressions, CTR, reach' },
      { label: 'Exclusivity', dmr: 'One team per market segment — no competing campaigns', other: 'Multiple clients in the same market' },
      { label: 'Strategy', dmr: 'Channel mix built around your buyer — updated quarterly', other: 'Default platform settings and generic campaign types' },
    ],
  },
  pillars: {
    eyebrow: 'Three channels',
    heading: 'Search, social, and retargeting — built as a unified buyer journey.',
    subheading: "Real estate buyers research over weeks and months. A single-channel approach misses intent signals. DMR builds campaigns that follow the buyer across the journey.",
    items: [
      { title: 'Google Search & Display', body: "Capture high-intent buyers at the moment they're searching for properties in your market. Keyword strategy, Quality Score optimization, and bid management built for real estate.", image: '/images/MarquisFarwellGoogleSearchConsole.png', imageAlt: 'Google Ads performance dashboard — DMR Media' },
      { title: 'Meta (Facebook & Instagram)', body: 'Visual campaigns that reach luxury buyers during discovery and consideration phases. Property carousel ads, retargeting sequences, and local market targeting.', image: '/images/ClientWebsites/screencapture-realestatebycherylnj-2026-03-04-03_35_34.png', imageAlt: 'Meta advertising for real estate — DMR Media' },
      { title: 'Retargeting & nurture', body: "Re-engage visitors who viewed listings but didn't inquire. Sequential ad exposure builds familiarity and drives appointments from buyers who are still deciding.", image: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png', imageAlt: 'Retargeting campaigns for real estate — DMR Media' },
    ],
  },
  proof: {
    eyebrow: 'Documented outcomes',
    heading: 'Pipeline-positive campaigns across luxury markets.',
    subheading: 'DMR paid media is measured by qualified leads and pipeline contribution — not impressions.',
    items: [
      { label: 'Eagan Luxury Team · speed to pipeline', result: 'Pipeline-positive in 45 days', note: 'From campaign launch to qualified appointments in under six weeks — built on intent-mapped keyword strategy and a landing page optimized for conversion.' },
      { label: 'Rick Visions First Realty · lead volume', result: '3× inbound leads in 60 days', note: 'Tripled inbound qualified lead volume within the first two months by shifting from broad targeting to intent-based buyer segments.' },
      { label: 'Marquis Farwell Group · efficiency', result: 'Below-market cost-per-lead', note: 'Consistent cost-per-qualified-lead below the market average for their price point — achieved through Quality Score optimization and audience refinement.' },
    ],
  },
  process: {
    eyebrow: 'How it works',
    heading: 'From brief to live campaign in two weeks',
    subheading: 'A clear onboarding timeline means you are capturing buyer intent within the first month.',
    steps: [
      { title: 'Market & intent analysis', description: 'We analyze search demand in your market, map the queries your buyers are running, and identify the channels where they are most active. Strategy before spend.' },
      { title: 'Campaign architecture', description: 'Campaign structure, keyword grouping, audience build, and ad creative brief — all developed before a single dollar of media spend is committed.' },
      { title: 'Launch & learning period', description: '30-day optimization window after launch. We gather conversion data, refine bidding, and eliminate low-performing segments before scaling.' },
      { title: 'Monthly optimization & reporting', description: 'Ongoing bid management, A/B creative testing, and a monthly report with pipeline contribution analysis — not a dashboard of metrics that don\'t connect to revenue.' },
    ],
  },
  ctaHints: {
    mid: '15 minutes. We pull your current campaign data and show you where budget is leaking and what a restructured campaign would look like.',
    bottom: 'Pick a slot. We arrive with a competitive analysis of paid media activity in your market and a recommended channel strategy for your price point.',
  },
  faq: faqItems,
  testimonialIds: [3, 'sandy-reavill', 'jorge-elizondo'],
  relatedServices: [
    { label: 'Google Ads Management', href: '/google-ads-management' },
    { label: 'Real Estate Lead Generation', href: '/real-estate-lead-generation' },
    { label: 'SEO Optimization', href: '/seo-optimization' },
    { label: 'Analytics & Reporting', href: '/analytics-reporting' },
    { label: 'CRM Automation', href: '/services/crm-automation' },
  ],
  finalCta: {
    eyebrow: 'Your media budget should build pipeline, not reports',
    heading: 'See where your current ad spend is leaking.',
    subheading: 'We review your active campaigns against buyer search demand in your market and show you exactly what a restructured strategy would look like.',
    primaryLabel: 'Get my free ads audit',
    guarantee: 'No obligation. We show you what is and is not working before any engagement discussion.',
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

export default function PaidMediaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/services/paid-media">
        <ServicePageTemplate data={pageData} />
      </SEOWrapper>
    </>
  )
}
