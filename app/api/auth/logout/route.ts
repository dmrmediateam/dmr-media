import 'server-only'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  try {
    const cookieStore = await cookies()
    cookieStore.delete('client_token')
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Logout error:', error)
    if (error.message) {
      console.error('Error message:', error.message)
    }
    // Still return success even if cookie deletion fails
    return NextResponse.json({ success: true })
  }
}
