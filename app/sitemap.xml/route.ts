import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/data/blogPosts';

type ChangeFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

interface UrlEntry {
  loc: string;
  priority: number;
  changefreq: ChangeFreq;
  lastmod?: string;
}

export async function GET() {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://dmrmedia.org').replace(/\/$/, '');
  const today = new Date().toISOString().split('T')[0];

  const staticPages: UrlEntry[] = [
    { loc: `${baseUrl}/`, priority: 1, changefreq: 'weekly' },
    { loc: `${baseUrl}/about`, priority: 0.8, changefreq: 'monthly' },
    { loc: `${baseUrl}/services`, priority: 0.8, changefreq: 'monthly' },
    { loc: `${baseUrl}/contact`, priority: 0.8, changefreq: 'monthly' },
    { loc: `${baseUrl}/blog`, priority: 0.8, changefreq: 'weekly' },
    { loc: `${baseUrl}/case-studies`, priority: 0.7, changefreq: 'monthly' },
    { loc: `${baseUrl}/calendar`, priority: 0.6, changefreq: 'monthly' },
    { loc: `${baseUrl}/privacy-policy`, priority: 0.3, changefreq: 'yearly' },
    { loc: `${baseUrl}/terms-and-conditions`, priority: 0.3, changefreq: 'yearly' },
    { loc: `${baseUrl}/accessibility`, priority: 0.3, changefreq: 'yearly' },
  ];

  const servicePractices = [
    'seo-optimization',
    'google-ads-management',
    'property-marketing',
    'analytics-reporting',
    'services',
  ];

  const caseStudies = [
    'case-study/jade-legendary-real-estate',
    'case-study/michael-seo-transformation',
    'case-study/rick-visions-first-realty',
  ];

  const communityPages = [
    'communities/sussex-county',
    'communities/warren-county',
    'communities/hackettstown',
    'communities/andover',
    'communities/byram',
    'communities/blairstown',
    'communities/chester',
    'communities/washington',
  ];

  const serviceMarkets = ['new-york-ny', 'los-angeles-ca', 'chicago-il', 'houston-tx', 'phoenix-az'];

  const dynamicStatic = [
    ...servicePractices.map<UrlEntry>((path) => ({
      loc: `${baseUrl}/${path}`,
      priority: 0.75,
      changefreq: 'weekly',
    })),
    ...caseStudies.map<UrlEntry>((path) => ({
      loc: `${baseUrl}/${path}`,
      priority: 0.6,
      changefreq: 'monthly',
    })),
    ...communityPages.map<UrlEntry>((path) => ({
      loc: `${baseUrl}/${path}`,
      priority: 0.5,
      changefreq: 'monthly',
    })),
    ...servicePractices
      .filter((path) => path !== 'services')
      .flatMap<UrlEntry>((service) =>
        serviceMarkets.map((market) => ({
          loc: `${baseUrl}/${service}/${market}`,
          priority: 0.55,
          changefreq: 'monthly',
        })),
      ),
  ];

  const urls: UrlEntry[] = [...staticPages, ...dynamicStatic];

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

