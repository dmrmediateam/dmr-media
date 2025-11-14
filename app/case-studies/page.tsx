import Image from 'next/image'
import Link from 'next/link'

const caseStudies = [
  {
    id: 'jade-legendary-real-estate',
    title: 'Jade Legendary Real Estate',
    eyebrow: 'Lead Engine Rebuild',
    result: '3x Leads in 90 Days',
    image: '/images/JadeCRM.png',
    description:
      "Tripled inbound pipeline for a boutique broker by rebuilding her search footprint and automations around the way luxury buyers actually shop.",
    tags: ['Content Architecture', 'Local SEO', 'Automation'],
  },
  {
    id: 'michael-seo-transformation',
    title: 'Michael SEO Cliff Notes',
    eyebrow: 'Modern IDX Relaunch',
    result: '21x Search Impressions',
    image: '/images/MichealTraffic.png',
    description:
      'Turned a templated IDX site into a modern journal-driven experience that pulls in intent-rich keywords and nurtures them automatically.',
    tags: ['WordPress Rebuild', 'Thought Leadership', 'YouTube'],
  },
  {
    id: 'rick-visions-first-realty',
    title: 'Rick Visions First Realty',
    eyebrow: 'Keyword Reset',
    result: '2–3 Leads Every Day',
    image: '/images/RickAfter.png',
    description:
      'Rerouted a misaligned SEO program so it stopped ranking for discount shoppers and started capturing relocation-ready listings.',
    tags: ['SERP Intelligence', 'GMB Optimization', 'Lead Handling'],
  },
]

const trustSignals = [
  { label: 'Average lift in organic leads', value: '214%' },
  { label: 'Launch timeline for full rebuilds', value: '6–9 weeks' },
  { label: 'Markets activated in 2024', value: '18' },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white/90 to-[var(--surface-base)]">
        <div className="container-max pt-24 pb-28">
          <div className="max-w-3xl space-y-6">
            <span className="uppercase tracking-[0.35em] text-[11px] text-[var(--color-ink-400)]">
              case studies
            </span>
            <h1 className="text-[42px] sm:text-[58px] font-serif font-light text-[var(--color-off-black)] leading-[1.05]">
              Luxury real estate growth stories<span className="text-[var(--color-trust)] text-[1.15em]">.</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-ink-400)] max-w-2xl leading-relaxed">
              Every engagement is a bespoke sprint. The structure is consistent—research, rebuild, relentless iteration—but
              the look, feel, and commercial outcome are tailored to the brokerage, the market, and the listings they deserve.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trustSignals.map((signal) => (
              <div
                key={signal.label}
                className="rounded-[32px] border border-white/60 bg-white/70 backdrop-blur-xl px-6 py-8 shadow-[0_20px_45px_rgba(15,15,15,0.08)]"
              >
                <div className="text-[30px] font-serif font-light text-[var(--color-off-black)]">{signal.value}</div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-ink-400)] mt-4">{signal.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-[-220px] right-[-60px] w-[420px] sm:w-[520px] aspect-square rounded-full overflow-hidden bg-white/30 border border-white/50 backdrop-blur-2xl opacity-70">
            <Image src="/images/Untitled design (45).png" alt="" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-max space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-study/${study.id}`}
                className="group relative overflow-hidden rounded-[40px] border border-[var(--color-ink-200)] bg-white/80 p-10 backdrop-blur-xl shadow-[0_35px_60px_rgba(15,15,15,0.08)] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-4 rounded-[32px] bg-gradient-to-br from-white/40 via-white/10 to-transparent" />
                </div>

                <div className="relative flex flex-col gap-6">
                  <div className="flex items-center justify-between gap-6">
                    <span className="uppercase tracking-[0.35em] text-[11px] text-[var(--color-ink-400)]">{study.eyebrow}</span>
                    <span className="inline-flex rounded-full border border-[var(--color-trust)] px-3 py-1 text-[12px] text-[var(--color-trust)]">
                      {study.result}
                    </span>
                  </div>

                  <h3 className="text-[30px] font-serif font-light text-[var(--color-off-black)] leading-[1.1]">{study.title}</h3>

                  <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">{study.description}</p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {study.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[var(--color-ink-200)] px-4 py-2 text-xs uppercase tracking-[0.25em] text-[var(--color-ink-400)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-[32px] border border-[var(--color-ink-200)] bg-white/70">
                    <Image src={study.image} alt={study.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>

                  <div className="flex items-center justify-between pt-4 text-[var(--color-off-black)]">
                    <span className="text-sm font-medium">Read the story</span>
                    <span className="text-2xl">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="rounded-[40px] border border-[var(--color-ink-200)] bg-white/80 px-8 py-12 text-center backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-ink-400)]">coming soon</p>
            <h3 className="mt-4 text-[32px] font-serif font-light text-[var(--color-off-black)]">More luxury market wins</h3>
            <p className="mt-4 text-sm text-[var(--color-ink-400)] max-w-2xl mx-auto">
              We are documenting additional transformations across New York, Miami, Scottsdale, Seattle, and London. If you would like yours to be next, we can start the diagnostic this week.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-off-black)] px-8 py-3 text-white text-xs uppercase tracking-[0.3em]"
              >
                Start your audit
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-ink-200)] px-8 py-3 text-xs uppercase tracking-[0.3em] text-[var(--color-off-black)]"
              >
                Explore our sprints
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-off-black)] text-white">
        <div className="container-max text-center space-y-6">
          <span className="uppercase tracking-[0.35em] text-[11px] text-white/60">partnership</span>
          <h2 className="text-[36px] sm:text-[48px] font-serif font-light leading-tight text-white">Ready to be the next signal-bending story<span className="text-[var(--color-trust)]">?</span></h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            When the assets feel bespoke, the copy reads like a feature story, and the numbers stay on-brand—your market notices. Let’s architect that outcome together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-10 py-3 text-xs uppercase tracking-[0.35em] text-[var(--color-off-black)]">
              Book a working session
            </Link>
            <Link href="/" className="inline-flex items-center justify-center rounded-full border border-white/40 px-10 py-3 text-xs uppercase tracking-[0.35em] text-white">
              Return home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
