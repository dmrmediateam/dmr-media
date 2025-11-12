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
}

export default function ServiceCities({ heading, description, cities }: ServiceCitiesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div>
            <span className="uppercase tracking-[0.4em] text-[11px] text-[var(--color-ink-400)] mb-4 block">
              Cities
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] tracking-tight">
              {heading}
            </h2>
          </div>
          {description && (
            <p className="text-[var(--color-ink-400)] max-w-xl text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => {
            const href = city.slug.startsWith('#') ? city.slug : city.slug
            const isAnchor = city.slug.startsWith('#')

            return (
              <Link
                key={`${city.name}-${city.slug}`}
                href={isAnchor ? '#contact' : href}
                className="group relative h-56 rounded-[24px] border border-[var(--color-ink-200)] overflow-hidden bg-white/80 backdrop-blur-sm"
              >
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-black/10 pointer-events-none" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-serif font-light text-white">
                    {city.name}
                    {city.state ? `, ${city.state}` : ''}
                  </h3>
                  <span className="text-sm text-white/80 mt-2">
                    {city.subtitle ?? (isAnchor ? 'Contact us about your market →' : 'View local services →')}
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

