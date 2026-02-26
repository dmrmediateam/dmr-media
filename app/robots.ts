import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/image', '/_next/static/'],
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.dmrmedia.org/sitemap.xml',
  }
}
