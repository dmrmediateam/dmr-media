import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ServiceStats from '@/components/service/ServiceStats';
import ServiceProcess from '@/components/service/ServiceProcess';
import ServiceCities from '@/components/service/ServiceCities';
import SEOWrapper from '@/components/SEOWrapper';

export const metadata: Metadata = {
  title: 'Luxury Development Marketing | New Construction & Estates | DMR Media',
  description:
    'Presale through sell-out marketing for luxury residential developments: positioning, gallery-grade digital, SEO, Google Ads, and analytics aligned with high-ticket reservations.',
  keywords:
    'luxury development marketing, real estate developer marketing, new construction marketing, presale marketing luxury homes, residential development branding, luxury real estate PPC',
  alternates: {
    canonical: 'https://www.dmrmedia.org/luxury-development-marketing',
  },
  openGraph: {
    title: 'Luxury Development Marketing | New Construction & Estates | DMR Media',
    description:
      'Presale through sell-out marketing for luxury residential developments: positioning, gallery-grade digital, SEO, Google Ads, and analytics.',
    url: 'https://www.dmrmedia.org/luxury-development-marketing',
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Development Marketing | DMR Media',
    description:
      'Presale through sell-out systems for luxury residential developments—brand, digital, search, and paid demand.',
  },
};

const CASE_STUDIES = [
  {
    id: 'eagan-luxury-real-estate',
    subheading: '$11M+ closed volume (Q1 2026)',
    title: 'Eagan Luxury — unified brand for trophy inventory',
    description:
      'Multiple legacy community and listing sites were diluting authority. We consolidated into one luxury presence, rebuilt SEO, and layered Google Ads—closing more than $11M in sales volume the quarter after launch.',
    image: '/images/screencapture-eaganluxury-2025-12-17-21_25_49.png',
    imageRight: true,
  },
  {
    id: 'marquis-farwell-group',
    subheading: '19× daily organic clicks',
    title: 'Marquis + Farwell — authority in a crowded luxury county',
    description:
      'In competitive Sonoma County, we grew daily organic clicks from 2 to 38 while improving Google Business interactions—proof of how disciplined search and content systems support premium listings.',
    image: '/images/MarquisFarwellGoogleSearchConsole.png',
    imageRight: false,
  },
];

const topCities = [
  { name: 'New York', state: 'NY', slug: 'new-york-ny', image: '/images/Cities/NewYork.jpeg' },
  {
    name: 'Los Angeles',
    state: 'CA',
    slug: 'los-angeles-ca',
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
  },
  {
    name: 'Chicago',
    state: 'IL',
    slug: 'chicago-il',
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
  },
  {
    name: 'Houston',
    state: 'TX',
    slug: 'houston-tx',
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
  },
  {
    name: 'Phoenix',
    state: 'AZ',
    slug: 'phoenix-az',
    image: '/images/Cities/phoenix-arizona-state-capitol-2025-03-13-12-59-21-utc.jpg',
  },
  {
    name: 'All Other Cities',
    state: 'USA',
    slug: '#contact',
    image: '/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg',
    subtitle: 'Talk to us about your market →',
  },
];

export default function LuxuryDevelopmentMarketingPage() {
  return (
    <SEOWrapper slug="/luxury-development-marketing">
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
                  Luxury Development Marketing
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Presale through sell-out—engineered for trophy projects.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  We build the narrative, digital gallery, and demand systems that keep luxury developments visible to
                  reservation-ready buyers—without resorting to generic portal traffic.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading="Benchmarks you can structure a sell-out around."
          stats={[
            {
              value: 'Phased',
              label: 'Launch rhythm',
              description: 'Creative, media, and search sequenced with construction milestones—not one-off bursts.',
            },
            {
              value: '360°',
              label: 'Channel stack',
              description: 'Brand, onsite gallery UX, organic authority, paid demand, and CRM hooks working together.',
            },
            {
              value: 'Weekly',
              label: 'Partner cadence',
              description: 'War-room pacing during presale and absorption so budgets follow inventory, not calendars.',
            },
          ]}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <div className="max-w-2xl mb-20 md:mb-28">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
                Programs that respect how luxury inventory actually sells.
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                The case studies below are residential luxury engagements—brand consolidation, search authority, and paid
                demand—mirroring what sophisticated developers need when each release has finite units and long sales
                cycles.
              </p>
            </div>

            <div className="space-y-0">
              {CASE_STUDIES.map((study) => (
                <article
                  key={study.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32 last:mb-0"
                >
                  <div
                    className={`flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 ${
                      study.imageRight ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                      {study.subheading}
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                      {study.title}
                    </h3>
                    <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                      {study.description}
                    </p>
                    <Link
                      href={`/case-study/${study.id}`}
                      className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                    >
                      Read case study
                    </Link>
                  </div>
                  <Link
                    href={`/case-study/${study.id}`}
                    className={`group relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 ${
                      study.imageRight ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <Image
                      src={study.image}
                      alt={`${study.title} — DMR Media case study`}
                      fill
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[var(--surface-base)] border-y border-[var(--color-ink-200)]">
          <div className="container-max max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
              How this connects to our other programs
            </h2>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
              Luxury sell-through rarely hinges on a single tactic. We typically pair development marketing with{' '}
              <Link href="/seo-optimization" className="underline hover:opacity-70">
                SEO optimization
              </Link>{' '}
              for long-cycle discovery,{' '}
              <Link href="/google-ads-management" className="underline hover:opacity-70">
                Google Ads management
              </Link>{' '}
              for high-intent capture,{' '}
              <Link href="/property-marketing" className="underline hover:opacity-70">
                property marketing
              </Link>{' '}
              for listing- and plan-led creative, and{' '}
              <Link href="/analytics-reporting" className="underline hover:opacity-70">
                analytics &amp; reporting
              </Link>{' '}
              so sales leadership sees channel contribution clearly. For bespoke search roadmaps, see our{' '}
              <Link href="/real-estate-seo-consultant" className="underline hover:opacity-70">
                real estate SEO consultant
              </Link>{' '}
              offering; for gallery-grade site patterns, browse the{' '}
              <Link href="/real-estate-agent-website-samples" className="underline hover:opacity-70">
                website design portfolio
              </Link>
              .
            </p>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
              For strategy reading, our posts on{' '}
              <Link href="/blog/google-ads-for-realtors" className="underline hover:opacity-70">
                Google Ads for real estate
              </Link>{' '}
              and{' '}
              <Link href="/blog/best-10-luxury-real-estate-marketing-tactics-for-2026" className="underline hover:opacity-70">
                luxury real estate marketing tactics
              </Link>{' '}
              map closely to how we architect presale and absorption campaigns.
            </p>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
              Explore the full{' '}
              <Link href="/case-studies" className="underline hover:opacity-70">
                case studies
              </Link>{' '}
              library or return to{' '}
              <Link href="/services" className="underline hover:opacity-70">
                all services
              </Link>
              .
            </p>
          </div>
        </section>

        <ServiceProcess
          id="how-it-works"
          heading="How we structure luxury development go-to-market."
          description="A four-stage system tuned for finite inventory, long sales cycles, and broker + direct channels."
          steps={[
            {
              title: 'Positioning & narrative',
              description:
                'Architecture, naming, phase story, and competitive white-space so the project reads inevitable—not interchangeable.',
            },
            {
              title: 'Digital gallery & CRM',
              description:
                'Floorplan UX, render-led storytelling, appointment and waitlist flows, and broker-ready kits that stay on-brand.',
            },
            {
              title: 'Demand orchestration',
              description:
                'Search, paid, and retargeting mapped to reservation-ready audiences—with budget pacing tied to release velocity.',
            },
            {
              title: 'Sell-through analytics',
              description:
                'Channel mix, tour quality, and broker co-op performance surfaced weekly so leadership can reallocate with confidence.',
            },
          ]}
        />

        <Testimonials />

        <ServiceCities
          heading="Markets where we support luxury development marketing."
          description="From global gateway cities to fast-growing Sun Belt corridors—tailored launch and absorption plans."
          cities={topCities.map((city) => ({
            ...city,
            slug: city.slug.startsWith('#') ? city.slug : `/luxury-development-marketing/${city.slug}`,
          }))}
        />

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
