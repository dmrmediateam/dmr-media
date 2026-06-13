import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/data/blogPosts';
import { getAllAuthorSlugs } from '@/data/authors';
import { listMls } from '@/data/mlsRegistry';
import { contentRegistry } from '@/lib/content-registry';

/**
 * Former templated `/{service}/[location]` routes 301 to the parent service URL.
 * Exclude any such URLs from the sitemap if they ever appear in a data source.
 */
const REDIRECT_ONLY_SERVICE_PREFIXES = new Set([
  'seo-optimization',
  'google-ads-management',
  'chatgpt-ads-real-estate',
  'luxury-condo-websites',
  'single-property-websites',
  'websites-for-new-developments',
  'property-marketing',
  'analytics-reporting',
  'luxury-development-marketing',
  'real-estate-lead-generation',
]);

function isRemovedServiceLocationUrl(loc: string, baseUrl: string): boolean {
  const prefix = `${baseUrl}/`;
  if (!loc.startsWith(prefix)) return false;
  const path = loc.slice(prefix.length);
  const segments = path.split('/').filter(Boolean);
  if (segments.length !== 2) return false;
  return REDIRECT_ONLY_SERVICE_PREFIXES.has(segments[0]!);
}

type ChangeFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

interface UrlEntry {
  loc: string;
  priority: number;
  changefreq: ChangeFreq;
  lastmod?: string;
}

export async function GET() {
  const rawBase = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dmrmedia.org').replace(/\/$/, '');
  // Sitemap must use canonical www URLs - force www.dmrmedia.org
  const baseUrl =
    rawBase.includes('dmrmedia.org') && !rawBase.includes('www.')
      ? 'https://www.dmrmedia.org'
      : rawBase;
  const today = new Date().toISOString().split('T')[0];

  // Use content registry for accurate lastmod on all static pages
  const staticUrls: UrlEntry[] = contentRegistry.map((entry) => ({
    loc: `${baseUrl}${entry.slug}`,
    priority: entry.priority,
    changefreq: entry.changeFrequency as ChangeFreq,
    lastmod: entry.modifiedDate,
  }));

  const urls: UrlEntry[] = [...staticUrls];

  // MLS detail pages — single source of truth: data/mlsRegistry.ts (see docs/mls-directory.md)
  for (const mls of listMls()) {
    urls.push({
      loc: `${baseUrl}/mls-integrations/${mls.slug}`,
      priority: 0.55,
      changefreq: 'monthly',
      lastmod: today,
    });
  }

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

  try {
    const authorSlugs = await getAllAuthorSlugs();
    authorSlugs.forEach((slug) => {
      urls.push({
        loc: `${baseUrl}/about/${slug}`,
        priority: 0.65,
        changefreq: 'monthly',
        lastmod: today,
      });
    });
  } catch (error) {
    console.error('Failed to append author profiles to sitemap:', error);
  }

  const filteredUrls = urls.filter(
    (entry) =>
      !entry.loc.includes('/brokerages') &&
      !entry.loc.includes('/directory') &&
      !entry.loc.includes('/about-us') &&
      !isRemovedServiceLocationUrl(entry.loc, baseUrl),
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${filteredUrls
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

