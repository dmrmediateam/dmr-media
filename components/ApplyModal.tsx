'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import '@/app/landing/google-general/google-general-landing.css'
import { applyFormCardClass } from '@/components/applyFormPrimitives'
import GoogleGeneralHeroForm from '@/components/landing/GoogleGeneralHeroForm'
import LandingApplicationForm from '@/components/landing/LandingApplicationForm'

const DEFAULT_APPLY_FORM_NAME = 'google-general-modal'

function isLandingApplicationPath(pathname: string | null) {
  if (!pathname?.startsWith('/landing/')) return false
  return !pathname.startsWith('/landing/thank-you') && pathname !== '/landing/apply'
}

export default function ApplyModal() {
  const router = useRouter()
  const pathname = usePathname()
  const useLandingForm = isLandingApplicationPath(pathname)
  const [isOpen, setIsOpen] = useState(false)
  const [formName, setFormName] = useState(DEFAULT_APPLY_FORM_NAME)
  const [formKey, setFormKey] = useState(0)

  const close = useCallback(() => {
    setIsOpen(false)
    setFormName(DEFAULT_APPLY_FORM_NAME)
  }, [])

  useEffect(() => {
    const handleOpenModal = (event: Event) => {
      const detail = (event as CustomEvent<{ formName?: string }>).detail
      setFormName(
        typeof detail?.formName === 'string' && detail.formName.trim()
          ? detail.formName.trim()
          : DEFAULT_APPLY_FORM_NAME
      )
      setFormKey((k) => k + 1)
      setIsOpen(true)
    }
    window.addEventListener('openApplyModal', handleOpenModal)
    return () => window.removeEventListener('openApplyModal', handleOpenModal)
  }, [])

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
          aria-labelledby="apply-modal-form-title"
          className={`google-general-landing ${applyFormCardClass} max-w-[28rem]`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-[1] flex justify-end border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] px-4 py-3">
            <button
              type="button"
              onClick={close}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-transparent text-[var(--color-ink-400)] transition-colors hover:border-[var(--color-ink-200)] hover:bg-white hover:text-[var(--color-off-black)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)]"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 pb-7 pt-5">
            {useLandingForm ? (
              <LandingApplicationForm
                key={formKey}
                id="apply-modal-form"
                formName={formName}
                variant="conversion"
                embedded
                onSuccess={(thankYouPath) => {
                  close()
                  router.push(thankYouPath)
                }}
                headerTitleId="apply-modal-form-title"
              />
            ) : (
              <GoogleGeneralHeroForm
                key={formKey}
                id="apply-modal-form"
                formName={formName}
                variant="conversion"
                embedded
                onSuccess={(thankYouPath) => {
                  close()
                  router.push(thankYouPath)
                }}
                headerTitleId="apply-modal-form-title"
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
