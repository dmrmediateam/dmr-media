'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import {
  applyFormBtnPrimaryClass,
  applyFormInputClass,
  applyFormLabelClass,
  applyFormPanelClass,
} from '@/components/applyFormPrimitives'
import FormHoneypot, { readHoneypot } from '@/components/FormHoneypot'
import { getStoredUTMParams, trackConversion } from '@/lib/utmTracking'

const EVENT_DATE = 'September 16th, 2026'

const VOLUME_OPTIONS = [
  'Under $5M',
  '$5M – $20M',
  '$20M – $50M',
  '$50M+',
] as const

const TEAM_SIZE_OPTIONS = [
  'Solo agent',
  '2–5 agents',
  '6–15 agents',
  '16+ agents',
] as const

const PAIN_POINT_OPTIONS = [
  'Portal leads are too expensive',
  'My ads get clicks but no clients',
  'No consistent, predictable pipeline',
  'I can’t scale my team past referrals',
  'I’m not running ads yet',
] as const

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  annualVolume: '',
  teamSize: '',
  painPoint: '',
}

const selectClass = `${applyFormInputClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23767671' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")] bg-[position:right_0.9rem_center] bg-no-repeat pr-9`

/** Webinar registration form with qualification friction (volume, team size, pain point). */
export default function WebinarRegistrationForm() {
  const router = useRouter()
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Read honeypot values before the first state change / await.
    const honeypot = readHoneypot(e.currentTarget)
    setIsSubmitting(true)
    setSubmitMessage('')

    const utm = getStoredUTMParams()
    try {
      const res = await fetch('/api/landing-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          annualVolume: formData.annualVolume,
          teamSize: formData.teamSize,
          painPoint: formData.painPoint,
          ...honeypot,
          source: 'paid-ads-webinar-landing',
          eventDate: EVENT_DATE,
          utm_source: utm.utm_source,
          utm_medium: utm.utm_medium,
          utm_campaign: utm.utm_campaign,
          utm_term: utm.utm_term,
          utm_content: utm.utm_content,
          gclid: utm.gclid,
          fbclid: utm.fbclid,
          landing_page: utm.landing_page,
          first_visit: utm.first_visit,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Registration failed. Please try again.')

      // Skip the conversion pixel on a spam-filtered submission.
      if (!data.filtered) {
        trackConversion('Lead', { form_type: 'paid_ads_webinar_landing' })
      }

      // Route by qualification: $20M+ annual volume is qualified, the rest DQ.
      // (Filtered submissions come back qualified so they stay indistinguishable.)
      if (data.qualified === false) {
        router.push('/landing/thank-you-dq')
        return
      }

      router.push(
        `/landing/thank-you?session_id=free_registration&email=${encodeURIComponent(
          formData.email
        )}&name=${encodeURIComponent(formData.fullName)}&phone=${encodeURIComponent(formData.phone)}`
      )
    } catch (err) {
      setIsSubmitting(false)
      setSubmitMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <div id="hero-form" className={`${applyFormPanelClass} scroll-mt-28 p-6 sm:p-8`}>
      <header>
        <h2 className="font-serif text-2xl font-light tracking-tight text-[var(--color-off-black)]">
          Save your seat — free
        </h2>
        <p className="mt-1.5 font-serif text-sm text-[var(--color-ink-300)]">
          Live webinar · September 16th · 12pm ET / 9am PT
        </p>
      </header>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5" aria-label="Webinar registration">
        <FormHoneypot idSuffix="paid-ads-webinar" />

        <div>
          <label htmlFor="webinar-fullName" className={applyFormLabelClass}>
            Full name
          </label>
          <input
            id="webinar-fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            autoComplete="name"
            className={applyFormInputClass}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="webinar-phone" className={applyFormLabelClass}>
              Phone
            </label>
            <input
              id="webinar-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
              className={applyFormInputClass}
            />
          </div>
          <div>
            <label htmlFor="webinar-email" className={applyFormLabelClass}>
              Email
            </label>
            <input
              id="webinar-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className={applyFormInputClass}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="webinar-annualVolume" className={applyFormLabelClass}>
              Annual sales volume
            </label>
            <select
              id="webinar-annualVolume"
              name="annualVolume"
              value={formData.annualVolume}
              onChange={handleChange}
              required
              className={selectClass}
            >
              <option value="" disabled>
                Select…
              </option>
              {VOLUME_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="webinar-teamSize" className={applyFormLabelClass}>
              Team size
            </label>
            <select
              id="webinar-teamSize"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              required
              className={selectClass}
            >
              <option value="" disabled>
                Select…
              </option>
              {TEAM_SIZE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="webinar-painPoint" className={applyFormLabelClass}>
            Your biggest marketing pain point
          </label>
          <select
            id="webinar-painPoint"
            name="painPoint"
            value={formData.painPoint}
            onChange={handleChange}
            required
            className={selectClass}
          >
            <option value="" disabled>
              Select…
            </option>
            {PAIN_POINT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {submitMessage ? (
          <p
            role="status"
            className="rounded-lg border border-red-200/80 bg-white px-4 py-3 text-center font-serif text-sm text-red-900"
          >
            {submitMessage}
          </p>
        ) : null}

        <button type="submit" disabled={isSubmitting} className={`${applyFormBtnPrimaryClass} !w-full`}>
          {isSubmitting ? 'Saving your seat…' : 'Save my seat'}
        </button>

        <p className="font-serif text-[11px] leading-relaxed text-[var(--color-ink-400)]">
          Free to attend. Attend live to unlock the FREE website offer. *Additional purchase required. By registering
          you agree to receive communications from DMR Media (calls, SMS, email). Opt out anytime — see our{' '}
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  )
}
