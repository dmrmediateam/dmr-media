import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meme Ads + Google Search Case Study | New York Real Estate | DMR Media',
  description:
    'We ran meme ads as a live experiment against Google Search for a New York real estate client. 577 conversions in 90 days at a $22.21 blended cost per conversion, and every one came through search.',
  robots: {
    index: false,
    follow: false,
  },
}

const STATS = [
  { number: '577', label: 'Conversions in 90 Days', context: 'all channels blended' },
  { number: '$22.21', label: 'Blended Cost Per Conversion', context: 'across $12,813.99 in spend' },
  { number: '+47%', label: 'Conversion Growth', context: 'March → May' },
  { number: '3.7x', label: 'Conversion Efficiency', context: 'per 1,000 impressions, March → May' },
]

const ENGINES = [
  {
    eyebrow: 'The Experiment · February – March',
    name: 'Meme Ads',
    role: 'The hypothesis: attention converts',
    body: 'Meme-style static creative built on the in-jokes of New York real estate, run top-of-funnel to test a popular theory: that earning attention cheaply turns into leads. The attention showed up exactly as promised, at some of the cheapest reach the account ever bought. The conversions did not. Not one was recorded against the meme campaigns.',
    stats: [
      { value: '$1,002.84', label: 'Spend (7.8% of budget)' },
      { value: '71,971', label: 'Impressions (52% of engagement)' },
      { value: '0', label: 'Conversions recorded' },
    ],
  },
  {
    eyebrow: 'The Control · March – May',
    name: 'Google Search',
    role: 'The channel that just kept converting',
    body: 'Tightly-themed Google Search campaigns ran alongside the experiment, catching demand at the moment it went looking. Search converted from its first full month and never stopped: a cost per conversion that held between $19.78 and $23.15 every single month, through new campaign launches and a 40% budget increase.',
    stats: [
      { value: '$11,811.15', label: 'Spend' },
      { value: '577', label: 'Conversions' },
      { value: '$19.78–$23.15', label: 'Monthly cost per conversion range' },
    ],
  },
]

const MONTHLY = [
  {
    month: 'February 2026',
    channels: 'Meme ads',
    spend: '$571.98',
    impressions: '29,900',
    conversions: '0',
    cpa: 'n/a',
    note: 'The meme experiment begins. Half the engagement impressions came from this window, and zero conversions.',
    muted: true,
  },
  {
    month: 'March 2026',
    channels: 'Meme ads + Search',
    spend: '$3,673.93',
    impressions: '56,266',
    conversions: '164',
    cpa: '$22.40',
    note: 'Search switches on. It converts in its first full month while the meme test keeps buying reach.',
    muted: false,
  },
  {
    month: 'April 2026',
    channels: 'Search',
    spend: '$3,981.53',
    impressions: '29,639',
    conversions: '172',
    cpa: '$23.15',
    note: 'Verdict applied: meme budget rotated into search. New campaigns launched and gathered data.',
    muted: false,
  },
  {
    month: 'May 2026',
    channels: 'Search',
    spend: '$5,158.53',
    impressions: '22,080',
    conversions: '241',
    cpa: '$21.40',
    note: 'Scaled spend into the proven campaigns. Best volume and best cost per conversion of the engagement.',
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
    <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">{children}</p>
  )
}

function SectionRule() {
  return (
    <div
      className="h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent sm:w-20"
      aria-hidden
    />
  )
}

export default function WhiteLabeledMemeAdsCaseStudy() {
  return (
    <div className="bg-white text-[var(--color-off-black)]">
      {/* HERO */}
      <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-24 md:py-32">
        <div className="container-max">
          <div className="max-w-3xl space-y-6">
            <Eyebrow>Paid Media Case Study · Confidential</Eyebrow>
            <h1 className="font-serif text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              We Spent 40% More and Paid Less Per Lead.
            </h1>
            <SectionRule />
            <p className="max-w-[700px] font-serif text-base leading-relaxed text-[var(--color-ink-300)] sm:text-lg">
              A New York real estate client with a cold ad account, and an honest experiment: meme creative to chase
              cheap attention, Google Search running alongside it as the control. Ninety days later: 577 conversions
              at a $22.21 blended cost per conversion, and every single one of them came through search.
            </p>
            <p className="pt-2 font-serif text-xs tracking-wide text-[var(--color-ink-400)]">
              Engagement: February – May 2026&nbsp;&nbsp;·&nbsp;&nbsp;Test: Meme ads vs.
              Google Search&nbsp;&nbsp;·&nbsp;&nbsp;Figures pulled directly from the Google Ads account
            </p>
          </div>
        </div>
      </section>

      {/* STAT BAR */}
      <section className="border-b border-[var(--color-ink-200)] bg-white" aria-label="Key results">
        <div className="container-max">
          <div className="grid grid-cols-2 divide-x divide-y divide-[var(--color-ink-200)] md:grid-cols-4 md:divide-y-0">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center px-6 py-12 text-center">
                <span className="mb-2 font-serif text-3xl font-light leading-none text-[var(--color-off-black)] md:text-4xl">
                  {s.number}
                </span>
                <span className="mb-1 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-off-black)]">
                  {s.label}
                </span>
                {s.context && <span className="text-xs tracking-wide text-[var(--color-ink-300)]">{s.context}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SITUATION */}
      <section className="border-b border-[var(--color-ink-200)] py-16 md:py-20">
        <div className="container-max">
          <div className="mx-auto max-w-[820px] space-y-8">
            <div className="space-y-4">
              <Eyebrow>The Situation</Eyebrow>
              <h2 className="font-serif text-2xl font-light leading-tight tracking-tight md:text-3xl">
                Real estate ads that look like real estate ads get ignored.
              </h2>
              <SectionRule />
            </div>
            <div className="space-y-5">
              <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                A New York real estate client came to us with an ad account that had never spent a dollar. The category
                problem was obvious: every competitor was running the same creative, a listing photo, a logo, a phone
                number. In one of the most saturated real estate markets in the country, that creative is invisible.
              </p>
              <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                The brief was not &ldquo;spend more.&rdquo; It was: earn attention from people who scroll past real
                estate ads on reflex, then capture that attention at a cost per conversion the client could scale into.
              </p>
            </div>

            <div className="space-y-5 rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-8 shadow-[0_1px_0_rgba(15,15,15,0.04)] md:p-10">
              <Eyebrow>Where they started</Eyebrow>
              <ul className="space-y-2 font-serif text-sm leading-[1.9] text-[var(--color-off-black)]">
                <li>$0 lifetime ad spend, a cold account with no conversion history</li>
                <li>No creative that differentiated them from any other real estate brand</li>
                <li>One of the most competitive real estate markets in the U.S.</li>
                <li>No benchmark for what a conversion should cost</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE EXPERIMENT VS THE CONTROL */}
      <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-16 md:py-20">
        <div className="container-max">
          <div className="mx-auto max-w-[960px] space-y-8">
            <div className="mx-auto max-w-[820px] space-y-4">
              <Eyebrow>The Experiment</Eyebrow>
              <h2 className="font-serif text-2xl font-light leading-tight tracking-tight md:text-3xl">
                We gave memes a fair shot. Search never blinked.
              </h2>
              <SectionRule />
              <div className="space-y-5 pt-2">
                <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                  We treated meme ads the way an experiment deserves: real budget, real creative, a full test window.
                  For 7.8% of the spend they bought more than half of the engagement&rsquo;s impressions, which is
                  genuinely cheap attention. But attention is not the metric a client banks. Over the same ninety days,
                  Google Search produced all 577 conversions at a cost that barely moved month to month. That contrast
                  is the case study.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {ENGINES.map((engine) => (
                <article
                  key={engine.name}
                  className="flex h-full flex-col rounded-lg border border-[var(--color-ink-200)] bg-white p-7 shadow-[0_1px_0_rgba(15,15,15,0.04)] md:p-8"
                >
                  <p className="font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">
                    {engine.eyebrow}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-light tracking-tight text-[var(--color-off-black)]">
                    {engine.name}
                  </h3>
                  <p className="mt-0.5 font-serif text-sm italic text-[var(--color-ink-400)]">{engine.role}</p>
                  <p className="mt-4 flex-1 font-serif text-sm leading-[1.85] text-[var(--color-ink-300)]">
                    {engine.body}
                  </p>
                  <dl className="mt-6 space-y-3 border-t border-[var(--color-ink-200)] pt-5">
                    {engine.stats.map((stat) => (
                      <div key={stat.label} className="flex items-baseline justify-between gap-4">
                        <dt className="font-serif text-xs uppercase tracking-[0.1em] text-[var(--color-ink-400)]">
                          {stat.label}
                        </dt>
                        <dd className="font-serif text-base font-medium tabular-nums text-[var(--color-off-black)]">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>

            <p className="mx-auto max-w-[820px] font-serif text-sm italic leading-[1.85] text-[var(--color-ink-300)]">
              This is why the experiment was worth running. The meme spend bought reach, brand familiarity, and audience
              data for pennies, and we rotated its budget into search the moment the numbers made the verdict clear.
              Attention channels spike. Search compounds. The blended $22.21 still includes every experimental dollar.
            </p>
          </div>
        </div>
      </section>

      {/* THE TIMELINE */}
      <section className="border-b border-[var(--color-ink-200)] py-16 md:py-20">
        <div className="container-max">
          <div className="mx-auto max-w-[820px] space-y-8">
            <div className="space-y-4">
              <Eyebrow>Month by Month</Eyebrow>
              <h2 className="font-serif text-2xl font-light leading-tight tracking-tight md:text-3xl">
                One ramp month. Then three months of compounding efficiency.
              </h2>
              <SectionRule />
            </div>

            <div className="overflow-x-auto rounded-lg border border-[var(--color-ink-200)]">
              <table className="w-full border-collapse font-serif text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]/80">
                    <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.15em]">
                      Month
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-right text-xs font-medium uppercase tracking-[0.15em]">
                      Spend
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-right text-xs font-medium uppercase tracking-[0.15em]">
                      Impr.
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-right text-xs font-medium uppercase tracking-[0.15em]">
                      Conv.
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-right text-xs font-medium uppercase tracking-[0.15em]">
                      Cost / Conv.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {MONTHLY.map((row) => (
                    <tr
                      key={row.month}
                      className={`border-b border-[var(--color-ink-200)] ${row.month === 'May 2026' ? 'bg-[var(--surface-base)]' : ''}`}
                    >
                      <td
                        className={`whitespace-nowrap px-4 py-4 align-top text-xs font-medium ${row.muted ? 'text-[var(--color-ink-300)]' : 'text-[var(--color-off-black)]'}`}
                      >
                        {row.month}
                        <span className="mt-0.5 block text-[10px] font-normal uppercase tracking-[0.12em] text-[var(--color-ink-400)]">
                          {row.channels}
                        </span>
                        <span className="mt-1.5 block max-w-[220px] whitespace-normal text-[11px] font-normal normal-case leading-[1.6] tracking-normal text-[var(--color-ink-300)]">
                          {row.note}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right align-top tabular-nums text-[var(--color-ink-300)]">
                        {row.spend}
                      </td>
                      <td className="px-4 py-4 text-right align-top tabular-nums text-[var(--color-ink-300)]">
                        {row.impressions}
                      </td>
                      <td className="px-4 py-4 text-right align-top font-medium tabular-nums text-[var(--color-off-black)]">
                        {row.conversions}
                      </td>
                      <td className="px-4 py-4 text-right align-top tabular-nums text-[var(--color-ink-300)]">
                        {row.cpa}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="whitespace-nowrap px-4 py-4 text-xs font-medium uppercase tracking-[0.15em]">
                      90-day total
                    </td>
                    <td className="px-4 py-4 text-right font-medium tabular-nums">$12,813.99</td>
                    <td className="px-4 py-4 text-right font-medium tabular-nums">137,885</td>
                    <td className="px-4 py-4 text-right font-medium tabular-nums">577</td>
                    <td className="px-4 py-4 text-right font-medium tabular-nums">$22.21</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="font-serif text-sm italic text-[var(--color-ink-300)]">
              February is in the table on purpose. The first $572 was the experiment&rsquo;s tuition: tens of thousands of
              impressions, zero conversions. Leaving it in the blended math is the honest way to report a test, and
              search still carried the 90-day number to $22.21.
            </p>

            {/* Google Ads account overview */}
            <div className="mt-10">
              <Image
                src="/images/whitelabeled-meme-ads/google-ads-overview.png"
                alt="Google Ads account overview: 6.86K clicks, 479 conversions, $1.71 average CPC and $11.7K cost between February 1 and May 11, 2026"
                width={1608}
                height={554}
                className="h-auto w-full rounded-lg border border-[var(--color-ink-200)] shadow-[0_1px_0_rgba(15,15,15,0.04)]"
                loading="lazy"
              />
              <p className="mt-3 font-serif text-xs leading-[1.8] tracking-wide text-[var(--color-ink-300)]">
                Google Ads account overview, February 1 &ndash; May 11, 2026. This view closes mid-May, so it reads 479
                conversions against $11.7K spend; the table above runs through the end of May, which is why its totals
                are higher. Across the window shown: <strong>6,860 clicks</strong> at a{' '}
                <strong>$1.71 average cost per click</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE RESULTS */}
      <section className="py-16 md:py-20">
        <div className="container-max">
          <div className="mx-auto max-w-[820px] space-y-8">
            <div className="space-y-4">
              <Eyebrow>The Results</Eyebrow>
              <h2 className="font-serif text-2xl font-light leading-tight tracking-tight md:text-3xl">
                Scaling usually costs more per lead. Here it cost less.
              </h2>
              <SectionRule />
            </div>

            <div className="overflow-x-auto rounded-lg border border-[var(--color-ink-200)]">
              <table className="w-full border-collapse font-serif text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]/80">
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.15em]">Metric</th>
                    <th className="whitespace-nowrap px-4 py-3 text-right text-xs font-medium uppercase tracking-[0.15em]">
                      March
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-right text-xs font-medium uppercase tracking-[0.15em]">
                      May
                    </th>
                    <th className="whitespace-nowrap px-4 py-3 text-right text-xs font-medium uppercase tracking-[0.15em]">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {RESULTS.map((row) => (
                    <tr key={row.metric} className="border-b border-[var(--color-ink-200)] last:border-b-0">
                      <td className="px-4 py-4 align-top leading-[1.75] text-[var(--color-off-black)]">{row.metric}</td>
                      <td className="px-4 py-4 text-right align-top tabular-nums text-[var(--color-ink-300)]">
                        {row.march}
                      </td>
                      <td className="px-4 py-4 text-right align-top tabular-nums text-[var(--color-ink-300)]">
                        {row.may}
                      </td>
                      <td className="px-4 py-4 text-right align-top font-medium tabular-nums text-[var(--color-off-black)]">
                        {row.change}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-5 pt-2">
              <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                The line that matters is the last one. In March the account needed roughly 343 impressions to produce a
                conversion. By May it needed 92. The budget grew 40% and the cost per conversion still fell, which is
                the opposite of what normally happens when you scale a paid account.
              </p>
              <p className="font-serif text-base leading-[1.85] text-[var(--color-ink-300)]">
                Impressions fell 61% because we followed the experiment&rsquo;s verdict: broad meme reach was cut and
                every dollar moved into search. The meme test was worth running, it bought cheap familiarity and told
                us exactly where conversions do not come from. But the channel that produced every lead, held a
                $19.78 to $23.15 cost per conversion through every month and every budget change, was Google Search.
                Attention is a tactic. Search is the system, which is why it is the backbone of every account we
                scale.
              </p>
            </div>

            <div className="space-y-3 rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-8 shadow-[0_1px_0_rgba(15,15,15,0.04)] md:p-10">
              <Eyebrow>90 days, from a cold account</Eyebrow>
              <p className="font-serif text-2xl font-light leading-tight text-[var(--color-off-black)] md:text-3xl">
                577 conversions · $12,813.99 spend · $22.21 blended
              </p>
            </div>

            <p className="pt-2 font-serif text-xs leading-[1.8] text-[var(--color-ink-300)]">
              Figures pulled directly from the client&rsquo;s Google Ads account, February 1 &ndash; May 31, 2026.
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
