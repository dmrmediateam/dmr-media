# Stripe Checkout Integration Setup

## ✅ Implementation Complete

Stripe Checkout has been integrated into the webinar registration page (`/landing/addlistings`). Users will now be redirected to Stripe's hosted checkout page to pay $10 before completing registration.

## 📋 What Was Implemented

### Files Created/Modified

1. **`lib/stripe.ts`** - Stripe.js utility function (singleton pattern)
2. **`app/api/checkout_sessions/route.ts`** - Creates Stripe Checkout Sessions
3. **`app/api/verify-payment/route.ts`** - Verifies payment and sends to Zapier
4. **`app/landing/addlistings/page.tsx`** - Updated form to redirect to Stripe
5. **`app/landing/thank-you/page.tsx`** - Updated to verify payment on arrival

### Flow

1. User fills out registration form (name, email, phone)
2. Form submission creates a Stripe Checkout Session ($10)
3. User is redirected to Stripe's hosted checkout page
4. After successful payment, user is redirected to `/landing/thank-you?session_id={CHECKOUT_SESSION_ID}`
5. Thank-you page verifies payment and sends registration data to Zapier
6. User sees confirmation message

## 🔧 Environment Variables Required

Add these to your `.env.local` file:

```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Zapier Webhook (already configured)
ZAPIER_LANDING_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/21968997/ukf1so2/
```

### Getting Your Stripe Keys

1. **Sign up/Login to Stripe**: https://dashboard.stripe.com
2. **Get Test Keys** (for development):
   - Go to Developers → API keys
   - Copy "Publishable key" → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - Copy "Secret key" → `STRIPE_SECRET_KEY`
3. **Get Live Keys** (for production):
   - Toggle "Test mode" off in Stripe Dashboard
   - Copy the live keys
   - Update environment variables in Vercel (or your hosting platform)

## 🧪 Testing

### Test Mode

1. Use Stripe test card: `4242 4242 4242 4242`
2. Use any future expiry date (e.g., 12/25)
3. Use any 3-digit CVC
4. Use any ZIP code

### Test Flow

1. Navigate to `/landing/addlistings`
2. Fill out the registration form
3. Click "Register Now - $10"
4. You'll be redirected to Stripe Checkout
5. Complete payment with test card
6. You'll be redirected to `/landing/thank-you`
7. Registration data will be sent to Zapier

## 📝 Important Notes

- **Payment Amount**: Currently set to $10.00 (1000 cents)
- **Currency**: USD
- **Product Name**: "Webinar Registration - Add 1-2 Listings Per Month"
- **Zapier Integration**: Registration data (name, email, phone) is sent to Zapier only after successful payment
- **Cancel Handling**: If user cancels checkout, they're redirected back to the landing page with a message

## 🔄 Webhook Setup (Optional but Recommended)

For production, you should set up Stripe webhooks to handle payment events:

1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Select events: `checkout.session.completed`
4. Copy webhook signing secret to `.env.local` as `STRIPE_WEBHOOK_SECRET`

This ensures payments are verified server-side even if the user closes the browser before reaching the thank-you page.

## 🚀 Deployment

1. Add environment variables to Vercel (or your hosting platform)
2. Deploy the application
3. Test the checkout flow in production
4. Monitor Stripe Dashboard for payments

## 📚 References

- [Stripe Checkout Documentation](https://stripe.com/docs/payments/checkout)
- [Vercel Stripe Guide](https://vercel.com/kb/guide/getting-started-with-nextjs-typescript-stripe)
- [Stripe Testing](https://stripe.com/docs/testing)

