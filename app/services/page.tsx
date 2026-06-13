import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SEOWrapper from '@/components/SEOWrapper'
import { metadataFromRegistry } from '@/lib/content-registry'

export const metadata: Metadata = metadataFromRegistry('/services')

// ── Service data ──────────────────────────────────────────────────────────────

type LargeService = {
  eyebrow: string
  heading: string
  body: string
  note?: string
  cta: string
  href: string
  img: string
  alt: string
}

type CompactService = {
  eyebrow: string
  heading: string
  body: string
  cta: string
  href: string
  img: string
  alt: string
}

const infraServices: LargeService[] = [
  {
    eyebrow: 'Agent Website Design',
    heading: 'Distinguished Website Design.',
    body: 'Custom-built websites with SEO architecture, sub-2s load times, and brand alignment baked in at build — not bolted on after. Ranked #1 real estate agency on SEMrush in the U.S.',
    note: 'Featuring: Legendary Real Estate, Eagan Luxury, Cheryl Towey, Valoria Homes.',
    cta: 'Explore Service',
    href: '/services/agent-websites',
    img: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png',
    alt: 'Legendary Real Estate — distinguished real estate website design',
  },
  {
    eyebrow: 'Development & Asset Microsites',
    heading: 'Phased sites engineered for sell-through.',
    body: 'Gallery sites, plan libraries, and high-conversion capture paths built for rapid sell-through — not generic brokerage brochureware.',
    note: 'Tailored for: Luxury Condos, New Developments, and Single Trophy Properties.',
    cta: 'Learn More',
    href: '/websites-for-new-developments',
    img: '/images/ClientWebsites/screencapture-valoriahomes-2026-03-04-03_34_12.png',
    alt: 'Valoria Homes — luxury development microsite design',
  },
]

const searchServices: CompactService[] = [
  {
    eyebrow: 'SEO Frameworks',
    heading: 'Luxury-Calibrated SEO',
    body: 'Own the search results in the zip codes and cities that matter. Local-first optimization designed to capture affluent intent before the competition does.',
    cta: 'Learn More',
    href: '/seo-optimization',
    img: '/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg',
    alt: 'Luxury real estate SEO optimization',
  },
  {
    eyebrow: 'Paid Media',
    heading: 'Multi-Channel Paid Media',
    body: 'Google Ads, Meta, and retargeting campaigns tied to qualified pipeline — not impressions. One team, one strategy, measurable attribution across every channel.',
    cta: 'Learn More',
    href: '/services/paid-media',
    img: '/images/StockHomes/spacious-living-room-with-staircase-in-residence-2025-10-10-15-17-44-utc (1).jpg',
    alt: 'Multi-channel paid media for real estate — DMR Media',
  },
  {
    eyebrow: 'Inbound Lead Systems',
    heading: 'Digital Pipelines That Compound',
    body: 'Search, ads, capture, and follow-up integrated and measured strictly against your sales pipeline — never vanity clicks.',
    cta: 'Learn More',
    href: '/real-estate-lead-generation',
    img: '/images/JadeCRM.png',
    alt: 'Real estate inbound lead generation system',
  },
  {
    eyebrow: 'CRM & Pipeline Automation',
    heading: 'Automated Follow-Up Systems',
    body: 'Instant lead routing, on-brand sequences, and pipeline dashboards — built so every inbound lead gets a response in under 90 seconds, automatically.',
    cta: 'Learn More',
    href: '/services/crm-automation',
    img: '/images/JadeCRM.png',
    alt: 'Real estate CRM automation and lead routing — DMR Media',
  },
]

const propertyServices: CompactService[] = [
  {
    eyebrow: 'Development Marketing',
    heading: 'Luxury Development Marketing',
    body: 'From presale through sell-out: the digital narrative, gallery experiences, and demand generation systems required to move trophy projects.',
    cta: 'Learn More',
    href: '/luxury-development-marketing',
    img: '/images/StockHomes/modern-villa-interior-with-sparkle-floor-2024-10-18-09-40-13-utc.jpg',
    alt: 'Luxury development marketing strategy',
  },
  {
    eyebrow: 'Property Marketing',
    heading: 'Cinematic Listing Experiences',
    body: "Listing experiences curated for the world's most discerning buyers — speed, media integration, and storytelling without the brokerage template noise.",
    cta: 'Learn More',
    href: '/property-marketing',
    img: '/images/propertyWebsiteImages/screencapture-2100pine-vercel-app-2026-03-25-19_45_27.png',
    alt: 'Cinematic property marketing and single property websites',
  },
  {
    eyebrow: 'Analytics & Reporting',
    heading: 'Institutional Analytics',
    body: 'Every campaign touchpoint measured with clean, executive-level dashboards built for mobile, on-the-go review. Eliminate the guesswork.',
    cta: 'Learn More',
    href: '/analytics-reporting',
    img: '/images/StockHomes/a-backyard-with-a-swimming-pool-hot-tub-and-pati-2025-02-10-06-23-51-utc.jpg',
    alt: 'Analytics and reporting for real estate marketing campaigns',
  },
]

// ── Shared sub-components ─────────────────────────────────────────────────────

function LargeServiceBlock({ service, flip }: { service: LargeService; flip?: boolean }) {
  return (
    <Link
      href={service.href}
      className="group block border-b border-[var(--color-ink-200)] last:border-b-0"
    >
      <article className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
        <div
          className={`flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-14 lg:py-20 order-2 ${
            flip ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <p className="font-serif text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] mb-4">
            {service.eyebrow}
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-5 group-hover:opacity-80 transition-opacity">
            {service.heading}
          </h3>
          <p className="font-serif text-[15px] leading-[1.75] text-[var(--color-ink-300)] max-w-md">
            {service.body}
          </p>
          {service.note && (
            <p className="mt-3 font-serif text-[13px] leading-relaxed text-[var(--color-ink-400)] max-w-md">
              {service.note}
            </p>
          )}
          <span className="mt-8 font-serif text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] border-b border-[var(--color-off-black)] pb-1 w-fit group-hover:opacity-60 transition-opacity">
            {service.cta}
          </span>
        </div>
        <div
          className={`relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-5 sm:m-8 lg:m-10 ${
            flip ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <Image
            src={service.img}
            alt={service.alt}
            fill
            className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </article>
    </Link>
  )
}

function CompactServiceCard({ service }: { service: CompactService }) {
  return (
    <Link
      href={service.href}
      className="group flex flex-col border border-[var(--color-ink-200)] bg-white hover:border-[var(--color-off-black)]/30 hover:shadow-[0_8px_32px_-8px_rgba(15,15,15,0.12)] transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-ink-200)]">
        <Image
          src={service.img}
          alt={service.alt}
          fill
          className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col flex-1 p-7">
        <p className="font-serif text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] mb-2">
          {service.eyebrow}
        </p>
        <h3 className="font-serif text-xl font-light text-[var(--color-off-black)] tracking-tight leading-[1.2] mb-3 group-hover:opacity-80 transition-opacity">
          {service.heading}
        </h3>
        <p className="font-serif text-sm leading-relaxed text-[var(--color-ink-300)] flex-1">
          {service.body}
        </p>
        <p className="mt-6 font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] group-hover:opacity-60 transition-opacity">
          {service.cta} →
        </p>
      </div>
    </Link>
  )
}

function PillarHeader({
  number,
  name,
  sub,
}: {
  number: string
  name: string
  sub: string
}) {
  return (
    <div className="container-max px-4 sm:px-6 pt-14 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-[var(--color-ink-200)] pb-10">
        <div>
          <p className="font-serif text-[11px] uppercase tracking-[0.28em] text-[var(--color-ink-400)] mb-3">
            {number}
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.25rem] font-light tracking-tight text-[var(--color-off-black)]">
            {name}
          </h2>
        </div>
        <p className="font-serif text-sm text-[var(--color-ink-300)] max-w-xs sm:text-right leading-relaxed">
          {sub}
        </p>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <SEOWrapper slug="/services">
      <main className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <section className="bg-[var(--color-off-black)] py-24 md:py-32 border-b border-white/10">
          <div className="container-max px-4 sm:px-6">
            <p className="font-serif text-[11px] uppercase tracking-[0.28em] text-white/50 mb-6">
              Services
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.06] tracking-tight text-white max-w-3xl mb-8">
              Digital Infrastructure & Design
              <br className="hidden sm:block" />{' '}
              <span className="italic">for Market Makers.</span>
            </h1>
            <p className="font-serif text-base sm:text-lg leading-relaxed text-white/65 max-w-2xl mb-12">
              Each engagement is built around clarity, restraint, and measurable outcomes. Explore the digital frameworks we operate for elite luxury real estate teams and developers.
            </p>
            {/* Pillar jump-nav */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Digital Infrastructure', href: '#pillar-1' },
                { label: 'Search & Performance', href: '#pillar-2' },
                { label: 'Property & Brand Marketing', href: '#pillar-3' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-serif text-[11px] uppercase tracking-[0.2em] text-white/60 border border-white/20 px-5 py-2.5 hover:text-white hover:border-white/50 transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pillar 1: Digital Infrastructure & Design ── */}
        <section id="pillar-1">
          {infraServices.map((service, i) => (
            <LargeServiceBlock key={service.href} service={service} flip={i % 2 !== 0} />
          ))}
        </section>

        {/* ── Pillar 2: Search & Performance Marketing ── */}
        <section id="pillar-2" className="bg-[var(--surface-base)]">
          <PillarHeader
            number="02"
            name="Search & Performance Marketing"
            sub="Intent, traffic, and high-net-worth client acquisition."
          />
          <div className="container-max px-4 sm:px-6 pb-20">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {searchServices.map((service) => (
                <CompactServiceCard key={service.href} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Pillar 3: Specialized Property & Brand Marketing ── */}
        <section id="pillar-3">
          <PillarHeader
            number="03"
            name="Specialized Property & Brand Marketing"
            sub="Project launches, asset liquidation, and measurable attribution."
          />
          <div className="container-max px-4 sm:px-6 pb-20">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {propertyServices.map((service) => (
                <CompactServiceCard key={service.href} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[var(--color-off-black)] py-24 md:py-28 border-t border-white/10">
          <div className="container-max px-4 sm:px-6 text-center max-w-2xl mx-auto">
            <p className="font-serif text-[11px] uppercase tracking-[0.24em] text-white/50 mb-5">
              Work with us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-white leading-[1.1] mb-6">
              Ready to build a system
              <br className="hidden sm:block" />{' '}
              <span className="italic">around your market?</span>
            </h2>
            <p className="font-serif text-base leading-relaxed text-white/65 mb-10">
              A short application lets us come prepared — your market, your competitors, and the gaps
              costing you GCI. No pitch deck. Just a direct conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/calendar"
                className="inline-flex min-h-[52px] items-center justify-center bg-white px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] shadow-[0_4px_24px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-[0_8px_32px_rgba(0,0,0,0.22)]"
              >
                Book a strategy call
              </Link>
              <Link
                href="/case-studies"
                className="font-serif text-[11px] uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors"
              >
                View case studies →
              </Link>
            </div>
          </div>
        </section>

      </main>
    </SEOWrapper>
  )
}
