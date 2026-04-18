import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'WRIST MLS | Western Ohio IDX | Western Regional Information Systems and Technology | IDX Broker & iHomeFinder | DMR Media',
  description:
    'Western Regional Information Systems and Technology, Inc. (WRIST) IDX via IDX Broker and iHomeFinder. West Ohio markets including Columbus, Dayton, Springfield, and Cincinnati corridor. DMR Media implements compliant IDX.',
  alternates: {
    canonical:
      'https://www.dmrmedia.org/mls-integrations/western-regional-information-systems-and-technology-inc',
  },
};

const IDX_VENDORS = ['IDX Broker', 'iHomeFinder'];
const STATES = ['OH'];

export default function WristMlsPage() {
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
            Western Regional Information Systems and Technology, Inc.
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-6 opacity-80">
            western-regional-information-systems-and-technology-inc
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
                <dd>
                  $150/year per client for RETS (iHomeFinder); WRIST membership fees separate—see Membership & Fees
                </dd>
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
                <dd>No (per iHomeFinder—confirm for your feed)</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Distressed Listing Search</dt>
                <dd>No (per iHomeFinder—confirm for your feed)</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3 sm:col-span-2">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Update Interval</dt>
                <dd>Approx. 12 hours (iHomeFinder)</dd>
              </div>
            </dl>
          </section>

          <section id="overview">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Overview
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                Western Regional Information Systems and Technology, Inc. (WRIST) is a regional Multiple Listing
                Service serving west Ohio. WRIST connects thousands of REALTOR® members with listing inventory spanning
                single-family homes through commercial properties, and supports members with MLS technology for
                day-to-day client work.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Member associations (iHomeFinder)
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Midwestern Ohio Association of REALTORS®</li>
                  <li>Springfield Board of REALTORS®</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Coverage
                </h3>
                <div>
                  Vendor materials describe west Ohio broadly—including markets such as Columbus, Cincinnati, Dayton,
                  Springfield, Westerville, Dublin, Middletown, Lima, Grove City, Hilliard, Delaware, Reynoldsburg,
                  Loveland, Mason, West Chester, and Marion. iHomeFinder specifically highlights the Midwestern Ohio
                  region (for example Springfield, Sidney, Troy, Urbana, and Piqua). Your IDX footprint depends on
                  association membership and feed approval—confirm with WRIST or your vendor.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Users
                </h3>
                <div>
                  Licensed agents and brokers participating in WRIST, plus optional unlicensed staff access where the
                  MLS allows. DMR Media integrates with IDX Broker and iHomeFinder for compliant IDX on your site.
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
                WRIST works with IDX Broker and iHomeFinder so members can publish IDX search, maps, and listing
                detail pages on their own websites, with updates on each vendor&apos;s schedule.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Broker & iHomeFinder services
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Live property search and branded results pages</li>
                  <li>Listing detail pages with photos and fields supported by the feed</li>
                  <li>Map-based search and area exploration</li>
                  <li>Saved searches, alerts, and lead registration</li>
                  <li>Mobile-responsive IDX experiences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Integration notes & restrictions
                </h3>
                <div>
                  IDX rules, disclaimers, and eligibility are set by WRIST and your IDX vendor. RETS and display
                  policies can change—contact WRIST, IDX Broker, or iHomeFinder before launch for the latest paperwork
                  and compliance checklist.
                </div>
              </div>
              <div>
                <a
                  href="https://www.ihomefinder.com/resources/idx-coverage/western-ohio-regional-mls-wrist/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-off-black)] underline hover:opacity-60 transition-opacity font-serif"
                >
                  iHomeFinder WRIST coverage
                </a>
                {' · '}
                <a
                  href="https://agentfire.com/mls-coverage/western-regional-information-systems-and-technology-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-off-black)] underline hover:opacity-60 transition-opacity font-serif"
                >
                  AgentFire WRIST coverage
                </a>
              </div>
            </div>
          </section>

          <section id="fees">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Membership & Fees
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  WRIST MLS membership (summary)
                </h3>
                <div className="space-y-4">
                  <p>
                    <strong className="font-normal">Primary membership:</strong> For professionals whose primary MLS is
                    WRIST—office application, per-licensee applications, and principal broker participation. Published
                    figures include about $25 per member per month plus a one-time office application fee on the order
                    of $200 (confirm current amounts with WRIST).
                  </p>
                  <p>
                    <strong className="font-normal">Secondary membership:</strong> For those whose primary MLS is
                    elsewhere but who need WRIST access—similar office and broker requirements with secondary pricing
                    in the same general range per published summaries.
                  </p>
                  <p>
                    <strong className="font-normal">Unlicensed staff:</strong> Separate administrative MLS access with a
                    lower monthly per-staff fee where offered.
                  </p>
                  <p>
                    New licensed members typically complete a two-hour orientation within 60 days of acceptance. WRIST
                    sends login details and orientation scheduling after approval.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX & RETS fees
                </h3>
                <div>
                  iHomeFinder lists a $150 per year per client RETS fee paid to the association for this feed. IDX Broker
                  subscription pricing is separate from MLS dues and from iHomeFinder—confirm your all-in cost with each
                  vendor.
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
                  MLS & market context
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Regional inventory across west Ohio communities—from growing suburbs to established small cities</li>
                  <li>Residential and commercial listing types where the feed supports them</li>
                  <li>Large photos and open-house fields per vendor coverage details</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX tools & benefits
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Lead capture from search and listing engagement</li>
                  <li>CRM-friendly workflows depending on vendor tier</li>
                  <li>Embeddable search and map experiences aligned with your brand</li>
                  <li>Data refresh approximately every 12 hours on iHomeFinder—confirm cadence for IDX Broker</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Market impact & why it matters
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                West Ohio includes major employment centers and commuter corridors. Buyers expect the same instant search
                experience they get from national portals; WRIST-backed IDX keeps that experience on your domain so you
                earn the registration and the conversation.
              </div>
              <div>
                Whether you focus on Dayton, the I-71 corridor toward Columbus or Cincinnati, or smaller Midwestern
                Ohio towns, IDX Broker or iHomeFinder with WRIST helps you demonstrate local inventory without manual
                listing maintenance.
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
                  What is WRIST?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Western Regional Information Systems and Technology, Inc. (WRIST) is a regional MLS serving real estate
                  professionals in west Ohio, commonly referenced as WRIST MLS in vendor documentation.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Do IDX Broker and iHomeFinder support WRIST?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. DMR Media implements IDX with IDX Broker and iHomeFinder for WRIST markets—search, detail pages,
                  maps, and lead capture subject to MLS rules.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Which cities are in WRIST coverage?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Published vendor lists include Columbus, Cincinnati, Dayton, Springfield, and many surrounding
                  communities, plus a Midwestern Ohio cluster centered on Springfield, Sidney, Troy, Urbana, and Piqua.
                  Your exact IDX coverage follows your board and feed approval.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Are sold listings available in IDX?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  iHomeFinder&apos;s published WRIST profile lists sold listings as not included. Confirm with your vendor
                  if that changes before advertising sold search on your site.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do I get IDX integration for my website?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Hold appropriate WRIST membership (primary or secondary as applicable), complete orientation if
                  required, then subscribe through IDX Broker or iHomeFinder—or engage DMR Media to coordinate design,
                  implementation, and compliance.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with IDX setup for WRIST?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. We configure IDX Broker and iHomeFinder experiences for WRIST agents and teams so your site stays
                  on-brand and aligned with MLS display requirements.
                </dd>
              </div>
            </dl>
          </section>

          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect your site to WRIST
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve west Ohio and want live MLS search on your website, IDX Broker or iHomeFinder with WRIST is
              a solid path. We can help you pick a vendor workflow, implement search and detail pages, and keep
              disclaimers current.
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
            Ohio real estate growth stories
          </h2>
          <p className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8 max-w-2xl">
            Browse the case study library for related work; Ohio-specific case studies can be highlighted as they
            publish.
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
