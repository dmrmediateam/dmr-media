import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { label: 'Search impressions', value: '21x', detail: '7.5 weeks after relaunch' },
  { label: 'Organic sessions', value: '+312%', detail: 'Year-over-year swing vs. template site' },
  { label: 'Build timeline', value: '6 weeks', detail: 'From discovery to launch-ready WordPress' },
]

const challenges = [
  { title: 'Template paralysis', detail: 'Generic KVcore shell with no indexing plan or sitemap hygiene.' },
  { title: 'Abandoned SEO', detail: 'Zero schema, zero internal linking, zero topical authority.' },
  { title: 'Squeeze-page vibe', detail: 'Conversion points felt like discount funnels, not luxury service.' },
]

const solutions = [
  {
    name: 'Modern WordPress rebuild',
    copy: 'Rebuilt every URL with tailored layouts, schema, and lightning-fast Core Web Vitals.',
  },
  {
    name: 'Thought-leadership engine',
    copy: 'Editorial calendar anchored on relocation, investment, and micro-neighborhood queries.',
  },
  {
    name: 'Automated nurture film',
    copy: 'Video walkthroughs, IDX alerts, and concierge SMS flows triggered by on-site behavior.',
  },
]

const phases = [
  { title: 'Forensics', detail: 'Crawled the old IDX stack, surfaced technical debt, and mapped every break point.' },
  { title: 'Rebuild', detail: 'Custom WordPress experience, bespoke landing pages, and search-friendly IA.' },
  { title: 'Momentum', detail: 'Weekly experimentation with backlinks, YouTube hooks, and newsletter integrations.' },
]

export default function MichaelCaseStudy() {
  return (
    <div className="bg-[var(--surface-base)] text-[var(--color-off-black)]">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
        <div className="container-max py-24">
          <div className="max-w-3xl space-y-6">
            <span className="uppercase tracking-[0.35em] text-[11px] text-[var(--color-ink-400)]">case study</span>
            <h1 className="text-[42px] sm:text-[56px] font-serif font-light leading-[1.08]">
              Michael · SEO Transformation<span className="text-[var(--color-trust)] text-[1.1em]">.</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-ink-400)] leading-relaxed">
              From a silent IDX template to a site that behaves like a modern magazine. We rebuilt his presence, piped data into every decision, and let the
              numbers roll on camera—even though he’s camera shy.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[6%] bottom-[-200px] w-[460px] rounded-[48px] border border-white/60 bg-white/35 backdrop-blur-2xl overflow-hidden">
            <Image src="/images/MichealTraffic.png" alt="" fill className="object-cover" priority />
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
            <h2 className="text-[32px] sm:text-[40px] font-serif font-light leading-tight">His site looked like everyone else’s. His results didn’t.</h2>
            <p className="text-base text-[var(--color-ink-400)] leading-relaxed">
              Michael’s IDX site was a ghost town—no metadata discipline, nothing indexable, nothing to prove he sells multimillion-dollar homes. When he
              did get traffic, it fell into squeeze pages that screamed discount lead gen.
            </p>
            <p className="text-base text-[var(--color-ink-400)] leading-relaxed">
              We rebuilt everything: CMS, copy, layout, automations, the way analytics roll up. Seven weeks later, the data matched the way he works—calm,
              confident, modern.
            </p>
          </div>
          <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-8 text-center backdrop-blur-xl">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[var(--color-off-black)] text-white text-3xl font-serif">M</div>
            <p className="mt-4 text-lg font-serif font-light text-[var(--color-off-black)]">Michael</p>
            <p className="text-sm text-[var(--color-ink-400)]">Real Estate Professional</p>
            <p className="mt-6 text-sm italic text-[var(--color-ink-400)]">
              “I’m camera shy, but I recorded a video because the results were that obvious.”
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/60">
        <div className="container-max space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-ink-400)]">diagnosis</p>
            <h3 className="mt-3 text-[30px] font-serif font-light">What we found in the crawl</h3>
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
              <h3 className="mt-3 text-[32px] font-serif font-light">How we rebuilt momentum</h3>
              <p className="mt-4 text-base text-[var(--color-ink-400)] leading-relaxed">
                Website, SEO, CRM, video—every artifact needed a new point of view. We started with architecture, layered in irresistible copy, and then
                taught the automations to sound like a high-end advisor.
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
              21x more visibility and leads that stay on-brand<span className="text-[var(--color-trust)]">.</span>
            </h3>
            <p className="text-base text-white/80 leading-relaxed">
              Every dashboard, every call, every follow-up is now scripted to feel premium. His team knows what to publish each week and what data proves it’s
              working.
            </p>
          </div>
          <div className="relative rounded-[48px] border border-white/20 bg-white/5 p-6">
            <Image src="/images/MichealTraffic.png" alt="Traffic analytics" width={720} height={520} className="w-full rounded-[32px]" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-[48px] border border-[var(--color-ink-200)] bg-white/80 p-10 backdrop-blur-xl">
            <h4 className="text-[24px] font-serif font-light text-[var(--color-off-black)] mb-6">Michael on camera</h4>
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-[32px] border border-[var(--color-ink-200)]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/ng_7ysEAlkc?si=0JYkw5J99GOUWYOE"
                title="Michael testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className="rounded-[48px] border border-[var(--color-ink-200)] bg-white/80 p-10 backdrop-blur-xl text-center space-y-6">
            <blockquote className="text-[22px] font-serif font-light text-[var(--color-off-black)] leading-relaxed">
              “Despite being camera shy, I recorded a testimonial because the lead flow spoke for itself. The weekly updates made it impossible to ignore the
              progress.”
            </blockquote>
            <div className="flex flex-col items-center gap-1 text-[var(--color-ink-400)]">
              <p className="text-sm uppercase tracking-[0.3em]">Michael</p>
              <p className="text-xs uppercase tracking-[0.3em]">Real Estate Professional</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-off-black)] text-white">
        <div className="container-max text-center space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">next</p>
          <h4 className="text-[36px] font-serif font-light">Want your IDX to feel like a flagship magazine?</h4>
          <p className="text-base text-white/80 max-w-2xl mx-auto">
            We can rebuild the entire experience and have Google, YouTube, and your CRM humming in less than two months.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.35em] text-[var(--color-off-black)]">
              Start the rebuild
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-xs uppercase tracking-[0.35em] text-white"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
