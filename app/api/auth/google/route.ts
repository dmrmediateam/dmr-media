import { NextRequest, NextResponse } from 'next/server';
import passport from '@/lib/passport';
import { sessionConfig } from '@/lib/session';

// This is the link you put on your "Login" button
// It just redirects the user to Google's sign-in page.
export async function GET(req: NextRequest) {
  try {
    const callbackUrl = process.env.CALLBACK_URL || 'http://localhost:3000/api/auth/google/callback';
    console.log('Using callback URL:', callbackUrl);
    console.log('Client ID:', process.env.GOOGLE_CLIENT_ID);
    
    // Redirect to Google OAuth
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${process.env.GOOGLE_CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(callbackUrl)}` +
      `&response_type=code` +
      `&scope=${encodeURIComponent('profile email')}` +
      `&access_type=offline` +
      `&prompt=consent`;

    console.log('Full Google Auth URL:', googleAuthUrl);
    return NextResponse.redirect(googleAuthUrl);
  } catch (error) {
    console.error('Error initiating Google auth:', error);
    return NextResponse.json({ error: 'Failed to initiate authentication' }, { status: 500 });
  }
}
