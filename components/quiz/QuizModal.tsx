'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// ─── Quiz config ─────────────────────────────────────────────────────────────

export const QUESTIONS = [
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

// ─── Modal component ──────────────────────────────────────────────────────────

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [email, setEmail] = useState('')
  const [answers, setAnswers] = useState<Record<string, number>>({})

  if (!isOpen) return null

  // step 0 = URL, 1 = email, 2–8 = Q1–Q7
  const totalSteps = 9
  const progressPct = (step / totalSteps) * 100
  const currentQ = step >= 2 && step <= 8 ? QUESTIONS[step - 2] : null

  const handleAnswer = (qId: string, score: number) => {
    const newAnswers = { ...answers, [qId]: score }
    setAnswers(newAnswers)

    if (step === 8) {
      // Last question — store results and redirect
      const totalScore = Object.values(newAnswers).reduce((a, b) => a + b, 0)
      sessionStorage.setItem(
        'quizResults',
        JSON.stringify({ websiteUrl, email, totalScore, answers: newAnswers })
      )
      router.push('/quiz/thank-you')
    } else {
      setStep((s) => s + 1)
    }
  }

  const stepLabel =
    step === 0
      ? 'Your website'
      : step === 1
      ? 'Your results'
      : `${step - 1} of 7`

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="relative bg-white w-full sm:max-w-2xl max-h-[96vh] sm:max-h-[88vh] overflow-y-auto flex flex-col shadow-2xl">

        {/* Progress bar */}
        <div className="h-[2px] bg-[var(--color-ink-200)] w-full shrink-0">
          <div
            className="h-[2px] bg-[var(--color-off-black)] transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* Header */}
        <div className="px-8 md:px-12 pt-6 pb-0 flex items-center justify-between shrink-0">
          <span className="text-xs uppercase tracking-[0.2em] font-serif text-[var(--color-ink-300)]">
            {stepLabel}
          </span>
          <button
            onClick={onClose}
            className="text-[var(--color-ink-300)] hover:text-[var(--color-off-black)] transition-colors text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="px-8 md:px-12 py-10 md:py-14 flex-1">

          {/* ── Gate 1: Website URL ── */}
          {step === 0 && (
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
                  First things first
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] leading-[1.15] tracking-tight">
                  What&apos;s your website URL?
                </h2>
                <p className="text-base text-[var(--color-ink-300)] font-serif leading-relaxed">
                  We&apos;ll use it to personalize your results and record your Loom audit.
                </p>
              </div>
              <div className="space-y-4">
                <input
                  type="url"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && websiteUrl.trim()) setStep(1) }}
                  placeholder="https://yourwebsite.com"
                  className="w-full border-b border-[var(--color-ink-200)] px-0 py-4 font-serif text-lg text-[var(--color-off-black)] placeholder:text-[var(--color-ink-300)] focus:outline-none focus:border-[var(--color-off-black)] transition-colors bg-transparent"
                  autoFocus
                />
                <button
                  onClick={() => { if (websiteUrl.trim()) setStep(1) }}
                  disabled={!websiteUrl.trim()}
                  className="w-full py-4 bg-[var(--color-off-black)] text-white text-xs uppercase tracking-[0.25em] font-serif hover:opacity-85 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed mt-2"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* ── Gate 2: Email ── */}
          {step === 1 && (
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
                  Almost there
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] leading-[1.15] tracking-tight">
                  Where should we send your results?
                </h2>
                <p className="text-base text-[var(--color-ink-300)] font-serif leading-relaxed">
                  Your personalized score and audit will be delivered here.
                </p>
              </div>
              <div className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && email.includes('@')) setStep(2) }}
                  placeholder="you@yourbrokerage.com"
                  className="w-full border-b border-[var(--color-ink-200)] px-0 py-4 font-serif text-lg text-[var(--color-off-black)] placeholder:text-[var(--color-ink-300)] focus:outline-none focus:border-[var(--color-off-black)] transition-colors bg-transparent"
                  autoFocus
                />
                <button
                  onClick={() => { if (email.includes('@')) setStep(2) }}
                  disabled={!email.includes('@')}
                  className="w-full py-4 bg-[var(--color-off-black)] text-white text-xs uppercase tracking-[0.25em] font-serif hover:opacity-85 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed mt-2"
                >
                  Unlock My Score
                </button>
              </div>
              <button
                onClick={() => setStep(0)}
                className="text-sm text-[var(--color-ink-300)] font-serif hover:text-[var(--color-off-black)] transition-colors"
              >
                ← Back
              </button>
            </div>
          )}

          {/* ── Q1–Q7 ── */}
          {currentQ && (
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
                  {currentQ.qNum} · {currentQ.label}
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] leading-[1.2] tracking-tight">
                  {currentQ.question}
                </h2>
              </div>
              <div className="divide-y divide-[var(--color-ink-200)] border-t border-b border-[var(--color-ink-200)]">
                {currentQ.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(currentQ.id, opt.score)}
                    className="w-full text-left px-0 py-5 font-serif text-base md:text-lg text-[var(--color-off-black)] hover:pl-3 hover:text-[var(--color-off-black)] transition-all duration-200 group flex items-center justify-between gap-4"
                  >
                    <span>{opt.label}</span>
                    <span className="shrink-0 text-[var(--color-ink-200)] group-hover:text-[var(--color-off-black)] transition-colors text-lg">
                      →
                    </span>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep((s) => s - 1)}
                className="text-sm text-[var(--color-ink-300)] font-serif hover:text-[var(--color-off-black)] transition-colors"
              >
                ← Back
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
