import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'
import ServiceHero from '@/components/service/ServiceHero'
import ServiceStats from '@/components/service/ServiceStats'
import ServiceCTA from '@/components/service/ServiceCTA'

// Location data with SEO-optimized content
const locationData: Record<
  string,
  {
    name: string
    state: string
    stateAbbr: string
    population: string
    medianHomePrice: string
    marketType: string
    topNeighborhoods: string[]
    keyFeatures: string[]
  }
> = {
  'new-york-ny': {
    name: 'New York',
    state: 'New York',
    stateAbbr: 'NY',
    population: '8.3M',
    medianHomePrice: '$680K',
    marketType: 'Ultra-Competitive Luxury Market',
    topNeighborhoods: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'],
    keyFeatures: ['High competition', 'Luxury market focus', 'International buyers'],
  },
  'los-angeles-ca': {
    name: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9M',
    medianHomePrice: '$890K',
    marketType: 'Premium Coastal Market',
    topNeighborhoods: ['Beverly Hills', 'Santa Monica', 'Hollywood', 'Venice', 'Malibu'],
    keyFeatures: ['Celebrity market', 'Coastal properties', 'High-end luxury'],
  },
  'chicago-il': {
    name: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    population: '2.7M',
    medianHomePrice: '$310K',
    marketType: 'Urban Professional Market',
    topNeighborhoods: ['Lincoln Park', 'Gold Coast', 'River North', 'Wicker Park', 'Loop'],
    keyFeatures: ['Urban luxury', 'Corporate relocations', 'Architectural significance'],
  },
  'houston-tx': {
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2.3M',
    medianHomePrice: '$280K',
    marketType: 'Growing Business Hub',
    topNeighborhoods: ['River Oaks', 'Memorial', 'The Heights', 'Montrose', 'Bellaire'],
    keyFeatures: ['Energy sector growth', 'Suburban expansion', 'No state income tax'],
  },
  'phoenix-az': {
    name: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '1.7M',
    medianHomePrice: '$430K',
    marketType: 'Fast-Growing Sun Belt Market',
    topNeighborhoods: ['Paradise Valley', 'Scottsdale', 'Arcadia', 'Biltmore', 'Camelback East'],
    keyFeatures: ['Rapid growth', 'Retirement destination', 'Desert luxury'],
  },
}

export async function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({
    location,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params
  const location = locationData[locationSlug]

  if (!location) {
    return {
      title: 'Location Not Found | DMR Media',
    }
  }

  return {
    title: `SEO Services in ${location.name}, ${location.stateAbbr} | Real Estate SEO | DMR Media`,
    description: `Expert SEO optimization for real estate professionals in ${location.name}, ${location.stateAbbr}. Dominate local search results and attract high-value clients in the ${location.name} market. ${location.population} population, ${location.medianHomePrice} median home price.`,
  }
}

export default async function LocationSEOPage({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params
  const location = locationData[locationSlug]

  if (!location) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <ServiceHero
        eyebrow={`SEO • ${location.name}, ${location.stateAbbr}`}
        title={`Search visibility tailored for ${location.name}.`}
        description={`Our local SEO programs help luxury agents in ${location.name} outrank competitors, win prime neighborhood keywords, and convert high-value buyers and sellers.`}
        image="/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg"
        actions={[
          { label: `Start in ${location.name}`, href: '#contact' },
          { label: 'Return to SEO Overview', href: '/seo-optimization', variant: 'secondary' },
        ]}
      />

      <ServiceStats
        heading={`Key market metrics for ${location.name}.`}
        stats={[
          { value: location.population, label: 'Population', description: 'Upscale buyers actively searching for property insights and listings.' },
          { value: location.medianHomePrice, label: 'Median home value', description: 'SEO content tailored to high-net-worth audiences in your market.' },
          { value: location.marketType, label: 'Market profile', description: 'Strategy tuned to the nuances of local demand and competition.' },
        ]}
      />

      <section className="py-32 bg-white border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
              Why strategic SEO matters in {location.name}.
            </h2>
            <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
              {location.name}'s {location.marketType.toLowerCase()} demands visibility across every neighborhood search. Our programs deliver the authority your listings and brand need to stay ahead of competing brokers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-6">
                Key advantages
              </h3>
              <div className="space-y-4">
                {location.keyFeatures.map((feature) => (
                  <div key={feature} className="border-b border-[var(--color-ink-200)] pb-4">
                    <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-6">
                Neighborhood focus
              </h3>
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif mb-6">
                We optimize individual listing and community pages for the neighborhoods where your buyers are already searching.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {location.topNeighborhoods.map((neighborhood) => (
                  <div key={neighborhood} className="border-b border-[var(--color-ink-200)] pb-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">
                      {neighborhood}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
              Local results you can expect
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-b border-[var(--color-ink-200)] pb-8">
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                Ranking gains for high-value keywords like "{location.name.toLowerCase()} luxury homes" and neighborhood-specific searches.
              </p>
            </div>
            <div className="border-b border-[var(--color-ink-200)] pb-8">
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                Optimized Google Business Profiles that dominate the map pack across {location.name}'s prime areas.
              </p>
            </div>
            <div className="border-b border-[var(--color-ink-200)] pb-8">
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                Localized content strategy that answers relocation, investment, and lifestyle queries from affluent buyers.
              </p>
            </div>
            <div className="border-b border-[var(--color-ink-200)] pb-8">
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                Transparent reporting that shows exactly how organic demand is translating into pipeline growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-32 bg-white border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
              Recent success in {location.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Link
              href="/case-study/michael-seo-transformation"
              className="group border-b border-[var(--color-ink-200)] pb-8 hover:opacity-60 transition-opacity duration-300 flex flex-col"
            >
              <div className="relative aspect-[3/2] overflow-hidden mb-6">
                <Image
                  src="/images/MichealTraffic.png"
                  alt="Google impressions growth graph"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute top-6 left-6 z-10">
                  <span className="text-sm uppercase tracking-[0.2em] text-[#FAFAF9] font-serif font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
                    21x Impressions
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug">
                  Michael's SEO Success
                </h3>
                <p className="text-sm text-[var(--color-ink-300)] leading-relaxed flex-1 font-serif">
                  21x impressions in 7.5 weeks—how we rebuilt Michael's traffic and pipeline.
                </p>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif">
                  View full story
                </span>
              </div>
            </Link>
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-6">
                Local deliverables
              </h3>
              <div className="space-y-4">
                <div className="border-b border-[var(--color-ink-200)] pb-4">
                  <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                    Neighborhood landing pages designed for discovery and lead capture.
                  </p>
                </div>
                <div className="border-b border-[var(--color-ink-200)] pb-4">
                  <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                    Google Business Profile optimization with review generation guidance.
                  </p>
                </div>
                <div className="border-b border-[var(--color-ink-200)] pb-4">
                  <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                    Monthly content calendar covering market reports, relocation guides, and listing spotlights.
                  </p>
                </div>
                <div className="border-b border-[var(--color-ink-200)] pb-4">
                  <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                    Weekly keyword ranking and organic traffic dashboards for your leadership team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        heading={`Ready to own page one in ${location.name}?`}
        description="We’ll evaluate your current search footprint, share the quick wins and long-term roadmap, and handle implementation with weekly reporting."
        primaryAction={{ label: 'Book a Strategy Call', href: '#contact' }}
        secondaryAction={{ label: 'View SEO Overview', href: '/seo-optimization' }}
      />

      <div id="contact">
        <ContactForm />
      </div>
    </div>
  )
}

