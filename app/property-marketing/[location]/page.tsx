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
    stateAbbr: string;
    avgDaysOnMarket: string;
    luxuryMarketShare: string;
    image: string;
  }
> = {
  'new-york-ny': {
    name: 'New York',
    stateAbbr: 'NY',
    avgDaysOnMarket: '45',
    luxuryMarketShare: '28%',
    image: '/images/Cities/NewYork.jpeg',
  },
  'los-angeles-ca': {
    name: 'Los Angeles',
    stateAbbr: 'CA',
    avgDaysOnMarket: '38',
    luxuryMarketShare: '32%',
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
  },
  'chicago-il': {
    name: 'Chicago',
    stateAbbr: 'IL',
    avgDaysOnMarket: '52',
    luxuryMarketShare: '18%',
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
  },
  'houston-tx': {
    name: 'Houston',
    stateAbbr: 'TX',
    avgDaysOnMarket: '48',
    luxuryMarketShare: '15%',
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
  },
  'phoenix-az': {
    name: 'Phoenix',
    stateAbbr: 'AZ',
    avgDaysOnMarket: '35',
    luxuryMarketShare: '22%',
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
    title: `Property Marketing in ${location.name}, ${location.stateAbbr} | Luxury Real Estate Marketing | DMR Media`,
    description: `Professional property marketing services in ${location.name}, ${location.stateAbbr}. Showcase luxury listings with stunning campaigns that attract qualified buyers.`,
  };
}

export default async function LocationPropertyMarketingPage({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  if (!location) notFound();

  return (
    <SEOWrapper slug={`/property-marketing/${locationSlug}`}>
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
                  Property Marketing • {location.name}, {location.stateAbbr}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Launch unforgettable listings in {location.name}.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  We produce, distribute, and optimize campaigns that showcase your {location.name} properties with the polish they deserve—and the reach they require.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading={`Market signals shaping ${location.name} launches.`}
          stats={[
            {
              value: location.avgDaysOnMarket,
              label: 'Avg days on market',
              description: 'We design campaigns to accelerate showings and offers.',
            },
            {
              value: location.luxuryMarketShare,
              label: 'Luxury market share',
              description: 'Your listings stay front-and-center with affluent buyers.',
            },
            {
              value: '250K+',
              label: 'Average impressions',
              description: 'Multichannel visibility across premium real estate audiences.',
            },
          ]}
        />

        {/* Listing experiences — staggered layout */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  Campaign approach
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Listing experiences built for {location.name} buyers.
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl mb-6">
                  From Fifth Avenue penthouses to Paradise Valley estates, we tailor visuals, copy, and distribution to match buyer expectations in each neighborhood.
                </p>
                <div className="space-y-4">
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Cinematic photography, video, and copywriting anchored in lifestyle storytelling.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    MLS optimization plus premium placements across social, Google, and email lists.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Custom landing experiences with lead capture, scheduling, and follow-up built in.
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

            {/* Channel mix & deliverables — staggered */}
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
                  Channel mix
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Deliverables for {location.name}
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
                  You get weekly metrics that show impressions, clicks, showings, and inquiries—so you always know how the market is responding.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['MLS & Syndication', 'YouTube & Shorts', 'Paid Social', 'Retargeting', 'Email Campaigns', 'Print Collateral'].map((item) => (
                    <span
                      key={item}
                      className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="space-y-4">
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Property launch plan with timeline, channels, and budget breakout.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Social media rollouts optimized for reels, stories, and carousel formats.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Weekly performance dashboard summarizing impressions, leads, and feedback from showings.
                  </p>
                </div>
              </div>
            </article>

            {/* Case study */}
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32 last:mb-0">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  2 Clients / 3 Weeks
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Willow Brook's Listing Success
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  From zero visibility to 46 leads and 2 new clients in 3 weeks. Comprehensive property marketing across SEO, Google Ads, and targeted campaigns.
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
                  src="/images/Cities/NewHampshire.jpg"
                  alt="Willow Brook Realty — property marketing case study"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Link>
            </article>
          </div>
        </section>

        <Testimonials />

        <div className="flex justify-start container-max pb-12">
          <Link
            href="/property-marketing"
            className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1"
          >
            Return to Property Marketing overview
          </Link>
        </div>

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
