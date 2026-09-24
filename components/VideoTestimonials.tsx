'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import '@/app/landing/google-general/google-general-landing.css'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'

export const videoTestimonials = [
  {
    id: 'bill',
    name: 'William Breaden',
    agency: 'Eagan Luxury',
    location: 'St. Petersburg, FL',
    videoId: 'UtuLcLjSsG0',
    highlight:
      'You were able to turn our website around in a month. The hits on the website are five, six times what they were on our old website.',
    detail:
      "Everything I asked you to do, you come back and put it together in a way that's frankly better than the idea I thought it would come out.",
  },
  {
    id: 'michael',
    name: 'Michael Kurlyak',
    agency: 'MK Real Estate',
    location: '',
    videoId: 'ng_7ysEAlkc',
    highlight: "Andrew's been great to work with. It feels like a true partnership.",
    detail:
      "He's been awesome especially with updates, ideas and planning. Looking forward to continuing to work with him; he's been a great resource for everything I'm looking to do.",
  },
] as const

/** The video's own frame, so the thumbnail matches what plays instead of a stretched headshot. */
const youtubeFrame = (videoId: string) => `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.5v13l10.5-6.5z" />
    </svg>
  )
}

type VideoTestimonialsProps = {
  eyebrow?: string
  title?: string
  className?: string
}

/**
 * Editorial video testimonials: one real video frame beside a large pull quote per client,
 * alternating sides. No stars, badges, or card chrome — the footage and the words carry it.
 */
export default function VideoTestimonials({
  eyebrow = 'Client testimonials',
  title = 'Hear from teams in their own words',
  className = '',
}: VideoTestimonialsProps) {
  const [modalVideo, setModalVideo] = useState<string | null>(null)

  useEffect(() => {
    if (!modalVideo) return
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setModalVideo(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
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
          </SeoReveal>

          <ul className="mt-14 list-none divide-y divide-[var(--color-ink-200)] border-t border-[var(--color-ink-200)] md:mt-16" role="list">
            {videoTestimonials.map((t, i) => {
              const flipped = i % 2 === 1
              return (
                <li key={t.id} className="list-none py-12 md:py-16">
                  <SeoReveal delay={0.05}>
                    <article className="grid items-center gap-8 md:grid-cols-12 md:gap-12 lg:gap-16">
                      <button
                        type="button"
                        onClick={() => setModalVideo(t.videoId)}
                        aria-label={`Watch ${t.name}'s testimonial`}
                        className={`group relative block aspect-video w-full overflow-hidden rounded-lg bg-[var(--color-off-black)] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--surface-base)] md:col-span-7 ${
                          flipped ? 'md:order-2' : ''
                        }`}
                      >
                        <Image
                          src={youtubeFrame(t.videoId)}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                          sizes="(min-width: 768px) 58vw, 100vw"
                        />
                        <span
                          className="pointer-events-none absolute inset-0 bg-[var(--color-off-black)]/15 transition-opacity duration-500 group-hover:opacity-0"
                          aria-hidden
                        />
                        <span
                          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/25 text-white backdrop-blur-sm transition-[background-color,transform] duration-500 group-hover:scale-105 group-hover:bg-white group-hover:text-[var(--color-off-black)] motion-reduce:group-hover:scale-100 md:h-20 md:w-20"
                          aria-hidden
                        >
                          <PlayIcon className="ml-1 h-6 w-6 md:h-7 md:w-7" />
                        </span>
                      </button>

                      <div className={`md:col-span-5 ${flipped ? 'md:order-1' : ''}`}>
                        <blockquote>
                          <p className="font-serif text-2xl font-light leading-[1.3] tracking-tight text-[var(--color-off-black)] md:text-[1.75rem] lg:text-[2rem]">
                            &ldquo;{t.highlight}&rdquo;
                          </p>
                          <p className="gg-body gg-body-sm mt-5 max-w-md">{t.detail}</p>
                        </blockquote>
                        <div className="mt-7 border-t border-[var(--color-ink-200)] pt-5">
                          <h3 className="font-serif text-lg font-light text-[var(--color-off-black)]">{t.name}</h3>
                          <p className="gg-eyebrow mt-1 !text-xs">
                            {t.agency}
                            {t.location ? ` · ${t.location}` : ''}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setModalVideo(t.videoId)}
                          className="gg-eyebrow gg-eyebrow--strong mt-6 inline-flex items-center gap-2 border-b border-[var(--color-off-black)]/40 pb-1 transition-colors hover:border-[var(--color-off-black)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 focus-visible:ring-offset-4"
                        >
                          Watch the full video
                          <span aria-hidden>→</span>
                        </button>
                      </div>
                    </article>
                  </SeoReveal>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {modalVideo ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-off-black)]/95 p-4 sm:p-8"
          onClick={() => setModalVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Client testimonial video"
        >
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex justify-end">
              <button
                type="button"
                onClick={() => setModalVideo(null)}
                className="font-[family-name:var(--font-inter,ui-sans-serif,system-ui,sans-serif)] text-[11px] font-medium uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                aria-label="Close video"
              >
                Close
              </button>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
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
