'use client'

import { useRouter } from 'next/navigation'
import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { getStoredUTMParams, trackApplicationConversion } from '@/lib/utmTracking'
import {
  applyFormBtnPrimaryClass,
  applyFormInputClass,
  applyFormLabelClass,
  applyFormPanelClass,
} from '@/components/applyFormPrimitives'
import { ANNUAL_SALES_VOLUME_OPTIONS } from '@/lib/application-form'

const FORM_NAME = 'calendar-application'
const THANK_YOU_PATH = '/landing/thank-you-q'

const BOOKING_REASON_OPTIONS = [
  { value: 'just-looking', label: 'Just looking' },
  { value: 'want-website-built', label: 'Want a website built' },
  { value: 'want-more-sales', label: 'Want more sales' },
  { value: 'property-marketing', label: 'Property marketing' },
  { value: 'looking-for-sellers', label: 'Looking for sellers' },
] as const

const initialForm = {
  name: '',
  email: '',
  phone: '',
  profileType: '',
  website: '',
  annualSalesVolume: '',
  notes: '',
}

type FormState = typeof initialForm

const sectionTitleClass =
  'font-serif text-[10px] uppercase tracking-[0.24em] text-[var(--color-off-black)]'

const checkboxLabelClass =
  'flex min-h-[48px] cursor-pointer items-center gap-3 rounded-lg border border-[var(--color-ink-200)] bg-white px-3 py-2.5 font-serif text-sm leading-snug text-[var(--color-off-black)] shadow-[0_1px_0_rgba(15,15,15,0.03)] transition-colors hover:border-[var(--color-off-black)]/22 has-[:checked]:border-[var(--color-off-black)]/30 has-[:checked]:bg-[var(--color-off-black)]/[0.04]'

export default function CalendarPageContent() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>(initialForm)
  const [bookingReasons, setBookingReasons] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const toggleBookingReason = (value: string) => {
    setBookingReasons((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const el = formRef.current
    if (el && !el.checkValidity()) {
      el.reportValidity()
      return
    }

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
          formName: FORM_NAME,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          profileType: form.profileType,
          website: form.website.trim(),
          annualSalesVolume: form.annualSalesVolume,
          notes: form.notes.trim(),
          bookingReason: bookingReasons,
          submissionPage,
          ...utm,
        }),
      })

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean
        error?: string
      }

      if (response.ok && data.ok) {
        trackApplicationConversion({
          form_name: FORM_NAME,
          submission_page: submissionPage,
          ...utm,
        })
        router.push(THANK_YOU_PATH)
        return
      }

      setSubmitMessage(data.error ?? 'Something went wrong. Please try again.')
    } catch {
      setSubmitMessage('Error submitting form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const submitBtnClass = `${applyFormBtnPrimaryClass} w-full max-w-none sm:w-full sm:max-w-none`

  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      <section className="px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 md:pt-32 md:pb-24">
        <div className="container-max">
          <div className="flex flex-col gap-14 sm:gap-16 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start lg:gap-x-16 xl:gap-x-20">
            <div className="mx-auto w-full min-w-0 max-w-xl lg:mx-0 lg:max-w-none">
              <header className="space-y-5 text-center sm:space-y-6 lg:text-left">
                <p className="font-serif text-[10px] uppercase tracking-[0.32em] text-[var(--color-ink-400)] sm:text-[11px]">
                  Application · mutual fit
                </p>
                <h1 className="font-serif text-[1.625rem] font-light leading-[1.12] tracking-[-0.02em] text-[var(--color-off-black)] sm:text-3xl md:text-[2.125rem]">
                  Apply to see if we are the right fit
                </h1>
                <p className="mx-auto max-w-md font-serif text-sm font-light leading-relaxed text-[var(--color-ink-300)] sm:text-base lg:mx-0">
                  Share a few details below so we can understand your goals and confirm whether this is the right fit
                  for both sides before a call.
                </p>
              </header>

              <div className="mt-12 border-t border-[var(--color-ink-200)] pt-10 sm:mt-14 sm:pt-12 lg:mt-16">
                <ul className="flex flex-col gap-8 sm:gap-10">
                  <li className="flex items-start justify-between gap-6 text-left">
                    <div className="min-w-0 space-y-1 pr-4">
                      <p className="font-serif text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
                        SEMrush
                      </p>
                      <p className="font-serif text-sm font-light leading-snug text-[var(--color-off-black)]">
                        Agency partner
                      </p>
                    </div>
                    <img
                      src="/images/logo.BwihUn5s.svg"
                      alt=""
                      className="mt-0.5 h-4 w-auto shrink-0 opacity-50"
                      width={64}
                      height={20}
                    />
                  </li>
                </ul>

                <blockquote className="mt-12 border-l border-[rgba(15,15,15,0.1)] pl-5 sm:mt-14 sm:pl-6">
                  <p className="font-serif text-sm font-light italic leading-[1.65] text-[var(--color-off-black)] sm:text-[0.9375rem]">
                    &ldquo;Once we met with Andrew at DMR, it was a done deal… we cancelled all the other
                    meetings.&rdquo;
                  </p>
                  <footer className="mt-4 font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">
                    Linda F.
                  </footer>
                </blockquote>
              </div>
            </div>

            <div
              id="strategy-scheduler"
              tabIndex={-1}
              className="mx-auto w-full min-w-0 max-w-xl scroll-mt-28 outline-none lg:sticky lg:top-24 lg:mx-0 lg:max-w-none xl:top-28"
            >
              <p className="mb-4 text-center font-serif text-[10px] uppercase tracking-[0.28em] text-[var(--color-ink-400)] lg:mb-5 lg:text-left">
                Application call
              </p>
              <div className={applyFormPanelClass}>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8">
                  <p className="font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
                    Takes about two minutes. We&apos;ll come to the call with your market, rankings, and biggest gaps
                    already mapped.
                  </p>

                  <div className="space-y-5 border-t border-[var(--color-ink-200)] pt-6">
                    <h2 className={sectionTitleClass}>Contact details</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label htmlFor="calendar-name" className={applyFormLabelClass}>
                          Full name
                        </label>
                        <input
                          id="calendar-name"
                          name="name"
                          value={form.name}
                          onChange={handleFieldChange}
                          required
                          autoComplete="name"
                          placeholder="Andrew Rohm"
                          className={applyFormInputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="calendar-email" className={applyFormLabelClass}>
                          Business email
                        </label>
                        <input
                          id="calendar-email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleFieldChange}
                          required
                          autoComplete="email"
                          placeholder="you@example.com"
                          className={applyFormInputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="calendar-phone" className={applyFormLabelClass}>
                          Phone
                        </label>
                        <input
                          id="calendar-phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleFieldChange}
                          required
                          autoComplete="tel"
                          placeholder="Your best number"
                          className={applyFormInputClass}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 border-t border-[var(--color-ink-200)] pt-6">
                    <h2 className={sectionTitleClass}>Business profile</h2>
                    <div>
                      <label htmlFor="calendar-profileType" className={applyFormLabelClass}>
                        Which of the following best describes you?
                      </label>
                      <select
                        id="calendar-profileType"
                        name="profileType"
                        value={form.profileType}
                        onChange={handleFieldChange}
                        required
                        className={`${applyFormInputClass} cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        <option value="real-estate-agent">Real estate agent</option>
                        <option value="real-estate-team">Real estate team (5+ agents)</option>
                        <option value="brokerage">Brokerage</option>
                        <option value="developer">Developer</option>
                        <option value="investor">Investor</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="calendar-website" className={applyFormLabelClass}>
                        Current website
                      </label>
                      <input
                        id="calendar-website"
                        name="website"
                        type="url"
                        value={form.website}
                        onChange={handleFieldChange}
                        placeholder="https://"
                        autoComplete="url"
                        className={applyFormInputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="calendar-annualSalesVolume" className={applyFormLabelClass}>
                        Annual sales volume
                      </label>
                      <select
                        id="calendar-annualSalesVolume"
                        name="annualSalesVolume"
                        value={form.annualSalesVolume}
                        onChange={handleFieldChange}
                        required
                        className={`${applyFormInputClass} cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        {ANNUAL_SALES_VOLUME_OPTIONS.map((label) => (
                          <option key={label} value={label}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-5 border-t border-[var(--color-ink-200)] pt-6">
                    <h2 className={sectionTitleClass}>Intent</h2>
                    <fieldset className="space-y-3">
                      <legend className={applyFormLabelClass}>
                        What is the reason you are booking? (Select all that apply)
                      </legend>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {BOOKING_REASON_OPTIONS.map(({ value, label }) => (
                          <label key={value} className={checkboxLabelClass}>
                            <input
                              type="checkbox"
                              checked={bookingReasons.includes(value)}
                              onChange={() => toggleBookingReason(value)}
                              className="h-4 w-4 shrink-0 rounded border-[var(--color-ink-200)] text-[var(--color-off-black)] focus:ring-[var(--color-off-black)]/20"
                            />
                            <span>{label}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                    <div>
                      <label htmlFor="calendar-notes" className={applyFormLabelClass}>
                        Any additional information you would like us to know?
                      </label>
                      <textarea
                        id="calendar-notes"
                        name="notes"
                        value={form.notes}
                        onChange={handleFieldChange}
                        rows={5}
                        className={`${applyFormInputClass} min-h-[7rem] resize-y`}
                      />
                    </div>
                  </div>

                  {submitMessage ? (
                    <p
                      role="status"
                      className="rounded-lg border border-red-200/80 bg-white px-4 py-3 text-center font-serif text-sm leading-snug text-red-900 shadow-[0_1px_0_rgba(15,15,15,0.04)]"
                    >
                      {submitMessage}
                    </p>
                  ) : null}

                  <div className="border-t border-[var(--color-ink-200)] pt-6">
                    <button type="submit" disabled={isSubmitting} className={submitBtnClass}>
                      {isSubmitting ? 'Sending…' : 'Submit application'}
                    </button>
                  </div>

                  <p className="text-center font-serif text-sm leading-relaxed text-[var(--color-ink-400)]">
                    No spam. No pressure—just a direct conversation about fit.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
