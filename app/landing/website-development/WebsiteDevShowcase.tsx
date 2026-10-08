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
  { value: '2', label: 'DesignRush Design Awards nominations in 2026', detail: 'September & October' },
  { value: '#1', label: 'named by Google AI, ChatGPT & Perplexity', detail: 'Eagan Luxury · Dolphin Cay' },
  { value: '$11m+', label: 'closed in the first quarter after launch', detail: 'Eagan Luxury · Q1 2026' },
  { value: '14 days', label: 'to qualified leads, or we refund you everything' },
]

const NOMINEES = [
  {
    name: 'Carole Tierney',
    market: 'Coldwell Banker Realty · Naples, FL',
    when: 'DesignRush nominee · September 2026',
    image: '/images/seo/carole-tierney-hero.jpg',
    href: 'https://www.caroletierney.com/',
  },
  {
    name: 'Alexa Devaney',
    market: 'The Oppenheim Group · North County San Diego',
    when: 'DesignRush nominee · October 2026',
    image: '/images/seo/alexa-devaney-hero.jpg',
    href: 'https://www.alexadevaney.com/',
  },
] as const

export default function WebsiteDevShowcase() {
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

      {/* Design */}
      <FeatureSection id="design">
        <FeatureHeading
          eyebrow="Award-nominated design"
          title="A website that wins the listing before the appointment"
          body="Sellers compare agents online before they call. Two of our 2026 builds were nominated for DesignRush Design Awards."
        />
        <SeoReveal delay={0.08}>
          <Stage className="mt-10 md:mt-12">
            <div className="grid gap-8 md:grid-cols-2 md:gap-6">
              {NOMINEES.map((n) => (
                <a key={n.name} href={n.href} target="_blank" rel="noopener noreferrer" className="group block min-w-0">
                  <div className="relative">
                    <Frame>
                      <Image
                        src={n.image}
                        alt={`${n.name} website home page designed by DMR Media`}
                        width={1400}
                        height={868}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="h-auto w-full rounded-lg transition-transform duration-500 group-hover:scale-[1.01] motion-reduce:transition-none"
                      />
                    </Frame>
                    <Image
                      src="/images/ClientWebsiteImages/designrush-design-awards-nominee-carole-tierney.png"
                      alt="DesignRush.com Design Awards Nominee"
                      width={351}
                      height={424}
                      className="absolute -left-2 -top-3 h-auto w-14 drop-shadow-md sm:w-16"
                    />
                  </div>
                  <p className="gg-display mt-4 text-xl font-light">{n.name}</p>
                  <p className="font-sans text-xs text-[var(--gg-text-muted)]">{n.market}</p>
                  <p className="gg-eyebrow mt-1 !text-[10px]">{n.when}</p>
                </a>
              ))}
            </div>
          </Stage>
        </SeoReveal>
      </FeatureSection>

      {/* IDX + lead capture */}
      <FeatureSection tone="base">
        <FeatureHeading
          eyebrow="IDX home search & lead capture"
          title="Every listing on your site is a reason to register"
          body="Your site connects to the MLS through IDX. Buyers who want every photo, saved searches, or alerts register with you, and the lead routes straight to your CRM."
        />
        <SeoReveal delay={0.08}>
          <Stage className="mt-10 !bg-white md:mt-12">
            <div className="mb-5 flex flex-wrap items-center gap-2 sm:mb-6">
              <Chip>Listing registration · caroletierney.com</Chip>
              <Chip>Connected to the MLS via IDX</Chip>
            </div>
            <Frame pan="min-w-[520px]">
              <Image
                src="/images/seo/carole-tierney-lead-capture-modal.webp"
                alt="Carole Tierney website registration popup on a Marco Island listing: View Full Property Details with name, email, phone, and consent fields"
                width={1164}
                height={709}
                sizes="(min-width: 1280px) 1100px, 520px"
                className="h-auto w-full rounded-lg"
              />
            </Frame>
            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4">
              <Tile value="Every listing" label="live from your MLS, searchable by area" />
              <Tile value="1 tap" label="to register for photos, saves, and alerts" />
              <Tile value="Your CRM" label="where every registration lands" />
            </div>
          </Stage>
        </SeoReveal>
      </FeatureSection>

      {/* Found on Google & AI */}
      <FeatureSection>
        <FeatureHeading
          eyebrow="Built to be found"
          title="Found on Google, and named first by AI"
          body="Every site launches with SEO foundations. Ask Google AI, ChatGPT, or Perplexity for the best realtor in Dolphin Cay, and they name our client first."
        />
        <SeoReveal delay={0.08}>
          <Stage className="mt-10 md:mt-12">
            <div className="mb-5 flex flex-wrap items-center gap-2 sm:mb-6">
              <Chip>Search: &ldquo;best realtor in Dolphin Cay St. Petersburg&rdquo;</Chip>
              <Chip>#1 · Debi Eagan · Eagan Luxury</Chip>
            </div>
            <Frame pan="min-w-[560px]">
              <Image
                src="/images/seo/eagan-google-ai-overview-dolphin-cay.webp"
                alt='Google AI Overview for "best realtor in dolphin cay st petersburg" naming Deborah Eagan of Eagan Luxury as the leading market specialist for Dolphin Cay'
                width={2000}
                height={1210}
                sizes="(min-width: 1280px) 1100px, 560px"
                className="h-auto w-full rounded-lg"
              />
            </Frame>
            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
              <Tile value="3 of 3" label="Google AI, ChatGPT & Perplexity name her first" />
              <Tile value="$11m+" label="closed by Eagan Luxury in the quarter after launch" />
            </div>
          </Stage>
        </SeoReveal>
      </FeatureSection>

    </>
  )
}
