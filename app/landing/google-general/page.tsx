'use client'

import Image from 'next/image'
import ClientLogosSlider from '@/components/ClientLogosSlider'
import ApplyModal from '@/components/ApplyModal'
import { useEffect, useRef, useState, type ReactNode } from 'react'

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

const proofItems = [
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
] as const

function SectionHeading({
  titleId,
  eyebrow,
  title,
  align = 'left',
}: {
  titleId: string
  eyebrow: string
  title: ReactNode
  align?: 'left' | 'center'
}) {
  const wrap = align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl'
  return (
    <header className={wrap}>
      <p className="mb-3 font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)]">{eyebrow}</p>
      <h2
        id={titleId}
        className="font-serif text-[2rem] font-light leading-[1.12] tracking-tight text-[var(--color-off-black)] sm:text-[2.35rem]"
      >
        {title}
      </h2>
      <div
        className={`mt-5 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/60 to-transparent sm:w-20 ${align === 'center' ? 'mx-auto' : ''}`}
        aria-hidden
      />
    </header>
  )
}

function ApplyCtaBand({
  surface,
  hint,
  onApply,
}: {
  surface: 'base' | 'white'
  hint: string
  onApply: () => void
}) {
  const bg = surface === 'white' ? 'bg-white' : 'bg-[var(--surface-base)]'
  const ringOffset =
    surface === 'white' ? 'focus-visible:ring-offset-white' : 'focus-visible:ring-offset-[var(--surface-base)]'

  return (
    <aside
      className={`${bg} border-b border-[var(--color-ink-200)] py-10 md:py-14`}
      aria-label="Apply for a strategy call"
    >
      <div className="container-max mx-auto flex max-w-lg flex-col items-center gap-4 px-4 text-center">
        <p className="font-serif text-[0.9375rem] leading-relaxed text-[var(--color-ink-400)]">{hint}</p>
        <button
          type="button"
          onClick={onApply}
          className={`inline-flex min-h-[52px] min-w-[12rem] items-center justify-center px-10 uppercase tracking-[0.15em] text-xs text-white transition-colors bg-[var(--color-off-black)] hover:bg-[var(--color-off-black)]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)] focus-visible:ring-offset-2 ${ringOffset}`}
        >
          Apply Now
        </button>
      </div>
    </aside>
  )
}

const cardArticleClass =
  'border border-[var(--color-ink-200)] bg-white p-5 sm:p-6 transition-colors duration-200 hover:border-[var(--color-ink-300)]'

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

  const openApplyModal = () => {
    window.dispatchEvent(new CustomEvent('openApplyModal'))
  }

  return (
    <main className="min-h-screen bg-[var(--surface-base)]">
      <section
        className="relative min-h-screen overflow-hidden border-b border-[var(--color-ink-200)]"
        aria-labelledby="google-landing-hero-title"
      >
        {/* Video + scrim only (z-0). Copy and controls sit above in separate layers. */}
        <div className="absolute inset-0 z-0">
          <video
            ref={heroVideoRef}
            className="absolute inset-0 z-0 h-full w-full object-cover"
            src="/videos/DMR%20-%20INTRO%204K.mp4"
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
          <div className="max-w-4xl pointer-events-auto">
            <p className="mb-6 font-serif text-[11px] uppercase tracking-[0.24em] text-white/80">
              The AI-First Real Estate Marketing Agency
            </p>
            <h1
              id="google-landing-hero-title"
              className="font-serif text-4xl font-light leading-[1.04] tracking-tight !text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Your Market Has a #1 Agent.
              <br />
              It Should Be You.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl font-serif text-lg leading-relaxed text-white/90 sm:text-xl">
              Most luxury teams doing $40M+ a year are invisible on Google. We fix that. AI-powered SEO.
              Precision Google Ads. Full execution. No dashboards to babysit. No excuses.
            </p>
            <div className="mt-10 flex flex-col items-center gap-8">
              <button
                type="button"
                onClick={openApplyModal}
                className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center bg-white px-10 uppercase tracking-[0.15em] text-xs text-[var(--color-off-black)] transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:w-auto sm:min-w-[12rem]"
              >
                Apply now
              </button>
              <a
                href="#client-logos"
                aria-label="Continue to client logos and page content"
                className="group inline-flex flex-col items-center gap-2 rounded-sm pb-1 text-white/70 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                <span className="font-serif text-xs uppercase tracking-[0.2em]">Continue</span>
                <svg
                  className="h-6 w-6 transition-transform duration-300 group-hover:translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={toggleHeroMute}
          className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/55 text-[#fafaf9] transition-colors hover:bg-black/72 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
          aria-label={isHeroMuted ? 'Unmute hero video' : 'Mute hero video'}
        >
          {isHeroMuted ? <VolumeOffIcon className="h-5 w-5" /> : <VolumeOnIcon className="h-5 w-5" />}
        </button>
      </section>

      <section id="client-logos" className="scroll-mt-6 border-b border-[var(--color-ink-200)] bg-white" aria-label="Client logos">
        <ClientLogosSlider />
      </section>

      <section
        id="problem"
        className="scroll-mt-6 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-14 md:py-20 lg:py-24"
        aria-labelledby="problem-title"
      >
        <div className="container-max max-w-4xl text-center">
          <SectionHeading
            titleId="problem-title"
            eyebrow="The Problem"
            align="center"
            title="Buyers are AI Searching. They&apos;re not finding you."
          />
          <p className="mx-auto mt-8 max-w-3xl font-serif leading-relaxed text-[var(--color-ink-300)]">
            You&apos;re closing deals. You&apos;re building a team. But between your last closing and your next
            one, buyers and sellers are finding competitors. Not because those agents are better. Because they
            rank higher.
          </p>
          <p className="mx-auto mt-3 max-w-3xl font-serif leading-relaxed text-[var(--color-ink-300)]">
            That gap costs you deals you never even see.
          </p>
        </div>
        <div className="container-max mt-12">
          <div className="relative h-[320px] w-full overflow-hidden border border-[var(--color-ink-200)] bg-black sm:h-[460px] md:h-[560px]">
            <video
              ref={problemVideoRef}
              className="h-full w-full object-cover"
              src="/videos/DMR%20-%20MAIN%20VIDEO%204K.mp4"
              autoPlay
              muted={isProblemMuted}
              loop
              playsInline
              preload="metadata"
              aria-label="DMR Media overview video"
            />
            <div
              className="absolute bottom-5 right-5 z-20 flex gap-2"
              role="group"
              aria-label="Video playback controls"
            >
              <button
                type="button"
                onClick={toggleProblemPlayPause}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/55 text-[#fafaf9] transition-colors hover:bg-black/72 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={isProblemPaused ? 'Play video' : 'Pause video'}
              >
                {isProblemPaused ? <PlayIcon className="ml-0.5 h-5 w-5" /> : <PauseIcon className="h-5 w-5" />}
              </button>
              <button
                type="button"
                onClick={toggleProblemMute}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/55 text-[#fafaf9] transition-colors hover:bg-black/72 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={isProblemMuted ? 'Unmute video' : 'Mute video'}
              >
                {isProblemMuted ? <VolumeOffIcon className="h-5 w-5" /> : <VolumeOnIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {problemItems.map((item) => (
              <article key={item.title} className={cardArticleClass}>
                <h3 className="font-serif text-xl text-[var(--color-off-black)]">{item.title}</h3>
                <p className="mt-3 font-serif text-[var(--color-ink-300)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ApplyCtaBand
        surface="base"
        hint="If this resonates, tell us about your market—we come to the call prepared."
        onApply={openApplyModal}
      />

      <section
        className="border-b border-[var(--color-ink-200)] bg-white py-14 md:py-20 lg:py-24"
        aria-labelledby="why-dmr-title"
      >
        <div className="container-max grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative h-[420px] overflow-hidden border border-[var(--color-ink-200)] sm:h-[560px]">
            <Image
              src="/images/landing/google-general/andrew-rohm-coffee.png"
              alt="Andrew Rohm, DMR Media"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <SectionHeading
              titleId="why-dmr-title"
              eyebrow="Why DMR"
              title={<>We don&apos;t sell you a platform. We build your pipeline.</>}
            />
            <p className="mt-8 font-serif leading-relaxed text-[var(--color-ink-300)]">
              We started DMR at 18. Moved the agency to Bali at 20 while serving US luxury teams daily. We&apos;ve
              helped sell $6.5M properties and supported agents breaking into new price tiers.
            </p>
            <ul className="mt-8 space-y-4 border-l border-[var(--color-ink-200)] pl-5">
              {whyDmrBullets.map((bullet) => (
                <li key={bullet} className="font-serif text-[var(--color-off-black)] leading-snug">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ApplyCtaBand
        surface="white"
        hint="Ready to see how we work with teams like yours?"
        onApply={openApplyModal}
      />

      <section
        id="proof"
        className="scroll-mt-6 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-14 md:py-20 lg:py-24"
        aria-labelledby="proof-title"
      >
        <div className="container-max">
          <SectionHeading
            titleId="proof-title"
            eyebrow="We Do It For Ourselves"
            align="center"
            title="We Practice What We Preach"
          />
          <p className="mx-auto mt-8 max-w-4xl text-center font-serif leading-relaxed text-[var(--color-ink-300)]">
            Most agencies sell SEO but can&apos;t rank. Most agencies sell Google Ads but never run profitable
            campaigns for themselves. We are the case study.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {proofItems.map((item) => (
              <article key={item.src} className={cardArticleClass}>
                <div className="relative aspect-[16/7] w-full overflow-hidden border border-[var(--color-ink-200)]">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="mt-5 font-serif leading-relaxed text-[var(--color-off-black)]">{item.stat}</p>
              </article>
            ))}
          </div>
          <blockquote className="mx-auto mt-12 max-w-4xl border-l-2 border-[var(--color-off-black)]/20 py-1 pl-6 font-serif text-lg leading-relaxed text-[var(--color-off-black)]">
            If we can rank in a space where we&apos;re competing against agencies with 10x our budget — imagine
            what we do for you in a market where you&apos;re already the expert.
          </blockquote>
        </div>
      </section>

      <section
        className="border-b border-[var(--color-ink-200)] bg-white py-14 md:py-20 lg:py-24"
        aria-labelledby="system-title"
      >
        <div className="container-max">
          <SectionHeading
            titleId="system-title"
            eyebrow="The System"
            title="Four things. Executed relentlessly."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {systemItems.map((item) => (
              <article
                key={item.title}
                className={`${cardArticleClass} bg-[var(--surface-base)]`}
              >
                <h3 className="font-serif text-xl text-[var(--color-off-black)]">{item.title}</h3>
                <p className="mt-3 font-serif text-[var(--color-ink-300)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ApplyCtaBand
        surface="white"
        hint="Same four pillars—mapped to your market on a strategy call."
        onApply={openApplyModal}
      />

      <section
        className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-14 md:py-20 lg:py-24"
        aria-labelledby="case-studies-title"
      >
        <div className="container-max">
          <SectionHeading titleId="case-studies-title" eyebrow="Case Studies" title="Real teams. Real numbers." />
          <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-6">
            {caseStudies.map((study) => (
              <article key={study.title} className={cardArticleClass}>
                <div className="relative mb-5 h-44 overflow-hidden border border-[var(--color-ink-200)] bg-white">
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
                <p className="mt-5 font-serif text-sm text-[var(--color-ink-400)]">{study.footer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ApplyCtaBand
        surface="base"
        hint="Proof is one thing—your numbers are the conversation we want next."
        onApply={openApplyModal}
      />

      <section
        className="border-b border-[var(--color-ink-200)] bg-white py-14 md:py-20 lg:py-24"
        aria-labelledby="reviews-title"
      >
        <div className="container-max">
          <SectionHeading titleId="reviews-title" eyebrow="Reviews" title="What clients say" />
          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
            {reviews.map((review) => (
              <article
                key={review.author}
                className={`${cardArticleClass} bg-[var(--surface-base)]`}
              >
                <p className="mb-3 text-[var(--color-trust)]" aria-hidden>
                  ★★★★★
                </p>
                <blockquote className="font-serif leading-relaxed text-[var(--color-off-black)]">
                  &quot;{review.quote}&quot;
                </blockquote>
                <p className="mt-4 font-serif text-sm text-[var(--color-ink-400)]">{review.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ApplyCtaBand
        surface="white"
        hint="Teams like yours use the same process—we tailor it to your market."
        onApply={openApplyModal}
      />

      <section
        className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-14 md:py-20 lg:py-24"
        aria-labelledby="process-title"
      >
        <div className="container-max">
          <SectionHeading titleId="process-title" eyebrow="Process" title="What happens next" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {processItems.map((item) => (
              <article key={item.title} className={cardArticleClass}>
                <h3 className="font-serif text-xl text-[var(--color-off-black)]">{item.title}</h3>
                <p className="mt-3 font-serif text-[var(--color-ink-300)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ApplyCtaBand
        surface="base"
        hint="You know the steps—apply when you want a straight conversation about fit."
        onApply={openApplyModal}
      />

      <ApplyModal />
    </main>
  )
}
