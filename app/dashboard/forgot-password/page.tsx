'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send reset email')
      }

      setMessage('If that email exists, a reset link has been sent.')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--surface-base)] p-4">
      <div className="max-w-md w-full bg-white border border-[var(--color-ink-200)] p-10">
        <h1 className="text-4xl font-serif mb-3">Reset Password</h1>
        <p className="text-[var(--color-ink-300)] mb-8">
          Enter your email and we'll send you a reset link
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm">
            {error}
          </div>
        )}

        {message && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 text-sm">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-[var(--color-ink-300)] mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[var(--color-ink-200)] bg-white focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--color-off-black)] text-[var(--color-off-white)] py-3 px-6 font-serif text-sm uppercase tracking-[0.15em] disabled:opacity-50 hover:opacity-90 transition-opacity"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/dashboard/sign-in" className="text-sm text-[var(--color-ink-300)] font-serif hover:opacity-70 transition-opacity">
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
