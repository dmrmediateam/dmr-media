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
  { value: '88%', label: 'lower cost per lead after we rebuilt the account', detail: 'Hitchcock Properties' },
  { value: '41', label: 'leads in 30 days on $1,812 of ad spend', detail: 'Hitchcock Properties · Apr to May 2026' },
  { value: '$11m+', label: 'closed in Q1 2026 with search & Google Ads', detail: 'Eagan Luxury · St. Petersburg' },
  { value: '14 days', label: 'to qualified leads, or we refund you everything' },
]

export default function GoogleAdsShowcase() {
  return (
    <>
      <StatBand stats={STATS} />

      {/* Campaign results */}
      <FeatureSection id="proof">
        <FeatureHeading
          eyebrow="Campaigns built for your price point"
          title="Ads that pay for themselves, in an account you own"
          body="A client account, last 30 days."
        />
        <SeoReveal delay={0.08}>
          <Stage className="mt-10 md:mt-12">
            <div className="mb-5 flex flex-wrap items-center gap-2 sm:mb-6">
              <Chip>Google Ads · last 30 days</Chip>
              <Chip>Hitchcock Properties · Panama City Beach, FL</Chip>
            </div>
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
              <Tile value="$44" label="average cost per lead across campaigns" />
              <Tile value="$8.78" label="per lead on Performance Max" />
            </div>
          </Stage>
        </SeoReveal>
      </FeatureSection>

      {/* Leads in the CRM */}
      <FeatureSection tone="base">
        <FeatureHeading
          eyebrow="Leads in your CRM"
          title="Every lead lands in your CRM, source attached"
          body="Tagged with the campaign that produced it and routed to the right agent."
        />
        <SeoReveal delay={0.08}>
          <Stage className="mt-10 !bg-white md:mt-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
              <div className="min-w-0">
                <Chip className="mb-4">New buyer lead · Source: Google PPC</Chip>
                <Frame pan="min-w-[560px]">
                  <Image
                    src="/images/landing/google-ads/hitchcock-google-ppc-lead.webp"
                    alt="A buyer lead in the client's CRM with the source Google PPC, assigned to the buying agents, followed by a text offering a showing the next day"
                    width={1600}
                    height={882}
                    sizes="(min-width: 1024px) 640px, 560px"
                    className="h-auto w-full rounded-lg"
                  />
                </Frame>
                <p className="mt-4 font-sans text-xs leading-relaxed text-[var(--gg-text-muted)]">
                  A real lead from a client account. Contact details are removed.
                </p>
              </div>
              <div className="grid min-w-0 gap-3 sm:gap-4">
                <Tile value="Google PPC" label="the source on every lead, so spend ties to results" />
                <Tile value="Buyer" label="tagged and assigned to the buying agents automatically" />
                <Tile value="Your CRM" label="not a portal, and never shared with other agents" />
              </div>
            </div>
          </Stage>
        </SeoReveal>
      </FeatureSection>

      {/* Ad copy */}
      <FeatureSection>
        <FeatureHeading
          eyebrow="Ads that read like the local expert"
          title="Community-level ads for the homes you actually sell"
          body="Ads for the communities you sell, verified by Google under your name."
        />
        <SeoReveal delay={0.08}>
          <Stage className="mt-10 md:mt-12">
            <div className="mb-5 flex flex-wrap items-center gap-2 sm:mb-6">
              <Chip>Google Ads Transparency Center</Chip>
              <Chip>Eagan Luxury · St. Petersburg, FL</Chip>
            </div>
            <Frame pan="min-w-[560px]">
              <Image
                src="/images/landing/google-ads/eagan-verified-search-ads.webp"
                alt="Google Ads Transparency Center for eaganluxury.com showing 22 verified search ads for St. Petersburg, Dolphin Cay and Tierra Verde home searches"
                width={1600}
                height={977}
                sizes="(min-width: 1280px) 1100px, 560px"
                className="h-auto w-full rounded-lg"
              />
            </Frame>
            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
              <Tile value="22" label="live ads, verified by Google under the client's name" />
              <Tile value="Dolphin Cay" label="and Tierra Verde get ads of their own, not one city-wide ad" />
            </div>
          </Stage>
        </SeoReveal>
      </FeatureSection>

      {/* Where the ads send people */}
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
    </>
  )
}
