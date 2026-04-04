'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { QUESTIONS } from '@/components/quiz/QuizModal'

// ─── Types & helpers ──────────────────────────────────────────────────────────

type GaugeColor = 'red' | 'amber' | 'green'

function getColor(score: number, thresholds: { red: number; amber: number }): GaugeColor {
  if (score <= thresholds.red) return 'red'
  if (score <= thresholds.amber) return 'amber'
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
      copy: 'You have a foundation but there are clear gaps costing you leads. The fixes are straightforward — and the upside is significant.',
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

const STROKE_COLOR: Record<GaugeColor, string> = {
  red: '#EF4444',
  amber: '#F59E0B',
  green: '#22C55E',
}

const LABEL_COLOR: Record<GaugeColor, string> = {
  red: 'text-red-500',
  amber: 'text-amber-500',
  green: 'text-green-600',
}

// ─── SVG semi-circle gauge ────────────────────────────────────────────────────

function GaugeArc({ score, maxScore, color }: { score: number; maxScore: number; color: GaugeColor }) {
  const r = 36
  const cx = 50
  const cy = 50
  const pathLen = Math.PI * r
  const filled = (score / maxScore) * pathLen

  return (
    <svg viewBox="0 0 100 65" className="w-full" aria-hidden="true">
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none"
        stroke="#F3F4F6"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none"
        stroke={STROKE_COLOR[color]}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${filled} ${pathLen}`}
        strokeDashoffset="0"
      />
      <text x="50" y="46" textAnchor="middle" fontSize="13" fontFamily="Georgia, serif" fill="#1a1a1a">
        {score}
      </text>
      <text x="50" y="57" textAnchor="middle" fontSize="8" fontFamily="Georgia, serif" fill="#9ca3af">
        /{maxScore}
      </text>
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
      try {
        setResults(JSON.parse(stored))
      } catch {
        // ignore
      }
    }
    setReady(true)
  }, [])

  // Loading state
  if (!ready) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-6 h-6 border border-[var(--color-ink-200)] border-t-[var(--color-off-black)] rounded-full animate-spin" />
      </div>
    )
  }

  // No session data — graceful fallback
  if (!results) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6 px-4 text-center">
        <p className="text-xs uppercase tracking-[0.2em] font-serif text-[var(--color-ink-300)]">
          No results found
        </p>
        <h1 className="text-3xl font-serif font-light text-[var(--color-off-black)]">
          Take the audit to see your score.
        </h1>
        <Link
          href="/quiz"
          className="px-8 py-4 bg-[var(--color-off-black)] text-white text-xs uppercase tracking-[0.2em] font-serif hover:opacity-85 transition-opacity"
        >
          Start the Audit →
        </Link>
      </div>
    )
  }

  const { websiteUrl, totalScore, answers } = results
  const scoreRange = getScoreRange(totalScore)

  const questionScores = QUESTIONS.map((q) => ({
    ...q,
    score: answers[q.id] ?? 0,
    pct: (answers[q.id] ?? 0) / q.maxPts,
  }))
  const lowestGauge = [...questionScores].sort((a, b) => a.pct - b.pct)[0]

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero score ── */}
      <section className="border-b border-[var(--color-ink-200)] py-24 md:py-32">
        <div className="container-max max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] font-serif mb-6" style={{ color: '#B8925A' }}>
            Your Website Lead Generation Score
          </p>
          <div className="flex items-end gap-4 mb-8">
            <span className="text-7xl md:text-8xl lg:text-9xl font-serif font-light text-[var(--color-off-black)] leading-none">
              {totalScore}
            </span>
            <span className="text-2xl text-[var(--color-ink-300)] font-serif mb-4">/100</span>
          </div>
          <div
            className="inline-block px-5 py-1.5 text-xs uppercase tracking-[0.2em] font-serif border mb-8"
            style={{ borderColor: '#B8925A', color: '#B8925A' }}
          >
            {scoreRange.label}
          </div>
          <p className="text-lg md:text-xl font-serif font-light text-[var(--color-ink-300)] leading-relaxed max-w-xl">
            {scoreRange.copy}
          </p>
          {websiteUrl && (
            <p className="mt-6 text-xs font-serif text-[var(--color-ink-300)]">
              Audit for{' '}
              <span className="text-[var(--color-off-black)]">{websiteUrl}</span>
            </p>
          )}
        </div>
      </section>

      {/* ── 7-gauge dashboard ── */}
      <section className="py-20 md:py-28 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <p className="text-xs uppercase tracking-[0.2em] font-serif text-[var(--color-ink-300)] mb-10">
            Your dashboard
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {questionScores.map((q) => {
              const color = getColor(q.score, q.thresholds)
              const isLowest = q.id === lowestGauge.id
              return (
                <div
                  key={q.id}
                  className={`relative border p-5 text-center transition-all ${
                    isLowest
                      ? 'border-amber-300 bg-amber-50'
                      : 'border-[var(--color-ink-200)]'
                  }`}
                >
                  {isLowest && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-white text-[9px] uppercase tracking-[0.1em] px-3 py-0.5 whitespace-nowrap font-serif">
                      Highest Lever Pull
                    </div>
                  )}
                  <GaugeArc score={q.score} maxScore={q.maxPts} color={color} />
                  <p className={`text-[10px] uppercase tracking-[0.1em] font-serif leading-tight mt-2 ${isLowest ? 'text-amber-700' : LABEL_COLOR[color]}`}>
                    {q.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Highest lever pull ── */}
      <section className="py-20 md:py-28 border-b border-[var(--color-ink-200)] bg-[#FAFAF9]">
        <div className="container-max max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] font-serif mb-6 text-amber-600">
            Your Highest Lever Pull Right Now
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] leading-snug tracking-tight mb-6">
            {lowestGauge.label} — this is the single area where fixing one thing will have the biggest impact on your lead generation.
          </h2>
          <p className="text-lg font-serif text-[var(--color-ink-300)] leading-relaxed mb-12">
            {lowestGauge.loom.hook}
          </p>

          {/* Loom embed */}
          <div className="aspect-video bg-white border border-[var(--color-ink-200)] flex flex-col items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full border border-[var(--color-ink-200)] flex items-center justify-center">
              <span className="text-[var(--color-ink-300)] text-xl ml-0.5">▶</span>
            </div>
            <p className="text-sm font-serif text-[var(--color-ink-300)] text-center px-8 leading-relaxed max-w-md">
              {lowestGauge.loom.title}
            </p>
            <p className="text-xs font-serif text-[var(--color-ink-300)] opacity-50">
              [ Insert Loom embed link here ]
            </p>
          </div>
        </div>
      </section>

      {/* ── Course offer ── */}
      <section className="py-20 md:py-28 border-b border-[var(--color-ink-200)]">
        <div className="container-max max-w-3xl space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-serif mb-6" style={{ color: '#B8925A' }}>
              Want to fix all of it?
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] leading-snug tracking-tight mb-6">
              The DMR Website Lead Generation Course walks you through every gauge on this dashboard.
            </h2>
            <p className="text-lg font-serif text-[var(--color-ink-300)] leading-relaxed">
              What it means, why it matters, and how to fix it. Built specifically for real estate agents who want more leads without guessing.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="/contact"
              className="flex items-center justify-between w-full px-7 py-5 bg-[var(--color-off-black)] text-white hover:opacity-85 transition-opacity"
            >
              <span className="font-serif text-base">Course + Resources + Personalized Loom Audit</span>
              <span className="font-serif text-base shrink-0 ml-6">$297</span>
            </a>
            <a
              href="/contact"
              className="flex items-center justify-between w-full px-7 py-5 border border-[var(--color-ink-200)] text-[var(--color-off-black)] hover:border-[var(--color-off-black)] transition-colors"
            >
              <span className="font-serif text-base">Course + Resources (no audit)</span>
              <span className="font-serif text-base shrink-0 ml-6">$197</span>
            </a>
          </div>

          <div className="pt-4 border-t border-[var(--color-ink-200)]">
            <a
              href="/contact"
              className="text-sm uppercase tracking-[0.2em] font-serif text-[var(--color-off-black)] hover:opacity-60 transition-opacity"
            >
              {scoreRange.cta} →
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="py-16 text-center">
        <div className="container-max space-y-4">
          <Link
            href="/quiz"
            className="text-xs uppercase tracking-[0.2em] font-serif text-[var(--color-ink-300)] hover:text-[var(--color-off-black)] transition-colors underline"
          >
            Retake the audit
          </Link>
        </div>
      </section>

    </div>
  )
}
