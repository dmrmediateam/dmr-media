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
  title: 'Real Estate Lead Generation | DMR Media',
  description:
    'Qualified conversations—not vanity traffic. Inbound systems for luxury markets combining SEO, Google Ads, landing page optimization, and CRM automation.',
  keywords: [
    'real estate lead generation',
    'luxury real estate lead generation',
    'real estate lead generation system',
    'real estate lead generation services',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/real-estate-lead-generation`,
  },
  openGraph: {
    title: 'Real Estate Lead Generation | DMR Media',
    description:
      'Qualified conversations—not vanity traffic. Inbound systems for luxury markets combining SEO, Google Ads, landing page optimization, and CRM automation.',
    url: `${BASE}/real-estate-lead-generation`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Lead Generation | DMR Media',
    description:
      'Qualified conversations—not vanity traffic. Inbound systems for luxury markets combining SEO, Google Ads, landing page optimization, and CRM automation.',
  },
};

const FAQ_ITEMS = [
  {
    question: 'How much does lead generation cost?',
    answer:
      'Investment scales with market depth, channel mix, and how much rebuild your site and CRM need before we scale spend. We scope management fees and recommended ad budgets after diagnosis—aligned to cost-per-qualified-conversation targets, not opaque “per lead” bundles.',
  },
  {
    question: 'How quickly will I get leads?',
    answer:
      'Paid channels can produce conversations within days of launch when tracking and landing paths are correct; organic and authority layers compound over weeks. Published examples include a sharp lift inside three weeks once the full system was live—your timeline depends on starting assets and competition, which we set explicitly in discovery.',
  },
  {
    question: 'Are the leads exclusive?',
    answer:
      'Yes. Inbound leads generated through your properties, search presence, and paid campaigns are yours—not shared portal inventory sold to multiple agents. Exclusivity is the point of owning acquisition instead of renting it from third-party marketplaces.',
  },
  {
    question: 'Can you integrate with my CRM?',
    answer:
      'We routinely wire forms, call tracking, and ad platforms into common real estate CRMs and automation tools—routing, tagging, sequences, and offline conversion imports so optimization follows real pipeline outcomes, not click volume alone.',
  },
  {
    question: "What if I'm not ready to commit?",
    answer:
      'Start with a structured audit: intent map, leakage points, and a phased plan. Many teams pilot one metro or one inventory vertical before expanding—so you can validate response discipline and CRM hygiene before scaling media.',
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

const PROCESS_PHASES = [
  {
    title: 'Diagnose Intent & Leakage',
    description:
      'Search, ads, form analytics, and speed-to-lead—we find where budget and attention evaporate before conversations hit the CRM.',
  },
  {
    title: 'Rebuild the Acquisition Spine',
    description:
      'Keyword and offer map, landing paths, creative, and automation so capture, routing, and nurture match how luxury buyers actually choose an agent.',
  },
  {
    title: 'Launch & Calibrate Spend',
    description:
      'Google Ads and organic programs paced together: paid fills the gap while SEO compounds; negatives and audiences tighten weekly.',
  },
  {
    title: 'Instrument & Iterate Weekly',
    description:
      'Dashboards and CRM signals so you scale what books tours and cut what only burns budget—reporting tied to pipeline, not vanity clicks.',
  },
] as const;

const PROCESS_SHORT = ['Diagnose', 'Rebuild spine', 'Launch & calibrate', 'Instrument weekly'] as const;

const CASE_STUDIES = [
  {
    id: 'willow-brook-realty',
    metric: '46 inbound leads in 3 weeks',
    focus: 'Complete lead gen system launch',
    title: 'Willow Brook Realty',
    description:
      'From referral-only to a measurable funnel: local SEO, Google Business Profile, targeted Google Ads, and CRM discipline—46 inbound leads and two new clients in the first three weeks of the push, with traffic and routing documented in the full case study.',
    image: '/images/WillowBrookLeads.png',
    imageRight: true,
  },
  {
    id: 'jade-legendary-real-estate',
    metric: '3× qualified leads in 90 days',
    focus: 'Multi-channel lead orchestration',
    title: "Jade's Lead Generation",
    description:
      'Legendary Real Estate Services needed velocity and context—not more disconnected assets. We orchestrated search, paid, landing, and automation so qualified conversations tripled in ninety days with follow-up you can read in the CRM.',
    image: '/images/JadeCRM.png',
    imageRight: false,
  },
] as const;

function LeadGenFunnelHeroVisual() {
  const tiers = [
    { w: '100%', label: 'Awareness', sub: 'Search + surfaces' },
    { w: '88%', label: 'Intent', sub: 'SEO + Ads + GBP' },
    { w: '72%', label: 'Capture', sub: 'Landing + forms' },
    { w: '52%', label: 'Pipeline', sub: 'CRM + nurture' },
  ] as const;
  return (
    <div
      className="relative aspect-[2/1] max-h-[360px] border border-[var(--color-ink-200)] bg-white p-6 md:p-8 flex flex-col justify-end"
      aria-label="Lead generation funnel from awareness through pipeline"
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-4 text-center">
        Inbound funnel (conceptual)
      </p>
      <div className="flex flex-col items-center gap-2 mx-auto w-full max-w-sm">
        {tiers.map((t) => (
          <div
            key={t.label}
            className="border border-[var(--color-off-black)] bg-[var(--surface-base)] py-2.5 text-center font-serif"
            style={{ width: t.w }}
          >
            <p className="text-xs font-light text-[var(--color-off-black)]">{t.label}</p>
            <p className="text-[10px] text-[var(--color-ink-400)]">{t.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CrmAutomationDiagram() {
  const steps = ['Sources', 'Router', 'Sequences', 'Scoring', 'Sales alerts'] as const;
  return (
    <div className="border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6 md:p-8 overflow-x-auto" aria-label="CRM integration and automation flow">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-6 text-center">
        CRM automation flow (example)
      </p>
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 min-w-[520px] md:min-w-0 items-center">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className="w-[88px] shrink-0 border border-[var(--color-off-black)] bg-white px-2 py-3 text-center">
              <p className="text-[11px] font-serif font-light text-[var(--color-off-black)]">{s}</p>
            </div>
            {i < steps.length - 1 ? <span className="text-[var(--color-ink-300)] text-xs">→</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function LeadGenMetricsBars() {
  const bars = [
    { label: 'Qualified leads (monthly avg., programs at scale)', value: '46+', width: '88%' },
    { label: 'Lead volume vs. prior system', value: '3×', width: '92%' },
    { label: 'Cost per lead vs. traditional platforms', value: '2–3× lower', width: '78%' },
  ] as const;
  return (
    <div className="border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-8 md:p-10 max-w-3xl mx-auto" aria-label="Lead generation performance metrics">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-8 text-center">
        Documented program benchmarks
      </p>
      <div className="space-y-6">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="flex justify-between text-sm font-serif text-[var(--color-off-black)] mb-2 gap-4">
              <span>{b.label}</span>
              <span className="text-[var(--color-trust)] shrink-0">{b.value}</span>
            </div>
            <div className="h-3 bg-[var(--color-ink-200)] rounded-sm overflow-hidden">
              <div className="h-full bg-[var(--color-off-black)] rounded-sm" style={{ width: b.width }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RealEstateLeadGenerationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/real-estate-lead-generation">
        <div className="min-h-screen bg-white">
          {/* Hero */}
          <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-400)] font-serif block mb-4">
                    Real estate lead generation
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight mb-6">
                    Lead Generation That Compounds Into Pipeline
                  </h1>
                  <p className="text-lg md:text-xl text-[var(--color-ink-300)] font-serif leading-relaxed mb-8 max-w-xl">
                    We engineer inbound systems for luxury markets: search visibility, disciplined Google Ads, landing and
                    form UX, and follow-up velocity you can read in the CRM—not guess from clicks.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/calendar"
                      className="inline-flex justify-center px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-85 transition-opacity text-center"
                    >
                      Start a Lead Generation System
                    </Link>
                    <a
                      href="#contact"
                      className="inline-flex justify-center px-8 py-4 border border-[var(--color-off-black)] text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-colors text-center"
                    >
                      Get a Free Lead Gen Audit
                    </a>
                  </div>
                </div>
                <LeadGenFunnelHeroVisual />
              </div>
            </div>
          </section>

          <ClientLogosSlider />

          {/* Traditional lead gen problems */}
          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="problem">
            <div className="container-max">
              <div className="max-w-3xl mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
                  The problem with traditional lead generation
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Portal and shared-list models optimize for volume sold to brokers—not for your brand, your markets, or
                  your cost per booked appointment. Luxury teams outgrow “more leads” when quality, exclusivity, and
                  experience break first.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14 max-w-4xl">
                {[
                  'Shared leads (non-exclusive) — the same buyer routed to multiple agents erodes trust and win rate.',
                  'High cost per lead when bids, fees, and low conversion stack together.',
                  'Low conversion rates when the experience is generic and speed-to-lead is slow.',
                  'No control over buyer experience — you rent traffic on someone else’s rails.',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed border-l-2 border-[var(--color-off-black)] pl-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Complete inbound system */}
          <section className="py-16 md:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="system">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                Complete Inbound System
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-16 md:mb-24">
                Four layers that only work when wired together—so spend, capture, and follow-up reinforce the same story.
              </p>

              <div className="space-y-20 md:space-y-28">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">
                      Search visibility (SEO)
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Organic demand generation — neighborhood and intent queries that match how buyers research.',
                        'Neighborhood authority — depth and proof, not thin city templates.',
                        'Long-term compounding — technical hygiene, entities, and content that stack over quarters.',
                      ].map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                          <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative min-h-[240px] sm:min-h-[280px] border border-[var(--color-ink-200)] overflow-hidden bg-white">
                    <Image
                      src="/images/MarquisFarwellGoogleSearchConsole.png"
                      alt="Organic search visibility example — impressions and clicks growth for a luxury real estate team"
                      fill
                      className="object-contain object-center p-3 sm:p-4"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div className="lg:order-2">
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">
                      Paid demand (Google Ads)
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Immediate buyer reach on high-intent luxury and relocation queries.',
                        'Geo-targeted campaigns — radii, exclusions, and market-specific negatives.',
                        'Retargeting and nurturing — RLSA and display to support long sales cycles.',
                      ].map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                          <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:order-1 relative min-h-[240px] sm:min-h-[280px] border border-[var(--color-ink-200)] overflow-hidden bg-white">
                    <Image
                      src="/images/EaganCaseStudy/SearchAds.png"
                      alt="Google Ads campaign performance dashboard for real estate paid demand"
                      fill
                      className="object-contain object-center p-3 sm:p-4"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">
                      Landing page & form UX
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Conversion-optimized pages — message match from ad to headline to proof.',
                        'Mobile-first design — speed, thumb-friendly forms, and clear CTAs.',
                        'Lead qualification — progressive fields and routing by intent segment.',
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
                      src="/images/propertyWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-25-19_45_37.png"
                      alt="Luxury property landing page example with conversion-focused layout"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div className="lg:order-2">
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">
                      CRM automation
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Instant lead routing — source, campaign, and listing context preserved.',
                        'Follow-up sequences — speed-to-lead and nurture without inbox chaos.',
                        'Lead scoring — engagement signals inform who gets priority and when.',
                      ].map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                          <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:order-1">
                    <CrmAutomationDiagram />
                  </div>
                </article>
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
                Four phases so acquisition, capture, and follow-up stay connected after launch week.
              </p>

              <div className="hidden md:block mb-16">
                <div className="relative flex justify-between items-start max-w-4xl mx-auto px-2">
                  <div className="absolute top-5 left-[8%] right-[8%] h-px bg-[var(--color-ink-200)] z-0" aria-hidden />
                  {PROCESS_PHASES.map((_, idx) => (
                    <div key={PROCESS_SHORT[idx]} className="relative z-10 flex flex-col items-center text-center w-[22%]">
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

          {/* Proven results */}
          <section className="py-16 md:py-28 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="results">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-10 text-center">
                Real Lead Generation Results
              </h2>
              <ServiceStats
                heading=""
                stats={[
                  {
                    value: '46+',
                    label: 'Qualified leads',
                    description: 'Per month average across programs running at scale in documented engagements.',
                  },
                  {
                    value: '3×',
                    label: 'Lead volume',
                    description: 'Increase vs. prior systems when acquisition, capture, and CRM are aligned.',
                  },
                  {
                    value: '2–3×',
                    label: 'Lower cost per lead',
                    description: 'Vs. many traditional portal and shared-list setups—measured on qualified conversations.',
                  },
                ]}
              />
              <div className="mt-14 md:mt-20">
                <LeadGenMetricsBars />
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="py-16 md:py-20 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
            <div className="container-max max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-6">
                How inbound connects to the rest of your stack
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.85]">
                Lead generation sits on top of{' '}
                <Link href="/seo-optimization" className="underline hover:opacity-70">
                  SEO optimization
                </Link>{' '}
                and{' '}
                <Link href="/google-ads-management" className="underline hover:opacity-70">
                  Google Ads management
                </Link>
                , measured honestly through{' '}
                <Link href="/analytics-reporting" className="underline hover:opacity-70">
                  analytics and reporting
                </Link>
                . Listing pushes pair with{' '}
                <Link href="/property-marketing" className="underline hover:opacity-70">
                  property marketing
                </Link>
                , onsite experience with{' '}
                <Link href="/website-and-seo" className="underline hover:opacity-70">
                  website design
                </Link>
                , and presales GTM with{' '}
                <Link href="/luxury-development-marketing" className="underline hover:opacity-70">
                  luxury development marketing
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Case studies */}
          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="stories">
            <div className="container-max">
              <div className="max-w-2xl mb-16 md:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
                  Lead Generation Success Stories
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Full methodology, timelines, and channel mix live in each case study—not cherry-picked screenshots
                  alone.
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
                      <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-trust)] font-serif mb-2">
                        {study.metric}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-4">
                        {study.focus}
                      </p>
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
                        Read case study
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
                        alt={`${study.title} — ${study.focus}`}
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

          {/* Social proof */}
          <section className="py-8 md:py-12 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
            <div className="container-max">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-10 md:mb-12">
                What lead generation clients say
              </h2>
              <Testimonials omitHeading showStarRating visibleIds={[3, 'sandy-reavill', 'david-heine']} />
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

          <div id="contact">
            <ContactForm />
          </div>
        </div>
      </SEOWrapper>
    </>
  );
}
