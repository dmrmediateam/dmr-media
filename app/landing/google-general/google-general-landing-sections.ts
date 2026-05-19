import type {
  ChannelLandingByTheNumbersSection,
  ChannelLandingTimelineSection,
} from '@/lib/landing/channel-landing-types'

export const googleGeneralByTheNumbersSection: ChannelLandingByTheNumbersSection = {
  eyebrow: 'By the numbers',
  title: 'Proof you can measure',
  stats: [
    {
      value: '5-stars',
      label: 'on Trustpilot & Google',
    },
    {
      value: '#1',
      label: 'Rated RE Agency by SEMRush for PPC & SEO',
    },
    {
      value: '$7.23',
      label: 'Qualified leads for as little as',
    },
  ],
}

export const googleGeneralTimelineSection: ChannelLandingTimelineSection = {
  eyebrow: 'Your first 30 days',
  title: 'A concrete plan, not a vague promise',
  intro:
    'You shouldn’t wonder what you’re paying for. Here’s what we execute week by week for your team while the clock on your guarantee runs, so day 30 feels like a checkpoint, not a surprise.',
  weeks: [
    {
      label: 'Week 1',
      title: 'Setup & launch',
      body:
        'Account access, conversion tracking, call and form attribution, landing paths live, CRM hooks tested, and campaigns launched with QA from click to inbox. You see exactly what went live and why.',
    },
    {
      label: 'Week 2',
      title: 'Optimization',
      body:
        'Search term reviews, negatives, geo and audience refinements, and first creative tests on copy and forms. We tighten spend toward qualified intent in your markets and flag early lead-quality patterns with your team.',
    },
    {
      label: 'Weeks 3-4',
      title: 'Lead generation & tracking',
      body:
        'Volume and quality stabilize against the qualified-lead definition in your agreement. Weekly reporting shows names, sources, and cost per qualified lead, so you know where you stand before the 30-day mark and what we’re doing next.',
    },
  ],
}
