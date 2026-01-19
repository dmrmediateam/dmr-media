import { NextResponse } from 'next/server'
import { getAuthenticatedClient } from '@/lib/auth'
import { getClientMetrics } from '@/lib/clientMetrics'

export async function GET(request: Request) {
  try {
    const client = await getAuthenticatedClient()

    if (!client) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Get all metrics with dynamically calculated Est. Closes and Est. ROI
    // Formulas are applied on-the-fly:
    // - Est. Closes = Avg Close Rate × Total Leads
    // - Est. ROI = (Est. Closes × Commission) / (Package Price + Ad Spend) × 100
    const metrics = await getClientMetrics(client.clientId)

    return NextResponse.json({ metrics })
  } catch (error: any) {
    console.error('Metrics API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch metrics' },
      { status: 500 }
    )
  }
}
