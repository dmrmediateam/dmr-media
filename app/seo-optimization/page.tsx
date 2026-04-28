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
  title: 'SEO Optimization for Real Estate | DMR Media',
  description:
    'Precision search frameworks for luxury real estate. Local SEO, technical optimization, and content architecture designed to rank luxury agents and brokers.',
  keywords: [
    'SEO optimization for real estate',
    'real estate SEO',
    'luxury real estate SEO',
    'local SEO for real estate',
    'real estate search engine optimization',
    'technical SEO real estate',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/seo-optimization`,
  },
  openGraph: {
    title: 'SEO Optimization for Real Estate | DMR Media',
    description:
      'Precision search frameworks for luxury real estate. Local SEO, technical optimization, and content architecture designed to rank luxury agents and brokers.',
    url: `${BASE}/seo-optimization`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Optimization for Real Estate | DMR Media',
    description:
      'Precision search frameworks for luxury real estate. Local SEO, technical optimization, and content architecture designed to rank luxury agents and brokers.',
  },
};

const FAQ_ITEMS = [
  {
    question: 'How long does SEO take to work?',
    answer:
      'Meaningful movement often begins in weeks for technical fixes and long-tail terms; competitive head terms compound over quarters as authority builds. We set expectations by keyword difficulty, crawl health, and how much quality content we can ship per month—then report on leading indicators weekly.',
  },
  {
    question: 'Will my website rank immediately?',
    answer:
      'No ethical partner guarantees instant rankings. What you should see quickly is cleaner indexation, better Core Web Vitals, richer results where schema applies, and upward pressure on impressions before clicks fully follow. We pair SEO with Google Ads when you need demand while organic compounds.',
  },
  {
    question: 'Do you do ongoing SEO maintenance?',
    answer:
      'Yes. Search is a moving target—algorithm updates, new competitors, seasonal inventory, and content decay all require cadence. Retainers include monitoring, technical hygiene, content iteration, and reporting tied to pipeline outcomes—not vanity charts alone.',
  },
  {
    question: 'How much does SEO cost?',
    answer:
      'Scope depends on site size, market competition, content velocity, and whether we are repairing a legacy platform or maintaining a healthy one. After audit, we propose a tiered plan with clear deliverables and reporting—not opaque “packages.”',
  },
  {
    question: 'What if I already have a website?',
    answer:
      'Most teams do. We start with technical and on-page audits, then prioritize fixes by impact and risk—often improving an existing CMS rather than forcing a rebuild unless the stack blocks growth.',
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

const FRAMEWORK_BLOCKS: {
  h3: string
  bullets: readonly string[]
  image?: string
  imageAlt?: string
  checklist?: readonly string[]
  isContentDiagram?: boolean
  isOnPageExample?: boolean
}[] = [
  {
    h3: 'Technical SEO',
    bullets: [
      'Site architecture and crawlability tuned for large listing and neighborhood footprints',
      'Core Web Vitals optimization so luxury media does not tank experience scores',
      'Schema markup (LocalBusiness, Service, Offer, FAQ) aligned to eligible rich results',
    ],
    checklist: [
      'Crawl budget & index coverage review',
      'Canonicals, redirects, and parameter hygiene',
      'XML sitemaps & internal link graph',
      'Mobile usability & CLS/LCP/INP checks',
      'Structured data validation',
    ],
    image: '/images/EaganCaseStudy/GoogleSearchConsole.png',
    imageAlt: 'Technical SEO audit signals — Search Console visibility and indexation',
  },
  {
    h3: 'On-Page Optimization',
    bullets: [
      'Keyword research and targeting mapped to buyer intent—not generic volume lists',
      'Content optimization for headings, entities, and internal links',
      'Meta tags and structured data that match how luxury shoppers actually search',
    ],
    isOnPageExample: true,
    image: '/images/landing/google-general/03-semrush-ranking.png',
    imageAlt: 'SEO ranking and visibility example — competitive keyword performance',
  },
  {
    h3: 'Content Strategy',
    bullets: [
      'Neighborhood landing pages with unique proof—not duplicate city templates',
      'Market reports and guides that earn links and support long-tail demand',
      'Editorial calendar tied to inventory, seasonality, and search gaps',
    ],
    isContentDiagram: true,
  },
];

const PROCESS_PHASES = [
  {
    title: 'Audit & Strategy',
    description:
      'Competitive set, keyword universe, technical debt, and content gaps—prioritized into a roadmap you can defend to leadership.',
  },
  {
    title: 'Technical Foundation',
    description:
      'Crawl clarity, speed, schema, and indexation fixes that remove friction before we scale content.',
  },
  {
    title: 'Content & Optimization',
    description:
      'On-page upgrades, neighborhood and listing support pages, and internal linking that compounds topical authority.',
  },
  {
    title: 'Measurement & Iteration',
    description:
      'Dashboards, Search Console/GSC reviews, and refinement loops tied to leads and revenue—not impressions alone.',
  },
] as const;

const PROCESS_SHORT = ['Audit & strategy', 'Technical foundation', 'Content & optimization', 'Measurement'] as const;

const CASE_STUDIES = [
  {
    id: 'michael-seo-transformation',
    metric: '21× search impressions in 7.5 weeks',
    focus: 'Technical foundation luxury buyers never see',
    title: "Michael's SEO transformation",
    description:
      'From an abandoned IDX template to a fast, schema-aware build—documented impression growth and organic session lift while preserving a premium brand experience for multimillion-dollar clients.',
    image: '/images/MichealTraffic.png',
    imageRight: false,
  },
  {
    id: 'marquis-farwell-group',
    metric: 'Consistent #1 rankings in target neighborhoods',
    focus: 'Content strategy driving buyer inquiries',
    title: 'Marquis + Farwell organic growth',
    description:
      'Sonoma County visibility rebuilt with topical depth and disciplined local signals—daily organic clicks grew from 2 to 38 with qualified buyer conversations originating from search.',
    image: '/images/MarquisFarwellGoogleSearchConsole.png',
    imageRight: true,
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
    subtitle: 'Contact us about your market →',
  },
];

function PaidVsSeoVsIntegratedChart() {
  const rows = [
    { label: 'Buyer intent', paid: 'High (paid clicks)', seo: 'High (organic clicks)', integrated: 'Highest (blended funnel)' },
    { label: 'Time to traction', paid: 'Days', seo: 'Weeks–quarters', integrated: 'Immediate + compounding' },
    { label: 'Sustainability', paid: 'Spend-dependent', seo: 'Equity-building', integrated: 'Balanced portfolio' },
    { label: 'SERP real estate', paid: 'Ads slots', seo: 'Organic + rich results', integrated: 'Dominant shelf space' },
  ] as const;
  return (
    <div className="overflow-x-auto border border-[var(--color-ink-200)] bg-white">
      <table className="w-full min-w-[640px] text-left text-sm font-serif">
        <caption className="sr-only">Comparison of paid only, SEO only, and integrated approach</caption>
        <thead>
          <tr className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
            <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs w-[22%]" />
            <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs">
              Paid only
            </th>
            <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs">
              SEO only
            </th>
            <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs border-l-2 border-[var(--color-off-black)]">
              Integrated approach
            </th>
          </tr>
        </thead>
        <tbody className="text-[var(--color-ink-300)]">
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-[var(--color-ink-200)] last:border-0">
              <th scope="row" className="p-4 text-xs uppercase tracking-[0.15em] text-[var(--color-ink-400)] font-normal align-top">
                {row.label}
              </th>
              <td className="p-4 align-top">{row.paid}</td>
              <td className="p-4 align-top">{row.seo}</td>
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

function ContentCalendarDiagram() {
  const weeks = ['W1', 'W2', 'W3', 'W4'];
  const rows = ['Neighborhood pillar', 'Market insight', 'Listing support', 'FAQ / schema refresh'];
  return (
    <div
      className="border border-[var(--color-ink-200)] bg-white p-4 sm:p-6 overflow-x-auto"
      aria-label="Example editorial calendar for SEO content"
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-4 text-center">
        Content strategy calendar (example cadence)
      </p>
      <table className="w-full min-w-[480px] text-xs font-serif border-collapse">
        <thead>
          <tr>
            <th className="border border-[var(--color-ink-200)] p-2 text-left text-[var(--color-ink-400)] font-normal">
              Theme
            </th>
            {weeks.map((w) => (
              <th key={w} className="border border-[var(--color-ink-200)] p-2 text-center text-[var(--color-off-black)] font-light">
                {w}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              <th scope="row" className="border border-[var(--color-ink-200)] p-2 text-left font-light text-[var(--color-off-black)]">
                {row}
              </th>
              {weeks.map((w) => (
                <td key={w} className="border border-[var(--color-ink-200)] p-2 text-center text-[var(--color-ink-300)]">
                  {w === 'W2' && row === 'Market insight' ? '●' : w === 'W4' && row === 'FAQ / schema refresh' ? '●' : '○'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MetricsBarsVisualization() {
  const bars = [
    { label: 'Traffic lift (avg.)', value: '300%+', width: '92%' },
    { label: 'Local rankings', value: '#1 competitive', width: '88%' },
    { label: 'Organic lead volume', value: '2–3×', width: '85%' },
  ] as const;
  return (
    <div className="border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-8 md:p-10 max-w-3xl mx-auto" aria-label="SEO performance metrics visualization">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-8 text-center">
        Documented program benchmarks
      </p>
      <div className="space-y-6">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="flex justify-between text-sm font-serif text-[var(--color-off-black)] mb-2">
              <span>{b.label}</span>
              <span className="text-[var(--color-trust)]">{b.value}</span>
            </div>
            <div className="h-3 bg-[var(--color-ink-200)] rounded-sm overflow-hidden">
              <div
                className="h-full bg-[var(--color-off-black)] rounded-sm transition-all"
                style={{ width: b.width }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SEOOptimizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/seo-optimization">
        <div className="min-h-screen bg-white">
          {/* Hero */}
          <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-400)] font-serif block mb-4">
                    SEO optimization for real estate
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight mb-6">
                    SEO That Compounds Into Organic Demand
                  </h1>
                  <p className="text-lg md:text-xl text-[var(--color-ink-300)] font-serif leading-relaxed mb-8 max-w-xl">
                    We architect search systems that surface your listings, establish authority in competitive
                    neighborhoods, and compound organic traffic month after month.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/calendar"
                      className="inline-flex justify-center px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-85 transition-opacity text-center"
                    >
                      Schedule an SEO Strategy Call
                    </Link>
                    <a
                      href="#contact"
                      className="inline-flex justify-center px-8 py-4 border border-[var(--color-off-black)] text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-colors text-center"
                    >
                      Get a Free SEO Audit
                    </a>
                  </div>
                </div>
                <div className="relative aspect-[4/3] max-h-[420px] rounded-sm overflow-hidden border border-[var(--color-ink-200)] shadow-sm bg-[var(--color-ink-200)]">
                  <Image
                    src="/images/MichealTraffic.png"
                    alt="SEO results dashboard showing impressions, traffic, and ranking growth"
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

          {/* Why SEO */}
          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="why-seo">
            <div className="container-max">
              <div className="max-w-3xl mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
                  Why SEO matters for luxury real estate
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Luxury buyers still begin with search—often before they tell an agent what they want. Organic captures
                  that high-intent window, compounds authority over time, and pairs with paid to own more shelf space on
                  the SERP.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14 max-w-4xl">
                {[
                  'Luxury buyers start with search—even off-market curiosity routes through Google',
                  'Organic traffic is the highest-intent traffic when pages match neighborhood and product truth',
                  'Authority compounds: entities, links, and helpful content reinforce one another',
                  'SEO + Google Ads creates market dominance across paid and earned placements',
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
                Paid only vs. SEO only vs. integrated approach
              </p>
              <PaidVsSeoVsIntegratedChart />
            </div>
          </section>

          {/* Framework */}
          <section className="py-16 md:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="framework">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                Our SEO Framework
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-16 md:mb-24">
                Technical foundations, on-page precision, and editorial systems—built so luxury brands earn trust from
                Google and from buyers.
              </p>

              <div className="space-y-20 md:space-y-28">
                {FRAMEWORK_BLOCKS.map((block, i) => (
                  <article key={block.h3} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                      <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">
                        {block.h3}
                      </h3>
                      <ul className="space-y-3 mb-8">
                        {block.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                            <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      {block.checklist ? (
                        <div className="border border-[var(--color-ink-200)] bg-white p-6">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-4">
                            Technical audit checklist (sample)
                          </p>
                          <ul className="space-y-2">
                            {block.checklist.map((c) => (
                              <li key={c} className="flex gap-2 text-sm text-[var(--color-ink-300)] font-serif">
                                <span className="text-[var(--color-trust)]">✓</span>
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                    <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                      {block.isContentDiagram ? (
                        <ContentCalendarDiagram />
                      ) : block.isOnPageExample && block.image ? (
                        <div className="space-y-4">
                          <div className="relative min-h-[220px] sm:min-h-[280px] border border-[var(--color-ink-200)] overflow-hidden bg-white">
                            <Image
                              src="/images/whitelabeledcase/beforeNonBrandedGSCCS.webp"
                              alt="Before — under-optimized search presence"
                              fill
                              className="object-contain object-center p-3"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          </div>
                          <div className="relative min-h-[220px] sm:min-h-[280px] border border-[var(--color-off-black)] overflow-hidden bg-white">
                            <Image
                              src={block.image}
                              alt={block.imageAlt ?? 'After — improved rankings and visibility'}
                              fill
                              className="object-contain object-center p-3"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          </div>
                          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] font-serif text-center">
                            Optimization example — before / after signals
                          </p>
                        </div>
                      ) : block.image ? (
                        <div className="relative min-h-[260px] sm:min-h-[320px] border border-[var(--color-ink-200)] overflow-hidden bg-white">
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

          {/* Real results */}
          <section className="py-16 md:py-28 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="results">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-10 text-center">
                Real Results
              </h2>
              <ServiceStats
                heading=""
                stats={[
                  {
                    value: '300%+',
                    label: 'Traffic lift',
                    description: 'Average organic growth in the first 90 days across documented programs.',
                  },
                  {
                    value: '#1',
                    label: 'Local rankings',
                    description: 'Competitive neighborhood and intent keywords that convert to tours.',
                  },
                  {
                    value: '2–3×',
                    label: 'Lead volume',
                    description: 'Organic inquiry lift for luxury teams after technical + content alignment.',
                  },
                ]}
              />
              <div className="mt-14 md:mt-20">
                <MetricsBarsVisualization />
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
                Four phases from audit through iteration—so technical, content, and reporting stay tied to pipeline
                outcomes.
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

          {/* Internal links */}
          <section className="py-16 md:py-20 bg-white border-b border-[var(--color-ink-200)]">
            <div className="container-max max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-6">
                How SEO connects to the rest of your growth stack
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.85]">
                Pair organic programs with{' '}
                <Link href="/google-ads-management" className="underline hover:opacity-70">
                  Google Ads management
                </Link>
                , full-funnel{' '}
                <Link href="/real-estate-lead-generation" className="underline hover:opacity-70">
                  real estate lead generation
                </Link>
                , transparent{' '}
                <Link href="/analytics-reporting" className="underline hover:opacity-70">
                  analytics and reporting
                </Link>
                , flagship{' '}
                <Link href="/website-and-seo" className="underline hover:opacity-70">
                  website design
                </Link>
                , strategic{' '}
                <Link href="/seo-consulting" className="underline hover:opacity-70">
                  SEO consulting
                </Link>
                , and vertical{' '}
                <Link href="/luxury-development-marketing" className="underline hover:opacity-70">
                  luxury development marketing
                </Link>{' '}
                when inventory spans presale through sellout.
              </p>
            </div>
          </section>

          {/* Case studies */}
          <section className="py-16 md:py-24 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="case-studies">
            <div className="container-max">
              <div className="max-w-2xl mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
                  SEO Success Stories
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Documented outcomes—technical rebuilds and content systems that luxury buyers discover before they ever
                  pick up the phone.
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
                        alt={`${study.title} — SEO case study`}
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
          <section className="pt-16 pb-0 md:pt-20 bg-white border-y border-[var(--color-ink-200)]" id="reviews">
            <div className="container-max mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4">
                What SEO clients say
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl">
                Teams from Sonoma to Lake Geneva on weekly discipline, clarity, and results—each card shows a 5-star
                experience pattern from written reviews.
              </p>
            </div>
            <Testimonials omitHeading showStarRating />
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

          <ServiceCities
            heading="Browse markets we cover."
            description="Choose a metro to jump to how we approach SEO there—one authoritative page instead of duplicate city templates."
            cities={topCities}
          />

          <ServiceMarketsSection variant="seo" />

          <div id="contact">
            <ContactForm />
          </div>
        </div>
      </SEOWrapper>
    </>
  );
}
