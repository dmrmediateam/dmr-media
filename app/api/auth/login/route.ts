import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import bcrypt from 'bcryptjs'
import { SignJWT } from 'jose'
import { cookies } from 'next/headers'

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gvyjxd5j',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    const query = `*[_type == "client" && email == $email && isActive == true][0]`
    const client = await sanityClient.fetch(query, { email })

    if (!client) {
      return NextResponse.json(
        { error: 'Invalid email or password. Please check your credentials and try again.' },
        { status: 401 }
      )
    }

    if (!client.passwordHash) {
      return NextResponse.json(
        { error: 'Account not properly configured. Please contact support.' },
        { status: 401 }
      )
    }

    const isValid = await bcrypt.compare(password, client.passwordHash)
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid email or password. Please check your credentials and try again.' },
        { status: 401 }
      )
    }

    // Use jose for Edge Runtime compatibility
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
    const token = await new SignJWT({
      clientId: client.clientId,
      email: client.email,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('7d')
      .setIssuedAt()
      .sign(secret)

    // Try to update last login (optional - won't fail if no write permissions)
    try {
      await sanityClient
        .patch(client._id)
        .set({ lastLogin: new Date().toISOString() })
        .commit()
    } catch (error) {
      // Silently fail if no write permissions - lastLogin update is optional
      console.warn('Could not update lastLogin (insufficient permissions)')
    }

    // Create response with cookie header
    const response = NextResponse.json({
      success: true,
      client: {
        name: client.name,
        email: client.email,
        studioUrl: client.studioUrl,
        clientId: client.clientId,
      }
    })

    // Set cookie on response (this is the correct way in Next.js App Router)
    response.cookies.set('client_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return response
  } catch (error: any) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    )
  }
}
