import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'California Regional MLS (CRMLS) | California Real Estate | Showcase IDX & iHomeFinder | DMR Media',
  description:
    'California Regional Multiple Listing Service (CRMLS) with Showcase IDX and iHomeFinder IDX coverage. California statewide live listings. Los Angeles, San Diego, San Jose. DMR Media serves 1 client in this region.',
  alternates: {
    canonical: 'https://www.dmrmedia.org/mls-integrations/california-regional-multiple-listing-service',
  },
};

const IDX_VENDORS = ['Showcase IDX', 'iHomeFinder'];
const STATES = ['CA'];

export default function CaliforniaRegionalMlsPage() {
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
            California Regional Multiple Listing Service
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-6 opacity-80">
            california-regional-multiple-listing-service
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
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">RESO Compliant</dt>
                <dd>Yes (RESO Data Dictionary Platinum Certification)</dd>
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
                California Regional Multiple Listing Service (CRMLS) was formed in 2010 when three existing MLSs merged, creating California&apos;s statewide MLS. CRMLS now serves over 81,000 real estate professionals across the state and is headquartered in Chino Hills, CA. CRMLS offers updated data, technology tools (including Matrix, Paragon, and Flexmls), and educational resources to provide members with an affordable, reliable, and convenient listing service. DMR Media integrates with Showcase IDX and iHomeFinder for this MLS and currently serves 1 client in the area with EXP Luxury.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Coverage
                </h3>
                <div>
                  Statewide California. Counties include Alameda, Butte, Contra Costa, Fresno, Glenn, Lake, Los Angeles, Mariposa, Merced, Monterey, Orange, Riverside, San Benito, San Bernardino, San Diego, San Luis Obispo, San Mateo, Santa Clara, Santa Cruz, and Ventura. Top cities include Los Angeles, San Diego, Long Beach, San Jose, Santa Monica, Irvine, Anaheim, Corona, Fontana, Palm Desert, Palm Springs, Pasadena, Riverside, and Temecula.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Users
                </h3>
                <div>
                  Licensed agents and brokers. CRMLS is governed by the California Association of REALTORS®. Visit{' '}
                  <a
                    href="https://go.crmls.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                  >
                    go.crmls.org
                  </a>
                  {' '}for membership, Matrix/Paragon/Flexmls access, and member support.
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
                CRMLS integrates with Showcase IDX (primary partner) and iHomeFinder to provide IDX (Internet Data Exchange) services. Both vendors connect to the CRMLS feed, allowing agents to display current listings—including active and sold—on their websites with automatic updates.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Showcase IDX & iHomeFinder IDX Services for CRMLS
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
                  Agents must hold active CRMLS membership through a participating association. Your broker must be a CRMLS member, and you must have a letter of good standing from your existing board. Display rules and data refresh schedules are set by the MLS. Contact the MLS or your IDX vendor directly for the latest integration requirements.
                </div>
              </div>
              <div>
                <a
                  href="https://showcaseidx.com/mls-coverage/california-regional-multiple-listing-service-crmls/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-off-black)] underline hover:opacity-60 transition-opacity font-serif"
                >
                  Showcase IDX CRMLS coverage
                </a>
                {' · '}
                <a
                  href="https://realtyna.com/mls-coverage/mls/california-regional-mls-crmls/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-off-black)] underline hover:opacity-60 transition-opacity font-serif"
                >
                  Realtyna CRMLS coverage
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
                CRMLS membership is required for agents and brokers who wish to list or show properties in California. New members can complete the online membership application to join.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Fees
                </h3>
                <div>
                  California Regional Multiple Listing Service charges a fee to access the IDX data feed. Your share of the fee is approximately $10 per month via Showcase IDX. iHomeFinder and other vendors may have different fee structures. Confirm current costs with your IDX vendor before signing up.
                </div>
              </div>
              <div>
                CRMLS subscribers receive discounted rates for various real estate and CRM products and technology tools.
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
                  CRMLS Technology Tools
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Matrix, Paragon, Flexmls (core products)</li>
                  <li>CRMLS Mobile, Listingbook, SmartFax, SmartTrac</li>
                  <li>Cloud CMA, LionDesk, Glide, Proxio</li>
                  <li>InfoSparks (market data), Realist Tax, ListHub</li>
                  <li>ShowingTime, BuildersUpdate, NewHomeSource Professional</li>
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
                  <li>Commercial data supported</li>
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
                CRMLS covers a wide array of California cities—from Glendale and San Diego in the south to Fresno and San Jose in the central region to San Francisco and Red Bluff farther north. As the nation&apos;s most recognized statewide MLS, CRMLS connects over 81,000 professionals with the listing data and tools they need to serve buyers and sellers across the Golden State.
              </div>
              <div>
                With unwavering transparency and reliability, CRMLS continues to be a cornerstone in the industry and has met the evolving needs of real estate professionals for over four decades. DMR Media integrates with Showcase IDX and iHomeFinder for CRMLS and serves 1 client in the area with EXP Luxury.
              </div>
              <div>
                If you&apos;re an agent or broker in California and want to display live listings on your website, we can help you connect via Showcase IDX or iHomeFinder IDX integration.
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
                  What is CRMLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  California Regional Multiple Listing Service (CRMLS) is California&apos;s statewide MLS, formed in 2010 when three existing MLSs merged. Headquartered in Chino Hills, CA, CRMLS serves over 81,000 real estate professionals and is governed by the California Association of REALTORS®.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does Showcase IDX and iHomeFinder support CRMLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Showcase IDX and iHomeFinder are licensed IDX vendors for CRMLS. Agents can use either vendor to display active and sold listings on their websites via IDX integration. DMR Media partners with Showcase IDX first, then iHomeFinder.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What areas does CRMLS cover?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Statewide California. Counties include Alameda, Butte, Contra Costa, Fresno, Glenn, Lake, Los Angeles, Mariposa, Merced, Monterey, Orange, Riverside, San Benito, San Bernardino, San Diego, San Luis Obispo, San Mateo, Santa Clara, Santa Cruz, and Ventura. Top cities include Los Angeles, San Diego, San Jose, Long Beach, Santa Monica, Irvine, and Palm Springs.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do I get IDX integration for my website?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  You must be a licensed real estate agent, your broker must be a CRMLS member, and you must have a letter of good standing from your existing board. Contact Showcase IDX or iHomeFinder for IDX subscription options, or work with a web partner who can configure IDX integration for CRMLS on your behalf.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with IDX setup for CRMLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. We integrate with Showcase IDX and iHomeFinder for CRMLS and serve 1 client in the area with EXP Luxury. Our team can help you connect your site to CRMLS. Contact us for assistance with IDX integration and implementation.
                </dd>
              </div>
            </dl>
          </section>

          {/* Conclusion / CTA */}
          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect Your Site to CRMLS
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve California and want to display live listings on your website, Showcase IDX or iHomeFinder IDX integration for CRMLS is a proven solution. Our team can help you set up MLS coverage and ensure your site complies with CRMLS display rules.
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
            California real estate growth stories
          </h2>
          <p className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8 max-w-2xl">
            We serve 1 client in the CRMLS region with EXP Luxury. Case studies from the California area coming soon.
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
