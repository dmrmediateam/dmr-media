import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import { channelLandingCaseStudies } from '@/lib/landing/channel-landing-shared-data'

const ADS_CASE_STUDY_ORDER = ['hitchcock-properties', 'vignette-realty', 'eagan-luxury-real-estate']

const adsCaseStudies = ADS_CASE_STUDY_ORDER.map((id) => channelLandingCaseStudies.find((c) => c.id === id)).filter(
  (c): c is (typeof channelLandingCaseStudies)[number] => Boolean(c)
)

export const googleAdsLandingConfig: ChannelLandingConfig = {
  path: '/landing/google-ads',
  formName: 'landing-google-ads-modal',
  headerApplyLabel: 'Claim the guarantee',
  heroLayout: 'conversion',
  formConfig: {
    title: 'Claim the 2-week guarantee',
    subtitle: 'Takes about 60 seconds',
    question: 'Where should we send your plan, pricing, and the guarantee terms?',
    submitLabel: 'Get my plan & pricing',
    footnote: 'No spam. A concrete plan for your market, usually same day.',
    ariaLabel: 'Google Ads guarantee request',
    fieldSet: 'full',
  },
  heroTitleSegments: [
    { text: 'We Build You a Google Ads System That Generates Qualified Leads in 2 Weeks, ' },
    { text: 'or We Refund You Everything', italic: true },
    { text: '.' },
  ],
  heroTitleEmphasis: '',
  heroIntro: '',
  heroIntroShort:
    'Unlike other agencies, we put our money where our mouth is: qualified buyer and seller leads in your CRM within 14 days, or we refund your fee and your ad spend.',
  heroIntroParagraphs: [
    [
      {
        text: 'Unlike other agencies, we put our money where our mouth is. You get campaigns built for luxury price points, our exact follow-up scripts and cadence, and a system that puts ',
      },
      { text: 'qualified buyer and seller leads in your CRM within 14 days', italic: true },
      {
        text: ', or we refund your fee and your ad spend. If you want buyers and sellers filling your pipeline, go with the team that ',
      },
      { text: 'actually makes that happen', italic: true },
      { text: '.' },
    ],
  ],
  partnerStats: [],
  marketingCoreHeading: 'What a Google Ads system should actually do for a top producer.',
  marketingCorePillars: [
    {
      number: '01',
      title: 'Campaigns built for your price point',
      short: 'Search and Performance Max aimed at the buyers and sellers your market has.',
      body: 'Ads don\'t fail in real estate, setups do. Audience, offer, and landing page, engineered for the buyers and sellers your market actually has. We\'ve cut client cost per lead by as much as 88% by fixing exactly those three things.',
      photo: '/images/case-studies/hitchcock-properties/panama-city-beach.jpg',
      screen: '/images/landing/google-ads/hitchcock-google-ads-30-days.webp',
      screenAlt: 'Google Ads account with 41 conversions in 30 days',
    },
    {
      number: '02',
      title: 'Pages that convert the click',
      short: 'Every ad lands on a page built for one action.',
      body: 'Traffic without a page built to convert it is a donation to Google. Your campaigns land on pages designed the way we design award-nominated websites, with valuation capture, clear contact paths, and IDX/MLS-ready layouts.',
      photo: '/images/StockHomes/modern-villa-interior-with-sparkle-floor-2024-10-18-09-40-13-utc.jpg',
      screen: '/images/seo/carole-tierney-hero.jpg',
      screenAlt: 'Carole Tierney website home page',
    },
    {
      number: '03',
      title: 'Our follow-up scripts',
      short: 'Copy-and-paste texts and calls, so every lead hears from you fast.',
      body: 'Leads don\'t close themselves. You get the same copy-and-paste scripts and follow-up cadence our best-performing clients run, so the lead that lands in your CRM at 9:04 gets a call at 9:12, not a voicemail on Thursday.',
      photo: '/images/StockHomes/spacious-living-room-with-staircase-in-residence-2025-10-10-15-17-44-utc (1).jpg',
      screen: '/images/landing/google-ads/hitchcock-google-ppc-lead.webp',
      screenAlt: 'A Google PPC lead with the agent\'s first text',
    },
    {
      number: '04',
      title: 'Leads in your CRM',
      short: 'Every lead tagged with its source, and never shared with other agents.',
      body: 'Every inquiry lands in your CRM with tracking you can audit: spend, leads, and cost per lead shown plainly. Your account, your data, your pipeline. Stop paying rent on leads a portal sells to three of your competitors.',
      photo: '/images/Cities/Stpet.jpg',
      screen: '/images/MarquisFarwellLead.png',
      screenAlt: 'A buyer inquiry delivered to the agent',
    },
  ],
  includedSection: {
    eyebrow: 'What you get',
    title: 'What a Google Ads system should actually do for a top producer',
    intro: 'Built and managed for you, each part aimed at a qualified buyer or seller in your CRM.',
  },
  caseStudies: adsCaseStudies,
  inlineCta: {
    title: 'Find out what a lead costs in your market',
    body: 'Expected cost per lead, pricing, and the guarantee terms, usually the same day.',
    ctaLabel: 'Get my plan & pricing',
  },
  finalCta: {
    eyebrow: 'Ready when you are',
    title: 'Qualified buyers and sellers in your CRM within 14 days',
    body: 'Tell us your market. We send your plan, pricing, and the guarantee terms, usually the same day.',
    ctaLabel: 'Claim the guarantee',
    reassurance: ['Leads in 14 days or your money back', 'Your ad account and your leads', 'Our exact follow-up scripts included'],
  },
  timelineSection: {
    eyebrow: 'From kickoff to leads',
    title: 'A concrete launch plan, not a vague timeline',
    intro:
      'Three steps from kickoff to leads in your CRM.',
    weeks: [
      {
        label: 'Week 1',
        title: 'Kickoff & system build',
        body: 'We study your market and build the campaigns, tracking, and landing pages. You approve before any ad spend moves.',
      },
      {
        label: 'Week 2',
        title: 'Launch & scripts handoff',
        body: 'Campaigns go live and you get our follow-up scripts. The guarantee clock starts that day.',
      },
      {
        label: 'Weeks 3-4',
        title: 'The guarantee window',
        body: 'Qualified leads in your CRM within 14 days, or we refund your fee and your ad spend.',
      },
    ],
  },
  reviewsSection: {
    eyebrow: 'Reviews',
    title: 'What top producers say',
  },
  caseStudiesSection: {
    eyebrow: 'Case studies',
    title: 'The results behind the campaigns',
  },
  faqItems: [
    {
      question: 'I tried Google Ads before and got junk leads. Why would this be different?',
      answer: 'We target the searches buyers and sellers use at your price point, send them to a page built for one action, and track every lead to the search that produced it. Hitchcock Properties went from $86.36 to $10.46 per lead after we rebuilt their account.',
    },
    {
      question: 'How do I know Google Ads will pay off?',
      answer: 'We start with the math for your market: what one closing is worth to you and what you can afford to spend to get it. You see the expected cost per lead before launch, and the guarantee covers your first 14 days.',
    },
    {
      question: 'My last ad company over-promised and disappeared. How are you different?',
      answer: 'Every result on this page names the client. You get a monthly lead report with spend, leads, and cost per lead, plus direct email access to the team doing the work. If leads aren’t in your CRM in 14 days, you get your money back.',
    },
    {
      question: 'Is this like paying Zillow for leads?',
      answer: 'You aren’t buying leads. The campaigns run in your own Google Ads account, every inquiry lands in your CRM, and no other agent gets the same lead.',
    },
    {
      question: 'Why hire you over a Google Ads freelancer?',
      answer: 'We only work with real estate agents, teams, and developers, and the team you meet runs your campaigns. Our ads, landing pages, and follow-up scripts are built for buyers and sellers, not general lead gen.',
    },
    {
      question: 'What if online leads never pick up the phone?',
      answer: 'You get our exact copy-and-paste follow-up scripts and cadence. Fast follow-up is what turns these leads into conversations, which is why it is the one condition of our guarantee.',
    },
    {
      question: 'Should I do SEO instead of Google Ads?',
      answer: 'Ads put you in front of buyers and sellers searching this week, while SEO builds in the background. We start most agents on Google Ads and their Google Business Profile, then add SEO once the leads are paying for it.',
    },
    {
      question: 'Is there a long-term contract?',
      answer: 'The program runs on a 24-week commitment with 30 days written notice to cancel, and the guarantee covers the start. If leads aren’t in your CRM in 14 days, you get your money back and the commitment ends.',
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
      question: 'Who owns the ad account and the leads?',
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

  ],
  metadata: {
    title: 'Google Ads That Generate Leads in 2 Weeks, Guaranteed | DMR Media',
    description:
      'We build you a Google Ads system that generates qualified leads in 2 weeks, or we refund you everything. Built for luxury agents and teams.',
    openGraphTitle: 'Qualified Leads in 2 Weeks, or We Refund You | DMR Media',
    openGraphDescription:
      'A Google Ads system with our exact follow-up scripts, qualified buyer & seller leads in your CRM in 14 days, or we refund you.',
  },
}
