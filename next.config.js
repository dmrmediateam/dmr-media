/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'cdn.sanity.io'],
  },
  // Use Next.js built-in externalization (works consistently in dev + prod)
  // Custom webpack externals caused "Cannot read properties of undefined (reading 'call')" in dev
  serverExternalPackages: ['@sanity/client'],
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
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
        source: '/blog/luxury-real-estate-marketing-ideas-to-print-luxury-listings',
        destination: '/blog/best-10-luxury-real-estate-marketing-tactics-for-2026',
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
    ]
  },
}

module.exports = nextConfig
