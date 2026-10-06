import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  getMlsBySlug,
  getRelatedMls,
  getState,
  listMls,
  listMlsByState,
  stateNames,
  type MlsEntry,
} from '@/data/mlsRegistry'
import MlsApplyButton from '@/components/mls/MlsApplyButton'
import { mlsFaqs, mlsFeatures, mlsSteps, formatList } from '@/lib/mls-page-content'

const BASE = 'https://www.dmrmedia.org'

export const dynamicParams = false

export function generateStaticParams() {
  return listMls().map((e) => ({ slug: e.slug }))
}

function seoTitle(entry: MlsEntry) {
  return `${entry.keyword} IDX Website Integration | DMR Media`
}

function seoDescription(entry: MlsEntry) {
  const where = formatList(stateNames(entry))
  return `Put live ${entry.keyword} listings on a custom real estate website. DMR connects ${entry.name} IDX through IDX Broker for agents and teams in ${where}. Qualified leads in 14 days or we refund you.`
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const entry = getMlsBySlug(slug)
  if (!entry) return { title: 'MLS Not Found' }
  const url = `${BASE}/mls-integrations/${entry.slug}`
  return {
    title: seoTitle(entry),
    description: seoDescription(entry),
    keywords: [
      `${entry.keyword} IDX`,
      `${entry.keyword} IDX website`,
      `${entry.acronym} IDX integration`,
      `IDX for ${entry.name}`,
      `${entry.keyword} real estate website`,
      `${stateNames(entry)[0]} MLS IDX`,
    ].join(', '),
    alternates: { canonical: url },
    openGraph: { title: seoTitle(entry), description: seoDescription(entry), url, siteName: 'DMR Media', type: 'website' },
    ...(entry.indexable ? {} : { robots: { index: false, follow: true } }),
  }
}

const PRIMARY_CTA =
  'inline-flex min-h-[52px] items-center justify-center rounded-full bg-[var(--color-off-black)] px-9 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-6px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0'
const SECONDARY_LINK =
  'font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)] hover:underline'

function Rule({ center = false }: { center?: boolean }) {
  return (
    <div
      className={`mt-5 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent sm:w-20 ${center ? 'mx-auto' : ''}`}
      aria-hidden
    />
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">{children}</p>
}

export default async function MlsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = getMlsBySlug(slug)
  if (!entry) notFound()

  const states = entry.states.map((c) => getState(c)!).filter(Boolean)
  const primaryState = states[0]
  const where = formatList(states.map((s) => s.name))
  const related = getRelatedMls(entry, 10)
  const stateTotal = listMlsByState(primaryState.code).length
  const faqs = mlsFaqs(entry, where)
  const url = `${BASE}/mls-integrations/${entry.slug}`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'MLS Integrations', item: `${BASE}/mls-integrations` },
        {
          '@type': 'ListItem',
          position: 2,
          name: `${primaryState.name} MLS`,
          item: `${BASE}/mls-integrations/state/${primaryState.slug}`,
        },
        { '@type': 'ListItem', position: 3, name: entry.name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${entry.keyword} IDX Website Integration`,
      serviceType: 'IDX real estate website integration',
      url,
      areaServed: states.map((s) => ({ '@type': 'AdministrativeArea', name: s.name })),
      provider: { '@type': 'Organization', name: 'DMR Media', url: BASE },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ]

  return (
    <div className="min-h-screen bg-white text-[var(--color-off-black)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] pb-16 pt-28 sm:pt-32 md:pb-20">
        <div className="container-max px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-8 font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/mls-integrations" className="hover:text-[var(--color-off-black)]">
                  MLS Integrations
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={`/mls-integrations/state/${primaryState.slug}`} className="hover:text-[var(--color-off-black)]">
                  {primaryState.name}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-[var(--color-off-black)]">{entry.acronym}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <Eyebrow>IDX Broker approved coverage · {where}</Eyebrow>
            <h1 className="mt-5 font-serif text-[clamp(2.25rem,5.5vw,3.75rem)] font-light leading-[1.06] tracking-tight">
              {entry.name} <em className="italic">IDX Website Integration</em>
            </h1>
            <Rule />
            <p className="mt-7 max-w-2xl font-serif text-base leading-relaxed text-[var(--color-ink-300)] sm:text-lg">
              Put live {entry.keyword} listings on a custom real estate website built to convert. DMR designs the site,
              connects your {entry.acronym} IDX feed through IDX Broker, and backs it with a guarantee: qualified leads
              in your CRM within 14 days, or we refund you everything.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
              <MlsApplyButton className={PRIMARY_CTA}>Get my {entry.acronym} IDX website</MlsApplyButton>
              <Link href="/real-estate-agent-website-samples" className={SECONDARY_LINK}>
                See website examples
              </Link>
            </div>
          </div>

          <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['MLS', entry.name],
              ['Coverage', where],
              ['IDX provider', 'IDX Broker'],
              ['Websites from', '$2,500 + $650 per 4 weeks'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-[var(--color-ink-200)] bg-white p-5 shadow-[0_1px_0_rgba(15,15,15,0.04)]">
                <dt className="font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">{label}</dt>
                <dd className="mt-1.5 font-serif text-[15px] leading-snug text-[var(--color-off-black)]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About this MLS */}
      {(entry.coverage || entry.notes) && (
        <section className="border-b border-[var(--color-ink-200)] py-16 md:py-20">
          <div className="container-max mx-auto max-w-3xl px-4 sm:px-6">
            <Eyebrow>About {entry.acronym}</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight md:text-4xl">Where {entry.keyword} covers</h2>
            <Rule />
            <div className="mt-8 space-y-5 font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
              {entry.coverage && <p>{entry.coverage}</p>}
              {entry.notes && <p>{entry.notes}</p>}
            </div>
          </div>
        </section>
      )}

      {/* What you get */}
      <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-16 md:py-24">
        <div className="container-max px-4 sm:px-6">
          <Eyebrow>What&apos;s included</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-light tracking-tight md:text-4xl">
            What your {entry.keyword} IDX website does
          </h2>
          <Rule />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mlsFeatures(entry).map((f, i) => (
              <article key={f.title} className="rounded-xl border border-[var(--color-ink-200)] bg-white p-6 shadow-[0_1px_0_rgba(15,15,15,0.04)]">
                <p className="font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 font-serif text-lg font-light leading-snug">{f.title}</h3>
                <p className="mt-2 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we connect */}
      <section className="border-b border-[var(--color-ink-200)] py-16 md:py-24">
        <div className="container-max px-4 sm:px-6">
          <Eyebrow>Process</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-light tracking-tight md:text-4xl">
            How we connect {entry.acronym} IDX to your site
          </h2>
          <Rule />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {mlsSteps(entry).map((s, i) => (
              <li key={s.title} className="rounded-xl border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6">
                <p className="font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)]">Step {i + 1}</p>
                <h3 className="mt-2 font-serif text-lg font-light leading-snug">{s.title}</h3>
                <p className="mt-2 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related MLSs */}
      {related.length > 0 && (
        <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-16 md:py-20">
          <div className="container-max px-4 sm:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow>{primaryState.name}</Eyebrow>
                <h2 className="mt-3 font-serif text-3xl font-light tracking-tight md:text-4xl">
                  Other {primaryState.name} MLSs we integrate
                </h2>
                <Rule />
              </div>
              <Link
                href={`/mls-integrations/state/${primaryState.slug}`}
                className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-off-black)] underline underline-offset-4 hover:opacity-60"
              >
                All {stateTotal} {primaryState.name} MLSs →
              </Link>
            </div>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/mls-integrations/${r.slug}`}
                    className="flex h-full items-center justify-between gap-3 rounded-lg border border-[var(--color-ink-200)] bg-white px-4 py-3.5 font-serif text-sm transition-all hover:border-[var(--color-off-black)]/20 hover:shadow-[0_8px_24px_-12px_rgba(15,15,15,0.18)]"
                  >
                    <span>{r.name}</span>
                    <span className="text-[var(--color-ink-400)]" aria-hidden>
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="border-b border-[var(--color-ink-200)] py-16 md:py-24">
        <div className="container-max mx-auto max-w-3xl px-4 sm:px-6">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-tight md:text-4xl">{entry.acronym} IDX questions</h2>
          <Rule />
          <div className="mt-10 divide-y divide-[var(--color-ink-200)] rounded-xl border border-[var(--color-ink-200)] bg-[var(--surface-base)]/40 px-2">
            {faqs.map((f) => (
              <details key={f.question} className="group px-3 py-1 [&[open]]:bg-white/90">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 font-serif text-lg font-light marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>{f.question}</span>
                  <span className="mt-1 text-[var(--color-ink-400)] transition-transform duration-300 group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="pb-5 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--surface-base)] py-16 md:py-24">
        <div className="container-max mx-auto max-w-2xl px-4 text-center sm:px-6">
          <Eyebrow>Next step</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl">
            Your {entry.acronym} listings, on a site that <em className="italic">generates leads</em>.
          </h2>
          <Rule center />
          <p className="mt-7 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
            Tell us your brokerage and market. We&apos;ll confirm your {entry.acronym} IDX requirements and send a
            plan, pricing, and timeline, usually the same day.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <MlsApplyButton className={PRIMARY_CTA}>Get my {entry.acronym} IDX website</MlsApplyButton>
            <Link href="/mls-integrations" className={SECONDARY_LINK}>
              Browse all MLS integrations
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
