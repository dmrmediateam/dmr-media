import { createClient } from '@sanity/client'
import * as fs from 'fs'
import { parse } from 'csv-parse/sync'

// Initialize Sanity client with write token
const client = createClient({
  projectId: 'gvyjxd5j',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skFJVAGZZ3j8rnQH15eQhR1SqjNo5lw0QzwI9XFQEqWIGTqm6SQbH6yJ1fX6Ze8XuamfAUH6enfSvhJsTe1wKu3U9TOaWe7gkMH6muU4hPspM0WXls35oCTxDFOFAOUkw8M02XKLNQkD0xqDD7W2h5v9YX5wl0e9o9LUIIZ7E8ZCwpNCXe8k',
  useCdn: false,
})

// Function to strip HTML tags and get plain text
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

// Function to convert HTML to Sanity block content
function htmlToBlocks(html: string): any[] {
  if (!html || html.trim() === '') {
    return []
  }
  
  // Strip HTML and convert to simple blocks
  const text = stripHtml(html)
  
  // Split into paragraphs (basic approach)
  const paragraphs = text.split('\n\n').filter(p => p.trim().length > 0)
  
  if (paragraphs.length === 0) {
    return [{
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: text.substring(0, 5000) }],
    }]
  }
  
  return paragraphs.map(paragraph => ({
    _type: 'block',
    style: 'normal',
    children: [{ _type: 'span', text: paragraph.substring(0, 5000) }],
  }))
}

// Function to determine category from title or content
function determineCategory(title: string, content: string): string {
  const titleLower = title.toLowerCase()
  const contentLower = content.toLowerCase()
  
  if (titleLower.includes('seo') || contentLower.includes('search engine')) {
    return 'SEO Strategy'
  }
  if (titleLower.includes('google ads') || titleLower.includes('ppc')) {
    return 'Google Ads'
  }
  if (titleLower.includes('luxury') || titleLower.includes('million dollar')) {
    return 'Real Estate Marketing'
  }
  if (titleLower.includes('marketing') || titleLower.includes('brand')) {
    return 'Marketing Insights'
  }
  if (titleLower.includes('content') || titleLower.includes('blog')) {
    return 'Content Strategy'
  }
  
  return 'Digital Marketing'
}

// Function to create default author if not exists
async function ensureAuthorExists() {
  const authorId = 'dmr-media-team'
  
  try {
    const existingAuthor = await client.fetch(`*[_type == "author" && _id == $id][0]`, { id: authorId })
    
    if (!existingAuthor) {
      console.log('Creating default author...')
      await client.create({
        _id: authorId,
        _type: 'author',
        name: 'DMR Media Team',
        slug: { _type: 'slug', current: 'dmr-media-team' },
        bio: 'Expert team specializing in luxury real estate marketing, SEO, and Google Ads.',
      })
      console.log('✓ Default author created')
    }
    
    return authorId
  } catch (error) {
    console.error('Error ensuring author exists:', error)
    throw error
  }
}

// Function to calculate read time
function calculateReadTime(content: string): string {
  const words = stripHtml(content).split(/\s+/).length
  const minutes = Math.ceil(words / 200) // Average reading speed
  return `${minutes} min read`
}

// Define CSV record type
interface BlogCSVRecord {
  Name?: string
  Slug?: string
  'Main Content'?: string
  'Meta Description'?: string
  'Blog Image'?: string
  'Published On'?: string
  'Created On'?: string
  Draft?: string
  Archived?: string
  [key: string]: string | undefined
}

// Main import function
async function importBlogs(csvPath: string) {
  try {
    console.log('🚀 Starting blog import to Sanity CMS...')
    console.log('📂 Reading CSV file:', csvPath)
    
    // Read CSV file
    const csvContent = fs.readFileSync(csvPath, 'utf-8')
    
    // Parse CSV
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    }) as BlogCSVRecord[]
    
    console.log(`📊 Found ${records.length} blog posts to import\n`)
    
    // Ensure default author exists
    const authorId = await ensureAuthorExists()
    
    let imported = 0
    let skipped = 0
    
    // Import each blog post
    for (let i = 0; i < records.length; i++) {
      const record = records[i]
      
      // Skip if it's a draft or archived
      if (record.Draft === 'true' || record.Archived === 'true') {
        console.log(`⊙ Skipping draft/archived post: ${record.Name}`)
        skipped++
        continue
      }
      
      const title = record.Name || 'Untitled Post'
      const slug = record.Slug || title.toLowerCase().replace(/\s+/g, '-')
      const content = record['Main Content'] || ''
      const excerpt = record['Meta Description'] || ''
      const imageUrl = record['Blog Image'] || ''
      const publishedAt = record['Published On'] || record['Created On'] || new Date().toISOString()
      
      console.log(`\n[${i + 1}/${records.length}] Processing: ${title}`)
      
      // Check if post already exists
      const existingPost = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0]`,
        { slug }
      )
      
      if (existingPost) {
        console.log(`  ⊙ Post already exists, skipping...`)
        skipped++
        continue
      }
      
      // Determine category
      const category = determineCategory(title, content)
      console.log(`  📁 Category: ${category}`)
      
      // Convert HTML to blocks
      const bodyBlocks = htmlToBlocks(content)
      
      // Calculate read time
      const readTime = calculateReadTime(content)
      
      // Create blog post
      const post: any = {
        _type: 'post',
        title: title,
        slug: { _type: 'slug', current: slug },
        author: { _type: 'reference', _ref: authorId },
        category: category,
        description: excerpt || content.substring(0, 200).replace(/<[^>]*>/g, '') + '...',
        publishedAt: new Date(publishedAt).toISOString(),
        readTime: readTime,
        body: bodyBlocks,
      }
      
      // Add image if available (as external URL reference)
      if (imageUrl && imageUrl.startsWith('http')) {
        console.log(`  🖼️  Image URL found`)
        // Note: External images would need to be uploaded to Sanity's asset system
        // For now, we'll skip the image or you can manually upload later
      }
      
      await client.create(post)
      console.log(`  ✅ Created successfully`)
      imported++
    }
    
    console.log('\n' + '='.repeat(50))
    console.log('✅ Import completed successfully!')
    console.log(`📈 Total posts imported: ${imported}`)
    console.log(`⊙ Total posts skipped: ${skipped}`)
    console.log('='.repeat(50))
    
  } catch (error) {
    console.error('❌ Error during import:', error)
    throw error
  }
}

// Run the import
const csvPath = process.argv[2] || './DMR - Blogs (1).csv'

if (!fs.existsSync(csvPath)) {
  console.error(`❌ CSV file not found: ${csvPath}`)
  console.log('Usage: npm run import-blogs [path-to-csv-file]')
  process.exit(1)
}

importBlogs(csvPath)
  .then(() => {
    console.log('\n🎉 All done! Visit https://dmr-media.sanity.studio/ to view your posts.')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n❌ Import failed:', error)
    process.exit(1)
  })
