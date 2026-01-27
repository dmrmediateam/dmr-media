import { redirect } from 'next/navigation'
import { getAuthenticatedClient } from '@/lib/auth'
import DashboardLayout from '@/components/dashboard/DashboardLayout'

export default async function SEOPage({
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
    redirect(`/dashboard/${client.clientId}/seo`)
  }

  return (
    <DashboardLayout clientName={client.name} clientId={clientId} studioUrl={client.studioUrl}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">SEO/AIO Reporting</h1>
        {/* SEO reporting content will go here */}
      </div>
    </DashboardLayout>
  )
}
