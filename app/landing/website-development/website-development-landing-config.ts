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
  partnerStats: [],
  marketingCoreHeading: 'What a website should actually do for a top producer.',
  marketingCorePillars: [
    {
      number: '01',
      title: 'Win the listing before the appointment',
      short: 'Editorial design that reads like the market leader.',
      body: 'When a seller with a $2M home shortlists three agents, they visit three websites. Two look like the brokerage handed them out. One reads like the market leader: editorial design, sold portfolio, press, proof. Your website is a listing presentation that runs 24/7, and it should close like one.',
      photo: '/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg',
      screen: '/images/seo/alexa-devaney-hero.jpg',
      screenAlt: 'Alexa Devaney website home page',
    },
    {
      number: '02',
      title: 'Listings presented at their caliber',
      short: 'Property pages and single-property sites that match the home.',
      body: 'Luxury sellers expect marketing that matches the price point, and they judge you on the last listing you marketed. From photography-forward property pages to dedicated single-property websites with their own domain, your inventory becomes the strongest argument for hiring you.',
      photo: '/images/StockHomes/spacious-living-room-with-staircase-in-residence-2025-10-10-15-17-44-utc (1).jpg',
      screen: '/images/propertyWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-25-19_45_37.png',
      screenAlt: 'Ocean Breeze single-property website',
    },
    {
      number: '03',
      title: 'Traffic that turns into inquiries',
      short: 'Home search, registration, and valuations routed to your CRM.',
      body: 'Beautiful isn\'t enough. Every site ships with IDX/MLS home search, listing registration, home-valuation capture, and clear paths to contact, so the buyer or seller who finds you becomes a name in your CRM, not a stat in a portal\'s.',
      photo: '/images/StockHomes/a-backyard-with-a-swimming-pool-hot-tub-and-pati-2025-02-10-06-23-51-utc.jpg',
      screen: '/images/seo/carole-tierney-lead-capture-modal.webp',
      screenAlt: 'Listing registration popup on Carole Tierney\'s site',
    },
    {
      number: '04',
      title: 'Built to rank, managed for you',
      short: 'SEO foundations from day one, so Google and AI can find you.',
      body: 'SEO foundations, fast pages, and clean tracking from day one, the same standards behind our #1-rated search work. We handle design, build, launch, and ongoing updates so the site stays sharp while you sell.',
      photo: '/images/Cities/Stpet.jpg',
      screen: '/images/seo/eagan-google-ai-overview-dolphin-cay.webp',
      screenAlt: 'Google AI Overview naming Eagan Luxury',
    },
  ],
  includedSection: {
    eyebrow: 'What you get',
    title: 'What a website should actually do for a top producer',
    intro: 'Design is where it starts. Every build is also wired to rank and capture leads.',
  },
  caseStudies: channelLandingCaseStudies,
  inlineCta: {
    title: 'See what your new website could look like',
    body: 'Pricing, timelines, and live examples for your market, usually the same day.',
    ctaLabel: 'Get my quote & examples',
  },
  finalCta: {
    eyebrow: 'Ready when you are',
    title: 'Your next listing appointment starts on your website',
    body: 'Get pricing, timelines, and live examples for your market, usually the same day. Leads in 14 days, or your money back.',
    ctaLabel: 'Get my quote & examples',
    reassurance: ['Leads in 14 days or a full refund', 'Design ownership after 6 months', 'Connected to your MLS'],
  },
  timelineSection: {
    eyebrow: 'From kickoff to leads',
    title: 'A concrete build plan, not a vague timeline',
    intro:
      'Three steps from kickoff to leads in your CRM.',
    weeks: [
      {
        label: 'Step 1',
        title: 'Discovery & design direction',
        body: 'We study your brand and market, write your first draft of copy, and you approve a design direction.',
      },
      {
        label: 'Step 2',
        title: 'Build, launch & ads live',
        body: 'We build on live preview links with IDX and lead capture, then launch with your campaigns on.',
      },
      {
        label: 'Step 3',
        title: 'The guarantee window',
        body: 'Qualified leads in your CRM within 14 days of launch, or we refund your website fee and ad spend.',
      },
    ],
  },
  reviewsSection: {
    eyebrow: 'Reviews',
    title: 'What top producers say',
  },
  caseStudiesSection: {
    eyebrow: 'Case studies',
    title: 'The results behind the designs',
  },
  faqItems: [
    {
      question: 'Do I even need a website if buyers use Zillow?',
      answer: 'Zillow hands your buyer to whoever pays most. When a referral or a sign call looks you up, your website is what they judge, and it’s where Google, ChatGPT, and your ads send people who want to talk to you, not three other agents.',
    },
    {
      question: 'Why not get a cheaper website?',
      answer: 'Every build is tied to an outcome: qualified buyer and seller leads in your CRM within 14 days, or we refund your website fee and your ad spend. A cheaper site that never produces a lead costs more.',
    },
    {
      question: 'My brokerage or CRM already gives me a site. Why pay for one?',
      answer: 'Your DMR site lives on your own domain, connects to your MLS through IDX, and its design transfers to you after 6 months, so the traffic you build follows your career.',
    },
    {
      question: 'Is it a one-time build or a monthly fee?',
      answer: 'Both, in writing before you start: a one-time build fee for the tier you choose, plus a monthly retainer that covers hosting, your MLS/IDX feed, updates, and campaign management. Ad spend is separate and stays in your control.',
    },
    {
      question: 'What happens to my current site?',
      answer: 'We handle the move from your current site, including your domain and your IDX feed, and you approve the new site on a live preview link before anything changes.',
    },
    {
      question: 'Will it work with my MLS?',
      answer: 'We connect through IDX Broker, which covers more than 600 MLSs across all 50 states. Your listings, sold homes, and saved searches live on your site.',
    },
    {
      question: 'How much work is this for me?',
      answer: 'Very little. We write the first draft of your copy, build on live preview links, and you approve before launch. After launch, send us a change and we make it.',
    },
    {
      question: 'I’ve been burned by a website company before. Why trust you?',
      answer: 'That’s why the guarantee exists. If qualified leads aren’t in your CRM within 14 days of launch, you get your website fee and ad spend back. Every result on this page names the client, so you can check it yourself.',
    },
    {
      question: 'How much does a real estate website cost with DMR?',
      answer:
        'It depends on the build you choose: templated, semi-custom (custom home page plus meet-the-team and about pages), or fully custom. Each is paired with a monthly retainer that covers hosting, your MLS/IDX feed, updates, and campaign management, and ad spend is separate. Request a quote and we send exact pricing and examples for your market, usually the same day.',
    },
    {
      question: 'Is it a template or a custom design?',
      answer:
        'You choose. The templated build styles a proven layout to your brand, the semi-custom build adds a custom home page plus meet-the-team and about pages, and the fully custom build is designed from scratch. On every build, the IDX listing pages follow your MLS\'s display rules.',
    },
    {
      question: 'How long does a build take?',
      answer:
        'Templated sites can launch in about a week. Semi-custom and fully custom agent and team sites typically launch in about four weeks from kickoff. Dedicated single-property sites usually take one to two weeks, timed to your listing launch.',
    },
    {
      question: 'What is an IDX website?',
      answer:
        'IDX (Internet Data Exchange) puts live MLS listings on your own website, so buyers search homes with you and register on your site instead of a portal. Every DMR build includes it.',
    },
    {
      question: 'How does the 2-week guarantee work?',
      answer:
        'If qualified buyer and seller leads aren\'t in your CRM within 14 days of your campaigns going live, we refund your website/onboarding fee and your ad spend (ad-spend refunds capped at $2,000 over the 14 days). The one condition: your team follows up on at least 90% of leads within an hour during business hours, using the scripts we hand you. Full terms are published on our service terms page.',
    },
    {
      question: 'Who owns the website?',
      answer:
        'Your domain, your content, and your leads are yours from day one, and ownership of the website design transfers to you after 6 months of working with us. Every site connects to the MLS via IDX, and we manage and maintain it for you throughout.',
    },
    {
      question: 'Do you build single-property websites?',
      answer:
        'Yes, dedicated sites for signature listings, like the $6.5M Ocean Breeze estate in Turks & Caicos. They give the property its own address on the internet and give you a listing presentation no competing agent can match.',
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
