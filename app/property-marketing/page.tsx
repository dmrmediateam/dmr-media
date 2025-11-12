import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'
import ServiceHero from '@/components/service/ServiceHero'
import ServiceStats from '@/components/service/ServiceStats'
import ServiceProcess from '@/components/service/ServiceProcess'
import ServiceCities from '@/components/service/ServiceCities'
import ServiceCTA from '@/components/service/ServiceCTA'

export const metadata = {
  title: 'Property Marketing for Real Estate | DMR Media',
  description:
    'Showcase premium listings with sophisticated digital marketing campaigns that attract qualified buyers and maximize property exposure.',
}

export default function PropertyMarketingPage() {
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
      subtitle: 'Let’s discuss your market →',
    },
  ]

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <ServiceHero
        eyebrow="Property Marketing"
        title="Cinematic launch plans for exceptional listings."
        description="We create polished visual campaigns, distribute them across premium channels, and keep buyers engaged until the closing table."
        image="/images/StockHomes/studio-apartment-interior-with-wooden-furniture-2025-02-09-23-29-43-utc.jpg"
        actions={[
          { label: 'Launch a Listing', href: '#contact' },
          { label: 'See the Process', href: '#how-it-works', variant: 'secondary' },
        ]}
      />

      <ServiceStats
        heading="Campaign outcomes our partners rely on."
        stats={[
          { value: '40%', label: 'Faster sales', description: 'Average reduction in days on market for featured listings.' },
          { value: '250K+', label: 'Listing impressions', description: 'High-intent views across search, social, and email.' },
          { value: '95%', label: 'Client satisfaction', description: 'Consistent 5-star ratings from teams and developers.' },
        ]}
      />

      <ServiceProcess
        id="how-it-works"
        heading="How we market luxury properties end-to-end."
        description="A detail-first workflow that turns launch days into momentum."
        steps={[
          {
            title: 'Production & Storyboarding',
            description:
              'We organize cinematic photo, video, and copy assets that highlight the story, finishes, and lifestyle behind every property.',
          },
          {
            title: 'Channel Distribution',
            description:
              'MLS, social, email, programmatic, and partner placements—controlled messaging everywhere qualified buyers spend time.',
          },
          {
            title: 'Targeted Promotion',
            description:
              'Paid social, Google Ads, retargeting, and custom audiences ensure your listing reaches the right buyers quickly.',
          },
          {
            title: 'Analytics & Reporting',
            description:
              'Real-time dashboards and weekly updates keep your team informed, nimble, and ready for every showing.',
          },
        ]}
      />

      <Testimonials />

      <ServiceCities
        heading="Launch programs running in these cities."
        description="High-performance listing campaigns tailored to the nuances of each luxury market."
        cities={topCities.map((city) => ({
          ...city,
          slug: city.slug.startsWith('#') ? city.slug : `/property-marketing/${city.slug}`,
        }))}
      />

      <ServiceCTA
        heading="Ready to elevate your next listing launch?"
        description="Let’s map out the visuals, distribution plan, and metrics before the home ever hits the market."
        primaryAction={{ label: 'Book a Strategy Call', href: '#contact' }}
        secondaryAction={{ label: 'View All Services', href: '/services' }}
      />

      <div id="contact">
        <ContactForm />
      </div>
    </div>
  )
}

