import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beaches MLS (BeachesMLS) | iHomeFinder & Showcase IDX | South Florida | DMR Media',
  description:
    'Beaches MLS IDX integration via iHomeFinder and Showcase IDX. Covers Broward, Palm Beach, and St. Lucie counties — Fort Lauderdale, West Palm Beach, Boca Raton, and the Treasure Coast.',
};

const IDX_VENDORS = ['iHomeFinder', 'Showcase IDX'];
const STATES = ['FL'];

export default function BeachesMlsPage() {
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
            Beaches MLS
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-2 opacity-60">
            BeachesMLS · MATRIX MLS · Formerly Florida Regional MLS
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
                <dd>Contact Association</dd>
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
                Beaches MLS (BeachesMLS) is the go-to multiple listing service for South Florida and the Treasure Coast, covering Broward, Palm Beach, and St. Lucie counties. Operated by Broward, Palm Beaches &amp; St. Lucie Realtors®, it provides subscribers with access to comprehensive MLS data across one of the most active luxury real estate markets in the United States.
              </div>
              <div>
                BeachesMLS gives members a choice between two MLS platforms — Matrix and Flex — so agents can work with the system that best fits their workflow. The MLS also offers a free IDX feed as part of its membership benefits.
              </div>
              <div>
                iHomeFinder and Showcase IDX are licensed IDX vendors for Beaches MLS, allowing agents and brokers to display live listings directly on their websites.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Primary Coverage Area
                </h3>
                <div>
                  Palm Beach County, Broward County, and St. Lucie County — including West Palm Beach, Fort Lauderdale, Hollywood, Boca Raton, Pompano Beach, Hialeah, Lake Worth, Port Saint Lucie, and surrounding communities.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Member Associations
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>REALTORS® Association of the Palm Beaches (RAPB)</li>
                  <li>Greater Fort Lauderdale REALTORS® (GFLR)</li>
                  <li>REALTORS® of St. Lucie County (RSLC)</li>
                  <li>Broward, Palm Beaches &amp; St. Lucie Realtors®</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Users
                </h3>
                <div>
                  Licensed agents, brokers, home buyers, and sellers operating in South Florida and the Treasure Coast.
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
                Beaches MLS integrates with iHomeFinder and Showcase IDX to provide IDX (Internet Data Exchange) services. Both vendors connect directly to the MLS feed, allowing agents to display current listings on their websites with automatic updates approximately every hour.
              </div>
              <div>
                Members of both BeachesMLS/RAPB and Greater Fort Lauderdale REALTORS® (GFLR) can receive listings from both data feeds (Flexmls and Matrix) by submitting iHomeFinder IDX paperwork to both boards. Additional MLS fees and pass-through fees may apply.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder IDX Services for Beaches MLS
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
                  Showcase IDX Services for Beaches MLS
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
                  Agents must hold active BeachesMLS membership to use IDX coverage. Display rules and data refresh schedules are governed by the MLS. Jupiter Tequesta Hobe Sound (JTHS) service is provided through the MIAMI IDX feed, not this data feed — confirm your coverage area with iHomeFinder before signing up.
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
                Membership in Beaches MLS is managed through Broward, Palm Beaches &amp; St. Lucie Realtors®. BeachesMLS offers a free IDX data feed as part of its member benefits — a significant advantage over many other MLS systems. Contact the association directly at 561-585-4544 or via{' '}
                <a
                  href="https://rworld.com/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="underline hover:opacity-60 transition-opacity"
                >
                  rworld.com
                </a>{' '}
                to confirm current fee structures and membership requirements.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Association Fees (via iHomeFinder)
                </h3>
                <div>
                  Pass-through fees may apply. iHomeFinder recommends contacting the association directly for the most current fee information. iHomeFinder subscription fees for IDX integration apply separately; pricing varies by plan.
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Showcase IDX Fees
                </h3>
                <div>
                  Showcase IDX charges a separate subscription fee for IDX integration. Pricing varies by plan. Confirm current costs with Showcase IDX directly.
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
                  <li>Digital market reports for Broward, Palm Beach, Martin, St. Lucie &amp; Miami-Dade counties</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Tools & Benefits
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Free IDX feed included with BeachesMLS membership</li>
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
                South Florida is one of the highest-demand luxury real estate markets in the world. Palm Beach County and Broward County consistently rank among the top US markets for median home price, international buyer activity, and waterfront property sales. For agents in this market, a high-performance website with live IDX integration is not optional — it&apos;s a competitive requirement.
              </div>
              <div>
                BeachesMLS covers over 1,300 annual classes and education offerings through Broward, Palm Beaches &amp; St. Lucie Realtors®, making it one of the most member-supportive MLS organizations in Florida. The combination of free IDX feed, two platform choices (Matrix and Flex), and comprehensive county-level market data makes BeachesMLS a powerful foundation for any South Florida digital marketing strategy.
              </div>
              <div>
                DMR Media builds IDX-connected real estate websites for agents and teams serving South Florida, integrating iHomeFinder and Showcase IDX to generate qualified buyer and seller leads from search traffic.
              </div>
            </div>
          </section>

          {/* Florida MLS Comparison */}
          <section className="border-t border-[var(--color-ink-200)] pt-12">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Other Florida MLS Integrations
            </h2>
            <div className="space-y-4 text-[var(--color-off-black)] font-serif leading-relaxed">
              <p>
                Beaches MLS covers South Florida and the Treasure Coast. If you serve other Florida markets, DMR Media also supports:
              </p>
              <ul className="space-y-4 mt-4">
                <li className="border-b border-[var(--color-ink-200)] pb-4">
                  <Link
                    href="/mls-integrations/stellar-mls"
                    className="text-[var(--color-off-black)] underline hover:opacity-60 transition-opacity font-serif font-light text-lg"
                  >
                    Stellar MLS
                  </Link>
                  <p className="text-sm mt-1 opacity-80">
                    Central and North Florida — Orlando, Tampa, St. Petersburg, Sarasota, and Puerto Rico. Over 70,000 members statewide.
                  </p>
                </li>
                <li className="pb-4">
                  <Link
                    href="/mls-integrations/southwest-florida-mls"
                    className="text-[var(--color-off-black)] underline hover:opacity-60 transition-opacity font-serif font-light text-lg"
                  >
                    Southwest Florida MLS (SWFLMLS)
                  </Link>
                  <p className="text-sm mt-1 opacity-80">
                    Naples, Fort Myers, Cape Coral, Bonita Springs, and Collier County. Six member associations across the Gulf Coast.
                  </p>
                </li>
              </ul>
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
                  What is Beaches MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Beaches MLS (BeachesMLS) is the multiple listing service serving South Florida and the Treasure Coast — covering Broward, Palm Beach, and St. Lucie counties. It is operated by Broward, Palm Beaches &amp; St. Lucie Realtors® and was formerly known as Florida Regional MLS.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does iHomeFinder support Beaches MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. iHomeFinder is a licensed IDX vendor for Beaches MLS (RAPB/GFLR). Members of both BeachesMLS/RAPB and Greater Fort Lauderdale can receive listings from both the Flexmls and Matrix data feeds by submitting IDX paperwork to both boards. Pass-through fees and additional MLS fees may apply.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does Showcase IDX support Beaches MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Showcase IDX supports Beaches MLS with high-performance search, polygon-based filtering, advanced lead capture, and CRM integrations. Contact Showcase IDX for current pricing and setup details.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What counties does Beaches MLS cover?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Broward, Palm Beach, and St. Lucie counties — including Fort Lauderdale, West Palm Beach, Boca Raton, Hollywood, Pompano Beach, Lake Worth, and Port Saint Lucie. Note that Jupiter Tequesta Hobe Sound (JTHS) is served through the MIAMI IDX feed, not this data feed.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Is there a free IDX feed with BeachesMLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. BeachesMLS offers a free IDX data feed as part of membership benefits through Broward, Palm Beaches &amp; St. Lucie Realtors®. Third-party IDX vendors like iHomeFinder and Showcase IDX charge their own subscription fees on top of this.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How does Beaches MLS compare to Stellar MLS and Southwest Florida MLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Beaches MLS covers Southeast Florida (Broward, Palm Beach, St. Lucie).{' '}
                  <Link href="/mls-integrations/stellar-mls" className="underline hover:opacity-60 transition-opacity">
                    Stellar MLS
                  </Link>{' '}
                  covers Central and North Florida (Orlando, Tampa, Puerto Rico).{' '}
                  <Link href="/mls-integrations/southwest-florida-mls" className="underline hover:opacity-60 transition-opacity">
                    Southwest Florida MLS
                  </Link>{' '}
                  covers the Gulf Coast (Naples, Fort Myers, Cape Coral). Agents serving multiple regions may need membership in more than one.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with Beaches MLS IDX setup?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Our team can help you connect your site to Beaches MLS via iHomeFinder or Showcase IDX. We handle integration, widget placement, and ensure your site complies with MLS display rules. Contact us to get started.
                </dd>
              </div>
            </dl>
          </section>

          {/* CTA */}
          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect Your Site to Beaches MLS
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve the South Florida or Treasure Coast market and want to display live listings on your website, iHomeFinder or Showcase IDX integration for Beaches MLS is a proven solution. Our team can help you set up IDX coverage and ensure your site complies with MLS display rules.
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
            South Florida real estate growth stories
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
                Consolidated multiple fragmented websites into a single, powerful brand presence — launched December 17th with 0 measurable ranking loss and 10% keyword increase. Currently redirecting legacy sites and running retargeting campaigns.
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
