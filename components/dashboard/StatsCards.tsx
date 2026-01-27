'use client'

import { useEffect, useState } from 'react'

interface Metrics {
  totalLeads: number
  websiteTraffic: number
  backlinks: number
  estCloses: number
  adSpend: number
}

export default function StatsCards({ clientId }: { clientId: string }) {
  const [stats, setStats] = useState<Metrics | null>(null)
  const [loading, setLoading] = useState(true)
  const [trends, setTrends] = useState<{
    leads: number
    traffic: number
    backlinks: number
    closes: number
  } | null>(null)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/dashboard/metrics')
        const result = await res.json()
        if (result.metrics && result.metrics.length > 0) {
          const latest = result.metrics[0]
          const previous = result.metrics[1]
          
          setStats({
            totalLeads: latest.totalLeads || 0,
            websiteTraffic: latest.websiteTraffic || 0,
            backlinks: latest.backlinks || 0,
            estCloses: latest.estCloses || 0,
            adSpend: latest.adSpend || 0,
          })

          if (previous) {
            setTrends({
              leads: latest.totalLeads - previous.totalLeads,
              traffic: latest.websiteTraffic - previous.websiteTraffic,
              backlinks: latest.backlinks - previous.backlinks,
              closes: latest.estCloses - previous.estCloses,
            })
          }
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [clientId])

  if (loading || !stats) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toLocaleString()
  }

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)
  }

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      indigo: 'text-indigo-600',
    }
    return colors[color] || 'text-gray-600'
  }

  const cards = [
    {
      title: 'Total Leads',
      value: formatNumber(stats.totalLeads),
      trend: trends?.leads,
      icon: '📊',
      color: 'blue',
    },
    {
      title: 'Website Traffic',
      value: formatNumber(stats.websiteTraffic),
      trend: trends?.traffic,
      icon: '🌐',
      color: 'green',
    },
    {
      title: 'Backlinks',
      value: formatNumber(stats.backlinks),
      trend: trends?.backlinks,
      icon: '🔗',
      color: 'purple',
    },
    {
      title: 'Est. Closes',
      value: stats.estCloses.toFixed(1),
      trend: trends?.closes,
      icon: '✅',
      color: 'indigo',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl">{card.icon}</span>
            {card.trend !== undefined && card.trend !== null && (
              <span
                className={`text-sm font-semibold ${
                  card.trend > 0
                    ? 'text-green-600'
                    : card.trend < 0
                    ? 'text-red-600'
                    : 'text-gray-500'
                }`}
              >
                {card.trend > 0 ? '+' : ''}
                {card.trend > 0 || card.trend < 0 ? card.trend.toFixed(0) : '0'}
              </span>
            )}
          </div>
          <div className="text-sm text-gray-600 mb-1">{card.title}</div>
          <div className={`text-2xl font-bold ${getColorClass(card.color)}`}>
            {card.value}
          </div>
        </div>
      ))}
    </div>
  )
}
