import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BAREIS MLS | Bay Area Real Estate Information Services | iHomeFinder IDX | DMR Media',
  description:
    'BAREIS MLS with iHomeFinder IDX coverage. Marin, Sonoma, Napa, Solano, Mendocino counties. North Bay and Wine Country live listings.',
  alternates: {
    canonical: 'https://dmrmedia.org/mls-integrations/bareis',
  },
};

const IDX_VENDORS = ['iHomeFinder'];
const STATES = ['CA'];

export default function BareisMlsPage() {
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
            Bay Area Real Estate Information Services
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-6 opacity-80">
            bareis
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
          {/* About this MLS - iHomeFinder data */}
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
                <dd>Approx. 2 hours</dd>
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
                BAREIS MLS® (Bay Area Real Estate Information Services) is the broker-owned multiple listing service serving real estate professionals throughout Marin, Sonoma, Napa, Solano, and Mendocino counties in Northern California. Since 1997, BAREIS has provided members with personalized service and support, accurate and extensive listing data, broad listing distribution, and powerful technology tools. iHomeFinder provides IDX integration so agents and brokers can display live listings on their websites. Visit{' '}
                <a
                  href="https://bareis.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-70 transition-opacity"
                >
                  bareis.com
                </a>
                {' '}for membership, orientation, and member support.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Coverage
                </h3>
                <div>
                  Marin, Napa, Sonoma, Solano, and Mendocino counties—the North Bay, Wine Country, and North Coast. Including San Rafael, Santa Rosa, Petaluma, Fairfield, Vacaville, Vallejo, and surrounding areas. Through the NorCal MLS Alliance, BAREIS members also access listing data from seven other Northern California MLSs across 26 counties.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Users
                </h3>
                <div>
                  Licensed agents, brokers, home buyers, and sellers.
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
                BAREIS MLS integrates with iHomeFinder to provide IDX (Internet Data Exchange) services. iHomeFinder connects directly to the MLS feed, allowing agents to display current listings—including active and sold—on their websites with automatic updates approximately every 2 hours.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder IDX Services for BAREIS
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
                  Agents must hold active BAREIS membership to use iHomeFinder IDX coverage. Display rules and data refresh schedules are set by the MLS. Contact the MLS or iHomeFinder directly for the latest integration requirements.
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
                Membership in BAREIS MLS is required for agents and brokers who wish to list or show properties in the North Bay. Access is typically obtained through a participating Realtor® association—including Marin Association of REALTORS®, North Bay Association of REALTORS®, Northern Solano County Association of REALTORS®, and Solano Association of REALTORS®.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Association Fees (via iHomeFinder)
                </h3>
                <div>
                  None. iHomeFinder does not charge fees paid to the association for BAREIS IDX coverage.
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
                BAREIS MLS® serves real estate professionals throughout the North Bay, Wine Country, and North Coast. Through the NorCal MLS Alliance, BAREIS members enjoy access to property data from seven other Northern California MLSs, covering 26 counties—ensuring members remain their clients&apos; trusted advisor for the region and beyond.
              </div>
              <div>
                BAREIS members have access to property data throughout California and across the nation, providing comprehensive coverage for buyers and sellers in one of the country&apos;s most dynamic markets. The combination of local expertise and broad data access helps agents deliver exceptional service.
              </div>
              <div>
                With personalized support, accurate listing data, and powerful technology tools, BAREIS has been the go-to MLS for the North Bay since 1997. The organization is committed to helping members succeed in Marin, Sonoma, Napa, Solano, and Mendocino counties.
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
                  What is BAREIS MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  BAREIS MLS® (Bay Area Real Estate Information Services) is the broker-owned multiple listing service for Marin, Sonoma, Napa, Solano, and Mendocino counties in Northern California. It has served the North Bay since 1997.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does iHomeFinder support BAREIS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. iHomeFinder is a licensed IDX vendor for BAREIS. Agents can use iHomeFinder to display active and sold listings on their websites via IDX integration.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What areas does BAREIS cover?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Marin, Napa, Sonoma, Solano, and Mendocino counties—including San Rafael, Santa Rosa, Petaluma, Fairfield, Vacaville, Vallejo, and surrounding areas. Through the NorCal MLS Alliance, members also access data from 26 counties across Northern California.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do I get IDX integration for my website?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  You must be an active BAREIS member. Contact iHomeFinder for IDX subscription options, or work with a web partner who can configure iHomeFinder IDX integration for BAREIS on your behalf.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with iHomeFinder IDX setup?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Our team can help you connect your site to BAREIS. Contact us for assistance with iHomeFinder integration and IDX implementation.
                </dd>
              </div>
            </dl>
          </section>

          {/* Conclusion / CTA */}
          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect Your Site to BAREIS MLS
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve the North Bay, Wine Country, or North Coast and want to display live listings on your website, iHomeFinder IDX integration for BAREIS is a proven solution. Our team can help you set up iHomeFinder MLS coverage and ensure your site complies with MLS display rules.
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

      {/* Case Studies - Separate section at bottom */}
      <section id="case-studies" className="py-24 md:py-32 border-t border-[var(--color-ink-200)] bg-[var(--surface-base)]">
        <div className="container-max">
          <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-off-black)] font-serif block mb-4">
            Case studies in this region
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-12 tracking-tight">
            North Bay & Wine Country real estate growth stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl">
            <Link
              href="/case-study/marquis-farwell-group"
              className="group border-b border-[var(--color-ink-200)] pb-12 hover:opacity-60 transition-opacity duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between gap-6 mb-6">
                <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-off-black)] font-serif">
                  Organic Visibility
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif">
                  19x Daily Clicks
                </span>
              </div>
              <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-6">
                Marquis + Farwell Group
              </h3>
              <div className="text-sm text-[var(--color-off-black)] leading-relaxed font-serif mb-6">
                Transformed organic visibility in Sonoma County, growing from 2 clicks per day to 38 clicks per day while generating qualified buyer leads directly from search—all without relying on portals or paid leads.
              </div>
              <div className="relative aspect-[16/9] overflow-hidden mb-6">
                <Image
                  src="/images/MarquisFarwellGoogleSearchConsole.png"
                  alt="Marquis + Farwell Group Google Search Console"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif">
                Read the story
              </span>
            </Link>
          </div>
          <Link
            href="/case-studies"
            className="mt-12 inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity"
          >
            View all case studies
          </Link>
        </div>
      </section>
    </div>
  );
}
