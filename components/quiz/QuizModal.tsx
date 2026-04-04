'use client'

import { useState } from 'react'

// ─── Quiz config ────────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    id: 'organic-traffic',
    qNum: 'Q1',
    label: 'Organic Traffic',
    maxPts: 20,
    question: 'How much organic traffic does your website get per month?',
    options: [
      { label: "I honestly don't know", score: 0 },
      { label: 'Under 100 visitors', score: 5 },
      { label: '100–500 visitors', score: 10 },
      { label: '500–2,000 visitors', score: 16 },
      { label: '2,000+ visitors', score: 20 },
    ],
    thresholds: { red: 5, amber: 15 },
    loom: {
      title: 'Why Your Website Is Invisible on Google — And How to Fix It',
      hook: "If your site isn't showing up on Google, you don't have a lead generation problem — you have a visibility problem. Here's the exact reason it's happening and what to do about it.",
      embed: null as string | null,
    },
  },
  {
    id: 'lead-capture',
    qNum: 'Q2',
    label: 'Lead Capture',
    maxPts: 15,
    question: 'Does your website have a lead capture form or search bar visible without scrolling?',
    options: [
      { label: 'No form at all', score: 0 },
      { label: "Yes, but it's lower on the page", score: 7 },
      { label: 'Yes, right at the top — visible immediately', score: 15 },
    ],
    thresholds: { red: 0, amber: 7 },
    loom: {
      title: 'The 5-Second Rule: Why Agents Lose Leads Before Anyone Fills Out a Form',
      hook: "Visitors decide in 5 seconds whether to stay or leave. If your lead form isn't visible in those 5 seconds, it might as well not exist. Here's what to fix and where to put it.",
      embed: null as string | null,
    },
  },
  {
    id: 'idx-integration',
    qNum: 'Q3',
    label: 'IDX Integration',
    maxPts: 15,
    question: 'When someone searches for homes on your site, where does it take them?',
    options: [
      { label: "I don't have a property search on my site", score: 0 },
      { label: 'It sends them to Zillow, Realtor.com, or the MLS', score: 5 },
      { label: 'It stays on my website the whole time', score: 15 },
    ],
    thresholds: { red: 5, amber: 5 },
    loom: {
      title: "You're Sending Your Leads to Zillow — Here's How to Stop",
      hook: "Every time a buyer searches for homes on your site and gets sent to Zillow, you just handed a warm lead to a platform that will sell it back to your competition. Here's how to keep them on your site and in your pipeline.",
      embed: null as string | null,
    },
  },
  {
    id: 'mobile-speed',
    qNum: 'Q4',
    label: 'Mobile Load Speed',
    maxPts: 15,
    question: 'How fast does your website load on a phone?',
    options: [
      { label: "I've never tested it", score: 0 },
      { label: "It's slow — over 4 seconds", score: 5 },
      { label: 'About 3–4 seconds', score: 10 },
      { label: 'Under 3 seconds', score: 15 },
    ],
    thresholds: { red: 5, amber: 10 },
    loom: {
      title: 'Your Website Is Losing Half Its Visitors Before It Even Loads',
      hook: "53% of people leave a website that takes more than 3 seconds to load. On mobile, that number is even higher. Here's how to test your site speed right now and the most common reason agent sites are slow.",
      embed: null as string | null,
    },
  },
  {
    id: 'neighborhood-pages',
    qNum: 'Q5',
    label: 'Neighborhood Pages',
    maxPts: 15,
    question: 'Do you have dedicated pages targeting specific neighborhoods, cities, or communities?',
    options: [
      { label: 'No — just a general homepage', score: 0 },
      { label: 'I have one or two', score: 7 },
      { label: 'Yes — multiple area-specific pages', score: 15 },
    ],
    thresholds: { red: 0, amber: 7 },
    loom: {
      title: 'The Page Your Website Is Missing That Costs You Listings',
      hook: "If your homepage is the only page on your site targeting your market, Google has almost nothing to rank you for. Neighborhood pages are the single most underused SEO tool in real estate. Here's what they are and how to build one in an afternoon.",
      embed: null as string | null,
    },
  },
  {
    id: 'content-blog',
    qNum: 'Q6',
    label: 'Content & Blog',
    maxPts: 10,
    question: 'How often does your website publish new content — blog posts, market updates, or community guides?',
    options: [
      { label: "Never — or I don't have a blog", score: 0 },
      { label: 'A few times a year', score: 5 },
      { label: 'Monthly or more', score: 10 },
    ],
    thresholds: { red: 0, amber: 5 },
    loom: {
      title: 'Why Google Thinks Your Real Estate Website Is Dead',
      hook: "Google ranks websites that show signs of life. If your last blog post was 8 months ago, your site is quietly losing ground to competitors who publish consistently. Here's the minimum you need to stay relevant — and it's less than you think.",
      embed: null as string | null,
    },
  },
  {
    id: 'tracking-analytics',
    qNum: 'Q7',
    label: 'Tracking & Analytics',
    maxPts: 10,
    question: 'Do you know where your website leads are coming from?',
    options: [
      { label: 'No tracking set up at all', score: 0 },
      { label: 'I have Google Analytics but never check it', score: 5 },
      { label: 'Yes — I track and review it regularly', score: 10 },
    ],
    thresholds: { red: 0, amber: 5 },
    loom: {
      title: "Flying Blind: Why Not Knowing Your Numbers Is Costing You Money",
      hook: "If you're spending money on marketing and you can't tell me which channel is generating your leads, you're flying blind. Here's how to set up basic tracking in under 20 minutes — and the one number you should actually be watching.",
      embed: null as string | null,
    },
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

type GaugeColor = 'red' | 'amber' | 'green'

function getColor(score: number, thresholds: { red: number; amber: number }): GaugeColor {
  if (score <= thresholds.red) return 'red'
  if (score <= thresholds.amber) return 'amber'
  return 'green'
}

const STROKE_COLOR: Record<GaugeColor, string> = {
  red: '#EF4444',
  amber: '#F59E0B',
  green: '#22C55E',
}

const LABEL_COLOR: Record<GaugeColor, string> = {
  red: 'text-red-600',
  amber: 'text-amber-600',
  green: 'text-green-600',
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
      copy: 'Multiple systems are either missing or underperforming. The good news: each one is fixable. The course walks you through every gauge on this dashboard.',
      cta: 'Get the Course — $297',
    }
  return {
    label: 'Starting From Zero',
    copy: "Your website isn't working for you yet — but that's exactly what this course fixes. Start here.",
    cta: 'Get the Course — $297',
  }
}

// ─── SVG semi-circle gauge ────────────────────────────────────────────────────

function GaugeArc({
  score,
  maxScore,
  color,
}: {
  score: number
  maxScore: number
  color: GaugeColor
}) {
  const r = 36
  const cx = 50
  const cy = 50
  const pathLen = Math.PI * r // ≈ 113.1
  const filled = (score / maxScore) * pathLen

  return (
    <svg viewBox="0 0 100 65" className="w-full max-w-[110px]" aria-hidden="true">
      {/* Background arc */}
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Fill arc */}
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none"
        stroke={STROKE_COLOR[color]}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={`${filled} ${pathLen}`}
        strokeDashoffset="0"
      />
      {/* Score */}
      <text
        x="50"
        y="46"
        textAnchor="middle"
        fontSize="12"
        fontFamily="Georgia, serif"
        fill="#1a1a1a"
      >
        {score}
      </text>
      <text
        x="50"
        y="57"
        textAnchor="middle"
        fontSize="8"
        fontFamily="Georgia, serif"
        fill="#9ca3af"
      >
        /{maxScore}
      </text>
    </svg>
  )
}

// ─── Progress dots ────────────────────────────────────────────────────────────

function ProgressDots({ step }: { step: number }) {
  // step 0 = URL, 1 = email, 2–8 = Q1–Q7, 9 = results
  const total = 9
  const current = Math.min(step, total)
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 rounded-full transition-all duration-300 ${
            i < current
              ? 'bg-[var(--color-off-black)] w-4'
              : i === current
              ? 'bg-[var(--color-off-black)] w-4'
              : 'bg-[var(--color-ink-200)] w-1.5'
          }`}
        />
      ))}
    </div>
  )
}

// ─── Main modal ───────────────────────────────────────────────────────────────

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [step, setStep] = useState(0)
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [email, setEmail] = useState('')
  const [answers, setAnswers] = useState<Record<string, number>>({})

  if (!isOpen) return null

  const currentQ = step >= 2 && step <= 8 ? QUESTIONS[step - 2] : null

  // Results
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0)
  const scoreRange = getScoreRange(totalScore)
  const questionScores = QUESTIONS.map((q) => ({
    ...q,
    score: answers[q.id] ?? 0,
    pct: (answers[q.id] ?? 0) / q.maxPts,
  }))
  const lowestGauge = [...questionScores].sort((a, b) => a.pct - b.pct)[0]

  const handleAnswer = (qId: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: score }))
    setStep((s) => s + 1)
  }

  const handleReset = () => {
    setStep(0)
    setWebsiteUrl('')
    setEmail('')
    setAnswers({})
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="relative bg-white w-full max-w-lg max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col">

        {/* Top bar: progress + close */}
        <div className="sticky top-0 z-10 bg-white border-b border-[var(--color-ink-200)] px-6 py-3 flex items-center justify-between gap-4">
          <ProgressDots step={step} />
          {step < 9 && (
            <span className="text-xs font-serif text-[var(--color-ink-300)] shrink-0">
              {step === 0 ? 'Step 1 of 9' : step === 1 ? 'Step 2 of 9' : `Q${step - 1} of 7`}
            </span>
          )}
          <button
            onClick={onClose}
            className="shrink-0 text-[var(--color-ink-300)] hover:text-[var(--color-off-black)] transition-colors text-xl leading-none ml-auto"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="p-8 md:p-10 flex-1">

          {/* ── Gate 1: Website URL ── */}
          {step === 0 && (
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-serif mb-3" style={{ color: '#B8925A' }}>
                  Gate 1 · Website Capture
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] leading-tight tracking-tight">
                  What&apos;s your website URL?
                </h2>
                <p className="mt-3 text-sm text-[var(--color-ink-300)] font-serif leading-relaxed">
                  We&apos;ll reference it in your results and use it to record your personalized Loom audit.
                </p>
              </div>
              <div className="space-y-3">
                <input
                  type="url"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && websiteUrl.trim()) setStep(1) }}
                  placeholder="https://yourwebsite.com"
                  className="w-full border border-[var(--color-ink-200)] px-4 py-3 font-serif text-sm text-[var(--color-off-black)] placeholder:text-[var(--color-ink-300)] focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
                  autoFocus
                />
                <button
                  onClick={() => { if (websiteUrl.trim()) setStep(1) }}
                  disabled={!websiteUrl.trim()}
                  className="w-full py-3.5 bg-[var(--color-off-black)] text-white text-xs uppercase tracking-[0.2em] font-serif hover:opacity-85 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* ── Gate 2: Email ── */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-serif mb-3" style={{ color: '#B8925A' }}>
                  Gate 2 · Email Capture
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] leading-tight tracking-tight">
                  Where should we send your results?
                </h2>
                <p className="mt-3 text-sm text-[var(--color-ink-300)] font-serif leading-relaxed">
                  Your personalized score and audit will be delivered here.
                </p>
              </div>
              <div className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && email.includes('@')) setStep(2) }}
                  placeholder="you@yourbrokerage.com"
                  className="w-full border border-[var(--color-ink-200)] px-4 py-3 font-serif text-sm text-[var(--color-off-black)] placeholder:text-[var(--color-ink-300)] focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
                  autoFocus
                />
                <button
                  onClick={() => { if (email.includes('@')) setStep(2) }}
                  disabled={!email.includes('@')}
                  className="w-full py-3.5 bg-[var(--color-off-black)] text-white text-xs uppercase tracking-[0.2em] font-serif hover:opacity-85 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Unlock My Score →
                </button>
              </div>
              <button
                onClick={() => setStep(0)}
                className="text-xs text-[var(--color-ink-300)] font-serif hover:text-[var(--color-off-black)] transition-colors"
              >
                ← Back
              </button>
            </div>
          )}

          {/* ── Q1–Q7 ── */}
          {currentQ && (
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-serif mb-3" style={{ color: '#B8925A' }}>
                  {currentQ.qNum} · {currentQ.label} · {currentQ.maxPts} pts
                </p>
                <h2 className="text-xl md:text-2xl font-serif font-light text-[var(--color-off-black)] leading-tight tracking-tight">
                  {currentQ.question}
                </h2>
              </div>
              <div className="space-y-2.5">
                {currentQ.options.map((opt) => (
                  <button
                    key={opt.score}
                    onClick={() => handleAnswer(currentQ.id, opt.score)}
                    className="w-full text-left px-5 py-4 border border-[var(--color-ink-200)] font-serif text-sm text-[var(--color-off-black)] hover:border-[var(--color-off-black)] hover:bg-[var(--surface-base,#FAFAF9)] transition-all duration-150 group"
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span>{opt.label}</span>
                      <span className="shrink-0 text-xs text-[var(--color-ink-300)] group-hover:text-[var(--color-off-black)] transition-colors tabular-nums">
                        {opt.score} pts
                      </span>
                    </span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep((s) => s - 1)}
                className="text-xs text-[var(--color-ink-300)] font-serif hover:text-[var(--color-off-black)] transition-colors"
              >
                ← Back
              </button>
            </div>
          )}

          {/* ── Results Dashboard ── */}
          {step === 9 && (
            <div className="space-y-10">

              {/* Score headline */}
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.2em] font-serif mb-3" style={{ color: '#B8925A' }}>
                  Your Website Lead Generation Score
                </p>
                <div className="text-6xl md:text-7xl font-serif font-light text-[var(--color-off-black)] leading-none mb-2">
                  {totalScore}
                  <span className="text-2xl text-[var(--color-ink-300)] align-middle ml-1">/100</span>
                </div>
                <div
                  className="inline-block mt-3 px-4 py-1 text-xs uppercase tracking-[0.2em] font-serif border"
                  style={{ borderColor: '#B8925A', color: '#B8925A' }}
                >
                  {scoreRange.label}
                </div>
                <p className="mt-4 text-sm text-[var(--color-ink-300)] font-serif leading-relaxed max-w-sm mx-auto">
                  {scoreRange.copy}
                </p>
              </div>

              {/* 7-gauge dashboard */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-serif text-[var(--color-ink-300)] mb-5">
                  Your dashboard
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {questionScores.map((q) => {
                    const color = getColor(q.score, q.thresholds)
                    const isLowest = q.id === lowestGauge.id
                    return (
                      <div
                        key={q.id}
                        className={`relative border rounded p-3 text-center transition-all ${
                          isLowest
                            ? 'border-amber-400 bg-amber-50 ring-2 ring-amber-300 ring-offset-1'
                            : 'border-[var(--color-ink-200)]'
                        }`}
                      >
                        {isLowest && (
                          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-amber-400 text-white text-[8px] uppercase tracking-[0.1em] px-2 py-0.5 rounded-full whitespace-nowrap font-serif">
                            Lever Pull
                          </div>
                        )}
                        <div className="flex justify-center">
                          <GaugeArc score={q.score} maxScore={q.maxPts} color={color} />
                        </div>
                        <p className={`text-[9px] uppercase tracking-[0.08em] font-serif leading-tight mt-0.5 ${isLowest ? 'text-amber-700' : LABEL_COLOR[color]}`}>
                          {q.label}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Highest Lever Pull */}
              <div className="border border-amber-300 bg-amber-50 p-6 space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] font-serif text-amber-700">
                  Your Highest Lever Pull Right Now
                </p>
                <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug">
                  {lowestGauge.label} — this is the single area where fixing one thing will have the biggest impact on your lead generation.
                </h3>
                <p className="text-sm font-serif text-[var(--color-ink-300)] leading-relaxed">
                  {lowestGauge.loom.hook}
                </p>
                {/* Loom embed placeholder */}
                <div className="aspect-video bg-white border border-amber-200 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-amber-300 flex items-center justify-center">
                    <span className="text-amber-400 text-lg ml-0.5">▶</span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.12em] font-serif text-[var(--color-ink-300)] text-center px-6 leading-relaxed">
                    {lowestGauge.loom.title}
                  </p>
                  <p className="text-[10px] font-serif text-[var(--color-ink-300)] opacity-60">
                    [ Insert Loom embed link here ]
                  </p>
                </div>
              </div>

              {/* Course offer */}
              <div className="border border-[var(--color-ink-200)] p-6 space-y-5">
                <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
                  Want to fix all of it?
                </p>
                <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug">
                  The DMR Website Lead Generation Course walks you through every gauge on this dashboard.
                </h3>
                <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed">
                  What it means, why it matters, and how to fix it. Built specifically for real estate agents who want more leads without guessing.
                </p>
                <div className="space-y-2.5">
                  <a
                    href="/contact"
                    className="flex items-center justify-between w-full px-5 py-4 bg-[var(--color-off-black)] text-white hover:opacity-85 transition-opacity"
                  >
                    <span className="font-serif text-sm">Course + Resources + Personalized Loom Audit</span>
                    <span className="text-sm font-serif shrink-0 ml-4">$297</span>
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center justify-between w-full px-5 py-4 border border-[var(--color-ink-200)] text-[var(--color-off-black)] hover:border-[var(--color-off-black)] transition-colors"
                  >
                    <span className="font-serif text-sm">Course + Resources (no audit)</span>
                    <span className="text-sm font-serif shrink-0 ml-4">$197</span>
                  </a>
                </div>
                <div className="pt-3 border-t border-[var(--color-ink-200)]">
                  <a
                    href="/contact"
                    className="text-xs uppercase tracking-[0.2em] font-serif text-[var(--color-off-black)] hover:opacity-60 transition-opacity"
                  >
                    {scoreRange.cta} →
                  </a>
                </div>
              </div>

              {/* Website ref + retake */}
              <div className="flex flex-col items-center gap-3 text-center">
                {websiteUrl && (
                  <p className="text-xs text-[var(--color-ink-300)] font-serif">
                    Audit for:{' '}
                    <span className="text-[var(--color-off-black)]">{websiteUrl}</span>
                  </p>
                )}
                <button
                  onClick={handleReset}
                  className="text-xs text-[var(--color-ink-300)] font-serif hover:text-[var(--color-off-black)] transition-colors underline"
                >
                  Retake quiz
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  )
}
