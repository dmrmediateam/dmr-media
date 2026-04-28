import { NextRequest, NextResponse } from 'next/server'
import { sendApplicationFormEmail } from '@/lib/email'

const DEFAULT_THANK_YOU_PATH = '/landing/thank-you'
const GOOGLE_GENERAL_FORM_NAME = 'google-general-strategy-call'
const GOOGLE_GENERAL_THANK_YOU_PATH = '/landing/thank-you-g'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const formName = formData.get('formName')?.toString() ?? 'calendar-application'
    const isGoogleGeneral = formName === GOOGLE_GENERAL_FORM_NAME
    const firstName = formData.get('firstName')?.toString().trim() ?? ''
    const lastName = formData.get('lastName')?.toString().trim() ?? ''
    const fullName = [firstName, lastName].filter(Boolean).join(' ')

    const payload = {
      formName,
      name: formData.get('name')?.toString() ?? fullName,
      firstName,
      lastName,
      email: formData.get('email')?.toString() ?? '',
      phone: formData.get('phone')?.toString() ?? '',
      profileType: formData.get('profileType')?.toString() ?? '',
      website: formData.get('website')?.toString() ?? '',
      market: formData.get('market')?.toString() ?? '',
      annualSalesVolume: formData.get('annualSalesVolume')?.toString() ?? '',
      teamSize: formData.get('teamSize')?.toString() ?? '',
      biggestChallenge: formData.get('biggestChallenge')?.toString() ?? '',
      bookingReason: formData.getAll('bookingReason').map(String),
      notes: formData.get('notes')?.toString() ?? '',
      submittedAt: new Date().toISOString(),
    }

    await sendApplicationFormEmail(payload)

    const webhookUrl = isGoogleGeneral
      ? process.env.ZAPIER_WEBHOOK_URL_GOOGLE_GENERAL
      : process.env.ZAPIER_WEBHOOK_URL

    if (!webhookUrl) {
      return NextResponse.json(
        {
          error: isGoogleGeneral
            ? 'Missing ZAPIER_WEBHOOK_URL_GOOGLE_GENERAL'
            : 'Missing ZAPIER_WEBHOOK_URL',
        },
        { status: 500 }
      )
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

    const redirectPath = isGoogleGeneral ? GOOGLE_GENERAL_THANK_YOU_PATH : DEFAULT_THANK_YOU_PATH

    return NextResponse.redirect(new URL(redirectPath, req.url), 303)
  } catch {
    return NextResponse.json({ error: 'Invalid form submission' }, { status: 400 })
  }
}
