# Schema Markup for Blog Posts - Setup Instructions

## Overview
Schema markup (JSON-LD) has been added to blog posts to help search engines understand your content better. This improves SEO and can enable rich snippets in search results.

## What Was Added

### 1. Sanity Schema Updates
The blog post schema in `sanity/schemas/post.ts` now includes optional schema markup fields:
- **Date Modified**: Last modification date (defaults to publishedAt if not set)
- **Article Section**: Custom article section (defaults to category if not set)

### 2. Blog Post Page Updates
The blog post page (`app/blog/[slug]/page.tsx`) now automatically generates Article schema markup including:
- Article headline, description, and image
- Publication and modification dates
- Author information
- Publisher (DMR Media) information
- Article section and keywords

## How to Use Schema Markup Fields in Sanity

### Step 1: Access Sanity Studio
1. Navigate to your Sanity Studio (usually at `/studio` or your configured URL)
2. Open any blog post for editing

### Step 2: Find Schema Markup Section
1. Scroll down to the **"Schema Markup (Optional)"** section
2. This section appears after the SEO fields

### Step 3: Fill Optional Fields (Optional)
- **Date Modified**: Only set this if the article has been significantly updated after publication. If left empty, the published date will be used.
- **Article Section**: Only set this if you want a different section than the category. If left empty, the category will be used.

### Step 4: Save
- Click "Publish" to save your changes
- The schema markup will automatically be generated on the frontend

## Automatic Schema Generation

Even if you don't fill in the schema markup fields, the system will automatically generate complete Article schema using:
- **Headline**: Post title
- **Description**: Post description
- **Image**: Main image
- **Date Published**: Published date
- **Date Modified**: Published date (or custom date if set)
- **Author**: Author name and image
- **Publisher**: DMR Media organization info
- **Article Section**: Category (or custom section if set)
- **Keywords**: Tags (if available)

## Testing Schema Markup

### Google Rich Results Test
1. Visit: https://search.google.com/test/rich-results
2. Enter your blog post URL
3. Check for any errors or warnings

### Schema.org Validator
1. Visit: https://validator.schema.org/
2. Enter your blog post URL
3. Verify the Article schema is properly structured

## What Gets Generated

The schema markup includes:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Post Title",
  "description": "Your post description",
  "image": "Image URL",
  "datePublished": "2025-01-15T10:00:00Z",
  "dateModified": "2025-01-15T10:00:00Z",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "DMR Media"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://dmrmedia.org/blog/your-post-slug"
  },
  "articleSection": "Category Name",
  "keywords": "tag1, tag2, tag3"
}
```

## Notes

- Schema markup is automatically generated for all blog posts
- No manual JSON-LD code needs to be written
- The schema follows Schema.org Article type standards
- All fields are optional in Sanity - defaults are provided automatically
- The schema is inserted in the `<head>` of each blog post page

## Troubleshooting

If schema markup isn't appearing:
1. Check that the blog post has all required fields (title, description, mainImage, author, publishedAt)
2. Verify the Sanity query includes `schemaMarkup` field
3. Check browser console for any JSON parsing errors
4. Use Google's Rich Results Test to validate the schema
