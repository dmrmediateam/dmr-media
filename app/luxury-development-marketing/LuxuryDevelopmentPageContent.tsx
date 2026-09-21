'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import SeoCaseStudiesHorizontalScroll from '@/components/SeoCaseStudiesHorizontalScroll'
import SeoWebsiteExamplesHorizontalScroll from '@/components/SeoWebsiteExamplesHorizontalScroll'
import ClientLogosSlider from '@/components/ClientLogosSlider'
import VideoTestimonials from '@/components/VideoTestimonials'
import Testimonials from '@/components/Testimonials'
import { SeoLandingStickyPrimaryCta } from '@/components/SeoLandingHeroPrimaryCta'
import DevelopmentProofSection from './DevelopmentProofSection'
import { devDeliverables, devVsAlternatives, FAQ_ITEMS, processPhases, stakesThree } from './luxury-development-data'

const APPLY_FORM = 'luxury-development-marketing-apply'

function openApplyModal() {
  window.dispatchEvent(new CustomEvent('openApplyModal', { detail: { formName: APPLY_FORM } }))
}

function ApplyCtaBand({
  hint,
  surface,
  className = '',
  primaryLabel = 'Get my development marketing plan',
  secondaryHref = '/calendar',
  secondaryLabel = 'Or schedule a 15-minute call',
}: {
  hint: string
  surface: 'base' | 'white'
  className?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}) {
  const bg = surface === 'white' ? 'bg-white' : 'bg-[var(--surface-base)]'
  const ring =
    surface === 'white' ? 'focus-visible:ring-offset-white' : 'focus-visible:ring-offset-[var(--surface-base)]'
  return (
    <aside
      className={`${bg} border-b border-[var(--color-ink-200)] py-10 md:py-14 ${className}`}
      aria-label="Get a development marketing plan or book a call"
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
          href={secondaryHref}
          className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline"
        >
          {secondaryLabel}
        </Link>
        <p className="font-serif text-[11px] leading-snug text-[var(--color-ink-400)]/85">
          Qualified buyer leads in your CRM within 14 days of launch, or we refund your fee and your ad spend per our
          published terms.
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

export default function LuxuryDevelopmentPageContent() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="min-h-screen bg-white [--seo-section-y:theme(spacing.20)] md:[--seo-section-y:theme(spacing.28)]">
      <section
        className="scroll-mt-6 overflow-hidden border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] pb-16 pt-28 sm:pt-32 md:pb-20"
        id="top"
        aria-labelledby="dev-marketing-hero-title"
      >
        <div className="container-max px-4 sm:px-6">
          <SeoReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
                ★★★★★ 5-stars on Trustpilot &amp; Google
              </p>
              <h1
                id="dev-marketing-hero-title"
                className="mt-6 font-serif text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.06] tracking-tight text-[var(--color-off-black)]"
              >
                Luxury Development
                <br />
                Marketing
              </h1>
              <p className="mx-auto mt-7 max-w-2xl font-serif text-base leading-relaxed text-[var(--color-ink-300)] sm:text-lg">
                We build your development a marketing system that generates qualified buyer leads in 2 weeks,{' '}
                <em className="italic">or we refund you everything</em>. Project website, paid media, SEO, and our
                exact follow-up scripts, from presale positioning through sellout.
              </p>
              <div className="mt-9 flex flex-col items-center gap-4">
                <button
                  type="button"
                  onClick={openApplyModal}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-6px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-[0_10px_28px_-6px_rgba(15,15,15,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] motion-reduce:hover:translate-y-0"
                >
                  Get my development marketing plan
                </button>
                <Link
                  href="/calendar"
                  className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline"
                >
                  Or book a 15-minute strategy call
                </Link>
                <p className="max-w-md font-serif text-sm leading-relaxed text-[var(--color-ink-400)]">
                  Unlike other agencies, we put our money where our mouth is. If you want qualified buyers filling your
                  sales pipeline, go with the team that actually makes that happen.
                </p>
              </div>
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
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Why this page exists</p>
              <h2 className="mt-3 font-serif text-3xl font-light leading-tight tracking-tight text-[var(--color-off-black)] md:text-4xl">
                Is your marketing filling the sales office, or decorating the project?
              </h2>
              <SectionRule align="center" />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                Development marketing gets judged on absorption, not impressions. Three patterns we see in projects with
                beautiful brands and empty tour calendars.
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

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]" id="whats-included">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Scope of work</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              What luxury development marketing includes
            </h2>
            <SectionRule />
            <p className="mt-8 max-w-2xl font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
              One accountable team for the website, the campaigns, the SEO, and the follow-up, so every dollar of the
              marketing budget learns from registrations and contracts, not impressions. Here is the standing scope on
              every development engagement.
            </p>
          </SeoReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {devDeliverables.map((item, i) => (
              <SeoReveal key={item.title} delay={(i % 4) * 0.05} className="h-full">
                <article className="flex h-full flex-col rounded-lg border border-[var(--color-ink-200)] bg-white p-6 shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/12 hover:shadow-md motion-reduce:hover:translate-y-0">
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

      <DevelopmentProofSection />

      <ApplyCtaBand
        surface="white"
        className="shadow-[inset_0_1px_0_rgba(15,15,15,0.04)]"
        hint="Tell us about the project and we arrive with the competitive set, the buyer profile, and the biggest gaps already mapped."
      />

      <div id="proof" className="scroll-mt-24">
        <SeoCaseStudiesHorizontalScroll
          eyebrow="Client results"
          title="Results teams can trace to names and sources"
          description={
            <p>
              Documented CPL drops, stronger appointment volume, and pipeline teams can trace to names and sources.
            </p>
          }
          ariaLabel="Development marketing case studies"
        />
        <VideoTestimonials />
      </div>

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]" id="guide">
        <div className="container-max grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SeoReveal>
            <div>
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">How we work</p>
              <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
                We do not sell &ldquo;brand packages.&rdquo; We install a buyer engine.
              </h2>
              <SectionRule />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                A development needs one team accountable for the whole path: positioning, project website, paid media,
                SEO, and the follow-up that turns registrations into tours. DMR runs that entire system, and backs it
                with a guarantee other agencies will not make.
              </p>
              <ul className="mt-8 space-y-4 border-l-2 border-[var(--color-off-black)]/15 pl-5">
                {[
                  'Clarity: a launch plan you can defend to the development partners',
                  'Cadence: weekly optimization and per-phase pacing reviews',
                  'Proof: registrations, tours, and contracts tied to spend',
                ].map((line) => (
                  <li key={line} className="font-serif text-[var(--color-off-black)]">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </SeoReveal>
          <SeoReveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="rounded-xl border border-[var(--color-off-black)]/25 bg-white p-6 shadow-[0_12px_40px_-12px_rgba(15,15,15,0.18)] sm:p-7">
                <p className="font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">With</p>
                <p className="mt-1 font-serif text-xl font-light tracking-[0.06em] text-[var(--color-off-black)]">DMR</p>
                <ul className="mt-6 space-y-5">
                  {devVsAlternatives.map((row) => (
                    <li key={row.label} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)] text-[10px] leading-none text-white"
                        aria-hidden
                      >
                        ✓
                      </span>
                      <div>
                        <p className="font-serif text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-400)]">{row.label}</p>
                        <p className="mt-0.5 font-serif text-sm leading-relaxed text-[var(--color-off-black)]">{row.dmr}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-[var(--color-ink-200)] bg-[var(--surface-base)]/70 p-6 sm:p-7">
                <p className="font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">With</p>
                <p className="mt-1 font-serif text-xl font-light text-[var(--color-ink-400)]">Typical alternatives</p>
                <ul className="mt-6 space-y-5">
                  {devVsAlternatives.map((row) => (
                    <li key={row.label} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink-200)] text-[10px] leading-none text-[var(--color-ink-400)]"
                        aria-hidden
                      >
                        ✕
                      </span>
                      <div>
                        <p className="font-serif text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-400)]/80">{row.label}</p>
                        <p className="mt-0.5 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{row.other}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SeoReveal>
        </div>
      </section>

      <SeoWebsiteExamplesHorizontalScroll variant="ads" />

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="process">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Cadence</p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              From positioning to sellout
            </h2>
            <SectionRule />
            <p className="mt-6 max-w-2xl font-serif text-sm text-[var(--color-ink-300)]">
              Clear steps reduce anxiety and wasted budget. Here is how we guide a project from the first audit to
              paced, measured absorption.
            </p>
          </SeoReveal>
          <div className="relative mt-12 md:pl-3">
            <div
              className="absolute bottom-0 left-[15px] top-2 hidden w-px bg-gradient-to-b from-[var(--color-ink-200)] via-[var(--color-ink-200)] to-transparent md:block"
              aria-hidden
            />
            <div className="grid gap-0 md:grid-cols-2 md:gap-x-12 md:gap-y-4">
              {processPhases.map((phase, idx) => {
                const isGuarantee = phase.title === 'The guarantee window'
                return (
                  <SeoReveal key={phase.title} delay={(idx % 2) * 0.06}>
                    <article className="relative border-t border-[var(--color-ink-200)] py-8 pl-0 md:border-t-0 md:py-6 md:pl-10">
                      <span
                        className={`absolute left-0 top-10 hidden h-2.5 w-2.5 rounded-full border-2 border-[var(--color-off-black)] md:block ${isGuarantee ? 'bg-[var(--color-off-black)]' : 'bg-white'}`}
                        aria-hidden
                      />
                      <p className="flex flex-wrap items-center gap-2 font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)]">
                        Step {idx + 1}
                        {isGuarantee && (
                          <span className="rounded-full border border-[var(--color-off-black)]/30 px-2.5 py-0.5 text-[9px] tracking-[0.18em] text-[var(--color-off-black)]">
                            Risk reversal
                          </span>
                        )}
                      </p>
                      <h3 className="mt-2 font-serif text-xl font-light text-[var(--color-off-black)]">{phase.title}</h3>
                      <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{phase.description}</p>
                    </article>
                  </SeoReveal>
                )
              })}
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
              Teams who value partnership over vendor theater, in their own words.
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
              <h2 className="mt-3 font-serif text-2xl font-light text-[var(--color-off-black)] md:text-3xl">
                How development marketing fits your stack
              </h2>
              <p className="mt-5 font-serif text-[15px] leading-[1.85] text-[var(--color-ink-300)]">
                Pair the buyer engine with{' '}
                <Link href="/google-ads-management" className="underline underline-offset-2 hover:opacity-70">
                  PPC management
                </Link>
                ,{' '}
                <Link href="/seo-optimization" className="underline underline-offset-2 hover:opacity-70">
                  SEO optimization
                </Link>
                , flagship{' '}
                <Link href="/websites-for-new-developments" className="underline underline-offset-2 hover:opacity-70">
                  development websites
                </Link>
                ,{' '}
                <Link href="/single-property-websites" className="underline underline-offset-2 hover:opacity-70">
                  single-property websites
                </Link>{' '}
                for signature units, and{' '}
                <Link href="/analytics-reporting" className="underline underline-offset-2 hover:opacity-70">
                  analytics and reporting
                </Link>{' '}
                the partners can read.
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
              Development marketing questions, answered plainly
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
        id="development-apply-cta"
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]"
      >
        <div className="container-max mx-auto max-w-2xl text-center">
          <SeoReveal>
            <div
              className="mx-auto flex h-28 w-28 flex-col items-center justify-center rounded-full border border-[var(--color-off-black)]/30 bg-white shadow-[0_10px_30px_-12px_rgba(15,15,15,0.25)]"
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
            <p className="mt-6 font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Your next 14 days</p>
            <h2 className="mt-3 font-serif text-2xl font-light tracking-tight text-[var(--color-off-black)] sm:text-3xl md:text-4xl">
              Qualified buyer leads in 2 weeks, or we refund you everything.
            </h2>
            <SectionRule align="center" />
            <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
              Two minutes now saves a quarter of guessing. We arrive with the competitive set, the buyer profile, and a
              concrete launch plan for your project, and the guarantee terms in writing.
            </p>
          </SeoReveal>
          <div className="mt-10 flex flex-col items-center gap-4">
            <motion.button
              type="button"
              onClick={openApplyModal}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center rounded-sm border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-4px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-[0_10px_28px_-4px_rgba(15,15,15,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] motion-reduce:hover:translate-y-0 sm:w-auto"
            >
              Get my development marketing plan
            </motion.button>
            <Link
              href="/calendar"
              className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline"
            >
              Or book a 15-minute strategy call
            </Link>
          </div>
          <p className="mt-6 font-serif text-xs text-[var(--color-ink-400)]">
            UTM parameters from your visit are attached when you submit so we can honor the campaign that brought you here.
          </p>
        </div>
      </section>
      <SeoLandingStickyPrimaryCta onApply={openApplyModal}>Get my development marketing plan</SeoLandingStickyPrimaryCta>
    </div>
  )
}
