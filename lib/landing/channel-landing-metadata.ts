import type { Metadata } from 'next'
import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'

const BASE = 'https://www.dmrmedia.org'

export function channelLandingMetadata(config: ChannelLandingConfig): Metadata {
  const { metadata, path } = config
  const canonical = `${BASE}${path}`

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: { canonical },
    openGraph: {
      title: metadata.openGraphTitle,
      description: metadata.openGraphDescription,
      url: canonical,
      siteName: 'DMR Media',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.openGraphTitle,
      description: metadata.openGraphDescription,
    },
  }
}

export function channelLandingFaqJsonLd(config: ChannelLandingConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
