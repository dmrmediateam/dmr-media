import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ServiceStats from '@/components/service/ServiceStats';
import ServiceProcess from '@/components/service/ServiceProcess';
import ServiceCities from '@/components/service/ServiceCities';
import SEOWrapper from '@/components/SEOWrapper';

export const metadata: Metadata = {
  title: 'Single Property Websites for Luxury Listings | DMR Media',
  description:
    'Dedicated microsites for trophy listings—fast, mobile-first, SEO-aware, and built to capture qualified buyers. Optional pairing with Google Ads through our property marketing program.',
  keywords:
    'single property website, luxury listing website, real estate microsite, property website design, listing landing page, luxury home website, real estate listing SEO',
  alternates: {
    canonical: 'https://www.dmrmedia.org/single-property-websites',
  },
  openGraph: {
    title: 'Single Property Websites for Luxury Listings | DMR Media',
    description:
      'Dedicated microsites for trophy listings—fast, mobile-first, SEO-aware, and built to capture qualified buyers.',
    url: 'https://www.dmrmedia.org/single-property-websites',
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Single Property Websites for Luxury Listings | DMR Media',
    description:
      'Microsites engineered for one listing—story, media, speed, and lead capture without brokerage template noise.',
  },
};

const CASE_STUDIES = [
  {
    id: 'eagan-luxury-real-estate',
    subheading: 'Listing-grade digital + $11M+ closed (Q1 2026)',
    title: 'Eagan Luxury — authority that extends to individual listings',
    description:
      'After consolidating the brand and rebuilding search visibility, Eagan Luxury publishes high-caliber listing experiences (including waterfront estates) with the same restraint and performance standards we apply to single-property microsites.',
    image:
      '/images/propertyWebsiteImages/screencapture-eaganluxury-listing-1873-oceanview-dr-tierra-verde-fl-33715-2026-03-25-19_45_17.png',
    imageRight: true,
  },
  {
    id: 'michael-seo-transformation',
    subheading: '21× impressions · premium UX',
    title: 'Michael — from silent template to indexable luxury experience',
    description:
      'A full rebuild with schema, speed, and architecture tuned for search—exactly the technical bar we carry into one-off property sites so Google and buyers both take the listing seriously.',
    image: '/images/MichealTraffic.png',
    imageRight: false,
  },
];

const topCities = [
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
    name: 'All Other Cities',
    state: 'USA',
    slug: '#contact',
    image: '/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg',
    subtitle: 'Talk to us about your market →',
  },
];

export default function SinglePropertyWebsitesPage() {
  return (
    <SEOWrapper slug="/single-property-websites">
      <div className="min-h-screen bg-white">
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
                  'linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.35) 40%, rgba(250,250,249,0.2) 70%, rgba(250,250,249,1) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 w-full pt-24 pb-20 flex justify-center">
            <div className="container-max">
              <div className="max-w-4xl mx-auto text-center">
                <span className="uppercase tracking-[0.2em] text-sm sm:text-base text-white font-serif block mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  Single Property Websites
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  One listing. One site. Built like it belongs in the portfolio.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  We design and launch dedicated property microsites—cinematic media, floorplan logic, lead capture, and
                  technical SEO—so your trophy listing is not buried inside a brokerage template.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading="What you can expect from a single-property build."
          stats={[
            {
              value: 'Under 2s',
              label: 'Performance target',
              description: 'Lean stacks and disciplined media so the first impression feels as premium as the home.',
            },
            {
              value: '100%',
              label: 'Listing-focused',
              description: 'No IDX clutter—every screen reinforces one address, one story, one conversion path.',
            },
            {
              value: 'SEO-ready',
              label: 'Indexable structure',
              description: 'Metadata, schema, and internal linking patterns that match how luxury buyers search.',
            },
          ]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <div className="max-w-2xl mb-20 md:mb-28">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
                Case studies that share DNA with single-property work.
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                These are full-site engagements—not literal “microsite only” PDFs—but they demonstrate how we treat
                luxury inventory online: performance, search, and presentation at a level buyers expect before they ever
                tour. Live single-property builds also appear on our{' '}
                <Link href="/property-marketing" className="underline hover:opacity-70">
                  property marketing
                </Link>{' '}
                page (2100 Pine, Ocean Breeze, Tierra Verde).
              </p>
            </div>

            <div className="space-y-0">
              {CASE_STUDIES.map((study) => (
                <article
                  key={study.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32 last:mb-0"
                >
                  <div
                    className={`flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 ${
                      study.imageRight ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                      {study.subheading}
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                      {study.title}
                    </h3>
                    <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                      {study.description}
                    </p>
                    <Link
                      href={`/case-study/${study.id}`}
                      className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                    >
                      Read case study
                    </Link>
                  </div>
                  <Link
                    href={`/case-study/${study.id}`}
                    className={`group relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 ${
                      study.imageRight ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <Image
                      src={study.image}
                      alt={`${study.title} — DMR Media case study`}
                      fill
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[var(--surface-base)] border-y border-[var(--color-ink-200)]">
          <div className="container-max max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
              How single-property sites plug into the rest of our stack
            </h2>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
              Microsites work hardest when they are not an island. We connect builds to{' '}
              <Link href="/seo-optimization" className="underline hover:opacity-70">
                SEO
              </Link>
              ,{' '}
              <Link href="/google-ads-management" className="underline hover:opacity-70">
                Google Ads
              </Link>
              , and{' '}
              <Link href="/analytics-reporting" className="underline hover:opacity-70">
                analytics
              </Link>
              ; for bundled listing campaigns (site + paid burst), see{' '}
              <Link href="/property-marketing" className="underline hover:opacity-70">
                property marketing
              </Link>
              . For phased inventory and developer launches, pair with{' '}
              <Link href="/luxury-development-marketing" className="underline hover:opacity-70">
                luxury development marketing
              </Link>
              . Browse gallery patterns in the{' '}
              <Link href="/real-estate-agent-website-samples" className="underline hover:opacity-70">
                website design portfolio
              </Link>{' '}
              and deeper search plans via{' '}
              <Link href="/real-estate-seo-consultant" className="underline hover:opacity-70">
                SEO consulting
              </Link>
              .
            </p>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
              Strategy posts that align with listing media and paid demand:{' '}
              <Link href="/blog/google-ads-for-realtors" className="underline hover:opacity-70">
                Google Ads for real estate
              </Link>{' '}
              and{' '}
              <Link href="/blog/best-10-luxury-real-estate-marketing-tactics-for-2026" className="underline hover:opacity-70">
                luxury real estate marketing tactics
              </Link>
              .
            </p>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
              <Link href="/case-studies" className="underline hover:opacity-70">
                All case studies
              </Link>
              {' · '}
              <Link href="/services" className="underline hover:opacity-70">
                All services
              </Link>
            </p>
          </div>
        </section>

        <ServiceProcess
          id="how-it-works"
          heading="How we build a single-property website."
          description="A tight four-stage process so your microsite launches before the open house—not after the deal is stale."
          steps={[
            {
              title: 'Discovery & narrative',
              description:
                'Architect interview, buyer profile, and story arc—what makes this address singular, not “another comp.”',
            },
            {
              title: 'Design & content architecture',
              description:
                'Wireframes for media, floorplans, neighborhood proof, and lead capture—desktop and mobile treated as first-class.',
            },
            {
              title: 'Build, schema & launch',
              description:
                'Performance-tuned implementation, structured data, analytics hooks, and QA across devices before DNS cutover.',
            },
            {
              title: 'Amplify & handoff',
              description:
                'Optional paid bursts and email copy through our property marketing program; clean handoff to your team or co-list agents.',
            },
          ]}
        />

        <Testimonials />

        <ServiceCities
          heading="Markets where we launch single-property sites."
          description="Gateway metros to Sun Belt corridors—same build standards, tuned to local buyer expectations."
          cities={topCities.map((city) => ({
            ...city,
            slug: city.slug.startsWith('#') ? city.slug : `/single-property-websites/${city.slug}`,
          }))}
        />

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
