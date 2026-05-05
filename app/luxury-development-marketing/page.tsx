import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import SEOWrapper from '@/components/SEOWrapper';

const BASE = 'https://www.dmrmedia.org';

export const metadata: Metadata = {
  title: 'Luxury Development Marketing | DMR Media',
  description:
    'End-to-end marketing for luxury developments. From presale positioning through sellout, combining brand, website, SEO, and paid media.',
  keywords: [
    'luxury development marketing',
    'development marketing services',
    'new construction marketing',
    'presale marketing',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/luxury-development-marketing`,
  },
  openGraph: {
    title: 'Luxury Development Marketing | DMR Media',
    description:
      'End-to-end marketing for luxury developments. From presale positioning through sellout, combining brand, website, SEO, and paid media.',
    url: `${BASE}/luxury-development-marketing`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Development Marketing | DMR Media',
    description:
      'End-to-end marketing for luxury developments. From presale positioning through sellout, combining brand, website, SEO, and paid media.',
  },
};

const FAQ_ITEMS = [
  {
    question: 'When should we start development marketing?',
    answer:
      'As soon as positioning, renders, and sales narrative can support a credible gallery—often before the public sales program opens. Early SEO entity work, stakeholder messaging, and redirect planning prevent later launches from resetting authority when phases drop.',
  },
  {
    question: 'How do you handle phase releases?',
    answer:
      'URLs, navigation, and sitemaps are structured so each tower or plan release adds crawl depth instead of duplicate thin routes. Phase pages inherit internal links from the project hub, availability modules update without breaking paths, and analytics tag each phase for pacing reviews.',
  },
  {
    question: 'Can you integrate with our sales office?',
    answer:
      'Yes—forms, tour scheduling, broker attribution, and CRM or Salesforce/HubSpot handoffs within your compliance rules. We QA routing before public launch so on-site and digital channels report the same lead truth.',
  },
  {
    question: 'What about pre-construction buyer concerns?',
    answer:
      'Transparency wins: realistic timelines, financing disclaimers where counsel requires them, progress cadence, and clear next steps after registration. The digital experience should answer fear-of-the-unknown before sales repeats it on the phone.',
  },
  {
    question: 'How do we measure success?',
    answer:
      'Qualified registrations, tour requests, cost per qualified lead, organic visibility on project- and plan-level queries, and assisted revenue where CRM allows. Dashboards tie to analytics and reporting so leadership sees the funnel the site and media actually feed.',
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
    title: 'Presale Strategy & Positioning',
    description:
      'Stakeholder map, competitive towers, pricing narrative, and compliance—locked before IA so creative and engineering are not reworked mid-build.',
  },
  {
    title: 'Website & Inventory Setup',
    description:
      'Gallery UX, phased inventory modules, plan comparison, and performance budgets enforced before content scales.',
  },
  {
    title: 'SEO & Content Strategy',
    description:
      'Development-specific keyword clusters, phase-based content, and local authority signals that compound across releases.',
  },
  {
    title: 'Google Ads Launch',
    description:
      'Phase-aware paid search and retargeting with pacing tied to absorption targets—not generic always-on spend.',
  },
  {
    title: 'Growth & Optimization',
    description:
      'Weekly reviews of registrations, tour quality, and channel mix; scale winners, cut waste, align with sell-through.',
  },
] as const;

const PROCESS_SHORT = ['Presale strategy', 'Site & inventory', 'SEO & content', 'Ads launch', 'Growth'] as const;

const CASE_STUDIES = [
  {
    id: 'eagan-luxury-real-estate',
    metric: '$11M+ closed volume (Q1 2026)',
    focus: 'Unified flagship after fragmented legacy sites',
    title: 'Eagan Luxury — Tampa Bay',
    description:
      'Consolidation, technical SEO, and paid demand after multiple community sites diluted authority—maps to how we stabilize digital before phased inventory accelerates.',
    image: '/images/screencapture-eaganluxury-2025-12-17-21_25_49.png',
    imageRight: true,
  },
  {
    id: 'jade-legendary-real-estate',
    metric: '3× qualified leads in 90 days',
    focus: 'Narrative + automation under one spine',
    title: 'Legendary Real Estate — Lake Geneva',
    description:
      'Dozens of assets reorganized with CRM clarity—relevant when presale marketing must feed sales office follow-up without dropping context.',
    image: '/images/JadeCRM.png',
    imageRight: false,
  },
  {
    id: 'marquis-farwell-group',
    metric: '19× daily organic clicks (2 → 38)',
    focus: 'County-level authority for luxury competition',
    title: 'Marquis + Farwell — Sonoma County',
    description:
      'Search and GBP systems that captured high-intent discovery—parallel to how developments compete for the same attention as established luxury brokerages.',
    image: '/images/MarquisFarwellGoogleSearchConsole.png',
    imageRight: true,
  },
] as const;

function CrmLeadFlowMini() {
  const steps = ['Capture', 'Route', 'Qualify', 'Sequence', 'Sales office'] as const;
  return (
    <div className="border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6 flex flex-wrap justify-center gap-2" aria-label="Lead management flow">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.15em] font-serif text-[var(--color-off-black)] border border-[var(--color-off-black)] bg-white px-2 py-2">
            {s}
          </span>
          {i < steps.length - 1 ? <span className="text-[var(--color-ink-300)] text-xs">→</span> : null}
        </div>
      ))}
    </div>
  );
}

export default function LuxuryDevelopmentMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/luxury-development-marketing">
        <div className="min-h-screen bg-white">
          {/* Hero */}
          <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-400)] font-serif block mb-4">
                    Luxury development marketing
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight mb-6">
                    Development Marketing That Sells Phases Before Completion
                  </h1>
                  <p className="text-lg md:text-xl text-[var(--color-ink-300)] font-serif leading-relaxed mb-8 max-w-xl">
                    From presale positioning through sellout, we orchestrate brand narrative, website experience, search
                    visibility, and paid demand to accelerate absorption and close deals faster.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/calendar"
                      className="inline-flex justify-center px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-85 transition-opacity text-center"
                    >
                      Schedule a Development Strategy Call
                    </Link>
                    <Link
                      href="/websites-for-new-developments"
                      className="inline-flex justify-center px-8 py-4 border border-[var(--color-off-black)] text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-colors text-center"
                    >
                      View Development Portfolio
                    </Link>
                  </div>
                </div>
                <div className="relative aspect-[16/10] max-h-[400px] rounded-sm overflow-hidden border border-[var(--color-ink-200)] shadow-md bg-[var(--color-ink-200)]">
                  <Image
                    src="/images/screencapture-eaganluxury-2025-12-17-21_25_49.png"
                    alt="Luxury development marketing campaign overview — flagship website and brand presence"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <ClientLogosSlider />

          {/* Why different */}
          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="why-different">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6 max-w-3xl">
                Why development marketing is different
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-3xl mb-10">
                Trophy inventory behaves nothing like resale: every release is finite, every buyer compares you to
                global alternatives, and every month of drift has a carrying cost.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14 max-w-4xl">
                {[
                  'Long sales cycles require nurturing—retargeting, content depth, and CRM velocity must match.',
                  'Multiple stakeholders—capital partners, sales, creative, legal—need one source of truth in reporting.',
                  'Phased inventory and pricing changes demand URL discipline and analytics that do not break between drops.',
                  'Pre-construction buyer psychology rewards transparency, proof, and gallery-grade UX—not hype.',
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

          {/* Complete solution */}
          <section className="py-16 md:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="solution">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                Complete Development Solution
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-16 md:mb-24">
                Five integrated layers—so brand, digital, search, paid, and pipeline reinforce the same absorption plan.
              </p>

              <div className="space-y-20 md:space-y-28">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">Presale positioning</h3>
                    <ul className="space-y-3">
                      {[
                        'Brand narrative and vision anchored to credible renders and proof.',
                        'Architect and design storytelling with performance-aware media.',
                        'Neighborhood context—schools, commute, culture—where buyers validate price.',
                      ].map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                          <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative min-h-[280px] sm:min-h-[320px] border border-[var(--color-ink-200)] overflow-hidden bg-white">
                    <Image
                      src="/images/propertyWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-25-19_45_37.png"
                      alt="Presale positioning example — luxury villa website with cinematic storytelling"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div className="lg:order-2">
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">Development website</h3>
                    <ul className="space-y-3">
                      {[
                        'Phased inventory management—URLs and internal links that scale with each release.',
                        'Dynamic pricing and availability patterns without sacrificing crawl clarity.',
                        'Buyer journey optimization from first visit to tour or broker handoff.',
                      ].map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                          <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:order-1 relative min-h-[280px] sm:min-h-[320px] border border-[var(--color-ink-200)] overflow-hidden bg-white">
                    <Image
                      src="/images/ClientWebsiteImages/screencapture-obsidiandenver-3227-w-20th-ave-denver-co-80211-2026-03-29-19_50_09.png"
                      alt="Development website example — luxury listing and project presentation"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">Search visibility (SEO)</h3>
                    <ul className="space-y-3">
                      {[
                        'Development-specific keywords—project name, plan types, micro-neighborhoods.',
                        'Phase-based content that earns depth without cannibalizing the hub.',
                        'Local authority building aligned to how brokers and buyers actually search.',
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
                      alt="SEO example — organic search performance for a luxury market"
                      fill
                      className="object-contain object-center p-3 sm:p-4"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div className="lg:order-2">
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">Paid demand (Google Ads)</h3>
                    <ul className="space-y-3">
                      {[
                        'Phase-specific campaigns aligned to inventory drops and sales events.',
                        'Buyer targeting—intent, geo, and exclusions that protect luxury CPL.',
                        'Retargeting and nurturing for long-cycle compare-and-tour behavior.',
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
                      alt="Google Ads example — paid demand for luxury real estate"
                      fill
                      className="object-contain object-center p-3 sm:p-4"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">Lead management</h3>
                    <ul className="space-y-3 mb-8">
                      {[
                        'CRM integration so registrations, tours, and broker leads share definitions.',
                        'Lead qualification rules that respect compliance and sales capacity.',
                        'Automated follow-up that preserves tone for luxury buyers.',
                      ].map((b) => (
                        <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                          <span className="text-[var(--color-off-black)] mt-0.5">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <CrmLeadFlowMini />
                  </div>
                  <div className="relative min-h-[280px] sm:min-h-[320px] border border-[var(--color-ink-200)] overflow-hidden bg-white">
                    <Image
                      src="/images/JadeCRM.png"
                      alt="CRM example — pipeline and lead management for luxury sales teams"
                      fill
                      className="object-contain object-center p-3 sm:p-4"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-16 md:py-28 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="process">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                Our Process
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-14 md:mb-20">
                Five phases from presale strategy through growth—so each inventory drop strengthens the last.
              </p>

              <div className="hidden xl:block mb-16 overflow-x-auto">
                <div className="relative flex justify-between items-start min-w-[1000px] max-w-5xl mx-auto px-2">
                  <div className="absolute top-5 left-[4%] right-[4%] h-px bg-[var(--color-ink-200)] z-0" aria-hidden />
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                How development marketing connects to execution
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.85]">
                Gallery and inventory live on{' '}
                <Link href="/websites-for-new-developments" className="underline hover:opacity-70">
                  development websites
                </Link>
                . Discovery compounds with{' '}
                <Link href="/seo-optimization" className="underline hover:opacity-70">
                  SEO optimization
                </Link>
                , demand with{' '}
                <Link href="/google-ads-management" className="underline hover:opacity-70">
                  Google Ads management
                </Link>
                , pipeline systems with{' '}
                <Link href="/real-estate-lead-generation" className="underline hover:opacity-70">
                  real estate lead generation
                </Link>
                , scorecards with{' '}
                <Link href="/analytics-reporting" className="underline hover:opacity-70">
                  analytics and reporting
                </Link>
                , and listing bursts with{' '}
                <Link href="/property-marketing" className="underline hover:opacity-70">
                  property marketing
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Case studies */}
          <section className="py-16 md:py-24 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="stories">
            <div className="container-max">
              <div className="max-w-2xl mb-16 md:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
                  Development Marketing Success Stories
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Published engagements where brand, search, paid, and CRM discipline mirror what sophisticated
                  developments require across presale and absorption.
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
                        alt={`${study.title} — development marketing results`}
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
          <section className="py-8 md:py-12 bg-white border-b border-[var(--color-ink-200)]">
            <div className="container-max">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-10 md:mb-12">
                What luxury marketing partners say
              </h2>
              <Testimonials omitHeading showStarRating visibleIds={[3, 7, 'gregg-rossman']} />
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-24 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="faq">
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
