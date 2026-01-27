/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  webpack: (config, { isServer }) => {
    // Externalize @sanity/client for server-side to avoid webpack bundling issues
    if (isServer) {
      config.externals = config.externals || []
      config.externals.push({
        '@sanity/client': 'commonjs @sanity/client',
      })
    }
    return config
  },
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
    ]
  },
}

module.exports = nextConfig
