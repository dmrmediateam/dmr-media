# 🔐 Google OAuth 2.0 Setup - Step by Step Guide

**Date:** November 12, 2025
**Project:** DMR Media - Google Sign-In

---

## ✅ Step 1: Go to Google Cloud Console

Open this link in your browser:
👉 **https://console.cloud.google.com/**

Sign in with your Google account.

---

## ✅ Step 2: Select or Create Project

At the top of the page, click the **project dropdown** (next to "Google Cloud").

**Option A: Use Existing Project**
- If you see a project already created, select it.

**Option B: Create New Project**
- Click **"NEW PROJECT"**
- **Project name:** `DMR Media Auth`
- Click **CREATE**
- Wait 30-60 seconds for creation

---

## ✅ Step 3: Go to Credentials Page

From the left sidebar:
1. Click **"APIs & Services"**
2. Click **"Credentials"**

Or use this direct link:
👉 **https://console.cloud.google.com/apis/credentials**

---

## ✅ Step 4: Configure OAuth Consent Screen (If Needed)

If you see a message about configuring the consent screen:

1. Click **"CONFIGURE CONSENT SCREEN"**
2. Choose **"External"** (for any Google account to sign in)
3. Click **"CREATE"**

Fill in the form:
- **App name:** `DMR Media`
- **User support email:** (Select your email from dropdown)
- **Developer contact information:** (Enter your email)

4. Click **"SAVE AND CONTINUE"**
5. On "Scopes" page → Click **"SAVE AND CONTINUE"**
6. On "Test users" page → Click **"SAVE AND CONTINUE"**
7. Click **"BACK TO DASHBOARD"**

---

## ✅ Step 5: Create OAuth 2.0 Client ID

Back on the Credentials page:

1. Click **"+ CREATE CREDENTIALS"** (at the top)
2. Select **"OAuth 2.0 Client ID"**

---

## ✅ Step 6: Configure the OAuth Client

Fill in the form:

### Application Type:
- Select: **"Web application"**

### Name:
- Enter: `DMR Media Web Client`

### Authorized JavaScript origins:
Click **"+ ADD URI"** and enter:
```
http://localhost:3000
```

### Authorized redirect URIs:
Click **"+ ADD URI"** and enter **EXACTLY**:
```
http://localhost:3000/api/auth/callback/google
```

**CRITICAL:** Make sure there are:
- ❌ NO trailing slashes
- ❌ NO extra spaces
- ❌ NO typos
- ✅ EXACTLY as shown above

---

## ✅ Step 7: Create & Copy Credentials

1. Click **"CREATE"** button at the bottom

2. A popup will appear with your credentials:

```
Your Client ID
[long string ending in .apps.googleusercontent.com]

Your Client Secret
[string starting with GOCSPX-]
```

3. **COPY BOTH VALUES!**

---

## ✅ Step 8: Tell Me Your Credentials

Paste them here in this format:

```
Client ID: YOUR_CLIENT_ID_HERE
Client Secret: YOUR_CLIENT_SECRET_HERE
```

I'll update your `.env.local` file immediately!

---

## 📋 Quick Checklist:

Before you start, make sure:
- ✅ You're signed into Google Cloud Console
- ✅ You have a project selected
- ✅ You're ready to copy the credentials

**Ready? Let's go!** 🚀

---

## 🆘 Need Help?

If you get stuck at any step, tell me:
1. Which step you're on
2. What you see on the screen
3. Any error messages

I'll guide you through it!
