import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getStateBySlug, listMlsByState, listStatesWithCoverage } from '@/data/mlsRegistry'
import MlsApplyButton from '@/components/mls/MlsApplyButton'
import { formatList, stateFaqs } from '@/lib/mls-page-content'

const BASE = 'https://www.dmrmedia.org'

export const dynamicParams = false

export function generateStaticParams() {
  return listStatesWithCoverage().map((s) => ({ state: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: slug } = await params
  const state = getStateBySlug(slug)
  if (!state) return { title: 'State Not Found' }
  const entries = listMlsByState(state.code)
  const title = `${state.name} MLS IDX Integration | ${entries.length} MLSs | DMR Media`
  const description = `IDX websites for every ${state.name} MLS IDX Broker covers, including ${formatList(
    entries.slice(0, 3).map((e) => e.acronym)
  )}. Custom real estate websites with live listings and a 14-day qualified-lead guarantee.`
  const url = `${BASE}/mls-integrations/state/${state.slug}`
  return {
    title,
    description,
    keywords: [`${state.name} MLS IDX`, `${state.name} IDX website`, `${state.name} MLS integration`, `IDX for ${state.name} realtors`].join(', '),
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: 'DMR Media', type: 'website' },
  }
}

const PRIMARY_CTA =
  'inline-flex min-h-[52px] items-center justify-center rounded-full bg-[var(--color-off-black)] px-9 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-6px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0'

function Rule({ center = false }: { center?: boolean }) {
  return (
    <div
      className={`mt-5 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent sm:w-20 ${center ? 'mx-auto' : ''}`}
      aria-hidden
    />
  )
}

export default async function StateMlsPage({ params }: { params: Promise<{ state: string }> }) {
  const { state: slug } = await params
  const state = getStateBySlug(slug)
  if (!state) notFound()
  const entries = listMlsByState(state.code)
  if (entries.length === 0) notFound()

  const faqs = stateFaqs(state, entries)
  const url = `${BASE}/mls-integrations/state/${state.slug}`
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'MLS Integrations', item: `${BASE}/mls-integrations` },
        { '@type': 'ListItem', position: 2, name: `${state.name} MLS`, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${state.name} MLS IDX integrations`,
      numberOfItems: entries.length,
      itemListElement: entries.map((e, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: e.name,
        url: `${BASE}/mls-integrations/${e.slug}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
  ]

  return (
    <div className="min-h-screen bg-white text-[var(--color-off-black)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] pb-16 pt-28 sm:pt-32 md:pb-20">
        <div className="container-max px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-8 font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)]">
            <Link href="/mls-integrations" className="hover:text-[var(--color-off-black)]">
              MLS Integrations
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-[var(--color-off-black)]">{state.name}</span>
          </nav>
          <div className="max-w-3xl">
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
              {entries.length} {entries.length === 1 ? 'MLS' : 'MLSs'} · Powered by IDX Broker
            </p>
            <h1 className="mt-5 font-serif text-[clamp(2.25rem,5.5vw,3.75rem)] font-light leading-[1.06] tracking-tight">
              {state.name} MLS <em className="italic">IDX Integration</em>
            </h1>
            <Rule />
            <p className="mt-7 max-w-2xl font-serif text-base leading-relaxed text-[var(--color-ink-300)] sm:text-lg">
              DMR builds custom real estate websites with live listings from every {state.name} MLS IDX Broker covers.
              Pick your MLS below to see how we connect it, or tell us your market and we&apos;ll handle the rest.
            </p>
            <div className="mt-9">
              <MlsApplyButton className={PRIMARY_CTA}>Get my IDX website</MlsApplyButton>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-ink-200)] py-16 md:py-20">
        <div className="container-max px-4 sm:px-6">
          <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Directory</p>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-tight md:text-4xl">
            Every {state.name} MLS we integrate
          </h2>
          <Rule />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {entries.map((e) => (
              <li key={e.slug}>
                <Link
                  href={`/mls-integrations/${e.slug}`}
                  className="group flex h-full flex-col justify-between gap-2 rounded-xl border border-[var(--color-ink-200)] bg-white p-5 shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/20 hover:shadow-[0_12px_32px_-14px_rgba(15,15,15,0.2)] motion-reduce:hover:translate-y-0"
                >
                  <span className="font-serif text-[15px] leading-snug">{e.name}</span>
                  <span className="font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] group-hover:text-[var(--color-off-black)]">
                    {e.acronym} IDX →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-16 md:py-24">
        <div className="container-max mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">FAQ</p>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-tight md:text-4xl">{state.name} IDX questions</h2>
          <Rule />
          <div className="mt-10 divide-y divide-[var(--color-ink-200)] rounded-xl border border-[var(--color-ink-200)] bg-white px-2">
            {faqs.map((f) => (
              <details key={f.question} className="group px-3 py-1">
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

      <section className="py-16 md:py-24">
        <div className="container-max mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl">
            Qualified leads in 2 weeks, <em className="italic">or we refund you everything.</em>
          </h2>
          <Rule center />
          <div className="mt-9 flex flex-col items-center gap-4">
            <MlsApplyButton className={PRIMARY_CTA}>Get my IDX website</MlsApplyButton>
            <Link
              href="/mls-integrations"
              className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline-offset-4 hover:text-[var(--color-off-black)] hover:underline"
            >
              Browse every state
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
