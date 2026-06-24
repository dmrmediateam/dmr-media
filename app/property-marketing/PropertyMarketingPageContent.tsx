'use client'

import { useRef, useState } from 'react'
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
import SeoHeroCaseStudyShowcase from '@/components/SeoHeroCaseStudyShowcase'
import {
  SEO_LANDING_HERO_PRIMARY_CTA_CLASSNAME,
  SeoLandingStickyPrimaryCta,
} from '@/components/SeoLandingHeroPrimaryCta'
import {
  dmrVsAlternatives,
  FAQ_ITEMS,
  frameworkPillars,
  heroCaseStudySlides,
  processPhases,
  stakesThree,
} from './property-marketing-data'

const APPLY_FORM = 'property-marketing-apply'
const HERO_VIDEO_SRC = '/videos/DMR%20-%20INTRO%204K.mp4'

function VolumeOffIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}

function VolumeOnIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  )
}

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
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const [isHeroMuted, setIsHeroMuted] = useState(true)
  const reduceMotion = useReducedMotion()

  const toggleHeroMute = () => {
    const video = heroVideoRef.current
    if (!video) return
    const nextMuted = !video.muted
    video.muted = nextMuted
    setIsHeroMuted(nextMuted)
    void video.play().catch(() => {})
  }

  const heroEase = [0.25, 0.1, 0.25, 1] as const

  return (
    <div className="min-h-screen bg-white [--seo-section-y:theme(spacing.20)] md:[--seo-section-y:theme(spacing.28)]">
      <section
        className="relative min-h-screen overflow-hidden border-b border-[var(--color-ink-200)] scroll-mt-6"
        id="top"
        aria-labelledby="property-marketing-hero-title"
      >
        <div className="absolute inset-0 z-0">
          <video
            ref={heroVideoRef}
            className="absolute inset-0 z-0 h-full w-full object-cover"
            src={HERO_VIDEO_SRC}
            autoPlay
            muted={isHeroMuted}
            loop
            playsInline
            preload="metadata"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-[#0f0f0f]/72" aria-hidden />
        </div>
        <div className="relative z-10 container-max grid min-h-screen grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 xl:gap-20 pointer-events-none">
          <motion.div
            className="pointer-events-auto max-w-xl text-left lg:max-w-xl"
            initial={reduceMotion ? false : { opacity: 0.5, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: heroEase }}
          >
            <p className="mb-5 max-w-xl font-serif text-[10px] uppercase leading-relaxed tracking-[0.14em] text-white/80 sm:text-[11px] sm:tracking-[0.16em]">
              New developments · luxury condos · trophy listings
            </p>
            <h1
              id="property-marketing-hero-title"
              className="font-serif text-3xl font-light leading-[1.08] tracking-tight !text-white sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              Property marketing for new developments, condos, and exceptional listings
            </h1>
            <p className="mt-6 max-w-xl font-serif text-base leading-relaxed !text-white sm:text-lg">
              We build dedicated development and condo sites, run 30-day Google Ads bursts with media included, and ship
              launch email copy so presale buyers and luxury shoppers tour faster, not someday.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:items-start">
              <button type="button" onClick={openApplyModal} className={SEO_LANDING_HERO_PRIMARY_CTA_CLASSNAME}>
                Start my property marketing plan
              </button>
              <Link
                href="/calendar"
                className="font-serif text-[11px] uppercase tracking-[0.18em] text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline sm:self-start"
              >
                Or book a 15-minute strategy call
              </Link>
              <p className="mt-1 max-w-md font-serif text-[12px] leading-snug text-white/70">
                Current DMR clients: $2,500 pay-at-close per listing. Google Ads spend covered in the flat fee.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="pointer-events-auto flex justify-center lg:justify-end"
            initial={reduceMotion ? false : { opacity: 0.5, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: heroEase, delay: reduceMotion ? 0 : 0.08 }}
          >
            <SeoHeroCaseStudyShowcase
              slides={[...heroCaseStudySlides]}
              ariaLabel="Property marketing website examples"
            />
          </motion.div>
        </div>
        <button
          type="button"
          onClick={toggleHeroMute}
          className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/55 text-[#fafaf9] transition-all duration-200 hover:scale-105 hover:bg-black/72 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 motion-reduce:hover:scale-100"
          aria-label={isHeroMuted ? 'Unmute hero video' : 'Mute hero video'}
        >
          {isHeroMuted ? <VolumeOffIcon className="h-5 w-5" /> : <VolumeOnIcon className="h-5 w-5" />}
        </button>
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
