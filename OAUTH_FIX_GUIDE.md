# Google OAuth Redirect URI Fix

## 🚨 Error: redirect_uri_mismatch

This means the redirect URI in Google Cloud Console doesn't match what NextAuth is sending.

---

## ✅ EXACT Steps to Fix:

### Step 1: Go to Google Cloud Console
🔗 https://console.cloud.google.com/apis/credentials

### Step 2: Find Your OAuth 2.0 Client ID
Look for:
- **Client ID:** `830886197038-k1rf3jvooba4iff8c3bg6e1meo89opk3.apps.googleusercontent.com`

Click on it to edit.

---

### Step 3: Check "Authorized redirect URIs" Section

**Delete ALL existing redirect URIs first!**

Then add **ONLY** this one:

```
http://localhost:3000/api/auth/callback/google
```

**IMPORTANT:**
- ❌ NO `http://localhost:3001/...` (old port)
- ❌ NO trailing slash `/`
- ❌ NO extra spaces
- ✅ EXACTLY: `http://localhost:3000/api/auth/callback/google`

---

### Step 4: Click SAVE

**Wait 2-3 minutes** for Google to propagate the changes.

---

### Step 5: Restart Your Dev Server

Stop the server (Ctrl+C) and restart:

```bash
npm run dev
```

---

### Step 6: Clear Browser Cache & Try Again

1. Close all browser tabs with localhost
2. Open a **new incognito/private window**
3. Go to: http://localhost:3000/auth/test
4. Click "Sign in with Google"

---

## 🔍 Debug: What URI is Being Sent?

The error message should show:
- **"Redirect URI:"** (what your app is sending)
- **"Authorized redirect URIs:"** (what Google has configured)

**They MUST match exactly!**

---

## 📸 Screenshot What to Look For:

In Google Cloud Console, the "Authorized redirect URIs" section should show:

```
Authorized redirect URIs
http://localhost:3000/api/auth/callback/google     [X Delete]
[+ ADD URI]
```

**Make sure there are NO other URIs listed!**

---

## 🆘 Still Not Working?

If it still fails, check the error details and tell me:
1. What redirect URI is your app sending?
2. What redirect URIs are configured in Google Console?

I'll help you match them up!
