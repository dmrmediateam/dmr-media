'use client'

import { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface Metrics {
  date: string
  paidLeads: number
  organicLeads: number
  totalLeads: number
}

export default function LeadsChart({ clientId }: { clientId: string }) {
  const [data, setData] = useState<Metrics[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const res = await fetch('/api/dashboard/metrics')
        const result = await res.json()
        if (result.metrics) {
          // Reverse to show oldest to newest
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
        <h3 className="text-xl font-serif text-[var(--color-off-black)] mb-4">Leads Over Time</h3>
        <p className="text-[var(--color-ink-300)] text-sm font-sans">No data available yet</p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-[var(--color-ink-200)] p-6">
      <h3 className="text-xl font-serif text-[var(--color-off-black)] mb-6">Leads Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="date"
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis
            stroke="#6b7280"
            fontSize={12}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="paidLeads"
            stroke="#3b82f6"
            strokeWidth={2}
            name="Paid Leads"
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="organicLeads"
            stroke="#10b981"
            strokeWidth={2}
            name="Organic Leads"
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="totalLeads"
            stroke="#8b5cf6"
            strokeWidth={3}
            name="Total Leads"
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
