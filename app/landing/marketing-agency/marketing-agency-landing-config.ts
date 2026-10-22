import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import { channelLandingCaseStudies } from '@/lib/landing/channel-landing-shared-data'

/** Paid landing for "real estate marketing agency" searches (and close variants). */
export const marketingAgencyLandingConfig: ChannelLandingConfig = {
  path: '/landing/marketing-agency',
  formName: 'marketing-agency-landing',
  headerApplyLabel: 'Get my marketing plan',
  heroLayout: 'conversion',
  formConfig: {
    title: 'Get your marketing plan',
    subtitle: 'Takes about 60 seconds',
    question: 'Where should we send your plan, pricing, and examples?',
    submitLabel: 'Get my plan & pricing',
    footnote: 'No spam. A concrete plan for your market, usually same day.',
    ariaLabel: 'Real estate marketing plan request',
    fieldSet: 'full',
  },
  heroTitleSegments: [
    { text: 'The #1 Real Estate Marketing Agency for ' },
    { text: 'Luxury Agents & Teams', italic: true },
    { text: '.' },
  ],
  heroTitleEmphasis: '',
  heroIntro: '',
  heroIntroShort:
    'Your website, Google Ads, and SEO from one team, with qualified leads in your CRM within 14 days or your money back.',
  heroIntroParagraphs: [
    [
      { text: 'Stop juggling a web designer, an ads freelancer, and an SEO vendor. We run your website, Google Ads, and search from one team, and put ' },
      { text: 'qualified buyers and sellers in your CRM within 14 days', italic: true },
      { text: ', or we refund your fee and your ad spend.' },
    ],
  ],
  partnerStats: [],
  marketingCoreHeading: 'What a real estate marketing agency should actually do for a top producer.',
  marketingCorePillars: [
    {
      number: '01',
      title: 'A website that wins the listing',
      body: 'Award-nominated design built to your brand, with IDX search and lead capture on your own domain.',
    },
    {
      number: '02',
      title: 'Google Ads that bring buyers and sellers',
      body: 'Campaigns in your own account, aimed at the price points you sell, with every lead in your CRM.',
    },
    {
      number: '03',
      title: 'SEO and AI search that compound',
      body: 'Community pages and authority that get you named in Google, ChatGPT, and Perplexity.',
    },
    {
      number: '04',
      title: 'Follow-up that turns leads into closings',
      body: 'Our exact scripts and cadence, so every lead hears from you within the hour.',
    },
  ],
  caseStudies: channelLandingCaseStudies,
  timelineSection: {
    eyebrow: 'The plan',
    title: 'Three steps from first call to a full pipeline',
    intro: 'From your first call to qualified leads in your CRM.',
    weeks: [
      {
        label: 'Week 1',
        title: 'Tell us your market',
        body: 'We study your price point, competition, and current marketing, then map the website, ads, and search plan. You approve before any ad spend moves.',
      },
      {
        label: 'Week 2',
        title: 'Launch with our scripts',
        body: 'Your site and campaigns go live with tracking, and you get our exact follow-up scripts. The guarantee clock starts that day.',
      },
      {
        label: 'Weeks 3-4',
        title: 'Get qualified leads',
        body: 'Qualified buyers and sellers in your CRM within 14 days, or we refund your fee and your ad spend. Then SEO keeps compounding.',
      },
    ],
  },
  finalCta: {
    eyebrow: 'Ready when you are',
    title: 'One agency for the website, the ads, and the leads',
    body: 'Tell us your market. We send your plan, pricing, and examples, usually the same day.',
    ctaLabel: 'Get my marketing plan',
    reassurance: ['Leads in 14 days or your money back', 'Your accounts, your CRM, your data', 'Our follow-up scripts included'],
  },
  reviewsSection: {
    eyebrow: 'Reviews',
    title: 'What top producers say',
  },
  caseStudiesSection: {
    eyebrow: 'Proof',
    title: 'The results behind the marketing',
  },
  faqItems: [
    {
      question: 'What does a real estate marketing agency do?',
      answer:
        'It brings you buyer and seller business you would not get from referrals alone. With DMR that means your website, Google Ads, SEO and AI search, and the follow-up scripts that turn leads into appointments, all run by one team.',
    },
    {
      question: 'Why one agency instead of separate vendors?',
      answer:
        'When the web designer, the ads freelancer, and the SEO vendor are different people, each blames the others when leads dry up. One team owns the whole path from the search to the lead in your CRM, so there is nobody to point at but us.',
    },
    {
      question: 'Do you only work with luxury agents?',
      answer:
        'Most of our clients sell at luxury price points, and the work is built for them. We also work with growing agents and teams who want to look and market like the leader in their area.',
    },
    {
      question: 'How does the 2-week guarantee work?',
      answer:
        'If qualified buyer and seller leads aren\'t in your CRM within 14 days of your campaigns going live, we refund your fee and your ad spend (ad-spend refunds capped at $2,000 over the 14 days). The one condition: your team follows up on at least 90% of leads within an hour during business hours, using the scripts we hand you. Full terms are published on our service terms page.',
    },
    {
      question: 'Are the leads exclusive?',
      answer:
        'Yes. Campaigns run in your own Google Ads account and every inquiry lands in your CRM, so no other agent gets the same lead.',
    },
    {
      question: 'Who owns the website, ad accounts, and leads?',
      answer:
        'You do. Campaigns run in your Google Ads account, every lead lands in your CRM, and ownership of the website design transfers to you after 6 months of working with us.',
    },
    {
      question: 'What does it cost?',
      answer:
        'A $650-per-4-weeks retainer plus your website tier: fully-templated at $2,500, semi-custom (custom home page plus meet-the-team and about pages) at $3,500, or fully custom at $8,500. Ad spend is separate, agreed with you before launch, and stays in your control.',
    },
    {
      question: 'Is there a long-term contract?',
      answer:
        'The program runs on a 24-week commitment with 30 days written notice to cancel, and the guarantee de-risks the start: if we don\'t deliver leads in the first 14 days, you get your money back per the terms.',
    },
  ],
  metadata: {
    title: 'Real Estate Marketing Agency for Luxury Agents & Teams | DMR Media',
    description:
      'The real estate marketing agency for luxury agents and teams: websites, Google Ads, and SEO from one team. Qualified leads in 14 days, or your money back.',
    openGraphTitle: 'Real Estate Marketing Agency for Luxury Agents & Teams',
    openGraphDescription:
      'Websites, Google Ads, and SEO from one team, with qualified buyer and seller leads in your CRM in 14 days, or we refund you.',
  },
}
