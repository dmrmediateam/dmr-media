'use client'

import { type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import SeoCaseStudiesHorizontalScroll from '@/components/SeoCaseStudiesHorizontalScroll'
import SeoWebsiteExamplesHorizontalScroll from '@/components/SeoWebsiteExamplesHorizontalScroll'
import ClientLogosSlider from '@/components/ClientLogosSlider'
import VideoTestimonials from '@/components/VideoTestimonials'
import Testimonials from '@/components/Testimonials'
import { SeoLandingStickyPrimaryCta } from '@/components/SeoLandingHeroPrimaryCta'
import {
  dmrVsAlternatives,
  frameworkPillars,
  processPhases,
  programProof,
  stakesThree,
  FAQ_ITEMS,
} from './seller-lead-data'

const APPLY_FORM = 'seller-lead-generation-apply'

function openApplyModal() {
  window.dispatchEvent(new CustomEvent('openApplyModal', { detail: { formName: APPLY_FORM } }))
}

function ApplyCtaBand({
  hint,
  surface,
  className = '',
  primaryHref = '/calendar',
  primaryLabel = 'Book 15-min strategy call',
  secondaryLabel = 'Get my free seller lead audit',
}: {
  hint: string
  surface: 'base' | 'white'
  className?: string
  primaryHref?: string
  primaryLabel?: string
  secondaryLabel?: string
}) {
  const bg = surface === 'white' ? 'bg-white' : 'bg-[var(--surface-base)]'
  const ring =
    surface === 'white' ? 'focus-visible:ring-offset-white' : 'focus-visible:ring-offset-[var(--surface-base)]'
  return (
    <aside
      className={`${bg} border-b border-[var(--color-ink-200)] py-10 md:py-14 ${className}`}
      aria-label="Get a free lead audit or book a strategy call"
    >
      <div className="container-max mx-auto flex max-w-xl flex-col items-center gap-4 px-4 text-center max-lg:gap-5">
        <p className="text-pretty font-serif text-[0.875rem] leading-relaxed text-[var(--color-ink-400)] sm:text-[0.9375rem]">
          {hint}
        </p>
        <button
          type="button"
          onClick={openApplyModal}
          className={`inline-flex min-h-[48px] w-full max-w-xs touch-manipulation items-center justify-center rounded-full border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-8 font-serif text-[11px] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 ${ring} sm:w-auto`}
        >
          {secondaryLabel}
        </button>
        <Link
          href={primaryHref}
          className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline"
        >
          {primaryLabel}
        </Link>
        <p className="font-serif text-[11px] leading-snug text-[var(--color-ink-400)]/85">
          Exclusive seller leads from your own campaigns. Never shared, no referral fee at closing.
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

export default function SellerLeadGenerationPageContent() {
  const reduceMotion = useReducedMotion()

  const faqRenderItems: ReadonlyArray<{ question: string; answer: ReactNode }> = FAQ_ITEMS.map((item) => ({
    question: item.question,
    answer: item.answer,
  }))

  return (
    <div className="min-h-screen bg-white [--seo-section-y:theme(spacing.20)] md:[--seo-section-y:theme(spacing.24)] lg:[--seo-section-y:theme(spacing.28)]">
      <section
        className="scroll-mt-6 overflow-hidden border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] pt-28 sm:pt-32"
        id="top"
        aria-labelledby="seller-hero-title"
      >
        <div className="container-max px-4 sm:px-6">
          <SeoReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
                Seller lead generation · Home valuation campaigns · Exclusive listing leads
              </p>
              <h1
                id="seller-hero-title"
                className="mt-6 text-pretty font-serif text-[clamp(2.25rem,5.5vw,3.75rem)] font-light leading-[1.08] tracking-tight text-[var(--color-off-black)]"
              >
                Seller lead generation for realtors who want more listings.
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-pretty font-serif text-base leading-relaxed text-[var(--color-ink-300)] sm:text-lg">
                We put you in front of homeowners searching &ldquo;what is my home worth&rdquo; in your towns, give
                them a manual valuation that earns the appointment, and nurture the rest until they are ready to list.
                Exclusive seller leads, never shared, no referral fee at closing.
              </p>
              <div className="mt-9 flex flex-col items-center gap-4">
                <button
                  type="button"
                  onClick={openApplyModal}
                  className="inline-flex min-h-[52px] touch-manipulation items-center justify-center rounded-full border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-6px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-[0_10px_28px_-6px_rgba(15,15,15,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] motion-reduce:hover:translate-y-0"
                >
                  Get my free seller lead audit
                </button>
                <Link
                  href="/calendar"
                  className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline"
                >
                  Book 15-min strategy call
                </Link>
                <p className="max-w-md font-serif text-sm leading-relaxed text-[var(--color-ink-400)]">
                  Documented: $36.93 per home valuation lead for Eagan Luxury, with $11,075,000 closed the quarter after launch.
                </p>
              </div>
            </div>
          </SeoReveal>

          <SeoReveal delay={0.12}>
            <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16">
              {/* Soft halo behind the dashboard, in DMR ink tones */}
              <div
                className="pointer-events-none absolute -inset-x-16 -top-16 bottom-0 bg-[radial-gradient(ellipse_at_top,rgba(15,15,15,0.10),transparent_65%)]"
                aria-hidden
              />
              <figure className="relative overflow-hidden rounded-t-xl border border-b-0 border-[var(--color-ink-200)] bg-white p-1.5 pb-0 shadow-[0_-12px_60px_-24px_rgba(15,15,15,0.3)] sm:p-2 sm:pb-0">
                <Image
                  src="/images/EaganCaseStudy/SearchAds.png"
                  alt="Google Ads results for Eagan Luxury's home valuation campaigns managed by DMR Media"
                  width={2066}
                  height={1262}
                  priority
                  className="w-full rounded-t-lg"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
                <figcaption className="sr-only">
                  Eagan Luxury: seller lead generation managed by DMR Media
                </figcaption>
              </figure>
              <p
                className="absolute -left-2 top-6 hidden rounded-2xl border border-[var(--color-ink-200)] bg-white/95 px-4 py-3 font-serif shadow-[0_12px_32px_-12px_rgba(15,15,15,0.25)] backdrop-blur-sm md:block lg:-left-10"
                aria-hidden
              >
                <span className="block text-2xl font-light text-[var(--color-off-black)]">$36.93</span>
                <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)]">
                  Per valuation lead · Eagan
                </span>
              </p>
              <p
                className="absolute -right-2 top-24 hidden rounded-2xl border border-[var(--color-ink-200)] bg-white/95 px-4 py-3 font-serif shadow-[0_12px_32px_-12px_rgba(15,15,15,0.25)] backdrop-blur-sm md:block lg:-right-10"
                aria-hidden
              >
                <span className="block text-2xl font-light text-[var(--color-off-black)]">$11.1M</span>
                <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)]">
                  Closed in Q1 2026
                </span>
              </p>
            </div>
          </SeoReveal>
        </div>
      </section>

      <section id="after-hero" className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white" aria-label="Client logos">
        <ClientLogosSlider />
      </section>

      <section
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]"
        id="stakes"
      >
        <div className="container-max">
          <SeoReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Why this page exists</p>
              <h2 className="mt-3 font-serif text-3xl font-light leading-tight tracking-tight text-[var(--color-off-black)] md:text-4xl">
                Why seller leads slip through most agents&apos; fingers
              </h2>
              <SectionRule align="center" />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                Listings come from homeowners who are thinking about selling long before they call an agent. Three things decide who they pick.
              </p>
            </div>
          </SeoReveal>
          <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 sm:max-lg:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
            {stakesThree.map((s, i) => (
              <SeoReveal key={s.title} delay={i * 0.06} className="h-full">
                <article className="group flex h-full flex-col rounded-2xl border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-5 shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/12 hover:shadow-md motion-reduce:hover:translate-y-0 sm:p-6 lg:p-6">
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
        <SeoCaseStudiesHorizontalScroll
          eyebrow="Listing proof"
          title="Agents who own their seller pipeline"
          description="Case studies include channel mix, timelines, and CRM outcomes. Swipe for more, then get a seller lead audit for your market."
        />
        <VideoTestimonials />
      </div>

      <ApplyCtaBand
        surface="white"
        className="shadow-[inset_0_1px_0_rgba(15,15,15,0.04)]"
        hint="15 minutes. We arrive with home valuation search volume for your towns, your competitors' seller offers, and a plan for your first listing appointments."
      />

      <section
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]"
        id="guide"
      >
        <div className="container-max grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SeoReveal>
            <div>
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">How we work</p>
              <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
                Listing leads you own, from the first search to the signed listing.
              </h2>
              <SectionRule />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                Seller lead generation works when three things line up: you show up when a homeowner searches for their
                home value, you give them a valuation worth their time, and you stay in front of them until they are
                ready. DMR builds and runs all three, and reports cost per valuation lead and listing appointments in
                plain language.
              </p>
              <ul className="mt-8 space-y-4 border-l-2 border-[var(--color-off-black)]/15 pl-5">
                {[
                  'Intent: homeowners searching for a home value in your towns, not cold social audiences',
                  'Offer: a manual valuation with a short video, not another automated estimate',
                  'Nurture: follow-up and a home value newsletter until the seller is ready to list',
                ].map((line) => (
                  <li key={line} className="font-serif text-[var(--color-off-black)]">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </SeoReveal>
          <SeoReveal delay={0.08}>
            <div className="rounded-2xl border border-[var(--color-ink-200)] bg-white p-6 shadow-[0_12px_40px_-12px_rgba(15,15,15,0.12)] sm:p-8">
              <p className="text-center font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">
                DMR vs. typical alternatives
              </p>
              <div className="mt-6 overflow-x-auto rounded-xl">
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
                      <tr
                        key={row.label}
                        className="border-b border-[var(--color-ink-200)] transition-colors last:border-0 hover:bg-[var(--surface-base)]/50"
                      >
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

      <SeoWebsiteExamplesHorizontalScroll variant="ads" sectionId="capture-examples" />

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="framework">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Execution model</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Three layers that turn homeowners into listings.
            </h2>
            <SectionRule />
            <p className="mt-6 max-w-2xl font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
              Seller intent, a valuation offer worth answering, and follow-up that lasts as long as the seller&apos;s
              timeline. One team runs all three.
            </p>
          </SeoReveal>
          <div className="mt-12 grid gap-7 sm:mt-14 sm:gap-8 sm:max-lg:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-10">
            {frameworkPillars.map((p, i) => (
              <SeoReveal key={p.title} delay={i * 0.07}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-ink-200)] bg-[var(--surface-base)] shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/10 hover:shadow-md motion-reduce:hover:translate-y-0">
                  <div className="relative aspect-[4/3] w-full border-b border-[var(--color-ink-200)] bg-white transition-colors group-hover:bg-[#fafafa]">
                    <Image src={p.image} alt={p.imageAlt} fill className="object-contain object-center p-3" sizes="(max-width: 1023px) 90vw, 33vw" />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-6">
                    <h3 className="font-serif text-xl font-light text-[var(--color-off-black)]">{p.title}</h3>
                    <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{p.body}</p>
                  </div>
                </article>
              </SeoReveal>
            ))}
          </div>
        </div>
      </section>

      <ApplyCtaBand
        surface="white"
        className="shadow-[inset_0_1px_0_rgba(15,15,15,0.04)]"
        hint="Pick a 15-minute slot. We bring your seller search volume, your current valuation funnel, and the gaps already mapped."
      />

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]" id="documented-outcomes">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Documented outcomes</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Seller results you can measure
            </h2>
            <SectionRule />
            <p className="mt-6 max-w-2xl font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
              Cost per valuation lead and closed volume from a real DMR account, with the full channel mix in the case study.
            </p>
          </SeoReveal>
          <div className="mt-10 grid gap-5 sm:gap-6 sm:max-lg:grid-cols-2 lg:grid-cols-3">
            {programProof.map((item) => (
              <article key={item.label} className="rounded-2xl border border-[var(--color-ink-200)] bg-white p-5 sm:p-6 lg:p-6">
                <p className="font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">{item.label}</p>
                <p className="mt-3 font-serif text-2xl font-light text-[var(--color-off-black)]">{item.result}</p>
                <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{item.note}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] transition-opacity hover:opacity-60"
            >
              Read full case studies
            </Link>
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="process">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Cadence</p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              From first search to signed listing
            </h2>
            <SectionRule />
            <p className="mt-6 max-w-2xl font-serif text-sm text-[var(--color-ink-300)]">
              Four steps, in order. You approve each one before we spend a dollar on media.
            </p>
          </SeoReveal>
          <div className="relative mt-12 md:pl-3">
            <div
              className="absolute bottom-0 left-[15px] top-2 hidden w-px bg-gradient-to-b from-[var(--color-ink-200)] via-[var(--color-ink-200)] to-transparent md:block"
              aria-hidden
            />
            <div className="grid gap-0 md:grid-cols-2 md:gap-x-12 md:gap-y-4">
              {processPhases.map((phase, idx) => (
                <SeoReveal key={phase.title} delay={(idx % 2) * 0.06}>
                  <article className="relative border-t border-[var(--color-ink-200)] py-8 pl-0 md:border-t-0 md:py-6 md:pl-10">
                    <span
                      className="absolute left-0 top-10 hidden h-2.5 w-2.5 rounded-full border-2 border-[var(--color-off-black)] bg-white md:block"
                      aria-hidden
                    />
                    <p className="font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)]">Step {idx + 1}</p>
                    <h3 className="mt-2 font-serif text-xl font-light text-[var(--color-off-black)]">{phase.title}</h3>
                    <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{phase.description}</p>
                  </article>
                </SeoReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 border-y border-[var(--color-ink-200)] bg-[var(--surface-base)]" id="reviews">
        <div className="container-max py-10 md:py-12">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Social proof</p>
            <h2 className="mt-3 font-serif text-3xl font-light text-[var(--color-off-black)] md:text-4xl">What clients say</h2>
            <p className="mt-3 max-w-2xl font-serif text-sm text-[var(--color-ink-300)]">
              Teams who wanted partnership over vendor theater: pipeline, responsiveness, and trust in their own words.
            </p>
          </SeoReveal>
        </div>
        <Testimonials omitHeading showStarRating visibleIds={[3, 'sandy-reavill', 'jorge-elizondo']} />
      </section>

      <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]">
        <div className="container-max max-w-3xl">
          <SeoReveal>
            <div className="rounded-2xl border border-[var(--color-ink-200)] bg-white p-6 shadow-[0_1px_0_rgba(15,15,15,0.04)] md:p-10">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Ecosystem</p>
              <h2 className="mt-3 font-serif text-2xl font-light text-[var(--color-off-black)] md:text-3xl">How seller leads fit your marketing</h2>
              <p className="mt-5 text-pretty font-serif text-[0.9375rem] leading-[1.82] text-[var(--color-ink-300)] sm:text-[15px] sm:leading-[1.85]">
                Seller campaigns are the listing side of our{' '}
                <Link href="/real-estate-lead-generation" className="underline underline-offset-2 hover:opacity-70">
                  real estate lead generation
                </Link>{' '}
                system, powered by{' '}
                <Link href="/google-ads-management" className="underline underline-offset-2 hover:opacity-70">
                  Google Ads management
                </Link>{' '}
                and{' '}
                <Link href="/seo-optimization" className="underline underline-offset-2 hover:opacity-70">
                  real estate SEO
                </Link>
                . Once the listing is signed,{' '}
                <Link href="/property-marketing" className="underline underline-offset-2 hover:opacity-70">
                  property marketing
                </Link>{' '}
                sells it. For the playbook behind it, read{' '}
                <Link href="/blog/how-to-get-more-listings-as-a-realtor" className="underline underline-offset-2 hover:opacity-70">
                  how to get listings in real estate
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
          <div className="mt-10 divide-y divide-[var(--color-ink-200)] rounded-2xl border border-[var(--color-ink-200)] bg-[var(--surface-base)]/40 px-1 md:px-2">
            {faqRenderItems.map((item) => (
              <details
                key={item.question}
                className="group border-0 px-3 py-1 transition-colors [&[open]]:bg-white/90 md:px-4"
              >
                <summary className="flex min-h-[48px] cursor-pointer list-none items-start justify-between gap-3 rounded-xl py-3 pr-1 font-serif text-base font-light leading-snug text-[var(--color-off-black)] outline-none marker:content-none [&::-webkit-details-marker]:hidden hover:bg-white/60 focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none touch-manipulation sm:gap-4 sm:py-4 sm:text-lg lg:text-lg">
                  <span className="text-pretty">{item.question}</span>
                  <span
                    className="mt-1.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink-200)] bg-white text-[10px] text-[var(--color-ink-400)] transition-transform duration-300 group-open:rotate-180"
                    aria-hidden
                  >
                    ▼
                  </span>
                </summary>
                <div className="border-t border-transparent pb-5 pl-0.5 pr-2 pt-3 font-serif text-sm leading-relaxed text-[var(--color-ink-300)] group-open:border-[var(--color-ink-200)]/60 motion-reduce:transition-none">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="seller-apply-cta"
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]"
      >
        <div className="container-max mx-auto max-w-2xl text-center">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Your next 30 days</p>
            <h2 className="mt-3 font-serif text-2xl font-light tracking-tight text-[var(--color-off-black)] sm:text-3xl md:text-4xl">
              Get a seller lead audit for your market.
            </h2>
            <SectionRule align="center" />
            <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
              We&apos;ll show you how many homeowners search for a home value in your towns each month, what your competitors offer them, and what a seller lead should cost at your price point.
            </p>
          </SeoReveal>
          <div className="mt-10 flex flex-col items-center gap-4">
            <motion.div whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
              <button
                type="button"
                onClick={openApplyModal}
                className="inline-flex min-h-[52px] w-full max-w-xs touch-manipulation items-center justify-center rounded-full border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-4px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-[0_10px_28px_-4px_rgba(15,15,15,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] motion-reduce:hover:translate-y-0 sm:w-auto"
              >
                Get my free seller lead audit
              </button>
            </motion.div>
            <Link
              href="/calendar"
              className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline"
            >
              Book 15-min strategy call
            </Link>
          </div>
          <p className="mt-6 font-serif text-xs text-[var(--color-ink-400)]">
            UTM parameters from your visit are attached when you submit so we can honor the campaign that brought you here.
          </p>
        </div>
      </section>
      <SeoLandingStickyPrimaryCta onApply={openApplyModal}>Get my free seller lead audit</SeoLandingStickyPrimaryCta>
    </div>
  )
}
