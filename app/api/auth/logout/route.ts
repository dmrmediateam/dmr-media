import { NextRequest, NextResponse } from 'next/server';

// Logout route
export async function GET(req: NextRequest) {
  const response = NextResponse.redirect(new URL('/', req.url));
  
  // Clear the user cookie
  response.cookies.delete('user');
  
  return response;
}

export async function POST(req: NextRequest) {
  const response = NextResponse.json({ success: true });
  
  // Clear the user cookie
  response.cookies.delete('user');
  
  return response;
}
