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
    channelEdge: string;
    riskNote: string;
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
    channelEdge: 'High-intent long-tail + map pack competition',
    riskNote: 'CPL can climb fast—creative and LP quality decide efficiency',
    marketType: 'Gateway luxury demand',
    image: '/images/Cities/NewYork.jpeg',
  },
  'los-angeles-ca': {
    name: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9M',
    medianHomePrice: '$890K metro reference',
    channelEdge: 'Lifestyle queries + video-first discovery',
    riskNote: 'Broad geo wastes spend—micro-neighborhood funnels win',
    marketType: 'Coastal luxury and relocation',
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
  },
  'chicago-il': {
    name: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    population: '2.7M',
    medianHomePrice: '$310K metro reference',
    channelEdge: 'Lakefront micro-markets + commute intent',
    riskNote: 'Seasonality in search—pacing matters',
    marketType: 'Urban professional and lakefront buyers',
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
  },
  'houston-tx': {
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2.3M',
    medianHomePrice: '$280K metro reference',
    channelEdge: 'Estate + new-build demand corridors',
    riskNote: 'Watch match types—avoid bleed into non-luxury terms',
    marketType: 'High-growth luxury pockets',
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
  },
  'phoenix-az': {
    name: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '1.7M',
    medianHomePrice: '$430K metro reference',
    channelEdge: 'Relocation + second-home surges',
    riskNote: 'Heat-season creative and landing speed affect conversion',
    marketType: 'Sun Belt inbound demand',
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
    title: `Real Estate Lead Generation in ${location.name}, ${location.stateAbbr} | DMR Media`,
    description: `Luxury real estate lead generation in ${location.name}: SEO, Google Ads, landing discipline, and reporting—grounded in published case studies and transparent channel attribution.`,
    keywords: [
      `real estate lead generation ${location.name}`,
      `luxury realtor leads ${location.stateAbbr}`,
      `Google Ads real estate ${location.name}`,
    ].join(', '),
  };
}

export default async function RealEstateLeadGenerationLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  if (!location) notFound();

  const pageSlug = `/real-estate-lead-generation/${locationSlug}`;

  return (
    <SEOWrapper
      slug={pageSlug}
      title={`Real Estate Lead Generation in ${location.name}, ${location.stateAbbr} | DMR Media`}
      description={`Inbound lead systems for ${location.name}: paid + organic, capture, and analytics—aligned with documented DMR case studies and luxury buyer behavior in ${location.stateAbbr}.`}
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
                  Real Estate Lead Generation • {location.name}, {location.stateAbbr}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Inbound systems calibrated for {location.name}.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  Pair{' '}
                  <Link
                    href="/seo-optimization"
                    className="text-white underline underline-offset-4 decoration-white/70 hover:opacity-90"
                  >
                    SEO
                  </Link>{' '}
                  with{' '}
                  <Link
                    href="/google-ads-management"
                    className="text-white underline underline-offset-4 decoration-white/70 hover:opacity-90"
                  >
                    Google Ads
                  </Link>{' '}
                  so spend chases qualified intent—not generic metro clicks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading={`${location.name} lead gen realities`}
          stats={[
            {
              value: location.channelEdge,
              label: 'Channel edge',
              description: 'Where we lean harder on organic vs paid for your submarket.',
            },
            {
              value: location.riskNote,
              label: 'Efficiency risk',
              description: 'What we watch weekly so CPL stays aligned with luxury economics.',
            },
            {
              value: location.population,
              label: 'Audience depth',
              description: 'Reach modeling for remarketing and lookalike expansion after baseline leads flow.',
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
                  Why {location.name} rewards systems—not silos.
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl mb-6">
                  With {location.population} residents and a {location.medianHomePrice} reference band, luxury buyers
                  compare agents and inventory fast. Lead generation wins when search, ads, landing pages, and follow-up
                  tell the same story—and when reporting shows which step actually books tours.
                </p>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  Measure everything in{' '}
                  <Link href="/analytics-reporting" className="underline hover:opacity-70">
                    analytics & reporting
                  </Link>
                  ; tighten capture with{' '}
                  <Link href="/property-marketing" className="underline hover:opacity-70">
                    property marketing
                  </Link>{' '}
                  when listings need their own demand bursts.
                </p>
              </div>
              <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 lg:order-2">
                <Image
                  src={location.image}
                  alt={`${location.name} — luxury real estate market`}
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
                  alt={`${location.name}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-2">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  EEAT
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Proof you can trace to published work
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
                  Willow Brook’s documented inbound lift and Jade’s pipeline multiplier are both on the national
                  overview—open the case studies for channel detail, not cherry-picked screenshots.
                </p>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  <Link href="/case-study/willow-brook-realty" className="underline hover:opacity-70">
                    Willow Brook case study
                  </Link>
                  {' · '}
                  <Link href="/case-study/jade-legendary-real-estate" className="underline hover:opacity-70">
                    Jade case study
                  </Link>
                  {' · '}
                  <Link href="/blog/best-10-luxury-real-estate-marketing-tactics-for-2026" className="underline hover:opacity-70">
                    Luxury marketing tactics
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
                  Case study — Willow Brook Realty
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Inbound lift in a compressed window
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  When you need proof that SEO, profiles, and ads can move lead count quickly—not someday—this case is
                  the reference architecture.
                </p>
                <Link
                  href="/case-study/willow-brook-realty"
                  className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                >
                  Read case study
                </Link>
              </div>
              <Link
                href="/case-study/willow-brook-realty"
                className="group relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 lg:order-2"
              >
                <Image
                  src="/images/WillowBrookTraffic.png"
                  alt="Willow Brook Realty — lead generation case study"
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
            href="/real-estate-lead-generation"
            className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1"
          >
            Return to real estate lead generation overview
          </Link>
        </div>

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
