import 'server-only'
import { NextResponse } from 'next/server'
import { getAuthenticatedClient } from '@/lib/auth'
import { getClientBacklinks } from '@/lib/clientMetrics'

export async function GET(request: Request) {
  try {
    const client = await getAuthenticatedClient()

    if (!client) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const backlinks = await getClientBacklinks(client.clientId)

    return NextResponse.json({ backlinks })
  } catch (error: any) {
    console.error('Backlinks API error:', error)
    // Log the full error for debugging
    if (error.message) {
      console.error('Error message:', error.message)
    }
    if (error.statusCode) {
      console.error('Status code:', error.statusCode)
    }
    return NextResponse.json(
      { error: 'Failed to fetch backlinks. Please try again or contact support.' },
      { status: 500 }
    )
  }
}
