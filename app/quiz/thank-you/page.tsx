'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { QUESTIONS } from '@/components/quiz/QuizModal'

type GaugeColor = 'red' | 'amber' | 'green'

function getColor(score: number, t: { red: number; amber: number }): GaugeColor {
  if (score <= t.red) return 'red'
  if (score <= t.amber) return 'amber'
  return 'green'
}

function getScoreRange(s: number) {
  if (s >= 80) return { label: 'High Performer', cta: 'Book a Free 20-Min Audit' }
  if (s >= 55) return { label: 'Needs Work', cta: 'Book a Call' }
  if (s >= 30) return { label: 'Significant Gaps', cta: 'Get the Course — $297' }
  return { label: 'Starting From Zero', cta: 'Get the Course — $297' }
}

const STROKE: Record<GaugeColor, string> = { red: '#EF4444', amber: '#F59E0B', green: '#22C55E' }
const LABEL_CL: Record<GaugeColor, string> = { red: 'text-red-500', amber: 'text-amber-500', green: 'text-green-600' }

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
    if (stored) { try { setResults(JSON.parse(stored)) } catch { /* ignore */ } }
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
        <h1 className="text-3xl font-serif font-light text-[var(--color-off-black)]">Take the audit to see your score.</h1>
        <Link href="/quiz" className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-off-black)] text-white text-xs uppercase tracking-[0.15em] font-serif hover:opacity-85 transition-opacity">
          Start the Audit
        </Link>
      </div>
    )
  }

  const { totalScore, answers } = results
  const scoreRange = getScoreRange(totalScore)
  const questionScores = QUESTIONS.map((q) => ({ ...q, score: answers[q.id] ?? 0, pct: (answers[q.id] ?? 0) / q.maxPts }))
  const lowestGauge = [...questionScores].sort((a, b) => a.pct - b.pct)[0]

  return (
    <div className="min-h-screen bg-white text-[var(--color-off-black)]">

      {/* ── Hero ── */}
      <section className="py-24 md:py-32 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Score */}
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-serif mb-5" style={{ color: '#B8925A' }}>
                  Your Website Lead Generation Score
                </p>
                <div className="flex items-end gap-3 mb-5">
                  <span className="text-[clamp(5rem,12vw,8rem)] font-serif font-light leading-none">
                    {totalScore}
                  </span>
                  <span className="text-2xl text-[var(--color-ink-300)] font-serif mb-3">/100</span>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
                  {scoreRange.label}
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.12em] text-xs font-serif hover:opacity-85 transition-opacity"
              >
                {scoreRange.cta}
              </a>
            </div>

            {/* Highest Lever Pull */}
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-serif mb-4 text-amber-500">
                  Your Highest Lever Pull Right Now
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-light leading-snug tracking-tight mb-3">
                  {lowestGauge.label}
                </h2>
                <p className="text-sm font-serif text-[var(--color-ink-300)] leading-relaxed mb-4">
                  This is the single area where fixing one thing will have the biggest impact on your lead generation.
                </p>
                <p className="text-sm font-serif text-[var(--color-ink-300)] leading-relaxed italic border-l-2 border-[var(--color-ink-200)] pl-4">
                  &ldquo;{lowestGauge.loom.hook}&rdquo;
                </p>
              </div>
              <div className="aspect-video bg-[#0D0D0D] relative overflow-hidden flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-white/60 text-lg ml-0.5">▶</span>
                </div>
                <p className="text-xs font-serif text-white/40 text-center px-6 leading-relaxed">
                  {lowestGauge.loom.title}
                </p>
                <p className="text-[10px] font-serif text-white/20">[ Insert Loom embed ]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dashboard ── */}
      <section className="py-20 md:py-24 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <p className="text-xs uppercase tracking-[0.2em] font-serif text-[var(--color-ink-300)] mb-8">
            Your dashboard
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {questionScores.map((q) => {
              const color = getColor(q.score, q.thresholds)
              const isLowest = q.id === lowestGauge.id
              return (
                <div
                  key={q.id}
                  className={`relative border p-4 text-center ${isLowest ? 'border-amber-300 bg-amber-50' : 'border-[var(--color-ink-200)]'}`}
                >
                  {isLowest && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-amber-400 text-white text-[8px] uppercase tracking-[0.1em] px-2 py-0.5 whitespace-nowrap font-serif">
                      Lever Pull
                    </div>
                  )}
                  <GaugeArc score={q.score} maxScore={q.maxPts} color={color} />
                  <p className={`text-[9px] uppercase tracking-[0.08em] font-serif leading-tight mt-1 ${isLowest ? 'text-amber-700' : LABEL_CL[color]}`}>
                    {q.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Course offer ── */}
      <section className="py-20 md:py-24">
        <div className="container-max max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] font-serif mb-4" style={{ color: '#B8925A' }}>
            Next step
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] leading-snug tracking-tight mb-12">
            Generate Leads from your Website
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* $297 — With Audit */}
            <div className="border border-[var(--color-off-black)] bg-[var(--color-off-black)] p-8 flex flex-col gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-serif text-white/40 mb-2">
                  Course + Personalized Audit
                </p>
                <div className="text-4xl font-serif font-light text-white">$297</div>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  'Everything in the base course',
                  'Personalized Loom audit of your site',
                  'Andrew reviews your specific website',
                  'Delivered within 48 hours',
                  'Exact fixes for your exact gaps',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-serif text-white/70 leading-relaxed">
                    <span className="mt-0.5 shrink-0 text-white/40">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="flex items-center justify-center w-full px-6 py-4 bg-white text-[var(--color-off-black)] text-xs uppercase tracking-[0.2em] font-serif hover:opacity-85 transition-opacity"
              >
                Get Course + Audit
              </a>
            </div>

            {/* $197 — Base */}
            <div className="border border-[var(--color-ink-200)] p-8 flex flex-col gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-serif text-[var(--color-ink-300)] mb-2">
                  Course + Resources
                </p>
                <div className="text-4xl font-serif font-light text-[var(--color-off-black)]">$197</div>
              </div>
              <ul className="space-y-3 flex-1">
                {[
                  'All 7 course modules — one per gauge',
                  'Fix-it guides for each weak area',
                  'Resource library & templates',
                  'Self-guided implementation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-serif text-[var(--color-ink-300)] leading-relaxed">
                    <span className="mt-0.5 shrink-0 text-[var(--color-ink-300)]">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="flex items-center justify-center w-full px-6 py-4 border border-[var(--color-off-black)] text-[var(--color-off-black)] text-xs uppercase tracking-[0.2em] font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-all duration-200"
              >
                Get the Course
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
