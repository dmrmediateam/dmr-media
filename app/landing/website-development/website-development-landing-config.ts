import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import { channelLandingCaseStudies } from '@/lib/landing/channel-landing-shared-data'

export const websiteDevelopmentLandingConfig: ChannelLandingConfig = {
  path: '/landing/website-development',
  formName: 'website-development-landing',
  headerApplyLabel: 'Get a quote',
  heroLayout: 'conversion',
  formConfig: {
    title: 'Get your website quote',
    subtitle: 'Takes about 60 seconds',
    question: 'Where should we send pricing, timelines, and examples?',
    submitLabel: 'Get my quote & examples',
    footnote: 'No spam. Custom pricing and live examples for your market, usually same day.',
    ariaLabel: 'Website development quote request',
    fieldSet: 'full',
  },
  heroTitleSegments: [
    { text: 'We Build You a Website That Generates Qualified Leads in 2 Weeks, ' },
    { text: 'or We Refund You Everything', italic: true },
    { text: '.' },
  ],
  heroTitleEmphasis: '',
  heroIntro: '',
  heroIntroShort:
    'An award-nominated luxury website plus our exact follow-up scripts. Qualified leads in your CRM within 14 days, or we refund you everything.',
  heroIntroParagraphs: [
    [
      {
        text: 'Unlike other agencies, we put our money where our mouth is. You get an award-nominated luxury website, our exact follow-up scripts and cadence, and campaigns that put ',
      },
      { text: 'qualified buyer and seller leads in your CRM within 14 days', italic: true },
      {
        text: ', or we refund your website fee and your ad spend. If you want buyers and sellers filling your pipeline, go with the team that ',
      },
      { text: 'actually makes that happen', italic: true },
      { text: '.' },
    ],
  ],
  partnerStatsEyebrow: 'What you get',
  partnerStats: [
    'Qualified leads in your CRM in 14 days, or we refund you',
    'Custom-designed from scratch, never a template',
    'DesignRush Design Awards-nominated builds',
  ],
  marketingCoreHeading: 'What a website should actually do for a top producer.',
  marketingCorePillars: [
    {
      number: '01',
      title: 'Win the listing before the appointment',
      body:
        'When a seller with a $2M home shortlists three agents, they visit three websites. Two look like the brokerage handed them out. One reads like the market leader: editorial design, sold portfolio, press, proof. Your website is a listing presentation that runs 24/7, and it should close like one.',
    },
    {
      number: '02',
      title: 'Present properties at the caliber of the listing',
      body:
        'Luxury sellers expect marketing that matches the price point, and they judge you on the last listing you marketed. From photography-forward property pages to dedicated single-property websites with their own domain, your inventory becomes the strongest argument for hiring you.',
    },
    {
      number: '03',
      title: 'Turn search traffic into inquiries you own',
      body:
        'Beautiful isn\'t enough. Every site ships with IDX/MLS-ready layouts, home-valuation capture, and clear paths to contact, engineered so the affluent buyer or seller who finds you becomes a name in your CRM, not a stat in a portal\'s.',
    },
    {
      number: '04',
      title: 'Built to rank, managed for you',
      body:
        'SEO foundations, sub-second performance, and clean tracking from day one, the same standards behind our #1-rated search work. We handle design, build, launch, and ongoing updates so the site stays sharp while you sell.',
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
        value: '100%',
        label: 'custom-designed, never a recycled template',
      },
      {
        value: '#1',
        label: 'Rated RE Agency by SEMRush for PPC & SEO',
      },
    ],
  },
  timelineSection: {
    eyebrow: 'From kickoff to launch',
    title: 'A concrete build plan, not a vague timeline',
    intro:
      'You shouldn\'t wonder where your website is or what you\'re paying for. Here\'s how a build runs week by week, so launch day is a checkpoint, not a surprise.',
    weeks: [
      {
        label: 'Week 1',
        title: 'Discovery & design direction',
        body:
          'We study your brand, market, price point, and the agents you compete against. You approve a design direction built around your positioning, before a single page is built.',
      },
      {
        label: 'Week 2',
        title: 'Build, launch & ads live',
        body:
          'Custom page design, IDX/MLS integration, valuation tools, and lead capture assembled on live preview links, then launched with your campaigns switched on. You get our exact copy-and-paste follow-up scripts, and the guarantee clock starts the day your ads go live.',
      },
      {
        label: 'Weeks 3-4',
        title: 'The guarantee window',
        body:
          'Qualified buyer and seller leads land in your CRM within 14 days of launch, or we refund your website fee and your ad spend. The full guarantee terms, including the follow-up conditions, are published in our service terms.',
      },
    ],
  },
  reviewsSection: {
    eyebrow: 'Reviews',
    title: 'What top producers say',
  },
  caseStudiesSection: {
    eyebrow: 'Proof',
    title: 'The results behind the designs',
  },
  faqItems: [
    {
      question: 'Do you use templates?',
      answer:
        'No. Every site is designed from scratch around your brand, your market, and your inventory. That\'s why our builds get nominated for design awards, and why your site won\'t look like the agent\'s down the street.',
    },
    {
      question: 'How long does a build take?',
      answer:
        'Most agent and team websites launch in about four weeks from kickoff. Dedicated single-property sites move faster, typically one to two weeks, timed to your listing launch.',
    },
    {
      question: 'Can you integrate IDX / MLS listings?',
      answer:
        'Yes. We build IDX/MLS-ready layouts so your active inventory, sold portfolio, and saved searches live natively on your site, presented at the same standard as the rest of your brand.',
    },
    {
      question: 'Do you build single-property websites?',
      answer:
        'Yes, dedicated sites for signature listings, like the $6.5M Ocean Breeze estate in Turks & Caicos. They give the property its own address on the internet and give you a listing presentation no competing agent can match.',
    },
    {
      question: 'Will my website actually generate business?',
      answer:
        'That\'s the point of the design. Valuation capture, clear contact paths, and SEO foundations are built in from day one, and because we\'re also a search marketing agency, your site is built to rank and to convert the traffic it earns.',
    },
    {
      question: 'How does the 2-week guarantee work?',
      answer:
        'If qualified buyer and seller leads aren\'t in your CRM within 14 days of your campaigns going live, we refund your website/onboarding fee and your ad spend (ad-spend refunds capped at $2,000 over the 14 days). The one condition: your team follows up on at least 90% of leads within an hour during business hours, using the scripts we hand you. Full terms are published on our service terms page.',
    },
    {
      question: 'Who owns the website?',
      answer:
        'Your domain, your content, and your leads are yours from day one, and ownership of the website design transfers to you after 12 months of working with us. Every site connects to the MLS via IDX, and we manage and maintain it for you throughout.',
    },
    {
      question: 'What does it cost?',
      answer:
        'Three builds: a fully-templated website at $2,500, a semi-custom website (custom home page plus meet-the-team and about pages) at $3,500, or a fully custom website at $8,500, each paired with a $650-per-4-weeks retainer, and every tier connects to the MLS via IDX.',
    },
  ],
  metadata: {
    title: 'A Website That Generates Leads in 2 Weeks, Guaranteed | DMR Media',
    description:
      'We build you a website that generates qualified leads in 2 weeks, or we refund you everything. Award-nominated design, IDX/MLS built in.',
    openGraphTitle: 'Qualified Leads in 2 Weeks, or We Refund You | DMR Media',
    openGraphDescription:
      'Award-nominated luxury websites with our exact follow-up scripts, qualified buyer & seller leads in your CRM in 14 days, or we refund you.',
  },
}
