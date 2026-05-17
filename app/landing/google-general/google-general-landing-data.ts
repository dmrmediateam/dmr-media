/** Copy & schema data for `/landing/google-general`. */

export const FAQ_ITEMS = [
  {
    question: 'What does “#1 in the U.S. on SEMrush” mean?',
    answer:
      'SEMrush ranks agencies and sites by visibility and momentum within their category. DMR Media is ranked first among U.S. real estate marketing agencies in that benchmark—we compete in the same search landscape we manage for luxury teams.',
  },
  {
    question: 'Do you run Google Ads, SEO, and follow-up together?',
    answer:
      'Yes. We build one intent map across paid search, AI SEO, and automated follow-up so leads are captured at high intent, nurtured consistently, and handed to your team with context—not scattered across vendors.',
  },
  {
    question: 'How long until we see movement?',
    answer:
      'Paid search can surface qualified conversations within days when tracking and landing paths are correct. Organic and AI visibility compound over weeks and quarters. We report on pipeline metrics your leadership can defend.',
  },
  {
    question: 'How is pricing scoped?',
    answer:
      'After we understand your market, volume, and goals, we align scope and put deliverables in writing—no opaque packages or surprise invoices for basic execution.',
  },
  {
    question: 'What makes DMR different from a typical lead-gen agency?',
    answer:
      'Most agencies optimize for lead volume. We partner on conversion: qualified buyers and sellers, playbooks your team can run, and systems that keep follow-up tight while you stay in the field.',
  },
] as const

export const marketingCorePillars = [
  {
    number: '01',
    title: 'Google Ads',
    body:
      'Capture Buyers & Sellers as they are searching for homes or finding a valuation; not when they are “browsing” social media.',
  },
  {
    number: '02',
    title: 'AI Search Engine Optimization (AI SEO)',
    body:
      'Show up as the #1 Real Estate Team & Agent in your area without guessing. It’s not only what we’ve done for ourselves but dozens of teams across the world.',
  },
  {
    number: '03',
    title: 'AI Tailored Follow-up System',
    body:
      'Have AI do the heavy lifting and automatically follow-up with your leads; keeping you doing what you do best.',
  },
] as const

export type { ChannelLandingCaseStudy as GoogleGeneralCaseStudy } from '@/lib/landing/channel-landing-types'
export {
  channelLandingCaseStudies as caseStudies,
  channelLandingPartnerStats as partnerStats,
} from '@/lib/landing/channel-landing-shared-data'
