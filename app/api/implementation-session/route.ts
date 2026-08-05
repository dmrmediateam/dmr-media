import { NextResponse } from 'next/server';
import { isSpam } from '@/lib/spam-filter';

/**
 * Implementation Session Form API Route
 * Handles form submissions from the thank-you page for Private Implementation Session
 * Sends data to Zapier webhook
 */
export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // SPAM CHECK — runs before validation so a filtered post is indistinguishable
    // from a real one. `websiteUrl` is a real field here and is never a decoy.
    const spamReasons = isSpam(body);
    if (spamReasons.length > 0) {
      console.warn('[ImplementationSession] blocked likely spam', { reasons: spamReasons });
      return NextResponse.json(
        {
          success: true,
          message: 'Thank you for your application! We\'ll review your information and get back to you soon.',
          filtered: true,
        },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!body.listingsLast12Months || !body.isFullTime || !body.activeMarket || !body.listingSituation || !body.isDecisionMaker || !body.leadResponseTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      email: body.email?.trim() || '',
      listingsLast12Months: body.listingsLast12Months.trim(),
      tools: Array.isArray(body.tools) ? body.tools : [],
      websiteUrl: body.websiteUrl?.trim() || '',
      leadResponseTime: body.leadResponseTime.trim(),
      isFullTime: body.isFullTime.trim(),
      activeMarket: body.activeMarket.trim().substring(0, 200),
      listingSituation: body.listingSituation.trim(),
      isDecisionMaker: body.isDecisionMaker.trim(),
      timestamp: new Date().toISOString(),
      // Include UTM parameters
      utm_source: body.utm_source?.trim().substring(0, 100),
      utm_medium: body.utm_medium?.trim().substring(0, 100),
      utm_campaign: body.utm_campaign?.trim().substring(0, 100),
      utm_term: body.utm_term?.trim().substring(0, 100),
      utm_content: body.utm_content?.trim().substring(0, 100),
      gclid: body.gclid?.trim().substring(0, 100),
      fbclid: body.fbclid?.trim().substring(0, 100),
      landing_page: body.landing_page?.trim().substring(0, 200),
      first_visit: body.first_visit,
    };

    // Send to Zapier webhook
    const zapierWebhookUrl = process.env.ZAPIER_IMPLEMENTATION_SESSION_WEBHOOK_URL;
    
    if (!zapierWebhookUrl) {
      console.error('ZAPIER_IMPLEMENTATION_SESSION_WEBHOOK_URL is not configured');
      // Continue without failing the request
    } else {
      try {
      const zapierPayload = {
        email: sanitizedData.email,
        listingsyear: sanitizedData.listingsLast12Months,
        tools: sanitizedData.tools,
        websiteUrl: sanitizedData.websiteUrl,
        leadResponseTime: sanitizedData.leadResponseTime,
        isFullTime: sanitizedData.isFullTime,
        activeMarket: sanitizedData.activeMarket,
        listingSituation: sanitizedData.listingSituation,
        isDecisionMaker: sanitizedData.isDecisionMaker,
        source: 'implementation-session-form',
        timestamp: sanitizedData.timestamp,
      };
      
      const zapierResponse = await fetch(zapierWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(zapierPayload),
      });

        if (!zapierResponse.ok) {
          console.error('Zapier webhook failed:', zapierResponse.statusText);
          // Don't fail the request if Zapier fails - log it but continue
        }
      } catch (zapierError) {
        console.error('Zapier webhook error (non-blocking):', zapierError);
        // Don't fail the request if Zapier fails
      }
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your application! We\'ll review your information and get back to you soon.',
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Implementation session form API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
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
  });
}
