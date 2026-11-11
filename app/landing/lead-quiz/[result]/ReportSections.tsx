'use client'

import { useState } from 'react'
import type { QuizAnswers, StageSlug } from '@/lib/landing/lead-quiz'
import { PEER_STATS, ROADMAP_90, STAGE_QUESTIONS, scorecard } from '@/lib/landing/lead-quiz-report'

/**
 * Sections of the quiz result report, laid out after Mobbin references:
 * scorecard (Mailchimp), peer stat cards (Intercom), phased plan (Wild),
 * slider calculators (Whop / Duolingo), dark closing CTA (Deel).
 */

const LABEL = 'gg-body !text-[11px] font-semibold uppercase tracking-[0.14em] !text-[var(--gg-text-muted)]'
const usd = (n: number) => `$${Math.round(n).toLocaleString('en-US')}`

/* ── Scorecard ─────────────────────────────────────────────── */

export function Scorecard({ answers, stage }: { answers: QuizAnswers; stage: StageSlug }) {
  const { items } = scorecard(answers, stage)
  const chip: Record<string, string> = {
    Strong: 'bg-[var(--color-off-black)] !text-white',
    Building: 'border border-[var(--color-off-black)] !text-[var(--color-off-black)]',
    Gap: 'bg-[#f6e3d9] !text-[#7a2e0e]',
  }
  return (
    <ul className="list-none divide-y divide-[var(--color-ink-200)] overflow-hidden rounded-3xl border border-[var(--color-ink-200)] bg-white p-0">
      {items.map((it) => (
        <li key={it.key} className="grid gap-2 px-5 py-5 sm:grid-cols-[220px_minmax(0,1fr)] sm:items-center sm:gap-6 sm:px-8">
          <div className="flex items-center justify-between gap-3 sm:justify-start">
            <p className="gg-body !text-[15px] font-semibold !text-[var(--color-off-black)]">{it.label}</p>
            <span className={`gg-body shrink-0 rounded-full px-2.5 py-1 !text-[11px] font-semibold uppercase tracking-[0.08em] ${chip[it.status]}`}>{it.status}</span>
          </div>
          <p className="gg-body !text-[15px] !leading-relaxed !text-[var(--gg-text-muted)]">{it.note}</p>
        </li>
      ))}
    </ul>
  )
}

/* ── Peer benchmarks ───────────────────────────────────────── */

export function PeerStats({ stage }: { stage: StageSlug }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {PEER_STATS[stage].stats.map((s) => (
        <div key={s.label} className="flex flex-col rounded-2xl border border-[var(--color-ink-200)] bg-white p-6">
          <p className="gg-display text-5xl font-light leading-none">{s.value}</p>
          <p className="gg-body mt-3 !text-[15px] !leading-snug !text-[var(--color-off-black)]">{s.label}</p>
          <p className="gg-body mt-auto pt-4 !text-xs !text-[var(--gg-text-muted)]">Source: {s.source}</p>
        </div>
      ))}
    </div>
  )
}

/* ── 90-day plan ───────────────────────────────────────────── */

export function Roadmap90({ stage }: { stage: StageSlug }) {
  return (
    <ol className="grid list-none gap-6 p-0 md:grid-cols-3 md:gap-5">
      {ROADMAP_90[stage].map((p, i) => (
        <li key={p.title} className="relative">
          <div className="flex items-center gap-3" aria-hidden>
            <span className={`h-3 w-3 shrink-0 ${i === 0 ? 'bg-[var(--color-off-black)]' : 'border-2 border-[var(--color-off-black)]'}`} />
            <span className="h-px flex-1 bg-[var(--color-ink-200)]" />
          </div>
          <p className={`${LABEL} mt-4`}>
            Phase {i + 1} · {p.weeks}
          </p>
          <p className="gg-display mt-1 text-2xl font-light leading-snug">{p.title}</p>
          <ul className="mt-3 list-none space-y-2 p-0">
            {p.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded border border-[var(--color-ink-300)]" aria-hidden />
                <span className="gg-body !text-[15px] !leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}

/* ── Straight answers ──────────────────────────────────────── */

export function StageQuestions({ stage }: { stage: StageSlug }) {
  return (
    <div className="divide-y divide-[var(--color-ink-200)] overflow-hidden rounded-2xl border border-[var(--color-ink-200)] bg-white">
      {STAGE_QUESTIONS[stage].map((qa, i) => (
        <details key={qa.q} className="group" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-[var(--surface-base)] sm:px-6 [&::-webkit-details-marker]:hidden">
            <span className="gg-body !text-base font-semibold !leading-snug !text-[var(--color-off-black)]">{qa.q}</span>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink-200)] text-base leading-none transition-transform group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="gg-body px-5 pb-5 !text-[15px] !leading-relaxed sm:px-6">{qa.a}</p>
        </details>
      ))}
    </div>
  )
}

/* ── Calculators ───────────────────────────────────────────── */

function Slider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string
  value: number
  display: string
  min: number
  max: number
  step: number
  onChange: (n: number) => void
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3">
        <span className="gg-body !text-sm !text-[var(--gg-text-muted)]">{label}</span>
        <span className="gg-body !text-base font-semibold !text-[var(--color-off-black)]">{display}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-[var(--color-off-black)]"
      />
    </label>
  )
}

/** Stages 2 to 4: what an ad budget should return at the agent's price point. */
export function ReturnCalculator({ startPrice, startBudget }: { startPrice: number; startBudget: number }) {
  const [price, setPrice] = useState(startPrice)
  const [commission, setCommission] = useState(2.5)
  const [budget, setBudget] = useState(startBudget)
  const [cpl, setCpl] = useState(60)
  const [close, setClose] = useState(2)

  const leadsPerMonth = budget / cpl
  const closingsPerYear = leadsPerMonth * 12 * (close / 100)
  const gci = closingsPerYear * price * (commission / 100)
  const spend = budget * 12
  const perDollar = spend ? gci / spend : 0
  const costPerClosing = closingsPerYear ? spend / closingsPerYear : 0

  return (
    <div className="grid overflow-hidden rounded-3xl border border-[var(--color-ink-200)] bg-white lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
      <div className="space-y-5 p-6 sm:p-8">
        <Slider label="Average sale price" value={price} display={usd(price)} min={200_000} max={5_000_000} step={25_000} onChange={setPrice} />
        <Slider label="Your commission" value={commission} display={`${commission.toFixed(1)}%`} min={1} max={3.5} step={0.1} onChange={setCommission} />
        <Slider label="Monthly ad budget" value={budget} display={usd(budget)} min={500} max={20_000} step={250} onChange={setBudget} />
        <Slider label="Cost per lead" value={cpl} display={usd(cpl)} min={15} max={250} step={5} onChange={setCpl} />
        <Slider label="Leads that close" value={close} display={`${close.toFixed(1)}%`} min={0.5} max={10} step={0.5} onChange={setClose} />
      </div>
      <div className="flex flex-col justify-between gap-6 bg-[var(--color-off-black)] p-6 sm:p-8">
        <div>
          <p className="gg-body !text-xs font-semibold uppercase tracking-[0.14em] !text-white/55">Commission per year</p>
          <p className="gg-display mt-2 text-6xl font-light leading-none !text-white">{usd(gci)}</p>
          <p className="gg-body mt-2 !text-sm !text-white/70">{perDollar.toFixed(1)}x back on every ad dollar</p>
        </div>
        <dl className="grid grid-cols-2 gap-4 border-t border-white/15 pt-5">
          <div>
            <dt className="gg-body !text-xs !text-white/55">Leads a month</dt>
            <dd className="gg-body mt-1 !text-lg font-semibold !text-white">{Math.round(leadsPerMonth)}</dd>
          </div>
          <div>
            <dt className="gg-body !text-xs !text-white/55">Closings a year</dt>
            <dd className="gg-body mt-1 !text-lg font-semibold !text-white">{closingsPerYear.toFixed(1)}</dd>
          </div>
          <div>
            <dt className="gg-body !text-xs !text-white/55">Ad spend a year</dt>
            <dd className="gg-body mt-1 !text-lg font-semibold !text-white">{usd(spend)}</dd>
          </div>
          <div>
            <dt className="gg-body !text-xs !text-white/55">Cost per closing</dt>
            <dd className="gg-body mt-1 !text-lg font-semibold !text-white">{costPerClosing ? usd(costPerClosing) : '–'}</dd>
          </div>
        </dl>
        <p className="gg-body !text-xs !leading-relaxed !text-white/55">
          Before your split and fees. Online leads often close months after they come in, so year one runs lower. The median cost per lead for agents
          on Google Search is about $157 (LocaliQ, 2026); a well-run account targets far less.
        </p>
      </div>
    </div>
  )
}

/** Stage 1: an income goal, turned into deals and daily conversations. */
export function ConversationCalculator({ startPrice }: { startPrice: number }) {
  const [goal, setGoal] = useState(75_000)
  const [price, setPrice] = useState(startPrice)
  const [commission, setCommission] = useState(2.5)
  const [split, setSplit] = useState(70)

  const perDeal = price * (commission / 100) * (split / 100)
  const deals = perDeal ? goal / perDeal : 0
  // A common coaching rule: about 50 conversations per closed deal, over 10 working months of 22 days.
  const perDay = (Math.ceil(deals) * 50) / 10 / 22

  return (
    <div className="grid overflow-hidden rounded-3xl border border-[var(--color-ink-200)] bg-white lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
      <div className="space-y-5 p-6 sm:p-8">
        <Slider label="Income goal this year" value={goal} display={usd(goal)} min={25_000} max={300_000} step={5_000} onChange={setGoal} />
        <Slider label="Average sale price" value={price} display={usd(price)} min={150_000} max={3_000_000} step={25_000} onChange={setPrice} />
        <Slider label="Your commission" value={commission} display={`${commission.toFixed(1)}%`} min={1} max={3.5} step={0.1} onChange={setCommission} />
        <Slider label="Your split (what you keep)" value={split} display={`${split}%`} min={40} max={100} step={5} onChange={setSplit} />
      </div>
      <div className="flex flex-col justify-between gap-6 bg-[var(--color-off-black)] p-6 sm:p-8">
        <div>
          <p className="gg-body !text-xs font-semibold uppercase tracking-[0.14em] !text-white/55">Conversations a day</p>
          <p className="gg-display mt-2 text-7xl font-light leading-none !text-white">{perDay.toFixed(1)}</p>
          <p className="gg-body mt-2 !text-sm !text-white/70">to close {Math.ceil(deals)} deals this year</p>
        </div>
        <dl className="grid grid-cols-2 gap-4 border-t border-white/15 pt-5">
          <div>
            <dt className="gg-body !text-xs !text-white/55">You keep per deal</dt>
            <dd className="gg-body mt-1 !text-lg font-semibold !text-white">{usd(perDeal)}</dd>
          </div>
          <div>
            <dt className="gg-body !text-xs !text-white/55">Deals needed</dt>
            <dd className="gg-body mt-1 !text-lg font-semibold !text-white">{Math.ceil(deals)}</dd>
          </div>
        </dl>
        <p className="gg-body !text-xs !leading-relaxed !text-white/55">
          Uses a common coaching rule of about 50 conversations per closed deal, over 10 working months. Conversations with your sphere convert best.
        </p>
      </div>
    </div>
  )
}

/* ── One section only each stage gets ──────────────────────── */

/** Stage 1: the basics, checked against what they said is already set up. */
export function FoundationChecklist({ answers }: { answers: QuizAnswers | null }) {
  const has = (v: string) => !!answers?.setup.includes(v)
  const rows = [
    { label: 'Your own website with a home-value page', done: has('website'), why: 'The first thing a referral looks up.' },
    { label: 'Google Business Profile', done: has('gbp'), why: 'Free, and it shows you on Google Maps.' },
    { label: '20+ Google reviews', done: false, why: '47% of people skip a business with fewer than 20.' },
    { label: 'Facebook and Instagram, posting weekly', done: has('social'), why: 'Keeps your sphere seeing you between deals.' },
    { label: 'Your whole database in a CRM', done: false, why: 'Your next deals are already in your phone.' },
    { label: 'A daily block for lead generation', done: false, why: 'Committed beats interested. Every day.' },
  ]
  return (
    <ul className="list-none divide-y divide-[var(--color-ink-200)] overflow-hidden rounded-2xl border border-[var(--color-ink-200)] bg-white p-0">
      {rows.map((r) => (
        <li key={r.label} className="flex items-start gap-4 px-5 py-4 sm:px-6">
          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${r.done ? 'bg-[var(--color-off-black)] !text-white' : 'border-2 border-[var(--color-ink-300)]'}`}
            aria-label={r.done ? 'Done' : 'To do'}
          >
            {r.done ? '✓' : ''}
          </span>
          <span>
            <span className="gg-body block !text-base font-semibold !leading-snug !text-[var(--color-off-black)]">{r.label}</span>
            <span className="gg-body mt-0.5 block !text-sm !text-[var(--gg-text-muted)]">{r.done ? 'You have this. Keep it current.' : r.why}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}

/** Stage 2: renting leads vs owning a source, side by side. */
export function OwnVsRent({ answers }: { answers: QuizAnswers | null }) {
  const onPortals = !!answers?.investing.includes('portals')
  const cols = [
    {
      title: 'Rented: portal leads',
      tone: 'muted',
      rows: ['Cost 15% to 40% of your commission, or a fee per connection', 'Often shared with other agents', 'The portal owns the relationship', 'Stops the day you stop paying'],
    },
    {
      title: 'Owned: Google, your site, your sphere',
      tone: 'strong',
      rows: ['You pay per lead, and the leads are only yours', 'Every lead lands in your own CRM', 'Retargeting and email keep them seeing you', 'Your reviews and pages keep working'],
    },
  ]
  return (
    <div>
      {onPortals ? (
        <p className="gg-body mb-4 !text-[15px] !leading-relaxed">You told us you invest in portals today. Keep what is profitable, and build this side next to it.</p>
      ) : null}
      <div className="grid gap-3 md:grid-cols-2">
        {cols.map((c) => (
          <div key={c.title} className={`rounded-2xl p-6 ${c.tone === 'strong' ? 'bg-[var(--color-off-black)]' : 'border border-[var(--color-ink-200)] bg-white'}`}>
            <p className={`gg-display text-2xl font-light ${c.tone === 'strong' ? '!text-white' : ''}`}>{c.title}</p>
            <ul className="mt-4 list-none space-y-2.5 p-0">
              {c.rows.map((r) => (
                <li key={r} className={`gg-body flex gap-2.5 !text-[15px] !leading-snug ${c.tone === 'strong' ? '!text-white/85' : '!text-[var(--gg-text-muted)]'}`}>
                  <span aria-hidden>{c.tone === 'strong' ? '✓' : '–'}</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Stage 3: the signs you have become the bottleneck. */
export function SwampSignals({ answers }: { answers: QuizAnswers | null }) {
  const signals = [
    { label: 'New leads wait hours for a reply', hit: answers?.difficulty === 'connecting' },
    { label: 'Listing prep crowds out lead generation', hit: answers?.team === 'solo' },
    { label: 'Deals need you to rescue them', hit: answers?.team === 'solo' || answers?.team === '2-4' },
    { label: 'Client follow-up lives in your head', hit: false },
    { label: 'You can’t say which source closed last month’s deals', hit: false },
  ]
  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
      <ul className="list-none divide-y divide-[var(--color-ink-200)] overflow-hidden rounded-2xl border border-[var(--color-ink-200)] bg-white p-0">
        {signals.map((s) => (
          <li key={s.label} className="flex items-center justify-between gap-4 px-5 py-4">
            <span className="gg-body !text-[15px] !leading-snug !text-[var(--color-off-black)]">{s.label}</span>
            {s.hit ? <span className="gg-body shrink-0 rounded-full bg-[var(--color-off-black)] px-2.5 py-1 !text-[11px] font-semibold !text-white">Likely you</span> : null}
          </li>
        ))}
      </ul>
      <div className="rounded-2xl bg-[var(--color-off-black)] p-6 sm:p-8">
        <p className="gg-display text-2xl font-light !text-white">Two or more of these?</p>
        <p className="gg-body mt-3 !text-[15px] !leading-relaxed !text-white/80">
          Then you are the constraint, not your lead flow. Fix response time and follow-up first, then hire for the biggest bottleneck. More leads before
          that just leak.
        </p>
      </div>
    </div>
  )
}

/** Stage 4: what each channel does in a brand plan. */
export function ChannelMix() {
  const channels = [
    { name: 'SEO and AI search', role: 'Own the market', body: 'Community pages, reviews, and mentions that keep you first when people search or ask AI, with no extra ad spend.' },
    { name: 'Google Ads', role: 'Capture demand now', body: 'Buyers and sellers searching this week, sent to pages that convert, tracked to the closing.' },
    { name: 'Meta Ads', role: 'Stay known', body: 'Your listings, results, and reviews in front of people who already know you, between their searches.' },
  ]
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {channels.map((c, i) => (
        <div key={c.name} className="rounded-2xl border border-[var(--color-ink-200)] bg-white p-6">
          <p className={LABEL}>0{i + 1} · {c.role}</p>
          <p className="gg-display mt-2 text-2xl font-light">{c.name}</p>
          <p className="gg-body mt-3 !text-[15px] !leading-relaxed">{c.body}</p>
        </div>
      ))}
    </div>
  )
}
