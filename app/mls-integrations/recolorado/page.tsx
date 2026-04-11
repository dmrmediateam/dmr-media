import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'REcolorado | Showcase IDX & iHomeFinder | DMR Media',
  description:
    'REcolorado MLS with Showcase IDX and iHomeFinder IDX coverage. Colorado’s largest MLS—Denver, Colorado Springs, Front Range, and statewide listings.',
  alternates: {
    canonical: 'https://www.dmrmedia.org/mls-integrations/recolorado',
  },
};

const IDX_VENDORS = ['Showcase IDX', 'iHomeFinder'];
const STATES = ['CO'];

export default function RecoloradoPage() {
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
            REcolorado
          </h1>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-6 opacity-80">
            recolorado
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
                <dd>Contact association / REcolorado (varies by membership type)</dd>
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
                REcolorado is Colorado&apos;s largest multiple listing service—headquartered in Greenwood Village and
                trusted by more than 26,000 brokers, agents, appraisers, and real estate professionals statewide.
                Founded in 1984, REcolorado provides listing data, Matrix and consumer search tools, market
                statistics, education, and policy resources for one of the nation&apos;s most active markets. DMR Media
                supports REcolorado through Showcase IDX and iHomeFinder so agents and brokers can display live
                listings on their websites.
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Coverage
                </h3>
                <div>
                  Metro Denver and communities across Colorado—including Denver, Aurora, Castle Rock, Littleton,
                  Highlands Ranch, Lakewood, Westminster, Colorado Springs, Fort Collins, Boulder, Pueblo, Grand
                  Junction, Greeley, Longmont, and many other cities and towns served by participating associations.
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-3">
                  Users
                </h3>
                <div>
                  Licensed agents, brokers, appraisers, and consumers. Visit{' '}
                  <a
                    href="https://recolorado.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                  >
                    recolorado.com
                  </a>
                  {' '}for membership, Pros MLS access, data delivery, training, and support.
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
                REcolorado integrates with Showcase IDX and iHomeFinder for IDX (Internet Data Exchange). Each vendor
                connects to the MLS feed so agents can display current listings—including active, coming soon, pending,
                and sold where permitted—on their websites with automatic updates. Many IDX feeds also support
                commercial data and coming soon status; confirm with your vendor.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Showcase IDX
                </h3>
                <p className="mb-4">
                  Showcase IDX offers REcolorado coverage with portal-quality property search, map search, listing
                  pages, and lead capture. Learn more at{' '}
                  <a
                    href="https://showcaseidx.com/mls-coverage/recolorado-recolorado/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                  >
                    Showcase IDX REcolorado coverage
                  </a>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  iHomeFinder
                </h3>
                <p className="mb-4">
                  iHomeFinder is a licensed IDX vendor for REcolorado. See association and metro coverage details at{' '}
                  <a
                    href="https://www.ihomefinder.com/resources/idx-coverage/recolorado/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                  >
                    iHomeFinder REcolorado IDX coverage
                  </a>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  Additional references
                </h3>
                <p className="mb-4">
                  AgentFire publishes REcolorado MLS notes and market context at{' '}
                  <a
                    href="https://agentfire.com/mls-coverage/recolorado/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 transition-opacity"
                  >
                    AgentFire REcolorado coverage
                  </a>
                  . Display rules and refresh schedules are set by REcolorado; confirm the latest requirements with the
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
                REcolorado membership is required for MLS participation; your managing broker typically must be a
                participant for individual subscribers. Subscription types, setup fees, and monthly rates vary (e.g.
                REALTOR® vs non-association paths). See{' '}
                <a
                  href="https://recolorado.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-70 transition-opacity"
                >
                  recolorado.com
                </a>{' '}
                for current membership options and education.
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX & vendor fees
                </h3>
                <div>
                  REcolorado charges for IDX data feed access; many agents see on the order of $15/month as their share
                  through Showcase IDX. iHomeFinder and other vendors have separate subscription pricing. Confirm
                  current MLS pass-through and vendor costs before signing up.
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
                  REcolorado tools & ecosystem
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Matrix, REcolorado home search, REcolorado app, and listing metrics</li>
                  <li>Market statistics (e.g. InfoSparks, FastStats), syndication, and IDX programs</li>
                  <li>Training, webinars, and customer success (see REcolorado education and resource center)</li>
                  <li>Early RESO adoption and ongoing data standards leadership</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-serif font-light text-[var(--color-off-black)] mb-4">
                  IDX search & data features (vendors)
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Large photos, virtual tours, and property details</li>
                  <li>Map-based search; active, coming soon, pending, and sold where allowed</li>
                  <li>Open houses, lead capture, and mobile-responsive displays</li>
                  <li>Commercial data supported on many IDX implementations (confirm with vendor)</li>
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
                REcolorado powers a large share of Colorado&apos;s residential real estate transactions and connects
                professionals across the Front Range, mountain communities, and plains markets.
              </div>
              <div>
                IDX integration lets buyers and sellers start their search on your brand while staying aligned with
                MLS rules—critical in competitive markets from Denver and Boulder to Colorado Springs and the Western
                Slope.
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
                  What is REcolorado?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  REcolorado is Colorado&apos;s largest MLS—a broker-to-broker network providing listing data, tools, and
                  services to tens of thousands of real estate professionals statewide.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does Showcase IDX support REcolorado?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Showcase IDX lists REcolorado in its MLS coverage with IDX search, mapping, and listing pages for
                  compliant websites.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does iHomeFinder support REcolorado?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. iHomeFinder publishes REcolorado in its IDX coverage directory with association and market details
                  for the Denver metro and broader Colorado service areas.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  How do I get IDX integration for my website?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  You must meet REcolorado participation and broker requirements. Contact Showcase IDX or iHomeFinder for
                  plans, or work with a web partner like DMR Media to configure integration on your behalf.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-serif font-light text-[var(--color-off-black)] mb-2">
                  Does DMR Media help with REcolorado IDX setup?
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif leading-relaxed">
                  Yes. Our team can help you connect your site to REcolorado via Showcase IDX or iHomeFinder. Contact us
                  for IDX implementation and display compliance.
                </dd>
              </div>
            </dl>
          </section>

          <section className="border-t border-[var(--color-ink-200)] pt-8">
            <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
              Connect Your Site to REcolorado
            </h2>
            <div className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8">
              If you serve Colorado and want live MLS search on your website, Showcase IDX and iHomeFinder both offer
              REcolorado IDX integration. We can help you choose a path, wire up search and lead capture, and keep your
              site aligned with MLS rules.
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
            Colorado real estate growth stories
          </h2>
          <p className="text-[var(--color-off-black)] font-serif leading-relaxed mb-8 max-w-2xl">
            Case studies from the REcolorado / Colorado market coming soon.
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
