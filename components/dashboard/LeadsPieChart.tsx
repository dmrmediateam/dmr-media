'use client'

import { useEffect, useState } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts'

interface LeadsData {
  paidLeads: number
  organicLeads: number
}

export default function LeadsPieChart({ clientId }: { clientId: string }) {
  const [data, setData] = useState<LeadsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const res = await fetch('/api/dashboard/metrics')
        const result = await res.json()
        if (result.metrics && result.metrics.length > 0) {
          // Get the latest metrics
          const latest = result.metrics[0]
          setData({
            paidLeads: latest.paidLeads || 0,
            organicLeads: latest.organicLeads || 0,
          })
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

  if (!data || (data.paidLeads === 0 && data.organicLeads === 0)) {
    return (
      <div className="bg-white border border-[var(--color-ink-200)] p-6">
        <h3 className="text-lg font-serif text-[var(--color-off-black)] mb-4">Leads by Source</h3>
        <p className="text-[var(--color-ink-300)] text-sm">No data available yet</p>
      </div>
    )
  }

  const pieData = [
    { name: 'Paid Leads', value: data.paidLeads },
    { name: 'Organic Leads', value: data.organicLeads },
  ]

  const COLORS = ['#3b82f6', '#10b981']

  return (
    <div className="bg-white border border-[var(--color-ink-200)] p-6">
      <h3 className="text-lg font-serif text-[var(--color-off-black)] mb-6">Leads by Source</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
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
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
