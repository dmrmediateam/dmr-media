import { NextRequest, NextResponse } from 'next/server'
import { sendApplicationFormEmail } from '@/lib/email'

const DEFAULT_THANK_YOU_PATH = '/landing/thank-you'
const GOOGLE_GENERAL_FORM_NAME = 'google-general-strategy-call'
const GOOGLE_GENERAL_MODAL_FORM_NAME = 'google-general-modal'
const GOOGLE_GENERAL_THANK_YOU_PATH = '/landing/thank-you-g'
const GOOGLE_GENERAL_DISQUALIFIED_THANK_YOU_PATH = '/landing/thank-you-g-dq'

function usesGoogleGeneralWebhook(formName: string) {
  return formName === GOOGLE_GENERAL_FORM_NAME || formName === GOOGLE_GENERAL_MODAL_FORM_NAME
}

/** POST JSON to Zapier; returns an error response, or null on success / dev skip. */
async function postApplicationToZapier(
  webhookUrl: string | undefined,
  missingEnvError: string,
  payload: Record<string, unknown>
): Promise<NextResponse | null> {
  if (!webhookUrl) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `[api/application] ${missingEnvError}: Zapier webhook skipped (set ZAPIER_WEBHOOK_URL in .env.local for local Zapier testing).`
      )
      return null
    }
    return NextResponse.json({ error: missingEnvError }, { status: 500 })
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

  return null
}

function readAttributionFromJson(body: Record<string, unknown>) {
  const s = (k: string) => (typeof body[k] === 'string' ? (body[k] as string) : '')
  return {
    submissionPage: s('submissionPage'),
    utm_source: s('utm_source'),
    utm_medium: s('utm_medium'),
    utm_campaign: s('utm_campaign'),
    utm_term: s('utm_term'),
    utm_content: s('utm_content'),
    gclid: s('gclid'),
    fbclid: s('fbclid'),
    landing_page: s('landing_page'),
    first_visit: s('first_visit'),
  }
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') ?? ''

    if (contentType.includes('application/json')) {
      const body = (await req.json()) as Record<string, unknown>
      const formName =
        typeof body.formName === 'string' && body.formName.trim()
          ? body.formName.trim()
          : 'calendar-application'
      const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : ''
      const lastName = typeof body.lastName === 'string' ? body.lastName.trim() : ''
      const fullName = [firstName, lastName].filter(Boolean).join(' ')
      const submissionStatus =
        body.submissionStatus === 'partial' ? ('partial' as const) : ('complete' as const)

      const payload = {
        formName,
        submissionStatus,
        name: (typeof body.name === 'string' ? body.name : fullName) || fullName,
        firstName,
        lastName,
        email: typeof body.email === 'string' ? body.email : '',
        phone: typeof body.phone === 'string' ? body.phone : '',
        profileType: typeof body.profileType === 'string' ? body.profileType : '',
        website: typeof body.website === 'string' ? body.website : '',
        market: typeof body.market === 'string' ? body.market : '',
        annualSalesVolume: typeof body.annualSalesVolume === 'string' ? body.annualSalesVolume : '',
        teamSize: typeof body.teamSize === 'string' ? body.teamSize : '',
        biggestChallenge: typeof body.biggestChallenge === 'string' ? body.biggestChallenge : '',
        bookingReason: Array.isArray(body.bookingReason)
          ? body.bookingReason.map(String)
          : typeof body.bookingReason === 'string'
            ? [body.bookingReason]
            : [],
        notes: typeof body.notes === 'string' ? body.notes : '',
        submittedAt: new Date().toISOString(),
        ...readAttributionFromJson(body),
      }

      await sendApplicationFormEmail(payload)

      const useGoogleGeneral = usesGoogleGeneralWebhook(formName)
      const webhookUrl = useGoogleGeneral
        ? process.env.ZAPIER_WEBHOOK_URL_GOOGLE_GENERAL
        : process.env.ZAPIER_WEBHOOK_URL
      const missingWebhookError = useGoogleGeneral
        ? 'Missing ZAPIER_WEBHOOK_URL_GOOGLE_GENERAL'
        : 'Missing ZAPIER_WEBHOOK_URL'

      const zapierError = await postApplicationToZapier(webhookUrl, missingWebhookError, payload)
      if (zapierError) return zapierError

      if (formName === GOOGLE_GENERAL_FORM_NAME) {
        const isUnderTwentyM = payload.annualSalesVolume === 'Under $20M'
        const redirectPath = isUnderTwentyM
          ? GOOGLE_GENERAL_DISQUALIFIED_THANK_YOU_PATH
          : GOOGLE_GENERAL_THANK_YOU_PATH
        return NextResponse.json({ ok: true, redirectPath })
      }

      return NextResponse.json({ ok: true })
    }

    const formData = await req.formData()
    const formName = formData.get('formName')?.toString() ?? 'calendar-application'
    const isGoogleGeneral = formName === GOOGLE_GENERAL_FORM_NAME
    const annualSalesVolume = formData.get('annualSalesVolume')?.toString() ?? ''
    const isUnderTwentyM = annualSalesVolume === 'Under $20M'
    const firstName = formData.get('firstName')?.toString().trim() ?? ''
    const lastName = formData.get('lastName')?.toString().trim() ?? ''
    const fullName = [firstName, lastName].filter(Boolean).join(' ')

    const payload = {
      formName,
      submissionStatus: 'complete' as const,
      name: formData.get('name')?.toString() ?? fullName,
      firstName,
      lastName,
      email: formData.get('email')?.toString() ?? '',
      phone: formData.get('phone')?.toString() ?? '',
      profileType: formData.get('profileType')?.toString() ?? '',
      website: formData.get('website')?.toString() ?? '',
      market: formData.get('market')?.toString() ?? '',
      annualSalesVolume,
      teamSize: formData.get('teamSize')?.toString() ?? '',
      biggestChallenge: formData.get('biggestChallenge')?.toString() ?? '',
      bookingReason: formData.getAll('bookingReason').map(String),
      notes: formData.get('notes')?.toString() ?? '',
      submittedAt: new Date().toISOString(),
    }

    await sendApplicationFormEmail(payload)

    const useGg = usesGoogleGeneralWebhook(formName)
    const webhookUrl = useGg ? process.env.ZAPIER_WEBHOOK_URL_GOOGLE_GENERAL : process.env.ZAPIER_WEBHOOK_URL
    const missingWebhookError = useGg ? 'Missing ZAPIER_WEBHOOK_URL_GOOGLE_GENERAL' : 'Missing ZAPIER_WEBHOOK_URL'

    const zapierError = await postApplicationToZapier(webhookUrl, missingWebhookError, payload)
    if (zapierError) return zapierError

    let redirectPath = DEFAULT_THANK_YOU_PATH
    if (isGoogleGeneral) {
      redirectPath = isUnderTwentyM
        ? GOOGLE_GENERAL_DISQUALIFIED_THANK_YOU_PATH
        : GOOGLE_GENERAL_THANK_YOU_PATH
    }

    return NextResponse.redirect(new URL(redirectPath, req.url), 303)
  } catch {
    return NextResponse.json({ error: 'Invalid form submission' }, { status: 400 })
  }
}
