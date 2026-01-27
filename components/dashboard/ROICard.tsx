'use client'

import { useEffect, useState } from 'react'

interface Metrics {
  estROI: number
  date: string
}

const ROI_GOAL = 500 // 5x ROI = 500%

export default function ROICard({ clientId }: { clientId: string }) {
  const [currentROI, setCurrentROI] = useState<number>(0)
  const [trend, setTrend] = useState<'up' | 'down' | 'neutral'>('neutral')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchROI() {
      try {
        const res = await fetch('/api/dashboard/metrics')
        const data = await res.json()
        if (data.metrics && data.metrics.length > 0) {
          const latest = data.metrics[0]
          const previous = data.metrics[1]
          
          setCurrentROI(latest.estROI || 0)
          
          if (previous) {
            if (latest.estROI > previous.estROI) {
              setTrend('up')
            } else if (latest.estROI < previous.estROI) {
              setTrend('down')
            } else {
              setTrend('neutral')
            }
          }
        }
      } catch (error) {
        console.error('Failed to fetch ROI:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchROI()
  }, [clientId])

  const progress = Math.min((currentROI / ROI_GOAL) * 100, 100)
  const isGoalMet = currentROI >= ROI_GOAL
  const percentageToGoal = ((currentROI / ROI_GOAL) * 100).toFixed(1)

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="h-16 bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg text-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-sm font-medium text-gray-300 uppercase tracking-wide mb-1">
            Return on Investment
          </h2>
          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-bold">
              {currentROI.toFixed(1)}%
            </span>
            {trend === 'up' && (
              <span className="text-green-400 text-lg font-semibold">↑</span>
            )}
            {trend === 'down' && (
              <span className="text-red-400 text-lg font-semibold">↓</span>
            )}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-400 mb-1">Goal</div>
          <div className="text-2xl font-semibold">{ROI_GOAL}%</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Progress to Goal</span>
          <span className="font-semibold">{percentageToGoal}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${
              isGoalMet
                ? 'bg-gradient-to-r from-green-500 to-green-400'
                : 'bg-gradient-to-r from-blue-500 to-blue-400'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Status Message */}
      <div className={`text-sm font-medium ${
        isGoalMet
          ? 'text-green-400'
          : currentROI >= ROI_GOAL * 0.8
          ? 'text-yellow-400'
          : 'text-gray-400'
      }`}>
        {isGoalMet ? (
          <span>🎉 Goal achieved! You're exceeding expectations.</span>
        ) : currentROI >= ROI_GOAL * 0.8 ? (
          <span>Almost there! {((ROI_GOAL - currentROI) / ROI_GOAL * 100).toFixed(1)}% away from goal.</span>
        ) : (
          <span>Keep optimizing! {((ROI_GOAL - currentROI) / ROI_GOAL * 100).toFixed(1)}% to reach goal.</span>
        )}
      </div>
    </div>
  )
}
