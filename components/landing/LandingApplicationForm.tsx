'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import {
  applyFormBtnPrimaryClass,
  applyFormInputClass,
  applyFormLabelClass,
  applyFormPanelClass,
} from '@/components/applyFormPrimitives'
import type { ChannelLandingFormConfig } from '@/lib/landing/channel-landing-types'
import { resolveLandingFormConfig } from '@/lib/landing/landing-form-config'
import { getStoredUTMParams, trackApplicationConversion } from '@/lib/utmTracking'

const DEFAULT_FORM_NAME = 'google-general-modal'
const THANK_YOU_PATH = '/landing/thank-you-q'

const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  website: '',
}

type FormDataState = typeof initialFormData

type LandingApplicationFormProps = {
  id?: string
  formName?: string
  formConfig?: ChannelLandingFormConfig
  variant?: 'default' | 'conversion'
  /** Skip outer panel border/shadow when nested inside ApplyModal. */
  embedded?: boolean
  /** When set, parent handles navigation after a successful submit. */
  onSuccess?: (thankYouPath: string) => void
  /** Optional id for the conversion header title (modal accessibility). */
  headerTitleId?: string
}

function splitFullName(fullName: string) {
  const trimmed = fullName.trim()
  const parts = trimmed.split(/\s+/)
  const firstName = parts[0] ?? ''
  const lastName = parts.slice(1).join(' ')
  return { firstName, lastName, name: trimmed }
}

export default function LandingApplicationForm({
  id = 'hero-form',
  formName = DEFAULT_FORM_NAME,
  formConfig,
  variant = 'default',
  embedded = false,
  onSuccess,
  headerTitleId,
}: LandingApplicationFormProps) {
  const isConversion = variant === 'conversion'
  const pathname = usePathname()
  const copy = resolveLandingFormConfig(formConfig, pathname)
  const isMinimal = copy.fieldSet === 'minimal'
  const showPhone = copy.fieldSet !== 'minimal'
  const showWebsite = copy.fieldSet === 'full'
  const router = useRouter()
  const [formData, setFormData] = useState<FormDataState>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = formRef.current
    if (form && !form.checkValidity()) {
      form.reportValidity()
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    const utm = getStoredUTMParams()
    const submissionPage =
      typeof window !== 'undefined' ? `${window.location.pathname}${window.location.search}` : ''
    const { firstName, lastName, name } = splitFullName(formData.fullName)

    try {
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          name,
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          website: formData.website.trim(),
          formName,
          submissionPage,
          ...utm,
        }),
      })

      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string }

      if (response.ok && data.ok) {
        trackApplicationConversion({
          form_name: formName,
          submission_page: submissionPage,
          ...utm,
        })
        const navigate = () => {
          if (onSuccess) {
            onSuccess(THANK_YOU_PATH)
            return
          }
          router.push(THANK_YOU_PATH)
        }
        navigate()
        return
      }

      setSubmitMessage(data.error ?? 'Something went wrong. Please try again.')
    } catch {
      setSubmitMessage('Error submitting form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const submitLabel = isConversion ? copy.submitLabelConversion : copy.submitLabelDefault
  const footnote = isConversion ? copy.footnoteConversion : copy.footnoteDefault

  return (
    <div
      id={id}
      className={`google-general-form ${embedded ? '' : applyFormPanelClass} ${embedded ? '' : 'scroll-mt-28'} ${
        isConversion
          ? embedded
            ? 'gg-form-conversion'
            : 'gg-form-conversion p-6 sm:p-8'
          : embedded
            ? ''
            : 'p-7 sm:p-9 md:p-10'
      }`}
    >
      {isConversion ? (
        <header className="gg-form-header">
          <h2 id={headerTitleId} className="gg-form-header__title">
            {copy.title}
          </h2>
          <p className="gg-form-header__sub">{copy.subtitle}</p>
        </header>
      ) : (
        <p className="gg-eyebrow">{copy.title}</p>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={isConversion ? 'mt-5 space-y-5' : 'mt-6 space-y-5'}
        aria-label={copy.ariaLabel}
      >
        {isConversion ? (
          <p className="gg-form-question mb-1">{copy.question}</p>
        ) : (
          <>
            <div className="h-px w-full bg-[var(--color-ink-200)]" aria-hidden />
            <p className="gg-eyebrow">Your details</p>
          </>
        )}

        <div className="space-y-5">
          <div>
            <label htmlFor="landing-fullName" className={applyFormLabelClass}>
              Full name
            </label>
            <input
              id="landing-fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              autoComplete="name"
              className={applyFormInputClass}
            />
          </div>
          {!isMinimal ? (
            <div>
              <label htmlFor="landing-phone" className={applyFormLabelClass}>
                Phone
              </label>
              <input
                id="landing-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required={showPhone}
                autoComplete="tel"
                className={applyFormInputClass}
              />
            </div>
          ) : null}
          <div>
            <label htmlFor="landing-email" className={applyFormLabelClass}>
              Email
            </label>
            <input
              id="landing-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className={applyFormInputClass}
            />
          </div>
          {showWebsite ? (
            <div>
              <label htmlFor="landing-website" className={applyFormLabelClass}>
                Website <span className="font-normal text-[var(--color-ink-300)]">(optional)</span>
              </label>
              <input
                id="landing-website"
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                autoComplete="url"
                placeholder="https://"
                className={applyFormInputClass}
              />
            </div>
          ) : null}
        </div>

        {submitMessage ? (
          <p
            role="status"
            className="rounded-lg border border-red-200/80 bg-white px-4 py-3 text-center font-serif text-sm text-red-900"
          >
            {submitMessage}
          </p>
        ) : null}

        <div className="flex flex-col-reverse gap-3 border-t border-[var(--color-ink-200)] pt-5 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${applyFormBtnPrimaryClass} w-full sm:min-w-[14rem] sm:w-auto`}
          >
            {isSubmitting ? 'Sending…' : submitLabel}
          </button>
        </div>

        <p className="gg-form-footnote text-center sm:text-left">{footnote}</p>
      </form>
    </div>
  )
}
