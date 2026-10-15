'use client'

import Image from 'next/image'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import TopWebsites from '@/components/TopWebsites'
import VideoTestimonials from '@/components/VideoTestimonials'
import GoogleGeneralReviewsScroll from '@/components/landing/GoogleGeneralReviewsScroll'
import {
  FeatureHeading,
  FeatureSection,
  Frame,
  LaptopFrame,
  PhotoCardGrid,
  Stage,
  StatBand,
  Tile,
  type PhotoCard,
  type StatBandItem,
} from '@/components/landing/ShowcaseParts'
import { FinalCtaSection, LandingFaq, ProcessSteps } from '@/components/landing/conversion/ConversionSections'
import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'

const STATS: StatBandItem[] = [
  { value: '#1', label: 'Real Estate Marketing Agency', detail: 'SEMrush & Lister' },
  { value: '41', label: 'leads in 30 days on $1,812 of ad spend', detail: 'Hitchcock Properties' },
  { value: '$11m+', label: 'closed in Q1 2026 with search & Google Ads', detail: 'Eagan Luxury' },
  { value: '14-Day', label: 'results guarantee*' },
]

const STATS_FOOTNOTE =
  '*Qualified leads in your CRM within 14 days of launch, or we refund your fee and ad spend (up to $2,000). Requires following up on 90% of leads within an hour.'

const COMPARISON = {
  bought: [
    'Shared with other agents in your market',
    'You pay again every month for the same handful',
    'The data and the relationship stay with the portal',
    'No help turning the lead into a conversation',
  ],
  owned: [
    'Exclusive to you, never sold to another agent',
    'Campaigns run in your own Google Ads account',
    'Every lead lands in your CRM and stays yours',
    'Our exact follow-up scripts and cadence included',
  ],
}

const SYSTEM: PhotoCard[] = [
  {
    title: 'Campaigns built for your price point',
    body: 'Search and Performance Max aimed at the buyers and sellers your market has.',
    photo: '/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg',
  },
  {
    title: 'Our exact follow-up scripts',
    body: 'Copy-and-paste texts and calls, so every lead hears from you fast.',
    photo: '/images/StockHomes/spacious-living-room-with-staircase-in-residence-2025-10-10-15-17-44-utc (1).jpg',
  },
  {
    title: 'Leads in your CRM, not a portal’s',
    body: 'Every lead tagged with its source, and never shared with other agents.',
    photo: '/images/StockHomes/modern-villa-interior-with-sparkle-floor-2024-10-18-09-40-13-utc.jpg',
  },
]

/** Hero visual: a client's live Google Ads account with a new lead arriving. */
export function LeadsHero() {
  return (
    <LaptopFrame
      src="/images/landing/google-ads/hitchcock-google-ads-30-days.webp"
      alt="Google Ads account for Hitchcock Properties showing 41 conversions in the last 30 days"
      caption="Hitchcock Properties: 41 leads in 30 days from a DMR-managed Google Ads account"
    >
      <span className="absolute -left-1 top-0 z-10 rounded-2xl border border-[var(--color-ink-200)] bg-white px-4 py-2.5 shadow-[0_14px_30px_-14px_rgba(15,15,15,0.4)]">
        <span className="gg-display block text-2xl font-light leading-none !text-[var(--color-off-black)] sm:text-3xl">41 leads</span>
        <span className="gg-body mt-1 block !text-[10px] uppercase !tracking-[0.16em] !text-[var(--gg-text-muted)]">last 30 days</span>
      </span>
      <span className="absolute -bottom-4 right-0 z-10 flex max-w-[15rem] items-start gap-3 rounded-2xl border border-[var(--color-ink-200)] bg-white p-3 shadow-[0_18px_40px_-16px_rgba(15,15,15,0.45)] sm:-right-3 sm:p-4">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)] text-xs !text-white" aria-hidden>
          ✓
        </span>
        <span>
          <span className="gg-body block !text-sm font-semibold !leading-snug !text-[var(--color-off-black)]">New buyer lead</span>
          <span className="gg-body block !text-xs !leading-snug !text-[var(--gg-text-muted)]">Source: Google PPC · in your CRM</span>
        </span>
      </span>
    </LaptopFrame>
  )
}

export default function LeadGenBody({ config }: { config: ChannelLandingConfig }) {
  const ctaLabel = config.headerApplyLabel ?? 'Get started'

  return (
    <>
      <StatBand stats={STATS} footnote={STATS_FOOTNOTE} />

      <GoogleGeneralReviewsScroll eyebrow="Reviews" title="Why we have 5/5 stars on Trustpilot & Google" />

      {/* Proof: a real client account */}
      <FeatureSection id="proof">
        <FeatureHeading
          eyebrow="Proof · Hitchcock Properties"
          title="41 leads in 30 days, from one client’s Google Ads account"
          body="Panama City Beach, FL. $1,812 of ad spend, about $44 per lead."
        />
        <SeoReveal delay={0.08}>
          <Stage className="mt-10 md:mt-12">
            <Frame pan="min-w-[680px]">
              <Image
                src="/images/landing/google-ads/hitchcock-google-ads-30-days.webp"
                alt="Google Ads account for Hitchcock Properties, April 20 to May 19, 2026: 8,419 impressions, $1,811.86 cost, 41 conversions at $44.19 each"
                width={2000}
                height={1061}
                sizes="(min-width: 1280px) 1100px, 680px"
                className="h-auto w-full rounded-lg"
              />
            </Frame>
            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4">
              <Tile value="41" label="buyer and vacation-rental leads in 30 days" />
              <Tile value="$44" label="average cost per lead" />
              <Tile value="$8.78" label="per lead on Performance Max" />
            </div>
          </Stage>
        </SeoReveal>
      </FeatureSection>

      {/* Proof: the lead itself */}
      <FeatureSection tone="base">
        <FeatureHeading
          eyebrow="Leads in your CRM"
          title="Every lead lands in your CRM, source attached"
          body="Tagged with the campaign that produced it and routed to the right agent."
        />
        <SeoReveal delay={0.08}>
          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-[var(--color-ink-200)] bg-white shadow-[0_30px_80px_-40px_rgba(15,15,15,0.45)] md:mt-12">
            <Image
              src="/images/landing/google-ads/hitchcock-google-ppc-lead.webp"
              alt="A buyer lead in the client's CRM with the source Google PPC, assigned to the buying agents, followed by a text offering a showing the next day"
              width={1600}
              height={882}
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <p className="gg-body mt-4 text-center !text-xs !text-[var(--gg-text-muted)]">A real lead from a client account. Contact details are removed.</p>
        </SeoReveal>
      </FeatureSection>

      {/* The villain: bought leads */}
      <FeatureSection id="compare">
        <FeatureHeading
          eyebrow="Bought leads vs. your own lead system"
          title="Stop renting leads you have to share"
          body="Portals sell the same inquiry to several agents. Your own system sends it only to you."
        />
        <SeoReveal delay={0.08}>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
            <div className="rounded-2xl border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6 md:p-8">
              <p className="gg-eyebrow">Portal & bought leads</p>
              <ul className="mt-5 list-none space-y-4 p-0">
                {COMPARISON.bought.map((line) => (
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
              <p className="gg-eyebrow gg-eyebrow--strong">Your DMR lead system</p>
              <ul className="mt-5 list-none space-y-4 p-0">
                {COMPARISON.owned.map((line) => (
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

      {/* The system */}
      <FeatureSection id="included">
        <FeatureHeading
          eyebrow="What you get"
          title="Everything it takes to turn clicks into closings"
          body="Built and managed for you from day one."
        />
        <PhotoCardGrid items={SYSTEM} />
      </FeatureSection>

      {/* Where the ads send people: links open each client's live site in a new tab */}
      <section id="websites" className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] pb-6 md:pb-10">
        <TopWebsites hideIndexLink />
      </section>

      <LandingFaq items={config.faqItems} />

      {config.finalCta ? <FinalCtaSection cta={config.finalCta} /> : null}
    </>
  )
}
