import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RMLS-MN / NorthstarMLS | iHomeFinder & IDX Broker | Minnesota | DMR Media',
  description:
    'RMLS-MN (now NorthstarMLS) IDX integration via iHomeFinder and IDX Broker. Covers Minnesota and the Upper Midwest — 22,000+ real estate professionals. Agents approved with broker signoff in approx. 5 business days.',
};

const IDX_VENDORS = ['iHomeFinder', 'IDX Broker'];
const STATES = ['MN'];

export default function RmlsMnPage() {
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
            RMLS-MN / NorthstarMLS
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-2 opacity-60">
            Regional Multiple Listing Service of Minnesota · Now operating as NorthstarMLS
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
                <dd>Agents with broker signoff</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Feed Approval Time</dt>
                <dd>Approx. 5 business days</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Large Photos</dt>
                <dd>Yes</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Mapping Available</dt>
                <dd>Yes</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Geo-codes Provided</dt>
                <dd>Yes</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Multiple Photos</dt>
                <dd>Yes</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3 sm:col-span-2">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Official Website</dt>
                <dd>
                  <a
                    href="https://northstarmls.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="underline hover:opacity-60 transition-opacity"
                  >
                    northstarmls.com
                  </a>
                  {' '}&mdash; formerly{' '}
                  <a
                    href="http://www.rmls-mn.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="underline hover:opacity-60 transition-opacity"
                  >
                    rmls-mn.com
                  </a>
                </dd>
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
                RMLS-MN (Regional Multiple Listing Service of Minnesota) is now officially known as NorthstarMLS — the premier Multiple Listing Service in the Upper Midwest. With 22,000+ real estate professionals and access to both Flexmls and Matrix platforms, NorthstarMLS is one of the most comprehensive MLS systems in the region, offering agents the tools to manage listings, access market data, and connect with buyers and sellers across Minnesota.
              </div>
              <div>
                Both iHomeFinder and IDX Broker provide IDX integration for NorthstarMLS/RMLS-MN, allowing agents and teams to display live listings directly on their websites with full search, mapping, and lead capture functionality.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Primary Coverage Area
                </h3>
                <div>
                  Minnesota and the broader Upper Midwest. Key markets include Minneapolis, St. Paul, Rochester, Duluth, Bloomington, Plymouth, Edina, Minnetonka, Eden Prairie, Lakeville, Burnsville, Apple Valley, and hundreds of surrounding communities throughout the Twin Cities metro and greater Minnesota.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  MLS Platform Options
                </h3>
                <div>
                  NorthstarMLS offers subscribers the choice between two MLS systems — Flexmls and Matrix — both powered by the same NorthstarMLS listing database. Agents can use one or both systems depending on their workflow preferences.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Members
                </h3>
                <div>
                  22,000+ real estate professionals across Minnesota and the Upper Midwest, including brokers, agents, and appraisers. The MLS provides the technologies to manage listings, run competitive market analyses, and access tax data and market statistics.
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
                NorthstarMLS/RMLS-MN integrates with both iHomeFinder and IDX Broker for IDX (Internet Data Exchange) services. Both vendors connect to the NorthstarMLS data feed, enabling live listing search, map-based browsing, and lead capture directly on your website. IDX access is available to agents with broker signoff — agents without broker status can still access IDX through their managing broker.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder IDX Services for NorthstarMLS / RMLS-MN
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Live property search integrated into any website</li>
                  <li>Listing detail pages with full photo galleries</li>
                  <li>Map-based search and neighborhood browsing</li>
                  <li>Saved searches and automated property alert emails</li>
                  <li>Lead capture forms tied to MLS search activity</li>
                  <li>Mobile-responsive listing displays</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Broker Services for NorthstarMLS / RMLS-MN
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Full NorthstarMLS search integration with customizable widgets</li>
                  <li>Geo-code and Google Maps support for all listings</li>
                  <li>Advanced field customization matched to NorthstarMLS data</li>
                  <li>Featured listing pages updated automatically</li>
                  <li>CRM integration and automated lead follow-up</li>
                  <li>Compatible with WordPress and custom website builds</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Access Rules & Display Requirements
                </h3>
                <div>
                  NorthstarMLS IDX feeds are available to agents with broker signoff. All IDX displays must comply with NorthstarMLS display rules, including required disclaimers, copyright notices, listing office display, and required update schedules. Contact iHomeFinder or IDX Broker for a complete list of display rules specific to NorthstarMLS.
                </div>
              </div>
            </div>
          </section>

          {/* Fees */}
          <section id="fees">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Membership & Fees
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                NorthstarMLS membership is obtained through a participating REALTOR® association. Active MLS membership is required for IDX feed access. Visit{' '}
                <a
                  href="https://northstarmls.com/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="underline hover:opacity-60 transition-opacity"
                >
                  northstarmls.com
                </a>{' '}
                for current subscription options and broker hub resources.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder Fees
                </h3>
                <div>
                  iHomeFinder charges a separate monthly subscription fee for NorthstarMLS/RMLS-MN IDX integration. Association fees may also apply — confirm with iHomeFinder and your local board before signing up.
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Broker Fees
                </h3>
                <div>
                  IDX Broker charges a separate subscription fee for NorthstarMLS integration. IDX Broker has an established relationship with NorthstarMLS/RMLS-MN to streamline the feed application process. Confirm current pricing directly with IDX Broker.
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
                  <li>Lakefront and waterfront properties</li>
                  <li>Luxury and high-value listings</li>
                  <li>Commercial properties</li>
                  <li>Land and lots</li>
                  <li>Multi-family and investment properties</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Data & Search Features
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Large photo galleries and full listing detail pages</li>
                  <li>Geo-code support for precise map-based searches</li>
                  <li>My Commute Time / Drive Time search feature (Matrix)</li>
                  <li>CubiCasa 2D floor plan integration</li>
                  <li>Competitive Market Analysis (CMA) tools</li>
                  <li>Tax data and market statistics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Tools & Benefits
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Lead capture from all property views and search activity</li>
                  <li>CRM integration for automated follow-up</li>
                  <li>Customizable search widgets for any website platform</li>
                  <li>Mobile-responsive listing displays</li>
                  <li>Featured listing pages updated automatically</li>
                  <li>Market reports and neighborhood data</li>
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
                NorthstarMLS is the premier MLS in the Upper Midwest, serving 22,000+ professionals with access to Flexmls and Matrix — two of the most widely used MLS platforms in the industry. With coverage spanning the entire Twin Cities metro and greater Minnesota, it represents one of the most active residential real estate markets in the country.
              </div>
              <div>
                For agents operating in the Minneapolis–St. Paul metro or anywhere across Minnesota, an IDX-connected website is essential for capturing organic search traffic from buyers actively searching for properties. The NorthstarMLS coverage area includes everything from first-time buyer markets in the suburbs to luxury lakefront properties across the state&apos;s 10,000+ lakes.
              </div>
              <div>
                DMR Media currently serves a client operating within the NorthstarMLS/RMLS-MN coverage area. We have hands-on experience building and optimizing IDX-connected sites in this market alongside the SEO infrastructure to make listings visible at scale.
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
                  What is RMLS-MN / NorthstarMLS?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  RMLS-MN (Regional Multiple Listing Service of Minnesota) is now officially branded as NorthstarMLS — the premier MLS in the Upper Midwest. It serves 22,000+ real estate professionals across Minnesota, offering both Flexmls and Matrix platforms powered by the same listing database.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does iHomeFinder support NorthstarMLS / RMLS-MN?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. iHomeFinder provides IDX integration for NorthstarMLS/RMLS-MN, allowing agents to display live Minnesota listings on their websites. Active MLS membership is required. Contact iHomeFinder for current pricing and setup details.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does IDX Broker support NorthstarMLS / RMLS-MN?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. IDX Broker has an established relationship with NorthstarMLS/RMLS-MN and supports full MLS search integration with geo-codes, Google Maps, and customizable listing widgets. IDX access is available to agents with broker signoff. Feed approval takes approximately 5 business days.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What areas does NorthstarMLS cover?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  NorthstarMLS covers Minnesota and the broader Upper Midwest. Key markets include Minneapolis, St. Paul, Rochester, Duluth, Bloomington, Edina, Plymouth, Minnetonka, Eden Prairie, Lakeville, and hundreds of surrounding communities throughout the Twin Cities metro and greater Minnesota.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Can agents without broker status get IDX access?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes — NorthstarMLS/RMLS-MN provides IDX access to all agents with broker signoff. Agents must obtain broker authorization to access the IDX feed. Contact DMR Media if you need help navigating the process.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with NorthstarMLS / RMLS-MN IDX setup?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. We currently serve a client in the NorthstarMLS/RMLS-MN coverage area and have direct experience integrating both iHomeFinder and IDX Broker for the Minnesota market. Reach out and we&apos;ll walk you through the setup process.
                </dd>
              </div>
            </dl>
          </section>

          {/* CTA */}
          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect Your Minnesota Site to NorthstarMLS / RMLS-MN
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve the Twin Cities metro, greater Minnesota, or anywhere in the Upper Midwest and want live listings on your website, iHomeFinder or IDX Broker integration for NorthstarMLS is the right move. Our team can manage the setup process and build an IDX-connected site built to rank.
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
