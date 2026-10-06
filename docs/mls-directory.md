# MLS Integrations Directory

## Single Source of Truth

**The MLS registry (`data/mlsRegistry.ts`) is the ONLY source of truth for MLS data.**

- Do NOT duplicate MLS data in pages, components, or anywhere else.
- All MLS content must be read from the registry via helpers: `getMlsBySlug`, `listMls`, `searchMls`.
- If validation fails, the app fails at module init (build/dev). Fix the registry.

## How MLS data is sourced

DMR integrates every MLS through **IDX Broker**. The raw list in `data/idxBrokerMls.ts` was pulled from
https://www.idxbroker.com/idx_mls_coverage (2026-10-06): names, acronyms, and states. `data/mlsRegistry.ts`
wraps it with state metadata and helpers (`getMlsBySlug`, `listMls`, `listMlsByState`, `getStateBySlug`).

Pages are fully templated:

- `/mls-integrations`: hub with search, state grid, FAQ.
- `/mls-integrations/state/[state]`: one hub per state or territory, linking every MLS in it.
- `/mls-integrations/[slug]`: one page per MLS, built from `lib/mls-page-content.ts`.

## How to Add or Refresh MLS Entries

1. Re-pull the IDX Broker coverage page and regenerate `data/idxBrokerMls.ts`.
2. Keep the 19 legacy slugs (e.g. `stellar-mls`, `metro-mls`, `mlsni`) as overrides so indexed URLs never change.
3. Optional per-MLS fields: `keyword` (search phrase paired with "IDX"), `coverage`, `notes`.
4. Run `npx tsc --noEmit`; the registry throws at import on duplicate slugs or unknown state codes.

## Map Filtering

- **Serviced states** (highlighted on map): WI, FL, CA, IL, VT, NH
- **All states** are clickable. Clicking a state filters the directory to MLS entries in that state.
- Clicking the same state again clears the filter.
- Use the "Clear filters" action to reset.
- If no MLS entries exist for a clicked state: "No MLS entries found for {state}".

## Common Errors and Fixes

| Error | Cause | Fix |
| ----- | ----- | --- |
| Duplicate slug | Two entries share the same slug | Use unique slugs for each MLS |
| Slug regex failure | Slug contains invalid chars | Use only `a-z`, `0-9`, `-` |
| Bad state code | State not 2 letters | Use USPS abbreviations: `WI`, `FL`, etc. |
| Validation failed at index N | Missing/invalid required field | Check the named field in that entry |

## Do Not

- Create standalone pages outside `/mls-integrations/[slug]` for MLS content.
- Hardcode MLS data in components or pages.
- Add a second data store for MLS information.
