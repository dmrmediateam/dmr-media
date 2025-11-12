import Link from 'next/link'
import Image from 'next/image'
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
    dataComplexity: string
  }
> = {
  'new-york-ny': { name: 'New York', stateAbbr: 'NY', dataComplexity: 'Very High' },
  'los-angeles-ca': { name: 'Los Angeles', stateAbbr: 'CA', dataComplexity: 'Very High' },
  'chicago-il': { name: 'Chicago', stateAbbr: 'IL', dataComplexity: 'High' },
  'houston-tx': { name: 'Houston', stateAbbr: 'TX', dataComplexity: 'Medium-High' },
  'phoenix-az': { name: 'Phoenix', stateAbbr: 'AZ', dataComplexity: 'Medium' },
}

export async function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({ location }))
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params
  const location = locationData[locationSlug]
  if (!location) return { title: 'Location Not Found' }

  return {
    title: `Analytics & Reporting in ${location.name}, ${location.stateAbbr} | Real Estate Marketing Analytics | DMR Media`,
    description: `Comprehensive analytics and reporting services for real estate professionals in ${location.name}, ${location.stateAbbr}. Data-driven insights that optimize your marketing ROI.`,
  }
}

export default async function LocationAnalyticsPage({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params
  const location = locationData[locationSlug]
  if (!location) notFound()

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <ServiceHero
        eyebrow={`Analytics & Reporting • ${location.name}, ${location.stateAbbr}`}
        title={`Clarity and control for ${location.name} marketing.`}
        description={`Our dashboards turn ${location.name}'s ${location.dataComplexity.toLowerCase()} marketing data into a weekly action plan—so your team always knows what to optimize next.`}
        image="/images/StockHomes/a-backyard-with-a-swimming-pool-hot-tub-and-pati-2025-02-10-06-23-51-utc.jpg"
        actions={[
          { label: 'Request a Demo', href: '#contact' },
          { label: 'Back to Analytics', href: '/analytics-reporting', variant: 'secondary' },
        ]}
      />

      <ServiceStats
        heading={`Reporting built for ${location.name} leaders.`}
        stats={[
          { value: 'Weekly', label: 'Report cadence', description: 'Executive-ready status updates and commentary.' },
          { value: '50+', label: 'Metrics tracked', description: 'Traffic, CPL, conversions, attribution, and lead quality.' },
          { value: 'Live', label: 'Dashboards', description: 'Always-on access with nothing summarized away.' },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12">
          <div className="space-y-6">
            <span className="uppercase tracking-[0.35em] text-[10px] text-[var(--color-ink-400)]">Market context</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight">
              Why smart analytics wins in {location.name}.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-ink-400)] leading-relaxed">
              {location.name} teams juggle multiple channels, listings, and lead sources. We centralize every signal so you can allocate budget confidently and prove ROI to stakeholders.
            </p>
            <ul className="space-y-3 text-sm text-[var(--color-ink-400)] leading-relaxed">
              <li>• Channel and campaign dashboards tailored to your price points and personas.</li>
              <li>• Automated KPI alerts when cost-per-lead or conversion targets slip.</li>
              <li>• Cross-channel attribution modeling for listings, developments, and branding initiatives.</li>
            </ul>
          </div>
          <div className="rounded-[28px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-10 space-y-6">
            <h3 className="text-xl font-serif font-light text-[var(--color-off-black)]">Data sources we unify</h3>
            <div className="grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.25em] text-[var(--color-ink-400)]">
              {['Google Analytics', 'Search Console', 'Google Ads', 'Meta Ads', 'CRM / IDX', 'Call Tracking'].map((source) => (
                <span key={source} className="rounded-full border border-[var(--color-ink-200)] bg-white/70 px-4 py-2 text-center">
                  {source}
                </span>
              ))}
            </div>
            <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
              Weekly insights highlight wins, watch items, and recommended shifts—no spreadsheet digging required.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--surface-base)]">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-[28px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8">
            <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-4">Neighborhood + listing insights</h3>
            <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
              See which neighborhoods, property types, and price bands are generating the most engagement, leads, and showings.
            </p>
          </div>
          <div className="rounded-[28px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8">
            <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-4">Budget & pacing</h3>
            <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
              Forecast spend by channel and flag pacing issues early, ensuring no listing launch or campaign loses momentum.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-max rounded-[28px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-10">
          <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-4">What you’ll receive</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[var(--color-ink-400)] leading-relaxed">
            <div>
              <span className="block text-3xl font-serif font-light text-[var(--color-off-black)]">Real-time</span>
              <p className="mt-2">Dashboards for leadership and marketing with custom views per stakeholder.</p>
            </div>
            <div>
              <span className="block text-3xl font-serif font-light text-[var(--color-off-black)]">Weekly</span>
              <p className="mt-2">Narratives summarizing results, insights, and the optimizations we’re running next.</p>
            </div>
            <div>
              <span className="block text-3xl font-serif font-light text-[var(--color-off-black)]">Quarterly</span>
              <p className="mt-2">Deep dives uncovering new market opportunities and recommended budget shifts.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <ServiceCTA
        heading={`Ready to bring order to ${location.name}'s marketing data?`}
        description="Let’s audit your current reporting, map out the dashboards you need, and have insights flowing within the first 14 days."
        primaryAction={{ label: 'Book a Strategy Call', href: '#contact' }}
        secondaryAction={{ label: 'View Analytics Overview', href: '/analytics-reporting' }}
      />

      <div id="contact">
        <ContactForm />
      </div>
    </div>
  )
}

