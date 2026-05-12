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
import SeoHeroCaseStudyShowcase, { type SeoHeroCaseStudySlide } from '@/components/SeoHeroCaseStudyShowcase'
import {
  SEO_LANDING_HERO_PRIMARY_CTA_CLASSNAME,
  SeoLandingStickyPrimaryCta,
} from '@/components/SeoLandingHeroPrimaryCta'
import {
  dmrVsAlternatives,
  frameworkPillars,
  processPhases,
  stakesThree,
  FAQ_ITEMS,
} from './chatgpt-ads-data'

const APPLY_FORM = 'chatgpt-ads-real-estate-apply'
const HERO_VIDEO_SRC = '/videos/DMR%20-%20INTRO%204K.mp4'

/** Hero carousel: documented paid + pipeline outcomes (same execution standards as the beta). */
const CHATGPT_ADS_HERO_SLIDES: SeoHeroCaseStudySlide[] = [
  {
    id: 'eagan-luxury-real-estate',
    href: '/case-study/eagan-luxury-real-estate',
    teamName: 'Eagan Luxury Real Estate',
    region: 'St. Petersburg, FL',
    highlight: '$11M+ closed volume · Q1 after launch',
    image: '/images/EaganCaseStudy/SearchAds.png',
    imageAlt: 'Paid search campaign performance for Eagan Luxury Real Estate',
  },
  {
    id: 'jade-legendary-real-estate',
    href: '/case-study/jade-legendary-real-estate',
    teamName: 'Legendary Real Estate Services',
    region: 'Lake Geneva, WI',
    highlight: 'Paid media + search orchestration',
    image: '/images/LegendaryRealEstateCaseSTudy/GoogleAdsSCreenshot.png',
    imageAlt: 'Paid media results for Legendary Real Estate Services',
  },
  {
    id: 'willow-brook-realty',
    href: '/case-study/willow-brook-realty',
    teamName: 'Willow Brook Realty',
    region: 'Vermont & New Hampshire',
    highlight: '46 inbound leads in 3 weeks',
    image: '/images/WillowBrookLeads.png',
    imageAlt: 'Inbound lead volume after Willow Brook Realty paid search and local launch',
  },
]

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
  primaryLabel = 'Apply for beta access',
  secondaryHref = '/calendar',
  secondaryLabel = 'Or book a strategy call',
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
      aria-label="Apply for ChatGPT Ads beta access or book a strategy call"
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
          No onboarding fee and no monthly retainer for this test cohort. Apply to see if your team fits the current
          window—we reply either way.
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

export default function ChatgptAdsRealEstatePageContent() {
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
        aria-labelledby="chatgpt-ads-hero-title"
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
              BETA · Rolling out worldwide—the U.S. among the first markets · #1 U.S. real estate agency on SEMrush
            </p>
            <h1
              id="chatgpt-ads-hero-title"
              className="font-serif text-3xl font-light leading-[1.08] tracking-tight !text-white sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              ChatGPT Ads for Real Estate (BETA) the new wave of PPC advertising
            </h1>
            <p className="mt-6 max-w-xl font-serif text-base leading-relaxed !text-white sm:text-lg">
              ChatGPT Ads are being released slowly around the world. The United States and a handful of other countries
              are in the first wave of access. DMR is running a focused test with a handful of luxury real estate teams so
              we can make the channel work properly for listings, brands, and your CRM—not generic prompts. There is no
              onboarding fee and no monthly retainer for this cohort; apply to see whether your team fits what we are
              learning week to week.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:items-start">
              <button
                type="button"
                onClick={openApplyModal}
                className={SEO_LANDING_HERO_PRIMARY_CTA_CLASSNAME}
              >
                Apply for beta access
              </button>
              <Link
                href="/calendar"
                className="font-serif text-[11px] uppercase tracking-[0.18em] text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline sm:self-start"
              >
                Or book a strategy call
              </Link>
              <p className="mt-1 max-w-md font-serif text-[12px] leading-snug text-white/70">
                Limited test cohort—we review fit, markets, and creative load before the pilot goes live.
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
            <SeoHeroCaseStudyShowcase
              slides={CHATGPT_ADS_HERO_SLIDES}
              ariaLabel="Documented paid media and pipeline outcomes"
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

      <section
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]"
        id="stakes"
      >
        <div className="container-max">
          <SeoReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">The stakes</p>
              <h2 className="mt-3 font-serif text-3xl font-light leading-tight tracking-tight text-[var(--color-off-black)] md:text-4xl">
                Are you present where buyers ask AI—or only where they used to click?
              </h2>
              <SectionRule align="center" />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                Three patterns we see when teams want conversational reach without betting the brand on unfinished product
                surfaces.
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
        hint="Tell us your markets, listings, and goals. We reply with whether the current test cohort has room—and what an honest pilot looks like before anything goes live."
      />

      <section
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]"
        id="guide"
      >
        <div className="container-max grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SeoReveal>
            <div>
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Meet your guide</p>
              <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
                We do not sell “AI hype.” We run a controlled beta with adult supervision.
              </h2>
              <SectionRule />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                You need a partner who will tell you what is stable in ChatGPT placements today, what is still moving
                weekly, and how that fits next to search and site work. DMR combines creative discipline with reporting your
                leadership can defend—even when the platform changelog outruns the blog posts.
              </p>
              <ul className="mt-8 space-y-4 border-l-2 border-[var(--color-off-black)]/15 pl-5">
                {[
                  'Agreement: written pilot scope and definitions of success before the test goes live',
                  'Cadence: tight reviews while inventory is volatile; no “set and forget” in beta',
                  'Proof: clear split between platform noise and conversations your CRM recognizes',
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

      <SeoWebsiteExamplesHorizontalScroll variant="ads" />

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="framework">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">The plan, simplified</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Three pillars—built for a channel still leaving beta.
            </h2>
            <SectionRule />
            <p className="mt-6 max-w-2xl font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
              Placement discipline, message match, and measurement that still works when the UI changes—so the pilot reads
              as premium, not experimental clutter.
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
        hint="Two minutes on the application tells us if your market, listings, and risk tolerance match the current beta. No obligation—we decline politely when timing is wrong."
      />

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="stats">
        <div className="container-max">
          <ServiceStats
            embedded
            heading="What this test includes"
            stats={[
              {
                value: 'First wave',
                label: 'U.S. & select markets',
                description:
                  'ChatGPT Ads are rolling out gradually worldwide. The United States and a few other countries are among the first to receive access.',
              },
              {
                value: 'Handful',
                label: 'Of real estate teams',
                description:
                  'We are running a focused test with a small set of luxury teams so we can tune creative, routing, and reporting for how you actually sell.',
              },
              {
                value: 'None',
                label: 'Onboarding or retainer',
                description:
                  'No onboarding fee and no monthly retainer for this cohort—we are building the real estate playbook together while the product matures.',
              },
            ]}
          />
        </div>
      </section>

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="process">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">The process</p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              From application to pilot readout
            </h2>
            <SectionRule />
            <p className="mt-6 max-w-2xl font-serif text-sm text-[var(--color-ink-300)]">
              Clarity matters more when the channel is young. Here is how we move you from fit check to a pilot you can
              defend internally.
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
              Consensus from teams who wanted partnership, not vendor theater: liking, authority, and proof in their own
              words.
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
              <h2 className="mt-3 font-serif text-2xl font-light text-[var(--color-off-black)] md:text-3xl">How ChatGPT Ads fits your stack</h2>
              <p className="mt-5 font-serif text-[15px] leading-[1.85] text-[var(--color-ink-300)]">
                Treat ChatGPT placements as incremental reach while{' '}
                <Link href="/google-ads-management" className="underline underline-offset-2 hover:opacity-70">
                  Google Ads management
                </Link>{' '}
                and{' '}
                <Link href="/seo-optimization" className="underline underline-offset-2 hover:opacity-70">
                  SEO optimization
                </Link>{' '}
                continue to carry provable high-intent demand. Layer in full-funnel{' '}
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
                <Link href="/property-marketing" className="underline underline-offset-2 hover:opacity-70">
                  property marketing
                </Link>{' '}
                when listings need their own pushes.
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
                <p className="border-t border-transparent pb-5 pl-0.5 pr-2 pt-3 font-serif text-sm leading-relaxed text-[var(--color-ink-300)] group-open:border-[var(--color-ink-200)]/60 motion-reduce:transition-none">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="chatgpt-ads-apply-cta"
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]"
      >
        <div className="container-max mx-auto max-w-2xl text-center">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Your next step</p>
            <h2 className="mt-3 font-serif text-2xl font-light tracking-tight text-[var(--color-off-black)] sm:text-3xl md:text-4xl">
              Apply if you want in on the first wave of ChatGPT Ads for real estate.
            </h2>
            <SectionRule align="center" />
            <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
              Access is still limited as OpenAI expands geography and formats. We are keeping this test small on purpose
              so we can move fast with a handful of teams. There is no onboarding fee and no monthly retainer for this
              cohort—submit an application and we will tell you plainly if the timing, market, and workflow are a match.
            </p>
          </SeoReveal>
          <div className="mt-10 flex flex-col items-center gap-4">
            <motion.button
              type="button"
              onClick={openApplyModal}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center rounded-sm border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-4px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-[0_10px_28px_-4px_rgba(15,15,15,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] motion-reduce:hover:translate-y-0 sm:w-auto"
            >
              Apply for beta access
            </motion.button>
            <Link
              href="/calendar"
              className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline"
            >
              Or book a strategy call
            </Link>
          </div>
          <p className="mt-6 font-serif text-xs text-[var(--color-ink-400)]">
            UTM parameters from your visit are attached when you submit so we can honor the campaign that brought you here.
          </p>
        </div>
      </section>
      <SeoLandingStickyPrimaryCta onApply={openApplyModal}>Apply for beta access</SeoLandingStickyPrimaryCta>
    </div>
  )
}
