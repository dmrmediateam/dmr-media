import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { label: 'Qualified leads', value: '3x', detail: 'Inbound pipeline inside 90 days' },
  { label: 'Content rebuild', value: '42 assets', detail: 'Blogs, landing pages, nurture flows' },
  { label: 'Automation velocity', value: '12 hrs', detail: 'From lead to curated follow-up' },
]

const challenges = [
  { title: 'Content without context', detail: 'Hundreds of blogs with zero keyword hierarchy or conversion path.' },
  { title: 'Search intent mismatch', detail: 'Ranking for aspirational topics, not listings and relocation triggers.' },
  { title: 'Local presence gaps', detail: 'Google Business Profile under-optimized with sporadic posting cadence.' },
  { title: 'No nurture spine', detail: 'Traffic stalled at page views because automations stopped at “thanks for visiting.”' },
]

const solutions = [
  {
    name: 'Signal-first content system',
    copy: 'Rebuilt her editorial calendar around the questions high-net buyers ask minutes before texting an agent.',
  },
  {
    name: 'Local authority spine',
    copy: 'Structured her Google Business ecosystem—posts, products, Q&A—around the neighborhoods she dominates.',
  },
  {
    name: 'Luxury nurture layer',
    copy: 'Introduced voice-note follow-ups, video walkthroughs, and concierge drip sequences triggered by specific behaviors.',
  },
]

const phases = [
  {
    title: 'Diagnose',
    detail: 'Full crawl of every article, URL, schema tag, and CRM touchpoint to see where attention evaporated.',
  },
  {
    title: 'Rebuild',
    detail: 'Re-scripted the hero narrative, rebuilt site IA, and layered in automations that referenced each reader’s intent.',
  },
  {
    title: 'Scale',
    detail: 'Weekly experimentation cadence—new hooks, new keyword clusters, new campaign angles—until the pipeline tripled.',
  },
]

export default function JadeCaseStudy() {
  return (
    <div className="bg-[var(--surface-base)] text-[var(--color-off-black)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
        <div className="container-max py-24">
          <div className="max-w-3xl space-y-6">
            <span className="uppercase tracking-[0.35em] text-[11px] text-[var(--color-ink-400)]">case study</span>
            <h1 className="text-[42px] sm:text-[56px] font-serif font-light leading-[1.08] text-[var(--color-off-black)]">
              Jade · Legendary Real Estate<span className="text-[var(--color-trust)] text-[1.1em]">.</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-ink-400)] leading-relaxed">
              From “content for content’s sake” to a signal-rich marketing system. We rebuilt Jade’s search footprint, re-scripted her nurture, and gave
              her weekly proof that the right buyers were finally showing up—and booking.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-off-black)] px-8 py-3 text-xs uppercase tracking-[0.35em] text-white"
              >
                Book an audit
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-ink-200)] px-8 py-3 text-xs uppercase tracking-[0.35em]"
              >
                View all work
              </Link>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[5%] bottom-[-180px] w-[420px] rounded-[48px] border border-white/60 bg-white/40 backdrop-blur-2xl overflow-hidden">
            <Image src="/images/JadeCRM.png" alt="" fill className="object-cover" priority />
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
        <div className="container-max grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-12 items-start">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-ink-400)]">narrative</p>
            <h2 className="text-[32px] sm:text-[40px] font-serif font-light leading-tight">Content wasn’t the problem. Context was.</h2>
            <p className="text-base text-[var(--color-ink-400)] leading-relaxed">
              Jade was publishing weekly—blogs, shorts, emails. But nothing was connected. Searchers would land, skim, and bounce because the content
              wasn’t mapped to what they were really buying: a trusted guide for complex listings.
            </p>
            <p className="text-base text-[var(--color-ink-400)] leading-relaxed">
              We rebuilt her ecosystem from the inside out—starting with a forensic audit of the 216 assets she already had. Then we rebuilt the top of
              the funnel with dead-simple landing pages that reflected the exact questions buyers asked her on calls.
            </p>
          </div>
          <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-8 text-center backdrop-blur-xl">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-off-black)] text-white text-3xl font-serif">J</div>
            <p className="mt-4 text-lg font-serif font-light text-[var(--color-off-black)]">Jade Goodhue</p>
            <p className="text-sm text-[var(--color-ink-400)]">Legendary Real Estate</p>
            <p className="mt-6 text-sm italic text-[var(--color-ink-400)]">
              “He works with us like a partner, not a vendor. Every week we knew exactly what was happening and why.”
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/60">
        <div className="container-max space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-ink-400)]">diagnosis</p>
            <h3 className="mt-3 text-[30px] font-serif font-light">Where momentum leaked</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <h3 className="mt-3 text-[32px] font-serif font-light">The system we built</h3>
              <p className="mt-4 text-base text-[var(--color-ink-400)] leading-relaxed">
                We rebuilt her marketing spine around three pillars: modern content architecture, a more intelligent local presence, and personalized
                automation triggered by behavior—not guesswork.
              </p>
            </div>
            <div className="rounded-[40px] border border-[var(--color-ink-200)] bg-white/90 p-8 backdrop-blur-xl">
              <div className="space-y-8">
                {solutions.map((solution) => (
                  <div key={solution.name}>
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-ink-400)]">{solution.name}</p>
                    <p className="mt-3 text-base text-[var(--color-off-black)] leading-relaxed">{solution.copy}</p>
                  </div>
                ))}
              </div>
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
              The pipeline tripled—and every lead knew why Jade was different<span className="text-[var(--color-trust)]">.</span>
            </h3>
            <p className="text-base text-white/80 leading-relaxed">
              Every Monday she receives a signal report with the exact posts, keywords, and conversations driving revenue. No more guessing if the work is
              landing. The work shows up as booked calls, vetted buyers, and listings that feel on-brand.
            </p>
          </div>
          <div className="relative rounded-[48px] border border-white/20 bg-white/5 p-6">
            <Image src="/images/JadeCRM.png" alt="CRM dashboard showing lead growth" width={720} height={520} className="w-full rounded-[32px]" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-max">
          <div className="rounded-[48px] border border-[var(--color-ink-200)] bg-white/80 p-10 backdrop-blur-xl text-center space-y-8">
            <Image
              src="/images/JadeReview.jpeg"
              alt="Jade review"
              width={480}
              height={320}
              className="mx-auto w-full max-w-xl rounded-[32px] border border-[var(--color-ink-200)]"
            />
            <blockquote className="text-[22px] font-serif font-light text-[var(--color-off-black)] leading-relaxed">
              “He’s articulate, responsive, and tells us exactly why things are ranking—or not—every week. It feels like an in-house team that
              communicates like luxury service should.”
            </blockquote>
            <div className="flex flex-col items-center gap-1 text-[var(--color-ink-400)]">
              <p className="text-sm uppercase tracking-[0.3em]">Jade Goodhue</p>
              <p className="text-xs uppercase tracking-[0.3em]">Legendary Real Estate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-off-black)] text-white">
        <div className="container-max text-center space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">next</p>
          <h4 className="text-[36px] font-serif font-light">Need a content system that feels like couture?</h4>
          <p className="text-base text-white/80 max-w-2xl mx-auto">
            We can diagnose your existing footprint, rebuild the parts that matter, and have new leads in the pipeline before the next quarter closes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.35em] text-[var(--color-off-black)]">
              Schedule a workshop
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-xs uppercase tracking-[0.35em] text-white"
            >
              View our services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
