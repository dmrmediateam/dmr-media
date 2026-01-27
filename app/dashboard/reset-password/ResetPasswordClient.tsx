'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ResetPasswordClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const tokenParam = searchParams.get('token')
    const emailParam = searchParams.get('email')
    
    setToken(tokenParam)
    setEmail(emailParam)
    
    if (!tokenParam || !emailParam) {
      setError('Invalid reset link')
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!token || !email) {
      setError('Invalid reset link')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, email, newPassword: password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to reset password')
      }

      setSuccess(true)
      setTimeout(() => {
        router.push('/dashboard/sign-in')
      }, 2000)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!token || !email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--surface-base)] p-4">
        <div className="max-w-md w-full bg-white border border-[var(--color-ink-200)] p-10 text-center">
          <h1 className="text-4xl font-serif mb-6">Invalid Link</h1>
          <p className="text-[var(--color-ink-300)] mb-6">This password reset link is invalid or has expired.</p>
          <Link href="/dashboard/forgot-password" className="text-sm text-[var(--color-ink-300)] font-serif hover:opacity-70 transition-opacity">
            Request a new reset link
          </Link>
        </div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--surface-base)] p-4">
        <div className="max-w-md w-full bg-white border border-[var(--color-ink-200)] p-10 text-center">
          <h1 className="text-4xl font-serif mb-6">Success</h1>
          <p className="text-[var(--color-ink-300)] mb-4">Your password has been reset successfully.</p>
          <p className="text-sm text-[var(--color-ink-400)]">Redirecting to sign in...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--surface-base)] p-4">
      <div className="max-w-md w-full bg-white border border-[var(--color-ink-200)] p-10">
        <h1 className="text-4xl font-serif mb-3">Set New Password</h1>
        <p className="text-[var(--color-ink-300)] mb-8">Enter your new password below</p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-[var(--color-ink-300)] mb-2">
              New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="w-full px-4 py-3 border border-[var(--color-ink-200)] bg-white focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
            />
            <p className="text-xs text-[var(--color-ink-400)] mt-2">
              Must be at least 8 characters
            </p>
          </div>

          <div>
            <label className="block text-sm text-[var(--color-ink-300)] mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[var(--color-ink-200)] bg-white focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--color-off-black)] text-[var(--color-off-white)] py-3 px-6 font-serif text-sm uppercase tracking-[0.15em] disabled:opacity-50 hover:opacity-90 transition-opacity"
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  )
}
