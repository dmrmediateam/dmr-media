'use client'

import { useEffect, useState } from 'react'

interface Metrics {
  totalLeads: number
  websiteTraffic: number
  backlinks: number
  estCloses: number
}

export default function StatsBoxes({ clientId }: { clientId: string }) {
  const [stats, setStats] = useState<Metrics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/dashboard/metrics')
        const result = await res.json()
        if (result.metrics && result.metrics.length > 0) {
          const latest = result.metrics[0]
          // Use manually entered values from Sanity
          const paidLeads = Number(latest.paidLeads) || 0
          const organicLeads = Number(latest.organicLeads) || 0
          const totalLeads = Number(latest.totalLeads) || (paidLeads + organicLeads)
          
          setStats({
            totalLeads: totalLeads,
            websiteTraffic: Number(latest.websiteTraffic) || 0,
            backlinks: Number(latest.backlinks) || 0,
            estCloses: Number(latest.estCloses) || 0, // Manually entered in Sanity
          })
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [clientId])

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toLocaleString()
  }

  if (loading || !stats) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white border border-[var(--color-ink-200)] p-6">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const boxes = [
    { title: 'Total Leads', value: formatNumber(stats.totalLeads) },
    { title: 'Est. Closes', value: stats.estCloses.toFixed(1) },
    { title: 'Website Traffic', value: formatNumber(stats.websiteTraffic) },
    { title: 'Backlinks', value: formatNumber(stats.backlinks) },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {boxes.map((box) => (
        <div
          key={box.title}
          className="bg-white border border-[var(--color-ink-200)] p-6"
        >
          <div className="text-sm font-serif text-[var(--color-ink-300)] mb-2">{box.title}</div>
          <div className="text-2xl font-serif text-[var(--color-off-black)]">
            {box.value}
          </div>
        </div>
      ))}
    </div>
  )
}
