import Image from 'next/image';
import type { Metadata } from 'next';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import SEOWrapper from '@/components/SEOWrapper';
import { metadataFromRegistry } from '@/lib/content-registry';
import { buildRealEstatePortfolioSamplesGraph } from '@/lib/real-estate-portfolio-schema';

const BASE_URL = 'https://www.dmrmedia.org';

type WebsiteSample = {
  id: string
  subheading: string
  name: string
  description: string
  url: string
  image: string
  imageRight: boolean
  awardBadge?: {
    src: string
    alt: string
    href?: string
  }
}

export const metadata: Metadata = {
  ...metadataFromRegistry('/real-estate-agent-website-samples'),
  keywords: [
    'real estate agent website examples',
    'real estate website examples',
    'real estate website design',
    'luxury real estate websites',
    'agent websites',
  ],
};

const WEBSITE_SAMPLES: WebsiteSample[] = [
  {
    id: 'legendary-real-estate',
    subheading: 'Wisconsin Realtor of Year 2025',
    name: 'Legendary Real Estate Services',
    description:
      'Chris and Jade lead a boutique Lake Geneva team that strives to be the Ritz-Carlton of real estate—fewer hands, higher standards, fiercely committed. They serve the Geneva Lakes area with upscale service, clear communication, and flawless execution, guiding clients through Lake Geneva, Fontana, Salem, Burlington, Elkhorn, Delavan, and surrounding communities.',
    url: 'https://legendaryrealestateservices.com/',
    image: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png',
    imageRight: true,
  },
  {
    id: 'eagan-luxury',
    subheading: 'Top 5 Individual Agent in Northern Florida Region for KW',
    name: 'Eagan Luxury',
    description:
      'Deborah Eagan and William Breaden represent the coast\'s most luxurious residences from St. Petersburg to the Gulf Beaches. With $252M in sales since 2013, 38 curated enclaves, and 13 years in the county, their waterfront collective delivers gallery-grade marketing and bespoke negotiations for every shoreline property.',
    url: 'https://www.eaganluxury.com/',
    image: '/images/screencapture-eaganluxury-2025-12-17-21_25_49.png',
    imageRight: false,
  },
  {
    id: 'carole-tierney',
    subheading: 'Naples Waterfront & Golf Community Luxury',
    name: 'Carole Tierney | Coldwell Banker Realty',
    description:
      'Carole Tierney is a Luxury Property Specialist (CLHMS, CNHS) with Coldwell Banker Realty in Naples, Florida, marketing waterfront and golf-community homes for the buyer who expects exceptional. Her career began in 1984 in project sales and development, rising to Director of Resort Sales over a portfolio of 160 resorts — four decades of luxury experience behind every listing. The site was nominated for a DesignRush Design Award in September 2026.',
    url: 'https://www.caroletierney.com/',
    image: '/images/ClientWebsiteImages/screencapture-caroletierney-2026-09-04.png',
    imageRight: true,
    awardBadge: {
      src: '/images/ClientWebsiteImages/designrush-design-awards-nominee-carole-tierney.png',
      alt: 'DesignRush.com Design Awards Nominee',
    },
  },
  {
    id: 'valoria-homes',
    subheading: 'New Age Home Builder & Realtors',
    name: 'Valoria Homes',
    description:
      'Valoria builds custom modular homes for Midwestern families who value durability, efficiency, and craftsmanship. The trusted way to build—quality craftsmanship, structural strength, and lasting value. Jade\'s mission: make the process easy, connect families with trusted builders, and deliver dream homes without the stress.',
    url: 'https://www.valoriahomes.com/',
    image: '/images/ClientWebsites/screencapture-valoriahomes-2026-03-04-03_34_12.png',
    imageRight: false,
  },
];

const PROPERTY_WEBSITES = [
  {
    id: 'ocean-breeze',
    subheading: 'Luxury Waterfront Villa · Turks & Caicos',
    name: 'Ocean Breeze',
    description:
      'A $6.5M newly built waterfront estate in Chalk Sound, Turks & Caicos. 6,000 sq ft of cinematic indoor-outdoor living — private dock, rooftop infinity pool, and uninterrupted turquoise views from every room. A single-property site built to match the caliber of the listing.',
    url: 'https://ocean-breeze-one.vercel.app/',
    image: '/images/ClientWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-29-19_49_50.png',
    imageRight: false,
  },
  {
    id: 'obsidian-denver',
    subheading: 'Modern Urban Home · Sloan\'s Lake, Denver CO',
    name: 'Obsidian Denver',
    description:
      '3227 W 20th Ave — a $1.05M modern half-duplex in Denver\'s Sloan\'s Lake neighborhood. Three levels of considered design with rooftop city views, chef\'s kitchen, and no HOA. A dedicated property site that puts the architecture front and center for serious buyers.',
    url: 'https://obsidian-denver.vercel.app/3227-w-20th-ave-denver-co-80211',
    image: '/images/ClientWebsiteImages/screencapture-obsidiandenver-3227-w-20th-ave-denver-co-80211-2026-03-29-19_50_09.png',
    imageRight: true,
  },
];

const PORTFOLIO_JSON_LD = buildRealEstatePortfolioSamplesGraph(
  BASE_URL,
  WEBSITE_SAMPLES,
  PROPERTY_WEBSITES,
);

export default function RealEstateAgentWebsiteSamplesPage() {
  return (
    <SEOWrapper
      slug="/real-estate-agent-website-samples"
      includePageJsonLd={false}
      includeBreadcrumbJsonLd={false}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PORTFOLIO_JSON_LD) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero with background video */}
        <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              src="/videos/aerial-view-of-luxury-california-home-2026-01-21-12-58-30-utc.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 z-[1]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(15,15,15,0.5) 0%, rgba(15,15,15,0.3) 40%, rgba(250,250,249,0.2) 70%, rgba(250,250,249,1) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 w-full pt-24 pb-20 flex justify-center">
            <div className="container-max">
              <div className="max-w-4xl mx-auto text-center">
                <span className="uppercase tracking-[0.2em] text-sm sm:text-base text-white font-serif block mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  Website Design Portfolio
                </span>
                <h1 className="portfolio-schema-hero-h1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Distinguished Real Estate Website Designs.
                </h1>
                <p className="portfolio-schema-hero-summary text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  Websites that continue to earn 5-stars since 2022 from top agents, teams, and brokers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        {/* Website portfolio - Sotheby's luxury aesthetic */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-2 px-6 sm:px-10 md:px-0">Agent & Team Websites</p>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-16 px-6 sm:px-10 md:px-0">Custom websites for agents, teams & brokers.</h2>
          </div>
          <div className="container-max space-y-0">
          {WEBSITE_SAMPLES.map((sample) => (
            <article
              key={sample.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-visible mb-24 md:mb-32 last:mb-0"
            >
              <div
                className={`flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 ${
                  sample.imageRight ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  {sample.subheading}
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  {sample.name}
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  {sample.description}
                </p>
                <a
                  href={sample.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                >
                  Visit site
                </a>
              </div>
              <div
                className={`relative order-1 m-6 sm:m-10 lg:m-12 ${
                  sample.imageRight ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <a
                  href={sample.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="relative block min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)]"
                >
                  <Image
                    src={sample.image}
                    alt={`${sample.name} — real estate agent website example`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </a>
                {sample.awardBadge ? (
                  sample.awardBadge.href ? (
                    <a
                      href={sample.awardBadge.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -left-5 -top-5 z-20 block transition-opacity hover:opacity-90 sm:-left-8 sm:-top-8 lg:-left-11 lg:-top-9"
                    >
                      <Image
                        src={sample.awardBadge.src}
                        alt={sample.awardBadge.alt}
                        width={351}
                        height={424}
                        className="h-24 w-auto drop-shadow-[0_12px_32px_rgba(15,15,15,0.28)] sm:h-[7.33rem] lg:h-[8.67rem]"
                      />
                    </a>
                  ) : (
                    <div className="pointer-events-none absolute -left-5 -top-5 z-20 sm:-left-8 sm:-top-8 lg:-left-11 lg:-top-9">
                      <Image
                        src={sample.awardBadge.src}
                        alt={sample.awardBadge.alt}
                        width={351}
                        height={424}
                        className="h-24 w-auto drop-shadow-[0_12px_32px_rgba(15,15,15,0.28)] sm:h-[7.33rem] lg:h-[8.67rem]"
                      />
                    </div>
                  )
                ) : null}
              </div>
            </article>
          ))}
          </div>
        </section>

        {/* Single-property Websites */}
        <section className="py-16 md:py-24 bg-[var(--color-ink-100)]">
          <div className="container-max">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-2 px-6 sm:px-10 md:px-0">Single-property Websites</p>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-16 px-6 sm:px-10 md:px-0">Dedicated sites built for individual listings.</h2>
          </div>
          <div className="container-max space-y-0">
          {PROPERTY_WEBSITES.map((sample) => (
            <article
              key={sample.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-visible mb-24 md:mb-32 last:mb-0"
            >
              <div
                className={`flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 ${
                  sample.imageRight ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  {sample.subheading}
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  {sample.name}
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  {sample.description}
                </p>
                <a
                  href={sample.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                >
                  Visit site
                </a>
              </div>
              <a
                href={sample.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={`relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 ${
                  sample.imageRight ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <Image
                  src={sample.image}
                  alt={`${sample.name} — single-property website example`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </a>
            </article>
          ))}
          </div>
        </section>
      </div>
    </SEOWrapper>
  );
}
