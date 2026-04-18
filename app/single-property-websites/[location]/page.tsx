import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ServiceStats from '@/components/service/ServiceStats';
import SEOWrapper from '@/components/SEOWrapper';

const locationData: Record<
  string,
  {
    name: string;
    state: string;
    stateAbbr: string;
    population: string;
    medianHomePrice: string;
    buyerBehavior: string;
    creativeTone: string;
    marketType: string;
    image: string;
  }
> = {
  'new-york-ny': {
    name: 'New York',
    state: 'New York',
    stateAbbr: 'NY',
    population: '8.3M',
    medianHomePrice: '$680K metro reference',
    buyerBehavior: 'Co-op board + disclosure heavy',
    creativeTone: 'Editorial restraint, floorplan clarity',
    marketType: 'Ultra-luxury co-op and condo corridor',
    image: '/images/Cities/NewYork.jpeg',
  },
  'los-angeles-ca': {
    name: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9M',
    medianHomePrice: '$890K metro reference',
    buyerBehavior: 'Lifestyle + privacy driven',
    creativeTone: 'Cinematic daylight, indoor-outdoor story',
    marketType: 'Coastal estates and view properties',
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
  },
  'chicago-il': {
    name: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    population: '2.7M',
    medianHomePrice: '$310K metro reference',
    buyerBehavior: 'Lakefront + move-up families',
    creativeTone: 'Architectural rigor, neighborhood proof',
    marketType: 'Lakefront single-family and new infill',
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
  },
  'houston-tx': {
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2.3M',
    medianHomePrice: '$280K metro reference',
    buyerBehavior: 'Estate scale + energy corridor executives',
    creativeTone: 'Spacious layouts, garage and land story',
    marketType: 'Estate homes and gated enclaves',
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
  },
  'phoenix-az': {
    name: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '1.7M',
    medianHomePrice: '$430K metro reference',
    buyerBehavior: 'Sun Belt relocation + second home',
    creativeTone: 'Resort amenity, desert modern palette',
    marketType: 'Golf, resort-adjacent, and new luxury clusters',
    image: '/images/Cities/phoenix-arizona-state-capitol-2025-03-13-12-59-21-utc.jpg',
  },
};

export async function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({ location }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  if (!location) return { title: 'Location Not Found' };

  return {
    title: `Single Property Websites in ${location.name}, ${location.stateAbbr} | DMR Media`,
    description: `Dedicated luxury listing microsites in ${location.name}, ${location.stateAbbr}. Fast, mobile-first property sites with lead capture—pair with SEO, Google Ads, and analytics.`,
  };
}

export default async function SinglePropertyLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  if (!location) notFound();

  const pageSlug = `/single-property-websites/${locationSlug}`;

  return (
    <SEOWrapper
      slug={pageSlug}
      title={`Single Property Websites in ${location.name}, ${location.stateAbbr} | DMR Media`}
      description={`Luxury listing microsites in ${location.name}: performance, schema, and capture paths built for high-ticket buyers—optionally amplified with Google Ads.`}
      schemaType="service"
    >
      <div className="min-h-screen bg-white">
        <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              src="/videos/aerial-view-of-luxury-california-home-2026-01-21-12-58-30-utc.mp4"
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
                  'linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.35) 40%, rgba(250,250,249,0.2) 70%, rgba(250,250,249,1) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 w-full pt-24 pb-20 flex justify-center">
            <div className="container-max">
              <div className="max-w-4xl mx-auto text-center">
                <span className="uppercase tracking-[0.2em] text-sm sm:text-base text-white font-serif block mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  Single Property Websites • {location.name}, {location.stateAbbr}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Listing microsites tuned for {location.name} buyers.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  One address, one narrative, one conversion path—paired with{' '}
                  <Link
                    href="/seo-optimization"
                    className="text-white underline underline-offset-4 decoration-white/70 hover:opacity-90"
                  >
                    search
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/google-ads-management"
                    className="text-white underline underline-offset-4 decoration-white/70 hover:opacity-90"
                  >
                    paid demand
                  </Link>{' '}
                  when you need velocity in {location.name}.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading={`${location.name} buyer context for property microsites.`}
          stats={[
            {
              value: location.creativeTone,
              label: 'Creative tone',
              description: 'How we adapt layout, typography, and media sequencing for local expectations.',
            },
            {
              value: location.buyerBehavior,
              label: 'Buyer behavior',
              description: 'What proof, disclosures, and neighborhood story we foreground on the page.',
            },
            {
              value: location.population,
              label: 'Reach modeling',
              description: 'Audience scale for optional paid remarketing and co-broke amplification.',
            },
          ]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  {location.marketType}
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Why a dedicated site wins in {location.name}.
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl mb-6">
                  In markets with {location.population} residents and a {location.medianHomePrice} reference band,
                  luxury buyers skim fast. A single-property microsite removes brokerage noise so photography,
                  floorplans, and proof of quality stay in focus.
                </p>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  Bundle creative with{' '}
                  <Link href="/property-marketing" className="underline hover:opacity-70">
                    property marketing
                  </Link>{' '}
                  when you want a coordinated site + paid burst, and measure outcomes in{' '}
                  <Link href="/analytics-reporting" className="underline hover:opacity-70">
                    analytics
                  </Link>
                  .
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
                  Build standards
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Performance, schema, capture
                </h3>
                <div className="space-y-4 mb-8">
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Structured data and clean IA so search engines understand the listing—not just the brokerage brand.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Lead routing and CRM-friendly forms so co-list partners and assistants see inquiries instantly.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Optional follow-on with our{' '}
                    <Link href="/real-estate-seo-consultant" className="underline hover:opacity-70">
                      SEO consulting
                    </Link>{' '}
                    program when the address needs a broader keyword footprint.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Hero media', 'Floorplans', 'Map + schools', 'Lead capture', 'Speed'].map((item) => (
                    <span
                      key={item}
                      className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32 last:mb-0">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  Further reading
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Blog resources
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
                  <Link href="/blog/google-ads-for-realtors" className="underline hover:opacity-70">
                    Google Ads for real estate
                  </Link>{' '}
                  and{' '}
                  <Link href="/blog/best-10-luxury-real-estate-marketing-tactics-for-2026" className="underline hover:opacity-70">
                    luxury marketing tactics
                  </Link>{' '}
                  mirror how we sequence paid and organic around a flagship listing.
                </p>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  <Link href="/real-estate-agent-website-samples" className="underline hover:opacity-70">
                    Website design portfolio
                  </Link>
                  {' · '}
                  <Link href="/luxury-development-marketing" className="underline hover:opacity-70">
                    Luxury development marketing
                  </Link>
                  {' · '}
                  <Link href="/blog" className="underline hover:opacity-70">
                    Blog
                  </Link>
                </p>
              </div>
              <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 lg:order-2">
                <Image
                  src={location.image}
                  alt={`${location.name} luxury listings`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </article>
          </div>
        </section>

        <Testimonials />

        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <div className="max-w-2xl mb-20 md:mb-28">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
                Proof from DMR client work
              </h2>
            </div>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  Case study — Michael
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Premium site performance & search visibility
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  The same technical discipline—speed, schema, crawl clarity—we apply when a single address needs to
                  rank and convert like a flagship brand.
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
                  alt="Michael SEO transformation case study"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Link>
            </article>
          </div>
        </section>

        <div className="flex justify-start container-max pb-12">
          <Link
            href="/single-property-websites"
            className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1"
          >
            Return to single property websites overview
          </Link>
        </div>

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
