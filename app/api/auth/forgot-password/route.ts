import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import crypto from 'crypto'
import { sendPasswordResetEmail } from '@/lib/email'

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gvyjxd5j',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const query = `*[_type == "client" && email == $email && isActive == true][0]`
    const client = await sanityClient.fetch(query, { email })

    // Always return success (don't reveal if email exists)
    if (!client) {
      return NextResponse.json({ 
        success: true,
        message: 'If that email exists, a reset link has been sent.'
      })
    }

    const resetToken = crypto.randomBytes(32).toString('hex')
    const resetTokenExpiry = new Date()
    resetTokenExpiry.setHours(resetTokenExpiry.getHours() + 1) // 1 hour expiry

    // Try to update reset token (optional - won't fail if no write permissions)
    try {
      await sanityClient
        .patch(client._id)
        .set({
          resetToken,
          resetTokenExpiry: resetTokenExpiry.toISOString(),
        })
        .commit()
    } catch (error: any) {
      // If no write permissions, we can't store reset tokens
      // This means password reset won't work without proper token
      console.error('Could not save reset token (insufficient permissions):', error.message)
      return NextResponse.json(
        { error: 'Password reset unavailable. Please contact support.' },
        { status: 500 }
      )
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dmrmedia.org'
    const resetUrl = `${baseUrl}/dashboard/reset-password?token=${resetToken}&email=${encodeURIComponent(email)}`
    
    await sendPasswordResetEmail({
      to: email,
      name: client.name,
      resetUrl,
    })

    return NextResponse.json({ 
      success: true,
      message: 'If that email exists, a reset link has been sent.'
    })
  } catch (error: any) {
    console.error('Password reset error:', error)
    return NextResponse.json(
      { error: 'Failed to process reset request' },
      { status: 500 }
    )
  }
}
