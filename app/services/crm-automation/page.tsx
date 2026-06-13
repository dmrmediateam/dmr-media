import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import ServicePageTemplate, { type ServicePageData } from '@/components/ServicePageTemplate'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'Real Estate CRM Automation — Lead Routing & Follow-Up Systems | DMR Media',
  description: 'CRM automation for real estate teams. Instant lead routing, follow-up sequences, and pipeline visibility — built to close the five-minute response window every time.',
  keywords: ['real estate CRM automation', 'lead routing real estate', 'real estate follow-up automation', 'real estate CRM setup', 'lead management real estate'].join(', '),
  alternates: { canonical: `${BASE}/services/crm-automation` },
  openGraph: { title: 'Real Estate CRM Automation — Lead Routing & Follow-Up Systems | DMR Media', description: 'CRM automation that closes the five-minute window.', url: `${BASE}/services/crm-automation`, siteName: 'DMR Media', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Real Estate CRM Automation — Lead Routing & Follow-Up Systems | DMR Media', description: 'CRM automation that closes the five-minute window.' },
}

const faqItems = [
  { question: 'Which CRMs do you work with?', answer: 'We work with Follow Up Boss, Lofty (formerly Chime), HubSpot, and several other CRM platforms used by real estate teams. We can also help you select the right platform if you are evaluating options.' },
  { question: 'What do the follow-up sequences look like?', answer: 'Sequences are built for your specific lead sources and market. They combine SMS, email, and in-app tasks with timing optimized for lead type — a new open house inquiry is handled differently than a returning portal lead.' },
  { question: 'How long does setup take?', answer: 'Most automations are live within two to three weeks. More complex builds — multi-team routing, custom lead scoring, or integrations with proprietary tools — may take four to six weeks depending on scope.' },
  { question: 'Do you write the follow-up copy?', answer: 'Yes. We write all automation copy — SMS, email, and task scripts — in a voice that matches your brand. Copy that sounds like an autoresponder defeats the purpose of the automation.' },
  { question: 'Can you work with the CRM we already have?', answer: 'In most cases yes. We audit your existing setup, identify gaps in routing and follow-up logic, and rebuild or extend what is already there. We only recommend a platform migration when the current system has structural limitations we cannot work around.' },
]

const pageData: ServicePageData = {
  applyFormName: 'real-estate-crm-automation-apply',
  hero: {
    eyebrow: '#1 U.S. real estate agency on SEMrush · 24+ luxury teams · 5★ partner',
    headline: 'Real estate CRM automation that closes the five-minute window.',
    subheadline: 'Instant lead routing, on-brand follow-up sequences, and pipeline visibility that gives your team a structural advantage on every inbound lead — regardless of when it comes in.',
    primaryCtaLabel: 'Get my free pipeline audit',
    guarantee: 'We audit your current lead routing and follow-up logic and show you where leads are going dark. No obligation.',
    slides: [
      { id: 'willow-brook', href: '/case-studies', teamName: 'Willow Brook Realty', region: 'Midwest', highlight: 'Response time from hours to 90 seconds', image: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png', imageAlt: 'Willow Brook Realty — CRM automation by DMR Media' },
      { id: 'legendary-crm', href: '/case-study/jade-legendary-real-estate', teamName: 'Legendary Real Estate Services', region: 'Lake Geneva, WI', highlight: 'Zero leads lost to slow follow-up', image: '/images/ClientWebsites/screencapture-valoriahomes-2026-03-04-03_34_12.png', imageAlt: 'Legendary Real Estate Services — CRM pipeline by DMR Media' },
      { id: 'eagan-crm', href: '/case-studies', teamName: 'Eagan Luxury Team', region: 'Minnesota', highlight: 'Appointment rate up 40% in 30 days', image: '/images/MarquisFarwellGoogleSearchConsole.png', imageAlt: 'Eagan Luxury Team — lead automation by DMR Media' },
    ],
  },
  stakes: {
    eyebrow: 'The problem',
    heading: 'Most real estate leads go dark because follow-up is manual and slow.',
    subheading: 'Three failure modes we find in every CRM audit when high-producing teams are losing pipeline to process gaps.',
    items: [
      { eyebrow: 'The five-minute window', heading: 'Leads are called back hours later, not minutes', body: 'Research consistently shows that response time within five minutes of a lead submission increases conversion rates dramatically. Manual follow-up processes — especially across time zones or after hours — mean your team is losing deals before the first call is made.' },
      { eyebrow: 'Generic sequences', heading: 'Automations sound like robots, so leads opt out', body: 'Most CRM templates are transactional and impersonal. Sequences that read like autoresponders condition leads to ignore them. Follow-up copy needs to sound like a real person from your team — or the automation works against you.' },
      { eyebrow: 'No routing logic', heading: 'Leads sit in a queue instead of going to the right agent', body: 'Without smart routing rules, leads get assigned by availability or round-robin — not by the agent best positioned to close that specific lead. The result is mismatched conversations and a lower appointment rate than your team is capable of.' },
    ],
  },
  guide: {
    eyebrow: 'Our approach',
    heading: 'We build automation that acts like your best agent — at 2am.',
    body: 'Every DMR CRM engagement starts with a routing and follow-up audit. We map where leads enter, how they are assigned, and when the first contact attempt happens. Then we rebuild the logic so that every lead gets an on-brand response within the five-minute window — automatically.',
    bullets: [
      'Routing: smart assignment rules based on lead source, geography, and agent specialization',
      'Sequences: on-brand SMS and email copy that reads like a person, not an autoresponder',
      'Visibility: pipeline reporting that shows your team exactly where every lead is in the process',
    ],
    comparisonRows: [
      { label: 'Response time', dmr: 'Automated response within 90 seconds of lead submission', other: 'Manual follow-up hours after the lead comes in' },
      { label: 'Routing', dmr: 'Smart rules: lead source, geography, price point, agent specialization', other: 'Round-robin or manual assignment' },
      { label: 'Copy', dmr: 'On-brand SMS and email written to sound like your team', other: 'Default CRM templates that read like autoresponders' },
      { label: 'Visibility', dmr: 'Pipeline dashboard: every lead, every stage, every agent', other: 'Lead list with no stage tracking or fallout visibility' },
      { label: 'Maintenance', dmr: 'Ongoing sequence optimization based on open and conversion rates', other: 'Set-and-forget sequences that degrade over time' },
    ],
  },
  pillars: {
    eyebrow: 'Three systems',
    heading: 'Routing, follow-up, and pipeline visibility — one connected system.',
    subheading: "Automation only works when all three layers are connected. A great sequence on a bad routing rule still loses leads. DMR builds the full stack.",
    items: [
      { title: 'Smart lead routing', body: 'Assignment rules that match every inbound lead to the right agent based on source, price point, geography, and availability — automatically.', image: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png', imageAlt: 'Lead routing dashboard — CRM automation by DMR Media' },
      { title: 'On-brand follow-up sequences', body: 'SMS and email sequences written in your voice, timed for each lead source, and optimized for appointment conversion — not just open rates.', image: '/images/ClientWebsites/screencapture-valoriahomes-2026-03-04-03_34_12.png', imageAlt: 'CRM follow-up sequences for real estate — DMR Media' },
      { title: 'Pipeline visibility', body: 'Dashboards that show every lead, every stage, and every agent — so your team can identify fallout and intervene before a lead goes cold permanently.', image: '/images/MarquisFarwellGoogleSearchConsole.png', imageAlt: 'Real estate pipeline dashboard — DMR Media' },
    ],
  },
  proof: {
    eyebrow: 'Documented outcomes',
    heading: 'Faster response, higher appointment rates, fewer leads going dark.',
    subheading: 'DMR CRM automation is measured by response time, appointment rate, and pipeline conversion — not automation complexity.',
    items: [
      { label: 'Willow Brook Realty · response time', result: 'Hours to 90 seconds', note: 'Response time from several hours to 90 seconds after moving from manual follow-up to automated routing and sequencing.' },
      { label: 'Legendary Real Estate · pipeline integrity', result: 'Zero leads lost to slow follow-up', note: "After a full routing and sequence rebuild, the team eliminated the pattern of leads going dark due to after-hours or weekend delays." },
      { label: 'Eagan Luxury Team · appointment rate', result: '+40% in 30 days', note: 'Appointment rate increased 40% within the first month after replacing generic CRM templates with on-brand sequences timed to lead source and behavior.' },
    ],
  },
  process: {
    eyebrow: 'How it works',
    heading: 'Audit, build, and live in three weeks',
    subheading: 'A structured build process means no disruption to your existing pipeline while we rebuild the system underneath it.',
    steps: [
      { title: 'CRM audit & routing map', description: 'We document your current lead sources, routing logic, and follow-up sequences. We identify exactly where leads are going dark and why.' },
      { title: 'Routing architecture rebuild', description: 'Smart assignment rules built for your team structure — lead source, geography, price point, and agent specialization factored into every routing decision.' },
      { title: 'Sequence build & copy', description: 'On-brand SMS and email sequences written for each lead source and type. Timing and channel mix optimized for your market and buyer behavior.' },
      { title: 'Launch & 30-day review', description: 'Go live with full team training. 30-day checkpoint reviews response time, appointment rate, and sequence performance to confirm the system is working.' },
    ],
  },
  ctaHints: {
    mid: '15 minutes. We audit your current lead routing and show you exactly where leads are going dark before we discuss any engagement.',
    bottom: 'Pick a slot. We arrive with a routing audit of your current CRM setup and a recommended sequence architecture for your lead sources.',
  },
  faq: faqItems,
  testimonialIds: [3, 'sandy-reavill', 'jorge-elizondo'],
  relatedServices: [
    { label: 'Real Estate Lead Generation', href: '/real-estate-lead-generation' },
    { label: 'Google Ads Management', href: '/google-ads-management' },
    { label: 'Paid Media', href: '/services/paid-media' },
    { label: 'SEO Optimization', href: '/seo-optimization' },
    { label: 'Analytics & Reporting', href: '/analytics-reporting' },
  ],
  finalCta: {
    eyebrow: 'Every minute matters when a lead comes in',
    heading: 'Find out where your pipeline is leaking.',
    subheading: 'We audit your current CRM routing and follow-up logic and show you the gaps that are costing you appointments — before any engagement discussion.',
    primaryLabel: 'Get my free pipeline audit',
    guarantee: 'No obligation. Just an honest audit of where your system is working and where it is losing you deals.',
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

export default function CrmAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/services/crm-automation">
        <ServicePageTemplate data={pageData} />
      </SEOWrapper>
    </>
  )
}
