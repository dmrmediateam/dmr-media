'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import UsServiceMap from './UsServiceMap'
import MlsCard from './MlsCard'
import { getState, searchMls } from '@/data/mlsRegistry'

const MAX_RESULTS = 30

export default function MlsDirectoryClient() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const trimmed = query.trim()

  const results = useMemo(() => (trimmed.length >= 2 ? searchMls({ query: trimmed }) : []), [trimmed])

  const goToState = (code: string | null) => {
    if (!code) return
    const state = getState(code)
    if (state) router.push(`/mls-integrations/state/${state.slug}`)
  }

  return (
    <div className="space-y-14">
      <div>
        <label htmlFor="mls-search" className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
          Find your MLS
        </label>
        <input
          id="mls-search"
          type="search"
          inputMode="search"
          autoComplete="off"
          placeholder="Search by MLS name, acronym, or state, e.g. CRMLS or Texas"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mt-3 w-full rounded-full border border-[var(--color-ink-200)] bg-white px-6 py-4 font-serif text-base text-[var(--color-off-black)] shadow-[0_1px_0_rgba(15,15,15,0.04)] placeholder:text-[var(--color-ink-400)] focus:border-[var(--color-off-black)]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/15"
        />

        {trimmed.length >= 2 && (
          <div className="mt-8" aria-live="polite">
            {results.length === 0 ? (
              <p className="font-serif text-sm text-[var(--color-ink-300)]">
                No MLS matches &ldquo;{trimmed}&rdquo;. Try the acronym, or browse by state below.
              </p>
            ) : (
              <>
                <p className="font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">
                  {results.length} {results.length === 1 ? 'match' : 'matches'}
                  {results.length > MAX_RESULTS ? `, showing the first ${MAX_RESULTS}` : ''}
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {results.slice(0, MAX_RESULTS).map((entry) => (
                    <MlsCard key={entry.slug} entry={entry} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className="hidden md:block">
        <p className="mb-4 text-center font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
          Or click a state
        </p>
        <UsServiceMap selectedState={null} onSelectState={goToState} />
      </div>
    </div>
  )
}
