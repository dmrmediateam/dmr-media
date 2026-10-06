import Link from 'next/link'
import type { Metadata } from 'next'
import { listMls, listStatesWithCoverage } from '@/data/mlsRegistry'
import MlsDirectoryClient from '@/components/mls/MlsDirectoryClient'
import MlsApplyButton from '@/components/mls/MlsApplyButton'
import type { Faq } from '@/lib/mls-page-content'

const BASE = 'https://www.dmrmedia.org'
const MLS_COUNT = listMls().length
const COVERED = listStatesWithCoverage()
const US_STATES = COVERED.filter((s) => s.isState)
const OTHER_REGIONS = COVERED.filter((s) => !s.isState)

const TITLE = 'MLS IDX Integration for Real Estate Websites | DMR Media'
const DESCRIPTION = `IDX websites for realtors in every state. DMR connects ${MLS_COUNT}+ MLSs through IDX Broker, from CRMLS to NTREIS to Stellar MLS, on custom real estate websites with a 14-day qualified-lead guarantee.`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'MLS IDX integration',
    'IDX website for realtors',
    'real estate website with IDX',
    'IDX real estate website',
    'IDX Broker MLS coverage',
    'IDX integration',
  ].join(', '),
  alternates: { canonical: `${BASE}/mls-integrations` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${BASE}/mls-integrations`, siteName: 'DMR Media', type: 'website' },
}

const FAQS: Faq[] = [
  {
    question: 'Which MLSs does DMR Media integrate with?',
    answer: `Every MLS IDX Broker supports: ${MLS_COUNT}+ MLSs across all 50 states, Washington DC, Puerto Rico, the U.S. Virgin Islands, the Bahamas, Jamaica, and Mexico. Search for yours above or browse by state.`,
  },
  {
    question: 'What is an IDX website?',
    answer:
      'IDX (Internet Data Exchange) lets your website display live MLS listings. Buyers search current inventory on your site and register with you, instead of a portal that sells the lead to other agents.',
  },
  {
    question: 'Why does DMR use IDX Broker?',
    answer:
      `IDX Broker is approved by ${MLS_COUNT}+ MLSs, which gives every DMR client one consistent, compliant setup, whichever MLS they belong to.`,
  },
  {
    question: 'What does an IDX website from DMR cost?',
    answer:
      'Websites start at $2,500 (templated), $3,500 (semi-custom), or $8,500 (fully custom), plus a $650 per 4 weeks retainer. IDX Broker and MLS IDX fees are billed separately by those providers.',
  },
  {
    question: 'How long does it take to get IDX live?',
    answer:
      'Your MLS sets the feed approval timeline, often a few business days to a couple of weeks after your broker signs the IDX agreement. We build the site in parallel so approval rarely delays launch.',
  },
]

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

function StateLink({ state }: { state: (typeof COVERED)[number] }) {
  return (
    <Link
      href={`/mls-integrations/state/${state.slug}`}
      className="group flex items-center justify-between gap-3 rounded-lg border border-[var(--color-ink-200)] bg-white px-4 py-3 font-serif text-sm transition-all hover:border-[var(--color-off-black)]/20 hover:shadow-[0_8px_24px_-12px_rgba(15,15,15,0.18)]"
    >
      <span>{state.name}</span>
      <span className="text-[11px] tabular-nums text-[var(--color-ink-400)] group-hover:text-[var(--color-off-black)]">
        {state.count}
      </span>
    </Link>
  )
}

export default function MlsIntegrationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  }

  return (
    <div className="min-h-screen bg-white text-[var(--color-off-black)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] pb-16 pt-28 sm:pt-32 md:pb-20">
        <div className="container-max px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
              MLS integrations · Powered by IDX Broker
            </p>
            <h1 className="mt-5 font-serif text-[clamp(2.25rem,5.5vw,3.75rem)] font-light leading-[1.06] tracking-tight">
              IDX Websites for <em className="italic">Every MLS</em>
            </h1>
            <Rule center />
            <p className="mx-auto mt-7 max-w-2xl font-serif text-base leading-relaxed text-[var(--color-ink-300)] sm:text-lg">
              DMR connects {MLS_COUNT}+ MLSs through IDX Broker, so wherever you sell, your website shows live listings
              and the buyer registers with you. Every site is backed by qualified leads in 14 days or we refund you
              everything.
            </p>
            <div className="mt-9 flex justify-center">
              <MlsApplyButton className={PRIMARY_CTA}>Get my IDX website</MlsApplyButton>
            </div>
          </div>

          <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-3 sm:gap-4">
            {[
              [`${MLS_COUNT}+`, 'MLSs supported'],
              [String(US_STATES.length), 'States + DC'],
              ['14 days', 'Lead guarantee'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-[var(--color-ink-200)] bg-white p-4 text-center sm:p-5">
                <dt className="sr-only">{label}</dt>
                <dd className="font-serif text-2xl font-light sm:text-3xl">{value}</dd>
                <p className="mt-1 font-serif text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-400)]">{label}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-[var(--color-ink-200)] py-16 md:py-20">
        <div className="container-max px-4 sm:px-6">
          <MlsDirectoryClient />
        </div>
      </section>

      <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-16 md:py-20">
        <div className="container-max px-4 sm:px-6">
          <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Browse by state</p>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-tight md:text-4xl">MLS IDX coverage by state</h2>
          <Rule />
          <div className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
            {US_STATES.map((s) => (
              <StateLink key={s.code} state={s} />
            ))}
          </div>
          {OTHER_REGIONS.length > 0 && (
            <>
              <h3 className="mt-12 font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
                Territories &amp; international
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                {OTHER_REGIONS.map((s) => (
                  <StateLink key={s.code} state={s} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="border-b border-[var(--color-ink-200)] py-16 md:py-24">
        <div className="container-max mx-auto max-w-3xl px-4 sm:px-6">
          <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">FAQ</p>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-tight md:text-4xl">MLS and IDX questions</h2>
          <Rule />
          <div className="mt-10 divide-y divide-[var(--color-ink-200)] rounded-xl border border-[var(--color-ink-200)] bg-[var(--surface-base)]/40 px-2">
            {FAQS.map((f) => (
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

      <section className="bg-[var(--surface-base)] py-16 md:py-24">
        <div className="container-max mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl">
            Live listings from your MLS, <em className="italic">leads in your CRM</em>.
          </h2>
          <Rule center />
          <p className="mt-7 font-serif text-base leading-relaxed text-[var(--color-ink-300)]">
            Tell us your MLS and market. We&apos;ll confirm the IDX requirements and send a plan, pricing, and timeline,
            usually the same day.
          </p>
          <div className="mt-9 flex justify-center">
            <MlsApplyButton className={PRIMARY_CTA}>Get my IDX website</MlsApplyButton>
          </div>
        </div>
      </section>
    </div>
  )
}
