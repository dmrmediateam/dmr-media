'use client'

import { useRouter } from 'next/navigation'
import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react'

const TOTAL_STEPS = 3

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  market: '',
  annualSalesVolume: '',
  teamSize: '',
  biggestChallenge: '',
}

type FormDataState = typeof initialFormData

export default function ApplyModal() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormDataState>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const stepPanelRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    setSubmitMessage('')
    setStep(0)
    setFormData(initialFormData)
  }, [])

  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true)
    window.addEventListener('openApplyModal', handleOpenModal)
    return () => window.removeEventListener('openApplyModal', handleOpenModal)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    setStep(0)
    setSubmitMessage('')
    setFormData(initialFormData)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, close])

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

    try {
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formName: 'google-general-strategy-call',
        }),
      })

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean
        redirectPath?: string
        error?: string
      }

      if (response.ok && data.ok && typeof data.redirectPath === 'string') {
        close()
        router.push(data.redirectPath)
        return
      }

      if (response.ok && data.ok) {
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

  const inputClass =
    'w-full min-h-[46px] border-0 border-b border-[var(--color-ink-300)] bg-transparent px-0 text-[var(--color-off-black)] focus:outline-none focus:border-[var(--color-off-black)]'
  const labelClass =
    'block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)] mb-2'

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={close}
        aria-hidden="true"
      />

      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="presentation"
        onClick={close}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="apply-modal-title"
          aria-describedby="apply-modal-step-label"
          className="bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b border-[var(--color-ink-200)] p-6 flex justify-between items-start gap-4">
            <div>
              <p id="apply-modal-step-label" className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-400)] mb-2">
                Step {step + 1} of {TOTAL_STEPS}
              </p>
              <h2
                id="apply-modal-title"
                className="font-serif text-xl text-[var(--color-off-black)]"
              >
                Let&apos;s See What You&apos;re Missing
              </h2>
            </div>
            <button
              type="button"
              onClick={close}
              className="shrink-0 text-[var(--color-ink-400)] hover:text-[var(--color-off-black)] transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 pt-2 pb-1">
            <div className="h-1 w-full bg-[var(--color-ink-200)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--color-off-black)] transition-[width] duration-300 ease-out"
                style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
              />
            </div>
          </div>

          <form
            onKeyDown={handleFormKeyDown}
            onSubmit={step === TOTAL_STEPS - 1 ? handleSubmit : (e) => e.preventDefault()}
            className="p-6 space-y-5"
          >
            <p className="text-sm text-[var(--color-ink-400)] font-serif">
              Takes 2 minutes. We&apos;ll come prepared with your market, rankings, and biggest growth gaps
              already mapped.
            </p>

            <div ref={stepPanelRef}>
              {step === 0 ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="apply-modal-firstName" className={labelClass}>
                        First Name
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
                        Last Name
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
                      Business Email
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
                      Phone Number
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
                      Your Market / City
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
                      Annual Sales Volume
                    </label>
                    <select
                      id="apply-modal-annualSalesVolume"
                      name="annualSalesVolume"
                      value={formData.annualSalesVolume}
                      onChange={handleChange}
                      required
                      className={inputClass}
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
                      Team Size
                    </label>
                    <select
                      id="apply-modal-teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      required
                      className={inputClass}
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

              {step === 2 ? (
                <div>
                  <label htmlFor="apply-modal-biggestChallenge" className={labelClass}>
                    Biggest Challenge Right Now
                  </label>
                  <select
                    id="apply-modal-biggestChallenge"
                    name="biggestChallenge"
                    value={formData.biggestChallenge}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Not ranking on Google</option>
                    <option>Poor ad ROI</option>
                    <option>Not enough inbound leads</option>
                    <option>Need more listing leads</option>
                    <option>Weak presence vs competitors</option>
                    <option>Starting from zero</option>
                  </select>
                </div>
              ) : null}
            </div>

            {submitMessage ? (
              <p
                className={`text-sm text-center font-serif ${submitMessage.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}
              >
                {submitMessage}
              </p>
            ) : null}

            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-between sm:items-center pt-1">
              <div className="flex gap-3">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={isSubmitting}
                    className="inline-flex min-h-[52px] items-center justify-center px-6 border border-[var(--color-ink-300)] text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs hover:border-[var(--color-off-black)] transition-colors disabled:opacity-50"
                  >
                    Back
                  </button>
                ) : null}
              </div>
              <div className="flex gap-3 sm:ml-auto">
                {step < TOTAL_STEPS - 1 ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex min-h-[52px] items-center justify-center px-8 bg-[var(--color-off-black)] text-white uppercase tracking-[0.15em] text-xs hover:bg-[var(--color-off-black)]/90 transition-colors"
                  >
                    Continue →
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-[52px] items-center justify-center px-8 bg-[var(--color-off-black)] text-white uppercase tracking-[0.15em] text-xs hover:bg-[var(--color-off-black)]/90 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Apply today →'}
                  </button>
                )}
              </div>
            </div>

            <p className="text-xs text-[var(--color-ink-400)] text-center font-serif">
              No spam. No sales pressure. Just a straight conversation.
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
