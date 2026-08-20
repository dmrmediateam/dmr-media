'use client'

import Image from 'next/image'
import WebinarRegistrationForm from '@/components/landing/WebinarRegistrationForm'

/**
 * Hero for /landing/paid-ads-webinar — same design language as the
 * /google-ads-management hero (centered stack over a framed dashboard with
 * floating stat chips), with the registration form alongside.
 */
export default function WebinarLuxuryHero() {
  return (
    <section
      id="top"
      className="scroll-mt-6 overflow-hidden border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] pb-16 pt-24 sm:pt-28 lg:pb-20"
      aria-labelledby="webinar-hero-title"
    >
      <div className="container-max px-4 sm:px-6">
        {/* Centered header stack */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-[var(--color-ink-200)] bg-white px-5 py-2.5 font-serif text-[10px] uppercase tracking-[0.24em] text-[var(--color-ink-400)] sm:text-[11px]">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-trust)]" aria-hidden />
            Live webinar · September 16th · 12pm ET / 9am PT
          </p>

          <h1
            id="webinar-hero-title"
            className="mt-7 font-serif text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.06] tracking-tight text-[var(--color-off-black)]"
          >
            Why Your Real Estate Ads <em className="italic">Don&apos;t Work</em>.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl font-serif text-base leading-relaxed text-[var(--color-ink-300)] sm:text-lg">
            Every month you run ads the way you&apos;ve been running them, Google gets richer and your pipeline
            doesn&apos;t. In one live session, we hand you the paid advertising system our clients used to cut lead
            costs <strong className="font-medium text-[var(--color-off-black)]">88% — from $86.36 to $10.46 a lead</strong>{' '}
            — and build an online book of business you own, not rent.
          </p>

          <p className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)]">
            <span className="tracking-[0.06em] text-[var(--color-off-black)]" aria-hidden>
              ★★★★★
            </span>
            Rated 5.0 by 24+ luxury real estate teams on Trustpilot &amp; Google
          </p>
        </div>

        {/* Dashboard + form */}
        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-10 sm:mt-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14">
          {/* Framed Google Ads dashboard with halo + stat chips */}
          <div className="relative order-2 lg:order-1">
            <div
              className="pointer-events-none absolute -inset-x-16 -top-16 bottom-0 bg-[radial-gradient(ellipse_at_top,rgba(15,15,15,0.10),transparent_65%)]"
              aria-hidden
            />
            <figure className="relative overflow-hidden rounded-xl border border-[var(--color-ink-200)] bg-white p-1.5 shadow-[0_24px_64px_-24px_rgba(15,15,15,0.3)] sm:p-2">
              <Image
                src="/images/case-studies/hitchcock-properties/google-ads-dashboard.png"
                alt="Live Google Ads dashboard from a DMR-managed real estate account — the system taught in this webinar"
                width={2538}
                height={1346}
                priority
                className="w-full rounded-lg"
                sizes="(max-width: 1024px) 100vw, 640px"
              />
              <figcaption className="sr-only">
                A real client Google Ads account running the system taught in this webinar
              </figcaption>
            </figure>
            <p
              className="absolute -left-2 -top-4 hidden rounded-lg border border-[var(--color-ink-200)] bg-white/95 px-4 py-3 font-serif shadow-[0_12px_32px_-12px_rgba(15,15,15,0.25)] backdrop-blur-sm md:block lg:-left-6"
              aria-hidden
            >
              <span className="block text-2xl font-light text-[var(--color-off-black)]">$86 → $10</span>
              <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)]">
                Cost per lead · Rebuilt
              </span>
            </p>
            <p
              className="absolute -bottom-4 -right-2 hidden rounded-lg border border-[var(--color-ink-200)] bg-white/95 px-4 py-3 font-serif shadow-[0_12px_32px_-12px_rgba(15,15,15,0.25)] backdrop-blur-sm md:block lg:-right-6"
              aria-hidden
            >
              <span className="block text-2xl font-light text-[var(--color-off-black)]">3×</span>
              <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)]">
                Pipeline in 90 days
              </span>
            </p>
          </div>

          {/* Registration form */}
          <div className="order-1 lg:order-2">
            <WebinarRegistrationForm />
            <p className="mt-4 text-center font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">
              Free to attend · Seats limited · No replay for the offer
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
