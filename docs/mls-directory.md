# MLS Integrations Directory

## Single Source of Truth

**The MLS registry (`data/mlsRegistry.ts`) is the ONLY source of truth for MLS data.**

- Do NOT duplicate MLS data in pages, components, or anywhere else.
- All MLS content must be read from the registry via helpers: `getMlsBySlug`, `listMls`, `searchMls`.
- If validation fails, the app fails at module init (build/dev). Fix the registry.

## How to Add a New MLS Entry

1. Open `data/mlsRegistry.ts`.
2. Add a new object to the `RAW_REGISTRY` array.
3. Ensure all required fields are present and valid (see below).
4. Run `npm run build` to verify validation passes.
5. The new MLS will automatically appear at `/mls-integrations` and `/mls-integrations/[slug]`.

## Slug Rules

- **Format**: Lowercase, URL-safe. Regex: `/^[a-z0-9-]+$/`
- **Examples**: `stellar-mls`, `south-central-wisconsin-mls`, `my-mls`
- **Invalid**: `MRED` (uppercase), `my_mls` (underscore), `my mls` (space)
- **Uniqueness**: No duplicate slugs. Validation throws at module init if duplicates exist.

## Required Fields

| Field       | Type     | Description                                              |
| ----------- | -------- | -------------------------------------------------------- |
| `name`      | string   | Display name of the MLS                                  |
| `slug`      | string   | URL shorthand; must match `/^[a-z0-9-]+$/`               |
| `states`    | string[] | 2-letter state abbreviations, e.g. `["WI", "FL"]`         |
| `idxVendors`| string[] | IDX vendors; empty array defaults to `["Unknown"]`      |
| `cost`      | string   | Cost description, e.g. `"$500/mo"`, `"Varies"`, `"Contact MLS"` |

## Optional Fields

- `notes` (string)
- `coverage` (string)
- `links` (array of `{ label: string, url: string }`)

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
