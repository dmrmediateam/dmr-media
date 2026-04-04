'use client'

import { useState } from 'react'
import QuizModal from '@/components/quiz/QuizModal'

export default function QuizPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6 px-4">
      <div className="text-center space-y-4 max-w-md">
        <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
          Lead Generation Audit
        </p>
        <h1 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-tight">
          How Is Your Website Actually Performing?
        </h1>
        <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed">
          7 questions. 90 seconds. Get a scored dashboard showing exactly where your site is leaking leads — and what to fix first.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="mt-4 inline-flex items-center justify-center px-8 py-4 bg-[var(--color-off-black)] text-white text-xs uppercase tracking-[0.2em] font-serif hover:opacity-85 transition-opacity"
        >
          Take the Free Audit →
        </button>
      </div>

      <QuizModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  )
}
