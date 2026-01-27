'use client'

import { useEffect, useState } from 'react'

interface Services {
  googleAds: boolean
  seoAio: boolean
  isa: boolean
  salesConsulting: boolean
}

export default function ServicesBadge({ clientId }: { clientId: string }) {
  const [services, setServices] = useState<Services | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch('/api/dashboard/services')
        const data = await res.json()
        if (data.services) {
          setServices(data.services)
        }
      } catch (error) {
        console.error('Failed to fetch services:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [clientId])

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="flex gap-2">
            <div className="h-8 bg-gray-100 rounded w-24"></div>
            <div className="h-8 bg-gray-100 rounded w-24"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!services) {
    return null
  }

  const activeServices = []
  if (services.googleAds) activeServices.push('Google Ads')
  if (services.seoAio) activeServices.push('SEO/AIO')
  if (services.isa) activeServices.push('ISA')
  if (services.salesConsulting) activeServices.push('Sales Consulting')

  if (activeServices.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Services</h3>
        <p className="text-gray-500 text-sm">No active services</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Services</h3>
      <div className="flex flex-wrap gap-2">
        {activeServices.map((service) => (
          <span
            key={service}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  )
}
