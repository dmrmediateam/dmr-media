'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import SeoCaseStudiesHorizontalScroll from '@/components/SeoCaseStudiesHorizontalScroll'
import VideoTestimonials from '@/components/VideoTestimonials'
import ClientLogosSlider from '@/components/ClientLogosSlider'
import Testimonials from '@/components/Testimonials'
import SeoHeroCaseStudyShowcase, { type SeoHeroCaseStudySlide } from '@/components/SeoHeroCaseStudyShowcase'
import {
  SEO_LANDING_HERO_PRIMARY_CTA_CLASSNAME,
  SeoLandingStickyPrimaryCta,
} from '@/components/SeoLandingHeroPrimaryCta'

// ── Exported types (imported by data files) ───────────────────────────────────

export type { SeoHeroCaseStudySlide }

export type ServicePageStakeItem = {
  eyebrow: string
  heading: string
  body: string
}

export type ServicePagePillarItem = {
  title: string
  body: string
  image: string
  imageAlt: string
}

export type ServicePageProofItem = {
  label: string
  result: string
  note: string
}

export type ServicePageProcessStep = {
  title: string
  description: string
}

export type ServicePageComparisonRow = {
  label: string
  dmr: string
  other: string
}

export type ServicePageFaqItem = {
  question: string
  answer: string
}

export type ServicePageRelatedLink = {
  label: string
  href: string
}

export type ServicePageData = {
  applyFormName: string
  hero: {
    eyebrow: string
    headline: string
    subheadline: string
    primaryCtaLabel: string
    guarantee: string
    slides: SeoHeroCaseStudySlide[]
  }
  stakes: {
    eyebrow: string
    heading: string
    subheading: string
    items: ServicePageStakeItem[]
  }
  guide: {
    eyebrow: string
    heading: string
    body: string
    bullets: string[]
    comparisonRows: ServicePageComparisonRow[]
  }
  pillars: {
    eyebrow: string
    heading: string
    subheading: string
    items: ServicePagePillarItem[]
  }
  proof: {
    eyebrow: string
    heading: string
    subheading: string
    items: ServicePageProofItem[]
  }
  process: {
    eyebrow: string
    heading: string
    subheading: string
    steps: ServicePageProcessStep[]
  }
  ctaHints: { mid: string; bottom: string }
  faq: ServicePageFaqItem[]
  testimonialIds: (number | string)[]
  relatedServices: ServicePageRelatedLink[]
  finalCta: {
    eyebrow: string
    heading: string
    subheading: string
    primaryLabel: string
    guarantee: string
  }
}

// ── Internal helpers ──────────────────────────────────────────────────────────

function openApply(formName: string) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('openApplyModal', { detail: { formName } }))
  }
}

function SectionRule({ align = 'left' }: { align?: 'left' | 'center' }) {
  return (
    <div
      className={`mt-5 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent sm:w-20 ${
        align === 'center' ? 'mx-auto' : ''
      }`}
      aria-hidden
    />
  )
}

function CtaBand({
  hint,
  formName,
  label,
  surface = 'base',
  className = '',
}: {
  hint: string
  formName: string
  label: string
  surface?: 'base' | 'white'
  className?: string
}) {
  const bg = surface === 'white' ? 'bg-white' : 'bg-[var(--surface-base)]'
  return (
    <aside
      className={`${bg} border-b border-[var(--color-ink-200)] py-10 md:py-14 ${className}`}
      aria-label="Apply or book a strategy call"
    >
      <div className="container-max mx-auto flex max-w-xl flex-col items-center gap-4 px-4 text-center">
        <p className="font-serif text-[0.875rem] leading-relaxed text-[var(--color-ink-400)] sm:text-[0.9375rem]">
          {hint}
        </p>
        <button
          type="button"
          onClick={() => openApply(formName)}
          className="inline-flex min-h-[48px] w-full max-w-xs touch-manipulation items-center justify-center rounded-sm border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-8 font-serif text-[11px] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 sm:w-auto"
        >
          {label}
        </button>
        <Link
          href="/calendar"
          className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline"
        >
          Book 15-min strategy call
        </Link>
      </div>
    </aside>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const reduceMotion = useReducedMotion()
  const heroEase = [0.25, 0.1, 0.25, 1] as const

  return (
    <div className="min-h-screen bg-white [--seo-section-y:theme(spacing.20)] md:[--seo-section-y:theme(spacing.24)] lg:[--seo-section-y:theme(spacing.28)]">

      {/* ── Hero ── */}
      <section
        className="relative min-h-[90svh] overflow-hidden border-b border-[var(--color-ink-200)] bg-[var(--color-off-black)] scroll-mt-6 lg:min-h-screen"
        id="top"
        aria-labelledby="spt-hero-title"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 65% 40%, rgba(255,255,255,0.03) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(255,255,255,0.015) 0%, transparent 60%)',
          }}
          aria-hidden
        />
        <div className="relative z-10 container-max grid min-h-[inherit] grid-cols-1 items-start gap-8 py-14 sm:gap-10 sm:py-16 max-lg:pb-8 lg:min-h-screen lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20 xl:gap-20">
          <motion.div
            className="max-w-xl text-left max-lg:mx-auto max-lg:w-full lg:mx-0"
            initial={reduceMotion ? false : { opacity: 0.5, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: heroEase }}
          >
            <p className="mb-5 font-serif text-[10px] uppercase leading-relaxed tracking-[0.14em] text-white/80 sm:text-[11px] sm:tracking-[0.16em]">
              {data.hero.eyebrow}
            </p>
            <h1
              id="spt-hero-title"
              className="text-pretty font-serif text-3xl font-light leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              {data.hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-pretty font-serif text-[0.9375rem] leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
              {data.hero.subheadline}
            </p>
            <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-7 sm:items-start">
              <button
                type="button"
                onClick={() => openApply(data.applyFormName)}
                className={`${SEO_LANDING_HERO_PRIMARY_CTA_CLASSNAME} touch-manipulation`}
              >
                {data.hero.primaryCtaLabel}
              </button>
              <Link
                href="/calendar"
                className="font-serif text-[11px] uppercase tracking-[0.18em] text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline sm:self-start"
              >
                Book 15-min strategy call
              </Link>
              <p className="mt-1 max-w-md font-serif text-[12px] leading-snug text-white/60">
                {data.hero.guarantee}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex w-full justify-center max-lg:pt-4 lg:justify-end"
            initial={reduceMotion ? false : { opacity: 0.5, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: heroEase, delay: reduceMotion ? 0 : 0.08 }}
          >
            <SeoHeroCaseStudyShowcase
              slides={data.hero.slides}
              ariaLabel={`${data.hero.eyebrow} case study proof`}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Client logos ── */}
      <section
        id="after-hero"
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white"
        aria-label="Client logos"
      >
        <ClientLogosSlider />
      </section>

      {/* ── Stakes ── */}
      <section
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]"
        id="stakes"
      >
        <div className="container-max">
          <SeoReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
                {data.stakes.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light leading-tight tracking-tight text-[var(--color-off-black)] md:text-4xl">
                {data.stakes.heading}
              </h2>
              <SectionRule align="center" />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                {data.stakes.subheading}
              </p>
            </div>
          </SeoReveal>
          <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 sm:max-lg:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
            {data.stakes.items.map((s, i) => (
              <SeoReveal key={s.heading} delay={i * 0.06} className="h-full">
                <article className="group flex h-full flex-col rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-5 shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/12 hover:shadow-md motion-reduce:hover:translate-y-0 sm:p-6">
                  <p className="font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">
                    {s.eyebrow}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-light text-[var(--color-off-black)]">
                    {s.heading}
                  </h3>
                  <p className="mt-4 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
                    {s.body}
                  </p>
                </article>
              </SeoReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case study proof ── */}
      <div id="proof" className="scroll-mt-24">
        <SeoCaseStudiesHorizontalScroll
          eyebrow="Pipeline proof"
          title="Systems that produced qualified conversations"
          description="Case studies include channel mix, timelines, and outcomes — not cherry-picked screenshots. Swipe for more, then apply when ready for the same rigor in your market."
        />
        <VideoTestimonials />
      </div>

      {/* ── Mid CTA band ── */}
      <CtaBand
        hint={data.ctaHints.mid}
        formName={data.applyFormName}
        label={data.hero.primaryCtaLabel}
        surface="white"
        className="shadow-[inset_0_1px_0_rgba(15,15,15,0.04)]"
      />

      {/* ── Guide: how we work + comparison table ── */}
      <section
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]"
        id="guide"
      >
        <div className="container-max grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SeoReveal>
            <div>
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
                {data.guide.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
                {data.guide.heading}
              </h2>
              <SectionRule />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                {data.guide.body}
              </p>
              <ul className="mt-8 space-y-4 border-l-2 border-[var(--color-off-black)]/15 pl-5">
                {data.guide.bullets.map((line) => (
                  <li key={line} className="font-serif text-[var(--color-off-black)]">
                    {line}
                  </li>
                ))}
              </ul>
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
                      <th className="px-3 py-3 text-xs font-normal uppercase tracking-[0.12em] text-[var(--color-ink-400)]">
                        Dimension
                      </th>
                      <th className="px-3 py-3 text-xs font-normal uppercase tracking-[0.12em] text-[var(--color-off-black)]">
                        DMR
                      </th>
                      <th className="px-3 py-3 text-xs font-normal uppercase tracking-[0.12em] text-[var(--color-ink-400)]">
                        Others
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--color-ink-300)]">
                    {data.guide.comparisonRows.map((row) => (
                      <tr
                        key={row.label}
                        className="border-b border-[var(--color-ink-200)] transition-colors last:border-0 hover:bg-[var(--surface-base)]/50"
                      >
                        <th
                          scope="row"
                          className="px-3 py-3 align-top text-xs uppercase tracking-[0.14em] text-[var(--color-ink-400)]"
                        >
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

      {/* ── Framework pillars ── */}
      <section
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]"
        id="framework"
      >
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
              {data.pillars.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              {data.pillars.heading}
            </h2>
            <SectionRule />
            <p className="mt-6 max-w-2xl font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
              {data.pillars.subheading}
            </p>
          </SeoReveal>
          <div className="mt-12 grid gap-7 sm:mt-14 sm:gap-8 sm:max-lg:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-10">
            {data.pillars.items.map((p, i) => (
              <SeoReveal key={p.title} delay={i * 0.07}>
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/10 hover:shadow-md motion-reduce:hover:translate-y-0">
                  <div className="relative aspect-[4/3] w-full border-b border-[var(--color-ink-200)] bg-white">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1023px) 90vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-serif text-xl font-light text-[var(--color-off-black)]">{p.title}</h3>
                    <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{p.body}</p>
                  </div>
                </article>
              </SeoReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Documented outcomes ── */}
      <section
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]"
        id="outcomes"
      >
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
              {data.proof.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              {data.proof.heading}
            </h2>
            <SectionRule />
            <p className="mt-6 max-w-2xl font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
              {data.proof.subheading}
            </p>
          </SeoReveal>
          <div className="mt-10 grid gap-5 sm:gap-6 sm:max-lg:grid-cols-2 lg:grid-cols-3">
            {data.proof.items.map((item) => (
              <article
                key={item.label}
                className="rounded-lg border border-[var(--color-ink-200)] bg-white p-5 sm:p-6"
              >
                <p className="font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">
                  {item.label}
                </p>
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
              Read full case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA band ── */}
      <CtaBand
        hint={data.ctaHints.bottom}
        formName={data.applyFormName}
        label={data.hero.primaryCtaLabel}
        surface="white"
        className="shadow-[inset_0_1px_0_rgba(15,15,15,0.04)]"
      />

      {/* ── Process steps ── */}
      <section
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]"
        id="process"
      >
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
              {data.process.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              {data.process.heading}
            </h2>
            <SectionRule />
            <p className="mt-6 max-w-2xl font-serif text-sm text-[var(--color-ink-300)]">
              {data.process.subheading}
            </p>
          </SeoReveal>
          <div className="relative mt-12 md:pl-3">
            <div
              className="absolute bottom-0 left-[15px] top-2 hidden w-px bg-gradient-to-b from-[var(--color-ink-200)] via-[var(--color-ink-200)] to-transparent md:block"
              aria-hidden
            />
            <div className="grid gap-0 md:grid-cols-2 md:gap-x-12 md:gap-y-4">
              {data.process.steps.map((step, idx) => (
                <SeoReveal key={step.title} delay={(idx % 2) * 0.06}>
                  <article className="relative border-t border-[var(--color-ink-200)] py-8 pl-0 md:border-t-0 md:py-6 md:pl-10">
                    <span
                      className="absolute left-0 top-10 hidden h-2.5 w-2.5 rounded-full border-2 border-[var(--color-off-black)] bg-white md:block"
                      aria-hidden
                    />
                    <p className="font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)]">
                      Step {idx + 1}
                    </p>
                    <h3 className="mt-2 font-serif text-xl font-light text-[var(--color-off-black)]">
                      {step.title}
                    </h3>
                    <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
                      {step.description}
                    </p>
                  </article>
                </SeoReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className="scroll-mt-24 border-y border-[var(--color-ink-200)] bg-[var(--surface-base)]"
        id="reviews"
      >
        <div className="container-max py-10 md:py-12">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
              Social proof
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-[var(--color-off-black)] md:text-4xl">
              What clients say
            </h2>
          </SeoReveal>
        </div>
        <Testimonials omitHeading showStarRating visibleIds={data.testimonialIds} />
      </section>

      {/* ── Related services ── */}
      <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]">
        <div className="container-max max-w-3xl">
          <SeoReveal>
            <div className="rounded-xl border border-[var(--color-ink-200)] bg-white p-6 shadow-[0_1px_0_rgba(15,15,15,0.04)] md:p-10">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
                Ecosystem
              </p>
              <h2 className="mt-3 font-serif text-2xl font-light text-[var(--color-off-black)] md:text-3xl">
                How this fits your full stack
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {data.relatedServices.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center rounded-sm border border-[var(--color-ink-200)] bg-[var(--surface-base)] px-4 py-2 font-serif text-sm font-light text-[var(--color-off-black)] transition-all hover:border-[var(--color-off-black)]/30 hover:shadow-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </SeoReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]"
        id="faq"
      >
        <div className="container-max max-w-3xl">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
              Due diligence
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Questions, answered plainly
            </h2>
            <SectionRule />
          </SeoReveal>
          <div className="mt-10 divide-y divide-[var(--color-ink-200)] rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)]/40 px-1 md:px-2">
            {data.faq.map((item) => (
              <details
                key={item.question}
                className="group border-0 px-3 py-1 transition-colors [&[open]]:bg-white/90 md:px-4"
              >
                <summary className="flex min-h-[48px] cursor-pointer list-none items-start justify-between gap-3 rounded-md py-3 pr-1 font-serif text-base font-light leading-snug text-[var(--color-off-black)] outline-none marker:content-none [&::-webkit-details-marker]:hidden hover:bg-white/60 focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white touch-manipulation sm:gap-4 sm:py-4 sm:text-lg">
                  <span className="text-pretty">{item.question}</span>
                  <span
                    className="mt-1.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink-200)] bg-white text-[10px] text-[var(--color-ink-400)] transition-transform duration-300 group-open:rotate-180"
                    aria-hidden
                  >
                    ▼
                  </span>
                </summary>
                <div className="border-t border-transparent pb-5 pl-0.5 pr-2 pt-3 font-serif text-sm leading-relaxed text-[var(--color-ink-300)] group-open:border-[var(--color-ink-200)]/60">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        id="apply-cta"
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]"
      >
        <div className="container-max mx-auto max-w-2xl text-center">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
              {data.finalCta.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-2xl font-light tracking-tight text-[var(--color-off-black)] sm:text-3xl md:text-4xl">
              {data.finalCta.heading}
            </h2>
            <SectionRule align="center" />
            <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
              {data.finalCta.subheading}
            </p>
          </SeoReveal>
          <div className="mt-10 flex flex-col items-center gap-4">
            <motion.div whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
              <button
                type="button"
                onClick={() => openApply(data.applyFormName)}
                className="inline-flex min-h-[52px] w-full max-w-xs touch-manipulation items-center justify-center rounded-sm border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-4px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 focus-visible:ring-offset-2 sm:w-auto"
              >
                {data.finalCta.primaryLabel}
              </button>
            </motion.div>
            <Link
              href="/calendar"
              className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline"
            >
              Book 15-min strategy call
            </Link>
            <p className="mt-2 font-serif text-xs text-[var(--color-ink-400)]">{data.finalCta.guarantee}</p>
          </div>
        </div>
      </section>

      <SeoLandingStickyPrimaryCta onApply={() => openApply(data.applyFormName)}>
        {data.hero.primaryCtaLabel}
      </SeoLandingStickyPrimaryCta>
    </div>
  )
}
