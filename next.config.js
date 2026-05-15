/** @type {import('next').NextConfig} */
const THANK_YOU_NOINDEX_HEADERS = [
  {
    key: 'X-Robots-Tag',
    value: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
  },
]

/** Post-checkout / post-form thank-you URLs — not for indexing or caching by crawlers. */
const thankYouHeaderRules = [
  '/landing/thank-you',
  '/landing/thank-you-q',
  '/landing/thank-you-dq',
  '/landing/thank-you-g',
  '/landing/thank-you-g-dq',
  '/landing/thank-you-feb-2026',
  '/landing/thank-you-booking',
  '/thank-you',
  '/thank-you-q',
  '/thank-you-dq',
].map((source) => ({
  source,
  headers: THANK_YOU_NOINDEX_HEADERS,
}))

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'via.placeholder.com', pathname: '/**' },
    ],
  },
  // Use Next.js built-in externalization (works consistently in dev + prod)
  // Custom webpack externals caused "Cannot read properties of undefined (reading 'call')" in dev
  serverExternalPackages: ['@sanity/client'],
  async headers() {
    return [
      {
        source: '/videos/:path*.mov',
        headers: [
          { key: 'Content-Type', value: 'video/quicktime' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/videos/:path*',
        headers: [
          { key: 'Content-Type', value: 'video/mp4' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.webp',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.jpg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.png',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      ...thankYouHeaderRules,
    ]
  },
  async rewrites() {
    return [
      { source: '/cake', destination: '/cake/index.html' },
      { source: '/cake/', destination: '/cake/index.html' },
    ]
  },
  async redirects() {
    return [
      {
        source: '/dmr-media-specialists-landing.html',
        destination: '/cake',
        permanent: true,
      },
      {
        source: '/studio',
        destination: 'https://www.sanity.io/@o0TLPxe4z/studio/gc5ifcysyqpinpbd50onl6r8/default/',
        permanent: true,
      },
      {
        source: '/oplogin',
        destination: 'https://eagan-luxury.sanity.studio',
        permanent: true,
      },
      {
        source: '/market-reports',
        destination: '/blog',
        permanent: true,
      },
      // 301 redirects for 404 pages
      {
        source: '/blog/viral-content-patterns-in-real-estate-2025',
        destination: '/blog/viral-content-patterns-for-real-estate',
        permanent: true,
      },
      {
        source: '/blog/luxury-real-estate-marketing-ideas-to-print-luxury-listings',
        destination: '/blog/best-10-luxury-real-estate-marketing-tactics-for-2026',
        permanent: true,
      },
      {
        source: '/blog/real-estate-ads-every-ad-type-agents-need-to-know-in-2026',
        destination: '/blog/google-ads-for-realtors',
        permanent: true,
      },
      {
        source: '/blog/the-agents-roi-guide-to-real-estate-photography-pricing-in-2026',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/top-real-estate-marketing-agencies-2025',
        destination: '/blog/best-real-estate-marketing-agencies',
        permanent: true,
      },
      {
        source: '/ads',
        destination: '/google-ads-management',
        permanent: true,
      },
      {
        source: '/lead/gmb',
        destination: '/seo-optimization',
        permanent: true,
      },
      // Brokerages pages removed - redirect to homepage
      {
        source: '/brokerages',
        destination: '/',
        permanent: true,
      },
      {
        source: '/brokerages/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/case-study/rick-visions-first-realty',
        destination: '/case-studies',
        permanent: true,
      },
      // Consolidate templated city service URLs into parent pages (avoid thin duplicate content)
      {
        source: '/seo-optimization/:location',
        destination: '/seo-optimization',
        permanent: true,
      },
      {
        source: '/google-ads-management/:location',
        destination: '/google-ads-management',
        permanent: true,
      },
      {
        source: '/chatgpt-ads-real-estate/:location',
        destination: '/chatgpt-ads-real-estate',
        permanent: true,
      },
      {
        source: '/luxury-condo-websites/:location',
        destination: '/luxury-condo-websites',
        permanent: true,
      },
      {
        source: '/single-property-websites',
        destination: '/real-estate-website-design',
        permanent: true,
      },
      {
        source: '/single-property-websites/:location',
        destination: '/real-estate-website-design',
        permanent: true,
      },
      {
        source: '/websites-for-new-developments/:location',
        destination: '/websites-for-new-developments',
        permanent: true,
      },
      {
        source: '/property-marketing/:location',
        destination: '/property-marketing',
        permanent: true,
      },
      {
        source: '/analytics-reporting/:location',
        destination: '/analytics-reporting',
        permanent: true,
      },
      {
        source: '/luxury-development-marketing/:location',
        destination: '/luxury-development-marketing',
        permanent: true,
      },
      {
        source: '/real-estate-lead-generation/:location',
        destination: '/real-estate-lead-generation',
        permanent: true,
      },
      {
        source: '/real-estate-seo-consultant',
        destination: '/seo-consulting',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
