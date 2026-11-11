import { NextResponse } from 'next/server'
import { parseQuizAnswers } from '@/lib/landing/lead-quiz'
import { callModel, canonical } from '@/lib/landing/lead-quiz-ai'

/**
 * Local test endpoint for the AI quiz plan. The quiz uses it instead of
 * /api/application when opened with ?test=1 on localhost: it writes a fresh
 * plan (no cache, so prompt edits show up right away) and sends no lead to
 * Zapier, Close, or the team inbox. Outside development it does not exist.
 */
export async function POST(request: Request) {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  const body = (await request.json().catch(() => null)) as { quizAnswers?: unknown } | null
  const answers = parseQuizAnswers(body?.quizAnswers)
  if (!answers) return NextResponse.json({ ok: false, error: 'Invalid quiz answers' }, { status: 400 })
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json({ ok: true, plan: null, error: 'GEMINI_API_KEY is not set in .env.local' })
  }
  try {
    return NextResponse.json({ ok: true, plan: await callModel(canonical(answers)) })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('[dev/quiz-plan]', message)
    return NextResponse.json({ ok: true, plan: null, error: message })
  }
}
