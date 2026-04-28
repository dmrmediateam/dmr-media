 'use client'

import Image from 'next/image'
import ClientLogosSlider from '@/components/ClientLogosSlider'
import { useEffect, useRef, useState } from 'react'

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  )
}

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

const problemItems = [
  {
    title: "You're invisible on Google",
    body: "Agents in your market own Page 1. You're on Page 3. Buyers never scroll that far.",
  },
  {
    title: "You've burned ad budget before",
    body: 'You tried Google or Facebook Ads. The agency got paid. You got nothing. Zero accountability.',
  },
  {
    title: 'You hired an agency that disappeared',
    body: "Big pitch. A login to a portal. Then silence. You've been here. You don't want to go back.",
  },
  {
    title: "You don't have time to manage vendors",
    body: "You're running a $40M+ operation. You can't babysit a team that doesn't understand real estate.",
  },
]

const whyDmrBullets = [
  'Pitched Nobu at 18. Understood luxury before most people enter the workforce.',
  'Built a running agency by 20 and moved it to Bali while still delivering for US luxury teams.',
  "Clients include Wisconsin's Realtor of the Year and Dolphin Cay's #1 team.",
]

const systemItems = [
  {
    title: '01 — AI-First SEO',
    body: 'We build content and backlinks that rank for buyer-intent searches in your exact market. Blogs, citations, and backlinks executed monthly without you thinking about it.',
  },
  {
    title: '02 — Google Ads That Convert',
    body: 'Campaigns built around luxury real estate search behavior. Every keyword intentional. Every dollar tracked. One client landed a $1M listing in 30 days at $36.93 CPL.',
  },
  {
    title: '03 — Websites That Work',
    body: 'We build and optimize on Luxury Presence and custom platforms designed to capture leads, not just impress at listing presentations.',
  },
  {
    title: '04 — A Real Team Behind You',
    body: 'Direct access. Real communication. Real accountability. No support-ticket queue. No SaaS chat widget.',
  },
]

const caseStudies = [
  {
    title: 'Eagan Luxury Real Estate · St. Petersburg, FL',
    image: '/images/EaganCaseStudy/GoogleSearchConsole.png',
    points: [
      '$11.07M closed volume in Q1 2026.',
      'Daily impressions grew from 0 to 812.',
      `#1 ranking for "Realtor in Dolphin Cay".`,
      '$36.93 cost per lead from Google Ads.',
    ],
    footer: "William Breaden · Dolphin Cay's #1 Team",
  },
  {
    title: 'Jade · Legendary Real Estate · Wisconsin',
    image: '/images/JadeCRM.png',
    points: [
      '3x qualified inbound leads in 90 days.',
      '42 connected content assets rebuilt into one funnel.',
      'Signal-first SEO system tied to real conversion intent.',
      'Luxury nurture automation built around buyer behavior.',
    ],
    footer: 'Jade Goodhue · Legendary Real Estate',
  },
  {
    title: 'Marquis + Farwell Group · Sonoma County, CA',
    image: '/images/MarquisFarwellGoogleSearchConsole.png',
    points: [
      'Daily organic clicks increased 2 → 38 (19x growth).',
      'Google Business interactions increased +41% in one month.',
      'Healdsburg and Sonoma County visibility improved for high-intent terms.',
      'Qualified buyer leads generated directly from organic search.',
    ],
    footer: 'Samantha Marquis + Linda Farwell · Founding Agents',
  },
]

const reviews = [
  {
    quote:
      'Andrew was great to work with on setting up our new real estate website and getting everything linked and functional. He was always willing to listen and help guide us through the process.',
    author: 'William Breaden · Eagan Luxury Real Estate · St. Petersburg, FL',
  },
  {
    quote:
      "We started working with Andrew about a month ago. He's articulate, responsive, and provides amazing weekly updates. He's taken the time to really explain what the issues were on why we weren't ranking despite all our blogs and videos. It's exciting to watch his weekly progress, and he even provides us feedback for how we can better engage the leads we have. He works with us like a partner, rather than a vendor dealing with just another number. If you have the opportunity to work with him, just DO IT. You'll be grateful you did!",
    author: 'Jade Goodhue · Legendary Real Estate Services · Wisconsin Realtor of the Year',
  },
  {
    quote:
      "We’ve had an outstanding experience working with Andrew Rohm and Max Deleonardis at DMR Media. Their website management and search engine placement services have been exceptional. They are fast, reliable, and always provide smart, practical advice that truly makes a difference. Since partnering with them, our web traffic has increased tremendously, and we’re seeing real results from their work. They are responsive, professional, and clearly experts in what they do. Highly recommend Andrew, Max, and the entire DMRMedia team to anyone looking to grow their online presence!",
    author: 'Sandy Reavil · Vermont Realtor of the Year',
  },
]

const processItems = [
  {
    title: '01 — Free Audit',
    body: "We review your market, rankings, and digital presence and show you exactly what's costing you leads right now.",
  },
  {
    title: '02 — Custom Plan',
    body: 'Strategy built around your market and volume targets. Not a template. Not a package.',
  },
  {
    title: '03 — We Execute',
    body: "Blogs, backlinks, ads, website. You stay in your lane. We stay in ours. You don't manage us.",
  },
  {
    title: '04 — You Close More Deals',
    body: "More qualified traffic, inbound leads, and listings. That's the scoreboard.",
  },
]

export default function GoogleGeneralLandingPage() {
  useEffect(() => {
    const nav = document.querySelector('nav') as HTMLElement | null
    const footer = document.querySelector('footer') as HTMLElement | null
    if (nav) nav.style.display = 'none'
    if (footer) footer.style.display = 'none'
    return () => {
      if (nav) nav.style.display = ''
      if (footer) footer.style.display = ''
    }
  }, [])

  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const problemVideoRef = useRef<HTMLVideoElement>(null)
  const [isHeroMuted, setIsHeroMuted] = useState(true)
  const [isProblemMuted, setIsProblemMuted] = useState(true)
  const [isProblemPaused, setIsProblemPaused] = useState(false)

  const toggleHeroMute = () => {
    const video = heroVideoRef.current
    if (!video) return
    const nextMuted = !video.muted
    video.muted = nextMuted
    setIsHeroMuted(nextMuted)
    void video.play().catch(() => {})
  }

  const toggleProblemMute = () => {
    const video = problemVideoRef.current
    if (!video) return
    const nextMuted = !video.muted
    video.muted = nextMuted
    setIsProblemMuted(nextMuted)
    void video.play().catch(() => {})
  }

  const toggleProblemPlayPause = () => {
    const video = problemVideoRef.current
    if (!video) return
    if (video.paused) {
      void video.play().catch(() => {})
      setIsProblemPaused(false)
    } else {
      video.pause()
      setIsProblemPaused(true)
    }
  }

  return (
    <main className="min-h-screen bg-[var(--surface-base)]">
      <section className="relative min-h-screen overflow-hidden border-b border-[var(--color-ink-200)]">
        <div className="absolute inset-0">
          <video
            ref={heroVideoRef}
            className="h-full w-full object-cover"
            src="/videos/DMR%20-%20INTRO%204K.mp4"
            autoPlay
            muted={isHeroMuted}
            loop
            playsInline
            preload="metadata"
            aria-hidden
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.58)' }} />
          <button
            type="button"
            onClick={toggleHeroMute}
            className="absolute z-20 bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/55 text-[#fafaf9] transition-colors hover:bg-black/72 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label={isHeroMuted ? 'Unmute hero video' : 'Mute hero video'}
          >
            {isHeroMuted ? <VolumeOffIcon className="h-5 w-5" /> : <VolumeOnIcon className="h-5 w-5" />}
          </button>
        </div>
        <div className="relative container-max min-h-screen flex items-center justify-center py-20 text-center">
          <div className="max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/80 mb-6 font-serif">
              The AI-First Real Estate Marketing Agency
            </p>
            <h1 className="font-serif font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-tight !text-white">
              Your Market Has a #1 Agent.
              <br />
              It Should Be You.
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-3xl font-serif mx-auto leading-relaxed">
              Most luxury teams doing $40M+ a year are invisible on Google. We fix that. AI-powered SEO.
              Precision Google Ads. Full execution. No dashboards to babysit. No excuses.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#form"
                className="inline-flex min-h-[52px] items-center justify-center px-8 bg-white text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs"
              >
                Apply today
              </a>
              <a
                href="#proof"
                className="inline-flex min-h-[52px] items-center justify-center px-8 border border-white/60 text-white uppercase tracking-[0.15em] text-xs"
              >
                See Results ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-ink-200)] bg-white">
        <ClientLogosSlider />
      </section>

      <section className="py-16 md:py-24 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
        <div className="container-max max-w-4xl text-center">
          <p className="text-sm text-[var(--color-ink-400)] font-serif mb-6">
            The Problem
          </p>
          <h2 className="font-serif font-light text-[2rem] sm:text-[2.3rem] text-[var(--color-off-black)] leading-tight">
            Buyers are Googling. They&apos;re not finding you.
          </h2>
          <p className="mt-6 text-[var(--color-ink-300)] font-serif leading-relaxed">
            You&apos;re closing deals. You&apos;re building a team. But between your last closing and your next
            one, buyers and sellers are finding competitors. Not because those agents are better. Because they
            rank higher.
          </p>
          <p className="mt-3 text-[var(--color-ink-300)] font-serif leading-relaxed">
            That gap costs you deals you never even see.
          </p>
        </div>
        <div className="container-max mt-10">
          <div className="relative overflow-hidden border border-[var(--color-ink-200)] bg-black h-[320px] sm:h-[460px] md:h-[560px] w-full">
            <video
              ref={problemVideoRef}
              className="h-full w-full object-cover"
              src="/videos/DMR%20-%20MAIN%20VIDEO%204K.mp4"
              autoPlay
              muted={isProblemMuted}
              loop
              playsInline
              preload="metadata"
              aria-label="DMR Media video"
            />
            <div className="absolute z-20 bottom-5 right-5 flex gap-2">
              <button
                type="button"
                onClick={toggleProblemPlayPause}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/55 text-[#fafaf9] transition-colors hover:bg-black/72 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={isProblemPaused ? 'Play problem video' : 'Pause problem video'}
              >
                {isProblemPaused ? <PlayIcon className="ml-0.5 h-5 w-5" /> : <PauseIcon className="h-5 w-5" />}
              </button>
              <button
                type="button"
                onClick={toggleProblemMute}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/55 text-[#fafaf9] transition-colors hover:bg-black/72 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={isProblemMuted ? 'Unmute problem video' : 'Mute problem video'}
              >
                {isProblemMuted ? <VolumeOffIcon className="h-5 w-5" /> : <VolumeOnIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {problemItems.map((item) => (
              <article key={item.title} className="border border-[var(--color-ink-200)] bg-white p-5">
                <h3 className="font-serif text-xl text-[var(--color-off-black)]">{item.title}</h3>
                <p className="mt-3 text-[var(--color-ink-300)] font-serif">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)]">
        <div className="container-max grid lg:grid-cols-2 gap-10 items-start">
          <div className="relative h-[420px] sm:h-[560px] border border-[var(--color-ink-200)] overflow-hidden">
            <Image
              src="/images/landing/google-general/andrew-rohm-coffee.png"
              alt="Andrew Rohm"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm text-[var(--color-ink-400)] font-serif mb-4">
              Why DMR
            </p>
            <h2 className="font-serif font-light text-[2rem] sm:text-[2.3rem] text-[var(--color-off-black)] leading-tight">
              We don&apos;t sell you a platform. We build your pipeline.
            </h2>
            <p className="mt-6 text-[var(--color-ink-300)] font-serif leading-relaxed">
              We started DMR at 18. Moved the agency to Bali at 20 while serving US luxury teams daily. We&apos;ve
              helped sell $6.5M properties and supported agents breaking into new price tiers.
            </p>
            <ul className="mt-6 space-y-3">
              {whyDmrBullets.map((bullet) => (
                <li key={bullet} className="font-serif text-[var(--color-off-black)]">
                  → {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="proof" className="py-16 md:py-24 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <p className="text-sm text-[var(--color-ink-400)] font-serif mb-4 text-center">
            We Do It For Ourselves
          </p>
          <h2 className="font-serif font-light text-[2rem] sm:text-[2.3rem] text-[var(--color-off-black)] text-center leading-tight">
            We Practice What We Preach
          </h2>
          <p className="mt-6 text-[var(--color-ink-300)] font-serif max-w-4xl mx-auto text-center leading-relaxed">
            Most agencies sell SEO but can&apos;t rank. Most agencies sell Google Ads but never run profitable
            campaigns for themselves. We are the case study.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                src: '/images/landing/google-general/01-claude-ranking.png',
                label: 'Claude ranking mention',
                stat: 'Claude: DMR Media listed as top-rated for luxury-focused real estate PPC.',
              },
              {
                src: '/images/landing/google-general/02-perplexity-ranking.png',
                label: 'Perplexity ranking mention',
                stat: 'Perplexity: DMR Media highlighted as a standout and ranked #1 in a 2026 roundup.',
              },
              {
                src: '/images/landing/google-general/03-semrush-ranking.png',
                label: 'SEMrush ranking mention',
                stat: 'SEMrush directory: DMR Media appears in top US real estate PPC companies.',
              },
              {
                src: '/images/landing/google-general/04-google-ranking.png',
                label: 'Google AI Overview ranking mention',
                stat: 'Google AI Overview: DMR Media included among top real estate PPC agencies in 2026.',
              },
            ].map((item) => (
              <article key={item.src} className="border border-[var(--color-ink-200)] bg-white p-4">
                <div className="relative w-full aspect-[16/7] border border-[var(--color-ink-200)] overflow-hidden">
                  <Image src={item.src} alt={item.label} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <p className="font-serif text-[var(--color-off-black)] mt-4 leading-relaxed">{item.stat}</p>
              </article>
            ))}
          </div>
          <blockquote className="mt-8 max-w-4xl mx-auto border-l border-[var(--color-ink-300)] pl-5 text-[var(--color-off-black)] font-serif text-lg">
            If we can rank in a space where we&apos;re competing against agencies with 10x our budget — imagine
            what we do for you in a market where you&apos;re already the expert.
          </blockquote>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <p className="text-sm text-[var(--color-ink-400)] font-serif mb-4">
            The System
          </p>
          <h2 className="font-serif font-light text-[2rem] sm:text-[2.3rem] text-[var(--color-off-black)] leading-tight">
            Four things. Executed relentlessly.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {systemItems.map((item) => (
              <article key={item.title} className="bg-[var(--surface-base)] border border-[var(--color-ink-200)] p-6">
                <h3 className="font-serif text-xl text-[var(--color-off-black)]">{item.title}</h3>
                <p className="mt-3 font-serif text-[var(--color-ink-300)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <p className="text-sm text-[var(--color-ink-400)] font-serif mb-4">
            Case Studies
          </p>
          <h2 className="font-serif font-light text-[2rem] sm:text-[2.3rem] text-[var(--color-off-black)] leading-tight">
            Real teams. Real numbers.
          </h2>
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <article key={study.title} className="border border-[var(--color-ink-200)] p-6 bg-white">
                <div className="relative h-44 mb-5 border border-[var(--color-ink-200)] overflow-hidden bg-white">
                  <Image
                    src={study.image}
                    alt={`${study.title} case study`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-serif text-xl text-[var(--color-off-black)]">{study.title}</h3>
                <ul className="mt-4 space-y-2">
                  {study.points.map((point) => (
                    <li key={point} className="font-serif text-[var(--color-ink-300)]">
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-serif text-[var(--color-ink-400)]">{study.footer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <p className="text-sm text-[var(--color-ink-400)] font-serif mb-4">
            Reviews
          </p>
          <h2 className="font-serif font-light text-[2rem] sm:text-[2.3rem] text-[var(--color-off-black)] leading-tight">
            What clients say
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <article key={review.author} className="bg-[var(--surface-base)] border border-[var(--color-ink-200)] p-6">
                <p className="text-[var(--color-trust)] mb-3">★★★★★</p>
                <blockquote className="font-serif text-[var(--color-off-black)] leading-relaxed">
                  &quot;{review.quote}&quot;
                </blockquote>
                <p className="mt-4 text-sm font-serif text-[var(--color-ink-400)]">{review.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <p className="text-sm text-[var(--color-ink-400)] font-serif mb-4">
            Process
          </p>
          <h2 className="font-serif font-light text-[2rem] sm:text-[2.3rem] text-[var(--color-off-black)] leading-tight">
            What happens next
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {processItems.map((item) => (
              <article key={item.title} className="border border-[var(--color-ink-200)] bg-white p-6">
                <h3 className="font-serif text-xl text-[var(--color-off-black)]">{item.title}</h3>
                <p className="mt-3 font-serif text-[var(--color-ink-300)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="py-16 md:py-24 bg-white">
        <div className="container-max grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <div>
            <p className="text-sm text-[var(--color-ink-400)] font-serif mb-4">
              Apply
            </p>
            <h2 className="font-serif font-light text-[2rem] sm:text-[2.3rem] text-[var(--color-off-black)] leading-tight">
              Let&apos;s see what you&apos;re missing on Google.
            </h2>
            <p className="mt-6 font-serif text-[var(--color-ink-300)] max-w-xl leading-relaxed">
              Takes 2 minutes to fill out. We come to the call prepared with your market, rankings, and biggest
              growth gaps already mapped.
            </p>
          </div>

          <div className="border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6 sm:p-8">
            <form action="/api/application" method="POST" className="space-y-5">
              <input type="hidden" name="formName" value="google-general-strategy-call" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)] mb-2">
                    First Name
                  </label>
                  <input id="firstName" name="firstName" required className="w-full min-h-[46px] border-0 border-b border-[var(--color-ink-300)] bg-transparent px-0 text-[var(--color-off-black)] focus:outline-none focus:border-[var(--color-off-black)]" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)] mb-2">
                    Last Name
                  </label>
                  <input id="lastName" name="lastName" required className="w-full min-h-[46px] border-0 border-b border-[var(--color-ink-300)] bg-transparent px-0 text-[var(--color-off-black)] focus:outline-none focus:border-[var(--color-off-black)]" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)] mb-2">
                  Business Email
                </label>
                <input id="email" type="email" name="email" required className="w-full min-h-[46px] border-0 border-b border-[var(--color-ink-300)] bg-transparent px-0 text-[var(--color-off-black)] focus:outline-none focus:border-[var(--color-off-black)]" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)] mb-2">
                  Phone Number
                </label>
                <input id="phone" type="tel" name="phone" required className="w-full min-h-[46px] border-0 border-b border-[var(--color-ink-300)] bg-transparent px-0 text-[var(--color-off-black)] focus:outline-none focus:border-[var(--color-off-black)]" />
              </div>

              <div>
                <label htmlFor="market" className="block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)] mb-2">
                  Your Market / City
                </label>
                <input id="market" name="market" required className="w-full min-h-[46px] border-0 border-b border-[var(--color-ink-300)] bg-transparent px-0 text-[var(--color-off-black)] focus:outline-none focus:border-[var(--color-off-black)]" />
              </div>

              <div>
                <label htmlFor="annualSalesVolume" className="block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)] mb-2">
                  Annual Sales Volume
                </label>
                <select id="annualSalesVolume" name="annualSalesVolume" required defaultValue="" className="w-full min-h-[46px] border-0 border-b border-[var(--color-ink-300)] bg-transparent px-0 text-[var(--color-off-black)] focus:outline-none focus:border-[var(--color-off-black)]">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Under $20M</option>
                  <option>$20M-$40M</option>
                  <option>$40M-$75M</option>
                  <option>$75M-$150M</option>
                  <option>$150M+</option>
                </select>
              </div>

              <div>
                <label htmlFor="teamSize" className="block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)] mb-2">
                  Team Size
                </label>
                <select id="teamSize" name="teamSize" required defaultValue="" className="w-full min-h-[46px] border-0 border-b border-[var(--color-ink-300)] bg-transparent px-0 text-[var(--color-off-black)] focus:outline-none focus:border-[var(--color-off-black)]">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Solo</option>
                  <option>2-4</option>
                  <option>5-10</option>
                  <option>10-20</option>
                  <option>20+</option>
                </select>
              </div>

              <div>
                <label htmlFor="biggestChallenge" className="block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)] mb-2">
                  Biggest Challenge Right Now
                </label>
                <select id="biggestChallenge" name="biggestChallenge" required defaultValue="" className="w-full min-h-[46px] border-0 border-b border-[var(--color-ink-300)] bg-transparent px-0 text-[var(--color-off-black)] focus:outline-none focus:border-[var(--color-off-black)]">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Not ranking on Google</option>
                  <option>Poor ad ROI</option>
                  <option>Not enough inbound leads</option>
                  <option>Need more listing leads</option>
                  <option>Weak presence vs competitors</option>
                  <option>Starting from zero</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full min-h-[52px] bg-[var(--color-off-black)] text-white uppercase tracking-[0.15em] text-xs mt-3"
              >
                Apply today →
              </button>
              <p className="text-xs text-[var(--color-ink-400)] text-center font-serif">
                No spam. No sales pressure. Just a straight conversation.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
