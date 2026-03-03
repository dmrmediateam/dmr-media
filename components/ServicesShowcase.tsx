import Link from 'next/link';
import Image from 'next/image';

type ServicesShowcaseProps = {
  heading?: string;
  description?: string;
  sectionClassName?: string;
  /** When true, only render the services grid (no intro). Used when intro is on the page. */
  hideIntro?: boolean;
};

const services = [
  {
    title: 'SEO Optimization',
    copy: 'Own the search results in the cities that matter with local-first, luxury-calibrated SEO frameworks.',
    href: '/seo-optimization',
    media: '/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg',
  },
  {
    title: 'Google Ads Management',
    copy: 'Deploy paid search designed for affluent intent, with transparent pacing and reporting.',
    href: '/google-ads-management',
    media: '/images/StockHomes/spacious-living-room-with-staircase-in-residence-2025-10-10-15-17-44-utc (1).jpg',
  },
  {
    title: 'Property Marketing',
    copy: 'Launch cinematic listing experiences that feel curated for the most discerning buyers.',
    href: '/property-marketing',
    media: '/images/StockHomes/studio-apartment-interior-with-wooden-furniture-2025-02-09-23-29-43-utc.jpg',
  },
  {
    title: 'Analytics & Reporting',
    copy: 'Understand every campaign touchpoint with dashboards you can open on-the-go.',
    href: '/analytics-reporting',
    media: '/images/StockHomes/a-backyard-with-a-swimming-pool-hot-tub-and-pati-2025-02-10-06-23-51-utc.jpg',
  },
];

export default function ServicesShowcase({
  heading = 'Tailored programs for market makers.',
  description = 'We craft end-to-end acquisition systems that feel bespoke to your brand while being engineered for scale.',
  sectionClassName,
  hideIntro = false,
}: ServicesShowcaseProps) {
  const sectionClasses = sectionClassName
    ? `py-20 md:py-28 ${sectionClassName}`
    : 'py-20 md:py-28 bg-white';

  return (
    <section className={sectionClasses}>
      <div className="container-max">
        {!hideIntro && (
          <div className="max-w-2xl mb-20 md:mb-28">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
              {heading}
            </h2>
            <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
              {description}
            </p>
          </div>
        )}

        <div className="space-y-0">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block border-b border-[var(--color-ink-200)] last:border-b-0"
            >
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                <div
                  className={`flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-14 lg:py-20 order-2 ${
                    index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-3">
                    {service.title}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight leading-[1.2] group-hover:opacity-80 transition-opacity">
                    {service.copy}
                  </h3>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif group-hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit">
                    Learn more
                  </span>
                </div>
                <div
                  className={`relative min-h-[280px] sm:min-h-[340px] lg:min-h-[400px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-4 sm:m-6 lg:m-8 ${
                    index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <Image
                    src={service.media}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
