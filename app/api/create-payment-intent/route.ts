import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: Request) {
  try {
    const { name, email, phone } = await request.json();

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

    // Create Payment Intent for $5.00
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 500, // $5.00 in cents
      currency: 'usd',
      metadata: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        event_date: '2024-12-17',
        source: 'add-listings-landing',
      },
      description: 'Training Program - Add 1-2 Listings Per Month (December 17th, 2024)',
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error: any) {
    console.error('Payment Intent creation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}

