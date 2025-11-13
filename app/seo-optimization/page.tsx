import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'
import ServiceHero from '@/components/service/ServiceHero'
import ServiceStats from '@/components/service/ServiceStats'
import ServiceCaseStudies from '@/components/service/ServiceCaseStudies'
import ServiceProcess from '@/components/service/ServiceProcess'
import ServiceCities from '@/components/service/ServiceCities'
import ServiceCTA from '@/components/service/ServiceCTA'

export const metadata = {
  title: 'SEO Optimization for Real Estate | DMR Media',
  description: 'Dominate local search results and attract high-value clients with strategic SEO campaigns tailored for luxury real estate professionals.',
}

export default function SEOOptimizationPage() {
  const caseStudies = [
    {
      id: 'rick-visions-first-realty',
      title: "Rick's SEO Transformation",
      client: 'Rick Grueble',
      company: 'Visions First Realty',
      result: '2-3 Leads/Day',
      description:
        "From wrong keywords to qualified leads—how we rebuilt Rick's SEO strategy and turned his website into a daily lead engine.",
      image: '/images/RickAfter.png',
    },
    {
      id: 'michael-seo-transformation',
      title: "Michael's SEO Success",
      client: 'Michael',
      company: 'Real Estate Professional',
      result: '21x Impressions',
      description:
        "From abandoned SEO to 21x impressions growth—how we rebuilt Michael's traffic and pipeline in 7.5 weeks.",
      image: '/images/MichealTraffic.png',
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
      subtitle: 'Contact us about your market →',
    },
  ]

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <ServiceHero
        eyebrow="SEO Optimization"
        title="Precision search frameworks for luxury real estate."
        description="We architect SEO systems that align with your brand, spotlight high-value listings, and compound organic demand month after month."
        image="/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg"
        actions={[
          { label: 'Start a Project', href: '#contact' },
          { label: 'How it Works', href: '#how-it-works', variant: 'secondary' },
        ]}
      />

      <ServiceStats
        heading="Proven gains across premium markets."
        stats={[
          { value: '300%+', label: 'Traffic lift', description: 'Average organic growth in the first 90 days.' },
          { value: '#1', label: 'Local rankings', description: 'For the neighborhood keywords that convert.' },
          { value: '2-3x', label: 'Lead volume', description: 'Consistent lift across luxury teams and brokers.' },
        ]}
      />

      <ServiceCaseStudies
        heading="SEO programs that translate into closings."
        description="Every engagement is engineered around measurable traffic, lead, and revenue goals."
        studies={caseStudies}
      />

      <ServiceProcess
      id="how-it-works"
        heading="How we build a search engine for your brand."
        description="A four-phase framework tuned specifically for luxury real estate markets."
        steps={[
          {
            title: 'Audit & Strategy',
            description:
              'We surface the gaps in your current footprint, profile competitors, and map the keywords, content, and technical upgrades required.',
          },
          {
            title: 'On-Page Architecture',
            description:
              'We rebuild page structure, schema, meta frameworks, and internal linking so search engines can fully understand (and reward) your site.',
          },
          {
            title: 'Authority Content',
            description:
              'We produce localized, luxury-specific content that elevates your brand, captures long-tail demand, and supports polished listing funnels.',
          },
          {
            title: 'Iteration & Reporting',
            description:
              'Weekly analysis, dashboards, and refinements keep rankings climbing—and leadership informed—without adding to your workload.',
          },
        ]}
      />

      <Testimonials />

      <ServiceCities
        heading="Cities where we run SEO programs."
        description="High-competition metros where our frameworks are already driving organic deal flow."
        cities={topCities.map((city) => ({
          ...city,
          slug: city.slug.startsWith('#') ? city.slug : `/seo-optimization/${city.slug}`,
        }))}
      />

      <ServiceCTA
        heading="Ready to turn search into a predictable growth channel?"
        description="We’ll evaluate your current site, share the specific gains available in your market, and outline the exact roadmap to get there."
        primaryAction={{ label: 'Book a Strategy Call', href: '#contact' }}
        secondaryAction={{ label: 'View All Services', href: '/services' }}
      />

      <div id="contact">
        <ContactForm />
      </div>
    </div>
  )
}
