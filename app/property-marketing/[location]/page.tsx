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

      <section className="py-24 bg-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <div className="space-y-6">
            <span className="uppercase tracking-[0.35em] text-[10px] text-[var(--color-ink-400)]">Campaign approach</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight">
              Listing experiences built for {location.name} buyers.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-ink-400)] leading-relaxed">
              From Fifth Avenue penthouses to Paradise Valley estates, we tailor visuals, copy, and distribution to match buyer expectations in each neighborhood.
            </p>
            <ul className="space-y-3 text-sm text-[var(--color-ink-400)] leading-relaxed">
              <li>• Cinematic photography, video, and copywriting anchored in lifestyle storytelling.</li>
              <li>• MLS optimization plus premium placements across social, Google, and email lists.</li>
              <li>• Custom landing experiences with lead capture, scheduling, and follow-up built in.</li>
            </ul>
          </div>
          <div className="rounded-[28px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-10 space-y-6">
            <h3 className="text-xl font-serif font-light text-[var(--color-off-black)]">Channel mix</h3>
            <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.25em] text-[var(--color-ink-400)]">
              {['MLS & Syndication', 'YouTube & Shorts', 'Paid Social', 'Retargeting', 'Email Campaigns', 'Print Collateral'].map((item) => (
                <span key={item} className="rounded-full border border-[var(--color-ink-200)] bg-white/70 px-4 py-2 text-center">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
              You get weekly metrics that show impressions, clicks, showings, and inquiries—so you always know how the market is responding.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--surface-base)]">
        <div className="container-max rounded-[28px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-10">
          <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-4">Deliverables for {location.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[var(--color-ink-400)] leading-relaxed">
            <div>
              <p>• Property launch plan with timeline, channels, and budget breakout.</p>
              <p className="mt-3">• Social media rollouts optimized for reels, stories, and carousel formats.</p>
            </div>
            <div>
              <p>• On-site and virtual event promotion with RSVP funnels and follow-up sequences.</p>
              <p className="mt-3">• Weekly performance dashboard summarizing impressions, leads, and feedback from showings.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-24 bg-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-[28px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8">
            <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-4">Local media alignment</h3>
            <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
              We coordinate placements across luxury publications and influencer partnerships popular in {location.name}, ensuring your listing is seen in the right feeds and inboxes.
            </p>
          </div>
          <div className="rounded-[28px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8">
            <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-4">Neighborhood buyer personas</h3>
            <p className="text-sm text-[var(--color-ink-400)] leading-relaxed mb-3">
              We map messaging and creative to the buyer profiles active in each neighborhood—from relocations to pied-à-terre investors.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-[var(--color-ink-400)]">
              {['Relocation', 'Second home', 'Investor', 'Developer'].map((persona) => (
                <span key={persona} className="rounded-full border border-[var(--color-ink-200)] bg-white/70 px-4 py-2">
                  {persona}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--surface-base)]">
        <div className="container-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Open house promotion', 'Digital brochures', 'Cinematic video tours', '3D walkthroughs', 'Broker outreach', 'Post-launch nurture'].map((item) => (
            <div key={item} className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-6 text-sm text-[var(--color-ink-400)] leading-relaxed">
              {item}
            </div>
          ))}
        </div>
      </section>

      <ServiceCTA
        heading={`Ready to launch your next ${location.name} listing?`}
        description="We’ll design the visuals, channel mix, and reporting cadence around your timeline—and handle execution week by week."
        primaryAction={{ label: 'Book a Strategy Call', href: '#contact' }}
        secondaryAction={{ label: 'View Property Marketing Overview', href: '/property-marketing' }}
      />

      <div id="contact">
        <ContactForm />
      </div>
    </div>
  )
}

