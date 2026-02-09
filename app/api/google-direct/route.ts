import { NextResponse } from 'next/server';

/**
 * Google Direct Landing Page Form API Route
 * Handles form submissions from the Google Direct landing page
 * Sends data to Zapier webhook server-side to avoid CORS issues
 */
export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.website || !body.transactions2025) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, website, and transactions2025 are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: body.name.trim().substring(0, 100),
      email: body.email.trim().toLowerCase().substring(0, 100),
      phone: body.phone.trim().substring(0, 20),
      website: body.website.trim().substring(0, 200),
      transactions2025: body.transactions2025.trim().substring(0, 20),
      source: body.source || 'Google Direct Landing Page',
      timestamp: new Date().toISOString(),
    };

    // Get Zapier webhook URL from environment variable
    const zapierWebhookUrl = process.env.ZAPIER_GOOGLE_DIRECT_WEBHOOK_URL || 
                             process.env.NEXT_PUBLIC_ZAPIER_GOOGLE_DIRECT_WEBHOOK_URL ||
                             'https://hooks.zapier.com/hooks/catch/21968997/uedm61t/';
    
    console.log('Sending to Zapier webhook:', zapierWebhookUrl);
    console.log('Payload:', JSON.stringify(sanitizedData, null, 2));

    // Send to Zapier webhook server-side
    const zapierResponse = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sanitizedData),
    });

    const responseText = await zapierResponse.text();
    console.log('Zapier webhook response status:', zapierResponse.status, zapierResponse.statusText);
    console.log('Zapier webhook response body:', responseText);

    if (!zapierResponse.ok) {
      console.error('Zapier webhook failed:', {
        status: zapierResponse.status,
        statusText: zapierResponse.statusText,
        body: responseText,
      });
      // Still return success to user, but log the error
    } else {
      console.log('Zapier webhook sent successfully!');
    }

    // Always return success - form submission was received
    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully!',
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Google Direct form API error:', error);
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
