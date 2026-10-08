import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import { channelLandingCaseStudies } from '@/lib/landing/channel-landing-shared-data'

const SEO_CASE_STUDY_ORDER = ['jade-legendary-real-estate', 'eagan-luxury-real-estate', 'willow-brook-realty']

const seoCaseStudies = SEO_CASE_STUDY_ORDER.map((id) => channelLandingCaseStudies.find((c) => c.id === id)).filter(
  (c): c is (typeof channelLandingCaseStudies)[number] => Boolean(c)
)

export const seoLandingConfig: ChannelLandingConfig = {
  path: '/landing/seo',
  formName: 'landing-seo-modal',
  headerApplyLabel: 'Free SEO audit',
  heroLayout: 'conversion',
  formConfig: {
    title: 'Get your free SEO & AI search audit',
    subtitle: 'Takes about 60 seconds',
    question: 'Where should we send your audit?',
    submitLabel: 'Send my free audit',
    footnote: 'No spam. The audit is yours whether or not you hire us.',
    ariaLabel: 'Free real estate SEO audit request',
    fieldSet: 'full',
  },
  heroTitleSegments: [
    { text: 'Real Estate SEO & AEO that generated ' },
    { text: '19× more organic traffic', italic: true },
    { text: ' in 90 days' },
  ],
  heroTitleEmphasis: '',
  heroIntro: '',
  heroIntroShort:
    'Found on Google, cited by ChatGPT and Google AI Overviews, and turned into leads in your CRM, with reporting you can check yourself.',
  heroIntroParagraphs: [
    [
      {
        text: 'We get your website found on Google and cited by ChatGPT, Google AI Overviews, and Gemini when buyers and sellers search your market. Then we make sure that traffic turns into ',
      },
      { text: 'leads in your CRM', italic: true },
      { text: ', with reporting that shows exactly which searches produced them.' },
    ],
  ],
  partnerStatsEyebrow: 'Client results you can look up',
  partnerStats: [
    'Sonoma County team: 2 to 38 daily organic clicks in 90 days',
    'Lake Geneva team: 64 pages cited by ChatGPT, AI Overviews & Gemini',
    'St. Petersburg team: $11M+ closed, starting from zero organic traffic',
  ],
  objectionSection: {
    eyebrow: 'Before you spend a dollar',
    title: 'The questions agents ask us before they hire anyone for SEO',
    intro:
      'These come from our own sales calls and from the threads agents read before they call us. They are fair questions, so here are straight answers.',
    fixLabel: 'Our answer',
    layout: 'cards',
    items: [
      {
        title: '“Can I justify the cost?”',
        problem: 'SEO is a monthly line item, and most agents have never seen anyone tie it to a closing.',
        fix: 'We start with the math for your market. At a $750,000 price point and a 2.5% commission, one closing is about $18,750 in GCI. Your audit shows the searches and pages it would take to get there, before you commit to anything.',
      },
      {
        title: '“How do I know you’re legit?”',
        problem:
          'Anyone can put a graph on their own website, and plenty of agents have paid an SEO vendor for nothing.',
        fix: 'Every result on this page names the client and comes from their own Search Console or SEMrush dashboard, so you can look them up. On your audit call, ask to speak with a client.',
      },
      {
        title: '“How will I know it’s working?”',
        problem: 'Most vendors send ranking reports with no link to business, or send nothing at all.',
        fix: 'You get weekly reporting from your own Google Search Console and Analytics, plus the leads each page produced. If a page isn’t earning its keep, we tell you and change it.',
      },
      {
        title: '“My business comes from referrals.”',
        problem: 'Referrals work, but they cap your growth at the size of your sphere.',
        fix: 'Search brings in buyers and sellers who have no one to refer them, and it’s where many referrals look you up before they call. You keep both.',
      },
      {
        title: '“Who owns everything if I leave?”',
        problem: 'Agents switch platforms and lose their rankings, or find out the vendor owns the site.',
        fix: 'Your domain, Google Search Console, Analytics, and Google Business Profile stay in your name. We work inside accounts you own.',
      },
      {
        title: '“Can I really compete with Zillow?”',
        problem: 'Zillow, Realtor.com, and Redfin own broad searches like “homes for sale in [city].”',
        fix: 'We don’t fight them there. We target the neighborhood, community, and “best agent near me” searches where a local expert wins, and where the person searching is closer to hiring someone.',
      },
      {
        title: '“Isn’t AI killing SEO?”',
        problem:
          'When Google shows an AI summary, people click a result about 8% of the time, compared with 15% without one (Pew Research Center, 2025).',
        fix: 'That’s why we optimize for both: rankings on Google and citations inside ChatGPT, AI Overviews, and Gemini. That second part is AEO. Our Lake Geneva client has 64 pages cited across those tools today.',
      },
    ],
  },
  timelineSection: {
    eyebrow: 'Your first 90 days',
    title: 'What happens after you say yes',
    intro: 'You should never have to wonder what the work is doing. Here’s how the first quarter runs.',
    weeks: [
      {
        label: 'Weeks 1-2',
        title: 'Audit and technical fixes',
        body: 'We fix what stops Google from crawling and trusting your site: speed, indexing, broken pages, and your Google Business Profile.',
      },
      {
        label: 'Weeks 3-8',
        title: 'Neighborhood and market pages',
        body: 'We build pages for the neighborhoods, communities, and searches your buyers and sellers use, each tied to your IDX listings and a lead form.',
      },
      {
        label: 'Weeks 9-12',
        title: 'Authority, AI citations, and reporting',
        body: 'We earn local links and mentions, structure your content so AI tools can cite it, and show you which searches and pages produced leads.',
      },
    ],
  },
  reviewsSection: {
    eyebrow: 'Reviews',
    title: 'What agents say about working with us',
  },
  marketingCoreHeading: 'What real estate SEO & AEO from DMR includes',
  marketingCorePillars: [
    {
      number: '01',
      title: 'Local SEO and Google Business Profile',
      body: 'Map pack and “realtor near me” visibility, a review strategy, and accurate business listings across your market.',
    },
    {
      number: '02',
      title: 'Neighborhood and community pages',
      body: 'Pages built around the areas you sell, with IDX listings, local market detail, and lead capture. IDX feeds on their own are duplicate content; these pages are written for your market.',
    },
    {
      number: '03',
      title: 'AEO: answers AI tools cite',
      body: 'Clear answers, structured data, and local facts on your pages, so ChatGPT, Google AI Overviews, and Gemini name you when buyers ask who to call.',
    },
    {
      number: '04',
      title: 'Reporting tied to leads',
      body: 'Search Console and Analytics in your name, with each lead traced to the search and page that produced it.',
    },
  ],
  caseStudies: seoCaseStudies,
  caseStudiesSection: {
    eyebrow: 'Case studies',
    title: 'The full SEO case studies',
  },
  faqItems: [
    {
      question: 'How much does real estate SEO cost?',
      answer:
        'It depends on your market and how much needs to be built. We scope it after the free audit and put the deliverables and price in writing. For context, one closing at a $750,000 price point and a 2.5% commission is about $18,750 in GCI, so the real question is how many closings the work needs to produce.',
    },
    {
      question: 'How long does SEO take for a real estate website?',
      answer:
        'Technical fixes and long-tail neighborhood searches often move first, sometimes within weeks. Competitive terms build over months. For the Sonoma County team on this page, daily organic clicks went from about 2 to 38 within 90 days.',
    },
    {
      question: 'What is AEO, and how do realtors show up in ChatGPT?',
      answer:
        'AEO (answer engine optimization) means getting your site cited when someone asks ChatGPT, Google AI Overviews, or Gemini a question like “who is the best luxury agent in Lake Geneva.” It comes from clear, factual pages about your market, structured data, and mentions across the web. We do it alongside traditional SEO.',
    },
    {
      question: 'Can my website outrank Zillow?',
      answer:
        'Not for broad searches like “homes for sale in [city],” and we won’t pretend otherwise. You can win neighborhood, community, and “best agent near me” searches, and the people making those searches are closer to hiring someone.',
    },
    {
      question: 'Do you guarantee #1 rankings?',
      answer:
        'No. Google itself says no one can guarantee a #1 ranking, so treat anyone who promises one as a red flag. We commit to a written plan, the work in it, and reporting you can verify in your own Search Console.',
    },
    {
      question: 'Will my IDX listings help or hurt my SEO?',
      answer:
        'IDX listings are the same data on hundreds of sites, so on their own they rarely rank. We build unique neighborhood and market pages around your IDX feed, and those pages are what earn rankings.',
    },
    {
      question: 'I already have a website. Do I need a new one?',
      answer:
        'Usually not. We start with the audit and fix what blocks rankings and leads. We only recommend a rebuild when your current platform limits what can be fixed.',
    },
    {
      question: 'Is SEO worth it if most of my business is referrals?',
      answer:
        'It is if you want growth beyond your sphere. Search brings in buyers and sellers who don’t know anyone to refer them, and it’s where many referrals check you out before they call.',
    },
  ],
  metadata: {
    title: 'Real Estate SEO & AEO | 19× Organic Traffic in 90 Days | DMR Media',
    description:
      'Real estate SEO and AEO that gets agents found on Google and cited by ChatGPT and AI Overviews. A Sonoma County team went from 2 to 38 daily organic clicks in 90 days. Free audit.',
    openGraphTitle: 'Real Estate SEO & AEO that generated 19× more organic traffic in 90 days',
    openGraphDescription:
      'Found on Google, cited by AI search, and turned into leads in your CRM, with reporting you can check yourself. Get a free SEO & AI search audit.',
  },
}
