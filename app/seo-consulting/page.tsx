import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import SEOWrapper from '@/components/SEOWrapper';

const BASE = 'https://www.dmrmedia.org';

export const metadata: Metadata = {
  title: 'SEO Consulting for Real Estate | DMR Media',
  description:
    'Strategic SEO consulting for real estate teams and developers. Audit, strategy, and implementation roadmaps without ongoing management.',
  keywords: [
    'SEO consulting for real estate',
    'real estate SEO strategy',
    'SEO audit for real estate',
    'SEO consulting services',
    'real estate SEO roadmap',
  ].join(', '),
  alternates: {
    canonical: `${BASE}/seo-consulting`,
  },
  openGraph: {
    title: 'SEO Consulting for Real Estate | DMR Media',
    description:
      'Strategic SEO consulting for real estate teams and developers. Audit, strategy, and implementation roadmaps without ongoing management.',
    url: `${BASE}/seo-consulting`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Consulting for Real Estate | DMR Media',
    description:
      'Documented SEO roadmaps, competitive analysis, and implementation strategy for luxury real estate teams.',
  },
};

const FAQ_ITEMS = [
  {
    question: 'How long does the consulting engagement take?',
    answer:
      'Most engagements run about four to five weeks end-to-end: roughly two weeks for discovery and audit, one to two weeks for strategy development, and one week for delivery and kickoff. Larger portfolios or multi-market teams can extend discovery slightly—we scope that up front.',
  },
  {
    question: 'Can I upgrade to full SEO management later?',
    answer:
      'Yes. The roadmap is written so our implementation team—or yours—can execute cleanly. Many clients begin with consulting to align stakeholders, then convert to ongoing SEO optimization if you want DMR to run execution and iteration.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Consulting includes a kickoff and optional quarterly check-ins. If you want hands-on optimization, content production, or weekly reporting, we scope that as managed SEO separate from the consulting package.',
  },
  {
    question: "What if I don't have a website yet?",
    answer:
      'We can still audit competitive SERPs, entity opportunities, and content requirements—and produce IA and technical specifications for your build partner. Early strategy prevents expensive rework after launch.',
  },
  {
    question: 'How much does SEO consulting cost?',
    answer:
      'Investment scales with site size, number of markets, and depth of competitive analysis. After a short fit call, we provide a fixed-fee proposal with deliverable page counts and workshop time—no surprise hourly billing.',
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

const PACKAGE_BLOCKS = [
  {
    h3: 'SEO Audit',
    bullets: [
      'Technical audit: crawl, indexation, Core Web Vitals, schema, and internal links',
      'Competitive analysis: who owns the SERPs you need and what gaps they leave',
      'Keyword research mapped to intent—not generic volume spreadsheets',
    ],
    image: '/images/EaganCaseStudy/GoogleSearchConsole.png',
    imageAlt: 'Sample SEO audit signals — Search Console coverage and visibility',
  },
  {
    h3: 'Strategy Document',
    bullets: [
      'Roadmap and priorities sequenced for impact vs. effort',
      'Editorial and content calendar aligned to inventory and seasonality',
      'Implementation timeline your dev and marketing teams can actually schedule',
    ],
    image: '/images/RickAfter.png',
    imageAlt: 'Strategy deliverable example — site and content transformation narrative',
  },
  {
    h3: 'Implementation Support',
    bullets: [
      'Kickoff workshop with your team to translate findings into tickets',
      'Quarterly check-ins (optional) to review progress against the roadmap',
      'Optional: ongoing optimization through our managed SEO program',
    ],
    image: '/images/whitelabeledcase/semrushCS.webp',
    imageAlt: 'Ongoing visibility tracking — competitive and keyword monitoring',
  },
] as const;

const PROCESS_PHASES = [
  {
    title: 'Discovery & Audit',
    duration: '2 weeks',
    description:
      'Stakeholder interviews, analytics review, full technical crawl, and competitive set definition—so findings are tied to revenue, not vanity metrics.',
  },
  {
    title: 'Strategy Development',
    duration: '1–2 weeks',
    description:
      'Keyword architecture, content plan, and prioritized technical fixes translated into a board-ready narrative.',
  },
  {
    title: 'Delivery & Kickoff',
    duration: '1 week',
    description:
      'Workshop delivery, Q&A with dev and creative, and handoff package so execution starts without ambiguity.',
  },
] as const;

const DELIVERABLES = [
  'SEO Audit Report (20–30 pages)',
  'Competitive Analysis (10–15 pages)',
  'Keyword Research & Targeting (5–10 pages)',
  'Content Strategy & Calendar (12-month)',
  'Implementation Roadmap (prioritized tasks with owners)',
] as const;

function FullVsConsultingVsDiy() {
  const rows = [
    {
      label: 'Best for',
      full: 'Teams that want DMR to run execution',
      consulting: 'Teams with capacity who need a plan',
      diy: 'Founders testing channels alone',
    },
    {
      label: 'Output',
      full: 'Ongoing optimization + reporting',
      consulting: 'Fixed deliverables + roadmap',
      diy: 'Ad-hoc tactics, high rework risk',
    },
    {
      label: 'Speed to clarity',
      full: 'Fast once engaged',
      consulting: 'Fastest path to a documented plan',
      diy: 'Slow without senior SEO judgment',
    },
    {
      label: 'Contract shape',
      full: 'Retainer',
      consulting: 'Fixed-scope project',
      diy: 'Internal time only',
    },
  ] as const;
  return (
    <div className="overflow-x-auto border border-[var(--color-ink-200)] bg-white">
      <table className="w-full min-w-[640px] text-left text-sm font-serif">
        <caption className="sr-only">Full SEO service versus SEO consulting versus DIY</caption>
        <thead>
          <tr className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
            <th className="p-4 w-[20%]" />
            <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs">
              Full SEO service
            </th>
            <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs border-l-2 border-[var(--color-off-black)] bg-white">
              SEO consulting
            </th>
            <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs">DIY</th>
          </tr>
        </thead>
        <tbody className="text-[var(--color-ink-300)]">
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-[var(--color-ink-200)] last:border-0">
              <th scope="row" className="p-4 text-xs uppercase tracking-[0.15em] text-[var(--color-ink-400)] font-normal align-top">
                {row.label}
              </th>
              <td className="p-4 align-top">{row.full}</td>
              <td className="p-4 align-top border-l-2 border-[var(--color-off-black)] bg-[var(--surface-base)]/60 text-[var(--color-off-black)]">
                {row.consulting}
              </td>
              <td className="p-4 align-top">{row.diy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PhaseTimeline() {
  return (
    <div className="hidden md:block mb-14 max-w-3xl mx-auto">
      <div className="relative flex justify-between items-start px-2">
        <div className="absolute top-5 left-[12%] right-[12%] h-px bg-[var(--color-ink-200)] z-0" aria-hidden />
        {PROCESS_PHASES.map((phase, idx) => (
          <div key={phase.title} className="relative z-10 flex flex-col items-center text-center w-[30%]">
            <div className="w-10 h-10 rounded-full bg-[var(--color-off-black)] text-white text-xs font-serif flex items-center justify-center mb-3">
              {idx + 1}
            </div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] font-serif mb-1">Phase {idx + 1}</p>
            <p className="text-xs font-serif font-light text-[var(--color-off-black)] leading-snug mb-1">{phase.title}</p>
            <p className="text-[10px] text-[var(--color-trust)] font-serif">{phase.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SeoConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/seo-consulting">
        <div className="min-h-screen bg-white">
          <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-400)] font-serif block mb-4">
                    SEO consulting for real estate
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight mb-6">
                    SEO Strategy Without the Long-Term Contract
                  </h1>
                  <p className="text-lg md:text-xl text-[var(--color-ink-300)] font-serif leading-relaxed mb-8 max-w-xl">
                    Get a documented SEO roadmap, competitive analysis, and implementation strategy—then execute it
                    yourself or with your existing team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#contact"
                      className="inline-flex justify-center px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-85 transition-opacity text-center"
                    >
                      Get Your SEO Strategy
                    </a>
                    <Link
                      href="/calendar"
                      className="inline-flex justify-center px-8 py-4 border border-[var(--color-off-black)] text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-colors text-center"
                    >
                      Schedule a Consultation
                    </Link>
                  </div>
                </div>
                <div className="relative aspect-[4/3] max-h-[400px] rounded-sm overflow-hidden border border-[var(--color-ink-200)] shadow-sm bg-white">
                  <Image
                    src="/images/landing/google-general/03-semrush-ranking.png"
                    alt="SEO strategy and rankings research on desktop — consulting deliverable style"
                    fill
                    className="object-contain object-center p-4"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <ClientLogosSlider />

          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="when">
            <div className="container-max">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
                  When to choose SEO consulting
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Consulting is the right lever when you need senior judgment and a defensible plan—not another monthly
                  report no one reads.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14 max-w-4xl">
                {[
                  'You have an in-house team but need strategy, priorities, and QA on their roadmap',
                  'You want to audit before building or relaunching a website so scope is grounded in search reality',
                  'You need a documented plan for your board, capital partner, or brokerage leadership',
                  'You are evaluating SEO agencies and want an independent baseline before signing a retainer',
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
                Full SEO service vs. SEO consulting vs. DIY
              </p>
              <FullVsConsultingVsDiy />
            </div>
          </section>

          <section className="py-16 md:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="package">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                The SEO Consulting Package
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-16 md:mb-24">
                Fixed deliverables, fixed timeline, and a workshop handoff—so your team can execute with confidence.
              </p>

              <div className="space-y-20 md:space-y-28">
                {PACKAGE_BLOCKS.map((block, i) => (
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
                    <div className={`relative min-h-[260px] sm:min-h-[300px] border border-[var(--color-ink-200)] overflow-hidden bg-white ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <Image
                        src={block.image}
                        alt={block.imageAlt}
                        fill
                        className="object-contain object-center p-4 sm:p-6"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-28 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="process">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                The Consulting Process
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-12 md:mb-16">
                Three phases from discovery through handoff—typical elapsed time four to five weeks.
              </p>
              <PhaseTimeline />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                {PROCESS_PHASES.map((phase, idx) => (
                  <article
                    key={phase.title}
                    className={`border-t border-[var(--color-ink-200)] pt-8 md:border-t-0 md:pt-0 md:pl-8 ${
                      idx > 0 ? 'md:border-l md:border-[var(--color-ink-200)]' : ''
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-2">
                      Phase {idx + 1} · {phase.duration}
                    </p>
                    <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-3">{phase.title}</h3>
                    <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed">{phase.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="deliverables">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6 max-w-3xl">
                Deliverables
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-10">
                Everything below ships as branded PDFs / decks plus working spreadsheets where noted—ready for legal
                review and dev ticketing.
              </p>
              <ul className="max-w-2xl space-y-4 mb-12">
                {DELIVERABLES.map((d) => (
                  <li key={d} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif border-b border-[var(--color-ink-200)] pb-4">
                    <span className="text-[var(--color-trust)]">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4 text-center">
                Deliverables showcase
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
                {[
                  { src: '/images/EaganCaseStudy/GoogleSearchConsole.png', alt: 'Audit report sample — Search Console' },
                  { src: '/images/MichealTraffic.png', alt: 'Analytics sample — traffic growth' },
                  { src: '/images/landing/google-general/04-google-ranking.png', alt: 'Rankings sample — Google SERP visibility' },
                  { src: '/images/RickAfter.png', alt: 'Strategy narrative sample — site transformation' },
                ].map((img) => (
                  <div key={img.src} className="relative aspect-[4/3] border border-[var(--color-ink-200)] bg-white overflow-hidden">
                    <Image src={img.src} alt={img.alt} fill className="object-contain object-center p-2" sizes="(max-width:768px) 50vw, 25vw" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-white border-b border-[var(--color-ink-200)]">
            <div className="container-max max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-6">
                After the roadmap: how we plug in
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.85]">
                When you are ready for execution, our{' '}
                <Link href="/seo-optimization" className="underline hover:opacity-70">
                  SEO optimization
                </Link>{' '}
                program carries the roadmap forward; flagship{' '}
                <Link href="/website-and-seo" className="underline hover:opacity-70">
                  website design
                </Link>{' '}
                standards keep builds aligned with search;{' '}
                <Link href="/analytics-reporting" className="underline hover:opacity-70">
                  analytics and reporting
                </Link>{' '}
                prove lift; and{' '}
                <Link href="/google-ads-management" className="underline hover:opacity-70">
                  Google Ads management
                </Link>{' '}
                fills demand while organic compounds.
              </p>
            </div>
          </section>

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

          <div id="contact">
            <ContactForm />
          </div>
        </div>
      </SEOWrapper>
    </>
  );
}
