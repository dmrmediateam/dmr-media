'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import TopWebsites from '@/components/TopWebsites'
import {
  Chip,
  FeatureHeading,
  FeatureSection,
  Frame,
  Stage,
  StatBand,
  Tile,
  type StatBandItem,
} from '@/components/landing/ShowcaseParts'

const STATS: StatBandItem[] = [
  { value: '19×', label: 'daily organic clicks in 90 days', detail: 'Sonoma County team' },
  { value: '64', label: 'pages cited in AI answers', detail: 'Lake Geneva luxury team' },
  { value: '$11m+', label: 'closed in quarter 1 of 2026 from SEO' },
  { value: '#1 Rated', label: 'Real Estate Marketing Agency on SEMRush & Lister' },
]

const AI_ANSWERS = [
  {
    tool: 'Google AI Overview',
    image: '/images/seo/eagan-google-ai-overview-dolphin-cay.webp',
    width: 2000,
    height: 1210,
    alt: 'Google AI Overview for "best realtor in dolphin cay st petersburg" naming Deborah Eagan of Eagan Luxury as the leading market specialist for Dolphin Cay',
  },
  {
    tool: 'ChatGPT',
    image: '/images/seo/eagan-chatgpt-dolphin-cay.webp',
    width: 1604,
    height: 1054,
    alt: 'ChatGPT answer naming Eagan Luxury and Debi Eagan as the top pick for Dolphin Cay in St. Petersburg, FL',
  },
  {
    tool: 'Perplexity',
    image: '/images/seo/eagan-perplexity-dolphin-cay.webp',
    width: 1562,
    height: 1292,
    alt: 'Perplexity answer naming Deborah Eagan of Eagan Luxury as its first-call recommendation for Dolphin Cay in St. Petersburg',
  },
] as const

export default function SeoShowcase() {
  return (
    <>
      <StatBand stats={STATS} />

      {/* Website examples: the homepage carousel */}
      <section id="websites" className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
        <TopWebsites />
        <div className="pb-14 text-center md:pb-20">
          <Link
            href="/real-estate-agent-website-samples"
            className="gg-eyebrow gg-eyebrow--strong inline-flex min-h-[44px] items-center gap-2 border-b border-[var(--color-off-black)]/40 pb-1 transition-colors hover:border-[var(--color-off-black)]"
          >
            See every website we&rsquo;ve built <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Rankings */}
      <FeatureSection id="proof">
        <FeatureHeading
          eyebrow="Technical & local SEO"
          title="Rank where buyers and sellers actually search"
          body="Win the local searches the portals can’t."
        />
        <SeoReveal delay={0.08}>
          <Stage className="mt-10 md:mt-12">
            <div className="mb-5 flex flex-wrap items-center gap-2 sm:mb-6">
              <Chip>Google Search Console</Chip>
              <Chip>Marquis + Farwell Group · Healdsburg, CA</Chip>
            </div>
            <Frame pan="min-w-[640px]">
              <Image
                src="/images/MarquisFarwellGoogleSearchConsole.png"
                alt="Google Search Console for Marquis + Farwell Group showing daily clicks rising to 38, October to December 2025"
                width={2244}
                height={964}
                sizes="(min-width: 1280px) 1100px, 640px"
                className="h-auto w-full rounded-lg"
              />
            </Frame>
            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4">
              <Tile value="2 → 38" label="daily organic clicks, Oct to Dec 2025" />
              <Tile value="15.1K" label="search impressions in 90 days" />
              <Tile value="1031 buyer" label="qualified inquiry straight from search" />
            </div>
          </Stage>
        </SeoReveal>
      </FeatureSection>

      {/* AEO */}
      <FeatureSection tone="base">
        <FeatureHeading
          eyebrow="AEO · AI search"
          title="Get named #1 when buyers ask AI who to call"
          body="Google AI, ChatGPT, and Perplexity recommend you by name."
        />
        <SeoReveal delay={0.08}>
          <Stage className="mt-10 !bg-white md:mt-12">
            <div className="mb-5 flex flex-wrap items-center gap-2 sm:mb-6">
              <Chip>Search: &ldquo;best realtor in Dolphin Cay St. Petersburg&rdquo;</Chip>
              <Chip>Debi Eagan · Eagan Luxury · St. Petersburg, FL</Chip>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-6">
              {AI_ANSWERS.map((a, i) => (
                <figure key={a.tool} className={`min-w-0 ${i === 0 ? 'lg:col-span-2' : ''}`}>
                  <figcaption className="mb-3 flex items-center justify-between gap-3">
                    <span className="gg-eyebrow gg-eyebrow--strong">{a.tool}</span>
                    <span className="shrink-0 rounded-full bg-[var(--color-off-black)] px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] !text-white">
                      #1 · Debi Eagan
                    </span>
                  </figcaption>
                  <Frame pan="min-w-[560px]">
                    <Image
                      src={a.image}
                      alt={a.alt}
                      width={a.width}
                      height={a.height}
                      sizes={i === 0 ? '(min-width: 1280px) 1100px, 560px' : '(min-width: 1024px) 540px, 560px'}
                      className="h-auto w-full rounded-lg"
                    />
                  </Frame>
                </figure>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
              <Tile value="3 of 3" label="AI assistants name Debi Eagan first for Dolphin Cay" />
              <Tile value="64" label="pages cited in AI answers for our Lake Geneva client (SEMrush)" />
            </div>
          </Stage>
        </SeoReveal>
      </FeatureSection>

      {/* Leads */}
      <FeatureSection>
        <FeatureHeading
          eyebrow="Lead capture"
          title="Traffic that turns into leads in your CRM"
          body="Home search, valuations, and contact forms that route to your CRM."
        />
        <SeoReveal delay={0.08}>
          <Stage className="mt-10 md:mt-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_1fr]">
              <div className="min-w-0">
                <Chip className="mb-4">Listing registration · caroletierney.com</Chip>
                <Frame pan="min-w-[520px]">
                  <Image
                    src="/images/seo/carole-tierney-lead-capture-modal.webp"
                    alt="Carole Tierney website registration popup on a Marco Island listing: View Full Property Details with name, email, phone, and consent fields"
                    width={1164}
                    height={709}
                    sizes="(min-width: 1024px) 640px, 520px"
                    className="h-auto w-full rounded-lg"
                  />
                </Frame>
                <p className="mt-4 font-sans text-xs leading-relaxed text-[var(--gg-text-muted)]">
                  Buyers register to see every photo, save homes, and get alerts on similar listings, with consent
                  captured on the form.
                </p>
              </div>
              <div className="min-w-0">
                <Chip className="mb-4">New inquiry from organic search</Chip>
                <Frame>
                  <Image
                    src="/images/MarquisFarwellLead.png"
                    alt="A website inquiry from a buyer interested in two properties for a 1031 exchange"
                    width={1052}
                    height={670}
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="h-auto w-full rounded-lg"
                  />
                </Frame>
                <p className="mt-4 font-sans text-xs leading-relaxed text-[var(--gg-text-muted)]">
                  A real inquiry on a client site: a 1031-exchange buyer who found the agents through search, with full
                  opt-in.
                </p>
              </div>
            </div>
          </Stage>
        </SeoReveal>
      </FeatureSection>
    </>
  )
}
