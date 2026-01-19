'use client'

import { useEffect, useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface Metrics {
  date: string
  websiteTraffic: number
  semrushTraffic: number
}

export default function TrafficChart({ clientId }: { clientId: string }) {
  const [data, setData] = useState<Metrics[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const res = await fetch('/api/dashboard/metrics')
        const result = await res.json()
        if (result.metrics) {
          const sorted = [...result.metrics].reverse().map((m: any) => ({
            ...m,
            date: new Date(m.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          }))
          setData(sorted)
        }
      } catch (error) {
        console.error('Failed to fetch metrics:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMetrics()
  }, [clientId])

  if (loading) {
    return (
      <div className="bg-white border border-[var(--color-ink-200)] p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-gray-100 rounded"></div>
        </div>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="bg-white border border-[var(--color-ink-200)] p-6">
        <h3 className="text-lg font-serif text-[var(--color-off-black)] mb-4">Website Traffic</h3>
        <p className="text-[var(--color-ink-300)] text-sm">No data available yet</p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-[var(--color-ink-200)] p-6">
      <h3 className="text-lg font-serif text-[var(--color-off-black)] mb-6">Website Traffic</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSemrush" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-ink-200)" />
          <XAxis
            dataKey="date"
            stroke="var(--color-ink-300)"
            fontSize={12}
            fontFamily="var(--font-body)"
          />
          <YAxis
            stroke="var(--color-ink-300)"
            fontSize={12}
            fontFamily="var(--font-body)"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--surface-elevated)',
              border: '1px solid var(--color-ink-200)',
              borderRadius: '0',
              fontFamily: 'var(--font-body)',
              color: 'var(--color-ink-300)',
            }}
            formatter={(value: number | undefined) => value === undefined ? '' : value.toLocaleString()}
          />
          <Area
            type="monotone"
            dataKey="websiteTraffic"
            stroke="#3b82f6"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorTraffic)"
            name="Website Traffic"
          />
          <Area
            type="monotone"
            dataKey="semrushTraffic"
            stroke="#10b981"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorSemrush)"
            name="SEMrush Traffic"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
