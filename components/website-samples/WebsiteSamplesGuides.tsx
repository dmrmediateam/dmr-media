import Link from 'next/link'

/**
 * Two sections for /real-estate-agent-website-samples (SEO plan, Nov 2026):
 * "best realtor websites" (a ranked walkthrough of the sites on this page, with
 * what each does well) and "real estate website templates" (when a template is
 * enough, when to go custom, and the page blueprint every agent site needs).
 * Every example is a real DMR build listed on this page; no invented prices.
 */

const BEST_SITES = [
  {
    name: 'Alexa Devaney | The Oppenheim Group',
    href: 'https://www.alexadevaney.com/',
    why: 'Pairs a luxury brokerage brand with a personal, family-first story and live home search across North County San Diego. DesignRush and Awwwards nominee.',
  },
  {
    name: 'Legendary Real Estate Services',
    href: 'https://legendaryrealestateservices.com/',
    why: 'Built around the lake communities buyers search for, with neighborhood guides that carry the site in organic search.',
  },
  {
    name: 'Eagan Luxury',
    href: 'https://www.eaganluxury.com/',
    why: 'A clean luxury brand with a home valuation path for sellers and community pages for a waterfront market.',
  },
  {
    name: 'Carole Tierney | Coldwell Banker Realty',
    href: 'https://www.caroletierney.com/',
    why: 'Speaks to one niche, Naples waterfront and golf communities, instead of trying to be everything to everyone.',
  },
  {
    name: 'Valoria Homes',
    href: 'https://www.valoriahomes.com/',
    why: 'A builder and brokerage site that presents new construction inventory and captures presale interest.',
  },
  {
    name: 'Ocean Breeze',
    href: 'https://ocean-breeze-one.vercel.app/',
    why: 'A single-property site that sells one villa like a destination, with cinematic media and international messaging.',
  },
  {
    name: 'Obsidian Denver',
    href: 'https://obsidian-denver.vercel.app/3227-w-20th-ave-denver-co-80211',
    why: 'A single-property site for a modern duplex that lets the architecture lead, with every inquiry routed to the agent.',
  },
] as const

const TRAITS = [
  'A clear brand and niche in the first screen, not a stock photo and a generic tagline',
  'Live IDX home search on your own domain, with listing pages search engines can read',
  'Neighborhood and community pages for the areas you actually sell',
  'A home valuation path for sellers, not only buyer search',
  'Reviews and real results near every call to action',
  'Fast load times on a phone, where most visitors arrive',
  'Brokerage, MLS, and Fair Housing compliance details handled before launch',
] as const

const OPTIONS = [
  {
    label: 'Brokerage template',
    good: 'Free or low cost, live in days, compliance handled by the brokerage.',
    limit: 'Looks like every other agent at your brokerage, and you rarely own the domain or content if you move.',
  },
  {
    label: 'Theme template',
    good: 'More design control on WordPress or a site builder, at a modest cost.',
    limit: 'IDX, SEO, speed, and lead routing are on you, and many themes slow down as plugins pile up.',
  },
  {
    label: 'Custom build',
    good: 'Designed around your niche, with IDX, area pages, and lead capture built in. You own it.',
    limit: 'Costs more and takes weeks, so it fits agents and teams ready to invest in their brand.',
  },
] as const

const BLUEPRINT = [
  { page: 'Home', note: 'Your niche, proof, and two clear paths: search homes or get a home value.' },
  { page: 'Home search (IDX)', note: 'Live MLS listings with saved searches and a sign-up after a few views.' },
  { page: 'Neighborhood pages', note: 'One page per community you sell, with listings, prices, and local detail.' },
  { page: 'Home valuation', note: 'A short form that leads to a manual valuation, the seller side of the site.' },
  { page: 'Sold and testimonials', note: 'Recent results and reviews, so visitors trust you before they call.' },
  { page: 'About and contact', note: 'Your story, your team, and every way to reach you, including the phone.' },
] as const

export default function WebsiteSamplesGuides() {
  return (
    <>
      <section className="border-t border-[var(--color-ink-200)] bg-white py-16 md:py-24" aria-labelledby="best-realtor-websites">
        <div className="container-max px-6 sm:px-10 md:px-0">
          <p className="mb-2 font-serif text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)]">Best realtor websites</p>
          <h2 id="best-realtor-websites" className="font-serif text-2xl font-light tracking-tight text-[var(--color-off-black)] sm:text-3xl">
            Best realtor websites: 7 examples and what makes them work
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-ink-300)]">
            The best realtor websites are not the flashiest. They make it obvious who the agent serves, let buyers search
            homes without leaving, and give sellers a reason to reach out. Here is what each of the sites above does well.
          </p>
          <ol className="mt-10 grid list-none gap-4 p-0 md:grid-cols-2">
            {BEST_SITES.map((site, i) => (
              <li key={site.name} className="flex gap-4 rounded-2xl border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6">
                <span className="font-serif text-2xl font-light text-[var(--color-ink-400)]">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="font-serif text-lg font-light text-[var(--color-off-black)] underline-offset-4 hover:underline"
                  >
                    {site.name}
                  </a>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-300)]">{site.why}</p>
                </div>
              </li>
            ))}
          </ol>
          <h3 className="mt-14 font-serif text-xl font-light text-[var(--color-off-black)] sm:text-2xl">What the best realtor websites have in common</h3>
          <ul className="mt-6 grid list-none gap-3 p-0 sm:grid-cols-2">
            {TRAITS.map((t) => (
              <li key={t} className="flex items-start gap-3 text-[15px] leading-relaxed text-[var(--color-ink-300)]">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)] text-[10px] text-white" aria-hidden>
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[var(--color-ink-200)] bg-[var(--surface-base)] py-16 md:py-24" aria-labelledby="real-estate-website-templates">
        <div className="container-max px-6 sm:px-10 md:px-0">
          <p className="mb-2 font-serif text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)]">Real estate website templates</p>
          <h2 id="real-estate-website-templates" className="font-serif text-2xl font-light tracking-tight text-[var(--color-off-black)] sm:text-3xl">
            Real estate website templates: when they work, and when to go custom
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-ink-300)]">
            A template can get a new agent online fast. As your business grows, the limits show up in search rankings,
            lead capture, and how much you look like everyone else. Here is how the three common options compare.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {OPTIONS.map((o) => (
              <div key={o.label} className="flex flex-col rounded-2xl border border-[var(--color-ink-200)] bg-white p-6">
                <p className="font-serif text-xl font-light text-[var(--color-off-black)]">{o.label}</p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-400)]">Good for</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-300)]">{o.good}</p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-400)]">Watch out</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-300)]">{o.limit}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-14 font-serif text-xl font-light text-[var(--color-off-black)] sm:text-2xl">
            The page template every agent website needs
          </h3>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[var(--color-ink-300)]">
            Whether you start from a template or build custom, these six pages are the blueprint we start every agent site
            from.
          </p>
          <ol className="mt-8 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {BLUEPRINT.map((b, i) => (
              <li key={b.page} className="rounded-2xl border border-[var(--color-ink-200)] bg-white p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-400)]">Page {i + 1}</p>
                <p className="mt-1 font-serif text-lg font-light text-[var(--color-off-black)]">{b.page}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-300)]">{b.note}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-[15px] leading-relaxed text-[var(--color-ink-300)]">
            Want one built for your market?{' '}
            <Link href="/real-estate-website-design" className="text-[var(--color-off-black)] underline underline-offset-2 hover:opacity-70">
              See our real estate website design service
            </Link>{' '}
            or{' '}
            <Link href="/services/agent-websites" className="text-[var(--color-off-black)] underline underline-offset-2 hover:opacity-70">
              IDX websites for realtors
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
