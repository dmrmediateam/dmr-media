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
  // Post-registration page. Listed explicitly: it does NOT start with
  // "/landing/thank-you", so the prefix rule above does not cover it.
  '/landing/webinar-dq',
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
