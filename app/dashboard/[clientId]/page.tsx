import { redirect } from 'next/navigation'
import { getAuthenticatedClient } from '@/lib/auth'
import { getClientServices } from '@/lib/clientMetrics'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import ROIDisplay from '@/components/dashboard/ROIDisplay'
import StatsBoxes from '@/components/dashboard/StatsBoxes'
import ServiceTracking from '@/components/dashboard/ServiceTracking'
import LoomVideoCarousel from '@/components/dashboard/LoomVideoCarousel'
import AskQuestion from '@/components/dashboard/AskQuestion'

// Force dynamic rendering - this page requires authentication and server-side data fetching
export const dynamic = 'force-dynamic'

export default async function ClientDashboard({
  params
}: {
  params: Promise<{ clientId: string }>
}) {
  const { clientId } = await params
  const client = await getAuthenticatedClient()

  if (!client) {
    redirect('/dashboard/sign-in')
  }

  if (client.clientId !== clientId) {
    redirect(`/dashboard/${client.clientId}`)
  }

  const servicesData = await getClientServices(clientId)
  
  // Serialize services data to plain object to avoid serialization issues
  const services = servicesData ? {
    googleAds: Boolean(servicesData.googleAds),
    seoAio: Boolean(servicesData.seoAio),
    isa: Boolean(servicesData.isa),
    salesConsulting: Boolean(servicesData.salesConsulting),
  } : null

  return (
    <DashboardLayout clientName={client.name} clientId={client.clientId} studioUrl={client.studioUrl}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Overview Section */}
        <section id="overview" className="scroll-mt-8">
          {/* ROI and Stats Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* ROI - Left */}
            <div className="lg:col-span-1">
              <ROIDisplay clientId={clientId} />
            </div>
            {/* Stats Boxes - Right */}
            <div className="lg:col-span-2">
              <StatsBoxes clientId={clientId} />
            </div>
          </div>
        </section>

        {/* Service Tracking Sections */}
        <ServiceTracking clientId={clientId} services={services} />

        {/* Loom Video Reports Section */}
        <LoomVideoCarousel clientId={clientId} />

        {/* Ask a Question Section */}
        <AskQuestion />
      </div>
    </DashboardLayout>
  )
}
