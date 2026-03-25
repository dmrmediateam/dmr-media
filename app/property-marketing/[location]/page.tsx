import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ServiceStats from '@/components/service/ServiceStats';
import SEOWrapper from '@/components/SEOWrapper';

type LocationData = {
  name: string;
  /** US state abbreviation — omit for international markets */
  stateAbbr?: string;
  /** Displayed in the hero eyebrow when stateAbbr is absent */
  region?: string;
  isInternational?: boolean;
  image: string;
  stats: [
    { value: string; label: string; description: string },
    { value: string; label: string; description: string },
    { value: string; label: string; description: string },
  ];
  /** Short market context shown in the campaign approach copy block */
  marketContext: string;
};

const locationData: Record<string, LocationData> = {
  /* ── US Cities ─────────────────────────────────────────── */
  'new-york-ny': {
    name: 'New York',
    stateAbbr: 'NY',
    image: '/images/Cities/NewYork.jpeg',
    stats: [
      { value: '45', label: 'Avg days on market', description: 'We design campaigns to accelerate showings and offers.' },
      { value: '28%', label: 'Luxury market share', description: 'Your listings stay front-and-center with affluent buyers.' },
      { value: '250K+', label: 'Average impressions', description: 'Multichannel visibility across premium real estate audiences.' },
    ],
    marketContext:
      'From Fifth Avenue penthouses to Brooklyn townhouses, New York buyers expect immersive digital presentation and fast, data-driven follow-up.',
  },
  'los-angeles-ca': {
    name: 'Los Angeles',
    stateAbbr: 'CA',
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
    stats: [
      { value: '38', label: 'Avg days on market', description: 'Cinematic campaigns built for LA\'s visual-first buyer pool.' },
      { value: '32%', label: 'Luxury market share', description: 'High share of $2M+ transactions in the greater LA basin.' },
      { value: '250K+', label: 'Average impressions', description: 'Reach across search, social, and affluent lifestyle channels.' },
    ],
    marketContext:
      'Los Angeles buyers are sophisticated and mobile-first. Campaigns here lean on cinematic video, lifestyle copy, and hyperlocal neighborhood targeting.',
  },
  'chicago-il': {
    name: 'Chicago',
    stateAbbr: 'IL',
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
    stats: [
      { value: '52', label: 'Avg days on market', description: 'Strategic timing and targeted reach shorten the sales cycle.' },
      { value: '18%', label: 'Luxury market share', description: 'Growing demand for premium properties in Chicago proper.' },
      { value: '250K+', label: 'Average impressions', description: 'Multichannel visibility across premium real estate audiences.' },
    ],
    marketContext:
      'Chicago\'s luxury corridor spans the Gold Coast to Lincoln Park. Buyers here respond to quality presentation, neighborhood authority, and search-first discovery.',
  },
  'houston-tx': {
    name: 'Houston',
    stateAbbr: 'TX',
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
    stats: [
      { value: '48', label: 'Avg days on market', description: 'High-intent campaigns that move listings faster in a competitive market.' },
      { value: '15%', label: 'Luxury market share', description: 'Consistent demand from energy sector executives and relocators.' },
      { value: '250K+', label: 'Average impressions', description: 'Multichannel visibility across premium real estate audiences.' },
    ],
    marketContext:
      'Houston\'s luxury market is driven by relocation and energy wealth. Campaigns here target executive buyers and out-of-state investors with precise paid search.',
  },
  'phoenix-az': {
    name: 'Phoenix',
    stateAbbr: 'AZ',
    image: '/images/Cities/phoenix-arizona-state-capitol-2025-03-13-12-59-21-utc.jpg',
    stats: [
      { value: '35', label: 'Avg days on market', description: 'One of the fastest-moving luxury segments in the Sun Belt.' },
      { value: '22%', label: 'Luxury market share', description: 'Scottsdale and Paradise Valley drive outsized luxury activity.' },
      { value: '250K+', label: 'Average impressions', description: 'Multichannel visibility across premium real estate audiences.' },
    ],
    marketContext:
      'Phoenix and Scottsdale attract California and Midwest relocators seeking value. Campaigns here lead with lifestyle photography and retargeted Google Ads.',
  },
  'st-petersburg-fl': {
    name: 'St. Petersburg',
    stateAbbr: 'FL',
    image: '/images/Cities/Stpet.jpg',
    stats: [
      { value: '41', label: 'Avg days on market', description: 'Waterfront and downtown lofts move fast with the right exposure.' },
      { value: '24%', label: 'Luxury market share', description: 'Tampa Bay luxury demand is accelerating year over year.' },
      { value: '250K+', label: 'Average impressions', description: 'Multichannel reach across coastal and urban buyer audiences.' },
    ],
    marketContext:
      'St. Pete\'s waterfront scene and vibrant arts district are drawing high-net-worth buyers from the Northeast and Midwest. Targeted Google Ads and a dedicated property site put your listings directly in their search results.',
  },

  /* ── International Markets ──────────────────────────────── */
  'costa-rica': {
    name: 'Costa Rica',
    region: 'International',
    isInternational: true,
    image:
      'https://images.unsplash.com/photo-1712273033323-036432471687?auto=format&fit=crop&w=1400&q=85',
    stats: [
      { value: 'Top 5', label: 'Expat relocation market', description: 'Consistently ranked among the world\'s top destinations for luxury property buyers.' },
      { value: '$1M+', label: 'Avg luxury listing', description: 'Beachfront and jungle estates command premium international prices.' },
      { value: '250K+', label: 'Global buyer reach', description: 'Targeted campaigns reaching North American and European buyer audiences.' },
    ],
    marketContext:
      'Costa Rica attracts lifestyle buyers from North America and Europe seeking beachfront, jungle, or mountain escapes. A dedicated property website paired with Google Ads puts your listing in front of the exact search queries serious buyers use.',
  },
  'turks-and-caicos': {
    name: 'Turks & Caicos',
    region: 'International',
    isInternational: true,
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=85',
    stats: [
      { value: '$3.5M+', label: 'Median luxury sale', description: 'Ultra-high-net-worth buyers seeking exclusive Caribbean real estate.' },
      { value: 'Intl.', label: 'Buyer pool', description: 'Primarily US, Canadian, and European buyers transacting offshore.' },
      { value: '250K+', label: 'Global buyer reach', description: 'Campaigns targeting affluent search audiences across three continents.' },
    ],
    marketContext:
      'Turks & Caicos is one of the world\'s most sought-after offshore luxury markets. Buyers are high-net-worth and intentional — a dedicated site and targeted Google Ads campaign puts your villa in front of them the moment they search.',
  },
  'cayman-islands': {
    name: 'Cayman Islands',
    region: 'International',
    isInternational: true,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85',
    stats: [
      { value: 'Top 3', label: 'Caribbean luxury market', description: 'Grand Cayman consistently ranks among the highest-value Caribbean real estate markets.' },
      { value: '$2M+', label: 'Avg luxury listing', description: 'Beachfront and canal-front properties attract discerning global buyers.' },
      { value: '250K+', label: 'Global buyer reach', description: 'Multichannel visibility targeting US, UK, and Canadian buyers.' },
    ],
    marketContext:
      'The Cayman Islands draws financially sophisticated buyers drawn by tax-neutral ownership and world-class lifestyle. Our campaigns connect your listing to that audience through search-intent Google Ads and a polished dedicated property site.',
  },
  'canada': {
    name: 'Canada',
    region: 'International',
    isInternational: true,
    image:
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1400&q=85',
    stats: [
      { value: 'CAD $4M+', label: 'Avg luxury benchmark', description: 'Vancouver and Toronto luxury tiers continue to attract global capital.' },
      { value: 'Global', label: 'Buyer pool', description: 'International buyers from Asia-Pacific, the US, and Europe actively purchasing.' },
      { value: '250K+', label: 'Cross-border reach', description: 'Campaigns targeting luxury buyers across the US-Canada corridor and internationally.' },
    ],
    marketContext:
      'Canada\'s luxury markets — Vancouver, Whistler, Toronto, and the Muskoka Lakes — draw buyers from across North America and the Pacific Rim. We build dedicated property sites and run Google Ads campaigns that capture cross-border search intent.',
  },
  'bali': {
    name: 'Bali',
    region: 'International',
    isInternational: true,
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85',
    stats: [
      { value: 'Top 10', label: 'Global luxury retreat market', description: 'Bali ranks consistently among the world\'s most desirable lifestyle destinations.' },
      { value: '$800K+', label: 'Avg villa listing', description: 'Clifftop and ricefield villa estates attract design-conscious global buyers.' },
      { value: '250K+', label: 'Global buyer reach', description: 'Campaigns targeting Western buyers actively searching for Bali real estate.' },
    ],
    marketContext:
      'Bali\'s luxury villa market is driven by design-forward buyers from Australia, Europe, and the US seeking lifestyle investments. Our campaigns use dedicated property websites and precise Google Ads targeting to reach buyers with high purchase intent.',
  },
  'st-barts': {
    name: 'St. Barts',
    region: 'International',
    isInternational: true,
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=85',
    stats: [
      { value: '$5M+', label: 'Avg luxury sale price', description: 'One of the most exclusive real estate markets in the Caribbean.' },
      { value: 'UHNW', label: 'Buyer profile', description: 'Ultra-high-net-worth buyers from the US, France, and Latin America.' },
      { value: '250K+', label: 'Global buyer reach', description: 'Campaigns targeting the world\'s wealthiest real estate buyers.' },
    ],
    marketContext:
      'St. Barts is among the most exclusive addresses in the world. Buyers are ultra-high-net-worth and discovery-driven — a beautifully crafted dedicated site paired with intent-based Google Ads ensures your villa reaches them first.',
  },
};

export async function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({ location }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  if (!location) return { title: 'Location Not Found' };

  const locationLabel = location.stateAbbr
    ? `${location.name}, ${location.stateAbbr}`
    : location.name;

  return {
    title: `Luxury Property Marketing in ${locationLabel} | DMR Media`,
    description: `Expert luxury property marketing in ${locationLabel}. We build dedicated property websites and run targeted Google Ads campaigns to drive qualified buyer traffic — with a deferred payment structure for current clients.`,
    alternates: {
      canonical: `https://www.dmrmedia.org/property-marketing/${locationSlug}`,
    },
    openGraph: {
      title: `Luxury Property Marketing in ${locationLabel} | DMR Media`,
      description: `Expert luxury property marketing in ${locationLabel}. Dedicated property websites, Google Ads campaigns, and done-for-you listing email copy.`,
      url: `https://www.dmrmedia.org/property-marketing/${locationSlug}`,
      siteName: 'DMR Media',
      type: 'website',
    },
  };
}

export default async function LocationPropertyMarketingPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  if (!location) notFound();

  const eyebrow = location.stateAbbr
    ? `Luxury Property Marketing • ${location.name}, ${location.stateAbbr}`
    : `Luxury Property Marketing • ${location.name}`;

  const locationLabel = location.stateAbbr
    ? `${location.name}, ${location.stateAbbr}`
    : location.name;

  return (
    <SEOWrapper slug={`/property-marketing/${locationSlug}`}>
      <div className="min-h-screen bg-white">

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={location.image}
              alt={`${locationLabel} luxury property marketing`}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div
              className="absolute inset-0 z-[1]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(15,15,15,0.65) 0%, rgba(15,15,15,0.45) 40%, rgba(250,250,249,0.15) 70%, rgba(250,250,249,1) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 w-full pt-24 pb-20 flex justify-center">
            <div className="container-max">
              <div className="max-w-4xl mx-auto text-center">
                <span className="uppercase tracking-[0.2em] text-sm sm:text-base text-white font-serif block mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  {eyebrow}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Luxury property marketing in {location.name}.
                </h1>
                <p className="text-xl sm:text-2xl font-serif text-white leading-relaxed max-w-2xl mx-auto mb-10 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  We build dedicated property websites and run targeted Google Ads campaigns to
                  drive qualified buyer traffic directly to your listings. Close faster with our
                  pay-at-close model.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#pricing"
                    className="inline-block px-8 py-4 bg-white text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs font-serif hover:bg-opacity-90 transition-all duration-300"
                  >
                    View Pricing
                  </a>
                  <a
                    href="#contact"
                    className="inline-block px-8 py-4 border border-white text-white uppercase tracking-[0.15em] text-xs font-serif hover:bg-white hover:text-[var(--color-off-black)] transition-all duration-300"
                  >
                    Start a Campaign
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading={`Market signals shaping ${location.name} campaigns.`}
          stats={location.stats}
        />

        {/* ── Campaign Approach ───────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">

            {/* What's Included */}
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  {location.isInternational ? 'International Campaign' : 'Campaign Approach'}
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Luxury property marketing built for {location.name} buyers.
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl mb-6">
                  {location.marketContext}
                </p>
                <div className="space-y-3">
                  {[
                    'Custom-designed, SEO-optimized single-property website',
                    '30-day Google Ads burst — ad spend fully covered by DMR Media',
                    'Done-for-you listing email copy in the agent\'s voice',
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif">
                      <svg
                        className="w-4 h-4 text-[var(--color-trust)] shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 lg:order-2">
                <Image
                  src={location.image}
                  alt={`${locationLabel} luxury real estate`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </article>

            {/* Pricing preview */}
            <article
              id="pricing"
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32"
            >
              <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-off-black)] order-1 m-6 sm:m-10 lg:m-12 lg:order-1 flex items-center justify-center">
                <div className="text-center px-8">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-white/60 font-serif mb-6">
                    Current Clients
                  </p>
                  <div className="text-6xl font-serif font-light text-white mb-2">$2,500</div>
                  <p className="text-sm text-white/70 font-serif mb-8">Pay-at-close · 90-day cap</p>
                  <div className="border-t border-white/20 pt-6 text-[11px] uppercase tracking-[0.2em] text-white/60 font-serif">
                    Non-Clients · $3,250 Upfront
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-2">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  Transparent Pricing
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Zero upfront ad spend. Pay when your listing closes.
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-8">
                  Google Ads budget is covered by DMR Media and included in the flat fee. No
                  separate ad account required. Current clients pay at close with a 90-day cap.
                </p>
                <a
                  href="#contact"
                  className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                >
                  Request a marketing package →
                </a>
              </div>
            </article>

          </div>
        </section>

        <Testimonials />

        <div className="flex justify-start container-max pb-12">
          <Link
            href="/property-marketing"
            className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1"
          >
            ← Return to Property Marketing overview
          </Link>
        </div>

        <div id="contact">
          <ContactForm />
        </div>

      </div>
    </SEOWrapper>
  );
}
