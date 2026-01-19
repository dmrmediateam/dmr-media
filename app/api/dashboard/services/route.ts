import { NextResponse } from 'next/server'
import { getAuthenticatedClient } from '@/lib/auth'
import { getClientServices } from '@/lib/clientMetrics'

export async function GET(request: Request) {
  try {
    const client = await getAuthenticatedClient()

    if (!client) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const services = await getClientServices(client.clientId)

    return NextResponse.json({ services })
  } catch (error: any) {
    console.error('Services API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    )
  }
}
