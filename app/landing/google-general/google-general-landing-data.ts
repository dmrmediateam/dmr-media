/** Copy & schema data for `/landing/google-general`. */

export const FAQ_ITEMS = [
  {
    question: 'What does “#1 in the U.S. on SEMrush” mean?',
    answer:
      'SEMrush ranks agencies and sites by visibility and momentum within their category. DMR Media is ranked first among U.S. real estate marketing agencies in that benchmark, and we compete in the same search landscape we manage for teams and brokerages nationwide.',
  },
  {
    question: 'Do you work with solo agents, teams, and brokerages?',
    answer:
      'Yes. Scope scales to how you operate: single-agent brands, growing teams, and multi-market brokerages. The systems are the same (intent, capture, follow-up); the build adjusts to your markets, price points, and lead volume.',
  },
  {
    question: 'Do you run Google Ads, SEO, and follow-up together?',
    answer:
      'Yes. We build one intent map across paid search, AI SEO, and automated follow-up so leads are captured at high intent, nurtured consistently, and handed to your agents with context, not scattered across vendors.',
  },
  {
    question: 'How long until we see movement?',
    answer:
      'Paid search can surface qualified conversations within days when tracking and landing paths are correct. Organic and AI visibility compound over weeks and quarters. We report on pipeline metrics your leadership can defend.',
  },
  {
    question: 'How is pricing scoped?',
    answer:
      'After we understand your market, volume, and goals, we align scope and put deliverables in writing, with no opaque packages or surprise invoices for basic execution.',
  },
  {
    question: 'What makes DMR different from a typical lead-gen agency?',
    answer:
      'Most agencies optimize for lead volume. We partner on conversion: qualified buyers and sellers, playbooks your agents can run, and systems that keep follow-up tight while your team stays in the field.',
  },
] as const

export const marketingCorePillars = [
  {
    number: '01',
    title: 'Google Ads',
    body:
      'Capture buyers and sellers while they are searching for homes or a home valuation, not while they are scrolling social. Built for local teams with real geo and budget discipline.',
  },
  {
    number: '02',
    title: 'AI Search Engine Optimization (AI SEO)',
    body:
      'Show up when your market searches for an agent or team they can trust. We have done it for ourselves and for teams from solo producers to multi-office brokerages.',
  },
  {
    number: '03',
    title: 'AI Tailored Follow-up System',
    body:
      'Have AI handle first touch and nurture so every lead gets a timely response, and your agents focus on conversations that turn into appointments.',
  },
] as const

export const googleGeneralPartnerStats = [
  "Tripled Legendary RE's Pipeline in 3 weeks",
  'Debi Eagan did $11m in Volume within 3 months',
  'Marquis + Farwell got 19x organic search traffic',
] as const

export type { ChannelLandingCaseStudy as GoogleGeneralCaseStudy } from '@/lib/landing/channel-landing-types'
export { channelLandingCaseStudies as caseStudies } from '@/lib/landing/channel-landing-shared-data'
