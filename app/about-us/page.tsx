import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedTeam } from '@/data/team'
import { buildOrganizationSchema } from '@/lib/eeatSchema'
import SEOWrapper from '@/components/SEOWrapper'

export const metadata: Metadata = {
  title: 'Meet the Team | DMR Media',
  description:
    'The people behind DMR Media — a search-led marketing team built for luxury real estate. Meet our CEO, CMO, developers, and specialists.',
  alternates: {
    canonical: 'https://www.dmrmedia.org/about-us',
  },
  openGraph: {
    title: 'Meet the Team | DMR Media',
    description:
      'The people behind DMR Media — a search-led marketing team built for luxury real estate.',
    type: 'website',
  },
}

const BASE_URL = 'https://www.dmrmedia.org'

const ROLE_COLORS: Record<string, string> = {
  CEO: 'bg-[var(--color-off-black)] text-white',
  CMO: 'bg-[var(--color-off-black)] text-white',
  'Web Developer': 'bg-[var(--color-ink-200)] text-[var(--color-off-black)]',
  'Admin & Operations': 'bg-[var(--color-ink-200)] text-[var(--color-off-black)]',
  'Google Ads Specialist': 'bg-[var(--color-ink-200)] text-[var(--color-off-black)]',
  Sales: 'bg-[var(--color-ink-200)] text-[var(--color-off-black)]',
}

export default function AboutUsPage() {
  const team = getFeaturedTeam()
  const organizationSchema = buildOrganizationSchema(BASE_URL)

  const teamSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      ...team.map((member) => ({
        '@type': 'Person',
        '@id': `${BASE_URL}/about-us/${member.slug}#person`,
        name: member.name,
        jobTitle: member.title,
        description: member.shortBio,
        url: `${BASE_URL}/about-us/${member.slug}`,
        image: `${BASE_URL}${member.image}`,
        worksFor: {
          '@id': `${BASE_URL}/#organization`,
        },
        ...(member.linkedin && { sameAs: [member.linkedin] }),
      })),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />

      <main className="min-h-screen bg-[var(--surface-base)] [--seo-section-y:theme(spacing.20)] md:[--seo-section-y:theme(spacing.28)]">

        {/* ── Hero ── */}
        <section
          className="border-b border-[var(--color-ink-200)] bg-[var(--color-off-black)] py-24 md:py-32"
          aria-labelledby="about-us-title"
        >
          <div className="container-max px-4 sm:px-6 text-center">
            <p className="mb-5 font-serif text-[11px] uppercase tracking-[0.24em] text-white/60">
              The Team
            </p>
            <h1
              id="about-us-title"
              className="font-serif text-4xl font-light leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              The people behind
              <br />
              <span className="italic">DMR Media.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl font-serif text-lg leading-relaxed text-white/75">
              A search-led, creatively driven team built for luxury real estate. We work directly with
              our clients — no account managers, no ticket queues, no mystery behind who is doing the work.
            </p>
            <div className="mt-4 h-[1px] w-14 bg-white/20 mx-auto" aria-hidden />
          </div>
        </section>

        {/* ── Team Grid ── */}
        <section
          className="border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]"
          aria-labelledby="team-grid-heading"
        >
          <div className="container-max px-4 sm:px-6">
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] mb-2">
              Our People
            </p>
            <h2
              id="team-grid-heading"
              className="font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl mb-14"
            >
              Built to work like a partner,<br className="hidden sm:block" /> not an agency.
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <Link
                  key={member.slug}
                  href={`/about-us/${member.slug}`}
                  className="group block border border-[var(--color-ink-200)] bg-[var(--surface-base)] hover:border-[var(--color-off-black)]/30 hover:shadow-[0_8px_32px_-8px_rgba(15,15,15,0.12)] transition-all duration-300"
                >
                  {/* Photo */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-ink-200)]">
                    {/* Initials fallback - always visible until photos added */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-off-black)]/8">
                      <span className="font-serif text-5xl font-light text-[var(--color-off-black)]/20 select-none">
                        {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <p className="font-serif text-xl font-light text-[var(--color-off-black)]">
                          {member.name}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 mt-0.5 inline-block px-3 py-1 font-serif text-[10px] uppercase tracking-[0.14em] ${ROLE_COLORS[member.role] || 'bg-[var(--color-ink-200)] text-[var(--color-off-black)]'}`}
                      >
                        {member.role}
                      </span>
                    </div>

                    <p className="font-serif text-sm leading-relaxed text-[var(--color-ink-300)] line-clamp-3">
                      {member.shortBio}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {member.expertise.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="font-serif text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-400)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <p className="mt-5 font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-off-black)] group-hover:opacity-60 transition-opacity">
                      View profile →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Culture Strip ── */}
        <section
          className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]"
          aria-labelledby="culture-heading"
        >
          <div className="container-max px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] mb-4">
                How we operate
              </p>
              <h2
                id="culture-heading"
                className="font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl"
              >
                Direct communication.<br className="hidden sm:block" /> Documented results.
              </h2>
              <div className="mt-5 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent mx-auto" aria-hidden />
              <p className="mt-8 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
                We don't run accounts through layers of project managers. The specialists working on your
                campaigns are the ones on the call. That means faster decisions, cleaner communication,
                and marketing that actually adapts when the market does.
              </p>
              <p className="mt-4 font-serif text-sm leading-relaxed text-[var(--color-ink-400)]">
                Recognized by SEMrush Agency Partners. 5-star rated on Trustpilot and Google.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-3 max-w-3xl mx-auto">
              {[
                { label: 'Trustpilot Rating', value: '5.0 ★', sub: 'Verified reviews' },
                { label: 'SEMrush Recognition', value: 'Agency Partner', sub: 'Verified credentials' },
                { label: 'Google Rating', value: '5.0 ★', sub: 'Client verified' },
              ].map((stat) => (
                <div key={stat.label} className="text-center border border-[var(--color-ink-200)] p-8 bg-white">
                  <p className="font-serif text-3xl font-light text-[var(--color-off-black)]">{stat.value}</p>
                  <p className="mt-2 font-serif text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink-400)]">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-serif text-xs text-[var(--color-ink-400)]">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-[var(--seo-section-y)] bg-[var(--color-off-black)]">
          <div className="container-max px-4 sm:px-6 text-center max-w-2xl mx-auto">
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-white/60 mb-4">
              Work with us
            </p>
            <h2 className="font-serif text-3xl font-light tracking-tight text-white md:text-4xl">
              Ready to meet the team<br className="hidden sm:block" />{' '}
              <span className="italic">in context?</span>
            </h2>
            <p className="mt-6 font-serif text-base leading-relaxed text-white/70">
              A short application lets us come prepared — your market, your competitors, and the gaps
              costing you GCI. No spam, no pitch deck. Just a direct conversation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/calendar"
                className="inline-flex min-h-[52px] items-center justify-center rounded-sm bg-white px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] shadow-[0_4px_24px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/95 hover:shadow-[0_8px_32px_rgba(0,0,0,0.22)]"
              >
                Book a strategy call
              </Link>
              <Link
                href="/about"
                className="font-serif text-[11px] uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors"
              >
                About DMR Media →
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
