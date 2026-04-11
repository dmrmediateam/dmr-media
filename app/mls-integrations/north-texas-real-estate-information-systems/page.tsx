import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'North Texas Real Estate Information Systems (NTREIS) | Showcase IDX & iHomeFinder | DMR Media',
  description:
    'NTREIS (North Texas Real Estate Information Systems) with Showcase IDX and iHomeFinder IDX coverage. Dallas–Fort Worth and North Texas live listings.',
  alternates: {
    canonical: 'https://www.dmrmedia.org/mls-integrations/north-texas-real-estate-information-systems',
  },
};

const IDX_VENDORS = ['Showcase IDX', 'iHomeFinder'];
const STATES = ['TX'];

export default function NtreisPage() {
  return (
    <div className="min-h-screen bg-white">
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
            North Texas Real Estate Information Systems
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-6 opacity-80">
            north-texas-real-estate-information-systems
          </div>

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
                <dd>None (via iHomeFinder; confirm with your association)</dd>
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
                <dd>No</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3 sm:col-span-2">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Update Interval</dt>
                <dd>Approx. 2 hours (varies by vendor)</dd>
              </div>
            </dl>
          </section>

          <section id="overview">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Overview
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                North Texas Real Estate Information Systems, Inc. (NTREIS) is the MLS for much of North Texas,
                including the Dallas–Fort Worth metropolitan area—serving 40,000+ subscribers across more than
                48,000 square miles. NTREIS delivers listing data, Matrix and related technology, and professional
                resources for real estate practitioners and their clients. DMR Media supports NTREIS through
                Showcase IDX and iHomeFinder so agents and brokers can display live listings on their websites.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Coverage
                </h3>
                <div>
                  Greater Dallas–Fort Worth and North Texas—including Dallas, Fort Worth, Granbury, Abilene,
                  McKinney, Arlington, Frisco, Plano, Weatherford, Possum Kingdom Lake, Corsicana, Cleburne, Grand
                  Prairie, Irving, Garland, Whitney, Rockwall, Denton, and many surrounding cities and towns.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Users
                </h3>
                <div>
                  Licensed agents, brokers, home buyers, and sellers. Visit{' '}
                  <a
                    href="https://www.ntreis.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                  >
                    ntreis.net
                  </a>
                  {' '}for membership, Matrix access, and member resources.
                </div>
              </div>
            </div>
          </section>

          <section id="idx-integration">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              IDX Integration & Vendor Details
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                NTREIS integrates with Showcase IDX and iHomeFinder to provide IDX (Internet Data Exchange)
                services. Each vendor connects to the MLS feed so agents can display current listings—including
                active and sold where permitted—on their websites with automatic updates.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Showcase IDX
                </h3>
                <p className="mb-4">
                  Showcase IDX offers NTREIS coverage with portal-quality property search, map search, listing
                  pages, and lead capture. Learn more at{' '}
                  <a
                    href="https://showcaseidx.com/mls-coverage/north-texas-real-estate-information-systems-ntreis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                  >
                    Showcase IDX NTREIS coverage
                  </a>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder
                </h3>
                <p className="mb-4">
                  iHomeFinder is a licensed IDX vendor for NTREIS. See association and city coverage details at{' '}
                  <a
                    href="https://www.ihomefinder.com/resources/idx-coverage/north-texas-real-estate-information-systems-ntreis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                  >
                    iHomeFinder NTREIS IDX coverage
                  </a>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Additional vendor & MLS references
                </h3>
                <p className="mb-4">
                  Realtyna also publishes MLS coverage notes for NTREIS at{' '}
                  <a
                    href="https://realtyna.com/mls-coverage/mls/north-texas-real-estate-info-systems-ntreis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                  >
                    Realtyna NTREIS coverage
                  </a>
                  . Display rules and refresh schedules are set by NTREIS; confirm the latest requirements with the
                  MLS or your IDX vendor.
                </p>
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

          <section id="fees">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Membership & Fees
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                Participation in NTREIS is tied to membership in a participating Realtor® association and broker
                requirements in your market. IDX access is subject to MLS rules and any broker-of-record
                approvals.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX & vendor fees
                </h3>
                <div>
                  NTREIS may charge for IDX data feed access; many agents see on the order of $20/month through
                  some vendors (e.g. Showcase IDX). iHomeFinder reports no separate association IDX fee in its
                  coverage summary. Showcase IDX and iHomeFinder each have their own subscription pricing. Confirm
                  current costs with your chosen vendor and the MLS before signing up.
                </div>
              </div>
            </div>
          </section>

          <section id="services">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Services & Features
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  NTREIS tools & ecosystem
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>NTREIS Matrix and related MLS platforms</li>
                  <li>InnoVia, Go, Find, Tax, Doc Storage, and other NTREIS product lines</li>
                  <li>Training and member support for North Texas practitioners</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX search & data features (vendors)
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Large photos, listing details, and map-based search</li>
                  <li>Open houses and sold data where permitted by MLS policy</li>
                  <li>Lead capture from property views and saved searches</li>
                  <li>Mobile-responsive listing displays</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Market Impact & Why It Matters
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                NTREIS anchors listing data for one of the largest and fastest-growing metros in the United
                States. Centralized MLS data supports pricing, showings, and marketing across DFW and surrounding
                North Texas communities.
              </div>
              <div>
                Whether you work urban infill, suburban new construction, or lake and Hill Country-adjacent
                markets, IDX integration helps buyers search your site with data that stays in sync with the MLS.
              </div>
            </div>
          </section>

          <section id="faq">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-8">
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What is NTREIS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  North Texas Real Estate Information Systems (NTREIS) is the multiple listing service for much of
                  North Texas, including the Dallas–Fort Worth area. It provides listing data and technology
                  services to tens of thousands of real estate professionals across a broad geographic footprint.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does Showcase IDX support NTREIS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Showcase IDX publishes NTREIS coverage and IDX tools for compliant property search on agent
                  and broker websites.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does iHomeFinder support NTREIS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. iHomeFinder lists North Texas Real Estate Information Systems in its IDX coverage directory
                  with the member associations and markets it serves.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do I get IDX integration for my website?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  You must meet NTREIS and association participation requirements. Contact Showcase IDX or
                  iHomeFinder for IDX plans, or work with a web partner like DMR Media to configure integration on
                  your behalf.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with NTREIS IDX setup?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Our team can help you connect your site to NTREIS via Showcase IDX or iHomeFinder. Contact us
                  for assistance with IDX implementation and display compliance.
                </dd>
              </div>
            </dl>
          </section>

          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect Your Site to NTREIS
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve Dallas–Fort Worth or greater North Texas and want live MLS search on your website,
              Showcase IDX and iHomeFinder both offer NTREIS IDX integration. We can help you choose a path, wire up
              search and lead capture, and keep your site aligned with MLS rules.
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

      <section id="case-studies" className="py-24 md:py-32 border-t border-[var(--color-ink-200)] bg-[var(--surface-base)]">
        <div className="container-max">
          <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-off-black)] font-serif block mb-4">
            Case studies in this region
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
            Texas real estate growth stories
          </h2>
          <p className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8 max-w-2xl">
            Case studies from the NTREIS / North Texas market coming soon.
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
