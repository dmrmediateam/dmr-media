import { NextResponse } from 'next/server';
import { sendContactFormToZapier } from '@/lib/zapier';
import { sendContactFormEmail, type ContactFormData } from '@/lib/email';

/**
 * Contact Form API Route
 * Handles form submissions from ContactForm component
 */
export async function POST(request: Request) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();

    // Honeypot: reject if filled (bot submission)
    if (body.company_fax && body.company_fax.trim()) {
      return NextResponse.json(
        { success: true, message: 'Thank you for your message.' },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
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

    // Sanitize inputs (basic XSS prevention)
    const sanitizedData: ContactFormData = {
      name: body.name.trim().substring(0, 100),
      email: body.email.trim().toLowerCase().substring(0, 100),
      phone: body.phone?.trim().substring(0, 20) || '',
      message: body.message.trim().substring(0, 5000),
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

    // Send email via SendGrid (for contact page only) - non-blocking
    let sendGridSuccess = false;
    try {
      await sendContactFormEmail(sanitizedData);
      sendGridSuccess = true;
    } catch (emailError: any) {
      console.error('SendGrid email sending failed (non-blocking):', emailError?.message || emailError);
      // Don't fail the request if SendGrid fails - continue to Zapier
    }

    // Also send to Zapier webhook
    let zapierSuccess = false;
    const zapierWebhookUrl = process.env.ZAPIER_CONTACT_WEBHOOK_URL;
    
    if (!zapierWebhookUrl) {
      console.warn('ZAPIER_CONTACT_WEBHOOK_URL is not configured');
    } else {
    try {
      const zapierResult = await sendContactFormToZapier(sanitizedData);
        if (zapierResult.success) {
          zapierSuccess = true;
        } else {
        console.warn('Zapier webhook failed (non-blocking):', zapierResult.error);
      }
    } catch (zapierError) {
      // Zapier failures are non-blocking - log but don't fail the request
      console.warn('Zapier webhook error (non-blocking):', zapierError);
    }
    }

    // Always return success - form submission was received
    // Even if SendGrid or Zapier fail, we don't want to show an error to the user
    // The data was captured and logged
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form API error:', error);
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
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}


