import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ServiceStats from '@/components/service/ServiceStats';
import ServiceCities from '@/components/service/ServiceCities';
import ServiceMarketsSection from '@/components/service/ServiceMarketsSection';
import SEOWrapper from '@/components/SEOWrapper';

const BASE = 'https://www.dmrmedia.org';

export const metadata: Metadata = {
  title: 'Google Ads Management for Real Estate | DMR Media',
  description:
    'Paid media engineered for the luxury buyer journey. Precision Google Ads campaigns designed for affluent real estate buyers with transparent pacing and reporting.',
  keywords: [
    'Google Ads management for real estate',
    'real estate PPC',
    'Google Ads for real estate agents',
    'real estate Google Ads',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/google-ads-management`,
  },
  openGraph: {
    title: 'Google Ads Management for Real Estate | DMR Media',
    description:
      'Paid media engineered for the luxury buyer journey. Precision Google Ads campaigns designed for affluent real estate buyers with transparent pacing and reporting.',
    url: `${BASE}/google-ads-management`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Management for Real Estate | DMR Media',
    description:
      'Paid media engineered for the luxury buyer journey. Precision Google Ads campaigns designed for affluent real estate buyers with transparent pacing and reporting.',
  },
};

const FAQ_ITEMS = [
  {
    question: 'How much does Google Ads cost?',
    answer:
      'You pay Google directly for ad clicks (and set daily budgets we recommend based on market depth and lead targets). Our management fee covers strategy, build, optimization, landing support, and reporting—scoped after we understand your markets, inventory, and goals so pacing stays transparent.',
  },
  {
    question: 'How quickly will I see results?',
    answer:
      'Search and Maps traffic can move within days of launch; meaningful lead quality and CPL stability usually emerge over the first few weeks as we gather conversion data, tighten match types, and refine audiences. Luxury cycles are longer—retargeting and nurture layers are designed to compound over 60–90 days.',
  },
  {
    question: 'Can you manage multiple markets?',
    answer:
      'Yes. We structure accounts with geo-segmented campaigns, shared brand assets where appropriate, and market-specific negatives and copy so budgets do not bleed across metros. Reporting breaks out performance by region so leadership can see what each market contributes.',
  },
  {
    question: 'How do you prevent wasted ad spend?',
    answer:
      'Strict keyword intent layers, geo-fencing, placement exclusions, conversion-based bidding once signals exist, search term reviews, and CRM feedback loops. We prioritize actions tied to qualified conversations—not vanity clicks—and pause or reallocate spend when segments underperform.',
  },
  {
    question: "What's your reporting like?",
    answer:
      'Executive summaries with pacing, CPL/CPA trends, search themes driving conversations, and next-week tests. We align reporting with the same definitions your team uses in CRM so marketing and sales share one story. For deeper measurement stacks, we pair with our analytics and reporting practice.',
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
    title: 'Strategy & Targeting',
    description:
      'Buyer personas, geo strategy, keyword universes by intent (listing, relocation, investment), budget splits, and conversion definitions—documented before a dollar spends.',
  },
  {
    title: 'Campaign Build & Launch',
    description:
      'Search and Maps structures, remarketing lists, landing pages and forms, tracking, and CRM routing—launched with QA on every touchpoint from click to appointment.',
  },
  {
    title: 'Testing & Optimization',
    description:
      'Headlines, audiences, bid strategies, and landing variants tested on a disciplined cadence. Waste is cut; winners get budget.',
  },
  {
    title: 'Scaling & Reporting',
    description:
      'Scale proven segments, defend quality at higher spend, and report in plain language tied to pipeline—not dashboard vanity metrics alone.',
  },
] as const;

const PROCESS_SHORT = [
  'Strategy & targeting',
  'Build & launch',
  'Test & optimize',
  'Scale & report',
] as const;

const CASE_STUDIES = [
  {
    id: 'jade-legendary-real-estate',
    metric: '3× qualified leads in 90 days',
    focus: 'Multi-channel campaign orchestration',
    title: "Jade's Paid Media Success",
    description:
      'Legendary Real Estate Services needed consistent, qualified conversations—not sporadic clicks. We rebuilt account structure, tightened luxury-intent keywords, and aligned landing and CRM follow-up so paid search and supporting channels fed one pipeline.',
    image: '/images/JadeCRM.png',
    imageRight: true,
  },
  {
    id: 'willow-brook-realty',
    metric: '46 leads and 2 new clients in 3 weeks',
    focus: 'Geo-targeted buyer campaigns',
    title: 'Willow Brook Realty',
    description:
      'Vermont and New Hampshire buyers were searching; Willow Brook was not visible. Geo-targeted Search and Maps campaigns, paired with local foundations, produced 46 leads and two signed clients in the first three weeks of the push.',
    image: '/images/WillowBrookLeads.png',
    imageRight: false,
  },
] as const;

const topCities = [
  { name: 'New York', state: 'NY', slug: '#market-new-york-ny', image: '/images/Cities/NewYork.jpeg' },
  {
    name: 'Los Angeles',
    state: 'CA',
    slug: '#market-los-angeles-ca',
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
  },
  {
    name: 'Chicago',
    state: 'IL',
    slug: '#market-chicago-il',
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
  },
  {
    name: 'Houston',
    state: 'TX',
    slug: '#market-houston-tx',
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
  },
  {
    name: 'Phoenix',
    state: 'AZ',
    slug: '#market-phoenix-az',
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

function OrganicPaidIntegratedChart() {
  const rows = [
    {
      label: 'Reach pattern',
      organic: 'Compounds over time',
      paid: 'Immediate, spend-tied',
      integrated: 'Now + sustainable shelf space',
    },
    {
      label: 'Buyer intent',
      organic: 'High when pages match intent',
      paid: 'High on exact luxury queries',
      integrated: 'Captured at multiple funnel stages',
    },
    {
      label: 'Geo precision',
      organic: 'Maps + local content',
      paid: 'Radius, ZIP, and in-market layers',
      integrated: 'Neighborhood-level dominance',
    },
    {
      label: 'Long sales cycles',
      organic: 'Editorial trust building',
      paid: 'Retargeting & nurture',
      integrated: 'Always-on reminders to return',
    },
  ] as const;
  return (
    <div className="overflow-x-auto border border-[var(--color-ink-200)] bg-white">
      <table className="w-full min-w-[640px] text-left text-sm font-serif">
        <caption className="sr-only">Organic only versus paid only versus integrated Google Ads and SEO approach</caption>
        <thead>
          <tr className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
            <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs w-[22%]" />
            <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs">
              Organic only
            </th>
            <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs">
              Paid only
            </th>
            <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs border-l-2 border-[var(--color-off-black)]">
              Integrated
            </th>
          </tr>
        </thead>
        <tbody className="text-[var(--color-ink-300)]">
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-[var(--color-ink-200)] last:border-0">
              <th
                scope="row"
                className="p-4 text-xs uppercase tracking-[0.15em] text-[var(--color-ink-400)] font-normal align-top"
              >
                {row.label}
              </th>
              <td className="p-4 align-top">{row.organic}</td>
              <td className="p-4 align-top">{row.paid}</td>
              <td className="p-4 align-top border-l-2 border-[var(--color-off-black)] bg-[var(--surface-base)]/80 text-[var(--color-off-black)]">
                {row.integrated}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function KeywordThemeTable() {
  const rows = [
    { theme: 'Luxury listing', example: 'waterfront estate [city]', intent: 'High' },
    { theme: 'Relocation', example: 'moving to [neighborhood] realtor', intent: 'High' },
    { theme: 'Investment', example: 'luxury condo cap rate [metro]', intent: 'Mid' },
    { theme: 'New development', example: 'presales [development name]', intent: 'High' },
  ] as const;
  return (
    <div
      className="border border-[var(--color-ink-200)] bg-white p-4 sm:p-6 overflow-x-auto"
      aria-label="Example luxury real estate keyword themes for Google Ads"
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-4 text-center">
        Keyword research themes (sample)
      </p>
      <table className="w-full min-w-[520px] text-xs font-serif border-collapse">
        <thead>
          <tr className="border-b border-[var(--color-ink-200)]">
            <th className="p-2 text-left text-[var(--color-ink-400)] font-normal">Theme</th>
            <th className="p-2 text-left text-[var(--color-off-black)] font-light">Example query shape</th>
            <th className="p-2 text-left text-[var(--color-ink-400)] font-normal">Intent</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.theme} className="border-b border-[var(--color-ink-200)] last:border-0">
              <td className="p-2 text-[var(--color-off-black)] font-light">{r.theme}</td>
              <td className="p-2 text-[var(--color-ink-300)]">{r.example}</td>
              <td className="p-2 text-[var(--color-trust)]">{r.intent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RetargetingFunnelDiagram() {
  const steps = [
    { label: 'Search / click', sub: 'High-intent entry' },
    { label: 'Site visit', sub: 'Behavior tracked' },
    { label: 'Lead / form', sub: 'CRM event' },
    { label: 'Nurture & retarget', sub: 'Display + RLSA' },
    { label: 'Booked appointment', sub: 'Offline conversion import' },
  ] as const;
  return (
    <div className="border border-[var(--color-ink-200)] bg-white p-6 md:p-8" aria-label="Retargeting funnel from click to appointment">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-6 text-center">
        Retargeting & nurture funnel (example)
      </p>
      <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-2 md:gap-1 max-w-3xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.label} className="flex md:flex-col md:flex-1 items-center gap-2 md:gap-0 text-center min-w-0">
            <div className="rounded-sm border border-[var(--color-off-black)] bg-[var(--surface-base)] px-3 py-3 md:py-4 flex-1 md:w-full">
              <p className="text-xs font-serif font-light text-[var(--color-off-black)]">{s.label}</p>
              <p className="text-[10px] text-[var(--color-ink-400)] mt-1 font-serif">{s.sub}</p>
            </div>
            {i < steps.length - 1 ? (
              <span className="text-[var(--color-ink-300)] shrink-0 md:pt-8" aria-hidden>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function CampaignComponentsDiagram() {
  const nodes = [
    { t: 'Search', d: 'Intent capture' },
    { t: 'Maps', d: 'Local prominence' },
    { t: 'Display', d: 'Remarketing' },
    { t: 'Landing', d: 'Conversion UX' },
    { t: 'CRM', d: 'Lead routing' },
  ] as const;
  return (
    <div className="border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6 md:p-8 overflow-x-auto" aria-label="Campaign components diagram">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-6 text-center">
        Full-stack campaign structure
      </p>
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 min-w-[560px] md:min-w-0">
        {nodes.map((n, i) => (
          <div key={n.t} className="flex items-center gap-2">
            <div className="w-[100px] shrink-0 border border-[var(--color-off-black)] bg-white px-2 py-4 text-center">
              <p className="text-xs font-serif font-light text-[var(--color-off-black)]">{n.t}</p>
              <p className="text-[9px] text-[var(--color-ink-400)] mt-1 font-serif leading-tight">{n.d}</p>
            </div>
            {i < nodes.length - 1 ? <span className="text-[var(--color-ink-300)]">+</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function AdsMetricsVisualization() {
  const bars = [
    { label: 'Lead generation (avg.)', value: '3×', width: '92%' },
    { label: 'Cost per lead vs. prior agency', value: '65% lower', width: '78%' },
    { label: 'Booked appointments (retargeting lift)', value: '1.8×', width: '72%' },
  ] as const;
  return (
    <div className="border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-8 md:p-10 max-w-3xl mx-auto" aria-label="Google Ads performance metrics visualization">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-8 text-center">
        Documented campaign benchmarks
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

export default function GoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/google-ads-management">
        <div className="min-h-screen bg-white">
          {/* Hero */}
          <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-400)] font-serif block mb-4">
                    Google Ads management for real estate
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight mb-6">
                    Google Ads That Surface Your Listings to Luxury Buyers
                  </h1>
                  <p className="text-lg md:text-xl text-[var(--color-ink-300)] font-serif leading-relaxed mb-8 max-w-xl">
                    We run precision Google Ads campaigns that reach affluent buyers at the exact moment they start
                    searching, keeping your team supplied with deal-ready conversations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/calendar"
                      className="inline-flex justify-center px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-85 transition-opacity text-center"
                    >
                      Start a Google Ads Campaign
                    </Link>
                    <a
                      href="#contact"
                      className="inline-flex justify-center px-8 py-4 border border-[var(--color-off-black)] text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-colors text-center"
                    >
                      Schedule a Consultation
                    </a>
                  </div>
                </div>
                <div className="relative aspect-[2/1] max-h-[360px] rounded-sm overflow-hidden border border-[var(--color-ink-200)] shadow-sm bg-[var(--color-ink-200)]">
                  <Image
                    src="/images/EaganCaseStudy/SearchAds.png"
                    alt="Google Ads dashboard showing campaign performance metrics for luxury real estate"
                    fill
                    className="object-contain object-center p-2 sm:p-4 bg-white"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <ClientLogosSlider />

          {/* Why Google Ads */}
          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="why-google-ads">
            <div className="container-max">
              <div className="max-w-3xl mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
                  Why Google Ads for luxury real estate
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Affluent buyers and sellers still open Google first—often before they name a neighborhood or agent.
                  Paid search and Maps let you intercept that intent with controlled messaging, precise geography, and
                  measurable cost per conversation—then reinforce it with retargeting as the deal matures.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14 max-w-4xl">
                {[
                  'Luxury buyers start with search—capture demand while interest is explicit, not assumed.',
                  'High-intent traffic with immediate ROI when accounts are structured around conversation quality, not raw volume.',
                  'Geo-targeting for neighborhood precision: radii, exclusions, and adjacency to competing brokerages.',
                  'Retargeting nurtures long sales cycles—site visitors, video engagers, and partial leads stay in motion until they book.',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed border-l-2 border-[var(--color-off-black)] pl-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4 text-center">
                Organic only vs. paid only vs. integrated
              </p>
              <OrganicPaidIntegratedChart />
            </div>
          </section>

          {/* Campaign approach */}
          <section className="py-16 md:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="campaign-approach">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                How We Structure High-Performing Campaigns
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-16 md:mb-24">
                Keyword intent, geography, and nurture layers are designed together—so spend compounds into qualified
                pipeline, not isolated clicks.
              </p>

              <div className="space-y-20 md:space-y-28">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">
                      Precision keyword targeting
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Luxury listing searches—architecture, waterfront, new construction, and hyperlocal modifiers.',
                        'Relocation queries—employer moves, school districts, and “moving to [city]” intent clusters.',
                        'Investment property searches—condo, multifamily, and second-home angles with guardrails on match type.',
                      ].map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                          <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <KeywordThemeTable />
                    <div className="relative min-h-[200px] sm:min-h-[240px] border border-[var(--color-ink-200)] overflow-hidden bg-white">
                      <Image
                        src="/images/whitelabeledcase/semrushCS.webp"
                        alt="Sample keyword research and competitive visibility for real estate PPC"
                        fill
                        className="object-contain object-center p-3"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </article>

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">
                      Retargeting & nurturing
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Website visitor retargeting layered by page depth—listing views vs. generic traffic.',
                        'Lead nurturing flows aligned to speed-to-lead and follow-up discipline.',
                        'CRM integration so offline outcomes (appointments, GCI) inform bid and audience decisions.',
                      ].map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                          <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <RetargetingFunnelDiagram />
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* What's included */}
          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="included">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6 max-w-3xl">
                What&apos;s Included
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mb-12 font-serif text-[15px] text-[var(--color-ink-300)] leading-relaxed">
                {[
                  'Search + Maps campaigns tuned for luxury intent and local prominence.',
                  'Display remarketing for long-cycle buyers and listing engagers.',
                  'Landing pages and on-brand micro-experiences that match ad promise.',
                  'Lead forms, call tracking hooks, and CRM integration for closed-loop reporting.',
                ].map((t) => (
                  <li key={t} className="flex gap-2 border-l-2 border-[var(--color-off-black)] pl-3">
                    <span className="text-[var(--color-off-black)]">→</span>
                    {t}
                  </li>
                ))}
              </ul>
              <CampaignComponentsDiagram />
            </div>
          </section>

          {/* Process */}
          <section className="py-16 md:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="process">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                Our Process
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-14 md:mb-20">
                Four phases from strategy through scale—so tests, budgets, and reporting stay aligned with revenue
                conversations.
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
                Real Campaign Performance
              </h2>
              <ServiceStats
                heading=""
                stats={[
                  {
                    value: '3×',
                    label: 'Lead generation',
                    description: 'Average lift in qualified conversations when accounts are restructured for luxury intent.',
                  },
                  {
                    value: '65%',
                    label: 'Lower cost per lead',
                    description: 'Typical CPL improvement versus prior agency setups in documented engagements.',
                  },
                  {
                    value: '1.8×',
                    label: 'Booked appointments',
                    description: 'Increase attributed to retargeting and nurture layers alongside core Search.',
                  },
                ]}
              />
              <div className="mt-14 md:mt-20">
                <AdsMetricsVisualization />
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="py-16 md:py-20 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
            <div className="container-max max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-6">
                How paid media connects to your full growth stack
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.85]">
                Google Ads works best beside strong organic foundations—see our{' '}
                <Link href="/seo-optimization" className="underline hover:opacity-70">
                  SEO optimization
                </Link>{' '}
                programs. For end-to-end pipeline design, explore{' '}
                <Link href="/real-estate-lead-generation" className="underline hover:opacity-70">
                  real estate lead generation
                </Link>
                . Measurement stays honest with{' '}
                <Link href="/analytics-reporting" className="underline hover:opacity-70">
                  analytics and reporting
                </Link>
                , listing pushes pair with{' '}
                <Link href="/property-marketing" className="underline hover:opacity-70">
                  property marketing
                </Link>
                , onsite experience with{' '}
                <Link href="/website-and-seo" className="underline hover:opacity-70">
                  website design
                </Link>
                , and presales velocity with{' '}
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
                  Google Ads Success Stories
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Documented outcomes from teams that needed predictable conversations—not vanity traffic.
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
                What paid media clients say
              </h2>
              <Testimonials omitHeading showStarRating visibleIds={[3, 'sandy-reavill']} />
            </div>
          </section>

          <ServiceCities
            heading="Browse markets we cover."
            description="Choose a metro to jump to how we structure Google Ads there—consolidated on this page for clearer authority."
            cities={topCities}
          />

          <ServiceMarketsSection variant="google-ads" />

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
