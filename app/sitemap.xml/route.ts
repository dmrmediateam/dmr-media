import { NextResponse } from 'next/server';

export async function GET() {
  // Define your site's base URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dmrmedia.org';
  
  // Define all your main pages
  const routes = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: 'about', priority: '0.8', changefreq: 'monthly' },
    { path: 'contact', priority: '0.8', changefreq: 'monthly' },
    { path: 'blog', priority: '0.8', changefreq: 'weekly' },
    { path: 'case-studies', priority: '0.8', changefreq: 'monthly' },
    { path: 'calendar', priority: '0.7', changefreq: 'monthly' },
    { path: 'privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { path: 'terms-and-conditions', priority: '0.3', changefreq: 'yearly' },
    { path: 'accessibility', priority: '0.3', changefreq: 'yearly' },
    // Service pages
    { path: 'seo-optimization', priority: '0.9', changefreq: 'weekly' },
    { path: 'google-ads-management', priority: '0.9', changefreq: 'weekly' },
    { path: 'property-marketing', priority: '0.9', changefreq: 'weekly' },
    { path: 'analytics-reporting', priority: '0.9', changefreq: 'weekly' },
    // Case study pages
    { path: 'case-study/jade-legendary-real-estate', priority: '0.7', changefreq: 'monthly' },
    { path: 'case-study/michael-seo-transformation', priority: '0.7', changefreq: 'monthly' },
    { path: 'case-study/rick-visions-first-realty', priority: '0.7', changefreq: 'monthly' },
    // Community pages
    { path: 'communities/sussex-county', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/warren-county', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/hackettstown', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/andover', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/byram', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/blairstown', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/chester', priority: '0.6', changefreq: 'monthly' },
    { path: 'communities/washington', priority: '0.6', changefreq: 'monthly' },
  ];

  // Service locations
  const services = ['seo-optimization', 'google-ads-management', 'property-marketing', 'analytics-reporting'];
  const cities = ['new-york-ny', 'los-angeles-ca', 'chicago-il', 'houston-tx', 'phoenix-az'];
  
  // Add all service location pages
  services.forEach(service => {
    cities.forEach(city => {
      routes.push({
        path: `${service}/${city}`,
        priority: '0.7',
        changefreq: 'monthly'
      });
    });
  });

  // Get current date for lastmod
  const currentDate = new Date().toISOString().split('T')[0];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `  <url>
    <loc>${baseUrl}/${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}

