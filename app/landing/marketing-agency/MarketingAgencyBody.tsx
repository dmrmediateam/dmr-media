'use client'

import Image from 'next/image'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import TopWebsites from '@/components/TopWebsites'
import VideoTestimonials from '@/components/VideoTestimonials'
import GoogleGeneralReviewsScroll from '@/components/landing/GoogleGeneralReviewsScroll'
import {
  Chip,
  FeatureHeading,
  FeatureSection,
  Frame,
  LaptopFrame,
  Stage,
  StatBand,
  Tile,
  type StatBandItem,
} from '@/components/landing/ShowcaseParts'
import { FinalCtaSection, LandingFaq, ProcessSteps } from '@/components/landing/conversion/ConversionSections'
import { AI_ANSWERS, DESIGNRUSH_BADGE } from '@/app/landing/website-development/WebsiteDevBody'
import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'

const STATS: StatBandItem[] = [
  { value: '#1', label: 'Real Estate Marketing Agency', detail: 'SEMrush & Lister' },
  { value: '$11m+', label: 'closed in Q1 2026 with search & Google Ads', detail: 'Eagan Luxury' },
  { value: '3×', label: 'DesignRush Design Awards nominations' },
  { value: '14-Day', label: 'results guarantee*' },
]

const STATS_FOOTNOTE =
  '*Qualified leads in your CRM within 14 days of launch, or we refund your fee and ad spend (up to $2,000). Requires following up on 90% of leads within an hour.'

type Service = {
  eyebrow: string
  title: string
  body: string
  chip: string
  image: { src: string; width: number; height: number; alt: string }
  badge?: boolean
  tiles: readonly { value: string; label: string }[]
}

/** The three channels, each proven by a named client. */
const SERVICES: readonly Service[] = [
  {
    eyebrow: 'Real estate websites',
    title: 'A website that wins the listing appointment',
    body: 'Designed to your brand and brokerage, with IDX search and lead capture on your own domain.',
    chip: 'Alexa Devaney · The Oppenheim Group',
    image: {
      src: '/images/seo/alexa-devaney-hero.jpg',
      width: 1400,
      height: 868,
      alt: 'Alexa Devaney website home page for The Oppenheim Group, designed by DMR Media',
    },
    badge: true,
    tiles: [
      { value: '3×', label: 'DesignRush Design Awards nominations' },
      { value: '600+', label: 'MLSs available through IDX' },
    ],
  },
  {
    eyebrow: 'Google Ads',
    title: 'Ads that bring buyers and sellers to you',
    body: 'Campaigns in your own account, built for your price point, with every lead routed to your CRM.',
    chip: 'Hitchcock Properties · last 30 days',
    image: {
      src: '/images/landing/google-ads/hitchcock-google-ads-30-days.webp',
      width: 2000,
      height: 1061,
      alt: 'Google Ads account for Hitchcock Properties, April 20 to May 19, 2026: 41 conversions at $44.19 each',
    },
    tiles: [
      { value: '41', label: 'leads in 30 days on $1,812 of ad spend' },
      { value: '$44', label: 'average cost per lead' },
    ],
  },
  {
    eyebrow: 'SEO & AI search',
    title: 'Get named first in Google, ChatGPT, and Perplexity',
    body: 'Community pages and authority that keep bringing in buyers and sellers long after launch.',
    chip: 'Eagan Luxury · Dolphin Cay, St. Petersburg',
    image: {
      src: AI_ANSWERS[0].image,
      width: AI_ANSWERS[0].width,
      height: AI_ANSWERS[0].height,
      alt: AI_ANSWERS[0].alt,
    },
    tiles: [
      { value: '3 of 3', label: 'AI tools name our client first' },
      { value: '22', label: 'live ads verified by Google under her name' },
    ],
  },
]

const COMPARISON = {
  vendors: [
    'A web designer, an ads freelancer, and an SEO vendor',
    'Each one blames the others when leads dry up',
    'Three invoices and three logins to chase',
    'Nobody owns what happens after the lead arrives',
  ],
  agency: [
    'One team for your website, Google Ads, and SEO',
    'One plan, judged on leads in your CRM',
    'Your accounts and your data, never held hostage',
    'Our exact follow-up scripts and cadence included',
  ],
}

/** Hero visual: Eagan Luxury's site, the client where all three channels work together. */
export function AgencyHero() {
  return (
    <LaptopFrame
      href="https://www.eaganluxury.com/"
      src="/images/screencapture-eaganluxury-2026-09-04.png"
      alt="Eagan Luxury website home page, built and marketed by DMR Media"
      caption="Eagan Luxury: website, Google Ads, and SEO by DMR Media, $11m+ closed in Q1 2026"
    >
      <span className="absolute -left-1 top-0 z-10 rounded-2xl border border-[var(--color-ink-200)] bg-white px-4 py-2.5 shadow-[0_14px_30px_-14px_rgba(15,15,15,0.4)]">
        <span className="gg-display block text-2xl font-light leading-none !text-[var(--color-off-black)] sm:text-3xl">$11m+</span>
        <span className="gg-body mt-1 block !text-[10px] uppercase !tracking-[0.16em] !text-[var(--gg-text-muted)]">closed · Q1 2026</span>
      </span>
      <span className="absolute -bottom-4 right-0 z-10 flex max-w-[16rem] items-start gap-3 rounded-2xl border border-[var(--color-ink-200)] bg-white p-3 shadow-[0_18px_40px_-16px_rgba(15,15,15,0.45)] sm:-right-3 sm:p-4">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)] text-xs !text-white" aria-hidden>
          ✓
        </span>
        <span>
          <span className="gg-body block !text-sm font-semibold !leading-snug !text-[var(--color-off-black)]">#1 in AI search</span>
          <span className="gg-body block !text-xs !leading-snug !text-[var(--gg-text-muted)]">Google AI, ChatGPT & Perplexity</span>
        </span>
      </span>
    </LaptopFrame>
  )
}

export default function MarketingAgencyBody({ config }: { config: ChannelLandingConfig }) {
  const ctaLabel = config.headerApplyLabel ?? 'Get started'

  return (
    <>
      <StatBand stats={STATS} footnote={STATS_FOOTNOTE} />

      <GoogleGeneralReviewsScroll eyebrow="Reviews" title="Why we have 5/5 stars on Trustpilot & Google" />

      {/* The three channels, each with a named client's proof */}
      <FeatureSection id="services">
        <FeatureHeading
          eyebrow="Real estate marketing services"
          title="Everything that brings you business, from one team"
          body="Websites, Google Ads, and SEO, each proven by a named client."
        />
        <div className="mt-12 space-y-14 md:mt-14 md:space-y-20">
          {SERVICES.map((s, i) => (
            <SeoReveal key={s.eyebrow} delay={0.06}>
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <div className={`min-w-0 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <Frame>
                      <Image
                        src={s.image.src}
                        alt={s.image.alt}
                        width={s.image.width}
                        height={s.image.height}
                        sizes="(min-width: 1024px) 560px, 100vw"
                        className="h-auto w-full rounded-lg"
                      />
                    </Frame>
                    {s.badge ? (
                      <Image
                        src={DESIGNRUSH_BADGE}
                        alt="DesignRush.com Design Awards Nominee"
                        width={351}
                        height={424}
                        className="absolute -left-2 -top-3 h-auto w-14 drop-shadow-md sm:w-16"
                      />
                    ) : null}
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="gg-eyebrow">
                    {String(i + 1).padStart(2, '0')} · {s.eyebrow}
                  </p>
                  <h3 className="gg-display mt-3 text-[1.75rem] font-light leading-[1.12] tracking-tight sm:text-4xl">{s.title}</h3>
                  <p className="gg-body gg-body-lg mt-4 max-w-md">{s.body}</p>
                  <Chip className="mt-5">{s.chip}</Chip>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {s.tiles.map((t) => (
                      <Tile key={t.label} value={t.value} label={t.label} />
                    ))}
                  </div>
                </div>
              </div>
            </SeoReveal>
          ))}
        </div>
      </FeatureSection>

      {/* One client, every channel */}
      <FeatureSection id="proof" tone="base">
        <FeatureHeading
          eyebrow="Proof · Eagan Luxury, St. Petersburg"
          title="One client, every channel, $11m+ closed in a quarter"
          body="Website, Google Ads, and SEO run together by our team. Google Search Console for eaganluxury.com."
        />
        <SeoReveal delay={0.08}>
          <Stage className="mt-10 !bg-white md:mt-12">
            <Frame pan="min-w-[640px]">
              <Image
                src="/images/EaganCaseStudy/GoogleSearchConsole.png"
                alt="Google Search Console performance for eaganluxury.com showing organic search growth"
                width={2238}
                height={830}
                sizes="(min-width: 1280px) 1100px, 640px"
                className="h-auto w-full rounded-lg"
              />
            </Frame>
            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_12px_30px_-12px_rgba(15,15,15,0.45)]">
                  <Image
                    src="/images/landing/website-development/debi-eagan-headshot.webp"
                    alt="Debi Eagan of Eagan Luxury in St. Petersburg, FL"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="gg-display text-xl font-light">Debi Eagan</p>
                  <p className="gg-body !text-xs !text-[var(--gg-text-muted)]">Eagan Luxury · St. Petersburg, FL</p>
                </div>
              </div>
              <div className="grid gap-3 sm:min-w-[26rem] sm:grid-cols-3">
                <Tile value="$11m+" label="closed in Q1 2026" />
                <Tile value="3 of 3" label="AI tools name her first" />
                <Tile value="22" label="verified Google ads" />
              </div>
            </div>
          </Stage>
        </SeoReveal>
      </FeatureSection>

      {/* The villain: a patchwork of vendors */}
      <FeatureSection id="compare">
        <FeatureHeading
          eyebrow="Three vendors vs. one agency"
          title="Stop managing a patchwork of marketing vendors"
          body="When everyone owns a piece, nobody owns the leads."
        />
        <SeoReveal delay={0.08}>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
            <div className="rounded-2xl border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6 md:p-8">
              <p className="gg-eyebrow">Separate vendors</p>
              <ul className="mt-5 list-none space-y-4 p-0">
                {COMPARISON.vendors.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink-300)] text-[11px] leading-none !text-[var(--gg-text-muted)]"
                      aria-hidden
                    >
                      ✕
                    </span>
                    <span className="gg-body !text-[15px] !leading-snug !text-[var(--gg-text-muted)]">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--color-off-black)] bg-white p-6 shadow-[0_24px_60px_-36px_rgba(15,15,15,0.45)] md:p-8">
              <p className="gg-eyebrow gg-eyebrow--strong">DMR Media</p>
              <ul className="mt-5 list-none space-y-4 p-0">
                {COMPARISON.agency.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)] text-[10px] leading-none !text-white"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className="gg-body !text-[15px] !leading-snug !text-[var(--color-off-black)]">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SeoReveal>
      </FeatureSection>

      <VideoTestimonials eyebrow="Client testimonials" title="What our clients are saying" />

      {config.timelineSection ? <ProcessSteps section={config.timelineSection} ctaLabel={ctaLabel} /> : null}

      {/* Client websites: links open each live site in a new tab */}
      <section id="websites" className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] pb-6 md:pb-10">
        <TopWebsites hideIndexLink nofollow />
      </section>

      <LandingFaq items={config.faqItems} />

      {config.finalCta ? <FinalCtaSection cta={config.finalCta} /> : null}
    </>
  )
}
