import { NextResponse } from 'next/server';
import Stripe from 'stripe';

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-11-17.clover',
  });
}

/**
 * Verify Stripe Checkout Session and send registration to Zapier
 * POST /api/verify-payment
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sessionId } = body;

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Handle free registration (skip Stripe verification)
    if (sessionId === 'free_registration') {
      // For free registrations, data was already sent to Zapier in checkout_sessions
      // Just return success
      return NextResponse.json(
        {
          success: true,
          paid: false,
          isFree: true,
        },
        { status: 200 }
      );
    }

    // Retrieve the checkout session from Stripe
    const session = await getStripe().checkout.sessions.retrieve(sessionId);

    // Check if payment was successful
    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed', paid: false },
        { status: 400 }
      );
    }

    // Extract customer data from session metadata
    const { name, email, phone } = session.metadata || {};

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing customer information in session' },
        { status: 400 }
      );
    }

    // Send to Zapier webhook (only name, email, phone)
    const zapierWebhookUrl = process.env.ZAPIER_LANDING_WEBHOOK_URL;
    
    if (!zapierWebhookUrl) {
      console.error('ZAPIER_LANDING_WEBHOOK_URL is not configured');
      // Continue without failing the request
    } else {
      try {
      const zapierPayload = {
        name,
        email,
        phone,
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
        paid: true,
        customer: { name, email, phone },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred verifying payment' },
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

