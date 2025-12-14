import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const condos: Record<
  string,
  {
    name: string
    address: string
    lat: number
    lng: number
    description: string
    amenities: string[]
    features: string[]
  }
> = {
  'the-florencia': {
    name: 'The Florencia',
    address: '100 1st Ave NE, St. Petersburg, FL 33701',
    lat: 27.7706,
    lng: -82.6334,
    description: 'Luxury waterfront condominiums with stunning bay views and resort-style amenities.',
    amenities: ['Waterfront Views', 'Resort-Style Pool', 'Fitness Center', 'Concierge Service', 'Private Balconies'],
    features: ['Bay Views', 'Modern Finishes', 'High-End Appliances', 'Secure Parking', 'Rooftop Terrace'],
  },
  'the-ovation': {
    name: 'The Ovation',
    address: '200 1st Ave NE, St. Petersburg, FL 33701',
    lat: 27.7715,
    lng: -82.6325,
    description: 'Modern high-rise condos in the heart of downtown St. Petersburg with panoramic city views.',
    amenities: ['City Views', 'Rooftop Pool', 'State-of-the-Art Gym', '24/7 Concierge', 'Pet-Friendly'],
    features: ['Floor-to-Ceiling Windows', 'Smart Home Technology', 'Premium Flooring', 'Private Elevators', 'Wine Storage'],
  },
  'the-salvador': {
    name: 'The Salvador',
    address: '300 1st Ave NE, St. Petersburg, FL 33701',
    lat: 27.7724,
    lng: -82.6316,
    description: 'Boutique condominium building featuring elegant residences and premium finishes.',
    amenities: ['Boutique Design', 'Private Courtyard', 'Fitness Studio', 'Guest Suites', 'Valet Parking'],
    features: ['Custom Interiors', 'Designer Finishes', 'Gourmet Kitchens', 'Spa-Like Baths', 'Private Storage'],
  },
  'residences-400-central': {
    name: 'The Residences at 400 Central',
    address: '400 Central Ave, St. Petersburg, FL 33701',
    lat: 27.7733,
    lng: -82.6307,
    description: 'Sophisticated urban living with contemporary design and exceptional amenities.',
    amenities: ['Urban Location', 'Rooftop Lounge', 'Business Center', 'Package Lockers', 'Bike Storage'],
    features: ['Open Floor Plans', 'Premium Countertops', 'Stainless Appliances', 'In-Unit Laundry', 'High Ceilings'],
  },
  'the-edge': {
    name: 'The Edge',
    address: '500 1st Ave NE, St. Petersburg, FL 33701',
    lat: 27.7742,
    lng: -82.6298,
    description: 'Waterfront condos offering luxury living with direct access to Tampa Bay.',
    amenities: ['Bay Access', 'Boat Slips', 'Beach Club', 'Outdoor Kitchen', 'Fire Pit'],
    features: ['Waterfront Views', 'Marble Baths', 'Chef\'s Kitchens', 'Private Terraces', 'Climate Control'],
  },
  'the-beacon': {
    name: 'The Beacon',
    address: '600 Central Ave, St. Petersburg, FL 33701',
    lat: 27.7751,
    lng: -82.6289,
    description: 'Iconic downtown condominium with stunning architecture and world-class amenities.',
    amenities: ['Iconic Architecture', 'Infinity Pool', 'Spa Facilities', 'Wine Cellar', 'Private Theater'],
    features: ['Architectural Details', 'Luxury Finishes', 'Smart Systems', 'Premium Lighting', 'Custom Closets'],
  },
  'signature-place': {
    name: 'The Signature Place',
    address: '700 1st Ave NE, St. Petersburg, FL 33701',
    lat: 27.7760,
    lng: -82.6280,
    description: 'Premier high-rise condos featuring luxury finishes and spectacular bay views.',
    amenities: ['Bay Views', 'Sky Pool', 'Luxury Spa', 'Fine Dining', 'Concierge'],
    features: ['Panoramic Views', 'Premium Materials', 'Gourmet Kitchens', 'Spa Bathrooms', 'Smart Home'],
  },
  'the-pinnacle': {
    name: 'The Pinnacle',
    address: '800 Central Ave, St. Petersburg, FL 33701',
    lat: 27.7769,
    lng: -82.6271,
    description: 'Exclusive condominium residences with private balconies and resort-style pool.',
    amenities: ['Resort Pool', 'Private Balconies', 'Club Room', 'Fitness Center', 'Guest Parking'],
    features: ['Private Balconies', 'Luxury Interiors', 'Premium Appliances', 'Hardwood Floors', 'Custom Design'],
  },
}

export async function generateStaticParams() {
  return Object.keys(condos).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const condo = condos[slug]
  if (!condo) return { title: 'Condo Not Found' }

  return {
    title: `${condo.name} - St. Petersburg Condos | DMR Media`,
    description: condo.description,
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function CondoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const condo = condos[slug]
  if (!condo) notFound()

  const mapUrl = `https://www.google.com/maps?q=${condo.lat},${condo.lng}&hl=en&z=15`

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
        <div className="container-max">
          <div className="max-w-3xl space-y-6">
            <Link
              href="/condos"
              className="inline-flex items-center text-sm text-[var(--color-ink-400)] hover:text-[var(--color-trust)] transition-colors"
            >
              ← Back to Condos
            </Link>
            <span className="uppercase tracking-[0.35em] text-[11px] text-[var(--color-ink-400)]">Condominium</span>
            <h1 className="text-[42px] sm:text-[56px] font-serif font-light leading-[1.08]">
              {condo.name}<span className="text-[var(--color-trust)] text-[1.1em]">.</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-ink-400)] leading-relaxed">
              {condo.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-ink-400)]">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{condo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-4">
              Location
            </h2>
            <p className="text-base text-[var(--color-ink-400)]">
              {condo.address}
            </p>
          </div>
          <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm overflow-hidden">
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyDummyKey'}&q=${encodeURIComponent(condo.address)}&zoom=15`}
            />
          </div>
          <div className="mt-4">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-[var(--color-trust)] hover:underline"
            >
              View on Google Maps
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-[var(--surface-base)]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">
                Building Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {condo.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-[16px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm"
                  >
                    <svg className="w-5 h-5 text-[var(--color-trust)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[var(--color-off-black)]">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">
                Unit Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {condo.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-[16px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm"
                  >
                    <svg className="w-5 h-5 text-[var(--color-trust)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[var(--color-off-black)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-max text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)]">
            Interested in {condo.name}?
          </h2>
          <p className="text-base text-[var(--color-ink-400)] max-w-2xl mx-auto">
            Contact us to learn more about available units, pricing, and scheduling a viewing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-off-black)] px-8 py-3 text-sm uppercase tracking-[0.3em] text-white hover:bg-black transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/condos"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-ink-200)] px-8 py-3 text-sm uppercase tracking-[0.3em] text-[var(--color-off-black)] hover:bg-[var(--surface-base)] transition-colors"
            >
              View All Condos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

