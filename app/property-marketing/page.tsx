import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ServiceStats from '@/components/service/ServiceStats';
import Testimonials from '@/components/Testimonials';
import ServiceCities from '@/components/service/ServiceCities';
import SEOWrapper from '@/components/SEOWrapper';
import PropertyMarketingContactForm from './PropertyMarketingContactForm';

export const metadata: Metadata = {
  title: 'Luxury Property Marketing | DMR Media',
  description:
    'Expert luxury property marketing that drives qualified buyer traffic. We build dedicated property websites and run targeted Google Ads with a deferred payment structure.',
  keywords:
    'luxury property marketing, property marketing, luxury real estate marketing, dedicated property website, Google Ads real estate, listing marketing, pay at close marketing',
  alternates: {
    canonical: 'https://www.dmrmedia.org/property-marketing',
  },
  openGraph: {
    title: 'Luxury Property Marketing | DMR Media',
    description:
      'Expert luxury property marketing that drives qualified buyer traffic. We build dedicated property websites and run targeted Google Ads with a deferred payment structure.',
    url: 'https://www.dmrmedia.org/property-marketing',
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Property Marketing | DMR Media',
    description:
      'Expert luxury property marketing that drives qualified buyer traffic. We build dedicated property websites and run targeted Google Ads with a deferred payment structure.',
  },
};

const PROPERTIES = [
  {
    id: '2100-pine-manhattan-beach',
    label: 'Manhattan Beach, CA',
    title: '2100 Pine Ave',
    description:
      'Custom 2008 residence in the Tree Section with a private backyard retreat. A dedicated single-property website built to showcase every detail and capture qualified buyer inquiries.',
    image: '/images/propertyWebsiteImages/screencapture-2100pine-vercel-app-2026-03-25-19_45_27.png',
    href: 'https://2100pine.vercel.app/',
    imageRight: true,
  },
  {
    id: 'ocean-breeze-turks-caicos',
    label: 'Turks & Caicos',
    title: 'Ocean Breeze',
    description:
      '$6.5M Waterfront Villa featuring 6,000 sq ft, a rooftop infinity pool, and cinematic ocean views. Built to reach international luxury buyers across search and paid channels.',
    image: '/images/propertyWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-25-19_45_37.png',
    href: 'https://ocean-breeze-one.vercel.app/',
    imageRight: false,
  },
  {
    id: '1873-oceanview-tierra-verde',
    label: 'Tierra Verde, FL',
    title: '1873 Oceanview Dr',
    description:
      '$6.56M Coastal Estate featuring 6,391 sq ft, a 5-car garage, and a 12,000 lb boat lift. A high-performance campaign site that places the property in front of serious coastal buyers.',
    image: '/images/propertyWebsiteImages/screencapture-eaganluxury-listing-1873-oceanview-dr-tierra-verde-fl-33715-2026-03-25-19_45_17.png',
    href: 'https://www.eaganluxury.com/listing/1873-oceanview-dr-tierra-verde-fl-33715',
    imageRight: true,
  },
];

const INCLUDED_FEATURES = [
  {
    step: '01',
    title: 'Dedicated Single-Property Website',
    description:
      'Custom-designed, mobile-responsive, and SEO-optimized — built exclusively for your listing. Includes an integrated lead capture form so every buyer inquiry lands directly with your team.',
  },
  {
    step: '02',
    title: '30-Day Google Ads Campaign',
    description:
      'A targeted paid search burst aimed at active buyer markets. Ad spend is fully covered by DMR Media and included in the flat fee — no separate ad account or budget required.',
  },
  {
    step: '03',
    title: 'Done-For-You Email Announcement',
    description:
      'Ready-to-send listing announcement copy written in the agent\'s voice. Drop it into your CRM and deploy to your database the day the campaign goes live.',
  },
];

const topMarkets = [
  { name: 'New York', state: 'NY', slug: 'new-york-ny', image: '/images/Cities/NewYork.jpeg' },
  {
    name: 'Los Angeles',
    state: 'CA',
    slug: 'los-angeles-ca',
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
  },
  {
    name: 'Chicago',
    state: 'IL',
    slug: 'chicago-il',
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
  },
  {
    name: 'Houston',
    state: 'TX',
    slug: 'houston-tx',
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
  },
  {
    name: 'Phoenix',
    state: 'AZ',
    slug: 'phoenix-az',
    image: '/images/Cities/phoenix-arizona-state-capitol-2025-03-13-12-59-21-utc.jpg',
  },
  {
    name: 'St. Petersburg',
    state: 'FL',
    slug: 'st-petersburg-fl',
    image: '/images/Cities/Stpet.jpg',
  },
  {
    name: 'Costa Rica',
    slug: 'costa-rica',
    image:
      'https://images.unsplash.com/photo-1712273033323-036432471687?auto=format&fit=crop&w=800&q=80',
    subtitle: 'International market →',
  },
  {
    name: 'Turks & Caicos',
    slug: 'turks-and-caicos',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    subtitle: 'International market →',
  },
  {
    name: 'Cayman Islands',
    slug: 'cayman-islands',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    subtitle: 'International market →',
  },
  {
    name: 'Canada',
    slug: 'canada',
    image:
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
    subtitle: 'International market →',
  },
  {
    name: 'Bali',
    slug: 'bali',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    subtitle: 'International market →',
  },
  {
    name: 'St. Barts',
    slug: 'st-barts',
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    subtitle: 'International market →',
  },
];

export default function PropertyMarketingPage() {
  return (
    <SEOWrapper slug="/property-marketing">
      <div className="min-h-screen bg-white">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              src="/videos/top-view-of-luxury-american-houses-near-the-lake-i-2025-12-17-10-52-23-utc.mov"
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
                  'linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.35) 40%, rgba(250,250,249,0.15) 70%, rgba(250,250,249,1) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 w-full pt-24 pb-20 flex justify-center">
            <div className="container-max">
              <div className="max-w-4xl mx-auto text-center">
                <span className="uppercase tracking-[0.2em] text-sm sm:text-base text-white font-serif block mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  Luxury Property Marketing
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Luxury Property Marketing for Exceptional Listings.
                </h1>
                <p className="text-xl sm:text-2xl font-serif text-white leading-relaxed max-w-2xl mx-auto mb-10 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  We build dedicated property websites and run targeted Google Ads campaigns to drive
                  qualified buyer traffic directly to your listings. Close faster with our
                  pay-at-close model.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#pricing"
                    className="inline-block px-8 py-4 bg-white text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs font-serif hover:bg-opacity-90 transition-all duration-300"
                  >
                    View Pricing
                  </a>
                  <a
                    href="#contact"
                    className="inline-block px-8 py-4 border border-white text-white uppercase tracking-[0.15em] text-xs font-serif hover:bg-white hover:text-[var(--color-off-black)] transition-all duration-300"
                  >
                    Start a Campaign
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading="Campaign outcomes our partners rely on."
          stats={[
            {
              value: '40%',
              label: 'Faster sales',
              description: 'Average reduction in days on market for featured listings.',
            },
            {
              value: '250K+',
              label: 'Listing impressions',
              description: 'High-intent views across search, social, and email.',
            },
            {
              value: '95%',
              label: 'Client satisfaction',
              description: 'Consistent 5-star ratings from teams and developers.',
            },
          ]}
        />

        {/* ── What's Included ──────────────────────────────────── */}
        <section className="py-32 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
          <div className="container-max">
            <div className="max-w-3xl mb-20">
              <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-400)] mb-4 block font-serif">
                What&apos;s Included
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
                Active, paid digital marketing — not just a pretty listing page.
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                Every luxury property marketing package is a complete, done-for-you campaign. We
                handle the build, the ads, and the copy so you can focus on the close.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {INCLUDED_FEATURES.map((feature, index) => (
                <article
                  key={feature.step}
                  className={`border-b md:border-b-0 md:border-r border-[var(--color-ink-200)] pb-10 md:pb-0 md:pr-12 flex flex-col gap-4 ${
                    index === 0 ? '' : 'pt-10 md:pt-0 md:pl-12'
                  } ${index === INCLUDED_FEATURES.length - 1 ? 'md:border-r-0' : ''}`}
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">
                    {feature.step}
                  </div>
                  <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case Examples ────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <div className="max-w-2xl mb-20 md:mb-28">
              <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-400)] mb-4 block font-serif">
                Live Examples
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
                Luxury property websites built for high-intent buyers.
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                Each dedicated site is purpose-built to showcase the property story, capture leads,
                and support a targeted Google Ads campaign.
              </p>
            </div>

            <div className="space-y-0">
              {PROPERTIES.map((property) => (
                <article
                  key={property.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32 last:mb-0"
                >
                  <div
                    className={`flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 ${
                      property.imageRight ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                      {property.label}
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                      {property.title}
                    </h3>
                    <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                      {property.description}
                    </p>
                    <Link
                      href={property.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                    >
                      View live site
                    </Link>
                  </div>
                  <Link
                    href={property.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative min-h-[320px] sm:min-h-[400px] lg:min-h-[520px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 ${
                      property.imageRight ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <Image
                      src={property.image}
                      alt={`${property.title} — luxury property marketing website example`}
                      fill
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ──────────────────────────────────────────── */}
        <section id="pricing" className="py-24 md:py-32 bg-[var(--surface-base)] border-t border-[var(--color-ink-200)]">
          <div className="container-max">
            <div className="max-w-2xl mb-16">
              <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-400)] mb-4 block font-serif">
                Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1]">
                Transparent Pricing. Zero Upfront Ad Spend.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-10">
              {/* Current Clients */}
              <article className="border border-[var(--color-off-black)] p-8 md:p-10 flex flex-col gap-6 relative">
                <div className="absolute top-0 right-0 bg-[var(--color-off-black)] text-white text-[10px] uppercase tracking-[0.2em] font-serif px-4 py-1.5">
                  Best Value
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-3">
                    Current Clients
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)]">
                      $2,500
                    </span>
                    <span className="text-sm text-[var(--color-ink-300)] font-serif">/ listing</span>
                  </div>
                  <p className="mt-2 text-sm text-[var(--color-trust)] font-serif font-medium">
                    Pay-at-close — 90-day cap
                  </p>
                </div>

                <ul className="space-y-3 border-t border-[var(--color-ink-200)] pt-6 flex-1">
                  {[
                    'Dedicated single-property website',
                    '30-day Google Ads burst campaign',
                    'Ad spend fully covered by DMR Media',
                    'Done-for-you listing email copy',
                    'Integrated lead capture form',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif">
                      <svg
                        className="w-4 h-4 text-[var(--color-trust)] shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block w-full py-4 bg-[var(--color-off-black)] text-white text-center uppercase tracking-[0.15em] text-xs font-serif hover:opacity-80 transition-opacity"
                >
                  Get Started
                </a>
              </article>

              {/* Non-Clients */}
              <article className="border border-[var(--color-ink-200)] p-8 md:p-10 flex flex-col gap-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-3">
                    Non-Clients
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)]">
                      $3,250
                    </span>
                    <span className="text-sm text-[var(--color-ink-300)] font-serif">/ listing</span>
                  </div>
                  <p className="mt-2 text-sm text-[var(--color-ink-400)] font-serif">
                    Upfront — before work begins
                  </p>
                </div>

                <ul className="space-y-3 border-t border-[var(--color-ink-200)] pt-6 flex-1">
                  {[
                    'Dedicated single-property website',
                    '30-day Google Ads burst campaign',
                    'Ad spend fully covered by DMR Media',
                    'Done-for-you listing email copy',
                    'Integrated lead capture form',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif">
                      <svg
                        className="w-4 h-4 text-[var(--color-ink-300)] shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block w-full py-4 border border-[var(--color-off-black)] text-[var(--color-off-black)] text-center uppercase tracking-[0.15em] text-xs font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-all duration-300"
                >
                  Get Started
                </a>
              </article>
            </div>

            <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed border-l-2 border-[var(--color-trust)] pl-4 max-w-2xl">
              Google Ads budget is covered by DMR Media and included in the flat fee. No separate ad account required.
            </p>
          </div>
        </section>

        <Testimonials />

        <PropertyMarketingContactForm />

        <ServiceCities
          heading="Luxury property marketing across every premier market."
          description="Dedicated campaigns for high-value listings in the US and internationally — wherever serious buyers are searching."
          columns={4}
          cities={topMarkets.map((market) => ({
            ...market,
            slug: market.slug.startsWith('#') ? market.slug : `/property-marketing/${market.slug}`,
          }))}
        />

      </div>
    </SEOWrapper>
  );
}
