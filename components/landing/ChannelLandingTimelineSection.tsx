'use client'

import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import type { ChannelLandingTimelineSection as TimelineSectionConfig } from '@/lib/landing/channel-landing-types'

const ease = [0.25, 0.1, 0.25, 1] as const

type Props = {
  section: TimelineSectionConfig
}

function SectionRule() {
  return <div className="mt-6 h-px w-full max-w-[4.5rem] bg-[var(--color-off-black)]/20" aria-hidden />
}

export default function ChannelLandingTimelineSection({ section }: Props) {
  const reduceMotion = useReducedMotion()
  const trackRef = useRef<HTMLDivElement>(null)
  const [railInsets, setRailInsets] = useState<{ top: number; bottom: number } | null>(null)

  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return

    const syncRail = () => {
      const markers = track.querySelectorAll<HTMLElement>('.gg-timeline-step__marker')
      if (markers.length === 0) return

      const trackRect = track.getBoundingClientRect()
      const first = markers[0].getBoundingClientRect()
      const last = markers[markers.length - 1].getBoundingClientRect()
      const top = first.top + first.height / 2 - trackRect.top
      const bottom = trackRect.bottom - (last.top + last.height / 2)

      setRailInsets({ top, bottom })
    }

    syncRail()
    const observer = new ResizeObserver(syncRail)
    observer.observe(track)
    window.addEventListener('resize', syncRail)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', syncRail)
    }
  }, [section.weeks.length])

  return (
    <section
      id="first-30-days"
      className="gg-timeline-section scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-20 md:py-28 lg:py-32"
      aria-labelledby="timeline-section-heading"
    >
      <div className="container-max px-4 sm:px-6">
        <SeoReveal className="gg-timeline-section__header max-w-3xl">
          <p className="gg-eyebrow">{section.eyebrow}</p>
          <h2
            id="timeline-section-heading"
            className="gg-display gg-timeline-section__title mt-3 font-light tracking-tight"
          >
            {section.title}
          </h2>
          <SectionRule />
          <p className="gg-timeline-section__intro mt-6 max-w-2xl">{section.intro}</p>
        </SeoReveal>

        <div ref={trackRef} className="gg-timeline-track relative mt-16 md:mt-20">
          <div
            className="gg-timeline-rail"
            aria-hidden
            style={
              railInsets
                ? ({
                    '--gg-rail-top': `${railInsets.top}px`,
                    '--gg-rail-bottom': `${railInsets.bottom}px`,
                  } as CSSProperties)
                : undefined
            }
          >
            <div className="gg-timeline-rail__track" />
            {reduceMotion ? (
              <div className="gg-timeline-rail__fill gg-timeline-rail__fill--static" />
            ) : (
              <motion.div
                className="gg-timeline-rail__fill"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-8% 0px -20% 0px' }}
                transition={{ duration: 1.35, ease, delay: 0.15 }}
                style={{ transformOrigin: 'top' }}
              />
            )}
          </div>

          <ol className="gg-timeline-steps list-none space-y-0 p-0" role="list">
            {section.weeks.map((week, i) => (
              <li key={week.label} className="gg-timeline-step list-none">
                <SeoReveal delay={0.12 + i * 0.14} y={22}>
                  <article className="gg-timeline-step__inner">
                    <div className="gg-timeline-step__marker-wrap" aria-hidden>
                      {reduceMotion ? (
                        <span className="gg-timeline-step__marker" />
                      ) : (
                        <motion.span
                          className="gg-timeline-step__marker"
                          initial={{ scale: 0.6, opacity: 0.4 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true, margin: '-10% 0px' }}
                          transition={{ duration: 0.45, ease, delay: 0.2 + i * 0.18 }}
                        />
                      )}
                    </div>
                    <div className="gg-timeline-step__content">
                      <p className="gg-timeline-step__label">{week.label}</p>
                      <h3 className="gg-display gg-timeline-step__title">{week.title}</h3>
                      <p className="gg-timeline-step__body">{week.body}</p>
                    </div>
                  </article>
                </SeoReveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
