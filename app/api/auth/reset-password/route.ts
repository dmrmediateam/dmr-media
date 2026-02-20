import 'server-only'
import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import bcrypt from 'bcryptjs'

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gvyjxd5j',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

export async function POST(request: Request) {
  try {
    const { token, email, newPassword } = await request.json()

    if (!token || !email || !newPassword) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 }
      )
    }

    const query = `*[_type == "client" && email == $email && resetToken == $token && isActive == true][0]`
    const client = await sanityClient.fetch(query, { email, token })

    if (!client) {
      return NextResponse.json(
        { error: 'Invalid or expired reset token' },
        { status: 400 }
      )
    }

    if (client.resetTokenExpiry && new Date(client.resetTokenExpiry) < new Date()) {
      return NextResponse.json(
        { error: 'Reset token has expired' },
        { status: 400 }
      )
    }

    const passwordHash = await bcrypt.hash(newPassword, 10)

    // Update password
    try {
      await sanityClient
        .patch(client._id)
        .set({
          passwordHash,
          resetToken: null,
          resetTokenExpiry: null,
        })
        .commit()
    } catch (error: any) {
      console.error('Error resetting password:', error)
      // Log the full error for debugging
      if (error.message) {
        console.error('Error message:', error.message)
      }
      if (error.statusCode) {
        console.error('Status code:', error.statusCode)
      }
      return NextResponse.json(
        { error: 'Failed to reset password. Please try again or contact support.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true,
      message: 'Password reset successfully'
    })
  } catch (error: any) {
    console.error('Password reset error:', error)
    return NextResponse.json(
      { error: 'Failed to reset password' },
      { status: 500 }
    )
  }
}
