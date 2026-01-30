import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'
import ServiceHero from '@/components/service/ServiceHero'
import ServiceStats from '@/components/service/ServiceStats'
import ServiceCTA from '@/components/service/ServiceCTA'

const locationData: Record<
  string,
  {
    name: string
    stateAbbr: string
    avgDaysOnMarket: string
    luxuryMarketShare: string
  }
> = {
  'new-york-ny': { name: 'New York', stateAbbr: 'NY', avgDaysOnMarket: '45', luxuryMarketShare: '28%' },
  'los-angeles-ca': { name: 'Los Angeles', stateAbbr: 'CA', avgDaysOnMarket: '38', luxuryMarketShare: '32%' },
  'chicago-il': { name: 'Chicago', stateAbbr: 'IL', avgDaysOnMarket: '52', luxuryMarketShare: '18%' },
  'houston-tx': { name: 'Houston', stateAbbr: 'TX', avgDaysOnMarket: '48', luxuryMarketShare: '15%' },
  'phoenix-az': { name: 'Phoenix', stateAbbr: 'AZ', avgDaysOnMarket: '35', luxuryMarketShare: '22%' },
}

export async function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({ location }))
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params
  const location = locationData[locationSlug]
  if (!location) return { title: 'Location Not Found' }

  return {
    title: `Property Marketing in ${location.name}, ${location.stateAbbr} | Luxury Real Estate Marketing | DMR Media`,
    description: `Professional property marketing services in ${location.name}, ${location.stateAbbr}. Showcase luxury listings with stunning campaigns that attract qualified buyers.`,
  }
}

export default async function LocationPropertyMarketingPage({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params
  const location = locationData[locationSlug]
  if (!location) notFound()

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <ServiceHero
        eyebrow={`Property Marketing • ${location.name}, ${location.stateAbbr}`}
        title={`Launch unforgettable listings in ${location.name}.`}
        description={`We produce, distribute, and optimize campaigns that showcase your ${location.name} properties with the polish they deserve—and the reach they require.`}
        image="/images/StockHomes/studio-apartment-interior-with-wooden-furniture-2025-02-09-23-29-43-utc.jpg"
        actions={[
          { label: `Launch a Listing`, href: '#contact' },
          { label: 'Back to Property Marketing', href: '/property-marketing', variant: 'secondary' },
        ]}
      />

      <ServiceStats
        heading={`Market signals shaping ${location.name} launches.`}
        stats={[
          { value: location.avgDaysOnMarket, label: 'Avg days on market', description: 'We design campaigns to accelerate showings and offers.' },
          { value: location.luxuryMarketShare, label: 'Luxury market share', description: 'Your listings stay front-and-center with affluent buyers.' },
          { value: '250K+', label: 'Average impressions', description: 'Multichannel visibility across premium real estate audiences.' },
        ]}
      />

      <section className="py-32 bg-white border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
              Listing experiences built for {location.name} buyers.
            </h2>
            <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
              From Fifth Avenue penthouses to Paradise Valley estates, we tailor visuals, copy, and distribution to match buyer expectations in each neighborhood.
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
                    Cinematic photography, video, and copywriting anchored in lifestyle storytelling.
                  </p>
                </div>
                <div className="border-b border-[var(--color-ink-200)] pb-4">
                  <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                    MLS optimization plus premium placements across social, Google, and email lists.
                  </p>
                </div>
                <div className="border-b border-[var(--color-ink-200)] pb-4">
                  <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                    Custom landing experiences with lead capture, scheduling, and follow-up built in.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-6">
                Channel mix
              </h3>
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif mb-6">
                You get weekly metrics that show impressions, clicks, showings, and inquiries—so you always know how the market is responding.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['MLS & Syndication', 'YouTube & Shorts', 'Paid Social', 'Retargeting', 'Email Campaigns', 'Print Collateral'].map((item) => (
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
          <div className="max-w-3xl mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
              Deliverables for {location.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="border-b border-[var(--color-ink-200)] pb-4">
                <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                  Property launch plan with timeline, channels, and budget breakout.
                </p>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-4">
                <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                  Social media rollouts optimized for reels, stories, and carousel formats.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-b border-[var(--color-ink-200)] pb-4">
                <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                  On-site and virtual event promotion with RSVP funnels and follow-up sequences.
                </p>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-4">
                <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                  Weekly performance dashboard summarizing impressions, leads, and feedback from showings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-32 bg-white border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-6">
                Local media alignment
              </h3>
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                We coordinate placements across luxury publications and influencer partnerships popular in {location.name}, ensuring your listing is seen in the right feeds and inboxes.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-6">
                Neighborhood buyer personas
              </h3>
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif mb-6">
                We map messaging and creative to the buyer profiles active in each neighborhood—from relocations to pied-à-terre investors.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Relocation', 'Second home', 'Investor', 'Developer'].map((persona) => (
                  <div key={persona} className="border-b border-[var(--color-ink-200)] pb-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">
                      {persona}
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
              Additional services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {['Open house promotion', 'Digital brochures', 'Cinematic video tours', '3D walkthroughs', 'Broker outreach', 'Post-launch nurture'].map((item) => (
              <div key={item} className="border-b border-[var(--color-ink-200)] pb-8">
                <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        heading={`Ready to launch your next ${location.name} listing?`}
        description="We&apos;ll design the visuals, channel mix, and reporting cadence around your timeline—and handle execution week by week."
        primaryAction={{ label: 'Book a Strategy Call', href: '#contact' }}
        secondaryAction={{ label: 'View Property Marketing Overview', href: '/property-marketing' }}
      />

      <div id="contact">
        <ContactForm />
      </div>
    </div>
  )
}
