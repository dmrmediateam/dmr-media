import 'server-only'
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

    const metrics = await getClientMetrics(client.clientId)

    return NextResponse.json({ metrics })
  } catch (error: any) {
    console.error('Metrics API error:', error)
    // Log the full error for debugging
    if (error.message) {
      console.error('Error message:', error.message)
    }
    if (error.statusCode) {
      console.error('Status code:', error.statusCode)
    }
    return NextResponse.json(
      { error: 'Failed to fetch metrics. Please try again or contact support.' },
      { status: 500 }
    )
  }
}
