import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'
import ServiceHero from '@/components/service/ServiceHero'
import ServiceStats from '@/components/service/ServiceStats'
import ServiceProcess from '@/components/service/ServiceProcess'
import ServiceCities from '@/components/service/ServiceCities'
import ServiceCTA from '@/components/service/ServiceCTA'

export const metadata = {
  title: 'Analytics & Reporting for Real Estate | DMR Media',
  description: 'Data-driven insights and transparent reporting to track campaign performance and optimize results for luxury real estate professionals.',
}

export default function AnalyticsReportingPage() {
  const topCities = [
    { name: 'New York', state: 'NY', slug: 'new-york-ny', image: '/images/Cities/NewYork.jpeg' },
    { name: 'Los Angeles', state: 'CA', slug: 'los-angeles-ca', image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg' },
    { name: 'Chicago', state: 'IL', slug: 'chicago-il', image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg' },
    { name: 'Houston', state: 'TX', slug: 'houston-tx', image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg' },
    { name: 'Phoenix', state: 'AZ', slug: 'phoenix-az', image: '/images/Cities/phoenix-arizona-state-capitol-2025-03-13-12-59-21-utc.jpg' },
    {
      name: 'All Other Cities',
      state: 'USA',
      slug: '#contact',
      image: '/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg',
      subtitle: 'Let’s review your dashboards →',
    },
  ]

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <ServiceHero
        eyebrow="Analytics & Reporting"
        title="Transparent dashboards for every decision."
        description="We turn campaign data into crisp insights, making it easy to see what’s working—and where to optimize next."
        image="/images/StockHomes/a-backyard-with-a-swimming-pool-hot-tub-and-pati-2025-02-10-06-23-51-utc.jpg"
        actions={[
          { label: 'Request a Demo', href: '#contact' },
          { label: 'See the Workflow', href: '#how-it-works', variant: 'secondary' },
        ]}
      />

      <ServiceStats
        heading="Reporting that keeps your team synchronized."
        stats={[
          { value: 'Weekly', label: 'Report cadence', description: 'Concise, actionable updates in your inbox every week.' },
          { value: '50+', label: 'Metrics monitored', description: 'From traffic and conversions to ROI across every channel.' },
          { value: '100%', label: 'Transparency', description: 'Live dashboards with nothing hidden or summarized away.' },
        ]}
      />

      <ServiceProcess
        id="how-it-works"
        heading="How we deliver clarity across your marketing stack."
        description="Designed to keep leadership, marketing, and sales on the same page."
        steps={[
          {
            title: 'Dashboard Architecture',
            description:
              'We build custom Looker Studio dashboards tied into search, paid, social, CRM, and offline touchpoints so you never chase numbers.',
          },
          {
            title: 'Live Monitoring',
            description:
              'Real-time access to traffic, lead flow, CPL, and conversion ratios—across markets, listings, and channels in one place.',
          },
          {
            title: 'Weekly Narratives',
            description:
              'We interpret the data for you, highlighting wins, watch items, and the exact adjustments we’re making next.',
          },
          {
            title: 'Optimization Roadmaps',
            description:
              'Quarterly deep dives that surface growth opportunities and budget shifts to keep momentum compounding.',
          },
        ]}
      />

      <Testimonials />

      <ServiceCities
        heading="Markets where our analytics programs run."
        description="Each dashboard is tuned to the nuances of its metro—price points, competition, and buyer behavior."
        cities={topCities.map((city) => ({
          ...city,
          slug: city.slug.startsWith('#') ? city.slug : `/analytics-reporting/${city.slug}`,
        }))}
      />

      <ServiceCTA
        heading="Ready for reporting that actually drives action?"
        description="We’ll walk you through a sample dashboard, share the metrics that matter for your goals, and outline implementation."
        primaryAction={{ label: 'Book a Strategy Call', href: '#contact' }}
        secondaryAction={{ label: 'View All Services', href: '/services' }}
      />

      <div id="contact">
        <ContactForm />
      </div>
    </div>
  )
}

