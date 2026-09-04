import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meme Ads Case Study — New York Real Estate Agency | DMR Media',
  description:
    'How meme-style creative produced 577 conversions in 90 days at a $22.21 blended cost per conversion for a New York real estate agency — while cost per conversion went down as spend scaled.',
  robots: {
    index: false,
    follow: false,
  },
}

const STATS = [
  { number: '577', label: 'Conversions in 90 Days', context: '' },
  { number: '$22.21', label: 'Blended Cost Per Conversion', context: 'across $12,814 in spend' },
  { number: '+47%', label: 'Conversion Growth', context: 'March → May' },
  { number: '3.7x', label: 'Conversion Efficiency', context: 'per 1,000 impressions' },
]

const MONTHLY = [
  {
    month: 'February 2026',
    spend: '$571.98',
    impressions: '29,900',
    conversions: '0',
    cpa: '—',
    note: 'Ramp month — creative testing, tracking verification, no scale',
    muted: true,
  },
  {
    month: 'March 2026',
    spend: '$3,673.93',
    impressions: '56,266',
    conversions: '164',
    cpa: '$22.40',
    note: 'First full month at budget. Broad reach, first conversion data.',
    muted: false,
  },
  {
    month: 'April 2026',
    spend: '$3,981.53',
    impressions: '29,639',
    conversions: '172',
    cpa: '$23.15',
    note: 'Cut the audiences that impressed but never converted. Half the impressions, more conversions.',
    muted: false,
  },
  {
    month: 'May 2026',
    spend: '$5,158.53',
    impressions: '22,080',
    conversions: '241',
    cpa: '$21.40',
    note: 'Scaled spend into the winners. Best volume and best cost per conversion of the engagement.',
    muted: false,
  },
]

const RESULTS = [
  { metric: 'Monthly conversions', march: '164', may: '241', change: '+47%' },
  { metric: 'Monthly spend', march: '$3,673.93', may: '$5,158.53', change: '+40%' },
  { metric: 'Cost per conversion', march: '$22.40', may: '$21.40', change: '−4.5%' },
  { metric: 'Monthly impressions', march: '56,266', may: '22,080', change: '−61%' },
  { metric: 'Conversions per 1,000 impressions', march: '2.91', may: '10.91', change: '3.7x' },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
      {children}
    </p>
  )
}

export default function WhiteLabeledMemeAdsCaseStudy() {
  return (
    <div className="bg-white text-[var(--color-off-black)]">
      {/* HERO */}
      <section className="py-24 md:py-32 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl space-y-6">
            <Eyebrow>Paid Media Case Study — Confidential</Eyebrow>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-[1.1] tracking-tight">
              We Spent 40% More and Paid Less Per Lead.
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-ink-300)] leading-relaxed font-serif max-w-[700px]">
              A New York real estate agency with a cold ad account. Ninety days of meme-style creative later: 577
              conversions at $22.21 each — and a cost per conversion that fell while the budget grew.
            </p>
            <p className="text-xs font-serif text-[var(--color-ink-300)] tracking-wide pt-2">
              Engagement: February – May 2026&nbsp;&nbsp;·&nbsp;&nbsp;Creative: Meme-style static
              ads&nbsp;&nbsp;·&nbsp;&nbsp;Data verified via Google Ads export
            </p>
          </div>
        </div>
      </section>

      {/* STAT BAR */}
      <section className="border-b border-[var(--color-ink-200)]" aria-label="Key results">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--color-ink-200)]">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center text-center py-12 px-6">
                <span className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] leading-none mb-2">
                  {s.number}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-off-black)] mb-1">
                  {s.label}
                </span>
                {s.context && (
                  <span className="text-xs text-[var(--color-ink-300)] tracking-wide">{s.context}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SITUATION */}
      <section className="py-20 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-[820px] mx-auto space-y-8">
            <Eyebrow>The Situation</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-serif font-light leading-tight tracking-tight">
              Real estate ads that look like real estate ads get ignored.
            </h2>
            <div className="space-y-5">
              <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                A New York real estate agency came to us with an ad account that had never spent a dollar. The
                category problem was obvious: every competitor was running the same creative — a listing photo, a
                logo, a phone number. In one of the most saturated real estate markets in the country, that creative
                is invisible.
              </p>
              <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                The brief was not &ldquo;spend more.&rdquo; It was: earn attention from people who scroll past real
                estate ads on reflex, and do it at a cost per conversion the agency could scale into.
              </p>
            </div>

            <div className="bg-[#0D0D0D] text-[#F5F4F0] p-8 md:p-10 space-y-5">
              <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
                Where they started
              </p>
              <ul className="font-serif text-sm leading-[1.9] space-y-2">
                <li style={{ color: '#F5F4F0' }}>$0 lifetime ad spend — a cold account with no conversion history</li>
                <li style={{ color: '#F5F4F0' }}>No creative that differentiated them from any other agency</li>
                <li style={{ color: '#F5F4F0' }}>One of the most competitive real estate markets in the U.S.</li>
                <li style={{ color: '#F5F4F0' }}>No benchmark for what a conversion should cost</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE APPROACH */}
      <section className="py-20 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-[820px] mx-auto space-y-8">
            <Eyebrow>The Approach</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-serif font-light leading-tight tracking-tight">
              Meme creative to earn the click. Ruthless pruning to earn the margin.
            </h2>
            <div className="space-y-5">
              <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                We ran <strong>meme-style static creative</strong> — ads built on the in-jokes of buying and selling
                in New York rather than on polished listing photography. Meme creative works here for one reason: it
                does not look like an ad, so it survives the half-second where a normal real estate ad gets scrolled
                past. The offer underneath stayed serious; only the packaging changed.
              </p>
              <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                Creative alone does not hold a cost per conversion, though. The second half of the work was
                subtraction: every week we cut the audiences and placements that generated impressions without
                conversions, and moved that budget into what was converting. That is why impressions fell 61% across
                the engagement while conversions rose 47% — we stopped paying to be seen by people who were never
                going to raise their hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE TIMELINE */}
      <section className="py-20 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-[820px] mx-auto space-y-8">
            <Eyebrow>Month by Month</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-serif font-light leading-tight tracking-tight">
              One ramp month. Then three months of compounding efficiency.
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm font-serif border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-ink-200)]">
                    <th className="text-left text-xs uppercase tracking-[0.15em] py-3 pr-6 font-medium whitespace-nowrap">
                      Month
                    </th>
                    <th className="text-right text-xs uppercase tracking-[0.15em] py-3 pr-6 font-medium whitespace-nowrap">
                      Spend
                    </th>
                    <th className="text-right text-xs uppercase tracking-[0.15em] py-3 pr-6 font-medium whitespace-nowrap">
                      Impr.
                    </th>
                    <th className="text-right text-xs uppercase tracking-[0.15em] py-3 pr-6 font-medium whitespace-nowrap">
                      Conv.
                    </th>
                    <th className="text-right text-xs uppercase tracking-[0.15em] py-3 font-medium whitespace-nowrap">
                      Cost / Conv.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {MONTHLY.map((row) => (
                    <tr
                      key={row.month}
                      className={`border-b border-[var(--color-ink-200)] ${row.month === 'May 2026' ? 'bg-[#F5F4F0]' : ''}`}
                    >
                      <td
                        className={`py-4 pr-6 align-top whitespace-nowrap font-medium text-xs ${row.muted ? 'text-[var(--color-ink-300)]' : 'text-[var(--color-off-black)]'}`}
                      >
                        {row.month}
                        <span className="mt-1 block font-normal normal-case tracking-normal text-[11px] leading-[1.6] text-[var(--color-ink-300)] max-w-[200px] whitespace-normal">
                          {row.note}
                        </span>
                      </td>
                      <td className="py-4 pr-6 align-top text-right tabular-nums text-[var(--color-ink-300)]">
                        {row.spend}
                      </td>
                      <td className="py-4 pr-6 align-top text-right tabular-nums text-[var(--color-ink-300)]">
                        {row.impressions}
                      </td>
                      <td className="py-4 pr-6 align-top text-right tabular-nums text-[var(--color-off-black)] font-medium">
                        {row.conversions}
                      </td>
                      <td className="py-4 align-top text-right tabular-nums text-[var(--color-ink-300)]">{row.cpa}</td>
                    </tr>
                  ))}
                  <tr className="border-b-2 border-[var(--color-off-black)]">
                    <td className="py-4 pr-6 text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap">
                      90-day total
                    </td>
                    <td className="py-4 pr-6 text-right tabular-nums font-medium">$12,813.99</td>
                    <td className="py-4 pr-6 text-right tabular-nums font-medium">107,985</td>
                    <td className="py-4 pr-6 text-right tabular-nums font-medium">577</td>
                    <td className="py-4 text-right tabular-nums font-medium">$22.21</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm font-serif italic text-[var(--color-ink-300)]">
              February is in the table on purpose. The first $572 bought zero conversions — that is what a cold
              account costs before the data exists to optimize against.
            </p>

            {/* Google Ads account overview */}
            <div className="mt-10">
              <Image
                src="/images/whitelabeled-meme-ads/google-ads-overview.png"
                alt="Google Ads account overview — 6.86K clicks, 479 conversions, $1.71 average CPC and $11.7K cost between February 1 and May 11, 2026"
                width={1608}
                height={554}
                className="w-full h-auto border border-[var(--color-ink-200)]"
                loading="lazy"
              />
              <p className="text-xs font-serif text-[var(--color-ink-300)] mt-3 leading-[1.8] tracking-wide">
                Google Ads account overview, February 1 &ndash; May 11, 2026. This view closes mid-May, so it reads
                479 conversions against $11.7K spend; the table above runs through the end of May, which is why its
                totals are higher. Across the window shown: <strong>6,860 clicks</strong> at a{' '}
                <strong>$1.71 average cost per click</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE RESULTS */}
      <section className="py-20 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-[820px] mx-auto space-y-8">
            <Eyebrow>The Results</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-serif font-light leading-tight tracking-tight">
              Scaling usually costs more per lead. Here it cost less.
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm font-serif border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-ink-200)]">
                    <th className="text-left text-xs uppercase tracking-[0.15em] py-3 pr-6 font-medium">Metric</th>
                    <th className="text-right text-xs uppercase tracking-[0.15em] py-3 pr-6 font-medium whitespace-nowrap">
                      March
                    </th>
                    <th className="text-right text-xs uppercase tracking-[0.15em] py-3 pr-6 font-medium whitespace-nowrap">
                      May
                    </th>
                    <th className="text-right text-xs uppercase tracking-[0.15em] py-3 font-medium whitespace-nowrap">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {RESULTS.map((row) => (
                    <tr key={row.metric} className="border-b border-[var(--color-ink-200)]">
                      <td className="py-4 pr-6 align-top text-[var(--color-off-black)] leading-[1.75]">{row.metric}</td>
                      <td className="py-4 pr-6 align-top text-right tabular-nums text-[var(--color-ink-300)]">
                        {row.march}
                      </td>
                      <td className="py-4 pr-6 align-top text-right tabular-nums text-[var(--color-ink-300)]">
                        {row.may}
                      </td>
                      <td className="py-4 align-top text-right tabular-nums font-medium text-[var(--color-off-black)]">
                        {row.change}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-5 pt-2">
              <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                The line that matters is the last one. In March the account needed roughly 343 impressions to produce
                a conversion. By May it needed 92. The budget grew 40% and the cost per conversion still fell — which
                is the opposite of what normally happens when you scale a paid account.
              </p>
              <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                Meme creative earned the attention. Weekly subtraction turned that attention into margin. Neither
                half works without the other: creative alone would have bought reach at a rising cost, and pruning
                alone would have optimized ads nobody wanted to look at.
              </p>
            </div>

            <div className="bg-[#0D0D0D] text-[#F5F4F0] p-8 md:p-10 space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
                90 days, from a cold account
              </p>
              <p className="font-serif text-2xl md:text-3xl font-light leading-tight" style={{ color: '#F5F4F0' }}>
                577 conversions · $12,813.99 spend · $22.21 per conversion
              </p>
            </div>

            <p className="text-xs font-serif text-[var(--color-ink-300)] leading-[1.8] pt-2">
              Figures taken directly from the client&rsquo;s Google Ads monthly export, February&ndash;May 2026.
              Client name withheld under a white-label agreement. Conversions are as recorded by the account&rsquo;s
              configured conversion actions. Results reflect one engagement in one market and are not a projection of
              future performance.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
