import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ServiceStats from '@/components/service/ServiceStats';
import ServiceCities from '@/components/service/ServiceCities';
import SEOWrapper from '@/components/SEOWrapper';

const BASE = 'https://www.dmrmedia.org';

export const metadata: Metadata = {
  title: 'Single Property Websites | Luxury Listing Marketing | DMR Media',
  description:
    'Dedicated single-property websites for luxury listings. Custom design, SEO optimization, and integrated Google Ads campaigns to accelerate sales.',
  keywords:
    'single property websites for real estate, luxury listing website, single property website design, dedicated listing website, luxury property microsite, listing SEO',
  alternates: {
    canonical: `${BASE}/single-property-websites`,
  },
  openGraph: {
    title: 'Single Property Websites | Luxury Listing Marketing | DMR Media',
    description:
      'Dedicated single-property websites for luxury listings. Custom design, SEO optimization, and integrated Google Ads campaigns to accelerate sales.',
    url: `${BASE}/single-property-websites`,
    siteName: 'DMR Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Single Property Websites | Luxury Listing Marketing | DMR Media',
    description:
      'Dedicated single-property websites for luxury listings. Custom design, SEO optimization, and integrated Google Ads campaigns to accelerate sales.',
  },
};

const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/dmrmedia.org';

const FAQ_ITEMS = [
  {
    question: 'How much does a single property website cost?',
    answer:
      'Investment depends on media volume, floorplan interactivity, copy depth, and whether you bundle a 30-day Google Ads program. Many listing campaigns align with our flat property marketing packages—see transparent tiers on our property marketing page or request a scoped quote for architecture-only microsites.',
  },
  {
    question: 'How long does it take to build?',
    answer:
      'A typical luxury microsite moves from signed scope to launch in a few weeks: narrative and UX first, then build, schema, QA, and optional paid launch. Rush timelines around broker opens or media debuts are available when assets are ready on your side.',
  },
  {
    question: 'Can I update the website myself?',
    answer:
      'Yes. We deliver a handoff with editing guidance for copy and imagery swaps, plus analytics hooks. Many teams prefer we remain on retainer for seasonal refreshes; either model works.',
  },
  {
    question: "What if the property doesn't sell?",
    answer:
      'The site remains a branded sales asset for price improvements, co-list introductions, or auction pivots. Paid bursts can be recalibrated to new audiences; SEO equity stays with the listing URL you promote in email and social.',
  },
  {
    question: 'Do you integrate with my MLS?',
    answer:
      'Single-property sites intentionally sit outside IDX boilerplate so you control narrative and speed. Where compliance requires disclaimers or data attribution, we embed the minimum viable MLS elements without sacrificing the immersive buyer journey.',
  },
] as const;

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const PROCESS_STEPS = [
  {
    title: 'Property Analysis & Positioning',
    description:
      'Buyer persona, competitive set, and the one story that differentiates this address—before a single wireframe.',
  },
  {
    title: 'Website Design & Build',
    description:
      'Immersive layouts for photography, video, floorplans, and neighborhood proof—performance-tuned for mobile first.',
  },
  {
    title: 'SEO Optimization',
    description:
      'Property-specific metadata, structured data, crawl hygiene, and internal links that match how luxury buyers search.',
  },
  {
    title: 'Google Ads Launch',
    description:
      'Optional 30-day burst with geo-fenced demand, creative matched to the microsite, and retargeting where it makes sense.',
  },
  {
    title: 'Reporting & Optimization',
    description:
      'Dashboards for traffic, lead quality, and spend pacing—weekly refinements until the campaign objective is met.',
  },
] as const;

const PROCESS_STEP_SHORT = ['Positioning', 'Design & build', 'SEO', 'Ads launch', 'Reporting'] as const;

const PROPERTY_FEATURES = [
  {
    title: 'Custom Website Design',
    bullets: [
      'Immersive property photography and cinematic video',
      'Interactive floorplans and gallery navigation',
      'Neighborhood guides that answer “why this block”',
      'Virtual tour embeds (Matterport, Vimeo, and more)',
    ],
    image: '/images/propertyWebsiteImages/screencapture-2100pine-vercel-app-2026-03-25-19_45_27.png',
    imageAlt: 'Single property website design example — luxury listing microsite',
  },
  {
    title: 'SEO Optimization',
    bullets: [
      'Property-specific keyword targeting and URL strategy',
      'Schema markup for listing details, organization, and FAQs',
      'Local and hyperlocal signals aligned to the true trade area',
    ],
    image: '/images/EaganCaseStudy/GoogleSearchConsole.png',
    imageAlt: 'SEO performance and search visibility for a luxury listing campaign',
  },
  {
    title: 'Google Ads Campaign',
    bullets: [
      '30-day paid search burst tuned to listing price band',
      'Geo-targeted buyer segments and disciplined negatives',
      'Retargeting to recapture engaged luxury shoppers',
    ],
    image: '/images/EaganCaseStudy/SearchAds.png',
    imageAlt: 'Google Ads search campaign example for real estate',
  },
] as const;

const LISTING_EXAMPLES = [
  {
    name: 'Ocean Breeze',
    location: 'Turks & Caicos',
    price: '$6.5M',
    description:
      'Waterfront villa campaign with international buyer messaging, cinematic media, and a conversion path built for remote inquiries.',
    href: 'https://ocean-breeze-one.vercel.app/',
    image: '/images/propertyWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-25-19_45_37.png',
    metrics: ['Live dedicated microsite', 'International search positioning', 'Lead capture tuned for remote buyers'],
    imageRight: true,
  },
  {
    name: 'Obsidian Denver',
    location: "Sloan's Lake, Denver",
    price: '$1.05M',
    description:
      'Architecture-forward half-duplex with rooftop views—site structure mirrors the vertical flow of the home and highlights no-HOA positioning for Denver buyers.',
    href: 'https://www.obsidiandenver.com/3227-w-20th-ave-denver-co-80211',
    image: '/images/ClientWebsiteImages/screencapture-obsidiandenver-3227-w-20th-ave-denver-co-80211-2026-03-29-19_50_09.png',
    metrics: ['Neighborhood-specific copy', 'Schema-ready listing blocks', 'Paid-ready landing alignment'],
    imageRight: false,
  },
  {
    name: '2100 Pine Ave',
    location: 'Manhattan Beach, CA',
    price: 'Luxury coastal estate',
    description:
      'Tree Section custom residence with private outdoor retreat—microsite pairs long-form storytelling with gallery-led UX for Los Angeles trophy buyers.',
    href: 'https://2100pine.vercel.app/',
    image: '/images/propertyWebsiteImages/screencapture-2100pine-vercel-app-2026-03-25-19_45_27.png',
    metrics: ['Mobile-first gallery UX', 'Open-house-ready speed scores', 'Integrated inquiry routing'],
    imageRight: true,
  },
] as const;

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

const AGENT_HEADSHOTS = [
  { src: '/images/ClientImages/Micheal.png', alt: 'Luxury real estate client — DMR Media' },
  { src: '/images/ClientImages/Bill-Breaden-1-227x226.avif', alt: 'Luxury real estate client — DMR Media' },
] as const;

export default function SinglePropertyWebsitesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SEOWrapper slug="/single-property-websites">
        <div className="min-h-screen bg-white">
          {/* Hero — desktop + mobile property site imagery */}
          <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-400)] font-serif block mb-4">
                    Single property websites for real estate
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight mb-6">
                    Single Property Websites That Sell Luxury Listings Faster
                  </h1>
                  <p className="text-lg md:text-xl text-[var(--color-ink-300)] font-serif leading-relaxed mb-8 max-w-xl">
                    A dedicated website for each exceptional property. Immersive design, SEO optimization, and
                    integrated Google Ads—all engineered to close deals faster.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#contact"
                      className="inline-flex justify-center px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-85 transition-opacity text-center"
                    >
                      Start a Campaign
                    </a>
                    <Link
                      href="/real-estate-agent-website-samples"
                      className="inline-flex justify-center px-8 py-4 border border-[var(--color-off-black)] text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-colors text-center"
                    >
                      View Portfolio
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-3 sm:gap-4 items-end">
                  <div className="col-span-3 relative aspect-[5/4] rounded-sm overflow-hidden border border-[var(--color-ink-200)] shadow-sm bg-[var(--color-ink-200)]">
                    <Image
                      src="/images/ClientWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-29-19_49_50.png"
                      alt="Luxury single property website shown on desktop"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>
                  <div className="col-span-2 relative aspect-[9/16] max-h-[420px] rounded-sm overflow-hidden border border-[var(--color-ink-200)] shadow-sm bg-[var(--color-ink-200)]">
                    <Image
                      src="/images/propertyWebsiteImages/screencapture-2100pine-vercel-app-2026-03-25-19_45_27.png"
                      alt="Luxury listing website on mobile"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 40vw, 18vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ClientLogosSlider />

          <ServiceStats
            heading="Built for listings that cannot afford to look generic."
            stats={[
              {
                value: '<2s',
                label: 'Target first paint',
                description: 'Lean stacks and disciplined media so the experience matches the home.',
              },
              {
                value: '100%',
                label: 'Listing-native UX',
                description: 'No IDX noise—one address, one narrative, one conversion path.',
              },
              {
                value: 'SEO + Ads',
                label: 'Optional demand layer',
                description: 'Pair the microsite with structured SEO and paid bursts when you need velocity.',
              },
            ]}
          />

          {/* Why dedicated sites */}
          <section className="py-16 md:py-24 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="why-dedicated">
            <div className="container-max">
              <div className="max-w-3xl mb-14 md:mb-20">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
                  Why luxury listings deserve dedicated websites
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  MLS pages force parity: identical frames, truncated copy, and third-party branding. A single-property
                  website is your controlled stage—where photography, video, floorplans, and neighborhood proof convert
                  curiosity into qualified tours.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-4xl">
                {[
                  'Stand out from MLS listings with bespoke layout and pacing',
                  'Control the narrative and buyer experience from first click to inquiry',
                  'Capture high-intent search traffic with listing-specific SEO',
                  'Integrate with Google Ads for precision buyer targeting and retargeting',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed border-l-2 border-[var(--color-off-black)] pl-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="max-w-5xl mx-auto">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4 text-center">
                  MLS listing vs. dedicated property website
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <figure className="relative aspect-[2/1] border border-[var(--color-ink-200)] overflow-hidden bg-[var(--color-ink-200)]">
                    <Image
                      src="/images/ClientWebsites/screencapture-realestatebycherylnj-2026-03-04-03_35_34.png"
                      alt="Traditional brokerage MLS-heavy website layout — generic listing presentation"
                      fill
                      className="object-cover object-top grayscale contrast-[0.95]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <figcaption className="absolute bottom-0 inset-x-0 bg-black/55 text-white text-xs uppercase tracking-[0.2em] font-serif py-3 text-center">
                      MLS-style template
                    </figcaption>
                  </figure>
                  <figure className="relative aspect-[2/1] border border-[var(--color-off-black)] overflow-hidden bg-[var(--color-ink-200)]">
                    <Image
                      src="/images/propertyWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-25-19_45_37.png"
                      alt="Dedicated luxury single property website with immersive listing creative"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <figcaption className="absolute bottom-0 inset-x-0 bg-[var(--color-off-black)]/85 text-white text-xs uppercase tracking-[0.2em] font-serif py-3 text-center">
                      Dedicated property website
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>

          {/* What's included */}
          <section className="py-16 md:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="package">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                Complete Property Marketing Package
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-16 md:mb-24">
                Three integrated workstreams—design, organic search, and paid demand—so your listing site is not only
                beautiful but discoverable and measurable.
              </p>

              <div className="space-y-20 md:space-y-28">
                {PROPERTY_FEATURES.map((block, i) => (
                  <article
                    key={block.title}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                      i % 2 === 1 ? '' : ''
                    }`}
                  >
                    <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                      <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">
                        {block.title}
                      </h3>
                      <ul className="space-y-3">
                        {block.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-[15px] text-[var(--color-ink-300)] font-serif leading-relaxed">
                            <span className="text-[var(--color-off-black)] mt-1">→</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className={`relative min-h-[260px] sm:min-h-[320px] border border-[var(--color-ink-200)] overflow-hidden bg-white ${
                        i % 2 === 1 ? 'lg:order-1' : ''
                      }`}
                    >
                      <Image
                        src={block.image}
                        alt={block.imageAlt}
                        fill
                        className="object-contain object-top p-2 sm:p-4"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-16 md:py-28 bg-white border-b border-[var(--color-ink-200)] scroll-mt-24" id="process">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                Our Single Property Process
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-14 md:mb-20">
                A five-step system from positioning through optimization—so launch dates align with broker previews and
                media moments.
              </p>

              {/* Timeline graphic — horizontal on desktop */}
              <div className="hidden md:block mb-16">
                <div className="relative flex justify-between items-start max-w-5xl mx-auto px-2">
                  <div className="absolute top-5 left-[6%] right-[6%] h-px bg-[var(--color-ink-200)] z-0" aria-hidden />
                  {PROCESS_STEPS.map((step, idx) => (
                    <div key={step.title} className="relative z-10 flex flex-col items-center text-center w-[19%]">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-off-black)] text-white text-xs font-serif flex items-center justify-center mb-3">
                        {idx + 1}
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] font-serif mb-1">
                        Step {idx + 1}
                      </p>
                      <p className="text-xs font-serif font-light text-[var(--color-off-black)] leading-snug px-1">
                        {PROCESS_STEP_SHORT[idx]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
                {PROCESS_STEPS.map((step, idx) => (
                  <div key={step.title} className="border-t border-[var(--color-ink-200)] pt-6 md:pt-0 md:border-0">
                    <div className="flex items-center gap-3 mb-3 md:hidden">
                      <span className="w-9 h-9 rounded-full bg-[var(--color-off-black)] text-white text-xs font-serif flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h3 className="text-lg font-serif font-light text-[var(--color-off-black)]">{step.title}</h3>
                    </div>
                    <h3 className="hidden md:block text-lg font-serif font-light text-[var(--color-off-black)] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-16 md:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="pricing">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-4 max-w-3xl">
                Transparent Pricing
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-10">
                Scope scales with media depth, interactive floorplans, and whether you pair the build with our bundled{' '}
                <Link href="/property-marketing" className="underline hover:opacity-70">
                  property marketing
                </Link>{' '}
                program (site + 30-day Ads). Use the matrix below as a planning guide—confirm numbers on a fit call.
              </p>

              <div className="overflow-x-auto border border-[var(--color-ink-200)] bg-white mb-10">
                <table className="w-full min-w-[640px] text-left text-sm font-serif">
                  <thead>
                    <tr className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
                      <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs">
                        Typical list price
                      </th>
                      <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs">
                        Single-property website
                      </th>
                      <th className="p-4 font-light text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs">
                        Site + 30-day Ads bundle
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[var(--color-ink-300)]">
                    <tr className="border-b border-[var(--color-ink-200)]">
                      <td className="p-4">Under $2M</td>
                      <td className="p-4">Focused microsite + essential schema</td>
                      <td className="p-4">Aligns with entry bundled tiers — see property marketing</td>
                    </tr>
                    <tr className="border-b border-[var(--color-ink-200)]">
                      <td className="p-4">$2M – $5M</td>
                      <td className="p-4">Expanded media, floorplan UX, neighborhood hub</td>
                      <td className="p-4">Recommended for velocity — paid + organic in one flat fee</td>
                    </tr>
                    <tr>
                      <td className="p-4">$5M+ / international</td>
                      <td className="p-4">Custom cinematic production + multilingual options</td>
                      <td className="p-4">Custom budget pacing + retargeting strategy</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <a
                href="#contact"
                className="inline-flex justify-center px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-85 transition-opacity"
              >
                Request pricing for your listing
              </a>
            </div>
          </section>

          {/* Internal linking */}
          <section className="py-16 md:py-20 bg-white border-b border-[var(--color-ink-200)]">
            <div className="container-max max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-6">
                How this connects to the rest of our work
              </h2>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.8]">
                Pair your microsite with broader{' '}
                <Link href="/website-and-seo" className="underline hover:opacity-70">
                  website design
                </Link>{' '}
                standards, launch faster with our flat-fee{' '}
                <Link href="/property-marketing" className="underline hover:opacity-70">
                  property marketing
                </Link>{' '}
                program, amplify demand through{' '}
                <Link href="/google-ads-management" className="underline hover:opacity-70">
                  Google Ads campaigns
                </Link>
                , extend creative systems to{' '}
                <Link href="/luxury-condo-websites" className="underline hover:opacity-70">
                  luxury property websites
                </Link>{' '}
                for towers and boutique buildings, and prove performance in{' '}
                <Link href="/analytics-reporting" className="underline hover:opacity-70">
                  analytics
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Case examples */}
          <section className="py-16 md:py-24 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="examples">
            <div className="container-max">
              <div className="max-w-2xl mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
                  Properties Sold Faster
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  Live dedicated sites engineered for luxury discovery—each with its own narrative, performance budget, and
                  lead routing tuned to the listing team.
                </p>
              </div>

              <div className="space-y-0">
                {LISTING_EXAMPLES.map((listing) => (
                  <article
                    key={listing.name}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-24 md:mb-32 last:mb-0"
                  >
                    <div
                      className={`flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-16 lg:py-24 order-2 ${
                        listing.imageRight ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-2">
                        {listing.location}
                      </p>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-2 tracking-tight">
                        {listing.name}
                      </h3>
                      <p className="text-sm text-[var(--color-off-black)] font-serif mb-6">{listing.price}</p>
                      <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl mb-8">
                        {listing.description}
                      </p>
                      <ul className="space-y-2 mb-8">
                        {listing.metrics.map((m) => (
                          <li key={m} className="text-sm text-[var(--color-ink-300)] font-serif flex gap-2">
                            <span className="text-[var(--color-trust)]">✓</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={listing.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                      >
                        View live site
                      </Link>
                    </div>
                    <Link
                      href={listing.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 ${
                        listing.imageRight ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <Image
                        src={listing.image}
                        alt={`${listing.name} — luxury single property website`}
                        fill
                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Social proof */}
          <section className="pt-16 pb-0 md:pt-20 bg-white border-b border-[var(--color-ink-200)]" id="social-proof">
            <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
                Social proof from luxury agents
              </h2>
              <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mb-8">
                Teams from lakefront Wisconsin to Sonoma wine country trust DMR with high-stakes listings and brand
                systems. Five-star experiences on Trustpilot and consistent Google reviews reflect how we operate as
                partners, not vendors.
              </p>
              <div className="flex flex-wrap items-center gap-8 mb-10">
                <div>
                  <p className="text-amber-600 text-lg tracking-tight mb-1" aria-label="5 out of 5 stars">
                    ★★★★★
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif">
                    Client-rated experiences
                  </p>
                </div>
                <a
                  href={TRUSTPILOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-serif text-[var(--color-off-black)] underline hover:opacity-70"
                >
                  Read reviews on Trustpilot
                </a>
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                {AGENT_HEADSHOTS.map((photo) => (
                  <div
                    key={photo.src}
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[var(--color-ink-200)] ring-2 ring-white shadow-sm"
                  >
                    <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="80px" />
                  </div>
                ))}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[var(--color-ink-200)]">
                  <Image
                    src="/images/Cities/Sonoma.jpg"
                    alt="Luxury agents — Sonoma market"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[var(--color-ink-200)]">
                  <Image
                    src="/images/Cities/Stpet.jpg"
                    alt="Luxury agents — St. Petersburg market"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              </div>
            </div>
            <Testimonials omitHeading />
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-24 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24" id="faq">
            <div className="container-max max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-10">
                Frequently asked questions
              </h2>
              <div className="divide-y divide-[var(--color-ink-200)] border-t border-b border-[var(--color-ink-200)]">
                {FAQ_ITEMS.map((item) => (
                  <details key={item.question} className="group py-5">
                    <summary className="cursor-pointer list-none flex justify-between gap-4 items-start font-serif text-[var(--color-off-black)] text-lg font-light pr-2 [&::-webkit-details-marker]:hidden">
                      <span>{item.question}</span>
                      <span className="text-xs mt-1 shrink-0 text-[var(--color-ink-400)] group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-sm text-[var(--color-ink-300)] font-serif leading-relaxed pr-2">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <ServiceCities
            heading="Markets where we launch single-property sites."
            description="Gateway metros to Sun Belt corridors—same build standards, tuned to local buyer expectations."
            cities={topCities.map((city) => ({
              ...city,
              slug: '#contact',
            }))}
          />

          <div id="contact">
            <ContactForm />
          </div>
        </div>
      </SEOWrapper>
    </>
  );
}
