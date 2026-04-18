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
    searchIntent: string;
    uxFocus: string;
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
    searchIntent: 'Co-op / condo board + line-level keywords',
    uxFocus: 'Disclosures, floorplans, comparable line clarity',
    marketType: 'Coastal gateway — co-op and condo density',
    image: '/images/Cities/NewYork.jpeg',
  },
  'los-angeles-ca': {
    name: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9M',
    medianHomePrice: '$890K metro reference',
    searchIntent: 'View, privacy, and celebrity-adjacent corridors',
    uxFocus: 'Daylight media, indoor-outdoor story, parking truth',
    marketType: 'High-rise coastal and hillside inventory',
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
  },
  'chicago-il': {
    name: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    population: '2.7M',
    medianHomePrice: '$310K metro reference',
    searchIntent: 'Lakefront towers, neighborhood micro-areas',
    uxFocus: 'Lake views, assessments, transit access proof',
    marketType: 'Lakefront vertical and new infill',
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
  },
  'houston-tx': {
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2.3M',
    medianHomePrice: '$280K metro reference',
    searchIntent: 'Gated high-rise and medical corridor demand',
    uxFocus: 'Square footage truth, garage, HOA fee framing',
    marketType: 'Urban core and Inner Loop luxury condos',
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
  },
  'phoenix-az': {
    name: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '1.7M',
    medianHomePrice: '$430K metro reference',
    searchIntent: 'Snowbird, golf, and resort-adjacent towers',
    uxFocus: 'Outdoor living, heat-season comfort, amenities',
    marketType: 'Sun Belt luxury vertical product',
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
    title: `Luxury Condo Website Design in ${location.name}, ${location.stateAbbr} | SEO & UX | DMR Media`,
    description: `Luxury condo websites in ${location.name}, ${location.stateAbbr}: technical SEO, schema, floorplan-led UX, and speed for high-rise and boutique buildings. Optional Google Ads and analytics.`,
    keywords: [
      `luxury condo website ${location.name}`,
      `condo website design ${location.stateAbbr}`,
      `high rise real estate website ${location.name}`,
      `${location.name} condominium SEO`,
    ].join(', '),
  };
}

export default async function LuxuryCondoLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  if (!location) notFound();

  const pageSlug = `/luxury-condo-websites/${locationSlug}`;

  return (
    <SEOWrapper
      slug={pageSlug}
      title={`Luxury Condo Website Design in ${location.name}, ${location.stateAbbr} | DMR Media`}
      description={`Luxury condo website design and SEO in ${location.name}: schema, Core Web Vitals, amenities and floorplan UX for serious buyers—documented methodology from published DMR case studies.`}
      schemaType="service"
    >
      <div className="min-h-screen bg-white">
        <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              src="/videos/las-vegas-usa-drone-shot-of-the-lakes-expensive-2025-12-17-15-57-33-utc.mov"
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
                  Luxury Condo Websites • {location.name}, {location.stateAbbr}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  High-rise digital that fits {location.name} buyer intent.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  We combine{' '}
                  <Link
                    href="/seo-optimization"
                    className="text-white underline underline-offset-4 decoration-white/70 hover:opacity-90"
                  >
                    search architecture
                  </Link>{' '}
                  with{' '}
                  <Link
                    href="/google-ads-management"
                    className="text-white underline underline-offset-4 decoration-white/70 hover:opacity-90"
                  >
                    paid demand
                  </Link>{' '}
                  when your tower needs qualified tours—not vanity traffic.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading={`${location.name} condo site focus areas`}
          stats={[
            {
              value: location.searchIntent,
              label: 'Search intent',
              description: 'How we shape page types, headings, and internal links for local condo queries.',
            },
            {
              value: location.uxFocus,
              label: 'UX proof',
              description: 'What buyers compare before they request a showing or a line sheet.',
            },
            {
              value: location.population,
              label: 'Metro depth',
              description: 'Audience scale for remarketing and co-broke amplification after launch.',
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
                  Why luxury condo websites fail (and how we fix it)
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl mb-6">
                  In {location.name}, buyers compare towers on their phones first. If your site hides floorplans,
                  obscures HOA reality, or loads like a 2012 template, you lose to a cleaner competitor—even when your
                  inventory is better. We fix structure first, then elevate creative.
                </p>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  Pair the build with{' '}
                  <Link href="/property-marketing" className="underline hover:opacity-70">
                    property marketing
                  </Link>{' '}
                  for listing bursts,{' '}
                  <Link href="/single-property-websites" className="underline hover:opacity-70">
                    single property websites
                  </Link>{' '}
                  for line-specific microsites, and{' '}
                  <Link href="/analytics-reporting" className="underline hover:opacity-70">
                    analytics
                  </Link>{' '}
                  for transparent performance reviews.
                </p>
              </div>
              <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 lg:order-2">
                <Image
                  src={location.image}
                  alt={`${location.name} skyline — luxury condo market`}
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
                  EEAT note
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Proof beats adjectives
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
                  We reference published outcomes—for example the Michael SEO transformation (21× impressions, +312%
                  organic sessions) and the Eagan Luxury engagement with documented sales volume—so you are not buying
                  claims off a landing page alone.
                </p>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  <Link href="/case-studies" className="underline hover:opacity-70">
                    Browse all case studies
                  </Link>
                  {' · '}
                  <Link href="/real-estate-seo-consultant" className="underline hover:opacity-70">
                    SEO consulting
                  </Link>
                  {' · '}
                  <Link href="/blog/best-10-luxury-real-estate-marketing-tactics-for-2026" className="underline hover:opacity-70">
                    Luxury marketing tactics (2026)
                  </Link>
                </p>
              </div>
            </article>
          </div>
        </section>

        <Testimonials />

        <section className="py-16 md:py-24 bg-white border-t border-[var(--color-ink-200)]">
          <div className="container-max">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  Case study — Michael
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Technical SEO & site quality at a luxury standard
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  The Michael rebuild is our clearest published example of fixing crawlability, schema, and performance
                  after a template failed—directly relevant when a condo site must rank for building and line intent.
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
                  alt="Michael SEO transformation — technical SEO results"
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
            href="/luxury-condo-websites"
            className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1"
          >
            Return to luxury condo websites overview
          </Link>
        </div>

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
