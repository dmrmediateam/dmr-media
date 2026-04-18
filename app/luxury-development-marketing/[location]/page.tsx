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
    buyerDepth: string;
    mediaIntensity: string;
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
    buyerDepth: 'Global + domestic HNW',
    mediaIntensity: 'Very high',
    marketType: 'Gateway city — global capital flows',
    image: '/images/Cities/NewYork.jpeg',
  },
  'los-angeles-ca': {
    name: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9M',
    medianHomePrice: '$890K metro reference',
    buyerDepth: 'Entertainment & tech wealth',
    mediaIntensity: 'Very high',
    marketType: 'Coastal luxury & estate corridor',
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
  },
  'chicago-il': {
    name: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    population: '2.7M',
    medianHomePrice: '$310K metro reference',
    buyerDepth: 'Professional & family move-up',
    mediaIntensity: 'High',
    marketType: 'Urban lakefront & suburban estate',
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
  },
  'houston-tx': {
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2.3M',
    medianHomePrice: '$280K metro reference',
    buyerDepth: 'Energy & medical corridor demand',
    mediaIntensity: 'Medium-high',
    marketType: 'High-growth luxury enclaves',
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
  },
  'phoenix-az': {
    name: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '1.7M',
    medianHomePrice: '$430K metro reference',
    buyerDepth: 'Sun Belt relocation & second home',
    mediaIntensity: 'Medium-high',
    marketType: 'Resort-adjacent & golf communities',
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
    title: `Luxury Development Marketing in ${location.name}, ${location.stateAbbr} | DMR Media`,
    description: `Presale and sell-out marketing for luxury residential developments in ${location.name}, ${location.stateAbbr}. Brand systems, gallery digital, SEO, Google Ads, and analytics for high-ticket reservations.`,
  };
}

export default async function LuxuryDevelopmentLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  if (!location) notFound();

  const pageSlug = `/luxury-development-marketing/${locationSlug}`;

  return (
    <SEOWrapper
      slug={pageSlug}
      title={`Luxury Development Marketing in ${location.name}, ${location.stateAbbr} | DMR Media`}
      description={`Presale and sell-out marketing for luxury residential developments in ${location.name}, ${location.stateAbbr}. Gallery-grade digital, search, paid demand, and reporting.`}
      schemaType="service"
    >
      <div className="min-h-screen bg-white">
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
                  'linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.35) 40%, rgba(250,250,249,0.2) 70%, rgba(250,250,249,1) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 w-full pt-24 pb-20 flex justify-center">
            <div className="container-max">
              <div className="max-w-4xl mx-auto text-center">
                <span className="uppercase tracking-[0.2em] text-sm sm:text-base text-white font-serif block mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  Luxury Development • {location.name}, {location.stateAbbr}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Sell-through systems for {location.name} trophy inventory.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  We align narrative, gallery digital,{' '}
                  <Link
                    href="/seo-optimization"
                    className="text-white underline underline-offset-4 decoration-white/70 hover:opacity-90"
                  >
                    SEO
                  </Link>
                  , and{' '}
                  <Link
                    href="/google-ads-management"
                    className="text-white underline underline-offset-4 decoration-white/70 hover:opacity-90"
                  >
                    paid demand
                  </Link>{' '}
                  so reservation-ready buyers encounter your project first—not a generic portal list.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading={`Luxury development context in ${location.name}.`}
          stats={[
            {
              value: location.mediaIntensity,
              label: 'Paid + organic intensity',
              description: 'How aggressively we plan to bid and publish to stay visible during presale windows.',
            },
            {
              value: location.buyerDepth,
              label: 'Buyer depth',
              description: 'The buyer archetypes we design creative and landing flows around.',
            },
            {
              value: location.population,
              label: 'Metro audience scale',
              description: 'Reach modeling for geo-fenced campaigns and broker co-op amplification.',
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
                  Why disciplined marketing matters in {location.name}.
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl mb-6">
                  With {location.population} residents and a {location.medianHomePrice} reference point, luxury
                  releases compete for attention across portals, broker networks, and social proof. We build an owned
                  lane—search, site, and CRM—so your project earns repeat visits.
                </p>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  Pair this program with{' '}
                  <Link href="/property-marketing" className="underline hover:opacity-70">
                    property marketing
                  </Link>{' '}
                  for plan-led creative and{' '}
                  <Link href="/analytics-reporting" className="underline hover:opacity-70">
                    analytics
                  </Link>{' '}
                  for transparent sell-through reporting.
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
                  Launch & absorption
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Creative, media, and landing discipline
                </h3>
                <div className="space-y-4 mb-8">
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Keyword and audience maps for estate, new-construction, and relocation intent in {location.name}.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Geo-fenced spend that follows neighborhood-level demand—not broad metro waste.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Retargeting and nurture paths that respect long decision cycles typical of luxury reservations.
                  </p>
                </div>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
                  For custom search architecture, see our{' '}
                  <Link href="/real-estate-seo-consultant" className="underline hover:opacity-70">
                    SEO consulting
                  </Link>{' '}
                  program; for gallery site references, see the{' '}
                  <Link href="/real-estate-agent-website-samples" className="underline hover:opacity-70">
                    design portfolio
                  </Link>
                  .
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Presale narrative', 'Gallery UX', 'Search + Maps', 'CRM & tours'].map((item) => (
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
                  Strategy posts that mirror our playbooks
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
                  Our{' '}
                  <Link href="/blog/google-ads-for-realtors" className="underline hover:opacity-70">
                    Google Ads for real estate
                  </Link>{' '}
                  and{' '}
                  <Link href="/blog/best-10-luxury-real-estate-marketing-tactics-for-2026" className="underline hover:opacity-70">
                    luxury marketing tactics
                  </Link>{' '}
                  posts outline how we sequence paid and organic for premium inventory—including development-adjacent
                  launches.
                </p>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Browse all insights on the{' '}
                  <Link href="/blog" className="underline hover:opacity-70">
                    blog
                  </Link>{' '}
                  or explore{' '}
                  <Link href="/case-studies" className="underline hover:opacity-70">
                    case studies
                  </Link>{' '}
                  for comparable residential luxury outcomes.
                </p>
              </div>
              <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 lg:order-2">
                <Image
                  src={location.image}
                  alt={`${location.name} luxury market`}
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
                Luxury residential systems you can map to {location.name}
              </h2>
            </div>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  Case study — Eagan Luxury
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Brand consolidation + demand for premium inventory
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  A unified luxury site, SEO rebuild, and Google Ads layer produced measurable sell-through velocity—a
                  useful parallel when your development needs one authoritative digital home.
                </p>
                <Link
                  href="/case-study/eagan-luxury-real-estate"
                  className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                >
                  Read case study
                </Link>
              </div>
              <Link
                href="/case-study/eagan-luxury-real-estate"
                className="group relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 lg:order-2"
              >
                <Image
                  src="/images/screencapture-eaganluxury-2025-12-17-21_25_49.png"
                  alt="Eagan Luxury Real Estate case study"
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
            href="/luxury-development-marketing"
            className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1"
          >
            Return to luxury development marketing overview
          </Link>
        </div>

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
