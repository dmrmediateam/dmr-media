'use client';

import { useState, useRef } from 'react';
import UsServiceMap from './UsServiceMap';
import MlsCard from './MlsCard';
import {
  searchMls,
  getAllVendorsInRegistry,
  type MlsEntry,
} from '@/data/mlsRegistry';

function sortResults(entries: MlsEntry[], selectedState: string | null) {
  const sorted = [...entries];
  if (selectedState) {
    sorted.sort((a, b) => {
      const aInState = a.states.some(
        (s) => s.toUpperCase() === selectedState
      );
      const bInState = b.states.some(
        (s) => s.toUpperCase() === selectedState
      );
      if (aInState && !bInState) return -1;
      if (!aInState && bInState) return 1;
      return a.name.localeCompare(b.name);
    });
  } else {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }
  return sorted;
}

export default function MlsDirectoryClient() {
  const [query, setQuery] = useState('');
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedVendor, setSelectedVendor] = useState<string | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const results = searchMls({
    query: query.trim() || undefined,
    state: selectedState ?? undefined,
    vendor: selectedVendor ?? undefined,
  });

  const sortedResults = sortResults(results, selectedState);
  const vendors = getAllVendorsInRegistry();

  const handleStateSelect = (state: string | null) => {
    setSelectedState(state);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="space-y-20">
      {/* Map */}
      <section>
        <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mb-6">
          Filter by state
        </h2>
        <UsServiceMap
          selectedState={selectedState}
          onSelectState={handleStateSelect}
        />
        {(selectedState || query || selectedVendor) && (
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={() => {
                setSelectedState(null);
                setQuery('');
                setSelectedVendor(null);
              }}
              className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Search & filters */}
      <section className="flex flex-col sm:flex-row gap-4">
        <input
          type="search"
          placeholder="Search by name, slug, or vendor..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-0 py-4 border-b-2 border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif placeholder:text-[var(--color-off-black)] placeholder:opacity-60 focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
        />
        <select
          value={selectedVendor ?? ''}
          onChange={(e) =>
            setSelectedVendor(e.target.value ? e.target.value : null)
          }
          className="px-0 py-4 border-b-2 border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] min-w-[200px] transition-colors"
        >
          <option value="">All vendors</option>
          {vendors.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </section>

      {/* Results */}
      <section ref={resultsRef}>
        {selectedState && results.length === 0 ? (
          <p className="text-[var(--color-off-black)] font-serif">
            No MLS entries found for {selectedState}.
          </p>
        ) : sortedResults.length === 0 ? (
          <p className="text-[var(--color-off-black)] font-serif">
            No MLS entries match your filters.
          </p>
        ) : (
          <>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mb-8">
              {sortedResults.length} MLS
              {sortedResults.length !== 1 ? ' entries' : ' entry'} found
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {sortedResults.map((entry) => (
                <MlsCard key={entry.slug} entry={entry} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
