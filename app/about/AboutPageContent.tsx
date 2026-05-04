'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import SeoCaseStudiesHorizontalScroll from '@/components/SeoCaseStudiesHorizontalScroll'
import SeoWebsiteExamplesHorizontalScroll from '@/components/SeoWebsiteExamplesHorizontalScroll'
import ClientLogosSlider from '@/components/ClientLogosSlider'
import HomeBlogSection from '@/components/HomeBlogSection'

const APPLY_FORM = 'about-page-apply'
const HERO_VIDEO_SRC = '/videos/DMR%20-%20INTRO%204K.mp4'
const STORY_VIDEO_SRC = '/videos/DMR%20-%20INTRO%204K.mp4'

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
}: {
  hint: string
  surface: 'base' | 'white'
  className?: string
}) {
  const bg = surface === 'white' ? 'bg-white' : 'bg-[var(--surface-base)]'
  const ring =
    surface === 'white' ? 'focus-visible:ring-offset-white' : 'focus-visible:ring-offset-[var(--surface-base)]'
  return (
    <aside
      className={`${bg} border-b border-[var(--color-ink-200)] py-10 md:py-14 ${className}`}
      aria-label="Apply to work with DMR Media"
    >
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
    <div
      className={`mt-5 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent sm:w-20 ${align === 'center' ? 'mx-auto' : ''}`}
      aria-hidden
    />
  )
}

interface Post {
  _id: string
  title: string
  description?: string
  publishedAt?: string
  slug?: { current?: string }
  mainImage?: {
    asset?: { url?: string }
    alt?: string
  }
}

export default function AboutPageContent({ posts }: { posts: Post[] }) {
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
        aria-labelledby="about-hero-title"
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
        <div className="relative z-10 container-max flex min-h-screen items-center justify-center py-20 text-center pointer-events-none">
          <motion.div
            className="max-w-4xl pointer-events-auto"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: heroEase }}
          >
            <p className="mb-6 font-serif text-[11px] uppercase tracking-[0.24em] text-white/80">About DMR Media</p>
            <h1
              id="about-hero-title"
              className="font-serif text-4xl font-light leading-[1.04] tracking-tight !text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Luxury marketing, built for agents who should be found first.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl font-serif text-lg leading-relaxed text-white/90 sm:text-xl">
              We&apos;re a search- and creative-led team for producing agents and teams. Google, your website, and paid media
              should match the caliber of your listings—and we build the systems that make that true.
            </p>
            <p className="mx-auto mt-4 max-w-3xl font-serif text-sm leading-relaxed text-white/75 sm:text-base">
              AI-first execution, documented lifts in visibility, and direct communication—no ticket queue.
            </p>
            <div className="mt-10 flex flex-col items-center">
              <button
                type="button"
                onClick={openApplyModal}
                className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center rounded-sm bg-white px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] shadow-[0_4px_24px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-[0_8px_32px_rgba(0,0,0,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] motion-reduce:hover:translate-y-0 sm:w-auto sm:min-w-[12rem]"
              >
                Apply now
              </button>
              <motion.a
                href="#after-hero"
                aria-label="Scroll to client logos and page content"
                className="mt-10 inline-flex rounded-sm p-1 text-white/35 outline-none transition-colors hover:text-white/55 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
                transition={
                  reduceMotion ? undefined : { duration: 2.6, repeat: Infinity, ease: 'easeInOut' as const }
                }
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
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
        id="our-story"
        aria-labelledby="about-our-story-heading"
      >
        <div className="container-max grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <SeoReveal>
            <div>
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Our Story</p>
              <h2
                id="about-our-story-heading"
                className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl"
              >
                Who we are
              </h2>
              <SectionRule />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                DMR Media is a luxury real estate marketing team built around search, creative, and accountability. We work
                with agents and teams who are already closing at a high level—and who want their digital presence to earn
                the same trust their offline reputation does. This page is a short introduction; a dedicated brand film is
                on the way.
              </p>
              <p className="mt-6 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
                Prefer the full picture? Explore{' '}
                <Link href="/case-studies" className="underline underline-offset-2 hover:opacity-70">
                  case studies
                </Link>
                , our{' '}
                <Link href="/real-estate-agent-website-samples" className="underline underline-offset-2 hover:opacity-70">
                  website portfolio
                </Link>
                , and the{' '}
                <Link href="/blog" className="underline underline-offset-2 hover:opacity-70">
                  blog
                </Link>
                .
              </p>
            </div>
          </SeoReveal>
          <SeoReveal delay={0.08}>
            <div className="rounded-xl border border-[var(--color-ink-200)] bg-black shadow-[0_12px_40px_-12px_rgba(15,15,15,0.12)] overflow-hidden">
              <video
                className="aspect-video w-full object-cover"
                controls
                playsInline
                preload="metadata"
                aria-label="DMR Media story video (placeholder)"
              >
                <source src={STORY_VIDEO_SRC} type="video/mp4" />
              </video>
            </div>
            <p className="mt-3 font-serif text-xs text-[var(--color-ink-400)]">
              Temporary placeholder—swap the video source when your final cut is ready.
            </p>
          </SeoReveal>
        </div>
      </section>

      <div id="our-work" className="scroll-mt-24">
        <SeoCaseStudiesHorizontalScroll
          eyebrow="Our Work"
          title="Case studies"
          description="Outcomes from teams we&apos;ve partnered with—organic visibility, leads, and rebuilds that hold up in luxury markets."
          ariaLabel="About page case studies"
        />
      </div>

      <ApplyCtaBand
        surface="white"
        className="shadow-[inset_0_1px_0_rgba(15,15,15,0.04)]"
        hint="If you like what you see here, the next step is a short application—we show up with your market already researched."
      />

      <SeoWebsiteExamplesHorizontalScroll variant="about" sectionId="our-websites" />

      <ApplyCtaBand
        surface="base"
        hint="Questions about fit? Apply anyway—we use it to prep a direct conversation, not a sales script."
      />

      <HomeBlogSection
        posts={posts}
        eyebrow="Our Blogs"
        heading="Blog posts"
        viewAllLabel="View all posts"
        layoutVariant="seo"
        sectionClassName=""
      />

      <section
        id="about-apply-cta"
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]"
      >
        <div className="container-max mx-auto max-w-2xl text-center">
          <SeoReveal>
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Next step</p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Ready for a team that ships like a partner?
            </h2>
            <SectionRule align="center" />
            <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
              A short application is the smallest commitment that lets us come prepared: your market, your competitors, and
              the gaps costing you GCI. No spam—just a conversation about fit.
            </p>
          </SeoReveal>
          <motion.button
            type="button"
            onClick={openApplyModal}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="mt-10 inline-flex min-h-[52px] items-center justify-center rounded-sm border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-4px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-[0_10px_28px_-4px_rgba(15,15,15,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] motion-reduce:hover:translate-y-0"
          >
            Apply
          </motion.button>
        </div>
      </section>
    </div>
  )
}
