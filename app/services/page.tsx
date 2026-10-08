import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import '@/app/landing/google-general/google-general-landing.css'
import SEOWrapper from '@/components/SEOWrapper'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import HomeDevelopments from '@/components/home/HomeDevelopments'
import { metadataFromRegistry } from '@/lib/content-registry'
import ServicesApplyButton from './ServicesApplyButton'

export const metadata: Metadata = metadataFromRegistry('/services')

// ── Service data ──────────────────────────────────────────────────────────────

type Service = {
  eyebrow: string
  heading: string
  body: string
  note?: string
  href: string
  img: string
  alt: string
}

const PROGRAM_INCLUDES = [
  {
    title: 'A website built to convert',
    body: 'Templated, semi-custom, or fully custom, every tier connected to the MLS via IDX. The design is yours after 6 months.',
  },
  {
    title: 'Google Ads engineered for your price point',
    body: 'Search campaigns built around your market, buyers, and sellers, managed weekly on a $650 per 4-week retainer.',
  },
  {
    title: 'Our exact follow-up scripts',
    body: 'Copy-and-paste scripts and cadence so every lead gets a fast, credible first touch while the intent is still hot.',
  },
]

const websiteServices: Service[] = [
  {
    eyebrow: 'Agent Website Design',
    heading: 'Distinguished websites that generate leads',
    body: 'Custom-built sites with SEO architecture, sub-2s load times, and IDX built in at launch, not bolted on after.',
    note: 'Featuring Legendary Real Estate, Eagan Luxury, Cheryl Towey, Valoria Homes.',
    href: '/services/agent-websites',
    img: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png',
    alt: 'Legendary Real Estate website designed by DMR Media',
  },
  {
    eyebrow: 'Development & Asset Microsites',
    heading: 'Phased sites engineered for sell-through',
    body: 'Gallery sites, plan libraries, and registration paths built for absorption, not generic brokerage brochureware.',
    note: 'For luxury condos, new developments, and single trophy properties.',
    href: '/websites-for-new-developments',
    img: '/images/ClientWebsites/screencapture-valoriahomes-2026-03-04-03_34_12.png',
    alt: 'Valoria Homes development microsite designed by DMR Media',
  },
]

const leadServices: Service[] = [
  {
    eyebrow: 'Google Ads',
    heading: 'Google Ads Management',
    body: 'Search campaigns tied to qualified buyer and seller conversations, with spend, leads, and cost per lead shown plainly.',
    href: '/google-ads-management',
    img: '/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg',
    alt: 'Luxury home at dusk representing Google Ads for real estate',
  },
  {
    eyebrow: 'Lead Generation',
    heading: 'Inbound Lead Systems',
    body: 'Ads, landing pages, capture, and follow-up integrated and measured against your pipeline, never vanity clicks.',
    href: '/real-estate-lead-generation',
    img: '/images/JadeCRM.png',
    alt: 'Real estate lead pipeline inside a CRM',
  },
  {
    eyebrow: 'Paid Media',
    heading: 'Multi-Channel Paid Media',
    body: 'Google, Meta, and retargeting run by one team with one strategy and attribution you can audit.',
    href: '/services/paid-media',
    img: '/images/StockHomes/spacious-living-room-with-staircase-in-residence-2025-10-10-15-17-44-utc (1).jpg',
    alt: 'Luxury living room representing multi-channel paid media',
  },
  {
    eyebrow: 'CRM & Automation',
    heading: 'Automated Follow-Up',
    body: 'Instant lead routing, on-brand sequences, and pipeline dashboards so no inbound lead waits on a reply.',
    href: '/services/crm-automation',
    img: '/images/StockHomes/studio-apartment-interior-with-wooden-furniture-2025-02-09-23-29-43-utc.jpg',
    alt: 'Modern interior representing CRM and follow-up automation',
  },
]

const propertyServices: Service[] = [
  {
    eyebrow: 'Development Marketing',
    heading: 'Luxury Development Marketing',
    body: 'Presale through sellout: positioning, project websites, paid media, and follow-up, backed by the same 14-day guarantee.',
    href: '/luxury-development-marketing',
    img: '/images/developments/zenith-development.jpg',
    alt: 'The Zenith tower development in Milwaukee',
  },
  {
    eyebrow: 'Property Marketing',
    heading: 'Cinematic Listing Experiences',
    body: 'Single-property sites and launch campaigns for trophy listings, with speed, media, and storytelling that sell the address.',
    href: '/property-marketing',
    img: '/images/propertyWebsiteImages/screencapture-2100pine-vercel-app-2026-03-25-19_45_27.png',
    alt: 'Single property website for 2100 Pine',
  },
]

const foundationServices = [
  {
    eyebrow: 'SEO',
    heading: 'Built into every site we launch',
    body: 'Clean architecture, fast pages, and local content that ranks. Our leads program is judged on leads, and SEO compounds underneath it.',
    href: '/seo-optimization',
  },
  {
    eyebrow: 'Analytics & Reporting',
    heading: 'Numbers you can read on your phone',
    body: 'Spend, leads, cost per lead, and pipeline in one plain dashboard. No screenshots of impressions, no guesswork.',
    href: '/analytics-reporting',
  },
]

const JUMP_NAV = [
  { label: 'The program', href: '#program' },
  { label: 'Websites', href: '#websites' },
  { label: 'Lead generation', href: '#lead-generation' },
  { label: 'Developments & property', href: '#developments-property' },
]

// ── Shared sub-components ─────────────────────────────────────────────────────

function SectionRule({ align = 'left' }: { align?: 'left' | 'center' }) {
  return (
    <div
      className={`mt-5 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent sm:w-20 ${align === 'center' ? 'mx-auto' : ''}`}
      aria-hidden
    />
  )
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <SeoReveal>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="gg-eyebrow">{eyebrow}</p>
          <h2 className="gg-display mt-3 max-w-2xl text-3xl font-light tracking-tight md:text-4xl">{title}</h2>
          <SectionRule />
        </div>
        <p className="gg-body max-w-sm md:text-right">{sub}</p>
      </div>
    </SeoReveal>
  )
}

function ServiceCard({ service, size = 'md', delay = 0 }: { service: Service; size?: 'md' | 'lg'; delay?: number }) {
  return (
    <SeoReveal delay={delay} className="h-full">
      <Link
        href={service.href}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-ink-200)] bg-white shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/15 hover:shadow-[0_16px_40px_-16px_rgba(15,15,15,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0"
      >
        <div
          className={`relative overflow-hidden bg-[var(--color-ink-200)] ${size === 'lg' ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}
        >
          <Image
            src={service.img}
            alt={service.alt}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes={size === 'lg' ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw'}
          />
        </div>
        <div className={`flex flex-1 flex-col ${size === 'lg' ? 'p-7 md:p-9' : 'p-6 md:p-7'}`}>
          <p className="gg-eyebrow !text-[10px]">{service.eyebrow}</p>
          <h3
            className={`mt-2 font-serif font-light leading-[1.2] tracking-tight text-[var(--color-off-black)] ${size === 'lg' ? 'text-2xl md:text-3xl' : 'text-xl'}`}
          >
            {service.heading}
          </h3>
          <p className="mt-3 flex-1 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{service.body}</p>
          {service.note && (
            <p className="mt-3 font-serif text-[13px] leading-relaxed text-[var(--color-ink-400)]">{service.note}</p>
          )}
          <span className="gg-eyebrow gg-eyebrow--strong mt-6 inline-flex w-fit items-center gap-2 border-b border-[var(--color-off-black)]/30 pb-1 transition-colors group-hover:border-[var(--color-off-black)]">
            Explore service <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </SeoReveal>
  )
}

const PRIMARY_CTA =
  'inline-flex min-h-[52px] items-center justify-center rounded-full border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-6px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-[0_10px_28px_-6px_rgba(15,15,15,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0'

const SECONDARY_LINK =
  'font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline'

function GuaranteeBadge() {
  return (
    <div
      className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full border border-[var(--color-off-black)]/30 bg-white shadow-[0_10px_30px_-12px_rgba(15,15,15,0.25)]"
      role="img"
      aria-label="14-day lead guarantee"
    >
      <span className="font-serif text-4xl font-light leading-none text-[var(--color-off-black)]">14</span>
      <span className="mt-1.5 font-serif text-[8px] uppercase leading-tight tracking-[0.2em] text-[var(--color-ink-400)]">
        Day lead
      </span>
      <span className="font-serif text-[8px] uppercase leading-tight tracking-[0.2em] text-[var(--color-ink-400)]">
        Guarantee
      </span>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <SEOWrapper slug="/services">
      <main className="google-general-landing min-h-screen bg-white">
        {/* ── Hero ── */}
        <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] pb-16 pt-28 sm:pt-32 md:pb-20">
          <div className="container-max px-4 sm:px-6">
            <SeoReveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="gg-eyebrow">★★★★★ 5-stars on Trustpilot &amp; Google</p>
                <h1 className="gg-display mt-6 text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.06] tracking-tight">
                  Marketing Services for
                  <br className="hidden sm:block" /> <em className="italic">Luxury Real Estate</em>
                </h1>
                <SectionRule align="center" />
                <p className="gg-body-lg mx-auto mt-7 max-w-2xl">
                  Websites, Google Ads, and follow-up systems for top producers, teams, and developers, built by one
                  accountable team. Our lead program puts qualified buyer and seller leads in your CRM within 2 weeks,
                  or we refund you everything.
                </p>
                <div className="mt-9 flex flex-col items-center gap-4">
                  <ServicesApplyButton className={PRIMARY_CTA}>Get my marketing plan</ServicesApplyButton>
                  <Link href="/calendar" className={SECONDARY_LINK}>
                    Or book a 15-minute strategy call
                  </Link>
                </div>
                <nav aria-label="Service categories" className="mt-12 flex flex-wrap justify-center gap-2.5">
                  {JUMP_NAV.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-[var(--color-ink-200)] bg-white px-5 py-2.5 font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] transition-all duration-200 hover:border-[var(--color-off-black)]/40 hover:text-[var(--color-off-black)]"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </SeoReveal>
          </div>
        </section>

        {/* ── Flagship program ── */}
        <section id="program" className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-20 md:py-28">
          <div className="container-max px-4 sm:px-6">
            <SeoReveal>
              <div className="rounded-2xl border border-[var(--color-off-black)]/20 bg-[var(--surface-base)] p-7 shadow-[0_16px_48px_-20px_rgba(15,15,15,0.2)] sm:p-10 md:p-14">
                <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-2xl">
                    <p className="gg-eyebrow">The flagship program</p>
                    <h2 className="gg-display mt-3 text-3xl font-light leading-tight tracking-tight md:text-4xl">
                      Google Ads &amp; Lead Generation, with a guarantee other agencies will not make.
                    </h2>
                    <SectionRule />
                    <p className="gg-body mt-6">
                      Unlike other agencies, we put our money where our mouth is. If qualified leads are not in your CRM
                      within 14 days of launch, we refund your fee and your ad spend. If you want buyers and sellers
                      filling your pipeline, go with the team that actually makes that happen.
                    </p>
                  </div>
                  <GuaranteeBadge />
                </div>

                <ol className="mt-10 grid gap-5 md:grid-cols-3" role="list">
                  {PROGRAM_INCLUDES.map((item, i) => (
                    <li
                      key={item.title}
                      className="rounded-xl border border-[var(--color-ink-200)] bg-white p-6 shadow-[0_1px_0_rgba(15,15,15,0.04)]"
                    >
                      <p className="gg-eyebrow !text-[10px]">{String(i + 1).padStart(2, '0')}</p>
                      <h3 className="mt-2 font-serif text-lg font-light leading-snug text-[var(--color-off-black)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{item.body}</p>
                    </li>
                  ))}
                </ol>

                <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
                  <ServicesApplyButton className={PRIMARY_CTA}>Claim the 2-week guarantee</ServicesApplyButton>
                  <Link href="/stripe/terms-of-service" className={SECONDARY_LINK}>
                    Read the guarantee terms
                  </Link>
                </div>
              </div>
            </SeoReveal>
          </div>
        </section>

        {/* ── Websites ── */}
        <section
          id="websites"
          className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-20 md:py-28"
        >
          <div className="container-max px-4 sm:px-6">
            <SectionHeader
              eyebrow="01 · Websites"
              title="Websites that earn the inquiry"
              sub="Award-caliber design for agents and developments, connected to the MLS and built to convert."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
              {websiteServices.map((service, i) => (
                <ServiceCard key={service.href} service={service} size="lg" delay={i * 0.06} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Lead generation ── */}
        <section id="lead-generation" className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-20 md:py-28">
          <div className="container-max px-4 sm:px-6">
            <SectionHeader
              eyebrow="02 · Lead generation"
              title="Qualified buyers and sellers, on repeat"
              sub="Paid media, capture, and follow-up measured against your pipeline, not impressions."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {leadServices.map((service, i) => (
                <ServiceCard key={service.href} service={service} delay={(i % 4) * 0.05} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Developments & property ── */}
        <section
          id="developments-property"
          className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-20 md:py-28"
        >
          <div className="container-max px-4 sm:px-6">
            <SectionHeader
              eyebrow="03 · Developments & property"
              title="Launches, sellouts, and signature listings"
              sub="Project and single-property marketing judged on absorption and showings."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
              {propertyServices.map((service, i) => (
                <ServiceCard key={service.href} service={service} size="lg" delay={i * 0.06} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Proof ── */}
        <HomeDevelopments />

        {/* ── Foundations ── */}
        <section className="border-b border-[var(--color-ink-200)] bg-white py-20 md:py-24">
          <div className="container-max px-4 sm:px-6">
            <SectionHeader
              eyebrow="Included in every engagement"
              title="The foundations underneath"
              sub="Not separate line items to upsell. They come standard with the work."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {foundationServices.map((item, i) => (
                <SeoReveal key={item.href} delay={i * 0.06} className="h-full">
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col rounded-xl border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/15 hover:bg-white hover:shadow-[0_16px_40px_-16px_rgba(15,15,15,0.18)] motion-reduce:hover:translate-y-0 md:p-8"
                  >
                    <p className="gg-eyebrow !text-[10px]">{item.eyebrow}</p>
                    <h3 className="mt-2 font-serif text-xl font-light tracking-tight text-[var(--color-off-black)] md:text-2xl">
                      {item.heading}
                    </h3>
                    <p className="mt-3 flex-1 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
                      {item.body}
                    </p>
                    <span className="gg-eyebrow gg-eyebrow--strong mt-6 inline-flex w-fit items-center gap-2 border-b border-[var(--color-off-black)]/30 pb-1 transition-colors group-hover:border-[var(--color-off-black)]">
                      Learn more <span aria-hidden>→</span>
                    </span>
                  </Link>
                </SeoReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="bg-[var(--surface-base)] py-20 md:py-28">
          <div className="container-max mx-auto max-w-2xl px-4 text-center sm:px-6">
            <SeoReveal>
              <div className="flex justify-center">
                <GuaranteeBadge />
              </div>
              <p className="gg-eyebrow mt-6">Work with us</p>
              <h2 className="gg-display mt-3 text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl">
                Qualified leads in 2 weeks, <em className="italic">or we refund you everything.</em>
              </h2>
              <SectionRule align="center" />
              <p className="gg-body mt-7">
                A short application lets us come prepared with your market, your competitors, and the gaps costing you
                GCI. No pitch deck, just a direct conversation and a concrete plan.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4">
                <ServicesApplyButton className={PRIMARY_CTA}>Get my marketing plan</ServicesApplyButton>
                <Link href="/case-studies" className={SECONDARY_LINK}>
                  View case studies →
                </Link>
              </div>
            </SeoReveal>
          </div>
        </section>
      </main>
    </SEOWrapper>
  )
}
