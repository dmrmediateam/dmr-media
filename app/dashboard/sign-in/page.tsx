'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

function SignInForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Ensure cookies are sent and received
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Login failed')
      }

      // Ensure we have client data before redirecting
      if (!data.client || !data.client.clientId) {
        throw new Error('Invalid response from server')
      }

      // Small delay to ensure cookie is set before redirecting
      // Use window.location for a full page reload to ensure cookie is set
      const redirectPath = searchParams.get('redirect') || `/dashboard/${data.client.clientId}`
      setTimeout(() => {
        window.location.href = redirectPath
      }, 100)
    } catch (err: any) {
      // Handle network errors or other exceptions
      if (err.message) {
        setError(err.message)
      } else {
        setError('Invalid email or password. Please check your credentials and try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--surface-base)] p-4">
      <div className="max-w-md w-full bg-white border border-[var(--color-ink-200)] p-10">
        <h1 className="text-4xl font-serif mb-3">Sign In</h1>
        <p className="text-[var(--color-ink-300)] mb-8">Access your dashboard</p>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-300 text-red-700 text-sm rounded">
            <div className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="font-medium">Error:</strong> {error}
              </div>
            </div>
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
              onChange={(e) => {
                setEmail(e.target.value)
                if (error) setError('')
              }}
              required
              className="w-full px-4 py-3 border border-[var(--color-ink-200)] bg-white focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm text-[var(--color-ink-300)] mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (error) setError('')
              }}
              required
              className="w-full px-4 py-3 border border-[var(--color-ink-200)] bg-white focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--color-off-black)] text-[var(--color-off-white)] py-3 px-6 font-serif text-sm uppercase tracking-[0.15em] disabled:opacity-50 hover:opacity-90 transition-opacity"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/dashboard/forgot-password" className="text-sm text-[var(--color-ink-300)] font-serif hover:opacity-70 transition-opacity">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function SignInPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[var(--surface-base)] p-4">
        <div className="max-w-md w-full bg-white border border-[var(--color-ink-200)] p-10 text-center">
          <p className="text-[var(--color-ink-300)]">Loading...</p>
        </div>
      </div>
    }>
      <SignInForm />
    </Suspense>
  )
}
