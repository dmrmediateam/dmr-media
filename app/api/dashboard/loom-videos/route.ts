import 'server-only'
import { NextResponse } from 'next/server'
import { getAuthenticatedClient } from '@/lib/auth'
import { createClient } from '@sanity/client'

if (!process.env.SANITY_API_TOKEN) {
  throw new Error('SANITY_API_TOKEN environment variable is not set')
}

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gvyjxd5j',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

export async function GET(request: Request) {
  try {
    const client = await getAuthenticatedClient()

    if (!client) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const clientIdParam = searchParams.get('clientId')

    // Verify the clientId matches the authenticated client
    if (clientIdParam !== client.clientId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      )
    }

    // Fetch all active Loom videos for this client
    const videos = await sanityClient.fetch(
      `*[_type == "loomVideo" && client->clientId == $clientId && isActive == true] | order(order asc, date desc) {
        _id,
        title,
        loomUrl,
        loomEmbedId,
        description,
        date,
        isActive
      }`,
      { clientId: client.clientId }
    )

    return NextResponse.json({ videos: videos || [] })
  } catch (error: any) {
    console.error('Loom videos API error:', error)
    // Log the full error for debugging
    if (error.message) {
      console.error('Error message:', error.message)
    }
    if (error.statusCode) {
      console.error('Status code:', error.statusCode)
    }
    return NextResponse.json(
      { error: 'Failed to fetch videos. Please try again or contact support.' },
      { status: 500 }
    )
  }
}
