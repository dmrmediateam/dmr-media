import { NextRequest, NextResponse } from 'next/server';

// Get current user from session
export async function GET(req: NextRequest) {
  try {
    const userCookie = req.cookies.get('user');
    
    if (!userCookie) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    const user = JSON.parse(userCookie.value);
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ user: null }, { status: 200 });
  }
}
