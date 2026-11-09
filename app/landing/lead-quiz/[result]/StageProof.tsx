'use client'

import Image from 'next/image'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import AwardBadgeRow from '@/components/AwardBadgeRow'
import VideoTestimonials from '@/components/VideoTestimonials'
import GoogleGeneralReviewsScroll from '@/components/landing/GoogleGeneralReviewsScroll'
import {
  FeatureHeading,
  FeatureSection,
  Frame,
  Stage,
  StatBand,
  Tile,
  type StatBandItem,
} from '@/components/landing/ShowcaseParts'
import { ALEXA_DEVANEY_BADGES } from '@/lib/award-badges'
import type { StageSlug } from '@/lib/landing/lead-quiz'

type Proof = {
  eyebrow: string
  title: string
  body: string
  image: { src: string; width: number; height: number; alt: string; pan?: string }
  badges?: boolean
  tiles: readonly { value: string; label: string }[]
}

/** Website proof for agents building the foundation; lead proof for the paid stages. */
const STATS: Record<StageSlug, StatBandItem[]> = {
  foundation: [
    { value: '#1', label: 'Real Estate Marketing Agency', detail: 'SEMrush & Lister' },
    { value: '3×', label: 'DesignRush Design Awards nominations' },
    { value: '600+', label: 'MLSs available through IDX' },
    { value: '5/5', label: 'stars on Trustpilot & Google' },
  ],
  consistency: [
    { value: '#1', label: 'Real Estate Marketing Agency', detail: 'SEMrush & Lister' },
    { value: '41', label: 'leads in 30 days on $1,812 of ad spend', detail: 'Hitchcock Properties' },
    { value: '$11m+', label: 'closed in Q1 2026 with search & Google Ads', detail: 'Eagan Luxury' },
    { value: '5/5', label: 'stars on Trustpilot & Google' },
  ],
  scaling: [
    { value: '#1', label: 'Real Estate Marketing Agency', detail: 'SEMrush & Lister' },
    { value: '$11m+', label: 'closed in Q1 2026 with search & Google Ads', detail: 'Eagan Luxury' },
    { value: '41', label: 'leads in 30 days on $1,812 of ad spend', detail: 'Hitchcock Properties' },
    { value: '5/5', label: 'stars on Trustpilot & Google' },
  ],
  'brand-building': [
    { value: '#1', label: 'Real Estate Marketing Agency', detail: 'SEMrush & Lister' },
    { value: '$11m+', label: 'closed in Q1 2026 with search & Google Ads', detail: 'Eagan Luxury' },
    { value: '3 of 3', label: 'AI tools name our client first', detail: 'Eagan Luxury' },
    { value: '5/5', label: 'stars on Trustpilot & Google' },
  ],
}

/** One named client who shows what the stage's recommendation looks like done well. */
const PROOF: Record<StageSlug, Proof> = {
  foundation: {
    eyebrow: 'Proof · Alexa Devaney, The Oppenheim Group',
    title: 'A website that makes an agent look established',
    body: 'Designed to her brand and brokerage, with live MLS search and lead capture built in.',
    image: {
      src: '/images/seo/alexa-devaney-hero.jpg',
      width: 1400,
      height: 868,
      alt: 'Alexa Devaney website home page for The Oppenheim Group, designed by DMR Media',
    },
    badges: true,
    tiles: [
      { value: 'Nominee', label: 'DesignRush & Awwwards design awards' },
      { value: 'IDX', label: 'live MLS search on her own domain' },
    ],
  },
  consistency: {
    eyebrow: 'Proof · Hitchcock Properties, Panama City Beach',
    title: '41 leads in 30 days from one Google Ads account',
    body: '$1,812 of ad spend, about $44 per lead, every one in the client’s CRM.',
    image: {
      src: '/images/landing/google-ads/hitchcock-google-ads-30-days.webp',
      width: 2000,
      height: 1061,
      alt: 'Google Ads account for Hitchcock Properties, April 20 to May 19, 2026: 41 conversions at $44.19 each',
      pan: 'min-w-[640px]',
    },
    tiles: [
      { value: '41', label: 'leads in 30 days' },
      { value: '$44', label: 'average cost per lead' },
    ],
  },
  scaling: {
    eyebrow: 'Proof · Eagan Luxury, St. Petersburg',
    title: 'SEO + Google Ads, $11m+ closed in a quarter',
    body: 'Search traffic from Google Search Console for eaganluxury.com, with Google Ads running alongside.',
    image: {
      src: '/images/EaganCaseStudy/GoogleSearchConsole.png',
      width: 2238,
      height: 830,
      alt: 'Google Search Console performance for eaganluxury.com showing organic search growth',
      pan: 'min-w-[640px]',
    },
    tiles: [
      { value: '$11m+', label: 'closed in Q1 2026' },
      { value: '3 of 3', label: 'AI tools name her first' },
    ],
  },
  'brand-building': {
    eyebrow: 'Proof · Eagan Luxury, St. Petersburg',
    title: 'A brand the market, and AI, names first',
    body: 'Ask Google AI for the best realtor in Dolphin Cay. It names our client, Debi Eagan, first.',
    image: {
      src: '/images/seo/eagan-google-ai-overview-dolphin-cay.webp',
      width: 2000,
      height: 1210,
      alt: 'Google AI Overview for "best realtor in dolphin cay st petersburg" naming Deborah Eagan of Eagan Luxury',
    },
    tiles: [
      { value: '$11m+', label: 'closed in Q1 2026' },
      { value: '3 of 3', label: 'AI tools name her first' },
    ],
  },
}

/** Social proof for the bottom of the quiz funnel, matched to the agent's stage. */
export default function StageProof({ slug }: { slug: StageSlug }) {
  const proof = PROOF[slug]
  return (
    <>
      <StatBand stats={STATS[slug]} />

      <FeatureSection id="proof" tone="base">
        <FeatureHeading eyebrow={proof.eyebrow} title={proof.title} body={proof.body} />
        <SeoReveal delay={0.08}>
          <Stage className="mx-auto mt-10 max-w-5xl !bg-white md:mt-12">
            <div className="relative">
              <Frame pan={proof.image.pan}>
                <Image
                  src={proof.image.src}
                  alt={proof.image.alt}
                  width={proof.image.width}
                  height={proof.image.height}
                  sizes="(min-width: 1280px) 1000px, 100vw"
                  className="h-auto w-full rounded-lg"
                />
              </Frame>
              {proof.badges ? (
                <AwardBadgeRow badges={ALEXA_DEVANEY_BADGES} className="absolute -left-2 -top-3" imgClassName="h-14 drop-shadow-md sm:h-16" />
              ) : null}
            </div>
            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
              {proof.tiles.map((t) => (
                <Tile key={t.label} value={t.value} label={t.label} />
              ))}
            </div>
          </Stage>
        </SeoReveal>
      </FeatureSection>

      <GoogleGeneralReviewsScroll eyebrow="Reviews" title="Why we have 5/5 stars on Trustpilot & Google" />

      <VideoTestimonials eyebrow="Client testimonials" title="What our clients are saying" />
    </>
  )
}
