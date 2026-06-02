'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import '@/app/landing/google-general/google-general-landing.css'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'

const videoTestimonials = [
  {
    id: 'bill',
    name: 'William Breaden',
    agency: 'Eagan Luxury',
    location: 'St. Petersburg, FL',
    videoId: 'UtuLcLjSsG0',
    image: '/images/ClientImages/Bill-Breaden-1-227x226.avif',
    highlight:
      "You were able to turn our website around in a month. The hits on the website are five, six times what they were on our old website. Everything I asked you to do, you come back and put it together in a way that's frankly better than the idea I thought it would come out.",
  },
  {
    id: 'michael',
    name: 'Michael Kurlyak',
    agency: 'MK Real Estate',
    location: '',
    videoId: 'ng_7ysEAlkc',
    image: '/images/ClientImages/Micheal.png',
    highlight:
      "Andrew's been great to work with. He's been awesome especially with updates, ideas and planning. Looking forward to continuing to work with him; he's been a great resource for everything I'm looking to do.",
  },
] as const

function SectionRule() {
  return <div className="mt-6 h-px w-full max-w-[4.5rem] bg-[var(--color-off-black)]/20" aria-hidden />
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

type VideoTestimonialsProps = {
  eyebrow?: string
  title?: string
  className?: string
}

export default function VideoTestimonials({
  eyebrow = 'Client testimonials',
  title = 'Hear from teams in their own words',
  className = '',
}: VideoTestimonialsProps) {
  const [modalVideo, setModalVideo] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = modalVideo ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [modalVideo])

  return (
    <>
      <section
        id="video-testimonials"
        aria-labelledby="video-testimonials-heading"
        className={`google-general-landing scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y,theme(spacing.20))] md:py-[var(--seo-section-y,theme(spacing.28))] ${className}`.trim()}
      >
        <div className="container-max px-4 sm:px-6">
          <SeoReveal>
            <p className="gg-eyebrow">{eyebrow}</p>
            <h2
              id="video-testimonials-heading"
              className="gg-display mt-3 max-w-2xl text-3xl font-light tracking-tight md:text-4xl"
            >
              {title}
            </h2>
            <SectionRule />
          </SeoReveal>

          <ul className="mt-12 grid list-none grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 md:gap-8" role="list">
            {videoTestimonials.map((t, i) => (
              <SeoReveal key={t.id} delay={i * 0.06} className="h-full">
                <li className="h-full list-none">
                  <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/14 hover:shadow-[0_12px_40px_-16px_rgba(15,15,15,0.12)] motion-reduce:hover:translate-y-0">
                    <button
                      type="button"
                      onClick={() => setModalVideo(t.videoId)}
                      className="relative block aspect-[16/10] w-full overflow-hidden border-b border-[var(--color-ink-200)] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-off-black)]/25"
                      aria-label={`Watch ${t.name}'s testimonial`}
                    >
                      <Image
                        src={t.image}
                        alt=""
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-off-black)]/55 via-[var(--color-off-black)]/12 to-transparent"
                        aria-hidden
                      />
                      <span className="gg-eyebrow absolute left-4 top-4 z-[1] !text-[10px] !tracking-[0.18em] !text-white drop-shadow-md">
                        Video testimonial
                      </span>
                      <span
                        className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-black/45 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                        aria-hidden
                      >
                        <PlayIcon className="ml-0.5 h-5 w-5" />
                      </span>
                    </button>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <p className="text-sm tracking-[0.06em] text-[var(--color-trust)]" aria-hidden>
                        ★★★★★
                      </p>
                      <h3 className="gg-display mt-2 text-xl font-light leading-snug">{t.name}</h3>
                      <p className="gg-eyebrow mt-1 !text-xs">
                        {t.agency}
                        {t.location ? ` · ${t.location}` : ''}
                      </p>
                      <blockquote className="gg-body gg-body-sm mt-4 flex-1 border-l border-[var(--color-ink-200)] pl-4">
                        &ldquo;{t.highlight}&rdquo;
                      </blockquote>
                      <span className="gg-eyebrow gg-eyebrow--strong mt-5 inline-flex items-center gap-2 transition-opacity group-hover:opacity-70">
                        Watch full video
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </article>
                </li>
              </SeoReveal>
            ))}
          </ul>
        </div>
      </section>

      {modalVideo ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setModalVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Client testimonial video"
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-lg border border-white/10 bg-black shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
              <p className="gg-eyebrow !text-[10px] !text-white/70">Client testimonial</p>
              <button
                type="button"
                onClick={() => setModalVideo(null)}
                className="flex h-10 min-w-[4.5rem] items-center justify-center rounded-lg border border-white/20 px-3 font-[family-name:var(--font-inter,ui-sans-serif,system-ui,sans-serif)] text-[11px] font-medium uppercase tracking-[0.14em] text-white/80 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                aria-label="Close video"
              >
                Close
              </button>
            </div>
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${modalVideo}?autoplay=1`}
                title="Client testimonial video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
