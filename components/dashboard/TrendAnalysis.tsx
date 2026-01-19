'use client'

import { useEffect, useState } from 'react'

export default function TrendAnalysis({ clientId }: { clientId: string }) {
  const [insights, setInsights] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchInsights() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch('/api/dashboard/ai-insights')
        const data = await res.json()
        
        if (data.error) {
          setError(data.error)
        } else if (data.insights) {
          setInsights(data.insights)
        } else {
          setError('No insights available')
        }
      } catch (err: any) {
        console.error('Failed to fetch AI insights:', err)
        setError('Failed to load trend analysis. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchInsights()
  }, [clientId])

  if (loading) {
    return (
      <section id="trend-analysis" className="scroll-mt-8 bg-white border border-[var(--color-ink-200)] p-8">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="trend-analysis" className="scroll-mt-8 bg-white border border-[var(--color-ink-200)] p-8">
        <h2 className="text-3xl font-serif text-[var(--color-off-black)] mb-4">Month-to-Month Trend Analysis</h2>
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
          <p className="text-sm text-yellow-800">{error}</p>
        </div>
      </section>
    )
  }

  if (!insights) {
    return null
  }

  return (
    <section id="trend-analysis" className="scroll-mt-8 bg-white border border-[var(--color-ink-200)] p-8 space-y-4">
      <div>
        <h2 className="text-3xl font-serif text-[var(--color-off-black)] mb-2">Month-to-Month Trend Analysis</h2>
        <p className="text-sm text-[var(--color-ink-300)]">
          AI-powered insights based on your performance metrics (BETA)
        </p>
      </div>
      
      <div className="prose prose-sm max-w-none">
        <div className="text-[var(--color-ink-300)] leading-relaxed whitespace-pre-line">
          {insights.split('\n').map((paragraph, index) => {
            // Skip empty lines
            if (!paragraph.trim()) return null
            
            return (
              <p key={index} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            )
          })}
        </div>
      </div>
    </section>
  )
}
