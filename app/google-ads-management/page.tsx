import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'
import ServiceHero from '@/components/service/ServiceHero'
import ServiceStats from '@/components/service/ServiceStats'
import ServiceCaseStudies from '@/components/service/ServiceCaseStudies'
import ServiceProcess from '@/components/service/ServiceProcess'
import ServiceCities from '@/components/service/ServiceCities'
import ServiceCTA from '@/components/service/ServiceCTA'

export const metadata = {
  title: 'Google Ads Management for Real Estate | DMR Media',
  description:
    'Maximize ROI with precision-targeted Google Ads campaigns designed to reach affluent homebuyers and sellers in luxury real estate markets.',
}

export default function GoogleAdsPage() {
  const caseStudies = [
    {
      id: 'jade-legendary-real-estate',
      title: "Jade's Lead Generation Success",
      client: 'Jade Goodhue',
      company: 'Legendary Real Services',
      result: '3x Lead Generation',
      description:
        "From inconsistent lead flow to a 3x lift in qualified conversations—how a paid media overhaul transformed Jade's pipeline.",
      image: '/images/JadeCRM.png',
    },
  ]

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
      subtitle: 'Talk to us about your market →',
    },
  ]

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <ServiceHero
        eyebrow="Google Ads Management"
        title="Paid media engineered for the luxury buyer journey."
        description="We plan, launch, and iterate Google Ads systems that surface your properties to affluent buyers and keep high-intent leads flowing to your team."
        image="/images/StockHomes/spacious-living-room-with-staircase-in-residence-2025-10-10-15-17-44-utc (1).jpg"
        actions={[
          { label: 'Launch a Campaign', href: '#contact' },
          { label: 'See the Process', href: '#how-it-works', variant: 'secondary' },
        ]}
      />

      <ServiceStats
        heading="Performance benchmarks you can plan around."
        stats={[
          { value: '450%', label: 'Average ROI', description: 'Across established campaigns in luxury metros.' },
          { value: '3-5x', label: 'Lead volume', description: 'Increase in qualified inquiries in the first 60 days.' },
          { value: '$2.50', label: 'Cost per lead', description: 'Typical CPL across premium property campaigns.' },
        ]}
      />

      <ServiceCaseStudies
        heading="Campaigns that convert into appointments."
        description="Managed budgets, calibrated copy, and polished landing experiences that nurture discerning buyers."
        studies={caseStudies}
      />

      <ServiceProcess
        id="how-it-works"
        heading="How we structure high-performing Google Ads."
        description="A controlled four-stage rollout, tuned specifically for luxury real estate teams."
        steps={[
          {
            title: 'Strategy & Targeting',
            description:
              'We define buyer personas, geographic focus, budget splits, and keyword universes to ensure every impression is intentional.',
          },
          {
            title: 'Campaign Production',
            description:
              'We craft copy, creative, and landing experiences that reflect your brand and speak to high-net-worth prospects.',
          },
          {
            title: 'Spend & Bid Optimization',
            description:
              'Daily budget pacing, smart bidding, and audience adjustments keep cost-per-lead on target while maximizing exposure.',
          },
          {
            title: 'Testing & Scaling',
            description:
              'We constantly test headlines, extensions, audiences, and funnels—then scale the winners to compound ROI.',
          },
        ]}
      />

      <Testimonials />

      <ServiceCities
        heading="Markets where we manage paid media."
        description="From dense metros to fast-growing Sun Belt cities, we tailor targeting to the neighborhoods that matter."
        cities={topCities.map((city) => ({
          ...city,
          slug: city.slug.startsWith('#') ? city.slug : `/google-ads-management/${city.slug}`,
        }))}
      />

      <ServiceCTA
        heading="Ready to scale your Google Ads with a specialist partner?"
        description="We’ll audit your current account (or build from zero), model expected results, and give you a clear ramp plan."
        primaryAction={{ label: 'Book a Strategy Call', href: '#contact' }}
        secondaryAction={{ label: 'View All Services', href: '/services' }}
      />

      <div id="contact">
        <ContactForm />
      </div>
    </div>
  )
}

