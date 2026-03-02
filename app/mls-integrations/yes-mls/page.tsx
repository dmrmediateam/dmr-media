import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yes MLS (yesmls) | Ohio Real Estate | iHomeFinder IDX | DMR Media',
  description:
    'Yes MLS (yesmls) with iHomeFinder IDX coverage. Ohio, Pennsylvania, Michigan, West Virginia live listings. Columbus, Cleveland, Akron. DMR Media integrates with iHomeFinder for yesmls.',
  alternates: {
    canonical: 'https://www.dmrmedia.org/mls-integrations/yes-mls',
  },
};

const IDX_VENDORS = ['iHomeFinder'];
const STATES = ['OH', 'PA', 'MI', 'WV'];

export default function YesMlsPage() {
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
            Yes MLS
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-6 opacity-80">
            yesmls
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
                <dd>$50 set-up fee</dd>
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
                Yes MLS (formerly MLS Now, and previously NEOHREX Northeast Ohio Real Estate Exchange) is a leading multiple listing service provider serving real estate professionals across Ohio, Pennsylvania, Michigan, and West Virginia. Formed in 2009 when NORMLS and CRIS MLS merged, Yes MLS has grown through additional mergers to become the largest MLS in Ohio, with over 12,500 members and nearly 1,300 firms. With a database of over two million listings dating back to 1991, Yes MLS offers unmatched access to property information across its 32 primary counties. DMR Media integrates with iHomeFinder for yesmls IDX coverage.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Coverage
                </h3>
                <div>
                  Ohio—including Columbus, Cleveland, Akron, Youngstown, Canton, Westerville, Mansfield, Dublin, Warren, Lorain, Medina, Massillon, Grove City, Elyria, Lancaster, and surrounding areas. Yes MLS also serves Pennsylvania, Michigan, and West Virginia. Counties include Ashtabula, Columbiana, Cuyahoga, Geauga, Lake, Lorain, Mahoning, Medina, Muskingum, Portage, Stark, Summit, Trumbull, Tuscarawas, and Wayne.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Users
                </h3>
                <div>
                  Licensed agents, brokers, home buyers, and sellers. Yes MLS is dedicated to fostering cooperation, collaboration, and communication among its members, with hands-on education, comprehensive online documentation, and a strong support system to help members navigate the real estate landscape.
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
                Yes MLS integrates with iHomeFinder to provide IDX (Internet Data Exchange) services. iHomeFinder connects directly to the MLS feed, allowing agents to display current listings—including active and sold—on their websites with automatic updates approximately every hour. Agents are permitted IDX with the approval of their broker.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder IDX Services for Yes MLS
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
                  Agents must hold active membership in a Board/Association of REALTORS® within the Yes MLS service area and have broker approval for IDX. Display rules and data refresh schedules are set by the MLS. Contact the MLS or iHomeFinder directly for the latest integration requirements.
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
                Membership types include Ohio Board Member Participant (primary broker or appraiser must pay local, state, and national dues and be in good standing with a Board/Association of REALTORS® within Ohio), Non-Ohio Board Member (out-of-state board member), and Non-Board Member (not a member of a Board/Association of REALTORS®).
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Association Fees (via iHomeFinder)
                </h3>
                <div>
                  $50 set-up fee. iHomeFinder charges separate subscription fees for IDX integration; pricing varies by plan. Confirm current costs with iHomeFinder before signing up.
                </div>
              </div>
              <div>
                Contact iHomeFinder or the MLS for current pricing and plan options.
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
                Yes MLS serves real estate professionals across Ohio, Pennsylvania, Michigan, and West Virginia. As the largest MLS in Ohio, Yes MLS is at the forefront of technological advancements and industry best practices. From the busy cities of Columbus and Cleveland to the towns dotting the region, Yes MLS connects agents with the information and resources they need to thrive in competitive markets.
              </div>
              <div>
                With a focus on cooperation, collaboration, and communication among its members, Yes MLS empowers agents to deliver exceptional service to their clients and drive business growth. DMR Media integrates with iHomeFinder for yesmls and can help you connect your website to live listings.
              </div>
              <div>
                If you&apos;re an agent or broker in Ohio, Pennsylvania, Michigan, or West Virginia and want to display live listings on your website, we can help you connect via iHomeFinder IDX integration.
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
                  What is Yes MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes MLS (formerly MLS Now and NEOHREX) is a leading multiple listing service provider serving Ohio, Pennsylvania, Michigan, and West Virginia. Formed in 2009 through the merger of NORMLS and CRIS MLS, it has grown to become the largest MLS in Ohio with over 12,500 members and nearly 1,300 firms. With over two million listings dating back to 1991, Yes MLS offers comprehensive property data across 32 primary counties.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does iHomeFinder support Yes MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. iHomeFinder is a licensed IDX vendor for Yes MLS (Yes MLS / MLS Now). Agents can use iHomeFinder to display active and sold listings on their websites via IDX integration, with broker approval.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What areas does Yes MLS cover?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Ohio, Pennsylvania, Michigan, and West Virginia. Key cities include Columbus, Cleveland, Akron, Youngstown, Canton, Westerville, Mansfield, Charleston (WV), Dublin, Warren, Lorain, Medina, Massillon, Grove City, Elyria, Lancaster, and surrounding areas. Counties include Ashtabula, Columbiana, Cuyahoga, Geauga, Lake, Lorain, Mahoning, Medina, Muskingum, Portage, Stark, Summit, Trumbull, Tuscarawas, and Wayne.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do I get IDX integration for my website?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  You must be an active member of a Board/Association of REALTORS® within the Yes MLS service area and have broker approval for IDX. Contact iHomeFinder for IDX subscription options, or work with a web partner who can configure iHomeFinder IDX integration for Yes MLS on your behalf.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with iHomeFinder IDX setup for Yes MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. We integrate with iHomeFinder for yesmls. Our team can help you connect your site to Yes MLS. Contact us for assistance with iHomeFinder integration and IDX implementation.
                </dd>
              </div>
            </dl>
          </section>

          {/* Conclusion / CTA */}
          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect Your Site to Yes MLS
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve Ohio, Pennsylvania, Michigan, or West Virginia and want to display live listings on your website, iHomeFinder IDX integration for Yes MLS is a proven solution. Our team can help you set up iHomeFinder MLS coverage and ensure your site complies with MLS display rules.
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
            Ohio, Pennsylvania, Michigan & West Virginia real estate growth stories
          </h2>
          <p className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8 max-w-2xl">
            Case studies from the Yes MLS region coming soon.
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
