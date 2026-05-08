export interface CaseStudyMetric {
  number: string
  label: string
  context: string
}

export interface CaseStudyReview {
  text: string
  author: string
  role: string
  image: string | null
  video?: { src: string; title: string }
  link?: string
}

export interface CaseStudyPhase {
  label: string
  name: string
  body: string
}

export interface CaseStudySection {
  id: string
  eyebrow: string
  headline: string
  body: string[]
  screenshot?: { src: string; alt: string }
  screenshots?: Array<{ src: string; alt: string; caption?: string }>
  phases?: CaseStudyPhase[]
}

export interface CaseStudyData {
  slug: string
  client: string
  location: string
  market: string
  status: string
  seo: {
    title: string
    description: string
    canonical: string
    ogImage: string
    datePublished: string
    dateModified: string
  }
  hero: {
    /** Omit to show hero text only; page can render the asset at the end. */
    image?: string
    imageAlt: string
    subtitle: string
  }
  metrics: CaseStudyMetric[]
  reviews: CaseStudyReview[]
  sections: CaseStudySection[]
}
