/**
 * IDX Broker MLS coverage, pulled from https://www.idxbroker.com/idx_mls_coverage on 2026-10-06.
 * Regenerate from that page rather than hand-editing names or states.
 */

export type IdxBrokerMlsRecord = {
  slug: string
  name: string
  acronym: string
  /** Search phrase people pair with "IDX"; defaults to the acronym. */
  keyword?: string
  states: string[]
  idxBrokerSlug: string
  coverage?: string
  notes?: string
}

export const IDX_BROKER_MLS: IdxBrokerMlsRecord[] = [
  {
    "slug": "aberdeen-mls-abormls",
    "name": "Aberdeen MLS (ABORMLS)",
    "acronym": "ABORMLS",
    "states": [
      "SD"
    ],
    "idxBrokerSlug": "aberdeen-mls-abormls"
  },
  {
    "slug": "acadiana-mls-raamls",
    "name": "Acadiana MLS (RAAMLS)",
    "acronym": "RAAMLS",
    "states": [
      "LA"
    ],
    "idxBrokerSlug": "acadiana-mls-raamls"
  },
  {
    "slug": "adirondack-champlain-valley-mls-acvmls",
    "name": "Adirondack-Champlain Valley MLS (ACVMLS)",
    "acronym": "ACVMLS",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "adirondack-champlain-valley-mls-acvmls"
  },
  {
    "slug": "aiken-mls-amls",
    "name": "Aiken MLS (AMLS)",
    "acronym": "AMLS",
    "states": [
      "SC"
    ],
    "idxBrokerSlug": "aiken-mls-amls"
  },
  {
    "slug": "alaska-mls-akmls",
    "name": "Alaska MLS (AKMLS)",
    "acronym": "AKMLS",
    "states": [
      "AK"
    ],
    "idxBrokerSlug": "alaska-mls-akmls"
  },
  {
    "slug": "albany-georgia-mls-agmls",
    "name": "Albany Georgia MLS (AGMLS)",
    "acronym": "AGMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "albany-georgia-mls-agmls"
  },
  {
    "slug": "albemarle-mls-amls",
    "name": "Albemarle MLS (AMLS)",
    "acronym": "AMLS",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "albemarle-mls-rets-amls-rets"
  },
  {
    "slug": "all-jersey-mls-ajmls",
    "name": "All Jersey MLS (AJMLS)",
    "acronym": "AJMLS",
    "states": [
      "NJ"
    ],
    "idxBrokerSlug": "all-jersey-mls-ajmls"
  },
  {
    "slug": "allegheny-highland-mls-webapi-ahar",
    "name": "Allegheny Highland MLS Webapi (AHAR)",
    "acronym": "AHAR",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "allegheny-highland-mls-webapi-ahar-webapi"
  },
  {
    "slug": "altamaha-basin-bor-abbr",
    "name": "Altamaha Basin BOR (ABBR)",
    "acronym": "ABBR",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "altamaha-basin-bor-abbr"
  },
  {
    "slug": "altitude-mls-almls",
    "name": "Altitude MLS (ALMLS)",
    "acronym": "ALMLS",
    "states": [
      "CO"
    ],
    "idxBrokerSlug": "altitude-mls-almls"
  },
  {
    "slug": "altus-mls-amls",
    "name": "Altus MLS (AMLS)",
    "acronym": "AMLS",
    "states": [
      "OK"
    ],
    "idxBrokerSlug": "altus-mls-amls"
  },
  {
    "slug": "amarillo-mls-aarmls",
    "name": "Amarillo MLS (AARMLS)",
    "acronym": "AARMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "amarillo-mls-aarmls"
  },
  {
    "slug": "amelia-island-nassau-county-mls-aincmls",
    "name": "Amelia Island Nassau County MLS (AINCMLS)",
    "acronym": "AINCMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "amelia-island-nassau-county-mls-aincmls"
  },
  {
    "slug": "ann-arbor-area-mls-aaamls",
    "name": "Ann Arbor Area MLS (AAAMLS)",
    "acronym": "AAAMLS",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "ann-arbor-area-mls-aaamls"
  },
  {
    "slug": "arizona-regional-mls-armls",
    "name": "Arizona Regional MLS (ARMLS)",
    "acronym": "ARMLS",
    "states": [
      "AZ"
    ],
    "idxBrokerSlug": "arizona-regional-mls-armls",
    "coverage": "Metro Phoenix, from Wickenburg to Casa Grande and Apache Junction to Tonopah. ARMLS says it has no defined service area, but most of its listings are in Maricopa County and northern Pinal County.",
    "notes": "Founded in 1982 and owned by Phoenix REALTORS®, the Scottsdale Area Association of REALTORS®, and West and Southeast REALTORS® of the Valley. About 39,000 subscribers per HousingWire (2026), which reported a move to an independent board in August 2026."
  },
  {
    "slug": "arrowhead-mls-ahmls",
    "name": "Arrowhead MLS (AHMLS)",
    "acronym": "AHMLS",
    "states": [
      "MN"
    ],
    "idxBrokerSlug": "arrowhead-mls-ahmls"
  },
  {
    "slug": "ashland-area-bor-aabrky",
    "name": "Ashland Area BOR (AABRKY)",
    "acronym": "AABRKY",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "ashland-area-bor-rets-aabrky-rets"
  },
  {
    "slug": "ashland-bor-mls-abormls",
    "name": "Ashland BOR MLS (ABORMLS)",
    "acronym": "ABORMLS",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "ashland-bor-mls-ftp-abormls-ftp"
  },
  {
    "slug": "ashland-kentucky-mls-aabrkymls",
    "name": "Ashland Kentucky MLS (AABRKYMLS)",
    "acronym": "AABRKYMLS",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "ashland-kentucky-mls-aabrkymls"
  },
  {
    "slug": "aspen-glenwood-springs-mls-agsmls",
    "name": "Aspen Glenwood Springs MLS (AGSMLS)",
    "acronym": "AGSMLS",
    "states": [
      "CO"
    ],
    "idxBrokerSlug": "aspen-glenwood-springs-mls-agsmls"
  },
  {
    "slug": "athens-county-board-of-realtors-acbor",
    "name": "Athens County Board of REALTORS® (ACBOR)",
    "acronym": "ACBOR",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "athens-county-board-of-realtors-acbor"
  },
  {
    "slug": "augusta-ga-mls-augmls",
    "name": "Augusta GA MLS (AUGMLS)",
    "acronym": "AUGMLS",
    "states": [
      "GA",
      "SC"
    ],
    "idxBrokerSlug": "augusta-ga-mls-ftp-augmls-ftp"
  },
  {
    "slug": "badlands-board-of-realtors-bbor",
    "name": "Badlands Board of REALTORS® (BBOR)",
    "acronym": "BBOR",
    "states": [
      "ND"
    ],
    "idxBrokerSlug": "badlands-board-of-realtors-bbor"
  },
  {
    "slug": "bagnell-dam-association-of-realtors-bdamls",
    "name": "Bagnell Dam Association of REALTORS® (BDAMLS)",
    "acronym": "BDAMLS",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "bagnell-dam-association-of-realtors-bdamls"
  },
  {
    "slug": "bahamas-mls-bmls",
    "name": "Bahamas MLS (BMLS)",
    "acronym": "BMLS",
    "states": [
      "BS"
    ],
    "idxBrokerSlug": "bahamas-mls-bmls"
  },
  {
    "slug": "bakersfield-mls-bkmls",
    "name": "Bakersfield MLS (BKMLS)",
    "acronym": "BKMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "bakersfield-mls-bkmls"
  },
  {
    "slug": "baldwin-county-mls-bcmls",
    "name": "Baldwin County MLS (BCMLS)",
    "acronym": "BCMLS",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "baldwin-county-mls-bcmls"
  },
  {
    "slug": "batesville-mls-batemls",
    "name": "Batesville MLS (BATEMLS)",
    "acronym": "BATEMLS",
    "states": [
      "AR"
    ],
    "idxBrokerSlug": "batesville-mls-batemls"
  },
  {
    "slug": "baton-rouge-mls-brmls",
    "name": "Baton Rouge MLS (BRMLS)",
    "acronym": "BRMLS",
    "states": [
      "LA"
    ],
    "idxBrokerSlug": "baton-rouge-mls-brmls"
  },
  {
    "slug": "bareis",
    "name": "Bay Area Real Estate Information Services (BAREIS)",
    "acronym": "BAREIS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "bay-area-real-estate-info-services-bareis",
    "coverage": "The North Bay region of Northern California, serving Marin, Sonoma, Napa, Solano and Mendocino counties.",
    "notes": "Created October 22, 1997 by the Marin, Napa, Northern Solano and Solano Associations of REALTORS® and the Sonoma County MLS. BAREIS reports serving over 10,000 members."
  },
  {
    "slug": "bay-county-realtor-association-bcra",
    "name": "Bay County REALTOR® Association (BCRA)",
    "acronym": "BCRA",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "bay-county-realtor-association-bcra"
  },
  {
    "slug": "bay-east-aor-and-contra-costa-aor-beccar",
    "name": "Bay East AOR and Contra Costa AOR (BECCAR)",
    "acronym": "BECCAR",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "bay-east-aor-and-contra-costa-aor-beccar"
  },
  {
    "slug": "beaches-mls",
    "name": "BeachesMLS & Miami AOR",
    "acronym": "BeachesMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "beachesmls-and-miami-aor-rapbgflrmiamire",
    "keyword": "BeachesMLS",
    "coverage": "Broward, Palm Beach, St. Lucie, and Miami-Dade markets, including Fort Lauderdale, West Palm Beach, Boca Raton, Hollywood, Pompano Beach, Port Saint Lucie, and Miami.",
    "notes": "Formerly Florida Regional MLS. Operated by Broward, Palm Beaches & St. Lucie REALTORS®, with Miami REALTORS® data shared through the same feed."
  },
  {
    "slug": "beaumont-mls-bbor",
    "name": "Beaumont MLS (BBOR)",
    "acronym": "BBOR",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "beaumont-mls-rets-bbor"
  },
  {
    "slug": "berkshire-county-mls-bcmls",
    "name": "Berkshire County MLS (BCMLS)",
    "acronym": "BCMLS",
    "states": [
      "MA"
    ],
    "idxBrokerSlug": "berkshire-county-mls-bcmls"
  },
  {
    "slug": "big-sky-country-mls-bscmls",
    "name": "Big Sky Country MLS (BSCMLS)",
    "acronym": "BSCMLS",
    "states": [
      "MT"
    ],
    "idxBrokerSlug": "big-sky-country-mls-rets-bscmls-rets"
  },
  {
    "slug": "billings-mls-bmtmls",
    "name": "Billings MLS (BMTMLS)",
    "acronym": "BMTMLS",
    "states": [
      "MT"
    ],
    "idxBrokerSlug": "billings-mls-bmtmls"
  },
  {
    "slug": "bitterroot-valley-board-of-realtors-bvbor",
    "name": "Bitterroot Valley Board of REALTORS® (BVBOR)",
    "acronym": "BVBOR",
    "states": [
      "MT"
    ],
    "idxBrokerSlug": "bitterroot-valley-board-of-realtors-bvbor"
  },
  {
    "slug": "black-hills-mls-bhmls",
    "name": "Black Hills MLS (BHMLS)",
    "acronym": "BHMLS",
    "states": [
      "SD"
    ],
    "idxBrokerSlug": "black-hills-mls-bhmls"
  },
  {
    "slug": "bluegrass-realtors-brmls",
    "name": "Bluegrass REALTORS® (BRMLS)",
    "acronym": "BRMLS",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "bluegrass-realtors-brmls"
  },
  {
    "slug": "bradford-sullivan-mls-bsmls",
    "name": "Bradford Sullivan MLS (BSMLS)",
    "acronym": "BSMLS",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "bradford-sullivan-mls-bsmls"
  },
  {
    "slug": "brazoria-mls-bramls",
    "name": "Brazoria MLS (BRAMLS)",
    "acronym": "BRAMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "brazoria-mls-bramls"
  },
  {
    "slug": "brevard-mls-bmls",
    "name": "Brevard MLS (BMLS)",
    "acronym": "BMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "brevard-mls-bmls"
  },
  {
    "slug": "bridge-mls-bridgemls",
    "name": "Bridge MLS (BridgeMLS)",
    "acronym": "BridgeMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "bridge-mls-bridgemls",
    "coverage": "The East Bay of the San Francisco Bay Area, primarily Alameda and Contra Costa counties, plus Tuolumne County since 2023. Headquartered in Berkeley.",
    "notes": "Created through a collaboration between the Bridge Association of REALTORS® and the Delta Association of REALTORS®. The Tuolumne County Association of REALTORS® joined in November 2023, bringing bridgeMLS to nearly 4,000 subscribers."
  },
  {
    "slug": "bright-mls-bmls",
    "name": "Bright MLS",
    "acronym": "Bright MLS",
    "states": [
      "DE",
      "MD",
      "NJ",
      "PA",
      "VA",
      "WV",
      "DC"
    ],
    "idxBrokerSlug": "bright-mls-bmls",
    "coverage": "The Mid-Atlantic: Delaware, Maryland, New Jersey, Pennsylvania, Virginia, West Virginia and Washington, D.C. Headquartered in Rockville, Maryland.",
    "notes": "Formed in 2017 by consolidating nine REALTOR®-owned MLSs representing 43 associations, led by MRIS and TREND. With about 101,000 members, it ranked No. 1 in T3 Sixty's 2025 MLS rankings, per Real Estate News.",
    "keyword": "Bright MLS"
  },
  {
    "slug": "brooklyn-mls-bnymls",
    "name": "Brooklyn MLS (BNYMLS)",
    "acronym": "BNYMLS",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "brooklyn-mls-rets-bnymls-rets"
  },
  {
    "slug": "brownsville-south-padre-island-bor-bspibor",
    "name": "Brownsville-South Padre Island BOR (BSPIBOR)",
    "acronym": "BSPIBOR",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "brownsville-south-padre-island-bor-rets-bspibor"
  },
  {
    "slug": "bryan-college-station-mls-bcsmls",
    "name": "Bryan-College Station MLS (BCSMLS)",
    "acronym": "BCSMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "bryan-college-station-mls-bcsmls"
  },
  {
    "slug": "burlington-alamance-mls-burmls",
    "name": "Burlington Alamance MLS (BURMLS)",
    "acronym": "BURMLS",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "burlington-alamance-mls-burmls"
  },
  {
    "slug": "butte-mls-butte",
    "name": "Butte MLS (Butte)",
    "acronym": "Butte",
    "states": [
      "MT"
    ],
    "idxBrokerSlug": "butte-mls-butte-rets"
  },
  {
    "slug": "calaveras-county-association-of-realtors-ccar",
    "name": "Calaveras County Association of REALTORS® (CCAR)",
    "acronym": "CCAR",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "calaveras-county-association-of-realtors-ccar"
  },
  {
    "slug": "calhoun-county-mls-ccmls",
    "name": "Calhoun County MLS (CCMLS)",
    "acronym": "CCMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "calhoun-county-mls-ftp-ccmls-ftp"
  },
  {
    "slug": "california-desert-association-of-realtors-cdar",
    "name": "California Desert Association of REALTORS® (CDAR)",
    "acronym": "CDAR",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "california-desert-association-of-realtors-cdar"
  },
  {
    "slug": "california-real-estate-technology-services-carets",
    "name": "California Real Estate Technology Services (CARETS)",
    "acronym": "CARETS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "california-real-estate-technology-services-carets"
  },
  {
    "slug": "california-regional-multiple-listing-service",
    "name": "California Regional Multiple Listing Service (CRMLS)",
    "acronym": "CRMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "california-regional-mls-crmls",
    "coverage": "California, concentrated in Southern California. Its 2011 merger with SoCalMLS added Orange County, and the Ventura County, Pasadena-Foothills and Palm Springs associations joined in 2020. Headquartered in Chino Hills.",
    "notes": "Founded in 1979 in Pomona as Multi-Regional MLS; renamed California Regional MLS after a 2010 merger with calREDD. Reports more than 100,000 users (2025). T3 Sixty ranked it No. 2 nationally in 2025 with 99,000 members."
  },
  {
    "slug": "cambria-somerset-csmls",
    "name": "Cambria Somerset (CSMLS)",
    "acronym": "CSMLS",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "cambria-somerset-rets-csmls-rets"
  },
  {
    "slug": "canopy-mls-cmls",
    "name": "Canopy MLS (CMLS)",
    "acronym": "CMLS",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "canopy-mls-cmls"
  },
  {
    "slug": "cape-cod-mls-ccmls",
    "name": "Cape Cod MLS (CCMLS)",
    "acronym": "CCMLS",
    "states": [
      "MA"
    ],
    "idxBrokerSlug": "cape-cod-mls-ccmls"
  },
  {
    "slug": "cape-coral-mls-capecoral",
    "name": "Cape Coral MLS (CapeCoral)",
    "acronym": "CapeCoral",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "cape-coral-mls-capecoral"
  },
  {
    "slug": "cape-girardeau-county-mls-cgcmls",
    "name": "Cape Girardeau County MLS (CGCMLS)",
    "acronym": "CGCMLS",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "cape-girardeau-county-mls-cgcmls"
  },
  {
    "slug": "cape-may-county-mls-cmcaor",
    "name": "Cape May County MLS (CMCAOR)",
    "acronym": "CMCAOR",
    "states": [
      "NJ"
    ],
    "idxBrokerSlug": "cape-may-county-mls-cmcaor"
  },
  {
    "slug": "carbon-emery-mls-cemls",
    "name": "Carbon Emery MLS (CEMLS)",
    "acronym": "CEMLS",
    "states": [
      "UT"
    ],
    "idxBrokerSlug": "carbon-emery-mls-cemls"
  },
  {
    "slug": "carolina-smokies-association-of-realtors-csar",
    "name": "Carolina Smokies Association of REALTORS® (CSAR)",
    "acronym": "CSAR",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "carolina-smokies-association-of-realtors-csar"
  },
  {
    "slug": "catawba-valley-mls-cvmls",
    "name": "Catawba Valley MLS (CVMLS)",
    "acronym": "CVMLS",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "catawba-valley-mls-cvmls"
  },
  {
    "slug": "cedar-rapids-mls-cdrmls",
    "name": "Cedar Rapids MLS (CDRMLS)",
    "acronym": "CDRMLS",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "cedar-rapids-mls-cdrmls"
  },
  {
    "slug": "central-arizona-mls-cazbr",
    "name": "Central Arizona MLS (CAZBR)",
    "acronym": "CAZBR",
    "states": [
      "AZ"
    ],
    "idxBrokerSlug": "central-arizona-mls-cazbr"
  },
  {
    "slug": "central-georgia-mls-cgmls",
    "name": "Central Georgia MLS (CGMLS)",
    "acronym": "CGMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "central-georgia-mls-cgmls"
  },
  {
    "slug": "central-hill-country-bor-chcbor",
    "name": "Central Hill Country BOR - (CHCBOR)",
    "acronym": "CHCBOR",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "central-hill-country-bor-rets-chcbor-rets"
  },
  {
    "slug": "central-illinois-mls-clmls",
    "name": "Central Illinois MLS (CLMLS)",
    "acronym": "CLMLS",
    "states": [
      "IL"
    ],
    "idxBrokerSlug": "central-illinois-mls-clmls"
  },
  {
    "slug": "central-kentucky-association-of-realtors-ckar",
    "name": "Central Kentucky Association of REALTORS® (CKAR)",
    "acronym": "CKAR",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "central-kentucky-association-of-realtors-ckar"
  },
  {
    "slug": "central-kentucky-mls-ckarmls",
    "name": "Central Kentucky MLS (CKARMLS)",
    "acronym": "CKARMLS",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "central-kentucky-mls-ckarmls"
  },
  {
    "slug": "central-ms-mls-jkmls",
    "name": "Central MS MLS (JKMLS)",
    "acronym": "JKMLS",
    "states": [
      "MS"
    ],
    "idxBrokerSlug": "central-ms-mls-jkmls"
  },
  {
    "slug": "central-panhandle-association-of-realtors-cpar",
    "name": "Central Panhandle Association of REALTORS® (CPAR)",
    "acronym": "CPAR",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "central-panhandle-association-of-realtors-cpar"
  },
  {
    "slug": "central-penn-multi-list-cpmls",
    "name": "Central Penn Multi-List (CPMLS)",
    "acronym": "CPMLS",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "central-penn-multi-list-cpmls"
  },
  {
    "slug": "central-south-dakota-mls-csdmls",
    "name": "Central South Dakota MLS (CSDMLS)",
    "acronym": "CSDMLS",
    "states": [
      "SD"
    ],
    "idxBrokerSlug": "central-south-dakota-mls-csdmls"
  },
  {
    "slug": "central-susquehanna-valley-board-of-realtors-csvbr",
    "name": "Central Susquehanna Valley Board of REALTORS® (CSVBR)",
    "acronym": "CSVBR",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "central-susquehanna-valley-board-of-realtors-csvbr"
  },
  {
    "slug": "central-texas-mls-ctxmls",
    "name": "Central Texas MLS (CTXMLS)",
    "acronym": "CTXMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "central-texas-mls-ctxmls-rets"
  },
  {
    "slug": "central-utah-mls-cumls",
    "name": "Central Utah MLS (CUMLS)",
    "acronym": "CUMLS",
    "states": [
      "UT"
    ],
    "idxBrokerSlug": "central-utah-mls-cumls"
  },
  {
    "slug": "central-virginia-regional-mls-cvrmls",
    "name": "Central Virginia Regional MLS (CVRMLS)",
    "acronym": "CVRMLS",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "central-virginia-regional-mls-cvrmls"
  },
  {
    "slug": "central-west-tennessee-cwtar",
    "name": "Central West Tennessee (CWTAR)",
    "acronym": "CWTAR",
    "states": [
      "TN"
    ],
    "idxBrokerSlug": "central-west-tennessee-cwtar"
  },
  {
    "slug": "central-wisconsin-mls-cwmls",
    "name": "Central Wisconsin MLS (CWMLS)",
    "acronym": "CWMLS",
    "states": [
      "WI"
    ],
    "idxBrokerSlug": "central-wisconsin-mls-cwmls"
  },
  {
    "slug": "charleston-trident-mls-ctmls",
    "name": "Charleston Trident MLS (CTMLS)",
    "acronym": "CTMLS",
    "states": [
      "SC"
    ],
    "idxBrokerSlug": "charleston-trident-mls-ctmls"
  },
  {
    "slug": "charlottesville-area-association-of-realtors-caarmls",
    "name": "Charlottesville Area Association of REALTORS® (CAARMLS)",
    "acronym": "CAARMLS",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "charlottesville-area-association-of-realtors-caarmls"
  },
  {
    "slug": "charlottesville-mls-caarmls",
    "name": "Charlottesville MLS (CAARMLS)",
    "acronym": "CAARMLS",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "charlottesville-mls-caarmls"
  },
  {
    "slug": "chattanooga-mls-chtmls",
    "name": "Chattanooga MLS (CHTMLS)",
    "acronym": "CHTMLS",
    "states": [
      "TN"
    ],
    "idxBrokerSlug": "chattanooga-mls-chtmls"
  },
  {
    "slug": "chautauqua-county-board-of-realtors-mls-ccbr",
    "name": "Chautauqua County Board of REALTORS® MLS (CCBR)",
    "acronym": "CCBR",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "chautauqua-county-board-of-realtors-mls-ccbr"
  },
  {
    "slug": "chesapeake-bay-and-rivers-mls-cbrmls",
    "name": "Chesapeake Bay and Rivers MLS (CBRMLS)",
    "acronym": "CBRMLS",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "chesapeake-bay-and-rivers-mls-cbrmls"
  },
  {
    "slug": "cheyenne-mls-cymls",
    "name": "Cheyenne MLS (CYMLS)",
    "acronym": "CYMLS",
    "states": [
      "WY"
    ],
    "idxBrokerSlug": "cheyenne-mls-cymls"
  },
  {
    "slug": "cincinnati-mls-cincymls",
    "name": "Cincinnati MLS (CincyMLS)",
    "acronym": "CincyMLS",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "cincinnati-mls-cincymls"
  },
  {
    "slug": "citrus-county-mls-ccmls",
    "name": "Citrus County MLS (CCMLS)",
    "acronym": "CCMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "citrus-county-mls-ccmls"
  },
  {
    "slug": "clare-gladwin-mls-cgbor",
    "name": "Clare-Gladwin MLS (CGBOR)",
    "acronym": "CGBOR",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "clare-gladwin-mls-rets-cgbor-rets"
  },
  {
    "slug": "clatsop-mls-cmls",
    "name": "Clatsop MLS (CMLS)",
    "acronym": "CMLS",
    "states": [
      "OR"
    ],
    "idxBrokerSlug": "clatsop-mls-cmls"
  },
  {
    "slug": "clear-lake-iowa-mls-clakmls",
    "name": "Clear Lake Iowa MLS (CLAKMLS)",
    "acronym": "CLAKMLS",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "clear-lake-iowa-mls-rets-clakmls-rets"
  },
  {
    "slug": "cleveland-county-association-of-realtors-ccaor",
    "name": "Cleveland County Association of REALTORS® (CCAOR)",
    "acronym": "CCAOR",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "cleveland-county-association-of-realtors-ftp-ccaor-ftp"
  },
  {
    "slug": "clinton-mls-clinmls",
    "name": "Clinton MLS (CLINMLS)",
    "acronym": "CLINMLS",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "clinton-mls-clinmls"
  },
  {
    "slug": "cls-ocean-reef-mls-clsor",
    "name": "CLS Ocean Reef MLS (CLSOR)",
    "acronym": "CLSOR",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "cls-ocean-reef-mls-rets-clsor-rets"
  },
  {
    "slug": "coastal-association-mls-camls",
    "name": "Coastal Association MLS (CAMLS)",
    "acronym": "CAMLS",
    "states": [
      "CT",
      "MD"
    ],
    "idxBrokerSlug": "coastal-association-mls-camls"
  },
  {
    "slug": "coastal-bend-association-of-realtors-cbaor",
    "name": "Coastal Bend Association of REALTORS® (CBAOR)",
    "acronym": "CBAOR",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "coastal-bend-association-of-realtors-rets-cbaor-rets"
  },
  {
    "slug": "coastal-carolinas-mls-ccar",
    "name": "Coastal Carolinas MLS (CCAR)",
    "acronym": "CCAR",
    "states": [
      "SC"
    ],
    "idxBrokerSlug": "coastal-carolinas-mls-ccar",
    "coverage": "South Carolina's Grand Strand, centered on Myrtle Beach. The Coastal Carolinas Association of REALTORS® serves Horry, Georgetown and surrounding counties.",
    "notes": "Operated by the Coastal Carolinas Association of REALTORS® (CCAR), founded in 1945, which reports over 5,000 REALTOR® members."
  },
  {
    "slug": "coastal-mendocino-association-of-realtors-cmar",
    "name": "Coastal Mendocino Association of REALTORS® (CMAR)",
    "acronym": "CMAR",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "coastal-mendocino-association-of-realtors-cmar"
  },
  {
    "slug": "coeur-d-alene-mls-cdmls",
    "name": "Coeur d'Alene MLS (CDMLS)",
    "acronym": "CDMLS",
    "states": [
      "ID"
    ],
    "idxBrokerSlug": "coeur-dalene-mls-cdmls"
  },
  {
    "slug": "colorado-real-estate-network-cren",
    "name": "Colorado Real Estate Network (CREN)",
    "acronym": "CREN",
    "states": [
      "CO"
    ],
    "idxBrokerSlug": "colorado-real-estate-network-cren",
    "coverage": "Colorado's Western Slope and southwest region, based in Montrose. CREN lists 19 counties, including Alamosa, Archuleta, Delta, Garfield, Gunnison, La Plata, Mesa, Montezuma, Montrose, Ouray, Rio Grande, Saguache and San Miguel.",
    "notes": "Established in 2005, CREN serves six REALTOR® board associations and about 1,400 REALTOR® members plus 250 affiliates, per CREN. It runs on Paragon MLS software."
  },
  {
    "slug": "columbia-mo-mls-cbormls",
    "name": "Columbia MO MLS (CBORMLS)",
    "acronym": "CBORMLS",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "columbia-mo-mls-cbormls"
  },
  {
    "slug": "columbus-georgia-mls-cogamls",
    "name": "Columbus Georgia MLS (COGAMLS)",
    "acronym": "COGAMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "columbus-georgia-mls-cogamls-rets"
  },
  {
    "slug": "columbus-mls-cbrmls",
    "name": "Columbus MLS (CBRMLS)",
    "acronym": "CBRMLS",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "columbus-mls-cbrmls"
  },
  {
    "slug": "commercial-alliance-of-realtors-carwm",
    "name": "Commercial Alliance of REALTORS® (CARWM)",
    "acronym": "CARWM",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "commercial-alliance-of-realtors-carwm"
  },
  {
    "slug": "commercial-brokers-association-cbamls",
    "name": "Commercial Brokers Association (CBAMLS)",
    "acronym": "CBAMLS",
    "states": [
      "AK",
      "CA",
      "ID",
      "MT",
      "OR",
      "WA"
    ],
    "idxBrokerSlug": "commercial-brokers-association-cbamls"
  },
  {
    "slug": "conejo-simi-moorpark-aor-csmaor",
    "name": "Conejo Simi Moorpark AOR (CSMAOR)",
    "acronym": "CSMAOR",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "conejo-simi-moorpark-aor-csmaor"
  },
  {
    "slug": "consolidated-sc-mls-colamls",
    "name": "Consolidated SC MLS (COLAMLS)",
    "acronym": "COLAMLS",
    "states": [
      "SC"
    ],
    "idxBrokerSlug": "consolidated-sc-mls-rets-colamls"
  },
  {
    "slug": "cooperative-arkansas-realtors-mls",
    "name": "Cooperative Arkansas REALTORS® MLS (CARMLS)",
    "acronym": "CARMLS",
    "states": [
      "AR"
    ],
    "idxBrokerSlug": "cooperative-arkansas-carmls",
    "coverage": "All 75 Arkansas counties, including Little Rock, Fayetteville, Fort Smith, Rogers, Bentonville, Jonesboro, Conway, Hot Springs, and Pine Bluff, plus neighboring areas of Tennessee, Louisiana, and Texas.",
    "notes": "The largest MLS in Arkansas, with 6,000+ members across 931+ brokerages."
  },
  {
    "slug": "corpus-christi-coastal-bend-ccarmls",
    "name": "Corpus Christi/Coastal Bend (CCARMLS)",
    "acronym": "CCARMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "corpus-christicoastal-bend-ccarmls"
  },
  {
    "slug": "covington-association-of-realtors-covar",
    "name": "Covington Association of REALTORS® (COVAR)",
    "acronym": "COVAR",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "covington-association-of-realtors-covar"
  },
  {
    "slug": "crisnet-mls-cris",
    "name": "CRISNet MLS (CRIS)",
    "acronym": "CRIS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "crisnet-mls-cris"
  },
  {
    "slug": "cullman-mls-cullman",
    "name": "Cullman MLS (Cullman)",
    "acronym": "Cullman",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "cullman-mls-cullman"
  },
  {
    "slug": "cumberland-valley-bor-cvbor",
    "name": "Cumberland Valley BOR (CVBOR)",
    "acronym": "CVBOR",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "cumberland-valley-bor-cvbor"
  },
  {
    "slug": "dalton-mls-daltmls",
    "name": "Dalton MLS (DALTMLS)",
    "acronym": "DALTMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "dalton-mls-rets-daltmls-rets"
  },
  {
    "slug": "dan-river-region-association-of-realtors-drrar",
    "name": "Dan River Region Association of REALTORS® (DRRAR)",
    "acronym": "DRRAR",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "dan-river-region-association-of-realtors-drrar"
  },
  {
    "slug": "dayton-mls-dton",
    "name": "Dayton MLS (DTON)",
    "acronym": "DTON",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "dayton-mls-dton"
  },
  {
    "slug": "dayton-mls-commercial-dton",
    "name": "Dayton MLS Commercial (DTON)",
    "acronym": "DTON",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "dayton-mls-commercial-dton"
  },
  {
    "slug": "daytona-beach-aor-mls-dbamls",
    "name": "Daytona Beach AOR MLS (DBAMLS)",
    "acronym": "DBAMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "daytona-beach-aor-mls-dbamls"
  },
  {
    "slug": "decatur-mls-darmls",
    "name": "Decatur MLS (DARMLS)",
    "acronym": "DARMLS",
    "states": [
      "IL"
    ],
    "idxBrokerSlug": "decatur-mls-darmls"
  },
  {
    "slug": "deep-east-texas-mls-llc-detmls",
    "name": "Deep East Texas MLS, LLC (DETMLS)",
    "acronym": "DETMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "deep-east-texas-mls-llc-detmls"
  },
  {
    "slug": "del-norte-aor-mls-dnmls",
    "name": "Del Norte AOR MLS (DNMLS)",
    "acronym": "DNMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "del-norte-aor-mls-dnmls"
  },
  {
    "slug": "des-moines-mls-dmmls",
    "name": "Des Moines MLS (DMMLS)",
    "acronym": "DMMLS",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "des-moines-mls-dmmls"
  },
  {
    "slug": "dixie-gilchrist-levy-mls-dglmls",
    "name": "Dixie Gilchrist Levy MLS (DGLMLS)",
    "acronym": "DGLMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "dixie-gilchrist-levy-mls-rets-dglmls-rets"
  },
  {
    "slug": "door-county-mls-doormls",
    "name": "Door County MLS (DoorMLS)",
    "acronym": "DoorMLS",
    "states": [
      "WI"
    ],
    "idxBrokerSlug": "door-county-mls-rets-doormls-rets"
  },
  {
    "slug": "doorify-mls-dmls",
    "name": "Doorify MLS (formerly Triangle MLS)",
    "acronym": "Doorify MLS",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "doorify-mls-dmls",
    "coverage": "North Carolina's Research Triangle and surrounding markets, a 16-county region that includes Raleigh, Durham, and Chapel Hill.",
    "notes": "Formerly Triangle MLS (TMLS), renamed Doorify MLS in 2024. Based in Cary, it serves nearly 15,000 real estate professionals, per HousingWire (2025). Around the rebrand it moved off Paragon and gave subscribers platform choices, including Flexmls.",
    "keyword": "Doorify MLS"
  },
  {
    "slug": "dothan-mls-dothan",
    "name": "Dothan MLS (Dothan)",
    "acronym": "Dothan",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "dothan-mls-rets-dothan-rets"
  },
  {
    "slug": "dublin-mls-dubmls",
    "name": "Dublin MLS (DUBMLS)",
    "acronym": "DUBMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "dublin-mls-rets-dubmls-rets"
  },
  {
    "slug": "duck-creek-mls-dcmls",
    "name": "Duck Creek MLS (DCMLS)",
    "acronym": "DCMLS",
    "states": [
      "UT"
    ],
    "idxBrokerSlug": "duck-creek-mls-dcmls"
  },
  {
    "slug": "duncan-aor-daor",
    "name": "Duncan AOR (DAOR)",
    "acronym": "DAOR",
    "states": [
      "OK"
    ],
    "idxBrokerSlug": "duncan-aor-daor"
  },
  {
    "slug": "east-alabama-board-of-realtors-eabor",
    "name": "East Alabama Board of REALTORS® (EABOR)",
    "acronym": "EABOR",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "east-alabama-board-of-realtors-eabor"
  },
  {
    "slug": "east-central-aor-ecaormls",
    "name": "East Central AOR (ECAORMLS)",
    "acronym": "ECAORMLS",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "east-central-aor-ecaormls"
  },
  {
    "slug": "east-central-iowa-association-of-realtors-eciar",
    "name": "East Central Iowa Association of REALTORS® (ECIAR)",
    "acronym": "ECIAR",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "east-central-iowa-association-of-realtors-eciar"
  },
  {
    "slug": "east-mississippi-realtors-emrmls",
    "name": "East Mississippi REALTORS® (EMRMLS)",
    "acronym": "EMRMLS",
    "states": [
      "MS"
    ],
    "idxBrokerSlug": "east-mississippi-realtors-emrmls"
  },
  {
    "slug": "east-tennessee-realtors-kaarmls",
    "name": "East Tennessee REALTORS® (KAARMLS)",
    "acronym": "KAARMLS",
    "states": [
      "TN"
    ],
    "idxBrokerSlug": "east-tennessee-realtors-kaarmls"
  },
  {
    "slug": "eastern-arkansas-realtors-association-eara",
    "name": "Eastern Arkansas REALTORS® Association (EARA)",
    "acronym": "EARA",
    "states": [
      "AR"
    ],
    "idxBrokerSlug": "eastern-arkansas-realtors-association-eara"
  },
  {
    "slug": "eastern-kentucky-mls-ekar",
    "name": "Eastern Kentucky MLS (EKAR)",
    "acronym": "EKAR",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "eastern-kentucky-mls-ekar"
  },
  {
    "slug": "eastern-kentucky-mls-ekky",
    "name": "Eastern Kentucky MLS (EKKY)",
    "acronym": "EKKY",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "eastern-kentucky-mls-ekky"
  },
  {
    "slug": "eastern-shore-aor-esaor",
    "name": "Eastern Shore AOR (ESAOR)",
    "acronym": "ESAOR",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "eastern-shore-aor-rets-esaor-rets"
  },
  {
    "slug": "egyptian-mls-emls",
    "name": "Egyptian MLS (EMLS)",
    "acronym": "EMLS",
    "states": [
      "IL"
    ],
    "idxBrokerSlug": "egyptian-mls-emls"
  },
  {
    "slug": "elevatemls-elvmls",
    "name": "elevateMLS (ELVMLS)",
    "acronym": "ELVMLS",
    "states": [
      "CO"
    ],
    "idxBrokerSlug": "elevatemls-elvmls"
  },
  {
    "slug": "elko-county-mls-ecmls",
    "name": "Elko County MLS (ECMLS)",
    "acronym": "ECMLS",
    "states": [
      "NV"
    ],
    "idxBrokerSlug": "elko-county-mls-ecmls"
  },
  {
    "slug": "elmira-corning-mls-ecmls",
    "name": "Elmira Corning MLS (ECMLS)",
    "acronym": "ECMLS",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "elmira-corning-mls-rets-ecmls-rets"
  },
  {
    "slug": "emerald-coast-mls-ecarmls",
    "name": "Emerald Coast MLS (ECARMLS)",
    "acronym": "ECARMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "emerald-coast-mls-ecarmls"
  },
  {
    "slug": "emporia-mls-ebra",
    "name": "Emporia MLS (EBRA)",
    "acronym": "EBRA",
    "states": [
      "KS"
    ],
    "idxBrokerSlug": "emporia-mls-ebra"
  },
  {
    "slug": "enid-county-mls-ecmls",
    "name": "Enid County MLS (ECMLS)",
    "acronym": "ECMLS",
    "states": [
      "OK"
    ],
    "idxBrokerSlug": "enid-county-mls-ecmls"
  },
  {
    "slug": "eufaula-bor-ub",
    "name": "Eufaula BOR (UB)",
    "acronym": "UB",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "eufaula-bor-ub-rets"
  },
  {
    "slug": "ezmls-ezmls",
    "name": "EZMLS (EZMLS)",
    "acronym": "EZMLS",
    "states": [
      "AR"
    ],
    "idxBrokerSlug": "ezmls-ezmls"
  },
  {
    "slug": "fairfield-iowa-mls-fimls",
    "name": "Fairfield Iowa MLS (FIMLS)",
    "acronym": "FIMLS",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "fairfield-iowa-mls-fimls"
  },
  {
    "slug": "fargo-moorhead-association-of-realtors-fmarmls",
    "name": "Fargo-Moorhead Association of REALTORS® (FMARMLS)",
    "acronym": "FMARMLS",
    "states": [
      "ND"
    ],
    "idxBrokerSlug": "fargo-moorhead-association-of-realtors-fmarmls"
  },
  {
    "slug": "firelands-mls-firemls",
    "name": "Firelands MLS (FIREMLS)",
    "acronym": "FIREMLS",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "firelands-mls-firemls"
  },
  {
    "slug": "first-mls-fmls",
    "name": "First MLS (FMLS)",
    "acronym": "FMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "first-mls-fmls",
    "coverage": "Georgia, centered on metro Atlanta, where it runs service centers in Sandy Springs, Duluth, Woodstock, and Atlanta's West End. Data shares extend listing access into Alabama and Tennessee, including a 2022 agreement with Greater Chattanooga REALTORS®.",
    "notes": "Founded in 1957 by a group of brokers and still broker-owned and governed. Serves over 57,000 real estate professionals across the Southeast and calls itself the largest MLS in Georgia. Members use Matrix and Paragon, among other platforms."
  },
  {
    "slug": "five-county-mls-fcmls",
    "name": "Five County MLS (FCMLS)",
    "acronym": "FCMLS",
    "states": [
      "NV"
    ],
    "idxBrokerSlug": "five-county-mls-fcmls"
  },
  {
    "slug": "flint-hills-association-of-realtors-fhaor",
    "name": "Flint Hills Association of REALTORS® (FHAOR)",
    "acronym": "FHAOR",
    "states": [
      "KS"
    ],
    "idxBrokerSlug": "flint-hills-association-of-realtors-fhaor"
  },
  {
    "slug": "florida-keys-mls-flkmls",
    "name": "Florida Keys MLS (FLKMLS)",
    "acronym": "FLKMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "florida-keys-mls-flkmls"
  },
  {
    "slug": "forgotten-coast-realtor-association-rafsg",
    "name": "Forgotten Coast REALTOR® Association (RAFSG)",
    "acronym": "RAFSG",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "forgotten-coast-realtor-association-rafsg"
  },
  {
    "slug": "fort-hood-mls-fhmls",
    "name": "Fort Hood MLS (FHMLS)",
    "acronym": "FHMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "fort-hood-mls-fhmls"
  },
  {
    "slug": "fort-smith-mls-fsmls",
    "name": "Fort Smith MLS (FSMLS)",
    "acronym": "FSMLS",
    "states": [
      "AR"
    ],
    "idxBrokerSlug": "fort-smith-mls-fsmls"
  },
  {
    "slug": "fresno-mls-fresno",
    "name": "Fresno MLS (Fresno)",
    "acronym": "Fresno",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "fresno-mls-fresno"
  },
  {
    "slug": "fulton-county-mls-fcmls",
    "name": "Fulton County MLS (FCMLS)",
    "acronym": "FCMLS",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "fulton-county-mls-fcmls"
  },
  {
    "slug": "gainesville-alachua-county-mls-gacmls",
    "name": "Gainesville-Alachua County MLS (GACMLS)",
    "acronym": "GACMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "gainesville-alachua-county-mls-rets-gacmls-rets"
  },
  {
    "slug": "galveston-mls-gtxmls",
    "name": "Galveston MLS (GTXMLS)",
    "acronym": "GTXMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "galveston-mls-rets-gtxmls-rets"
  },
  {
    "slug": "garden-city-mls-gardenmls",
    "name": "Garden City MLS (GardenMLS)",
    "acronym": "GardenMLS",
    "states": [
      "KS"
    ],
    "idxBrokerSlug": "garden-city-mls-gardenmls"
  },
  {
    "slug": "garden-state-gsmls-a-b",
    "name": "Garden State (GSMLS-A+B)",
    "acronym": "GSMLS-A+B",
    "states": [
      "NJ"
    ],
    "idxBrokerSlug": "garden-state-gsmls-ab"
  },
  {
    "slug": "georgia-mls-gamls",
    "name": "Georgia MLS (GAMLS)",
    "acronym": "GAMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "georgia-mls-gamls",
    "coverage": "Statewide across Georgia, with membership ranging from the North Georgia mountains through central Georgia and along the Georgia coast. Some member offices are also located in neighboring Tennessee, Alabama, Florida, North Carolina, and South Carolina.",
    "notes": "Operating since 1962, with more than 50,000 subscribers as of January 2025 (Real Estate News). In 2025 it signed a listing data share with 12 local Georgia MLSs, including the Albany, Golden Isles, and West Metro boards."
  },
  {
    "slug": "glendive-mls-gmt",
    "name": "Glendive MLS (GMT)",
    "acronym": "GMT",
    "states": [
      "MT"
    ],
    "idxBrokerSlug": "glendive-mls-gmt"
  },
  {
    "slug": "global-mls-gmls",
    "name": "Global MLS (GMLS)",
    "acronym": "GMLS",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "global-mls-gmls"
  },
  {
    "slug": "golden-triangle-association-of-realtors-gtar-mls",
    "name": "Golden Triangle Association of REALTORS® (GTAR MLS)",
    "acronym": "GTAR MLS",
    "states": [
      "MS"
    ],
    "idxBrokerSlug": "golden-triangle-association-of-realtors-gtar-mls"
  },
  {
    "slug": "goodland-mls-gmls",
    "name": "Goodland MLS (GMLS)",
    "acronym": "GMLS",
    "states": [
      "KS"
    ],
    "idxBrokerSlug": "goodland-mls-gmls"
  },
  {
    "slug": "grand-county-mls-grncmls",
    "name": "Grand County MLS (GRNCMLS)",
    "acronym": "GRNCMLS",
    "states": [
      "CO"
    ],
    "idxBrokerSlug": "grand-county-mls-grncmls"
  },
  {
    "slug": "grand-forks-board-of-realtors-gfbmls",
    "name": "Grand Forks Board of REALTORS® (GFBMLS)",
    "acronym": "GFBMLS",
    "states": [
      "ND"
    ],
    "idxBrokerSlug": "grand-forks-board-of-realtors-gfbmls"
  },
  {
    "slug": "grand-island-board-of-realtors-gimls",
    "name": "Grand Island Board of REALTORS® (GIMLS)",
    "acronym": "GIMLS",
    "states": [
      "NE"
    ],
    "idxBrokerSlug": "grand-island-board-of-realtors-gimls"
  },
  {
    "slug": "grand-junction-mls-gjmls",
    "name": "Grand Junction MLS (GJMLS)",
    "acronym": "GJMLS",
    "states": [
      "CO"
    ],
    "idxBrokerSlug": "grand-junction-mls-gjmls"
  },
  {
    "slug": "grants-pass-association-of-realtors-gpar",
    "name": "Grants Pass Association of REALTORS® (GPAR)",
    "acronym": "GPAR",
    "states": [
      "OR"
    ],
    "idxBrokerSlug": "grants-pass-association-of-realtors-gpar"
  },
  {
    "slug": "great-lakes-bor-glbor",
    "name": "Great Lakes BOR (GLBOR)",
    "acronym": "GLBOR",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "great-lakes-bor-rets-glbor-rets"
  },
  {
    "slug": "great-north-mls-grnmls",
    "name": "Great North MLS (GRNMLS)",
    "acronym": "GRNMLS",
    "states": [
      "ND"
    ],
    "idxBrokerSlug": "great-north-mls-grnmls"
  },
  {
    "slug": "great-plains-regional-mls-gprmls",
    "name": "Great Plains Regional MLS (GPRMLS)",
    "acronym": "GPRMLS",
    "states": [
      "NE"
    ],
    "idxBrokerSlug": "great-plains-regional-mls-gprmls"
  },
  {
    "slug": "great-smoky-mountains-mls-gsmmls",
    "name": "Great Smoky Mountains MLS (GSMMLS)",
    "acronym": "GSMMLS",
    "states": [
      "TN"
    ],
    "idxBrokerSlug": "great-smoky-mountains-mls-gsmmls"
  },
  {
    "slug": "greater-alabama-mls-gabmls",
    "name": "Greater Alabama MLS (GABMLS)",
    "acronym": "GABMLS",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "greater-alabama-mls-gabmls"
  },
  {
    "slug": "greater-alexandria-area-mls-gaamls",
    "name": "Greater Alexandria Area MLS (GAAMLS)",
    "acronym": "GAAMLS",
    "states": [
      "MN"
    ],
    "idxBrokerSlug": "greater-alexandria-area-mls-gaamls"
  },
  {
    "slug": "greater-antelope-valley-association-of-realtors-gavaor",
    "name": "Greater Antelope Valley Association of REALTORS® (GAVAOR)",
    "acronym": "GAVAOR",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "greater-antelope-valley-association-of-realtors-gavaor"
  },
  {
    "slug": "greater-augusta-virginia-mls-gaarmls",
    "name": "Greater Augusta Virginia MLS (GAARMLS)",
    "acronym": "GAARMLS",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "greater-augusta-virginia-mls-gaarmls"
  },
  {
    "slug": "greater-binghamton-association-of-realtors-gbaor",
    "name": "Greater Binghamton Association Of REALTORS® (GBAOR)",
    "acronym": "GBAOR",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "greater-binghamton-association-of-realtors-gbaor"
  },
  {
    "slug": "greater-central-louisiana-realtors-association-mls-gclra",
    "name": "Greater Central Louisiana REALTORS® Association MLS (GCLRA)",
    "acronym": "GCLRA",
    "states": [
      "LA"
    ],
    "idxBrokerSlug": "greater-central-louisiana-realtors-association-mls-rets-gclra-rets"
  },
  {
    "slug": "greater-el-paso-association-of-realtors-gepar",
    "name": "Greater El Paso Association of REALTORS® (GEPAR)",
    "acronym": "GEPAR",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "greater-el-paso-association-of-realtors-gepar"
  },
  {
    "slug": "greater-erie-mls-gebor",
    "name": "Greater Erie MLS (GEBOR)",
    "acronym": "GEBOR",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "greater-erie-mls-gebor"
  },
  {
    "slug": "greater-fairbanks-mls-gfmls",
    "name": "Greater Fairbanks MLS (GFMLS)",
    "acronym": "GFMLS",
    "states": [
      "AK"
    ],
    "idxBrokerSlug": "greater-fairbanks-mls-gfmls"
  },
  {
    "slug": "greater-fort-polk-gfpar",
    "name": "Greater Fort Polk (GFPAR)",
    "acronym": "GFPAR",
    "states": [
      "LA"
    ],
    "idxBrokerSlug": "greater-fort-polk-gfpar"
  },
  {
    "slug": "greater-greenville-mls-ggmls",
    "name": "Greater Greenville MLS (GGMLS)",
    "acronym": "GGMLS",
    "states": [
      "SC"
    ],
    "idxBrokerSlug": "greater-greenville-mls-ggmls"
  },
  {
    "slug": "greater-lansing-mls-glmls",
    "name": "Greater Lansing MLS (GLMLS)",
    "acronym": "GLMLS",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "greater-lansing-mls-glmls"
  },
  {
    "slug": "greater-las-vegas-mls-glvar",
    "name": "Greater Las Vegas MLS (GLVAR)",
    "acronym": "GLVAR",
    "states": [
      "NV"
    ],
    "idxBrokerSlug": "greater-las-vegas-mls-glvar",
    "coverage": "Southern Nevada, centered on the Las Vegas Valley. The association's territorial jurisdiction covers Clark, Nye, Lincoln and White Pine counties, Nevada.",
    "notes": "Operated by Las Vegas REALTORS®, which was named the Greater Las Vegas Association of REALTORS® (GLVAR) until February 2020. The association reported more than 15,000 members at the time of the rename."
  },
  {
    "slug": "greater-lehigh-valley-realtors-glvr",
    "name": "Greater Lehigh Valley REALTORS® (GLVR)",
    "acronym": "GLVR",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "greater-lehigh-valley-realtors-glvr"
  },
  {
    "slug": "greater-mcallen-mls-gmarmls",
    "name": "Greater McAllen MLS (GMARMLS)",
    "acronym": "GMARMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "greater-mcallen-mls-gmarmls"
  },
  {
    "slug": "greater-northwoods-mls-gnmls",
    "name": "Greater Northwoods MLS (GNMLS)",
    "acronym": "GNMLS",
    "states": [
      "WI"
    ],
    "idxBrokerSlug": "greater-northwoods-mls-gnmls"
  },
  {
    "slug": "greater-owensboro-mls-gomls",
    "name": "Greater Owensboro MLS (GOMLS)",
    "acronym": "GOMLS",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "greater-owensboro-mls-rets-gomls-rets"
  },
  {
    "slug": "greater-pee-dee-mls-pdmls",
    "name": "Greater Pee Dee MLS (PDMLS)",
    "acronym": "PDMLS",
    "states": [
      "SC"
    ],
    "idxBrokerSlug": "greater-pee-dee-mls-pdmls"
  },
  {
    "slug": "greater-portsmouth-area-board-of-realtors-mls-gpabr",
    "name": "Greater Portsmouth Area Board of REALTORS® MLS (GPABR)",
    "acronym": "GPABR",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "greater-portsmouth-area-board-of-realtors-mls-rets-gpabr-rets"
  },
  {
    "slug": "greater-tyler-mls-gtarmls",
    "name": "Greater Tyler MLS (GTARMLS)",
    "acronym": "GTARMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "greater-tyler-mls-gtarmls"
  },
  {
    "slug": "greater-utica-rome-mls-gumls",
    "name": "Greater Utica Rome MLS (GUMLS)",
    "acronym": "GUMLS",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "greater-utica-rome-mls-gumls"
  },
  {
    "slug": "greater-wilkes-barre-mls-wbamls",
    "name": "Greater Wilkes Barre MLS (WBAMLS)",
    "acronym": "WBAMLS",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "greater-wilkes-barre-mls-wbamls"
  },
  {
    "slug": "green-valley-sahuarita-grnvlysah",
    "name": "Green Valley-Sahuarita (GRNVLYSAH)",
    "acronym": "GRNVLYSAH",
    "states": [
      "AZ"
    ],
    "idxBrokerSlug": "green-valley-sahuarita-grnvlysah"
  },
  {
    "slug": "greenbrier-valley-mls-gvmls",
    "name": "Greenbrier Valley MLS (GVMLS)",
    "acronym": "GVMLS",
    "states": [
      "WV"
    ],
    "idxBrokerSlug": "greenbrier-valley-mls-gvmls"
  },
  {
    "slug": "greenwich-mls-grwmls",
    "name": "Greenwich MLS (GRWMLS)",
    "acronym": "GRWMLS",
    "states": [
      "CT"
    ],
    "idxBrokerSlug": "greenwich-mls-grwmls"
  },
  {
    "slug": "greenwood-mls-gwscmls",
    "name": "Greenwood MLS (GWSCMLS)",
    "acronym": "GWSCMLS",
    "states": [
      "SC"
    ],
    "idxBrokerSlug": "greenwood-mls-rets-gwscmls-rets"
  },
  {
    "slug": "greenwood-sc-mls-gwscmls",
    "name": "Greenwood SC MLS (GWSCMLS)",
    "acronym": "GWSCMLS",
    "states": [
      "SC"
    ],
    "idxBrokerSlug": "greenwood-sc-mls-ftp-gwscmls-ftp"
  },
  {
    "slug": "gulf-coast-mls-gcmls",
    "name": "Gulf Coast MLS (GCMLS)",
    "acronym": "GCMLS",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "gulf-coast-mls-gcmls-webapi"
  },
  {
    "slug": "gulf-south-real-estate-info-network-gsrein",
    "name": "Gulf South Real Estate Info Network (GSREIN)",
    "acronym": "GSREIN",
    "states": [
      "LA"
    ],
    "idxBrokerSlug": "gulf-south-real-estate-info-network-gsrein"
  },
  {
    "slug": "harrisonburg-rockingham-mls-hrmls",
    "name": "Harrisonburg-Rockingham MLS (HRMLS)",
    "acronym": "HRMLS",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "harrisonburg-rockingham-mls-hrmls-rets"
  },
  {
    "slug": "hattiesburg-mls-hsmls",
    "name": "Hattiesburg MLS (HSMLS)",
    "acronym": "HSMLS",
    "states": [
      "MS"
    ],
    "idxBrokerSlug": "hattiesburg-mls-hsmls"
  },
  {
    "slug": "havre-hi-line-mls-hhlmls",
    "name": "Havre Hi Line MLS (HHLMLS)",
    "acronym": "HHLMLS",
    "states": [
      "MT"
    ],
    "idxBrokerSlug": "havre-hi-line-mls-hhlmls"
  },
  {
    "slug": "hawaii-central-mls-hicentralmls",
    "name": "Hawaii Central MLS (HiCentralMLS)",
    "acronym": "HiCentralMLS",
    "states": [
      "HI"
    ],
    "idxBrokerSlug": "hawaii-central-mls-hicentralmls"
  },
  {
    "slug": "hawaii-central-mls-active-only-hicentralactive",
    "name": "Hawaii Central MLS - Active Only (HiCentralActive)",
    "acronym": "HiCentralActive",
    "states": [
      "HI"
    ],
    "idxBrokerSlug": "hawaii-central-mls-active-only-hicentralactive"
  },
  {
    "slug": "hawaii-info-service-hismls",
    "name": "Hawaii Info Service (HISMLS)",
    "acronym": "HISMLS",
    "states": [
      "HI"
    ],
    "idxBrokerSlug": "hawaii-info-service-hismls"
  },
  {
    "slug": "hays-mls-haysmls",
    "name": "Hays MLS (HAYSMLS)",
    "acronym": "HAYSMLS",
    "states": [
      "KS"
    ],
    "idxBrokerSlug": "hays-mls-haysmls"
  },
  {
    "slug": "hazleton-mls-hazmls",
    "name": "Hazleton MLS (HAZMLS)",
    "acronym": "HAZMLS",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "hazleton-mls-hazmls"
  },
  {
    "slug": "heart-of-kentucky-mls-hkmls",
    "name": "Heart of Kentucky MLS (HKMLS)",
    "acronym": "HKMLS",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "heart-of-kentucky-mls-hkmls"
  },
  {
    "slug": "heart-of-missouri-board-of-realtors-hombor",
    "name": "Heart of Missouri Board of REALTORS® (HOMBOR)",
    "acronym": "HOMBOR",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "heart-of-missouri-board-of-realtors-hombor"
  },
  {
    "slug": "heart-of-missouri-mls-hmmls",
    "name": "Heart of Missouri MLS (HMMLS)",
    "acronym": "HMMLS",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "heart-of-missouri-mls-hmmls"
  },
  {
    "slug": "heartland-florida-mls-hfmls",
    "name": "Heartland (Florida) MLS (HFMLS)",
    "acronym": "HFMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "heartland-florida-mls-hfmls"
  },
  {
    "slug": "heartland-kansas-missouri-mls-hmls",
    "name": "Heartland (Kansas-Missouri) MLS (HMLS)",
    "acronym": "HMLS",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "heartland-kansas-missouri-mls-hmls"
  },
  {
    "slug": "henderson-audubon-mls-hamls",
    "name": "Henderson Audubon MLS (HAMLS)",
    "acronym": "HAMLS",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "henderson-audubon-mls-hamls"
  },
  {
    "slug": "henderson-county-bor-hcbor",
    "name": "Henderson County BOR (HCBOR)",
    "acronym": "HCBOR",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "henderson-county-bor-rets-hcbor-rets"
  },
  {
    "slug": "hernando-county-hcmls",
    "name": "Hernando County (HCMLS)",
    "acronym": "HCMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "hernando-county-hcmls"
  },
  {
    "slug": "high-country-hcmls",
    "name": "High Country (HCMLS)",
    "acronym": "HCMLS",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "high-country-hcmls"
  },
  {
    "slug": "high-desert-association-of-realtors-hdaor",
    "name": "High Desert Association of REALTORS® (HDAOR)",
    "acronym": "HDAOR",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "high-desert-association-of-realtors-hdaor"
  },
  {
    "slug": "highland-lakes-mls-hlmls",
    "name": "Highland Lakes MLS (HLMLS)",
    "acronym": "HLMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "highland-lakes-mls-hlmls"
  },
  {
    "slug": "highlands-cashiers-mls-hcmls",
    "name": "Highlands Cashiers MLS (HCMLS)",
    "acronym": "HCMLS",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "highlands-cashiers-mls-hcmls"
  },
  {
    "slug": "hinesville-mls-hmls",
    "name": "Hinesville MLS (HMLS)",
    "acronym": "HMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "hinesville-mls-rets-hmls-rets"
  },
  {
    "slug": "hive-mls-hive",
    "name": "Hive MLS (HIVE)",
    "acronym": "HIVE",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "hive-mls-hive"
  },
  {
    "slug": "hopkinsville-christian-and-todd-county-bor-hctcbor",
    "name": "Hopkinsville, Christian & Todd County BOR (HCTCBOR)",
    "acronym": "HCTCBOR",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "hopkinsville-christian-and-todd-county-bor-rets-hctcbor-rets"
  },
  {
    "slug": "hot-springs-bor-mls-hsbor",
    "name": "Hot Springs BOR MLS (HSBOR)",
    "acronym": "HSBOR",
    "states": [
      "AR"
    ],
    "idxBrokerSlug": "hot-springs-bor-mls-hsbor"
  },
  {
    "slug": "houston-mls-harmls",
    "name": "HAR MLS (Houston Association of REALTORS®)",
    "acronym": "HAR",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "houston-mls-harmls",
    "coverage": "Greater Houston, covering Harris, Fort Bend and Montgomery counties and parts of Brazoria, Galveston, Waller and Wharton counties.",
    "notes": "Operated by the Houston Association of REALTORS® (HAR), with roughly 48,000 subscribers (2025). HAR MLS shares listing data with NTREIS in Dallas-Fort Worth, Unlock MLS in Austin and SABOR in San Antonio.",
    "keyword": "HAR"
  },
  {
    "slug": "hudson-county-mls-hcmls",
    "name": "Hudson County MLS (HCMLS)",
    "acronym": "HCMLS",
    "states": [
      "NJ"
    ],
    "idxBrokerSlug": "hudson-county-mls-hcmls"
  },
  {
    "slug": "hudson-valley-catskill-region-mls-hvcrmls",
    "name": "Hudson Valley Catskill Region MLS (HVCRMLS)",
    "acronym": "HVCRMLS",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "hudson-valley-catskill-region-mls-hvcrmls"
  },
  {
    "slug": "humboldt-mls-hbmls",
    "name": "Humboldt MLS (HBMLS)",
    "acronym": "HBMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "humboldt-mls-hbmls"
  },
  {
    "slug": "huntington-bor-mls-huntmls",
    "name": "Huntington BOR MLS (HUNTMLS)",
    "acronym": "HUNTMLS",
    "states": [
      "KY",
      "WV"
    ],
    "idxBrokerSlug": "huntington-bor-mls-huntmls-rets"
  },
  {
    "slug": "huron-board-of-realtors-hbor",
    "name": "Huron Board of REALTORS® (HBOR)",
    "acronym": "HBOR",
    "states": [
      "SD"
    ],
    "idxBrokerSlug": "huron-board-of-realtors-hbor"
  },
  {
    "slug": "idaho-mountain-central-mls-imcmls",
    "name": "Idaho Mountain Central MLS (IMCMLS)",
    "acronym": "IMCMLS",
    "states": [
      "ID"
    ],
    "idxBrokerSlug": "idaho-mountain-central-mls-rets-imcmls-rets"
  },
  {
    "slug": "imagine-mls-imaginemls",
    "name": "Imagine MLS (ImagineMLS)",
    "acronym": "ImagineMLS",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "imagine-mls-imaginemls"
  },
  {
    "slug": "imperial-county-aor-icaor",
    "name": "Imperial County AOR (ICAOR)",
    "acronym": "ICAOR",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "imperial-county-aor-icaor"
  },
  {
    "slug": "incline-village-mls-ivmls",
    "name": "Incline Village MLS (IVMLS)",
    "acronym": "IVMLS",
    "states": [
      "NV"
    ],
    "idxBrokerSlug": "incline-village-mls-ivmls"
  },
  {
    "slug": "indiana-regional-mls-irmls",
    "name": "Indiana Regional MLS (IRMLS)",
    "acronym": "IRMLS",
    "states": [
      "IN"
    ],
    "idxBrokerSlug": "indiana-regional-mls-irmls"
  },
  {
    "slug": "information-and-real-estate-services-ires",
    "name": "Information and Real Estate Services (IRES)",
    "acronym": "IRES",
    "states": [
      "CO"
    ],
    "idxBrokerSlug": "information-and-real-estate-services-ires",
    "coverage": "Northern Colorado and the Boulder Valley, including Boulder, Longmont, Fort Collins, Loveland, Berthoud, Greeley, Estes Park and Logan County. BizWest (2019) listed its counties as Boulder, Weld, Larimer, Logan and Morgan. Headquartered in Loveland.",
    "notes": "Formed in 1996 by five REALTOR® associations: Boulder Area, Fort Collins, Greeley Area, Longmont and Loveland Berthoud. A proposed merger with REcolorado did not close; the two remain separate MLSs and share data under a 2024 agreement."
  },
  {
    "slug": "intermountain-mls-imls",
    "name": "Intermountain MLS (IMLS)",
    "acronym": "IMLS",
    "states": [
      "ID",
      "OR"
    ],
    "idxBrokerSlug": "intermountain-mls-imls",
    "coverage": "Idaho and eastern Oregon. As of 2016, its listings covered all Idaho counties south of Idaho County and west of Power County plus Malheur County, Oregon, and it added Latah County (Moscow) that year, per the Idaho Business Review.",
    "notes": "Based in Boise and a wholly owned subsidiary of Boise Regional REALTORS®. RISMedia (2026) describes it as Idaho's largest MLS with nearly 7,000 subscribers. In 2016 it served members through eight REALTOR® associations, per WAV Group."
  },
  {
    "slug": "inyo-county-mls-icmls",
    "name": "Inyo County MLS (ICMLS)",
    "acronym": "ICMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "inyo-county-mls-icmls"
  },
  {
    "slug": "iowa-city-area-mls-icaarmls",
    "name": "Iowa City Area MLS (ICAARMLS)",
    "acronym": "ICAARMLS",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "iowa-city-area-mls-icaarmls"
  },
  {
    "slug": "iron-county-mls-icbor",
    "name": "Iron County MLS (ICBOR)",
    "acronym": "ICBOR",
    "states": [
      "UT"
    ],
    "idxBrokerSlug": "iron-county-mls-icbor"
  },
  {
    "slug": "itasca-county-mls-icmls",
    "name": "Itasca County MLS (ICMLS)",
    "acronym": "ICMLS",
    "states": [
      "MN"
    ],
    "idxBrokerSlug": "itasca-county-mls-icmls"
  },
  {
    "slug": "jackson-mi-mls-jmimls",
    "name": "Jackson MI MLS (JMIMLS)",
    "acronym": "JMIMLS",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "jackson-mi-mls-jmimls"
  },
  {
    "slug": "jackson-mississippi-mls-jmls",
    "name": "Jackson Mississippi MLS (JMLS)",
    "acronym": "JMLS",
    "states": [
      "MS"
    ],
    "idxBrokerSlug": "jackson-mississippi-mls-jmls"
  },
  {
    "slug": "jamestown-board-of-realtors-jbor",
    "name": "Jamestown Board of REALTORS® (JBOR)",
    "acronym": "JBOR",
    "states": [
      "ND"
    ],
    "idxBrokerSlug": "jamestown-board-of-realtors-jbor"
  },
  {
    "slug": "jefferson-city-mls-jcmls",
    "name": "Jefferson City MLS (JCMLS)",
    "acronym": "JCMLS",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "jefferson-city-mls-rets-jcmls-rets"
  },
  {
    "slug": "jefferson-county-mls-jcmls",
    "name": "Jefferson County MLS (JCMLS)",
    "acronym": "JCMLS",
    "states": [
      "IN"
    ],
    "idxBrokerSlug": "jefferson-county-mls-jcmls"
  },
  {
    "slug": "jefferson-lewis-mls-jlmls",
    "name": "Jefferson-Lewis MLS (JLMLS)",
    "acronym": "JLMLS",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "jefferson-lewis-mls-jlmls"
  },
  {
    "slug": "kanab-mls-kanab",
    "name": "Kanab MLS (KANAB)",
    "acronym": "KANAB",
    "states": [
      "UT"
    ],
    "idxBrokerSlug": "kanab-mls-kanab"
  },
  {
    "slug": "kanawha-valley-mls-kvbr",
    "name": "Kanawha Valley MLS (KVBR)",
    "acronym": "KVBR",
    "states": [
      "WV"
    ],
    "idxBrokerSlug": "kanawha-valley-mls-kvbr"
  },
  {
    "slug": "kansas-high-plains-association-of-realtors-khpaor",
    "name": "Kansas High Plains Association of REALTORS® (KHPAOR)",
    "acronym": "KHPAOR",
    "states": [
      "KS"
    ],
    "idxBrokerSlug": "kansas-high-plains-association-of-realtors-khpaor"
  },
  {
    "slug": "kerrville-kvmls",
    "name": "Kerrville (KVMLS)",
    "acronym": "KVMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "kerrville-rets-kvmls-rets"
  },
  {
    "slug": "key-west-mls-kwmls",
    "name": "Key West MLS (KWMLS)",
    "acronym": "KWMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "key-west-mls-kwmls"
  },
  {
    "slug": "keystone-multi-list-keystone",
    "name": "Keystone Multi-List (Keystone)",
    "acronym": "Keystone",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "keystone-multi-list-keystone"
  },
  {
    "slug": "kings-county-board-of-realtors-kcbr",
    "name": "Kings County Board of REALTORS® (KCBR)",
    "acronym": "KCBR",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "kings-county-board-of-realtors-kcbr"
  },
  {
    "slug": "klamath-county-mls-kcmls",
    "name": "Klamath County MLS (KCMLS)",
    "acronym": "KCMLS",
    "states": [
      "OR"
    ],
    "idxBrokerSlug": "klamath-county-mls-kcmls"
  },
  {
    "slug": "knox-mls-komls",
    "name": "Knox MLS (KOMLS)",
    "acronym": "KOMLS",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "knox-mls-komls"
  },
  {
    "slug": "lake-country-ga-mls-lcgamls",
    "name": "Lake Country GA MLS (LCGAMLS)",
    "acronym": "LCGAMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "lake-country-ga-mls-lcgamls"
  },
  {
    "slug": "lake-havasu-association-of-realtors-lhar",
    "name": "Lake Havasu Association of REALTORS® (LHAR)",
    "acronym": "LHAR",
    "states": [
      "AZ"
    ],
    "idxBrokerSlug": "lake-havasu-association-of-realtors-lhar"
  },
  {
    "slug": "lake-martin-mls-lmmls",
    "name": "Lake Martin MLS (LMMLS)",
    "acronym": "LMMLS",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "lake-martin-mls-lmmls"
  },
  {
    "slug": "lake-of-ozarks-mls-lobr",
    "name": "Lake of Ozarks MLS (LOBR)",
    "acronym": "LOBR",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "lake-of-ozarks-mls-lobr"
  },
  {
    "slug": "lake-region-association-of-realtors-sasi",
    "name": "Lake Region Association of REALTORS® (SASI)",
    "acronym": "SASI",
    "states": [
      "MN"
    ],
    "idxBrokerSlug": "lake-region-association-of-realtors-sasi-rets"
  },
  {
    "slug": "lake-superior-area-realtors-inc-lsar",
    "name": "Lake Superior Area REALTORS®, Inc. (LSAR)",
    "acronym": "LSAR",
    "states": [
      "MN"
    ],
    "idxBrokerSlug": "lake-superior-area-realtors-inc-lsar"
  },
  {
    "slug": "lakes-country-mn-mls-lcmls",
    "name": "Lakes Country Mn MLS (LCMLS)",
    "acronym": "LCMLS",
    "states": [
      "MN"
    ],
    "idxBrokerSlug": "lakes-country-mn-mls-lcmls"
  },
  {
    "slug": "lakeway-area-mls-laamls",
    "name": "Lakeway Area MLS (LAAMLS)",
    "acronym": "LAAMLS",
    "states": [
      "TN"
    ],
    "idxBrokerSlug": "lakeway-area-mls-laamls"
  },
  {
    "slug": "laramie-mls-lamls",
    "name": "Laramie MLS (LAMLS)",
    "acronym": "LAMLS",
    "states": [
      "WY"
    ],
    "idxBrokerSlug": "laramie-mls-lamls"
  },
  {
    "slug": "laredo-mls-lbrmls",
    "name": "Laredo MLS (LBRMLS)",
    "acronym": "LBRMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "laredo-mls-lbrmls-rets"
  },
  {
    "slug": "las-cruces-mls-lcmls",
    "name": "Las Cruces MLS (LCMLS)",
    "acronym": "LCMLS",
    "states": [
      "NM"
    ],
    "idxBrokerSlug": "las-cruces-mls-lcmls"
  },
  {
    "slug": "las-vegas-realtors-lvr",
    "name": "Las Vegas REALTORS® (LVR)",
    "acronym": "LVR",
    "states": [
      "NV"
    ],
    "idxBrokerSlug": "las-vegas-realtors-lvr"
  },
  {
    "slug": "lassen-mls-lmls",
    "name": "Lassen MLS (LMLS)",
    "acronym": "LMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "lassen-mls-lmls"
  },
  {
    "slug": "latah-county-board-of-realtors-lcbr",
    "name": "Latah County Board of REALTORS® (LCBR)",
    "acronym": "LCBR",
    "states": [
      "ID"
    ],
    "idxBrokerSlug": "latah-county-board-of-realtors-lcbr"
  },
  {
    "slug": "laurel-bor-lbor",
    "name": "Laurel BOR (LBOR)",
    "acronym": "LBOR",
    "states": [
      "MS"
    ],
    "idxBrokerSlug": "laurel-bor-ftp-lbor-ftp"
  },
  {
    "slug": "lawrence-mls-lawrence",
    "name": "Lawrence MLS (Lawrence)",
    "acronym": "Lawrence",
    "states": [
      "KS"
    ],
    "idxBrokerSlug": "lawrence-mls-lawrence"
  },
  {
    "slug": "lawton-board-of-realtors-inc-lbrmls",
    "name": "Lawton Board of REALTORS® Inc. (LBRMLS)",
    "acronym": "LBRMLS",
    "states": [
      "NE",
      "OK"
    ],
    "idxBrokerSlug": "lawton-board-of-realtors-inc-lbrmls"
  },
  {
    "slug": "lee-county-mls-lcmls",
    "name": "Lee County MLS (LCMLS)",
    "acronym": "LCMLS",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "lee-county-mls-lcmls"
  },
  {
    "slug": "lenawee-county-mls-lcmls",
    "name": "Lenawee County MLS (LCMLS)",
    "acronym": "LCMLS",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "lenawee-county-mls-rets-lcmls"
  },
  {
    "slug": "lewiston-mls-lwmls",
    "name": "Lewiston MLS (LWMLS)",
    "acronym": "LWMLS",
    "states": [
      "MT"
    ],
    "idxBrokerSlug": "lewiston-mls-rets-lwmls-rets"
  },
  {
    "slug": "lincoln-county-board-of-realtors-lcbr",
    "name": "Lincoln County Board of REALTORS® (LCBR)",
    "acronym": "LCBR",
    "states": [
      "NE",
      "OR"
    ],
    "idxBrokerSlug": "lincoln-county-board-of-realtors-lcbr"
  },
  {
    "slug": "lincoln-county-mls-montana-lcmls-m",
    "name": "Lincoln County MLS Montana (LCMLS-M)",
    "acronym": "LCMLS-M",
    "states": [
      "MT"
    ],
    "idxBrokerSlug": "lincoln-county-mls-montana-lcmls-m"
  },
  {
    "slug": "livingston-county-board-of-realtors-mls-lbor",
    "name": "Livingston County Board of REALTORS® MLS (LBOR)",
    "acronym": "LBOR",
    "states": [
      "IL"
    ],
    "idxBrokerSlug": "livingston-county-board-of-realtors-mls-rets-lbor-rets"
  },
  {
    "slug": "local-expertise-regional-access-lera",
    "name": "Local Expertise Regional Access (LERA)",
    "acronym": "LERA",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "local-expertise-regional-access-lera"
  },
  {
    "slug": "lompoc-valley-mls-lvmls",
    "name": "Lompoc Valley MLS (LVMLS)",
    "acronym": "LVMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "lompoc-valley-mls-lvmls"
  },
  {
    "slug": "long-island-mls-mlsli",
    "name": "Long Island MLS (MLSLI)",
    "acronym": "MLSLI",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "long-island-mls-mlsli"
  },
  {
    "slug": "longview-area-mls-lgvboard",
    "name": "Longview Area MLS (LGVBOARD)",
    "acronym": "LGVBOARD",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "longview-area-mls-lgvboard-rets"
  },
  {
    "slug": "los-cabos-mls-lcmls",
    "name": "Los Cabos MLS (LCMLS)",
    "acronym": "LCMLS",
    "states": [
      "MX"
    ],
    "idxBrokerSlug": "los-cabos-mls-lcmls"
  },
  {
    "slug": "lowcountry-regional-mls-lrmls",
    "name": "Lowcountry Regional MLS (LRMLS)",
    "acronym": "LRMLS",
    "states": [
      "SC"
    ],
    "idxBrokerSlug": "lowcountry-regional-mls-lrmls"
  },
  {
    "slug": "lubbock-mls-larmls",
    "name": "Lubbock MLS (LARMLS)",
    "acronym": "LARMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "lubbock-mls-larmls"
  },
  {
    "slug": "lufkin-bor-mls-lbmls",
    "name": "Lufkin BOR MLS (LBMLS)",
    "acronym": "LBMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "lufkin-bor-mls-rets-lbmls-rets"
  },
  {
    "slug": "lynchburg-mls-lmls",
    "name": "Lynchburg MLS (LMLS)",
    "acronym": "LMLS",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "lynchburg-mls-lmls"
  },
  {
    "slug": "madison-county-mls-mcmls",
    "name": "Madison County MLS (MCMLS)",
    "acronym": "MCMLS",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "madison-county-mls-rets-mcmls-rets"
  },
  {
    "slug": "maine-real-estate-information-system-mreis",
    "name": "Maine Real Estate Information System (MREIS)",
    "acronym": "MREIS",
    "states": [
      "ME"
    ],
    "idxBrokerSlug": "maine-real-estate-information-system-mreis"
  },
  {
    "slug": "maine-real-estate-information-system-commercial-lease-mreis-coml",
    "name": "Maine Real Estate Information System Commercial Lease (MREIS-COML)",
    "acronym": "MREIS-COML",
    "states": [
      "ME"
    ],
    "idxBrokerSlug": "maine-real-estate-information-system-commercial-lease-mreis-coml"
  },
  {
    "slug": "maine-real-estate-information-system-inc-mreis",
    "name": "Maine Real Estate Information System, Inc. (MREIS)",
    "acronym": "MREIS",
    "states": [
      "ME"
    ],
    "idxBrokerSlug": "maine-real-estate-information-system-inc-mreis"
  },
  {
    "slug": "mammoth-lakes-mls-mlbor",
    "name": "Mammoth Lakes MLS (MLBOR)",
    "acronym": "MLBOR",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "mammoth-lakes-mls-mlbor"
  },
  {
    "slug": "mansfield-bor-mbor",
    "name": "Mansfield BOR (MBOR)",
    "acronym": "MBOR",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "mansfield-bor-rets-mbor-rets"
  },
  {
    "slug": "maquoketa-mls-maqmls",
    "name": "Maquoketa MLS (MAQMLS)",
    "acronym": "MAQMLS",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "maquoketa-mls-maqmls"
  },
  {
    "slug": "marco-island-area-mls-miamls",
    "name": "Marco Island Area MLS (MIAMLS)",
    "acronym": "MIAMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "marco-island-area-mls-miamls"
  },
  {
    "slug": "marinette-mls-mmls",
    "name": "Marinette MLS (MMLS)",
    "acronym": "MMLS",
    "states": [
      "WI"
    ],
    "idxBrokerSlug": "marinette-mls-mmls"
  },
  {
    "slug": "marion-bor-mbor",
    "name": "Marion BOR (MBOR)",
    "acronym": "MBOR",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "marion-bor-rets-mbor-rets"
  },
  {
    "slug": "martha-s-vineyard-mls-mvmls",
    "name": "Martha's Vineyard MLS (MVMLS)",
    "acronym": "MVMLS",
    "states": [
      "MA"
    ],
    "idxBrokerSlug": "marthas-vineyard-mls-mvmls"
  },
  {
    "slug": "martin-county-realtors-of-the-treasure-coast-inc-mcrtc",
    "name": "Martin County REALTORS® of the Treasure Coast, Inc. (MCRTC)",
    "acronym": "MCRTC",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "martin-county-realtors-of-the-treasure-coast-inc-mcrtc"
  },
  {
    "slug": "martinsville-mls-mvmls",
    "name": "Martinsville MLS (MVMLS)",
    "acronym": "MVMLS",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "martinsville-mls-rets-mvmls-rets"
  },
  {
    "slug": "mason-city-mls-mcmls",
    "name": "Mason City MLS (MCMLS)",
    "acronym": "MCMLS",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "mason-city-mls-mcmls"
  },
  {
    "slug": "mls-pin",
    "name": "MLS Property Information Network (MLS PIN)",
    "acronym": "MLS PIN",
    "states": [
      "MA",
      "RI",
      "NH",
      "ME",
      "CT",
      "VT",
      "NY"
    ],
    "idxBrokerSlug": "massachusetts-mls-property-info-network-mlspin",
    "keyword": "MLS PIN",
    "coverage": "Massachusetts, Rhode Island and much of New Hampshire, where MLS PIN holds listing data and full public records. Its subscribers also work in the other New England states and New York.",
    "notes": "A REALTOR®/broker-owned shareholder corporation based in Shrewsbury, Massachusetts, established in 1999. It reports more than 37,000 real estate professional subscribers (2026) and uses Pinergy, an MLS platform it built in-house."
  },
  {
    "slug": "maui-mls-ramaui",
    "name": "Maui MLS (RAMAUI)",
    "acronym": "RAMAUI",
    "states": [
      "HI"
    ],
    "idxBrokerSlug": "maui-mls-ramaui"
  },
  {
    "slug": "mcpherson-mls-mpmls",
    "name": "McPherson MLS (MPMLS)",
    "acronym": "MPMLS",
    "states": [
      "KS"
    ],
    "idxBrokerSlug": "mcpherson-mls-mpmls"
  },
  {
    "slug": "memphis-mls-maarmls",
    "name": "Memphis MLS (MAARMLS)",
    "acronym": "MAARMLS",
    "states": [
      "TN"
    ],
    "idxBrokerSlug": "memphis-mls-maarmls"
  },
  {
    "slug": "meridian-association-of-realtors-marmls",
    "name": "Meridian Association of REALTORS® (MARMLS)",
    "acronym": "MARMLS",
    "states": [
      "SD"
    ],
    "idxBrokerSlug": "meridian-association-of-realtors-marmls"
  },
  {
    "slug": "mesquite-nevada-mls-mesquite",
    "name": "Mesquite Nevada MLS (Mesquite)",
    "acronym": "Mesquite",
    "states": [
      "NV"
    ],
    "idxBrokerSlug": "mesquite-nevada-mls-mesquite"
  },
  {
    "slug": "metro-mls",
    "name": "Metro MLS (Milwaukee)",
    "acronym": "Metro MLS",
    "states": [
      "WI"
    ],
    "idxBrokerSlug": "metro-milwaukee-mls-metromls",
    "keyword": "Metro MLS",
    "coverage": "Greater Milwaukee and southeastern Wisconsin: 9,000+ professionals across 10 REALTOR® associations, with markets including Milwaukee, Waukesha, Racine, Kenosha, and Lake Geneva.",
    "notes": "DMR client Legendary Real Estate Services in Lake Geneva lists through Metro MLS. The IDX feed is issued to brokers."
  },
  {
    "slug": "metro-search-mls-metro-search",
    "name": "Metro Search MLS (Metro Search)",
    "acronym": "Metro Search",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "metro-search-mls-metro-search"
  },
  {
    "slug": "metrolist-sacramento-metrolist",
    "name": "MetroList (Sacramento)",
    "acronym": "MetroList",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "metrolist-sacramento-metrolist",
    "coverage": "The Sacramento region and central and northern California. A 2023 release listed Amador, Butte, Colusa, El Dorado, Merced, Nevada, Placer, Sacramento, San Joaquin, Stanislaus, Sutter, Yolo, and Yuba counties; HousingWire reported 15 counties in January 2026 after Madera County joined.",
    "notes": "More than 22,500 brokers and agents (2023). Formed in 1985 by the Sacramento, Placer County, and El Dorado County Associations of REALTORS®; owners later grew to include the Lodi and Yolo County Associations of REALTORS® and California Real Estate Brokers, Inc.",
    "keyword": "MetroList"
  },
  {
    "slug": "metropolitan-indianapolis-mls-mibor",
    "name": "Metropolitan Indianapolis MLS (MIBOR)",
    "acronym": "MIBOR",
    "states": [
      "IN"
    ],
    "idxBrokerSlug": "metropolitan-indianapolis-mls-mibor",
    "coverage": "Central Indiana, centered on Indianapolis. MIBOR serves Boone, Brown, Decatur, Hamilton, Hancock, Hendricks, Johnson, Madison, Marion, Montgomery, Morgan, Parke, Putnam, and Shelby counties, and also supplies its listing service to REALTORS® in Bartholomew, Jackson, and Jennings counties.",
    "notes": "The MLS is the Broker Listing Cooperative® (BLC®), run by the MIBOR REALTOR® Association. Founded in 1912, MIBOR reports nearly 10,000 members across 14 counties."
  },
  {
    "slug": "metropolitan-regional-info-system-mris",
    "name": "Metropolitan Regional Info System (MRIS)",
    "acronym": "MRIS",
    "states": [
      "DE",
      "MD",
      "NJ",
      "NC",
      "PA",
      "VA",
      "DC",
      "WV"
    ],
    "idxBrokerSlug": "metropolitan-regional-info-system-mris"
  },
  {
    "slug": "michigan-regional-information-center-michric",
    "name": "Michigan Regional Information Center (MichRIC)",
    "acronym": "MichRIC",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "michigan-regional-information-center-michric"
  },
  {
    "slug": "mid-america-regional-info-systems-maris",
    "name": "Mid America Regional Info Systems (MARIS)",
    "acronym": "MARIS",
    "states": [
      "MO",
      "IL"
    ],
    "idxBrokerSlug": "mid-america-regional-info-systems-maris",
    "coverage": "Based in St. Louis, MARIS serves more than 130 counties across Missouri and Illinois (about 118,000 square miles), per RISMedia in 2026. Its area includes St. Louis City and County, St. Charles, and Jefferson counties, plus Madison and St. Clair counties in Illinois.",
    "notes": "NAR describes MARIS as association-owned and broker-driven, formed in the 1980s by four REALTOR® associations. MARIS reported 14 shareholder associations in 2019, when it separated shareholder ownership from board governance."
  },
  {
    "slug": "mid-carolina-regional-mls-mcrar",
    "name": "Mid Carolina Regional MLS (MCRAR)",
    "acronym": "MCRAR",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "mid-carolina-regional-mls-mcrar"
  },
  {
    "slug": "mid-georgia-mls-mgmls",
    "name": "Mid Georgia MLS (MGMLS)",
    "acronym": "MGMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "mid-georgia-mls-mgmls"
  },
  {
    "slug": "mid-ohio-valley-mls-movmls",
    "name": "Mid Ohio Valley MLS (MOVMLS)",
    "acronym": "MOVMLS",
    "states": [
      "WV"
    ],
    "idxBrokerSlug": "mid-ohio-valley-mls-movmls"
  },
  {
    "slug": "mid-valley-mls-mid-valley",
    "name": "Mid Valley MLS (Mid Valley)",
    "acronym": "Mid Valley",
    "states": [
      "IL"
    ],
    "idxBrokerSlug": "mid-valley-mls-mid-valley"
  },
  {
    "slug": "mid-kansas-mls-mkmls",
    "name": "Mid-Kansas MLS (MKMLS)",
    "acronym": "MKMLS",
    "states": [
      "KS"
    ],
    "idxBrokerSlug": "mid-kansas-mls-mkmls"
  },
  {
    "slug": "midland-michigan-mls-midmls",
    "name": "Midland Michigan MLS (MIDMLS)",
    "acronym": "MIDMLS",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "midland-michigan-mls-midmls"
  },
  {
    "slug": "midwest-missouri-mls-mmmls",
    "name": "Midwest Missouri MLS (MMMLS)",
    "acronym": "MMMLS",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "midwest-missouri-mls-mmmls"
  },
  {
    "slug": "mlsni",
    "name": "Midwest Real Estate Data (MRED)",
    "acronym": "MRED",
    "states": [
      "IL",
      "WI",
      "IN"
    ],
    "idxBrokerSlug": "midwest-real-estate-data-mred",
    "keyword": "MRED",
    "coverage": "The Chicago metro and collar counties, Northern Illinois, Southern Wisconsin (including Lake Geneva and Kenosha), and Northwest Indiana. Key cities include Chicago, Naperville, Evanston, Schaumburg, Aurora, Joliet, Rockford, and Oak Park. 40,000+ members across 13 REALTOR® associations.",
    "notes": "Formerly MLSNI (Multiple Listing Service of Northern Illinois). IDX feeds go to brokers of record, so agents connect through their managing broker."
  },
  {
    "slug": "milledgeville-mls-mmls",
    "name": "Milledgeville MLS (MMLS)",
    "acronym": "MMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "milledgeville-mls-rets-mmls-rets"
  },
  {
    "slug": "mini-cassia-mls-minimls",
    "name": "Mini-Cassia MLS (MINIMLS)",
    "acronym": "MINIMLS",
    "states": [
      "ID"
    ],
    "idxBrokerSlug": "mini-cassia-mls-minimls"
  },
  {
    "slug": "minot-mls-mmls",
    "name": "Minot MLS (MMLS)",
    "acronym": "MMLS",
    "states": [
      "ND"
    ],
    "idxBrokerSlug": "minot-mls-mmls"
  },
  {
    "slug": "mirealsource-mirealsource",
    "name": "MiRealSource (MiRealSource)",
    "acronym": "MiRealSource",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "mirealsource-mirealsource",
    "coverage": "Southeast Michigan. Subscribers can also search listings from across the state through a data-sharing arrangement among 13 Michigan MLSs in the Great Lakes Repository.",
    "notes": "Established in 1921, MiRealSource describes itself as the largest broker-owned MLS in Michigan. It runs on the Paragon platform and has also provided Paragon MLS service to other Michigan boards, including the Saginaw, Midland and Bay County associations (2018)."
  },
  {
    "slug": "mississippi-gulf-coast-mls-mgcmls",
    "name": "Mississippi Gulf Coast MLS (MGCMLS)",
    "acronym": "MGCMLS",
    "states": [
      "MS"
    ],
    "idxBrokerSlug": "mississippi-gulf-coast-mls-rets-mgcmls-rets"
  },
  {
    "slug": "missoula-mls-mmls",
    "name": "Missoula MLS (MMLS)",
    "acronym": "MMLS",
    "states": [
      "MT"
    ],
    "idxBrokerSlug": "missoula-mls-mmls"
  },
  {
    "slug": "yes-mls",
    "name": "MLS Now (formerly Yes MLS)",
    "acronym": "MLS Now",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "mls-now-mlsn",
    "keyword": "MLS Now",
    "notes": "Formerly Yes MLS, renamed MLS Now on January 6, 2021. Yes MLS formed in 2018 when NORMLS and CRIS consolidated. At the rebrand it had about 13,300 subscribers across 13 REALTOR® associations, per WAV Group.",
    "coverage": "Northeast Ohio, from headquarters in Independence. MLS Now says it serves 32 counties in Ohio. At its 2021 rebrand it cited 36 primary counties in Ohio and West Virginia."
  },
  {
    "slug": "mls-of-central-oregon-mlsco",
    "name": "MLS of Central Oregon (MLSCO)",
    "acronym": "MLSCO",
    "states": [
      "OR"
    ],
    "idxBrokerSlug": "mls-of-central-oregon-mlsco"
  },
  {
    "slug": "mls-of-southern-arizona-mlssaz",
    "name": "MLS of Southern Arizona (MLSSAZ)",
    "acronym": "MLSSAZ",
    "states": [
      "AZ"
    ],
    "idxBrokerSlug": "mls-of-southern-arizona-mlssaz"
  },
  {
    "slug": "mls-technology-inc-mlsti",
    "name": "MLS Technology Inc. (MLSTI)",
    "acronym": "MLSTI",
    "states": [
      "OK"
    ],
    "idxBrokerSlug": "mls-technology-inc-mlsti"
  },
  {
    "slug": "mls-united-umls",
    "name": "MLS United (UMLS)",
    "acronym": "UMLS",
    "states": [
      "AL",
      "MS"
    ],
    "idxBrokerSlug": "mls-united-umls"
  },
  {
    "slug": "mlslistings-inc-mlslistings",
    "name": "MLSListings Inc.",
    "acronym": "MLSListings",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "mlslistings-inc-mlslistings",
    "coverage": "Northern California, centered on Santa Clara, San Mateo, Santa Cruz, Monterey, and San Benito counties, including Silicon Valley. MLSListings puts its area at 28,000 square miles.",
    "notes": "MLSListings reports subscribers from over 6,000 brokerages. Its board has broker seats and a REALTOR® association shareholder seat, held in 2026 by the Santa Clara County Association of REALTORS®.",
    "keyword": "MLSListings"
  },
  {
    "slug": "momentum-mls-mmls",
    "name": "Momentum MLS (MMLS)",
    "acronym": "MMLS",
    "states": [
      "AZ"
    ],
    "idxBrokerSlug": "momentum-mls-mmls"
  },
  {
    "slug": "monmouth-ocean-mls-momls",
    "name": "Monmouth Ocean MLS (MOMLS)",
    "acronym": "MOMLS",
    "states": [
      "NJ"
    ],
    "idxBrokerSlug": "monmouth-ocean-mls-momls"
  },
  {
    "slug": "monroe-county-alabama-mls-mcalmls",
    "name": "Monroe County Alabama MLS (MCALMLS)",
    "acronym": "MCALMLS",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "monroe-county-alabama-mls-ftp-mcalmls-ftp"
  },
  {
    "slug": "montana-regional-mls-mrmls",
    "name": "Montana Regional MLS (MRMLS)",
    "acronym": "MRMLS",
    "states": [
      "MT"
    ],
    "idxBrokerSlug": "montana-regional-mls-mrmls"
  },
  {
    "slug": "montgomery-mls-maarmls",
    "name": "Montgomery MLS (MAARMLS)",
    "acronym": "MAARMLS",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "montgomery-mls-maarmls"
  },
  {
    "slug": "moultrie-area-board-of-realtors-mabr",
    "name": "Moultrie Area Board of REALTORS® (MABR)",
    "acronym": "MABR",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "moultrie-area-board-of-realtors-rets-mabr-rets"
  },
  {
    "slug": "mount-pleasant-mls-mpmls",
    "name": "Mount Pleasant MLS (MPMLS)",
    "acronym": "MPMLS",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "mount-pleasant-mls-mpmls"
  },
  {
    "slug": "mountain-home-mls-mhmls",
    "name": "Mountain Home MLS (MHMLS)",
    "acronym": "MHMLS",
    "states": [
      "AR"
    ],
    "idxBrokerSlug": "mountain-home-mls-mhmls"
  },
  {
    "slug": "mountain-resort-communities-association-of-realtors-inc-mrcaor",
    "name": "Mountain Resort Communities Association of REALTORS® , Inc. (MRCAOR)",
    "acronym": "MRCAOR",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "mountain-resort-communities-association-of-realtors-inc-mrcaor"
  },
  {
    "slug": "mt-rushmore-aor-mraor",
    "name": "Mt. Rushmore AOR (MRAOR)",
    "acronym": "MRAOR",
    "states": [
      "SD"
    ],
    "idxBrokerSlug": "mt-rushmore-aor-mraor"
  },
  {
    "slug": "multiple-listing-service-of-oklahoma-mlsok",
    "name": "Multiple Listing Service of Oklahoma (MLSOK)",
    "acronym": "MLSOK",
    "states": [
      "OK"
    ],
    "idxBrokerSlug": "multiple-listing-service-of-oklahoma-mlsok"
  },
  {
    "slug": "my-florida-regional-mls-mfrmls",
    "name": "My Florida Regional MLS (MFRMLS)",
    "acronym": "MFRMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "my-florida-regional-mls-mfrmls"
  },
  {
    "slug": "navarre-area-mls-namls",
    "name": "Navarre Area MLS (NAMLS)",
    "acronym": "NAMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "navarre-area-mls-namls"
  },
  {
    "slug": "new-jersey-njidx",
    "name": "New Jersey (NJIDX)",
    "acronym": "NJIDX",
    "states": [
      "NJ"
    ],
    "idxBrokerSlug": "new-jersey-idx-njidx"
  },
  {
    "slug": "new-mexico-mls-nmmls",
    "name": "New Mexico MLS (NMMLS)",
    "acronym": "NMMLS",
    "states": [
      "NM"
    ],
    "idxBrokerSlug": "new-mexico-mls-nmmls"
  },
  {
    "slug": "new-river-valley-mls-nrvar",
    "name": "New River Valley MLS (NRVAR)",
    "acronym": "NRVAR",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "new-river-valley-mls-nrvar"
  },
  {
    "slug": "new-smyrna-mls-nsmy",
    "name": "New Smyrna MLS (NSMY)",
    "acronym": "NSMY",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "new-smyrna-mls-nsmy"
  },
  {
    "slug": "new-york-state-alliance-nysa",
    "name": "New York State Alliance (NYSA)",
    "acronym": "NYSA",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "new-york-state-alliance-nysa"
  },
  {
    "slug": "nocoast-mls-nocomls",
    "name": "NoCoast MLS (NOCOMLS)",
    "acronym": "NOCOMLS",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "nocoast-mls-nocomls"
  },
  {
    "slug": "nolan-county-board-of-realtors-ncbor",
    "name": "Nolan County Board of REALTORS® (NCBOR)",
    "acronym": "NCBOR",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "nolan-county-board-of-realtors-ncbor"
  },
  {
    "slug": "norfolk-ne-mls-nnemls",
    "name": "Norfolk NE MLS (NNEMLS)",
    "acronym": "NNEMLS",
    "states": [
      "NE"
    ],
    "idxBrokerSlug": "norfolk-ne-mls-nnemls"
  },
  {
    "slug": "north-central-board-of-realtors-ncbor",
    "name": "North Central Board of REALTORS® (NCBOR)",
    "acronym": "NCBOR",
    "states": [
      "OK"
    ],
    "idxBrokerSlug": "north-central-board-of-realtors-ncbor"
  },
  {
    "slug": "north-central-mississippi-ncmmls",
    "name": "North Central Mississippi (NCMMLS)",
    "acronym": "NCMMLS",
    "states": [
      "MS"
    ],
    "idxBrokerSlug": "north-central-mississippi-rets-ncmmls-rets"
  },
  {
    "slug": "north-central-washington-mls-ncwmls",
    "name": "North Central Washington MLS (NCWMLS)",
    "acronym": "NCWMLS",
    "states": [
      "WA"
    ],
    "idxBrokerSlug": "north-central-washington-mls-ncwmls"
  },
  {
    "slug": "north-central-west-virginia-mls-ncwvmls",
    "name": "North Central West Virginia MLS (NCWVMLS)",
    "acronym": "NCWVMLS",
    "states": [
      "WV"
    ],
    "idxBrokerSlug": "north-central-west-virginia-mls-ncwvmls"
  },
  {
    "slug": "north-florida-mls-nflmls",
    "name": "North Florida MLS (NFLMLS)",
    "acronym": "NFLMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "north-florida-mls-nflmls"
  },
  {
    "slug": "north-santa-barbara-county-mls-nsbcmls",
    "name": "North Santa Barbara County MLS (NSBCMLS)",
    "acronym": "NSBCMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "north-santa-barbara-county-mls-nsbcmls"
  },
  {
    "slug": "north-texas-real-estate-information-systems",
    "name": "North Texas Real Estate Information Systems (NTREIS)",
    "acronym": "NTREIS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "north-texas-real-estate-info-systems-ntreis",
    "coverage": "Greater Dallas-Fort Worth and North Texas, including Dallas, Fort Worth, Arlington, Plano, Frisco, McKinney, Denton, Irving, Rockwall, Granbury, Abilene, and Weatherford, across 48,000+ square miles.",
    "notes": "Serves 40,000+ MLS subscribers across 14+ shareholder REALTOR® associations."
  },
  {
    "slug": "northeast-arkansas-bor-neabor",
    "name": "Northeast Arkansas BOR (NEABOR)",
    "acronym": "NEABOR",
    "states": [
      "AR"
    ],
    "idxBrokerSlug": "northeast-arkansas-bor-rets-neabor-rets"
  },
  {
    "slug": "northeast-central-aor-necar",
    "name": "Northeast Central AOR (NECAR)",
    "acronym": "NECAR",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "northeast-central-aor-rets-necar-rets"
  },
  {
    "slug": "northeast-georgia-mls-negmls",
    "name": "Northeast Georgia MLS (NEGMLS)",
    "acronym": "NEGMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "northeast-georgia-mls-negmls"
  },
  {
    "slug": "northeast-iowa-regional-board-of-realtors-neirbr",
    "name": "Northeast Iowa Regional Board of REALTORS® (NEIRBR)",
    "acronym": "NEIRBR",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "northeast-iowa-regional-board-of-realtors-neirbr"
  },
  {
    "slug": "northeast-louisiana-mls-nelar",
    "name": "Northeast Louisiana MLS (NELAR)",
    "acronym": "NELAR",
    "states": [
      "LA"
    ],
    "idxBrokerSlug": "northeast-louisiana-mls-nelar"
  },
  {
    "slug": "northeast-mississippi-mls-nmmls",
    "name": "Northeast Mississippi MLS (NMMLS)",
    "acronym": "NMMLS",
    "states": [
      "MS"
    ],
    "idxBrokerSlug": "northeast-mississippi-mls-nmmls"
  },
  {
    "slug": "northeast-oklahoma-board-of-realtors-nobor",
    "name": "Northeast Oklahoma Board of REALTORS® (NOBOR)",
    "acronym": "NOBOR",
    "states": [
      "OK"
    ],
    "idxBrokerSlug": "northeast-oklahoma-board-of-realtors-nobor"
  },
  {
    "slug": "northeast-south-dakota-nesd",
    "name": "Northeast South Dakota (NESD)",
    "acronym": "NESD",
    "states": [
      "SD"
    ],
    "idxBrokerSlug": "northeast-south-dakota-nesd"
  },
  {
    "slug": "northeast-washington-mls-newar",
    "name": "Northeast Washington MLS (NEWAR)",
    "acronym": "NEWAR",
    "states": [
      "WA"
    ],
    "idxBrokerSlug": "northeast-washington-mls-newar"
  },
  {
    "slug": "northeast-wisconsin-mls-ranw",
    "name": "Northeast Wisconsin MLS (RANW)",
    "acronym": "RANW",
    "states": [
      "WI"
    ],
    "idxBrokerSlug": "northeast-wisconsin-mls-ranw"
  },
  {
    "slug": "northeast-wyoming-realtor-alliance-newra",
    "name": "Northeast Wyoming REALTOR® Alliance (NEWRA)",
    "acronym": "NEWRA",
    "states": [
      "WY"
    ],
    "idxBrokerSlug": "northeast-wyoming-realtor-alliance-newra"
  },
  {
    "slug": "northern-arizona-mls-nazmls",
    "name": "Northern Arizona MLS (NAZMLS)",
    "acronym": "NAZMLS",
    "states": [
      "AZ"
    ],
    "idxBrokerSlug": "northern-arizona-mls-nazmls"
  },
  {
    "slug": "northern-great-lakes-realtors-mls",
    "name": "Northern Great Lakes REALTORS® MLS (NGLRMLS)",
    "acronym": "NGLRMLS",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "northern-great-lakes-realtors-mls-nglrmls",
    "coverage": "Northern Lower Michigan and the Great Lakes region, including Traverse City, Mt. Pleasant, Cadillac, Lansing, Saginaw, Bay City, Midland, Petoskey, and Gaylord.",
    "notes": "Association-owned MLS serving participating boards across northern Michigan, including the Traverse Area Association of REALTORS®."
  },
  {
    "slug": "northern-jackson-board-of-realtors-njbor",
    "name": "Northern Jackson Board of REALTORS® (NJBOR)",
    "acronym": "NJBOR",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "northern-jackson-board-of-realtors-njbor"
  },
  {
    "slug": "northern-kentucky-mls-nkar",
    "name": "Northern Kentucky MLS (NKAR)",
    "acronym": "NKAR",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "northern-kentucky-mls-nkar"
  },
  {
    "slug": "northern-michigan-mls-nmmls",
    "name": "Northern Michigan MLS (NMMLS)",
    "acronym": "NMMLS",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "northern-michigan-mls-nmmls"
  },
  {
    "slug": "northern-mountains-of-pennsylvania-mls-nmpmls",
    "name": "Northern Mountains of Pennsylvania MLS (NMPMLS)",
    "acronym": "NMPMLS",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "northern-mountains-of-pennsylvania-mls-nmpmls"
  },
  {
    "slug": "northern-neck-mls-nnmls",
    "name": "Northern Neck MLS (NNMLS)",
    "acronym": "NNMLS",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "northern-neck-mls-nnmls"
  },
  {
    "slug": "northern-nevada-regional-mls-nnrmls",
    "name": "Northern Nevada Regional MLS (NNRMLS)",
    "acronym": "NNRMLS",
    "states": [
      "NV"
    ],
    "idxBrokerSlug": "northern-nevada-regional-mls-nnrmls"
  },
  {
    "slug": "northern-ohio-regional-info-systems-noris",
    "name": "Northern Ohio Regional Info Systems (NORIS)",
    "acronym": "NORIS",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "northern-ohio-regional-info-systems-noris"
  },
  {
    "slug": "rmlsmn",
    "name": "NorthstarMLS",
    "acronym": "NorthstarMLS",
    "states": [
      "MN"
    ],
    "idxBrokerSlug": "northstar-mls-northstar",
    "keyword": "NorthstarMLS",
    "coverage": "Minnesota and the Upper Midwest: the Twin Cities metro (Minneapolis, St. Paul, Bloomington, Edina, Plymouth, Minnetonka, Eden Prairie, Lakeville) plus Rochester, Duluth, and hundreds of surrounding communities. 22,000+ members.",
    "notes": "Formerly RMLS-MN (Regional Multiple Listing Service of Minnesota). IDX requires broker sign-off."
  },
  {
    "slug": "northwest-arkansas-bor-mls-nabormls",
    "name": "Northwest Arkansas BOR MLS (NABORMLS)",
    "acronym": "NABORMLS",
    "states": [
      "AR"
    ],
    "idxBrokerSlug": "northwest-arkansas-bor-mls-nabormls"
  },
  {
    "slug": "northwest-illinois-alliance-of-realtors-nwiar",
    "name": "NorthWest Illinois Alliance of REALTORS® (NWIAR)",
    "acronym": "NWIAR",
    "states": [
      "IL"
    ],
    "idxBrokerSlug": "northwest-illinois-alliance-of-realtors-nwiar"
  },
  {
    "slug": "northwest-indiana-realtors-association-mls-niramls",
    "name": "Northwest Indiana REALTORS® Association MLS (NIRAMLS)",
    "acronym": "NIRAMLS",
    "states": [
      "IN"
    ],
    "idxBrokerSlug": "northwest-indiana-realtorsÂ-association-mls-niramls"
  },
  {
    "slug": "northwest-iowa-bor-nwibor",
    "name": "Northwest Iowa BOR (NWIBOR)",
    "acronym": "NWIBOR",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "northwest-iowa-bor-nwibor"
  },
  {
    "slug": "northwest-louisiana-nwlar",
    "name": "Northwest Louisiana (NWLAR)",
    "acronym": "NWLAR",
    "states": [
      "LA"
    ],
    "idxBrokerSlug": "northwest-louisiana-nwlar-rets"
  },
  {
    "slug": "northwest-minnesota-mls-nwmmls",
    "name": "Northwest Minnesota MLS (NWMMLS)",
    "acronym": "NWMMLS",
    "states": [
      "MN"
    ],
    "idxBrokerSlug": "northwest-minnesota-mls-nwmmls"
  },
  {
    "slug": "northwest-mississippi-mls-nwmar",
    "name": "Northwest Mississippi MLS (NWMAR)",
    "acronym": "NWMAR",
    "states": [
      "MS"
    ],
    "idxBrokerSlug": "northwest-mississippi-mls-nwmar-rets"
  },
  {
    "slug": "northwest-mls-nwmls",
    "name": "Northwest MLS (NWMLS)",
    "acronym": "NWMLS",
    "states": [
      "WA",
      "OR"
    ],
    "idxBrokerSlug": "northwest-mls-nwmls",
    "coverage": "Washington State and Oregon. As of 2021, NWMLS covered 26 Washington counties, which it said held nearly 84% of the state's population. It runs regional service centers across its area.",
    "notes": "Broker-owned, not-for-profit MLS reporting more than 2,400 member offices and over 30,000 brokers in Washington and Oregon (2026). Walla Walla and Columbia counties joined in 2021 when the Walla Walla Association of REALTORS® merged its MLS into NWMLS."
  },
  {
    "slug": "northwest-oklahoma-aor-noaor",
    "name": "Northwest Oklahoma AOR (NOAOR)",
    "acronym": "NOAOR",
    "states": [
      "OK"
    ],
    "idxBrokerSlug": "northwest-oklahoma-aor-noaor"
  },
  {
    "slug": "northwest-wisconsin-mls-ranww",
    "name": "Northwest Wisconsin MLS (RANWW)",
    "acronym": "RANWW",
    "states": [
      "LA",
      "WI"
    ],
    "idxBrokerSlug": "northwest-wisconsin-mls-rets-ranww-rets"
  },
  {
    "slug": "northwest-wyoming-mls-nwbor",
    "name": "Northwest Wyoming MLS (NWBOR)",
    "acronym": "NWBOR",
    "states": [
      "WY"
    ],
    "idxBrokerSlug": "northwest-wyoming-mls-rets-nwbor-rets"
  },
  {
    "slug": "nw-illinois-mls-nwil",
    "name": "NW Illinois MLS (NWIL)",
    "acronym": "NWIL",
    "states": [
      "IL"
    ],
    "idxBrokerSlug": "nw-illinois-mls-nwil"
  },
  {
    "slug": "ny-state-mls-nysmls",
    "name": "NY State MLS (NYSMLS)",
    "acronym": "NYSMLS",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "ny-state-mls-nysmls"
  },
  {
    "slug": "ocala-marion-mls-ocala",
    "name": "Ocala-Marion MLS (OCALA)",
    "acronym": "OCALA",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "ocala-marion-mls-ocala"
  },
  {
    "slug": "odessa-bor-mls-odmls",
    "name": "Odessa BOR MLS (ODMLS)",
    "acronym": "ODMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "odessa-bor-mls-ftp-odmls-ftp"
  },
  {
    "slug": "olympic-mls-ocmls",
    "name": "Olympic MLS (OCMLS)",
    "acronym": "OCMLS",
    "states": [
      "WA"
    ],
    "idxBrokerSlug": "olympic-mls-ocmls"
  },
  {
    "slug": "omni-mls-omni",
    "name": "OMNI MLS (OMNI)",
    "acronym": "OMNI",
    "states": [
      "MX"
    ],
    "idxBrokerSlug": "omni-mls-omni"
  },
  {
    "slug": "onekey-mls-okmls",
    "name": "OneKey MLS",
    "acronym": "OneKey MLS",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "onekey-mls-okmls",
    "coverage": "Long Island plus the former Hudson Gateway MLS area: Westchester, Putnam, Rockland, Orange, and Sullivan counties, the Bronx, and Manhattan.",
    "notes": "Formed in 2018 by the Hudson Gateway Association of REALTORS® and the Long Island Board of REALTORS®, and branded OneKey MLS in 2019. Hudson Gateway MLS (often called Hudson MLS) merged into it. OneKey reported about 42,000 subscribers (2020).",
    "keyword": "OneKey MLS"
  },
  {
    "slug": "orange-belt-mls-obmls",
    "name": "Orange Belt MLS (OBMLS)",
    "acronym": "OBMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "orange-belt-mls-obmls"
  },
  {
    "slug": "oregon-coast-mls-orcomls",
    "name": "Oregon Coast MLS (ORCOMLS)",
    "acronym": "ORCOMLS",
    "states": [
      "OR"
    ],
    "idxBrokerSlug": "oregon-coast-mls-orcomls"
  },
  {
    "slug": "oregon-datashare-ods",
    "name": "Oregon Datashare (ODS)",
    "acronym": "ODS",
    "states": [
      "OR"
    ],
    "idxBrokerSlug": "oregon-datashare-ods"
  },
  {
    "slug": "otero-county-mls-ocaor",
    "name": "Otero County MLS (OCAOR)",
    "acronym": "OCAOR",
    "states": [
      "NM"
    ],
    "idxBrokerSlug": "otero-county-mls-rets-ocaor"
  },
  {
    "slug": "otsego-delaware-board-of-realtors-odbor",
    "name": "Otsego-Delaware Board of REALTORS® (ODBOR)",
    "acronym": "ODBOR",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "otsego-delaware-board-of-realtors-odbor"
  },
  {
    "slug": "outer-banks-mls-obmls",
    "name": "Outer Banks MLS (OBMLS)",
    "acronym": "OBMLS",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "outer-banks-mls-obmls"
  },
  {
    "slug": "ozark-gateway-association-of-realtors-ogar",
    "name": "Ozark Gateway Association of REALTORS® (OGAR)",
    "acronym": "OGAR",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "ozark-gateway-association-of-realtors-ogar"
  },
  {
    "slug": "pacific-regional-mls-pacmls",
    "name": "Pacific Regional MLS (PACMLS)",
    "acronym": "PACMLS",
    "states": [
      "WA"
    ],
    "idxBrokerSlug": "pacific-regional-mls-pacmls"
  },
  {
    "slug": "palestine-aor-paor",
    "name": "Palestine AOR (PAOR)",
    "acronym": "PAOR",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "palestine-aor-ftp-paor-ftp"
  },
  {
    "slug": "palm-beach-board-of-realtors-mls-pbbormls",
    "name": "Palm Beach Board of REALTORS® MLS (PBBORMLS)",
    "acronym": "PBBORMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "palm-beach-board-of-realtors-mls-pbbormls"
  },
  {
    "slug": "pampa-board-of-realtors-pbor",
    "name": "Pampa Board of REALTORS® (PBOR)",
    "acronym": "PBOR",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "pampa-board-of-realtors-pbor"
  },
  {
    "slug": "park-city-mls-pkcmls",
    "name": "Park City MLS (PKCMLS)",
    "acronym": "PKCMLS",
    "states": [
      "UT"
    ],
    "idxBrokerSlug": "park-city-mls-pkcmls"
  },
  {
    "slug": "pearl-river-county-board-of-realtors-prcbr",
    "name": "Pearl River County Board of REALTORS® (PRCBR)",
    "acronym": "PRCBR",
    "states": [
      "MS"
    ],
    "idxBrokerSlug": "pearl-river-county-board-of-realtors-rets-prcbr-rets"
  },
  {
    "slug": "pensacola-mls-parmls",
    "name": "Pensacola MLS (PARMLS)",
    "acronym": "PARMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "pensacola-mls-parmls"
  },
  {
    "slug": "permian-basin-mls-pbmls",
    "name": "Permian Basin MLS (PBMLS)",
    "acronym": "PBMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "permian-basin-mls-ftp-pbmls-ftp"
  },
  {
    "slug": "phenix-city-mls-pcmls",
    "name": "Phenix City MLS (PCMLS)",
    "acronym": "PCMLS",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "phenix-city-mls-ftp-pcmls-ftp"
  },
  {
    "slug": "piedmont-regional-aor-prarmls",
    "name": "Piedmont Regional AOR (PRARMLS)",
    "acronym": "PRARMLS",
    "states": [
      "SC"
    ],
    "idxBrokerSlug": "piedmont-regional-aor-rets-prarmls-rets"
  },
  {
    "slug": "pierre-area-mls-pamls",
    "name": "Pierre Area MLS (PAMLS)",
    "acronym": "PAMLS",
    "states": [
      "SD"
    ],
    "idxBrokerSlug": "pierre-area-mls-pamls"
  },
  {
    "slug": "pike-wayne-mls-pwmls",
    "name": "Pike Wayne MLS (PWMLS)",
    "acronym": "PWMLS",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "pike-wayne-mls-pwmls"
  },
  {
    "slug": "pittsburg-board-of-realtors-pbor",
    "name": "Pittsburg Board of REALTORS® (PBOR)",
    "acronym": "PBOR",
    "states": [
      "KS"
    ],
    "idxBrokerSlug": "pittsburg-board-of-realtors-ftp-pbor-ftp"
  },
  {
    "slug": "plumas-mls-plumas",
    "name": "Plumas MLS (Plumas)",
    "acronym": "Plumas",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "plumas-mls-plumas"
  },
  {
    "slug": "pocatello-mls-pctmls",
    "name": "Pocatello MLS (PCTMLS)",
    "acronym": "PCTMLS",
    "states": [
      "ID"
    ],
    "idxBrokerSlug": "pocatello-mls-pctmls"
  },
  {
    "slug": "pocono-mountains-pmmls",
    "name": "Pocono Mountains (PMMLS)",
    "acronym": "PMMLS",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "pocono-mountains-pmmls"
  },
  {
    "slug": "port-neches-port-arthur-nederland-mls-pnpanmls",
    "name": "Port Neches Port Arthur Nederland MLS (PNPANMLS)",
    "acronym": "PNPANMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "port-neches-port-arthur-nederland-mls-rets-pnpanmls-rets"
  },
  {
    "slug": "prescott-mls-paarmls",
    "name": "Prescott MLS (PAARMLS)",
    "acronym": "PAARMLS",
    "states": [
      "AZ"
    ],
    "idxBrokerSlug": "prescott-mls-paarmls"
  },
  {
    "slug": "prime-mls",
    "name": "PrimeMLS",
    "acronym": "PrimeMLS",
    "states": [
      "NH",
      "VT",
      "ME",
      "MA",
      "RI",
      "CT",
      "NY"
    ],
    "idxBrokerSlug": "primemls-primemls",
    "keyword": "PrimeMLS",
    "coverage": "New Hampshire and Vermont, where it is the dominant MLS per Real Estate News, plus subscribers in Maine, Massachusetts, Rhode Island, Connecticut and New York.",
    "notes": "Formerly the New England Real Estate Network (NEREN), formed in 1994 as the nation's first multistate MLS and renamed PrimeMLS in 2023. Based in Concord, New Hampshire, it is owned by 25 REALTOR® associations and serves more than 12,000 agents and brokers (2023)."
  },
  {
    "slug": "pueblo-mls-parmls",
    "name": "Pueblo MLS (PARMLS)",
    "acronym": "PARMLS",
    "states": [
      "CO"
    ],
    "idxBrokerSlug": "pueblo-mls-rets-parmls-rets"
  },
  {
    "slug": "puerto-rico-mls-prmls",
    "name": "Puerto Rico MLS (PRMLS)",
    "acronym": "PRMLS",
    "states": [
      "PR"
    ],
    "idxBrokerSlug": "puerto-rico-mls-prmls-rets"
  },
  {
    "slug": "pulaski-county-mls-pcbormls",
    "name": "Pulaski County MLS (PCBORMLS)",
    "acronym": "PCBORMLS",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "pulaski-county-mls-pcbormls"
  },
  {
    "slug": "quad-city-commercial-mls-qccmls",
    "name": "Quad City Commercial MLS (QCCMLS)",
    "acronym": "QCCMLS",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "quad-city-commercial-mls-qccmls"
  },
  {
    "slug": "quad-city-residential-mls-qcrar",
    "name": "Quad City Residential MLS (QCRAR)",
    "acronym": "QCRAR",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "quad-city-residential-mls-qcrar"
  },
  {
    "slug": "quincy-mls-qmls",
    "name": "Quincy MLS (QMLS)",
    "acronym": "QMLS",
    "states": [
      "IL"
    ],
    "idxBrokerSlug": "quincy-mls-qmls-rets"
  },
  {
    "slug": "randolph-county-board-of-realtors-rcbor",
    "name": "Randolph County Board of REALTORS® (RCBOR)",
    "acronym": "RCBOR",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "randolph-county-board-of-realtors-rcbor"
  },
  {
    "slug": "range-mls-raor",
    "name": "Range MLS (RAOR)",
    "acronym": "RAOR",
    "states": [
      "MN"
    ],
    "idxBrokerSlug": "range-mls-rets-raor"
  },
  {
    "slug": "real-estate-board-of-new-york-rebny",
    "name": "Real Estate Board of New York (REBNY)",
    "acronym": "REBNY",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "real-estate-board-of-new-york-rebny",
    "coverage": "New York City. The REBNY Residential Listing Service (RLS) carries exclusive residential sales and rental listings shared among REBNY member brokerages across the city.",
    "notes": "The RLS launched in 2003 and is open only to firms in REBNY's Residential Brokerage Division. REBNY reports 500+ participating member firms and about 70,000 listings a year."
  },
  {
    "slug": "real-estate-information-network-rein",
    "name": "Real Estate Information Network (REIN)",
    "acronym": "REIN",
    "states": [
      "VA",
      "NC"
    ],
    "idxBrokerSlug": "real-estate-information-network-rein",
    "coverage": "The Hampton Roads region of southeastern Virginia, from Williamsburg east to Virginia Beach and south across the North Carolina border, including Hampton, Newport News, York County, Gloucester and James City County. REIN states its service area reaches from northeastern North Carolina up to Richmond.",
    "notes": "Founded in 1969 as Metro MLS, REIN is owned and governed by its broker-stockholder members rather than a REALTOR® association. As of August 2026 it reported 728 broker firms, 859 offices and 8,355 licensees."
  },
  {
    "slug": "realcomp-realcomp",
    "name": "Realcomp",
    "acronym": "Realcomp",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "realcomp-realcomp",
    "coverage": "Southeast Michigan, including metro Detroit areas served by its shareholder boards (Detroit, Dearborn, Grosse Pointe, North Oakland County), plus Livingston County, Lapeer County, and the Thumb. Data shares with other MLSs extend listing access across Michigan.",
    "notes": "Realcomp II Ltd. dates to 1994; the first Realcomp was developed in 1983. Owned by seven REALTOR® boards and associations, including the Detroit Association of REALTORS®. Serves 18,000+ Michigan REALTORS® (October 2023).",
    "keyword": "Realcomp"
  },
  {
    "slug": "realmls-realmls",
    "name": "realMLS (Northeast Florida)",
    "acronym": "realMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "realmls-realmls",
    "coverage": "The greater Jacksonville and Northeast Florida area.",
    "notes": "realMLS is the trade name of Northeast Florida Multiple Listing Service, Inc., a subsidiary of the Northeast Florida Association of REALTORS® (NEFAR). It served over 11,000 real estate professionals as of 2022 and runs on Flexmls.",
    "keyword": "realMLS"
  },
  {
    "slug": "realtors-association-of-indian-river-county-inc-rairc",
    "name": "REALTORS® Association of Indian River County, Inc. (RAIRC)",
    "acronym": "RAIRC",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "realtors-association-of-indian-river-county-inc-rairc"
  },
  {
    "slug": "realtors-association-of-jamaica-raj",
    "name": "REALTORS® Association of Jamaica (RAJ)",
    "acronym": "RAJ",
    "states": [
      "JM"
    ],
    "idxBrokerSlug": "realtors-association-of-jamaica-raj"
  },
  {
    "slug": "realtors-of-greater-mid-nebraska-mls-gmnmls",
    "name": "REALTORS® of Greater Mid-Nebraska MLS (GMNMLS)",
    "acronym": "GMNMLS",
    "states": [
      "NE"
    ],
    "idxBrokerSlug": "realtors-of-greater-mid-nebraska-mls-gmnmls"
  },
  {
    "slug": "realtor-association-of-southern-minnesota-rasm",
    "name": "REALTOR® Association of Southern Minnesota (RASM)",
    "acronym": "RASM",
    "states": [
      "MN"
    ],
    "idxBrokerSlug": "realtor-association-of-southern-minnesota-rasm"
  },
  {
    "slug": "realtracs-mls-rtmls",
    "name": "RealTracs MLS (RTMLS)",
    "acronym": "RTMLS",
    "states": [
      "TN"
    ],
    "idxBrokerSlug": "realtracs-mls-rtmls"
  },
  {
    "slug": "recolorado",
    "name": "REcolorado",
    "acronym": "REcolorado",
    "states": [
      "CO"
    ],
    "idxBrokerSlug": "recolorado-recolorado",
    "keyword": "REcolorado",
    "coverage": "Colorado statewide, including Denver, Aurora, Colorado Springs, Fort Collins, Boulder, Pueblo, Grand Junction, Loveland, Greeley, Castle Rock, and Parker.",
    "notes": "Colorado’s largest MLS, with 26,000+ brokers, agents, appraisers, and professionals."
  },
  {
    "slug": "reelfoot-regional-mls-rrar",
    "name": "Reelfoot Regional MLS (RRAR)",
    "acronym": "RRAR",
    "states": [
      "TN"
    ],
    "idxBrokerSlug": "reelfoot-regional-mls-rrar"
  },
  {
    "slug": "regional-multiple-listing-service-rmls",
    "name": "Regional Multiple Listing Service (RMLS)",
    "acronym": "RMLS",
    "states": [
      "OR",
      "WA"
    ],
    "idxBrokerSlug": "regional-multiple-listing-service-rmls",
    "coverage": "The Portland metro area, much of Oregon, and southern Washington. RMLS is the primary MLS in 21 of Oregon's 36 counties and five Washington counties, including Clark County, with service extending to Lane, Douglas, Coos, Curry, Umatilla, Baker, Union, and Wallowa counties and Grants Pass.",
    "notes": "REALTOR®-owned, with about 13,500 subscribers per its website. Shareholders include the Portland Metro, East Metro, and Clark County Associations of REALTORS®. Formed in 1990 by four Portland-area boards; merged with Clark County's MLSSW in 2000."
  },
  {
    "slug": "resides-inc-resides",
    "name": "REsides, Inc. (REsides)",
    "acronym": "REsides",
    "states": [
      "SC"
    ],
    "idxBrokerSlug": "resides-inc-resides"
  },
  {
    "slug": "ri-state-wide-mls-ris",
    "name": "RI State-Wide MLS (RIS)",
    "acronym": "RIS",
    "states": [
      "RI"
    ],
    "idxBrokerSlug": "ri-state-wide-mls-ris"
  },
  {
    "slug": "richmond-county-mls-rcmls",
    "name": "Richmond County MLS (RCMLS)",
    "acronym": "RCMLS",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "richmond-county-mls-rcmls"
  },
  {
    "slug": "richmond-county-mls-richco",
    "name": "Richmond County MLS (RICHCO)",
    "acronym": "RICHCO",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "richmond-county-mls-richco"
  },
  {
    "slug": "ridgecrest-aor-raor",
    "name": "Ridgecrest AOR (RAOR)",
    "acronym": "RAOR",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "ridgecrest-aor-raor"
  },
  {
    "slug": "rio-grande-valley-mls-rgvmls",
    "name": "Rio Grande Valley MLS (RGVMLS)",
    "acronym": "RGVMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "rio-grande-valley-mls-rets-rgvmls-rets"
  },
  {
    "slug": "river-counties-mls-rcmls",
    "name": "River Counties MLS (RCMLS)",
    "acronym": "RCMLS",
    "states": [
      "TN"
    ],
    "idxBrokerSlug": "river-counties-mls-rcmls"
  },
  {
    "slug": "rmls-alliance-rmlsa",
    "name": "RMLS Alliance (RMLSA)",
    "acronym": "RMLSA",
    "states": [
      "IL"
    ],
    "idxBrokerSlug": "rmls-alliance-rmlsa"
  },
  {
    "slug": "roanoke-valley-lake-gaston-rvar",
    "name": "Roanoke Valley Lake Gaston (RVAR)",
    "acronym": "RVAR",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "roanoke-valley-lake-gaston-rets-rvar-rets"
  },
  {
    "slug": "roanoke-valley-mls-rvar",
    "name": "Roanoke Valley MLS (RVAR)",
    "acronym": "RVAR",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "roanoke-valley-mls-rvar"
  },
  {
    "slug": "rockbridge-highland-realtors-rohr",
    "name": "Rockbridge Highland REALTORS® (ROHR)",
    "acronym": "ROHR",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "rockbridge-highland-realtors-rohr"
  },
  {
    "slug": "rockford-area-aor-commercial-raaorc",
    "name": "Rockford Area AOR Commercial (RAAORC)",
    "acronym": "RAAORC",
    "states": [
      "IL"
    ],
    "idxBrokerSlug": "rockford-area-aor-commercial-raaorc"
  },
  {
    "slug": "rockinham-county-mls-rcmls",
    "name": "Rockinham County MLS (RCMLS)",
    "acronym": "RCMLS",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "rockinham-county-mls-rcmls"
  },
  {
    "slug": "rockport-mls-rpmls",
    "name": "Rockport MLS (RPMLS)",
    "acronym": "RPMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "rockport-mls-ftp-rpmls-ftp"
  },
  {
    "slug": "rocky-mount-area-mls-rmamls",
    "name": "Rocky Mount Area MLS (RMAMLS)",
    "acronym": "RMAMLS",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "rocky-mount-area-mls-rmamls"
  },
  {
    "slug": "roswell-mls-rwmls",
    "name": "Roswell MLS (RWMLS)",
    "acronym": "RWMLS",
    "states": [
      "NM"
    ],
    "idxBrokerSlug": "roswell-mls-rwmls"
  },
  {
    "slug": "royal-gorge-mls-rgmls",
    "name": "Royal Gorge MLS (RGMLS)",
    "acronym": "RGMLS",
    "states": [
      "CO"
    ],
    "idxBrokerSlug": "royal-gorge-mls-rgmls"
  },
  {
    "slug": "ruidoso-lincoln-county-mls-rlcmls",
    "name": "Ruidoso-Lincoln County MLS (RLCMLS)",
    "acronym": "RLCMLS",
    "states": [
      "NM"
    ],
    "idxBrokerSlug": "ruidoso-lincoln-county-mls-rlcmls"
  },
  {
    "slug": "russellville-board-of-realtors-mls-rbrmls",
    "name": "Russellville Board of REALTORS® MLS (RBRMLS)",
    "acronym": "RBRMLS",
    "states": [
      "AR"
    ],
    "idxBrokerSlug": "russellville-board-of-realtors-mls-rbrmls"
  },
  {
    "slug": "rutherford-county-mls-ruthmls",
    "name": "Rutherford County MLS (RuthMLS)",
    "acronym": "RuthMLS",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "rutherford-county-mls-ruthmls"
  },
  {
    "slug": "saginaw-mls-smls",
    "name": "Saginaw MLS (SMLS)",
    "acronym": "SMLS",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "saginaw-mls-smls"
  },
  {
    "slug": "salina-kansas-mls-skmls",
    "name": "Salina Kansas MLS (SKMLS)",
    "acronym": "SKMLS",
    "states": [
      "KS"
    ],
    "idxBrokerSlug": "salina-kansas-mls-skmls"
  },
  {
    "slug": "salmon-river-mls-salmon",
    "name": "Salmon River MLS (Salmon)",
    "acronym": "Salmon",
    "states": [
      "ID"
    ],
    "idxBrokerSlug": "salmon-river-mls-salmon"
  },
  {
    "slug": "san-angelo-aor-saaormls",
    "name": "San Angelo AOR (SAAORMLS)",
    "acronym": "SAAORMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "san-angelo-aor-saaormls"
  },
  {
    "slug": "san-diego-multiple-listing-service-sdmls",
    "name": "San Diego Multiple Listing Service (SDMLS)",
    "acronym": "SDMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "san-diego-multiple-listing-service-sdmls"
  },
  {
    "slug": "san-francisco-mls-sfarmls",
    "name": "San Francisco MLS (SFARMLS)",
    "acronym": "SFARMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "san-francisco-mls-sfarmls",
    "coverage": "San Francisco, California. The MLS serves agents and brokers working in the city.",
    "notes": "Operated by the San Francisco Association of REALTORS® (SFAR), which reports more than 4,000 REALTOR® members in San Francisco."
  },
  {
    "slug": "san-juan-county-mls-sjcmls",
    "name": "San Juan County MLS (SJCMLS)",
    "acronym": "SJCMLS",
    "states": [
      "NM"
    ],
    "idxBrokerSlug": "san-juan-county-mls-sjcmls"
  },
  {
    "slug": "san-patricio-association-of-realtors-spaor",
    "name": "San Patricio Association of REALTORS® (SPAOR)",
    "acronym": "SPAOR",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "san-patricio-association-of-realtors-spaor"
  },
  {
    "slug": "sanibel-and-captiva-island-mls-sancapmls",
    "name": "Sanibel and Captiva Island MLS (SANCAPMLS)",
    "acronym": "SANCAPMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "sanibel-and-captiva-island-mls-sancapmls"
  },
  {
    "slug": "santa-barbara-mls-sbaor",
    "name": "Santa Barbara MLS (SBAOR)",
    "acronym": "SBAOR",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "santa-barbara-mls-sbaor"
  },
  {
    "slug": "santa-cruz-county-mls-sccaz",
    "name": "Santa Cruz County MLS (SCCAZ)",
    "acronym": "SCCAZ",
    "states": [
      "AZ"
    ],
    "idxBrokerSlug": "santa-cruz-county-mls-sccaz"
  },
  {
    "slug": "santa-fe-mls-sfarmls",
    "name": "Santa Fe MLS (SFARMLS)",
    "acronym": "SFARMLS",
    "states": [
      "NM"
    ],
    "idxBrokerSlug": "santa-fe-mls-sfarmls"
  },
  {
    "slug": "sauk-valley-mls-svmls",
    "name": "Sauk Valley MLS (SVMLS)",
    "acronym": "SVMLS",
    "states": [
      "IL"
    ],
    "idxBrokerSlug": "sauk-valley-mls-svmls"
  },
  {
    "slug": "scotts-bluff-county-mls-sbcmls",
    "name": "Scotts Bluff County MLS (SBCMLS)",
    "acronym": "SBCMLS",
    "states": [
      "NE"
    ],
    "idxBrokerSlug": "scotts-bluff-county-mls-sbcmls"
  },
  {
    "slug": "scout-mls-sctmls",
    "name": "Scout MLS (SCTMLS)",
    "acronym": "SCTMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "scout-mls-sctmls"
  },
  {
    "slug": "scranton-mls-smls",
    "name": "Scranton MLS (SMLS)",
    "acronym": "SMLS",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "scranton-mls-smls"
  },
  {
    "slug": "sedona-verde-mls-svvar",
    "name": "Sedona Verde MLS (SVVAR)",
    "acronym": "SVVAR",
    "states": [
      "AZ"
    ],
    "idxBrokerSlug": "sedona-verde-mls-svvar"
  },
  {
    "slug": "selkirk-mls-slkmls",
    "name": "Selkirk MLS (SLKMLS)",
    "acronym": "SLKMLS",
    "states": [
      "ID"
    ],
    "idxBrokerSlug": "selkirk-mls-slkmls"
  },
  {
    "slug": "shasta-mls-shasta",
    "name": "Shasta MLS (Shasta)",
    "acronym": "Shasta",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "shasta-mls-shasta"
  },
  {
    "slug": "sheridan-mls-srmls",
    "name": "Sheridan MLS (SRMLS)",
    "acronym": "SRMLS",
    "states": [
      "WY"
    ],
    "idxBrokerSlug": "sheridan-mls-srmls"
  },
  {
    "slug": "shiawassee-mls-smls",
    "name": "Shiawassee MLS (SMLS)",
    "acronym": "SMLS",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "shiawassee-mls-smls"
  },
  {
    "slug": "shoals-mls-shoals",
    "name": "Shoals MLS (Shoals)",
    "acronym": "Shoals",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "shoals-mls-shoals"
  },
  {
    "slug": "shoals-mls-smls",
    "name": "Shoals MLS (SMLS)",
    "acronym": "SMLS",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "shoals-mls-rets-smls-rets"
  },
  {
    "slug": "sierra-north-valley-mls-snvmls",
    "name": "Sierra North Valley MLS (SNVMLS)",
    "acronym": "SNVMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "sierra-north-valley-mls-snvmls"
  },
  {
    "slug": "silver-city-regional-mls-scrmls",
    "name": "Silver City Regional MLS (SCRMLS)",
    "acronym": "SCRMLS",
    "states": [
      "NM"
    ],
    "idxBrokerSlug": "silver-city-regional-mls-scrmls"
  },
  {
    "slug": "sioux-empire-mls-rase",
    "name": "Sioux Empire MLS (RASE)",
    "acronym": "RASE",
    "states": [
      "SD"
    ],
    "idxBrokerSlug": "sioux-empire-mls-rase",
    "coverage": "The Sioux Falls, South Dakota area. South Dakota's state housing directory lists the association's service area as Lake, Lincoln, McCook, Minnehaha, and Turner counties.",
    "notes": "Operated by the REALTOR® Association of the Sioux Empire, Inc. (RASE), a Sioux Falls association that dates to 1920.",
    "keyword": "Sioux Empire MLS"
  },
  {
    "slug": "siskiyou-mls-smls",
    "name": "Siskiyou MLS (SMLS)",
    "acronym": "SMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "siskiyou-mls-smls"
  },
  {
    "slug": "smartmls-smartmls",
    "name": "SmartMLS",
    "acronym": "SmartMLS",
    "states": [
      "CT"
    ],
    "idxBrokerSlug": "smartmls-smartmls",
    "coverage": "Statewide across Connecticut, covering all eight of the state's counties.",
    "notes": "Formed in 2017 by the merger of the Connecticut Multiple Listing Service (CTMLS) and the Greater Fairfield County CMLS. Serves over 20,000 subscribers, per SmartMLS. At launch it served over 96 percent of Connecticut's real estate professionals.",
    "keyword": "SmartMLS"
  },
  {
    "slug": "snake-river-mls-srmls",
    "name": "Snake River MLS (SRMLS)",
    "acronym": "SRMLS",
    "states": [
      "ID"
    ],
    "idxBrokerSlug": "snake-river-mls-rets-srmls-rets"
  },
  {
    "slug": "somerset-lake-cumberland-aor-slcmls",
    "name": "Somerset-Lake Cumberland AOR (SLCMLS)",
    "acronym": "SLCMLS",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "somerset-lake-cumberland-aor-slcmls"
  },
  {
    "slug": "south-broward-mls-southbroward",
    "name": "South Broward MLS (SouthBroward)",
    "acronym": "SouthBroward",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "south-broward-mls-southbroward-rets"
  },
  {
    "slug": "south-carolina-commercial-mls-sccmls",
    "name": "South Carolina Commercial MLS (SCCMLS)",
    "acronym": "SCCMLS",
    "states": [
      "SC"
    ],
    "idxBrokerSlug": "south-carolina-commercial-mls-sccmls"
  },
  {
    "slug": "south-central-association-of-realtors-scar",
    "name": "South Central Association of REALTORS® (SCAR)",
    "acronym": "SCAR",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "south-central-association-of-realtors-scar"
  },
  {
    "slug": "south-central-indiana-mls-scilex",
    "name": "South Central Indiana MLS (SCILEX)",
    "acronym": "SCILEX",
    "states": [
      "IN"
    ],
    "idxBrokerSlug": "south-central-indiana-mls-scilex"
  },
  {
    "slug": "south-central-kansas-mls-sckmls",
    "name": "South Central Kansas MLS (SCKMLS)",
    "acronym": "SCKMLS",
    "states": [
      "KS"
    ],
    "idxBrokerSlug": "south-central-kansas-mls-sckmls"
  },
  {
    "slug": "south-central-missouri-mls-scbormls",
    "name": "South Central Missouri MLS (SCBORMLS)",
    "acronym": "SCBORMLS",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "south-central-missouri-mls-scbormls"
  },
  {
    "slug": "south-central-wisconsin-mls",
    "name": "South Central Wisconsin MLS (SCWMLS)",
    "acronym": "SCWMLS",
    "states": [
      "WI"
    ],
    "idxBrokerSlug": "south-central-wisconsin-mls-scwmls",
    "coverage": "South central Wisconsin, including the Madison area. Per RASCW, it serves Columbia, Crawford, Dane, Dodge, Grant, Green Lake, Iowa, Lafayette, Marquette, Richland and Sauk counties, plus parts of Adams, Juneau and Vernon counties.",
    "notes": "Owned by the REALTORS® Association of South Central Wisconsin (RASCW), per a 2006 court opinion. Together they serve about 4,000 brokers and agents (2024). The Rock-Green REALTORS® Association also serves the area. Uses the Paragon platform."
  },
  {
    "slug": "south-jersey-shore-regional-mls-sjsrmls",
    "name": "South Jersey Shore Regional MLS (SJSRMLS)",
    "acronym": "SJSRMLS",
    "states": [
      "NJ"
    ],
    "idxBrokerSlug": "south-jersey-shore-regional-mls-sjsrmls"
  },
  {
    "slug": "south-padre-island-mls-spimls",
    "name": "South Padre Island MLS (SPIMLS)",
    "acronym": "SPIMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "south-padre-island-mls-rets-spimls-rets"
  },
  {
    "slug": "south-tahoe-mls-star",
    "name": "South Tahoe MLS (STAR)",
    "acronym": "STAR",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "south-tahoe-mls-star"
  },
  {
    "slug": "southeast-alaska-mls-seamls",
    "name": "Southeast Alaska MLS (SEAMLS)",
    "acronym": "SEAMLS",
    "states": [
      "AK"
    ],
    "idxBrokerSlug": "southeast-alaska-mls-seamls"
  },
  {
    "slug": "southeast-arizona-mls-seazmls",
    "name": "Southeast Arizona MLS (SEAZMLS)",
    "acronym": "SEAZMLS",
    "states": [
      "AZ"
    ],
    "idxBrokerSlug": "southeast-arizona-mls-seazmls"
  },
  {
    "slug": "southeastern-border-association-of-realtors-sbar",
    "name": "Southeastern Border Association of REALTORS® (SBAR)",
    "acronym": "SBAR",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "southeastern-border-association-of-realtors-sbar"
  },
  {
    "slug": "southeastern-indiana-board-of-realtors-seibr",
    "name": "Southeastern Indiana Board of REALTORS® (SEIBR)",
    "acronym": "SEIBR",
    "states": [
      "IN"
    ],
    "idxBrokerSlug": "southeastern-indiana-board-of-realtors-seibr"
  },
  {
    "slug": "southeastern-oklahoma-seokmls",
    "name": "Southeastern Oklahoma (SEOKMLS)",
    "acronym": "SEOKMLS",
    "states": [
      "OK"
    ],
    "idxBrokerSlug": "southeastern-oklahoma-seokmls"
  },
  {
    "slug": "southern-indiana-realtors-association-sira",
    "name": "Southern Indiana REALTORS® Association (SIRA)",
    "acronym": "SIRA",
    "states": [
      "IN"
    ],
    "idxBrokerSlug": "southern-indiana-realtors-association-sira"
  },
  {
    "slug": "southern-kentucky-mls-sokymls",
    "name": "Southern Kentucky MLS (SOKYMLS)",
    "acronym": "SOKYMLS",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "southern-kentucky-mls-sokymls"
  },
  {
    "slug": "southern-missouri-regional-mls-somo",
    "name": "Southern Missouri Regional MLS (SOMO)",
    "acronym": "SOMO",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "southern-missouri-regional-mls-somo"
  },
  {
    "slug": "southern-oklahoma-mls-sokmls",
    "name": "Southern Oklahoma MLS (SOKMLS)",
    "acronym": "SOKMLS",
    "states": [
      "OK"
    ],
    "idxBrokerSlug": "southern-oklahoma-mls-sokmls"
  },
  {
    "slug": "southern-oregon-mls-somls",
    "name": "Southern Oregon MLS (SOMLS)",
    "acronym": "SOMLS",
    "states": [
      "OR"
    ],
    "idxBrokerSlug": "southern-oregon-mls-somls"
  },
  {
    "slug": "southern-piedmont-land-and-lake-association-of-realtors-spllar",
    "name": "Southern Piedmont Land & Lake Association of REALTORS® (SPLLAR)",
    "acronym": "SPLLAR",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "southern-piedmont-land-and-lake-association-of-realtors-spllar"
  },
  {
    "slug": "southwest-florida-bonita-springs-estero-mls-swflbse",
    "name": "SouthWest Florida Bonita Springs-Estero MLS (SWFLBSE)",
    "acronym": "SWFLBSE",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "southwest-florida-bonita-springs-estero-mls-swflbse"
  },
  {
    "slug": "southwest-florida-cape-coral-mls-swflcc",
    "name": "SouthWest Florida Cape Coral MLS (SWFLCC)",
    "acronym": "SWFLCC",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "southwest-florida-cape-coral-mls-swflcc"
  },
  {
    "slug": "southwest-florida-gulf-coast-mls-swflgc",
    "name": "SouthWest Florida Gulf Coast MLS (SWFLGC)",
    "acronym": "SWFLGC",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "southwest-florida-gulf-coast-mls-swflgc"
  },
  {
    "slug": "southwest-florida-mls",
    "name": "Southwest Florida MLS, Naples (SWFLN)",
    "acronym": "SWFLN",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "southwest-florida-naples-mls-swfln",
    "keyword": "Southwest Florida MLS",
    "coverage": "Naples, Marco Island, and Collier County, alongside the Bonita Springs-Estero, Cape Coral, and Gulf Coast boards of the Southwest Florida MLS.",
    "notes": "Formerly SunshineMLS. Each Southwest Florida board runs its own IDX feed, so we connect the board your brokerage belongs to."
  },
  {
    "slug": "southwest-georgia-albany-mls-swgamls",
    "name": "Southwest Georgia Albany MLS (SWGAMLS)",
    "acronym": "SWGAMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "southwest-georgia-albany-mls-swgamls"
  },
  {
    "slug": "southwest-iowa-mls-swimls",
    "name": "Southwest Iowa MLS (SWIMLS)",
    "acronym": "SWIMLS",
    "states": [
      "IA"
    ],
    "idxBrokerSlug": "southwest-iowa-mls-swimls"
  },
  {
    "slug": "southwest-kansas-bor-swksbor",
    "name": "Southwest Kansas BOR (SWKSBOR)",
    "acronym": "SWKSBOR",
    "states": [
      "KS"
    ],
    "idxBrokerSlug": "southwest-kansas-bor-swksbor"
  },
  {
    "slug": "southwest-louisiana-association-of-realtors-inc-swlar",
    "name": "Southwest Louisiana Association of REALTORS®, Inc. (SWLAR)",
    "acronym": "SWLAR",
    "states": [
      "LA"
    ],
    "idxBrokerSlug": "southwest-louisiana-association-of-realtors-inc-swlar"
  },
  {
    "slug": "southwest-louisiana-mls-swlar",
    "name": "Southwest Louisiana MLS (SWLAR)",
    "acronym": "SWLAR",
    "states": [
      "LA"
    ],
    "idxBrokerSlug": "southwest-louisiana-mls-rets-swlar"
  },
  {
    "slug": "southwest-mls-swmls",
    "name": "Southwest MLS (SWMLS)",
    "acronym": "SWMLS",
    "states": [
      "NM"
    ],
    "idxBrokerSlug": "southwest-mls-swmls"
  },
  {
    "slug": "southwest-virginia-svmls",
    "name": "Southwest Virginia (SVMLS)",
    "acronym": "SVMLS",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "southwest-virginia-rets-svmls-rets"
  },
  {
    "slug": "spanish-peaks-mls-spmls",
    "name": "Spanish Peaks MLS (SPMLS)",
    "acronym": "SPMLS",
    "states": [
      "CO"
    ],
    "idxBrokerSlug": "spanish-peaks-mls-spmls"
  },
  {
    "slug": "spartanburg-mls-sptbgmls",
    "name": "Spartanburg MLS (SPTBGMLS)",
    "acronym": "SPTBGMLS",
    "states": [
      "SC"
    ],
    "idxBrokerSlug": "spartanburg-mls-sptbgmls"
  },
  {
    "slug": "spokane-mls-webapi-sarmls",
    "name": "Spokane MLS-Webapi (SARMLS)",
    "acronym": "SARMLS",
    "states": [
      "WA"
    ],
    "idxBrokerSlug": "spokane-mls-webapi-sarmls"
  },
  {
    "slug": "st-joseph-mls-stjmls",
    "name": "St Joseph MLS (STJMLS)",
    "acronym": "STJMLS",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "st-joseph-mls-stjmls"
  },
  {
    "slug": "st-augustine-st-johns-mls-sasj",
    "name": "St. Augustine/St. Johns MLS (SASJ)",
    "acronym": "SASJ",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "st-augustinest-johns-mls-sasj"
  },
  {
    "slug": "st-croix-board-of-realtors-scbor",
    "name": "St. Croix Board of REALTORS® (SCBOR)",
    "acronym": "SCBOR",
    "states": [
      "VI"
    ],
    "idxBrokerSlug": "st-croix-board-of-realtors-scbor"
  },
  {
    "slug": "st-lawrence-county-board-of-realtors-stlcmls",
    "name": "St. Lawrence County Board of REALTORS® (STLCMLS)",
    "acronym": "STLCMLS",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "st-lawrence-county-board-of-realtors-stlcmls"
  },
  {
    "slug": "staten-island-mls-sibor",
    "name": "Staten Island MLS (SIBOR)",
    "acronym": "SIBOR",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "staten-island-mls-sibor"
  },
  {
    "slug": "steamboat-springs-mls-ssbrmls",
    "name": "Steamboat Springs MLS (SSBRMLS)",
    "acronym": "SSBRMLS",
    "states": [
      "CO"
    ],
    "idxBrokerSlug": "steamboat-springs-mls-rets-ssbrmls-rets"
  },
  {
    "slug": "stellar-mls",
    "name": "Stellar MLS",
    "acronym": "SMLS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "stellar-mls-smls-webapi",
    "keyword": "Stellar MLS",
    "coverage": "Central, Southwest and North Florida plus Puerto Rico, including the Tampa and Orlando markets. Its footprint spans more than 19 Florida counties, with continuous Gulf Coast coverage from Charlotte County north through Citrus and Hernando counties.",
    "notes": "Known as My Florida Regional MLS until its June 2019 rebrand to Stellar MLS. Serves about 80,000 customers (2026), counts local REALTOR® associations as shareholders, and describes itself as the largest MLS in Florida and Puerto Rico."
  },
  {
    "slug": "stillwater-mls-stw",
    "name": "Stillwater MLS (STW)",
    "acronym": "STW",
    "states": [
      "OK"
    ],
    "idxBrokerSlug": "stillwater-mls-stw-rets"
  },
  {
    "slug": "sumter-mls-smls-api",
    "name": "Sumter MLS (SMLS-API)",
    "acronym": "SMLS-API",
    "states": [
      "SC"
    ],
    "idxBrokerSlug": "sumter-mls-smls-api"
  },
  {
    "slug": "sun-valley-bor-svbor",
    "name": "Sun Valley BOR (SVBOR)",
    "acronym": "SVBOR",
    "states": [
      "ID"
    ],
    "idxBrokerSlug": "sun-valley-bor-svbor"
  },
  {
    "slug": "sunflower-mls-saormls",
    "name": "Sunflower MLS (SAORMLS)",
    "acronym": "SAORMLS",
    "states": [
      "KS"
    ],
    "idxBrokerSlug": "sunflower-mls-saormls"
  },
  {
    "slug": "superior-mls-superior",
    "name": "Superior MLS (Superior)",
    "acronym": "Superior",
    "states": [
      "WI"
    ],
    "idxBrokerSlug": "superior-mls-superior"
  },
  {
    "slug": "sussex-county-delaware-mls-delmls",
    "name": "Sussex County Delaware MLS (DELMLS)",
    "acronym": "DELMLS",
    "states": [
      "DE"
    ],
    "idxBrokerSlug": "sussex-county-delaware-mls-delmls"
  },
  {
    "slug": "sutter-yuba-mls-symls",
    "name": "Sutter Yuba MLS (SYMLS)",
    "acronym": "SYMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "sutter-yuba-mls-symls"
  },
  {
    "slug": "tahoe-sierra-mls-tsmls",
    "name": "Tahoe Sierra MLS (TSMLS)",
    "acronym": "TSMLS",
    "states": [
      "CA",
      "IA",
      "NE",
      "NV"
    ],
    "idxBrokerSlug": "tahoe-sierra-mls-tsmls"
  },
  {
    "slug": "tallahassee-mls-catrs",
    "name": "Tallahassee MLS (CATRS)",
    "acronym": "CATRS",
    "states": [
      "FL"
    ],
    "idxBrokerSlug": "tallahassee-mls-catrs"
  },
  {
    "slug": "taos-county-aor-tcaor",
    "name": "Taos County AOR (TCAOR)",
    "acronym": "TCAOR",
    "states": [
      "NM"
    ],
    "idxBrokerSlug": "taos-county-aor-tcaor"
  },
  {
    "slug": "tehachapi-aor-taar",
    "name": "Tehachapi AOR (TAAR)",
    "acronym": "TAAR",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "tehachapi-aor-taar"
  },
  {
    "slug": "telluride-mls-tridemls",
    "name": "Telluride MLS (TRIDEMLS)",
    "acronym": "TRIDEMLS",
    "states": [
      "CO"
    ],
    "idxBrokerSlug": "telluride-mls-tridemls"
  },
  {
    "slug": "temple-belton-mls-tbbor",
    "name": "Temple Belton MLS (TBBOR)",
    "acronym": "TBBOR",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "temple-belton-mls-tbbor"
  },
  {
    "slug": "tennessee-valley-association-of-realtors-tvar",
    "name": "Tennessee Valley Association of REALTORS® (TVAR)",
    "acronym": "TVAR",
    "states": [
      "TN"
    ],
    "idxBrokerSlug": "tennessee-valley-association-of-realtors-tvar"
  },
  {
    "slug": "tennessee-virginia-regional-mls-tvrmls",
    "name": "Tennessee Virginia Regional MLS (TVRMLS)",
    "acronym": "TVRMLS",
    "states": [
      "TN"
    ],
    "idxBrokerSlug": "tennessee-virginia-regional-mls-tvrmls"
  },
  {
    "slug": "terre-haute-area-association-of-realtors-thaar",
    "name": "Terre Haute Area Association of REALTORS® (THAAR)",
    "acronym": "THAAR",
    "states": [
      "IN"
    ],
    "idxBrokerSlug": "terre-haute-area-association-of-realtors-thaar"
  },
  {
    "slug": "teton-mls-teton",
    "name": "Teton MLS",
    "acronym": "Teton MLS",
    "states": [
      "WY",
      "ID"
    ],
    "idxBrokerSlug": "teton-mls-teton",
    "coverage": "Teton County, Wyoming (Jackson Hole and Alta), plus Star Valley, Fremont County, and Sublette and Lincoln counties in Wyoming. In Idaho it covers Teton Valley (Victor, Driggs, Tetonia) and nearby areas such as Swan Valley, Irwin, and Palisades.",
    "notes": "Operated by the Teton Board of REALTORS® in Jackson, Wyoming, which reports over 500 licensed real estate agents and appraisers and about 20 affiliate members.",
    "keyword": "Teton MLS"
  },
  {
    "slug": "texarkana-mls-tmls",
    "name": "Texarkana MLS (TMLS)",
    "acronym": "TMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "texarkana-mls-tmls"
  },
  {
    "slug": "texas-mls-texmls",
    "name": "Texas MLS (TEXMLS)",
    "acronym": "TEXMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "texas-mls-texmls"
  },
  {
    "slug": "texoma-mls-txmls",
    "name": "Texoma MLS (TXMLS)",
    "acronym": "TXMLS",
    "states": [
      "OK"
    ],
    "idxBrokerSlug": "texoma-mls-txmls"
  },
  {
    "slug": "the-bahamas-real-estate-association-brea",
    "name": "The Bahamas Real Estate Association (BREA)",
    "acronym": "BREA",
    "states": [
      "BS"
    ],
    "idxBrokerSlug": "the-bahamas-real-estate-association-brea"
  },
  {
    "slug": "thomasville-mls-tmls",
    "name": "Thomasville MLS (TMLS)",
    "acronym": "TMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "thomasville-mls-tmls-rets"
  },
  {
    "slug": "three-rivers-nc-mls-trsmls",
    "name": "Three Rivers NC MLS (TRSMLS)",
    "acronym": "TRSMLS",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "three-rivers-nc-mls-rets-trsmls-rets"
  },
  {
    "slug": "three-rivers-washington-beaufort-mls-trmls",
    "name": "Three Rivers Washington-Beaufort MLS (TRMLS)",
    "acronym": "TRMLS",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "three-rivers-washington-beaufort-mls-trmls"
  },
  {
    "slug": "tillamook-county-board-mls-tcbmls",
    "name": "Tillamook County Board MLS (TCBMLS)",
    "acronym": "TCBMLS",
    "states": [
      "OR"
    ],
    "idxBrokerSlug": "tillamook-county-board-mls-tcbmls"
  },
  {
    "slug": "traverse-mls",
    "name": "Traverse MLS",
    "acronym": "Traverse MLS",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "traverse-mls"
  },
  {
    "slug": "trend-mls-trend",
    "name": "Trend MLS (Trend)",
    "acronym": "Trend",
    "states": [
      "DE",
      "MD",
      "NJ",
      "PA"
    ],
    "idxBrokerSlug": "trend-mls-trend"
  },
  {
    "slug": "trend-plus-mls-trend",
    "name": "Trend Plus MLS (Trend+)",
    "acronym": "Trend+",
    "states": [
      "DE",
      "MD",
      "NJ",
      "PA"
    ],
    "idxBrokerSlug": "trend-plus-mls-trend"
  },
  {
    "slug": "tri-state-mls-tsmls",
    "name": "Tri State MLS (TSMLS)",
    "acronym": "TSMLS",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "tri-state-mls-tsmls"
  },
  {
    "slug": "triad-mls-triad",
    "name": "Triad MLS",
    "acronym": "Triad MLS",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "triad-mls-triad",
    "coverage": "The 12-county Piedmont Triad region of North Carolina: Alamance, Caswell, Davidson, Davie, Forsyth, Guilford, Randolph, Rockingham, Stokes, Surry, Wilkes, and Yadkin counties, which include Greensboro, Winston-Salem, and High Point.",
    "notes": "Founded in 1990. Serves more than 7,000 members (2024), including those of the Greensboro Regional REALTORS® Association, High Point Regional Association of REALTORS®, and Winston-Salem Regional Association of REALTORS®.",
    "keyword": "Triad MLS"
  },
  {
    "slug": "tulare-county-mls-tcmls",
    "name": "Tulare County MLS (TCMLS)",
    "acronym": "TCMLS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "tulare-county-mls-tcmls"
  },
  {
    "slug": "turks-and-caicos-mls-tcrea",
    "name": "Turks and Caicos MLS (TCREA)",
    "acronym": "TCREA",
    "states": [
      "BS"
    ],
    "idxBrokerSlug": "turks-and-caicos-mls-rets-tcrea-rets"
  },
  {
    "slug": "ulster-county-mls-ulster",
    "name": "Ulster County MLS (ULSTER)",
    "acronym": "ULSTER",
    "states": [
      "NY"
    ],
    "idxBrokerSlug": "ulster-county-mls-ulster"
  },
  {
    "slug": "unlock-mls-unlockmls",
    "name": "Unlock MLS",
    "acronym": "Unlock MLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "unlock-mls-unlockmls",
    "coverage": "Central Texas, centered on the Austin-Round Rock-San Marcos metro area, including Travis, Williamson and Hays counties.",
    "notes": "Formerly ACTRIS (Austin/Central Texas Realty Information Service), renamed Unlock MLS in 2023. Overseen by the Austin Board of REALTORS®, with about 20,000 members. Since June 1, 2025, REALTOR® membership is not required for access.",
    "keyword": "Unlock MLS"
  },
  {
    "slug": "upper-cumberland-aor-ucaor",
    "name": "Upper Cumberland AOR (UCAOR)",
    "acronym": "UCAOR",
    "states": [
      "TN"
    ],
    "idxBrokerSlug": "upper-cumberland-aor-ftp-ucaor-ftp"
  },
  {
    "slug": "upper-cumberland-mls-ucmls",
    "name": "Upper Cumberland MLS (UCMLS)",
    "acronym": "UCMLS",
    "states": [
      "TN"
    ],
    "idxBrokerSlug": "upper-cumberland-mls-rets-ucmls-rets"
  },
  {
    "slug": "upper-peninsula-upmls",
    "name": "Upper Peninsula (UPMLS)",
    "acronym": "UPMLS",
    "states": [
      "MI",
      "WI"
    ],
    "idxBrokerSlug": "upper-peninsula-upmls"
  },
  {
    "slug": "us-virgin-islands-mls-usvimls",
    "name": "US Virgin Islands MLS (USVIMLS)",
    "acronym": "USVIMLS",
    "states": [
      "VI"
    ],
    "idxBrokerSlug": "us-virgin-islands-mls-usvimls"
  },
  {
    "slug": "uvalde-board-of-realtors-ubor",
    "name": "Uvalde Board of REALTORS® (UBoR)",
    "acronym": "UBoR",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "uvalde-board-of-realtors-rets-ubor-rets"
  },
  {
    "slug": "vail-multi-list-vbrmls",
    "name": "Vail Multi List (VBRMLS)",
    "acronym": "VBRMLS",
    "states": [
      "CO"
    ],
    "idxBrokerSlug": "vail-multi-list-vbrmls"
  },
  {
    "slug": "valdosta-south-georgia-mls-vsgmls",
    "name": "Valdosta-South Georgia MLS (VSGMLS)",
    "acronym": "VSGMLS",
    "states": [
      "GA"
    ],
    "idxBrokerSlug": "valdosta-south-georgia-mls-rets-vsgmls-rets"
  },
  {
    "slug": "valley-mls-vmls",
    "name": "Valley MLS (VMLS)",
    "acronym": "VMLS",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "valley-mls-vmls"
  },
  {
    "slug": "ventura-county-regional-data-share-vcrds",
    "name": "Ventura County Regional Data Share (VCRDS)",
    "acronym": "VCRDS",
    "states": [
      "CA"
    ],
    "idxBrokerSlug": "ventura-county-regional-data-share-vcrds"
  },
  {
    "slug": "victoria-mls-vaar",
    "name": "Victoria MLS (VAAR)",
    "acronym": "VAAR",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "victoria-mls-rets-vaar-rets"
  },
  {
    "slug": "victoria-mls-vmls",
    "name": "Victoria MLS (VMLS)",
    "acronym": "VMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "victoria-mls-ftp-vmls-ftp"
  },
  {
    "slug": "waco-mls-wacomls",
    "name": "Waco MLS (WACOMLS)",
    "acronym": "WACOMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "waco-mls-wacomls"
  },
  {
    "slug": "walker-county-area-board-of-realtors-wcbor",
    "name": "Walker County Area Board of REALTORS® (WCBOR)",
    "acronym": "WCBOR",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "walker-county-area-board-of-realtors-wcbor"
  },
  {
    "slug": "walla-walla-mls-wwmls",
    "name": "Walla Walla MLS (WWMLS)",
    "acronym": "WWMLS",
    "states": [
      "WA"
    ],
    "idxBrokerSlug": "walla-walla-mls-rets-wwmls-rets"
  },
  {
    "slug": "wasatch-front-regional-mls-wfrmls",
    "name": "Wasatch Front Regional MLS (WFRMLS)",
    "acronym": "WFRMLS",
    "states": [
      "UT"
    ],
    "idxBrokerSlug": "wasatch-front-regional-mls-wfrmls"
  },
  {
    "slug": "washington-county-mls-wcmls",
    "name": "Washington County MLS (WCMLS)",
    "acronym": "WCMLS",
    "states": [
      "UT"
    ],
    "idxBrokerSlug": "washington-county-mls-wcmls"
  },
  {
    "slug": "water-wonderland-mls-wwmls",
    "name": "Water Wonderland MLS (WWMLS)",
    "acronym": "WWMLS",
    "states": [
      "MI"
    ],
    "idxBrokerSlug": "water-wonderland-mls-wwmls"
  },
  {
    "slug": "west-alabama-mls-wamls",
    "name": "West Alabama MLS (WAMLS)",
    "acronym": "WAMLS",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "west-alabama-mls-wamls"
  },
  {
    "slug": "west-branch-valley-wbvar",
    "name": "West Branch Valley (WBVAR)",
    "acronym": "WBVAR",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "west-branch-valley-wbvar"
  },
  {
    "slug": "west-central-missouri-association-of-realtors-wcar",
    "name": "West Central Missouri Association of REALTORS® (WCAR)",
    "acronym": "WCAR",
    "states": [
      "MO"
    ],
    "idxBrokerSlug": "west-central-missouri-association-of-realtors-wcar"
  },
  {
    "slug": "west-central-ohio-mls-wcomls",
    "name": "West Central Ohio MLS (WCOMLS)",
    "acronym": "WCOMLS",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "west-central-ohio-mls-wcomls"
  },
  {
    "slug": "west-penn-mls-wpmls",
    "name": "West Penn MLS (WPMLS)",
    "acronym": "WPMLS",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "west-penn-mls-wpmls"
  },
  {
    "slug": "westcliffe-mls-wmls",
    "name": "Westcliffe MLS (WMLS)",
    "acronym": "WMLS",
    "states": [
      "CO"
    ],
    "idxBrokerSlug": "westcliffe-mls-wmls"
  },
  {
    "slug": "western-regional-information-systems-and-technology-inc",
    "name": "Western Regional Information Systems & Technology (WRIST)",
    "acronym": "WRIST",
    "states": [
      "OH"
    ],
    "idxBrokerSlug": "western-ohio-regional-information-syst-wrist",
    "coverage": "Western and central Ohio, including Columbus, Dayton, Springfield, Lima, Sidney, Troy, Urbana, Piqua, and surrounding markets. The exact footprint depends on your association.",
    "notes": "Regional MLS serving western Ohio REALTOR® associations, including the Midwestern Ohio Association of REALTORS® and the Springfield Board of REALTORS®."
  },
  {
    "slug": "western-kentucky-regional-mls-wkrmls",
    "name": "Western Kentucky Regional MLS (WKRMLS)",
    "acronym": "WKRMLS",
    "states": [
      "KY"
    ],
    "idxBrokerSlug": "western-kentucky-regional-mls-wkrmls"
  },
  {
    "slug": "western-river-valley-board-of-realtors-wrvbor",
    "name": "Western River Valley Board of REALTORS® (WRVBOR)",
    "acronym": "WRVBOR",
    "states": [
      "AR"
    ],
    "idxBrokerSlug": "western-river-valley-board-of-realtors-wrvbor"
  },
  {
    "slug": "western-upstate-mls-umls",
    "name": "Western Upstate MLS (UMLS)",
    "acronym": "UMLS",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "western-upstate-mls-umls"
  },
  {
    "slug": "wheeling-board-of-realtors-wbor",
    "name": "Wheeling Board of REALTORS® (WBOR)",
    "acronym": "WBOR",
    "states": [
      "WV"
    ],
    "idxBrokerSlug": "wheeling-board-of-realtors-wbor"
  },
  {
    "slug": "white-mountain-mls-wmls",
    "name": "White Mountain MLS (WMLS)",
    "acronym": "WMLS",
    "states": [
      "AZ"
    ],
    "idxBrokerSlug": "white-mountain-mls-wmls"
  },
  {
    "slug": "wichita-falls-mls-wfmls",
    "name": "Wichita Falls MLS (WFMLS)",
    "acronym": "WFMLS",
    "states": [
      "TX"
    ],
    "idxBrokerSlug": "wichita-falls-mls-wfmls"
  },
  {
    "slug": "willamette-valley-mls-wvmls",
    "name": "Willamette Valley MLS (WVMLS)",
    "acronym": "WVMLS",
    "states": [
      "OR"
    ],
    "idxBrokerSlug": "willamette-valley-mls-wvmls"
  },
  {
    "slug": "williamsburg-area-association-of-realtors-wmls",
    "name": "Williamsburg Area Association of REALTORS® (WMLS)",
    "acronym": "WMLS",
    "states": [
      "VA"
    ],
    "idxBrokerSlug": "williamsburg-area-association-of-realtorsÂ-wmls"
  },
  {
    "slug": "williston-board-of-realtors-wbr",
    "name": "Williston Board of REALTORS® (WBR)",
    "acronym": "WBR",
    "states": [
      "ND"
    ],
    "idxBrokerSlug": "williston-board-of-realtors-wbr"
  },
  {
    "slug": "wiregrass-mls-wmls",
    "name": "Wiregrass MLS (WMLS)",
    "acronym": "WMLS",
    "states": [
      "AL"
    ],
    "idxBrokerSlug": "wiregrass-mls-wmls"
  },
  {
    "slug": "wisconsin-real-estate-exchange-wirex",
    "name": "Wisconsin Real Estate Exchange (WIREX)",
    "acronym": "WIREX",
    "states": [
      "WI"
    ],
    "idxBrokerSlug": "wisconsin-real-estate-exchange-wirex"
  },
  {
    "slug": "wyoming-mls-wyomls",
    "name": "Wyoming MLS (WYOMLS)",
    "acronym": "WYOMLS",
    "states": [
      "WY"
    ],
    "idxBrokerSlug": "wyoming-mls-wyomls"
  },
  {
    "slug": "yakima-aor-mls-yamls",
    "name": "Yakima AOR MLS (YAMLS)",
    "acronym": "YAMLS",
    "states": [
      "WA"
    ],
    "idxBrokerSlug": "yakima-aor-mls-yamls"
  },
  {
    "slug": "yancey-mitchell-bor-ymbor",
    "name": "Yancey-Mitchell BOR (YMBOR)",
    "acronym": "YMBOR",
    "states": [
      "NC"
    ],
    "idxBrokerSlug": "yancey-mitchell-bor-ymbor"
  },
  {
    "slug": "york-and-adams-counties-mls-rayac",
    "name": "York & Adams Counties MLS (RAYAC)",
    "acronym": "RAYAC",
    "states": [
      "PA"
    ],
    "idxBrokerSlug": "york-and-adams-counties-mls-rayac"
  },
  {
    "slug": "yuma-mls-yuma",
    "name": "Yuma MLS (YUMA)",
    "acronym": "YUMA",
    "states": [
      "AZ"
    ],
    "idxBrokerSlug": "yuma-mls-rets-yuma-rets"
  }
]
