import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'
import { channelLandingCaseStudies } from '@/lib/landing/channel-landing-shared-data'

const SEO_CASE_STUDY_ORDER = ['jade-legendary-real-estate', 'eagan-luxury-real-estate', 'willow-brook-realty']

const seoCaseStudies = SEO_CASE_STUDY_ORDER.map((id) => channelLandingCaseStudies.find((c) => c.id === id)).filter(
  (c): c is (typeof channelLandingCaseStudies)[number] => Boolean(c)
)

export const seoLandingConfig: ChannelLandingConfig = {
  path: '/landing/seo',
  formName: 'landing-seo-modal',
  headerApplyLabel: 'Free AI search audit',
  heroLayout: 'conversion',
  formConfig: {
    title: 'Get your free AI search audit',
    subtitle: 'Takes about 60 seconds',
    question: 'Where should we send your audit?',
    submitLabel: 'Send my free audit',
    footnote: 'No spam. The audit is yours whether or not you hire us.',
    ariaLabel: 'Free real estate AI search audit request',
    fieldSet: 'full',
  },
  heroTitleSegments: [
    { text: 'AI Is Already Recommending an Agent in Your Area. ' },
    { text: 'Make It You', italic: true },
    { text: ', Not Your Competitor.' },
  ],
  heroTitleEmphasis: '',
  heroIntro: '',
  heroIntroShort:
    'Google AI, ChatGPT, and Perplexity all name our client Debi Eagan first for Dolphin Cay. We work to make your name the answer in your area, and send those inquiries to your CRM.',
  heroIntroParagraphs: [
    [
      {
        text: 'Google AI, ChatGPT, and Perplexity all name our client Debi Eagan first for Dolphin Cay in St. Petersburg. Buyers and sellers in your area are asking the same tools which agent to call. We build the pages, structured data, and local authority those tools cite, backed by the SEO that gets you found on Google, then make sure that traffic turns into ',
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
        title: 'AI visibility audit and technical fixes',
        body: 'We check what ChatGPT, Google AI, Gemini, and Perplexity say about your area today, then fix speed, indexing, and your Google Business Profile.',
      },
      {
        label: 'Weeks 3-8',
        title: 'Pages AI tools can quote',
        body: 'We build neighborhood and market pages with clear answers, local facts, and structured data, each with a lead form.',
      },
      {
        label: 'Weeks 9-12',
        title: 'Authority, citations, and reporting',
        body: 'We earn local links and mentions, then show you where AI tools cite you and which searches produced leads.',
      },
    ],
  },
  reviewsSection: {
    eyebrow: 'Reviews',
    title: 'What agents say about working with us',
  },
  marketingCoreHeading: 'What AI search optimization from DMR includes',
  marketingCorePillars: [
    {
      number: '01',
      title: 'Answers AI tools cite',
      short: 'ChatGPT and Google AI name you when buyers ask who to call.',
      body: 'Clear answers, structured data, and local facts on your pages, so ChatGPT, Google AI Overviews, and Gemini name you when buyers ask who to call.',
      photo: '/images/Cities/Stpet.jpg',
      screen: '/images/seo/eagan-chatgpt-dolphin-cay.webp',
      screenAlt: 'ChatGPT naming Eagan Luxury first for Dolphin Cay',
    },
    {
      number: '02',
      title: 'Neighborhood & community pages',
      short: 'Pages for the areas you sell, written so AI can quote them.',
      body: 'Pages built around the areas you sell, with IDX listings, local market detail, and lead capture. IDX feeds on their own are duplicate content; these pages are written for your market.',
      photo: '/images/Cities/Sonoma.jpg',
      screen: '/images/propertyWebsiteImages/screencapture-eaganluxury-listing-1873-oceanview-dr-tierra-verde-fl-33715-2026-03-25-19_45_17.png',
      screenAlt: 'Eagan Luxury listing page in Tierra Verde',
    },
    {
      number: '03',
      title: 'Local SEO & Google Business Profile',
      short: 'Map pack and “realtor near me” visibility in your area.',
      body: 'Map pack and “realtor near me” visibility, a review strategy, and accurate business listings across your market.',
      photo: '/images/Cities/LakeGeneva.jpg',
      screen: '/images/jade-google-business-profile.png',
      screenAlt: 'Legendary Real Estate Google Business Profile',
    },
    {
      number: '04',
      title: 'AI visibility reporting',
      short: 'Where AI tools cite you, and the leads each page brings in.',
      body: 'AI citation tracking across ChatGPT, Google AI, and Gemini, plus Search Console and Analytics in your name, with each lead traced to the search and page that produced it.',
      photo: '/images/Cities/NewHampshire.jpg',
      screen: '/images/seo/legendary-ai-search-2026-10.png',
      screenAlt: 'SEMrush AI Search panel showing 64 pages cited across AI tools',
    },
  ],
  includedSection: {
    eyebrow: 'What’s included',
    title: 'What AI search optimization from DMR includes',
    intro: 'Run for you every month, each part tied to the AI answers and searches in your area.',
  },
  caseStudies: seoCaseStudies,
  inlineCta: {
    title: 'Find out who AI recommends in your area today',
    body: 'Your audit shows what ChatGPT, Google AI, and Perplexity say about your market, and who they name instead of you.',
    ctaLabel: 'Get my free audit',
  },
  finalCta: {
    eyebrow: 'Your area, your AI answers',
    title: 'Be the agent AI recommends in your area',
    body: 'Request your free AI search audit. It takes about 60 seconds, and the audit is yours whether or not you hire us.',
    ctaLabel: 'Get my free audit',
    reassurance: ['Free, no obligation', 'Your accounts stay in your name', 'Reporting you can check yourself'],
  },
  caseStudiesSection: {
    eyebrow: 'Case studies',
    title: 'The full case studies',
  },
  faqItems: [
    {
      question: 'How do I rank #1 in ChatGPT and Google AI for real estate in my area?',
      answer:
        'AI tools recommend agents they can find clear, factual information about. We build pages that answer the questions buyers ask about your area, add structured data, and earn mentions across the web. For Dolphin Cay in St. Petersburg, Google AI, ChatGPT, and Perplexity all name our client Debi Eagan first.',
    },
    {
      question: 'What is AEO, and how do realtors show up in ChatGPT?',
      answer:
        'AEO (answer engine optimization) means getting your site cited when someone asks ChatGPT, Google AI Overviews, or Gemini a question like “who is the best luxury agent in Lake Geneva.” It comes from clear, factual pages about your market, structured data, and mentions across the web. We do it alongside traditional SEO.',
    },
    {
      question: 'Which AI tools do you optimize for?',
      answer:
        'ChatGPT, Google AI Overviews, Google AI Mode, Gemini, and Perplexity. Our Lake Geneva client has 64 pages cited across ChatGPT, AI Overviews, AI Mode, and Gemini, measured in SEMrush.',
    },
    {
      question: 'Can you guarantee I’ll rank #1 in AI search?',
      answer:
        'No. No one controls what an AI tool says, so treat anyone who guarantees it as a red flag. We commit to a written plan, the work in it, and reporting you can check yourself, and every client result on this page names the client so you can look it up.',
    },
    {
      question: 'Isn’t AI search killing SEO?',
      answer:
        'AI tools draw their answers from pages on the web, so SEO still matters. That’s why we optimize for both: rankings on Google and citations inside ChatGPT, AI Overviews, and Gemini.',
    },
    {
      question: 'How do I know your results are real?',
      answer:
        'Every result on this page names the client and comes from their own Search Console or SEMrush dashboard, or from a screenshot of the AI answer itself, so you can check it. On your audit call, ask to speak with a client.',
    },
    {
      question: 'How will I know it’s working?',
      answer:
        'You get weekly reporting from your own Google Search Console and Analytics, where AI tools cite your pages, and the leads each page produced. If a page isn’t earning its keep, we tell you and change it.',
    },
    {
      question: 'How much does AI search optimization cost?',
      answer:
        'It depends on your market and how much needs to be built. We scope it after the free audit and put the deliverables and price in writing. For context, one closing at a $750,000 price point and a 2.5% commission is about $18,750 in GCI, so the real question is how many closings the work needs to produce.',
    },
    {
      question: 'How long does it take?',
      answer:
        'Technical fixes and long-tail neighborhood searches often move first, sometimes within weeks. Competitive terms build over months. For the Sonoma County team on this page, daily organic clicks went from about 2 to 38 within 90 days.',
    },
    {
      question: 'Is it worth it if most of my business is referrals?',
      answer:
        'Buyers and sellers with no one to refer them ask Google and AI tools instead, and many referrals look you up there before they call. You keep both.',
    },
    {
      question: 'Can my website compete with Zillow?',
      answer:
        'We don’t fight them for broad searches. We target the neighborhood, community, and “best agent near me” questions where a local expert wins, and where the person asking is closer to hiring someone.',
    },
    {
      question: 'Who owns everything if I leave?',
      answer:
        'Your domain, Google Search Console, Analytics, and Google Business Profile stay in your name. We work inside accounts you own.',
    },
    {
      question: 'Will my IDX listings help or hurt?',
      answer:
        'IDX listings are the same data on hundreds of sites, so on their own they rarely rank or get cited. We build unique neighborhood and market pages around your IDX feed, and those pages are what earn rankings and citations.',
    },
    {
      question: 'I already have a website. Do I need a new one?',
      answer:
        'Usually not. We start with the audit and fix what blocks rankings, citations, and leads. We only recommend a rebuild when your current platform limits what can be fixed.',
    },
  ],
  metadata: {
    title: 'AI Is Recommending an Agent in Your Area. Make It You | DMR Media',
    description:
      'DMR Media helps real estate agents get named first when buyers ask ChatGPT, Google AI, and Perplexity about their area. Get a free AI search audit.',
    openGraphTitle: 'AI Is Already Recommending an Agent in Your Area. Make It You, Not Your Competitor.',
    openGraphDescription:
      'Google AI, ChatGPT, and Perplexity all name our client first for Dolphin Cay. Get a free audit of what AI says about your area.',
  },
}
