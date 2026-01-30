import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'
import ServiceHero from '@/components/service/ServiceHero'
import ServiceStats from '@/components/service/ServiceStats'
import ServiceCTA from '@/components/service/ServiceCTA'

const locationData: Record<string, {
  name: string
  state: string
  stateAbbr: string
  population: string
  medianHomePrice: string
  avgCostPerClick: string
  competitionLevel: string
  marketType: string
}> = {
  'new-york-ny': {
    name: 'New York',
    state: 'New York',
    stateAbbr: 'NY',
    population: '8.3M',
    medianHomePrice: '$680K',
    avgCostPerClick: '$4.50',
    competitionLevel: 'Very High',
    marketType: 'Ultra-competitive metropolitan market',
  },
  'los-angeles-ca': {
    name: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9M',
    medianHomePrice: '$890K',
    avgCostPerClick: '$5.20',
    competitionLevel: 'Very High',
    marketType: 'Coastal luxury market',
  },
  'chicago-il': {
    name: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    population: '2.7M',
    medianHomePrice: '$310K',
    avgCostPerClick: '$3.10',
    competitionLevel: 'High',
    marketType: 'Urban professional market',
  },
  'houston-tx': {
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2.3M',
    medianHomePrice: '$280K',
    avgCostPerClick: '$2.80',
    competitionLevel: 'Medium',
    marketType: 'High-growth business market',
  },
  'phoenix-az': {
    name: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '1.7M',
    medianHomePrice: '$430K',
    avgCostPerClick: '$3.40',
    competitionLevel: 'Medium-High',
    marketType: 'Fast-growing sun belt market',
  },
}

export async function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({ location }))
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params
  const location = locationData[locationSlug]
  if (!location) return { title: 'Location Not Found' }

  return {
    title: `Google Ads Management in ${location.name}, ${location.stateAbbr} | Real Estate PPC | DMR Media`,
    description: `Expert Google Ads management for real estate in ${location.name}, ${location.stateAbbr}. Generate qualified leads with targeted PPC campaigns. ${location.population} population, ${location.medianHomePrice} median price.`,
  }
}

export default async function LocationGoogleAdsPage({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params
  const location = locationData[locationSlug]
  if (!location) notFound()

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <ServiceHero
        eyebrow={`Google Ads • ${location.name}, ${location.stateAbbr}`}
        title={`High-intent lead gen for ${location.name}.`}
        description={`We run precision Google Ads that reach affluent buyers in ${location.name}, keeping your team supplied with deal-ready conversations.`}
        image="/images/StockHomes/spacious-living-room-with-staircase-in-residence-2025-10-10-15-17-44-utc (1).jpg"
        actions={[
          { label: `Launch in ${location.name}`, href: '#contact' },
          { label: 'Back to Google Ads', href: '/google-ads-management', variant: 'secondary' },
        ]}
      />

      <ServiceStats
        heading={`Paid search benchmarks in ${location.name}.`}
        stats={[
          { value: location.avgCostPerClick, label: 'Avg CPC', description: 'What to expect when competing for premium buyer searches.' },
          { value: location.competitionLevel, label: 'Market competition', description: 'How aggressive we\'ll need to be with bidding and creative.' },
          { value: location.population, label: 'Audience size', description: 'Targeted impressions across affluent neighborhoods.' },
        ]}
      />

      <section className="py-32 bg-white border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
              Why Google Ads is essential in {location.name}.
            </h2>
            <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
              With {location.population} residents and a median home value of {location.medianHomePrice}, the {location.marketType?.toLowerCase() ?? 'local'} market rewards brands that show up first—at the exact moment buyers start searching.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-6">
                Campaign approach
              </h3>
              <div className="space-y-4">
                <div className="border-b border-[var(--color-ink-200)] pb-4">
                  <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                    Precision keyword targeting for luxury listings, relocation queries, and investment searches.
                  </p>
                </div>
                <div className="border-b border-[var(--color-ink-200)] pb-4">
                  <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                    Geo-fenced campaigns that keep spend focused on {location.name}'s highest-value neighborhoods.
                  </p>
                </div>
                <div className="border-b border-[var(--color-ink-200)] pb-4">
                  <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                    Retargeting flows that nurture buyers until they book a showing or request a consultation.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-6">
                Creative and landing experiences
              </h3>
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif mb-6">
                We adapt ad copy, creatives, and landing experiences to the tone and expectations of {location.name}'s buyers—from concise Manhattan co-op campaigns to lifestyle-focused Scottsdale estates.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Search + Maps', 'Display Remarketing', 'Landing Pages', 'Lead Forms & CRM'].map((item) => (
                  <div key={item} className="border-b border-[var(--color-ink-200)] pb-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">
                      {item}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-6">
                Neighborhood focus
              </h3>
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif mb-6">
                We segment campaigns by neighborhood and price band so budgets follow intent—not broad zip codes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Luxury buyers', 'Relocation', 'Investors', 'Developments', 'New construction'].map((item) => (
                  <div key={item} className="border-b border-[var(--color-ink-200)] pb-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-6">
                Reporting you can act on
              </h3>
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif mb-6">
                Weekly reports show spend, CPL, and lead quality by campaign so you know exactly how ads are supporting your pipeline.
              </p>
              <div className="space-y-4">
                <div className="border-b border-[var(--color-ink-200)] pb-4">
                  <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                    Keyword groups tied to buyer personas and price bands.
                  </p>
                </div>
                <div className="border-b border-[var(--color-ink-200)] pb-4">
                  <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                    Lead highlights from the past week with disposition notes.
                  </p>
                </div>
                <div className="border-b border-[var(--color-ink-200)] pb-4">
                  <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                    Budget and bid recommendations to amplify what&apos;s working.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-32 bg-white border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
              Recent campaign performance in {location.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border-b border-[var(--color-ink-200)] pb-8">
              <span className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] block mb-4">
                38
              </span>
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                Average qualified leads generated per month across flagship campaigns.
              </p>
            </div>
            <div className="border-b border-[var(--color-ink-200)] pb-8">
              <span className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] block mb-4">
                65%
              </span>
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                Lower cost per lead compared with prior agency performance.
              </p>
            </div>
            <div className="border-b border-[var(--color-ink-200)] pb-8">
              <span className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] block mb-4">
                1.8x
              </span>
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                Increase in booked appointments driven by retargeting and lead nurture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        heading={`Ready to launch Google Ads in ${location.name}?`}
        description="We&apos;ll audit your current efforts, forecast results, and handle execution with crystal-clear reporting."
        primaryAction={{ label: 'Book a Strategy Call', href: '#contact' }}
        secondaryAction={{ label: 'View Google Ads Overview', href: '/google-ads-management' }}
      />

      <div id="contact">
        <ContactForm />
      </div>
    </div>
  )
}
