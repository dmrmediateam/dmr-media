import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Case Study — Boutique Luxury Brokerage | DMR Media',
  description:
    'How DMR Media grew a luxury brokerage from 457 to 1,500+ monthly organic visits — with zero paid media. Traffic still climbing 20 months later.',
  robots: {
    index: false,
    follow: false,
  },
}

const STATS = [
  { number: '4x', label: 'Non-Branded Click Growth', context: '' },
  { number: '6%', label: 'Click-Through Rate Today', context: 'was 1.1%' },
  { number: '9.7', label: 'Avg. Search Position Today', context: 'was 18.6' },
  { number: '20+', label: 'Months of Growth After Engagement Ended', context: '' },
]

const TIMELINE = [
  {
    phase: 'Month 1',
    activity: 'Technical audit, 404 fixes, sitemap rebuild, GBP optimization, orphan page repair',
    outcome: 'Clean crawlability, indexing begins',
  },
  {
    phase: 'Month 2',
    activity: '30+ location pages live, 500 citations submitted, internal linking started',
    outcome: 'First non-branded rankings appear',
  },
  {
    phase: 'Month 3',
    activity: '90 pages live, full cluster structure complete, 3 DR30+ backlinks secured',
    outcome: 'Traffic lift confirmed, lead flow increasing',
  },
  {
    phase: 'Months 4–6',
    activity: 'Full velocity: 1 page/day, 500 citations/mo, 3 backlinks/mo, 1 blog/week',
    outcome: 'Traffic 3x, leads 2x, keywords +76%',
  },
  {
    phase: 'Month 7+ (Post-engagement)',
    activity: 'No active work — infrastructure maintained by client',
    outcome: 'Traffic continued climbing to 1,500+/mo. CTR improved from 1.1% to 6%. Position improved from 18.6 to 9.7',
  },
]

const RESULTS = [
  { metric: 'Monthly Organic Traffic', start: '457', end: '~800', today: '1,500+' },
  { metric: 'Ranking Keywords', start: '369', end: '651', today: '459 (refined, higher intent)' },
  { metric: 'Monthly Lead Flow', start: 'Baseline', end: '2x', today: 'Maintained' },
  { metric: 'Paid Media Used', start: 'None', end: 'None', today: 'None' },
]

const GSC_METRICS = [
  { metric: 'Monthly Clicks', jan: '161', mar: '649', change: '+303%' },
  { metric: 'Monthly Impressions', jan: '14,600', mar: '10,800', change: 'Fewer, better' },
  { metric: 'Avg. Click-Through Rate', jan: '1.1%', mar: '6%', change: '+445%' },
  { metric: 'Avg. Search Position', jan: '18.6', mar: '9.7', change: '+47% improvement' },
]

export default function WhiteLabeledCaseStudy2025() {
  return (
    <div className="bg-white text-[var(--color-off-black)]">

      {/* HERO */}
      <section className="py-24 md:py-32 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
              SEO Case Study — Confidential
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-[1.1] tracking-tight">
              We Built the Infrastructure. It Never Stopped Working.
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-ink-300)] leading-relaxed font-serif max-w-[700px]">
              A boutique luxury brokerage across Midwest metro markets. Zero SEO strategy. Zero paid media. Here&rsquo;s what happened over the next 20 months.
            </p>
            <p className="text-xs font-serif text-[var(--color-ink-300)] tracking-wide pt-2">
              Engagement: June 2024 – January 2025&nbsp;&nbsp;·&nbsp;&nbsp;Services: SEO Only&nbsp;&nbsp;·&nbsp;&nbsp;Data verified via GSC + SEMrush, March 2026
            </p>
          </div>
        </div>
      </section>

      {/* STAT BAR */}
      <section className="border-b border-[var(--color-ink-200)]" aria-label="Key results">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--color-ink-200)]">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center text-center py-12 px-6"
              >
                <span className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] leading-none mb-2">
                  {s.number}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-off-black)] mb-1">
                  {s.label}
                </span>
                {s.context && (
                  <span className="text-xs text-[var(--color-ink-300)] tracking-wide">
                    {s.context}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1 — THE SITUATION */}
      <section className="py-20 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-[820px] mx-auto space-y-8">
            <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
              The Situation
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-light leading-tight tracking-tight">
              A strong local brand with zero organic infrastructure.
            </h2>
            <div className="space-y-5">
              <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                In June 2024 — one of the slowest real estate markets in recent memory — a boutique luxury brokerage operating across multiple Midwest metro markets came to DMR Media with a straightforward problem: a strong local reputation and almost no organic search presence to show for it.
              </p>
              <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                No SEO strategy. No location or listing page infrastructure. A site full of technical issues suppressing what little authority they had. With a slow market compressing deal flow, organic search was the highest-ROI channel available — and it was completely untapped.
              </p>
            </div>

            {/* Dark callout */}
            <div className="bg-[#0D0D0D] text-[#F5F4F0] p-8 md:p-10 space-y-5">
              <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
                Where they started
              </p>
              <ul className="font-serif text-sm leading-[1.9] text-[#F5F4F0] space-y-2">
                <li>457 monthly organic visits</li>
                <li>369 ranking keywords</li>
                <li>No SEO strategy</li>
                <li>Orphan pages throughout the site</li>
                <li>Unresolved 404 errors</li>
                <li>Zero location or listing page infrastructure</li>
                <li>Zero paid media budget</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE APPROACH */}
      <section className="py-20 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-[820px] mx-auto space-y-10">
            <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
              The Approach
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-light leading-tight tracking-tight">
              Fix the foundation first. Then build the growth engine.
            </h2>

            <div className="space-y-10">
              {/* Phase 1 */}
              <div className="pt-8 border-t border-[var(--color-ink-200)]">
                <p className="text-xs uppercase tracking-[0.15em] font-serif mb-4" style={{ color: '#B8925A' }}>
                  Phase 1 — Technical Foundation (Month 1)
                </p>
                <ul className="space-y-2">
                  {[
                    'Full technical audit identifying all crawl errors, orphan pages, and sitemap gaps',
                    'Resolved all 404 errors and rebuilt the sitemap for clean crawlability',
                    'Repaired internal linking architecture — orphan pages reconnected into site structure',
                    'Google Business Profile optimization across all office locations',
                  ].map((item) => (
                    <li key={item} className="font-serif text-sm leading-[1.85] text-[var(--color-ink-300)] flex gap-3">
                      <span className="mt-[0.35em] shrink-0 w-1 h-1 rounded-full bg-[#B8925A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phase 2 */}
              <div className="pt-8 border-t border-[var(--color-ink-200)]">
                <p className="text-xs uppercase tracking-[0.15em] font-serif mb-4" style={{ color: '#B8925A' }}>
                  Phase 2 — Location Page Buildout (Months 1–6)
                </p>
                <ul className="space-y-2">
                  {[
                    '1 new location/listing page per day across all active metro markets',
                    'Each market clustered by property type: homes for sale, condos, duplexes, waterfront, luxury',
                    'Pages built with MLS integration + optimized editorial copy — enough content to surface in LLMs, not just Google',
                    'Internal linking built cluster by cluster — each market\'s pages cross-linked for maximum authority distribution',
                    'Top performer: [City] Waterfront Homes for Sale — became the site\'s #1 non-branded traffic driver',
                  ].map((item) => (
                    <li key={item} className="font-serif text-sm leading-[1.85] text-[var(--color-ink-300)] flex gap-3">
                      <span className="mt-[0.35em] shrink-0 w-1 h-1 rounded-full bg-[#B8925A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phase 3 */}
              <div className="pt-8 border-t border-[var(--color-ink-200)]">
                <p className="text-xs uppercase tracking-[0.15em] font-serif mb-4" style={{ color: '#B8925A' }}>
                  Phase 3 — Authority Building (Ongoing)
                </p>
                <ul className="space-y-2">
                  {[
                    '500 citation submissions per month across directories, local platforms, and real estate aggregators',
                    '3 DR30+ backlinks per month targeting market-specific anchor text',
                    '1 SEO-optimized blog post per week supporting the location cluster strategy',
                    'Monthly reporting: traffic segmentation, keyword rankings, non-branded share, lead attribution',
                  ].map((item) => (
                    <li key={item} className="font-serif text-sm leading-[1.85] text-[var(--color-ink-300)] flex gap-3">
                      <span className="mt-[0.35em] shrink-0 w-1 h-1 rounded-full bg-[#B8925A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE TIMELINE */}
      <section className="py-20 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-[820px] mx-auto space-y-8">
            <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
              The Timeline
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-light leading-tight tracking-tight">
              90 days to traction. 20+ months of compounding growth.
            </h2>

            {/* Timeline table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-serif border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-ink-200)]">
                    <th className="text-left text-xs uppercase tracking-[0.15em] text-[var(--color-off-black)] py-3 pr-6 font-medium whitespace-nowrap">Phase</th>
                    <th className="text-left text-xs uppercase tracking-[0.15em] text-[var(--color-off-black)] py-3 pr-6 font-medium">Activity</th>
                    <th className="text-left text-xs uppercase tracking-[0.15em] text-[var(--color-off-black)] py-3 font-medium">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {TIMELINE.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-[var(--color-ink-200)] ${i === TIMELINE.length - 1 ? 'bg-[#F5F4F0]' : ''}`}
                    >
                      <td className="py-4 pr-6 align-top text-[var(--color-off-black)] whitespace-nowrap font-medium text-xs">
                        {row.phase}
                      </td>
                      <td className="py-4 pr-6 align-top text-[var(--color-ink-300)] leading-[1.75]">
                        {row.activity}
                      </td>
                      <td className="py-4 align-top text-[var(--color-ink-300)] leading-[1.75]">
                        {row.outcome}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm font-serif italic text-[var(--color-ink-300)]">
              The last row is the most important line in this case study. We stopped working. The traffic didn&rsquo;t.
            </p>

            {/* SEMrush screenshot */}
            <div className="mt-10">
              <Image
                src="/images/whitelabeledcase/semrushCS.webp"
                alt="SEMrush organic traffic growth data — boutique luxury brokerage, June 2024 to March 2026"
                width={1440}
                height={900}
                className="w-full h-auto border border-[var(--color-ink-200)]"
                loading="lazy"
              />
              <p className="text-xs font-serif text-[var(--color-ink-300)] mt-3 tracking-wide">
                SEMrush organic traffic trend — June 2024 through March 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE RESULTS */}
      <section className="py-20 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-[820px] mx-auto space-y-8">
            <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
              The Results
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-light leading-tight tracking-tight">
              The pages kept working long after we stopped.
            </h2>
            <div className="space-y-5">
              <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                Most SEO case studies show you the numbers at the end of an engagement. This one shows you what happened after — because that&rsquo;s where the real story is.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm font-serif border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-ink-200)]">
                    <th className="text-left text-xs uppercase tracking-[0.15em] text-[var(--color-off-black)] py-3 pr-6 font-medium">Metric</th>
                    <th className="text-left text-xs uppercase tracking-[0.15em] text-[var(--color-off-black)] py-3 pr-6 font-medium whitespace-nowrap">Start (Jun 2024)</th>
                    <th className="text-left text-xs uppercase tracking-[0.15em] text-[var(--color-off-black)] py-3 pr-6 font-medium whitespace-nowrap">End of Engagement (Jan 2025)</th>
                    <th className="text-left text-xs uppercase tracking-[0.15em] text-[var(--color-off-black)] py-3 font-medium whitespace-nowrap">Today (Mar 2026)</th>
                  </tr>
                </thead>
                <tbody>
                  {RESULTS.map((row, i) => (
                    <tr key={i} className="border-b border-[var(--color-ink-200)]">
                      <td className="py-4 pr-6 align-top text-[var(--color-off-black)] font-medium">{row.metric}</td>
                      <td className="py-4 pr-6 align-top text-[var(--color-ink-300)]">{row.start}</td>
                      <td className="py-4 pr-6 align-top text-[var(--color-ink-300)]">{row.end}</td>
                      <td className="py-4 align-top text-[var(--color-off-black)] font-medium">{row.today}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — GSC NON-BRANDED DEEP DIVE */}
      <section className="py-20 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-[820px] mx-auto space-y-8">
            <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
              GSC Non-Branded Deep Dive
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-light leading-tight tracking-tight">
              Fewer impressions. More clicks. Better positions. That&rsquo;s a mature strategy.
            </h2>
            <div className="space-y-5">
              <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                The GSC data tells a more sophisticated story than traffic alone. Between January 2025 and March 2026 — with zero active SEO work — non-branded clicks quadrupled while impressions slightly declined. That combination means one thing: Google moved their pages up. The cluster structure settled into the right rankings for high-intent, lower-volume terms that actually convert.
              </p>
            </div>

            {/* Before/After screenshots */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Image
                  src="/images/whitelabeledcase/beforeNonBrandedGSCCS.webp"
                  alt="Google Search Console non-branded data — January 2025 (before: 1.1% CTR, position 18.6)"
                  width={720}
                  height={480}
                  className="w-full h-auto border border-[var(--color-ink-200)]"
                  loading="lazy"
                />
                <p className="text-xs font-serif text-[var(--color-ink-300)] mt-2 tracking-wide">
                  January 2025 — End of engagement
                </p>
              </div>
              <div>
                <Image
                  src="/images/whitelabeledcase/afternonbrandedGSCCS.webp"
                  alt="Google Search Console non-branded data — March 2026 (after: 6% CTR, position 9.7)"
                  width={720}
                  height={480}
                  className="w-full h-auto border border-[var(--color-ink-200)]"
                  loading="lazy"
                />
                <p className="text-xs font-serif text-[var(--color-ink-300)] mt-2 tracking-wide">
                  March 2026 — 14 months later, no active work
                </p>
              </div>
            </div>

            {/* GSC metrics table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-serif border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-ink-200)]">
                    <th className="text-left text-xs uppercase tracking-[0.15em] text-[var(--color-off-black)] py-3 pr-6 font-medium">GSC Metric (Non-Branded)</th>
                    <th className="text-left text-xs uppercase tracking-[0.15em] text-[var(--color-off-black)] py-3 pr-6 font-medium whitespace-nowrap">Jan 2025</th>
                    <th className="text-left text-xs uppercase tracking-[0.15em] text-[var(--color-off-black)] py-3 pr-6 font-medium whitespace-nowrap">Mar 2026</th>
                    <th className="text-left text-xs uppercase tracking-[0.15em] text-[var(--color-off-black)] py-3 font-medium">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {GSC_METRICS.map((row, i) => (
                    <tr key={i} className="border-b border-[var(--color-ink-200)]">
                      <td className="py-4 pr-6 align-top text-[var(--color-off-black)] font-medium">{row.metric}</td>
                      <td className="py-4 pr-6 align-top text-[var(--color-ink-300)]">{row.jan}</td>
                      <td className="py-4 pr-6 align-top text-[var(--color-off-black)] font-medium">{row.mar}</td>
                      <td className="py-4 align-top font-medium" style={{ color: '#2D6A4F' }}>{row.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Green callout */}
            <div className="border border-[#2D6A4F] bg-[#F0FAF5] p-8 md:p-10 space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] font-serif font-medium" style={{ color: '#2D6A4F' }}>
                What this tells you
              </p>
              <p className="font-serif text-base leading-[1.85] text-[#1A3D2B]">
                A 1.1% CTR on position 18.6 is a site that ranks but doesn&rsquo;t deserve the click. A 6% CTR on position 9.7 is a site that ranks for exactly the right thing and earns the click. The pages matured from broad visibility into targeted authority. That&rsquo;s what correctly structured location clusters do over time — they get more specific, not less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — THE INSIGHT */}
      <section className="py-20">
        <div className="container-max">
          <div className="max-w-[820px] mx-auto space-y-8">
            <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
              The Insight
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-light leading-tight tracking-tight">
              SEO done correctly is a permanent asset, not a subscription.
            </h2>
            <div className="space-y-5">
              <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                This brokerage started with 457 monthly visits, no SEO infrastructure, and a slow market working against them. Today — over a year after the engagement ended — they&rsquo;re generating 1,500+ monthly organic visits, ranking at an average position of 9.7, and converting at a 6% CTR. Without a dollar in paid media. Without any active SEO work.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-2 pl-8 py-4" style={{ borderColor: '#B8925A' }}>
              <p className="text-2xl md:text-3xl font-serif font-light italic leading-snug text-[var(--color-off-black)]">
                &ldquo;The pages we built are still working. That&rsquo;s the point.&rdquo;
              </p>
            </blockquote>

            {/* Dark callout */}
            <div className="bg-[#0D0D0D] text-[#F5F4F0] p-8 md:p-10 space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
                The three things that made this compound
              </p>
              <ul className="space-y-5">
                <li className="font-serif text-sm leading-[1.9] text-[#ccc]">
                  <strong className="block text-[#F5F4F0] mb-1">Location page clusters built for depth, not volume</strong>
                  Google rewards specificity over scale.
                </li>
                <li className="font-serif text-sm leading-[1.9] text-[#ccc]">
                  <strong className="block text-[#F5F4F0] mb-1">Citation velocity — 500/mo</strong>
                  Established local authority in every market faster than traditional link building.
                </li>
                <li className="font-serif text-sm leading-[1.9] text-[#ccc]">
                  <strong className="block text-[#F5F4F0] mb-1">Non-branded focus from day one</strong>
                  Every page was built for someone who had never heard of the brokerage. That traffic is the only traffic that actually grows a business.
                </li>
              </ul>
            </div>

            <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
              The domain authority was always there. It just needed the right infrastructure to activate it. The same is true for any brokerage with an established brand and an underdeveloped organic footprint — the foundation exists, the pages just haven&rsquo;t been built yet.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
