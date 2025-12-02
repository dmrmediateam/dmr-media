# 💳 Stripe Integration Guide for $5 Training Registration

## Overview
This guide provides three integration options for processing the $5 payment for the training registration.

---

## 🎯 **Option 1: Stripe Checkout (RECOMMENDED)**
**Best for:** Quick implementation, minimal code, maximum security

### How It Works:
1. User fills out registration form
2. Form submits to your API
3. API creates Stripe Checkout Session
4. User is redirected to Stripe's hosted payment page
5. After payment, Stripe redirects back with success/cancel
6. You send training access email

### Implementation Steps:

#### 1. Install Stripe
```bash
npm install stripe @stripe/stripe-js
```

#### 2. Add Environment Variables (.env.local)
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...  # For production webhooks
```

#### 3. Create API Route: `app/api/create-checkout-session/route.ts`
```typescript
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
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Training Program - Add 1-2 Listings Per Month',
              description: 'December 17th, 2024 Training Event',
            },
            unit_amount: 500, // $5.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/landing/addlistings?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/landing/addlistings?canceled=true`,
      customer_email: email,
      metadata: {
        name,
        email,
        phone,
        event_date: '2024-12-17',
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('Stripe Checkout error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
```

#### 4. Create Webhook Handler: `app/api/webhooks/stripe/route.ts`
```typescript
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sendContactFormEmail } from '@/lib/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  // Handle successful payment
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    // Send training access email
    await sendContactFormEmail({
      name: session.metadata?.name || 'Customer',
      email: session.customer_email || session.metadata?.email || '',
      phone: session.metadata?.phone || '',
      message: `Training registration confirmed. Session ID: ${session.id}`,
    });

    // TODO: Add to your CRM/database
    // TODO: Send training access email with login details
  }

  return NextResponse.json({ received: true });
}
```

#### 5. Update Landing Page Form Handler
```typescript
// In app/landing/addlistings/page.tsx

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Create Stripe Checkout Session
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to create checkout session');
    }

    // Redirect to Stripe Checkout
    if (data.url) {
      window.location.href = data.url;
    }
  } catch (error: any) {
    console.error('Registration error:', error);
    alert(error.message || 'Something went wrong. Please try again.');
    setIsSubmitting(false);
  }
};
```

#### 6. Handle Success/Cancel Redirects
```typescript
// Add to useEffect in landing page
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('success') === 'true') {
    setSubmitSuccess(true);
    // Clear form
    setFormData({ name: '', email: '', phone: '' });
  }
  if (params.get('canceled') === 'true') {
    alert('Payment was canceled. You can try again.');
  }
}, []);
```

---

## 🎯 **Option 2: Stripe Payment Intents (Embedded)**
**Best for:** Custom payment UI, stay on your site

### How It Works:
1. User fills form
2. Create Payment Intent on backend
3. Use Stripe Elements for card input
4. Confirm payment on frontend
5. Handle success/error

### Implementation:
- More complex, requires Stripe Elements integration
- Better UX (no redirect)
- More code to maintain

---

## 🎯 **Option 3: Stripe Link (Fastest Checkout)**
**Best for:** Returning customers, fastest checkout

### How It Works:
- Stripe remembers customer payment methods
- One-click checkout for returning customers
- New customers see full checkout

### Implementation:
- Similar to Checkout but with Link enabled
- Add `payment_method_types: ['card', 'link']` to session

---

## 📋 **Recommended Setup Checklist**

### Phase 1: Development
- [ ] Create Stripe account (test mode)
- [ ] Install Stripe packages
- [ ] Add environment variables
- [ ] Create checkout session API route
- [ ] Update form to redirect to Stripe
- [ ] Test with Stripe test cards

### Phase 2: Webhooks (Production)
- [ ] Set up Stripe webhook endpoint
- [ ] Create webhook handler API route
- [ ] Test webhook locally with Stripe CLI
- [ ] Deploy and configure webhook URL in Stripe Dashboard

### Phase 3: Email Automation
- [ ] Create training access email template
- [ ] Send email on successful payment (via webhook)
- [ ] Include login credentials/access link

### Phase 4: Production
- [ ] Switch to live Stripe keys
- [ ] Test with real payment
- [ ] Monitor webhook events
- [ ] Set up error alerts

---

## 🧪 **Testing**

### Stripe Test Cards:
- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- **3D Secure:** `4000 0025 0000 3155`

### Test Webhook Locally:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

---

## 💰 **Pricing Configuration**

Current: $5.00 (500 cents)
- Easy to change in `create-checkout-session/route.ts`
- Consider adding:
  - Early bird discount
  - Coupon codes
  - Quantity discounts

---

## 🔒 **Security Best Practices**

1. ✅ Never expose secret keys in frontend
2. ✅ Always verify webhook signatures
3. ✅ Use HTTPS in production
4. ✅ Validate all user inputs
5. ✅ Log payment events for audit trail
6. ✅ Handle failed payments gracefully

---

## 📊 **Post-Payment Flow**

After successful payment:
1. Webhook receives `checkout.session.completed`
2. Extract customer info from metadata
3. Send training access email
4. Add to CRM/database (optional)
5. Send confirmation to customer

---

## 🚀 **Quick Start (Option 1)**

1. **Install:**
   ```bash
   npm install stripe @stripe/stripe-js
   ```

2. **Add to .env.local:**
   ```env
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

3. **Create the API routes** (see above)

4. **Update form handler** (see above)

5. **Test with test card:** `4242 4242 4242 4242`

---

## 📞 **Support**

- Stripe Docs: https://stripe.com/docs
- Stripe Checkout: https://stripe.com/docs/payments/checkout
- Stripe Webhooks: https://stripe.com/docs/webhooks

