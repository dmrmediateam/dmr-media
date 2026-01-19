import 'server-only'
import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import crypto from 'crypto'
import { sendPasswordResetEmail } from '@/lib/email'

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

    // Update reset token
    try {
      await sanityClient
        .patch(client._id)
        .set({
          resetToken,
          resetTokenExpiry: resetTokenExpiry.toISOString(),
        })
        .commit()
    } catch (error: any) {
      console.error('Error saving reset token:', error)
      // Log the full error for debugging
      if (error.message) {
        console.error('Error message:', error.message)
      }
      if (error.statusCode) {
        console.error('Status code:', error.statusCode)
      }
      if (error.response) {
        console.error('Error response:', JSON.stringify(error.response, null, 2))
      }
      // Return a more helpful error message
      return NextResponse.json(
        { error: 'Failed to generate reset token. Please try again or contact support.' },
        { status: 500 }
      )
    }

    // Get base URL - try multiple sources for deployment compatibility
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
                    process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` :
                    'https://www.dmrmedia.org'
    
    const resetUrl = `${baseUrl}/dashboard/reset-password?token=${resetToken}&email=${encodeURIComponent(email)}`
    
    // Send email with better error handling
    try {
      await sendPasswordResetEmail({
        to: email,
        name: client.name,
        resetUrl,
      })
    } catch (emailError: any) {
      console.error('Error sending password reset email:', emailError)
      if (emailError.message) {
        console.error('Email error message:', emailError.message)
      }
      if (emailError.response?.body) {
        console.error('SendGrid response:', JSON.stringify(emailError.response.body, null, 2))
      }
      // Don't fail the request if email fails - token is already saved
      // Log it but return success to user (security best practice)
      console.warn('Password reset token saved but email failed to send')
    }

    return NextResponse.json({ 
      success: true,
      message: 'If that email exists, a reset link has been sent.'
    })
  } catch (error: any) {
    console.error('Password reset error:', error)
    // Log the full error for debugging
    if (error.message) {
      console.error('Error message:', error.message)
    }
    if (error.stack) {
      console.error('Error stack:', error.stack)
    }
    return NextResponse.json(
      { error: 'Failed to process reset request. Please try again or contact support.' },
      { status: 500 }
    )
  }
}
