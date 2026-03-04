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
    avgCostPerClick: string;
    competitionLevel: string;
    marketType: string;
    image: string;
  }
> = {
  'new-york-ny': {
    name: 'New York',
    state: 'New York',
    stateAbbr: 'NY',
    population: '8.3M',
    medianHomePrice: '$680K',
    avgCostPerClick: '$4.50',
    competitionLevel: 'Very High',
    marketType: 'Ultra-competitive metropolitan market',
    image: '/images/Cities/NewYork.jpeg',
  },
  'los-angeles-ca': {
    name: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9M',
    medianHomePrice: '$890K',
    avgCostPerClick: '$5.20',
    competitionLevel: 'Very High',
    marketType: 'Coastal luxury market',
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
  },
  'chicago-il': {
    name: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    population: '2.7M',
    medianHomePrice: '$310K',
    avgCostPerClick: '$3.10',
    competitionLevel: 'High',
    marketType: 'Urban professional market',
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
  },
  'houston-tx': {
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2.3M',
    medianHomePrice: '$280K',
    avgCostPerClick: '$2.80',
    competitionLevel: 'Medium',
    marketType: 'High-growth business market',
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
  },
  'phoenix-az': {
    name: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '1.7M',
    medianHomePrice: '$430K',
    avgCostPerClick: '$3.40',
    competitionLevel: 'Medium-High',
    marketType: 'Fast-growing sun belt market',
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
    title: `Google Ads Management in ${location.name}, ${location.stateAbbr} | Real Estate PPC | DMR Media`,
    description: `Expert Google Ads management for real estate in ${location.name}, ${location.stateAbbr}. Generate qualified leads with targeted PPC campaigns. ${location.population} population, ${location.medianHomePrice} median price.`,
  };
}

export default async function LocationGoogleAdsPage({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  if (!location) notFound();

  return (
    <SEOWrapper slug={`/google-ads-management/${locationSlug}`}>
      <div className="min-h-screen bg-white">
        {/* Hero with background video */}
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
                  Google Ads • {location.name}, {location.stateAbbr}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  High-intent lead gen for {location.name}.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  We run precision Google Ads that reach affluent buyers in {location.name}, keeping your team supplied with deal-ready conversations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading={`Paid search benchmarks in ${location.name}.`}
          stats={[
            {
              value: location.avgCostPerClick,
              label: 'Avg CPC',
              description: 'What to expect when competing for premium buyer searches.',
            },
            {
              value: location.competitionLevel,
              label: 'Market competition',
              description: "How aggressive we'll need to be with bidding and creative.",
            },
            {
              value: location.population,
              label: 'Audience size',
              description: 'Targeted impressions across affluent neighborhoods.',
            },
          ]}
        />

        {/* Why Google Ads is essential — staggered layout */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  {location.marketType}
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Why Google Ads is essential in {location.name}.
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  With {location.population} residents and a median home value of {location.medianHomePrice}, the {location.marketType?.toLowerCase() ?? 'local'} market rewards brands that show up first—at the exact moment buyers start searching.
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

            {/* Campaign approach + Creative — staggered */}
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
                  Campaign approach
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Creative and landing experiences
                </h3>
                <div className="space-y-4 mb-8">
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Precision keyword targeting for luxury listings, relocation queries, and investment searches.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Geo-fenced campaigns that keep spend focused on {location.name}'s highest-value neighborhoods.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Retargeting flows that nurture buyers until they book a showing or request a consultation.
                  </p>
                </div>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
                  We adapt ad copy, creatives, and landing experiences to the tone and expectations of {location.name}'s buyers—from concise Manhattan co-op campaigns to lifestyle-focused Scottsdale estates.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Search + Maps', 'Display Remarketing', 'Landing Pages', 'Lead Forms & CRM'].map((item) => (
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

            {/* Neighborhood focus + Reporting — staggered */}
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32 last:mb-0">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  What to expect
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Neighborhood focus & reporting
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
                  We segment campaigns by neighborhood and price band so budgets follow intent—not broad zip codes.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Luxury buyers', 'Relocation', 'Investors', 'Developments', 'New construction'].map((item) => (
                    <span
                      key={item}
                      className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Weekly reports show spend, CPL, and lead quality by campaign so you know exactly how ads are supporting your pipeline.
                </p>
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
                Recent campaign performance in {location.name}
              </h2>
            </div>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  3x Lead Generation
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Jade's Paid Media Success
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  From inconsistent lead flow to a 3x lift in qualified conversations—how a paid media overhaul with Google Ads transformed Jade's pipeline.
                </p>
                <Link
                  href="/case-study/jade-legendary-real-estate"
                  className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                >
                  Read case study
                </Link>
              </div>
              <Link
                href="/case-study/jade-legendary-real-estate"
                className="group relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 lg:order-2"
              >
                <Image
                  src="/images/JadeCRM.png"
                  alt="Jade's Paid Media Success — lead generation"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Link>
            </article>

            {/* Performance stats */}
            <div className="mt-24 md:mt-32 pt-16 border-t border-[var(--color-ink-200)]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="border-b border-[var(--color-ink-200)] pb-4">
                  <span className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] block mb-3">
                    38
                  </span>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Average qualified leads generated per month across flagship campaigns.
                  </p>
                </div>
                <div className="border-b border-[var(--color-ink-200)] pb-4">
                  <span className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] block mb-3">
                    65%
                  </span>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Lower cost per lead compared with prior agency performance.
                  </p>
                </div>
                <div className="border-b border-[var(--color-ink-200)] pb-4">
                  <span className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] block mb-3">
                    1.8x
                  </span>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Increase in booked appointments driven by retargeting and lead nurture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-start container-max pb-12">
          <Link
            href="/google-ads-management"
            className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1"
          >
            Return to Google Ads overview
          </Link>
        </div>

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
