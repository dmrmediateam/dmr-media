/**
 * MLS Integrations Registry - Single Source of Truth
 * @see /docs/mls-directory.md for extension guidelines
 */

import { z } from 'zod';

// --- Schema ---

const slugSchema = z.string().regex(/^[a-z0-9-]+$/, {
  message: 'Slug must be lowercase, URL-safe: only a-z, 0-9, hyphens',
});

const stateCodeSchema = z.string().length(2, 'State must be 2-letter abbreviation');

const mlsEntrySchema = z.object({
  name: z.string().min(1),
  slug: slugSchema,
  states: z.array(stateCodeSchema).min(1, 'At least one state required'),
  idxVendors: z
    .array(z.string())
    .transform((arr) => (arr.length === 0 ? ['Unknown'] : arr)),
  cost: z.string().min(1),
  // Optional expansion fields
  notes: z.string().optional(),
  coverage: z.string().optional(),
  links: z
    .array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      })
    )
    .optional(),
});

export type MlsEntry = z.infer<typeof mlsEntrySchema>;

// --- Registry Data ---

const RAW_REGISTRY: z.input<typeof mlsEntrySchema>[] = [
  {
    name: 'Stellar MLS',
    slug: 'stellar-mls',
    states: ['FL'],
    idxVendors: ['IDX Broker', 'iHomefinder'],
    cost: 'Varies (confirm with MLS)',
  },
  {
    name: 'South-Central Wisconsin MLS',
    slug: 'south-central-wisconsin-mls',
    states: ['WI'],
    idxVendors: ['iHomeFinder'],
    cost: 'Varies (confirm with MLS)',
  },
  {
    name: 'Prime MLS',
    slug: 'prime-mls',
    states: ['NH', 'VT', 'ME', 'MA', 'RI', 'CT'],
    idxVendors: ['iHomeFinder'],
    cost: 'Varies (confirm with MLS)',
  },
  {
    name: 'Bay Area Real Estate Information Services (BAREIS)',
    slug: 'bareis',
    states: ['CA'],
    idxVendors: ['iHomeFinder'],
    cost: 'Varies (confirm with MLS)',
    links: [{ label: 'BAREIS Website', url: 'https://bareis.com/' }],
  },
];

// --- Parsed Registry ---

const MLS_REGISTRY: MlsEntry[] = RAW_REGISTRY.map((raw, idx) => {
  const result = mlsEntrySchema.safeParse(raw);
  if (!result.success) {
    throw new Error(
      `MLS Registry validation failed at index ${idx} (${(raw as { name?: string }).name ?? 'unknown'}): ${result.error.message}`
    );
  }
  return result.data;
});

// --- Serviced States (highlighted on map) ---

export const SERVICED_STATES = ['WI', 'FL', 'CA', 'IL', 'VT', 'NH'] as const;
export type ServicedState = (typeof SERVICED_STATES)[number];

// --- Validation: Uniqueness & Fail Fast ---

function validateRegistry(): void {
  const slugs = MLS_REGISTRY.map((e) => e.slug);
  const seen = new Set<string>();
  for (const slug of slugs) {
    if (seen.has(slug)) {
      throw new Error(
        `MLS Registry: Duplicate slug "${slug}". Slugs must be unique.`
      );
    }
    seen.add(slug);
  }
}

validateRegistry();

// --- Helpers ---

export function getMlsBySlug(slug: string): MlsEntry | null {
  return MLS_REGISTRY.find((e) => e.slug === slug) ?? null;
}

export function listMls(): MlsEntry[] {
  return [...MLS_REGISTRY];
}

export interface SearchMlsParams {
  query?: string;
  state?: string;
  vendor?: string;
}

export function searchMls(params: SearchMlsParams): MlsEntry[] {
  let results = [...MLS_REGISTRY];

  if (params.state) {
    const state = params.state.toUpperCase();
    results = results.filter((e) =>
      e.states.some((s) => s.toUpperCase() === state)
    );
  }

  if (params.vendor) {
    const vendorLower = params.vendor.toLowerCase();
    results = results.filter((e) =>
      e.idxVendors.some((v) => v.toLowerCase().includes(vendorLower))
    );
  }

  if (params.query && params.query.trim()) {
    const q = params.query.trim().toLowerCase();
    results = results.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.slug.toLowerCase().includes(q) ||
        e.idxVendors.some((v) => v.toLowerCase().includes(q))
    );
  }

  return results;
}

export function getAllStatesInRegistry(): string[] {
  const set = new Set<string>();
  for (const e of MLS_REGISTRY) {
    for (const s of e.states) {
      set.add(s.toUpperCase());
    }
  }
  return Array.from(set).sort();
}

export function getAllVendorsInRegistry(): string[] {
  const set = new Set<string>();
  for (const e of MLS_REGISTRY) {
    for (const v of e.idxVendors) {
      if (v !== 'Unknown') set.add(v);
    }
  }
  return Array.from(set).sort();
}
