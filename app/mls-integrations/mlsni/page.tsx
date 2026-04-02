import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MLSNI / MRED | iHomeFinder & IDX Broker | Chicago & Northern Illinois | DMR Media',
  description:
    'MLSNI (now MRED — Midwest Real Estate Data) IDX integration via iHomeFinder and IDX Broker. Covers Chicago, Northern Illinois, Southern Wisconsin, and Northwest Indiana. 40,000+ members across 13 associations.',
};

const IDX_VENDORS = ['iHomeFinder', 'IDX Broker'];
const STATES = ['IL', 'WI', 'IN'];

export default function MlsniPage() {
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
            MLSNI / Midwest Real Estate Data
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-2 opacity-60">
            MLSNI · MRED · MAPMLS · Formerly Multiple Listing Service of Northern Illinois
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
                <dd>Brokers of Record (agents via broker)</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Fees Paid to Association</dt>
                <dd>Varies (confirm with MLS)</dd>
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
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Multiple Photos</dt>
                <dd>Yes</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">Feed Approval Time</dt>
                <dd>Approx. 5 business days</dd>
              </div>
              <div className="border-b border-[var(--color-ink-200)] pb-3 sm:col-span-2">
                <dt className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">IDX Access</dt>
                <dd>Broker of record — agents must go through their broker</dd>
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
                MLSNI (Multiple Listing Service of Northern Illinois) was originally incorporated in the late 1980s as a clearinghouse for realtors across the Chicago metropolitan area. In the mid-2000s it rebranded as MRED — Midwest Real Estate Data — and today serves as one of the largest MLSs in the country, with over 40,000 real estate professionals combining to form one of the most powerful groups of brokers, agents, and appraisers in the Midwest.
              </div>
              <div>
                Both iHomeFinder and IDX Broker provide IDX integration for MRED/MLSNI, allowing agents and brokers to display live listings directly on their websites.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Primary Coverage Area
                </h3>
                <div>
                  Chicago and the surrounding collar counties — covering Northern Illinois, Southern Wisconsin, and Northwest Indiana. Key cities include Chicago, Naperville, Evanston, Schaumburg, Aurora, Joliet, Rockford, Lake Geneva (WI), Kenosha (WI), and hundreds of surrounding communities.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Member Associations (13)
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Aurora Tri-County Association of Realtors</li>
                  <li>Chicago Association of Realtors</li>
                  <li>Fox Valley Association of Realtors</li>
                  <li>Illinois Association of Realtors</li>
                  <li>Lake County Association of Realtors</li>
                  <li>McHenry County Association of Realtors</li>
                  <li>North Shore-Barrington Association of Realtors</li>
                  <li>Oak Park Board of Realtors</li>
                  <li>REALTOR® Association of Northwest Chicagoland</li>
                  <li>REALTOR® Association of West/South Suburban Chicagoland</li>
                  <li>Three Rivers Association of Realtors</li>
                  <li>West Towns Board of Realtors</li>
                  <li>Will-Grundy Association of Realtors</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Users
                </h3>
                <div>
                  Licensed brokers of record, agents (via broker), home buyers, and sellers operating in the Chicago metro, Northern Illinois, Southern Wisconsin, and Northwest Indiana.
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
                MRED/MLSNI integrates with both iHomeFinder and IDX Broker to provide IDX (Internet Data Exchange) services. Both vendors connect directly to the MRED data feed, allowing agents to display live listings — including search, mapping, and detail pages — on their websites.
              </div>
              <div>
                IDX access is available to brokers of record. Agents who are not brokers of record must obtain IDX through their managing broker. Contact iHomeFinder or IDX Broker for the specific application process and required paperwork for MRED.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder IDX Services for MRED/MLSNI
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
                  IDX Broker Services for MRED/MLSNI
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Full MLS search integration with customizable widgets</li>
                  <li>Google property mapping for all listings</li>
                  <li>Advanced field customization to match MRED data</li>
                  <li>Featured listing displays updated automatically</li>
                  <li>CRM integration and lead follow-up tools</li>
                  <li>Compatible with WordPress and custom website builds</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Integration Notes & Restrictions
                </h3>
                <div>
                  IDX feeds are available to brokers of record only. If you are an agent without broker status, please contact your managing broker or reach out to DMR Media — we can walk you through the options available to MLSNI/MRED members. Feed approval typically takes approximately 5 business days.
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

          {/* Membership & Fees */}
          <section id="fees">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Membership & Fees
            </h2>
            <div className="space-y-6 text-[var(--color-off-black)] font-serif leading-relaxed">
              <div>
                Membership in MRED is obtained through one of the 13 participating REALTOR® associations. Active membership is required to access the IDX data feed. The official MRED member portal is accessible at{' '}
                <a
                  href="http://www.mlsni.com/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="underline hover:opacity-60 transition-opacity"
                >
                  mlsni.com
                </a>
                .
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder Fees
                </h3>
                <div>
                  Association fees vary — confirm with iHomeFinder and your local board before signing up. iHomeFinder subscription fees for IDX integration apply separately; pricing varies by plan.
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Broker Fees
                </h3>
                <div>
                  IDX Broker charges a separate subscription fee for MRED/MLSNI integration. Real Estate Webmasters maintains the required paperwork for brokers to obtain a raw IDX data feed from MRED. Confirm current pricing and the application process directly with IDX Broker or your DMR Media account team.
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
                  <li>Luxury lakefront and waterfront properties</li>
                  <li>Commercial properties</li>
                  <li>Land and lots</li>
                  <li>Multi-family and investment properties</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Search & Data Features
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Large photos and full listing detail pages</li>
                  <li>Google map-based property search</li>
                  <li>Advanced field customization to match MRED data</li>
                  <li>Featured listing pages updated automatically</li>
                  <li>Lead capture and saved search alerts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX Tools & Benefits
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Lead capture from property views and searches</li>
                  <li>CRM integration for automated follow-up</li>
                  <li>Customizable search widgets for any website stack</li>
                  <li>Mobile-responsive listing displays</li>
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
                MRED/MLSNI is one of the largest and most data-rich MLSs in the United States. With 40,000+ members across 13 associations and coverage spanning the entire Chicago metro — plus Southern Wisconsin and Northwest Indiana — it represents one of the most competitive and active real estate markets in the country.
              </div>
              <div>
                For agents and teams serving this region, an IDX-connected website is essential for capturing organic search traffic from buyers who are already searching for specific neighborhoods, property types, and price ranges. The MRED coverage area spans from Chicago&apos;s luxury lakefront condos to Geneva Lakes vacation and waterfront properties in Southern Wisconsin.
              </div>
              <div>
                DMR Media currently serves clients operating within the MRED/MLSNI coverage area. We have direct experience building and optimizing IDX-connected sites in this market — and the SEO infrastructure to make your listings visible at scale.
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
                  What is MLSNI / MRED?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  MLSNI (Multiple Listing Service of Northern Illinois) rebranded as MRED — Midwest Real Estate Data — in the mid-2000s. Today MRED serves Chicago and the surrounding collar counties, encompassing Northern Illinois, Southern Wisconsin, and Northwest Indiana with 40,000+ members across 13 REALTOR® associations.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does iHomeFinder support MRED/MLSNI?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. iHomeFinder provides IDX integration for MRED/MLSNI, allowing agents to display live listings on their websites. Membership in one of the 13 participating associations is required. Contact iHomeFinder for current fees and setup details.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does IDX Broker support MRED/MLSNI?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. IDX Broker supports MRED/MLSNI with full MLS search integration, Google property mapping, and customizable listing pages. IDX access is available to brokers of record. Contact IDX Broker for current pricing and the paperwork required to obtain a raw IDX data feed from MRED.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  What cities does MRED/MLSNI cover?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Chicago, Naperville, Evanston, Schaumburg, Aurora, Joliet, Rockford, Oak Park, Waukegan, and hundreds of surrounding communities across Northern Illinois. Coverage also extends into Southern Wisconsin (including Lake Geneva and Kenosha) and Northwest Indiana.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Can agents (non-brokers) get IDX access?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  IDX data feeds from MRED are available to brokers of record. If you are an agent without broker status, please contact your managing broker, or reach out to DMR Media — we can outline the options available to MLSNI/MRED members for IDX display.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with MRED/MLSNI IDX setup?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. We currently serve clients in the MRED/MLSNI coverage area and have direct experience integrating both iHomeFinder and IDX Broker for this market. Contact us and we&apos;ll walk you through the setup process.
                </dd>
              </div>
            </dl>
          </section>

          {/* CTA */}
          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect Your Site to MRED / MLSNI
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve the Chicago metro, Northern Illinois, or Southern Wisconsin market and want to display live listings on your website, iHomeFinder or IDX Broker integration for MRED/MLSNI is a proven solution. Our team can help you navigate the setup process and build an IDX-connected site that ranks.
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
            Chicago & Geneva Lakes growth stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl">
            <Link
              href="/case-study/jade-legendary-real-estate"
              className="group border-b border-[var(--color-ink-200)] pb-12 hover:opacity-60 transition-opacity duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between gap-6 mb-6">
                <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-off-black)] font-serif">
                  Website Design & SEO
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif">
                  Wisconsin Realtor of Year 2025
                </span>
              </div>
              <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-6">
                Legendary Real Estate Services
              </h3>
              <div className="text-sm text-[var(--color-off-black)] leading-relaxed font-serif mb-6">
                Chris and Jade lead a boutique Lake Geneva team operating across the Geneva Lakes area — directly within MRED/MLSNI coverage. We built their brand presence from the ground up, delivering a site that ranks for high-value luxury and lakefront keywords across Southern Wisconsin and the greater Chicago market.
              </div>
              <div className="relative aspect-[16/9] overflow-hidden mb-6 bg-[var(--color-ink-200)]">
                <img
                  src="/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png"
                  alt="Legendary Real Estate Services website"
                  className="w-full h-full object-cover object-top"
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
