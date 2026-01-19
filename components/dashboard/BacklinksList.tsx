'use client'

import { useEffect, useState } from 'react'

interface Backlink {
  _id: string
  url: string
  domain: string
  anchorText?: string
  type: string
  dateAcquired?: string
  dr?: number
  da?: number
  status: string
  notes?: string
}

export default function BacklinksList({ clientId }: { clientId: string }) {
  const [backlinks, setBacklinks] = useState<Backlink[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBacklinks() {
      try {
        const res = await fetch('/api/dashboard/backlinks')
        const data = await res.json()
        if (data.backlinks) {
          setBacklinks(data.backlinks)
        }
      } catch (error) {
        console.error('Failed to fetch backlinks:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBacklinks()
  }, [clientId])

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      backlink: 'Backlink',
      citation: 'Citation',
      directory: 'Directory',
      'press-release': 'Press Release',
      'guest-post': 'Guest Post',
      other: 'Other',
    }
    return labels[type] || type
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="h-64 bg-gray-100 rounded"></div>
        </div>
      </div>
    )
  }

  if (backlinks.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Backlinks & Citations</h2>
        <p className="text-gray-500">No backlinks recorded yet.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900">Backlinks & Citations</h2>
        <p className="text-sm text-gray-500 mt-1">Total: {backlinks.length} active backlinks</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Domain
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Anchor Text
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                DR
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                DA
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Acquired
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {backlinks.map((backlink) => (
              <tr key={backlink._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={backlink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    {backlink.domain}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {getTypeLabel(backlink.type)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {backlink.anchorText || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {backlink.dr || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {backlink.da || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatDate(backlink.dateAcquired)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
