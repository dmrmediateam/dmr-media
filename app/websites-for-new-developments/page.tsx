import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ServiceStats from '@/components/service/ServiceStats';
import ServiceCities from '@/components/service/ServiceCities';
import SEOWrapper from '@/components/SEOWrapper';

const BASE = 'https://www.dmrmedia.org';

export const metadata: Metadata = {
  title: 'New Development Websites | Presale & Construction | DMR Media',
  description:
    'Presale and new construction websites. Phased inventory management, buyer journey optimization, and integrated marketing for luxury developments.',
  keywords: [
    'new development websites',
    'presale website design',
    'new construction website',
    'development marketing website',
    'developer website design',
    'phased inventory website',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/websites-for-new-developments`,
  },
  openGraph: {
    title: 'New Development Websites | Presale & Construction | DMR Media',
    description:
      'Presale and new construction websites. Phased inventory management, buyer journey optimization, and integrated marketing for luxury developments.',
    url: `${BASE}/websites-for-new-developments`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Development Websites | Presale & Construction | DMR Media',
    description:
      'Phased inventory, buyer journey optimization, and integrated marketing for luxury new construction.',
  },
};

const FAQ_ITEMS = [
  {
    question: 'When should we launch our development website?',
    answer:
      'As early as positioning and renders can support a credible story—often ahead of public sales office hours, with phased pages stubbed for SEO and partner linking. Holding pages should still carry entity signals and redirect plans so later gallery launches do not reset authority.',
  },
  {
    question: 'How do you handle phase releases?',
    answer:
      'We structure URLs, navigation, and sitemaps so new towers or plan drops add depth instead of duplicate thin routes. Phase-specific landing pages inherit internal links from the project hub, availability modules update without breaking crawl paths, and analytics events tag each phase for pacing reviews.',
  },
  {
    question: 'Can you integrate with our sales office system?',
    answer:
      'Yes—within your CRM and compliance rules. We wire forms, lead routing, and webhook or API handoffs common to Salesforce, HubSpot, and brokerage stacks. Broker attribution and disclosure copy are confirmed before go-live.',
  },
  {
    question: 'What about pre-construction buyer concerns?',
    answer:
      'Transparency wins: realistic timelines, financing disclaimers where counsel requires them, construction progress cadence, and clear next steps after registration. The site should answer fear-of-the-unknown before the sales team repeats it on the phone.',
  },
  {
    question: 'How do we measure success?',
    answer:
      'Qualified registrations, tour requests, cost per qualified lead, organic visibility on project- and plan-level queries, and assisted revenue where CRM allows. We align dashboards in analytics and reporting so leadership sees the same funnel the website feeds.',
  },
] as const;

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const SOLUTION_BLOCKS: {
  h3: string
  bullets: readonly string[]
  image?: string
  imageAlt?: string
  isDiagram?: 'buyer-journey'
}[] = [
  {
    h3: 'Presale Positioning',
    bullets: [
      'Brand narrative and vision anchored to the first credible renders',
      'Architect and design storytelling with disciplined media performance',
      'Neighborhood context and lifestyle proof buyers expect before touring',
    ],
    image: '/images/propertyWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-25-19_45_37.png',
    imageAlt: 'Presale luxury development website — cinematic property and project storytelling',
  },
  {
    h3: 'Phased Inventory Management',
    bullets: [
      'Dynamic pricing and availability patterns without breaking SEO equity',
      'Phase-specific landing pages that inherit authority from the project hub',
      'Unit type comparison tools that reduce sales-team repetitive Q&A',
    ],
    image: '/images/JadeCRM.png',
    imageAlt: 'CRM and pipeline view — inventory, leads, and phase rollout coordination',
  },
  {
    h3: 'Buyer Journey Optimization',
    bullets: [
      'Lead capture and qualification tuned to broker rules and disclosures',
      'Automated follow-up sequences that respect speed and tone for luxury buyers',
      'CRM integration so marketing and sales see the same truth',
    ],
    isDiagram: 'buyer-journey',
  },
];

const PROCESS_PHASES = [
  {
    title: 'Presale Strategy & Positioning',
    description:
      'Stakeholder map, competitive towers, pricing narrative, and compliance—locked before IA so creative and engineering are not reworked mid-build.',
  },
  {
    title: 'Website Architecture & Design',
    description:
      'Sitemaps for story, plans, amenities, and conversion; mobile-first gallery UX with performance budgets enforced in design reviews.',
  },
  {
    title: 'Inventory & CRM Integration',
    description:
      'Forms, events, webhooks, and plan modules wired to your stack—broker attribution and routing tested before public launch.',
  },
  {
    title: 'Launch & Phase Rollout',
    description:
      'Redirect plans, indexation QA, analytics baselines, and phased publishing so each drop strengthens—not resets—search visibility.',
  },
  {
    title: 'Growth & Optimization',
    description:
      'Iterate on search, creative, and paid based on real registrations and tour quality; scale into full luxury development marketing when ready.',
  },
] as const;

const PROCESS_SHORT = ['Strategy', 'Architecture', 'CRM & inventory', 'Launch', 'Growth'] as const;

const DEV_SUCCESS_STORIES = [
  {
    id: 'eagan-luxury-real-estate',
    metric: '$11M+ closed volume (Q1 2026)',
    focus: 'Unified flagship digital after fragmented legacy sites',
    title: 'Eagan Luxury — Tampa Bay',
    description:
      'Consolidation, redirects without measurable ranking loss, and scaled SEO plus paid demand—discipline that maps directly to replacing holding pages with a real presale gallery.',
    image: '/images/screencapture-eaganluxury-2025-12-17-21_25_49.png',
    imageRight: true,
  },
  {
    id: 'jade-legendary-real-estate',
    metric: '3× qualified leads in 90 days',
    focus: 'Content systems rebuilt into conversion paths',
    title: 'Jade · Legendary Real Estate — Lake Geneva',
    description:
      'Forty-two assets reorganized with automation velocity and CRM clarity—proof of how presale narrative plus operational follow-through compounds when the website is not an island.',
    image: '/images/JadeCRM.png',
    imageRight: false,
  },
  {
    id: 'marquis-farwell-group',
    metric: '19× daily organic clicks (2 → 38)',
    focus: 'Authority in a crowded luxury county',
    title: 'Marquis + Farwell — Sonoma County',
    description:
      'Search and GBP systems that lifted daily organic clicks while improving buyer interactions—relevant when your development competes for the same high-intent attention as established luxury brokerages.',
    image: '/images/MarquisFarwellGoogleSearchConsole.png',
    imageRight: true,
  },
] as const;

const topCities = [
  { name: 'New York', state: 'NY', slug: 'new-york-ny', image: '/images/Cities/NewYork.jpeg' },
  {
    name: 'Los Angeles',
    state: 'CA',
    slug: 'los-angeles-ca',
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
  },
  {
    name: 'Chicago',
    state: 'IL',
    slug: 'chicago-il',
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
  },
  {
    name: 'Houston',
    state: 'TX',
    slug: 'houston-tx',
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
  },
  {
    name: 'Phoenix',
    state: 'AZ',
    slug: 'phoenix-az',
    image: '/images/Cities/phoenix-arizona-state-capitol-2025-03-13-12-59-21-utc.jpg',
  },
  {
    name: 'All Other Cities',
    state: 'USA',
    slug: '#contact',
    image: '/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg',
    subtitle: 'Talk to us about your market →',
  },
];

function BuyerJourneyDiagram() {
  const steps = ['Awareness', 'Gallery & story', 'Plans & compare', 'Register', 'Nurture & tour'];
  return (
    <div
      className="relative min-h-[240px] border border-[var(--color-ink-200)] bg-white p-6 sm:p-8"
      aria-label="Buyer journey from awareness to tour"
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-6 text-center">
        Buyer journey (conversion path)
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap items-stretch justify-center gap-3 sm:gap-1">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center gap-1 sm:gap-0">
            <div className="flex-1 sm:flex-initial min-w-[100px] border border-[var(--color-off-black)] px-2 py-2.5 text-center">
              <p className="text-[11px] font-serif text-[var(--color-off-black)] leading-tight">{label}</p>
            </div>
            {i < steps.length - 1 ? (
              <span className="hidden sm:inline text-[var(--color-ink-300)] text-xs px-0.5" aria-hidden>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function MarketingFunnelDiagram() {
  const levels = [
    { label: 'Paid + organic demand', sub: 'Search, social, partners' },
    { label: 'Flagship development site', sub: 'Story, plans, proof' },
    { label: 'Capture + CRM', sub: 'Qualification & routing' },
    { label: 'Sales office + analytics', sub: 'Tours, velocity, ROI' },
  ];
  return (
    <div
      className="max-w-xl mx-auto border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-8"
      aria-label="Marketing funnel from demand to sales office"
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-6 text-center">
        Development marketing funnel
      </p>
      <div className="flex flex-col gap-3">
        {levels.map((row, i) => (
          <div
            key={row.label}
            className="mx-auto w-full text-center border border-[var(--color-off-black)] bg-white py-3 px-4"
            style={{ maxWidth: `${100 - i * 12}%` }}
          >
            <p className="text-xs font-serif text-[var(--color-off-black)]">{row.label}</p>
            <p className="text-[10px] text-[var(--color-ink-400)] font-serif mt-1">{row.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WebsitesForNewDevelopmentsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/websites-for-new-developments">
        <div className="min-h-screen bg-white">
          {/* Hero */}
          <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-400)] font-serif block mb-4">
                    New development websites
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight mb-6">
                    Development Websites That Sell Phases Before Completion
                  </h1>
                  <p className="text-lg md:text-xl text-[var(--color-ink-300)] font-serif leading-relaxed mb-8 max-w-xl">
                    Presale positioning, phased inventory management, and buyer journey optimization—engineered to
                    accelerate absorption and close deals from groundbreaking to sellout.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/calendar"
                      className="inline-flex justify-center px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-85 transition-opacity text-center"
                    >
                      Schedule a Development Strategy Call
                    </Link>
                    <Link
                      href="/real-estate-agent-website-samples"
                      className="inline-flex justify-center px-8 py-4 border border-[var(--color-off-black)] text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-colors text-center"
                    >
                      View Development Portfolio
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-3 sm:gap-4 items-end">
                  <div className="col-span-3 relative aspect-[5/4] rounded-sm overflow-hidden border border-[var(--color-ink-200)] shadow-sm bg-[var(--color-ink-200)]">
                    <Image
                      src="/images/propertyWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-25-19_45_37.png"
                      alt="New development website on desktop — presale gallery and project storytelling"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>
                  <div className="col-span-2 relative aspect-[9/16] max-h-[420px] rounded-sm overflow-hidden border border-[var(--color-ink-200)] shadow-sm bg-[var(--color-ink-200)]">
                    <Image
                      src="/images/screencapture-eaganluxury-2025-12-17-21_25_49.png"
                      alt="Luxury development website experience on mobile"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 40vw, 18vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ClientLogosSlider />

          <ServiceStats
            heading="What separates a brochure site from a sell-through engine."
            stats={[
              {
                value: 'Phased IA',
                label: 'Release-ready URLs',
                description: 'Navigation and sitemaps that survive new towers and plan drops without cannibalizing search.',
              },
              {
                value: 'Entity SEO',
                label: 'Project clarity',
                description: 'Schema and copy that teach Google this is a specific place—not a generic template.',
              },
              {
                value: 'CRM-ready',
                label: 'Capture & routing',
                description: 'Forms and events wired for broker rules, disclosures, and sales office follow-up.',
              },
            ]}
          />

          {/* Why different */}
          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="why-different">
            <div className="container-max">
              <div className="max-w-3xl mb-14 md:mb-20">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
                  Why development websites are different
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  New construction marketing is not a single listing—it is a moving program. Inventory, pricing, and
                  construction truth change while buyers compare you to other towers and established resale. The site
                  has to stay coherent for humans and crawlable for search through every phase.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-4xl">
                {[
                  'Phased inventory and pricing updates without breaking trust or SEO equity',
                  'Pre-construction buyer psychology—proof, patience, and clarity before dirt is dry',
                  'Long sales cycles that require nurture, retargeting, and sales-office alignment',
                  'Multiple stakeholders—capital, marketing, brokerage, legal—need one digital source of truth',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed border-l-2 border-[var(--color-off-black)] pl-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="max-w-5xl mx-auto">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4 text-center">
                  Generic development site vs. optimized development site
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <figure className="relative aspect-[2/1] border border-[var(--color-ink-200)] overflow-hidden bg-[var(--color-ink-200)]">
                    <Image
                      src="/images/ClientWebsites/screencapture-valoriahomes-2026-03-04-03_34_12.png"
                      alt="Generic template-style development or brokerage website"
                      fill
                      className="object-cover object-top grayscale contrast-[0.95]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <figcaption className="absolute bottom-0 inset-x-0 bg-black/55 text-white text-xs uppercase tracking-[0.2em] font-serif py-3 text-center">
                      Generic development presentation
                    </figcaption>
                  </figure>
                  <figure className="relative aspect-[2/1] border border-[var(--color-off-black)] overflow-hidden bg-[var(--color-ink-200)]">
                    <Image
                      src="/images/ClientWebsiteImages/LegendaryRealEstate-Website.png"
                      alt="Optimized luxury development website with brand-forward presale creative"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <figcaption className="absolute bottom-0 inset-x-0 bg-[var(--color-off-black)]/85 text-white text-xs uppercase tracking-[0.2em] font-serif py-3 text-center">
                      Optimized development site
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* Complete solution */}
          <section className="py-16 md:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="solution">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                Complete Development Website Solution
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-16 md:mb-24">
                Presale narrative, inventory systems, and conversion paths—implemented as one program so marketing and
                sales leadership read the same funnel.
              </p>

              <div className="space-y-20 md:space-y-28">
                {SOLUTION_BLOCKS.map((block, i) => (
                  <article key={block.h3} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                      <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">
                        {block.h3}
                      </h3>
                      <ul className="space-y-3">
                        {block.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                            <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                      {block.isDiagram === 'buyer-journey' ? (
                        <BuyerJourneyDiagram />
                      ) : block.image ? (
                        <div className="relative min-h-[260px] sm:min-h-[300px] border border-[var(--color-ink-200)] overflow-hidden bg-white">
                          <Image
                            src={block.image}
                            alt={block.imageAlt ?? `${block.h3} — DMR Media`}
                            fill
                            className="object-contain object-center p-3 sm:p-6"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Marketing integration */}
          <section className="py-16 md:py-28 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="integration">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6 max-w-3xl">
                Development marketing integration
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl">
                <div>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.75] mb-6">
                    The flagship website is the spine: it holds the story, the plan library, and the capture paths that
                    paid and organic programs push into. For presale media, channel orchestration, and sell-through
                    campaigns beyond the gallery, our{' '}
                    <Link href="/luxury-development-marketing" className="underline hover:opacity-70">
                      luxury development marketing
                    </Link>{' '}
                    program layers narrative, demand, and measurement on top of this foundation—so air cover and site
                    experience stay aligned.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.75]">
                    Pair the site with{' '}
                    <Link href="/seo-optimization" className="underline hover:opacity-70">
                      SEO optimization
                    </Link>
                    ,{' '}
                    <Link href="/google-ads-management" className="underline hover:opacity-70">
                      Google Ads management
                    </Link>
                    , and{' '}
                    <Link href="/analytics-reporting" className="underline hover:opacity-70">
                      analytics and reporting
                    </Link>{' '}
                    when you are ready to scale beyond launch.
                  </p>
                </div>
                <MarketingFunnelDiagram />
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-16 md:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="process">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                Our Process
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-14 md:mb-20">
                Five phases from positioning through optimization—so capital partners, marketing, and sales know what
                ships when.
              </p>

              <div className="hidden lg:block mb-16 overflow-x-auto">
                <div className="relative flex justify-between items-start min-w-[720px] max-w-5xl mx-auto px-2">
                  <div className="absolute top-5 left-[5%] right-[5%] h-px bg-[var(--color-ink-200)] z-0" aria-hidden />
                  {PROCESS_PHASES.map((_, idx) => (
                    <div key={PROCESS_SHORT[idx]} className="relative z-10 flex flex-col items-center text-center w-[18%]">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-off-black)] text-white text-xs font-serif flex items-center justify-center mb-3">
                        {idx + 1}
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] font-serif mb-1">
                        Phase {idx + 1}
                      </p>
                      <p className="text-xs font-serif font-light text-[var(--color-off-black)] leading-snug px-1">
                        {PROCESS_SHORT[idx]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                {PROCESS_PHASES.map((phase, idx) => (
                  <article key={phase.title} className="border-t border-[var(--color-ink-200)] pt-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-2">
                      Phase {idx + 1}
                    </p>
                    <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-3">{phase.title}</h3>
                    <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed">{phase.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Internal linking */}
          <section className="py-16 md:py-20 bg-white border-b border-[var(--color-ink-200)]">
            <div className="container-max max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-6">
                Programs that connect to your development site
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.85]">
                Align the gallery with broader{' '}
                <Link href="/website-and-seo" className="underline hover:opacity-70">
                  website design
                </Link>{' '}
                standards, full go-to-market through{' '}
                <Link href="/luxury-development-marketing" className="underline hover:opacity-70">
                  luxury development marketing
                </Link>
                , discoverability via{' '}
                <Link href="/seo-optimization" className="underline hover:opacity-70">
                  SEO optimization
                </Link>
                , demand through{' '}
                <Link href="/google-ads-management" className="underline hover:opacity-70">
                  Google Ads management
                </Link>
                , proof in{' '}
                <Link href="/analytics-reporting" className="underline hover:opacity-70">
                  analytics and reporting
                </Link>
                , and listing-level bursts with{' '}
                <Link href="/property-marketing" className="underline hover:opacity-70">
                  property marketing
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Case studies */}
          <section className="py-16 md:py-24 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="case-studies">
            <div className="container-max">
              <div className="max-w-2xl mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
                  Development Success Stories
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Published engagements with metrics you can audit—consolidation, pipeline, and organic systems that
                  mirror what flagship development programs require online.
                </p>
              </div>

              <div className="space-y-0">
                {DEV_SUCCESS_STORIES.map((study) => (
                  <article
                    key={study.id}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32 last:mb-0"
                  >
                    <div
                      className={`flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 ${
                        study.imageRight ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-2">
                        {study.metric}
                      </p>
                      <p className="text-sm text-[var(--color-off-black)] font-serif mb-4">{study.focus}</p>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                        {study.title}
                      </h3>
                      <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                        {study.description}
                      </p>
                      <Link
                        href={`/case-study/${study.id}`}
                        className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                      >
                        Read the full case study
                      </Link>
                    </div>
                    <Link
                      href={`/case-study/${study.id}`}
                      className={`group relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 ${
                        study.imageRight ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <Image
                        src={study.image}
                        alt={`${study.title} — case study`}
                        fill
                        className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="faq">
            <div className="container-max max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-10">
                Frequently Asked Questions
              </h2>
              <div className="divide-y divide-[var(--color-ink-200)] border-t border-b border-[var(--color-ink-200)]">
                {FAQ_ITEMS.map((item) => (
                  <details key={item.question} className="group py-5">
                    <summary className="cursor-pointer list-none flex justify-between gap-4 items-start font-serif text-[var(--color-off-black)] text-lg font-light pr-2 [&::-webkit-details-marker]:hidden">
                      <span>{item.question}</span>
                      <span className="text-xs mt-1 shrink-0 text-[var(--color-ink-400)] group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-sm text-[var(--color-ink-300)] font-serif leading-relaxed pr-2">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <Testimonials />

          <ServiceCities
            heading="Websites for new developments—major metros we support."
            description="Gateway cities to Sun Belt growth markets—same build standards, tuned to local buyer expectations."
            cities={topCities.map((city) => ({
              ...city,
              slug: '#contact',
            }))}
          />

          <div id="contact">
            <ContactForm />
          </div>
        </div>
      </SEOWrapper>
    </>
  );
}
