import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'
import { createClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gvyjxd5j',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

export interface AuthenticatedClient {
  id: string
  name: string
  email: string
  studioUrl: string
  clientId: string
}

export async function getAuthenticatedClient(): Promise<AuthenticatedClient | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('client_token')?.value

    if (!token) {
      return null
    }

    // Use jose for Edge Runtime compatibility
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
    const { payload } = await jwtVerify(token, secret)
    const decoded = payload as {
      clientId: string
      email: string
    }

    const client = await sanityClient.fetch(
      `*[_type == "client" && clientId == $clientId && isActive == true][0]`,
      { clientId: decoded.clientId }
    )

    if (!client) {
      return null
    }

    return {
      id: client._id,
      name: client.name,
      email: client.email,
      studioUrl: client.studioUrl,
      clientId: client.clientId,
    }
  } catch (error) {
    return null
  }
}
