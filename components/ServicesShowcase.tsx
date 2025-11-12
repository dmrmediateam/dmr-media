import Link from 'next/link'

type ServicesShowcaseProps = {
  heading?: string
  description?: string
  sectionClassName?: string
}

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
]

export default function ServicesShowcase({
  heading = 'Tailored programs for market makers.',
  description = 'We craft end-to-end acquisition systems that feel bespoke to your brand while being engineered for scale.',
  sectionClassName,
}: ServicesShowcaseProps) {
  const sectionClasses = sectionClassName
    ? `py-24 ${sectionClassName}`
    : 'py-24 bg-white'

  return (
    <section className={sectionClasses}>
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div>
            <span className="uppercase tracking-[0.4em] text-[11px] text-[var(--color-ink-400)] mb-4 block">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] tracking-tight">
              {heading}
            </h2>
          </div>
          <p className="text-[var(--color-ink-400)] max-w-xl text-base leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-[24px] border border-[var(--color-ink-200)] overflow-hidden bg-white/80 backdrop-blur-sm hover:border-[var(--color-trust)] transition-colors duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={service.media}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-10 flex flex-col gap-4">
                <span className="uppercase tracking-[0.3em] text-[11px] text-[var(--color-ink-400)]">
                  {service.title}
                </span>
                <p className="text-[var(--color-off-black)] text-2xl font-serif font-light leading-snug">
                  {service.copy}
                </p>
                <span className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.24em] text-[var(--color-trust)]">
                  Learn more
                  <span className="inline-block h-px w-8 bg-[var(--color-trust)] group-hover:w-12 transition-all duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

