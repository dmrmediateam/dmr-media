import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Use the project ID from vercel.json if available, otherwise fallback
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gvyjxd5j'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  // Disable CDN for more reliable data fetching (can be re-enabled if needed)
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  // Add request tag for better cache control
  perspective: 'published',
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
