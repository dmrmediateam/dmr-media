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
import { ANNUAL_SALES_VOLUME_OPTIONS, isGoogleGeneralDisqualifiedVolume } from '@/lib/application-form'
import { getStoredUTMParams, trackConversion } from '@/lib/utmTracking'

const TOTAL_STEPS = 2
const DEFAULT_FORM_NAME = 'google-general-modal'
const THANK_YOU_PATH = '/landing/thank-you-q'
const DQ_THANK_YOU_PATH = '/landing/thank-you-dq'

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  market: '',
  annualSalesVolume: '',
  teamSize: '',
}

type FormDataState = typeof initialFormData

type GoogleGeneralHeroFormProps = {
  id?: string
  formName?: string
}

export default function GoogleGeneralHeroForm({
  id = 'hero-form',
  formName = DEFAULT_FORM_NAME,
}: GoogleGeneralHeroFormProps) {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormDataState>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const stepPanelRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateCurrentStep = () => {
    const root = stepPanelRef.current
    if (!root) return true
    const fields = root.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
      'input[required], select[required]'
    )
    let valid = true
    fields.forEach((el) => {
      if (!valid) return
      if (!el.checkValidity()) {
        el.reportValidity()
        valid = false
      }
    })
    return valid
  }

  const goNext = () => {
    if (!validateCurrentStep()) return
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1))
  }

  const goBack = () => {
    setSubmitMessage('')
    setStep((s) => Math.max(0, s - 1))
  }

  const handleFormKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key !== 'Enter') return
    if (step >= TOTAL_STEPS - 1) return
    if ((e.target as HTMLElement).closest('button')) return
    e.preventDefault()
    goNext()
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateCurrentStep()) return

    setIsSubmitting(true)
    setSubmitMessage('')

    const utm = getStoredUTMParams()
    const submissionPage =
      typeof window !== 'undefined' ? `${window.location.pathname}${window.location.search}` : ''

    try {
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formName,
          submissionPage,
          ...utm,
        }),
      })

      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string }

      if (response.ok && data.ok) {
        trackConversion('Lead', {
          form_name: formName,
          submission_page: submissionPage,
          ...utm,
        })
        const thankYouPath = isGoogleGeneralDisqualifiedVolume(formData.annualSalesVolume)
          ? DQ_THANK_YOU_PATH
          : THANK_YOU_PATH
        router.push(thankYouPath)
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
      className={`google-general-form ${applyFormPanelClass} scroll-mt-28 p-7 sm:p-9 md:p-10`}
    >
      <p className="gg-eyebrow">Book your strategy review</p>

      <form
        onKeyDown={handleFormKeyDown}
        onSubmit={step === TOTAL_STEPS - 1 ? handleSubmit : (e) => e.preventDefault()}
        className="mt-6 space-y-5"
      >
        <div className="h-px w-full bg-[var(--color-ink-200)]" aria-hidden />
        <p className="gg-eyebrow">Step {step + 1} of {TOTAL_STEPS}</p>

        <div ref={stepPanelRef} className="space-y-5">
          {step === 0 ? (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="gg-firstName" className={applyFormLabelClass}>
                    First name
                  </label>
                  <input
                    id="gg-firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    autoComplete="given-name"
                    className={applyFormInputClass}
                  />
                </div>
                <div>
                  <label htmlFor="gg-lastName" className={applyFormLabelClass}>
                    Last name
                  </label>
                  <input
                    id="gg-lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    autoComplete="family-name"
                    className={applyFormInputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="gg-email" className={applyFormLabelClass}>
                  Business email
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

          {step === 1 ? (
            <>
              <div>
                <label htmlFor="gg-market" className={applyFormLabelClass}>
                  Market / city
                </label>
                <input
                  id="gg-market"
                  name="market"
                  value={formData.market}
                  onChange={handleChange}
                  required
                  autoComplete="address-level2"
                  className={applyFormInputClass}
                />
              </div>
              <div>
                <label htmlFor="gg-annualSalesVolume" className={applyFormLabelClass}>
                  Annual sales volume
                </label>
                <select
                  id="gg-annualSalesVolume"
                  name="annualSalesVolume"
                  value={formData.annualSalesVolume}
                  onChange={handleChange}
                  required
                  className={`${applyFormInputClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {ANNUAL_SALES_VOLUME_OPTIONS.map((label) => (
                    <option key={label}>{label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="gg-teamSize" className={applyFormLabelClass}>
                  Team size
                </label>
                <select
                  id="gg-teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  required
                  className={`${applyFormInputClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Solo</option>
                  <option>2-4</option>
                  <option>5-10</option>
                  <option>10-20</option>
                  <option>20+</option>
                </select>
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
          className={`flex flex-col-reverse gap-3 border-t border-[var(--color-ink-200)] pt-6 sm:flex-row sm:items-center ${
            step > 0 ? 'sm:justify-between' : 'sm:justify-end'
          }`}
        >
          {step > 0 ? (
            <button type="button" onClick={goBack} disabled={isSubmitting} className={applyFormBtnGhostClass}>
              Back
            </button>
          ) : null}
          <div className="flex w-full sm:w-auto sm:justify-end">
            {step < TOTAL_STEPS - 1 ? (
              <button type="button" onClick={goNext} className={`${applyFormBtnPrimaryClass} w-full sm:w-auto`}>
                Continue
              </button>
            ) : (
              <button type="submit" disabled={isSubmitting} className={`${applyFormBtnPrimaryClass} w-full sm:w-auto`}>
                {isSubmitting ? 'Sending…' : 'Submit application'}
              </button>
            )}
          </div>
        </div>

        <p className="gg-form-footnote text-center">
          No spam. No pressure—just a direct conversation about fit.
        </p>
      </form>
    </div>
  )
}
