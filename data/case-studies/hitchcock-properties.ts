import type { CaseStudyData } from '@/types/case-study'

const IMG = {
  hero: '/images/case-studies/hitchcock-properties/panama-city-beach.jpg',
  card: '/images/case-studies/hitchcock-properties/panama-city-beach.jpg',
  googleAdsDashboard: '/images/case-studies/hitchcock-properties/google-ads-dashboard.png',
  googleAdsTransparency: '/images/case-studies/hitchcock-properties/google-ads-transparency.png',
  leadCrm: '/images/case-studies/hitchcock-properties/lead-crm.png',
} as const

export const hitchcockPropertiesData: CaseStudyData = {
  slug: 'hitchcock-properties',
  client: 'Hitchcock Properties',
  location: 'Panama City Beach, Florida',
  market: 'Vacation Rentals',
  status: 'Ongoing',
  seo: {
    title: 'Hitchcock Properties — 88% Lower CPL for Vacation Rental Leads | DMR Media',
    description:
      'DMR Media helped Brenton Hitchcock cut cost-per-lead from $86.36 to $10.46, drive 28+ high-intent vacation rental leads per week, and reach an estimated 1,323% ROAS in Panama City Beach.',
    canonical: 'https://www.dmrmedia.org/case-study/hitchcock-properties',
    ogImage: IMG.hero,
    datePublished: '2026-03-01',
    dateModified: '2026-03-19',
  },
  hero: {
    image: IMG.hero,
    imageAlt: 'Panama City Beach, Florida coastline — Hitchcock Properties market',
    subtitle:
      'Brenton Hitchcock built Hitchcock Properties to own vacation rental buyers in Panama City Beach. DMR replaced generic Sierra Interactive PPC with niche Google Search and Performance Max remarketing. In three weeks: consistent flow, $10.46 cost-per-lead, and buyers who actually want income-producing rentals.',
  },
  metrics: [
    { number: '$10.46', label: 'Avg. cost per lead', context: 'Down from $86.36' },
    { number: '1,323%', label: 'Est. return on ad spend', context: 'Campaign economics' },
    { number: '30%+', label: 'Lead-to-conversation rate', context: 'Qualified follow-up' },
    { number: '28+', label: 'Leads per week', context: 'High-intent vacation rental buyers' },
  ],
  reviews: [
    {
      text: 'We have really enjoyed working with andrew and his team at DMR! They are helping us market different ways and hyper focus to get us not just leads but the right leads! Thank you so much guys',
      author: 'Brenton Hitchcock',
      role: 'Owner, Hitchcock Properties',
      image: null,
    },
  ],
  sections: [
    {
      id: 'the-problem',
      eyebrow: 'The Problem',
      headline: 'Generic PPC Was Bleeding Budget on the Wrong Buyers',
      body: [
        `Brenton Hitchcock is not a general buyer's agent. He is the owner of Hitchcock Properties, a team building its name as the go-to vacation rental specialists in Panama City Beach, Florida.`,
        `But his marketing did not reflect that.`,
        `Through Sierra Interactive's PPC platform, Brenton was paying over $75 per lead and those leads were generic. First-time homebuyers. Relocators. People searching broadly for property, not specifically for income-producing vacation rentals they could rent out and cash flow from day one.`,
        `Every lead that was not a vacation rental buyer was wasted money and wasted time on his team.`,
        `Brenton knew he needed to fix it, but like most agents, budget was a real concern. He was not sure a change was financially viable. He felt stuck in a system that was not built for his niche, with no clear path out.`,
      ],
    },
    {
      id: 'the-turning-point',
      eyebrow: 'The Turning Point',
      headline: 'Niche Search + Remarketing Built for Vacation Rental Intent',
      body: [
        `When Brenton connected with DMR Media, the problem was immediately clear: he was not running niche marketing. He was running generic real estate PPC and hoping the right buyer would show up.`,
        `Instead of broad search terms pointing to a generic landing page, we built a <a href="/google-ads-management">Google Search Ads</a> campaign specifically targeting buyers searching for vacation rental properties in Panama City Beach: people actively researching buying a property they could rent out and generate income from.`,
        `Then we layered on a Performance Max remarketing campaign with conversion tracking built to teach Google exactly what a vacation rental buyer looks like, not just anyone who clicked an ad.`,
        `This is the difference between buying traffic and buying intent.`,
      ],
      screenshot: {
        src: IMG.googleAdsDashboard,
        alt: 'Google Ads campaigns for Hitchcock Properties showing P-Max vacation rental leads at $8.78 cost per conversion',
      },
      screenshots: [
        {
          src: IMG.googleAdsTransparency,
          alt: 'Google Ads Transparency Center for hitchcockprops.com showing active search ads',
          caption: 'Verified search ads for hitchcockprops.com',
        },
      ],
    },
    {
      id: 'how-we-did-it',
      eyebrow: 'How We Did It',
      headline: 'Three Weeks from Launch to Consistent Lead Flow',
      body: [],
      phases: [
        {
          label: 'Week 1',
          name: 'Launch',
          body: 'Account structure, conversion tracking, vacation-rental-specific landing paths, and initial Search + P-Max campaigns live with QA from click to CRM.',
        },
        {
          label: 'Week 2',
          name: 'Optimize',
          body: 'Search term reviews, audience signals, and creative tests tuned toward buyers researching rental income and Panama City Beach vacation markets.',
        },
        {
          label: 'Week 3',
          name: 'Scale',
          body: 'Consistent weekly lead flow at $10.46 average CPL with 30%+ lead-to-conversation rate and pipeline full of vacation rental intent.',
        },
      ],
    },
    {
      id: 'results',
      eyebrow: 'The Results',
      headline: '88% Lower CPL. 28+ Niche Leads Per Week.',
      body: [
        `Three weeks after launch, the campaign reached consistent lead flow. Average cost-per-lead dropped from $86.36 to $10.46, an 88% reduction. Brenton now sees 28+ high-intent vacation rental leads per week, with a lead-to-conversation rate above 30% and an estimated return on ad spend of 1,323%.`,
        `Before: Sierra Interactive PPC at $75+ for basic Google Search leads. After: DMR delivering niche vacation rental leads at $10.46 with more information and higher intent.`,
        `These are not buyers who stumbled onto Brenton's site. They are people actively searching for a vacation rental investment: the exact client Brenton built his business to serve. Buyers who want a property they can enjoy personally, rent through a management company, and generate cash flow from the backend.`,
        `That is Brenton's wheelhouse. And now his pipeline is full of people who need exactly what he offers.`,
      ],
      screenshots: [
        {
          src: IMG.leadCrm,
          alt: 'Sierra CRM lead from Google PPC with buyer tags and active follow-up for Hitchcock Properties',
          caption: 'High-intent buyer lead from Google PPC',
        },
      ],
    },
    {
      id: 'why-this-matters',
      eyebrow: 'The Bottom Line',
      headline: 'Better Leads, Not Just More Leads',
      body: [
        `Brenton did not need more leads. He needed better ones.`,
        `DMR Media built a campaign that spoke directly to vacation rental buyers at the exact moment they were searching and used data to continuously sharpen who Google was targeting.`,
        `The result: a pipeline that matches Brenton's niche, a cost-per-lead that makes the economics undeniable, and a clear path to becoming the dominant vacation rental agent in Panama City Beach.`,
      ],
    },
  ],
}
