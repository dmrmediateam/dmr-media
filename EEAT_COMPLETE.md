# Complete EEAT Implementation - DMR Media Site

**Date:** June 10, 2026  
**Status:** In Progress (Major Components Complete)

---

## Overview

This document tracks all E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals implemented across dmrmedia.org to support growth from 10K → 100K monthly search impressions.

---

## 1. Experience (Personal, First-Hand Expertise)

### ✅ Completed:

#### Team Profile Pages (`/about-us/*`)
**Status:** COMPLETE  
**Impact:** High

- 6 full team member profiles with bios, roles, expertise
- Person schema with `@id`, `jobTitle`, `knowsAbout`, `worksFor`
- `sameAs` links to LinkedIn and profile URLs
- Professional headshot placeholders (awaiting real photos)
- Linked from main navigation

**Files:**
- `data/team.ts` - Single source of truth
- `app/about-us/page.tsx` - Team index with @graph
- `app/about-us/[slug]/page.tsx` - Individual profiles (6 pages)
- `app/about-us/TeamProfileContent.tsx` - Shared layout

**Schema Example:**
```json
{
  "@type": "Person",
  "@id": "https://www.dmrmedia.org/about-us/andrew-rohm#person",
  "name": "Andrew Rohm",
  "jobTitle": "CEO & Founder",
  "knowsAbout": ["SEO Strategy", "Digital Marketing", "Real Estate Marketing"],
  "worksFor": { "@id": "https://www.dmrmedia.org/#organization" },
  "sameAs": [
    "https://www.linkedin.com/in/andrewrohm",
    "https://www.dmrmedia.org/about-us/andrew-rohm"
  ]
}
```

---

#### Blog Author Links
**Status:** COMPLETE  
**Impact:** Medium-High

- Author names clickable in blog hero section
- "View Profile" button in author card at article bottom
- Person schema in blog posts includes `sameAs` to team profiles
- Dynamic pull from Sanity `teamProfileSlug` field

**Files:**
- `app/blog/[slug]/page.tsx` - Blog post template
- `sanity/schemas/author.ts` - Author schema with team links
- `lib/eeatSchema.ts` - `buildPersonSchema()` prioritizes Sanity data

---

#### Case Studies
**Status:** COMPLETE  
**Impact:** High

- 7 detailed case study pages
- Real client results with metrics
- Before/after data
- Client testimonials embedded

**Pages:**
- `/case-study/willow-brook-realty`
- `/case-study/jade-legendary-real-estate`
- `/case-study/michael-seo-transformation`
- `/case-study/rick-visions-first-realty`
- `/case-study/hitchcock-properties`
- `/case-study/marquis-farwell-group`
- `/case-study/eagan-luxury-real-estate`

---

### ⏳ In Progress:

#### Video Testimonials
**Status:** EXISTS (needs VideoObject schema)  
**Files:** `components/VideoTestimonials.tsx`  
**Next Step:** Add VideoObject schema to each video

---

### ❌ Missing:

- [ ] Client case study PDFs/downloads
- [ ] Team member LinkedIn activity feed
- [ ] Industry conference speaking engagements section
- [ ] Published articles on external sites (backlinks)

---

## 2. Expertise (Deep Knowledge)

### ✅ Completed:

#### Blog System with Comprehensive Schema
**Status:** COMPLETE  
**Impact:** Very High

**Schemas Implemented:**
- ✅ Article schema (BlogPosting)
- ✅ Person schema (author)
- ✅ Organization schema (publisher)
- ✅ FAQPage schema (when FAQ items exist)
- ✅ @graph structure (all schemas in one)

**Files:**
- `app/blog/[slug]/page.tsx` - Blog post with schema
- `lib/eeatSchema.ts` - All schema builders
- `components/BlogContent.tsx` - Rich text rendering
- `components/BlogFAQ.tsx` - FAQ section

**Schema Example:**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "...#organization" },
    { "@type": "Person", "@id": "...#person-max-de" },
    { "@type": "BlogPosting", "@id": "...#article" },
    { "@type": "FAQPage", "@id": "...#faq" }
  ]
}
```

---

#### Table of Contents
**Status:** COMPLETE (June 10)  
**Impact:** Medium

- Sticky sidebar on desktop (1280px+)
- IntersectionObserver scroll spy
- Auto-highlights current section
- Smooth scroll on click
- H2 and H3 hierarchy

**Files:**
- `components/blog/TableOfContents.tsx`
- `lib/extractHeadings.ts`

**Benefits:**
- Shows content structure to crawlers
- Improves readability
- Reduces bounce rate
- Signals quality content

---

#### Related Posts
**Status:** COMPLETE (June 10)  
**Impact:** High

- Smart scoring: category + tag matching
- Shows top 3 relevant articles
- Internal linking spider web
- Topic cluster reinforcement

**Files:**
- `components/blog/RelatedPosts.tsx`

**Algorithm:**
```
Score = (Same Category ? 10 : 0) + (Matching Tags × 5)
```

---

#### Service Pages with Schema
**Status:** COMPLETE  
**Impact:** Medium

All service pages have Service schema via `SEOWrapper`:
- `/google-ads-management`
- `/seo-optimization`
- `/property-marketing`
- `/real-estate-website-design`
- `/real-estate-lead-generation`

**Schema Auto-Injected:**
```json
{
  "@type": "Service",
  "name": "Page Title",
  "description": "Page Description",
  "provider": { "@id": "...#organization" }
}
```

**Files:**
- `components/SEOWrapper.tsx`
- `lib/content-registry.ts`

---

### ⏳ In Progress:

#### Sanity Schema Extensions
**Status:** PLANNED  
**Files:** `sanity/schemas/post.ts`

**To Add:**
- [ ] `videoEmbed` (url)
- [ ] `videoDuration` (ISO 8601 string)
- [ ] `videoThumbnail` (image)
- [ ] `isHowTo` (boolean)
- [ ] `howToSteps` (array of {name, text, image})

---

### ❌ Missing:

- [ ] VideoObject schema in blog posts (P1 priority)
- [ ] HowTo schema in tutorial posts (P1 priority)
- [ ] Certifications/credentials page
- [ ] Tools/resources page
- [ ] Glossary of terms
- [ ] Original research/data studies

---

## 3. Authoritativeness (Industry Recognition)

### ✅ Completed:

#### Organization Schema
**Status:** COMPLETE  
**Impact:** High

Full Organization schema with:
- Business name, logo, URL
- Physical address (Appleton, WI)
- Contact info (email, phone)
- `sameAs` to social profiles

**Social Profiles:**
- LinkedIn company page
- Trustpilot reviews
- SEMrush Agency Partners
- Instagram

**Files:**
- `lib/eeatSchema.ts` - `buildOrganizationSchema()`

---

#### Content Registry
**Status:** COMPLETE  
**Impact:** Medium

Single source of truth for all page metadata:
- 220+ pages registered
- `publishDate`, `modifiedDate` tracking
- Priority and changeFrequency for sitemap
- Category classification

**Files:**
- `lib/content-registry.ts`

---

#### Sitemap.xml
**Status:** COMPLETE  
**Impact:** Medium

Dynamic sitemap generation:
- Auto-updates from content registry
- Proper lastmod dates
- Priority signals
- ChangeFrequency hints

**Files:**
- `app/sitemap.xml/route.ts`

---

### ⏳ In Progress:

#### AggregateRating Schema
**Status:** BUILT, NOT WIRED  
**Impact:** Very High (star ratings in SERPs)

Function exists in `lib/eeatSchema.ts`:
```typescript
buildAggregateRatingSchema(
  ratingValue: 5.0,
  reviewCount: 47
)
```

**Next Step:** Wire into homepage + contact page

---

### ❌ Missing:

- [ ] Review schema on testimonials
- [ ] ItemList schema on /case-studies
- [ ] Press mentions page
- [ ] Awards/recognition page
- [ ] Podcast appearances
- [ ] Speaking engagements list

---

## 4. Trustworthiness (Reliability & Transparency)

### ✅ Completed:

#### LocalBusiness Schema
**Status:** BUILT, NOT WIRED  
**Impact:** Medium (local trust + geo ranking)

Function exists in `lib/eeatSchema.ts`:
```typescript
buildLocalBusinessSchema({
  geo: { latitude: 44.2619, longitude: -88.4154 },
  priceRange: '$$$',
  areaServed: 'United States'
})
```

**Next Step:** Wire into homepage

---

#### Contact Page
**Status:** COMPLETE  
**Files:** `app/contact/page.tsx`

- Full contact form
- Email, phone, address visible
- ContactPoint in Organization schema
- Google Calendar integration

---

#### Privacy Policy & Terms
**Status:** EXISTS  
**Files:** `app/privacy-policy/page.tsx`, `app/terms-of-service/page.tsx`

---

### ❌ Missing:

- [ ] About page video/story
- [ ] Client testimonials with Review schema
- [ ] Trust badges (Google Partner, etc.)
- [ ] Money-back guarantee page
- [ ] Transparent pricing page
- [ ] Team photos (6 headshots needed)

---

## 5. Technical SEO Foundation

### ✅ Completed:

#### Core Infrastructure
- [x] Next.js 15 with App Router
- [x] Server Components for performance
- [x] Image optimization (Next.js Image)
- [x] Metadata API for SEO tags
- [x] Canonical URLs on all pages
- [x] OpenGraph tags
- [x] robots.txt
- [x] sitemap.xml (dynamic)

#### Analytics & Tracking
- [x] Google Tag Manager (GTM-TDX95FLH)
- [x] Google Analytics 4 (AW-16882640022)
- [x] Microsoft Clarity
- [x] Search Console setup (assumed)

#### Schema Architecture
- [x] @graph structure for multi-schema pages
- [x] Organization schema (global)
- [x] Person schema (authors + team)
- [x] Article schema (blog posts)
- [x] FAQPage schema (conditional)
- [x] Service schema (auto-injected)
- [x] BreadcrumbList schema (auto-injected)

---

## 6. Content Gaps Analysis

### Blog Post Audit

**Current State:**
- 118+ blog posts published
- Most have FAQ items ✅
- Some missing H2 structure ⚠️
- Inconsistent tag usage ⚠️

**Target State:**
- Minimum 3 FAQ items per post
- 4+ H2 headings per post (for ToC)
- 3+ tags per post (for related posts)
- VideoObject where YouTube embeds exist
- HowTo schema for tutorial posts

---

### Topic Cluster Status

**Pillar 1: Google Ads for Real Estate**
- Pillar page: `/google-ads-management` ✅
- Spoke articles: 6+ needed 🔄

**Pillar 2: SEO for Real Estate**
- Pillar page: `/seo-optimization` ✅
- Spoke articles: 6+ needed 🔄

**Pillar 3: Luxury Real Estate Marketing**
- Pillar page: `/luxury-real-estate-marketing` ❌ NEEDS CREATION
- Spoke articles: 6+ needed 🔄

**Pillar 4: Real Estate Lead Generation**
- Pillar page: `/real-estate-lead-generation` ✅
- Spoke articles: 6+ needed 🔄

---

## 7. Priority Action Items

### 🔴 P1 - High Impact, Fast to Ship

| # | Task | Status | EEAT Impact |
|---|---|---|---|
| 1 | Add VideoObject schema to posts with embeds | ❌ TODO | Expertise: New impression surface |
| 2 | Add HowTo schema to tutorial posts | ❌ TODO | Expertise: Rich results |
| 3 | Audit all posts for ≥3 FAQ items | ⏳ IN PROGRESS | Expertise: FAQ rich results |
| 4 | Upload 6 team member headshots | ❌ TODO | Experience: Real people |
| 5 | Update Sanity authors with teamProfileSlug | ⏳ IN PROGRESS | Experience: Verify humans |

### 🟡 P2 - High Impact, Moderate Work

| # | Task | Status | EEAT Impact |
|---|---|---|---|
| 6 | Wire AggregateRating schema to homepage | ❌ TODO | Authority: Star ratings |
| 7 | Wire LocalBusiness schema to homepage | ❌ TODO | Trust: Local signals |
| 8 | Add Review schema to testimonials | ❌ TODO | Authority: Social proof |
| 9 | Fix MeetAgent.tsx client template leak | ❌ TODO | Trust: Remove confusion |
| 10 | Add ItemList schema to /case-studies | ❌ TODO | Authority: Enhanced display |

### 🟢 P3 - Content Infrastructure

| # | Task | Status | EEAT Impact |
|---|---|---|---|
| 11 | Build `/luxury-real-estate-marketing` pillar | ❌ TODO | Expertise: Topic authority |
| 12 | Publish 24 spoke articles (4 per cluster) | ❌ TODO | Expertise: Volume signal |
| 13 | Add certifications page | ❌ TODO | Authority: Credentials |
| 14 | Create tools/resources page | ❌ TODO | Expertise: Helpful content |
| 15 | Build glossary of terms | ❌ TODO | Expertise: Knowledge depth |

---

## 8. Tracking & Measurement

### Current Metrics (Baseline)
- Monthly search impressions: ~10,000
- Average position: TBD (needs GSC data)
- Pages with structured data: 220/220 (100%)
- Pages with FAQPage schema: ~60% (estimated)
- Team profiles: 6/6 (100%)

### Target Metrics (6 months)
- Monthly search impressions: 100,000 (10x growth)
- Average position: Top 10 for pillar keywords
- Pages with FAQPage schema: 100%
- Pages with VideoObject schema: 50+
- Blog posts published: +72 (total ~190)

### KPI Milestones
- **20K impressions** → Validate topic cluster working
- **40K impressions** → Expand to 2 new pillars
- **70K impressions** → Add AggregateRating + Reviews
- **100K impressions** → Full audit, plan next 100K

---

## 9. Files Reference

### Schema & EEAT Core
```
lib/eeatSchema.ts                    - All schema builders
lib/content-registry.ts              - Page metadata registry
components/SEOWrapper.tsx            - Auto-inject schemas
```

### Team Profiles
```
data/team.ts                         - Team data
app/about-us/page.tsx                - Team index
app/about-us/[slug]/page.tsx         - Individual profiles (6)
app/about-us/TeamProfileContent.tsx  - Shared layout
```

### Blog System
```
app/blog/[slug]/page.tsx             - Blog post template
components/BlogContent.tsx           - Rich text rendering
components/BlogFAQ.tsx               - FAQ section
components/blog/RelatedPosts.tsx     - Related articles
components/blog/TableOfContents.tsx  - ToC with scroll spy
lib/extractHeadings.ts               - Heading extraction
```

### Sanity Integration
```
sanity/schemas/author.ts             - Author schema
sanity/schemas/post.ts               - Blog post schema
data/blogPosts.ts                    - Blog queries
lib/sanity.ts                        - Sanity client
```

---

## 10. Documentation

### Available Guides
- [x] `100ksearch.md` - Complete 10K→100K strategy
- [x] `SANITY_TEAM_INTEGRATION.md` - Author ↔ team linking
- [x] `TOC_RELATEDPOSTS_COMPLETE.md` - ToC + related posts
- [x] `EEAT_COMPLETE.md` (this file) - Full EEAT audit

### Next Documents Needed
- [ ] VideoObject implementation guide
- [ ] HowTo schema implementation guide
- [ ] AggregateRating wiring guide
- [ ] Content publishing SOPs

---

## Summary

### What's Complete ✅
- Team profile infrastructure (6 pages + schemas)
- Blog system with Article + Person + Organization schemas
- Table of Contents with scroll spy
- Related Posts with smart matching
- Sanity integration with dynamic author links
- Content registry with 220+ pages
- Sitemap.xml generation
- Service schema auto-injection

### What's In Progress ⏳
- Sanity author profile links (schema deployed, needs content entry)
- FAQ audit of existing posts
- Team member headshots

### What's Missing ❌
- VideoObject schema (P1)
- HowTo schema (P1)
- AggregateRating wiring (P2)
- LocalBusiness wiring (P2)
- Review schema on testimonials (P2)
- 72 new blog posts (P3)
- Luxury pillar page (P3)

---

**Last Updated:** June 10, 2026  
**Status:** 60% Complete (Core infrastructure done, content work remaining)  
**Next Review:** After P1 tasks complete
