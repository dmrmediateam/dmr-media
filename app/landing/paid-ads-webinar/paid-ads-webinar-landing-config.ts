import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import { channelLandingCaseStudies } from '@/lib/landing/channel-landing-shared-data'

export const paidAdsWebinarLandingConfig: ChannelLandingConfig = {
  path: '/landing/paid-ads-webinar',
  formName: 'paid-ads-webinar-landing',
  headerApplyLabel: 'Save my seat',
  heroLayout: 'conversion',
  formConfig: {
    title: 'Save your seat — free',
    subtitle: 'Live webinar · September 16th · 12pm ET / 9am PT',
    question: 'Where should we send your access link?',
    submitLabel: 'Save my seat',
    footnote:
      'Free to attend. Attend live to unlock the FREE website offer. *Additional purchase required.',
    ariaLabel: 'Webinar registration',
    fieldSet: 'full',
  },
  heroTitleSegments: [
    { text: 'Why Your Real Estate Ads ' },
    { text: 'Don’t Work', italic: true },
    { text: '.' },
  ],
  heroTitleEmphasis: '',
  heroIntro: '',
  heroIntroParagraphs: [
    [
      { text: 'Live webinar — ' },
      { text: 'September 16th at 12pm ET / 9am PT', italic: true },
      {
        text: '. Every month you run ads the way you’ve been running them, Google gets richer and your pipeline doesn’t. In one session we’ll hand you the paid advertising system our clients used to cut lead costs ',
      },
      { text: '88% — from $86.36 to $10.46 a lead', italic: true },
      { text: ' — and build an online book of business you own, not rent. Attend live and you also unlock a ' },
      { text: 'FREE website', italic: true },
      { text: ' (*additional purchase required).' },
    ],
  ],
  partnerStatsEyebrow: 'In one live session you will learn',
  partnerStats: [
    'How to crack real estate paid advertising — the auction, decoded',
    'How to build an online book of business you own, not rent from portals',
    'How top teams scale predictably using paid advertising',
  ],
  marketingCoreHeading: 'What we cover on September 16th.',
  marketingCorePillars: [
    {
      number: '01',
      title: 'Why your real estate ads don’t work',
      body:
        'You didn’t fail paid ads — you were set up to fail by broad match keywords, generic landing pages, and “leads” that never answer the phone. We’ll show you the three leaks that quietly drain most agents’ budgets, and how one client cut their cost per lead from $86.36 to $10.46 by plugging them.',
    },
    {
      number: '02',
      title: 'Crack real estate paid advertising',
      body:
        'Google’s auction is designed to take money from agents who don’t understand it. Zillow understands it. Compass understands it. After this session, so will you: the keyword intent, geography discipline, and message match that decide whether your budget buys appointments or funds your competitors’ education.',
    },
    {
      number: '03',
      title: 'Build an online book of business',
      body:
        'Every dollar you give a portal rents you a lead they’ll sell to three other agents. Every dollar behind your own system builds an asset: your brand, your traffic, your CRM, your repeat and referral engine. We’ll show how clients turned ad spend into 28+ qualified leads a week they own outright.',
    },
    {
      number: '04',
      title: 'Scale your team using paid advertising',
      body:
        'One agent closing from ads is luck. A team closing from ads every month is a system: budgets tied to GCI targets, CRM feedback teaching the bidding, and follow-up that doesn’t depend on willpower. This is the playbook our clients used to 3× their pipeline — built to run while you’re at closings.',
    },
  ],
  caseStudies: channelLandingCaseStudies,
  byTheNumbersSection: {
    eyebrow: 'The numbers behind the system',
    title: 'Documented results, not projections',
    stats: [
      {
        value: '$86 → $10',
        label: 'Cost per lead after one client’s rebuild — 88% cheaper, in weeks',
      },
      {
        value: '28+',
        label: 'Qualified leads per week flowing into one client’s CRM',
      },
      {
        value: '3×',
        label: 'Pipeline growth in 90 days when the full system aligns',
      },
    ],
  },
  timelineSection: {
    eyebrow: 'How it works',
    title: 'From registration to results',
    intro:
      'No hoops and no hard sell. Here is exactly what happens between saving your seat and walking away with the system.',
    weeks: [
      {
        label: 'Step 1',
        title: 'Save your seat — free',
        body:
          'Register with the form above. You’ll get your access link by email, plus a reminder before we go live so you don’t lose your spot.',
      },
      {
        label: 'Step 2',
        title: 'Attend live on September 16th',
        body:
          '12pm ET / 9am PT. We walk through the full paid advertising system with real client accounts — and live attendees unlock the FREE website offer (*additional purchase required). Bring your questions; we answer them on air.',
      },
      {
        label: 'Step 3',
        title: 'Leave with the system',
        body:
          'You’ll leave knowing exactly where your current ads leak money and what the fix looks like. Want help implementing? A limited number of attendees can book a 1:1 strategy call with the DMR team — no ambush, just a look at your market.',
      },
    ],
  },
  reviewsSection: {
    eyebrow: 'Reviews',
    title: 'What agents and teams say',
  },
  caseStudiesSection: {
    eyebrow: 'Proof',
    title: 'Results from the system we teach',
  },
  faqItems: [
    {
      question: 'Is the webinar really free?',
      answer:
        'Yes. The live session on September 16th costs nothing to attend. We teach the full system because some attendees will want our help implementing it — and the rest leave knowing exactly what to fix on their own.',
    },
    {
      question: 'When and where is it?',
      answer:
        'September 16th at 12pm ET / 9am PT, live online. Register and your access link arrives by email, with a reminder before we start.',
    },
    {
      question: 'What is the FREE website offer?',
      answer:
        'Attendees who join live qualify for a free real estate website — the same design standard as the client sites shown on this page, including our DesignRush Design Awards–nominated work. An additional purchase is required to claim the offer; the full details are shared during the webinar.',
    },
    {
      question: 'Will there be a replay?',
      answer:
        'Plan to attend live. The FREE website offer is reserved for live attendees, and the Q&A — where we look at real accounts and answer your specific questions — doesn’t translate to a recording.',
    },
    {
      question: 'Who is this webinar for?',
      answer:
        'Agents, team leads, and broker-owners who are serious about making paid advertising a system instead of a slot machine. If you’re looking for overnight results with zero follow-up, this isn’t for you — we’d rather tell you now than waste your time.',
    },
  ],
  metadata: {
    title: 'Scaling with Paid Ads — Live Real Estate Webinar | DMR Media',
    description:
      'Why your real estate ads don’t work — and the paid advertising system that cut client lead costs by 88%. Live September 16th, 12pm ET / 9am PT. FREE website offer for live attendees (*additional purchase required).',
    openGraphTitle: 'Scaling with Paid Ads — Live Real Estate Webinar | DMR Media',
    openGraphDescription:
      'The paid advertising system behind an 88% lower cost per lead. Live September 16th, 12pm ET / 9am PT. Free to attend — live attendees unlock a FREE website offer.',
  },
}
