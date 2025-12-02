import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sendContactFormEmail } from '@/lib/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: Request) {
  try {
    const { paymentIntentId } = await request.json();

    if (!paymentIntentId) {
      return NextResponse.json(
        { error: 'Payment Intent ID is required' },
        { status: 400 }
      );
    }

    // Retrieve the payment intent to get customer info
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== 'succeeded') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      );
    }

    // Extract customer info from metadata
    const { name, email, phone } = paymentIntent.metadata;

    // Send confirmation email
    try {
      await sendContactFormEmail({
        name: name || 'Customer',
        email: email || '',
        phone: phone || '',
        message: `Training registration confirmed! Payment Intent ID: ${paymentIntentId}\n\nEvent Date: December 17th, 2025\n\nTraining access details will be sent separately.`,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Payment confirmed and registration complete!',
    });
  } catch (error: any) {
    console.error('Payment confirmation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to confirm payment' },
      { status: 500 }
    );
  }
}

