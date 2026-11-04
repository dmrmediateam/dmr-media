'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import TopWebsites from '@/components/TopWebsites'
import AwardBadgeRow from '@/components/AwardBadgeRow'
import { ALEXA_DEVANEY_BADGES, DESIGNRUSH_NOMINEE_BADGE } from '@/lib/award-badges'
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
  type StatBandItem,
} from '@/components/landing/ShowcaseParts'
import { FinalCtaSection, FormCta, LandingFaq } from '@/components/landing/conversion/ConversionSections'
import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'

const OGROUP_LOGO = '/images/ClientLogos/oppenheim-group.png'

const STATS: StatBandItem[] = [
  { value: '3×', label: 'DesignRush Design Awards' },
  { value: '#1', label: 'Real Estate Marketing Agency', detail: 'SEMrush & Lister' },
  { value: '5/5', label: 'stars on Trustpilot & Google' },
  { value: '600+', label: 'MLSs available through IDX' },
]

export const BRAND_BUILDS = [
  {
    name: 'Alexa Devaney',
    href: 'https://www.alexadevaney.com/',
    brokerage: 'The Oppenheim Group',
    market: 'North County San Diego',
    image: '/images/seo/alexa-devaney-hero.jpg',
    badges: ALEXA_DEVANEY_BADGES,
    logo: { src: OGROUP_LOGO, width: 1386, height: 175, alt: 'The Oppenheim Group Real Estate', className: 'h-4 sm:h-5' },
  },
  {
    name: 'Carole Tierney',
    href: 'https://www.caroletierney.com/',
    brokerage: 'Coldwell Banker Realty',
    market: 'Naples, FL',
    image: '/images/seo/carole-tierney-hero.jpg',
    badges: [DESIGNRUSH_NOMINEE_BADGE],
    logo: { src: '/images/ClientLogos/coldwell-banker.png', width: 600, height: 130, alt: 'Coldwell Banker', className: 'h-7 sm:h-8' },
  },
  {
    name: 'Dominick Florio',
    href: 'https://www.theflorioteam.com/',
    brokerage: 'The RE/MAX Collection',
    market: 'Central Florida',
    image: '/images/seo/florio-team-hero.jpg',
    badges: [DESIGNRUSH_NOMINEE_BADGE],
    logo: { src: '/images/ClientLogos/remax-collection.png', width: 276, height: 135, alt: 'The RE/MAX Collection', className: 'h-9 sm:h-10' },
  },
] as const

export const AI_ANSWERS = [
  {
    tool: 'Google AI Overview',
    image: '/images/seo/eagan-google-ai-overview-dolphin-cay.webp',
    width: 2000,
    height: 1210,
    alt: 'Google AI Overview for "best realtor in dolphin cay st petersburg" naming Deborah Eagan of Eagan Luxury',
  },
  {
    tool: 'ChatGPT',
    image: '/images/seo/eagan-chatgpt-dolphin-cay.webp',
    width: 1604,
    height: 1054,
    alt: 'ChatGPT naming Eagan Luxury and Debi Eagan as the top pick for Dolphin Cay in St. Petersburg, FL',
  },
  {
    tool: 'Perplexity',
    image: '/images/seo/eagan-perplexity-dolphin-cay.webp',
    width: 1562,
    height: 1292,
    alt: 'Perplexity naming Deborah Eagan of Eagan Luxury as its first-call recommendation for Dolphin Cay',
  },
] as const

const LEAD_SYSTEM = [
  'Google Ads campaigns aimed at the buyers and sellers in your market',
  'Our exact follow-up scripts and cadence, tested across clients',
  'The 14-Day Lead Guarantee: qualified leads in your CRM within 14 days of your campaigns going live, or we refund your website fee and ad spend',
] as const

const WHY_DMR = [
  {
    title: '600+ MLSs integrated',
    body: 'Live listings, saved searches, and alerts on your own site.',
    photo: '/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg',
  },
  {
    title: 'Lead capture built in',
    body: 'Listing registration and home-valuation forms that send every lead to your CRM.',
    photo: '/images/StockHomes/spacious-living-room-with-staircase-in-residence-2025-10-10-15-17-44-utc (1).jpg',
  },
  {
    title: 'Beautifully designed',
    body: 'Our team checks every site against our high-end standard before you see it.',
    photo: '/images/StockHomes/modern-villa-interior-with-sparkle-floor-2024-10-18-09-40-13-utc.jpg',
  },
] as const

/** Laptop mockup of Alexa Devaney's site with her DesignRush and Awwwards badges and The Oppenheim Group logo. */
export function LaptopHero() {
  return (
    <LaptopFrame
      href="https://www.alexadevaney.com/"
      src="/images/seo/alexa-devaney-hero.jpg"
      alt="Alexa Devaney website home page for The Oppenheim Group, designed by DMR Media"
      caption="Alexa Devaney, The Oppenheim Group, a DesignRush Design Awards and Awwwards nominee built by DMR Media"
    >
      <AwardBadgeRow
        badges={ALEXA_DEVANEY_BADGES}
        className="absolute -left-1 top-0 z-10"
        imgClassName="h-16 drop-shadow-[0_10px_24px_rgba(15,15,15,0.3)] sm:h-[5.4rem]"
      />
      <span className="absolute -right-1 top-1 z-10 flex items-center rounded-full border border-[var(--color-ink-200)] bg-white px-3 py-2 shadow-[0_10px_24px_-12px_rgba(15,15,15,0.35)] sm:px-4">
        <Image src={OGROUP_LOGO} alt="The Oppenheim Group Real Estate" width={1386} height={175} className="h-3.5 w-auto sm:h-4" />
      </span>
    </LaptopFrame>
  )
}

export default function WebsiteDevBody({ config }: { config: ChannelLandingConfig }) {
  return (
    <>
      <StatBand stats={STATS} />

      <GoogleGeneralReviewsScroll eyebrow="Reviews" title="Why we have 5/5 stars on Trustpilot & Google" />

      {/* Designs built to the client's brand */}
      <FeatureSection id="design">
        <FeatureHeading
          eyebrow="Custom design"
          title="Designs built to your brand"
          body="Every site is designed around the agent and the brokerage, then nominated against the best in the industry."
        />
        <SeoReveal delay={0.08}>
          <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {BRAND_BUILDS.map((b) => (
              <article key={b.name} className="min-w-0">
                <div className="relative">
                  <a
                    href={b.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="group block"
                    aria-label={`Visit ${b.name}'s live website (opens in a new tab)`}
                  >
                    <Frame>
                      <Image
                        src={b.image}
                        alt={`${b.name} website home page for ${b.brokerage}, designed by DMR Media`}
                        width={1400}
                        height={868}
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="h-auto w-full rounded-lg transition-transform duration-500 group-hover:scale-[1.01] motion-reduce:transition-none"
                      />
                    </Frame>
                  </a>
                  <AwardBadgeRow
                    badges={b.badges}
                    className="absolute -left-2 -top-3"
                    imgClassName="h-16 drop-shadow-md sm:h-[4.75rem]"
                  />
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="gg-display text-xl font-light">{b.name}</p>
                    <p className="gg-body !text-xs !text-[var(--gg-text-muted)]">{b.market}</p>
                    <a
                      href={b.href}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="gg-eyebrow gg-eyebrow--strong mt-2 inline-flex min-h-[32px] items-center gap-1 border-b border-[var(--color-off-black)]/30 transition-colors hover:border-[var(--color-off-black)]"
                    >
                      View live site <span aria-hidden>↗</span>
                    </a>
                  </div>
                  {b.logo ? (
                    <Image src={b.logo.src} alt={b.logo.alt} width={b.logo.width} height={b.logo.height} className={`w-auto ${b.logo.className}`} />
                  ) : (
                    <p className="gg-eyebrow gg-eyebrow--strong">{b.brokerage}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </SeoReveal>
      </FeatureSection>

      {/* Lead capture */}
      <FeatureSection tone="base">
        <FeatureHeading
          eyebrow="Lead capture"
          title="Capture qualified leads with our premium lead capture"
          body="Buyers register to see the full listing, and the lead goes straight to your CRM."
        />
        <SeoReveal delay={0.08}>
          {/* Phones zoom into the popup so the form is readable; larger screens show the full screenshot. */}
          <div className="relative mx-auto mt-10 aspect-[1376/828] max-w-5xl overflow-hidden rounded-2xl border border-[var(--color-ink-200)] shadow-[0_30px_80px_-40px_rgba(15,15,15,0.45)] sm:aspect-[2000/963] md:mt-12">
            <Image
              src="/images/landing/website-development/elite-realtors-lead-capture.webp"
              alt="Elite Realtors registration popup on a Bakersfield listing: View Full Property Details with name, email, phone, and SMS consent fields"
              width={2000}
              height={963}
              sizes="(min-width: 1024px) 1024px, 150vw"
              className="absolute -left-[22.7%] -top-[8.3%] h-auto w-[145.3%] max-w-none sm:static sm:w-full"
            />
          </div>
        </SeoReveal>
      </FeatureSection>

      {/* AI search */}
      <FeatureSection>
        <FeatureHeading
          eyebrow="AI search · Dolphin Cay, St. Petersburg"
          title="Rank #1 in ChatGPT, Perplexity, and other AIs"
          body="Ask Google AI, ChatGPT, or Perplexity for the best realtor in Dolphin Cay. All three name our client first."
        />
        <SeoReveal delay={0.08}>
          <Stage className="mt-10 md:mt-12">
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [-webkit-overflow-scrolling:touch] sm:-mx-8 sm:px-8 md:-mx-12 md:px-12 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
              {AI_ANSWERS.map((a) => (
                <figure key={a.tool} className="w-[84%] min-w-0 shrink-0 snap-start sm:w-[60%] lg:w-auto">
                  <figcaption className="mb-3 flex items-center justify-between gap-3">
                    <span className="gg-eyebrow gg-eyebrow--strong">{a.tool}</span>
                    <span className="shrink-0 rounded-full bg-[var(--color-off-black)] px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] !text-white">
                      #1 · Debi Eagan
                    </span>
                  </figcaption>
                  <Frame>
                    <Image
                      src={a.image}
                      alt={a.alt}
                      width={a.width}
                      height={a.height}
                      sizes="(min-width: 1024px) 380px, 84vw"
                      className="h-auto w-full rounded-lg"
                    />
                  </Frame>
                </figure>
              ))}
            </div>
            <p className="gg-body mt-2 !text-xs !text-[var(--gg-text-muted)] lg:hidden" aria-hidden>
              Swipe to see all three →
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_12px_30px_-12px_rgba(15,15,15,0.45)] sm:h-28 sm:w-28">
                  <Image
                    src="/images/landing/website-development/debi-eagan-headshot.webp"
                    alt="Debi Eagan of Eagan Luxury in St. Petersburg, FL"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="gg-display text-xl font-light">Debi Eagan</p>
                  <p className="gg-body !text-xs !text-[var(--gg-text-muted)]">Eagan Luxury · St. Petersburg, FL</p>
                </div>
              </div>
              <div className="grid gap-3 sm:min-w-[22rem] sm:grid-cols-2">
                <Tile value="3 of 3" label="AI tools name her first" />
                <Tile value="$11m+" label="closed in quarter 1 of 2026" />
              </div>
            </div>
          </Stage>
        </SeoReveal>
      </FeatureSection>

      <VideoTestimonials eyebrow="Client testimonials" title="What our clients are saying" />

      {/* Every DMR website */}
      <FeatureSection id="included" tone="base">
        <FeatureHeading
          eyebrow="Every DMR website"
          title="Built to capture leads from day one"
          body="Three things every build includes."
        />
        <PhotoCardGrid items={WHY_DMR} />
      </FeatureSection>

      {/* Website examples: links open each client's live site in a new tab */}
      <section id="websites" className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white pb-6 md:pb-10">
        <TopWebsites hideIndexLink nofollow />
      </section>

      {/* Upsell: the website is the offer; the lead system (and its guarantee) is the add-on. */}
      <FeatureSection id="add-leads" tone="base">
        <FeatureHeading
          eyebrow="Optional add-on"
          title="Want the leads too? Add our lead system"
          body="Your website is the foundation. When you're ready, we put buyers and sellers on it."
        />
        <SeoReveal delay={0.08}>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[var(--color-off-black)] bg-white p-6 shadow-[0_24px_60px_-36px_rgba(15,15,15,0.45)] md:mt-12 md:p-8">
            <ul className="list-none space-y-4 p-0">
              {LEAD_SYSTEM.map((line) => (
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
            <div className="mt-7 flex flex-col gap-4 border-t border-[var(--color-ink-200)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="gg-body max-w-md !text-xs !leading-relaxed !text-[var(--gg-text-muted)]">
                Ask about it on your quote. Ad spend is separate. The guarantee covers markets with an average home
                price above $500,000, caps refunded ad spend at $2,000, and requires following up on at least 90% of
                leads within an hour during business hours.{' '}
                <Link href="/stripe/terms-of-service" className="underline underline-offset-2 hover:opacity-70">
                  Full terms
                </Link>
                .
              </p>
              <FormCta label="Get my quote & examples" className="shrink-0" />
            </div>
          </div>
        </SeoReveal>
      </FeatureSection>

      <LandingFaq items={config.faqItems} />

      {config.finalCta ? <FinalCtaSection cta={config.finalCta} /> : null}
    </>
  )
}
