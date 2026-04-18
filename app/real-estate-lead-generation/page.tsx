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
  title: 'Real Estate Lead Generation | SEO, Ads & Inbound Systems | DMR Media',
  description:
    'Build predictable real estate lead generation: local SEO, Google Ads, landing discipline, and faster follow-up. Documented outcomes include 46 leads in 3 weeks and 3× pipeline in 90 days—see published case studies.',
  keywords: [
    'real estate lead generation',
    'luxury real estate leads',
    'realtor lead generation',
    'real estate inbound marketing',
    'real estate Google Ads leads',
    'local SEO real estate leads',
  ].join(', '),
  alternates: {
    canonical: 'https://www.dmrmedia.org/real-estate-lead-generation',
  },
  openGraph: {
    title: 'Real Estate Lead Generation | DMR Media',
    description:
      'Inbound systems for luxury real estate: search, paid media, capture, and nurture—measured against pipeline.',
    url: 'https://www.dmrmedia.org/real-estate-lead-generation',
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Lead Generation | DMR Media',
    description:
      'SEO + ads + nurture engineered for qualified conversations—not vanity traffic.',
  },
};

const CASE_STUDIES = [
  {
    id: 'willow-brook-realty',
    subheading: '46 inbound leads · 2 new clients · 3 weeks',
    title: 'Willow Brook Realty — from referral-only to a measurable funnel',
    description:
      'A full inbound foundation—local SEO, Google Business Profile work, and targeted Google Ads—grew leads from 11 to 46 in three weeks with major traffic lift in the published case study. Ideal proof when you need lead volume with transparent channel mix.',
    image: '/images/WillowBrookTraffic.png',
    imageRight: true,
  },
  {
    id: 'jade-legendary-real-estate',
    subheading: '3× qualified leads · 90 days',
    title: 'Jade · Legendary — context, not just more content',
    description:
      'We rebuilt the spine between assets, search intent, and automation so inbound conversations tripled in 90 days—with documented velocity from lead to follow-up. The lesson: lead generation fails when capture exists but context does not.',
    image: '/images/JadeCRM.png',
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

export default function RealEstateLeadGenerationPage() {
  return (
    <SEOWrapper slug="/real-estate-lead-generation">
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
                  Real Estate Lead Generation
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Qualified conversations—not vanity traffic.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  We engineer inbound systems for luxury markets: search visibility, disciplined Google Ads, landing and
                  form UX, and follow-up velocity you can read in the CRM—not guess from clicks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading="What “good” lead generation actually measures."
          stats={[
            {
              value: 'Qualified',
              label: 'Conversation quality',
              description: 'Leads tied to intent segments—not scraped lists or forced registrations.',
            },
            {
              value: 'Attributed',
              label: 'Channel clarity',
              description: 'SEO, paid, and referral paths tagged so budget follows what books appointments.',
            },
            {
              value: 'Fast',
              label: 'Response window',
              description: 'Automation and inbox discipline so speed-to-lead matches luxury service expectations.',
            },
          ]}
        />

        <section className="py-16 md:py-24 bg-[var(--surface-base)] border-y border-[var(--color-ink-200)]">
          <div className="container-max max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
              EEAT: evidence-led lead generation
            </h2>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
              <strong className="font-normal text-[var(--color-off-black)]">Experience.</strong> We publish{' '}
              <Link href="/case-studies" className="underline hover:opacity-70">
                case studies
              </Link>{' '}
              with named clients, time windows, and metrics (for example Willow Brook: 46 leads in three weeks; Jade:
              3× qualified pipeline in 90 days in the summaries on this page—each links to the full write-up).
            </p>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
              <strong className="font-normal text-[var(--color-off-black)]">Expertise.</strong> Lead gen spans{' '}
              <Link href="/seo-optimization" className="underline hover:opacity-70">
                SEO
              </Link>
              ,{' '}
              <Link href="/google-ads-management" className="underline hover:opacity-70">
                Google Ads
              </Link>
              , creative landing paths, and{' '}
              <Link href="/analytics-reporting" className="underline hover:opacity-70">
                reporting
              </Link>
              . When strategy should precede spend, start with{' '}
              <Link href="/real-estate-seo-consultant" className="underline hover:opacity-70">
                real estate SEO consulting
              </Link>
              .
            </p>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
              <strong className="font-normal text-[var(--color-off-black)]">Trust.</strong> Testimonials on this page
              are from published engagements. Marketing must respect fair housing—see our{' '}
              <Link href="/fair-housing" className="underline hover:opacity-70">
                Fair Housing statement
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <div className="max-w-2xl mb-20 md:mb-28">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
                Case studies: lead volume and pipeline lift
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                Both studies focus on inbound outcomes—paid + local surfaces for Willow Brook; content, search, and
                automation for Jade. Open each case for methodology, not cherry-picked screenshots alone.
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
                      Read the full case study
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
                      alt={`${study.title} — documented lead generation results`}
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

        <section className="py-16 md:py-24 bg-white border-t border-[var(--color-ink-200)]">
          <div className="container-max max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
              Programs that feed the same pipeline
            </h2>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
              Listing and project creative:{' '}
              <Link href="/property-marketing" className="underline hover:opacity-70">
                property marketing
              </Link>
              ,{' '}
              <Link href="/single-property-websites" className="underline hover:opacity-70">
                single property websites
              </Link>
              ,{' '}
              <Link href="/luxury-condo-websites" className="underline hover:opacity-70">
                luxury condo websites
              </Link>
              , and{' '}
              <Link href="/websites-for-new-developments" className="underline hover:opacity-70">
                websites for new developments
              </Link>
              . Full vertical GTM:{' '}
              <Link href="/luxury-development-marketing" className="underline hover:opacity-70">
                luxury development marketing
              </Link>
              . Portfolio reference:{' '}
              <Link href="/real-estate-agent-website-samples" className="underline hover:opacity-70">
                website design portfolio
              </Link>
              .
            </p>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
              Editorial support for campaigns:{' '}
              <Link href="/blog/google-ads-for-realtors" className="underline hover:opacity-70">
                Google Ads for real estate
              </Link>{' '}
              and{' '}
              <Link href="/blog/best-10-luxury-real-estate-marketing-tactics-for-2026" className="underline hover:opacity-70">
                luxury real estate marketing tactics (2026)
              </Link>
              . All services:{' '}
              <Link href="/services" className="underline hover:opacity-70">
                /services
              </Link>
              .
            </p>
          </div>
        </section>

        <ServiceProcess
          id="how-it-works"
          heading="How we build a lead generation system—not a one-off campaign."
          description="Four stages so acquisition, capture, and follow-up stay connected after launch week."
          steps={[
            {
              title: 'Diagnose intent & leakage',
              description:
                'Search console, ads data, form drop-off, and speed-to-lead—we find where budget and attention evaporate before conversations happen.',
            },
            {
              title: 'Rebuild the acquisition spine',
              description:
                'Keyword and offer map, landing paths, and creative that match how luxury buyers actually compare agents and listings.',
            },
            {
              title: 'Launch & calibrate spend',
              description:
                'Google Ads and organic programs paced together—so paid fills gaps while SEO compounds (see our Google Ads program for execution detail).',
            },
            {
              title: 'Instrument & iterate weekly',
              description:
                'Dashboards and CRM signals so you scale what books tours and cut what only burns budget.',
            },
          ]}
        />

        <section className="py-16 md:py-24 bg-[var(--surface-base)] border-y border-[var(--color-ink-200)]">
          <div className="container-max max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-10">
              FAQ: real estate lead generation
            </h2>
            <dl className="space-y-10">
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Is lead generation only Google Ads?
                </dt>
                <dd className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  No. Sustainable pipelines pair paid demand with{' '}
                  <Link href="/seo-optimization" className="underline hover:opacity-70">
                    organic search
                  </Link>{' '}
                  and better capture. Ads accelerate; SEO compounds—Willow Brook is an example where both surfaces mattered
                  in the published narrative.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How fast can we see leads?
                </dt>
                <dd className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Timelines depend on starting assets and competition. Willow Brook’s published window showed a sharp
                  lift inside three weeks after systems went live—your market may differ; we set expectations in discovery,
                  not in a generic guarantee block.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Do you integrate with my CRM?
                </dt>
                <dd className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Yes—routing, tagging, and automation are part of a complete system (Jade’s case documents automation
                  velocity). Exact integrations depend on your stack; we confirm during onboarding.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do we start?
                </dt>
                <dd className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Use the contact form below or{' '}
                  <Link href="/calendar" className="underline hover:opacity-70">
                    schedule a strategy call
                  </Link>{' '}
                  with goals, market, and current spend—we will map a realistic plan to documented benchmarks.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <Testimonials />

        <ServiceCities
          heading="Lead generation programs by metro."
          description="Dense metros to fast-growing corridors—budget and creative tuned to how luxury buyers search locally."
          cities={topCities.map((city) => ({
            ...city,
            slug: city.slug.startsWith('#') ? city.slug : `/real-estate-lead-generation/${city.slug}`,
          }))}
        />

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
