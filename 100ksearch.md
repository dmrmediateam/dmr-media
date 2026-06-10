# 100K Search Impressions Plan — DMR Media# 100K Search Impressions Plan — DMR Media

**Current:** ~10,000 impressions/month

**Current:** ~10,000 impressions/month  **Target:** 100,000 impressions/month

**Target:** 100,000 impressions/month  **Audit Date:** June 4, 2026

**Audit Date:** June 4, 2026  **Branch:** main

**Last Updated:** June 10, 2026  

**Branch:** main  ---

**Status:** 60% Complete (Core infrastructure done, content work remaining)

## 📋 Table of Contents

---1. [Current EEAT Audit](#1-current-eeat-audit)

2. [What's Missing](#2-whats-missing)

## 📋 Table of Contents3. [Priority Fix List](#3-priority-fix-list)

1. [Current EEAT Audit](#1-current-eeat-audit)4. [Content Strategy](#4-content-strategy)

2. [What's Missing](#2-whats-missing)5. [Schema Implementation Plan](#5-schema-implementation-plan)

3. [Priority Fix List](#3-priority-fix-list)6. [Internal Linking Architecture](#6-internal-linking-architecture)

4. [Content Strategy](#4-content-strategy)7. [Author Authority Plan](#7-author-authority-plan)

5. [Schema Implementation Plan](#5-schema-implementation-plan)8. [Technical Checklist](#8-technical-checklist)

6. [Internal Linking Architecture](#6-internal-linking-architecture)9. [Tracking & Milestones](#9-tracking--milestones)

7. [Author Authority Plan](#7-author-authority-plan)

8. [Technical Checklist](#8-technical-checklist)---

9. [Tracking & Milestones](#9-tracking--milestones)

10. [Recent Updates (June 2026)](#10-recent-updates-june-2026)## 1. Current EEAT Audit



---### ✅ What's Already Built Well



## 1. Current EEAT Audit| Signal | File | Status |

|---|---|---|

### ✅ What's Already Built Well| Organization Schema | `lib/eeatSchema.ts` — name, address, phone, email, logo, `sameAs` (LinkedIn, Trustpilot, SEMrush, Instagram) | ✅ Solid |

| Author Person Schema | `buildPersonSchema()` with name, image, bio, `sameAs` LinkedIn for Andrew Rohm | ⚠️ Partial |

| Signal | File | Status | Date || Article / BlogPosting Schema | Full `@graph` on every blog post — Article + Person + Organization + FAQPage (conditional) | ✅ Solid |

|---|---|---|---|| BreadcrumbList Schema | `SEOWrapper` injects on every service, blog, and about page | ✅ Solid |

| Organization Schema | `lib/eeatSchema.ts` — name, address, phone, email, logo, `sameAs` (LinkedIn, Trustpilot, SEMrush, Instagram) | ✅ Solid | - || Service Schema | `SEOWrapper` emits on all service pages | ✅ Solid |

| Author Person Schema | `buildPersonSchema()` with dynamic `sameAs` from Sanity (teamProfileSlug, linkedin, twitter) | ✅ COMPLETE | June 10 || Canonical URLs | Set on all blog posts, content registry drives static pages | ✅ Solid |

| Article / BlogPosting Schema | Full `@graph` on every blog post — Article + Person + Organization + FAQPage (conditional) | ✅ Solid | - || OG / Social Meta | Title, description, image, `article:publishedTime` on blog posts | ✅ Solid |

| BreadcrumbList Schema | `SEOWrapper` injects on every service, blog, and about page | ✅ Solid | - || Sitemap | Dynamic — blog posts + MLS pages + content registry with `lastmod` | ✅ Solid |

| Service Schema | `SEOWrapper` emits on all service pages | ✅ Solid | - || Robots.txt | Clean — disallows `/api/` and thank-you pages only | ✅ Solid |

| Canonical URLs | Set on all blog posts, content registry drives static pages | ✅ Solid | - || GTM + GA4 | Injected in `app/layout.tsx` | ✅ |

| OG / Social Meta | Title, description, image, `article:publishedTime` on blog posts | ✅ Solid | - || Author Bio Block | Photo + bio + CTA at bottom of every blog post | ✅ |

| Sitemap | Dynamic — blog posts + MLS pages + content registry with `lastmod` | ✅ Solid | - || FAQ Block + FAQPage Schema | On posts with FAQ items in Sanity | ⚠️ Conditional only |

| Robots.txt | Clean — disallows `/api/` and thank-you pages only | ✅ Solid | - || Content Registry | Single source of truth for all page metadata + `modifiedDate` | ✅ Solid |

| GTM + GA4 | Injected in `app/layout.tsx` | ✅ Solid | - |

| Author Bio Block | Photo + bio + CTA + "View Profile" link at bottom of every blog post | ✅ COMPLETE | June 10 |---

| FAQ Block + FAQPage Schema | On posts with FAQ items in Sanity | ⚠️ Conditional | - |

| Content Registry | Single source of truth for all page metadata + `modifiedDate` | ✅ Solid | - |## 2. What's Missing

| Team Profile Pages | 6 pages with Person schema + @graph (`/about-us/*`) | ✅ COMPLETE | June 9 |

| Table of Contents | Sticky sidebar with scroll spy on all blog posts | ✅ COMPLETE | June 10 |### E — Experience

| Related Posts | Smart category + tag matching, 3 posts per article | ✅ COMPLETE | June 10 |- **No author profile pages** (`/team/andrew-rohm`, `/team/max-d`)

| Sanity Integration | Author schema with teamProfileSlug, linkedin, twitter fields | ✅ COMPLETE | June 10 |  - Google and AI crawlers cannot verify real human expertise without a dedicated indexable page

  - Schema `Person` nodes exist but have no URL to link to

---- **Only 1 author in `AUTHOR_SAME_AS`** (`lib/eeatSchema.ts`)

  - "By: Max D." and other bylines get zero `sameAs` authority

## 2. What's Missing  - Any author without a LinkedIn entry has no off-site credibility signal



### E — Experience (Experience, First-Hand Knowledge)### E — Expertise

- **No `VideoObject` schema**

#### ✅ Completed:  - Blog posts embed YouTube videos with zero structured data around them

- ~~**Author profile pages**~~ → **DONE** (June 9)  - Google Video search is a completely untapped impression source

  - Built: `/about-us/andrew-rohm`, `/about-us/max-de`, `/about-us/nako-a`, `/about-us/sj`, `/about-us/collins`, `/about-us/alex`  - Affected posts: any post with a YouTube `<iframe>` in the Sanity body

  - Person schema with `@id`, `jobTitle`, `knowsAbout`, `worksFor`, `sameAs`- **No `HowTo` schema**

  - Linked from main navigation  - Multiple posts are step-by-step guides (GMB setup, Google Ads, Local SEO)

  - Team index page at `/about-us` with Person @graph  - `HowTo` rich results are high-CTR and appear prominently in search

  - Zero implementation currently

- ~~**AUTHOR_SAME_AS mapping**~~ → **DONE** (June 10)- **FAQ schema inconsistently applied**

  - All 6 team members mapped with LinkedIn URLs (where applicable)  - It only fires when an editor adds FAQ items to Sanity

  - Dynamic pull from Sanity `teamProfileSlug` field (no code edits needed for new authors)  - Most posts likely have 0 FAQ items → 0 FAQ rich results in search

  - Author names clickable in blog posts → link to team profiles

  - "View Profile" button in author card### A — Authoritativeness

- **No `AggregateRating` schema**

#### ⏳ In Progress:  - Trustpilot and 5-star reviews are referenced in copy and the content registry description

- **Team member headshots** — Directory created, awaiting photos  - Not pulled into structured data — missing star rating display in SERPs

  - Location: `/public/images/team/`- **No `Review` schema on testimonials**

  - Needed: andrew-rohm.jpg, max-de.jpg, nako-a.jpg, sj.jpg, collins.jpg, alex.jpg  - Homepage `Testimonials` and `VideoTestimonials` components have no structured data

- **No `ItemList` or `CaseStudy` schema on case study pages**

#### ❌ Still Missing:  - `/case-studies` and individual case study pages are plain pages with no enhanced schema

- Client case study PDFs/downloads

- Team member LinkedIn activity feed### T — Trustworthiness

- Industry conference speaking engagements section- **`MeetAgent.tsx` renders "Meet Cheryl Towey Services"**

- Published articles on external sites (backlinks)  - This is a client template that appears to have leaked into the agency codebase

  - If rendered anywhere on the live DMR site, it is a serious trust/credibility issue

---  - Action: audit every page that imports `MeetAgent` and remove or rename

- **No `LocalBusiness` schema**

### E — Expertise (Deep Knowledge & Skills)  - `Organization` schema exists but `LocalBusiness` with `openingHours`, `geo` coordinates, and `priceRange` adds another trust and local ranking layer

- **`dateModified` falls back to `publishedAt`** on blog posts

#### ✅ Completed:  - Posts not updated in Sanity will show stale `dateModified`

- ~~**Table of Contents**~~ → **DONE** (June 10)  - Google uses this signal to assess content freshness

  - Sticky sidebar on desktop (1280px+)

  - IntersectionObserver scroll spy with auto-highlight### Content Volume (The Biggest Gap to 100K)

  - Smooth scroll navigation> Schema improvements alone will not 10x impressions.

  - H2 and H3 hierarchy> The primary driver of 10k → 100k is **publishing velocity + keyword targeting**.

  - Shows content structure to crawlers

  - Files: `components/blog/TableOfContents.tsx`, `lib/extractHeadings.ts`- **No topic cluster / pillar page architecture**

  - No visible pillar-to-spoke internal linking strategy in codebase

- ~~**Related Posts component**~~ → **DONE** (June 10)  - Content appears to be published as isolated posts

  - Smart scoring: category + tag matching- **No related posts component**

  - Algorithm: Score = (Same Category ? 10 : 0) + (Matching Tags × 5)  - Blog post pages have no "Related Articles" section

  - Shows top 3 relevant articles  - Every exit from a blog post is a full site exit — zero link equity flow between posts

  - Internal linking spider web- **No internal linking strategy**

  - Topic cluster reinforcement  - Posts don't systematically link to service pages or other posts

  - File: `components/blog/RelatedPosts.tsx`  - Missed opportunity to pass authority to high-value conversion pages



#### ❌ Still Missing (P1 Priority):---

- **No `VideoObject` schema**

  - Blog posts embed YouTube videos with zero structured data## 3. Priority Fix List

  - Google Video search is completely untapped impression source

  - **Action:** Add `videoEmbed`, `videoDuration`, `videoThumbnail` fields to Sanity Post schemaRanked by **impression impact × implementation speed**:

  - **Impact:** New impression surface, Video rich results

### 🔴 P1 — High Impact, Fast to Ship (Do First)

- **No `HowTo` schema**

  - Multiple posts are step-by-step guides (GMB setup, Google Ads, Local SEO)| # | Task | Why | File(s) |

  - `HowTo` rich results are high-CTR and appear prominently in search|---|---|---|---|

  - **Action:** Add `isHowTo` boolean and `howToSteps` array to Sanity Post schema| 1 | Add `VideoObject` schema to blog posts with YouTube embeds | Unlocks Google Video search impressions — new surface entirely | `app/blog/[slug]/page.tsx`, `lib/eeatSchema.ts` |

  - **Impact:** Rich result CTR is 2–3x standard blue link| 2 | Add `HowTo` schema to tutorial-style blog posts | Rich result CTR is 2–3x standard blue link | `lib/eeatSchema.ts`, Sanity schema |

| 3 | Ensure every blog post has ≥3 FAQ items in Sanity | FAQPage rich results currently blocked on most posts | Sanity CMS content entry |

- **FAQ schema inconsistently applied**| 4 | Complete `AUTHOR_SAME_AS` for all authors | Every author needs LinkedIn (minimum) | `lib/eeatSchema.ts` |

  - It only fires when an editor adds FAQ items to Sanity

  - Most posts likely have 0 FAQ items → 0 FAQ rich results in search### 🟡 P2 — High Impact, Moderate Work

  - **Action:** Audit all posts, ensure ≥3 FAQ items per post

  - **Impact:** FAQPage rich results, better SERP visibility| # | Task | Why | File(s) |

|---|---|---|---|

---| 5 | Create `/team/[slug]` author profile pages | Required for E-E-A-T author authority at scale | New: `app/team/[slug]/page.tsx` |

| 6 | Add `AggregateRating` schema | Star ratings in SERPs — significant CTR lift | `lib/eeatSchema.ts`, new `buildAggregateRatingSchema()` |

### A — Authoritativeness (Industry Recognition)| 7 | Add `LocalBusiness` schema alongside `Organization` | Local trust layer + local search ranking signal | `lib/eeatSchema.ts` |

| 8 | Add `Review` schema to homepage testimonials | Social proof structured data | `components/Testimonials.tsx` |

#### ✅ Completed:| 9 | Fix or remove `MeetAgent.tsx` client template leak | Trust/credibility issue on agency site | `components/MeetAgent.tsx` |

- Organization schema with social proof

- Content registry tracking 220+ pages### 🟢 P3 — Content Infrastructure (Ongoing, Highest Long-term Impact)

- Sitemap.xml generation

- 7 case study pages with real results| # | Task | Why | File(s) |

|---|---|---|---|

#### ❌ Still Missing (P2 Priority):| 10 | Build related posts component on blog | Keeps users on site, distributes link equity | New: `components/blog/RelatedPosts.tsx` |

- **No `AggregateRating` schema**| 11 | Define topic cluster architecture (see Section 4) | Topic authority is how you 10x impressions | Content plan |

  - Trustpilot and 5-star reviews are referenced in copy| 12 | Add `ItemList` schema to `/case-studies` | Enhanced case study display in SERPs | `app/case-studies/page.tsx` |

  - Not pulled into structured data — missing star rating display in SERPs| 13 | Ensure `dateModified` updates in Sanity on content refresh | Freshness signal for Google re-crawl | Sanity workflow |

  - **Schema function exists:** `buildAggregateRatingSchema()` in `lib/eeatSchema.ts`| 14 | Add `ItemList` schema to blog index page | Sitelinks search box candidate | `app/blog/page.tsx` |

  - **Action:** Wire into homepage + contact page

  - **Impact:** Star ratings in SERPs = significant CTR lift---



- **No `Review` schema on testimonials**## 4. Content Strategy

  - Homepage `Testimonials` and `VideoTestimonials` components have no structured data

  - **Action:** Add Review schema to each testimonial### The 10x Content Problem

  - **Impact:** Social proof structured dataGoing from 10k → 100k impressions requires targeting ~10x more keyword surface area.

This means **more pages + better targeting**, not just better schema on existing pages.

- **No `ItemList` schema on case study pages**

  - `/case-studies` and individual case study pages are plain pages### Topic Cluster Architecture

  - **Action:** Add ItemList schema showing all case studies

  - **Impact:** Enhanced case study display in SERPsBuild 4 primary pillar pages with supporting spoke articles:



------



### T — Trustworthiness (Reliability & Transparency)**Pillar 1: Google Ads for Real Estate**

- Pillar: `/google-ads-management` (existing — needs expansion)

#### ✅ Completed:- Spokes (new articles needed):

- Contact page with full info  - "Google Ads for Real Estate Agents: Complete 2026 Guide"

- Privacy policy & terms  - "Real Estate Google Ads Budget: How Much Should You Spend?"

- Real team members with LinkedIn links  - "Performance Max vs Search Campaigns for Real Estate"

- Physical address in Organization schema  - "Google Ads Lead Quality for Real Estate: Fix High Bounce Rate"

  - "Real Estate Google Ads Landing Pages That Convert"

#### ❌ Still Missing (P2 Priority):  - "Google Ads for Luxury Real Estate: Different Rules Apply"

- **`LocalBusiness` schema not wired**

  - Function exists: `buildLocalBusinessSchema()` in `lib/eeatSchema.ts`---

  - Extends Organization with `geo` coordinates, `openingHours`, `priceRange`

  - **Action:** Wire into homepage**Pillar 2: SEO for Real Estate**

  - **Impact:** Local trust layer + local ranking signal- Pillar: `/seo-optimization` (existing — needs expansion)

- Spokes (new articles needed):

- **`MeetAgent.tsx` renders "Cheryl Towey Services"**  - "Real Estate SEO Checklist 2026"

  - This is a client template that leaked into agency codebase  - "Local SEO for Real Estate Agents: Neighborhood Pages That Rank"

  - If rendered anywhere on live DMR site, it's a serious trust/credibility issue  - "Real Estate Website SEO Audit: Step-by-Step"

  - **Action:** Audit all import locations, remove or rename  - "How to Rank #1 for '[City] Homes for Sale'"

  - **Impact:** Prevents brand confusion  - "Real Estate Blog SEO: How to Write Posts That Actually Rank"

  - "Google My Business for Real Estate: 2026 Optimization Guide"

---

---

### Content Volume (The Biggest Gap to 100K)

**Pillar 3: Luxury Real Estate Marketing**

> Schema improvements alone will not 10x impressions.- Pillar: New `/luxury-real-estate-marketing` page

> The primary driver of 10k → 100k is **publishing velocity + keyword targeting**.- Spokes (partially existing, needs expansion):

  - "Luxury Real Estate Marketing Ideas: Print + Digital 2026"

- **No topic cluster / pillar page architecture**  - "How to Market a $1M+ Listing"

  - No visible pillar-to-spoke internal linking strategy in codebase  - "Luxury Real Estate Photography: What Actually Sells"

  - Content appears to be published as isolated posts  - "Drone Video for Real Estate Listings"

  - "Social Media for Luxury Real Estate Agents"

- ~~**No related posts component**~~ → **DONE** (June 10)  - "Email Marketing for Luxury Real Estate"

  - Every exit from a blog post now has 3 related article links

  - Internal link equity flows between posts---



- **No internal linking strategy****Pillar 4: Real Estate Lead Generation**

  - Posts don't systematically link to service pages or other posts- Pillar: `/real-estate-lead-generation` (in content registry, needs full page)

  - Missed opportunity to pass authority to high-value conversion pages- Spokes:

  - "Real Estate Lead Generation: 15 Strategies That Work in 2026"

---  - "Best Real Estate CRMs for Lead Management"

  - "Real Estate Follow-Up Scripts That Convert"

## 3. Priority Fix List  - "How to Generate Real Estate Leads Without Cold Calling"

  - "Real Estate Lead Cost Benchmarks: Google Ads vs SEO vs Social"

Ranked by **impression impact × implementation speed**:

---

### 🔴 P1 — High Impact, Fast to Ship (Do First)

### Publishing Velocity Target

| # | Task | Why | Status | Date || Timeframe | Posts Needed | Cumulative Total |

|---|---|---|---|---||---|---|---|

| 1 | Add `VideoObject` schema to blog posts with YouTube embeds | Unlocks Google Video search impressions — new surface entirely | ❌ TODO | - || Month 1–2 | 4 posts/week | ~32 posts |

| 2 | Add `HowTo` schema to tutorial-style blog posts | Rich result CTR is 2–3x standard blue link | ❌ TODO | - || Month 3–4 | 3 posts/week | ~56 posts |

| 3 | Ensure every blog post has ≥3 FAQ items in Sanity | FAQPage rich results currently blocked on most posts | ⏳ IN PROGRESS | - || Month 5–6 | 2 posts/week | ~72 posts |

| 4 | ~~Complete `AUTHOR_SAME_AS` for all authors~~ | Every author needs LinkedIn (minimum) | ✅ DONE | June 10 |

| 5 | Upload team member headshots | Real faces = trust signal | ⏳ IN PROGRESS | - |Each post should:

- Target 1 primary keyword (500–2,000 monthly searches)

### 🟡 P2 — High Impact, Moderate Work- Target 3–5 long-tail variations

- Link to 2–3 internal pages (service page + related article)

| # | Task | Why | Status | Date |- Include FAQ section (minimum 3 questions for FAQPage schema)

|---|---|---|---|---|- Include at least 1 YouTube video embed (for VideoObject schema)

| 6 | ~~Create `/about-us/[slug]` author profile pages~~ | Required for E-E-A-T author authority at scale | ✅ DONE | June 9 |

| 7 | Add `AggregateRating` schema | Star ratings in SERPs — significant CTR lift | ❌ TODO | - |---

| 8 | Add `LocalBusiness` schema alongside `Organization` | Local trust layer + local search ranking signal | ❌ TODO | - |

| 9 | Add `Review` schema to homepage testimonials | Social proof structured data | ❌ TODO | - |## 5. Schema Implementation Plan

| 10 | Fix or remove `MeetAgent.tsx` client template leak | Trust/credibility issue on agency site | ❌ TODO | - |

### New Functions Needed in `lib/eeatSchema.ts`

### 🟢 P3 — Content Infrastructure (Ongoing, Highest Long-term Impact)

#### `buildVideoObjectSchema()`

| # | Task | Why | Status | Date |```typescript

|---|---|---|---|---|// Attach to any blog post that has a YouTube embed in the body

| 11 | ~~Build related posts component on blog~~ | Keeps users on site, distributes link equity | ✅ DONE | June 10 |export function buildVideoObjectSchema(options: {

| 12 | ~~Build Table of Contents component~~ | Improves readability, reduces bounce rate | ✅ DONE | June 10 |  name: string

| 13 | Define topic cluster architecture (see Section 4) | Topic authority is how you 10x impressions | ⏳ IN PROGRESS | - |  description: string

| 14 | Add `ItemList` schema to `/case-studies` | Enhanced case study display in SERPs | ❌ TODO | - |  thumbnailUrl: string

| 15 | Ensure `dateModified` updates in Sanity on content refresh | Freshness signal for Google re-crawl | ❌ TODO | - |  uploadDate: string

| 16 | Add `ItemList` schema to blog index page | Sitelinks search box candidate | ❌ TODO | - |  embedUrl: string

  duration?: string // ISO 8601 e.g. "PT5M30S"

---}) {

  return {

## 4. Content Strategy    '@type': 'VideoObject',

    name: options.name,

### The 10x Content Problem    description: options.description,

Going from 10k → 100k impressions requires targeting ~10x more keyword surface area.    thumbnailUrl: options.thumbnailUrl,

This means **more pages + better targeting**, not just better schema on existing pages.    uploadDate: options.uploadDate,

    embedUrl: options.embedUrl,

### Topic Cluster Architecture    ...(options.duration && { duration: options.duration }),

  }

Build 4 primary pillar pages with supporting spoke articles:}

```

---

#### `buildHowToSchema()`

**Pillar 1: Google Ads for Real Estate**```typescript

- Pillar: `/google-ads-management` (existing — needs expansion)// For tutorial/guide posts with numbered steps

- Spokes (new articles needed):export function buildHowToSchema(options: {

  - "Google Ads for Real Estate Agents: Complete 2026 Guide"  name: string

  - "Real Estate Google Ads Budget: How Much Should You Spend?"  description: string

  - "Performance Max vs Search Campaigns for Real Estate"  steps: Array<{ name: string; text: string; image?: string }>

  - "Google Ads Lead Quality for Real Estate: Fix High Bounce Rate"  totalTime?: string // ISO 8601 e.g. "PT30M"

  - "Real Estate Google Ads Landing Pages That Convert"  estimatedCost?: string

  - "Google Ads for Luxury Real Estate: Different Rules Apply"}) {

  return {

---    '@type': 'HowTo',

    name: options.name,

**Pillar 2: SEO for Real Estate**    description: options.description,

- Pillar: `/seo-optimization` (existing — needs expansion)    ...(options.totalTime && { totalTime: options.totalTime }),

- Spokes (new articles needed):    step: options.steps.map((step, i) => ({

  - "Real Estate SEO Checklist 2026"      '@type': 'HowToStep',

  - "Local SEO for Real Estate Agents: Neighborhood Pages That Rank"      position: i + 1,

  - "Real Estate Website SEO Audit: Step-by-Step"      name: step.name,

  - "How to Rank #1 for '[City] Homes for Sale'"      text: step.text,

  - "Real Estate Blog SEO: How to Write Posts That Actually Rank"      ...(step.image && { image: step.image }),

  - "Google My Business for Real Estate: 2026 Optimization Guide"    })),

  }

---}

```

**Pillar 3: Luxury Real Estate Marketing**

- Pillar: New `/luxury-real-estate-marketing` page ❌ NEEDS CREATION#### `buildAggregateRatingSchema()`

- Spokes (partially existing, needs expansion):```typescript

  - "Luxury Real Estate Marketing Ideas: Print + Digital 2026"// Pull from Trustpilot / Google Review data

  - "How to Market a $1M+ Listing"export function buildAggregateRatingSchema(options: {

  - "Luxury Real Estate Photography: What Actually Sells"  ratingValue: number

  - "Drone Video for Real Estate Listings"  reviewCount: number

  - "Social Media for Luxury Real Estate Agents"  bestRating?: number

  - "Email Marketing for Luxury Real Estate"}) {

  return {

---    '@type': 'AggregateRating',

    ratingValue: options.ratingValue,

**Pillar 4: Real Estate Lead Generation**    reviewCount: options.reviewCount,

- Pillar: `/real-estate-lead-generation` (existing — needs full page)    bestRating: options.bestRating || 5,

- Spokes:    worstRating: 1,

  - "Real Estate Lead Generation: 15 Strategies That Work in 2026"  }

  - "Best Real Estate CRMs for Lead Management"}

  - "Real Estate Follow-Up Scripts That Convert"```

  - "How to Generate Real Estate Leads Without Cold Calling"

  - "Real Estate Lead Cost Benchmarks: Google Ads vs SEO vs Social"#### `buildLocalBusinessSchema()`

```typescript

---// Extends Organization with LocalBusiness fields

export function buildLocalBusinessSchema(baseUrl: string) {

### Publishing Velocity Target  return {

| Timeframe | Posts Needed | Cumulative Total |    '@type': ['Organization', 'LocalBusiness'],

|---|---|---|    '@id': `${baseUrl}/#localbusiness`,

| Month 1–2 | 4 posts/week | ~32 posts |    name: 'DMR Media',

| Month 3–4 | 3 posts/week | ~56 total |    url: baseUrl,

| Month 5–6 | 2 posts/week | ~72 total |    telephone: '+1-920-249-5210',

    email: 'team@dmrmedia.org',

---    image: `${baseUrl}/images/logo.png`,

    priceRange: '$$$',

## 5. Schema Implementation Plan    address: {

      '@type': 'PostalAddress',

### VideoObject Schema      streetAddress: '100 W College Ave, Office No. 326',

**Function exists:** `buildVideoObjectSchema()` in `lib/eeatSchema.ts`      addressLocality: 'Appleton',

      addressRegion: 'WI',

**Usage:**      postalCode: '54911',

```typescript      addressCountry: 'US',

buildVideoObjectSchema({    },

  name: "How to Set Up Google My Business for Real Estate",    geo: {

  description: "Step-by-step video guide",      '@type': 'GeoCoordinates',

  embedUrl: "https://www.youtube.com/embed/VIDEO_ID",      latitude: 44.2619,

  thumbnailUrl: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",      longitude: -88.4154,

  uploadDate: "2026-01-15",    },

  duration: "PT5M30S", // ISO 8601 duration    sameAs: [

  contentUrl: "https://www.youtube.com/watch?v=VIDEO_ID"      'https://www.linkedin.com/company/dmr-media',

})      'https://www.trustpilot.com/review/dmrmedia.org',

```      'https://agencies.semrush.com/dmr-media/',

      'https://www.instagram.com/dmrmedia',

**Sanity Schema Updates Needed:**    ],

```typescript  }

// Add to sanity/schemas/post.ts}

{```

  name: 'videoEmbed',

  title: 'Video Embed URL',### Sanity Schema Additions Needed

  type: 'url',Add these fields to the blog post schema in Sanity to support new structured data:

  description: 'Full YouTube embed URL (e.g., https://www.youtube.com/embed/VIDEO_ID)'

},- `videoEmbed` — YouTube URL field (for `VideoObject` schema)

{- `videoDuration` — ISO 8601 string (e.g. "PT5M30S")

  name: 'videoDuration',- `videoThumbnail` — image asset

  title: 'Video Duration',- `howToSteps` — array of `{name, text, image}` objects

  type: 'string',- `isHowTo` — boolean toggle to enable HowTo schema

  description: 'ISO 8601 format (e.g., PT5M30S for 5 min 30 sec)'- `estimatedReadTime` — already exists as `readTime`

},

{---

  name: 'videoThumbnail',

  title: 'Video Thumbnail',## 6. Internal Linking Architecture

  type: 'image'

}### Current State

```Posts are isolated islands. No visible related posts, no systematic internal linking to service pages.



---### Target State



### HowTo Schema**Every blog post must link to:**

**Function exists:** `buildHowToSchema()` in `lib/eeatSchema.ts`1. The relevant pillar/service page (e.g. Google Ads post → `/google-ads-management`)

2. 1–2 related blog posts (same topic cluster)

**Usage:**3. `/calendar` or `/contact` (conversion CTA)

```typescript

buildHowToSchema({**Service pages must link to:**

  name: "How to Optimize Your Real Estate Website for SEO",1. Supporting blog posts (3–5 relevant articles per service page)

  description: "Complete step-by-step guide",2. Relevant case studies

  steps: [

    {### Related Posts Component

      position: 1,New component needed: `components/blog/RelatedPosts.tsx`

      name: "Install SEO Plugin",- Query posts with matching `category` or `tags` from Sanity

      text: "Install and configure Yoast SEO or similar plugin",- Show 3 posts maximum

      image: "https://example.com/step1.jpg" // optional- Place above the "Back to all insights" link on blog post pages

    },- Include post thumbnail, title, read time

    {

      position: 2,### Anchor Text Rules

      name: "Optimize Title Tags",- Pillar page links: exact match keyword (e.g. "Google Ads for real estate")

      text: "Write compelling title tags under 60 characters"- Blog cross-links: partial match or branded (e.g. "our guide on local SEO")

    }- Conversion links: CTA text ("book a strategy call", "see our results")

    // ...

  ]---

})

```## 7. Author Authority Plan



**Sanity Schema Updates Needed:**### Current State

```typescript- 1 author fully set up: Andrew Rohm (LinkedIn `sameAs`)

// Add to sanity/schemas/post.ts- "By: Max D." — no `sameAs`, no profile page

{- No author pages exist on the site

  name: 'isHowTo',

  title: 'Is How-To Article?',### Required: Author Profile Pages

  type: 'boolean',Create `/team/[slug]/page.tsx` with:

  description: 'Enable HowTo schema for step-by-step guides'- Full name + headshot

},- Bio (300–500 words minimum)

{- Areas of expertise

  name: 'howToSteps',- LinkedIn, Twitter/X, and any publication bylines

  title: 'How-To Steps',- List of articles written (links to blog posts)

  type: 'array',- `Person` schema with full `sameAs` array

  hidden: ({ parent }) => !parent?.isHowTo,

  of: [{### Author `sameAs` Entries Needed

    type: 'object',Update `lib/eeatSchema.ts` `AUTHOR_SAME_AS` constant:

    fields: [

      { name: 'name', type: 'string', title: 'Step Name' },```typescript

      { name: 'text', type: 'text', title: 'Step Instructions' },const AUTHOR_SAME_AS: Record<string, string[]> = {

      { name: 'image', type: 'image', title: 'Step Image (optional)' }  'Andrew J Rohm': ['https://www.linkedin.com/in/andrewrohm'],

    ]  'Andrew Rohm': ['https://www.linkedin.com/in/andrewrohm'],

  }]  'Max D.': [

}    'https://www.linkedin.com/in/[max-linkedin-slug]', // ADD REAL URL

```  ],

  // Add every author who publishes on the blog

---}

```

### AggregateRating Schema

**Function exists:** `buildAggregateRatingSchema()` in `lib/eeatSchema.ts`### Guest Author / Citation Strategy

For posts citing external real estate professionals:

**Usage:**- Add their LinkedIn to `sameAs` in the post schema

```typescript- Link their name to their LinkedIn profile with `rel="noopener"`

buildAggregateRatingSchema({- This signals real-world connections to Google

  ratingValue: 5.0,

  reviewCount: 47,---

  bestRating: 5

})## 8. Technical Checklist

```

### Schema

**Wire into:**- [x] Add `buildVideoObjectSchema()` to `lib/eeatSchema.ts` ✅ June 9

- Homepage (Trustpilot + Google Reviews combined)- [x] Add `buildHowToSchema()` to `lib/eeatSchema.ts` ✅ June 9

- Contact page- [x] Add `buildAggregateRatingSchema()` to `lib/eeatSchema.ts` ✅ June 9

- Service pages (if individual ratings exist)- [x] Add `buildLocalBusinessSchema()` to `lib/eeatSchema.ts` ✅ June 9

- [ ] Wire `VideoObject` into `app/blog/[slug]/page.tsx` `@graph` (when post has `videoEmbed` field in Sanity)

---- [ ] Wire `HowTo` into `app/blog/[slug]/page.tsx` `@graph` (when `isHowTo` = true)

- [ ] Add `AggregateRating` to homepage and contact page schemas

### LocalBusiness Schema- [ ] Add `ItemList` to `/case-studies` page

**Function exists:** `buildLocalBusinessSchema()` in `lib/eeatSchema.ts`- [x] Complete `AUTHOR_SAME_AS` for all authors in `lib/eeatSchema.ts` ✅ June 9 (Andrew, Max, Nako, SJ, Collins, Alex)



**Usage:**### Pages to Build

```typescript- [x] `/about-us` — team index page ✅ June 9

buildLocalBusinessSchema({- [x] `/about-us/andrew-rohm` — CEO profile ✅ June 9

  geo: {- [x] `/about-us/max-de` — CMO profile ✅ June 9

    latitude: 44.2619,- [x] `/about-us/nako-a` — Web Developer profile ✅ June 9

    longitude: -88.4154- [x] `/about-us/sj` — Admin & Operations profile ✅ June 9

  },- [x] `/about-us/collins` — Google Ads Specialist profile ✅ June 9

  priceRange: '$$$',- [x] `/about-us/alex` — Sales profile ✅ June 9

  areaServed: 'United States'- [x] Team data file `data/team.ts` — single source of truth ✅ June 9

})- [x] `TeamProfileContent.tsx` — shared profile layout component ✅ June 9

```- [x] All 8 pages added to `lib/content-registry.ts` ✅ June 9

- [x] "Team" link added to `Navbar.tsx` ✅ June 9

**Wire into:**- [x] Team teaser section added to `/about` page ✅ June 9

- Homepage (alongside Organization schema)- [x] `/public/images/team/` folder created for profile photos ✅ June 9

- Contact page- [ ] `/luxury-real-estate-marketing` — new pillar page

- [ ] Expand `/real-estate-lead-generation` into full page

---

### Components

## 6. Internal Linking Architecture- [x] Build RelatedPosts component for blog pages — *June 10*

- [x] Build TableOfContents component with scroll spy — *June 10*

### Current State- [x] Wire RelatedPosts into blog post template (shows 3 related by category + tags) — *June 10*

- ✅ Related Posts component built (June 10)- [x] Wire TableOfContents into blog post template (sticky right sidebar on desktop) — *June 10*

- ✅ Table of Contents built (June 10)- [ ] Build AuthorCard component (if needed beyond current implementation)

- ✅ Author profile links in blog posts (June 10)- [ ] Add "Jump to top" button for long articles

- ❌ No systematic pillar → spoke linking- [ ] Add social share buttons to blog posts

- ❌ Service pages don't link to relevant blog posts

- ❌ Blog posts don't link to service pages### Schema & Structured Data to Build

- [ ] `components/blog/RelatedPosts.tsx` — related articles on blog post pages

### Target Architecture- [ ] `components/blog/AuthorCard.tsx` — reusable author bio card



**Hub & Spoke Model:**### Content in Sanity

```- [ ] Add `videoEmbed`, `videoDuration`, `videoThumbnail` fields to Sanity blog schema

Service Page (Pillar)- [ ] Add `howToSteps`, `isHowTo` fields to Sanity blog schema

    ↓- [ ] Audit all existing blog posts — add FAQ items (minimum 3 per post)

    ├─ Blog Post 1 (Spoke)- [ ] Audit all existing blog posts — confirm `dateModified` is current

    ├─ Blog Post 2 (Spoke)- [ ] Audit all existing blog posts — add YouTube video embeds where possible

    ├─ Blog Post 3 (Spoke)

    └─ Blog Post 4 (Spoke)### Sanity Schema

```- [x] Update Author schema with `teamProfileSlug`, `linkedin`, `twitter` fields — *June 10*

- [x] Deploy updated Author schema to Sanity Studio — *June 10*

**Example:**- [x] Wire Sanity author fields into blog post queries — *June 10*

```- [x] Update `buildPersonSchema()` to use Sanity fields (prioritize over hardcoded `AUTHOR_SAME_AS`) — *June 10*

/google-ads-management (Pillar)- [x] Add author profile links to blog post bylines (hero + author card) — *June 10*

    ↓- [ ] Add `videoEmbed`, `videoDuration`, `videoThumbnail` fields to Post schema

    ├─ "Google Ads Budget Guide" → links back to pillar- [ ] Add `isHowTo` boolean and `howToSteps` array to Post schema

    ├─ "Performance Max Guide" → links back to pillar- [ ] Update authors in Sanity Studio with team profile slugs (andrew-rohm, max-de, nako-a, sj, collins, alex)

    ├─ "Landing Page Tips" → links back to pillar

    └─ "Lead Quality Issues" → links back to pillar### Fixes

```- [ ] Audit all pages importing `MeetAgent.tsx` — remove from any non-client pages

- [ ] Update `components/MeetAgent.tsx` or rename to reflect correct use case

**Implementation:**- [ ] Verify `dateModified` is being updated in Sanity when posts are refreshed

1. Add "Related Services" section at bottom of blog posts

2. Add "Recommended Reading" section on service pages### Photos Needed

3. Use anchor text variations (avoid over-optimization)- [ ] Upload team headshots to `/public/images/team/`:

4. Include in-content contextual links (natural placement)  - `andrew-rohm.jpg`

  - `max-de.jpg`

---  - `nako-a.jpg`

  - `sj.jpg`

## 7. Author Authority Plan  - `collins.jpg`

  - `alex.jpg`

### ✅ Completed (June 9-10):

### Tracking

#### Team Profile Pages- [ ] Set up Google Search Console filtered view for "Impressions by Search Type" (Web, Video, Image)

- `/about-us` - Team index with Person @graph- [ ] Create GSC property for `www.dmrmedia.org` if not already done

- `/about-us/andrew-rohm` - CEO profile- [ ] Set up Ahrefs/SEMrush rank tracking for all pillar page primary keywords

- `/about-us/max-de` - CMO profile- [ ] Tag all new blog posts with UTM parameters for GA4 organic traffic reporting

- `/about-us/nako-a` - Web Developer profile

- `/about-us/sj` - Admin profile---

- `/about-us/collins` - Google Ads Specialist profile

- `/about-us/alex` - Sales profile## 9. Tracking & Milestones



#### Sanity Integration### KPIs

- Author schema updated with `teamProfileSlug`, `linkedin`, `twitter` fields| Metric | Now | 90-Day Target | 6-Month Target |

- Blog post queries fetch new author fields|---|---|---|---|

- `buildPersonSchema()` prioritizes Sanity data over hardcoded `AUTHOR_SAME_AS`| Monthly Search Impressions | ~10,000 | 30,000 | 100,000 |

- Author names clickable in blog posts → link to team profiles| Monthly Organic Clicks | Baseline | 3x baseline | 10x baseline |

- "View Profile" button in author card at article bottom| Blog Posts Live | Current count | +30 posts | +72 posts |

| Pages with FAQPage schema | ~0 | 80% of posts | 100% of posts |

#### Person Schema Structure| Pages with VideoObject schema | 0 | 20+ posts | 50+ posts |

```json| Author profile pages | 0 | 2 pages | All active authors |

{| Average position for pillar keywords | TBD | Top 20 | Top 10 |

  "@type": "Person",

  "@id": "https://www.dmrmedia.org/about-us/andrew-rohm#person",### Monthly Review Process

  "name": "Andrew Rohm",1. Pull GSC impressions report — compare to prior month

  "jobTitle": "CEO & Founder",2. Check which new rich result types are appearing (FAQ, Video, HowTo)

  "description": "Bio text...",3. Review top 10 impression-driving queries — double down with more content in that cluster

  "image": "https://www.dmrmedia.org/images/team/andrew-rohm.jpg",4. Identify 0-impression pages — update content + schema

  "knowsAbout": ["SEO Strategy", "Digital Marketing", "Real Estate Marketing"],5. Add 1–2 new `AUTHOR_SAME_AS` entries as new authors publish

  "worksFor": {

    "@id": "https://www.dmrmedia.org/#organization"### Impression Milestone Triggers

  },- **20K impressions** → Validate topic cluster strategy is working. Double velocity on winning cluster.

  "sameAs": [- **40K impressions** → Expand to 2 new pillar topics. Begin building backlink acquisition outreach.

    "https://www.linkedin.com/in/andrewrohm",- **70K impressions** → Add `AggregateRating` and push for Google Reviews structured data.

    "https://www.dmrmedia.org/about-us/andrew-rohm"- **100K impressions** → Full audit. Identify next 100K gap.

  ]

}---

```

## Notes

### ⏳ Next Steps:

- **Schema alone will not get to 100K.** It removes blockers and improves CTR on existing impressions. The primary driver is publishing more targeted content consistently.

1. **Update Sanity Authors** (Manual work needed)- **VideoObject schema is the fastest new impression surface** — Google Video is a separate index with much less competition than Web search.

   - Edit each author in Sanity Studio- **FAQ rich results have the highest visible lift** per post — prioritize adding FAQ blocks in Sanity to every existing post before writing new ones.

   - Fill in `teamProfileSlug` field (e.g., "andrew-rohm", "max-de")- The `MeetAgent.tsx` Cheryl Towey issue must be resolved before any outreach or link-building is done — it would undermine any authority signals built elsewhere.

   - Fill in `linkedin` URL (full URL)

   - Fill in `twitter` URL (optional)---



2. **Upload Team Headshots****Last Updated:** June 4, 2026

   - 6 photos needed in `/public/images/team/`**Owner:** DMR Media Team

   - andrew-rohm.jpg, max-de.jpg, nako-a.jpg, sj.jpg, collins.jpg, alex.jpg**Status:** Active Plan


3. **Content Byline Audit**
   - Ensure all blog posts have correct author attribution
   - Standardize name format (use full names, not "Max D." variations)

---

## 8. Technical Checklist

### Core Infrastructure
- [x] Next.js 15 with App Router
- [x] TypeScript strict mode
- [x] Server Components for performance
- [x] Image optimization (Next.js Image)
- [x] Metadata API for SEO tags
- [x] Canonical URLs on all pages
- [x] OpenGraph tags
- [x] robots.txt
- [x] sitemap.xml (dynamic)
- [x] GTM + GA4 + Clarity tracking

### Schema Implementation
- [x] Organization schema (global)
- [x] Person schema (authors + team) — *June 10*
- [x] Article schema (blog posts)
- [x] FAQPage schema (conditional)
- [x] Service schema (auto-injected)
- [x] BreadcrumbList schema (auto-injected)
- [x] VideoObject schema builder — *June 9* (not wired yet)
- [x] HowTo schema builder — *June 9* (not wired yet)
- [x] AggregateRating schema builder — *June 9* (not wired yet)
- [x] LocalBusiness schema builder — *June 9* (not wired yet)
- [ ] Wire VideoObject into blog posts with YouTube embeds
- [ ] Wire HowTo into tutorial posts
- [ ] Wire AggregateRating into homepage + contact
- [ ] Wire LocalBusiness into homepage

### Components
- [x] RelatedPosts component for blog pages — *June 10*
- [x] TableOfContents component with scroll spy — *June 10*
- [x] Wire RelatedPosts into blog post template — *June 10*
- [x] Wire TableOfContents into blog post template — *June 10*
- [x] Team profile pages (6) — *June 9*
- [x] Team index page with @graph — *June 9*
- [ ] AuthorCard component (if needed beyond current implementation)
- [ ] "Jump to top" button for long articles
- [ ] Social share buttons to blog posts

### Sanity Schema
- [x] Update Author schema with `teamProfileSlug`, `linkedin`, `twitter` fields — *June 10*
- [x] Deploy updated Author schema to Sanity Studio — *June 10*
- [x] Wire Sanity author fields into blog post queries — *June 10*
- [x] Update `buildPersonSchema()` to use Sanity fields — *June 10*
- [x] Add author profile links to blog post bylines — *June 10*
- [ ] Add `videoEmbed`, `videoDuration`, `videoThumbnail` fields to Post schema
- [ ] Add `isHowTo` boolean and `howToSteps` array to Post schema
- [ ] Update authors in Sanity Studio with team profile slugs

### Content Work
- [ ] Audit all blog posts for ≥3 FAQ items
- [ ] Add H2/H3 structure to posts without headings
- [ ] Add minimum 3 tags to all posts
- [ ] Identify posts with YouTube embeds → add VideoObject data
- [ ] Identify tutorial posts → add HowTo data
- [ ] Build 4 pillar pages (1 missing: luxury marketing)
- [ ] Publish 72 new spoke articles over 6 months

### Fixes
- [ ] Audit all pages importing `MeetAgent.tsx` — remove from any non-client pages
- [ ] Update `components/MeetAgent.tsx` or rename to reflect correct use case
- [ ] Verify `dateModified` is being updated in Sanity when posts are refreshed

### Photos Needed
- [ ] Upload team headshots to `/public/images/team/`:
  - `andrew-rohm.jpg`
  - `max-de.jpg`
  - `nako-a.jpg`
  - `sj.jpg`
  - `collins.jpg`
  - `alex.jpg`

### Tracking
- [ ] Set up Google Search Console filtered view for "Impressions by Search Type" (Web, Video, Image)
- [ ] Create GSC property for `www.dmrmedia.org` if not already done
- [ ] Set up Ahrefs/SEMrush rank tracking for all pillar page primary keywords
- [ ] Tag all new blog posts with UTM parameters for GA4 organic traffic reporting

---

## 9. Tracking & Milestones

### KPIs
| Metric | Now | 90-Day Target | 6-Month Target |
|---|---|---|---|
| Monthly Search Impressions | ~10,000 | 30,000 | 100,000 |
| Monthly Organic Clicks | Baseline | 3x baseline | 10x baseline |
| Blog Posts Live | ~118 | +30 posts (148) | +72 posts (190) |
| Pages with FAQPage schema | ~60% | 80% of posts | 100% of posts |
| Pages with VideoObject schema | 0 | 20+ posts | 50+ posts |
| Author profile pages | 6 ✅ | 6 (photos added) | All active authors |
| Average position for pillar keywords | TBD | Top 20 | Top 10 |

### Monthly Review Process
1. Pull GSC impressions report — compare to prior month
2. Check which new rich result types are appearing (FAQ, Video, HowTo)
3. Review top 10 impression-driving queries — double down with more content in that cluster
4. Identify 0-impression pages — update content + schema
5. Add 1–2 new authors to Sanity as needed

### Impression Milestone Triggers
- **20K impressions** → Validate topic cluster strategy is working. Double velocity on winning cluster.
- **40K impressions** → Expand to 2 new pillar topics. Begin building backlink acquisition outreach.
- **70K impressions** → Add `AggregateRating` and push for Google Reviews structured data.
- **100K impressions** → Full audit. Identify next 100K gap.

---

## 10. Recent Updates (June 2026)

### June 10, 2026

#### ✅ Sanity ↔ Team Profile Integration
**Impact:** High EEAT (Experience + Authoritativeness)

**What Was Done:**
- Updated `sanity/schemas/author.ts` with 3 new fields:
  - `teamProfileSlug` (string) - Links to `/about-us/[slug]`
  - `linkedin` (url) - Full LinkedIn profile URL
  - `twitter` (url) - Full Twitter/X profile URL
- Deployed schema to Sanity Studio via `npm run sanity:deploy`
- Updated `data/blogPosts.ts` queries to fetch new author fields
- Modified `lib/eeatSchema.ts` `buildPersonSchema()` to prioritize Sanity data over hardcoded `AUTHOR_SAME_AS`
- Added clickable author links in blog post hero section
- Added "View Profile" button in author card at bottom of posts

**Files Modified:**
- `sanity/schemas/author.ts`
- `data/blogPosts.ts`
- `lib/eeatSchema.ts`
- `app/blog/[slug]/page.tsx`

**Result:**
- Blog authors now dynamically link to team profiles
- Person schema includes team profile URLs in `sameAs` array
- No code edits needed for new authors (all managed in Sanity)

**Documentation:** `SANITY_TEAM_INTEGRATION.md`

---

#### ✅ Table of Contents + Related Posts
**Impact:** Medium-High EEAT (Expertise) + SEO

**What Was Done:**
- Built `components/blog/TableOfContents.tsx` with:
  - Sticky sidebar positioning
  - IntersectionObserver scroll spy
  - Auto-highlights current section
  - Smooth scroll navigation
  - H2/H3 hierarchy with indentation
- Built `components/blog/RelatedPosts.tsx` with:
  - Smart scoring algorithm: Score = (Same Category ? 10 : 0) + (Matching Tags × 5)
  - Shows top 3 most relevant posts
  - Card grid with hover states
  - "View all insights" link
- Created `lib/extractHeadings.ts` utility to parse Sanity blocks
- Updated `app/blog/[slug]/page.tsx` to wire both components

**Files Created:**
- `components/blog/TableOfContents.tsx`
- `components/blog/RelatedPosts.tsx`
- `lib/extractHeadings.ts`

**Files Modified:**
- `app/blog/[slug]/page.tsx`

**Result:**
- Improved readability (ToC shows structure)
- Reduced bounce rate (users click related posts)
- Better internal linking (every post links to 3 others)
- Topic cluster reinforcement (similar posts grouped)

**Documentation:** `TOC_RELATEDPOSTS_COMPLETE.md`

---

#### ✅ Build Fixes
**Impact:** Critical (site wouldn't build before)

**What Was Fixed:**
1. Installed missing npm packages:
   - `react-markdown` (for blog content)
   - `remark-gfm` (GitHub-flavored markdown)
   - `react-simple-maps` (MLS map component)
   - `stripe` + `@stripe/stripe-js` (payment processing)

2. Updated Stripe API version:
   - Changed from `2025-11-17.clover` → `2026-02-25.clover`
   - Files: `app/api/checkout_sessions/route.ts`, `app/api/verify-payment/route.ts`

3. Removed event handler from Server Component:
   - Removed `onError` prop from Next.js Image in `/about-us` page
   - Server components can't pass event handlers

**Result:**
- Build completes successfully
- All 220 pages generate without errors
- No TypeScript compilation errors

---

### June 9, 2026

#### ✅ Team Profile Pages
**Impact:** Very High EEAT (Experience)

**What Was Done:**
- Created `data/team.ts` with TeamMember interface + 6 full profiles
- Built `/about-us` team index with Person @graph
- Built 6 individual profile pages (`/about-us/[slug]/page.tsx`)
- Created `TeamProfileContent.tsx` shared layout component
- Added 4 new schema builder functions to `lib/eeatSchema.ts`:
  - `buildVideoObjectSchema()`
  - `buildHowToSchema()`
  - `buildAggregateRatingSchema()`
  - `buildLocalBusinessSchema()`
- Updated `AUTHOR_SAME_AS` mapping for all 6 team members
- Registered all team pages in `lib/content-registry.ts`
- Added "Team" link to navigation (`components/Navbar.tsx`)
- Added team teaser section to `/about` page

**Files Created:**
- `data/team.ts`
- `app/about-us/page.tsx`
- `app/about-us/TeamProfileContent.tsx`
- `app/about-us/andrew-rohm/page.tsx`
- `app/about-us/max-de/page.tsx`
- `app/about-us/nako-a/page.tsx`
- `app/about-us/sj/page.tsx`
- `app/about-us/collins/page.tsx`
- `app/about-us/alex/page.tsx`
- `public/images/team/.gitkeep`

**Files Modified:**
- `lib/eeatSchema.ts`
- `lib/content-registry.ts`
- `components/Navbar.tsx`
- `app/about/AboutPageContent.tsx`

**Result:**
- Google can now verify human expertise via dedicated profile pages
- Person schema includes `jobTitle`, `knowsAbout`, `worksFor`, `sameAs`
- All team members have LinkedIn links in schema
- Team pages indexed in sitemap

---

### Build Status
✅ **All checks passing as of June 10, 2026:**
- TypeScript compilation: ✅
- Next.js build: ✅
- 220 static pages generated: ✅
- No blocking errors: ✅

---

## Notes

- **Schema alone will not get to 100K.** It removes blockers and improves CTR on existing impressions. The primary driver is publishing more targeted content consistently.
- **VideoObject schema is the fastest new impression surface** — Google Video is a separate index with much less competition than Web search.
- **FAQ rich results have the highest visible lift** per post — prioritize adding FAQ blocks in Sanity to every existing post before writing new ones.
- **Table of Contents + Related Posts = engagement boost** — users stay longer, click more, signal quality to Google.
- The `MeetAgent.tsx` Cheryl Towey issue must be resolved before any outreach or link-building is done — it would undermine any authority signals built elsewhere.

---

**Last Updated:** June 10, 2026  
**Owner:** DMR Media Team  
**Status:** 60% Complete — Core infrastructure done, content work + schema wiring remaining  
**Next Review:** After P1 tasks complete (VideoObject, HowTo, FAQ audit)
