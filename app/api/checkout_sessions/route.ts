import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-11-17.clover',
});

const CURRENCY = 'usd';
const AMOUNT = 0; // Free - $0.00

/**
 * Format amount for Stripe (convert to cents)
 */
function formatAmountForStripe(amount: number, currency: string): number {
  const numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;
  for (const part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}

/**
 * Create Stripe Checkout Session
 * POST /api/checkout_sessions
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // For free ($0) registrations, skip Stripe and return a mock session
    // The frontend will handle this by going directly to thank-you page
    if (AMOUNT === 0) {
      return NextResponse.json({ 
        id: 'free_registration',
        clientSecret: null,
        isFree: true
      }, { status: 200 });
    }

    // Get the origin for return URL (embedded checkout)
    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    // Create Checkout Session with embedded mode
    const params: Stripe.Checkout.SessionCreateParams = {
      ui_mode: 'embedded',
      submit_type: 'pay',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: CURRENCY,
            product_data: {
              name: 'Webinar Registration - Add 1-2 Listings Per Month',
              description: 'Free training event on December 17th, 2025. Complete system to add 1-2 listings every month using Google Business Profile & Chat GPT.',
            },
            unit_amount: AMOUNT,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      metadata: {
        name,
        email,
        phone,
        source: 'add-listings-landing',
        eventDate: 'December 17th, 2025',
      },
      return_url: `${origin}/landing/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    };

    const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params);

    return NextResponse.json({ 
      id: checkoutSession.id,
      clientSecret: checkoutSession.client_secret 
    }, { status: 200 });
  } catch (error: any) {
    console.error('Stripe Checkout Session creation error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred creating the checkout session' },
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

