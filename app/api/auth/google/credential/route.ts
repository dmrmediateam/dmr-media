import { NextRequest, NextResponse } from 'next/server';

// Handle Google Identity Services credential
export async function POST(req: NextRequest) {
  try {
    const { credential } = await req.json();

    if (!credential) {
      return NextResponse.json({ error: 'No credential provided' }, { status: 400 });
    }

    // Verify the credential with Google
    const verifyResponse = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`
    );

    if (!verifyResponse.ok) {
      return NextResponse.json({ error: 'Invalid credential' }, { status: 401 });
    }

    const profile = await verifyResponse.json();
    console.log('User successfully logged in via One Tap:', profile);

    // Set user data in a cookie
    const response = NextResponse.json({ success: true, user: profile });
    
    response.cookies.set('user', JSON.stringify(profile), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/',
    });

    // Set recent account cookie
    const recentAccount = {
      id: profile.sub,
      email: profile.email,
      name: profile.name,
      picture: profile.picture,
    };
    
    response.cookies.set('recentAccount', JSON.stringify(recentAccount), {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Error verifying credential:', error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
