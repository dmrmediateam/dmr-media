import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import SEOWrapper from '@/components/SEOWrapper'
import {
  brokerages,
  getBrokerageBySlug,
  getAgentsByBrokerage,
  getAllBrokerageSlugs,
} from '@/data/directory'

const BASE = 'https://www.dmrmedia.org'

export function generateStaticParams() {
  return getAllBrokerageSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const b = getBrokerageBySlug(slug)
  if (!b) return { title: 'Brokerage Not Found' }

  return {
    title: `${b.name} — Brokerage Profile & Top Agents | DMR Media Directory`,
    description: `${b.description} Founded ${b.founded} · ${b.headquarters} · ${b.agentCount} associates.`,
    alternates: { canonical: `${BASE}/directory/${b.slug}` },
    openGraph: {
      title: `${b.name} — Brokerage Profile`,
      description: b.description,
      url: `${BASE}/directory/${b.slug}`,
      siteName: 'DMR Media',
      type: 'website',
    },
  }
}

const OWNERSHIP_LABELS: Record<string, string> = {
  franchise: 'Franchise',
  'publicly-traded': 'Publicly Traded',
  private: 'Private',
  independent: 'Independent',
}

export default async function BrokerageProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const b = getBrokerageBySlug(slug)
  if (!b) notFound()

  const affiliated = getAgentsByBrokerage(b.slug)

  // Related brokerages — same ownership type, not self, max 4
  const related = brokerages
    .filter((r) => r.slug !== b.slug && r.ownershipType === b.ownershipType)
    .slice(0, 4)

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: b.name,
    foundingDate: b.founded.toString(),
    address: {
      '@type': 'PostalAddress',
      addressLocality: b.headquarters.split(',')[0].trim(),
      addressRegion: b.headquarters.split(',')[1]?.trim() ?? 'US',
      addressCountry: 'US',
    },
    url: b.website,
    numberOfEmployees: { '@type': 'QuantitativeValue', description: b.agentCount },
    description: b.description,
    sameAs: [b.website],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <SEOWrapper slug={`/directory/${b.slug}`}>
        <main className="min-h-screen bg-white">
          {/* ── Hero ── */}
          <section
            className="py-24 md:py-32 border-b border-white/10"
            style={{ backgroundColor: b.accentColor }}
          >
            <div className="container-max px-4 sm:px-6">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 mb-8" aria-label="Breadcrumb">
                <Link
                  href="/directory"
                  className="font-serif text-[10px] uppercase tracking-[0.22em] text-white/50 hover:text-white/80 transition-colors"
                >
                  Directory
                </Link>
                <span className="text-white/20 text-[10px]">/</span>
                <span className="font-serif text-[10px] uppercase tracking-[0.22em] text-white/50">
                  {b.shortName}
                </span>
              </nav>

              <p className="font-serif text-[11px] uppercase tracking-[0.28em] text-white/50 mb-4">
                Est. {b.founded} · {b.headquarters}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.06] tracking-tight text-white max-w-3xl mb-6">
                {b.name}
              </h1>
              <p className="font-serif text-base sm:text-lg leading-relaxed text-white/70 max-w-2xl mb-10">
                {b.tagline}
              </p>

              {/* Quick fact pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Founded', val: b.founded },
                  { label: 'HQ', val: b.headquarters },
                  { label: 'Agents', val: b.agentCount },
                  { label: 'Type', val: OWNERSHIP_LABELS[b.ownershipType] },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-2 border border-white/20 px-4 py-2"
                  >
                    <span className="font-serif text-[9px] uppercase tracking-[0.2em] text-white/40">
                      {f.label}
                    </span>
                    <span className="font-serif text-[12px] text-white/80">{f.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Body: sidebar + content ── */}
          <div className="container-max px-4 sm:px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
              {/* ── Main content ── */}
              <article>
                {/* Description */}
                <p className="font-serif text-lg sm:text-xl leading-[1.75] text-[var(--color-ink-300)] mb-10 max-w-3xl">
                  {b.description}
                </p>

                {/* Overview paragraphs */}
                <div className="prose-serif space-y-6 max-w-3xl">
                  {b.overview.map((para, i) => (
                    <p
                      key={i}
                      className="font-serif text-[15px] sm:text-base leading-[1.9] text-[var(--color-ink-300)]"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Market focus */}
                <div className="mt-12 pt-10 border-t border-[var(--color-ink-200)]">
                  <p className="font-serif text-[11px] uppercase tracking-[0.26em] text-[var(--color-ink-400)] mb-3">
                    Market Focus
                  </p>
                  <p className="font-serif text-base leading-relaxed text-[var(--color-off-black)]">
                    {b.marketFocus}
                  </p>
                </div>

                {/* Top affiliated agents */}
                {affiliated.length > 0 && (
                  <div className="mt-12 pt-10 border-t border-[var(--color-ink-200)]">
                    <p className="font-serif text-[11px] uppercase tracking-[0.26em] text-[var(--color-ink-400)] mb-6">
                      Top Producers Listed in This Profile
                    </p>
                    <div className="grid gap-px bg-[var(--color-ink-200)] border border-[var(--color-ink-200)] sm:grid-cols-2">
                      {affiliated.map((agent, i) => (
                        <div key={i} className="bg-white p-5">
                          <p className="font-serif text-[14px] text-[var(--color-off-black)]">
                            {agent.name}
                          </p>
                          {agent.leadAgent && (
                            <p className="font-serif text-[11px] text-[var(--color-ink-400)] mt-0.5">
                              {agent.leadAgent}
                            </p>
                          )}
                          <p className="font-serif text-[12px] text-[var(--color-ink-300)] mt-2">
                            {agent.city}, {agent.state}
                          </p>
                          <p className="font-serif text-[12px] text-[var(--color-ink-400)] mt-1">
                            {agent.specialty}
                          </p>
                          {(agent.annualVolume || agent.rankNote) && (
                            <p className="font-serif text-[12px] text-[var(--color-off-black)] mt-2">
                              {agent.annualVolume || agent.rankNote}
                            </p>
                          )}
                          {agent.rankSource && (
                            <p className="font-serif text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] mt-2">
                              {agent.rankSource}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>

              {/* ── Sidebar ── */}
              <aside className="lg:sticky lg:top-8 flex flex-col gap-6">
                {/* Fact box — Wikipedia style */}
                <div className="border border-[var(--color-ink-200)] overflow-hidden">
                  <div
                    className="px-5 py-4"
                    style={{ backgroundColor: b.accentColor }}
                  >
                    <p className="font-serif text-[10px] uppercase tracking-[0.22em] text-white/70">
                      Quick Facts
                    </p>
                    <p className="font-serif text-base text-white mt-0.5">{b.shortName}</p>
                  </div>
                  <div className="divide-y divide-[var(--color-ink-200)]">
                    {b.keyFacts.map((f) => (
                      <div key={f.label} className="grid grid-cols-[130px_1fr] items-start px-5 py-3">
                        <span className="font-serif text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink-400)] pt-0.5 leading-snug">
                          {f.label}
                        </span>
                        <span className="font-serif text-[13px] text-[var(--color-off-black)] leading-snug">
                          {f.value}
                        </span>
                      </div>
                    ))}
                    {b.website && (
                      <div className="grid grid-cols-[130px_1fr] items-start px-5 py-3">
                        <span className="font-serif text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink-400)] pt-0.5">
                          Website
                        </span>
                        <a
                          href={b.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-serif text-[13px] text-[var(--color-off-black)] hover:opacity-60 transition-opacity break-all"
                        >
                          {b.website.replace('https://', '')}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* DMR CTA card */}
                <div className="bg-[var(--color-off-black)] p-7">
                  <p className="font-serif text-[10px] uppercase tracking-[0.22em] text-white/50 mb-3">
                    Work with DMR
                  </p>
                  <p className="font-serif text-base font-light text-white leading-[1.5] mb-5">
                    We build the websites, SEO, and paid media systems for agents and teams competing at the
                    highest level.
                  </p>
                  <Link
                    href="/calendar"
                    className="block text-center font-serif text-[10px] uppercase tracking-[0.2em] bg-white text-[var(--color-off-black)] px-6 py-3.5 hover:bg-white/90 transition-colors"
                  >
                    Book a strategy call
                  </Link>
                  <Link
                    href="/services"
                    className="block text-center font-serif text-[10px] uppercase tracking-[0.18em] text-white/50 hover:text-white mt-3 transition-colors"
                  >
                    Our services →
                  </Link>
                </div>
              </aside>
            </div>
          </div>

          {/* ── Related brokerages ── */}
          {related.length > 0 && (
            <section className="bg-[var(--surface-base)] border-t border-[var(--color-ink-200)] py-16 md:py-20">
              <div className="container-max px-4 sm:px-6">
                <p className="font-serif text-[11px] uppercase tracking-[0.26em] text-[var(--color-ink-400)] mb-8">
                  Similar brokerages
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/directory/${r.slug}`}
                      className="group bg-white border border-[var(--color-ink-200)] hover:border-[var(--color-off-black)]/30 p-6 transition-all"
                    >
                      <div
                        className="w-6 h-1 mb-4"
                        style={{ backgroundColor: r.accentColor }}
                        aria-hidden="true"
                      />
                      <p className="font-serif text-[14px] text-[var(--color-off-black)] group-hover:opacity-70 transition-opacity mb-1">
                        {r.shortName}
                      </p>
                      <p className="font-serif text-[11px] text-[var(--color-ink-400)]">
                        Est. {r.founded} · {r.headquarters.split(',')[0]}
                      </p>
                      <p className="font-serif text-[10px] uppercase tracking-[0.18em] text-[var(--color-off-black)] mt-4 group-hover:opacity-60 transition-opacity">
                        View profile →
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── Back to directory ── */}
          <div className="border-t border-[var(--color-ink-200)] py-8">
            <div className="container-max px-4 sm:px-6">
              <Link
                href="/directory"
                className="font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] hover:text-[var(--color-off-black)] transition-colors"
              >
                ← Back to directory
              </Link>
            </div>
          </div>
        </main>
      </SEOWrapper>
    </>
  )
}
