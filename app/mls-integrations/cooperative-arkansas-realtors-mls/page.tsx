import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cooperative Arkansas Realtors MLS | IDX Broker & iHomeFinder | DMR Media',
  description:
    'CARMLS with IDX Broker and iHomeFinder IDX coverage. Connect your site to live listings across Arkansas—Little Rock, Fayetteville, Fort Smith, and beyond.',
};

const IDX_VENDORS = ['IDX Broker', 'iHomeFinder'];
const STATES = ['AR'];

export default function CooperativeArkansasRealtorsMlsPage() {
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
            Cooperative Arkansas Realtors MLS
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-6 opacity-80">
            cooperative-arkansas-realtors-mls
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
              <a href="#resources" className="text-[var(--color-off-black)] hover:opacity-60 transition-opacity">
                Resources
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
                <dd>No</dd>
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

          <section id="overview">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Overview
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                Cooperative Arkansas Realtors MLS (CARMLS) is the largest MLS in Arkansas, serving over 6,000 members and 933 brokerages. CARMLS represents listings in every county in Arkansas and serves Arkansas REALTOR® client boards along with brokerages throughout Arkansas and surrounding contiguous states.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Coverage
                </h3>
                <div>
                  Arkansas and neighboring states. Cities include Little Rock, Fayetteville, Fort Smith, Rogers, Jonesboro, Conway, Hot Springs, North Little Rock, Memphis (TN), Monroe (LA), Texarkana (TX), Benton, Pine Bluff, Russellville, Paragould, and more.
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

          <section id="idx-integration">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              IDX Integration & Vendor Details
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                CARMLS integrates with IDX Broker and iHomeFinder to provide IDX (Internet Data Exchange) services. Both vendors connect directly to the MLS feed, allowing agents to display current listings on their websites with automatic updates.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Services for CARMLS
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
                  Agents must hold active MLS membership to use IDX coverage. Display rules and data refresh schedules are set by the MLS. Contact the MLS or your IDX vendor directly for the latest integration requirements.
                </div>
              </div>
              <div>
                <Link
                  href="/mls-integrations"
                  className="text-[var(--color-off-black)] underline hover:opacity-60 transition-opacity font-serif"
                >
                  Learn more about IDX services with iHomeFinder and IDX Broker here
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
                Membership in CARMLS is required for agents and brokers who wish to list or show properties in the coverage area. Access is typically obtained through a local Realtor® association or board.
              </div>
              <div>
                Per iHomeFinder, no fees are paid to the association for IDX. IDX Broker and iHomeFinder charge separate subscription fees for IDX integration; pricing varies by plan. Confirm current costs with your vendor before signing up.
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
                  Search & Data Features
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Photos, virtual tours, and property details</li>
                  <li>Map-based search and boundary filters</li>
                  <li>Open house and showing information</li>
                  <li>Distressed listing search</li>
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

          <section>
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Market Impact & Why It Matters
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                CARMLS supports real estate professionals across Arkansas and surrounding contiguous states. It centralizes listing data for the largest MLS in Arkansas, enabling efficient transactions and informed decisions.
              </div>
              <div>
                With over 6,000 members and 933 brokerages, CARMLS represents listings in every county in Arkansas. This breadth of data helps agents serve buyers and sellers with accurate, up-to-date market information across Little Rock, Fayetteville, Fort Smith, Rogers, Jonesboro, Conway, Hot Springs, and beyond.
              </div>
              <div>
                CARMLS focuses on Arkansas and neighboring states, offering deep local coverage for agents who specialize in this region.
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
                  Yes. iHomeFinder MLS coverage includes CARMLS. Agents can use iHomeFinder to display live listings on their websites via IDX integration.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does IDX Broker support CARMLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. IDX Broker provides IDX integration for CARMLS. Contact IDX Broker for coverage details and pricing.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do I get IDX integration for my website?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  You must be an active MLS member. Contact iHomeFinder or IDX Broker for IDX subscription options, or work with a web partner who can configure IDX integration for CARMLS on your behalf.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with IDX setup?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Our team can help you connect your site to CARMLS. Contact us for assistance with iHomeFinder or IDX Broker integration and IDX implementation.
                </dd>
              </div>
            </dl>
          </section>

          <section id="resources" className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Resources
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://carmls.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity underline underline-offset-2"
                >
                  CARMLS Website
                </a>
              </li>
              <li>
                <a
                  href="https://agentfire.com/mls-coverage/cooperative-arkansas-realtors-mls/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity underline underline-offset-2"
                >
                  AgentFire CARMLS Coverage
                </a>
              </li>
              <li>
                <a
                  href="https://www.ihomefinder.com/resources/idx-coverage/cooperative-arkansas-realtors-mls/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity underline underline-offset-2"
                >
                  iHomeFinder IDX Coverage
                </a>
              </li>
            </ul>
          </section>

          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect Your Site to CARMLS
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve the Arkansas market and want to display live listings on your website, iHomeFinder or IDX Broker IDX integration are proven solutions. Our team can help you set up MLS coverage for CARMLS and ensure your site complies with MLS display rules.
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
    </div>
  );
}
