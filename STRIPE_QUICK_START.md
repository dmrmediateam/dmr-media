# ⚡ Stripe Setup - Quick Start (5 Minutes)

## What You Need

1. Stripe account (free): https://stripe.com
2. API keys from Stripe Dashboard

---

## Step 1: Get Stripe Keys (2 min)

1. Go to https://dashboard.stripe.com
2. Click **Developers → API keys**
3. Make sure you're in **Test mode** (toggle top right)
4. Copy:
   - **Publishable key** (`pk_test_...`)
   - **Secret key** (`sk_test_...`)

---

## Step 2: Add to `.env.local` (1 min)

Create/update `.env.local` in project root:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51...
STRIPE_SECRET_KEY=sk_test_51...
```

**Replace with your actual keys from Step 1**

---

## Step 3: Restart Server (30 sec)

```bash
npm run dev
```

---

## Step 4: Test It! (1 min)

1. Go to: `http://localhost:3000/landing/addlistings`
2. Fill form:
   - Name: Test
   - Email: test@test.com
   - Phone: 555-1234
3. Card: `4242 4242 4242 4242`
4. Expiry: `12/25`
5. CVC: `123`
6. Click "Register Now - $5"

✅ **Done!** Payment should process successfully.

---

## 🎯 That's It!

For detailed setup, troubleshooting, and production deployment, see:
- **`STRIPE_SETUP_COMPLETE.md`** - Full comprehensive guide

---

## 🧪 Test Cards

- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- **3D Secure:** `4000 0025 0000 3155`

Any future expiry, any CVC, any ZIP.

