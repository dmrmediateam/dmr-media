'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import ClientLogosSlider from '@/components/ClientLogosSlider'
import GoogleGeneralReviewsScroll from '@/components/landing/GoogleGeneralReviewsScroll'
import GoogleGeneralCaseStudies from '@/components/landing/GoogleGeneralCaseStudies'
import GoogleGeneralHeroForm from '@/components/landing/GoogleGeneralHeroForm'
import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'

const DMR_PHONE_DISPLAY = '+1 920-249-5210'
const DMR_PHONE_HREF = 'tel:+19202495210'

function ChannelLandingHeader() {
  const scrollToForm = () => {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="site-nav site-nav--elevated" aria-label="Landing">
      <div className="site-nav__bar">
        <div className="site-nav__bar-inner">
          <div className="site-nav__row">
            <div className="site-nav__row-track">
              <Link href="/" className="site-nav__logo">
                DMR
              </Link>
              <div className="site-nav__actions gap-3 sm:gap-4 md:gap-5">
                <a href={DMR_PHONE_HREF} className="site-nav__phone">
                  {DMR_PHONE_DISPLAY}
                </a>
                <button type="button" className="site-nav__apply" onClick={scrollToForm}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
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

type Props = {
  config: ChannelLandingConfig
}

export default function ChannelLandingPageContent({ config }: Props) {
  const {
    formName,
    heroTitleEmphasis,
    heroIntro,
    marketingCoreHeading,
    marketingCorePillars,
    partnerStats,
    caseStudies,
    faqItems,
  } = config

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

  return (
    <div className="google-general-landing min-h-screen bg-[var(--surface-base)] text-[var(--color-off-black)]">
      <ChannelLandingHeader />

      <section
        id="top"
        className="scroll-mt-6 border-b border-[var(--color-ink-200)]"
        aria-labelledby="channel-landing-hero-title"
      >
        <div className="container-max px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:pb-24">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch lg:gap-16 xl:gap-20">
            <div className="gg-hero-copy max-w-xl lg:max-w-none lg:flex lg:flex-col lg:justify-center lg:py-1">
              <p className="gg-eyebrow gg-eyebrow--strong gg-hero-badge inline-flex max-w-full items-center gap-x-2">
                <span className="tracking-[0.05em] text-[var(--color-off-black)]" aria-hidden>
                  ★★★★★
                </span>
                <span>5-stars on Trustpilot &amp; Google</span>
              </p>

              <h1
                id="channel-landing-hero-title"
                className="gg-display gg-hero-title font-light tracking-tight"
              >
                The Last Real Estate Marketing <em className="italic">{heroTitleEmphasis}</em> You&apos;ll Ever Need.
              </h1>

              <div className="gg-hero-rule">
                <SectionRule />
              </div>

              <p className="gg-body gg-hero-intro">{heroIntro}</p>

              <div
                className="gg-hero-partners border-t border-[var(--color-ink-200)]"
                aria-labelledby="partner-results-heading"
              >
                <p className="gg-eyebrow">Our Partner&apos;s have</p>
                <h2 id="partner-results-heading" className="sr-only">
                  Partner results
                </h2>
                <ul className="gg-hero-stats list-none p-0">
                  {partnerStats.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className="gg-hero-stat-bullet shrink-0 rounded-full bg-[var(--color-off-black)]"
                        aria-hidden
                      />
                      <p className="gg-hero-stat">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <GoogleGeneralHeroForm formName={formName} />
          </div>
        </div>
      </section>

      <section id="client-logos" className="scroll-mt-24" aria-label="Client logos">
        <ClientLogosSlider />
      </section>

      <section
        id="marketing-core"
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-20 md:py-28"
        aria-labelledby="marketing-core-heading"
      >
        <div className="container-max px-4 sm:px-6">
          <SeoReveal>
            <h2
              id="marketing-core-heading"
              className="gg-display max-w-2xl text-3xl font-light tracking-tight md:text-4xl lg:text-[2.75rem]"
            >
              {marketingCoreHeading}
            </h2>
            <SectionRule />
          </SeoReveal>

          <ol className="mt-14 space-y-0">
            {marketingCorePillars.map((pillar, i) => (
              <SeoReveal key={pillar.number} delay={i * 0.07}>
                <li className="list-none border-t border-[var(--color-ink-200)] py-10 first:border-t-0 first:pt-0 md:py-12">
                  <article className="grid gap-6 md:grid-cols-[4.5rem_minmax(0,1fr)] md:gap-10 lg:gap-14">
                    <p
                      className="font-serif text-4xl font-light tabular-nums text-[var(--color-ink-200)] md:text-5xl"
                      aria-hidden
                    >
                      {pillar.number}
                    </p>
                    <div>
                      <h3 className="gg-display text-2xl font-light md:text-[1.75rem]">{pillar.title}</h3>
                      <p className="gg-body gg-body-lg mt-4 max-w-2xl">{pillar.body}</p>
                    </div>
                  </article>
                </li>
              </SeoReveal>
            ))}
          </ol>
        </div>
      </section>

      <GoogleGeneralReviewsScroll />

      <GoogleGeneralCaseStudies studies={[...caseStudies]} />

      <section
        id="faq"
        className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-20 md:py-28"
      >
        <div className="container-max max-w-3xl px-4 sm:px-6">
          <SeoReveal>
            <p className="gg-eyebrow">FAQ</p>
            <h2 className="gg-display mt-3 text-3xl font-light tracking-tight md:text-4xl">
              Questions, answered plainly
            </h2>
            <SectionRule />
          </SeoReveal>

          <div className="mt-12 divide-y divide-[var(--color-ink-200)]">
            {faqItems.map((item) => (
              <details key={item.question} className="group py-1">
                <summary className="gg-display flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-lg font-light outline-none marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="text-pretty">{item.question}</span>
                  <span
                    className="gg-eyebrow mt-1.5 shrink-0 !text-base !tracking-normal transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="gg-body gg-body-sm pb-6">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white py-10">
        <div className="container-max flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <Link href="/" className="font-serif text-sm tracking-[0.2em] text-[var(--color-off-black)]">
            DMR MEDIA
          </Link>
          <p className="gg-eyebrow !text-xs">Distinguished Marketing for Real Estate</p>
        </div>
      </footer>
    </div>
  )
}
