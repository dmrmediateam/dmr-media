import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import { channelLandingCaseStudies } from '@/lib/landing/channel-landing-shared-data'

export const leadGenerationLandingConfig: ChannelLandingConfig = {
  path: '/landing/lead-generation',
  formName: 'lead-generation-landing',
  headerApplyLabel: 'Claim the guarantee',
  heroLayout: 'conversion',
  formConfig: {
    title: 'Claim the 2-week guarantee',
    subtitle: 'Takes about 60 seconds',
    question: 'Where should we send your plan, pricing, and the guarantee terms?',
    submitLabel: 'Get my plan & pricing',
    footnote: 'No spam. A concrete plan for your market, usually same day.',
    ariaLabel: 'Lead generation guarantee request',
    fieldSet: 'full',
  },
  heroTitleSegments: [
    { text: 'We Build You an Online Advertising System That Generates Qualified Leads in 2 Weeks, ' },
    { text: 'or We Refund You Everything', italic: true },
    { text: '.' },
  ],
  heroTitleEmphasis: '',
  heroIntro: '',
  heroIntroParagraphs: [
    [
      {
        text: 'Unlike other agencies, we put our money where our mouth is. You get an online advertising system built for luxury price points, our exact follow-up scripts and cadence, and campaigns that put ',
      },
      { text: 'qualified buyer and seller leads in your CRM within 14 days', italic: true },
      {
        text: ', or we refund your fee and your ad spend. If you want buyers and sellers filling your pipeline, go with the team that ',
      },
      { text: 'actually makes that happen', italic: true },
      { text: '.' },
    ],
  ],
  partnerStatsEyebrow: 'What you get',
  partnerStats: [
    'Qualified leads in your CRM in 14 days, or we refund you',
    'Our exact copy-and-paste follow-up scripts & cadence',
    'Your account, your data, your leads, never rented',
  ],
  marketingCoreHeading: 'What an online advertising system should actually do for a top producer.',
  marketingCorePillars: [
    {
      number: '01',
      title: 'Campaigns built for luxury price points',
      body:
        'Ads don\'t fail in real estate, setups do. Audience, offer, and landing page, engineered for the buyers and sellers your market actually has. We\'ve cut client cost per lead by as much as 88% by fixing exactly those three things.',
    },
    {
      number: '02',
      title: 'A landing experience that converts the click',
      body:
        'Traffic without a page built to convert it is a donation to Google. Your campaigns land on pages designed the way we design award-nominated websites, with valuation capture, clear contact paths, and IDX/MLS-ready layouts.',
    },
    {
      number: '03',
      title: 'Our exact follow-up scripts & cadence',
      body:
        'Leads don\'t close themselves. You get the same copy-and-paste scripts and follow-up cadence our best-performing clients run, so the lead that lands in your CRM at 9:04 gets a call at 9:12, not a voicemail on Thursday.',
    },
    {
      number: '04',
      title: 'Leads in your CRM, not a portal\'s',
      body:
        'Every inquiry lands in your CRM with tracking you can audit: spend, leads, and cost per lead shown plainly. Your account, your data, your pipeline. Stop paying rent on leads a portal sells to three of your competitors.',
    },
  ],
  caseStudies: channelLandingCaseStudies,
  byTheNumbersSection: {
    eyebrow: 'By the numbers',
    title: 'Proof you can measure',
    stats: [
      {
        value: '5-stars',
        label: 'from top agents, teams & brokers since 2022',
      },
      {
        value: '88%',
        label: 'peak reduction in a client\'s cost per lead',
      },
      {
        value: '#1',
        label: 'Rated RE Agency by SEMRush for PPC & SEO',
      },
    ],
  },
  timelineSection: {
    eyebrow: 'From kickoff to leads',
    title: 'A concrete launch plan, not a vague timeline',
    intro:
      'You shouldn\'t wonder where your campaigns are or what you\'re paying for. Here\'s how a launch runs week by week, so the first lead is a checkpoint, not a surprise.',
    weeks: [
      {
        label: 'Week 1',
        title: 'Kickoff & system build',
        body:
          'We study your market, price point, and competition, then build the system around your positioning: campaigns, targeting, tracking, and the landing experience. You approve everything before a dollar of ad spend moves.',
      },
      {
        label: 'Week 2',
        title: 'Launch & scripts handoff',
        body:
          'Campaigns go live and you get our exact copy-and-paste follow-up scripts and cadence. The guarantee clock starts the day your ads switch on.',
      },
      {
        label: 'Weeks 3-4',
        title: 'The guarantee window',
        body:
          'Qualified buyer and seller leads land in your CRM within 14 days of launch, or we refund your fee and your ad spend. The full guarantee terms, including the follow-up conditions, are published in our service terms.',
      },
    ],
  },
  reviewsSection: {
    eyebrow: 'Reviews',
    title: 'What top producers say',
  },
  caseStudiesSection: {
    eyebrow: 'Proof',
    title: 'The results behind the campaigns',
  },
  faqItems: [
    {
      question: 'How does the 2-week guarantee work?',
      answer:
        'If qualified buyer and seller leads aren\'t in your CRM within 14 days of your campaigns going live, we refund your fee and your ad spend (ad-spend refunds capped at $2,000 over the 14 days). The one condition: your team follows up on at least 90% of leads within an hour during business hours, using the scripts we hand you. Full terms are published on our service terms page.',
    },
    {
      question: 'What counts as a qualified lead?',
      answer:
        'A real buyer or seller inquiry with working contact details, delivered into your CRM, not a click, not an impression, not a bot form-fill. You see every lead alongside the spend that produced it.',
    },
    {
      question: 'Who owns the ad accounts and the leads?',
      answer:
        'You do. Campaigns run in your Google Ads account, every lead lands in your CRM, and the data stays yours. We build and manage the system; nothing is held hostage.',
    },
    {
      question: 'Do I need a website for this to work?',
      answer:
        'You need a landing experience built to convert, and it\'s part of the system. Every website tier connects to the MLS via IDX, and ownership of the website design transfers to you after 12 months of working with us.',
    },
    {
      question: 'What does it cost?',
      answer:
        'A $650-per-4-weeks retainer plus your website tier: fully-templated at $2,500, semi-custom (custom home page plus meet-the-team and about pages) at $3,500, or fully custom at $8,500. Ad spend is separate, agreed with you before launch, and stays in your control.',
    },
    {
      question: 'What about SEO?',
      answer:
        'SEO is part of how we build: clean foundations, fast pages, content that ranks. But this program is judged on leads, not rankings. Ask us about ongoing SEO once your lead system is paying for itself.',
    },
    {
      question: 'Is there a long-term contract?',
      answer:
        'The program runs on a 24-week commitment with 30 days written notice to cancel, and the guarantee de-risks the start: if we don\'t deliver leads in the first 14 days, you get your money back per the terms.',
    },
  ],
  metadata: {
    title: 'Lead Generation That Delivers in 2 Weeks, Guaranteed | DMR Media',
    description:
      'We build you an online advertising system that generates qualified leads in 2 weeks, or we refund you everything. Built for luxury agents and teams.',
    openGraphTitle: 'Qualified Leads in 2 Weeks, or We Refund You | DMR Media',
    openGraphDescription:
      'An online advertising system with our exact follow-up scripts, qualified buyer & seller leads in your CRM in 14 days, or we refund you.',
  },
}
