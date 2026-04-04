'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { QUESTIONS } from '@/components/quiz/QuizModal'

// ─── Helpers ──────────────────────────────────────────────────────────────────

type GaugeColor = 'red' | 'amber' | 'green'

function getColor(score: number, t: { red: number; amber: number }): GaugeColor {
  if (score <= t.red) return 'red'
  if (score <= t.amber) return 'amber'
  return 'green'
}

function getScoreRange(s: number) {
  if (s >= 80)
    return {
      label: 'High Performer',
      copy: "You're ahead of 90% of agents online. Your digital foundation is solid — let's talk about where to optimize next.",
      cta: 'Book a Free 20-Min Website Lead Audit',
    }
  if (s >= 55)
    return {
      label: 'Needs Work',
      copy: 'You have a foundation, but clear gaps are costing you leads. The fixes are straightforward — and the upside is significant.',
      cta: 'Book a Call or Start the Course',
    }
  if (s >= 30)
    return {
      label: 'Significant Gaps',
      copy: 'Multiple systems are either missing or underperforming. Each one is fixable. The course walks you through every gauge on this dashboard.',
      cta: 'Get the Course — $297',
    }
  return {
    label: 'Starting From Zero',
    copy: "Your website isn't working for you yet — but that's exactly what this course fixes. Start here.",
    cta: 'Get the Course — $297',
  }
}

const STROKE: Record<GaugeColor, string> = {
  red: '#EF4444',
  amber: '#F59E0B',
  green: '#22C55E',
}
const LABEL_CL: Record<GaugeColor, string> = {
  red: 'text-red-500',
  amber: 'text-amber-500',
  green: 'text-green-600',
}

// ─── SVG gauge ────────────────────────────────────────────────────────────────

function GaugeArc({ score, maxScore, color }: { score: number; maxScore: number; color: GaugeColor }) {
  const r = 36; const cx = 50; const cy = 50
  const pathLen = Math.PI * r
  const filled = (score / maxScore) * pathLen
  return (
    <svg viewBox="0 0 100 65" className="w-full" aria-hidden="true">
      <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke="#E5E7EB" strokeWidth="7" strokeLinecap="round" />
      <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill="none" stroke={STROKE[color]} strokeWidth="7" strokeLinecap="round" strokeDasharray={`${filled} ${pathLen}`} />
      <text x="50" y="46" textAnchor="middle" fontSize="13" fontFamily="Georgia, serif" fill="#1a1a1a">{score}</text>
      <text x="50" y="57" textAnchor="middle" fontSize="8" fontFamily="Georgia, serif" fill="#9ca3af">/{maxScore}</text>
    </svg>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

interface QuizResults {
  websiteUrl: string
  email: string
  totalScore: number
  answers: Record<string, number>
}

export default function QuizThankYou() {
  const [results, setResults] = useState<QuizResults | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stored = sessionStorage.getItem('quizResults')
    if (stored) {
      try { setResults(JSON.parse(stored)) } catch { /* ignore */ }
    }
    setReady(true)
  }, [])

  if (!ready) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-5 h-5 border border-[var(--color-ink-200)] border-t-[var(--color-off-black)] rounded-full animate-spin" />
      </div>
    )
  }

  if (!results) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6 px-4 text-center">
        <p className="text-xs uppercase tracking-[0.2em] font-serif text-[var(--color-ink-300)]">No results found</p>
        <h1 className="text-3xl font-serif font-light text-[var(--color-off-black)]">Take the audit to see your score.</h1>
        <Link href="/quiz" className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-off-black)] text-white text-xs uppercase tracking-[0.15em] font-serif hover:opacity-85 transition-opacity border border-[var(--color-off-black)]">
          Start the Audit
        </Link>
      </div>
    )
  }

  const { websiteUrl, totalScore, answers } = results
  const scoreRange = getScoreRange(totalScore)
  const questionScores = QUESTIONS.map((q) => ({ ...q, score: answers[q.id] ?? 0, pct: (answers[q.id] ?? 0) / q.maxPts }))
  const lowestGauge = [...questionScores].sort((a, b) => a.pct - b.pct)[0]

  return (
    <div className="min-h-screen bg-white text-[var(--color-off-black)]">

      {/* ── 1. Hero: score left, video right ─────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — score */}
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-serif mb-6" style={{ color: '#B8925A' }}>
                  Your Website Lead Generation Score
                </p>
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-[clamp(5rem,12vw,8rem)] font-serif font-light text-[var(--color-off-black)] leading-none">
                    {totalScore}
                  </span>
                  <span className="text-2xl text-[var(--color-ink-300)] font-serif mb-3">/100</span>
                </div>
                <div
                  className="inline-block px-5 py-1.5 text-xs uppercase tracking-[0.2em] font-serif border mb-6"
                  style={{ borderColor: '#B8925A', color: '#B8925A' }}
                >
                  {scoreRange.label}
                </div>
                <p className="text-lg font-serif font-light text-[var(--color-ink-300)] leading-relaxed">
                  {scoreRange.copy}
                </p>
              </div>

              {websiteUrl && (
                <p className="text-xs font-serif text-[var(--color-ink-300)] border-t border-[var(--color-ink-200)] pt-5">
                  Audit for{' '}
                  <span className="text-[var(--color-off-black)]">{websiteUrl}</span>
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.12em] text-xs font-serif hover:opacity-85 transition-opacity border border-[var(--color-off-black)]"
                >
                  {scoreRange.cta}
                </a>
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center px-8 py-3 border border-[var(--color-ink-200)] text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs font-serif hover:border-[var(--color-off-black)] transition-colors"
                >
                  Retake Audit
                </Link>
              </div>
            </div>

            {/* Right — video placeholder */}
            <div className="w-full">
              <div className="aspect-video bg-[#0D0D0D] relative overflow-hidden flex flex-col items-center justify-center gap-4">
                {/* Play button */}
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors cursor-pointer">
                  <span className="text-white text-2xl ml-1">▶</span>
                </div>
                <div className="text-center px-8 space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] font-serif text-white/40">
                    Personalized Loom Audit
                  </p>
                  <p className="text-sm font-serif font-light text-white/70 leading-relaxed">
                    Your 48-hour site review is being recorded. <br className="hidden sm:block" />
                    We&apos;ll send it directly to your inbox.
                  </p>
                </div>
                {/* Corner bracket decoration */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/15" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/15" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-white/15" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/15" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.15em] font-serif text-[var(--color-ink-300)] mt-3 text-center">
                [ Replace with Loom embed when ready ]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. 7-gauge dashboard ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] font-serif text-[var(--color-ink-300)] mb-2">
              Your dashboard
            </p>
            <div className="w-16 h-[1px] bg-[var(--color-ink-200)]" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {questionScores.map((q) => {
              const color = getColor(q.score, q.thresholds)
              const isLowest = q.id === lowestGauge.id
              return (
                <div
                  key={q.id}
                  className={`relative border p-4 text-center ${
                    isLowest
                      ? 'border-amber-300 bg-amber-50'
                      : 'border-[var(--color-ink-200)]'
                  }`}
                >
                  {isLowest && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-amber-400 text-white text-[8px] uppercase tracking-[0.1em] px-2 py-0.5 whitespace-nowrap font-serif">
                      Lever Pull
                    </div>
                  )}
                  <GaugeArc score={q.score} maxScore={q.maxPts} color={color} />
                  <p className={`text-[9px] uppercase tracking-[0.08em] font-serif leading-tight mt-1 ${isLowest ? 'text-amber-700 font-medium' : LABEL_CL[color]}`}>
                    {q.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Highest lever pull — dark section ─────────────────────────── */}
      <section className="bg-[#0D0D0D] py-24 md:py-32">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — copy */}
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] font-serif text-amber-400">
                Your Highest Lever Pull Right Now
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#F5F4F0] leading-[1.15] tracking-tight">
                {lowestGauge.label}
              </h2>
              <p className="text-base font-serif font-light text-[#888] leading-relaxed">
                This is the single area where fixing one thing will have the biggest impact on your lead generation.
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="text-base font-serif font-light text-[#aaa] leading-relaxed italic">
                  &ldquo;{lowestGauge.loom.hook}&rdquo;
                </p>
              </div>
            </div>

            {/* Right — Loom video */}
            <div>
              <div className="aspect-video bg-[#1A1A1A] border border-white/10 relative overflow-hidden flex flex-col items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-white/60 text-xl ml-0.5">▶</span>
                </div>
                <div className="text-center px-8 space-y-1.5">
                  <p className="text-xs uppercase tracking-[0.15em] font-serif text-white/30">
                    Watch the fix
                  </p>
                  <p className="text-sm font-serif font-light text-white/60 leading-relaxed text-center">
                    {lowestGauge.loom.title}
                  </p>
                  <p className="text-[10px] font-serif text-white/20 pt-1">
                    [ Insert Loom embed link here ]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Course offer ───────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-b border-[var(--color-ink-200)]">
        <div className="container-max max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] font-serif mb-6" style={{ color: '#B8925A' }}>
            Want to fix all of it?
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] leading-snug tracking-tight mb-6">
            The DMR Website Lead Generation Course walks you through every gauge on this dashboard.
          </h2>
          <p className="text-lg font-serif font-light text-[var(--color-ink-300)] leading-relaxed mb-12">
            What it means, why it matters, and how to fix it. Built specifically for real estate agents who want more leads without guessing.
          </p>
          <div className="space-y-3 mb-10">
            <a
              href="/contact"
              className="flex items-center justify-between w-full px-7 py-5 bg-[var(--color-off-black)] text-white hover:opacity-85 transition-opacity"
            >
              <span className="font-serif text-base">Course + Resources + Personalized Loom Audit</span>
              <span className="font-serif text-base shrink-0 ml-6 opacity-70">$297</span>
            </a>
            <a
              href="/contact"
              className="flex items-center justify-between w-full px-7 py-5 border border-[var(--color-ink-200)] text-[var(--color-off-black)] hover:border-[var(--color-off-black)] transition-colors"
            >
              <span className="font-serif text-base">Course + Resources (no audit)</span>
              <span className="font-serif text-base shrink-0 ml-6 text-[var(--color-ink-300)]">$197</span>
            </a>
          </div>
          <div className="border-t border-[var(--color-ink-200)] pt-8">
            <a
              href="/contact"
              className="text-xs uppercase tracking-[0.2em] font-serif text-[var(--color-off-black)] hover:opacity-60 transition-opacity"
            >
              {scoreRange.cta} →
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. Dark closing CTA ───────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-24 md:py-32 text-center">
        <div className="container-max max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
            Ready to grow?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#F5F4F0] leading-[1.1] tracking-tight">
            We build the system. You close the deals.
          </h2>
          <p className="text-base text-[#888] font-serif leading-relaxed">
            One conversation. No pressure. We&apos;ll show you exactly what we&apos;d fix first.
          </p>
          <div className="pt-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#F5F4F0] text-[#0D0D0D] uppercase tracking-[0.15em] text-xs font-serif hover:opacity-85 transition-opacity"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
