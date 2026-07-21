'use client'

import Image from 'next/image'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'

type ShowcaseSample = {
  id: string
  subheading: string
  name: string
  description: string
  image: string
  imageRight: boolean
  awardBadge?: {
    src: string
    alt: string
  }
}

const AGENT_WEBSITES: ShowcaseSample[] = [
  {
    id: 'legendary-real-estate',
    subheading: 'Wisconsin Realtor of the Year 2025',
    name: 'Legendary Real Estate Services',
    description:
      'A boutique Lake Geneva team that positions itself as the Ritz-Carlton of real estate. Their site reads the same way — editorial, unhurried, and unmistakably premium. Sellers arrive at the listing appointment already convinced.',
    image: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png',
    imageRight: true,
  },
  {
    id: 'eagan-luxury',
    subheading: '$252M in Sales · St. Petersburg to the Gulf Beaches',
    name: 'Eagan Luxury',
    description:
      'Gallery-grade presentation for the coast’s most luxurious waterfront residences. Curated enclave collections and bespoke property marketing that matches the caliber of a $5M shoreline listing.',
    image: '/images/screencapture-eaganluxury-2025-12-17-21_25_49.png',
    imageRight: false,
  },
  {
    id: 'florio-team',
    subheading: 'Ranked #35 of 20,000+ Central Florida Realtors',
    name: 'The Florio Team | RE/MAX Town & Country',
    description:
      'An award-winning team doing 200+ sales a year needed a site that converts at that pace. A DesignRush Design Awards nominee, built around proof, process, and a clear path to contact.',
    image: '/images/ClientWebsiteImages/screencapture-florio-team-vercel-app-2026-05-16-15_01_22.png',
    imageRight: true,
    awardBadge: {
      src: '/images/ClientWebsiteImages/designrush-design-awards-nominee-florio-team.png',
      alt: 'DesignRush.com Design Awards Nominee',
    },
  },
  {
    id: 'valoria-homes',
    subheading: 'Custom Home Builder & Realtors',
    name: 'Valoria Homes',
    description:
      'A builder-realtor brand that needed buyers to trust a six-figure decision online. Clean architecture-forward design that makes the custom build process feel effortless.',
    image: '/images/ClientWebsites/screencapture-valoriahomes-2026-03-04-03_34_12.png',
    imageRight: false,
  },
]

const PROPERTY_WEBSITES: ShowcaseSample[] = [
  {
    id: 'ocean-breeze',
    subheading: '$6.5M Waterfront Estate · Turks & Caicos',
    name: 'Ocean Breeze',
    description:
      'A dedicated single-property site for a newly built Chalk Sound estate — private dock, rooftop infinity pool, uninterrupted turquoise views. When the listing is one of one, its marketing should be too.',
    image: '/images/ClientWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-29-19_49_50.png',
    imageRight: false,
  },
  {
    id: 'obsidian-denver',
    subheading: '$1.05M Modern Home · Sloan’s Lake, Denver',
    name: 'Obsidian Denver',
    description:
      'A single-listing site that puts the architecture front and center — three levels of considered design with rooftop city views. The kind of presentation that wins the next listing from the current one.',
    image: '/images/ClientWebsiteImages/screencapture-obsidiandenver-3227-w-20th-ave-denver-co-80211-2026-03-29-19_50_09.png',
    imageRight: true,
  },
]

function SectionRule() {
  return <div className="mt-6 h-px w-full max-w-[4.5rem] bg-[var(--color-off-black)]/20" aria-hidden />
}

function scrollToForm() {
  document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function ShowcaseRow({ sample, index }: { sample: ShowcaseSample; index: number }) {
  return (
    <SeoReveal delay={Math.min(index, 2) * 0.05}>
      <article className="grid items-center gap-8 border-t border-[var(--color-ink-200)] py-12 first:border-t-0 first:pt-0 md:py-16 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <div className={`flex flex-col justify-center ${sample.imageRight ? 'lg:order-1' : 'lg:order-2'}`}>
          <p className="gg-eyebrow">{sample.subheading}</p>
          <h3 className="gg-display mt-3 text-2xl font-light tracking-tight md:text-[1.75rem]">
            {sample.name}
          </h3>
          <p className="gg-body gg-body-lg mt-4 max-w-xl">{sample.description}</p>
          <button
            type="button"
            onClick={scrollToForm}
            className="gg-eyebrow gg-eyebrow--strong mt-7 w-fit border-b border-[var(--color-off-black)] pb-1 text-left transition-opacity hover:opacity-60"
          >
            Get a site like this →
          </button>
        </div>
        <div className={`relative ${sample.imageRight ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative min-h-[300px] w-full overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_12px_40px_-16px_rgba(15,15,15,0.12)] sm:min-h-[380px] lg:min-h-[440px]">
            <Image
              src={sample.image}
              alt={`${sample.name} — real estate website designed by DMR Media`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {sample.awardBadge ? (
            <div className="pointer-events-none absolute -left-4 -top-4 z-10 sm:-left-6 sm:-top-6">
              <Image
                src={sample.awardBadge.src}
                alt={sample.awardBadge.alt}
                width={351}
                height={424}
                className="h-24 w-auto drop-shadow-[0_12px_32px_rgba(15,15,15,0.28)] sm:h-28 lg:h-32"
              />
            </div>
          ) : null}
        </div>
      </article>
    </SeoReveal>
  )
}

/** Design portfolio for /landing/website-development, in the channel-landing design language. */
export default function WebsiteShowcaseSection() {
  return (
    <section
      id="showcase"
      className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-20 md:py-28"
      aria-labelledby="showcase-heading"
    >
      <div className="container-max px-4 sm:px-6">
        <SeoReveal>
          <p className="gg-eyebrow">The work</p>
          <h2
            id="showcase-heading"
            className="gg-display mt-3 max-w-2xl text-3xl font-light tracking-tight md:text-4xl lg:text-[2.75rem]"
          >
            Websites built for the price point you sell at.
          </h2>
          <SectionRule />
        </SeoReveal>

        <div className="mt-14">
          <SeoReveal>
            <p className="gg-eyebrow gg-eyebrow--strong">Agent &amp; team websites</p>
          </SeoReveal>
          <div className="mt-8">
            {AGENT_WEBSITES.map((sample, i) => (
              <ShowcaseRow key={sample.id} sample={sample} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SeoReveal>
            <p className="gg-eyebrow gg-eyebrow--strong">Single-property websites</p>
            <p className="gg-body mt-3 max-w-2xl">
              For signature listings, we build dedicated property sites that give a $1M–$6.5M home its own
              address on the internet — and give you a listing presentation no competing agent can match.
            </p>
          </SeoReveal>
          <div className="mt-8">
            {PROPERTY_WEBSITES.map((sample, i) => (
              <ShowcaseRow key={sample.id} sample={sample} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
