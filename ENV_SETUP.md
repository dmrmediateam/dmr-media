# Environment Variables Setup

Since `.env.local` files cannot be committed to Git, you need to create this file manually.

## Step-by-Step Instructions

### 1. Create the file

In your project root directory, create a file named `.env.local`:

```bash
touch .env.local
```

### 2. Add your Sanity credentials

Open `.env.local` in your text editor and add:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=cs56ipyy
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here

# Zapier Webhook (Optional - for landing page registrations)
# If not set, defaults to: https://hooks.zapier.com/hooks/catch/21968997/ukf1so2/
ZAPIER_LANDING_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/21968997/ukf1so2/
```

### 3. Get your API Token

1. Visit the Sanity management console:
   **https://sanity.io/manage/project/cs56ipyy/api**

2. Click "Add API Token"

3. Fill in:
   - Name: "Next.js Production"
   - Permissions: Select "Editor"
   
4. Click "Create"

5. **Copy the token immediately** (you won't be able to see it again)

6. Paste the token in your `.env.local` file, replacing `your_api_token_here`

### 4. Save and restart

Save the `.env.local` file and restart your development server:

```bash
npm run dev
```

## For Vercel Deployment

Add the same environment variables in your Vercel dashboard:

1. Go to your project in Vercel
2. Click "Settings" → "Environment Variables"
3. Add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `cs56ipyy`
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
   - `SANITY_API_TOKEN` = (your token from step 3)
4. Redeploy your site

## Security Note

⚠️ **Never commit `.env.local` to Git!**

The `.gitignore` file already excludes it, so you're protected. But always verify before pushing sensitive credentials.

## Zapier Webhook Setup (for Landing Page Registrations)

The landing page registration form automatically sends data to your Zapier webhook.

**Default Webhook URL:**
- Already configured: `https://hooks.zapier.com/hooks/catch/21968997/ukf1so2/`

**To use a different webhook:**
1. Get your Zapier webhook URL from your Zap
2. Add it to `.env.local` as `ZAPIER_LANDING_WEBHOOK_URL`
3. If not set, it defaults to the URL above

**What gets sent to Zapier:**
- Name
- Email
- Phone
- Source: "add-listings-landing"
- Event Date: "December 17th, 2025"
- Timestamp

## What Each Variable Does

- **NEXT_PUBLIC_SANITY_PROJECT_ID**: Your Sanity project identifier (public, safe to expose)
- **NEXT_PUBLIC_SANITY_DATASET**: Which dataset to use (production/staging)
- **SANITY_API_TOKEN**: Authentication token for write operations (keep secret)
- **ZAPIER_LANDING_WEBHOOK_URL**: Zapier webhook URL for landing page registrations (optional)

Only the `SANITY_API_TOKEN` is sensitive. The `NEXT_PUBLIC_*` variables are exposed to the browser and are safe to be public. The Zapier webhook URL is public but should be kept secure.

