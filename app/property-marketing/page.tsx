import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ServiceStats from '@/components/service/ServiceStats';
import Testimonials from '@/components/Testimonials';
import SEOWrapper from '@/components/SEOWrapper';
import { buildPropertyMarketingJsonLd } from '@/lib/property-marketing-jsonld';
import PropertyMarketingContactForm from './PropertyMarketingContactForm';

const BASE = 'https://www.dmrmedia.org';

export const metadata: Metadata = {
  title: 'Luxury Property Marketing | DMR Media',
  description:
    'Luxury property marketing for exceptional listings. Dedicated single-property websites and Google Ads campaigns designed to close luxury listings faster.',
  keywords: [
    'luxury property marketing',
    'property marketing for real estate',
    'luxury listing marketing',
    'property marketing campaigns',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/property-marketing`,
  },
  openGraph: {
    title: 'Luxury Property Marketing | DMR Media',
    description:
      'Luxury property marketing for exceptional listings. Dedicated single-property websites and Google Ads campaigns designed to close luxury listings faster.',
    url: `${BASE}/property-marketing`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Property Marketing | DMR Media',
    description:
      'Luxury property marketing for exceptional listings. Dedicated single-property websites and Google Ads campaigns designed to close luxury listings faster.',
  },
};

const FAQ_ITEMS = [
  {
    question: 'How much does property marketing cost?',
    answer:
      'Current DMR Media clients pay $2,500 per listing on a pay-at-close model with a 90-day cap. Non-clients pay $3,250 upfront before work begins. Google Ads spend for the 30-day burst is included—we cover media in the flat fee.',
  },
  {
    question: "What's included in the campaign?",
    answer:
      'A custom single-property website (design, SEO fundamentals, photography showcase, lead capture), a 30-day Google Ads burst with geo-targeted and retargeting layers, and done-for-you listing email copy in your voice—plus launch QA and performance reporting.',
  },
  {
    question: 'How long does the campaign run?',
    answer:
      'The paid burst runs for 30 days from launch. Your microsite remains a branded destination for tours and follow-up beyond the burst; pay-at-close clients have a 90-day payment window cap tied to the agreement.',
  },
  {
    question: 'Can I see results before paying?',
    answer:
      'Pay-at-close is available to current DMR clients so fees align with closing outcomes. Non-clients start with the upfront tier—after kickoff you receive reporting on impressions, traffic, and leads throughout the burst.',
  },
  {
    question: 'Do you handle the whole campaign?',
    answer:
      'Yes—property analysis, site build, ads setup and management (including spend), email copy, and weekly optimization against the plan. You approve creative and positioning; we execute the technical and media stack.',
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

const PROCESS_STEPS = [
  {
    title: 'Property Analysis',
    description: 'Positioning, comp context, buyer personas, and creative direction—so the site and ads match how this listing actually sells.',
  },
  {
    title: 'Website Design & Build',
    description: 'Custom single-property experience, SEO-ready structure, media showcase, and lead capture wired to your workflow.',
  },
  {
    title: 'Google Ads Setup',
    description: 'Intent-led keyword sets, geo layers, retargeting lists, and conversion tracking—spend included in your flat fee.',
  },
  {
    title: 'Campaign Launch',
    description: 'Coordinated go-live: site, ads, and listing email ready the same week your market sees the story.',
  },
  {
    title: 'Reporting & Optimization',
    description: 'Search terms, CPL, lead quality, and landing behavior reviewed weekly—budget follows what drives tours.',
  },
] as const;

const PROCESS_SHORT = ['Analysis', 'Build', 'Ads setup', 'Launch', 'Optimize'] as const;

const PROPERTIES = [
  {
    id: '2100-pine-manhattan-beach',
    label: 'Manhattan Beach, CA',
    title: '2100 Pine Ave',
    metric: 'Tree Section · custom build showcase',
    outcome: 'Dedicated microsite + 30-day paid burst aligned to South Bay luxury search patterns.',
    description:
      'Custom 2008 residence in the Tree Section with a private backyard retreat. A dedicated single-property website built to showcase every detail and capture qualified buyer inquiries.',
    image: '/images/propertyWebsiteImages/screencapture-2100pine-vercel-app-2026-03-25-19_45_27.png',
    href: 'https://2100pine.vercel.app/',
    imageRight: true,
  },
  {
    id: 'ocean-breeze-turks-caicos',
    label: 'Turks & Caicos',
    title: 'Ocean Breeze',
    metric: '$6.5M waterfront · international demand',
    outcome: 'Program-scale reach across search and remarketing for offshore luxury buyers.',
    description:
      '$6.5M waterfront villa featuring 6,000 sq ft, a rooftop infinity pool, and cinematic ocean views. Built to reach international luxury buyers across search and paid channels.',
    image: '/images/propertyWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-25-19_45_37.png',
    href: 'https://ocean-breeze-one.vercel.app/',
    imageRight: false,
  },
  {
    id: '1873-oceanview-tierra-verde',
    label: 'Tierra Verde, FL',
    title: '1873 Oceanview Dr',
    metric: '$6.56M coastal estate',
    outcome: 'High-intent coastal queries, boat-lift proof points, and retargeting for long-cycle buyers.',
    description:
      '$6.56M coastal estate featuring 6,391 sq ft, a 5-car garage, and a 12,000 lb boat lift. A high-performance campaign site that places the property in front of serious coastal buyers.',
    image: '/images/propertyWebsiteImages/screencapture-eaganluxury-listing-1873-oceanview-dr-tierra-verde-fl-33715-2026-03-25-19_45_17.png',
    href: 'https://www.eaganluxury.com/listing/1873-oceanview-dr-tierra-verde-fl-33715',
    imageRight: true,
  },
] as const;

function CampaignComponentFlow() {
  const nodes = ['Property site', '30-day Ads', 'Listing email', 'Lead capture', 'CRM handoff'] as const;
  return (
    <div className="border border-[var(--color-ink-200)] bg-white p-6 md:p-8 overflow-x-auto" aria-label="Luxury property marketing campaign components">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-6 text-center">
        Campaign structure
      </p>
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 min-w-[560px] md:min-w-0 items-center">
        {nodes.map((n, i) => (
          <div key={n} className="flex items-center gap-2">
            <div className="w-[104px] shrink-0 border border-[var(--color-off-black)] bg-[var(--surface-base)] px-2 py-3 text-center">
              <p className="text-[11px] font-serif font-light text-[var(--color-off-black)]">{n}</p>
            </div>
            {i < nodes.length - 1 ? <span className="text-[var(--color-ink-300)] text-xs">→</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function EmailTemplateMockup() {
  return (
    <div
      className="border border-[var(--color-ink-200)] bg-white p-4 sm:p-6 max-w-md mx-auto shadow-sm"
      aria-label="Example listing announcement email layout"
    >
      <div className="border-b border-[var(--color-ink-200)] pb-3 mb-3">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif">Listing announcement</p>
        <p className="text-sm font-serif font-light text-[var(--color-off-black)] mt-1">Just listed · [Property address]</p>
      </div>
      <div className="space-y-2 text-xs text-[var(--color-ink-300)] font-serif leading-relaxed">
        <p className="h-2 bg-[var(--color-ink-200)] rounded w-full" />
        <p className="h-2 bg-[var(--color-ink-200)] rounded w-[92%]" />
        <p className="h-2 bg-[var(--color-ink-200)] rounded w-[88%]" />
        <p className="h-8 bg-[var(--surface-base)] border border-[var(--color-ink-200)] rounded mt-3 flex items-center justify-center text-[10px] text-[var(--color-ink-400)]">
          CTA: Tour this week
        </p>
      </div>
    </div>
  );
}

export default function PropertyMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/property-marketing" includePageJsonLd={false} pageJsonLd={buildPropertyMarketingJsonLd()}>
        <div className="min-h-screen bg-white">
          {/* Hero */}
          <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-400)] font-serif block mb-4">
                    Luxury property marketing
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight mb-6">
                    Property Marketing That Accelerates Sales
                  </h1>
                  <p className="text-lg md:text-xl text-[var(--color-ink-300)] font-serif leading-relaxed mb-8 max-w-xl">
                    We build dedicated property websites and run targeted Google Ads campaigns to drive qualified buyer
                    traffic directly to your listings. Close faster with our pay-at-close model.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#contact"
                      className="inline-flex justify-center px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-85 transition-opacity text-center"
                    >
                      Start a Campaign
                    </a>
                    <a
                      href="#pricing"
                      className="inline-flex justify-center px-8 py-4 border border-[var(--color-off-black)] text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-colors text-center"
                    >
                      View Pricing
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-3 md:gap-4 items-end max-w-xl mx-auto lg:max-w-none lg:mx-0">
                  <div className="col-span-2 relative aspect-[9/16] max-h-[380px] rounded-sm overflow-hidden border border-[var(--color-ink-200)] shadow-md bg-[var(--color-ink-200)]">
                    <Image
                      src="/images/propertyWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-25-19_45_37.png"
                      alt="Luxury single-property website on mobile"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 40vw, 320px"
                      priority
                    />
                    <span className="absolute bottom-2 left-2 right-2 text-center text-[9px] uppercase tracking-[0.15em] text-white font-serif bg-black/50 py-1 rounded-sm">
                      Mobile
                    </span>
                  </div>
                  <div className="col-span-3 relative aspect-[4/3] rounded-sm overflow-hidden border border-[var(--color-ink-200)] shadow-md bg-white">
                    <Image
                      src="/images/ClientWebsiteImages/LegendaryRealEstate-Website.png"
                      alt="Luxury property marketing website on desktop"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 60vw, 480px"
                      priority
                    />
                    <span className="absolute bottom-2 left-2 right-2 text-center text-[9px] uppercase tracking-[0.15em] text-white font-serif bg-black/50 py-1 rounded-sm">
                      Desktop
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ClientLogosSlider />

          {/* Market signals */}
          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="why-it-matters">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6 max-w-3xl">
                Why Property Marketing Matters
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-3xl mb-12">
                Trophy listings compete in the same attention economy as travel and autos. A generic MLS thumbnail is
                not a strategy—property-level sites and paid bursts give you a owned destination, measurable intent, and
                speed-to-tour when the buyer is hottest.
              </p>
              <ServiceStats
                heading=""
                stats={[
                  {
                    value: '45',
                    label: 'Avg. days on market',
                    description: 'Luxury cohort signal—velocity improves when discovery matches buyer intent.',
                  },
                  {
                    value: '28%',
                    label: 'Luxury market share',
                    description: 'Share of attention at the top tier where bespoke creative actually moves tours.',
                  },
                  {
                    value: '250K+',
                    label: 'Average impressions',
                    description: 'Campaign-tier reach when search, remarketing, and email fire together.',
                  },
                ]}
              />
            </div>
          </section>

          {/* Campaign approach */}
          <section className="py-16 md:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="approach">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6 max-w-3xl">
                Luxury Property Marketing Built for Luxury Buyers
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-3xl mb-10">
                We design for the way affluent buyers compare: proof-rich pages, cinematic media, disciplined keyword
                intent, and retargeting that brings them back after the first scroll.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mb-12 font-serif text-[15px] text-[var(--color-ink-300)]">
                {[
                  'Custom-designed, SEO-optimized single-property website with agent-grade storytelling.',
                  '30-day Google Ads burst with spend covered by DMR—no separate ad wallet to fund.',
                  'Done-for-you listing email copy so your database hears the launch in your voice the same day.',
                ].map((t) => (
                  <li key={t} className="flex gap-2 border-l-2 border-[var(--color-off-black)] pl-3">
                    <span className="text-[var(--color-off-black)]">→</span>
                    {t}
                  </li>
                ))}
              </ul>
              <CampaignComponentFlow />
            </div>
          </section>

          {/* Complete campaign package */}
          <section className="py-16 md:py-28 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="package">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                Complete Campaign Package
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-16 md:mb-24">
                Three deliverable lanes—each production-ready before we spend media.
              </p>

              <div className="space-y-20 md:space-y-28">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">
                      Single-Property Website
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Custom design aligned to the architecture—not a recycled template.',
                        'SEO optimization for listing name, location entities, and long-tail luxury modifiers.',
                        'Property photography showcase with fast mobile performance.',
                      ].map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                          <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative min-h-[280px] sm:min-h-[340px] border border-[var(--color-ink-200)] overflow-hidden bg-[var(--color-ink-200)]">
                    <Image
                      src="/images/propertyWebsiteImages/screencapture-2100pine-vercel-app-2026-03-25-19_45_27.png"
                      alt="Example single-property website with custom layout and photography"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div className="lg:order-2">
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">
                      Google Ads Campaign
                    </h3>
                    <ul className="space-y-3">
                      {[
                        '30-day paid search burst aimed at in-market and relocation intent.',
                        'Geo-targeted buyer ads with exclusions that protect luxury CPL.',
                        'Retargeting campaigns for engaged site visitors and partial leads.',
                      ].map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                          <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:order-1 relative min-h-[220px] sm:min-h-[260px] border border-[var(--color-ink-200)] overflow-hidden bg-white">
                    <Image
                      src="/images/EaganCaseStudy/SearchAds.png"
                      alt="Example Google Ads performance for a luxury property listing campaign"
                      fill
                      className="object-contain object-center p-3 sm:p-4"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">
                      Email Marketing
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Listing email copy ready to paste into your ESP or CRM.',
                        'Buyer nurture sequence hooks aligned to tour and open-house timing.',
                        'Agent-branded templates so the launch feels native to your brokerage story.',
                      ].map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                          <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <EmailTemplateMockup />
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="py-24 md:py-32 bg-[var(--surface-base)] border-t border-b border-[var(--color-ink-200)] scroll-mt-24">
            <div className="container-max">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4">
                Transparent Pricing
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-12">
                Pay-at-close keeps economics aligned for rostered clients; upfront covers non-client engagements where we
                assume full delivery risk before media runs. Google Ads spend for the burst is always included in the
                flat fee—we fund the media.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                <article className="border border-[var(--color-off-black)] p-8 md:p-10 flex flex-col gap-6 relative">
                  <div className="absolute top-0 right-0 bg-[var(--color-off-black)] text-white text-[10px] uppercase tracking-[0.2em] font-serif px-4 py-1.5">
                    Best value
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-3">
                      Current clients
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)]">$2,500</span>
                      <span className="text-sm text-[var(--color-ink-300)] font-serif">/ listing</span>
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-trust)] font-serif font-medium">Pay-at-close — 90-day cap</p>
                  </div>
                  <ul className="space-y-3 border-t border-[var(--color-ink-200)] pt-6 flex-1">
                    {[
                      'Dedicated single-property website',
                      '30-day Google Ads burst',
                      'Ad spend covered by DMR Media',
                      'Done-for-you listing email copy',
                      'Integrated lead capture',
                    ].map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif">
                        <span className="text-[var(--color-trust)]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="block w-full py-4 bg-[var(--color-off-black)] text-white text-center uppercase tracking-[0.15em] text-xs font-serif hover:opacity-80 transition-opacity"
                  >
                    Start a Campaign
                  </a>
                </article>

                <article className="border border-[var(--color-ink-200)] p-8 md:p-10 flex flex-col gap-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-3">
                      Non-clients
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)]">$3,250</span>
                      <span className="text-sm text-[var(--color-ink-300)] font-serif">/ listing</span>
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-ink-400)] font-serif">Upfront — before work begins</p>
                  </div>
                  <ul className="space-y-3 border-t border-[var(--color-ink-200)] pt-6 flex-1">
                    {[
                      'Dedicated single-property website',
                      '30-day Google Ads burst',
                      'Ad spend covered by DMR Media',
                      'Done-for-you listing email copy',
                      'Integrated lead capture',
                    ].map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif">
                        <span className="text-[var(--color-ink-300)]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="block w-full py-4 border border-[var(--color-off-black)] text-[var(--color-off-black)] text-center uppercase tracking-[0.15em] text-xs font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-all duration-300"
                  >
                    Start a Campaign
                  </a>
                </article>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-16 md:py-28 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="process">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                The Campaign Process
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-14 md:mb-20">
                Five steps from analysis through optimization—so launch week is coordinated, not chaotic.
              </p>

              <div className="hidden lg:block mb-16 overflow-x-auto">
                <div className="relative flex justify-between items-start min-w-[900px] max-w-5xl mx-auto px-2">
                  <div className="absolute top-5 left-[5%] right-[5%] h-px bg-[var(--color-ink-200)] z-0" aria-hidden />
                  {PROCESS_STEPS.map((_, idx) => (
                    <div key={PROCESS_SHORT[idx]} className="relative z-10 flex flex-col items-center text-center w-[18%]">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-off-black)] text-white text-xs font-serif flex items-center justify-center mb-3">
                        {idx + 1}
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] font-serif mb-1">
                        Step {idx + 1}
                      </p>
                      <p className="text-xs font-serif font-light text-[var(--color-off-black)] leading-snug px-1">
                        {PROCESS_SHORT[idx]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {PROCESS_STEPS.map((step, idx) => (
                  <article key={step.title} className="border-t border-[var(--color-ink-200)] pt-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-2">
                      Step {idx + 1}
                    </p>
                    <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-3">{step.title}</h3>
                    <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed">{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="py-16 md:py-20 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
            <div className="container-max max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-6">
                Programs that stack with property campaigns
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.85]">
                Explore{' '}
                <Link href="/single-property-websites" className="underline hover:opacity-70">
                  single-property websites
                </Link>{' '}
                for positioning depth, pair bursts with ongoing{' '}
                <Link href="/google-ads-management" className="underline hover:opacity-70">
                  Google Ads campaigns
                </Link>
                , prove ROI with{' '}
                <Link href="/analytics-reporting" className="underline hover:opacity-70">
                  analytics and reporting
                </Link>
                , align portfolio creative with{' '}
                <Link href="/website-and-seo" className="underline hover:opacity-70">
                  website design
                </Link>
                , and compound discovery with{' '}
                <Link href="/seo-optimization" className="underline hover:opacity-70">
                  SEO optimization
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Case examples */}
          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="examples">
            <div className="container-max">
              <div className="max-w-2xl mb-16 md:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
                  Properties Sold Faster
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Live luxury listing surfaces engineered for tours—each links to the public microsite. Outcomes vary by
                  price, season, and listing quality; benchmarks above reflect program-level performance.
                </p>
              </div>

              <div className="space-y-0">
                {PROPERTIES.map((property) => (
                  <article
                    key={property.id}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32 last:mb-0"
                  >
                    <div
                      className={`flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 ${
                        property.imageRight ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-2">
                        {property.label}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-trust)] font-serif mb-3">
                        {property.metric}
                      </p>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight leading-[1.15]">
                        {property.title}
                      </h3>
                      <p className="text-sm text-[var(--color-off-black)] font-serif mb-4 border-l-2 border-[var(--color-trust)] pl-3">
                        {property.outcome}
                      </p>
                      <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                        {property.description}
                      </p>
                      <Link
                        href={property.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                      >
                        View live site
                      </Link>
                    </div>
                    <Link
                      href={property.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 ${
                        property.imageRight ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <Image
                        src={property.image}
                        alt={`${property.title} — luxury property marketing example`}
                        fill
                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Social proof */}
          <section className="py-8 md:py-12 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
            <div className="container-max">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-10 md:mb-12">
                What listing marketing clients say
              </h2>
              <Testimonials omitHeading showStarRating visibleIds={[3, 7, 'jorge-elizondo']} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="faq">
            <div className="container-max max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-10">
                Frequently asked questions
              </h2>
              <dl className="space-y-10">
                {FAQ_ITEMS.map((item) => (
                  <div key={item.question}>
                    <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">{item.question}</dt>
                    <dd className="text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <PropertyMarketingContactForm />
        </div>
      </SEOWrapper>
    </>
  );
}
