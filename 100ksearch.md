# 100K Search Impressions Plan — DMR Media
**Current:** ~10,000 impressions/month
**Target:** 100,000 impressions/month
**Audit Date:** June 4, 2026
**Branch:** main

---

## 📋 Table of Contents
1. [Current EEAT Audit](#1-current-eeat-audit)
2. [What's Missing](#2-whats-missing)
3. [Priority Fix List](#3-priority-fix-list)
4. [Content Strategy](#4-content-strategy)
5. [Schema Implementation Plan](#5-schema-implementation-plan)
6. [Internal Linking Architecture](#6-internal-linking-architecture)
7. [Author Authority Plan](#7-author-authority-plan)
8. [Technical Checklist](#8-technical-checklist)
9. [Tracking & Milestones](#9-tracking--milestones)

---

## 1. Current EEAT Audit

### ✅ What's Already Built Well

| Signal | File | Status |
|---|---|---|
| Organization Schema | `lib/eeatSchema.ts` — name, address, phone, email, logo, `sameAs` (LinkedIn, Trustpilot, SEMrush, Instagram) | ✅ Solid |
| Author Person Schema | `buildPersonSchema()` with name, image, bio, `sameAs` LinkedIn for Andrew Rohm | ⚠️ Partial |
| Article / BlogPosting Schema | Full `@graph` on every blog post — Article + Person + Organization + FAQPage (conditional) | ✅ Solid |
| BreadcrumbList Schema | `SEOWrapper` injects on every service, blog, and about page | ✅ Solid |
| Service Schema | `SEOWrapper` emits on all service pages | ✅ Solid |
| Canonical URLs | Set on all blog posts, content registry drives static pages | ✅ Solid |
| OG / Social Meta | Title, description, image, `article:publishedTime` on blog posts | ✅ Solid |
| Sitemap | Dynamic — blog posts + MLS pages + content registry with `lastmod` | ✅ Solid |
| Robots.txt | Clean — disallows `/api/` and thank-you pages only | ✅ Solid |
| GTM + GA4 | Injected in `app/layout.tsx` | ✅ |
| Author Bio Block | Photo + bio + CTA at bottom of every blog post | ✅ |
| FAQ Block + FAQPage Schema | On posts with FAQ items in Sanity | ⚠️ Conditional only |
| Content Registry | Single source of truth for all page metadata + `modifiedDate` | ✅ Solid |

---

## 2. What's Missing

### E — Experience
- **No author profile pages** (`/team/andrew-rohm`, `/team/max-d`)
  - Google and AI crawlers cannot verify real human expertise without a dedicated indexable page
  - Schema `Person` nodes exist but have no URL to link to
- **Only 1 author in `AUTHOR_SAME_AS`** (`lib/eeatSchema.ts`)
  - "By: Max D." and other bylines get zero `sameAs` authority
  - Any author without a LinkedIn entry has no off-site credibility signal

### E — Expertise
- **No `VideoObject` schema**
  - Blog posts embed YouTube videos with zero structured data around them
  - Google Video search is a completely untapped impression source
  - Affected posts: any post with a YouTube `<iframe>` in the Sanity body
- **No `HowTo` schema**
  - Multiple posts are step-by-step guides (GMB setup, Google Ads, Local SEO)
  - `HowTo` rich results are high-CTR and appear prominently in search
  - Zero implementation currently
- **FAQ schema inconsistently applied**
  - It only fires when an editor adds FAQ items to Sanity
  - Most posts likely have 0 FAQ items → 0 FAQ rich results in search

### A — Authoritativeness
- **No `AggregateRating` schema**
  - Trustpilot and 5-star reviews are referenced in copy and the content registry description
  - Not pulled into structured data — missing star rating display in SERPs
- **No `Review` schema on testimonials**
  - Homepage `Testimonials` and `VideoTestimonials` components have no structured data
- **No `ItemList` or `CaseStudy` schema on case study pages**
  - `/case-studies` and individual case study pages are plain pages with no enhanced schema

### T — Trustworthiness
- **`MeetAgent.tsx` renders "Meet Cheryl Towey Services"**
  - This is a client template that appears to have leaked into the agency codebase
  - If rendered anywhere on the live DMR site, it is a serious trust/credibility issue
  - Action: audit every page that imports `MeetAgent` and remove or rename
- **No `LocalBusiness` schema**
  - `Organization` schema exists but `LocalBusiness` with `openingHours`, `geo` coordinates, and `priceRange` adds another trust and local ranking layer
- **`dateModified` falls back to `publishedAt`** on blog posts
  - Posts not updated in Sanity will show stale `dateModified`
  - Google uses this signal to assess content freshness

### Content Volume (The Biggest Gap to 100K)
> Schema improvements alone will not 10x impressions.
> The primary driver of 10k → 100k is **publishing velocity + keyword targeting**.

- **No topic cluster / pillar page architecture**
  - No visible pillar-to-spoke internal linking strategy in codebase
  - Content appears to be published as isolated posts
- **No related posts component**
  - Blog post pages have no "Related Articles" section
  - Every exit from a blog post is a full site exit — zero link equity flow between posts
- **No internal linking strategy**
  - Posts don't systematically link to service pages or other posts
  - Missed opportunity to pass authority to high-value conversion pages

---

## 3. Priority Fix List

Ranked by **impression impact × implementation speed**:

### 🔴 P1 — High Impact, Fast to Ship (Do First)

| # | Task | Why | File(s) |
|---|---|---|---|
| 1 | Add `VideoObject` schema to blog posts with YouTube embeds | Unlocks Google Video search impressions — new surface entirely | `app/blog/[slug]/page.tsx`, `lib/eeatSchema.ts` |
| 2 | Add `HowTo` schema to tutorial-style blog posts | Rich result CTR is 2–3x standard blue link | `lib/eeatSchema.ts`, Sanity schema |
| 3 | Ensure every blog post has ≥3 FAQ items in Sanity | FAQPage rich results currently blocked on most posts | Sanity CMS content entry |
| 4 | Complete `AUTHOR_SAME_AS` for all authors | Every author needs LinkedIn (minimum) | `lib/eeatSchema.ts` |

### 🟡 P2 — High Impact, Moderate Work

| # | Task | Why | File(s) |
|---|---|---|---|
| 5 | Create `/team/[slug]` author profile pages | Required for E-E-A-T author authority at scale | New: `app/team/[slug]/page.tsx` |
| 6 | Add `AggregateRating` schema | Star ratings in SERPs — significant CTR lift | `lib/eeatSchema.ts`, new `buildAggregateRatingSchema()` |
| 7 | Add `LocalBusiness` schema alongside `Organization` | Local trust layer + local search ranking signal | `lib/eeatSchema.ts` |
| 8 | Add `Review` schema to homepage testimonials | Social proof structured data | `components/Testimonials.tsx` |
| 9 | Fix or remove `MeetAgent.tsx` client template leak | Trust/credibility issue on agency site | `components/MeetAgent.tsx` |

### 🟢 P3 — Content Infrastructure (Ongoing, Highest Long-term Impact)

| # | Task | Why | File(s) |
|---|---|---|---|
| 10 | Build related posts component on blog | Keeps users on site, distributes link equity | New: `components/blog/RelatedPosts.tsx` |
| 11 | Define topic cluster architecture (see Section 4) | Topic authority is how you 10x impressions | Content plan |
| 12 | Add `ItemList` schema to `/case-studies` | Enhanced case study display in SERPs | `app/case-studies/page.tsx` |
| 13 | Ensure `dateModified` updates in Sanity on content refresh | Freshness signal for Google re-crawl | Sanity workflow |
| 14 | Add `ItemList` schema to blog index page | Sitelinks search box candidate | `app/blog/page.tsx` |

---

## 4. Content Strategy

### The 10x Content Problem
Going from 10k → 100k impressions requires targeting ~10x more keyword surface area.
This means **more pages + better targeting**, not just better schema on existing pages.

### Topic Cluster Architecture

Build 4 primary pillar pages with supporting spoke articles:

---

**Pillar 1: Google Ads for Real Estate**
- Pillar: `/google-ads-management` (existing — needs expansion)
- Spokes (new articles needed):
  - "Google Ads for Real Estate Agents: Complete 2026 Guide"
  - "Real Estate Google Ads Budget: How Much Should You Spend?"
  - "Performance Max vs Search Campaigns for Real Estate"
  - "Google Ads Lead Quality for Real Estate: Fix High Bounce Rate"
  - "Real Estate Google Ads Landing Pages That Convert"
  - "Google Ads for Luxury Real Estate: Different Rules Apply"

---

**Pillar 2: SEO for Real Estate**
- Pillar: `/seo-optimization` (existing — needs expansion)
- Spokes (new articles needed):
  - "Real Estate SEO Checklist 2026"
  - "Local SEO for Real Estate Agents: Neighborhood Pages That Rank"
  - "Real Estate Website SEO Audit: Step-by-Step"
  - "How to Rank #1 for '[City] Homes for Sale'"
  - "Real Estate Blog SEO: How to Write Posts That Actually Rank"
  - "Google My Business for Real Estate: 2026 Optimization Guide"

---

**Pillar 3: Luxury Real Estate Marketing**
- Pillar: New `/luxury-real-estate-marketing` page
- Spokes (partially existing, needs expansion):
  - "Luxury Real Estate Marketing Ideas: Print + Digital 2026"
  - "How to Market a $1M+ Listing"
  - "Luxury Real Estate Photography: What Actually Sells"
  - "Drone Video for Real Estate Listings"
  - "Social Media for Luxury Real Estate Agents"
  - "Email Marketing for Luxury Real Estate"

---

**Pillar 4: Real Estate Lead Generation**
- Pillar: `/real-estate-lead-generation` (in content registry, needs full page)
- Spokes:
  - "Real Estate Lead Generation: 15 Strategies That Work in 2026"
  - "Best Real Estate CRMs for Lead Management"
  - "Real Estate Follow-Up Scripts That Convert"
  - "How to Generate Real Estate Leads Without Cold Calling"
  - "Real Estate Lead Cost Benchmarks: Google Ads vs SEO vs Social"

---

### Publishing Velocity Target
| Timeframe | Posts Needed | Cumulative Total |
|---|---|---|
| Month 1–2 | 4 posts/week | ~32 posts |
| Month 3–4 | 3 posts/week | ~56 posts |
| Month 5–6 | 2 posts/week | ~72 posts |

Each post should:
- Target 1 primary keyword (500–2,000 monthly searches)
- Target 3–5 long-tail variations
- Link to 2–3 internal pages (service page + related article)
- Include FAQ section (minimum 3 questions for FAQPage schema)
- Include at least 1 YouTube video embed (for VideoObject schema)

---

## 5. Schema Implementation Plan

### New Functions Needed in `lib/eeatSchema.ts`

#### `buildVideoObjectSchema()`
```typescript
// Attach to any blog post that has a YouTube embed in the body
export function buildVideoObjectSchema(options: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  embedUrl: string
  duration?: string // ISO 8601 e.g. "PT5M30S"
}) {
  return {
    '@type': 'VideoObject',
    name: options.name,
    description: options.description,
    thumbnailUrl: options.thumbnailUrl,
    uploadDate: options.uploadDate,
    embedUrl: options.embedUrl,
    ...(options.duration && { duration: options.duration }),
  }
}
```

#### `buildHowToSchema()`
```typescript
// For tutorial/guide posts with numbered steps
export function buildHowToSchema(options: {
  name: string
  description: string
  steps: Array<{ name: string; text: string; image?: string }>
  totalTime?: string // ISO 8601 e.g. "PT30M"
  estimatedCost?: string
}) {
  return {
    '@type': 'HowTo',
    name: options.name,
    description: options.description,
    ...(options.totalTime && { totalTime: options.totalTime }),
    step: options.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  }
}
```

#### `buildAggregateRatingSchema()`
```typescript
// Pull from Trustpilot / Google Review data
export function buildAggregateRatingSchema(options: {
  ratingValue: number
  reviewCount: number
  bestRating?: number
}) {
  return {
    '@type': 'AggregateRating',
    ratingValue: options.ratingValue,
    reviewCount: options.reviewCount,
    bestRating: options.bestRating || 5,
    worstRating: 1,
  }
}
```

#### `buildLocalBusinessSchema()`
```typescript
// Extends Organization with LocalBusiness fields
export function buildLocalBusinessSchema(baseUrl: string) {
  return {
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${baseUrl}/#localbusiness`,
    name: 'DMR Media',
    url: baseUrl,
    telephone: '+1-920-249-5210',
    email: 'team@dmrmedia.org',
    image: `${baseUrl}/images/logo.png`,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '100 W College Ave, Office No. 326',
      addressLocality: 'Appleton',
      addressRegion: 'WI',
      postalCode: '54911',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.2619,
      longitude: -88.4154,
    },
    sameAs: [
      'https://www.linkedin.com/company/dmr-media',
      'https://www.trustpilot.com/review/dmrmedia.org',
      'https://agencies.semrush.com/dmr-media/',
      'https://www.instagram.com/dmrmedia',
    ],
  }
}
```

### Sanity Schema Additions Needed
Add these fields to the blog post schema in Sanity to support new structured data:

- `videoEmbed` — YouTube URL field (for `VideoObject` schema)
- `videoDuration` — ISO 8601 string (e.g. "PT5M30S")
- `videoThumbnail` — image asset
- `howToSteps` — array of `{name, text, image}` objects
- `isHowTo` — boolean toggle to enable HowTo schema
- `estimatedReadTime` — already exists as `readTime`

---

## 6. Internal Linking Architecture

### Current State
Posts are isolated islands. No visible related posts, no systematic internal linking to service pages.

### Target State

**Every blog post must link to:**
1. The relevant pillar/service page (e.g. Google Ads post → `/google-ads-management`)
2. 1–2 related blog posts (same topic cluster)
3. `/calendar` or `/contact` (conversion CTA)

**Service pages must link to:**
1. Supporting blog posts (3–5 relevant articles per service page)
2. Relevant case studies

### Related Posts Component
New component needed: `components/blog/RelatedPosts.tsx`
- Query posts with matching `category` or `tags` from Sanity
- Show 3 posts maximum
- Place above the "Back to all insights" link on blog post pages
- Include post thumbnail, title, read time

### Anchor Text Rules
- Pillar page links: exact match keyword (e.g. "Google Ads for real estate")
- Blog cross-links: partial match or branded (e.g. "our guide on local SEO")
- Conversion links: CTA text ("book a strategy call", "see our results")

---

## 7. Author Authority Plan

### Current State
- 1 author fully set up: Andrew Rohm (LinkedIn `sameAs`)
- "By: Max D." — no `sameAs`, no profile page
- No author pages exist on the site

### Required: Author Profile Pages
Create `/team/[slug]/page.tsx` with:
- Full name + headshot
- Bio (300–500 words minimum)
- Areas of expertise
- LinkedIn, Twitter/X, and any publication bylines
- List of articles written (links to blog posts)
- `Person` schema with full `sameAs` array

### Author `sameAs` Entries Needed
Update `lib/eeatSchema.ts` `AUTHOR_SAME_AS` constant:

```typescript
const AUTHOR_SAME_AS: Record<string, string[]> = {
  'Andrew J Rohm': ['https://www.linkedin.com/in/andrewrohm'],
  'Andrew Rohm': ['https://www.linkedin.com/in/andrewrohm'],
  'Max D.': [
    'https://www.linkedin.com/in/[max-linkedin-slug]', // ADD REAL URL
  ],
  // Add every author who publishes on the blog
}
```

### Guest Author / Citation Strategy
For posts citing external real estate professionals:
- Add their LinkedIn to `sameAs` in the post schema
- Link their name to their LinkedIn profile with `rel="noopener"`
- This signals real-world connections to Google

---

## 8. Technical Checklist

### Schema
- [x] Add `buildVideoObjectSchema()` to `lib/eeatSchema.ts` ✅ June 9
- [x] Add `buildHowToSchema()` to `lib/eeatSchema.ts` ✅ June 9
- [x] Add `buildAggregateRatingSchema()` to `lib/eeatSchema.ts` ✅ June 9
- [x] Add `buildLocalBusinessSchema()` to `lib/eeatSchema.ts` ✅ June 9
- [ ] Wire `VideoObject` into `app/blog/[slug]/page.tsx` `@graph` (when post has `videoEmbed` field in Sanity)
- [ ] Wire `HowTo` into `app/blog/[slug]/page.tsx` `@graph` (when `isHowTo` = true)
- [ ] Add `AggregateRating` to homepage and contact page schemas
- [ ] Add `ItemList` to `/case-studies` page
- [x] Complete `AUTHOR_SAME_AS` for all authors in `lib/eeatSchema.ts` ✅ June 9 (Andrew, Max, Nako, SJ, Collins, Alex)

### Pages to Build
- [x] `/about-us` — team index page ✅ June 9
- [x] `/about-us/andrew-rohm` — CEO profile ✅ June 9
- [x] `/about-us/max-de` — CMO profile ✅ June 9
- [x] `/about-us/nako-a` — Web Developer profile ✅ June 9
- [x] `/about-us/sj` — Admin & Operations profile ✅ June 9
- [x] `/about-us/collins` — Google Ads Specialist profile ✅ June 9
- [x] `/about-us/alex` — Sales profile ✅ June 9
- [x] Team data file `data/team.ts` — single source of truth ✅ June 9
- [x] `TeamProfileContent.tsx` — shared profile layout component ✅ June 9
- [x] All 8 pages added to `lib/content-registry.ts` ✅ June 9
- [x] "Team" link added to `Navbar.tsx` ✅ June 9
- [x] Team teaser section added to `/about` page ✅ June 9
- [x] `/public/images/team/` folder created for profile photos ✅ June 9
- [ ] `/luxury-real-estate-marketing` — new pillar page
- [ ] Expand `/real-estate-lead-generation` into full page

### Components to Build
- [ ] `components/blog/RelatedPosts.tsx` — related articles on blog post pages
- [ ] `components/blog/AuthorCard.tsx` — reusable author bio card

### Content in Sanity
- [ ] Add `videoEmbed`, `videoDuration`, `videoThumbnail` fields to Sanity blog schema
- [ ] Add `howToSteps`, `isHowTo` fields to Sanity blog schema
- [ ] Audit all existing blog posts — add FAQ items (minimum 3 per post)
- [ ] Audit all existing blog posts — confirm `dateModified` is current
- [ ] Audit all existing blog posts — add YouTube video embeds where possible

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
| Blog Posts Live | Current count | +30 posts | +72 posts |
| Pages with FAQPage schema | ~0 | 80% of posts | 100% of posts |
| Pages with VideoObject schema | 0 | 20+ posts | 50+ posts |
| Author profile pages | 0 | 2 pages | All active authors |
| Average position for pillar keywords | TBD | Top 20 | Top 10 |

### Monthly Review Process
1. Pull GSC impressions report — compare to prior month
2. Check which new rich result types are appearing (FAQ, Video, HowTo)
3. Review top 10 impression-driving queries — double down with more content in that cluster
4. Identify 0-impression pages — update content + schema
5. Add 1–2 new `AUTHOR_SAME_AS` entries as new authors publish

### Impression Milestone Triggers
- **20K impressions** → Validate topic cluster strategy is working. Double velocity on winning cluster.
- **40K impressions** → Expand to 2 new pillar topics. Begin building backlink acquisition outreach.
- **70K impressions** → Add `AggregateRating` and push for Google Reviews structured data.
- **100K impressions** → Full audit. Identify next 100K gap.

---

## Notes

- **Schema alone will not get to 100K.** It removes blockers and improves CTR on existing impressions. The primary driver is publishing more targeted content consistently.
- **VideoObject schema is the fastest new impression surface** — Google Video is a separate index with much less competition than Web search.
- **FAQ rich results have the highest visible lift** per post — prioritize adding FAQ blocks in Sanity to every existing post before writing new ones.
- The `MeetAgent.tsx` Cheryl Towey issue must be resolved before any outreach or link-building is done — it would undermine any authority signals built elsewhere.

---

**Last Updated:** June 4, 2026
**Owner:** DMR Media Team
**Status:** Active Plan
