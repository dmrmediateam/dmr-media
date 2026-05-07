'use client'

import { usePathname, useRouter } from 'next/navigation'
import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react'
import { getStoredUTMParams, trackConversion } from '@/lib/utmTracking'

const TOTAL_STEPS = 2
const DEFAULT_APPLY_FORM_NAME = 'google-general-strategy-call'

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

const inputClass =
  'w-full min-h-[48px] rounded-lg border border-[var(--color-ink-200)] bg-white px-3 py-2.5 font-serif text-base leading-normal text-[var(--color-off-black)] placeholder:text-[var(--color-ink-400)]/80 shadow-[0_1px_0_rgba(15,15,15,0.03)] transition-colors focus:border-[var(--color-off-black)] focus:outline-none focus:ring-1 focus:ring-[var(--color-off-black)]/15'

const labelClass =
  'mb-2 block font-serif text-[11px] font-normal uppercase tracking-[0.16em] text-[var(--color-ink-300)]'

const btnPrimary =
  'inline-flex min-h-[48px] w-full items-center justify-center rounded-lg px-6 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_1px_0_rgba(15,15,15,0.06)] transition-colors bg-[var(--color-off-black)] hover:bg-[var(--color-off-black)]/88 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] disabled:pointer-events-none disabled:opacity-45 sm:w-auto sm:min-w-[10.5rem]'

const btnGhost =
  'inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-[var(--color-ink-200)] bg-white px-6 font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] shadow-[0_1px_0_rgba(15,15,15,0.03)] transition-colors hover:border-[var(--color-off-black)]/22 hover:bg-[var(--color-off-black)]/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] disabled:pointer-events-none disabled:opacity-45 sm:w-auto'

export default function ApplyModal() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [formName, setFormName] = useState(DEFAULT_APPLY_FORM_NAME)
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormDataState>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const stepPanelRef = useRef<HTMLDivElement>(null)

  const formDataRef = useRef(formData)
  const formNameRef = useRef(formName)
  const eligibleForPartialRef = useRef(false)
  const partialSentRef = useRef(false)
  const submissionCompleteRef = useRef(false)

  formDataRef.current = formData
  formNameRef.current = formName

  const flushPartialLead = useCallback(() => {
    if (!eligibleForPartialRef.current || partialSentRef.current || submissionCompleteRef.current) {
      return
    }
    const fd = formDataRef.current
    if (!fd.email?.trim()) return

    partialSentRef.current = true

    const utm = getStoredUTMParams()
    const submissionPage =
      typeof window !== 'undefined' ? `${window.location.pathname}${window.location.search}` : ''

    const body = JSON.stringify({
      ...fd,
      formName: formNameRef.current,
      submissionPage,
      ...utm,
      submissionStatus: 'partial' as const,
    })

    const url = '/api/application'
    if (typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([body], { type: 'application/json' })
      if (navigator.sendBeacon(url, blob)) return
    }
    void fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    })
  }, [])

  const close = useCallback(() => {
    flushPartialLead()
    setIsOpen(false)
    setSubmitMessage('')
    setStep(0)
    setFormData(initialFormData)
    setFormName(DEFAULT_APPLY_FORM_NAME)
  }, [flushPartialLead])

  useEffect(() => {
    const handleOpenModal = (event: Event) => {
      const detail = (event as CustomEvent<{ formName?: string }>).detail
      setFormName(
        typeof detail?.formName === 'string' && detail.formName.trim()
          ? detail.formName.trim()
          : DEFAULT_APPLY_FORM_NAME
      )
      setIsOpen(true)
    }
    window.addEventListener('openApplyModal', handleOpenModal)
    return () => window.removeEventListener('openApplyModal', handleOpenModal)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    setStep(0)
    setSubmitMessage('')
    setFormData(initialFormData)
    eligibleForPartialRef.current = false
    partialSentRef.current = false
    submissionCompleteRef.current = false
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    const onPageHide = () => {
      flushPartialLead()
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('pagehide', onPageHide)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('pagehide', onPageHide)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, close, flushPartialLead])

  const prevPathnameRef = useRef(pathname)
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname
      if (isOpen) flushPartialLead()
    }
  }, [pathname, isOpen, flushPartialLead])

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
    setStep((s) => {
      if (s === 0) eligibleForPartialRef.current = true
      return Math.min(s + 1, TOTAL_STEPS - 1)
    })
  }

  const goBack = () => {
    setSubmitMessage('')
    setStep((s) => Math.max(0, s - 1))
  }

  const handleFormKeyDown = (e: ReactKeyboardEvent<HTMLFormElement>) => {
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

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean
        redirectPath?: string
        error?: string
      }

      if (response.ok && data.ok && typeof data.redirectPath === 'string') {
        submissionCompleteRef.current = true
        trackConversion('Lead', {
          form_name: formName,
          submission_page: submissionPage,
          ...utm,
        })
        close()
        router.push(data.redirectPath)
        return
      }

      if (response.ok && data.ok) {
        submissionCompleteRef.current = true
        trackConversion('Lead', {
          form_name: formName,
          submission_page: submissionPage,
          ...utm,
        })
        setSubmitMessage("Thank you! We'll be in touch shortly.")
        setFormData(initialFormData)
        setStep(0)
        setTimeout(() => close(), 2000)
        return
      }

      setSubmitMessage(data.error ?? 'Something went wrong. Please try again.')
    } catch {
      setSubmitMessage('Error submitting form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px] transition-opacity"
        onClick={close}
        aria-hidden="true"
      />

      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="presentation"
        onClick={close}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="apply-modal-title"
          aria-describedby="apply-modal-step-label apply-modal-intro"
          className="max-h-[min(90vh,40rem)] w-full max-w-[26rem] overflow-y-auto rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] shadow-[0_12px_40px_-12px_rgba(15,15,15,0.12),0_1px_0_rgba(15,15,15,0.04)]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-[1] flex items-start justify-between gap-4 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] px-6 py-6">
            <div className="min-w-0 pr-2">
              <p
                id="apply-modal-step-label"
                className="mb-2 font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]"
              >
                Step {step + 1} of {TOTAL_STEPS}
              </p>
              <h2
                id="apply-modal-title"
                className="font-serif text-xl font-light leading-snug tracking-tight text-[var(--color-off-black)] sm:text-2xl"
              >
                Let&apos;s See What You&apos;re Missing
              </h2>
            </div>
            <button
              type="button"
              onClick={close}
              className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-transparent text-[var(--color-ink-400)] transition-colors hover:border-[var(--color-ink-200)] hover:bg-white hover:text-[var(--color-off-black)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)]"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 pb-1 pt-4">
            <div className="h-1 w-full overflow-hidden rounded-full bg-[var(--color-ink-200)]/80">
              <div
                className="h-full rounded-full bg-[var(--color-off-black)] transition-[width] duration-300 ease-out"
                style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
              />
            </div>
          </div>

          <form
            onKeyDown={handleFormKeyDown}
            onSubmit={step === TOTAL_STEPS - 1 ? handleSubmit : (e) => e.preventDefault()}
            className="space-y-6 px-6 pb-7 pt-6"
          >
            <p
              id="apply-modal-intro"
              className="font-serif text-sm leading-relaxed text-[var(--color-ink-300)]"
            >
              Takes about two minutes. We&apos;ll come to the call with your market, rankings, and biggest gaps
              already mapped.
            </p>

            <div ref={stepPanelRef} className="space-y-5">
              {step === 0 ? (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="apply-modal-firstName" className={labelClass}>
                        First name
                      </label>
                      <input
                        id="apply-modal-firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        autoComplete="given-name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="apply-modal-lastName" className={labelClass}>
                        Last name
                      </label>
                      <input
                        id="apply-modal-lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        autoComplete="family-name"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="apply-modal-email" className={labelClass}>
                      Business email
                    </label>
                    <input
                      id="apply-modal-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="apply-modal-phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="apply-modal-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      className={inputClass}
                    />
                  </div>
                </>
              ) : null}

              {step === 1 ? (
                <>
                  <div>
                    <label htmlFor="apply-modal-market" className={labelClass}>
                      Market / city
                    </label>
                    <input
                      id="apply-modal-market"
                      name="market"
                      value={formData.market}
                      onChange={handleChange}
                      required
                      autoComplete="address-level2"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="apply-modal-annualSalesVolume" className={labelClass}>
                      Annual sales volume
                    </label>
                    <select
                      id="apply-modal-annualSalesVolume"
                      name="annualSalesVolume"
                      value={formData.annualSalesVolume}
                      onChange={handleChange}
                      required
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <option>Under $20M</option>
                      <option>$20M-$40M</option>
                      <option>$40M-$75M</option>
                      <option>$75M-$150M</option>
                      <option>$150M+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="apply-modal-teamSize" className={labelClass}>
                      Team size
                    </label>
                    <select
                      id="apply-modal-teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      required
                      className={`${inputClass} cursor-pointer`}
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
                className={`rounded-lg border px-4 py-3 text-center font-serif text-sm leading-snug ${
                  submitMessage.includes('Thank you')
                    ? 'border-emerald-200/80 bg-white text-emerald-900 shadow-[0_1px_0_rgba(15,15,15,0.04)]'
                    : 'border-red-200/80 bg-white text-red-900 shadow-[0_1px_0_rgba(15,15,15,0.04)]'
                }`}
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
                <div className="flex w-full sm:w-auto">
                  <button type="button" onClick={goBack} disabled={isSubmitting} className={btnGhost}>
                    Back
                  </button>
                </div>
              ) : null}
              <div className="flex w-full sm:w-auto sm:justify-end">
                {step < TOTAL_STEPS - 1 ? (
                  <button type="button" onClick={goNext} className={btnPrimary}>
                    Continue
                  </button>
                ) : (
                  <button type="submit" disabled={isSubmitting} className={btnPrimary}>
                    {isSubmitting ? 'Sending…' : 'Submit application'}
                  </button>
                )}
              </div>
            </div>

            <p className="text-center font-serif text-sm leading-relaxed text-[var(--color-ink-400)]">
              No spam. No pressure—just a direct conversation about fit.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
