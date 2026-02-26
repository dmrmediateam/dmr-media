import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MLS PIN | MLS Property Information Network | Showcase IDX & iHomeFinder | DMR Media',
  description:
    'MLS PIN (MLS Property Information Network) with Showcase IDX and iHomeFinder IDX coverage. Massachusetts, Rhode Island, New Hampshire. New England live listings.',
  alternates: {
    canonical: 'https://dmrmedia.org/mls-integrations/mls-pin',
  },
};

const IDX_VENDORS = ['Showcase IDX', 'iHomeFinder'];
const STATES = ['MA', 'RI', 'NH'];

export default function MlsPinPage() {
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
            MLS Property Information Network
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-6 opacity-80">
            mls-pin
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
                <dd>No fee to join; IDX data feed fees vary by vendor (~$10/mo via some vendors)</dd>
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
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Listing Statuses in IDX</dt>
                <dd>Active, active under contract, pending</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3 sm:col-span-2">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Update Interval</dt>
                <dd>Approx. 1 hour (varies by vendor)</dd>
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
                MLS Property Information Network (MLS PIN) is one of the largest Realtor-owned multiple listing services in the nation. Founded in 1997 and based in Shrewsbury, MA, MLS PIN serves Massachusetts, Rhode Island, and much of New Hampshire with approximately 35,000 listings and over 40,000 agents. DMR Media supports MLS PIN through Showcase IDX and iHomeFinder, enabling agents and brokers to display live listings on their websites.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Coverage
                </h3>
                <div>
                  Massachusetts, Rhode Island, and much of New Hampshire—including Boston, Cambridge, Somerville, Brookline, Worcester, Quincy, Newton, Springfield, Plymouth, Fall River, New Bedford, and surrounding areas across New England.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Users
                </h3>
                <div>
                  Licensed agents, brokers, home buyers, and sellers. Visit{' '}
                  <a
                    href="https://www.mlspin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                  >
                    mlspin.com
                  </a>
                  {' '}for membership, Pinergy platform access, and member support.
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
                MLS PIN integrates with both Showcase IDX and iHomeFinder to provide IDX (Internet Data Exchange) services. Each vendor connects directly to the MLS feed, allowing agents to display current listings—including active, pending, and sold—on their websites with automatic updates.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Showcase IDX
                </h3>
                <p className="mb-4">
                  Showcase IDX offers MLS PIN coverage with portal-quality property search, map search, listing pages, and lead capture tools. Learn more at{' '}
                  <a
                    href="https://showcaseidx.com/mls-coverage/mls-property-information-network-mlspin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                  >
                    Showcase IDX MLS PIN coverage
                  </a>.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder
                </h3>
                <p className="mb-4">
                  iHomeFinder is a licensed IDX vendor for MLS PIN. MLS PIN members typically require no IDX licensing paperwork—just a quick email verification of membership. iHomeFinder usually approves IDX service within one business day of signup.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Integration Notes & Restrictions
                </h3>
                <div>
                  Agents must hold active MLS PIN membership. Your employing broker must be an MLS PIN subscriber. Display rules and data refresh schedules are set by the MLS. Contact the MLS or your chosen IDX vendor for the latest integration requirements.
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
                Membership in MLS PIN is required for agents and brokers who wish to list or show properties in Massachusetts, Rhode Island, and New Hampshire. There is no fee to join; your employing broker must be an MLS PIN subscriber. New subscribers can complete the online membership application at mlspin.com.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Data Feed Fees
                </h3>
                <div>
                  MLS PIN charges a fee to access the IDX data feed. Your share is approximately $10 per month via some vendors. Showcase IDX and iHomeFinder each have their own subscription pricing. Confirm current costs with your chosen vendor before signing up.
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
                  MLS PIN Tools & Benefits
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Pinergy MLS platform (proprietary, state-of-the-art)</li>
                  <li>Cloud CMA, Boost, Remine, Supra, DepositLink, RatePlug</li>
                  <li>Listing syndication with major portals</li>
                  <li>Education and training (online and in-office)</li>
                  <li>Phone and email support evenings and 7 days a week</li>
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
                MLS PIN aims to give its subscribers a competitive edge through accurate data, user-friendly technology, and exceptional service. As a Charter Member of RESO with Platinum Certification for the RESO data dictionary and RESO Web API, MLS PIN is a recognized leader in data standards.
              </div>
              <div>
                With coverage across Greater Boston, Worcester, Springfield, the North Shore, Cape Cod, and much of New Hampshire and Rhode Island, MLS PIN centralizes listing data for one of the most active real estate markets in the country.
              </div>
              <div>
                DMR Media serves clients in the MLS PIN region. If you&apos;re an agent or broker in Massachusetts, Rhode Island, or New Hampshire and want to display live listings on your website, we can help you connect via Showcase IDX or iHomeFinder.
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
                  What is MLS PIN?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  MLS Property Information Network (MLS PIN) is one of the largest Realtor-owned multiple listing services in the nation. Founded in 1997 and based in Shrewsbury, MA, it serves Massachusetts, Rhode Island, and much of New Hampshire with tens of thousands of listings.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media support MLS PIN?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. We support MLS PIN through Showcase IDX and iHomeFinder. Both vendors provide IDX integration so agents can display live listings on their websites.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What areas does MLS PIN cover?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Massachusetts, Rhode Island, and much of New Hampshire—including Boston, Cambridge, Worcester, Springfield, Plymouth, the North Shore, Cape Cod, and surrounding areas.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do I get IDX integration for my website?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  You must be an active MLS PIN member with an employing broker who is an MLS PIN subscriber. Contact Showcase IDX or iHomeFinder for IDX subscription options, or work with a web partner like DMR Media to configure integration on your behalf.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with MLS PIN IDX setup?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Our team can help you connect your site to MLS PIN via Showcase IDX or iHomeFinder. Contact us for assistance with IDX implementation.
                </dd>
              </div>
            </dl>
          </section>

          {/* Conclusion / CTA */}
          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect Your Site to MLS PIN
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve Massachusetts, Rhode Island, or New Hampshire and want to display live listings on your website, Showcase IDX and iHomeFinder both offer MLS PIN IDX integration. Our team can help you set up coverage and ensure your site complies with MLS display rules.
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

      {/* Case Studies - No case studies yet */}
      <section id="case-studies" className="py-24 md:py-32 border-t border-[var(--color-ink-200)] bg-[var(--surface-base)]">
        <div className="container-max">
          <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-off-black)] font-serif block mb-4">
            Case studies in this region
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
            New England real estate growth stories
          </h2>
          <p className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8 max-w-2xl">
            We serve clients in Massachusetts, Rhode Island, and New Hampshire. Case studies from the MLS PIN region coming soon.
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
