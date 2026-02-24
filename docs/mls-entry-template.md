# MLS Registry Entry Template

Copy and paste this into the `RAW_REGISTRY` array in `data/mlsRegistry.ts`:

```typescript
{
  name: 'MLS Display Name',
  slug: 'url-slug',           // lowercase, a-z 0-9 hyphens only
  states: ['XX', 'YY'],       // 2-letter USPS codes, e.g. ['WI', 'IL']
  idxVendors: ['Vendor A', 'Vendor B'],  // or [] for ["Unknown"]
  cost: 'Varies (confirm with MLS)',
  // Optional:
  // notes: 'Additional context',
  // coverage: 'Coverage area description',
  // links: [{ label: 'Website', url: 'https://...' }],
},
```

## Examples

**Minimal:**
```typescript
{
  name: 'Stellar MLS',
  slug: 'stellar-mls',
  states: ['FL'],
  idxVendors: ['IDX Broker', 'iHomefinder'],
  cost: 'Varies (confirm with MLS)',
},
```

**With optional fields:**
```typescript
{
  name: 'Stellar MLS',
  slug: 'stellar-mls',
  states: ['FL'],
  idxVendors: ['IDX Broker', 'iHomefinder'],
  cost: 'Varies (confirm with MLS)',
  notes: 'Covers Florida and Puerto Rico.',
  links: [{ label: 'Stellar MLS Website', url: 'https://www.stellarmls.com' }],
},
```
