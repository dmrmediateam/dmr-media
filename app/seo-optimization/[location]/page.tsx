import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ServiceStats from '@/components/service/ServiceStats';
import SEOWrapper from '@/components/SEOWrapper';

// Location data with SEO-optimized content and city images
const locationData: Record<
  string,
  {
    name: string;
    state: string;
    stateAbbr: string;
    population: string;
    medianHomePrice: string;
    marketType: string;
    topNeighborhoods: string[];
    keyFeatures: string[];
    image: string;
  }
> = {
  'new-york-ny': {
    name: 'New York',
    state: 'New York',
    stateAbbr: 'NY',
    population: '8.3M',
    medianHomePrice: '$680K',
    marketType: 'Ultra-Competitive Luxury Market',
    topNeighborhoods: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'],
    keyFeatures: ['High competition', 'Luxury market focus', 'International buyers'],
    image: '/images/Cities/NewYork.jpeg',
  },
  'los-angeles-ca': {
    name: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9M',
    medianHomePrice: '$890K',
    marketType: 'Premium Coastal Market',
    topNeighborhoods: ['Beverly Hills', 'Santa Monica', 'Hollywood', 'Venice', 'Malibu'],
    keyFeatures: ['Celebrity market', 'Coastal properties', 'High-end luxury'],
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
  },
  'chicago-il': {
    name: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    population: '2.7M',
    medianHomePrice: '$310K',
    marketType: 'Urban Professional Market',
    topNeighborhoods: ['Lincoln Park', 'Gold Coast', 'River North', 'Wicker Park', 'Loop'],
    keyFeatures: ['Urban luxury', 'Corporate relocations', 'Architectural significance'],
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
  },
  'houston-tx': {
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2.3M',
    medianHomePrice: '$280K',
    marketType: 'Growing Business Hub',
    topNeighborhoods: ['River Oaks', 'Memorial', 'The Heights', 'Montrose', 'Bellaire'],
    keyFeatures: ['Energy sector growth', 'Suburban expansion', 'No state income tax'],
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
  },
  'phoenix-az': {
    name: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '1.7M',
    medianHomePrice: '$430K',
    marketType: 'Fast-Growing Sun Belt Market',
    topNeighborhoods: ['Paradise Valley', 'Scottsdale', 'Arcadia', 'Biltmore', 'Camelback East'],
    keyFeatures: ['Rapid growth', 'Retirement destination', 'Desert luxury'],
    image: '/images/Cities/phoenix-arizona-state-capitol-2025-03-13-12-59-21-utc.jpg',
  },
};

export async function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({
    location,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];

  if (!location) {
    return {
      title: 'Location Not Found | DMR Media',
    };
  }

  return {
    title: `SEO Services in ${location.name}, ${location.stateAbbr} | Real Estate SEO | DMR Media`,
    description: `Expert SEO optimization for real estate professionals in ${location.name}, ${location.stateAbbr}. Dominate local search results and attract high-value clients in the ${location.name} market. ${location.population} population, ${location.medianHomePrice} median home price.`,
  };
}

export default async function LocationSEOPage({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];

  if (!location) {
    notFound();
  }

  return (
    <SEOWrapper slug={`/seo-optimization/${locationSlug}`}>
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
                  SEO • {location.name}, {location.stateAbbr}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Search visibility tailored for {location.name}.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  Our local SEO programs help luxury agents in {location.name} outrank competitors, win prime neighborhood keywords, and convert high-value buyers and sellers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading={`Key market metrics for ${location.name}.`}
          stats={[
            {
              value: location.population,
              label: 'Population',
              description: 'Upscale buyers actively searching for property insights and listings.',
            },
            {
              value: location.medianHomePrice,
              label: 'Median home value',
              description: 'SEO content tailored to high-net-worth audiences in your market.',
            },
            {
              value: location.marketType,
              label: 'Market profile',
              description: 'Strategy tuned to the nuances of local demand and competition.',
            },
          ]}
        />

        {/* Why strategic SEO matters — staggered layout */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  {location.marketType}
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Why strategic SEO matters in {location.name}.
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  {location.name}'s {location.marketType.toLowerCase()} demands visibility across every neighborhood search. Our programs deliver the authority your listings and brand need to stay ahead of competing brokers.
                </p>
              </div>
              <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 lg:order-2">
                <Image
                  src={location.image}
                  alt={`${location.name} skyline`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </article>

            {/* Key advantages + Neighborhood focus — staggered */}
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32">
              <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 lg:order-1">
                <Image
                  src={location.image}
                  alt={`${location.name} neighborhoods`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-2">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  Neighborhood focus
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Key advantages
                </h3>
                <div className="space-y-4 mb-8">
                  {location.keyFeatures.map((feature) => (
                    <p
                      key={feature}
                      className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]"
                    >
                      {feature}
                    </p>
                  ))}
                </div>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
                  We optimize individual listing and community pages for the neighborhoods where your buyers are already searching.
                </p>
                <div className="flex flex-wrap gap-3">
                  {location.topNeighborhoods.map((neighborhood) => (
                    <span
                      key={neighborhood}
                      className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Local results — staggered */}
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32 last:mb-0">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  What to expect
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Local results you can expect
                </h3>
                <div className="space-y-6">
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Ranking gains for high-value keywords like "{location.name.toLowerCase()} luxury homes" and neighborhood-specific searches.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Optimized Google Business Profiles that dominate the map pack across {location.name}'s prime areas.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Localized content strategy that answers relocation, investment, and lifestyle queries from affluent buyers.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Transparent reporting that shows exactly how organic demand is translating into pipeline growth.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 lg:order-2">
                <Image
                  src={location.image}
                  alt={`${location.name} real estate`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </article>
          </div>
        </section>

        <Testimonials />

        {/* Case study — staggered layout */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <div className="max-w-2xl mb-20 md:mb-28">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
                Recent success in {location.name}
              </h2>
            </div>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  21x Impressions
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Michael's SEO Success
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  21x impressions in 7.5 weeks—how we rebuilt Michael's traffic and pipeline.
                </p>
                <Link
                  href="/case-study/michael-seo-transformation"
                  className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                >
                  Read case study
                </Link>
              </div>
              <Link
                href="/case-study/michael-seo-transformation"
                className="group relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 lg:order-2"
              >
                <Image
                  src="/images/MichealTraffic.png"
                  alt="Michael's SEO Success — Google impressions growth"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Link>
            </article>

            {/* Local deliverables */}
            <div className="mt-24 md:mt-32 pt-16 border-t border-[var(--color-ink-200)]">
              <h3 className="text-xl sm:text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
                Local deliverables
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b border-[var(--color-ink-200)] pb-6">
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Neighborhood landing pages designed for discovery and lead capture.
                  </p>
                </div>
                <div className="border-b border-[var(--color-ink-200)] pb-6">
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Google Business Profile optimization with review generation guidance.
                  </p>
                </div>
                <div className="border-b border-[var(--color-ink-200)] pb-6">
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Monthly content calendar covering market reports, relocation guides, and listing spotlights.
                  </p>
                </div>
                <div className="border-b border-[var(--color-ink-200)] pb-6">
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Weekly keyword ranking and organic traffic dashboards for your leadership team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-start container-max pb-12">
          <Link
            href="/seo-optimization"
            className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1"
          >
            Return to SEO overview
          </Link>
        </div>

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
