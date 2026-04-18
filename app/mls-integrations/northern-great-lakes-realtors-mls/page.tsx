import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Northern Great Lakes Realtors MLS (NGLRMLS) | Michigan IDX | IDX Broker & iHomeFinder | DMR Media',
  description:
    'Northern Great Lakes REALTORS® MLS (NGLRMLS) IDX integration via IDX Broker and iHomeFinder. Traverse City, Lansing, Saginaw, Cadillac, and northern Michigan coverage. DMR Media helps agents publish compliant live search.',
  alternates: {
    canonical: 'https://www.dmrmedia.org/mls-integrations/northern-great-lakes-realtors-mls',
  },
};

const IDX_VENDORS = ['IDX Broker', 'iHomeFinder'];
const STATES = ['MI', 'WI'];

export default function NorthernGreatLakesRealtorsMlsPage() {
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
            Northern Great Lakes Realtors MLS
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-6 opacity-80">
            northern-great-lakes-realtors-mls
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
                <dd>
                  $100 set-up + $20/mo (via iHomeFinder); IDX Broker billed separately—confirm with vendors
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
                <dd>No (per iHomeFinder coverage details—confirm for your feed)</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Distressed Listing Search</dt>
                <dd>Yes</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3 sm:col-span-2">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Update Interval</dt>
                <dd>Approx. 2 hours (iHomeFinder)</dd>
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
                Northern Great Lakes REALTORS® MLS (NGLRMLS) is a Michigan-based Multiple Listing Service for real
                estate professionals across the northern Great Lakes region. As an association-owned MLS, it brings
                participating boards together so members share listings and market data while keeping a regional focus.
                Governance includes a Board of Representatives with voting members from participating associations,
                helping the MLS stay aligned with local member needs.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Member associations
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Central Michigan Association of REALTORS®</li>
                  <li>Northeastern Michigan Board of REALTORS®</li>
                  <li>Traverse Area Association of REALTORS®</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Coverage
                </h3>
                <div>
                  Northern Lower Michigan and nearby communities—including Traverse City, Mt. Pleasant, Kalkaska,
                  Cadillac, Bellaire, West Branch, Williamsburg, Suttons Bay, Manistee, Kewadin, Kingsley, Mancelona,
                  Hale, Lansing, Saginaw, Midland, Bay City, East Lansing, Mount Pleasant, Clio, Gaylord, Grand Ledge,
                  Greenville, Saint Johns, Cedar Springs, Dewitt, and Petoskey. Some vendor coverage pages also reference
                  Wisconsin; confirm whether your brokerage participates in NGLRMLS before selecting a feed.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Users
                </h3>
                <div>
                  Licensed agents and brokers who belong to participating REALTOR® associations. DMR Media integrates
                  with IDX Broker and iHomeFinder for IDX websites that stay within MLS display rules.
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
                NGLRMLS works with IDX Broker and iHomeFinder so members can display IDX listings on their own sites:
                search, maps, listing detail pages, and lead capture, with data refreshed on a vendor-defined schedule.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Broker & iHomeFinder services
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Live property search and results tailored to your market</li>
                  <li>Listing detail pages with photos and property facts</li>
                  <li>Map-based search and neighborhood browsing</li>
                  <li>Saved searches, alerts, and registration flows for leads</li>
                  <li>Mobile-responsive IDX experiences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Integration notes & restrictions
                </h3>
                <div>
                  IDX eligibility, paperwork, and on-site disclaimers are set by NGLRMLS and your IDX vendor. Display
                  rules and refresh cadence can change—contact the MLS or IDX Broker / iHomeFinder for the latest
                  requirements before you launch.
                </div>
              </div>
              <div>
                <a
                  href="https://www.ihomefinder.com/resources/idx-coverage/northern-great-lakes-realtors-mls/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-off-black)] underline hover:opacity-60 transition-opacity font-serif"
                >
                  iHomeFinder NGLRMLS coverage
                </a>
                {' · '}
                <a
                  href="https://agentfire.com/mls-coverage/northern-great-lakes-realtors-mls/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-off-black)] underline hover:opacity-60 transition-opacity font-serif"
                >
                  AgentFire NGLRMLS coverage
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
                Active membership in a participating association is the starting point for MLS access. Your broker and
                local board can confirm whether NGLRMLS is the correct feed for the markets you serve.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX fees
                </h3>
                <div>
                  iHomeFinder publishes a $100 set-up fee and approximately $20 per month for this MLS coverage. IDX
                  Broker pricing is plan-based and separate from iHomeFinder—confirm current totals with each vendor
                  before you sign.
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
                  MLS & regional strengths
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Regional MLS combining multiple boards under one data umbrella</li>
                  <li>Listing and market data suited to resort, waterfront, and small-metro communities</li>
                  <li>Large listing photos and open-house fields where supported by the feed</li>
                  <li>Distressed-property search where provided by the vendor feed</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX tools & benefits
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Lead capture tied to search and listing views</li>
                  <li>CRM-friendly registration and follow-up workflows (vendor-dependent)</li>
                  <li>Embeddable search widgets and branded listing experiences</li>
                  <li>Automatic updates roughly every two hours (iHomeFinder—confirm for IDX Broker)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Market Impact */}
          <section>
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Market impact & why it matters
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                Buyers and sellers around Traverse City, the Lake Michigan shoreline, and central-to-northern Michigan
                communities expect fast, accurate online search. IDX that reflects NGLRMLS inventory helps you compete
                with national portals while keeping traffic and leads on your own brand.
              </div>
              <div>
                If you market recreation, second homes, or year-round neighborhoods in this corridor, a compliant IDX
                implementation with IDX Broker or iHomeFinder makes your expertise visible the moment someone starts
                their home search.
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
                  What is Northern Great Lakes Realtors MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  NGLRMLS is an association-owned Multiple Listing Service serving participating REALTOR® associations
                  in northern Michigan, with IDX coverage documented by vendors such as iHomeFinder and AgentFire.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Do IDX Broker and iHomeFinder support NGLRMLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. DMR Media partners with IDX Broker and iHomeFinder for NGLRMLS IDX—search, maps, listing pages, and
                  lead capture—so your site can stay current without manual listing entry.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Which cities and towns are included?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Vendor documentation highlights Traverse City, Mt. Pleasant, Cadillac, Lansing, Saginaw, Bay City,
                  Midland, Petoskey, Gaylord, and many surrounding townships. Always verify the exact feed boundaries with
                  your IDX provider.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Are sold listings available in IDX?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  iHomeFinder&apos;s published coverage for this MLS lists sold listings as not included. Policies can
                  change—confirm sold-data availability with your vendor and the MLS before you promise sold search on
                  your site.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do I get IDX integration for my website?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Start with active membership in a participating association, then apply through IDX Broker or
                  iHomeFinder (or engage DMR Media to manage setup, design, and compliance alongside your chosen vendor).
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with IDX setup for NGLRMLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. We build and tune sites that use IDX Broker and iHomeFinder, including NGLRMLS markets, so your IDX
                  experience matches the rest of your brand and lead strategy.
                </dd>
              </div>
            </dl>
          </section>

          {/* Conclusion / CTA */}
          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect your site to NGLRMLS
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve northern Michigan—or adjacent markets your board confirms—and want live MLS search on your
              site, IDX Broker or iHomeFinder with NGLRMLS is a practical path. We can help you choose a vendor flow,
              implement the widgets, and keep disclaimers aligned with MLS rules.
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
            Great Lakes real estate growth stories
          </h2>
          <p className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8 max-w-2xl">
            Case studies featuring northern Michigan and Wisconsin markets are coming soon. Browse the full library for
            related luxury and regional work.
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
