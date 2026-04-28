import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import SEOWrapper from '@/components/SEOWrapper';

const BASE = 'https://www.dmrmedia.org';

export const metadata: Metadata = {
  title: 'Analytics & Reporting for Real Estate | DMR Media',
  description:
    'Transparent dashboards for every decision. Real-time analytics and weekly reporting for SEO, Google Ads, lead generation, and all marketing channels.',
  keywords: [
    'analytics and reporting for real estate',
    'real estate analytics',
    'real estate reporting',
    'marketing analytics for real estate',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/analytics-reporting`,
  },
  openGraph: {
    title: 'Analytics & Reporting for Real Estate | DMR Media',
    description:
      'Transparent dashboards for every decision. Real-time analytics and weekly reporting for SEO, Google Ads, lead generation, and all marketing channels.',
    url: `${BASE}/analytics-reporting`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Analytics & Reporting for Real Estate | DMR Media',
    description:
      'Transparent dashboards for every decision. Real-time analytics and weekly reporting for SEO, Google Ads, lead generation, and all marketing channels.',
  },
};

const FAQ_ITEMS = [
  {
    question: 'What metrics do you track?',
    answer:
      'Search (rankings, impressions, clicks, CTR, query themes), paid (CPL, CPA, ROAS, search terms, quality score signals), leads (volume, source, stage velocity, form completion), and site health (Core Web Vitals, landing engagement, funnel drop-off). We align the scorecard to how your team defines a qualified conversation.',
  },
  {
    question: 'How often are dashboards updated?',
    answer:
      'Core connectors refresh on platform schedules—often near real-time for ads and site traffic, with Search Console on its natural cadence. Tier-1 dashboards stay live; tier-2 weekly narratives interpret movement; tier-3 monthly reviews prioritize roadmap bets.',
  },
  {
    question: 'Can I export the data?',
    answer:
      'Yes. Looker Studio and connected sources support PDF exports, scheduled email snapshots, and raw pulls from underlying accounts (Google Ads, GA4, Search Console, CRM) where you have access—so finance and leadership can work from the same numbers.',
  },
  {
    question: 'What if I use other tools?',
    answer:
      'We integrate the stack you already run—HubSpot, Follow Up Boss, Sierra Interactive, custom data warehouses—when APIs or exports exist. If a tool is opaque, we design proxy metrics so decisions are still defensible.',
  },
  {
    question: 'How do you track offline conversions?',
    answer:
      'We import CRM outcomes (appointments, tours, under contract) via offline conversion uploads or native integrations where supported, then tie them back to campaigns and landing paths so optimization chases pipeline—not just form fills.',
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
    id: 'michael-seo-transformation',
    metric: 'Before → after: impressions ×21 in 7.5 weeks',
    focus: 'Technical + reporting loop',
    title: "Michael's analytics-led SEO reset",
    description:
      'Abandoned IDX templates produced almost no measurable demand. Weekly dashboards exposed crawl and schema gaps; fixes shipped in priority order so leadership could see leading indicators move before rankings fully followed.',
    image: '/images/MichealTraffic.png',
    imageRight: true,
  },
  {
    id: 'jade-legendary-real-estate',
    metric: 'Before → after: 3× qualified leads in 90 days',
    focus: 'Pipeline visibility in CRM',
    title: "Jade's lead analytics discipline",
    description:
      'Inconsistent lead flow was really an attribution and follow-up visibility problem. Unified reporting across paid, site, and CRM let the team double down on the segments that actually booked conversations—not vanity clicks.',
    image: '/images/JadeCRM.png',
    imageRight: false,
  },
  {
    id: 'marquis-farwell-group',
    metric: 'Before → after: 2 → 38 organic clicks / day',
    focus: 'Search Console → content priorities',
    title: 'Marquis + Farwell organic growth',
    description:
      'Sonoma County visibility was under-indexed against true inventory strength. Search analytics surfaced neighborhood gaps; topical depth and GBP alignment compounded into daily organic clicks and qualified buyer inquiries.',
    image: '/images/MarquisFarwellGoogleSearchConsole.png',
    imageRight: true,
  },
] as const;

function BlackBoxVsTransparentTable() {
  const rows = [
    { label: 'Data access', black: 'PDFs or opaque summaries', clear: 'Live sources you can inspect' },
    { label: 'Definitions', black: '“Leads” undefined', clear: 'MQL / tour / GCI aligned in CRM' },
    { label: 'Cadence', black: 'Quarterly surprises', clear: 'Weekly narrative + monthly strategy' },
    { label: 'Optimization', black: 'Reactive guesses', clear: 'Hypothesis → test → measured outcome' },
  ] as const;
  return (
    <div className="overflow-x-auto border border-[var(--color-ink-200)] bg-white">
      <table className="w-full min-w-[600px] text-left text-sm font-serif">
        <caption className="sr-only">Black box reporting versus transparent reporting</caption>
        <thead>
          <tr className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
            <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs w-[22%]" />
            <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs">Black box</th>
            <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs border-l-2 border-[var(--color-off-black)]">
              Transparent reporting
            </th>
          </tr>
        </thead>
        <tbody className="text-[var(--color-ink-300)]">
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-[var(--color-ink-200)] last:border-0">
              <th scope="row" className="p-4 text-xs uppercase tracking-[0.15em] text-[var(--color-ink-400)] font-normal align-top">
                {row.label}
              </th>
              <td className="p-4 align-top">{row.black}</td>
              <td className="p-4 align-top border-l-2 border-[var(--color-off-black)] bg-[var(--surface-base)]/80 text-[var(--color-off-black)]">
                {row.clear}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ReportingTiersDiagram() {
  const tiers = [
    { n: '1', title: 'Real-time dashboards', sub: '24/7 access', body: 'Live Looker Studio views across search, paid, site, and CRM handoffs.' },
    { n: '2', title: 'Weekly narratives', sub: 'Strategic insights', body: 'What moved, what we are testing next, and budget implications—in plain language.' },
    { n: '3', title: 'Monthly strategy reviews', sub: 'Roadmap bets', body: 'Optimization recommendations tied to pipeline and inventory—not vanity charts.' },
  ] as const;
  return (
    <div className="border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6 md:p-10" aria-label="Three-tier reporting structure">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-8 text-center">
        Reporting structure
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {tiers.map((t) => (
          <div key={t.n} className="border border-[var(--color-off-black)] bg-white p-5 flex flex-col">
            <span className="text-xs font-serif text-[var(--color-trust)] mb-2">Tier {t.n}</span>
            <p className="text-lg font-serif font-light text-[var(--color-off-black)] mb-1">{t.title}</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] font-serif mb-3">{t.sub}</p>
            <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed flex-1">{t.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AnalyticsReportingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/analytics-reporting">
        <div className="min-h-screen bg-white">
          {/* Hero */}
          <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-400)] font-serif block mb-4">
                    Analytics and reporting for real estate
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight mb-6">
                    Analytics That Turn Data Into Decisions
                  </h1>
                  <p className="text-lg md:text-xl text-[var(--color-ink-300)] font-serif leading-relaxed mb-8 max-w-xl">
                    We turn campaign data into crisp insights, making it easy to see what&apos;s working—and where to
                    optimize next. Whether you&apos;re running SEO, Google Ads, or a complete lead generation system,
                    transparent dashboards keep your team synchronized.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/calendar"
                      className="inline-flex justify-center px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-85 transition-opacity text-center"
                    >
                      Get a Demo
                    </Link>
                    <a
                      href="#framework"
                      className="inline-flex justify-center px-8 py-4 border border-[var(--color-off-black)] text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-colors text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-3 md:gap-4 items-end max-w-xl mx-auto lg:max-w-none lg:mx-0">
                  <div className="col-span-2 relative aspect-[9/16] max-h-[360px] rounded-sm overflow-hidden border border-[var(--color-ink-200)] shadow-md bg-white">
                    <Image
                      src="/images/landing/google-general/03-semrush-ranking.png"
                      alt="Marketing analytics on mobile — rankings and visibility"
                      fill
                      className="object-contain object-center p-2"
                      sizes="(max-width: 1024px) 40vw, 280px"
                      priority
                    />
                    <span className="absolute bottom-2 left-2 right-2 text-center text-[9px] uppercase tracking-[0.15em] text-[var(--color-off-black)] font-serif bg-white/90 py-1 rounded-sm border border-[var(--color-ink-200)]">
                      Mobile
                    </span>
                  </div>
                  <div className="col-span-3 relative aspect-[4/3] rounded-sm overflow-hidden border border-[var(--color-ink-200)] shadow-md bg-white">
                    <Image
                      src="/images/MichealTraffic.png"
                      alt="Real estate analytics dashboard on desktop — traffic and growth"
                      fill
                      className="object-contain object-center p-2 sm:p-3"
                      sizes="(max-width: 1024px) 60vw, 480px"
                      priority
                    />
                    <span className="absolute bottom-2 left-2 right-2 text-center text-[9px] uppercase tracking-[0.15em] text-[var(--color-off-black)] font-serif bg-white/90 py-1 rounded-sm border border-[var(--color-ink-200)]">
                      Desktop
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ClientLogosSlider />

          {/* Why analytics */}
          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="why-analytics">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6 max-w-3xl">
                Why analytics matter
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-3xl mb-10">
                Luxury marketing budgets fail when no one agrees what “good” looks like. Measurement is the contract
                between media, creative, and sales—it tells you where to reallocate this week, not next quarter.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14 max-w-4xl">
                {[
                  "You can't optimize what you don't measure—leading indicators precede lagging revenue.",
                  'Transparency builds trust across marketing, leadership, and field agents.',
                  'Data-driven decisions beat guesses when markets shift weekly.',
                  'Real-time dashboards enable agility—pause waste, scale winners while intent is hot.',
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
                Black box vs. transparent reporting
              </p>
              <BlackBoxVsTransparentTable />
            </div>
          </section>

          {/* Framework */}
          <section id="framework" className="py-16 md:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                Our Analytics Framework
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-16 md:mb-24">
                Four lenses—search, paid, lead, and site—so every optimization has a home and a definition of success.
              </p>

              <div className="space-y-20 md:space-y-28">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">Search analytics</h3>
                    <ul className="space-y-3">
                      {[
                        'Keyword rankings and visibility trends—not vanity averages hiding losses.',
                        'Organic traffic, impressions, and query themes that explain who arrived and why.',
                        'Click-through rates from SERP to landing—diagnosing message match and snippet quality.',
                      ].map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                          <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative min-h-[260px] sm:min-h-[300px] border border-[var(--color-ink-200)] overflow-hidden bg-white">
                    <Image
                      src="/images/MarquisFarwellGoogleSearchConsole.png"
                      alt="Search analytics example — Google Search Console performance for a luxury real estate team"
                      fill
                      className="object-contain object-center p-3 sm:p-4"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div className="lg:order-2">
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">Paid analytics</h3>
                    <ul className="space-y-3">
                      {[
                        'Google Ads performance by intent segment, geo, and match type.',
                        'Cost per lead and cost per qualified conversation—aligned to CRM stages.',
                        'Return on ad spend with offline outcomes when uploads are configured.',
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
                      alt="Paid analytics example — Google Ads campaign metrics"
                      fill
                      className="object-contain object-center p-3 sm:p-4"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">Lead analytics</h3>
                    <ul className="space-y-3">
                      {[
                        'Lead volume and quality by source, campaign, and landing path.',
                        'Conversion rates across forms, calls, and chat—surfacing friction fast.',
                        'Lead source attribution that survives multi-touch reality.',
                      ].map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                          <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative min-h-[260px] sm:min-h-[300px] border border-[var(--color-ink-200)] overflow-hidden bg-white">
                    <Image
                      src="/images/WillowBrookLeads.png"
                      alt="Lead analytics example — inbound leads dashboard"
                      fill
                      className="object-contain object-center p-3 sm:p-4"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div className="lg:order-2">
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">Site performance</h3>
                    <ul className="space-y-3">
                      {[
                        'Core Web Vitals and mobile experience—luxury media cannot tank LCP.',
                        'User behavior: scroll depth, engagement, and high-value page paths.',
                        'Conversion funnels from ad click to tour request—with drop-off callouts.',
                      ].map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                          <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:order-1 space-y-3">
                    <div className="relative min-h-[200px] border border-[var(--color-ink-200)] overflow-hidden bg-white">
                      <Image
                        src="/images/EaganCaseStudy/GoogleSearchConsole.png"
                        alt="Site performance example — experience and search visibility signals"
                        fill
                        className="object-contain object-center p-3"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Reporting process */}
          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="reporting-process">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6 max-w-3xl">
                Our Reporting Process
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-3xl mb-12">
                Three tiers so operators get speed, strategists get narrative, and leadership gets decisions—not
                spreadsheets to decode alone.
              </p>
              <ReportingTiersDiagram />
            </div>
          </section>

          {/* What you get */}
          <section className="py-16 md:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="what-you-get">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6 max-w-3xl">
                What You Get
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mb-12 font-serif text-[15px] text-[var(--color-ink-300)]">
                {[
                  'Real-time data updates across connected properties.',
                  'Custom metric tracking mapped to your CRM stages.',
                  'Automated alerts when CPL, volume, or site health crosses thresholds.',
                  'Export capabilities for board decks and broker reviews.',
                  'CRM integration and offline conversion feedback where supported.',
                ].map((t) => (
                  <li key={t} className="flex gap-2 border-l-2 border-[var(--color-off-black)] pl-3">
                    <span className="text-[var(--color-off-black)]">→</span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="relative w-full max-w-5xl mx-auto min-h-[280px] sm:min-h-[360px] border border-[var(--color-ink-200)] overflow-hidden bg-white rounded-sm">
                <Image
                  src="/images/whitelabeledcase/semrushCS.webp"
                  alt="Full analytics dashboard view — visibility, traffic, and campaign signals"
                  fill
                  className="object-contain object-center p-4 sm:p-6"
                  sizes="(max-width: 1280px) 100vw, 1024px"
                />
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="py-16 md:py-20 bg-white border-b border-[var(--color-ink-200)]">
            <div className="container-max max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-6">
                Analytics across your DMR programs
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.85]">
                Reporting ties directly to how we execute{' '}
                <Link href="/seo-optimization" className="underline hover:opacity-70">
                  SEO optimization
                </Link>
                ,{' '}
                <Link href="/google-ads-management" className="underline hover:opacity-70">
                  Google Ads management
                </Link>
                , and{' '}
                <Link href="/real-estate-lead-generation" className="underline hover:opacity-70">
                  real estate lead generation
                </Link>
                . Creative and IA live under{' '}
                <Link href="/website-and-seo" className="underline hover:opacity-70">
                  website design
                </Link>
                ; listing bursts under{' '}
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
              <div className="max-w-2xl mb-16 md:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
                  Analytics-Driven Success
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Published engagements where dashboards changed what we built—not just how we summarized it.
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
                        alt={`${study.title} — analytics-driven results`}
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
