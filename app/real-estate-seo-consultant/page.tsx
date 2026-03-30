import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ServiceStats from '@/components/service/ServiceStats';
import ServiceProcess from '@/components/service/ServiceProcess';

export const metadata: Metadata = {
  title: 'Real Estate SEO Consultant | SEO Plans for Agents & Teams | DMR Media',
  description:
    'We create custom SEO plans for real estate agents and teams. Keyword strategy, content architecture, technical audits, and local search frameworks — built around your market and delivered as an actionable roadmap.',
  keywords:
    'real estate SEO consultant, real estate SEO plan, SEO strategy for real estate agents, real estate SEO consulting, local SEO strategy real estate, real estate search engine optimization consultant',
  alternates: {
    canonical: 'https://www.dmrmedia.org/real-estate-seo-consultant',
  },
  openGraph: {
    title: 'Real Estate SEO Consultant | SEO Plans for Agents & Teams | DMR Media',
    description:
      'We create custom SEO plans for real estate agents and teams. Keyword strategy, content architecture, and local search frameworks built around your market.',
    url: 'https://www.dmrmedia.org/real-estate-seo-consultant',
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate SEO Consultant | SEO Plans for Agents & Teams | DMR Media',
    description:
      'Custom SEO plans for real estate agents and teams. Keyword strategy, content architecture, and local search frameworks built around your market.',
  },
};

const WHAT_YOU_GET = [
  {
    id: 'keyword-strategy',
    label: 'Keyword Strategy',
    description:
      'A prioritized map of every keyword your market, niche, and buyer persona actually searches — ranked by opportunity, intent, and competition.',
    imageRight: false,
    image: '/images/MichealTraffic.png',
  },
  {
    id: 'content-architecture',
    label: 'Content Architecture',
    description:
      'A page-by-page blueprint for the content your site needs — neighborhood guides, listing pages, blog topics — structured to build topical authority and rank.',
    imageRight: true,
    image: '/images/RickAfter.png',
  },
  {
    id: 'technical-audit',
    label: 'Technical SEO Audit',
    description:
      'A full crawl of your site surfacing every technical issue holding your rankings back — site speed, crawlability, schema, Core Web Vitals, and more.',
    imageRight: false,
    image: '/images/whitelabeledcase/semrushCS.webp',
  },
];

export default function RealEstateSeoConsultantPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/videos/view-from-above-of-wealthy-neighborhood-on-bird-ke-2025-12-17-07-23-00-utc.mov"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                'linear-gradient(180deg, rgba(15,15,15,0.5) 0%, rgba(15,15,15,0.3) 40%, rgba(250,250,249,0.2) 70%, rgba(250,250,249,1) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full pt-24 pb-20 flex justify-center">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <span className="uppercase tracking-[0.2em] text-sm sm:text-base text-white font-serif block mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                Real Estate SEO Consulting
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                A clear SEO plan built for your real estate market.
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                We build the SEO roadmap. You execute with confidence — or hand it back to us.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs font-serif hover:opacity-85 transition-opacity duration-300"
                >
                  Request a Consultation
                </Link>
                <Link
                  href="/seo-optimization"
                  className="inline-flex items-center justify-center px-8 py-3 border border-white text-white uppercase tracking-[0.12em] text-xs font-serif hover:opacity-75 transition-opacity duration-300"
                >
                  View SEO Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientLogosSlider />

      <ServiceStats
        heading="What a focused SEO plan delivers."
        stats={[
          {
            value: '300%+',
            label: 'Traffic lift',
            description: 'Average organic growth in the first 90 days of execution.',
          },
          {
            value: '#1',
            label: 'Local rankings',
            description: 'For the neighborhood keywords that drive qualified leads.',
          },
          {
            value: '2-3x',
            label: 'Lead volume',
            description: 'Consistent lift across agents, teams, and luxury brokers.',
          },
        ]}
      />

      {/* What is an SEO Plan */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mb-20 md:mb-28">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif block mb-4">
              What we deliver
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
              An SEO plan isn&apos;t guesswork.<br />It&apos;s a blueprint.
            </h2>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
              Most real estate agents either skip SEO entirely or hand money to vendors who produce reports nobody reads. A DMR Media SEO plan is different — it&apos;s a market-specific, agent-specific document that tells you exactly what to build, what to write, and what to fix. Clear priorities. Measurable outcomes.
            </p>
          </div>

          <div className="space-y-0">
            {WHAT_YOU_GET.map((item) => (
              <article
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32 last:mb-0"
              >
                <div
                  className={`flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 ${
                    item.imageRight ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                    Included in your plan
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                    {item.label}
                  </h3>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                    {item.description}
                  </p>
                </div>
                <div
                  className={`relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 ${
                    item.imageRight ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.label} — real estate SEO consulting`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 md:py-24 bg-[var(--color-ink-100)]">
        <div className="container-max">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif block mb-4">
              Who this is for
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15]">
              Built for agents and teams who are serious about organic growth.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[var(--color-ink-200)]">
            {[
              {
                heading: 'Solo Agents',
                body: 'You want to rank in your market but don\'t know where to start. We give you a clear, prioritized roadmap — no jargon, just action.',
              },
              {
                heading: 'Teams & Groups',
                body: 'Your team has a site but it\'s not generating organic leads. We audit what exists and map every gap between where you are and where you need to be.',
              },
              {
                heading: 'Luxury & Niche Specialists',
                body: 'Your market is hyper-competitive. We build a differentiated content and technical strategy that positions you as the undisputed authority.',
              },
            ].map((item) => (
              <div key={item.heading} className="border-b md:border-b-0 md:border-r border-[var(--color-ink-200)] last:border-0 py-12 pr-0 md:pr-12 last:pr-0 md:pl-12 first:pl-0">
                <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                  {item.heading}
                </h3>
                <p className="text-[15px] text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess
        id="how-it-works"
        heading="How we build your SEO plan."
        description="A four-phase consulting process that produces a real, actionable document — not a slide deck full of generalities."
        steps={[
          {
            title: 'Discovery & Market Analysis',
            description:
              'We start by understanding your market, niche, competitor landscape, and current search footprint. We identify the gaps and opportunities specific to your geography and buyer profile.',
          },
          {
            title: 'Keyword & Intent Mapping',
            description:
              'We research and prioritize every keyword your ideal client searches — organized by intent (buyer, seller, neighborhood), competition level, and traffic potential.',
          },
          {
            title: 'Technical & Content Audit',
            description:
              'We crawl your existing site to surface technical issues, on-page gaps, and content opportunities. Every finding is ranked by impact so you know exactly what to fix first.',
          },
          {
            title: 'Plan Delivery & Walkthrough',
            description:
              'We deliver a complete written SEO plan with clear priorities, page-by-page recommendations, and a 90-day execution calendar. You can run it yourself or hand it back to us.',
          },
        ]}
      />

      {/* White-labeled Case Study */}
      <section className="py-16 md:py-24 bg-[#0D0D0D]">
        <div className="container-max">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] uppercase tracking-[0.25em] font-serif mb-4" style={{ color: '#B8925A' }}>
              Case Study — Confidential · 2025
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-white tracking-tight leading-[1.15] mb-6">
              We built the infrastructure. It never stopped working.
            </h2>
            <p className="text-[15px] text-white/60 font-serif leading-[1.7]">
              A boutique luxury brokerage. Zero SEO. Zero paid media. Here&rsquo;s what happened over the next 20 months.
            </p>
          </div>

          {/* Stat bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10 mb-12">
            {[
              { number: '4x', label: 'Non-Branded Click Growth' },
              { number: '6%', label: 'CTR Today', sub: 'was 1.1%' },
              { number: '9.7', label: 'Avg. Search Position', sub: 'was 18.6' },
              { number: '20+', label: 'Months Growing After We Stopped' },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center text-center py-10 px-6 ${i < 3 ? 'border-r border-white/10' : ''} border-b md:border-b-0 border-white/10`}
              >
                <span className="text-3xl md:text-4xl font-serif font-light text-white leading-none mb-2">
                  {s.number}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/60 font-serif mb-1">
                  {s.label}
                </span>
                {s.sub && (
                  <span className="text-[10px] text-white/35 font-serif tracking-wide">{s.sub}</span>
                )}
              </div>
            ))}
          </div>

          {/* SEMrush chart */}
          <div className="mb-10">
            <Image
              src="/images/whitelabeledcase/semrushCS.webp"
              alt="SEMrush organic traffic growth — boutique luxury brokerage, June 2024 to March 2026"
              width={1440}
              height={900}
              className="w-full h-auto border border-white/10"
            />
            <p className="text-[11px] font-serif text-white/35 mt-3 tracking-wide">
              SEMrush organic traffic trend — June 2024 through March 2026
            </p>
          </div>

          {/* Before / After GSC */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div>
              <Image
                src="/images/whitelabeledcase/beforeNonBrandedGSCCS.webp"
                alt="Google Search Console non-branded — January 2025: 1.1% CTR, position 18.6"
                width={720}
                height={480}
                className="w-full h-auto border border-white/10"
              />
              <p className="text-[11px] font-serif text-white/35 mt-2 tracking-wide">
                January 2025 — End of engagement
              </p>
            </div>
            <div>
              <Image
                src="/images/whitelabeledcase/afternonbrandedGSCCS.webp"
                alt="Google Search Console non-branded — March 2026: 6% CTR, position 9.7"
                width={720}
                height={480}
                className="w-full h-auto border border-white/10"
              />
              <p className="text-[11px] font-serif text-white/35 mt-2 tracking-wide">
                March 2026 — 14 months later, zero active SEO work
              </p>
            </div>
          </div>

          {/* Insight callout */}
          <div className="border border-white/10 p-8 md:p-12 max-w-3xl mb-10">
            <p className="text-[11px] uppercase tracking-[0.2em] font-serif mb-5" style={{ color: '#B8925A' }}>
              The insight
            </p>
            <blockquote className="text-xl md:text-2xl font-serif font-light italic text-white leading-snug mb-6">
              &ldquo;A 1.1% CTR on position 18.6 is a site that ranks but doesn&rsquo;t earn the click. A 6% CTR on position 9.7 is a site built with the right structure. The pages matured from broad visibility into targeted authority.&rdquo;
            </blockquote>
            <p className="text-[15px] text-white/55 font-serif leading-[1.7]">
              This is what a correctly structured SEO plan produces — not just traffic, but the right traffic. Location page clusters, non-branded keyword focus, technical foundation. The work compounds long after the engagement ends.
            </p>
          </div>

          <Link
            href="/case-study/white-labeled-2025"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white font-serif hover:opacity-60 transition-opacity border-b border-white/40 pb-1"
          >
            Read the full case study
          </Link>
        </div>
      </section>

      {/* SEO Consulting vs. SEO Management */}
      <section className="py-16 md:py-24 bg-white border-t border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif block mb-4">
              Understanding your options
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
              SEO consulting vs. ongoing SEO management.
            </h2>
            <p className="text-[15px] text-[var(--color-ink-300)] font-serif leading-[1.7]">
              Not sure which is right for you? Here&apos;s a simple breakdown.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[var(--color-ink-200)] max-w-3xl">
            <div className="p-10 border-b md:border-b-0 md:border-r border-[var(--color-ink-200)]">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">This page</p>
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
                SEO Consulting
              </h3>
              <ul className="space-y-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                <li className="flex gap-3"><span className="text-[var(--color-off-black)] shrink-0">—</span> One-time engagement</li>
                <li className="flex gap-3"><span className="text-[var(--color-off-black)] shrink-0">—</span> Produces a full SEO roadmap</li>
                <li className="flex gap-3"><span className="text-[var(--color-off-black)] shrink-0">—</span> You or your team executes</li>
                <li className="flex gap-3"><span className="text-[var(--color-off-black)] shrink-0">—</span> Ideal if you want direction &amp; clarity</li>
                <li className="flex gap-3"><span className="text-[var(--color-off-black)] shrink-0">—</span> Lower upfront investment</li>
              </ul>
            </div>
            <div className="p-10">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">Also available</p>
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
                SEO Management
              </h3>
              <ul className="space-y-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                <li className="flex gap-3"><span className="text-[var(--color-off-black)] shrink-0">—</span> Ongoing monthly engagement</li>
                <li className="flex gap-3"><span className="text-[var(--color-off-black)] shrink-0">—</span> We build &amp; execute the strategy</li>
                <li className="flex gap-3"><span className="text-[var(--color-off-black)] shrink-0">—</span> Content, links, technical — done for you</li>
                <li className="flex gap-3"><span className="text-[var(--color-off-black)] shrink-0">—</span> Ideal if you want results without the work</li>
                <li className="flex gap-3"><span className="text-[var(--color-off-black)] shrink-0">—</span>
                  <Link href="/seo-optimization" className="underline hover:opacity-60 transition-opacity">
                    Learn more →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
