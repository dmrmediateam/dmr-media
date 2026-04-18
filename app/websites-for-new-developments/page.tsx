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
  title: 'Websites for New Developments | Presale & Sell-Through Digital | DMR Media',
  description:
    'New development websites: phased gallery UX, plan libraries, CRM-ready lead capture, technical SEO, and schema. Pair with luxury development marketing, Google Ads, and analytics. Outcomes documented in published case studies.',
  keywords: [
    'websites for new developments',
    'new development website',
    'real estate developer website',
    'presale website design',
    'new construction website',
    'housing development website',
    'luxury development website',
  ].join(', '),
  alternates: {
    canonical: 'https://www.dmrmedia.org/websites-for-new-developments',
  },
  openGraph: {
    title: 'Websites for New Developments | DMR Media',
    description:
      'Gallery-grade development websites—performance, SEO, and capture paths engineered for presale and absorption.',
    url: 'https://www.dmrmedia.org/websites-for-new-developments',
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Websites for New Developments | DMR Media',
    description:
      'Phased new development websites with technical SEO, speed, and CRM-ready capture—built for serious buyers.',
  },
};

const CASE_STUDIES = [
  {
    id: 'eagan-luxury-real-estate',
    subheading: 'Multi-site consolidation · zero ranking loss at launch',
    title: 'Eagan Luxury — one flagship digital home for a fragmented brand',
    description:
      'Before launch, multiple legacy property and community sites diluted authority. We consolidated into one presence with surgical redirects—zero measurable ranking loss and a 10% increase in tracked keywords at launch, then scaled SEO and Google Ads. That is the same migration discipline we apply when a development replaces a holding page with a real presale gallery.',
    image: '/images/screencapture-eaganluxury-2025-12-17-21_25_49.png',
    imageRight: true,
  },
  {
    id: 'michael-seo-transformation',
    subheading: '21× impressions · +312% organic sessions',
    title: 'Michael — when the “template” stops indexing, revenue hides',
    description:
      'We replaced a silent IDX template with a fast, schema-rich build—21× search impressions and +312% organic sessions in published results. New development sites fail for the same reason: no crawl budget strategy, no entity clarity, no performance budget. We fix the foundation before the renders ship.',
    image: '/images/MichealTraffic.png',
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

export default function WebsitesForNewDevelopmentsPage() {
  return (
    <SEOWrapper slug="/websites-for-new-developments">
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
                  Websites for New Developments
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  The presale gallery buyers expect—built to rank and convert.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  Phased releases, plan libraries, amenities, and capture paths—implemented with Core Web Vitals,
                  structured data, and analytics so sales leadership sees what the site earns.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading="What separates a brochure from a sell-through site."
          stats={[
            {
              value: 'Phased IA',
              label: 'Release-ready structure',
              description: 'URLs and navigation that survive phase drops without breaking search equity.',
            },
            {
              value: 'Entity SEO',
              label: 'Project clarity',
              description: 'Schema and copy that teach Google this is a specific place—not a generic template.',
            },
            {
              value: 'CRM-ready',
              label: 'Capture & routing',
              description: 'Forms, events, and broker workflows that respect who owns the lead.',
            },
          ]}
        />

        <section className="py-16 md:py-24 bg-[var(--surface-base)] border-y border-[var(--color-ink-200)]">
          <div className="container-max max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
              EEAT: why teams trust DMR with development digital
            </h2>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
              <strong className="font-normal text-[var(--color-off-black)]">Experience.</strong> We publish{' '}
              <Link href="/case-studies" className="underline hover:opacity-70">
                case studies
              </Link>{' '}
              with metrics you can audit—not anonymous “portfolio tiles.” The Eagan and Michael engagements below show
              migration discipline and technical SEO outcomes relevant to any flagship development launch.
            </p>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
              <strong className="font-normal text-[var(--color-off-black)]">Expertise.</strong> Development sites sit
              across{' '}
              <Link href="/seo-optimization" className="underline hover:opacity-70">
                SEO
              </Link>
              ,{' '}
              <Link href="/google-ads-management" className="underline hover:opacity-70">
                paid demand
              </Link>
              ,{' '}
              <Link href="/analytics-reporting" className="underline hover:opacity-70">
                measurement
              </Link>
              , and creative. When you need the full go-to-market—not only the site—our{' '}
              <Link href="/luxury-development-marketing" className="underline hover:opacity-70">
                luxury development marketing
              </Link>{' '}
              program layers narrative, media, and channel orchestration on top of this foundation.
            </p>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
              <strong className="font-normal text-[var(--color-off-black)]">Trust.</strong> Client voices appear in the
              testimonials block on this page. Fair housing and compliance matter in development creative—read our{' '}
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
                Case studies with lessons for new development websites
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                These are luxury residential engagements—not a labeled “developer microsite” PDF—but the problems
                rhyme: fragmented domains, weak indexing, and buyers who expect a flagship digital experience before they
                tour.
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
                      alt={`${study.title} — documented DMR Media results`}
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
              Related programs & reading
            </h2>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
              Visual patterns:{' '}
              <Link href="/real-estate-agent-website-samples" className="underline hover:opacity-70">
                real estate website design portfolio
              </Link>
              . Line-level microsites:{' '}
              <Link href="/single-property-websites" className="underline hover:opacity-70">
                single property websites
              </Link>
              . Vertical residential:{' '}
              <Link href="/luxury-condo-websites" className="underline hover:opacity-70">
                luxury condo websites
              </Link>
              . Listing bursts:{' '}
              <Link href="/property-marketing" className="underline hover:opacity-70">
                property marketing
              </Link>
              . Custom search roadmaps:{' '}
              <Link href="/real-estate-seo-consultant" className="underline hover:opacity-70">
                SEO consulting
              </Link>
              .
            </p>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
              Editorial:{' '}
              <Link href="/blog/google-ads-for-realtors" className="underline hover:opacity-70">
                Google Ads for real estate
              </Link>
              ,{' '}
              <Link href="/blog/best-10-luxury-real-estate-marketing-tactics-for-2026" className="underline hover:opacity-70">
                luxury real estate marketing tactics (2026)
              </Link>
              , and the full{' '}
              <Link href="/blog" className="underline hover:opacity-70">
                blog index
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
          heading="How we deliver websites for new developments."
          description="Clear stages so capital partners, marketing, and sales know what ships when."
          steps={[
            {
              title: 'Stakeholder map & IA',
              description:
                'Phases, plan SKUs, amenities, broker rules, and compliance—documented before design so URLs do not thrash mid-build.',
            },
            {
              title: 'Creative + UX prototype',
              description:
                'Gallery narrative, plan comparison, and mobile-first flows that answer “why this project, why now.”',
            },
            {
              title: 'Engineering + SEO launch',
              description:
                'Performance budget, schema, analytics events, and redirect strategy for legacy domains or holding pages.',
            },
            {
              title: 'Growth handoff',
              description:
                'Connect to Google Ads, local SEO, and dashboards—or engage the broader luxury development marketing program when you are ready.',
            },
          ]}
        />

        <section className="py-16 md:py-24 bg-[var(--surface-base)] border-y border-[var(--color-ink-200)]">
          <div className="container-max max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-10">
              FAQ: new development websites
            </h2>
            <dl className="space-y-10">
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What pages does a new development website usually need?
                </dt>
                <dd className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  At minimum: project story, location/neighborhood proof, amenities, plan library with comparable
                  clarity, availability or waitlist logic, team and broker partners, legal disclaimers, and a single
                  dominant call-to-action for tours. Phased communities add release calendars and construction updates
                  where appropriate.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do you protect SEO when we replace a holding page?
                </dt>
                <dd className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Redirect maps, canonical strategy, and indexation testing before cutover—similar in discipline to the
                  published Eagan consolidation (301 plan with measured ranking stability at launch).
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Is this only the website, or marketing too?
                </dt>
                <dd className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  This page focuses on the flagship website. When you need presale media, paid, and sell-through
                  orchestration, pair with{' '}
                  <Link href="/luxury-development-marketing" className="underline hover:opacity-70">
                    luxury development marketing
                  </Link>
                  .
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do we start?
                </dt>
                <dd className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Use the contact form below with project stage and URL—or{' '}
                  <Link href="/calendar" className="underline hover:opacity-70">
                    schedule a strategy call
                  </Link>{' '}
                  for a live walkthrough of programs and proof.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <Testimonials />

        <ServiceCities
          heading="Websites for new developments—major metros we support."
          description="Gateway cities to Sun Belt growth markets—same build standards, tuned to local buyer expectations."
          cities={topCities.map((city) => ({
            ...city,
            slug: city.slug.startsWith('#') ? city.slug : `/websites-for-new-developments/${city.slug}`,
          }))}
        />

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
