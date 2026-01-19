'use client'

import LeadsAdSpendChart from './LeadsAdSpendChart'
import LeadsPieChart from './LeadsPieChart'
import TrafficChart from './TrafficChart'
import OrganicLeadsChart from './OrganicLeadsChart'
import ROIChart from './ROIChart'
import MetricsTable from './MetricsTable'
import BacklinksList from './BacklinksList'

interface Services {
  googleAds: boolean
  seoAio: boolean
  isa: boolean
  salesConsulting: boolean
}

interface ServiceTrackingProps {
  clientId: string
  services: Services | null
}

export default function ServiceTracking({ clientId, services }: ServiceTrackingProps) {
  if (!services) return null

  return (
    <div className="space-y-12">
      {/* Google Ads Section */}
      {services.googleAds && (
        <section id="google-ads" className="scroll-mt-8 bg-white border border-[var(--color-ink-200)] p-8 space-y-8">
          <h2 className="text-3xl font-serif text-[var(--color-off-black)]">Google Ads Reporting</h2>
          <p className="text-[var(--color-ink-300)]">Performance of your paid advertising campaigns.</p>
          
          {/* Two charts side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LeadsAdSpendChart clientId={clientId} />
            <LeadsPieChart clientId={clientId} />
          </div>
          
          {/* Breakdown table below */}
          <div>
            <MetricsTable clientId={clientId} section="google-ads" />
          </div>
        </section>
      )}

      {/* SEO/AIO Section */}
      {services.seoAio && (
        <section id="seo-aio" className="scroll-mt-8 bg-white border border-[var(--color-ink-200)] p-8 space-y-8">
          <h2 className="text-3xl font-serif text-[var(--color-off-black)]">SEO/AIO Reporting</h2>
          <p className="text-[var(--color-ink-300)]">Organic search performance and website authority.</p>
          
          {/* Two charts side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TrafficChart clientId={clientId} />
            <OrganicLeadsChart clientId={clientId} />
          </div>
          
          {/* Breakdown table below */}
          <div>
            <MetricsTable clientId={clientId} section="seo-aio" />
          </div>
          
          {/* Backlinks below table */}
          <div>
            <BacklinksList clientId={clientId} />
          </div>
        </section>
      )}

      {/* Sales Reporting Section (ISA + Sales Consulting) */}
      {(services.isa || services.salesConsulting) && (
        <section id="sales" className="scroll-mt-8 bg-white border border-[var(--color-ink-200)] p-8 space-y-8">
          <h2 className="text-3xl font-serif text-[var(--color-off-black)]">Sales Reporting</h2>
          <p className="text-[var(--color-ink-300)]">Overview of lead conversion and sales pipeline.</p>
          
          {/* ROI Chart */}
          <div>
            <ROIChart clientId={clientId} />
          </div>
          
          {/* Breakdown table below */}
          <div>
            <MetricsTable clientId={clientId} section="sales" />
          </div>
        </section>
      )}
    </div>
  )
}
