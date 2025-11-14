import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { label: 'Qualified leads', value: '2–3 /day', detail: 'Organic only, no ads' },
  { label: 'Keyword realignment', value: '118 terms', detail: 'Rewritten within 60 days' },
  { label: 'Time to clarity', value: '8 weeks', detail: 'From audit to predictable calls' },
]

const challenges = [
  { title: 'Wrong keywords', detail: 'Ranking for discount store searches instead of luxury real estate.' },
  { title: 'Misaligned audience', detail: 'Traffic was bargain hunters, not buyers and sellers ready to transact.' },
  { title: 'No conversion spine', detail: 'Even interested visitors had nowhere elegant to convert.' },
]

const solutions = [
  {
    name: 'Keyword reset',
    copy: 'Tore down the old SERP footprint and rebuilt it around relocation, move-up buyers, and investors.',
  },
  {
    name: 'Local proof layer',
    copy: 'Dialed in Google Business Profile, review cadence, and neighborhood long-form content.',
  },
  {
    name: 'Lead rituals',
    copy: 'Daily reporting, follow-up scripts, and concierge routing so every lead felt bespoke.',
  },
]

const phases = [
  { title: 'Audit', detail: 'Identified every keyword, schema tag, and competitor outranking Rick for his own city.' },
  { title: 'Rebuild', detail: 'Rolled out new landing pages, listings hubs, and structured content tied to buyer intent.' },
  { title: 'Scale', detail: 'Weekly experiments with hooks, GMB posts, and CRM automations to keep volume steady.' },
]

export default function RickCaseStudy() {
  return (
    <div className="bg-[var(--surface-base)] text-[var(--color-off-black)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
        <div className="container-max py-24">
          <div className="max-w-3xl space-y-6">
            <span className="uppercase tracking-[0.35em] text-[11px] text-[var(--color-ink-400)]">case study</span>
            <h1 className="text-[42px] sm:text-[56px] font-serif font-light leading-[1.08]">
              Rick · Visions First Realty<span className="text-[var(--color-trust)] text-[1.1em]">.</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-ink-400)] leading-relaxed">
              Traffic wasn’t the issue—positioning was. We reoriented every keyword, every page, every follow-up so the right buyers found him first and felt
              compelled to reach out.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[5%] bottom-[-190px] w-[440px] rounded-[48px] border border-white/60 bg-white/35 backdrop-blur-2xl overflow-hidden">
            <Image src="/images/RickAfter.png" alt="" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl shadow-[0_25px_45px_rgba(15,15,15,0.08)]">
              <div className="text-[36px] font-serif font-light">{stat.value}</div>
              <p className="mt-2 text-sm text-[var(--color-ink-400)] uppercase tracking-[0.3em]">{stat.label}</p>
              <p className="mt-4 text-sm text-[var(--color-ink-400)]">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-ink-400)]">narrative</p>
            <h2 className="text-[32px] sm:text-[40px] font-serif font-light leading-tight">He ranked everywhere but where it mattered.</h2>
            <p className="text-base text-[var(--color-ink-400)] leading-relaxed">
              Rick hired “SEO experts” before. The outcome? He showed up for discount furniture keywords. Buyers searching for relocation help never saw him.
            </p>
            <p className="text-base text-[var(--color-ink-400)] leading-relaxed">
              We reset everything—from metadata to messaging—and built an operating system that keeps his search footprint pointed at closings, not clicks.
            </p>
          </div>
          <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-8 text-center backdrop-blur-xl">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-off-black)] text-white text-3xl font-serif">R</div>
            <p className="mt-4 text-lg font-serif font-light text-[var(--color-off-black)]">Rick</p>
            <p className="text-sm text-[var(--color-ink-400)]">Visions First Realty</p>
            <p className="mt-6 text-sm italic text-[var(--color-ink-400)]">
              “DMR Media took us from noise to daily leads—without ads.”
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/60">
        <div className="container-max space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-ink-400)]">diagnosis</p>
            <h3 className="mt-3 text-[30px] font-serif font-light">Why leads weren’t closing</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="rounded-[28px] border border-[var(--color-ink-200)] bg-white/70 px-6 py-8">
                <h4 className="text-lg font-medium text-[var(--color-off-black)]">{challenge.title}</h4>
                <p className="mt-4 text-sm text-[var(--color-ink-400)] leading-relaxed">{challenge.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-max space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-ink-400)]">solution</p>
              <h3 className="mt-3 text-[32px] font-serif font-light">The system that fixed it</h3>
              <p className="mt-4 text-base text-[var(--color-ink-400)] leading-relaxed">
                We obsessed over intent. Every keyword, every landing page, every CTA now speaks to serious buyers and sellers—and nothing else.
              </p>
            </div>
            <div className="rounded-[40px] border border-[var(--color-ink-200)] bg-white/90 p-8 backdrop-blur-xl space-y-8">
              {solutions.map((solution) => (
                <div key={solution.name}>
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-ink-400)]">{solution.name}</p>
                  <p className="mt-3 text-base text-[var(--color-off-black)] leading-relaxed">{solution.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <div key={phase.title} className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-12 text-center">
                <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-ink-400)]">phase {index + 1}</span>
                <h4 className="mt-3 text-[24px] font-serif font-light">{phase.title}</h4>
                <p className="mt-4 text-sm text-[var(--color-ink-400)] leading-relaxed">{phase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-off-black)] text-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">results</p>
            <h3 className="text-[40px] font-serif font-light leading-tight text-white">
              Daily deal flow, no ad spend<span className="text-[var(--color-trust)]">.</span>
            </h3>
            <p className="text-base text-white/80 leading-relaxed">
              Rick now fields two to three qualified inquiries every day. The team knows which keywords, reviews, and pieces of content triggered each call.
            </p>
          </div>
          <div className="relative rounded-[48px] border border-white/20 bg-white/5 p-6">
            <Image src="/images/RickAfter.png" alt="Rick keyword rankings" width={720} height={520} className="w-full rounded-[32px]" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-max">
          <div className="rounded-[48px] border border-[var(--color-ink-200)] bg-white/80 p-10 backdrop-blur-xl text-center space-y-8">
            <Image src="/images/RickReview.jpeg" alt="Rick review" width={480} height={320} className="mx-auto w-full max-w-xl rounded-[32px] border border-[var(--color-ink-200)]" />
            <blockquote className="text-[22px] font-serif font-light text-[var(--color-off-black)] leading-relaxed">
              “DMR Media delivered top rankings for real estate search terms, a higher volume of qualified leads, and transparent reporting the entire way.”
            </blockquote>
            <div className="flex flex-col items-center gap-1 text-[var(--color-ink-400)]">
              <p className="text-sm uppercase tracking-[0.3em]">Rick</p>
              <p className="text-xs uppercase tracking-[0.3em]">Visions First Realty</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-off-black)] text-white">
        <div className="container-max text-center space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">next</p>
          <h4 className="text-[36px] font-serif font-light">Need your SEO to talk to the right buyers?</h4>
          <p className="text-base text-white/80 max-w-2xl mx-auto">
            Let’s reroute your traffic toward listings that convert. The playbook is ready; it just needs your market data.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.35em] text-[var(--color-off-black)]">
              Fix my rankings
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-xs uppercase tracking-[0.35em] text-white"
            >
              View services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
