import { NextRequest, NextResponse } from 'next/server';

// This is the callback route Google redirects to.
// It will have a `code` in the URL that Passport automatically handles.
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      console.error('Google OAuth error:', error);
      return NextResponse.redirect(new URL('/login-failed', req.url));
    }

    if (!code) {
      return NextResponse.json({ error: 'No authorization code provided' }, { status: 400 });
    }

    // Exchange code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        redirect_uri: process.env.CALLBACK_URL || 'http://localhost:3000/api/auth/google/callback',
        grant_type: 'authorization_code',
      }),
    });

    const tokens = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Token exchange error:', tokens);
      return NextResponse.redirect(new URL('/login-failed', req.url));
    }

    // Get user info from Google
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    });

    const profile = await userInfoResponse.json();
    console.log('User successfully logged in:', profile);

    // Successful authentication!
    // Store user info in a cookie or session
    const response = NextResponse.redirect(new URL('/', req.url));
    
    // Set user data in a cookie (in production, use proper session management)
    response.cookies.set('user', JSON.stringify(profile), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/',
    });

    // Also set a client-accessible cookie to store recent account info
    const recentAccount = {
      id: profile.id,
      email: profile.email,
      name: profile.name,
      picture: profile.picture,
    };
    response.cookies.set('recentAccount', JSON.stringify(recentAccount), {
      httpOnly: false, // Make it accessible to client-side JS
      secure: process.env.NODE_ENV === 'production',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Callback error:', error);
    return NextResponse.redirect(new URL('/login-failed', req.url));
  }
}
