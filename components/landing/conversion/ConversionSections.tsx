'use client'

import Image from 'next/image'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import { applyFormBtnPrimaryClass } from '@/components/applyFormPrimitives'
import type {
  ChannelLandingFaqItem,
  ChannelLandingFinalCta,
  ChannelLandingInlineCta,
  ChannelLandingPillar,
  ChannelLandingSectionHeading,
  ChannelLandingTimelineSection,
} from '@/lib/landing/channel-landing-types'

/**
 * Conversion sections for the /landing pages (SEO, website development, Google Ads).
 * Every CTA returns the visitor to the hero form, so there is one form and one action on the page.
 */

const DMR_PHONE_DISPLAY = '+1 920-249-5210'
const DMR_PHONE_HREF = 'tel:+19202495210'

export function scrollToHeroForm() {
  const target = document.getElementById('hero-form')
  if (!target) return
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const firstInput = target.querySelector<HTMLInputElement>('input:not([tabindex="-1"]):not([aria-hidden="true"])')
  window.setTimeout(() => firstInput?.focus({ preventScroll: true }), 450)
}

export function FormCta({ label, className = '' }: { label: string; className?: string }) {
  return (
    <button
      type="button"
      onClick={scrollToHeroForm}
      className={`${applyFormBtnPrimaryClass} !min-h-[52px] gap-2 !rounded-full !px-8 sm:!min-w-[15rem] ${className}`}
    >
      {label}
      <span aria-hidden>→</span>
    </button>
  )
}

function PhoneLink({ className = '' }: { className?: string }) {
  return (
    <a
      href={DMR_PHONE_HREF}
      className={`gg-eyebrow gg-eyebrow--strong inline-flex min-h-[44px] items-center gap-2 transition-opacity hover:opacity-70 ${className}`}
    >
      or call {DMR_PHONE_DISPLAY}
    </a>
  )
}

function SectionRule({ align = 'left' }: { align?: 'left' | 'center' }) {
  return (
    <div
      className={`mt-6 h-px w-full max-w-[4.5rem] bg-[var(--color-off-black)]/20 ${align === 'center' ? 'mx-auto' : ''}`}
      aria-hidden
    />
  )
}

function SectionHeader({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow: string
  title: string
  intro?: string
  id: string
}) {
  return (
    <SeoReveal>
      <p className="gg-eyebrow">{eyebrow}</p>
      <h2 id={id} className="gg-display mt-3 max-w-3xl text-[1.9rem] font-light leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <SectionRule />
      {intro ? <p className="gg-body gg-body-lg mt-6 max-w-2xl">{intro}</p> : null}
    </SeoReveal>
  )
}

function CheckDot() {
  return (
    <span
      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)] text-[10px] leading-none !text-white"
      aria-hidden
    >
      ✓
    </span>
  )
}

/** A contained CTA card between proof sections. */
export function InlineCtaBand({ cta }: { cta: ChannelLandingInlineCta }) {
  return (
    <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-12 md:py-16" aria-label={cta.title}>
      <div className="container-max px-4 sm:px-6">
        <SeoReveal>
          <div className="flex flex-col gap-6 rounded-2xl border border-[var(--color-ink-200)] bg-white p-6 shadow-[0_24px_60px_-40px_rgba(15,15,15,0.35)] sm:p-8 md:flex-row md:items-center md:justify-between md:gap-10 md:p-10">
            <div className="max-w-xl">
              <h2 className="gg-display text-2xl font-light leading-snug md:text-[1.9rem]">{cta.title}</h2>
              <p className="gg-body mt-3">{cta.body}</p>
            </div>
            <div className="flex shrink-0 flex-col items-stretch gap-1 sm:items-start md:items-end">
              <FormCta label={cta.ctaLabel} />
              <PhoneLink className="justify-center sm:justify-start md:justify-end" />
            </div>
          </div>
        </SeoReveal>
      </div>
    </section>
  )
}

/** Photo cards for what the program includes: a market photo behind a floating client screenshot. */
export function IncludedCards({
  heading,
  pillars,
}: {
  heading: ChannelLandingSectionHeading & { intro?: string }
  pillars: readonly ChannelLandingPillar[]
}) {
  return (
    <section
      id="included"
      className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-16 md:py-28"
      aria-labelledby="included-heading"
    >
      <div className="container-max px-4 sm:px-6">
        <SectionHeader id="included-heading" eyebrow={heading.eyebrow} title={heading.title} intro={heading.intro} />
        <ol className="mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-5">
          {pillars.map((pillar, i) => (
            <SeoReveal key={pillar.number} delay={(i % 4) * 0.06} className="h-full">
              <li className="group relative isolate flex aspect-[4/5] h-full flex-col justify-end overflow-hidden rounded-2xl bg-[var(--color-off-black)] shadow-[0_24px_60px_-36px_rgba(15,15,15,0.5)]">
                {pillar.photo ? (
                  <Image
                    src={pillar.photo}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="-z-20 object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
                  />
                ) : null}
                <div
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-[rgba(12,12,12,0.92)] via-[rgba(12,12,12,0.35)] to-[rgba(12,12,12,0.15)]"
                  aria-hidden
                />
                {pillar.screen ? (
                  <div className="absolute inset-x-5 top-5 -z-10 overflow-hidden rounded-lg border border-white/30 bg-white p-1 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:-translate-y-1 motion-reduce:transition-none sm:inset-x-6 sm:top-6">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                      <Image
                        src={pillar.screen}
                        alt={pillar.screenAlt ?? ''}
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                ) : null}
                <div className="p-5 sm:p-6">
                  <h3 className="gg-display text-xl font-light leading-snug !text-white md:text-[1.35rem]">{pillar.title}</h3>
                  <p className="gg-body !mt-2 !text-sm !leading-snug !text-white/80">{pillar.short ?? pillar.body}</p>
                </div>
              </li>
            </SeoReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/** Three numbered steps in cards, then the CTA. */
export function ProcessSteps({ section, ctaLabel }: { section: ChannelLandingTimelineSection; ctaLabel: string }) {
  return (
    <section
      id="process"
      className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-16 md:py-28"
      aria-labelledby="process-heading"
    >
      <div className="container-max px-4 sm:px-6">
        <SectionHeader id="process-heading" eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
        <ol className="relative mt-10 grid list-none gap-4 p-0 md:mt-14 md:grid-cols-3 md:gap-5">
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-[3.15rem] hidden h-px bg-[var(--color-off-black)]/15 md:block"
            aria-hidden
          />
          {section.weeks.map((week, i) => (
            <SeoReveal key={week.label} delay={i * 0.08} className="h-full">
              <li className="relative flex h-full flex-col rounded-2xl border border-[var(--color-ink-200)] bg-white p-6 shadow-[0_1px_0_rgba(15,15,15,0.04)] md:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)] font-serif text-sm !text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="gg-eyebrow gg-eyebrow--strong">{week.label}</p>
                </div>
                <h3 className="gg-display mt-5 text-xl font-light leading-snug md:text-[1.4rem]">{week.title}</h3>
                <p className="gg-body gg-body-sm mt-3">{week.body}</p>
              </li>
            </SeoReveal>
          ))}
        </ol>
        <SeoReveal delay={0.1}>
          <div className="mt-10 flex flex-col items-stretch gap-1 sm:flex-row sm:items-center sm:gap-6">
            <FormCta label={ctaLabel} />
            <PhoneLink className="justify-center sm:justify-start" />
          </div>
        </SeoReveal>
      </div>
    </section>
  )
}

export function LandingFaq({ items }: { items: readonly ChannelLandingFaqItem[] }) {
  return (
    <section id="faq" className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-16 md:py-28">
      <div className="container-max grid gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
        <SeoReveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="gg-eyebrow">FAQ</p>
          <h2 className="gg-display mt-3 text-[1.9rem] font-light leading-tight tracking-tight md:text-4xl">
            Questions, answered plainly
          </h2>
          <SectionRule />
          <p className="gg-body mt-6 max-w-sm">
            Still deciding? Call us and ask anything. You talk to the team that does the work.
          </p>
          <a
            href={DMR_PHONE_HREF}
            className="gg-display mt-3 inline-flex min-h-[44px] items-center text-xl font-light underline decoration-[var(--color-off-black)]/25 underline-offset-4 transition-colors hover:decoration-[var(--color-off-black)]"
          >
            {DMR_PHONE_DISPLAY}
          </a>
        </SeoReveal>

        <div className="divide-y divide-[var(--color-ink-200)] border-y border-[var(--color-ink-200)]">
          {items.map((item) => (
            <details key={item.question} className="group">
              <summary className="gg-display flex min-h-[56px] cursor-pointer list-none items-start justify-between gap-4 py-5 text-lg font-light outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/20 [&::-webkit-details-marker]:hidden">
                <span className="text-pretty">{item.question}</span>
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink-200)] font-sans text-base leading-none transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="gg-body gg-body-sm pb-6 pr-10">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Closing section: headline, one CTA, and the reasons it is safe to say yes. */
export function FinalCtaSection({ cta }: { cta: ChannelLandingFinalCta }) {
  return (
    <section
      id="get-started"
      className="scroll-mt-24 bg-[var(--surface-base)] py-20 md:py-32"
      aria-labelledby="final-cta-heading"
    >
      <div className="container-max px-4 text-center sm:px-6">
        <SeoReveal>
          <p className="gg-eyebrow">{cta.eyebrow}</p>
          <h2
            id="final-cta-heading"
            className="gg-display mx-auto mt-4 max-w-3xl text-[2.2rem] font-light leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
          >
            {cta.title}
          </h2>
          <SectionRule align="center" />
          <p className="gg-body gg-body-lg mx-auto mt-6 max-w-xl">{cta.body}</p>
          <div className="mt-9 flex flex-col items-stretch gap-1 sm:items-center">
            <FormCta label={cta.ctaLabel} />
            <PhoneLink className="justify-center" />
          </div>
          <ul className="mx-auto mt-8 flex max-w-2xl list-none flex-col gap-3 p-0 text-left sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-7">
            {cta.reassurance.map((line) => (
              <li key={line} className="flex items-start gap-2.5">
                <CheckDot />
                <span className="gg-body !text-sm !leading-snug !text-[var(--color-off-black)]">{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-[var(--color-ink-200)] pt-8">
            <span className="gg-body inline-flex items-center gap-2 !text-sm !text-[var(--color-off-black)]">
              <span className="tracking-[0.06em] !text-[#c9a227]" aria-hidden>
                ★★★★★
              </span>
              5 stars on Trustpilot &amp; Google
            </span>
            <img src="/images/logo.BwihUn5s.svg" alt="SEMrush Agency Partner" className="h-6 w-auto" loading="lazy" />
            <span className="inline-flex items-center gap-1.5">
              <img src="/images/lister-icon.png" alt="" className="h-6 w-6 rounded-[5px]" loading="lazy" />
              <span className="gg-body !text-[17px] font-semibold tracking-tight !text-[var(--color-off-black)]">Lister</span>
              <span className="sr-only">Top 10 Real Estate Marketing Agencies</span>
            </span>
            <img
              src="/images/ClientWebsiteImages/designrush-design-awards-nominee-carole-tierney.png"
              alt="DesignRush.com Design Awards Nominee"
              className="h-12 w-auto"
              loading="lazy"
            />
          </div>
        </SeoReveal>
      </div>
    </section>
  )
}
