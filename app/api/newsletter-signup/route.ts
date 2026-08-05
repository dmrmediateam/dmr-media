import { NextResponse } from 'next/server'
import { isSpam } from '@/lib/spam-filter'

/**
 * Newsletter Signup API Route
 * Handles newsletter signup submissions from blog posts
 * Sends data to Zapier webhook
 */
export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json()

    // SPAM CHECK — runs before validation so a filtered post is indistinguishable
    // from a real one.
    const spamReasons = isSpam(body)
    if (spamReasons.length > 0) {
      console.warn('[NewsletterSignup] blocked likely spam', { reasons: spamReasons })
      return NextResponse.json(
        {
          success: true,
          message: 'Thank you for signing up!',
          filtered: true,
        },
        { status: 200 }
      )
    }

    // Validate required fields
    if (!body.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      name: body.name?.trim().substring(0, 150) || '',
      email: body.email.trim().toLowerCase().substring(0, 100),
      phone: body.phone?.trim().substring(0, 50) || '',
      timestamp: new Date().toISOString(),
      source: 'newsletter_signup',
      // Always include UTM parameters (empty string if not provided)
      utm_source: body.utm_source?.trim().substring(0, 100) || '',
      utm_medium: body.utm_medium?.trim().substring(0, 100) || '',
      utm_campaign: body.utm_campaign?.trim().substring(0, 100) || '',
      utm_term: body.utm_term?.trim().substring(0, 100) || '',
      utm_content: body.utm_content?.trim().substring(0, 100) || '',
      gclid: body.gclid?.trim().substring(0, 100) || '',
      fbclid: body.fbclid?.trim().substring(0, 100) || '',
      landing_page: body.landing_page?.trim().substring(0, 200) || '',
      first_visit: body.first_visit || '',
    }

    // Send to Zapier webhook
    const zapierWebhookUrl = process.env.ZAPIER_NEWSLETTER_WEBHOOK_URL

    if (!zapierWebhookUrl) {
      console.error('ZAPIER_NEWSLETTER_WEBHOOK_URL is not configured')
      // Still return success - don't fail the request
    } else {
      try {
        const zapierPayload = {
          name: sanitizedData.name,
          email: sanitizedData.email,
          phone: sanitizedData.phone,
          timestamp: sanitizedData.timestamp,
          source: sanitizedData.source,
          // Always include UTM parameters (even if blank)
          utm_source: sanitizedData.utm_source || '',
          utm_medium: sanitizedData.utm_medium || '',
          utm_campaign: sanitizedData.utm_campaign || '',
          utm_term: sanitizedData.utm_term || '',
          utm_content: sanitizedData.utm_content || '',
          gclid: sanitizedData.gclid || '',
          fbclid: sanitizedData.fbclid || '',
          landing_page: sanitizedData.landing_page || '',
          first_visit: sanitizedData.first_visit || '',
        }

        const zapierResponse = await fetch(zapierWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(zapierPayload),
        })

        if (!zapierResponse.ok) {
          console.error('Zapier webhook failed:', zapierResponse.statusText)
          // Don't fail the request if Zapier fails - log it but continue
        }
      } catch (zapierError) {
        console.error('Zapier webhook error (non-blocking):', zapierError)
        // Don't fail the request if Zapier fails
      }
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for signing up!',
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Newsletter signup API error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

/**
 * OPTIONS handler for CORS preflight
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
