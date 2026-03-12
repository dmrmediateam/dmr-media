import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'San Francisco MLS (SFARMLS) | Bay Area Real Estate | Showcase IDX & iHomeFinder | DMR Media',
  description:
    'San Francisco MLS (SFARMLS) with Showcase IDX and iHomeFinder IDX coverage. San Francisco Bay Area live listings. DMR Media serves 1 client in this region with Compass Luxury. Ads + SEO success.',
  alternates: {
    canonical: 'https://www.dmrmedia.org/mls-integrations/san-francisco-mls-sfarmls',
  },
};

const IDX_VENDORS = ['Showcase IDX', 'iHomeFinder'];
const STATES = ['CA'];

export default function SanFranciscoMlsPage() {
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
            San Francisco MLS (SFARMLS)
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-6 opacity-80">
            san-francisco-mls-sfarmls
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
                <dd>IDX data feed fee ~$10/mo (via Showcase IDX); confirm with MLS</dd>
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
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Commercial Listings</dt>
                <dd>Yes</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3 sm:col-span-2">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Update Interval</dt>
                <dd>Varies by vendor (typically 1–2 hours)</dd>
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
                The San Francisco Multiple Listing Service (SFARMLS) is operated by the San Francisco Association of REALTORS® and serves the essential real estate market of the San Francisco Bay Area. SFARMLS offers comprehensive listings and powerful tools to help agents and brokers succeed in one of the nation&apos;s most dynamic and competitive markets—from Victorian homes in San Francisco to sprawling estates in Silicon Valley. DMR Media integrates with Showcase IDX and iHomeFinder for this MLS and currently serves 1 client in the area with Compass Luxury. We find success with Google Ads and SEO for our SFARMLS client.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Coverage
                </h3>
                <div>
                  San Francisco Bay Area. Cities include San Francisco, San Jose, Oakland, Sacramento, Stockton, Modesto, Fremont, Santa Rosa, Hayward, Elk Grove, Roseville, Sunnyvale, Tracy, San Mateo, Concord, Berkeley, Palo Alto, Santa Clara, and surrounding areas. The MLS provides access to residential, commercial, and rental listings across the region.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Users
                </h3>
                <div>
                  Licensed agents and brokers. SFARMLS is operated by the San Francisco Association of REALTORS®. Visit{' '}
                  <a
                    href="https://www.mlslistings.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                  >
                    mlslistings.com
                  </a>
                  {' '}for consumer property search and MLSListings resources for the Bay Area.
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
                SFARMLS integrates with Showcase IDX (primary partner) and iHomeFinder to provide IDX (Internet Data Exchange) services. Both vendors connect to the SFARMLS feed, allowing agents to display current listings—including active, sold, and rental—on their websites with automatic updates.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Showcase IDX & iHomeFinder IDX Services for SFARMLS
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
                  Agents must hold active membership in the San Francisco Association of REALTORS® (or applicable association) and subscribe to SFARMLS to use IDX coverage. Display rules and data refresh schedules are set by the MLS. Contact the MLS or your IDX vendor directly for the latest integration requirements.
                </div>
              </div>
              <div>
                <a
                  href="https://showcaseidx.com/mls-coverage/san-francisco-association-of-realtors-sfar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-off-black)] underline hover:opacity-60 transition-opacity font-serif"
                >
                  Showcase IDX SFARMLS coverage
                </a>
                {' · '}
                <a
                  href="https://realtyna.com/mls-coverage/mls/san-francisco-mls-sfarmls/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-off-black)] underline hover:opacity-60 transition-opacity font-serif"
                >
                  Realtyna SFARMLS coverage
                </a>
                {' · '}
                <a
                  href="https://agentfire.com/mls-coverage/san-francisco-multiple-listing-service/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-off-black)] underline hover:opacity-60 transition-opacity font-serif"
                >
                  AgentFire SFARMLS coverage
                </a>
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
                SFARMLS membership is required for agents and brokers who wish to list or show properties in the San Francisco Bay Area. Membership is typically obtained through the San Francisco Association of REALTORS®.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Fees
                </h3>
                <div>
                  The San Francisco Association of REALTORS charges a fee to access the IDX data feed. Your share of the fee is approximately $10 per month via Showcase IDX. iHomeFinder and other vendors may have different fee structures. Confirm current costs with your IDX vendor before signing up.
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
                  Listing Types Supported
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Residential (single-family, condos, townhomes)</li>
                  <li>Commercial properties</li>
                  <li>Rental listings</li>
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
                  <li>Commercial lease data</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Tools & Benefits
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
                The San Francisco Bay Area is a center for innovation, culture, and economic growth, and demand for real estate in this region stays strong. SFARMLS plays a key role in connecting buyers and sellers, enabling smooth transactions, and empowering real estate professionals to excel in this thrilling market—from the Golden Gate Bridge to the tech hubs of Silicon Valley.
              </div>
              <div>
                DMR Media integrates with Showcase IDX and iHomeFinder for SFARMLS and serves 1 client in the area with Compass Luxury. We find success with Google Ads and SEO for our SFARMLS client.
              </div>
              <div>
                If you&apos;re an agent or broker in the San Francisco Bay Area and want to display live listings on your website, we can help you connect via Showcase IDX or iHomeFinder IDX integration.
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
                  What is SFARMLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  San Francisco MLS (SFARMLS) is the multiple listing service operated by the San Francisco Association of REALTORS®. It serves the San Francisco Bay Area with comprehensive property listings, from San Francisco to the surrounding counties and Silicon Valley.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does Showcase IDX and iHomeFinder support SFARMLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Showcase IDX and iHomeFinder are licensed IDX vendors for SFARMLS. Agents can use either vendor to display active and sold listings on their websites via IDX integration. DMR Media partners with Showcase IDX first, then iHomeFinder.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What areas does SFARMLS cover?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  San Francisco Bay Area. Cities include San Francisco, San Jose, Oakland, Sacramento, Stockton, Modesto, Fremont, Santa Rosa, Hayward, Elk Grove, Roseville, Sunnyvale, Tracy, San Mateo, Concord, Berkeley, Palo Alto, Santa Clara, and surrounding areas.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do I get IDX integration for my website?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  You must be a licensed real estate agent and hold active membership in the San Francisco Association of REALTORS® (or applicable association) and subscribe to SFARMLS. Contact Showcase IDX or iHomeFinder for IDX subscription options, or work with a web partner who can configure IDX integration for SFARMLS on your behalf.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with IDX setup for SFARMLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. We integrate with Showcase IDX and iHomeFinder for SFARMLS and serve 1 client in the area with Compass Luxury. We find success with Google Ads and SEO for our SFARMLS client. Our team can help you connect your site to SFARMLS. Contact us for assistance with IDX integration and implementation.
                </dd>
              </div>
            </dl>
          </section>

          {/* Conclusion / CTA */}
          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect Your Site to SFARMLS
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve the San Francisco Bay Area and want to display live listings on your website, Showcase IDX or iHomeFinder IDX integration for SFARMLS is a proven solution. Our team can help you set up MLS coverage and ensure your site complies with SFARMLS display rules.
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
            San Francisco Bay Area real estate growth stories
          </h2>
          <p className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8 max-w-2xl">
            We serve 1 client in the SFARMLS region with Compass Luxury. We find success with Google Ads and SEO for our client. Case studies from the San Francisco Bay Area coming soon.
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
