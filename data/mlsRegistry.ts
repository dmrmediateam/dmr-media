/**
 * MLS Integrations Registry - Single Source of Truth
 *
 * Every MLS here is one IDX Broker supports, and DMR integrates all of them through IDX Broker.
 * Raw coverage lives in ./idxBrokerMls.ts; this module adds state metadata and lookup helpers.
 * @see /docs/mls-directory.md for extension guidelines
 */

import { IDX_BROKER_MLS } from './idxBrokerMls'

export type MlsEntry = {
  name: string
  slug: string
  /** Short name shown in badges and titles, e.g. "CRMLS". */
  acronym: string
  /** Phrase people search alongside "IDX", e.g. "CRMLS" → "CRMLS IDX". */
  keyword: string
  states: string[]
  idxVendors: string[]
  cost: string
  coverage?: string
  notes?: string
  idxBrokerUrl: string
  /**
   * Only MLS pages with researched local facts are indexed. The rest share the template almost word for
   * word, which Google treats as doorway/scaled content, so they ship noindex,follow and stay out of the sitemap.
   */
  indexable: boolean
}

export type StateInfo = {
  code: string
  name: string
  slug: string
  /** False for territories and countries outside the U.S. states + DC. */
  isState: boolean
}

const STATE_LIST: [string, string, boolean][] = [
  ['AL', 'Alabama', true], ['AK', 'Alaska', true], ['AZ', 'Arizona', true], ['AR', 'Arkansas', true],
  ['CA', 'California', true], ['CO', 'Colorado', true], ['CT', 'Connecticut', true], ['DE', 'Delaware', true],
  ['DC', 'Washington DC', true], ['FL', 'Florida', true], ['GA', 'Georgia', true], ['HI', 'Hawaii', true],
  ['ID', 'Idaho', true], ['IL', 'Illinois', true], ['IN', 'Indiana', true], ['IA', 'Iowa', true],
  ['KS', 'Kansas', true], ['KY', 'Kentucky', true], ['LA', 'Louisiana', true], ['ME', 'Maine', true],
  ['MD', 'Maryland', true], ['MA', 'Massachusetts', true], ['MI', 'Michigan', true], ['MN', 'Minnesota', true],
  ['MS', 'Mississippi', true], ['MO', 'Missouri', true], ['MT', 'Montana', true], ['NE', 'Nebraska', true],
  ['NV', 'Nevada', true], ['NH', 'New Hampshire', true], ['NJ', 'New Jersey', true], ['NM', 'New Mexico', true],
  ['NY', 'New York', true], ['NC', 'North Carolina', true], ['ND', 'North Dakota', true], ['OH', 'Ohio', true],
  ['OK', 'Oklahoma', true], ['OR', 'Oregon', true], ['PA', 'Pennsylvania', true], ['RI', 'Rhode Island', true],
  ['SC', 'South Carolina', true], ['SD', 'South Dakota', true], ['TN', 'Tennessee', true], ['TX', 'Texas', true],
  ['UT', 'Utah', true], ['VT', 'Vermont', true], ['VA', 'Virginia', true], ['WA', 'Washington', true],
  ['WV', 'West Virginia', true], ['WI', 'Wisconsin', true], ['WY', 'Wyoming', true],
  ['PR', 'Puerto Rico', false], ['VI', 'U.S. Virgin Islands', false], ['BS', 'Bahamas', false],
  ['JM', 'Jamaica', false], ['MX', 'Mexico', false],
]

const toSlug = (name: string) =>
  name.toLowerCase().replace(/\./g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export const STATES: StateInfo[] = STATE_LIST.map(([code, name, isState]) => ({
  code,
  name,
  slug: toSlug(name),
  isState,
}))

const STATE_BY_CODE = new Map(STATES.map((s) => [s.code, s]))
const STATE_BY_SLUG = new Map(STATES.map((s) => [s.slug, s]))

const DEFAULT_COST =
  'IDX Broker subscription plus any MLS IDX fee, billed separately from your DMR website.'

// --- Registry Data ---

export const MLS_REGISTRY: MlsEntry[] = IDX_BROKER_MLS.map((r) => ({
  name: r.name,
  slug: r.slug,
  acronym: r.acronym,
  keyword: r.keyword ?? r.acronym,
  states: r.states,
  idxVendors: ['IDX Broker'],
  cost: DEFAULT_COST,
  coverage: r.coverage,
  notes: r.notes,
  idxBrokerUrl: `https://www.idxbroker.com/mls/${r.idxBrokerSlug}`,
  indexable: Boolean(r.coverage && r.notes),
})).sort((a, b) => a.name.localeCompare(b.name))

/** Kept for existing imports; DMR now serves every state IDX Broker covers. */
export const SERVICED_STATES = Array.from(new Set(MLS_REGISTRY.flatMap((e) => e.states))).sort()
export type ServicedState = string

// --- Validation: Uniqueness & Fail Fast ---

function validateRegistry(): void {
  const seen = new Set<string>()
  for (const entry of MLS_REGISTRY) {
    if (!/^[a-z0-9-]+$/.test(entry.slug)) {
      throw new Error(`MLS Registry: slug "${entry.slug}" must be lowercase a-z, 0-9, hyphens.`)
    }
    if (seen.has(entry.slug)) {
      throw new Error(`MLS Registry: Duplicate slug "${entry.slug}". Slugs must be unique.`)
    }
    seen.add(entry.slug)
    for (const code of entry.states) {
      if (!STATE_BY_CODE.has(code)) {
        throw new Error(`MLS Registry: unknown state code "${code}" on "${entry.slug}".`)
      }
    }
  }
}

validateRegistry()

// --- Helpers ---

const BY_SLUG = new Map(MLS_REGISTRY.map((e) => [e.slug, e]))

export function getMlsBySlug(slug: string): MlsEntry | null {
  return BY_SLUG.get(slug) ?? null
}

export function listMls(): MlsEntry[] {
  return [...MLS_REGISTRY]
}

export function listIndexableMls(): MlsEntry[] {
  return MLS_REGISTRY.filter((e) => e.indexable)
}

export function getState(code: string): StateInfo | null {
  return STATE_BY_CODE.get(code.toUpperCase()) ?? null
}

export function getStateBySlug(slug: string): StateInfo | null {
  return STATE_BY_SLUG.get(slug) ?? null
}

export function listMlsByState(code: string): MlsEntry[] {
  const upper = code.toUpperCase()
  return MLS_REGISTRY.filter((e) => e.states.includes(upper))
}

/** States and territories with at least one MLS, with counts, in display order. */
export function listStatesWithCoverage(): (StateInfo & { count: number })[] {
  return STATES.map((s) => ({ ...s, count: listMlsByState(s.code).length })).filter((s) => s.count > 0)
}

export function stateNames(entry: MlsEntry): string[] {
  return entry.states.map((c) => getState(c)?.name ?? c)
}

/** Other MLSs in the entry's primary state, for internal linking. */
export function getRelatedMls(entry: MlsEntry, limit = 8): MlsEntry[] {
  const primary = entry.states[0]
  return listMlsByState(primary)
    .filter((e) => e.slug !== entry.slug)
    .slice(0, limit)
}

export interface SearchMlsParams {
  query?: string
  state?: string
  vendor?: string
}

export function searchMls(params: SearchMlsParams): MlsEntry[] {
  let results = [...MLS_REGISTRY]

  if (params.state) {
    const state = params.state.toUpperCase()
    results = results.filter((e) => e.states.includes(state))
  }

  if (params.vendor) {
    const vendorLower = params.vendor.toLowerCase()
    results = results.filter((e) => e.idxVendors.some((v) => v.toLowerCase().includes(vendorLower)))
  }

  if (params.query && params.query.trim()) {
    const q = params.query.trim().toLowerCase()
    results = results.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.acronym.toLowerCase().includes(q) ||
        e.slug.includes(q) ||
        stateNames(e).some((n) => n.toLowerCase().includes(q))
    )
  }

  return results
}

export function getAllStatesInRegistry(): string[] {
  return [...SERVICED_STATES]
}

export function getAllVendorsInRegistry(): string[] {
  return ['IDX Broker']
}
