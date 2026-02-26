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
    ? `py-32 ${sectionClassName} border-b border-[var(--color-ink-200)]`
    : 'py-32 bg-white border-b border-[var(--color-ink-200)]'

  return (
    <section className={sectionClasses}>
      <div className="container-max">
        <div className="max-w-3xl mb-24 mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
            {heading}
          </h1>
          <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative aspect-square overflow-hidden border-b border-[var(--color-ink-200)] hover:opacity-90 transition-opacity duration-300 flex flex-col"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.media}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-10">
                <div className="flex flex-col gap-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#FAFAF9] font-serif">
                    {service.title}
                  </span>
                  <p className="text-xl md:text-2xl font-serif font-light text-[#FAFAF9] leading-snug">
                    {service.copy}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#FAFAF9] font-serif mt-auto">
                  Learn more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

