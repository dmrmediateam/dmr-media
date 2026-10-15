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
    { text: 'Real Estate Lead Generation that Gets Qualified Buyers & Sellers in 2 Weeks, ' },
    { text: 'or We Refund Everything', italic: true },
    { text: '.' },
  ],
  heroTitleEmphasis: '',
  heroIntro: '',
  heroIntroShort:
    'Exclusive buyer and seller leads in your CRM within 14 days, or we refund your fee and your ad spend.',
  heroIntroParagraphs: [
    [
      {
        text: 'Stop paying portals for leads they sell to other agents. We build your Google Ads system, hand you our exact follow-up scripts, and put ',
      },
      { text: 'qualified buyers and sellers in your CRM within 14 days', italic: true },
      { text: ', or we refund your fee and your ad spend.' },
    ],
  ],
  partnerStats: [],
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
  timelineSection: {
    eyebrow: 'The plan',
    title: 'Three steps to a full pipeline',
    intro: 'From your first call to qualified leads in your CRM.',
    weeks: [
      {
        label: 'Week 1',
        title: 'Tell us your market',
        body: 'We study your price point and competition, then build your campaigns, tracking, and landing pages. You approve before any ad spend moves.',
      },
      {
        label: 'Week 2',
        title: 'Go live with our scripts',
        body: 'Campaigns launch and you get our exact follow-up scripts and cadence. The guarantee clock starts that day.',
      },
      {
        label: 'Weeks 3-4',
        title: 'Get qualified leads',
        body: 'Qualified buyers and sellers in your CRM within 14 days, or we refund your fee and your ad spend.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Ready when you are',
    title: 'Qualified buyers and sellers in your CRM within 14 days',
    body: 'Tell us your market. We send your plan, pricing, and the guarantee terms, usually the same day.',
    ctaLabel: 'Claim the guarantee',
    reassurance: ['Leads in 14 days or your money back', 'Exclusive leads, never shared', 'Our follow-up scripts included'],
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
      question: 'Are these leads exclusive, or shared with other agents?',
      answer:
        'Exclusive. The campaigns run in your own Google Ads account and every inquiry lands in your CRM, so no other agent gets the same lead.',
    },
    {
      question: 'How is this different from buying leads from Zillow or a lead company?',
      answer:
        'You aren’t buying leads. Portals sell the same inquiry to several agents and charge you again every month. We build a lead system you own: your ad account, your landing pages, your CRM, and our follow-up scripts.',
    },
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
        'You need a landing experience built to convert, and it\'s part of the system. Every website tier connects to the MLS via IDX, and ownership of the website design transfers to you after 6 months of working with us.',
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
    title: 'Real Estate Lead Generation: Qualified Leads in 2 Weeks, Guaranteed | DMR Media',
    description:
      'Real estate lead generation that gets qualified buyers and sellers into your CRM in 2 weeks, or we refund everything. Exclusive leads, your own ad account.',
    openGraphTitle: 'Real Estate Lead Generation that Gets Qualified Buyers & Sellers in 2 Weeks',
    openGraphDescription:
      'An online advertising system with our exact follow-up scripts, qualified buyer & seller leads in your CRM in 14 days, or we refund you.',
  },
}
