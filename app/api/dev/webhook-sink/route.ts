import { NextResponse } from 'next/server'

/**
 * Local stand-in for the Zapier webhooks. The local dev launch config points
 * every ZAPIER_* URL here, so test submissions never reach Zapier or Close.
 * It logs what would have been sent and answers like Zapier does.
 * Outside development it does not exist.
 */
export async function POST(request: Request) {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null
  console.info('[webhook-sink] local submission NOT sent to Zapier', {
    formName: body?.formName ?? body?.source,
    submissionPage: body?.submissionPage,
    fields: body ? Object.keys(body).length : 0,
  })
  return NextResponse.json({ status: 'success', sink: true })
}
