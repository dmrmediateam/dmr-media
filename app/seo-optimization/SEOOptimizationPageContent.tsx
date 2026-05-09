'use client'

import { useRef, useState, type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { SeoReveal } from './SeoReveal'
import SeoCaseStudiesHorizontalScroll from '@/components/SeoCaseStudiesHorizontalScroll'
import SeoWebsiteExamplesHorizontalScroll from '@/components/SeoWebsiteExamplesHorizontalScroll'
import ClientLogosSlider from '@/components/ClientLogosSlider'
import VideoTestimonials from '@/components/VideoTestimonials'
import ServiceStats from '@/components/service/ServiceStats'
import Testimonials from '@/components/Testimonials'
import SeoHeroCaseStudyShowcase from '@/components/SeoHeroCaseStudyShowcase'
import {
  dmrVsAlternatives,
  frameworkPillars,
  processPhases,
  stakesThree,
} from './seo-data'

const APPLY_FORM = 'seo-optimization-apply'
const HERO_VIDEO_SRC = '/videos/DMR%20-%20INTRO%204K.mp4'

function VolumeOffIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}

function VolumeOnIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
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
  primaryLabel = 'Get my free SEO audit',
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
      aria-label="Get a free SEO audit or book a call"
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
          Free 30-minute audit. If we don&apos;t identify at least $50K in annual missed organic opportunity, you owe nothing.
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

export default function SEOOptimizationPageContent() {
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
  const rankingProof = [
    {
      term: 'Luxury real estate SEO',
      result: '#1',
      note: 'DMR ranks for our own service-intent SEO terms in competitive result sets.',
    },
    {
      term: 'Real estate SEO consulting',
      result: 'Top positions',
      note: 'Our consulting and optimization pages both attract qualified discovery traffic.',
    },
    {
      term: 'Real estate website SEO',
      result: 'Page 1 visibility',
      note: 'We publish, iterate, and rank our own properties before prescribing client playbooks.',
    },
  ] as const

  return (
    <div className="min-h-screen bg-white [--seo-section-y:theme(spacing.20)] md:[--seo-section-y:theme(spacing.28)]">
      {/* Hero: full-bleed video + scrim (aligned with /landing/google-general) */}
      <section
        className="relative min-h-screen overflow-hidden border-b border-[var(--color-ink-200)] scroll-mt-6"
        id="top"
        aria-labelledby="seo-hero-title"
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
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{ backgroundColor: 'rgba(15, 15, 15, 0.72)' }}
            aria-hidden
          />
        </div>
        <div className="relative z-10 container-max grid min-h-screen grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 xl:gap-20 pointer-events-none">
          <motion.div
            className="pointer-events-auto max-w-xl text-left lg:max-w-xl"
            initial={reduceMotion ? false : { opacity: 0.5, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: heroEase }}
          >
            <p className="mb-5 max-w-xl font-serif text-[10px] uppercase leading-relaxed tracking-[0.14em] text-white/80 sm:text-[11px] sm:tracking-[0.16em]">
              #1 U.S. real estate agency on SEMrush · 24+ luxury teams · 5★ partner
            </p>
            <h1
              id="seo-hero-title"
              className="font-serif text-3xl font-light leading-[1.08] tracking-tight !text-white sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              Get 19× More Organic Clicks in 90 Days, Without Paying Per Click.
            </h1>
            <p className="mt-6 max-w-xl font-serif text-base leading-relaxed !text-white sm:text-lg">
              Technical SEO, on-page precision, and content systems built for luxury real estate, so Google recommends you first, not a template farm. Documented client lifts include 19× daily organic clicks and 300%+ traffic in the first 90 days.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:items-start">
              <button
                type="button"
                onClick={openApplyModal}
                className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center rounded-sm bg-white px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] shadow-[0_4px_24px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-[0_8px_32px_rgba(0,0,0,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] motion-reduce:hover:translate-y-0 sm:w-auto sm:min-w-[12rem]"
              >
                Get my free SEO audit
              </button>
              <Link
                href="/calendar"
                className="font-serif text-[11px] uppercase tracking-[0.18em] text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline sm:self-start"
              >
                Or book a 15-minute strategy call
              </Link>
              <p className="mt-1 max-w-md font-serif text-[12px] leading-snug text-white/70">
                Free 30-minute audit. If we don&apos;t identify at least $50K in annual missed organic opportunity, you owe nothing.
              </p>
              <motion.a
                href="#after-hero"
                aria-label="Scroll to client logos and page content"
                className="mt-2 inline-flex self-start rounded-sm p-1 text-white/35 outline-none transition-colors hover:text-white/55 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 2.6, repeat: Infinity, ease: 'easeInOut' as const }
                }
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="pointer-events-auto flex justify-center lg:justify-end"
            initial={reduceMotion ? false : { opacity: 0.5, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: heroEase, delay: reduceMotion ? 0 : 0.08 }}
          >
            <SeoHeroCaseStudyShowcase />
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

      {/* Stakes: internal + external + philosophical (StoryBrand problem) */}
      <section
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]"
        id="stakes"
      >
        <div className="container-max">
          <SeoReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Why this page exists</p>
              <h2 className="mt-3 font-serif text-3xl font-light leading-tight tracking-tight text-[var(--color-off-black)] md:text-4xl">
                Is your website a luxury asset, or a digital anchor?
              </h2>
              <SectionRule align="center" />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                Three patterns we see in teams already winning offline, but losing the invisible first conversation online.
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

      <div id="proof" className="scroll-mt-24">
        <SeoCaseStudiesHorizontalScroll />
        <VideoTestimonials />
      </div>

      <ApplyCtaBand
        surface="white"
        className="shadow-[inset_0_1px_0_rgba(15,15,15,0.04)]"
        hint="See exactly where your market is leaking organic traffic. Free 30-minute audit: your competitors mapped, your top 10 missed keywords ranked by GCI impact."
      />

      {/* Guide + plan: authority + empathy */}
      <section
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]"
        id="guide"
      >
        <div className="container-max grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SeoReveal>
            <div>
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">How we work</p>
              <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
                We do not sell “SEO packages.” We install a growth engine.
              </h2>
              <SectionRule />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                You need a guide who has walked the map: weekly shipping, technical honesty, and reporting tied to GCI
                outcomes, not vanity charts. DMR is AI-first, search-obsessed, and built for teams who already close at a
                high level but deserve to be found first.
              </p>
              <ul className="mt-8 space-y-4 border-l-2 border-[var(--color-off-black)]/15 pl-5">
                {[
                  'Clarity: a prioritized roadmap you can defend to leadership',
                  'Cadence: execution that compounds instead of quarterly theater',
                  'Proof: documented movement in Search Console and real pipeline',
                ].map((line) => (
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

      <SeoWebsiteExamplesHorizontalScroll />

      {/* Framework */}
      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="framework">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Execution model</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Three pillars. One accountable team.
            </h2>
            <SectionRule />
            <p className="mt-6 max-w-2xl font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
              Technical foundations, on-page precision, and editorial systems, so every page earns trust from Google and
              from buyers ready to transact.
            </p>
          </SeoReveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
            {frameworkPillars.map((p, i) => (
              <SeoReveal key={p.title} delay={i * 0.07}>
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/10 hover:shadow-md motion-reduce:hover:translate-y-0">
                  <div className="relative aspect-[4/3] w-full border-b border-[var(--color-ink-200)] bg-white transition-colors group-hover:bg-[#fafafa]">
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

      <ApplyCtaBand
        surface="white"
        className="shadow-[inset_0_1px_0_rgba(15,15,15,0.04)]"
        hint="Two minutes now saves three months of guessing. We arrive with your market, rankings, and biggest gaps already mapped."
      />

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="stats">
        <div className="container-max">
          <ServiceStats
            embedded
            heading="Benchmarks teams actually feel"
            stats={[
              {
                value: '300%+',
                label: 'Traffic lift',
                description: 'Average organic growth in the first 90 days across documented programs.',
              },
              {
                value: '#1',
                label: 'Neighborhood intent',
                description: 'Competitive local and buyer-intent terms that convert to tours and conversations.',
              },
              {
                value: '2–3×',
                label: 'Qualified inquiries',
                description: 'Lift patterns when technical debt is cleared and content matches market truth.',
              },
            ]}
          />
        </div>
      </section>

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]" id="dmr-rankings">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">We do it ourselves</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              We rank DMR first, then apply the same system to clients
            </h2>
            <SectionRule />
            <p className="mt-6 max-w-2xl font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
              This is not theory from a slide deck. The same technical, on-page, and editorial cadence we sell is what we run on our own site every week.
            </p>
          </SeoReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {rankingProof.map((item) => (
              <article key={item.term} className="rounded-lg border border-[var(--color-ink-200)] bg-white p-6">
                <p className="font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">{item.term}</p>
                <p className="mt-3 font-serif text-2xl font-light text-[var(--color-off-black)]">{item.result}</p>
                <p className="mt-3 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="process">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Cadence</p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              A plan you can repeat
            </h2>
            <SectionRule />
            <p className="mt-6 max-w-2xl font-serif text-sm text-[var(--color-ink-300)]">
              Clear steps reduce anxiety (and increase follow-through). Here is how we guide you from diagnosis to compounding
              results.
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
              Consensus from teams who value partnership over vendor theater: liking, authority, and social proof in their
              own words.
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
              <h2 className="mt-3 font-serif text-2xl font-light text-[var(--color-off-black)] md:text-3xl">How SEO fits your stack</h2>
              <p className="mt-5 font-serif text-[15px] leading-[1.85] text-[var(--color-ink-300)]">
                Pair organic programs with{' '}
                <Link href="/google-ads-management" className="underline underline-offset-2 hover:opacity-70">
                  Google Ads management
                </Link>
                , full-funnel{' '}
                <Link href="/real-estate-lead-generation" className="underline underline-offset-2 hover:opacity-70">
                  lead generation
                </Link>
                , transparent{' '}
                <Link href="/analytics-reporting" className="underline underline-offset-2 hover:opacity-70">
                  analytics and reporting
                </Link>
                , flagship{' '}
                <Link href="/website-and-seo" className="underline underline-offset-2 hover:opacity-70">
                  website design
                </Link>
                , and{' '}
                <Link href="/seo-consulting" className="underline underline-offset-2 hover:opacity-70">
                  SEO consulting
                </Link>{' '}
                when you need strategy without full execution.
              </p>
            </div>
          </SeoReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="faq">
        <div className="container-max max-w-3xl">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Due diligence</p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Questions, answered plainly
            </h2>
            <SectionRule />
          </SeoReveal>
          {(() => {
            const faqRenderItems: ReadonlyArray<{ question: string; answer: ReactNode }> = [
              {
                question: 'How long until we see movement in search?',
                answer:
                  'Technical fixes and long-tail terms often move first, sometimes within weeks. Competitive head terms compound over quarters as authority stacks. We report weekly on leading indicators (coverage, impressions, crawl health) so you always know what the work is doing, not just where you hope to land someday.',
              },
              {
                question: 'Do you guarantee #1 rankings?',
                answer:
                  'No ethical partner guarantees a position you do not control. What we do guarantee is a disciplined system: clear priorities, accountable execution, and reporting tied to pipeline, not vanity charts. When you need demand while organic compounds, we pair SEO with Google Ads so you are not betting the business on a single channel.',
              },
              {
                question: 'What does ongoing SEO actually look like?',
                answer: (
                  <>
                    Search is a moving target: algorithms shift, competitors publish, inventory changes. Retainers include monitoring, technical hygiene, content cadence, and internal linking so your site earns trust from Google and from buyers. If you need a smaller strategy-first package, start with{' '}
                    <Link href="/seo-consulting" className="underline underline-offset-2 hover:opacity-70">
                      SEO consulting
                    </Link>
                    .
                  </>
                ),
              },
              {
                question: 'We already have a site. Do we have to rebuild?',
                answer:
                  'Usually no. Most teams need audit-first prioritization: fix what blocks crawl and conversion, then scale content. We only recommend rebuilds when the stack caps growth or makes every change expensive and slow.',
              },
              {
                question: 'How is pricing scoped?',
                answer: (
                  <>
                    After audit we align scope to market difficulty, site size, content velocity, and your growth target, then we put deliverables in writing. No opaque packages, no surprise invoices for basic edits. If you are not ready for weekly execution, begin with{' '}
                    <Link href="/seo-consulting" className="underline underline-offset-2 hover:opacity-70">
                      SEO consulting
                    </Link>
                    .
                  </>
                ),
              },
            ]
            return (
          <div className="mt-10 divide-y divide-[var(--color-ink-200)] rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)]/40 px-1 md:px-2">
                {faqRenderItems.map((item) => (
              <details
                key={item.question}
                className="group border-0 px-3 py-1 transition-colors [&[open]]:bg-white/90 md:px-4"
              >
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
            )
          })()}
        </div>
      </section>

      {/* Final CTA: scarcity of attention, not fake inventory */}
      <section
        id="seo-apply-cta"
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]"
      >
        <div className="container-max mx-auto max-w-2xl text-center">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Your next 90 days</p>
            <h2 className="mt-3 font-serif text-2xl font-light tracking-tight text-[var(--color-off-black)] sm:text-3xl md:text-4xl">
              19× organic clicks in 90 days, or you owe nothing for the audit.
            </h2>
            <SectionRule align="center" />
            <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
              Two minutes. We arrive prepared with your market, your competitors, and the top organic gaps costing you GCI today. If we can&apos;t identify at least $50K in annual missed opportunity, the audit is on us.
            </p>
          </SeoReveal>
          <div className="mt-10 flex flex-col items-center gap-4">
            <motion.button
              type="button"
              onClick={openApplyModal}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center rounded-sm border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-4px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-[0_10px_28px_-4px_rgba(15,15,15,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] motion-reduce:hover:translate-y-0 sm:w-auto"
            >
              Get my free SEO audit
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
    </div>
  )
}
