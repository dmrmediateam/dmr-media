/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'cdn.sanity.io'],
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
        source: '/market-reports',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
