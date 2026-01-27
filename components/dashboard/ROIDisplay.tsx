'use client'

import { useEffect, useState } from 'react'

export default function ROIDisplay({ clientId }: { clientId: string }) {
  const [currentROI, setCurrentROI] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchROI() {
      try {
        const res = await fetch('/api/dashboard/metrics')
        const data = await res.json()
        if (data.metrics && data.metrics.length > 0) {
          const latest = data.metrics[0]
          // Use manually entered ROI from Sanity
          const estROI = Number(latest.estROI) || 0
          setCurrentROI(estROI)
        }
      } catch (error) {
        console.error('Failed to fetch ROI:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchROI()
  }, [clientId])

  const getROIColor = () => {
    if (currentROI >= 350) return 'text-green-600'
    if (currentROI >= 100) return 'text-yellow-600'
    return 'text-red-600'
  }

  if (loading) {
    return (
      <div className="bg-white border border-[var(--color-ink-200)] p-8">
        <div className="animate-pulse">
          <div className="h-16 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-[var(--color-ink-200)] p-8">
      <h2 className="text-sm font-serif text-[var(--color-ink-300)] uppercase tracking-wide mb-4">
        Return on Investment
      </h2>
      <div className={`text-6xl font-serif font-normal ${getROIColor()}`}>
        {currentROI.toFixed(1)}%
      </div>
      <p className="text-xs text-[var(--color-ink-400)] mt-4 font-sans">
        These metrics are based on the most recent Month
      </p>
    </div>
  )
}
