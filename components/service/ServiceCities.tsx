import Link from 'next/link'
import Image from 'next/image'

type City = {
  name: string
  state?: string
  slug: string
  image: string
  subtitle?: string
}

type ServiceCitiesProps = {
  heading: string
  description?: string
  cities: City[]
  /** Number of columns on large screens. Defaults to 3. */
  columns?: 3 | 4
}

export default function ServiceCities({ heading, description, cities, columns = 3 }: ServiceCitiesProps) {
  const gridCols = columns === 4
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section className="py-32 bg-white border-b border-[var(--color-ink-200)]">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1]">
              {heading}
            </h2>
          </div>
          {description && (
            <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif max-w-xl">
              {description}
            </p>
          )}
        </div>

        <div className={`grid ${gridCols} gap-8`}>
          {cities.map((city) => {
            const isAnchor = city.slug.startsWith('#')
            const isContactAnchor = city.slug === '#contact'

            return (
              <Link
                key={`${city.name}-${city.slug}`}
                href={city.slug}
                className="group relative aspect-[4/3] overflow-hidden border-b border-[var(--color-ink-200)] pb-8 hover:opacity-60 transition-opacity duration-300"
              >
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute top-6 left-6 z-10">
                  <span className="text-sm uppercase tracking-[0.2em] text-[#FAFAF9] font-serif font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
                    {city.name}
                    {city.state ? `, ${city.state}` : ''}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#FAFAF9] font-serif">
                    {city.subtitle ??
                      (isContactAnchor
                        ? 'Contact us about your market →'
                        : isAnchor
                          ? 'Read how we work this market →'
                          : 'View local services →')}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

