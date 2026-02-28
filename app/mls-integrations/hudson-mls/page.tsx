import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hudson MLS | iHomeFinder IDX Coverage | New York & New Jersey | DMR Media',
  description:
    'Hudson MLS with iHomeFinder IDX coverage. Connect your site to live listings across the New York metro and New Jersey tri-state area.',
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
                Hudson MLS, powered by Paragon, is a leading multiple listing service provider serving the real estate markets of New York and New Jersey. With its user-friendly interface and powerful features, Hudson MLS helps real estate professionals navigate the fast-paced and competitive tri-state area with ease.
              </div>
              <div>
                As a trusted resource for thousands of REALTORS®, Hudson MLS provides comprehensive property listings, market data, and innovative tools that make buying and selling homes a breeze. From the lively streets of New York City to the suburbs of New Jersey, Hudson MLS connects real estate professionals with the information and resources they need to thrive.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Coverage
                </h3>
                <div>
                  New York and New Jersey—including New York City, Staten Island, Newark, Jersey City, Paterson, Edison, Elizabeth, Clifton, Plainfield, Spring Valley, Passaic, East Orange, Union City, Piscataway, Irvington, Bayonne, and surrounding areas. The Hudson Gateway Association of REALTORS® (HGAR) region includes Bronx, Dutchess, Orange, Putnam, Rockland, Sullivan, Ulster, and Westchester Counties—including The Bronx, Yonkers, Middletown, Newburgh, White Plains, Mount Vernon, New Rochelle, Carmel, Monroe, Scarsdale, Warwick, New Windsor, Poughkeepsie, and Bronxville.
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
                  {' '}for membership, OneKey® MLS access, and member support.
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
                Hudson MLS integrates with iHomeFinder to provide IDX (Internet Data Exchange) services. iHomeFinder connects directly to the MLS feed, allowing agents to display current listings—including active, pending, and sold—on their websites with automatic updates.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder IDX Services for Hudson MLS
                </h3>
                <p className="mb-4">
                  iHomeFinder is a licensed IDX vendor for Hudson Gateway MLS (now part of OneKey® MLS). Learn more at{' '}
                  <a
                    href="https://www.ihomefinder.com/resources/idx-coverage/hudson-gateway-multiple-listing-service/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                  >
                    iHomeFinder Hudson Gateway coverage
                  </a>.
                </p>
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
                  Agents must hold active MLS membership. Your employing broker must be an MLS subscriber. Display rules and data refresh schedules are set by the MLS. Contact the MLS or iHomeFinder directly for the latest integration requirements.
                </div>
              </div>
              <div>
                <Link
                  href="/mls-integrations"
                  className="text-[var(--color-off-black)] underline hover:opacity-60 transition-opacity font-serif"
                >
                  Browse all MLS integrations
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
                Membership in the Hudson Gateway Association of REALTORS® (HGAR) or the appropriate local board is required for agents and brokers who wish to list or show properties in the New York and New Jersey tri-state area. OneKey® MLS (formed from the merger of Hudson Gateway MLS and MLS of Long Island) provides the consolidated listing feed for the region.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Data Feed Fees
                </h3>
                <div>
                  Fees vary by association and vendor. iHomeFinder charges separate subscription fees for IDX integration. Confirm current costs with iHomeFinder and your local board before signing up.
                </div>
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
                  MLS Tools & Benefits
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>OneKey® MLS platform for the tri-state region</li>
                  <li>Comprehensive property listings and market data</li>
                  <li>Education and professional development</li>
                  <li>Member support and advocacy</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Search & Data Features
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Large photos, virtual tours, and property details</li>
                  <li>Map-based search and boundary filters</li>
                  <li>Active, pending, and sold listings</li>
                  <li>Open house information</li>
                  <li>Lead capture from property views and searches</li>
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
                With a focus on innovation and exceptional service, Hudson MLS is always improving to meet the changing needs of its members and the diverse communities they serve. By using advanced technology and industry expertise, Hudson MLS plays a key role in making successful real estate transactions happen and supporting growth in one of the nation&apos;s most exciting and desirable regions.
              </div>
              <div>
                From the famous skyline of New York City to the neighborhoods of New Jersey, the Hudson MLS region centralizes listing data for one of the most competitive real estate markets in the country.
              </div>
              <div>
                DMR Media serves clients in the Hudson MLS region. If you&apos;re an agent or broker in New York or New Jersey and want to display live listings on your website, we can help you connect via iHomeFinder.
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
                  Hudson MLS is a leading multiple listing service provider serving the real estate markets of New York and New Jersey. It provides comprehensive property listings, market data, and tools for real estate professionals in the tri-state area. Hudson Gateway MLS merged with MLS of Long Island in 2020 to form OneKey® MLS.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media support Hudson MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. We support Hudson MLS through iHomeFinder. iHomeFinder provides IDX integration so agents can display live listings on their websites. We currently serve clients in this region.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What areas does Hudson MLS cover?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  New York and New Jersey—including New York City, Staten Island, Newark, Jersey City, Paterson, Edison, Elizabeth, White Plains, Yonkers, Westchester County, the Hudson Valley, and surrounding areas.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do I get IDX integration for my website?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  You must be an active MLS member with an employing broker who is an MLS subscriber. Contact iHomeFinder for IDX subscription options, or work with a web partner like DMR Media to configure integration on your behalf.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with Hudson MLS IDX setup?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Our team can help you connect your site to Hudson MLS via iHomeFinder. Contact us for assistance with IDX implementation.
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
              If you serve New York or New Jersey and want to display live listings on your website, iHomeFinder offers Hudson MLS IDX integration. Our team can help you set up coverage and ensure your site complies with MLS display rules.
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
            We serve clients in the Hudson MLS region. Case studies from the New York and New Jersey tri-state area coming soon.
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
