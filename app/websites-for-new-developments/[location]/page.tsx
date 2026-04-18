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
    buyerProof: string;
    launchRisk: string;
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
    buyerProof: 'Sponsor narrative, board context, comparable projects',
    launchRisk: 'URL migrations + disclosure density',
    marketType: 'Ultra-luxury infill and adaptive reuse',
    image: '/images/Cities/NewYork.jpeg',
  },
  'los-angeles-ca': {
    name: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9M',
    medianHomePrice: '$890K metro reference',
    buyerProof: 'View corridors, privacy, lifestyle media',
    launchRisk: 'Heavy creative without performance budget',
    marketType: 'Coastal vertical and hillside estates',
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
  },
  'chicago-il': {
    name: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    population: '2.7M',
    medianHomePrice: '$310K metro reference',
    buyerProof: 'Transit, lakefront access, assessments clarity',
    launchRisk: 'Seasonal demand swings post-launch',
    marketType: 'Lakefront and downtown infill',
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
  },
  'houston-tx': {
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2.3M',
    medianHomePrice: '$280K metro reference',
    buyerProof: 'Land plan, garage count, HOA fee framing',
    launchRisk: 'Energy-cycle buyer sensitivity',
    marketType: 'Master-planned and Inner Loop vertical',
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
  },
  'phoenix-az': {
    name: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '1.7M',
    medianHomePrice: '$430K metro reference',
    buyerProof: 'Outdoor comfort, golf, second-home use cases',
    launchRisk: 'Heat-season creative and load tradeoffs',
    marketType: 'Sun Belt master plans and resort adjacency',
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
    title: `New Development Websites in ${location.name}, ${location.stateAbbr} | DMR Media`,
    description: `Websites for new developments in ${location.name}, ${location.stateAbbr}: presale gallery UX, technical SEO, schema, phased IA, and CRM capture—optionally paired with Google Ads and luxury development marketing.`,
    keywords: [
      `new development website ${location.name}`,
      `presale website ${location.stateAbbr}`,
      `real estate developer website ${location.name}`,
    ].join(', '),
  };
}

export default async function WebsitesForNewDevelopmentsLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  if (!location) notFound();

  const pageSlug = `/websites-for-new-developments/${locationSlug}`;

  return (
    <SEOWrapper
      slug={pageSlug}
      title={`New Development Websites in ${location.name}, ${location.stateAbbr} | DMR Media`}
      description={`Flagship websites for new developments in ${location.name}: phased information architecture, gallery UX, technical SEO, and analytics—aligned with documented DMR migration and search case studies.`}
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
                  New Development Websites • {location.name}, {location.stateAbbr}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Presale digital built for {location.name} buyers.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  Pair the gallery with{' '}
                  <Link
                    href="/seo-optimization"
                    className="text-white underline underline-offset-4 decoration-white/70 hover:opacity-90"
                  >
                    SEO
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/google-ads-management"
                    className="text-white underline underline-offset-4 decoration-white/70 hover:opacity-90"
                  >
                    Google Ads
                  </Link>{' '}
                  when you need reservations—not just renders.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading={`${location.name} development site priorities`}
          stats={[
            {
              value: location.buyerProof,
              label: 'Proof stack',
              description: 'What we foreground so skeptical buyers believe schedule, quality, and sponsor credibility.',
            },
            {
              value: location.launchRisk,
              label: 'Launch risk',
              description: 'Where migrations, media weight, or compliance usually break—and how we plan around it.',
            },
            {
              value: location.population,
              label: 'Metro depth',
              description: 'Reach modeling when remarketing and broker co-op layers follow the site launch.',
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
                  Why {location.name} developments need a flagship site—not a PDF.
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl mb-6">
                  Buyers compare projects on mobile before they ever tour. If your site hides plans, buries pricing
                  context, or loads like a brochure upload, you lose to a competitor with clearer proof—even when your
                  architecture is stronger.
                </p>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  Go deeper on full-funnel programs via{' '}
                  <Link href="/luxury-development-marketing" className="underline hover:opacity-70">
                    luxury development marketing
                  </Link>
                  , measure with{' '}
                  <Link href="/analytics-reporting" className="underline hover:opacity-70">
                    analytics
                  </Link>
                  , and review gallery references in the{' '}
                  <Link href="/real-estate-agent-website-samples" className="underline hover:opacity-70">
                    design portfolio
                  </Link>
                  .
                </p>
              </div>
              <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 lg:order-2">
                <Image
                  src={location.image}
                  alt={`${location.name} — new development market`}
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
                  alt={`${location.name} skyline`}
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
                  Proof you can open in a board deck
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
                  We cite published migrations and search lifts—see the Eagan consolidation and Michael technical SEO
                  case studies linked from the national overview—rather than anonymous renders alone.
                </p>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  <Link href="/case-studies" className="underline hover:opacity-70">
                    Case studies
                  </Link>
                  {' · '}
                  <Link href="/blog/best-10-luxury-real-estate-marketing-tactics-for-2026" className="underline hover:opacity-70">
                    Luxury marketing tactics
                  </Link>
                  {' · '}
                  <Link href="/real-estate-seo-consultant" className="underline hover:opacity-70">
                    SEO consulting
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
                  Case study — Eagan Luxury
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Consolidation without search collapse
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  When multiple digital properties must become one flagship experience, redirects and IA matter as much
                  as the hero video. Read how we executed that discipline end to end.
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
                  alt="Eagan Luxury Real Estate — brand and website case study"
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
            href="/websites-for-new-developments"
            className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1"
          >
            Return to websites for new developments overview
          </Link>
        </div>

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
