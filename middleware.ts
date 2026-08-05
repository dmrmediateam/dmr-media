/**
 * LAYER 3 — per-IP rate limiting for form endpoints only.
 *
 * In-memory sliding window. SERVERLESS CAVEAT: on Vercel the counter lives per
 * function instance, so the effective global limit is (instances x limit). This
 * is burst throttling, not a hard cap. For a hard global cap, swap the Map for
 * Upstash/Redis or mirror the rule in Vercel Firewall.
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const RATE_LIMIT_WINDOW_MS = 60_000

/**
 * Explicit allowlist — never limit blanket, that throttles assets and prefetches.
 * /api/application gets a higher budget: it backs multi-step forms that can post
 * partial saves before the final submit.
 */
const FORM_POST_LIMITS: Record<string, number> = {
  '/api/contact': 6,
  '/api/home-valuation': 6,
  '/api/landing-registration': 8,
  '/api/newsletter-signup': 6,
  '/api/google-direct': 6,
  '/api/strategy-call-apply': 8,
  '/api/qualification-form': 8,
  '/api/implementation-session': 8,
  '/api/application': 15,
}

const formSubmissions = new Map<string, number[]>()

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  return request.headers.get('x-real-ip')?.trim() || 'unknown'
}

function isFormRateLimited(key: string, max: number): boolean {
  const now = Date.now()
  const history = (formSubmissions.get(key) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  history.push(now)
  formSubmissions.set(key, history)

  // Keep the map bounded on long-lived instances.
  if (formSubmissions.size > 2_000) {
    formSubmissions.forEach((stamps, mapKey) => {
      if (stamps.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) formSubmissions.delete(mapKey)
    })
  }

  return history.length > max
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const max = FORM_POST_LIMITS[pathname]

  if (request.method === 'POST' && max !== undefined) {
    if (isFormRateLimited(`${pathname}:${getClientIp(request)}`, max)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a moment and try again.' },
        { status: 429 },
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  // Next.js excludes /api from the default matcher, so every form endpoint must
  // be listed EXPLICITLY here or the limiter silently never runs.
  matcher: [
    '/api/contact',
    '/api/home-valuation',
    '/api/landing-registration',
    '/api/newsletter-signup',
    '/api/google-direct',
    '/api/strategy-call-apply',
    '/api/qualification-form',
    '/api/implementation-session',
    '/api/application',
  ],
}
