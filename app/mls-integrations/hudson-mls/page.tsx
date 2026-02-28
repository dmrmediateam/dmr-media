import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hudson MLS | New York & New Jersey Real Estate | iHomeFinder IDX | DMR Media',
  description:
    'Hudson MLS with iHomeFinder IDX coverage. New York and New Jersey live listings. Hudson Gateway, tri-state area. DMR Media serves 2 clients in this region.',
  alternates: {
    canonical: 'https://www.dmrmedia.org/mls-integrations/hudson-mls',
  },
};

const IDX_VENDORS = ['iHomeFinder'];
const STATES = ['NY', 'NJ'];

export default function HudsonMlsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <Link
            href="/mls-integrations"
            className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity mb-8 inline-block"
          >
            ← Back to MLS directory
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
            {IDX_VENDORS.map((vendor) => (
              <span
                key={vendor}
                className="inline-block px-4 py-2 border border-[var(--color-off-black)] text-xs uppercase tracking-[0.2em] font-serif text-[var(--color-off-black)]"
              >
                {vendor}
              </span>
            ))}
            {STATES.map((state) => (
              <span
                key={state}
                className="inline-block px-4 py-2 border border-[var(--color-off-black)] text-xs uppercase tracking-[0.2em] font-serif text-[var(--color-off-black)]"
              >
                {state}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] leading-[1.1] tracking-tight">
            Hudson MLS
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-6 opacity-80">
            hudson-mls
          </div>

          {/* Anchor navigation */}
          <nav className="mt-12 pt-8 border-t border-[var(--color-ink-200)]" aria-label="Page sections">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.2em] font-serif">
              <a href="#about" className="text-[var(--color-off-black)] hover:opacity-60 transition-opacity">
                About this MLS
              </a>
              <a href="#overview" className="text-[var(--color-off-black)] hover:opacity-60 transition-opacity">
                Overview
              </a>
              <a href="#idx-integration" className="text-[var(--color-off-black)] hover:opacity-60 transition-opacity">
                IDX Integration
              </a>
              <a href="#fees" className="text-[var(--color-off-black)] hover:opacity-60 transition-opacity">
                Fees
              </a>
              <a href="#services" className="text-[var(--color-off-black)] hover:opacity-60 transition-opacity">
                Services & Features
              </a>
              <a href="#faq" className="text-[var(--color-off-black)] hover:opacity-60 transition-opacity">
                FAQ
              </a>
              <a href="#case-studies" className="text-[var(--color-off-black)] hover:opacity-60 transition-opacity">
                Case Studies
              </a>
            </div>
          </nav>
        </div>
      </section>

      <article className="py-24 md:py-32 [&_p]:font-serif [&_p]:text-[var(--color-off-black)] [&_dd]:font-serif [&_dd]:text-[var(--color-off-black)] [&_li]:font-serif [&_li]:text-[var(--color-off-black)]">
        <div className="container-max max-w-3xl space-y-20">
          {/* About this MLS */}
          <section id="about">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              About this MLS
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-[var(--color-off-black)] font-serif">
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Agents Allowed</dt>
                <dd>Yes</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Fees Paid to Association</dt>
                <dd>None</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Large Photos</dt>
                <dd>Yes</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Open Houses Included</dt>
                <dd>Yes</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Sold Listings</dt>
                <dd>Yes</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Distressed Listing Search</dt>
                <dd>Yes</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3 sm:col-span-2">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Update Interval</dt>
                <dd>Approx. 1 hour</dd>
              </div>
            </dl>
          </section>

          {/* Overview */}
          <section id="overview">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Overview
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                Hudson MLS, powered by Paragon, is a leading multiple listing service provider serving the real estate markets of New York and New Jersey. With its user-friendly interface and powerful features, Hudson MLS helps real estate professionals navigate the fast-paced and competitive tri-state area with ease. As a trusted resource for thousands of REALTORS®, Hudson MLS provides comprehensive property listings, market data, and innovative tools. DMR Media integrates with iHomeFinder for this MLS and currently serves 2 clients in this area.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Coverage
                </h3>
                <div>
                  New York and New Jersey—including New York City, Staten Island, Newark, Jersey City, Paterson, Edison, Elizabeth, Clifton, Plainfield, Spring Valley, Passaic, East Orange, Union City, Piscataway, Irvington, Bayonne, and surrounding tri-state areas. Hudson Gateway MLS (HGMLS) merged with MLS of Long Island in March 2020 to form OneKey® MLS; IDX coverage is available through iHomeFinder for the combined system.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Users
                </h3>
                <div>
                  Licensed agents, brokers, home buyers, and sellers. Visit{' '}
                  <a
                    href="https://www.hgar.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                  >
                    hgar.com
                  </a>
                  {' '}(Hudson Gateway Association of REALTORS®) for membership, OneKey® MLS access, and member support.
                </div>
              </div>
            </div>
          </section>

          {/* IDX Integration */}
          <section id="idx-integration">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              IDX Integration & Vendor Details
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                Hudson MLS integrates with iHomeFinder to provide IDX (Internet Data Exchange) services. iHomeFinder connects directly to the MLS feed, allowing agents to display current listings—including active and sold—on their websites with automatic updates approximately every hour.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder IDX Services for Hudson MLS
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Live property search widgets</li>
                  <li>Listing detail pages with full photos and descriptions</li>
                  <li>Map-based search and neighborhood browsing</li>
                  <li>Saved searches and property alerts</li>
                  <li>Lead capture forms tied to MLS search activity</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Integration Notes & Restrictions
                </h3>
                <div>
                  Agents must hold active membership in the Hudson Gateway Association of REALTORS® (or applicable association) and subscribe to OneKey® MLS to use iHomeFinder IDX coverage. Display rules and data refresh schedules are set by the MLS. Contact the MLS or iHomeFinder directly for the latest integration requirements.
                </div>
              </div>
              <div>
                <Link
                  href="/mls-integrations"
                  className="text-[var(--color-off-black)] underline hover:opacity-60 transition-opacity font-serif"
                >
                  Learn more about IDX services with iHomeFinder here
                </Link>
                .
              </div>
            </div>
          </section>

          {/* Membership & Fees */}
          <section id="fees">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Membership & Fees
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                Membership in the Hudson Gateway Association of REALTORS® and subscription to OneKey® MLS is required for agents and brokers who wish to list or show properties in the New York and New Jersey tri-state area.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Association Fees (via iHomeFinder)
                </h3>
                <div>
                  None. iHomeFinder does not charge fees paid to the association for Hudson MLS / OneKey® MLS IDX coverage.
                </div>
              </div>
              <div>
                iHomeFinder charges separate subscription fees for IDX integration; pricing varies by plan. Confirm current costs with iHomeFinder before signing up.
              </div>
            </div>
          </section>

          {/* Services & Features */}
          <section id="services">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Services & Features
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Listing Types Supported
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Residential (single-family, condos, townhomes)</li>
                  <li>Commercial properties</li>
                  <li>Land and lots</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Search & Data Features
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Large photos, virtual tours, and property details</li>
                  <li>Map-based search and boundary filters</li>
                  <li>Market statistics and sold data</li>
                  <li>Open house and showing information</li>
                  <li>Distressed listing search</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder Tools & Benefits
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Lead capture from property views and searches</li>
                  <li>CRM integration for follow-up</li>
                  <li>Customizable search widgets for agent websites</li>
                  <li>Mobile-responsive listing displays</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Market Impact */}
          <section>
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Market Impact & Why It Matters
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                Hudson MLS serves real estate professionals throughout the New York metropolitan area and New Jersey. From the streets of New York City to the suburbs of New Jersey, Hudson MLS connects agents with the information and resources they need to thrive in one of the nation&apos;s most competitive markets.
              </div>
              <div>
                With a focus on innovation and exceptional service, Hudson MLS and OneKey® MLS play a key role in making successful real estate transactions happen. DMR Media integrates with iHomeFinder for this MLS and serves 2 clients in the Hudson region.
              </div>
              <div>
                If you&apos;re an agent or broker in New York or New Jersey and want to display live listings on your website, we can help you connect via iHomeFinder IDX integration.
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-8">
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What is Hudson MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Hudson MLS, powered by Paragon, is a leading multiple listing service serving the real estate markets of New York and New Jersey. Hudson Gateway MLS merged with MLS of Long Island in March 2020 to form OneKey® MLS. The combined system provides comprehensive property listings and market data for the tri-state area.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does iHomeFinder support Hudson MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. iHomeFinder is a licensed IDX vendor for Hudson MLS / OneKey® MLS. Agents can use iHomeFinder to display active and sold listings on their websites via IDX integration.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What areas does Hudson MLS cover?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  New York and New Jersey—including New York City, Staten Island, Newark, Jersey City, Paterson, Edison, Elizabeth, White Plains, Mount Vernon, New Rochelle, Yonkers, Poughkeepsie, and surrounding tri-state areas. OneKey® MLS covers Bronx, Dutchess, Orange, Putnam, Rockland, Sullivan, Ulster, and Westchester counties in New York.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do I get IDX integration for my website?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  You must be an active member of the Hudson Gateway Association of REALTORS® (or applicable association) and subscribe to OneKey® MLS. Contact iHomeFinder for IDX subscription options, or work with a web partner who can configure iHomeFinder IDX integration for Hudson MLS on your behalf.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with iHomeFinder IDX setup for Hudson MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. We integrate with iHomeFinder for Hudson MLS and serve 2 clients in this area. Our team can help you connect your site to Hudson MLS. Contact us for assistance with iHomeFinder integration and IDX implementation.
                </dd>
              </div>
            </dl>
          </section>

          {/* Conclusion / CTA */}
          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect Your Site to Hudson MLS
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve the New York or New Jersey tri-state area and want to display live listings on your website, iHomeFinder IDX integration for Hudson MLS is a proven solution. Our team can help you set up iHomeFinder MLS coverage and ensure your site complies with MLS display rules.
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.12em] text-xs font-serif hover:opacity-85 transition-opacity duration-300 border border-[var(--color-off-black)]"
            >
              Contact Us for IDX Help
            </Link>
          </section>
        </div>
      </article>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 md:py-32 border-t border-[var(--color-ink-200)] bg-[var(--surface-base)]">
        <div className="container-max">
          <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-off-black)] font-serif block mb-4">
            Case studies in this region
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
            New York & New Jersey real estate growth stories
          </h2>
          <p className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8 max-w-2xl">
            We serve 2 clients in the Hudson MLS region. Case studies from the New York and New Jersey area coming soon.
          </p>
          <Link
            href="/case-studies"
            className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity"
          >
            View all case studies
          </Link>
        </div>
      </section>
    </div>
  );
}
