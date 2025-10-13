# DMR Media - Sanity Studio Guide

## 🎉 Your Sanity Studio is Live!

**Studio URL:** https://dmr-media.sanity.studio/

## 📋 Project Details

- **Project ID:** `gvyjxd5j`
- **Dataset:** `production`
- **App ID:** `smdevccx8icmgxhe3v98ym7f`

## 🔐 Access & Login

Visit https://dmr-media.sanity.studio/ and log in with your Sanity account credentials.

## 📝 Content Management

### Blog Posts

Your studio is configured with the following content types:

#### 1. **Blog Posts** (`post`)
Create and manage blog articles with:
- Title & SEO-friendly slug
- Category (SEO Strategy, Google Ads, Marketing Insights, etc.)
- Description/Excerpt
- Main Image with alt text
- Author reference
- Publication date
- Read time estimate
- Rich text body content
- Tags
- SEO metadata (meta title & description)

#### 2. **Authors** (`author`)
Manage content authors with:
- Name & slug
- Profile image
- Bio

### Available Categories

- **SEO Strategy** - SEO tips, techniques, and best practices
- **Google Ads** - Google Ads campaign insights and strategies
- **Marketing Insights** - General marketing wisdom and trends
- **Real Estate Marketing** - Specialized real estate marketing content
- **Content Strategy** - Content planning and execution
- **Digital Marketing** - Broader digital marketing topics
- **Case Studies** - Success stories and client results

## 📥 Importing Blog Posts from CSV

To import blog posts from a CSV file:

```bash
npm run import-blogs path/to/your/blogs.csv
```

**CSV Format:**
```csv
title,content,excerpt,category,publishedAt
"Your Blog Title","Full blog content here","Short excerpt","SEO Strategy","2024-01-15"
```

The import script will automatically:
- Create a default "DMR Media Team" author
- Generate SEO-friendly slugs
- Create categories as needed
- Skip duplicate posts

## 🚀 Deployment Commands

### Deploy Studio Updates
```bash
npm run sanity:deploy
```

### Build Studio Locally
```bash
npm run sanity:build
```

### Run Studio Locally (for testing)
```bash
npm run sanity
```
Then visit: http://localhost:3333

## 🔄 Syncing Content to Website

Your Next.js website is already configured to fetch content from Sanity CMS:

1. Blog posts will automatically appear at `/blog`
2. Individual posts at `/blog/[slug]`
3. Content updates in Sanity Studio appear immediately (with CDN cache)

## 🛠 API Configuration

Your website uses these environment variables (already configured in `.env.local`):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=gvyjxd5j
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token-here
```

## 📚 Managing Content

### Creating Your First Blog Post

1. Visit https://dmr-media.sanity.studio/
2. Click "Blog Post" in the sidebar
3. Click "Create" or the "+" button
4. Fill in all required fields:
   - Title
   - Slug (auto-generated, but editable)
   - Category
   - Description
   - Main Image (upload an image)
   - Author (select DMR Media Team)
   - Published At (date/time)
   - Read Time (e.g., "5 min read")
   - Body (rich text content)
5. Click "Publish"

### Creating an Author

1. Go to "Author" in the sidebar
2. Click "Create"
3. Add name, slug, image, and bio
4. Publish

## 🔒 Security & Permissions

- Your API token has write access for importing content
- Studio access is controlled via Sanity account permissions
- Manage team members at: https://www.sanity.io/manage

## 🆘 Support & Documentation

- **Sanity Docs:** https://www.sanity.io/docs
- **Studio Handbook:** https://www.sanity.io/docs/studio
- **Schema Guide:** https://www.sanity.io/docs/schema-types

## 📊 Next Steps

1. ✅ Studio is deployed and accessible
2. 📝 Create your first blog post or import from CSV
3. 🎨 Customize schemas if needed (edit `sanity/schemas/*.ts`)
4. 👥 Invite team members to collaborate
5. 📱 Configure webhooks for real-time updates (optional)

---

**Questions?** Check the Sanity documentation or contact your development team.

