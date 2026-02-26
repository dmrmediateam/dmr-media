import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/data/blogPosts';
import { contentRegistry } from '@/lib/content-registry';

type ChangeFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

interface UrlEntry {
  loc: string;
  priority: number;
  changefreq: ChangeFreq;
  lastmod?: string;
}

export async function GET() {
  const rawBase = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dmrmedia.org').replace(/\/$/, '');
  const baseUrl = rawBase.replace(/^https:\/\/dmrmedia\.org(?:\/|$)/, 'https://www.dmrmedia.org');
  const today = new Date().toISOString().split('T')[0];

  // Use content registry for accurate lastmod on all static pages
  const staticUrls: UrlEntry[] = contentRegistry.map((entry) => ({
    loc: `${baseUrl}${entry.slug}`,
    priority: entry.priority,
    changefreq: entry.changeFrequency as ChangeFreq,
    lastmod: entry.modifiedDate,
  }));

  const urls: UrlEntry[] = [...staticUrls];

  try {
    const posts = await getAllBlogPosts();
    // Filter out posts without valid slugs
    const validPosts = posts.filter((post) => post.slug?.current);
    validPosts.forEach((post) => {
      urls.push({
        loc: `${baseUrl}/blog/${post.slug.current}`,
        priority: 0.6,
        changefreq: 'weekly',
        lastmod: post.publishedAt ? post.publishedAt.split('T')[0] : today,
      });
    });
  } catch (error) {
    console.error('Failed to append blog posts to sitemap:', error);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod || today}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}

