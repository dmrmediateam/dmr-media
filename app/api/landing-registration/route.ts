import { NextResponse } from 'next/server';

/**
 * Landing Page Registration API Route
 * Handles form submissions from the Add Listings landing page
 * Sends data to Zapier webhook
 */
export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';

    // Parse request body
    const body = await request.json();

    // BOT PROTECTION: Honeypot field check
    // If the hidden "website" field is filled, it's likely a bot
    if (body.website && body.website.trim() !== '') {
      console.warn('Bot detected via honeypot field:', { ip, email: body.email });
      // Return success to bot but don't process
      return NextResponse.json(
        { success: true, message: 'Registration successful!' },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and phone are required' },
        { status: 400 }
      );
    }

    // BOT PROTECTION: Check for suspicious patterns
    const suspiciousPatterns = [
      /test@test/i,
      /example@example/i,
      /admin@/i,
      /noreply@/i,
      /^[a-z]+\d+@/i, // Pattern like user123@
    ];

    if (suspiciousPatterns.some(pattern => pattern.test(body.email))) {
      console.warn('Suspicious email pattern detected:', { ip, email: body.email });
      // Still allow but log it
    }

    // BOT PROTECTION: Check for suspiciously fast submissions
    // (This would require storing timestamps, but we'll add basic validation)
    if (body.name.length < 2 || body.name.length > 100) {
      return NextResponse.json(
        { error: 'Invalid name format' },
        { status: 400 }
      );
    }

    if (body.phone.length < 10 || body.phone.length > 20) {
      return NextResponse.json(
        { error: 'Invalid phone format' },
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

    // Send to Zapier webhook (only name, email, phone)
    const zapierWebhookUrl = process.env.ZAPIER_LANDING_WEBHOOK_URL;
    
    if (!zapierWebhookUrl) {
      console.error('ZAPIER_LANDING_WEBHOOK_URL is not configured');
      // Continue without failing the request
    } else {
      try {
      const zapierPayload = {
        name: sanitizedData.name,
        email: sanitizedData.email,
        phone: sanitizedData.phone,
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
        message: "Registration successful! We'll send you the training access details shortly.",
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

