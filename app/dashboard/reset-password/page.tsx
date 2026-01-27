import type { Metadata } from 'next'
import { Suspense } from 'react'
import ResetPasswordClient from './ResetPasswordClient'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[var(--surface-base)] p-4">
        <div className="max-w-md w-full bg-white border border-[var(--color-ink-200)] p-10 text-center">
          <p className="text-[var(--color-ink-300)]">Loading...</p>
        </div>
      </div>
    }>
      <ResetPasswordClient />
    </Suspense>
  )
}
