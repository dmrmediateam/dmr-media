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
    title: 'You need senior strategy, not another retainer',
    body: 'You already have execution capacity, but your roadmap lacks clear SEO priorities tied to revenue outcomes.',
  },
  {
    title: 'A relaunch is at risk without search input',
    body: 'Design and dev are moving, but no one has pressure-tested IA, indexation, and keyword coverage before launch.',
  },
  {
    title: 'Leadership needs a defensible plan',
    body: 'You need a documented strategy your board, brokerage, or partners can review and approve with confidence.',
  },
  {
    title: 'You want clarity before committing to monthly SEO',
    body: 'Consulting gives you fixed deliverables, fixed timeline, and a clean handoff before choosing full management.',
  },
]

const whyDmrBullets = [
  'Fixed-scope consulting engagement with clear deliverables and timeline.',
  'Roadmap built for your internal team to execute without ambiguity.',
  'Option to stay independent or upgrade later to managed SEO execution.',
]

const systemItems = [
  {
    title: '01 — Discovery & Audit',
    body: 'Stakeholder interviews, analytics review, crawl diagnostics, Core Web Vitals, schema, and indexation analysis.',
  },
  {
    title: '02 — Competitive + Keyword Strategy',
    body: 'SERP landscape mapping, entity opportunities, and intent-led keyword architecture tied to your inventory and market.',
  },
  {
    title: '03 — Roadmap + Content Calendar',
    body: 'Prioritized implementation plan sequencing impact vs. effort, plus a practical editorial calendar your team can ship.',
  },
  {
    title: '04 — Workshop + Implementation Handoff',
    body: 'We translate strategy into executable tickets, ownership, and timelines so dev and marketing can move immediately.',
  },
]

const caseStudies = [
  {
    title: 'In-house Marketing Team Needing SEO Direction',
    image: '/images/EaganCaseStudy/GoogleSearchConsole.png',
    points: [
      'Needed a strategy before scaling content output.',
      'Received prioritized technical fixes and keyword map.',
      'Internal team converted roadmap into weekly tickets.',
      'Avoided a costly rebuild driven by guesswork.',
    ],
    footer: 'Typical consulting outcome',
  },
  {
    title: 'Brokerage Preparing a Website Relaunch',
    image: '/images/JadeCRM.png',
    points: [
      'Audit identified crawl/indexation issues pre-launch.',
      'Information architecture adjusted before development freeze.',
      'Content plan aligned to neighborhood and buyer-intent queries.',
      'Launch proceeded with reduced SEO rework risk.',
    ],
    footer: 'Typical consulting outcome',
  },
  {
    title: 'Leadership Team Comparing Agency Options',
    image: '/images/MarquisFarwellGoogleSearchConsole.png',
    points: [
      'Needed independent baseline before signing a retainer.',
      'Received board-ready roadmap with owners and sequencing.',
      'Used deliverables to evaluate agency proposals objectively.',
      'Moved forward with a clear scope and measurable milestones.',
    ],
    footer: 'Typical consulting outcome',
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
    title: '01 — Discovery & Audit (2 weeks)',
    body: 'Interviews, analytics review, technical crawl, and competitive baseline to define the right scope.',
  },
  {
    title: '02 — Strategy Development (1-2 weeks)',
    body: 'Keyword architecture, IA recommendations, technical fixes, and a board-ready narrative.',
  },
  {
    title: '03 — Delivery & Kickoff (1 week)',
    body: 'Workshop handoff with your team and clear next actions for content, development, and reporting.',
  },
  {
    title: '04 — Optional Quarterly Check-ins',
    body: 'Stay consulting-only or add lightweight strategic reviews while your team executes.',
  },
]

const faqItems = [
  {
    question: 'How long does SEO consulting take?',
    answer:
      'Most engagements run four to five weeks end-to-end: two weeks for discovery/audit, one to two for strategy, then one week for delivery and kickoff.',
  },
  {
    question: 'Can we upgrade to full SEO management later?',
    answer: (
      <>
        Yes. This is the smaller strategy package. If you want weekly execution afterward, move into{' '}
        <a
          href="https://www.dmrmedia.org/seo-optimization"
          className="underline decoration-[var(--color-ink-300)] underline-offset-4 hover:decoration-[var(--color-off-black)]"
        >
          SEO Optimization
        </a>{' '}
        when the roadmap is approved.
      </>
    ),
  },
  {
    question: 'Do you provide implementation support?',
    answer:
      'Yes. Every consulting project includes a kickoff workshop that translates findings into executable tickets and owners for your internal team.',
  },
  {
    question: 'What if we already need execution now?',
    answer: (
      <>
        If you want us to run technical + content execution weekly, skip straight to{' '}
        <a
          href="https://www.dmrmedia.org/seo-optimization"
          className="underline decoration-[var(--color-ink-300)] underline-offset-4 hover:decoration-[var(--color-off-black)]"
        >
          SEO Optimization
        </a>
        . If you need strategic direction first, stay with{' '}
        <a
          href="https://www.dmrmedia.org/seo-consulting"
          className="underline decoration-[var(--color-ink-300)] underline-offset-4 hover:decoration-[var(--color-off-black)]"
        >
          SEO Consulting
        </a>
        .
      </>
    ),
  },
]

const proofItems = [
  {
    src: '/images/landing/google-general/01-claude-ranking.png',
    label: 'Claude ranking mention',
    stat: 'Audit narratives prioritize impact vs. effort so your team knows exactly what to ship first.',
  },
  {
    src: '/images/landing/google-general/02-perplexity-ranking.png',
    label: 'Perplexity ranking mention',
    stat: 'Competitive research clarifies where head terms matter and where long-tail intent converts faster.',
  },
  {
    src: '/images/landing/google-general/03-semrush-ranking.png',
    label: 'SEMrush ranking mention',
    stat: 'Keyword architecture maps content to actual buyer and seller intent, not vanity volume targets.',
  },
  {
    src: '/images/landing/google-general/04-google-ranking.png',
    label: 'Google AI Overview ranking mention',
    stat: 'Implementation workshops turn strategy into actionable tickets for dev, content, and leadership.',
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
      <p className="mb-3 font-general-sans text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)]">{eyebrow}</p>
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
        <p className="font-general-sans text-[0.9375rem] leading-relaxed text-[var(--color-ink-400)]">{hint}</p>
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
            <p className="mb-6 font-general-sans text-[11px] uppercase tracking-[0.24em] text-white/80">
              SEO Consulting for Real Estate Teams
            </p>
            <h1
              id="google-landing-hero-title"
              className="font-serif text-4xl font-light leading-[1.04] tracking-tight !text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              SEO Strategy Without
              <br />
              the Long-Term Contract.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl font-general-sans text-lg leading-relaxed text-white/90 sm:text-xl">
              Get a documented SEO roadmap, competitive analysis, and implementation plan your team can execute with
              confidence.
            </p>
            <div className="mt-10 flex flex-col items-center">
              <button
                type="button"
                onClick={openApplyModal}
                className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center bg-white px-10 uppercase tracking-[0.15em] text-xs text-[var(--color-off-black)] transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:w-auto sm:min-w-[12rem]"
              >
                Apply now
              </button>
              <a
                href="#client-logos"
                aria-label="Scroll to page content"
                className="mt-10 inline-flex rounded-sm p-1 text-white/30 outline-none transition-colors hover:text-white/45 focus-visible:ring-1 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
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
            title="Most teams don&apos;t need another vendor. They need a clear plan."
          />
          <p className="mx-auto mt-8 max-w-3xl font-general-sans leading-relaxed text-[var(--color-ink-300)]">
            Consulting is built for teams with internal capacity that need strategy, sequencing, and QA before they
            ship.
          </p>
          <p className="mx-auto mt-3 max-w-3xl font-general-sans leading-relaxed text-[var(--color-ink-300)]">
            You leave with a practical roadmap, not a retainer dependency.
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
                <p className="mt-3 font-general-sans text-[var(--color-ink-300)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ApplyCtaBand
        surface="base"
        hint="Need strategy first? Apply and we will map your consulting scope."
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
              title={<>Smaller package. Senior guidance. Zero fluff.</>}
            />
            <p className="mt-8 font-general-sans leading-relaxed text-[var(--color-ink-300)]">
              This package is for teams that want strategic clarity before committing to ongoing execution. You get
              fixed deliverables, fixed timeline, and a handoff your internal operators can run.
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
        hint="If you have team capacity, consulting is usually the fastest path to clarity."
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
            eyebrow="What You Get"
            align="center"
            title="Consulting deliverables built to be used, not filed away"
          />
          <p className="mx-auto mt-8 max-w-4xl text-center font-general-sans leading-relaxed text-[var(--color-ink-300)]">
            Each engagement ships with an audit narrative, competitive insights, keyword mapping, and a prioritized
            implementation roadmap.
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
                <p className="mt-5 font-general-sans leading-relaxed text-[var(--color-off-black)]">{item.stat}</p>
              </article>
            ))}
          </div>
          <blockquote className="mx-auto mt-12 max-w-4xl border-l-2 border-[var(--color-off-black)]/20 py-1 pl-6 font-serif text-lg leading-relaxed text-[var(--color-off-black)]">
            Strategy should make your next 90 days easier to execute, not add another reporting layer.
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
            eyebrow="Consulting Package"
            title="Four deliverables. One clear handoff."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {systemItems.map((item) => (
              <article
                key={item.title}
                className={`${cardArticleClass} bg-[var(--surface-base)]`}
              >
                <h3 className="font-serif text-xl text-[var(--color-off-black)]">{item.title}</h3>
                <p className="mt-3 font-general-sans text-[var(--color-ink-300)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ApplyCtaBand
        surface="white"
        hint="You can execute this with your current team or keep us involved."
        onApply={openApplyModal}
      />

      <section
        className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-14 md:py-20 lg:py-24"
        aria-labelledby="case-studies-title"
      >
        <div className="container-max">
          <SectionHeading titleId="case-studies-title" eyebrow="Use Cases" title="Where consulting is the right fit" />
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
                <p className="mt-5 font-general-sans text-sm text-[var(--color-ink-400)]">{study.footer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ApplyCtaBand
        surface="base"
        hint="Bring your market, team structure, and growth target. We will scope the roadmap."
        onApply={openApplyModal}
      />

      <section
        className="border-b border-[var(--color-ink-200)] bg-white py-14 md:py-20 lg:py-24"
        aria-labelledby="reviews-title"
      >
        <div className="container-max">
          <SectionHeading titleId="reviews-title" eyebrow="Client Feedback" title="What clients say" />
          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
            {reviews.map((review) => (
              <article
                key={review.author}
                className={`${cardArticleClass} bg-[var(--surface-base)]`}
              >
                <p className="mb-3 font-general-sans text-[var(--color-trust)]" aria-hidden>
                  ★★★★★
                </p>
                <blockquote className="font-serif leading-relaxed text-[var(--color-off-black)]">
                  &quot;{review.quote}&quot;
                </blockquote>
                <p className="mt-4 font-general-sans text-sm text-[var(--color-ink-400)]">{review.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ApplyCtaBand
        surface="white"
        hint="Consulting first when you need direction. Optimization when you need full execution."
        onApply={openApplyModal}
      />

      <section
        className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-14 md:py-20 lg:py-24"
        aria-labelledby="process-title"
      >
        <div className="container-max">
          <SectionHeading titleId="process-title" eyebrow="Process" title="Three phases, then your team executes" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {processItems.map((item) => (
              <article key={item.title} className={cardArticleClass}>
                <h3 className="font-serif text-xl text-[var(--color-off-black)]">{item.title}</h3>
                <p className="mt-3 font-general-sans text-[var(--color-ink-300)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ApplyCtaBand
        surface="base"
        hint="If this smaller package fits, apply and we will map your timeline."
        onApply={openApplyModal}
      />

      <section className="border-b border-[var(--color-ink-200)] bg-white py-14 md:py-20 lg:py-24" aria-labelledby="faq-title">
        <div className="container-max">
          <SectionHeading titleId="faq-title" eyebrow="FAQ" title="Questions teams ask before choosing a package" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {faqItems.map((item) => (
              <article key={item.question} className={`${cardArticleClass} bg-[var(--surface-base)]`}>
                <h3 className="font-serif text-xl text-[var(--color-off-black)]">{item.question}</h3>
                <p className="mt-3 font-general-sans text-[var(--color-ink-300)]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ApplyModal />
    </main>
  )
}
