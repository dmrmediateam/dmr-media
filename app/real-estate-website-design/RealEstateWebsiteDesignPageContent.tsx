'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import SeoCaseStudiesHorizontalScroll from '@/components/SeoCaseStudiesHorizontalScroll'
import TopWebsites from '@/components/TopWebsites'
import ClientLogosSlider from '@/components/ClientLogosSlider'
import VideoTestimonials from '@/components/VideoTestimonials'
import ServiceStats from '@/components/service/ServiceStats'
import Testimonials from '@/components/Testimonials'
import { SeoLandingStickyPrimaryCta } from '@/components/SeoLandingHeroPrimaryCta'
import { AI_ANSWERS, BRAND_BUILDS, DESIGNRUSH_BADGE } from '@/app/landing/website-development/WebsiteDevBody'
import {
  dmrVsAlternatives,
  FAQ_ITEMS,
  processPhases,
  serviceStats,
  stakesThree,
  websiteDeliverables,
} from './website-design-data'

const APPLY_FORM = 'real-estate-website-design-apply'
const PRIMARY_CTA = 'Get my website proposal'

function openApplyModal() {
  window.dispatchEvent(new CustomEvent('openApplyModal', { detail: { formName: APPLY_FORM } }))
}

function ApplyCtaBand({ hint, className = '' }: { hint: string; className?: string }) {
  return (
    <aside
      className={`border-b border-[var(--color-ink-200)] bg-white py-10 md:py-14 ${className}`}
      aria-label="Get a website proposal or book a call"
    >
      <div className="container-max mx-auto flex max-w-xl flex-col items-center gap-4 px-4 text-center">
        <p className="font-serif text-[0.9375rem] leading-relaxed text-[var(--color-ink-400)]">{hint}</p>
        <button
          type="button"
          onClick={openApplyModal}
          className="inline-flex min-h-[48px] w-full max-w-xs items-center justify-center rounded-sm border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-8 font-serif text-[11px] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-colors motion-reduce:hover:translate-y-0 sm:w-auto"
        >
          {PRIMARY_CTA}
        </button>
        <Link
          href="/calendar"
          className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline"
        >
          Or schedule a 15-minute call
        </Link>
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

/** Screenshot frame shared by the portfolio, lead capture, and AI search sections. */
function ShotFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-[var(--color-ink-200)] bg-white p-1.5 shadow-[0_20px_50px_-28px_rgba(15,15,15,0.4)] sm:p-2 ${className}`}
    >
      {children}
    </div>
  )
}

export default function RealEstateWebsiteDesignPageContent() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="min-h-screen bg-white [--seo-section-y:theme(spacing.20)] md:[--seo-section-y:theme(spacing.28)]">
      <section
        className="scroll-mt-6 overflow-hidden border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] pt-28 sm:pt-32"
        id="top"
        aria-labelledby="website-design-hero-title"
      >
        <div className="container-max px-4 sm:px-6">
          <SeoReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
                ★★★★★ 5-stars on Trustpilot &amp; Google
              </p>
              <h1
                id="website-design-hero-title"
                className="mt-6 font-serif text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.06] tracking-tight text-[var(--color-off-black)]"
              >
                Luxury Real Estate
                <br />
                Website Design
              </h1>
              <p className="mx-auto mt-7 max-w-2xl font-serif text-base leading-relaxed text-[var(--color-ink-300)] sm:text-lg">
                Websites for luxury agents, teams, and developments, designed to your brand and nominated for DesignRush
                Design Awards. Live MLS search, lead capture that feeds your CRM, and pages built to rank in Google and
                AI search.
              </p>
              <div className="mt-9 flex flex-col items-center gap-4">
                <button
                  type="button"
                  onClick={openApplyModal}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-6px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-[0_10px_28px_-6px_rgba(15,15,15,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] motion-reduce:hover:translate-y-0"
                >
                  {PRIMARY_CTA}
                </button>
                <Link
                  href="/calendar"
                  className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline"
                >
                  Or book a 15-minute strategy call
                </Link>
                <p className="max-w-md font-serif text-sm leading-relaxed text-[var(--color-ink-400)]">
                  Templated, semi-custom, or fully custom. Every build includes IDX search on your own domain.
                </p>
              </div>
            </div>
          </SeoReveal>

          <SeoReveal delay={0.12}>
            <div className="relative mx-auto mt-14 max-w-5xl sm:mt-16">
              <div
                className="pointer-events-none absolute -inset-x-16 -top-16 bottom-0 bg-[radial-gradient(ellipse_at_top,rgba(15,15,15,0.10),transparent_65%)]"
                aria-hidden
              />
              <figure className="relative overflow-hidden rounded-t-xl border border-b-0 border-[var(--color-ink-200)] bg-white p-1.5 pb-0 shadow-[0_-12px_60px_-24px_rgba(15,15,15,0.3)] sm:p-2 sm:pb-0">
                <a
                  href="https://www.alexadevaney.com/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label="Visit Alexa Devaney's live website (opens in a new tab)"
                  className="block"
                >
                  <Image
                    src="/images/seo/alexa-devaney-hero.jpg"
                    alt="Alexa Devaney website home page for The Oppenheim Group, designed by DMR Media"
                    width={1400}
                    height={868}
                    priority
                    className="w-full rounded-t-lg"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </a>
                <figcaption className="sr-only">
                  Alexa Devaney, The Oppenheim Group, a DesignRush Design Awards nominee built by DMR Media
                </figcaption>
              </figure>
              <Image
                src={DESIGNRUSH_BADGE}
                alt="DesignRush.com Design Awards Nominee"
                width={351}
                height={424}
                className="absolute -left-2 -top-4 z-10 h-auto w-14 drop-shadow-[0_10px_24px_rgba(15,15,15,0.3)] sm:w-[4.5rem] lg:-left-8"
              />
              <p
                className="absolute -right-2 top-10 hidden rounded-lg border border-[var(--color-ink-200)] bg-white/95 px-4 py-3 font-serif shadow-[0_12px_32px_-12px_rgba(15,15,15,0.25)] backdrop-blur-sm md:block lg:-right-10"
                aria-hidden
              >
                <span className="block text-2xl font-light text-[var(--color-off-black)]">3×</span>
                <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)]">
                  DesignRush nominee
                </span>
              </p>
              <p
                className="absolute -left-2 top-36 hidden rounded-lg border border-[var(--color-ink-200)] bg-white/95 px-4 py-3 font-serif shadow-[0_12px_32px_-12px_rgba(15,15,15,0.25)] backdrop-blur-sm md:block lg:-left-10"
                aria-hidden
              >
                <span className="block text-2xl font-light text-[var(--color-off-black)]">600+</span>
                <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)]">
                  MLSs via IDX
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
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Why it matters</p>
              <h2 className="mt-3 font-serif text-3xl font-light leading-tight tracking-tight text-[var(--color-off-black)] md:text-4xl">
                Is your website winning listings, or quietly losing them?
              </h2>
              <SectionRule align="center" />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                At luxury price points, buyers and sellers decide from small signals. Three places agent websites lose
                them.
              </p>
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

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]" id="portfolio">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Award-nominated work</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Designs built to your brand and brokerage
            </h2>
            <SectionRule />
            <p className="mt-8 max-w-2xl font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
              Each of these sites was designed around the agent and the brokerage, and each was nominated for the
              DesignRush Design Awards.
            </p>
          </SeoReveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {BRAND_BUILDS.map((b, i) => (
              <SeoReveal key={b.name} delay={i * 0.06} className="min-w-0">
                <article>
                  <div className="relative">
                    <a
                      href={b.href}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="group block"
                      aria-label={`Visit ${b.name}'s live website (opens in a new tab)`}
                    >
                      <ShotFrame>
                        <Image
                          src={b.image}
                          alt={`${b.name} website home page for ${b.brokerage}, designed by DMR Media`}
                          width={1400}
                          height={868}
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="h-auto w-full rounded-lg transition-transform duration-500 group-hover:scale-[1.01] motion-reduce:transition-none"
                        />
                      </ShotFrame>
                    </a>
                    <Image
                      src={DESIGNRUSH_BADGE}
                      alt="DesignRush.com Design Awards Nominee"
                      width={351}
                      height={424}
                      className="absolute -left-2 -top-3 h-auto w-14 drop-shadow-md sm:w-16"
                    />
                  </div>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-xl font-light text-[var(--color-off-black)]">{b.name}</h3>
                      <p className="font-serif text-xs text-[var(--color-ink-400)]">{b.market}</p>
                      <a
                        href={b.href}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="mt-2 inline-flex min-h-[32px] items-center gap-1 border-b border-[var(--color-off-black)]/30 font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-off-black)] transition-colors hover:border-[var(--color-off-black)]"
                      >
                        View live site <span aria-hidden>↗</span>
                      </a>
                    </div>
                    <Image src={b.logo.src} alt={b.logo.alt} width={b.logo.width} height={b.logo.height} className={`w-auto ${b.logo.className}`} />
                  </div>
                </article>
              </SeoReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="whats-included">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Scope of work</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              What luxury real estate website design includes
            </h2>
            <SectionRule />
            <p className="mt-8 max-w-2xl font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
              Every DMR website, from templated to fully custom, ships with the same foundation.
            </p>
          </SeoReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {websiteDeliverables.map((item, i) => (
              <SeoReveal key={item.title} delay={(i % 4) * 0.05} className="h-full">
                <article className="flex h-full flex-col rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6 shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/12 hover:shadow-md motion-reduce:hover:translate-y-0">
                  <p className="font-serif text-xs uppercase tracking-[0.18em] text-[var(--color-ink-400)]">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 font-serif text-lg font-light leading-snug text-[var(--color-off-black)]">{item.title}</h3>
                  <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{item.body}</p>
                </article>
              </SeoReveal>
            ))}
          </div>
        </div>
      </section>

      <div id="proof" className="scroll-mt-24">
        <SeoCaseStudiesHorizontalScroll
          eyebrow="Client results"
          title="The results behind the designs"
          description={<p>Named clients, real dashboards, and pipeline you can check yourself.</p>}
          ariaLabel="Website and SEO case studies"
        />
        <VideoTestimonials />
      </div>

      <ApplyCtaBand
        className="shadow-[inset_0_1px_0_rgba(15,15,15,0.04)]"
        hint="Tell us about your market and brokerage. We send a proposal with examples and pricing for the build that fits."
      />

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]" id="guide">
        <div className="container-max grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SeoReveal className="min-w-0">
            <div>
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">How we work</p>
              <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
                One team for the design, the listings, and the leads.
              </h2>
              <SectionRule />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                Your clients are the hero of the story, and your website is the guide that makes the next step
                obvious. We design it, connect it to your MLS and CRM, and keep it working after launch.
              </p>
              <ul className="mt-8 space-y-4 border-l-2 border-[var(--color-off-black)]/15 pl-5">
                {[
                  'Brand: a design that matches you and your brokerage',
                  'Listings: live IDX search and registration on your own domain',
                  'Leads: every registration routed to your CRM, source attached',
                ].map((line) => (
                  <li key={line} className="font-serif text-[var(--color-off-black)]">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </SeoReveal>
          <SeoReveal delay={0.08} className="min-w-0">
            <div className="rounded-xl border border-[var(--color-ink-200)] bg-white p-6 shadow-[0_12px_40px_-12px_rgba(15,15,15,0.12)] sm:p-8">
              <p className="text-center font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">
                DMR vs. typical agent websites
              </p>
              <div className="mt-6 overflow-x-auto rounded-lg">
                <table className="w-full min-w-[520px] text-left font-serif text-sm">
                  <thead>
                    <tr className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]/80">
                      <th className="px-3 py-3 pr-4 text-xs font-normal uppercase tracking-[0.12em] text-[var(--color-ink-400)]">Dimension</th>
                      <th className="px-3 py-3 pr-4 text-xs font-normal uppercase tracking-[0.12em] text-[var(--color-off-black)]">DMR</th>
                      <th className="px-3 py-3 text-xs font-normal uppercase tracking-[0.12em] text-[var(--color-ink-400)]">Others</th>
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

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="lead-capture">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Lead capture</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Buyers register on your site, not a portal
            </h2>
            <SectionRule />
            <p className="mt-8 max-w-2xl font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
              Visitors register to see full listing details, and the lead goes straight to your CRM. A live listing on
              Elite Realtors&apos; site in Bakersfield, CA.
            </p>
          </SeoReveal>
          <SeoReveal delay={0.08}>
            {/* Phones zoom into the popup so the form is readable; larger screens show the full screenshot. */}
            <div className="relative mx-auto mt-12 aspect-[1376/828] max-w-5xl overflow-hidden rounded-2xl border border-[var(--color-ink-200)] shadow-[0_30px_80px_-40px_rgba(15,15,15,0.45)] sm:aspect-[2000/963]">
              <Image
                src="/images/landing/website-development/elite-realtors-lead-capture.webp"
                alt="Elite Realtors registration popup on a Bakersfield listing: View Full Property Details with name, email, phone, and SMS consent fields"
                width={2000}
                height={963}
                sizes="(min-width: 1024px) 1024px, 150vw"
                className="absolute -left-[22.7%] -top-[8.3%] h-auto w-[145.3%] max-w-none sm:static sm:w-full"
              />
            </div>
          </SeoReveal>
        </div>
      </section>

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]" id="ai-search">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
              AI search · Dolphin Cay, St. Petersburg
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Built to be the agent Google, ChatGPT, and Perplexity recommend
            </h2>
            <SectionRule />
            <p className="mt-8 max-w-2xl font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
              Ask any of the three for the best realtor in Dolphin Cay. Each one names our client, Debi Eagan of Eagan
              Luxury, first.
            </p>
          </SeoReveal>
          <SeoReveal delay={0.08}>
            <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [-webkit-overflow-scrolling:touch] lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
              {AI_ANSWERS.map((a) => (
                <figure key={a.tool} className="w-[84%] min-w-0 shrink-0 snap-start sm:w-[60%] lg:w-auto">
                  <figcaption className="mb-3 flex items-center justify-between gap-3">
                    <span className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-off-black)]">{a.tool}</span>
                    <span className="gg-body shrink-0 rounded-full bg-[var(--color-off-black)] px-3 py-1 !font-sans !text-[10px] font-semibold uppercase tracking-[0.14em] !text-white">
                      #1 · Debi Eagan
                    </span>
                  </figcaption>
                  <ShotFrame>
                    <Image src={a.image} alt={a.alt} width={a.width} height={a.height} sizes="(min-width: 1024px) 380px, 84vw" className="h-auto w-full rounded-lg" />
                  </ShotFrame>
                </figure>
              ))}
            </div>
            <p className="mt-2 font-serif text-xs text-[var(--color-ink-400)] lg:hidden" aria-hidden>
              Swipe to see all three →
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_12px_30px_-12px_rgba(15,15,15,0.45)] sm:h-24 sm:w-24">
                <Image
                  src="/images/landing/website-development/debi-eagan-headshot.webp"
                  alt="Debi Eagan of Eagan Luxury in St. Petersburg, FL"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-xl font-light text-[var(--color-off-black)]">Debi Eagan</p>
                <p className="font-serif text-xs text-[var(--color-ink-400)]">
                  Eagan Luxury · St. Petersburg, FL ·{' '}
                  <Link href="/case-study/eagan-luxury-real-estate" className="underline underline-offset-2 hover:opacity-70">
                    Read the case study
                  </Link>
                </p>
              </div>
            </div>
          </SeoReveal>
        </div>
      </section>

      <section id="websites" className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white">
        <TopWebsites />
      </section>

      <ApplyCtaBand
        className="shadow-[inset_0_1px_0_rgba(15,15,15,0.04)]"
        hint="Not sure whether to rebuild or refresh? We will map what to keep from your current site and what to change."
      />

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="stats">
        <div className="container-max">
          <ServiceStats embedded heading="The numbers, with their sources" stats={[...serviceStats]} />
        </div>
      </section>

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]" id="process">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Cadence</p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Our website design process
            </h2>
            <SectionRule />
            <p className="mt-6 max-w-2xl font-serif text-sm text-[var(--color-ink-300)]">
              Templated sites can launch in about a week. Semi-custom and fully custom sites typically launch in about
              four weeks from kickoff.
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
              5/5 stars on Trustpilot and Google, in our clients&apos; own words.
            </p>
          </SeoReveal>
        </div>
        <Testimonials omitHeading showStarRating />
      </section>

      <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]">
        <div className="container-max max-w-3xl">
          <SeoReveal>
            <div className="rounded-xl border border-[var(--color-ink-200)] bg-white p-6 shadow-[0_1px_0_rgba(15,15,15,0.04)] md:p-10">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Ecosystem</p>
              <h2 className="mt-3 font-serif text-2xl font-light text-[var(--color-off-black)] md:text-3xl">How website design fits your marketing</h2>
              <p className="mt-5 font-serif text-[15px] leading-[1.85] text-[var(--color-ink-300)]">
                Pair your website with{' '}
                <Link href="/seo-optimization" className="underline underline-offset-2 hover:opacity-70">
                  SEO optimization
                </Link>
                ,{' '}
                <Link href="/google-ads-management" className="underline underline-offset-2 hover:opacity-70">
                  Google Ads management
                </Link>
                , and{' '}
                <Link href="/analytics-reporting" className="underline underline-offset-2 hover:opacity-70">
                  analytics and reporting
                </Link>
                . Launching a signature listing or a new building? See{' '}
                <Link href="/single-property-websites" className="underline underline-offset-2 hover:opacity-70">
                  single-property websites
                </Link>{' '}
                and{' '}
                <Link href="/luxury-development-marketing" className="underline underline-offset-2 hover:opacity-70">
                  luxury development marketing
                </Link>
                , or browse more{' '}
                <Link href="/real-estate-agent-website-samples" className="underline underline-offset-2 hover:opacity-70">
                  real estate website examples
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
              Luxury real estate website questions, answered plainly
            </h2>
            <SectionRule />
          </SeoReveal>
          <div className="mt-10 divide-y divide-[var(--color-ink-200)] rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)]/40 px-1 md:px-2">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group border-0 px-3 py-1 transition-colors [&[open]]:bg-white/90 md:px-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-md py-4 pr-1 font-serif text-lg font-light text-[var(--color-off-black)] outline-none marker:content-none [&::-webkit-details-marker]:hidden hover:bg-white/60 focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none">
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
        id="website-design-apply-cta"
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]"
      >
        <div className="container-max mx-auto max-w-2xl text-center">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Next step</p>
            <h2 className="mt-3 font-serif text-2xl font-light tracking-tight text-[var(--color-off-black)] sm:text-3xl md:text-4xl">
              Build the website your market assumes you already have.
            </h2>
            <SectionRule align="center" />
            <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
              Two minutes. Tell us your market, brokerage, and the leads you want, and we come back with examples and
              pricing for the build that fits.
            </p>
          </SeoReveal>
          <div className="mt-10 flex flex-col items-center gap-4">
            <motion.button
              type="button"
              onClick={openApplyModal}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center rounded-sm border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-4px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-[0_10px_28px_-4px_rgba(15,15,15,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] motion-reduce:hover:translate-y-0 sm:w-auto"
            >
              {PRIMARY_CTA}
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
      <SeoLandingStickyPrimaryCta onApply={openApplyModal}>{PRIMARY_CTA}</SeoLandingStickyPrimaryCta>
    </div>
  )
}
