'use client'

import { useRef, useState, type ReactNode } from 'react'
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

const APPLY_FORM = 'real-estate-website-design-apply'
const HERO_VIDEO_SRC = '/videos/DMR%20-%20INTRO%204K.mp4'

const stakesThree = [
  {
    title: 'Positioning',
    subtitle: 'Your brand looks like everyone else',
    body:
      'Template-first websites flatten your story. In luxury markets, buyers decide from tiny signals. If your site feels generic, they assume your service is generic too.',
  },
  {
    title: 'Control',
    subtitle: 'Platform limits quietly cap growth',
    body:
      'When your stack is template-led, roadmap decisions are made by someone else. Custom development keeps your team in control of speed, UX, and future capabilities.',
  },
  {
    title: 'Performance',
    subtitle: 'Beautiful is not enough',
    body:
      'A site can look premium and still leak opportunity. We build for discoverability, speed, and conversion so design actually supports pipeline.',
  },
] as const

const dmrVsAlternatives = [
  { label: 'Build model', dmr: 'Custom development around your strategy', other: 'Template and theme constraints' },
  { label: 'Brand control', dmr: 'Design system aligned to your market position', other: 'Lookalike page structures' },
  { label: 'SEO readiness', dmr: 'Architecture + schema + performance at launch', other: 'Retrofitted SEO after go-live' },
  { label: 'Ownership', dmr: 'Roadmap you can evolve with your team', other: 'Feature limits tied to platform updates' },
  { label: 'Integration', dmr: 'CRM, ads, analytics, and content systems connected', other: 'Disconnected plugins and patchwork' },
] as const

const frameworkPillars = [
  {
    title: 'Custom UX and design system',
    body: 'Visual language and page architecture crafted for your audience, not a template marketplace.',
    image: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png',
    imageAlt: 'Custom luxury real estate website interface',
  },
  {
    title: 'Technical foundations',
    body: 'Performance, indexation, schema, and scalable structure built in from day one.',
    image: '/images/landing/google-general/03-semrush-ranking.png',
    imageAlt: 'Technical performance and visibility context',
  },
  {
    title: 'Conversion pathways',
    body: 'Narrative, proof, and CTAs aligned so qualified visitors know what to do next.',
    image: '/images/JadeCRM.png',
    imageAlt: 'Lead routing and conversion workflow',
  },
] as const

const processPhases = [
  {
    title: 'Discover',
    description: 'Clarify audience, positioning, and business outcomes so the site strategy is anchored before design starts.',
  },
  {
    title: 'Architect',
    description: 'Define IA, page templates, conversion pathways, and technical requirements for performance and SEO.',
  },
  {
    title: 'Build',
    description: 'Develop custom components and pages with content integration, QA, analytics, and CRM wiring.',
  },
  {
    title: 'Launch + iterate',
    description: 'Ship with measurement in place, then refine based on behavior, search signals, and sales feedback.',
  },
] as const

function VolumeOffIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}

function VolumeOnIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  )
}

function openApplyModal() {
  window.dispatchEvent(new CustomEvent('openApplyModal', { detail: { formName: APPLY_FORM } }))
}

function ApplyCtaBand({ hint, surface, className = '' }: { hint: string; surface: 'base' | 'white'; className?: string }) {
  const bg = surface === 'white' ? 'bg-white' : 'bg-[var(--surface-base)]'
  const ring = surface === 'white' ? 'focus-visible:ring-offset-white' : 'focus-visible:ring-offset-[var(--surface-base)]'
  return (
    <aside className={`${bg} border-b border-[var(--color-ink-200)] py-10 md:py-14 ${className}`} aria-label="Apply for custom website design">
      <div className="container-max mx-auto flex max-w-xl flex-col items-center gap-4 px-4 text-center">
        <p className="font-serif text-[0.9375rem] leading-relaxed text-[var(--color-ink-400)]">{hint}</p>
        <button
          type="button"
          onClick={openApplyModal}
          className={`inline-flex min-h-[48px] w-full max-w-xs items-center justify-center rounded-sm border border-[var(--color-off-black)]/18 bg-transparent px-8 font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/30 hover:bg-[var(--color-off-black)]/[0.04] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 motion-reduce:transition-colors motion-reduce:hover:translate-y-0 ${ring} sm:w-auto`}
        >
          Apply
        </button>
      </div>
    </aside>
  )
}

function SectionRule({ align = 'left' }: { align?: 'left' | 'center' }) {
  return (
    <div className={`mt-5 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent sm:w-20 ${align === 'center' ? 'mx-auto' : ''}`} aria-hidden />
  )
}

export default function RealEstateWebsiteDesignPageContent() {
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
      term: 'Real estate website design',
      result: 'Page 1 visibility',
      note: 'Our own pages rank for design-intent real estate terms while showcasing live client work.',
    },
    {
      term: 'Luxury real estate website developer',
      result: 'Top positions',
      note: 'We publish and optimize our own properties before prescribing design + SEO systems to clients.',
    },
    {
      term: 'Real estate website examples',
      result: 'Strong discovery traffic',
      note: 'Our portfolio pages attract qualified teams actively evaluating custom website partners.',
    },
  ] as const

  return (
    <div className="min-h-screen bg-white [--seo-section-y:theme(spacing.20)] md:[--seo-section-y:theme(spacing.28)]">
      <section className="relative min-h-screen overflow-hidden border-b border-[var(--color-ink-200)] scroll-mt-6" id="top" aria-labelledby="website-design-hero-title">
        <div className="absolute inset-0 z-0">
          <video ref={heroVideoRef} className="absolute inset-0 z-0 h-full w-full object-cover" src={HERO_VIDEO_SRC} autoPlay muted={isHeroMuted} loop playsInline preload="metadata" aria-hidden />
          <div className="pointer-events-none absolute inset-0 z-[1]" style={{ backgroundColor: 'rgba(15, 15, 15, 0.72)' }} aria-hidden />
        </div>
        <div className="relative z-10 container-max flex min-h-screen items-center justify-center py-20 text-center pointer-events-none">
          <motion.div className="max-w-4xl pointer-events-auto" initial={reduceMotion ? false : { opacity: 0.5, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.65, ease: heroEase }}>
            <p className="mb-6 font-serif text-[11px] uppercase tracking-[0.24em] text-white/80">Real estate website design</p>
            <h1 id="website-design-hero-title" className="font-serif text-4xl font-light leading-[1.04] tracking-tight !text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Custom websites that position you as the guide buyers trust.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl font-serif text-lg leading-relaxed text-white/90 sm:text-xl">
              You do not need another template dressed up as a luxury brand. You need a custom website developer who can
              translate your market position into a digital experience that earns trust and drives action.
            </p>
            <p className="mx-auto mt-4 max-w-3xl font-serif text-sm leading-relaxed text-white/75 sm:text-base">
              DMR builds custom websites for agents, teams, and brokerages who want clarity, control, and measurable growth.
            </p>
            <div className="mt-10 flex flex-col items-center">
              <button type="button" onClick={openApplyModal} className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center rounded-sm bg-white px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] shadow-[0_4px_24px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-[0_8px_32px_rgba(0,0,0,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] motion-reduce:hover:translate-y-0 sm:w-auto sm:min-w-[12rem]">
                Apply now
              </button>
            </div>
          </motion.div>
        </div>
        <button type="button" onClick={toggleHeroMute} className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/55 text-[#fafaf9] transition-all duration-200 hover:scale-105 hover:bg-black/72 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 motion-reduce:hover:scale-100" aria-label={isHeroMuted ? 'Unmute hero video' : 'Mute hero video'}>
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
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Why this page exists</p>
              <h2 className="mt-3 font-serif text-3xl font-light leading-tight tracking-tight text-[var(--color-off-black)] md:text-4xl">
                Is your website your strongest salesperson, or your quiet bottleneck?
              </h2>
              <SectionRule align="center" />
            </div>
          </SeoReveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
            {stakesThree.map((s, i) => (
              <SeoReveal key={s.title} delay={i * 0.06} className="h-full">
                <article className="group flex h-full flex-col rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6 shadow-[0_1px_0_rgba(15,15,15,0.04)]">
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
        hint="If this sounds familiar, apply and we will outline a custom website strategy built around your market and goals."
      />

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]" id="guide">
        <div className="container-max grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SeoReveal>
            <div>
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">How we work</p>
              <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
                We are your custom website developer, not a template reseller.
              </h2>
              <SectionRule />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                StoryBrand is simple: your client is the hero, you are the guide, and your website should make the next step obvious.
                We build custom systems that support that story from first impression through inquiry.
              </p>
              <ul className="mt-8 space-y-4 border-l-2 border-[var(--color-off-black)]/15 pl-5">
                {[
                  'Positioning: website architecture aligned to your exact market reality',
                  'Execution: custom design and development without template constraints',
                  'Proof: measurable performance in search, speed, and qualified inquiries',
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
              <p className="text-center font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">DMR vs. template platforms</p>
              <div className="mt-6 overflow-x-auto rounded-lg">
                <table className="w-full min-w-[520px] text-left text-sm font-serif">
                  <thead>
                    <tr className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]/80">
                      <th className="px-3 py-3 pr-4 text-xs font-normal uppercase tracking-[0.12em] text-[var(--color-ink-400)]">Dimension</th>
                      <th className="px-3 py-3 pr-4 text-xs font-normal uppercase tracking-[0.12em] text-[var(--color-off-black)]">DMR</th>
                      <th className="px-3 py-3 text-xs font-normal uppercase tracking-[0.12em] text-[var(--color-ink-400)]">Template models</th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--color-ink-300)]">
                    {dmrVsAlternatives.map((row) => (
                      <tr key={row.label} className="border-b border-[var(--color-ink-200)] last:border-0">
                        <th scope="row" className="px-3 py-3 align-top text-xs uppercase tracking-[0.14em] text-[var(--color-ink-400)]">{row.label}</th>
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

      <SeoWebsiteExamplesHorizontalScroll variant="seo" />

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="framework">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Execution model</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Three pillars. One accountable build team.
            </h2>
            <SectionRule />
          </SeoReveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
            {frameworkPillars.map((p, i) => (
              <SeoReveal key={p.title} delay={i * 0.07}>
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] shadow-[0_1px_0_rgba(15,15,15,0.04)]">
                  <div className="relative aspect-[4/3] w-full border-b border-[var(--color-ink-200)] bg-white">
                    <Image src={p.image} alt={p.imageAlt} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
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
        hint="Want to evaluate your current website before rebuilding? Apply and we will map what to keep, rebuild, and improve."
      />

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="stats">
        <div className="container-max">
          <ServiceStats
            embedded
            heading="Benchmarks teams actually feel"
            stats={[
              {
                value: '2–4×',
                label: 'Engagement depth',
                description: 'Typical lift in meaningful page engagement after custom UX and narrative alignment.',
              },
              {
                value: 'Fast',
                label: 'Core Web Vitals',
                description: 'Performance-first builds designed for mobile buyers and stronger search outcomes.',
              },
              {
                value: 'Higher',
                label: 'Qualified inquiries',
                description: 'Conversion paths built around intent and trust signals, not generic forms.',
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
              Our own website rankings validate our build + SEO system
            </h2>
            <SectionRule />
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

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="process">
        <div className="container-max">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Cadence</p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">A process you can trust</h2>
            <SectionRule />
          </SeoReveal>
          <div className="relative mt-12 md:pl-3">
            <div className="absolute bottom-0 left-[15px] top-2 hidden w-px bg-gradient-to-b from-[var(--color-ink-200)] via-[var(--color-ink-200)] to-transparent md:block" aria-hidden />
            <div className="grid gap-0 md:grid-cols-2 md:gap-x-12 md:gap-y-4">
              {processPhases.map((phase, idx) => (
                <SeoReveal key={phase.title} delay={(idx % 2) * 0.06}>
                  <article className="relative border-t border-[var(--color-ink-200)] py-8 pl-0 md:border-t-0 md:py-6 md:pl-10">
                    <span className="absolute left-0 top-10 hidden h-2.5 w-2.5 rounded-full border-2 border-[var(--color-off-black)] bg-white md:block" aria-hidden />
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
          </SeoReveal>
        </div>
        <Testimonials omitHeading showStarRating />
      </section>

      <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]">
        <div className="container-max max-w-3xl">
          <SeoReveal>
            <div className="rounded-xl border border-[var(--color-ink-200)] bg-white p-6 shadow-[0_1px_0_rgba(15,15,15,0.04)] md:p-10">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Ecosystem</p>
              <h2 className="mt-3 font-serif text-2xl font-light text-[var(--color-off-black)] md:text-3xl">How website design fits your stack</h2>
              <p className="mt-5 font-serif text-[15px] leading-[1.85] text-[var(--color-ink-300)]">
                Pair custom website development with{' '}
                <Link href="/seo-optimization" className="underline underline-offset-2 hover:opacity-70">SEO optimization</Link>,{' '}
                <Link href="/google-ads-management" className="underline underline-offset-2 hover:opacity-70">Google Ads management</Link>, and{' '}
                <Link href="/analytics-reporting" className="underline underline-offset-2 hover:opacity-70">analytics and reporting</Link>. Explore live build references on{' '}
                <Link href="/real-estate-agent-website-samples" className="underline underline-offset-2 hover:opacity-70">real estate website examples</Link>.
              </p>
            </div>
          </SeoReveal>
        </div>
      </section>

      <section className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]" id="faq">
        <div className="container-max max-w-3xl">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Due diligence</p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">Questions, answered plainly</h2>
            <SectionRule />
          </SeoReveal>
          {(() => {
            const faqRenderItems: ReadonlyArray<{ question: string; answer: ReactNode }> = [
              {
                question: 'Do you build custom websites or use templates?',
                answer: 'We build custom websites around your brand, markets, and conversion goals. We do not deploy one-size-fits-all template themes and call it strategy.',
              },
              {
                question: 'How is this different from Luxury Presence or Agent Image?',
                answer: 'Those platforms can be useful for certain teams, but they are still platform-led products. DMR leads with strategy and custom development so your site fits your business model instead of fitting a template constraint.',
              },
              {
                question: 'Will the site be SEO-ready at launch?',
                answer: (
                  <>
                    Yes. Technical SEO foundations, page architecture, schema, internal linking, and performance are built into the process. For ongoing growth after launch, pair with{' '}
                    <Link href="/seo-optimization" className="underline underline-offset-2 hover:opacity-70">SEO optimization</Link>.
                  </>
                ),
              },
              {
                question: 'Can we see more sample websites?',
                answer: (
                  <>
                    Yes. Browse the full portfolio on{' '}
                    <Link href="/real-estate-agent-website-samples" className="underline underline-offset-2 hover:opacity-70">real estate website examples</Link>.
                  </>
                ),
              },
              {
                question: 'How is pricing scoped?',
                answer: 'After discovery we scope by site complexity, page count, integrations, and content support, then provide a clear proposal with deliverables and milestones.',
              },
            ]

            return (
              <div className="mt-10 divide-y divide-[var(--color-ink-200)] rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)]/40 px-1 md:px-2">
                {faqRenderItems.map((item) => (
                  <details key={item.question} className="group border-0 px-3 py-1 transition-colors [&[open]]:bg-white/90 md:px-4">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-md py-4 pr-1 font-serif text-lg font-light text-[var(--color-off-black)] outline-none marker:content-none [&::-webkit-details-marker]:hidden hover:bg-white/60">
                      <span className="text-pretty">{item.question}</span>
                      <span className="mt-1.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink-200)] bg-white text-[10px] text-[var(--color-ink-400)] transition-transform duration-300 group-open:rotate-180" aria-hidden>
                        ▼
                      </span>
                    </summary>
                    <div className="border-t border-transparent pb-5 pl-0.5 pr-2 pt-3 font-serif text-sm leading-relaxed text-[var(--color-ink-300)] group-open:border-[var(--color-ink-200)]/60">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            )
          })()}
        </div>
      </section>

      <section id="website-design-apply-cta" className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]">
        <div className="container-max mx-auto max-w-2xl text-center">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Next step</p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Build the website your market assumes you already have.
            </h2>
            <SectionRule align="center" />
            <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
              A short application gives us enough context to come prepared with architecture direction, integration priorities,
              and the fastest path to launch.
            </p>
          </SeoReveal>
          <motion.button type="button" onClick={openApplyModal} whileTap={reduceMotion ? undefined : { scale: 0.98 }} className="mt-10 inline-flex min-h-[52px] items-center justify-center rounded-sm border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-4px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90">
            Apply
          </motion.button>
        </div>
      </section>
    </div>
  )
}
