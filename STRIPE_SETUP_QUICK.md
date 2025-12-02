# 🚀 Stripe Integration - Quick Setup

## ✅ What's Been Implemented

- **Embedded payment form** (no redirects - stays on your page)
- **Card input** integrated directly into the registration form
- **$5 payment processing** for webinar registration
- **Automatic email confirmation** after successful payment

## 📋 Setup Steps

### 1. Get Stripe API Keys

1. Sign up at https://stripe.com (or log in)
2. Go to **Developers → API keys**
3. Copy your **Publishable key** (starts with `pk_test_`)
4. Copy your **Secret key** (starts with `sk_test_`)

### 2. Add to Environment Variables

Add to your `.env.local` file:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### 3. Restart Development Server

```bash
npm run dev
```

### 4. Test Payment

1. Go to `/landing/addlistings`
2. Fill out the form
3. Use test card: **4242 4242 4242 4242**
4. Any future expiry date (e.g., 12/25)
5. Any CVC (e.g., 123)

## 🎯 How It Works

1. User fills out name, email, phone
2. User enters card details (embedded Stripe Elements)
3. On submit:
   - Creates payment intent ($5.00)
   - Confirms payment with Stripe
   - Sends confirmation email
   - Shows success message

## 🔒 Security

- Card details never touch your server
- Stripe handles all PCI compliance
- Payment processing is secure and encrypted

## 📧 Email Confirmation

After successful payment, an email is automatically sent to `arohm@dmrmedia.org` with:
- Customer name, email, phone
- Payment confirmation
- Event date (December 17th, 2024)

## 🚀 Production Deployment

1. Switch to **live keys** in Stripe Dashboard
2. Update `.env.local` with live keys:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
   STRIPE_SECRET_KEY=sk_live_...
   ```
3. Add same keys to **Vercel Environment Variables**
4. Redeploy

## 🐛 Troubleshooting

**"Stripe not loaded" error:**
- Check that `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set
- Restart dev server after adding env vars

**Payment fails:**
- Check Stripe Dashboard → Payments for error details
- Verify secret key is correct
- Check browser console for errors

**Email not sending:**
- Check SendGrid configuration
- Verify `STRIPE_SECRET_KEY` is set correctly

## 📚 Files Created

- `app/api/create-payment-intent/route.ts` - Creates $5 payment
- `app/api/confirm-payment/route.ts` - Confirms payment & sends email
- Updated `app/landing/addlistings/page.tsx` - Payment form integration

