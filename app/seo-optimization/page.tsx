import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ServiceStats from '@/components/service/ServiceStats';
import ServiceProcess from '@/components/service/ServiceProcess';
import ServiceCities from '@/components/service/ServiceCities';
import SEOWrapper from '@/components/SEOWrapper';

export const metadata: Metadata = {
  title: 'SEO Optimization for Real Estate | DMR Media',
  description:
    'Dominate local search results and attract high-value clients with strategic SEO campaigns tailored for luxury real estate professionals. 300%+ traffic lift, #1 local rankings, 2-3x lead volume increase.',
  keywords:
    'real estate SEO, luxury real estate SEO, local SEO for real estate, real estate search engine optimization, property SEO, real estate website SEO, luxury property SEO, real estate SEO services',
  alternates: {
    canonical: 'https://www.dmrmedia.org/seo-optimization',
  },
  openGraph: {
    title: 'SEO Optimization for Real Estate | DMR Media',
    description:
      'Dominate local search results and attract high-value clients with strategic SEO campaigns tailored for luxury real estate professionals.',
    url: 'https://www.dmrmedia.org/seo-optimization',
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Optimization for Real Estate | DMR Media',
    description:
      'Dominate local search results and attract high-value clients with strategic SEO campaigns tailored for luxury real estate professionals.',
  },
};

const CASE_STUDIES = [
  {
    id: 'michael-seo-transformation',
    subheading: '21x Impressions',
    title: "Michael's SEO Success",
    description:
      "From abandoned SEO to 21x impressions growth—how we rebuilt Michael's traffic and pipeline in 7.5 weeks.",
    image: '/images/MichealTraffic.png',
    imageRight: false,
  },
  {
    id: 'marquis-farwell-group',
    subheading: '19x Daily Clicks',
    title: "Marquis + Farwell's Organic Growth",
    description:
      'Transformed organic visibility in Sonoma County, growing from 2 clicks per day to 38 clicks per day while generating qualified buyer leads directly from search.',
    image: '/images/Cities/Sonoma.jpg',
    imageRight: true,
  },
];

const topCities = [
  { name: 'New York', state: 'NY', slug: 'new-york-ny', image: '/images/Cities/NewYork.jpeg' },
  {
    name: 'Los Angeles',
    state: 'CA',
    slug: 'los-angeles-ca',
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
  },
  {
    name: 'Chicago',
    state: 'IL',
    slug: 'chicago-il',
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
  },
  {
    name: 'Houston',
    state: 'TX',
    slug: 'houston-tx',
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
  },
  {
    name: 'Phoenix',
    state: 'AZ',
    slug: 'phoenix-az',
    image: '/images/Cities/phoenix-arizona-state-capitol-2025-03-13-12-59-21-utc.jpg',
  },
  {
    name: 'All Other Cities',
    state: 'USA',
    slug: '#contact',
    image: '/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg',
    subtitle: 'Contact us about your market →',
  },
];

export default function SEOOptimizationPage() {
  return (
    <SEOWrapper slug="/seo-optimization">
      <div className="min-h-screen bg-white">
        {/* Hero with background video */}
        <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              src="/videos/view-from-above-of-wealthy-neighborhood-on-bird-ke-2025-12-17-07-23-00-utc.mov"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 z-[1]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(15,15,15,0.5) 0%, rgba(15,15,15,0.3) 40%, rgba(250,250,249,0.2) 70%, rgba(250,250,249,1) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 w-full pt-24 pb-20 flex justify-center">
            <div className="container-max">
              <div className="max-w-4xl mx-auto text-center">
                <span className="uppercase tracking-[0.2em] text-sm sm:text-base text-white font-serif block mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  SEO Optimization
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Precision search frameworks for luxury real estate.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  We architect SEO systems that align with your brand, spotlight high-value listings, and compound organic demand month after month.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading="Proven gains across premium markets."
          stats={[
            {
              value: '300%+',
              label: 'Traffic lift',
              description: 'Average organic growth in the first 90 days.',
            },
            {
              value: '#1',
              label: 'Local rankings',
              description: 'For the neighborhood keywords that convert.',
            },
            {
              value: '2-3x',
              label: 'Lead volume',
              description: 'Consistent lift across luxury teams and brokers.',
            },
          ]}
        />

        {/* Case studies — Sotheby's staggered layout */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <div className="max-w-2xl mb-20 md:mb-28">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
                SEO programs that translate into closings.
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                Every engagement is engineered around measurable traffic, lead, and revenue goals.
              </p>
            </div>

            <div className="space-y-0">
              {CASE_STUDIES.map((study) => (
                <article
                  key={study.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32 last:mb-0"
                >
                  <div
                    className={`flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 ${
                      study.imageRight ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                      {study.subheading}
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                      {study.title}
                    </h3>
                    <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                      {study.description}
                    </p>
                    <Link
                      href={`/case-study/${study.id}`}
                      className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                    >
                      Read case study
                    </Link>
                  </div>
                  <Link
                    href={`/case-study/${study.id}`}
                    className={`group relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 ${
                      study.imageRight ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <Image
                      src={study.image}
                      alt={`${study.title} — SEO case study`}
                      fill
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

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

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
