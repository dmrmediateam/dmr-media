import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ServiceStats from '@/components/service/ServiceStats';
import SEOWrapper from '@/components/SEOWrapper';

const BASE = 'https://www.dmrmedia.org';

export const metadata: Metadata = {
  title: 'Luxury Condo Website Design & SEO | DMR Media',
  description:
    'Condo websites engineered for luxury buyers. Floorplan optimization, amenity storytelling, and technical SEO for high-rise and boutique buildings.',
  keywords: [
    'luxury condo websites',
    'high-rise website design',
    'condo website design',
    'boutique building websites',
    'luxury condominium website',
    'tower SEO',
    'condo schema markup',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/luxury-condo-websites`,
  },
  openGraph: {
    title: 'Luxury Condo Website Design & SEO | DMR Media',
    description:
      'Condo websites engineered for luxury buyers. Floorplan optimization, amenity storytelling, and technical SEO for high-rise and boutique buildings.',
    url: `${BASE}/luxury-condo-websites`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Condo Website Design & SEO | DMR Media',
    description:
      'Floorplan optimization, amenity storytelling, and technical SEO for high-rise and boutique buildings.',
  },
};

const FAQ_ITEMS = [
  {
    question: 'What should a luxury condo website include?',
    answer:
      'Line-level clarity (views, exposures, HOA context without misleading precision), interactive or downloadable floorplans, amenity storytelling with real photography, parking and storage reality, neighborhood walkability, and one obvious path to tour requests. Luxury is clarity—not decoration on top of confusion.',
  },
  {
    question: 'How is condo SEO different from single-family SEO?',
    answer:
      'Buyers search by building name, line, view vocabulary, and micro-neighborhoods. Winning sites map that intent with unique copy where possible, internal links that reinforce the building as an entity, and schema so Google understands the property as a specific place—not a generic IDX grid.',
  },
  {
    question: 'Do you only work with resale agents, or also developers?',
    answer:
      'Both. Resale teams need flagship sites that organize multiple towers and lines; developers need presale narrative and phased inventory releases. For vertical product launches, pair this page with our luxury development marketing program.',
  },
  {
    question: 'Will my condo website connect to IDX?',
    answer:
      'When inventory discovery matters and MLS rules allow, yes. When the goal is a flagship tower story, we often combine selective IDX modules with custom line pages so you are not trapped in template parity. Compliance varies by market—we confirm feed requirements before build.',
  },
  {
    question: 'How do I get started with DMR Media?',
    answer:
      'Use the contact form below with your building, audience, and timeline—or book a live walkthrough via our calendar if you prefer to review programs, pricing guardrails, and published proof on a call.',
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

const CASE_STUDIES = [
  {
    id: 'eagan-luxury-real-estate',
    metric: '$11M+ closed volume (Q1 2026)',
    focus: 'Coastal luxury buyers, executed online',
    title: 'Eagan Luxury — Tampa Bay, FL',
    description:
      'Greater Pinellas waterfront and high-end inventory where condominiums sit beside estate homes—brand, listings, and demand unified for buyers who start on search.',
    image: '/images/screencapture-eaganluxury-2026-09-04.png',
    imageRight: true,
  },
  {
    id: 'michael-seo-transformation',
    metric: '21× search impressions, 312% organic lift',
    focus: 'Technical foundation luxury buyers never see',
    title: 'Michael — Luxury IDX transformation',
    description:
      'We replaced a silent IDX template with a fast, schema-rich build—documented 21× impressions and 312% organic sessions. The same crawl clarity, structured data, and Core Web Vitals discipline we apply to high-rise and boutique condo sites.',
    image: '/images/MichealTraffic.png',
    imageRight: false,
  },
] as const;

const PHASES = [
  {
    title: 'Inventory & Buyer Map',
    description:
      'Lines, view vocabulary, HOA differentiators, and competing towers—documented before design opens so every screen answers a real comparison.',
  },
  {
    title: 'Information Architecture',
    description:
      'Sitemaps for residences, amenities, neighborhood proof, and conversion—structured so search engines and humans both find what they need.',
  },
  {
    title: 'Design + Performance Build',
    description:
      'Typography, photography, and motion on-brand—implemented with schema, analytics events, and Core Web Vitals budgets enforced in QA.',
  },
  {
    title: 'Launch + Growth Layer',
    description:
      'Optional Google Ads, local SEO silos, and dashboards so post-launch demand is instrumented—not guessed.',
  },
] as const;

const PHASE_SHORT = ['Inventory & map', 'Information architecture', 'Design + performance', 'Launch + growth'] as const;

type OptimizeBlock = {
  h3: string
  bullets: readonly string[]
  image?: string
  imageAlt?: string
  isUxDiagram?: boolean
}

const OPTIMIZE_BLOCKS: OptimizeBlock[] = [
  {
    h3: 'Technical SEO',
    bullets: [
      'Clean information architecture and indexable line- and tower-level URLs',
      'Structured data for residences, amenities, and organization entities',
      'Internal linking that reinforces building and neighborhood entities',
    ],
    image: '/images/EaganCaseStudy/GoogleSearchConsole.png',
    imageAlt: 'Technical SEO diagram — search visibility and indexation for a luxury real estate website',
  },
  {
    h3: 'Core UX',
    bullets: [
      'Floorplan-first flows with amenity and view proof at decision moments',
      'Comparison paths for lines, exposures, and monthly carrying context',
      'Mobile-first layouts for buyers who tour towers from their phone',
    ],
    isUxDiagram: true,
  },
  {
    h3: 'Speed',
    bullets: [
      'Heavy photography and video without sluggish first loads',
      'Performance treated as a luxury signal—not an afterthought',
      'Real-user metrics reviewed before launch and after major content adds',
    ],
    image: '/images/landing/google-general/04-google-ranking.png',
    imageAlt: 'Google Search performance — rankings and visibility for luxury real estate',
  },
];

function UxFlowDiagram() {
  const steps = ['Discover tower', 'Compare lines & views', 'Validate amenities', 'Book a tour'];
  return (
    <div
      className="relative min-h-[240px] border border-[var(--color-ink-200)] bg-white p-6 sm:p-8 flex flex-col justify-center"
      aria-label="Buyer journey: discover, compare, validate, tour"
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-6 text-center">
        Buyer journey (UX flow)
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap items-stretch justify-center gap-4 sm:gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center gap-2 sm:gap-0">
            <div className="flex-1 sm:flex-initial min-w-[140px] border border-[var(--color-off-black)] px-3 py-3 text-center">
              <p className="text-xs font-serif text-[var(--color-off-black)] leading-snug">{label}</p>
            </div>
            {i < steps.length - 1 ? (
              <span className="hidden sm:inline text-[var(--color-ink-300)] font-serif text-sm px-1" aria-hidden>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LuxuryCondoWebsitesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/luxury-condo-websites">
        <div className="min-h-screen bg-white">
          {/* Hero */}
          <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-400)] font-serif block mb-4">
                    Luxury condo websites
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight mb-6">
                    Condo Websites That Earn Trust Before the Showing
                  </h1>
                  <p className="text-lg md:text-xl text-[var(--color-ink-300)] font-serif leading-relaxed mb-8 max-w-xl">
                    Floorplans, amenities, views, and neighborhood proof—presented with the speed and technical SEO
                    luxury buyers expect when they compare towers on their phone.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex justify-center px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-85 transition-opacity"
                  >
                    Let&apos;s Work Together
                  </a>
                </div>
                <div className="grid grid-cols-5 gap-3 sm:gap-4 items-end">
                  <div className="col-span-3 relative aspect-[5/4] rounded-sm overflow-hidden border border-[var(--color-ink-200)] shadow-sm bg-[var(--color-ink-200)]">
                    <Image
                      src="/images/ClientWebsiteImages/LegendaryRealEstate-Website.png"
                      alt="Luxury condo website on desktop — high-rise brokerage presentation"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>
                  <div className="col-span-2 relative aspect-[9/16] max-h-[420px] rounded-sm overflow-hidden border border-[var(--color-ink-200)] shadow-sm bg-[var(--color-ink-200)]">
                    <Image
                      src="/images/screencapture-eaganluxury-2026-09-04.png"
                      alt="Luxury condo website experience on mobile"
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
            heading="What we optimize first on luxury condo builds."
            stats={[
              {
                value: 'Technical SEO',
                label: 'Crawl & schema',
                description: 'Clean IA, structured data, and indexable pages for tower and line-level intent.',
              },
              {
                value: 'Core UX',
                label: 'Floorplan + amenity flow',
                description: 'Comparison paths that answer HOA value, views, and carrying costs fast.',
              },
              {
                value: 'Speed',
                label: 'Luxury signal',
                description: 'Heavy photography without sluggish loads—Core Web Vitals as a brand standard.',
              },
            ]}
          />

          {/* Why different */}
          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="why-condo">
            <div className="container-max">
              <div className="max-w-3xl mb-14 md:mb-20">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
                  Why condo websites are different
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  High-rise and boutique inventory competes in minutes: buyers stack lines, views, monthly context, and
                  amenities side by side on their phone. Generic templates flatten those differences—optimized condo
                  sites make them legible to humans and to search engines.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-4xl">
                {[
                  'Buyers compare lines, views, and HOA value fast—your UX has to keep pace',
                  'Multiple listings per building require clear organization without duplicate thin pages',
                  'Technical SEO must capture line-level and tower-name searches—not just city keywords',
                  'Schema markup for residences, amenities, and offers is critical for rich understanding',
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
                  Generic condo site vs. optimized condo site
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <figure className="relative aspect-[2/1] border border-[var(--color-ink-200)] overflow-hidden bg-[var(--color-ink-200)]">
                    <Image
                      src="/images/ClientWebsites/screencapture-valoriahomes-2026-03-04-03_34_12.png"
                      alt="Generic brokerage condo listing template — limited differentiation"
                      fill
                      className="object-cover object-top grayscale contrast-[0.95]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <figcaption className="absolute bottom-0 inset-x-0 bg-black/55 text-white text-xs uppercase tracking-[0.2em] font-serif py-3 text-center">
                      Generic condo presentation
                    </figcaption>
                  </figure>
                  <figure className="relative aspect-[2/1] border border-[var(--color-off-black)] overflow-hidden bg-[var(--color-ink-200)]">
                    <Image
                      src="/images/screencapture-eaganluxury-2026-09-04.png"
                      alt="Optimized luxury condo and coastal brokerage website"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <figcaption className="absolute bottom-0 inset-x-0 bg-[var(--color-off-black)]/85 text-white text-xs uppercase tracking-[0.2em] font-serif py-3 text-center">
                      Optimized luxury site
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* What we optimize first */}
          <section className="py-16 md:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="optimize">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                What we optimize first
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-16 md:mb-24">
                Three pillars—technical SEO, core UX, and speed—before we add more decoration. That order protects
                rankings, tours, and broker reputation.
              </p>

              <div className="space-y-20 md:space-y-28">
                {OPTIMIZE_BLOCKS.map((block, i) => (
                  <article
                    key={block.h3}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                  >
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
                      {block.isUxDiagram ? (
                        <UxFlowDiagram />
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

          {/* Case studies */}
          <section className="py-16 md:py-24 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="case-studies">
            <div className="container-max">
              <div className="max-w-2xl mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
                  Case Studies With Transferable Lessons
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Representative luxury residential engagements—the same search, performance, and presentation standards
                  we hold for boutique lines and high-rise resale programs.
                </p>
              </div>

              <div className="space-y-0">
                {CASE_STUDIES.map((study) => (
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
                        READ THE FULL CASE STUDY
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

          {/* End to end */}
          <section className="py-16 md:py-28 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="process">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                End to End
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-14 md:mb-20">
                Four phases so stakeholders know what ships when—aligned with how serious teams buy creative and
                technical work together.
              </p>

              <div className="hidden md:block mb-16">
                <div className="relative flex justify-between items-start max-w-4xl mx-auto px-2">
                  <div className="absolute top-5 left-[8%] right-[8%] h-px bg-[var(--color-ink-200)] z-0" aria-hidden />
                  {PHASES.map((_, idx) => (
                    <div key={PHASE_SHORT[idx]} className="relative z-10 flex flex-col items-center text-center w-[22%]">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-off-black)] text-white text-xs font-serif flex items-center justify-center mb-3">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] font-serif mb-1">
                        Phase {idx + 1}
                      </p>
                      <p className="text-xs font-serif font-light text-[var(--color-off-black)] leading-snug px-1">
                        {PHASE_SHORT[idx]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                {PHASES.map((phase, idx) => (
                  <article key={phase.title} className="border-t border-[var(--color-ink-200)] pt-8">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif">
                        Phase {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-3">{phase.title}</h3>
                    <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed">{phase.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Internal linking */}
          <section className="py-16 md:py-20 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
            <div className="container-max max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-6">
                Programs that pair with luxury condo sites
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.85]">
                Connect tower builds to broader{' '}
                <Link href="/website-and-seo" className="underline hover:opacity-70">
                  website design
                </Link>
                ,{' '}
                <Link href="/seo-optimization" className="underline hover:opacity-70">
                  SEO optimization
                </Link>
                ,{' '}
                <Link href="/google-ads-management" className="underline hover:opacity-70">
                  Google Ads management
                </Link>
                , listing-level{' '}
                <Link href="/property-marketing" className="underline hover:opacity-70">
                  property marketing
                </Link>
                ,{' '}
                <Link href="/analytics-reporting" className="underline hover:opacity-70">
                  analytics
                </Link>
                , and vertical go-to-market via{' '}
                <Link href="/luxury-development-marketing" className="underline hover:opacity-70">
                  luxury development marketing
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Related services */}
          <section className="py-16 md:py-20 bg-white border-b border-[var(--color-ink-200)]">
            <div className="container-max max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-6">
                Related services
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.85]">
                For one-off trophy listings, explore{' '}
                <Link href="/single-property-websites" className="underline hover:opacity-70">
                  single property websites
                </Link>
                . For full vertical launches and presales, start with{' '}
                <Link href="/luxury-development-marketing" className="underline hover:opacity-70">
                  luxury development marketing
                </Link>
                . Browse visual patterns in the{' '}
                <Link href="/real-estate-agent-website-samples" className="underline hover:opacity-70">
                  real estate website design portfolio
                </Link>
                .
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-24 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="faq">
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

          {/* Client reviews */}
          <section className="pt-16 pb-0 md:pt-20 bg-white border-b border-[var(--color-ink-200)]" id="reviews">
            <div className="container-max mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4">
                Client reviews
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl">
                Six luxury agents and teams on how we show up as partners—stars reflect consistent 5.0-style experiences
                shared in written reviews.
              </p>
            </div>
            <Testimonials omitHeading showStarRating />
          </section>

          <div id="contact">
            <ContactForm />
          </div>
        </div>
      </SEOWrapper>
    </>
  );
}
