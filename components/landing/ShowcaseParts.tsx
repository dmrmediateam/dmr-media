'use client'

import type { ReactNode } from 'react'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'

/** Light-theme building blocks shared by the /landing showcase sections (SEO, website development). */

export function Chip({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex max-w-full items-center gap-2 rounded-2xl border border-[var(--color-ink-200)] bg-white px-3.5 py-1.5 font-sans text-xs font-medium leading-snug !text-[var(--color-ink-400)] shadow-[0_1px_0_rgba(15,15,15,0.04)] sm:rounded-full ${className}`}
    >
      {children}
    </span>
  )
}

export function Stage({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-4 shadow-[0_30px_80px_-40px_rgba(15,15,15,0.25)] sm:rounded-[1.75rem] sm:p-8 md:p-12 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_80%_0%,rgba(255,255,255,0.9),transparent_65%)]"
        aria-hidden
      />
      <div className="relative">{children}</div>
    </div>
  )
}

/**
 * White frame for screenshots. Pass `pan` (a Tailwind min-width class such as "min-w-[640px]") for
 * text-heavy dashboards: on phones the image keeps a readable width and swipes sideways instead of
 * shrinking to an unreadable thumbnail.
 */
export function Frame({ children, pan }: { children: ReactNode; pan?: string }) {
  if (!pan) {
    return (
      <div className="overflow-hidden rounded-xl border border-[var(--color-ink-200)] bg-white p-2 shadow-[0_24px_60px_-30px_rgba(15,15,15,0.35)] sm:p-3">
        {children}
      </div>
    )
  }
  return (
    <div>
      <div className="overflow-x-auto overscroll-x-contain rounded-xl border border-[var(--color-ink-200)] bg-white p-2 shadow-[0_24px_60px_-30px_rgba(15,15,15,0.35)] [-webkit-overflow-scrolling:touch] sm:overflow-hidden sm:p-3">
        <div className={`${pan} sm:min-w-0`}>{children}</div>
      </div>
      <p className="mt-2 font-sans text-xs text-[var(--gg-text-muted)] sm:hidden" aria-hidden>
        Swipe to see the full screenshot →
      </p>
    </div>
  )
}

export function Tile({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 rounded-xl border border-[var(--color-ink-200)] bg-white px-4 py-3 shadow-[0_1px_0_rgba(15,15,15,0.04)] sm:block sm:p-4">
      <p className="gg-display shrink-0 text-xl font-light sm:text-2xl">{value}</p>
      <p className="text-right font-sans text-xs text-[var(--gg-text-muted)] sm:mt-1 sm:text-left">{label}</p>
    </div>
  )
}

export function FeatureHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <SeoReveal>
      <div className="mx-auto max-w-2xl text-center">
        <p className="gg-eyebrow">{eyebrow}</p>
        <h2 className="gg-display mt-3 text-[1.9rem] font-light leading-tight tracking-tight sm:text-3xl md:text-[2.75rem]">
          {title}
        </h2>
        <p className="gg-body gg-body-lg mx-auto mt-4 max-w-xl sm:mt-5">{body}</p>
      </div>
    </SeoReveal>
  )
}

export type StatBandItem = { value: string; label: string; detail?: string }

export function StatBand({ stats, label = 'Client results' }: { stats: readonly StatBandItem[]; label?: string }) {
  return (
    <section className="border-b border-[var(--color-ink-200)] bg-white py-12 md:py-20" aria-label={label}>
      <div className="container-max px-4 sm:px-6">
        <dl className="grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-4">
          {stats.map((s, i) => (
            <SeoReveal key={s.label} delay={i * 0.05}>
              <div className="text-center lg:text-left">
                <dd className="gg-display text-[2.6rem] font-light leading-none tracking-tight sm:text-5xl md:text-6xl">
                  {s.value}
                </dd>
                <dt className="gg-body mt-3 text-sm leading-snug !text-[var(--color-off-black)] sm:text-[15px]">{s.label}</dt>
                {s.detail ? <p className="gg-eyebrow mt-1 !text-[10px]">{s.detail}</p> : null}
              </div>
            </SeoReveal>
          ))}
        </dl>
      </div>
    </section>
  )
}

/** Feature section wrapper: alternating background, consistent spacing. */
export function FeatureSection({
  id,
  tone = 'white',
  children,
}: {
  id?: string
  tone?: 'white' | 'base'
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-b border-[var(--color-ink-200)] py-16 md:py-28 ${tone === 'white' ? 'bg-white' : 'bg-[var(--surface-base)]'}`}
    >
      <div className="container-max px-4 sm:px-6">{children}</div>
    </section>
  )
}
