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
    footnote: 'No spam. Custom pricing and live examples for your market — usually same day.',
    ariaLabel: 'Website development quote request',
    fieldSet: 'full',
  },
  heroTitleSegments: [
    { text: 'A Website That Wins the Listing ' },
    { text: 'Before You Walk In', italic: true },
    { text: '.' },
  ],
  heroTitleEmphasis: '',
  heroIntro: '',
  heroIntroParagraphs: [
    [
      {
        text: 'High-end sellers research you long before they return your call. In those thirty seconds, your website either proves you\'re the market leader — or quietly hands the listing to whoever looks the part. We design ',
      },
      { text: 'fully custom websites for top-producing agents, teams, and brokers', italic: true },
      {
        text: ' — built to win listing appointments, present properties at the caliber of the price point, and turn search traffic into ',
      },
      { text: 'inquiries you own, not leads you rent', italic: true },
      { text: '.' },
    ],
  ],
  partnerStatsEyebrow: 'What you get',
  partnerStats: [
    'Custom-designed from scratch — never a template',
    'DesignRush Design Awards-nominated builds',
    'Single-property sites for listings from $1M to $6.5M+',
  ],
  marketingCoreHeading: 'What a website should actually do for a top producer.',
  marketingCorePillars: [
    {
      number: '01',
      title: 'Win the listing before the appointment',
      body:
        'When a seller with a $2M home shortlists three agents, they visit three websites. Two look like the brokerage handed them out. One reads like the market leader — editorial design, sold portfolio, press, proof. Your website is a listing presentation that runs 24/7, and it should close like one.',
    },
    {
      number: '02',
      title: 'Present properties at the caliber of the listing',
      body:
        'Luxury sellers expect marketing that matches the price point — and they judge you on the last listing you marketed. From photography-forward property pages to dedicated single-property websites with their own domain, your inventory becomes the strongest argument for hiring you.',
    },
    {
      number: '03',
      title: 'Turn search traffic into inquiries you own',
      body:
        'Beautiful isn\'t enough. Every site ships with IDX/MLS-ready layouts, home-valuation capture, and clear paths to contact — engineered so the affluent buyer or seller who finds you becomes a name in your CRM, not a stat in a portal\'s.',
    },
    {
      number: '04',
      title: 'Built to rank, managed for you',
      body:
        'SEO foundations, sub-second performance, and clean tracking from day one — the same standards behind our #1-rated search work. We handle design, build, launch, and ongoing updates so the site stays sharp while you sell.',
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
        label: 'custom-designed — never a recycled template',
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
      'You shouldn\'t wonder where your website is or what you\'re paying for. Here\'s how a build runs week by week — so launch day is a checkpoint, not a surprise.',
    weeks: [
      {
        label: 'Week 1',
        title: 'Discovery & design direction',
        body:
          'We study your brand, market, price point, and the agents you compete against. You approve a design direction built around your positioning — before a single page is built.',
      },
      {
        label: 'Weeks 2-3',
        title: 'Design & build',
        body:
          'Custom page design, property showcases, IDX/MLS integration, valuation tools, and lead capture — assembled on live preview links you can review from your phone between showings.',
      },
      {
        label: 'Week 4',
        title: 'Launch & handoff',
        body:
          'QA on every device, SEO foundations, analytics with call and form tracking, and a clean handoff. You own the site and the leads it generates — we keep it fast, current, and converting.',
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
        'No. Every site is designed from scratch around your brand, your market, and your inventory. That\'s why our builds get nominated for design awards — and why your site won\'t look like the agent\'s down the street.',
    },
    {
      question: 'How long does a build take?',
      answer:
        'Most agent and team websites launch in about four weeks from kickoff. Dedicated single-property sites move faster — typically one to two weeks, timed to your listing launch.',
    },
    {
      question: 'Can you integrate IDX / MLS listings?',
      answer:
        'Yes. We build IDX/MLS-ready layouts so your active inventory, sold portfolio, and saved searches live natively on your site — presented at the same standard as the rest of your brand.',
    },
    {
      question: 'Do you build single-property websites?',
      answer:
        'Yes — dedicated sites for signature listings, like the $6.5M Ocean Breeze estate in Turks & Caicos. They give the property its own address on the internet and give you a listing presentation no competing agent can match.',
    },
    {
      question: 'Will my website actually generate business?',
      answer:
        'That\'s the point of the design. Valuation capture, clear contact paths, and SEO foundations are built in from day one — and because we\'re also a search marketing agency, your site is built to rank and to convert the traffic it earns.',
    },
    {
      question: 'Who owns the website?',
      answer:
        'You do. Your domain, your content, your leads. We manage and maintain it for you, but you\'re never locked in or held hostage.',
    },
    {
      question: 'What does it cost?',
      answer:
        'It depends on scope — a single-property site is a different build than a full team platform with IDX. Request a quote and we\'ll send exact pricing, timelines, and live examples for your market, usually the same day.',
    },
  ],
  metadata: {
    title: 'Real Estate Website Development for Top Agents | DMR Media',
    description:
      'Custom websites for top-producing agents, teams, and brokers. Award-nominated design, IDX/MLS integration, and single-property sites. Get a quote.',
    openGraphTitle: 'Custom Real Estate Websites for Top Producers | DMR Media',
    openGraphDescription:
      'Award-nominated custom website design for agents, teams, and brokers — built to win listings and convert search traffic. 5-stars since 2022.',
  },
}
