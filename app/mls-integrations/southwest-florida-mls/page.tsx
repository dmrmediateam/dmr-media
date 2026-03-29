import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Southwest Florida MLS (SWFLMLS) | iHomeFinder IDX Coverage | Naples, Fort Myers, Cape Coral | DMR Media',
  description:
    'Southwest Florida MLS IDX integration via iHomeFinder. Covers Naples, Fort Myers, Cape Coral, Bonita Springs, and all of Collier County. Active and sold listings for SWFLMLS members.',
};

const IDX_VENDORS = ['iHomeFinder', 'Showcase IDX'];
const STATES = ['FL'];

export default function SouthwestFloridaMlsPage() {
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
            Southwest Florida MLS
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-2 opacity-60">
            Formerly SunshineMLS · SWFLMLS
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
                <dd>See pass-through fees</dd>
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
                Southwest Florida MLS (formerly SunshineMLS) is the integrated MLS serving Bonita Springs-Estero, Cape Coral, Fort Myers, and Naples. It consolidates data from multiple Southwest Florida Realtor® associations into a single IDX feed, providing agents and brokers with comprehensive listing coverage across Collier County and surrounding areas.
              </div>
              <div>
                iHomeFinder is a licensed IDX vendor for Southwest Florida MLS, providing seamless integration so agents can display active and sold listings directly on their websites.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Primary Coverage Area
                </h3>
                <div>
                  Collier County and Southwest Florida — including Naples, Bonita Springs, Cape Coral, Fort Myers, Estero, Marco Island, Immokalee, Golden Gate, and surrounding communities.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Member Associations
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Bonita Springs-Estero Association of REALTORS®</li>
                  <li>Cape Coral Association of REALTORS® (RPC)</li>
                  <li>Florida Gulf Coast MLS (FGC / RPC)</li>
                  <li>Naples Area Board of REALTORS®</li>
                  <li>REALTOR® Association of Greater Fort Myers &amp; the Beach (RPC)</li>
                  <li>Royal Palm Coast REALTOR® Association</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Users
                </h3>
                <div>
                  Licensed agents, brokers, home buyers, and sellers operating in Southwest Florida.
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
                Southwest Florida MLS integrates with iHomeFinder to provide IDX (Internet Data Exchange) services. The feed connects directly to the MLS, allowing agents to display current listings — including active and sold — on their websites with updates approximately every 2 hours.
              </div>
              <div>
                When signing up for iHomeFinder IDX coverage for this market, select the name of your local board: Bonita Springs-Estero, Naples, or Royal Palm Coast. Note that the Cape Coral Association of REALTORS® and the REALTORS® Association of Greater Fort Myers &amp; the Beach have merged into the Royal Palm Coast Association of REALTORS® (also known as the Florida Gulf Coast MLS), both covered through the combined Southwest Florida MLS data feed.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder IDX Services for Southwest Florida MLS
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
                  Agents must hold active membership with one of the participating Southwest Florida associations to use iHomeFinder IDX coverage. Display rules and data refresh schedules are governed by the MLS. Contact the MLS or iHomeFinder directly for the latest integration requirements and board selection guidance.
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
                Membership in Southwest Florida MLS is obtained through one of the participating Realtor® associations. Agents must be active members to access the IDX data feed and display listings on their websites.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Association Fees (via iHomeFinder)
                </h3>
                <div>
                  Pass-through fees may apply depending on your board. iHomeFinder charges separate subscription fees for IDX integration; pricing varies by plan. Confirm current costs with iHomeFinder and your local board before signing up.
                </div>
              </div>
              <div>
                The Matrix™ RETS system powers data delivery for Southwest Florida MLS. Members log in at{' '}
                <a
                  href="https://www.swflamls.com/matrix/login.aspx"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="underline hover:opacity-60 transition-opacity"
                >
                  swflamls.com
                </a>
                .
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
                  <li>Luxury waterfront and golf community properties</li>
                  <li>Commercial properties</li>
                  <li>Land and lots</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Search & Data Features
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Large photos, virtual tours, and full property details</li>
                  <li>Map-based search and boundary filters</li>
                  <li>Sold listings and market statistics</li>
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
                Southwest Florida is one of the most active luxury real estate markets in the United States. Naples consistently ranks among the top markets nationally for median home price, and Cape Coral and Fort Myers have seen sustained demand from domestic and international buyers seeking waterfront and golf-community properties.
              </div>
              <div>
                Having IDX integration with Southwest Florida MLS means agents can display the full breadth of active and sold inventory across Collier County and the broader Gulf Coast — giving buyers a seamless on-site search experience and giving agents a critical lead generation channel.
              </div>
              <div>
                DMR Media works with agents and teams across Southwest Florida, including the Eagan Luxury team based in St. Petersburg, to build IDX-connected websites that rank in competitive luxury markets and convert qualified buyer traffic.
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
                  What is Southwest Florida MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Southwest Florida MLS (formerly SunshineMLS) is the integrated multiple listing service covering Bonita Springs-Estero, Cape Coral, Fort Myers, Naples, and Collier County. It consolidates listing data from six participating Realtor® associations into a single Matrix™ RETS data feed.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does iHomeFinder support Southwest Florida MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. iHomeFinder is a licensed IDX vendor for Southwest Florida MLS. When signing up, select your local board (Bonita Springs-Estero, Naples, or Royal Palm Coast) to access the correct data feed for your coverage area.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What cities does Southwest Florida MLS cover?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Coverage includes Naples, Fort Myers, Cape Coral, Bonita Springs, Estero, Marco Island, Immokalee, and the broader Collier County and Southwest Florida region.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Are there association fees for Southwest Florida MLS IDX?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Pass-through fees may apply depending on your local board. Confirm the specific fee structure with iHomeFinder and your association before activating IDX coverage.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with SWFLMLS IDX setup?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Our team can help you connect your site to Southwest Florida MLS via iHomeFinder. We handle the integration, widget placement, and ensure your site complies with MLS display rules. Contact us to get started.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How does SWFLMLS compare to Stellar MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Stellar MLS covers Central and North Florida (Orlando, Tampa, Puerto Rico), while Southwest Florida MLS is focused on Collier County and the Gulf Coast — Naples, Fort Myers, and Cape Coral. Agents serving Southwest Florida typically need SWFLMLS membership specifically.{' '}
                  <Link
                    href="/mls-integrations/stellar-mls"
                    className="underline hover:opacity-60 transition-opacity"
                  >
                    Learn more about Stellar MLS
                  </Link>
                  .
                </dd>
              </div>
            </dl>
          </section>

          {/* CTA */}
          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect Your Site to Southwest Florida MLS
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve the Naples, Fort Myers, or Cape Coral market and want to display live listings on your website, iHomeFinder IDX integration for Southwest Florida MLS is a proven solution. Our team can help you set up IDX coverage and ensure your site complies with MLS display rules.
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
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-12 tracking-tight">
            Southwest Florida real estate growth stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl">
            <Link
              href="/case-study/eagan-luxury-real-estate"
              className="group border-b border-[var(--color-ink-200)] pb-12 hover:opacity-60 transition-opacity duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between gap-6 mb-6">
                <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-off-black)] font-serif">
                  Website Consolidation
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif">
                  Ongoing
                </span>
              </div>
              <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-6">
                Eagan Luxury Real Estate
              </h3>
              <div className="text-sm text-[var(--color-off-black)] leading-relaxed font-serif mb-6">
                Consolidated multiple fragmented websites into a single, powerful brand presence—launched December 17th with 0 measurable ranking loss and 10% keyword increase. Currently redirecting legacy sites and running retargeting campaigns.
              </div>
              <div className="relative aspect-[16/9] overflow-hidden mb-6">
                <img
                  src="/images/screencapture-eaganluxury-2025-12-17-21_25_49.png"
                  alt="Eagan Luxury Real Estate website homepage"
                  className="w-full h-full object-cover"
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
