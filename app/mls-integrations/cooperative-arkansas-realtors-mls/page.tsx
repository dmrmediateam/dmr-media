import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cooperative Arkansas Realtors MLS (CARMLS) | iHomeFinder & Showcase IDX | DMR Media',
  description:
    'CARMLS IDX integration via iHomeFinder and Showcase IDX. The largest MLS in Arkansas — Little Rock, Fayetteville, Fort Smith, Rogers, and every county statewide. No association fees via iHomeFinder.',
};

const IDX_VENDORS = ['iHomeFinder', 'Showcase IDX'];
const STATES = ['AR'];

export default function CooperativeArkansasRealtorsMlsPage() {
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
            Cooperative Arkansas Realtors MLS
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-2 opacity-60">
            CARMLS · Largest MLS in Arkansas
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
                <dd>None (via iHomeFinder)</dd>
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
                Cooperative Arkansas Realtors MLS (CARMLS) is the largest multiple listing service in Arkansas, supporting over 6,000 members and more than 931 brokerages. CARMLS represents listings in every county in Arkansas and serves REALTOR® client boards along with additional brokerages throughout Arkansas and surrounding contiguous states.
              </div>
              <div>
                iHomeFinder and Showcase IDX are licensed IDX vendors for CARMLS, allowing agents and brokers to display active listings directly on their websites.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Primary Coverage Area
                </h3>
                <div>
                  Arkansas statewide — every county. Key cities include Little Rock, Fayetteville, Fort Smith, Rogers, Jonesboro, Conway, Hot Springs, North Little Rock, Benton, Pine Bluff, Russellville, and Paragould. Coverage also extends to neighboring areas including Memphis, TN, Monroe, LA, and Texarkana, TX.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Users
                </h3>
                <div>
                  Licensed agents, brokers, home buyers, and sellers operating in Arkansas and surrounding contiguous states.
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
                CARMLS integrates with iHomeFinder and Showcase IDX to provide IDX (Internet Data Exchange) services. Both vendors connect directly to the MLS feed, allowing agents to display current listings on their websites with automatic updates approximately every 2 hours.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder IDX Services for CARMLS
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Live property search widgets</li>
                  <li>Listing detail pages with full photos and descriptions</li>
                  <li>Map-based search and neighborhood browsing</li>
                  <li>Saved searches and property alerts</li>
                  <li>Lead capture forms tied to MLS search activity</li>
                  <li>Mobile-responsive listing displays</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Showcase IDX Services for CARMLS
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>High-performance IDX search with fast load times</li>
                  <li>Advanced lead capture and behavioral tracking</li>
                  <li>Polygon and boundary-based search tools</li>
                  <li>Customizable listing pages and widgets</li>
                  <li>CRM and follow-up integrations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Integration Notes & Restrictions
                </h3>
                <div>
                  Agents must hold active CARMLS membership to use IDX coverage. Display rules and data refresh schedules are governed by the MLS. Contact CARMLS or your IDX vendor directly for the latest integration requirements and compliance guidelines.
                </div>
              </div>
              <div>
                <Link
                  href="/mls-integrations"
                  className="text-[var(--color-off-black)] underline hover:opacity-60 transition-opacity font-serif"
                >
                  Learn more about IDX services with iHomeFinder and Showcase IDX here
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
                Membership in CARMLS is required for agents and brokers who wish to list or show properties in Arkansas. Access is obtained through a participating REALTOR® board or directly through CARMLS. CARMLS is headquartered at 201 Natural Resources Drive, Little Rock, AR 72205, and can be reached at 501-224-3339.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Association Fees (via iHomeFinder)
                </h3>
                <div>
                  None. iHomeFinder does not charge fees paid to the association for CARMLS IDX coverage. iHomeFinder subscription fees for IDX integration apply separately; pricing varies by plan. Confirm current costs with iHomeFinder before signing up.
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Showcase IDX Fees
                </h3>
                <div>
                  Showcase IDX charges a separate subscription fee for IDX integration. Pricing varies by plan and market. Confirm current costs with Showcase IDX directly before signing up.
                </div>
              </div>
              <div>
                Members log in and manage listings at{' '}
                <a
                  href="https://carmls.com/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="underline hover:opacity-60 transition-opacity"
                >
                  carmls.com
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
                  <li>Commercial properties</li>
                  <li>Land and lots</li>
                  <li>Properties in every Arkansas county</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Search & Data Features
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Large photos, virtual tours, and full property details</li>
                  <li>Map-based search and boundary filters</li>
                  <li>Open house and showing information</li>
                  <li>Distressed listing search</li>
                  <li>Mobile apps via Paragon Connect and Homes Pro</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Tools & Benefits
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Lead capture from property views and searches</li>
                  <li>CRM integration for automated follow-up</li>
                  <li>Customizable search widgets for agent websites</li>
                  <li>Mobile-responsive listing displays</li>
                  <li>Local market reports to position agents as area experts</li>
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
                CARMLS is the single largest MLS in Arkansas, with over 6,000 members across 931+ brokerages — representing listings in every county in the state. For agents operating in Arkansas, CARMLS membership and IDX integration are essential tools for building a competitive online presence.
              </div>
              <div>
                Arkansas markets like Fayetteville, Rogers, and Bentonville in the Northwest Arkansas corridor have seen significant growth driven by corporate relocations and quality-of-life buyers. IDX-connected websites targeting these markets can capture meaningful organic search traffic and convert it into buyer leads.
              </div>
              <div>
                DMR Media builds IDX-connected real estate websites for agents across Arkansas and surrounding markets, integrating iHomeFinder and Showcase IDX to drive qualified traffic and generate leads at scale.
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
                  What is CARMLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Cooperative Arkansas Realtors MLS (CARMLS) is the largest multiple listing service in Arkansas, serving over 6,000 members and representing listings in every county in Arkansas and surrounding contiguous states.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does iHomeFinder support CARMLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. iHomeFinder is a licensed IDX vendor for CARMLS with no association fees. Agents can use iHomeFinder to display live listings on their websites with automatic updates.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does Showcase IDX support CARMLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Showcase IDX provides IDX integration for CARMLS with high-performance search tools, advanced lead capture, and polygon-based search. Contact Showcase IDX for current pricing and coverage details.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What cities does CARMLS cover?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  CARMLS covers all 75 Arkansas counties — including Little Rock, Fayetteville, Fort Smith, Rogers, Bentonville, Jonesboro, Conway, Hot Springs, and Pine Bluff. Coverage also extends to neighboring areas in Tennessee, Louisiana, and Texas.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Are there association fees for CARMLS IDX with iHomeFinder?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  No. iHomeFinder does not charge fees paid to the association for CARMLS IDX coverage. iHomeFinder subscription fees apply separately. Confirm current costs with iHomeFinder before signing up.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with CARMLS IDX setup?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Our team can help you connect your site to CARMLS via iHomeFinder or Showcase IDX. We handle integration, widget placement, and ensure your site complies with MLS display rules. Contact us to get started.
                </dd>
              </div>
            </dl>
          </section>

          {/* CTA */}
          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect Your Site to CARMLS
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve the Arkansas market and want to display live listings on your website, iHomeFinder or Showcase IDX integration for CARMLS is a proven solution. Our team can help you set up IDX coverage and ensure your site complies with MLS display rules.
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
            Arkansas real estate growth stories
          </h2>
          <div className="max-w-5xl">
            <p className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              We partner with agents and teams across Arkansas to build IDX-connected websites that rank in competitive local markets. If you&apos;re serving the Arkansas market and want to see what a DMR Media-built site can do, contact us for a strategy call.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.12em] text-xs font-serif hover:opacity-85 transition-opacity duration-300 border border-[var(--color-off-black)]"
            >
              Start a Conversation
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
