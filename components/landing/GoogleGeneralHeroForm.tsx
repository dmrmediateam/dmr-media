'use client'

import { useRouter } from 'next/navigation'
import { useRef, useState, type ChangeEvent, type FormEvent, type KeyboardEvent } from 'react'
import {
  applyFormBtnGhostClass,
  applyFormBtnPrimaryClass,
  applyFormInputClass,
  applyFormLabelClass,
  applyFormPanelClass,
} from '@/components/applyFormPrimitives'
import GoogleGeneralBulletSelect from '@/components/landing/GoogleGeneralBulletSelect'
import { ANNUAL_SALES_VOLUME_OPTIONS, isGoogleGeneralDisqualifiedVolume, isGoogleGeneralQualifiedVolume } from '@/lib/application-form'
import { getStoredUTMParams, trackApplicationConversion, trackGoogleGeneralQualifiedSignup } from '@/lib/utmTracking'

const TOTAL_STEPS = 3
const DEFAULT_FORM_NAME = 'google-general-modal'
const THANK_YOU_PATH = '/landing/thank-you-q'
const DQ_THANK_YOU_PATH = '/landing/thank-you-dq'

const TEAM_SIZE_OPTIONS = ['Solo', '2-4', '5-10', '10-20', '20+'] as const

const STEP_LABELS = ['Team size', 'Annual volume', 'Your details'] as const

const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  annualSalesVolume: '',
  teamSize: '',
}

type FormDataState = typeof initialFormData

type GoogleGeneralHeroFormProps = {
  id?: string
  formName?: string
  variant?: 'default' | 'conversion'
}

function splitFullName(fullName: string) {
  const trimmed = fullName.trim()
  const parts = trimmed.split(/\s+/)
  const firstName = parts[0] ?? ''
  const lastName = parts.slice(1).join(' ')
  return { firstName, lastName, name: trimmed }
}

export default function GoogleGeneralHeroForm({
  id = 'hero-form',
  formName = DEFAULT_FORM_NAME,
  variant = 'default',
}: GoogleGeneralHeroFormProps) {
  const isConversion = variant === 'conversion'
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormDataState>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [stepError, setStepError] = useState('')
  const stepPanelRef = useRef<HTMLDivElement>(null)

  const progressPercent = ((step + 1) / TOTAL_STEPS) * 100

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBulletSelect = (field: 'teamSize' | 'annualSalesVolume', value: string) => {
    setStepError('')
    setSubmitMessage('')
    setFormData((prev) => ({ ...prev, [field]: value }))
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1))
  }

  const validateCurrentStep = () => {
    if (step === 0 && !formData.teamSize) {
      setStepError('Please select a team size.')
      return false
    }
    if (step === 1 && !formData.annualSalesVolume) {
      setStepError('Please select your annual sales volume.')
      return false
    }

    const root = stepPanelRef.current
    if (!root) return true
    const fields = root.querySelectorAll<HTMLInputElement>('input[required]')
    let valid = true
    fields.forEach((el) => {
      if (!valid) return
      if (!el.checkValidity()) {
        el.reportValidity()
        valid = false
      }
    })
    if (!valid) setStepError('')
    return valid
  }

  const goBack = () => {
    setSubmitMessage('')
    setStepError('')
    setStep((s) => Math.max(0, s - 1))
  }

  const handleFormKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key !== 'Enter') return
    if (step >= TOTAL_STEPS - 1) return
    if ((e.target as HTMLElement).closest('button')) return
    e.preventDefault()
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateCurrentStep()) return

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
          email: formData.email,
          phone: formData.phone,
          annualSalesVolume: formData.annualSalesVolume,
          teamSize: formData.teamSize,
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
        const thankYouPath = isGoogleGeneralDisqualifiedVolume(formData.annualSalesVolume)
          ? DQ_THANK_YOU_PATH
          : THANK_YOU_PATH
        if (isGoogleGeneralQualifiedVolume(formData.annualSalesVolume)) {
          trackGoogleGeneralQualifiedSignup(() => router.push(thankYouPath))
        } else {
          router.push(thankYouPath)
        }
        return
      }

      setSubmitMessage(data.error ?? 'Something went wrong. Please try again.')
    } catch {
      setSubmitMessage('Error submitting form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      id={id}
      className={`google-general-form ${applyFormPanelClass} scroll-mt-28 ${
        isConversion ? 'gg-form-conversion p-6 sm:p-8' : 'p-7 sm:p-9 md:p-10'
      }`}
    >
      {isConversion ? (
        <header className="gg-form-header">
          <h2 className="gg-form-header__title">Book your strategy review</h2>
          <p className="gg-form-header__sub">Takes about 60 seconds</p>
        </header>
      ) : (
        <p className="gg-eyebrow">Book your strategy review</p>
      )}

      <form
        onKeyDown={handleFormKeyDown}
        onSubmit={step === TOTAL_STEPS - 1 ? handleSubmit : (e) => e.preventDefault()}
        className={isConversion ? 'mt-5 space-y-5' : 'mt-6 space-y-5'}
        aria-label="Strategy review application"
      >
        {isConversion ? (
          <div
            className="gg-form-progress-wrap"
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={TOTAL_STEPS}
            aria-valuenow={step + 1}
            aria-label={`Step ${step + 1} of ${TOTAL_STEPS}: ${STEP_LABELS[step]}`}
          >
            <div className="gg-form-progress-track">
              <div className="gg-form-progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        ) : (
          <>
            <div className="h-px w-full bg-[var(--color-ink-200)]" aria-hidden />
            <p className="gg-eyebrow">
              Step {step + 1} of {TOTAL_STEPS}
            </p>
          </>
        )}

        <div ref={stepPanelRef} className="space-y-5" aria-live="polite" aria-atomic="true">
          {step === 0 ? (
            <GoogleGeneralBulletSelect
              name="teamSize"
              label="How large is your team?"
              value={formData.teamSize}
              options={TEAM_SIZE_OPTIONS}
              onChange={(value) => handleBulletSelect('teamSize', value)}
              error={stepError || undefined}
              legendClassName={isConversion ? 'gg-form-question' : undefined}
            />
          ) : null}

          {step === 1 ? (
            <GoogleGeneralBulletSelect
              name="annualSalesVolume"
              label="What is your annual sales volume?"
              value={formData.annualSalesVolume}
              options={ANNUAL_SALES_VOLUME_OPTIONS}
              onChange={(value) => handleBulletSelect('annualSalesVolume', value)}
              error={stepError || undefined}
              legendClassName={isConversion ? 'gg-form-question' : undefined}
            />
          ) : null}

          {step === 2 ? (
            <>
              {isConversion ? (
                <p className="gg-form-question mb-1">Where should we send your strategy review?</p>
              ) : null}
              <div>
                <label htmlFor="gg-fullName" className={applyFormLabelClass}>
                  Full name
                </label>
                <input
                  id="gg-fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className={applyFormInputClass}
                />
              </div>
              <div>
                <label htmlFor="gg-email" className={applyFormLabelClass}>
                  Email
                </label>
                <input
                  id="gg-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className={applyFormInputClass}
                />
              </div>
              <div>
                <label htmlFor="gg-phone" className={applyFormLabelClass}>
                  Phone
                </label>
                <input
                  id="gg-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  className={applyFormInputClass}
                />
              </div>
            </>
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

        <div
          className={`flex flex-col-reverse gap-3 border-t border-[var(--color-ink-200)] pt-5 sm:flex-row sm:items-center ${
            step > 0 ? 'sm:justify-between' : 'sm:justify-end'
          }`}
        >
          {step > 0 ? (
            <button type="button" onClick={goBack} disabled={isSubmitting} className={applyFormBtnGhostClass}>
              Back
            </button>
          ) : null}
          <div className="flex w-full sm:w-auto sm:justify-end">
            {step === TOTAL_STEPS - 1 ? (
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${applyFormBtnPrimaryClass} w-full sm:min-w-[14rem] sm:w-auto`}
              >
                {isSubmitting
                  ? 'Sending…'
                  : isConversion
                    ? 'Book my strategy review'
                    : 'Submit application'}
              </button>
            ) : null}
          </div>
        </div>

        <p className="gg-form-footnote text-center sm:text-left">
          {isConversion
            ? 'No spam. 30-day qualified-lead guarantee.'
            : 'No spam. No pressure, just a direct conversation about fit.'}
        </p>
      </form>
    </div>
  )
}
