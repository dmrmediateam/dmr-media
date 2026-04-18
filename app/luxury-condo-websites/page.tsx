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
  title: 'Luxury Condo Website Design & SEO | High-Rise & Boutique Buildings | DMR Media',
  description:
    'Luxury condo websites for agents, teams, and developers: floorplan-led UX, amenities storytelling, technical SEO, schema, and speed. Pair with Google Ads and analytics. Results documented in published case studies.',
  keywords: [
    'luxury condo website',
    'luxury condo website design',
    'condo website design',
    'high rise real estate website',
    'luxury condominium website',
    'condo development website',
    'real estate website SEO condos',
    'boutique condo building website',
  ].join(', '),
  alternates: {
    canonical: 'https://www.dmrmedia.org/luxury-condo-websites',
  },
  openGraph: {
    title: 'Luxury Condo Website Design & SEO | DMR Media',
    description:
      'Tower-ready luxury condo websites: performance, search visibility, and lead paths buyers expect—backed by documented client outcomes.',
    url: 'https://www.dmrmedia.org/luxury-condo-websites',
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Condo Website Design & SEO | DMR Media',
    description:
      'Luxury condo websites engineered for search, speed, and serious buyers—in high-rise and boutique markets.',
  },
};

const CASE_STUDIES = [
  {
    id: 'eagan-luxury-real-estate',
    subheading: 'Tampa Bay luxury · $11M+ closed volume (Q1 2026)',
    title: 'Eagan Luxury — coastal luxury buyers, executed online',
    description:
      'Eagan Luxury competes for waterfront and high-end buyers in Greater Pinellas County—markets where condominiums and estate homes sit side by side. Their engagement shows how we unify brand, listing presentation, and demand when the buyer journey starts on search.',
    image: '/images/screencapture-eaganluxury-2025-12-17-21_25_49.png',
    imageRight: true,
  },
  {
    id: 'michael-seo-transformation',
    subheading: '21× search impressions after relaunch',
    title: 'Michael — technical foundation luxury buyers never see (but Google does)',
    description:
      'We replaced a silent IDX template with a fast, schema-rich WordPress build—21× search impressions and a 312% lift in organic sessions in published results. That is the same engineering discipline we apply when a condo tower needs crawl clarity, Core Web Vitals, and structured data done correctly.',
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

export default function LuxuryCondoWebsitesPage() {
  return (
    <SEOWrapper slug="/luxury-condo-websites">
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
                  Luxury Condo Websites
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]">
                  Condo websites that earn trust before the showing.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_16px_rgba(0,0,0,0.7)]">
                  Floorplans, amenities, views, and neighborhood proof—presented with the speed and technical SEO luxury
                  buyers expect when they compare towers on their phone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ClientLogosSlider />

        <ServiceStats
          heading="What we optimize first on luxury condo builds."
          stats={[
            {
              value: 'Technical SEO',
              label: 'Crawl & schema',
              description: 'Clean IA, structured data, and indexable pages so tower and line-level searches can surface.',
            },
            {
              value: 'Core UX',
              label: 'Floorplan + amenity flow',
              description: 'Buyers compare lines, views, and HOA value fast—we design paths that answer those questions.',
            },
            {
              value: 'Speed',
              label: 'Perceived quality',
              description: 'Heavy photography without sluggish loads—performance is part of the luxury signal.',
            },
          ]}
        />

        <section className="py-16 md:py-24 bg-[var(--surface-base)] border-y border-[var(--color-ink-200)]">
          <div className="container-max max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
              Experience, expertise, and proof (EEAT)
            </h2>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
              <strong className="font-normal text-[var(--color-off-black)]">Experience.</strong> We ship luxury real
              estate systems every week—not hypothetical wireframes. Outcomes for representative engagements are
              published as{' '}
              <Link href="/case-studies" className="underline hover:opacity-70">
                case studies
              </Link>{' '}
              with metrics you can verify (for example, the Eagan Luxury and Michael transformations linked on this
              page).
            </p>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
              <strong className="font-normal text-[var(--color-off-black)]">Expertise.</strong> Condo sites sit at the
              intersection of brand storytelling,{' '}
              <Link href="/seo-optimization" className="underline hover:opacity-70">
                technical SEO
              </Link>
              ,{' '}
              <Link href="/google-ads-management" className="underline hover:opacity-70">
                paid search
              </Link>
              , and{' '}
              <Link href="/analytics-reporting" className="underline hover:opacity-70">
                measurement
              </Link>
              . We also run{' '}
              <Link href="/real-estate-seo-consultant" className="underline hover:opacity-70">
                SEO consulting
              </Link>{' '}
              for teams that need a documented plan before build, and{' '}
              <Link href="/luxury-development-marketing" className="underline hover:opacity-70">
                luxury development marketing
              </Link>{' '}
              when the inventory is a full vertical product—not only resale lines.
            </p>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
              <strong className="font-normal text-[var(--color-off-black)]">Trust.</strong> You will see how we work in
              client reviews on this page, transparent program links (no bait-and-switch “packages”), and a direct path
              to our team via the contact form. We are also committed to fair housing in all marketing—see our{' '}
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
                Case studies with transferable lessons for condo sites
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                Neither study is titled “condo website only”—we are explicit about that. They are luxury residential
                engagements where search, performance, and presentation had to match high-ticket buyers—the same bar we
                hold for boutique lines and high-rise resale.
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
              Related services & reading
            </h2>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-6">
              For one-off listing microsites, see{' '}
              <Link href="/single-property-websites" className="underline hover:opacity-70">
                single property websites
              </Link>
              ; for listing sites plus a managed paid burst, review{' '}
              <Link href="/property-marketing" className="underline hover:opacity-70">
                luxury property marketing
              </Link>
              . Browse visual patterns in the{' '}
              <Link href="/real-estate-agent-website-samples" className="underline hover:opacity-70">
                real estate website design portfolio
              </Link>
              .
            </p>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
              Editorial guides that support condo campaigns:{' '}
              <Link href="/blog/google-ads-for-realtors" className="underline hover:opacity-70">
                Google Ads for real estate
              </Link>{' '}
              and{' '}
              <Link href="/blog/best-10-luxury-real-estate-marketing-tactics-for-2026" className="underline hover:opacity-70">
                luxury real estate marketing tactics for 2026
              </Link>
              . Full index:{' '}
              <Link href="/blog" className="underline hover:opacity-70">
                DMR Media blog
              </Link>
              .
            </p>
          </div>
        </section>

        <ServiceProcess
          id="how-it-works"
          heading="How we build a luxury condo website, end to end."
          description="Clear stages so stakeholders know what ships when—copy aligned with how serious teams buy creative."
          steps={[
            {
              title: 'Inventory & buyer map',
              description:
                'Lines, view corridors, HOA differentiators, and competitor towers—we document what must win on the page before design opens in Figma.',
            },
            {
              title: 'Information architecture',
              description:
                'Sitemaps for residences, amenities, neighborhood, and conversion—structured so search engines and humans both find the proof they need.',
            },
            {
              title: 'Design + performance build',
              description:
                'Typography, photography, and motion that feel on-brand—implemented with Core Web Vitals, schema, and analytics events baked in.',
            },
            {
              title: 'Launch + growth layer',
              description:
                'Optional: connect to Google Ads, local SEO silos, and dashboards—so post-launch demand is not an afterthought.',
            },
          ]}
        />

        <section className="py-16 md:py-24 bg-[var(--surface-base)] border-y border-[var(--color-ink-200)]">
          <div className="container-max max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-10">
              Frequently asked questions: luxury condo websites
            </h2>
            <dl className="space-y-10">
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What should a luxury condo website include?
                </dt>
                <dd className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Clear line comparisons, floorplan downloads or interactive viewers, amenity storytelling, parking and
                  storage reality, HOA monthly context (without misleading precision), neighborhood walkability, and a
                  single obvious path to tour requests. Luxury is clarity—not decoration stacked on confusion.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How is condo SEO different from single-family SEO?
                </dt>
                <dd className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Buyers search by building name, line, view, and micro-neighborhood (“Gold Coast,” “Brickell,” “River
                  North”). Winning pages match that intent with unique copy per line where possible, internal links that
                  reinforce the building entity, and schema that helps Google understand the property as a specific
                  place—not a generic IDX clone.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Do you only work with resale agents, or also developers?
                </dt>
                <dd className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Both. Resale teams often need a flagship site that supports multiple towers; developers need presale
                  narrative and phased releases. If you are launching a vertical product, start with our{' '}
                  <Link href="/luxury-development-marketing" className="underline hover:opacity-70">
                    luxury development marketing
                  </Link>{' '}
                  overview as well.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Will my condo website connect to IDX?
                </dt>
                <dd className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  When inventory discovery matters, yes—where MLS rules and your vendor allow. When the goal is a
                  flagship building story, we often pair IDX modules with custom line pages so you are not trapped in a
                  template grid. Feeds and compliance vary by market; we confirm requirements before build.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do I get started with DMR Media?
                </dt>
                <dd className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Send the contact form below with your tower, audience, and timeline—or{' '}
                  <Link href="/calendar" className="underline hover:opacity-70">
                    schedule a strategy call
                  </Link>{' '}
                  if you prefer a live walkthrough of programs and proof.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <Testimonials />

        <ServiceCities
          heading="Luxury condo website design across major metros."
          description="Gateway cities and Sun Belt growth markets—local nuance with the same technical standards."
          cities={topCities.map((city) => ({
            ...city,
            slug: city.slug.startsWith('#') ? city.slug : `/luxury-condo-websites/${city.slug}`,
          }))}
        />

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </SEOWrapper>
  );
}
