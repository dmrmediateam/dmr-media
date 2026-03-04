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
  title: 'Google Ads Management for Real Estate | DMR Media',
  description:
    'Maximize ROI with precision-targeted Google Ads campaigns designed to reach affluent homebuyers and sellers in luxury real estate markets. 450% average ROI, 3-5x lead volume increase, $2.50 cost per lead.',
  keywords:
    'Google Ads for real estate, real estate Google Ads management, luxury real estate advertising, real estate PPC, Google Ads campaigns, real estate paid search, property marketing ads, luxury real estate Google Ads',
  alternates: {
    canonical: 'https://www.dmrmedia.org/google-ads-management',
  },
  openGraph: {
    title: 'Google Ads Management for Real Estate | DMR Media',
    description:
      'Maximize ROI with precision-targeted Google Ads campaigns designed to reach affluent homebuyers and sellers in luxury real estate markets.',
    url: 'https://www.dmrmedia.org/google-ads-management',
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Management for Real Estate | DMR Media',
    description:
      'Maximize ROI with precision-targeted Google Ads campaigns designed to reach affluent homebuyers and sellers in luxury real estate markets.',
  },
};

const CASE_STUDIES = [
  {
    id: 'jade-legendary-real-estate',
    subheading: '3x Lead Generation',
    title: "Jade's Paid Media Success",
    description:
      "From inconsistent lead flow to a 3x lift in qualified conversations—how a paid media overhaul with Google Ads transformed Jade's pipeline at Legendary Real Estate Services.",
    image: '/images/JadeCRM.png',
    imageRight: true,
  },
  {
    id: 'willow-brook-realty',
    subheading: '2 Clients / 3 Weeks',
    title: "Willow Brook's Ad Performance",
    description:
      'Targeted Google Ads campaigns across Vermont and New Hampshire generated 46 leads and 2 new clients in just 3 weeks.',
    image: '/images/Cities/NewHampshire.jpg',
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

export default function GoogleAdsPage() {
  return (
    <SEOWrapper slug="/google-ads-management">
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
                  Google Ads Management
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Paid media engineered for the luxury buyer journey.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  We plan, launch, and iterate Google Ads systems that surface your properties to affluent buyers and keep high-intent leads flowing to your team.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading="Performance benchmarks you can plan around."
          stats={[
            {
              value: '450%',
              label: 'Average ROI',
              description: 'Across established campaigns in luxury metros.',
            },
            {
              value: '3-5x',
              label: 'Lead volume',
              description: 'Increase in qualified inquiries in the first 60 days.',
            },
            {
              value: '$2.50',
              label: 'Cost per lead',
              description: 'Typical CPL across premium property campaigns.',
            },
          ]}
        />

        {/* Case studies — Sotheby's staggered layout */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <div className="max-w-2xl mb-20 md:mb-28">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
                Campaigns that convert into appointments.
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                Managed budgets, calibrated copy, and polished landing experiences that nurture discerning buyers.
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
                      alt={`${study.title} — Google Ads case study`}
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

        <ServiceProcess
          id="how-it-works"
          heading="How we structure high-performing Google Ads."
          description="A controlled four-stage rollout, tuned specifically for luxury real estate teams."
          steps={[
            {
              title: 'Strategy & Targeting',
              description:
                'We define buyer personas, geographic focus, budget splits, and keyword universes to ensure every impression is intentional.',
            },
            {
              title: 'Campaign Production',
              description:
                'We craft copy, creative, and landing experiences that reflect your brand and speak to high-net-worth prospects.',
            },
            {
              title: 'Spend & Bid Optimization',
              description:
                'Daily budget pacing, smart bidding, and audience adjustments keep cost-per-lead on target while maximizing exposure.',
            },
            {
              title: 'Testing & Scaling',
              description:
                'We constantly test headlines, extensions, audiences, and funnels—then scale the winners to compound ROI.',
            },
          ]}
        />

        <Testimonials />

        <ServiceCities
          heading="Markets where we manage paid media."
          description="From dense metros to fast-growing Sun Belt cities, we tailor targeting to the neighborhoods that matter."
          cities={topCities.map((city) => ({
            ...city,
            slug: city.slug.startsWith('#') ? city.slug : `/google-ads-management/${city.slug}`,
          }))}
        />

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
