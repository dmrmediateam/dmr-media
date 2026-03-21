import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metro MLS | iHomeFinder IDX Coverage | DMR Media',
  description:
    'Metro MLS (Milwaukee Area) with iHomeFinder IDX coverage. Connect your site to live listings across greater Milwaukee and southeastern Wisconsin.',
};

const IDX_VENDORS = ['iHomeFinder'];
const STATES = ['WI'];

export default function MetroMlsPage() {
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
            Metro MLS
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-6 opacity-80">
            metro-mls
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
                <dd>$99 to $299 set-up fee and $9.95 monthly fee</dd>
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
                <dd>Yes (one-time $99 set-up payable to MLS)</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Distressed Listing Search</dt>
                <dd>No</dd>
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
                Metro MLS serves greater Milwaukee and southeastern Wisconsin, with over 9,000 professionals across 10 REALTOR® associations. iHomeFinder provides IDX integration so agents and brokers can display live listings on their websites.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Coverage
                </h3>
                <div>
                  Milwaukee, Kenosha, Racine, Waukesha, Manitowoc, West Allis, Sheboygan, Mount Pleasant, West Bend, La Crosse, Greenfield, Watertown, Oconomowoc, Menomonee Falls, Madison, Green Bay, Appleton, and surrounding areas.
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
                Metro MLS integrates with iHomeFinder to provide IDX (Internet Data Exchange) services. iHomeFinder connects directly to the MLS feed, allowing agents to display current listings on their websites with automatic updates.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Integration Requirements (Office-Only MLS)
                </h3>
                <div className="mb-4">
                  Metro MLS is primarily an office-only MLS. iHomeFinder can only offer Metro MLS IDX to agents if:
                </div>
                <ul className="list-disc list-inside space-y-2">
                  <li>The brokerage has an active, approved iHomeFinder account currently paying IDX fees to Metro MLS</li>
                  <li>The brokerage has a publicly accessible iHomeFinder IDX website</li>
                  <li>The agent or broker&apos;s IDX display closely resembles that of the brokerage</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder IDX Services for Metro MLS
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
                  Agents must hold active MLS membership and meet the office-only requirements above. Display rules and data refresh schedules are set by the MLS. Contact the MLS or iHomeFinder directly for the latest integration requirements.
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

          <section id="fees">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Membership & Fees
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                Membership in Metro MLS is required for agents and brokers who wish to list or show properties in the coverage area. Access is typically obtained through a local Realtor® association or board.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Association Fees (via iHomeFinder)
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>$99 to $299 set-up fee</li>
                  <li>$9.95 monthly fee</li>
                  <li>Sold listings: one-time $99 set-up fee payable to the MLS</li>
                </ul>
              </div>
              <div>
                iHomeFinder charges separate subscription fees for IDX integration; pricing varies by plan. Confirm current costs with iHomeFinder before signing up.
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
                  <li>Market statistics and sold data</li>
                  <li>Open house and showing information</li>
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

          <section>
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Market Impact & Why It Matters
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                Metro MLS supports real estate professionals across greater Milwaukee and southeastern Wisconsin. It centralizes listing data for one of Wisconsin&apos;s largest markets, enabling efficient transactions and informed decisions.
              </div>
              <div>
                The Metro MLS area typically includes thousands of active listings across residential, commercial, and land segments. This breadth of data helps agents serve buyers and sellers with accurate, up-to-date market information.
              </div>
              <div>
                Metro MLS focuses on the Milwaukee metro and southeastern Wisconsin, offering deep local coverage for agents who specialize in this region. DMR client Legendary Real Estate Services (Lake Geneva, WI) is a member of this MLS.
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
                  What is Metro MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Metro MLS is a multiple listing service that aggregates property listings for greater Milwaukee and southeastern Wisconsin. It serves over 9,000 professionals across 10 REALTOR® associations with centralized listing data.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does iHomeFinder support Metro MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. iHomeFinder MLS coverage includes Metro MLS (Milwaukee Area). Agents can use iHomeFinder to display live listings on their websites via IDX integration, subject to the office-only requirements.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What is the office-only requirement?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Metro MLS is primarily an office-only MLS. Your brokerage must first have an active iHomeFinder account paying IDX fees to Metro MLS, and your brokerage must have a publicly accessible iHomeFinder IDX website. Your agent site&apos;s IDX display must closely resemble the brokerage&apos;s.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do I get IDX integration for my website?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  You must be an active MLS member. Contact iHomeFinder for IDX subscription options, or work with a web partner who can configure iHomeFinder IDX integration for Metro MLS on your behalf.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with iHomeFinder IDX setup?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Our team can help you connect your site to Metro MLS. Contact us for assistance with iHomeFinder integration and IDX implementation.
                </dd>
              </div>
            </dl>
          </section>

          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect Your Site to Metro MLS
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve the Milwaukee and southeastern Wisconsin market and want to display live listings on your website, iHomeFinder IDX integration is a proven solution. Our team can help you set up iHomeFinder MLS coverage for Metro MLS and ensure your site complies with MLS display rules.
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
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-12 tracking-tight">
            Wisconsin real estate growth stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl">
            <Link
              href="/case-study/jade-legendary-real-estate"
              className="group border-b border-[var(--color-ink-200)] pb-12 hover:opacity-60 transition-opacity duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between gap-6 mb-6">
                <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-off-black)] font-serif">
                  Lead Engine Rebuild
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif">
                  3x Leads in 90 Days
                </span>
              </div>
              <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-6">
                Jade · Legendary Real Estate
              </h3>
              <div className="text-sm text-[var(--color-off-black)] leading-relaxed font-serif mb-6">
                Tripled inbound pipeline for a boutique broker by rebuilding her
                search footprint and automations around the way luxury buyers
                actually shop.
              </div>
              <div className="relative aspect-[16/9] overflow-hidden mb-6">
                <Image
                  src="/images/JadeCRM.png"
                  alt="Jade CRM dashboard showing lead growth"
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
