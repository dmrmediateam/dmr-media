import type { Metadata } from 'next'
import Link from 'next/link'
import SEOWrapper from '@/components/SEOWrapper'
import { brokerages, topAgents } from '@/data/directory'

const BASE = 'https://www.dmrmedia.org'

export const metadata: Metadata = {
  title: 'U.S. Real Estate Agency Directory — Top Brokerages & Agents | DMR Media',
  description:
    'Directory of the largest real estate brokerages and top-producing agents in the United States. Browse by brokerage, market, and specialty — ranked by RealTrends Verified 2025/2026.',
  alternates: { canonical: `${BASE}/directory` },
  openGraph: {
    title: 'U.S. Real Estate Agency Directory — Top Brokerages & Agents | DMR Media',
    description: 'The largest real estate brokerages and top agents in the U.S., organized by brand.',
    url: `${BASE}/directory`,
    siteName: 'DMR Media',
    type: 'website',
  },
}

const directoryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'U.S. Real Estate Agency Directory',
  description:
    'Directory of the largest real estate brokerages and top-producing agents in the United States.',
  url: `${BASE}/directory`,
  publisher: {
    '@type': 'Organization',
    name: 'DMR Media',
    url: BASE,
  },
}

// Group agents by brokerage slug for the cards
const agentsByBrokerage = topAgents.reduce<Record<string, typeof topAgents>>(
  (acc, agent) => {
    if (!acc[agent.brokerageSlug]) acc[agent.brokerageSlug] = []
    acc[agent.brokerageSlug].push(agent)
    return acc
  },
  {}
)

const OWNERSHIP_LABELS: Record<string, string> = {
  franchise: 'Franchise',
  'publicly-traded': 'Public',
  private: 'Private',
  independent: 'Independent',
}

export default function DirectoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(directoryJsonLd) }}
      />
      <SEOWrapper slug="/directory">
        <main className="min-h-screen bg-white">
          {/* ── Brokerage Grid ── */}
          <section className="py-20 md:py-28 border-b border-[var(--color-ink-200)]">
            <div className="container-max px-4 sm:px-6">
              <div className="mb-12 pb-10 border-b border-[var(--color-ink-200)]">
                <p className="font-serif text-[11px] uppercase tracking-[0.28em] text-[var(--color-ink-400)] mb-4">
                  Real Estate Directory
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.25rem] font-light leading-[1.06] tracking-tight text-[var(--color-off-black)] max-w-3xl mb-5">
                  The largest brokerages
                  <br className="hidden sm:block" />{' '}
                  <span className="italic">and top agents in the U.S.</span>
                </h1>
                <p className="font-serif text-base leading-relaxed text-[var(--color-ink-300)] max-w-2xl mb-6">
                  A comprehensive reference for the top real estate brokerage brands and their highest-producing
                  agents. Data sourced from RealTrends Verified, Guinness World Records, and company public filings.
                </p>
                <div className="flex flex-wrap items-center gap-5 font-serif text-[12px] text-[var(--color-ink-400)]">
                  <span>{brokerages.length} brokerages</span>
                  <span className="text-[var(--color-ink-200)]">·</span>
                  <span>{topAgents.length}+ top producers</span>
                  <span className="text-[var(--color-ink-200)]">·</span>
                  <span>Updated June 2026</span>
                </div>
              </div>

              <div className="grid gap-px bg-[var(--color-ink-200)] border border-[var(--color-ink-200)] sm:grid-cols-2 lg:grid-cols-3">
                {brokerages.map((b) => {
                  const affiliated = agentsByBrokerage[b.slug] ?? []
                  return (
                    <Link
                      key={b.slug}
                      href={`/directory/${b.slug}`}
                      className="group bg-white hover:bg-[var(--surface-base)] transition-colors duration-200 p-8 flex flex-col gap-5"
                    >
                      {/* Name + badge */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-serif text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] mb-1.5">
                            Est. {b.founded}
                          </p>
                          <h3 className="font-serif text-lg sm:text-xl font-light text-[var(--color-off-black)] leading-[1.2] tracking-tight group-hover:opacity-80 transition-opacity">
                            {b.shortName}
                          </h3>
                        </div>
                        <span className="shrink-0 font-serif text-[9px] uppercase tracking-[0.2em] text-white px-2.5 py-1 mt-0.5"
                          style={{ backgroundColor: b.accentColor }}>
                          {OWNERSHIP_LABELS[b.ownershipType]}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="font-serif text-[13px] leading-relaxed text-[var(--color-ink-300)] flex-1 line-clamp-3">
                        {b.description}
                      </p>

                      {/* Meta row */}
                      <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                        <span className="font-serif text-[11px] text-[var(--color-ink-400)]">
                          {b.headquarters}
                        </span>
                        <span className="font-serif text-[11px] text-[var(--color-ink-400)]">
                          {b.agentCount} agents
                        </span>
                        {affiliated.length > 0 && (
                          <span className="font-serif text-[11px] text-[var(--color-ink-400)]">
                            {affiliated.length} top producer{affiliated.length !== 1 ? 's' : ''} listed
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <span className="font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-off-black)] group-hover:opacity-60 transition-opacity">
                        View profile →
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>

          {/* ── Top Agents Table ── */}
          <section className="py-20 md:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
            <div className="container-max px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 pb-8 border-b border-[var(--color-ink-200)]">
                <div>
                  <p className="font-serif text-[11px] uppercase tracking-[0.28em] text-[var(--color-ink-400)] mb-3">
                    Top producers
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-tight text-[var(--color-off-black)]">
                    Highest-Producing Agents & Teams
                  </h2>
                </div>
                <p className="font-serif text-sm text-[var(--color-ink-300)] max-w-xs sm:text-right leading-relaxed">
                  Source: RealTrends Verified 2025/2026 and America's Top 100 Real Estate Agents
                </p>
              </div>

              {/* Table — desktop */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse font-serif text-sm">
                  <thead>
                    <tr className="border-b border-[var(--color-ink-200)]">
                      <th className="text-left py-3 pr-6 text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] font-normal">Name / Team</th>
                      <th className="text-left py-3 pr-6 text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] font-normal">Brokerage</th>
                      <th className="text-left py-3 pr-6 text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] font-normal">Location</th>
                      <th className="text-left py-3 pr-6 text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] font-normal">Specialty</th>
                      <th className="text-left py-3 text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] font-normal">Volume / Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topAgents.map((agent, i) => (
                      <tr
                        key={`${agent.name}-${i}`}
                        className="border-b border-[var(--color-ink-200)] hover:bg-white transition-colors"
                      >
                        <td className="py-4 pr-6">
                          <Link
                            href={`/directory/${agent.brokerageSlug}`}
                            className="text-[var(--color-off-black)] hover:opacity-60 transition-opacity"
                          >
                            <span className="block text-[14px] font-normal">{agent.name}</span>
                            {agent.leadAgent && (
                              <span className="block text-[11px] text-[var(--color-ink-400)] mt-0.5">
                                {agent.leadAgent}
                              </span>
                            )}
                          </Link>
                        </td>
                        <td className="py-4 pr-6">
                          <Link
                            href={`/directory/${agent.brokerageSlug}`}
                            className="text-[13px] text-[var(--color-ink-300)] hover:text-[var(--color-off-black)] transition-colors"
                          >
                            {agent.brokerage}
                          </Link>
                        </td>
                        <td className="py-4 pr-6 text-[13px] text-[var(--color-ink-300)] whitespace-nowrap">
                          {agent.city}, {agent.state}
                        </td>
                        <td className="py-4 pr-6 text-[13px] text-[var(--color-ink-300)]">
                          {agent.specialty}
                        </td>
                        <td className="py-4 text-[13px] text-[var(--color-ink-300)]">
                          {agent.annualVolume ? (
                            <span className="text-[var(--color-off-black)] font-normal">{agent.annualVolume}</span>
                          ) : agent.rankNote ? (
                            <span className="italic">{agent.rankNote}</span>
                          ) : agent.rankSource ? (
                            <span>{agent.rankSource}</span>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden flex flex-col gap-4">
                {topAgents.map((agent, i) => (
                  <Link
                    key={`${agent.name}-mobile-${i}`}
                    href={`/directory/${agent.brokerageSlug}`}
                    className="group bg-white border border-[var(--color-ink-200)] p-5"
                  >
                    <p className="font-serif text-[14px] text-[var(--color-off-black)] group-hover:opacity-70 transition-opacity">
                      {agent.name}
                    </p>
                    {agent.leadAgent && (
                      <p className="font-serif text-[11px] text-[var(--color-ink-400)] mt-0.5">{agent.leadAgent}</p>
                    )}
                    <p className="font-serif text-[12px] text-[var(--color-ink-300)] mt-2">{agent.brokerage}</p>
                    <p className="font-serif text-[12px] text-[var(--color-ink-400)] mt-1">
                      {agent.city}, {agent.state} · {agent.specialty}
                    </p>
                    {agent.annualVolume && (
                      <p className="font-serif text-[12px] text-[var(--color-off-black)] mt-2 font-normal">
                        {agent.annualVolume}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ── DMR CTA ── */}
          <section className="bg-[var(--color-off-black)] py-24 md:py-28 border-t border-white/10">
            <div className="container-max px-4 sm:px-6 text-center max-w-2xl mx-auto">
              <p className="font-serif text-[11px] uppercase tracking-[0.24em] text-white/50 mb-5">
                Grow with us
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-white leading-[1.1] mb-6">
                Compete at the level of
                <br className="hidden sm:block" />{' '}
                <span className="italic">the agents in this directory.</span>
              </h2>
              <p className="font-serif text-base leading-relaxed text-white/65 mb-10">
                DMR Media builds the digital infrastructure — websites, SEO, paid media, and CRM automation —
                that the top teams in every major market rely on to generate and convert qualified leads.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/calendar"
                  className="inline-flex min-h-[52px] items-center justify-center bg-white px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] shadow-[0_4px_24px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/95"
                >
                  Book a strategy call
                </Link>
                <Link
                  href="/services"
                  className="font-serif text-[11px] uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors"
                >
                  View our services →
                </Link>
              </div>
            </div>
          </section>
        </main>
      </SEOWrapper>
    </>
  )
}
