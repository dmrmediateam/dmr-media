'use client'

import { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface Metrics {
  date: string
  adSpend: number
  totalLeads: number
}

export default function LeadsAdSpendChart({ clientId }: { clientId: string }) {
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
        <h3 className="text-lg font-serif text-[var(--color-off-black)] mb-4">Leads & Ad Spend</h3>
        <p className="text-[var(--color-ink-300)] text-sm">No data available yet</p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-[var(--color-ink-200)] p-6">
      <h3 className="text-lg font-serif text-[var(--color-off-black)] mb-6">Leads & Ad Spend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-ink-200)" />
          <XAxis
            dataKey="date"
            stroke="var(--color-ink-300)"
            fontSize={12}
            fontFamily="var(--font-body)"
          />
          <YAxis
            yAxisId="left"
            stroke="var(--color-ink-300)"
            fontSize={12}
            fontFamily="var(--font-body)"
            label={{ value: 'Leads', angle: -90, position: 'insideLeft' }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="var(--color-ink-300)"
            fontSize={12}
            fontFamily="var(--font-body)"
            label={{ value: 'Ad Spend ($)', angle: 90, position: 'insideRight' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--surface-elevated)',
              border: '1px solid var(--color-ink-200)',
              borderRadius: '0',
              fontFamily: 'var(--font-body)',
              color: 'var(--color-ink-300)',
            }}
            formatter={(value: number | undefined, name: string | undefined) => {
              if (value === undefined) return ''
              if (name === 'adSpend') {
                return `$${value.toLocaleString()}`
              }
              return value.toLocaleString()
            }}
          />
          <Legend wrapperStyle={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink-300)' }} />
          <Bar
            yAxisId="left"
            dataKey="totalLeads"
            fill="#10b981"
            name="Total Leads"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            yAxisId="right"
            dataKey="adSpend"
            fill="#3b82f6"
            name="Ad Spend"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
