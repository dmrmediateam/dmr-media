import { MetadataRoute } from 'next'

const THANK_YOU_DISALLOW = [
  '/api/',
  // Prefix blocks /landing/thank-you, /landing/thank-you-g, /landing/thank-you-g-dq, etc.
  '/landing/thank-you',
  '/thank-you',
  '/thank-you-q',
  '/thank-you-dq',
  // Paid-traffic Google Ads landing pages — not for organic search.
  '/landing/website-development',
  '/landing/paid-ads-webinar',
] as const

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [...THANK_YOU_DISALLOW],
      },
    ],
    host: 'https://www.dmrmedia.org',
    sitemap: 'https://www.dmrmedia.org/sitemap.xml',
  }
}
