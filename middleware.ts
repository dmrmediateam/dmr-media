import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Protect dashboard routes (except sign-in, forgot-password, reset-password)
  if (
    pathname.startsWith('/dashboard/') &&
    !pathname.startsWith('/dashboard/sign-in') &&
    !pathname.startsWith('/dashboard/forgot-password') &&
    !pathname.startsWith('/dashboard/reset-password')
  ) {
    const token = request.cookies.get('client_token')?.value

    if (!token) {
      return NextResponse.redirect(new URL('/dashboard/sign-in', request.url))
    }

    try {
      if (!process.env.JWT_SECRET) {
        console.error('JWT_SECRET is not set in environment variables')
        return NextResponse.redirect(new URL('/dashboard/sign-in', request.url))
      }
      
      // Use jose for Edge Runtime compatibility
      const secret = new TextEncoder().encode(process.env.JWT_SECRET)
      await jwtVerify(token, secret)
    } catch (error) {
      // Token is invalid or expired
      console.error('Token verification failed:', error)
      return NextResponse.redirect(new URL('/dashboard/sign-in', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
