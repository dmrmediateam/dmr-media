'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import SeoCaseStudiesHorizontalScroll from '@/components/SeoCaseStudiesHorizontalScroll'
import SeoWebsiteExamplesHorizontalScroll from '@/components/SeoWebsiteExamplesHorizontalScroll'
import ClientLogosSlider from '@/components/ClientLogosSlider'
import VideoTestimonials from '@/components/VideoTestimonials'
import ServiceStats from '@/components/service/ServiceStats'
import Testimonials from '@/components/Testimonials'
import { SeoLandingStickyPrimaryCta } from '@/components/SeoLandingHeroPrimaryCta'
import {
  dmrVsAlternatives,
  FAQ_ITEMS,
  frameworkPillars,
  processPhases,
  stakesThree,
} from './property-marketing-data'

const APPLY_FORM = 'property-marketing-apply'

function openApplyModal() {
  window.dispatchEvent(new CustomEvent('openApplyModal', { detail: { formName: APPLY_FORM } }))
}

function ApplyCtaBand({
  hint,
  surface,
  className = '',
  primaryLabel = 'Start my property marketing plan',
}: {
  hint: string
  surface: 'base' | 'white'
  className?: string
  primaryLabel?: string
}) {
  const bg = surface === 'white' ? 'bg-white' : 'bg-[var(--surface-base)]'
  const ring =
    surface === 'white' ? 'focus-visible:ring-offset-white' : 'focus-visible:ring-offset-[var(--surface-base)]'
  return (
    <aside
      className={`${bg} border-b border-[var(--color-ink-200)] py-10 md:py-14 ${className}`}
      aria-label="Start property marketing"
    >
      <div className="container-max mx-auto flex max-w-xl flex-col items-center gap-4 px-4 text-center">
        <p className="font-serif text-[0.9375rem] leading-relaxed text-[var(--color-ink-400)]">{hint}</p>
        <button
          type="button"
          onClick={openApplyModal}
          className={`inline-flex min-h-[48px] w-full max-w-xs items-center justify-center rounded-sm border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-8 font-serif text-[11px] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 ${ring} sm:w-auto`}
        >
          {primaryLabel}
        </button>
        <Link
          href="/calendar"
          className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline"
        >
          Or schedule a 15-minute call
        </Link>
        <p className="font-serif text-[11px] leading-snug text-[var(--color-ink-400)]/85">
          New developments, condo launches, and trophy listings. Google Ads spend included in the flat fee.
        </p>
      </div>
    </aside>
  )
}

function SectionRule({ align = 'left' }: { align?: 'left' | 'center' }) {
  return (
    <div
      className={`mt-5 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent sm:w-20 ${align === 'center' ? 'mx-auto' : ''}`}
      aria-hidden
    />
  )
}

export default function PropertyMarketingPageContent() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="min-h-screen bg-white [--seo-section-y:theme(spacing.20)] md:[--seo-section-y:theme(spacing.28)]">
      <section
        className="scroll-mt-6 overflow-hidden border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] pt-28 sm:pt-32"
        id="top"
        aria-labelledby="property-marketing-hero-title"
      >
        <div className="container-max px-4 sm:px-6">
          <SeoReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
                New developments · luxury condos · trophy listings
              </p>
              <h1
                id="property-marketing-hero-title"
                className="mt-6 font-serif text-[clamp(2.25rem,5.5vw,3.75rem)] font-light leading-[1.08] tracking-tight text-[var(--color-off-black)]"
              >
                Property marketing for new developments, condos, and exceptional listings
              </h1>
              <p className="mx-auto mt-7 max-w-2xl font-serif text-base leading-relaxed text-[var(--color-ink-300)] sm:text-lg">
                We build dedicated development and condo sites, run 30-day Google Ads bursts with media included, and
                ship launch email copy so presale buyers and luxury shoppers tour faster, not someday.
              </p>
              <div className="mt-9 flex flex-col items-center gap-4">
                <button
                  type="button"
                  onClick={openApplyModal}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-6px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-[0_10px_28px_-6px_rgba(15,15,15,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] motion-reduce:hover:translate-y-0"
                >
                  Start my property marketing plan
                </button>
                <Link
                  href="/calendar"
                  className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline"
                >
                  Or book a 15-minute strategy call
                </Link>
                <p className="max-w-md font-serif text-sm leading-relaxed text-[var(--color-ink-400)]">
                  Current DMR clients: $2,500 pay-at-close per listing. Google Ads spend covered in the flat fee.
                </p>
              </div>
            </div>
          </SeoReveal>

          <SeoReveal delay={0.12}>
            <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16">
              {/* Soft halo behind the site preview, in DMR ink tones */}
              <div
                className="pointer-events-none absolute -inset-x-16 -top-16 bottom-0 bg-[radial-gradient(ellipse_at_top,rgba(15,15,15,0.10),transparent_65%)]"
                aria-hidden
              />
              <figure className="relative overflow-hidden rounded-t-xl border border-b-0 border-[var(--color-ink-200)] bg-white p-1.5 pb-0 shadow-[0_-12px_60px_-24px_rgba(15,15,15,0.3)] sm:p-2 sm:pb-0">
                <div className="relative aspect-[2/1] w-full overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/ClientWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-29-19_49_50.png"
                    alt="Ocean Breeze — dedicated single-property website for a $6.5M waterfront estate, built by DMR Media"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
                <figcaption className="sr-only">
                  Ocean Breeze, Turks &amp; Caicos — property launch site by DMR Media
                </figcaption>
              </figure>
              <p
                className="absolute -left-2 top-6 hidden rounded-lg border border-[var(--color-ink-200)] bg-white/95 px-4 py-3 font-serif shadow-[0_12px_32px_-12px_rgba(15,15,15,0.25)] backdrop-blur-sm md:block lg:-left-10"
                aria-hidden
              >
                <span className="block text-2xl font-light text-[var(--color-off-black)]">$6.5M</span>
                <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)]">
                  Listing site · Ocean Breeze
                </span>
              </p>
              <p
                className="absolute -right-2 top-24 hidden rounded-lg border border-[var(--color-ink-200)] bg-white/95 px-4 py-3 font-serif shadow-[0_12px_32px_-12px_rgba(15,15,15,0.25)] backdrop-blur-sm md:block lg:-right-10"
                aria-hidden
              >
                <span className="block text-2xl font-light text-[var(--color-off-black)]">30 days</span>
                <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)]">
                  Ads burst · Media included
                </span>
              </p>
            </div>
          </SeoReveal>
        </div>
      </section>

      <section id="after-hero" className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white" aria-label="Client logos">
        <ClientLogosSlider />
      </section>

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="stakes">
        <div className="container-max">
          <SeoReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Why this matters</p>
              <h2 className="mt-3 font-serif text-3xl font-light leading-tight tracking-tight text-[var(--color-off-black)] md:text-4xl">
                Developments and condos need a launch system, not a listing link
              </h2>
              <SectionRule align="center" />
            </div>
          </SeoReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
            {stakesThree.map((s, i) => (
              <SeoReveal key={s.title} delay={i * 0.06} className="h-full">
                <article className="group flex h-full flex-col rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6 shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/12 hover:shadow-md motion-reduce:hover:translate-y-0">
                  <p className="font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">{s.title}</p>
                  <h3 className="mt-2 font-serif text-xl font-light text-[var(--color-off-black)]">{s.subtitle}</h3>
                  <p className="mt-4 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{s.body}</p>
                </article>
              </SeoReveal>
            ))}
          </div>
        </div>
      </section>

      <div id="proof" className="scroll-mt-24">
        <SeoCaseStudiesHorizontalScroll />
        <VideoTestimonials />
      </div>

      <ApplyCtaBand
        surface="white"
        hint="Tell us about your development, condo collection, or listing. We scope site, ads, and launch email in one plan."
      />

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]" id="guide">
        <div className="container-max grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SeoReveal>
            <div>
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">How we work</p>
              <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
                One team for the site, the ads, and the launch
              </h2>
              <SectionRule />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                We specialize in new developments and luxury condos: presale positioning, phased inventory, tower
                releases, and boutique collections. You approve creative; we execute the technical stack, fund the
                30-day media burst, and report on tours and qualified leads weekly.
              </p>
            </div>
          </SeoReveal>
          <SeoReveal delay={0.08}>
            <div className="rounded-xl border border-[var(--color-ink-200)] bg-white p-6 shadow-[0_12px_40px_-12px_rgba(15,15,15,0.12)] sm:p-8">
              <p className="text-center font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">
                DMR vs. typical alternatives
              </p>
              <div className="mt-6 overflow-x-auto rounded-lg">
                <table className="w-full min-w-[520px] text-left text-sm font-serif">
                  <thead>
                    <tr className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]/80">
                      <th className="px-3 py-3 pr-4 text-xs font-normal uppercase tracking-[0.12em] text-[var(--color-ink-400)]">
                        Dimension
                      </th>
                      <th className="px-3 py-3 pr-4 text-xs font-normal uppercase tracking-[0.12em] text-[var(--color-off-black)]">
                        DMR
                      </th>
                      <th className="px-3 py-3 text-xs font-normal uppercase tracking-[0.12em] text-[var(--color-ink-400)]">
                        Others
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--color-ink-300)]">
                    {dmrVsAlternatives.map((row) => (
                      <tr key={row.label} className="border-b border-[var(--color-ink-200)] last:border-0">
                        <th scope="row" className="px-3 py-3 align-top text-xs uppercase tracking-[0.14em] text-[var(--color-ink-400)]">
                          {row.label}
                        </th>
                        <td className="px-3 py-3 align-top text-[var(--color-off-black)]">{row.dmr}</td>
                        <td className="px-3 py-3 align-top">{row.other}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </SeoReveal>
        </div>
      </section>

      <SeoWebsiteExamplesHorizontalScroll variant="propertyMarketing" />

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="framework">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Campaign package</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Site, ads, and launch email in one coordinated drop
            </h2>
            <SectionRule />
          </SeoReveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
            {frameworkPillars.map((p, i) => (
              <SeoReveal key={p.title} delay={i * 0.07}>
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] shadow-[0_1px_0_rgba(15,15,15,0.04)]">
                  <div className="relative aspect-[4/3] w-full border-b border-[var(--color-ink-200)] bg-white">
                    <Image src={p.image} alt={p.imageAlt} fill className="object-contain object-center p-3" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-xl font-light text-[var(--color-off-black)]">{p.title}</h3>
                    <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{p.body}</p>
                  </div>
                </article>
              </SeoReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]" id="pricing">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Pricing</p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Transparent listing economics
            </h2>
            <SectionRule />
            <p className="mt-6 max-w-2xl font-serif text-sm text-[var(--color-ink-300)]">
              Development and condo programs are scoped after kickoff. Single-listing campaigns use the tiers below.
              Google Ads spend for the 30-day burst is always included.
            </p>
          </SeoReveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
            <article className="rounded-lg border border-[var(--color-off-black)] bg-white p-8 md:p-10">
              <p className="font-serif text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)]">Current clients</p>
              <p className="mt-3 font-serif text-4xl font-light text-[var(--color-off-black)]">$2,500</p>
              <p className="mt-2 font-serif text-sm text-[var(--color-trust)]">Pay-at-close · 90-day cap</p>
            </article>
            <article className="rounded-lg border border-[var(--color-ink-200)] bg-white p-8 md:p-10">
              <p className="font-serif text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)]">Non-clients</p>
              <p className="mt-3 font-serif text-4xl font-light text-[var(--color-off-black)]">$3,250</p>
              <p className="mt-2 font-serif text-sm text-[var(--color-ink-400)]">Upfront before work begins</p>
            </article>
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="stats">
        <div className="container-max">
          <ServiceStats
            embedded
            heading="Benchmarks teams actually feel"
            stats={[
              { value: '250K+', label: 'Campaign impressions', description: 'Typical reach when search, remarketing, and email fire together.' },
              { value: '30', label: 'Day paid burst', description: 'Coordinated ads with DMR-funded media in the flat fee.' },
              { value: '5', label: 'Business days', description: 'Typical launch window for single-property campaigns after kickoff.' },
            ]}
          />
        </div>
      </section>

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]" id="process">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Cadence</p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              From positioning to optimization
            </h2>
            <SectionRule />
          </SeoReveal>
          <div className="mt-12 grid gap-0 md:grid-cols-2 md:gap-x-12">
            {processPhases.map((phase, idx) => (
              <SeoReveal key={phase.title} delay={(idx % 2) * 0.06}>
                <article className="border-t border-[var(--color-ink-200)] py-8 md:py-6">
                  <p className="font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)]">Step {idx + 1}</p>
                  <h3 className="mt-2 font-serif text-xl font-light text-[var(--color-off-black)]">{phase.title}</h3>
                  <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{phase.description}</p>
                </article>
              </SeoReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 border-y border-[var(--color-ink-200)] bg-[var(--surface-base)]" id="reviews">
        <div className="container-max py-10 md:py-12">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Social proof</p>
            <h2 className="mt-3 font-serif text-3xl font-light text-[var(--color-off-black)] md:text-4xl">What clients say</h2>
          </SeoReveal>
        </div>
        <Testimonials omitHeading showStarRating />
      </section>

      <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]">
        <div className="container-max max-w-3xl">
          <SeoReveal>
            <div className="rounded-xl border border-[var(--color-ink-200)] bg-white p-6 md:p-10">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Related programs</p>
              <h2 className="mt-3 font-serif text-2xl font-light text-[var(--color-off-black)] md:text-3xl">Stack with your development go-to-market</h2>
              <p className="mt-5 font-serif text-[15px] leading-[1.85] text-[var(--color-ink-300)]">
                Pair campaigns with{' '}
                <Link href="/websites-for-new-developments" className="underline underline-offset-2 hover:opacity-70">
                  new development websites
                </Link>
                ,{' '}
                <Link href="/luxury-condo-websites" className="underline underline-offset-2 hover:opacity-70">
                  luxury condo websites
                </Link>
                ,{' '}
                <Link href="/single-property-websites" className="underline underline-offset-2 hover:opacity-70">
                  single-property websites
                </Link>
                , and ongoing{' '}
                <Link href="/google-ads-management" className="underline underline-offset-2 hover:opacity-70">
                  Google Ads management
                </Link>
                .
              </p>
            </div>
          </SeoReveal>
        </div>
      </section>

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="faq">
        <div className="container-max max-w-3xl">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Due diligence</p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Questions, answered plainly
            </h2>
            <SectionRule />
          </SeoReveal>
          <div className="mt-10 divide-y divide-[var(--color-ink-200)] rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)]/40 px-1 md:px-2">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group border-0 px-3 py-1 md:px-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-md py-4 font-serif text-lg font-light text-[var(--color-off-black)] outline-none marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="text-pretty">{item.question}</span>
                  <span className="mt-1.5 shrink-0 text-[10px] text-[var(--color-ink-400)] transition-transform duration-300 group-open:rotate-180" aria-hidden>
                    ▼
                  </span>
                </summary>
                <p className="border-t border-transparent pb-5 pt-3 font-serif text-sm leading-relaxed text-[var(--color-ink-300)] group-open:border-[var(--color-ink-200)]/60">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="property-marketing-apply-cta" className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]">
        <div className="container-max mx-auto max-w-2xl text-center">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Your next launch</p>
            <h2 className="mt-3 font-serif text-2xl font-light tracking-tight text-[var(--color-off-black)] sm:text-3xl md:text-4xl">
              Ready to market your development, condo collection, or listing?
            </h2>
            <SectionRule align="center" />
          </SeoReveal>
          <div className="mt-10 flex flex-col items-center gap-4">
            <motion.button
              type="button"
              onClick={openApplyModal}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center rounded-sm border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-4px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0 sm:w-auto"
            >
              Start my property marketing plan
            </motion.button>
            <Link
              href="/calendar"
              className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline"
            >
              Or book a 15-minute strategy call
            </Link>
          </div>
        </div>
      </section>

      <SeoLandingStickyPrimaryCta onApply={openApplyModal}>Start my property marketing plan</SeoLandingStickyPrimaryCta>
    </div>
  )
}
