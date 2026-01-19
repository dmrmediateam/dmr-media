'use client'

import { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts'

interface Metrics {
  date: string
  estROI: number
}

const ROI_GOAL = 500

export default function ROIChart({ clientId }: { clientId: string }) {
  const [data, setData] = useState<Metrics[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const res = await fetch('/api/dashboard/metrics')
        const result = await res.json()
        if (result.metrics) {
          const sorted = [...result.metrics].reverse().map((m: any) => {
            // Calculate ROI manually for each metric
            const totalLeads = m.totalLeads || (m.paidLeads + m.organicLeads)
            const avgCloseRate = m.avgCloseRate || 0
            const commission = m.commission || 0
            const packagePrice = m.packagePrice || 0
            const adSpend = m.adSpend || 0
            
            // Est. Closes = Avg Close Rate × Total Leads
            const estCloses = avgCloseRate > 0 && totalLeads > 0
              ? (avgCloseRate / 100) * totalLeads
              : 0
            
            // Est. ROI = (Est. Closes × Commission) / (Package Price + Ad Spend) × 100
            const totalCost = packagePrice + adSpend
            const estROI = totalCost > 0 && commission > 0 && estCloses > 0
              ? ((estCloses * commission) / totalCost) * 100
              : 0
            
            return {
              ...m,
              date: new Date(m.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
              estROI: Math.round(estROI * 100) / 100,
            }
          })
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
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-gray-100 rounded"></div>
        </div>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">ROI Trend</h3>
        <p className="text-gray-500 text-sm">No data available yet</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">ROI Trend</h3>
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
            formatter={(value: number | undefined) => value === undefined ? '' : `${value.toFixed(1)}%`}
          />
          <ReferenceLine
            y={ROI_GOAL}
            label={{ value: 'Goal (500%)', position: 'right', fill: '#10b981' }}
            stroke="#10b981"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="estROI"
            stroke="#8b5cf6"
            strokeWidth={3}
            dot={{ r: 5 }}
            name="ROI"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
