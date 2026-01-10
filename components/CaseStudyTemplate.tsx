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
    <div className="bg-[var(--surface-base)] text-[var(--color-off-black)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
        <div className="container-max py-24">
          <div className="max-w-3xl space-y-6">
            <span className="uppercase tracking-[0.35em] text-[11px] text-[var(--color-ink-300)]">case study</span>
            <h1 className="text-[42px] sm:text-[56px] font-serif font-light leading-[1.08]">
              {data.title}
              <span className="text-[var(--color-trust)] text-[1.1em]">.</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-ink-300)] leading-relaxed">
              {data.subtitle}
            </p>
          </div>
        </div>
        {data.heroImage && (
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[5%] bottom-[-180px] w-[420px] sm:w-[460px] rounded-[48px] border border-white/60 bg-white/35 backdrop-blur-2xl overflow-hidden">
              <Image src={data.heroImage.src} alt={data.heroImage.alt} fill className="object-cover" priority />
            </div>
          </div>
        )}
      </section>

      {/* Stats Section */}
      {data.stats && data.stats.length > 0 && (
        <section className="py-16">
          <div className="container-max grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl shadow-[0_25px_45px_rgba(15,15,15,0.08)]"
              >
                <div className="text-[36px] font-serif font-light">{stat.value}</div>
                <p className="mt-2 text-sm text-[var(--color-ink-300)] uppercase tracking-[0.3em]">{stat.label}</p>
                <p className="mt-4 text-sm text-[var(--color-ink-300)]">{stat.detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Content Sections */}
      <article className="py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-20">
            {data.sections.map((section, index) => (
              <section key={index} className="space-y-8">
                {section.title && (
                  <div className="space-y-4">
                    {section.subtitle && (
                      <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-ink-300)]">{section.subtitle}</p>
                    )}
                    <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-serif font-light leading-tight text-[var(--color-off-black)]">
                      {section.title}
                    </h2>
                  </div>
                )}

                {section.image && section.imagePosition === 'full' && (
                  <div className="relative w-full rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-6 overflow-hidden">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={section.image.width || 1200}
                      height={section.image.height || 600}
                      className="w-full h-auto rounded-[24px]"
                    />
                  </div>
                )}

                {section.image && (section.imagePosition === 'left' || section.imagePosition === 'right') ? (
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                      section.imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
                    }`}
                  >
                    {section.imagePosition === 'left' && (
                      <div className="relative w-full rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-6 overflow-hidden">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          width={section.image.width || 600}
                          height={section.image.height || 400}
                          className="w-full h-auto rounded-[24px]"
                        />
                      </div>
                    )}
                    <div className="space-y-6 text-[var(--color-ink-300)] text-base sm:text-[17px] leading-[1.6]">
                      {section.content}
                    </div>
                    {section.imagePosition === 'right' && (
                      <div className="relative w-full rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-6 overflow-hidden lg:col-start-2">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          width={section.image.width || 600}
                          height={section.image.height || 400}
                          className="w-full h-auto rounded-[24px]"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6 text-[var(--color-ink-300)] text-base sm:text-[17px] leading-[1.6]">
                    {section.content}
                  </div>
                )}

                {section.image && section.imagePosition === 'center' && (
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-2xl rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-6 overflow-hidden">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        width={section.image.width || 800}
                        height={section.image.height || 500}
                        className="w-full h-auto rounded-[24px]"
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
        <section className="py-20">
          <div className="container-max">
            <div className="max-w-4xl mx-auto space-y-12">
              {data.testimonial && (
              <div className="rounded-[48px] border border-[var(--color-ink-200)] bg-white/80 p-10 backdrop-blur-xl">
                {data.testimonial.video ? (
                  <div className="space-y-8">
                    <h4 className="text-[24px] font-serif font-light text-[var(--color-off-black)] mb-6">
                      {data.testimonial.video.title}
                    </h4>
                    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-[32px] border border-[var(--color-ink-200)]">
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={data.testimonial.video.src}
                        title={data.testimonial.video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <blockquote className="text-[22px] font-serif font-light text-[var(--color-off-black)] leading-relaxed text-center">
                      {data.testimonial.quote}
                    </blockquote>
                    <div className="flex flex-col items-center gap-1 text-[var(--color-ink-300)]">
                      <p className="text-sm uppercase tracking-[0.3em]">{data.testimonial.author}</p>
                      <p className="text-xs uppercase tracking-[0.3em]">{data.testimonial.role}</p>
                      {data.testimonial.link && (
                        <Link
                          href={data.testimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 text-xs uppercase tracking-[0.3em] text-[var(--color-trust)] hover:text-[var(--color-off-black)] transition-colors duration-300 flex items-center gap-2"
                        >
                          Read full review
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-8">
                    {data.testimonial.image && (
                      <div className="flex justify-center">
                        <Image
                          src={data.testimonial.image}
                          alt={`${data.testimonial.author} testimonial`}
                          width={480}
                          height={320}
                          className="w-full max-w-xl rounded-[32px] border border-[var(--color-ink-200)]"
                        />
                      </div>
                    )}
                    <blockquote className="text-[22px] font-serif font-light text-[var(--color-off-black)] leading-relaxed">
                      {data.testimonial.quote}
                    </blockquote>
                    <div className="flex flex-col items-center gap-1 text-[var(--color-ink-300)]">
                      <p className="text-sm uppercase tracking-[0.3em]">{data.testimonial.author}</p>
                      <p className="text-xs uppercase tracking-[0.3em]">{data.testimonial.role}</p>
                      {data.testimonial.link && (
                        <Link
                          href={data.testimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 text-xs uppercase tracking-[0.3em] text-[var(--color-trust)] hover:text-[var(--color-off-black)] transition-colors duration-300 flex items-center gap-2"
                        >
                          Read full review
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
              )}
              {data.secondaryTestimonial && (
                <div className="rounded-[48px] border border-[var(--color-ink-200)] bg-white/80 p-10 backdrop-blur-xl">
                  {data.secondaryTestimonial.video ? (
                    <div className="space-y-8">
                      <h4 className="text-[24px] font-serif font-light text-[var(--color-off-black)] mb-6">
                        {data.secondaryTestimonial.video.title}
                      </h4>
                      <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-[32px] border border-[var(--color-ink-200)]">
                        <iframe
                          className="absolute inset-0 h-full w-full"
                          src={data.secondaryTestimonial.video.src}
                          title={data.secondaryTestimonial.video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                      <blockquote className="text-[22px] font-serif font-light text-[var(--color-off-black)] leading-relaxed text-center">
                        {data.secondaryTestimonial.quote}
                      </blockquote>
                      <div className="flex flex-col items-center gap-1 text-[var(--color-ink-300)]">
                        <p className="text-sm uppercase tracking-[0.3em]">{data.secondaryTestimonial.author}</p>
                        <p className="text-xs uppercase tracking-[0.3em]">{data.secondaryTestimonial.role}</p>
                        {data.secondaryTestimonial.link && (
                          <Link
                            href={data.secondaryTestimonial.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 text-xs uppercase tracking-[0.3em] text-[var(--color-trust)] hover:text-[var(--color-off-black)] transition-colors duration-300 flex items-center gap-2"
                          >
                            Read full review
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-8">
                      {data.secondaryTestimonial.image && (
                        <div className="flex justify-center">
                          <Image
                            src={data.secondaryTestimonial.image}
                            alt={`${data.secondaryTestimonial.author} testimonial`}
                            width={480}
                            height={320}
                            className="w-full max-w-xl rounded-[32px] border border-[var(--color-ink-200)]"
                          />
                        </div>
                      )}
                      <blockquote className="text-[22px] font-serif font-light text-[var(--color-off-black)] leading-relaxed">
                        {data.secondaryTestimonial.quote}
                      </blockquote>
                      <div className="flex flex-col items-center gap-1 text-[var(--color-ink-300)]">
                        <p className="text-sm uppercase tracking-[0.3em]">{data.secondaryTestimonial.author}</p>
                        <p className="text-xs uppercase tracking-[0.3em]">{data.secondaryTestimonial.role}</p>
                        {data.secondaryTestimonial.link && (
                          <Link
                            href={data.secondaryTestimonial.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 text-xs uppercase tracking-[0.3em] text-[var(--color-trust)] hover:text-[var(--color-off-black)] transition-colors duration-300 flex items-center gap-2"
                          >
                            Read full review
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
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

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-off-black)] text-white">
        <div className="container-max text-center space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">next</p>
          <h4 className="text-[36px] font-serif font-light">{data.cta.title}</h4>
          <p className="text-base text-white/80 max-w-2xl mx-auto">{data.cta.description}</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href={data.cta.primaryButton.href}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-xs uppercase tracking-[0.35em] text-[var(--color-off-black)] hover:bg-white/90 transition-colors"
            >
              {data.cta.primaryButton.text}
            </Link>
            {data.cta.secondaryButton && (
              <Link
                href={data.cta.secondaryButton.href}
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-xs uppercase tracking-[0.35em] text-white hover:border-white/60 transition-colors"
              >
                {data.cta.secondaryButton.text}
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}









