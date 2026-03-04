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
  title: 'Property Marketing for Real Estate | DMR Media',
  description:
    'Showcase premium listings with sophisticated digital marketing campaigns that attract qualified buyers and maximize property exposure. 40% faster sales, 250K+ listing impressions, 95% client satisfaction.',
  keywords:
    'property marketing, luxury property marketing, real estate listing marketing, property launch campaigns, real estate digital marketing, listing promotion, property advertising, luxury real estate marketing',
  alternates: {
    canonical: 'https://www.dmrmedia.org/property-marketing',
  },
  openGraph: {
    title: 'Property Marketing for Real Estate | DMR Media',
    description:
      'Showcase premium listings with sophisticated digital marketing campaigns that attract qualified buyers and maximize property exposure.',
    url: 'https://www.dmrmedia.org/property-marketing',
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Marketing for Real Estate | DMR Media',
    description:
      'Showcase premium listings with sophisticated digital marketing campaigns that attract qualified buyers and maximize property exposure.',
  },
};

const CASE_STUDIES = [
  {
    id: 'willow-brook-realty',
    subheading: '2 Clients / 3 Weeks',
    title: "Willow Brook's Listing Success",
    description:
      'From zero visibility to 46 leads and 2 new clients in 3 weeks. Comprehensive property marketing across SEO, Google Ads, and targeted campaigns.',
    image: '/images/Cities/NewHampshire.jpg',
    imageRight: true,
  },
  {
    id: 'eagan-luxury-real-estate',
    subheading: 'Ongoing',
    title: "Eagan's Brand Consolidation",
    description:
      'Consolidated multiple fragmented websites into a single, powerful brand presence with polished listing experiences and retargeting campaigns.',
    image: '/images/Cities/Stpet.jpg',
    imageRight: false,
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
    subtitle: "Let's discuss your market →",
  },
];

export default function PropertyMarketingPage() {
  return (
    <SEOWrapper slug="/property-marketing">
      <div className="min-h-screen bg-white">
        {/* Hero with background video */}
        <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              src="/videos/top-view-of-luxury-american-houses-near-the-lake-i-2025-12-17-10-52-23-utc.mov"
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
                  Property Marketing
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Cinematic launch plans for exceptional listings.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  We create polished visual campaigns, distribute them across premium channels, and keep buyers engaged until the closing table.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading="Campaign outcomes our partners rely on."
          stats={[
            {
              value: '40%',
              label: 'Faster sales',
              description: 'Average reduction in days on market for featured listings.',
            },
            {
              value: '250K+',
              label: 'Listing impressions',
              description: 'High-intent views across search, social, and email.',
            },
            {
              value: '95%',
              label: 'Client satisfaction',
              description: 'Consistent 5-star ratings from teams and developers.',
            },
          ]}
        />

        {/* Case studies — Sotheby's staggered layout */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <div className="max-w-2xl mb-20 md:mb-28">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
                Listing campaigns that accelerate closings.
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                Cinematic property marketing that attracts qualified buyers and drives faster sales.
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
                      alt={`${study.title} — property marketing case study`}
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

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
