import Link from 'next/link'

/**
 * Homepage "About DMR Media": the plain-language answer to what DMR is, written
 * for the homepage's target searches ("luxury real estate marketing agency",
 * "real estate marketing agency", "real estate marketing companies").
 * Layout after Mobbin agency references (Büro "What we do", Koto "Our services"):
 * a small label, one large editorial statement, then services as a hairline list.
 */
const SERVICES = [
  {
    href: '/real-estate-website-design',
    title: 'Websites',
    body: 'Custom agent and team websites with IDX home search, built to turn visitors into leads.',
  },
  {
    href: '/seo-optimization',
    title: 'SEO and AI search',
    body: 'Community pages, reviews, and authority so you show up on Google and in AI answers.',
  },
  {
    href: '/google-ads-management',
    title: 'Google Ads',
    body: 'Search, Performance Max, and Local Services Ads, tracked to booked appointments.',
  },
  {
    href: '/seller-lead-generation',
    title: 'Seller leads',
    body: 'Home valuation campaigns and nurture that turn homeowners into listings.',
  },
] as const

export default function HomeIntro() {
  return (
    <section
      className="border-t border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y,theme(spacing.20))]"
      aria-labelledby="home-intro-heading"
    >
      <div className="container-max">
        <div className="grid gap-6 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">
          <p className="pt-2 text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">About DMR Media</p>
          <div>
            <h2
              id="home-intro-heading"
              className="max-w-4xl font-serif text-[2.1rem] font-light leading-[1.08] tracking-tight text-[var(--color-off-black)] sm:text-5xl lg:text-[3.4rem]"
            >
              A boutique real estate marketing agency for luxury agents and teams.
            </h2>
            <div className="mt-10 grid gap-6 text-[15px] leading-relaxed text-[var(--color-ink-300)] md:grid-cols-2 md:gap-10">
              <p>
                We only work with real estate agents, teams, and developers, and we run the full system: the website,
                the search presence, the ads, and the follow-up that turns inquiries into appointments.
              </p>
              <p>
                Most real estate marketing companies sell one piece and leave you to connect the rest. We manage the whole
                pipeline, report on booked conversations and closed volume, and keep every lead exclusive to your brand.{' '}
                <Link
                  href="/blog/best-real-estate-marketing-agencies"
                  className="text-[var(--color-off-black)] underline underline-offset-4 hover:opacity-70"
                >
                  See how the top agencies compare
                </Link>
                .
              </p>
            </div>

            <ul className="mt-14 list-none border-t border-[var(--color-ink-200)] p-0">
              {SERVICES.map((s, i) => (
                <li key={s.href} className="border-b border-[var(--color-ink-200)]">
                  <Link
                    href={s.href}
                    className="group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-baseline gap-x-4 py-6 transition-colors sm:grid-cols-[3rem_minmax(0,14rem)_minmax(0,1fr)_auto] sm:gap-x-8"
                  >
                    <span className="text-xs tabular-nums text-[var(--color-ink-400)]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-serif text-2xl font-light text-[var(--color-off-black)] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0">
                      {s.title}
                    </span>
                    <span className="col-span-2 col-start-2 mt-2 text-sm leading-relaxed text-[var(--color-ink-300)] sm:col-span-1 sm:col-start-auto sm:mt-0">
                      {s.body}
                    </span>
                    <span
                      className="row-start-1 col-start-3 justify-self-end text-lg text-[var(--color-ink-400)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-off-black)] sm:col-start-4 motion-reduce:group-hover:translate-x-0"
                      aria-hidden
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
