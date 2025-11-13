# Google Sign-In Implementation Guide

## Overview
Based on your screenshot showing Google Sign-In modal, this guide provides the best approach to implement automatic/Google Sign-In for your Next.js real estate website.

---

## 📋 Table of Contents
1. Architecture & Tech Stack
2. Setup Steps
3. Implementation Files
4. Integration Points
5. Testing & Troubleshooting

---

## 🎯 Recommended Architecture

### Option 1: NextAuth.js (RECOMMENDED) ✅
**Best for:** Full-featured auth, session management, database integration
- Automatic session management
- Built-in providers (Google, GitHub, etc.)
- Works with Next.js seamlessly
- CSRF protection
- Easy callback handling

### Option 2: Firebase Authentication
**Best for:** Quick setup, minimal backend needed
- Google Sign-In built-in
- Real-time database ready
- Good for real estate listings

### Option 3: Auth0
**Best for:** Enterprise features, advanced security
- Professional grade
- Extensive customization
- Great analytics

---

## 🚀 RECOMMENDED SETUP: NextAuth.js + Google OAuth

### Step 1: Install NextAuth.js

```bash
npm install next-auth
```

### Step 2: Get Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials (Web Application)
5. Add authorized redirect URIs:
   ```
   http://localhost:3000/api/auth/callback/google
   https://yourdomain.com/api/auth/callback/google
   ```
6. Copy Client ID and Client Secret

### Step 3: Add Environment Variables

Create `.env.local`:
```env
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Generate NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

---

## 📁 File Structure to Create

```
app/
├── api/
│   └── auth/
│       └── [...nextauth]/
│           └── route.ts          (NextAuth configuration)
├── providers/
│   └── SessionProvider.tsx        (Session provider wrapper)
├── components/
│   ├── Navbar.tsx               (Updated with sign-in)
│   ├── AuthButton.tsx           (Sign-in/Sign-out button)
│   └── UserMenu.tsx             (User dropdown menu)
└── lib/
    └── auth.ts                  (Auth utilities)
```

---

## 📝 Implementation Files

### 1. Create NextAuth Route Handler
**File: `app/api/auth/[...nextauth]/route.ts`**

```typescript
import NextAuth, { type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
```

### 2. Create Session Provider
**File: `app/providers/SessionProvider.tsx`**

```typescript
'use client';

import { SessionProvider } from 'next-auth/react';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
```

### 3. Update Root Layout
**File: `app/layout.tsx`** (Update your existing layout)

```typescript
import { AuthProvider } from './providers/SessionProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
```

### 4. Create Auth Button Component
**File: `components/AuthButton.tsx`**

```typescript
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

export default function AuthButton() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  if (status === 'loading') {
    return (
      <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
    );
  }

  if (!session) {
    return (
      <button
        onClick={() => signIn('google')}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        Sign In
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        {session.user?.image && (
          <img
            src={session.user.image}
            alt={session.user.name || 'User'}
            className="w-8 h-8 rounded-full"
          />
        )}
        <span className="text-sm text-gray-700">{session.user?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-gray-200">
            <p className="text-sm font-semibold text-gray-900">{session.user?.name}</p>
            <p className="text-xs text-gray-500">{session.user?.email}</p>
          </div>
          <button
            onClick={() => {
              signOut({ redirect: true, callbackUrl: '/' });
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition-colors"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
```

### 5. Create Sign-In Page (Like Your Screenshot)
**File: `app/auth/signin/page.tsx`**

```typescript
'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    await signIn('google', { redirect: true, callbackUrl: '/' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
            Welcome
          </h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          {isLoading ? 'Signing in...' : 'Sign in with Google'}
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          By signing in, you agree to our{' '}
          <a href="/terms" className="text-blue-600 hover:text-blue-700">
            Terms of Service
          </a>
          {' '}and{' '}
          <a href="/privacy" className="text-blue-600 hover:text-blue-700">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
```

### 6. Update Navbar Component
**File: `components/Navbar.tsx`** (Add auth button)

Add this in your navbar where you want the auth button to appear:

```typescript
import AuthButton from './AuthButton';

// Inside the navbar component, in the "Right Side - Desktop Nav + Menu Button" section:
<div className="hidden lg:flex items-center gap-6">
  {/* Your existing navigation links */}
  
  {/* Add Auth Button */}
  <AuthButton />
</div>
```

---

## 🔐 Protected Routes & API Routes

### Create Protected Route Middleware
**File: `middleware.ts`**

```typescript
import { withAuth } from 'next-auth/middleware';

export const middleware = withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/account/:path*',
    '/protected/:path*',
  ],
};
```

### Protected API Route Example
**File: `app/api/user/profile/route.ts`**

```typescript
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  return Response.json({
    user: session.user,
  });
}
```

---

## 📦 Install Required Packages

```bash
npm install next-auth
```

If using database sessions (recommended for production):
```bash
npm install @prisma/client
npm install -D prisma
```

---

## 🔑 Google Cloud Setup Details

### 1. Create Google Cloud Project
- Go to https://console.cloud.google.com/
- Click "Create Project"
- Name it (e.g., "DMR Media")
- Wait for creation

### 2. Enable Google+ API
- Search for "Google+ API"
- Click "Enable"

### 3. Create OAuth Credentials
- Go to "Credentials"
- Click "Create Credentials" → "OAuth 2.0 Client ID"
- Choose "Web application"
- Add Authorized JavaScript origins:
  ```
  http://localhost:3000
  https://yourdomain.com
  ```
- Add Authorized redirect URIs:
  ```
  http://localhost:3000/api/auth/callback/google
  https://yourdomain.com/api/auth/callback/google
  ```

### 4. Get Credentials
- Copy Client ID and Client Secret
- Add to `.env.local`

---

## 🧪 Testing Locally

1. Add to `.env.local`:
```env
NEXTAUTH_SECRET=test-secret-key
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

2. Run development server:
```bash
npm run dev
```

3. Visit http://localhost:3000/auth/signin

4. Click "Sign in with Google"

5. Complete Google authentication

---

## 🚀 Production Deployment

### Environment Variables (Set on hosting platform)
```env
NEXTAUTH_SECRET=production-secret-key
NEXTAUTH_URL=https://yourdomain.com
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Vercel Deployment
1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Database Session Management (Optional but recommended)
Using Prisma with PostgreSQL:

```prisma
// prisma/schema.prisma
model Session {
  id            String   @id @default(cuid())
  sessionToken  String   @unique
  userId        String
  expires       DateTime
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model Account {
  id                 String  @id @default(cuid())
  userId             String
  type               String
  provider           String
  providerAccountId  String
  refresh_token      String?
  access_token       String?
  expires_at         Int?
  token_type         String?
  scope              String?
  id_token           String?
  session_state      String?

  @@unique([provider, providerAccountId])
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
}
```

---

## 🎯 Integration with Your Real Estate Platform

### Store User Preferences
```typescript
// Save user's saved listings
const [favorites, setFavorites] = useState<string[]>([]);

const saveListing = async (listingId: string) => {
  const response = await fetch('/api/user/favorites', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ listingId }),
  });
  
  if (response.ok) {
    setFavorites([...favorites, listingId]);
  }
};
```

### Create User Dashboard
**File: `app/dashboard/page.tsx`**

```typescript
'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome, {session?.user?.name}
        </h1>
        {/* Dashboard content */}
      </div>
    </div>
  );
}
```

---

## ✅ Checklist

- [ ] Install NextAuth.js
- [ ] Get Google OAuth credentials
- [ ] Add environment variables
- [ ] Create auth route handler
- [ ] Create session provider
- [ ] Update root layout
- [ ] Create auth button component
- [ ] Create sign-in page
- [ ] Update navbar with auth button
- [ ] Test locally
- [ ] Deploy to production
- [ ] Update environment variables on hosting
- [ ] Test production sign-in

---

## 🐛 Troubleshooting

### Issue: "Redirect URL mismatch"
**Solution:** Ensure your callback URL in Google Cloud matches exactly
```
Correct: https://yourdomain.com/api/auth/callback/google
Wrong: https://yourdomain.com/callback
```

### Issue: "Invalid client"
**Solution:** Check that CLIENT_ID and CLIENT_SECRET are correct

### Issue: "NEXTAUTH_SECRET not set"
**Solution:** Add NEXTAUTH_SECRET to .env.local

### Issue: Session not persisting
**Solution:** Ensure SessionProvider wraps entire app in layout.tsx

---

## 📚 Resources

- [NextAuth.js Docs](https://next-auth.js.org/)
- [Google OAuth Setup](https://console.cloud.google.com/)
- [NextAuth.js Google Provider](https://next-auth.js.org/providers/google)
- [Prisma Adapter](https://next-auth.js.org/adapters/prisma)

---

**Last Updated:** November 6, 2025
**Status:** Ready for Implementation