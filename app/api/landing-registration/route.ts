import { NextResponse } from 'next/server';

/**
 * Landing Page Registration API Route
 * Handles form submissions from the Add Listings landing page
 * Sends data to Zapier webhook
 */
export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and phone are required' },
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
      source: body.source || 'add-listings-landing',
      eventDate: 'December 17th, 2025',
      timestamp: new Date().toISOString(),
    };

    // Send to Zapier webhook
    const zapierWebhookUrl = process.env.ZAPIER_LANDING_WEBHOOK_URL || 'https://hooks.zapier.com/hooks/catch/21968997/ukf1so2/';
    
    try {
      const zapierResponse = await fetch(zapierWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });

      if (!zapierResponse.ok) {
        console.error('Zapier webhook failed:', zapierResponse.statusText);
        // Don't fail the request if Zapier fails - log it but continue
      }
    } catch (zapierError) {
      console.error('Zapier webhook error (non-blocking):', zapierError);
      // Don't fail the request if Zapier fails
    }

    // Also send email notification (optional - using existing contact API)
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: sanitizedData.name,
          email: sanitizedData.email,
          phone: sanitizedData.phone,
          message: `Registration from Add Listings Landing Page - Free Training\nEvent Date: ${sanitizedData.eventDate}`,
          source: sanitizedData.source,
        }),
      });
    } catch (emailError) {
      console.error('Email notification failed (non-blocking):', emailError);
      // Don't fail the request if email fails
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful! We'll send you the training access details shortly.',
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Landing registration API error:', error);
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

