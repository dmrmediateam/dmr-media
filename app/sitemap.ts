import { MetadataRoute } from 'next';

/**
 * Dynamic Sitemap Generation for DMR Media Website
 * This file automatically generates a sitemap.xml at /sitemap.xml
 * 
 * Next.js will automatically serve this at: https://dmrmedia.org/sitemap.xml
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dmrmedia.org';
  
  // Current date for lastModified
  const currentDate = new Date();
  
  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    
    // Main Pages
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calendar`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // Note: Blog post URLs (/blog/[slug]) should be added dynamically
    // by fetching from Sanity CMS. Add them here when blog is active.
  ];
}

