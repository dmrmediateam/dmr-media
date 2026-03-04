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
    dataComplexity: string;
    image: string;
  }
> = {
  'new-york-ny': {
    name: 'New York',
    stateAbbr: 'NY',
    dataComplexity: 'Very High',
    image: '/images/Cities/NewYork.jpeg',
  },
  'los-angeles-ca': {
    name: 'Los Angeles',
    stateAbbr: 'CA',
    dataComplexity: 'Very High',
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
  },
  'chicago-il': {
    name: 'Chicago',
    stateAbbr: 'IL',
    dataComplexity: 'High',
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
  },
  'houston-tx': {
    name: 'Houston',
    stateAbbr: 'TX',
    dataComplexity: 'Medium-High',
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
  },
  'phoenix-az': {
    name: 'Phoenix',
    stateAbbr: 'AZ',
    dataComplexity: 'Medium',
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
    title: `Analytics & Reporting in ${location.name}, ${location.stateAbbr} | Real Estate Marketing Analytics | DMR Media`,
    description: `Comprehensive analytics and reporting services for real estate professionals in ${location.name}, ${location.stateAbbr}. Data-driven insights that optimize your marketing ROI.`,
  };
}

export default async function LocationAnalyticsPage({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  if (!location) notFound();

  return (
    <SEOWrapper slug={`/analytics-reporting/${locationSlug}`}>
      <div className="min-h-screen bg-white">
        {/* Hero with background video */}
        <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              src="/videos/beautiful-calabasas-park-estates-with-luxurious-pr-2025-12-17-23-41-28-utc.mov"
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
                  Analytics & Reporting • {location.name}, {location.stateAbbr}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Clarity and control for {location.name} marketing.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  Our dashboards turn {location.name}'s {location.dataComplexity.toLowerCase()} marketing data into a weekly action plan—so your team always knows what to optimize next.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading={`Reporting built for ${location.name} leaders.`}
          stats={[
            {
              value: 'Weekly',
              label: 'Report cadence',
              description: 'Executive-ready status updates and commentary.',
            },
            {
              value: '50+',
              label: 'Metrics tracked',
              description: 'Traffic, CPL, conversions, attribution, and lead quality.',
            },
            {
              value: 'Live',
              label: 'Dashboards',
              description: 'Always-on access with nothing summarized away.',
            },
          ]}
        />

        {/* Why smart analytics — staggered layout */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  Market context
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Why smart analytics wins in {location.name}.
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl mb-6">
                  {location.name} teams juggle multiple channels, listings, and lead sources. We centralize every signal so you can allocate budget confidently and prove ROI to stakeholders.
                </p>
                <div className="space-y-4">
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Channel and campaign dashboards tailored to your price points and personas.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Automated KPI alerts when cost-per-lead or conversion targets slip.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Cross-channel attribution modeling for listings, developments, and branding initiatives.
                  </p>
                </div>
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

            {/* Data sources & deliverables — staggered */}
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32 last:mb-0">
              <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 lg:order-1">
                <Image
                  src={location.image}
                  alt={`${location.name} real estate`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-2">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  Data sources we unify
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  What you'll receive
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
                  Weekly insights highlight wins, watch items, and recommended shifts—no spreadsheet digging required.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Google Analytics', 'Search Console', 'Google Ads', 'Meta Ads', 'CRM / IDX', 'Call Tracking'].map((source) => (
                    <span
                      key={source}
                      className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif"
                    >
                      {source}
                    </span>
                  ))}
                </div>
                <div className="space-y-4">
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Real-time dashboards for leadership and marketing with custom views per stakeholder.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Weekly narratives summarizing results, insights, and the optimizations we're running next.
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    Quarterly deep dives uncovering new market opportunities and recommended budget shifts.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <Testimonials />

        {/* Case study */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <div className="max-w-2xl mb-20 md:mb-28">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
                Recent analytics success
              </h2>
            </div>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  21x Impressions
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  Michael's Analytics Success
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  From abandoned SEO to 21x impressions growth—how transparent dashboards and weekly reporting rebuilt Michael's traffic and pipeline in 7.5 weeks.
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
                  alt="Michael's Analytics Success — traffic growth"
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
            href="/analytics-reporting"
            className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1"
          >
            Return to Analytics overview
          </Link>
        </div>

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
