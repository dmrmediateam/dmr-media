'use client'

import { useRouter } from 'next/navigation'
import { useRef, useState, type FormEvent } from 'react'
import { applyFormBtnPrimaryClass, applyFormInputClass, applyFormLabelClass } from '@/components/applyFormPrimitives'
import FormHoneypot, { readHoneypot } from '@/components/FormHoneypot'
import { saveLandingLeadPrefill } from '@/lib/landing/booking-prefill'
import {
  COMMITMENT_QUESTION,
  QUESTIONS,
  answersSummary,
  labelFor,
  saveQuizAnswers,
  stageFor,
  type ChoiceQuestion,
  type QuizAnswers,
} from '@/lib/landing/lead-quiz'
import { getStoredUTMParams, trackApplicationConversion } from '@/lib/utmTracking'

const FORM_NAME = 'lead-quiz'
/** Choice questions, then the 1-10 commitment scale, then contact details. */
const TOTAL_STEPS = QUESTIONS.length + 2

type Draft = Omit<QuizAnswers, 'commitment'> & { commitment: number | null }

const EMPTY: Draft = {
  experience: '',
  investing: [],
  setup: [],
  difficulty: '',
  team: '',
  volume: '',
  price: '',
  commitment: null,
}

function splitFullName(fullName: string) {
  const name = fullName.trim()
  const parts = name.split(/\s+/)
  return { name, firstName: parts[0] ?? '', lastName: parts.slice(1).join(' ') }
}

const optionClass = (selected: boolean) =>
  `flex min-h-[56px] w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 ${
    selected
      ? 'border-[var(--color-off-black)] bg-[var(--color-off-black)] !text-white'
      : 'border-[var(--color-ink-200)] bg-white hover:border-[var(--color-off-black)]/40'
  }`

export default function LeadQuiz() {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState<Draft>(EMPTY)
  const [contact, setContact] = useState({ fullName: '', email: '', phone: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const choose = (q: ChoiceQuestion, value: string) => {
    if (q.kind === 'single') {
      setDraft((d) => ({ ...d, [q.id]: value }))
      next()
      return
    }
    setDraft((d) => {
      const current = d[q.id] as string[]
      let updated = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
      // "None" clears the others, and picking anything else clears "None".
      if (q.exclusive) updated = value === q.exclusive ? (updated.includes(value) ? [value] : []) : updated.filter((v) => v !== q.exclusive)
      return { ...d, [q.id]: updated }
    })
  }

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = formRef.current
    if (form && !form.checkValidity()) {
      form.reportValidity()
      return
    }
    // Read the decoys before the first state change or await.
    const honeypot = readHoneypot(form)
    const answers: QuizAnswers = { ...draft, commitment: draft.commitment ?? 5 }
    const stage = stageFor(answers.volume)
    const { name, firstName, lastName } = splitFullName(contact.fullName)
    const submissionPage = `${window.location.pathname}${window.location.search}`
    const utm = getStoredUTMParams()

    setSubmitting(true)
    setError('')
    try {
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formName: FORM_NAME,
          name,
          firstName,
          lastName,
          email: contact.email.trim(),
          phone: contact.phone.trim(),
          teamSize: labelFor('team', answers.team),
          annualSalesVolume: labelFor('volume', answers.volume),
          biggestChallenge: labelFor('difficulty', answers.difficulty),
          notes: answersSummary(answers),
          submissionPage,
          ...honeypot,
          ...utm,
        }),
      })
      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string; filtered?: boolean }
      if (!response.ok || !data.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.')
        return
      }
      if (!data.filtered) {
        trackApplicationConversion({ form_name: FORM_NAME, submission_page: submissionPage, quiz_stage: stage, ...utm })
      }
      saveQuizAnswers(answers)
      saveLandingLeadPrefill({ name, email: contact.email.trim(), phone: contact.phone.trim() })
      router.push(`/landing/lead-quiz/${stage}`)
    } catch {
      setError('Error submitting the quiz. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const question = step < QUESTIONS.length ? QUESTIONS[step] : null
  const isCommitment = step === QUESTIONS.length
  const isContact = step === QUESTIONS.length + 1
  const progress = Math.round(((step + 1) / TOTAL_STEPS) * 100)

  return (
    <div
      id="hero-form"
      className="scroll-mt-28 rounded-3xl border border-[var(--color-ink-200)] bg-white p-5 shadow-[0_30px_80px_-40px_rgba(15,15,15,0.35)] sm:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="gg-eyebrow">
          {isContact ? 'Last step' : `Question ${step + 1} of ${TOTAL_STEPS - 1}`}
        </p>
        {step > 0 ? (
          <button type="button" onClick={back} className="gg-eyebrow underline-offset-4 hover:underline">
            ← Back
          </button>
        ) : null}
      </div>
      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-[var(--color-ink-200)]" aria-hidden>
        <div className="h-full rounded-full bg-[var(--color-off-black)] transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {question ? (
        <fieldset className="mt-7" key={question.id}>
          <legend className="gg-display text-2xl font-light leading-snug sm:text-3xl">{question.title}</legend>
          {question.kind === 'multi' ? (
            <p className="gg-body mt-1 !text-sm !text-[var(--gg-text-muted)]">Pick all that apply.</p>
          ) : null}
          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {question.options.map((o) => {
              const value = draft[question.id]
              const selected = Array.isArray(value) ? value.includes(o.value) : value === o.value
              return (
                <button
                  key={o.value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => choose(question, o.value)}
                  className={optionClass(selected)}
                >
                  <span className="gg-body !text-[15px] font-medium !leading-snug !text-inherit">{o.label}</span>
                </button>
              )
            })}
          </div>
          {question.kind === 'multi' ? (
            <button
              type="button"
              onClick={next}
              disabled={(draft[question.id] as string[]).length === 0}
              className={`${applyFormBtnPrimaryClass} mt-6 w-full !rounded-full disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:!px-10`}
            >
              Next →
            </button>
          ) : null}
        </fieldset>
      ) : null}

      {isCommitment ? (
        <fieldset className="mt-7">
          <legend className="gg-display text-2xl font-light leading-snug sm:text-3xl">{COMMITMENT_QUESTION}</legend>
          <div className="mt-5 grid grid-cols-5 gap-2 sm:grid-cols-10">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                aria-pressed={draft.commitment === n}
                aria-label={`${n} out of 10`}
                onClick={() => {
                  setDraft((d) => ({ ...d, commitment: n }))
                  next()
                }}
                className={`${optionClass(draft.commitment === n)} !min-h-[52px] justify-center !px-0`}
              >
                <span className="gg-body !text-base font-semibold !text-inherit">{n}</span>
              </button>
            ))}
          </div>
          <div className="mt-2 flex justify-between">
            <span className="gg-body !text-xs !text-[var(--gg-text-muted)]">Just looking</span>
            <span className="gg-body !text-xs !text-[var(--gg-text-muted)]">Ready now</span>
          </div>
        </fieldset>
      ) : null}

      {isContact ? (
        <form ref={formRef} onSubmit={submit} noValidate className="relative mt-7" aria-label="Where to send your roadmap">
          <FormHoneypot idSuffix="lead-quiz" />
          <h2 className="gg-display text-2xl font-light leading-snug sm:text-3xl">
            Where should we send your personalized real estate sales roadmap?
          </h2>
          <div className="mt-5 grid gap-4">
            <div>
              <label htmlFor="quiz-name" className={applyFormLabelClass}>Full name</label>
              <input
                id="quiz-name"
                name="fullName"
                required
                autoComplete="name"
                value={contact.fullName}
                onChange={(e) => setContact((c) => ({ ...c, fullName: e.target.value }))}
                className={applyFormInputClass}
              />
            </div>
            <div>
              <label htmlFor="quiz-email" className={applyFormLabelClass}>Email</label>
              <input
                id="quiz-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={contact.email}
                onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                className={applyFormInputClass}
              />
            </div>
            <div>
              <label htmlFor="quiz-phone" className={applyFormLabelClass}>Phone</label>
              <input
                id="quiz-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                value={contact.phone}
                onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                className={applyFormInputClass}
              />
            </div>
          </div>
          {error ? (
            <p className="gg-body mt-4 !text-sm !text-[#b42318]" role="alert">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={submitting}
            className={`${applyFormBtnPrimaryClass} mt-6 w-full !rounded-full disabled:opacity-60`}
          >
            {submitting ? 'Building your roadmap…' : 'See my roadmap →'}
          </button>
          <p className="gg-body mt-3 text-center !text-xs !text-[var(--gg-text-muted)]">No spam. Your results show on the next page.</p>
        </form>
      ) : null}
    </div>
  )
}
