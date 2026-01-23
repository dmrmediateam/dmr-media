import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

export interface CaseStudyStat {
  label: string
  value: string
  detail: string
}

export interface CaseStudySection {
  title?: string
  subtitle?: string
  content: ReactNode
  image?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  imagePosition?: 'left' | 'right' | 'full' | 'center'
}

export interface CaseStudyTestimonial {
  quote: string
  author: string
  role: string
  image?: string
  video?: {
    src: string
    title: string
  }
  link?: string
}

export interface CaseStudyData {
  title: string
  subtitle: string
  heroImage?: {
    src: string
    alt: string
  }
  stats?: CaseStudyStat[]
  sections: CaseStudySection[]
  testimonial?: CaseStudyTestimonial
  secondaryTestimonial?: CaseStudyTestimonial
  cta: {
    title: string
    description: string
    primaryButton: {
      text: string
      href: string
    }
    secondaryButton?: {
      text: string
      href: string
    }
  }
}

interface CaseStudyTemplateProps {
  data: CaseStudyData
}

export default function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  return (
    <div className="bg-white text-[var(--color-off-black)]">
      {/* Hero Section */}
      <section className="py-24 md:py-32 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl space-y-8">
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-300)] font-serif">case study</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-[1.1] tracking-tight">
              {data.title}
            </h1>
            <p className="text-base text-[var(--color-ink-300)] leading-relaxed font-serif">
              {data.subtitle}
            </p>
          </div>
          {data.heroImage && (
            <div className="mt-16 relative aspect-[16/9] overflow-hidden">
              <Image src={data.heroImage.src} alt={data.heroImage.alt} fill className="object-cover" priority />
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      {data.stats && data.stats.length > 0 && (
        <section className="py-16 border-b border-[var(--color-ink-200)]">
          <div className="container-max grid grid-cols-1 sm:grid-cols-3 gap-12">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className="border-b border-[var(--color-ink-200)] pb-8"
              >
                <div className="text-3xl font-serif font-light text-[var(--color-off-black)] mb-4">{stat.value}</div>
                <p className="text-xs text-[var(--color-ink-300)] uppercase tracking-[0.2em] font-serif mb-2">{stat.label}</p>
                <p className="text-sm text-[var(--color-ink-300)] font-serif">{stat.detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Content Sections */}
      <article className="py-24 md:py-32">
        <div className="container-max">
          <div className="max-w-3xl mx-auto space-y-20">
            {data.sections.map((section, index) => (
              <section key={index} className="space-y-8">
                {section.title && (
                  <div className="space-y-4">
                    {section.subtitle && (
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">{section.subtitle}</p>
                    )}
                    <h2 className="text-2xl md:text-3xl font-serif font-light leading-tight text-[var(--color-off-black)] tracking-tight">
                      {section.title}
                    </h2>
                  </div>
                )}

                {section.image && section.imagePosition === 'full' && (
                  <div className="relative w-full overflow-hidden mb-8">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={section.image.width || 1200}
                      height={section.image.height || 600}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {section.image && (section.imagePosition === 'left' || section.imagePosition === 'right') ? (
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      section.imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
                    }`}
                  >
                    {section.imagePosition === 'left' && (
                      <div className="relative w-full overflow-hidden">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          width={section.image.width || 600}
                          height={section.image.height || 400}
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                    <div className="space-y-6 text-[var(--color-ink-300)] text-base leading-relaxed font-serif">
                      {section.content}
                    </div>
                    {section.imagePosition === 'right' && (
                      <div className="relative w-full overflow-hidden lg:col-start-2">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          width={section.image.width || 600}
                          height={section.image.height || 400}
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6 text-[var(--color-ink-300)] text-base leading-relaxed font-serif">
                    {section.content}
                  </div>
                )}

                {section.image && section.imagePosition === 'center' && (
                  <div className="flex justify-center mb-8">
                    <div className="relative w-full max-w-2xl overflow-hidden">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        width={section.image.width || 800}
                        height={section.image.height || 500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </article>

      {/* Testimonial Section */}
      {(data.testimonial || data.secondaryTestimonial) && (
        <section className="py-24 md:py-32 border-t border-[var(--color-ink-200)]">
          <div className="container-max">
            <div className="max-w-3xl mx-auto space-y-16">
              {data.testimonial && (
              <div className="border-b border-[var(--color-ink-200)] pb-16">
                {data.testimonial.video ? (
                  <div className="space-y-8">
                    <h4 className="text-[24px] font-serif font-light text-[var(--color-off-black)] mb-6">
                      {data.testimonial.video.title}
                    </h4>
                    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden mb-8">
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={data.testimonial.video.src}
                        title={data.testimonial.video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <blockquote className="text-xl font-serif font-light text-[var(--color-off-black)] leading-relaxed text-center mb-6">
                      {data.testimonial.quote}
                    </blockquote>
                    <div className="flex flex-col items-center gap-2 text-[var(--color-ink-300)] font-serif">
                      <p className="text-sm uppercase tracking-[0.2em]">{data.testimonial.author}</p>
                      <p className="text-xs uppercase tracking-[0.2em]">{data.testimonial.role}</p>
                      {data.testimonial.link && (
                        <Link
                          href={data.testimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] hover:opacity-60 transition-opacity duration-300"
                        >
                          Read full review
                        </Link>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-8">
                    {data.testimonial.image && (
                      <div className="flex justify-center mb-8">
                        <Image
                          src={data.testimonial.image}
                          alt={`${data.testimonial.author} testimonial`}
                          width={480}
                          height={320}
                          className="w-full max-w-xl"
                        />
                      </div>
                    )}
                    <blockquote className="text-xl font-serif font-light text-[var(--color-off-black)] leading-relaxed mb-6">
                      {data.testimonial.quote}
                    </blockquote>
                    <div className="flex flex-col items-center gap-2 text-[var(--color-ink-300)] font-serif">
                      <p className="text-sm uppercase tracking-[0.2em]">{data.testimonial.author}</p>
                      <p className="text-xs uppercase tracking-[0.2em]">{data.testimonial.role}</p>
                      {data.testimonial.link && (
                        <Link
                          href={data.testimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] hover:opacity-60 transition-opacity duration-300"
                        >
                          Read full review
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
              )}
              {data.secondaryTestimonial && (
                <div className="border-b border-[var(--color-ink-200)] pb-16">
                  {data.secondaryTestimonial.video ? (
                    <div className="space-y-8">
                      <h4 className="text-[24px] font-serif font-light text-[var(--color-off-black)] mb-6">
                        {data.secondaryTestimonial.video.title}
                      </h4>
                      <div className="relative w-full h-0 pb-[56.25%] overflow-hidden mb-8">
                        <iframe
                          className="absolute inset-0 h-full w-full"
                          src={data.secondaryTestimonial.video.src}
                          title={data.secondaryTestimonial.video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                      <blockquote className="text-xl font-serif font-light text-[var(--color-off-black)] leading-relaxed text-center mb-6">
                        {data.secondaryTestimonial.quote}
                      </blockquote>
                      <div className="flex flex-col items-center gap-2 text-[var(--color-ink-300)] font-serif">
                        <p className="text-sm uppercase tracking-[0.2em]">{data.secondaryTestimonial.author}</p>
                        <p className="text-xs uppercase tracking-[0.2em]">{data.secondaryTestimonial.role}</p>
                        {data.secondaryTestimonial.link && (
                          <Link
                            href={data.secondaryTestimonial.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] hover:opacity-60 transition-opacity duration-300"
                          >
                            Read full review
                          </Link>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-8">
                      {data.secondaryTestimonial.image && (
                        <div className="flex justify-center mb-8">
                          <Image
                            src={data.secondaryTestimonial.image}
                            alt={`${data.secondaryTestimonial.author} testimonial`}
                            width={480}
                            height={320}
                            className="w-full max-w-xl"
                          />
                        </div>
                      )}
                      <blockquote className="text-xl font-serif font-light text-[var(--color-off-black)] leading-relaxed mb-6">
                        {data.secondaryTestimonial.quote}
                      </blockquote>
                      <div className="flex flex-col items-center gap-2 text-[var(--color-ink-300)] font-serif">
                        <p className="text-sm uppercase tracking-[0.2em]">{data.secondaryTestimonial.author}</p>
                        <p className="text-xs uppercase tracking-[0.2em]">{data.secondaryTestimonial.role}</p>
                        {data.secondaryTestimonial.link && (
                          <Link
                            href={data.secondaryTestimonial.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] hover:opacity-60 transition-opacity duration-300"
                          >
                            Read full review
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

    </div>
  )
}









