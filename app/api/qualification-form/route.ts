import { NextResponse } from 'next/server';

/**
 * Qualification Form API Route
 * Handles form submissions from the thank-you page qualification form
 * Sends data to Zapier webhook
 */
export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate required fields
    if (!body.closingsPerMonth || !body.currentMarketing || !body.leadResponseTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      email: body.email?.trim() || '',
      closingsPerMonth: body.closingsPerMonth.trim(),
      currentMarketing: body.currentMarketing.trim().substring(0, 2000),
      tools: Array.isArray(body.tools) ? body.tools : [],
      leadResponseTime: body.leadResponseTime.trim(),
      timestamp: new Date().toISOString(),
    };

    // Send to Zapier webhook
    const zapierWebhookUrl = process.env.ZAPIER_QUALIFICATION_WEBHOOK_URL;
    
    if (!zapierWebhookUrl) {
      console.error('ZAPIER_QUALIFICATION_WEBHOOK_URL is not configured');
      // Continue without failing the request
    } else {
      try {
      const zapierPayload = {
        ...sanitizedData,
        source: 'thank-you-qualification-form',
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
    console.error('Qualification form API error:', error);
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

