# 🚀 Complete Stripe Setup Guide - Embedded Payment (One Page)

This guide covers everything you need to set up the embedded Stripe payment integration that keeps users on your page.

---

## ✅ What's Already Implemented

- ✅ Embedded Stripe Elements card input
- ✅ Payment Intent API routes
- ✅ Payment confirmation with email
- ✅ Form integration on landing page
- ✅ All code is ready to go

**You just need to configure Stripe and add your API keys!**

---

## 📋 Step-by-Step Setup

### Step 1: Create/Login to Stripe Account

1. Go to https://stripe.com
2. Sign up for a free account (or log in if you have one)
3. Complete account verification (if required)

### Step 2: Get Your API Keys

1. In Stripe Dashboard, go to **Developers → API keys**
2. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` for testing)
   - **Secret key** (starts with `sk_test_` for testing)

3. **For Testing:**
   - Use the test mode keys (toggle in top right should say "Test mode")
   - Copy both keys

4. **For Production:**
   - Switch to "Live mode" (toggle in top right)
   - Copy the live keys (start with `pk_live_` and `sk_live_`)

### Step 3: Add Environment Variables

Create or update your `.env.local` file in the project root:

```env
# Stripe Payment Processing
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51...
STRIPE_SECRET_KEY=sk_test_51...
```

**Important:**
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Safe to expose (used in frontend)
- `STRIPE_SECRET_KEY` - **NEVER expose this** (backend only)

### Step 4: Restart Development Server

After adding environment variables:

```bash
npm run dev
```

### Step 5: Test the Payment

1. Navigate to: `http://localhost:3000/landing/addlistings`
2. Fill out the registration form:
   - Name: Test User
   - Email: test@example.com
   - Phone: (555) 123-4567
3. Enter test card details:
   - **Card Number:** `4242 4242 4242 4242`
   - **Expiry:** Any future date (e.g., `12/25`)
   - **CVC:** Any 3 digits (e.g., `123`)
   - **ZIP:** Any 5 digits (e.g., `12345`)
4. Click "Register Now - $5"
5. Payment should process successfully!

---

## 🧪 Test Cards

Stripe provides several test cards for different scenarios:

### Success Cards
- **Basic:** `4242 4242 4242 4242`
- **Visa:** `4242 4242 4242 4242`
- **Mastercard:** `5555 5555 5555 4444`
- **American Express:** `3782 822463 10005`

### Decline Cards
- **Generic Decline:** `4000 0000 0000 0002`
- **Insufficient Funds:** `4000 0000 0000 9995`
- **Lost Card:** `4000 0000 0000 9987`
- **Stolen Card:** `4000 0000 0000 9979`

### 3D Secure (Requires Authentication)
- **Requires Authentication:** `4000 0025 0000 3155`
- **Authentication Fails:** `4000 0027 6000 3184`

**For all test cards:**
- Use any future expiry date
- Use any 3-digit CVC
- Use any ZIP code

---

## 🔍 Verify Setup

### Check 1: Environment Variables Loaded

1. Open browser console (F12)
2. Go to `/landing/addlistings`
3. Check for any Stripe-related errors
4. If you see "Stripe not loaded", your publishable key isn't set correctly

### Check 2: Payment Intent Creation

1. Fill out form and submit
2. Open browser Network tab (F12 → Network)
3. Look for request to `/api/create-payment-intent`
4. Should return `200 OK` with `clientSecret`

### Check 3: Stripe Dashboard

1. Go to Stripe Dashboard → **Payments**
2. You should see test payments appear
3. Click on a payment to see full details

---

## 🚀 Production Deployment

### Step 1: Switch to Live Mode

1. In Stripe Dashboard, toggle to **"Live mode"**
2. Get your live API keys:
   - `pk_live_...`
   - `sk_live_...`

### Step 2: Update Environment Variables

**In Vercel (or your hosting platform):**

1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add/Update:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = `pk_live_...`
   - `STRIPE_SECRET_KEY` = `sk_live_...`
4. Make sure to set for **Production** environment

### Step 3: Redeploy

1. Push your code to production
2. Vercel will automatically redeploy with new env vars
3. Test with a real card (small amount first!)

---

## 🔒 Security Checklist

- [ ] Never commit `.env.local` to Git (already in `.gitignore`)
- [ ] Never expose `STRIPE_SECRET_KEY` in frontend code
- [ ] Use HTTPS in production (Vercel does this automatically)
- [ ] Keep Stripe dashboard secure (2FA recommended)
- [ ] Regularly review Stripe Dashboard → Payments for suspicious activity
- [ ] Use test mode for development, live mode only in production

---

## 📧 Email Configuration

After successful payment, an email is automatically sent to `arohm@dmrmedia.org` via SendGrid.

**Email includes:**
- Customer name, email, phone
- Payment confirmation
- Event date (December 17th, 2025)
- Payment Intent ID

**To change recipient:**
- Update `lib/email.ts` → `sendContactFormEmail` function
- Or update the email template in the confirm-payment route

---

## 🐛 Troubleshooting

### Issue: "Stripe not loaded" error

**Solution:**
1. Check `.env.local` has `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
2. Restart dev server after adding env vars
3. Check browser console for errors
4. Verify key starts with `pk_test_` or `pk_live_`

### Issue: Payment fails with "Invalid API Key"

**Solution:**
1. Check `STRIPE_SECRET_KEY` is set correctly
2. Verify you're using test keys in test mode
3. Make sure key starts with `sk_test_` or `sk_live_`
4. Check for extra spaces or quotes in `.env.local`

### Issue: "Card element not found"

**Solution:**
1. Make sure `@stripe/react-stripe-js` is installed: `npm install @stripe/react-stripe-js`
2. Check that `Elements` wrapper is around the form
3. Verify Stripe publishable key is loaded

### Issue: Payment succeeds but no email sent

**Solution:**
1. Check SendGrid configuration in `.env.local`
2. Verify `SENDGRID_API_KEY` is set
3. Check Stripe Dashboard → Payments → Webhooks for errors
4. Review server logs for email sending errors

### Issue: CORS errors

**Solution:**
- Shouldn't happen with Next.js API routes
- If it does, check Vercel/production settings
- Verify API routes are in `app/api/` directory

---

## 📊 Monitoring Payments

### Stripe Dashboard

1. **Payments Tab:** See all successful/failed payments
2. **Customers Tab:** See customer information
3. **Events Tab:** See all Stripe events (webhooks, API calls)
4. **Logs Tab:** See API request/response logs

### Key Metrics to Monitor

- **Payment Success Rate:** Should be >95%
- **Failed Payments:** Review reasons (declined cards, etc.)
- **Refunds:** Track any refund requests
- **Disputes:** Monitor chargebacks

---

## 💰 Pricing Configuration

Current setup: **$5.00** (500 cents)

**To change the price:**

1. Edit `app/api/create-payment-intent/route.ts`
2. Change line 31: `amount: 500` (500 = $5.00)
3. Example: `amount: 1000` = $10.00
4. Update description text on line 40

**To add coupon codes:**

1. Create coupons in Stripe Dashboard → Products → Coupons
2. Modify payment intent creation to accept coupon code
3. Apply discount using Stripe API

---

## 🔄 Webhook Setup (Optional but Recommended)

Webhooks allow Stripe to notify your server of payment events.

### Local Testing

1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
2. Login: `stripe login`
3. Forward webhooks: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
4. Test events: `stripe trigger payment_intent.succeeded`

### Production Setup

1. In Stripe Dashboard → Developers → Webhooks
2. Click "Add endpoint"
3. URL: `https://yourdomain.com/api/webhooks/stripe`
4. Select events:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copy webhook signing secret
6. Add to `.env.local`: `STRIPE_WEBHOOK_SECRET=whsec_...`

---

## 📝 Files Reference

**API Routes:**
- `app/api/create-payment-intent/route.ts` - Creates $5 payment
- `app/api/confirm-payment/route.ts` - Confirms payment & sends email

**Frontend:**
- `app/landing/addlistings/page.tsx` - Payment form with Stripe Elements

**Configuration:**
- `.env.local` - Environment variables (not in Git)

---

## ✅ Quick Start Checklist

- [ ] Created Stripe account
- [ ] Got test API keys from Stripe Dashboard
- [ ] Added keys to `.env.local`
- [ ] Restarted dev server
- [ ] Tested payment with test card `4242 4242 4242 4242`
- [ ] Verified payment appears in Stripe Dashboard
- [ ] Confirmed email is sent after payment
- [ ] Ready for production (switch to live keys when deploying)

---

## 🆘 Need Help?

- **Stripe Docs:** https://stripe.com/docs
- **Stripe Support:** https://support.stripe.com
- **Stripe Discord:** https://discord.gg/stripe
- **Test Cards:** https://stripe.com/docs/testing

---

## 🎉 You're All Set!

Once you've added your Stripe API keys to `.env.local` and restarted your server, the payment integration is ready to use. The form will process $5 payments seamlessly without redirecting users away from your page.

