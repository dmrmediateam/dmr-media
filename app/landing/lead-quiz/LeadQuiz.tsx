'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import FormHoneypot, { readHoneypot } from '@/components/FormHoneypot'
import { saveLandingLeadPrefill } from '@/lib/landing/booking-prefill'
import {
  COMMITMENT_QUESTION,
  QUESTIONS,
  answersSummary,
  labelFor,
  saveQuizAnswers,
  saveQuizPlan,
  stageFor,
  type ChoiceQuestion,
  type QuizAnswers,
  type QuizPlan,
} from '@/lib/landing/lead-quiz'
import { getStoredUTMParams, trackApplicationConversion } from '@/lib/utmTracking'

const FORM_NAME = 'lead-quiz'
/** Choice questions, then the 1-10 commitment scale, then contact details. */
const TOTAL_STEPS = QUESTIONS.length + 2
const GUIDE = { name: 'Andrew Rohm', role: 'Founder, DMR Media', photo: '/images/team/andrew-rohm-avatar.webp' }

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

/** Wix-style answer: full-width, outlined, label centered. */
const optionClass = (selected: boolean) =>
  `relative flex min-h-[52px] w-full items-center justify-center rounded-xl border px-10 py-2.5 text-center font-sans text-[15px] font-medium leading-snug transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 sm:text-base ${
    selected
      ? 'border-[var(--color-off-black)] bg-[var(--color-off-black)]/[0.04] !text-[var(--color-off-black)] shadow-[inset_0_0_0_1px_var(--color-off-black)]'
      : 'border-[var(--color-ink-200)] bg-white !text-[var(--color-off-black)] hover:border-[var(--color-off-black)]/50 hover:bg-[#fafaf9]'
  }`

const inputClass =
  'block w-full rounded-xl border border-[var(--color-ink-200)] bg-white px-4 py-3.5 font-sans text-base text-[var(--color-off-black)] placeholder:text-[var(--color-ink-300)] focus:border-[var(--color-off-black)] focus:outline-none focus:ring-2 focus:ring-[var(--color-off-black)]/10'

const titleClass = 'font-sans text-[1.35rem] font-semibold leading-snug tracking-tight !text-[var(--color-off-black)] sm:text-2xl'

/** The quiz as a Wix-style popup: a guide avatar over a white card, one question at a time. */
export default function LeadQuiz({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState<Draft>(EMPTY)
  const [contact, setContact] = useState({ fullName: '', email: '', phone: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  // Local testing: on localhost, ?test=1 writes the AI plan without sending a lead anywhere.
  const [testMode, setTestMode] = useState(false)
  useEffect(() => {
    setTestMode(process.env.NODE_ENV === 'development' && new URLSearchParams(window.location.search).get('test') === '1')
  }, [])

  // Lock page scroll, close on Escape, and move focus into the dialog while it's open.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    cardRef.current?.focus()
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  // Each new question starts at the top of the card.
  useEffect(() => {
    cardRef.current?.scrollTo({ top: 0 })
  }, [step])

  if (!open) return null

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
    if (testMode) {
      try {
        const res = await fetch('/api/dev/quiz-plan', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ quizAnswers: answers }),
        })
        const data = (await res.json().catch(() => ({}))) as { plan?: QuizPlan | null; error?: string }
        if (data.error) console.warn('[lead-quiz test] plan not generated:', data.error)
        saveQuizAnswers(answers)
        saveQuizPlan(data.plan ?? null)
        saveLandingLeadPrefill({ name, email: contact.email.trim(), phone: contact.phone.trim() })
        router.push(`/landing/lead-quiz/${stage}`)
      } catch {
        setError('Test mode: the plan request failed. Check the dev server.')
      } finally {
        setSubmitting(false)
      }
      return
    }
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
          // Structured answers: the server sends them to the quiz Zap as labeled fields (Kit sends the roadmap email).
          quizAnswers: answers,
          submissionPage,
          ...honeypot,
          ...utm,
        }),
      })
      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string; filtered?: boolean; plan?: QuizPlan | null }
      if (!response.ok || !data.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.')
        return
      }
      if (!data.filtered) {
        trackApplicationConversion({ form_name: FORM_NAME, submission_page: submissionPage, quiz_stage: stage, ...utm })
      }
      saveQuizAnswers(answers)
      saveQuizPlan(data.plan ?? null)
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
    // z-index sits above the review badge and chat widgets so the dialog is the only thing in front.
    <div className="fixed inset-0 z-[2147483600] flex items-center justify-center bg-[rgba(15,15,15,0.55)] px-4 pb-4 pt-16 backdrop-blur-[2px]" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quiz-title"
        className="relative w-full max-w-[560px] [&_*]:![font-family:var(--font-inter),ui-sans-serif,system-ui,sans-serif]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Guide avatar, overlapping the top of the card */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-[88px] w-[88px] overflow-hidden rounded-full border-4 border-white shadow-[0_10px_30px_-10px_rgba(15,15,15,0.5)] ring-2 ring-[var(--color-off-black)] ring-offset-2 ring-offset-white sm:h-24 sm:w-24">
            <Image src={GUIDE.photo} alt={GUIDE.name} fill sizes="96px" className="object-cover" priority />
          </div>
        </div>

        <div
          ref={cardRef}
          tabIndex={-1}
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-2xl bg-white px-5 pb-6 pt-16 shadow-[0_40px_100px_-30px_rgba(15,15,15,0.6)] outline-none sm:px-10 sm:pb-8 sm:pt-[4.5rem]"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close the quiz"
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full font-sans text-xl !text-[var(--color-ink-400)] transition-colors hover:bg-[var(--surface-base)] hover:!text-[var(--color-off-black)]"
          >
            ×
          </button>

          <p className="text-center font-sans text-xs !text-[var(--gg-text-muted)]">
            {GUIDE.name} · {GUIDE.role}
          </p>

          {question ? (
            <fieldset key={question.id} className="mt-4">
              <legend id="quiz-title" className={`${titleClass} mx-auto block text-center`}>
                {question.title}
              </legend>
              {question.kind === 'multi' ? (
                <p className="mt-1.5 text-center font-sans text-sm !text-[var(--gg-text-muted)]">Pick all that apply.</p>
              ) : null}
              <div className="mt-6 grid gap-2.5">
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
                      {question.kind === 'multi' ? (
                        <span
                          className={`absolute left-4 flex h-5 w-5 items-center justify-center rounded-md border text-[11px] leading-none ${
                            selected ? 'border-[var(--color-off-black)] bg-[var(--color-off-black)] !text-white' : 'border-[var(--color-ink-300)]'
                          }`}
                          aria-hidden
                        >
                          {selected ? '✓' : ''}
                        </span>
                      ) : null}
                      {o.label}
                    </button>
                  )
                })}
              </div>
              {question.kind === 'multi' ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={(draft[question.id] as string[]).length === 0}
                  className="mt-5 flex min-h-[56px] w-full items-center justify-center rounded-xl bg-[var(--color-off-black)] font-sans text-base font-semibold !text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Continue
                </button>
              ) : null}
            </fieldset>
          ) : null}

          {isCommitment ? (
            <fieldset className="mt-4">
              <legend id="quiz-title" className={`${titleClass} mx-auto block text-center`}>
                {COMMITMENT_QUESTION}
              </legend>
              <div className="mt-6 grid grid-cols-5 gap-2.5">
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
                    className={`${optionClass(draft.commitment === n)} !px-0 !text-lg !font-semibold`}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <div className="mt-2 flex justify-between font-sans text-xs !text-[var(--gg-text-muted)]">
                <span>Just looking</span>
                <span>Ready now</span>
              </div>
            </fieldset>
          ) : null}

          {isContact ? (
            <form ref={formRef} onSubmit={submit} noValidate className="relative mt-4" aria-labelledby="quiz-title">
              <FormHoneypot idSuffix="lead-quiz" />
              <h2 id="quiz-title" className={`${titleClass} text-center`}>
                Where should we send your personalized real estate sales roadmap?
              </h2>
              <div className="mt-6 grid gap-3">
                <label className="block">
                  <span className="sr-only">Full name</span>
                  <input
                    name="fullName"
                    required
                    autoComplete="name"
                    placeholder="Full name"
                    value={contact.fullName}
                    onChange={(e) => setContact((c) => ({ ...c, fullName: e.target.value }))}
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email"
                    value={contact.email}
                    onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Phone</span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="Phone"
                    value={contact.phone}
                    onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                    className={inputClass}
                  />
                </label>
              </div>
              {error ? (
                <p className="mt-4 text-center font-sans text-sm !text-[#b42318]" role="alert">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={submitting}
                className="mt-5 flex min-h-[56px] w-full items-center justify-center rounded-xl bg-[var(--color-off-black)] font-sans text-base font-semibold !text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? 'Building your roadmap…' : 'See my roadmap'}
              </button>
              {testMode ? (
                <p className="mt-3 rounded-lg bg-amber-100 px-3 py-2 text-center font-sans text-xs font-semibold !text-amber-900">
                  Test mode: writes a fresh AI plan. No lead is sent to Zapier, Close, or email.
                </p>
              ) : (
                <p className="mt-3 text-center font-sans text-xs !text-[var(--gg-text-muted)]">No spam. Your results show on the next page.</p>
              )}
            </form>
          ) : null}

          {/* Footer: back + progress, like the Wix popup's text links */}
          <div className="mt-7 flex items-center justify-center gap-6">
            {step > 0 ? (
              <button type="button" onClick={back} className="font-sans text-sm font-medium !text-[var(--color-off-black)] underline-offset-4 hover:underline">
                ← Back
              </button>
            ) : null}
            <span className="font-sans text-sm !text-[var(--gg-text-muted)]">
              {isContact ? 'Last step' : `${step + 1} of ${TOTAL_STEPS - 1}`}
            </span>
          </div>
          <div className="mx-auto mt-3 h-1 w-full max-w-[220px] overflow-hidden rounded-full bg-[var(--color-ink-200)]" aria-hidden>
            <div className="h-full rounded-full bg-[var(--color-off-black)] transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}
