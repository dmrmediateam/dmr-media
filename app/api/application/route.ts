import { NextRequest, NextResponse } from 'next/server'

const DEFAULT_THANK_YOU_PATH = '/landing/thank-you'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const payload = {
      formName: 'calendar-application',
      name: formData.get('name')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      phone: formData.get('phone')?.toString() ?? '',
      profileType: formData.get('profileType')?.toString() ?? '',
      website: formData.get('website')?.toString() ?? '',
      bookingReason: formData.getAll('bookingReason').map(String),
      notes: formData.get('notes')?.toString() ?? '',
      submittedAt: new Date().toISOString(),
    }

    const webhookUrl = process.env.ZAPIER_WEBHOOK_URL
    if (!webhookUrl) {
      return NextResponse.json({ error: 'Missing ZAPIER_WEBHOOK_URL' }, { status: 500 })
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })

    if (!webhookResponse.ok) {
      return NextResponse.json({ error: 'Failed to submit application' }, { status: 502 })
    }

    return NextResponse.redirect(new URL(DEFAULT_THANK_YOU_PATH, req.url), 303)
  } catch {
    return NextResponse.json({ error: 'Invalid form submission' }, { status: 400 })
  }
}
