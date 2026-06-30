/** Copy for `/landing/case-studies`: authority + proof framing. */

import type { ChannelLandingCaseStudy } from '@/lib/landing/channel-landing-types'
import { channelLandingCaseStudies } from '@/lib/landing/channel-landing-shared-data'

function caseStudyById(id: string): ChannelLandingCaseStudy {
  const study = channelLandingCaseStudies.find((item) => item.id === id)
  if (!study) throw new Error(`Missing case study: ${id}`)
  return study
}

/** Vignette → Legendary → Hitchcock (featured order for this landing). */
export const authorityCaseStudies: ChannelLandingCaseStudy[] = [
  caseStudyById('vignette-realty'),
  caseStudyById('jade-legendary-real-estate'),
  caseStudyById('hitchcock-properties'),
]

export const FAQ_ITEMS = [
  {
    question: 'Are these results typical for every market?',
    answer:
      'Markets differ, but the playbook is consistent: intent mapping, disciplined Google Ads, SEO visibility, and follow-up your agents can run. We scope honestly after you request your audit and never promise volume we cannot defend with data.',
  },
  {
    question: 'How did Legendary Real Estate 3× their inbound pipeline?',
    answer:
      'Unified Google Ads and organic under one intent map, rebuilt 42 content assets, and automated nurture so inbound stayed high-velocity. Pipeline tripled in roughly 90 days, not over quarters.',
  },
  {
    question: 'What changed for Hitchcock Properties on cost per lead?',
    answer:
      'We replaced broad PPC with niche Google Search and Performance Max. CPL dropped from $86.36 to $10.46 with 28+ vacation-rental leads per week inside three weeks, with 88% lower lead cost and stronger conversation quality.',
  },
  {
    question: 'How did Eagan Luxury reach $11M+ closed volume from a standing start?',
    answer:
      'Brand, search, and follow-up launched together: organic visibility, Google Ads, and CRM-ready handoffs aligned to luxury inventory. $11M+ closed volume within three months of go-live.',
  },
  {
    question: 'How is pricing scoped?',
    answer:
      'After we understand your market, volume, and goals, we align scope and put deliverables in writing. No opaque packages or surprise invoices for basic execution.',
  },
  {
    question: 'What happens after I request the audit?',
    answer:
      'We review how you market today, where gaps show up against teams like Legendary, Hitchcock, and Eagan, and email a short audit with what we would change first. If it looks like a fit, you can book a call — only if you want to.',
  },
  {
    question: 'What makes DMR different from a typical lead-gen agency?',
    answer:
      'We are ranked #1 among U.S. real estate marketing agencies on SEMrush and publish results like these because we compete in the same search landscape we manage for clients. Most agencies optimize for lead count; we partner on qualified pipeline you can trace to names and sources.',
  },
] as const

export const marketingCorePillars = [
  {
    number: '01',
    title: 'Documented outcomes',
    body:
      'Every engagement is measured against qualified-lead definitions your leadership can defend: names, sources, CPL, and conversation quality, not blended dashboards.',
  },
  {
    number: '02',
    title: 'One integrated stack',
    body:
      'Google Ads, AI SEO, and automated follow-up under one intent map: the same system behind Legendary, Hitchcock, and Eagan.',
  },
  {
    number: '03',
    title: 'Authority you can verify',
    body:
      '#1 U.S. real estate marketing agency on SEMrush, 5/5 on Trustpilot & Google, and case studies you can read in full before you ever sign.',
  },
] as const
