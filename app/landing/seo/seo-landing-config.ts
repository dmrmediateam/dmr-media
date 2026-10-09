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
  partnerStats: [],
  timelineSection: {
    eyebrow: 'Your first 90 days',
    title: 'What happens after you say yes',
    intro: 'How your first quarter runs.',
    weeks: [
      {
        label: 'Weeks 1-2',
        title: 'Audit and technical fixes',
        body: 'We fix speed, indexing, broken pages, and your Google Business Profile.',
      },
      {
        label: 'Weeks 3-8',
        title: 'Neighborhood and market pages',
        body: 'We build the neighborhood and market pages your buyers search for, each with a lead form.',
      },
      {
        label: 'Weeks 9-12',
        title: 'Authority, AI citations, and reporting',
        body: 'We earn local links, structure pages for AI citations, and show you which searches produced leads.',
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
      title: 'Local SEO & Google Business Profile',
      short: 'Map pack and “realtor near me” visibility in your market.',
      body: 'Map pack and “realtor near me” visibility, a review strategy, and accurate business listings across your market.',
      photo: '/images/Cities/LakeGeneva.jpg',
      screen: '/images/jade-google-business-profile.png',
      screenAlt: 'Legendary Real Estate Google Business Profile',
    },
    {
      number: '02',
      title: 'Neighborhood & community pages',
      short: 'Pages for the areas you sell, tied to your IDX listings.',
      body: 'Pages built around the areas you sell, with IDX listings, local market detail, and lead capture. IDX feeds on their own are duplicate content; these pages are written for your market.',
      photo: '/images/Cities/Sonoma.jpg',
      screen: '/images/propertyWebsiteImages/screencapture-eaganluxury-listing-1873-oceanview-dr-tierra-verde-fl-33715-2026-03-25-19_45_17.png',
      screenAlt: 'Eagan Luxury listing page in Tierra Verde',
    },
    {
      number: '03',
      title: 'AEO: answers AI tools cite',
      short: 'ChatGPT and Google AI name you when buyers ask who to call.',
      body: 'Clear answers, structured data, and local facts on your pages, so ChatGPT, Google AI Overviews, and Gemini name you when buyers ask who to call.',
      photo: '/images/Cities/Stpet.jpg',
      screen: '/images/seo/eagan-chatgpt-dolphin-cay.webp',
      screenAlt: 'ChatGPT naming Eagan Luxury first for Dolphin Cay',
    },
    {
      number: '04',
      title: 'Reporting tied to leads',
      short: 'Search Console in your name, each lead traced to its search.',
      body: 'Search Console and Analytics in your name, with each lead traced to the search and page that produced it.',
      photo: '/images/Cities/NewHampshire.jpg',
      screen: '/images/MarquisFarwellGoogleSearchConsole.png',
      screenAlt: 'Google Search Console clicks rising over 90 days',
    },
  ],
  includedSection: {
    eyebrow: 'What’s included',
    title: 'What real estate SEO & AEO from DMR includes',
    intro: 'Run for you every month, each part tied to the searches and AI answers in your market.',
  },
  caseStudies: seoCaseStudies,
  inlineCta: {
    title: 'See where you rank, and who AI recommends instead of you',
    body: 'The searches you’re missing, and who AI names instead of you.',
    ctaLabel: 'Get my free audit',
  },
  finalCta: {
    eyebrow: 'Your market, your search results',
    title: 'Be the agent Google and AI recommend in your market',
    body: 'Request your free SEO & AI search audit. It takes about 60 seconds, and the audit is yours whether or not you hire us.',
    ctaLabel: 'Get my free audit',
    reassurance: ['Free, no obligation', 'Your accounts stay in your name', 'Reporting you can check yourself'],
  },
  caseStudiesSection: {
    eyebrow: 'Case studies',
    title: 'The full SEO case studies',
  },
  faqItems: [
    {
      question: 'Can I justify the cost of SEO?',
      answer: 'We start with the math for your market. At a $750,000 price point and a 2.5% commission, one closing is about $18,750 in GCI. Your audit shows the searches and pages it would take to get there, before you commit to anything.',
    },
    {
      question: 'How do I know your results are real?',
      answer: 'Every result on this page names the client and comes from their own Search Console or SEMrush dashboard, so you can look them up. On your audit call, ask to speak with a client.',
    },
    {
      question: 'How will I know SEO is working?',
      answer: 'You get weekly reporting from your own Google Search Console and Analytics, plus the leads each page produced. If a page isn’t earning its keep, we tell you and change it.',
    },
    {
      question: 'Is SEO worth it if most of my business is referrals?',
      answer: 'Search brings in buyers and sellers who have no one to refer them, and it’s where many referrals look you up before they call. You keep both.',
    },
    {
      question: 'Who owns everything if I leave?',
      answer: 'Your domain, Google Search Console, Analytics, and Google Business Profile stay in your name. We work inside accounts you own.',
    },
    {
      question: 'Can my website compete with Zillow?',
      answer: 'We don’t fight them there. We target the neighborhood, community, and “best agent near me” searches where a local expert wins, and where the person searching is closer to hiring someone.',
    },
    {
      question: 'Isn’t AI search killing SEO?',
      answer: 'That’s why we optimize for both: rankings on Google and citations inside ChatGPT, AI Overviews, and Gemini. That second part is AEO. Our Lake Geneva client has 64 pages cited across those tools today.',
    },
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
