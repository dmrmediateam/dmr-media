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
    name: 'Beaches MLS (BeachesMLS)',
    slug: 'beaches-mls',
    states: ['FL'],
    idxVendors: ['iHomeFinder', 'Showcase IDX'],
    cost: 'Free IDX feed included with membership. iHomeFinder & Showcase IDX subscription fees apply separately.',
    coverage: 'Broward, Palm Beach, and St. Lucie counties — Fort Lauderdale, West Palm Beach, Boca Raton, Hollywood, Pompano Beach, Port Saint Lucie, and surrounding South Florida communities.',
    notes: 'Formerly Florida Regional MLS. Operated by Broward, Palm Beaches & St. Lucie Realtors®. Members can access both Flexmls and Matrix data feeds. JTHS served via MIAMI IDX feed.',
    links: [
      { label: 'Broward, Palm Beaches & St. Lucie Realtors®', url: 'https://rworld.com/' },
      { label: 'iHomeFinder IDX Coverage', url: 'https://www.ihomefinder.com/resources/idx-coverage/realtors-area-palm-beach/' },
      { label: 'AgentFire Beaches MLS (FLEX MLS) Coverage', url: 'https://agentfire.com/mls-coverage/beaches-mls-flex-mls/' },
    ],
  },
  {
    name: 'Southwest Florida MLS (SWFLMLS)',
    slug: 'southwest-florida-mls',
    states: ['FL'],
    idxVendors: ['iHomeFinder', 'Showcase IDX'],
    cost: 'Pass-through fees apply (confirm with local board)',
    coverage: 'Naples, Fort Myers, Cape Coral, Bonita Springs, Estero, Marco Island, and Collier County. Six member associations including Naples Area Board of REALTORS® and Royal Palm Coast REALTOR® Association.',
    notes: 'Formerly SunshineMLS. Select your local board (Bonita Springs-Estero, Naples, or Royal Palm Coast) when signing up with iHomeFinder.',
    links: [
      { label: 'SWFLMLS Matrix Login', url: 'https://www.swflamls.com/matrix/login.aspx' },
      { label: 'iHomeFinder IDX Coverage', url: 'https://www.ihomefinder.com/resources/idx-coverage/southwest-florida-mls/' },
    ],
  },
  {
    name: 'Midwest Real Estate Data (MRED / MLSNI)',
    slug: 'mlsni',
    states: ['IL', 'WI', 'IN'],
    idxVendors: ['iHomeFinder', 'IDX Broker'],
    cost: 'Varies (confirm with MLS and local association)',
    coverage:
      'Chicago metro and surrounding collar counties — Northern Illinois, Southern Wisconsin (including Lake Geneva, Kenosha), and Northwest Indiana. Key cities: Chicago, Naperville, Evanston, Schaumburg, Aurora, Joliet, Rockford, Oak Park, and hundreds more. 40,000+ members across 13 REALTOR® associations.',
    notes:
      'Formerly MLSNI (Multiple Listing Service of Northern Illinois), rebranded to MRED in the mid-2000s. Also known as MAPMLS. IDX feed available to brokers of record only; agents must go through their managing broker. Feed approval approx. 5 business days.',
    links: [
      { label: 'MLSNI/MRED Website', url: 'http://www.mlsni.com/' },
      { label: 'Real Estate Webmasters MLSNI IDX', url: 'https://www.realestatewebmasters.com/mls/mlsni/' },
      { label: 'RealtyCandy MRED IDX Broker', url: 'https://realtycandy.com/idx-broker-mls-services/illinois/midwest-real-estate-data/' },
    ],
  },
  {
    name: 'NorthstarMLS (RMLS-MN)',
    slug: 'rmlsmn',
    states: ['MN'],
    idxVendors: ['iHomeFinder', 'IDX Broker'],
    cost: 'Varies (confirm with NorthstarMLS and local association)',
    coverage:
      'Minnesota and Upper Midwest. Twin Cities metro (Minneapolis, St. Paul, Bloomington, Edina, Plymouth, Minnetonka, Eden Prairie, Lakeville) plus Rochester, Duluth, and hundreds of surrounding communities. 22,000+ members.',
    notes:
      'Formerly RMLS-MN (Regional Multiple Listing Service of Minnesota). Now branded as NorthstarMLS. Offers both Flexmls and Matrix platforms. IDX available to agents with broker signoff. Feed approval approx. 5 business days. Geo-codes provided.',
    links: [
      { label: 'NorthstarMLS Website', url: 'https://northstarmls.com/' },
      { label: 'Real Estate Webmasters RMLS-MN IDX', url: 'https://www.realestatewebmasters.com/mls/rmls-mn/' },
    ],
  },
  {
    name: 'South-Central Wisconsin MLS',
    slug: 'south-central-wisconsin-mls',
    states: ['WI'],
    idxVendors: ['iHomeFinder'],
    cost: 'Varies (confirm with MLS)',
  },
  {
    name: 'Cooperative Arkansas Realtors MLS (CARMLS)',
    slug: 'cooperative-arkansas-realtors-mls',
    states: ['AR'],
    idxVendors: ['iHomeFinder', 'Showcase IDX'],
    cost: 'None via iHomeFinder (no association fees). Showcase IDX fees vary by plan.',
    coverage: 'All 75 Arkansas counties. Cities include Little Rock, Fayetteville, Fort Smith, Rogers, Bentonville, Jonesboro, Conway, Hot Springs, and Pine Bluff. Also covers neighboring areas in TN, LA, and TX.',
    notes: 'Largest MLS in Arkansas. Over 6,000 members across 931+ brokerages.',
    links: [
      { label: 'CARMLS Website', url: 'https://carmls.com/' },
      { label: 'iHomeFinder IDX Coverage', url: 'https://www.ihomefinder.com/resources/idx-coverage/cooperative-arkansas-realtors-mls/' },
      { label: 'AgentFire CARMLS Coverage', url: 'https://agentfire.com/mls-coverage/cooperative-arkansas-realtors-mls/' },
    ],
  },
  {
    name: 'Metro MLS',
    slug: 'metro-mls',
    states: ['WI'],
    idxVendors: ['iHomefinder'],
    cost: '$99–$299 set-up fee; $9.95/mo IDX via iHomefinder (confirm with MLS)',
    coverage: 'Greater Milwaukee and southeastern Wisconsin. Over 9,000 professionals across 10 REALTOR® associations. Cities include Milwaukee, Madison, Green Bay, Racine, Appleton, Kenosha, Waukesha, and more.',
    notes: 'DMR client Legendary Real Estate Services (Lake Geneva, WI) is in this MLS.',
    links: [
      { label: 'Metro MLS Website', url: 'https://metromls.com/' },
      { label: 'AgentFire Metro MLS Coverage', url: 'https://agentfire.com/mls-coverage/metro-mls/' },
      { label: 'iHomefinder IDX Coverage', url: 'https://www.ihomefinder.com/resources/idx-coverage/metro-mls-milwaukee-area/' },
    ],
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
  {
    name: 'Hudson MLS',
    slug: 'hudson-mls',
    states: ['NY', 'NJ'],
    idxVendors: ['iHomeFinder'],
    cost: 'Varies (confirm with MLS)',
    links: [
      { label: 'Hudson Gateway Association of REALTORS®', url: 'https://www.hgar.com/' },
      { label: 'AgentFire Hudson MLS Coverage', url: 'https://agentfire.com/mls-coverage/hudson-mls/' },
      { label: 'iHomeFinder IDX Coverage', url: 'https://www.ihomefinder.com/resources/idx-coverage/hudson-gateway-multiple-listing-service/' },
    ],
  },
  {
    name: 'Yes MLS',
    slug: 'yes-mls',
    states: ['OH', 'PA', 'MI', 'WV'],
    idxVendors: ['iHomeFinder'],
    cost: 'Varies ($50 set-up fee; confirm with MLS)',
    links: [
      { label: 'AgentFire Yes MLS Coverage', url: 'https://agentfire.com/mls-coverage/mls-now-yes-mls/' },
      { label: 'Realtyna Yes MLS Coverage', url: 'https://realtyna.com/mls-coverage/mls/yes-mls/' },
      { label: 'iHomeFinder IDX Coverage', url: 'https://www.ihomefinder.com/resources/idx-coverage/neohrex/' },
    ],
  },
  {
    name: 'California Regional Multiple Listing Service (CRMLS)',
    slug: 'california-regional-multiple-listing-service',
    states: ['CA'],
    idxVendors: ['Showcase IDX', 'iHomeFinder'],
    cost: 'Varies (IDX fee ~$10/mo via Showcase IDX; confirm with MLS)',
    links: [
      { label: 'CRMLS Website', url: 'https://go.crmls.org/' },
      { label: 'Showcase IDX Coverage', url: 'https://showcaseidx.com/mls-coverage/california-regional-multiple-listing-service-crmls/' },
      { label: 'Realtyna CRMLS Coverage', url: 'https://realtyna.com/mls-coverage/mls/california-regional-mls-crmls/' },
    ],
  },
  {
    name: 'San Francisco MLS (SFARMLS)',
    slug: 'san-francisco-mls-sfarmls',
    states: ['CA'],
    idxVendors: ['Showcase IDX', 'iHomeFinder'],
    cost: 'Varies (IDX fee ~$10/mo via Showcase IDX; confirm with MLS)',
    links: [
      { label: 'MLSListings Search', url: 'https://www.mlslistings.com/search/result/city/San%20Francisco/rent' },
      { label: 'Showcase IDX Coverage', url: 'https://showcaseidx.com/mls-coverage/san-francisco-association-of-realtors-sfar/' },
      { label: 'Realtyna SFARMLS Coverage', url: 'https://realtyna.com/mls-coverage/mls/san-francisco-mls-sfarmls/' },
      { label: 'AgentFire SFARMLS Coverage', url: 'https://agentfire.com/mls-coverage/san-francisco-multiple-listing-service/' },
    ],
  },
  {
    name: 'MLS Property Information Network (MLS PIN)',
    slug: 'mls-pin',
    states: ['MA', 'RI', 'NH'],
    idxVendors: ['Showcase IDX', 'iHomeFinder'],
    cost: 'Varies (IDX fee ~$10/mo via some vendors; confirm with MLS)',
    links: [
      { label: 'MLS PIN Website', url: 'https://www.mlspin.com/' },
      { label: 'Showcase IDX Coverage', url: 'https://showcaseidx.com/mls-coverage/mls-property-information-network-mlspin/' },
    ],
  },
  {
    name: 'Western Regional Information Systems and Technology, Inc. (WRIST)',
    slug: 'western-regional-information-systems-and-technology-inc',
    states: ['OH'],
    idxVendors: ['IDX Broker', 'iHomeFinder'],
    cost:
      '$150/year per client RETS (iHomeFinder); WRIST membership ~$25/member/mo + office fees (confirm with MLS); IDX Broker separate',
    coverage:
      'West Ohio. Vendor summaries include Columbus, Cincinnati, Dayton, Springfield, Westerville, Dublin, Middletown, Lima, Grove City, Hilliard, Delaware, Reynoldsburg, Loveland, Mason, West Chester, Marion, and Midwestern Ohio markets such as Springfield, Sidney, Troy, Urbana, and Piqua. Exact IDX footprint depends on association membership—confirm with WRIST.',
    notes:
      'Regional MLS (WRIST). iHomeFinder lists Midwestern Ohio Association of REALTORS® and Springfield Board of REALTORS® as member associations. New licensed members typically complete a 2-hour orientation within 60 days of acceptance.',
    links: [
      { label: 'AgentFire WRIST Coverage', url: 'https://agentfire.com/mls-coverage/western-regional-information-systems-and-technology-inc/' },
      { label: 'iHomeFinder IDX Coverage', url: 'https://www.ihomefinder.com/resources/idx-coverage/western-ohio-regional-mls-wrist/' },
    ],
  },
  {
    name: 'Northern Great Lakes Realtors MLS (NGLRMLS)',
    slug: 'northern-great-lakes-realtors-mls',
    states: ['MI', 'WI'],
    idxVendors: ['IDX Broker', 'iHomeFinder'],
    cost: '$100 set-up + $20/mo via iHomeFinder (confirm with MLS); IDX Broker pricing varies',
    coverage:
      'Northern Lower Michigan and the Great Lakes region. Member associations include Central Michigan Association of REALTORS®, Northeastern Michigan Board of REALTORS®, and Traverse Area Association of REALTORS®. Markets include Traverse City, Mt. Pleasant, Cadillac, Lansing, Saginaw, Bay City, Midland, East Lansing, Petoskey, Gaylord, and surrounding communities. Vendor materials also reference Wisconsin—confirm your office’s MLS with the board or IDX provider.',
    notes:
      'Association-owned MLS (NGLRMLS) serving participating boards across northern Michigan. Governed by a Board of Representatives with voting members from participating associations.',
    links: [
      { label: 'AgentFire NGLRMLS Coverage', url: 'https://agentfire.com/mls-coverage/northern-great-lakes-realtors-mls/' },
      { label: 'iHomeFinder IDX Coverage', url: 'https://www.ihomefinder.com/resources/idx-coverage/northern-great-lakes-realtors-mls/' },
    ],
  },
  {
    name: 'North Texas Real Estate Information Systems (NTREIS)',
    slug: 'north-texas-real-estate-information-systems',
    states: ['TX'],
    idxVendors: ['Showcase IDX', 'iHomeFinder'],
    cost:
      'Varies (~$20/mo IDX data fee via Showcase IDX in many cases; no association fees via iHomeFinder—confirm with MLS and vendor)',
    coverage:
      'Greater Dallas–Fort Worth metro and North Texas—including Dallas, Fort Worth, Arlington, Plano, Frisco, McKinney, Denton, Irving, Garland, Grand Prairie, Rockwall, Granbury, Abilene, Corsicana, Weatherford, Cleburne, Whitney, Possum Kingdom Lake, and surrounding communities across 48,000+ square miles.',
    notes:
      'Serves 40,000+ MLS subscribers across 14+ shareholder Realtor® associations. Technology offerings include NTREIS Matrix, InnoVia, Go, Find, Tax, Doc Storage, and more.',
    links: [
      { label: 'NTREIS Website', url: 'https://www.ntreis.net/' },
      { label: 'Showcase IDX Coverage', url: 'https://showcaseidx.com/mls-coverage/north-texas-real-estate-information-systems-ntreis/' },
      { label: 'iHomeFinder IDX Coverage', url: 'https://www.ihomefinder.com/resources/idx-coverage/north-texas-real-estate-information-systems-ntreis/' },
      { label: 'Realtyna MLS Coverage', url: 'https://realtyna.com/mls-coverage/mls/north-texas-real-estate-info-systems-ntreis/' },
    ],
  },
  {
    name: 'REcolorado',
    slug: 'recolorado',
    states: ['CO'],
    idxVendors: ['Showcase IDX', 'iHomeFinder'],
    cost:
      'Varies (~$15/mo IDX data fee via Showcase IDX in many cases; MLS subscription fees separate—confirm with REcolorado and vendor)',
    coverage:
      'Colorado statewide—including Denver, Aurora, Colorado Springs, Fort Collins, Boulder, Pueblo, Grand Junction, Loveland, Greeley, Arvada, Westminster, Castle Rock, Parker, Brighton, Broomfield, Littleton, Longmont, and surrounding communities.',
    notes:
      'Colorado’s largest MLS: 26,000+ brokers, agents, appraisers, and professionals. Headquartered in Greenwood Village; facilitates a large share of Colorado residential transactions.',
    links: [
      { label: 'REcolorado Website', url: 'https://recolorado.com/' },
      { label: 'Showcase IDX Coverage', url: 'https://showcaseidx.com/mls-coverage/recolorado-recolorado/' },
      { label: 'iHomeFinder IDX Coverage', url: 'https://www.ihomefinder.com/resources/idx-coverage/recolorado/' },
      { label: 'AgentFire REcolorado Coverage', url: 'https://agentfire.com/mls-coverage/recolorado/' },
    ],
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

export const SERVICED_STATES = ['WI', 'FL', 'CA', 'IL', 'VT', 'NH', 'MA', 'RI', 'NY', 'NJ', 'AR', 'TX', 'CO'] as const;
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
