import { Metadata } from 'next'
import Link from 'next/link'
import CondosMap from '@/components/CondosMap'

export const metadata: Metadata = {
  title: 'Condos in St. Petersburg, Florida | DMR Media',
  description: 'Explore luxury condominiums in St. Petersburg, Florida. Discover premium condo buildings with waterfront views and modern amenities.',
  robots: {
    index: false,
    follow: false,
  },
}

const condos = [
  {
    name: 'The Florencia',
    slug: 'the-florencia',
    address: '100 1st Ave NE, St. Petersburg, FL 33701',
    lat: 27.7706,
    lng: -82.6334,
    description: 'Luxury waterfront condominiums with stunning bay views and resort-style amenities.',
  },
  {
    name: 'The Ovation',
    slug: 'the-ovation',
    address: '200 1st Ave NE, St. Petersburg, FL 33701',
    lat: 27.7715,
    lng: -82.6325,
    description: 'Modern high-rise condos in the heart of downtown St. Petersburg with panoramic city views.',
  },
  {
    name: 'The Salvador',
    slug: 'the-salvador',
    address: '300 1st Ave NE, St. Petersburg, FL 33701',
    lat: 27.7724,
    lng: -82.6316,
    description: 'Boutique condominium building featuring elegant residences and premium finishes.',
  },
  {
    name: 'The Residences at 400 Central',
    slug: 'residences-400-central',
    address: '400 Central Ave, St. Petersburg, FL 33701',
    lat: 27.7733,
    lng: -82.6307,
    description: 'Sophisticated urban living with contemporary design and exceptional amenities.',
  },
  {
    name: 'The Edge',
    slug: 'the-edge',
    address: '500 1st Ave NE, St. Petersburg, FL 33701',
    lat: 27.7742,
    lng: -82.6298,
    description: 'Waterfront condos offering luxury living with direct access to Tampa Bay.',
  },
  {
    name: 'The Beacon',
    slug: 'the-beacon',
    address: '600 Central Ave, St. Petersburg, FL 33701',
    lat: 27.7751,
    lng: -82.6289,
    description: 'Iconic downtown condominium with stunning architecture and world-class amenities.',
  },
  {
    name: 'The Signature Place',
    slug: 'signature-place',
    address: '700 1st Ave NE, St. Petersburg, FL 33701',
    lat: 27.7760,
    lng: -82.6280,
    description: 'Premier high-rise condos featuring luxury finishes and spectacular bay views.',
  },
  {
    name: 'The Pinnacle',
    slug: 'the-pinnacle',
    address: '800 Central Ave, St. Petersburg, FL 33701',
    lat: 27.7769,
    lng: -82.6271,
    description: 'Exclusive condominium residences with private balconies and resort-style pool.',
  },
]

export default function CondosPage() {
  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
        <div className="container-max">
          <div className="max-w-3xl space-y-6">
            <span className="uppercase tracking-[0.35em] text-[11px] text-[var(--color-ink-400)]">Condominiums</span>
            <h1 className="text-[42px] sm:text-[56px] font-serif font-light leading-[1.08]">
              Condos in St. Petersburg, Florida<span className="text-[var(--color-trust)] text-[1.1em]">.</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-ink-400)] leading-relaxed">
              Discover luxury condominiums throughout St. Petersburg. Each building offers unique amenities, stunning views, and exceptional living experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4">
              Explore Condo Locations
            </h2>
            <p className="text-base text-[var(--color-ink-400)] max-w-2xl mx-auto">
              Use the interactive map to explore condominium buildings throughout St. Petersburg, Florida.
            </p>
          </div>
          <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm overflow-hidden">
            <CondosMap condos={condos} />
          </div>
        </div>
      </section>

      {/* Condos Grid */}
      <section className="py-20 bg-[var(--surface-base)]">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4">
              Featured Condominiums
            </h2>
            <p className="text-base text-[var(--color-ink-400)] max-w-2xl">
              Browse our selection of premium condominium buildings in St. Petersburg.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {condos.map((condo, index) => (
              <Link
                key={condo.slug}
                href={`/condos/${condo.slug}`}
                className="block bg-white p-6 rounded-[24px] border border-[var(--color-ink-200)] hover:shadow-[0_4px_20px_rgba(15,15,15,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-2 group-hover:text-[var(--color-trust)] transition-colors">
                    {condo.name}
                  </h3>
                  <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
                    {condo.description}
                  </p>
                </div>
                <div className="mt-4 text-sm text-[var(--color-ink-400)]">
                  <p className="mb-2">{condo.address}</p>
                  <div className="flex items-center text-[var(--color-trust)] group-hover:translate-x-2 transition-transform duration-300">
                    View Details
                    <span className="ml-2 inline-block">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

