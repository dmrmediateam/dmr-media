'use client'

import { useEffect, useState } from 'react'

interface Metrics {
  _id: string
  date: string
  paidLeads: number
  organicLeads: number
  totalLeads: number
  backlinks: number
  drDa?: string
  websiteTraffic: number
  semrushTraffic: number
  adSpend: number
  avgHomePrice: number
  gbpRankTracking?: string
  commission: number
  packagePrice: number
  avgCloseRate: number
}

type MetricsSection = 'google-ads' | 'seo-aio' | 'sales' | 'all'

interface MetricsTableProps {
  clientId: string
  section?: MetricsSection
}

export default function MetricsTable({ clientId, section = 'all' }: MetricsTableProps) {
  const [metrics, setMetrics] = useState<Metrics[]>([])
  const [loading, setLoading] = useState(true)
  
  // Ensure section is always defined
  const currentSection: MetricsSection = section || 'all'

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const res = await fetch('/api/dashboard/metrics')
        const data = await res.json()
        if (data.metrics) {
          setMetrics(data.metrics)
        }
      } catch (error) {
        console.error('Failed to fetch metrics:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMetrics()
  }, [clientId])

  // Calculate estCloses and estROI manually based on section
  const calculateEstCloses = (metric: Metrics, sectionType: MetricsSection = currentSection): number => {
    let relevantLeads: number
    
    // Use section-specific leads for calculation
    switch (sectionType) {
      case 'google-ads':
        // For Google Ads, use only paid leads
        relevantLeads = metric.paidLeads || 0
        break
      case 'seo-aio':
        // For SEO/AIO, use only organic leads
        relevantLeads = metric.organicLeads || 0
        break
      case 'sales':
      case 'all':
      default:
        // For Sales and all/default, use total leads
        relevantLeads = metric.totalLeads || (metric.paidLeads + metric.organicLeads)
        break
    }
    
    const avgCloseRate = metric.avgCloseRate || 0
    if (avgCloseRate > 0 && relevantLeads > 0) {
      return Math.round(((avgCloseRate / 100) * relevantLeads) * 100) / 100
    }
    return 0
  }

  const calculateEstROI = (metric: Metrics, sectionType: MetricsSection = currentSection): number => {
    const estCloses = calculateEstCloses(metric, sectionType)
    const commission = metric.commission || 0
    
    let totalCost: number
    
    // For Google Ads section, ROI should be calculated based on ad spend only
    // For SEO/AIO section, use package price only (no ad spend for organic)
    // For Sales and all sections, use package price + ad spend
    if (sectionType === 'google-ads') {
      totalCost = metric.adSpend || 0
    } else if (sectionType === 'seo-aio') {
      totalCost = metric.packagePrice || 0
    } else {
      const packagePrice = metric.packagePrice || 0
      const adSpend = metric.adSpend || 0
      totalCost = packagePrice + adSpend
    }
    
    if (totalCost > 0 && commission > 0 && estCloses > 0) {
      return Math.round(((estCloses * commission) / totalCost) * 100 * 100) / 100
    }
    return 0
  }

  // Define which columns to show based on section
  const getVisibleColumns = (): string[] => {
    switch (currentSection) {
      case 'google-ads':
        // Google Ads: Show paid leads focus with ROI calculated on ad spend only
        return ['date', 'paidLeads', 'organicLeads', 'totalLeads', 'adSpend', 'estCloses', 'estROI']
      case 'seo-aio':
        // SEO/AIO: Show organic leads focus with ROI calculated on organic leads
        return ['date', 'organicLeads', 'totalLeads', 'backlinks', 'drDa', 'websiteTraffic', 'semrushTraffic', 'gbpRankTracking', 'estCloses', 'estROI']
      case 'sales':
        // Sales: Show total leads with overall ROI
        return ['date', 'paidLeads', 'organicLeads', 'totalLeads', 'estCloses', 'estROI', 'avgHomePrice']
      case 'all':
      default:
        return ['date', 'paidLeads', 'organicLeads', 'totalLeads', 'backlinks', 'drDa', 'websiteTraffic', 'semrushTraffic', 'adSpend', 'estCloses', 'estROI', 'avgHomePrice', 'gbpRankTracking']
    }
  }

  const visibleColumns = getVisibleColumns()

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const calculateChange = (current: number, previous: number) => {
    if (!previous || previous === 0) return null
    const change = ((current - previous) / previous) * 100
    return change > 0 ? `+${change.toFixed(1)}%` : `${change.toFixed(1)}%`
  }

  if (loading) {
    return (
      <div className="bg-white border border-[var(--color-ink-200)] p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-64 bg-gray-100 rounded"></div>
        </div>
      </div>
    )
  }

  if (metrics.length === 0) {
    return (
      <div className="bg-white border border-[var(--color-ink-200)] p-8">
        <h2 className="text-2xl font-serif text-[var(--color-off-black)] mb-4">Performance Metrics</h2>
        <p className="text-[var(--color-ink-300)]">No metrics data available yet.</p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-[var(--color-ink-200)] overflow-hidden">
      <div className="px-6 py-4 border-b border-[var(--color-ink-200)]">
        <h2 className="text-2xl font-serif text-[var(--color-off-black)]">Performance Metrics</h2>
        <p className="text-sm text-[var(--color-ink-300)] mt-1">Track your improvement over time</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[var(--color-ink-200)]">
          <thead className="bg-[var(--surface-base)]">
            <tr>
              {visibleColumns.includes('date') && (
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-ink-300)] uppercase tracking-wider sticky left-0 bg-[var(--surface-base)] z-10">
                  Date
                </th>
              )}
              {visibleColumns.includes('paidLeads') && (
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-ink-300)] uppercase tracking-wider">
                  Paid Leads
                </th>
              )}
              {visibleColumns.includes('organicLeads') && (
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-ink-300)] uppercase tracking-wider">
                  Organic Leads
                </th>
              )}
              {visibleColumns.includes('totalLeads') && (
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-ink-300)] uppercase tracking-wider">
                  Total Leads
                </th>
              )}
              {visibleColumns.includes('backlinks') && (
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-ink-300)] uppercase tracking-wider">
                  Backlinks
                </th>
              )}
              {visibleColumns.includes('drDa') && (
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-ink-300)] uppercase tracking-wider">
                  DR/DA
                </th>
              )}
              {visibleColumns.includes('websiteTraffic') && (
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-ink-300)] uppercase tracking-wider">
                  Website Traffic
                </th>
              )}
              {visibleColumns.includes('semrushTraffic') && (
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-ink-300)] uppercase tracking-wider">
                  SEMrush Traffic
                </th>
              )}
              {visibleColumns.includes('adSpend') && (
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-ink-300)] uppercase tracking-wider">
                  Ad Spend
                </th>
              )}
              {visibleColumns.includes('estCloses') && (
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-ink-300)] uppercase tracking-wider">
                  Est. Closes
                </th>
              )}
              {visibleColumns.includes('estROI') && (
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-ink-300)] uppercase tracking-wider">
                  Est. ROI
                </th>
              )}
              {visibleColumns.includes('avgHomePrice') && (
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-ink-300)] uppercase tracking-wider">
                  Avg. Home Price
                </th>
              )}
              {visibleColumns.includes('gbpRankTracking') && (
                <th className="px-6 py-3 text-left text-xs font-medium text-[var(--color-ink-300)] uppercase tracking-wider">
                  GBP Rank
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-[var(--color-ink-200)]">
            {metrics.map((metric, index) => {
              const previousMetric = metrics[index + 1]
              const estCloses = calculateEstCloses(metric, currentSection)
              const estROI = calculateEstROI(metric, currentSection)
              return (
                <tr key={metric._id} className="hover:bg-[var(--surface-base)]">
                  {visibleColumns.includes('date') && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--color-off-black)] sticky left-0 bg-white z-10">
                      {formatDate(metric.date)}
                    </td>
                  )}
                  {visibleColumns.includes('paidLeads') && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-off-black)]">
                      {formatNumber(metric.paidLeads)}
                      {previousMetric && (
                        <span className={`ml-2 text-xs ${
                          metric.paidLeads > previousMetric.paidLeads ? 'text-green-600' : 
                          metric.paidLeads < previousMetric.paidLeads ? 'text-red-600' : 
                          'text-gray-500'
                        }`}>
                          {calculateChange(metric.paidLeads, previousMetric.paidLeads)}
                        </span>
                      )}
                    </td>
                  )}
                  {visibleColumns.includes('organicLeads') && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-off-black)]">
                      {formatNumber(metric.organicLeads)}
                      {previousMetric && (
                        <span className={`ml-2 text-xs ${
                          metric.organicLeads > previousMetric.organicLeads ? 'text-green-600' : 
                          metric.organicLeads < previousMetric.organicLeads ? 'text-red-600' : 
                          'text-gray-500'
                        }`}>
                          {calculateChange(metric.organicLeads, previousMetric.organicLeads)}
                        </span>
                      )}
                    </td>
                  )}
                  {visibleColumns.includes('totalLeads') && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[var(--color-off-black)]">
                      {formatNumber(metric.totalLeads)}
                      {previousMetric && (
                        <span className={`ml-2 text-xs ${
                          metric.totalLeads > previousMetric.totalLeads ? 'text-green-600' : 
                          metric.totalLeads < previousMetric.totalLeads ? 'text-red-600' : 
                          'text-gray-500'
                        }`}>
                          {calculateChange(metric.totalLeads, previousMetric.totalLeads)}
                        </span>
                      )}
                    </td>
                  )}
                  {visibleColumns.includes('backlinks') && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-off-black)]">
                      {formatNumber(metric.backlinks)}
                      {previousMetric && (
                        <span className={`ml-2 text-xs ${
                          metric.backlinks > previousMetric.backlinks ? 'text-green-600' : 
                          metric.backlinks < previousMetric.backlinks ? 'text-red-600' : 
                          'text-gray-500'
                        }`}>
                          {calculateChange(metric.backlinks, previousMetric.backlinks)}
                        </span>
                      )}
                    </td>
                  )}
                  {visibleColumns.includes('drDa') && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-off-black)]">
                      {metric.drDa || '-'}
                    </td>
                  )}
                  {visibleColumns.includes('websiteTraffic') && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-off-black)]">
                      {formatNumber(metric.websiteTraffic)}
                      {previousMetric && (
                        <span className={`ml-2 text-xs ${
                          metric.websiteTraffic > previousMetric.websiteTraffic ? 'text-green-600' : 
                          metric.websiteTraffic < previousMetric.websiteTraffic ? 'text-red-600' : 
                          'text-gray-500'
                        }`}>
                          {calculateChange(metric.websiteTraffic, previousMetric.websiteTraffic)}
                        </span>
                      )}
                    </td>
                  )}
                  {visibleColumns.includes('semrushTraffic') && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-off-black)]">
                      {formatNumber(metric.semrushTraffic)}
                    </td>
                  )}
                  {visibleColumns.includes('adSpend') && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-off-black)]">
                      {formatCurrency(metric.adSpend)}
                    </td>
                  )}
                  {visibleColumns.includes('estCloses') && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[var(--color-off-black)]">
                      {estCloses.toFixed(1)}
                    </td>
                  )}
                  {visibleColumns.includes('estROI') && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[var(--color-off-black)]">
                      {estROI.toFixed(1)}%
                    </td>
                  )}
                  {visibleColumns.includes('avgHomePrice') && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-off-black)]">
                      {formatCurrency(metric.avgHomePrice)}
                    </td>
                  )}
                  {visibleColumns.includes('gbpRankTracking') && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-off-black)]">
                      {metric.gbpRankTracking || '-'}
                    </td>
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
