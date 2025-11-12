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

      <section className="py-24 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <span className="uppercase tracking-[0.35em] text-[10px] text-[var(--color-ink-400)]">Key Advantages</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight">
                Why strategic SEO matters in {location.name}.
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-ink-400)] leading-relaxed">
                {location.name}'s {location.marketType.toLowerCase()} demands visibility across every neighborhood search. Our programs deliver the authority your listings and brand need to stay ahead of competing brokers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {location.keyFeatures.map((feature) => (
                  <div key={feature} className="rounded-[20px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-6 text-sm text-[var(--color-ink-400)] leading-relaxed">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-10 space-y-6">
              <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)]">
                Neighborhood focus
              </h3>
              <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
                We optimize individual listing and community pages for the neighborhoods where your buyers are already searching.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {location.topNeighborhoods.map((neighborhood) => (
                  <div key={neighborhood} className="rounded-full border border-[var(--color-ink-200)] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[var(--color-ink-400)]">
                    {neighborhood}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--surface-base)]">
        <div className="container-max">
          <div className="rounded-[28px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-10">
            <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-4">Local results you can expect</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--color-ink-400)] leading-relaxed">
              <li>Ranking gains for high-value keywords like “{location.name.toLowerCase()} luxury homes” and neighborhood-specific searches.</li>
              <li>Optimized Google Business Profiles that dominate the map pack across {location.name}'s prime areas.</li>
              <li>Localized content strategy that answers relocation, investment, and lifestyle queries from affluent buyers.</li>
              <li>Transparent reporting that shows exactly how organic demand is translating into pipeline growth.</li>
            </ul>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-24 bg-white">
        <div className="container-max">
          <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8">
            Recent success in {location.name}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Link
              href="/case-study/michael-seo-transformation"
              className="group relative h-[340px] rounded-[28px] border border-[var(--color-ink-200)] overflow-hidden"
            >
              <Image
                src="/images/MichealTraffic.png"
                alt="Google impressions growth graph"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <span className="uppercase tracking-[0.3em] text-[11px] text-white/80">Case Study</span>
                <h4 className="text-2xl font-serif font-light">21x impressions in 7.5 weeks.</h4>
                <span className="text-sm text-white/80 mt-2">View story →</span>
              </div>
            </Link>
            <div className="rounded-[28px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8">
              <h4 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-3">
                Local deliverables
              </h4>
              <ul className="space-y-3 text-sm text-[var(--color-ink-400)] leading-relaxed">
                <li>• Neighborhood landing pages designed for discovery and lead capture.</li>
                <li>• Google Business Profile optimization with review generation guidance.</li>
                <li>• Monthly content calendar covering market reports, relocation guides, and listing spotlights.</li>
                <li>• Weekly keyword ranking and organic traffic dashboards for your leadership team.</li>
              </ul>
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

