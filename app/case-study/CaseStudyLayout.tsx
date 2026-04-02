import Image from 'next/image'
import type { CaseStudyData } from '@/types/case-study'

interface CaseStudyLayoutProps {
  data: CaseStudyData
}

export default function CaseStudyLayout({ data }: CaseStudyLayoutProps) {
  const reviewSchema = data.reviews[0]
    ? {
        '@context': 'https://schema.org',
        '@type': 'Review',
        itemReviewed: {
          '@type': 'Service',
          name: 'Real Estate Marketing — DMR Media Specialists',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: data.reviews[0].author,
        },
        reviewBody: data.reviews[0].text,
      }
    : null

  return (
    <div className="bg-white text-[var(--color-off-black)]">
      {/* Review schema — Article schema provided by SEOWrapper */}
      {reviewSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      )}

      {/* 1. Hero */}
      <section className="py-24 md:py-32 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
              case study
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-[1.1] tracking-tight">
              {data.client}
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-ink-300)] leading-relaxed font-serif max-w-[700px]">
              {data.hero.subtitle}
            </p>
          </div>
          {data.hero.image && (
            <div className="mt-12 w-full max-w-[1200px] mx-auto overflow-hidden">
              <Image
                src={data.hero.image}
                alt={data.hero.imageAlt}
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* 2. Metrics Bar */}
      <section className="border-t border-b border-[var(--color-ink-200)]" aria-label="Key results">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0 [&>*]:border-r [&>*]:border-[var(--color-ink-200)] [&>*:nth-child(2n)]:border-r-0 md:[&>*:nth-child(2n)]:border-r md:[&>*:last-child]:border-r-0">
            {data.metrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-center justify-center text-center py-12 px-6 min-w-0"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] leading-none mb-2">
                  {m.number}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-off-black)] mb-1">
                  {m.label}
                </span>
                <span className="text-xs text-[var(--color-ink-300)] tracking-wide">
                  {m.context}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Client Review — Featured, position #2 after metrics */}
      <section className="bg-[#0D0D0D] text-[#F5F4F0] py-16 md:py-24" aria-label="Client testimonial">
        <div className="container-max">
          <div className="max-w-[820px] mx-auto space-y-16">
            <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
              Client Review
            </p>
            {data.reviews.map((review, i) => (
              <div key={i} className="text-center">
                {review.image && (
                  <div className="flex justify-center mb-6">
                    <Image
                      src={review.image}
                      alt={`${review.author} testimonial — DMR Media client`}
                      width={480}
                      height={320}
                      className="w-full max-w-xl"
                    />
                  </div>
                )}
                {review.video && (
                  <div className="relative w-full aspect-video pb-[56.25%] overflow-hidden mb-8">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={review.video.src}
                      title={review.video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                )}
                <blockquote className="text-lg sm:text-xl md:text-2xl font-serif font-light italic leading-relaxed text-[#F5F4F0] my-6">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="mt-10">
                  <strong className="block text-base font-semibold text-[#F5F4F0] mb-1">
                    {review.author}
                  </strong>
                  <span className="block text-xs uppercase tracking-[0.1em] text-[#888]">
                    {review.role}
                  </span>
                  {review.link && (
                    <a
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-[#B8925A] hover:opacity-80 transition-opacity"
                    >
                      Read full review
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4–8. Narrative sections */}
      <article>
        {data.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="py-16 md:py-20 border-b border-[var(--color-ink-200)] last:border-b-0"
          >
            <div className="container-max">
              <div className="max-w-[820px] mx-auto">
                <p className="text-xs uppercase tracking-[0.2em] font-serif mb-3" style={{ color: '#B8925A' }}>
                  {section.eyebrow}
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-light leading-tight text-[var(--color-off-black)] tracking-tight mb-6">
                  {section.headline}
                </h2>

                {section.body.length > 0 && (
                  <div className="space-y-5 [&_p]:font-serif [&_p]:text-base [&_p]:leading-[1.85] [&_p]:text-[var(--color-ink-300)] [&_a]:underline [&_a]:hover:opacity-70 [&_a]:transition-opacity">
                    {section.body.map((paragraph, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                  </div>
                )}

                {section.screenshot && (
                  <div className="mt-10 w-full">
                    <Image
                      src={section.screenshot.src}
                      alt={section.screenshot.alt}
                      width={1440}
                      height={900}
                      className="w-full h-auto border border-[var(--color-ink-200)]"
                      loading="lazy"
                    />
                  </div>
                )}

                {section.screenshots && section.screenshots.length > 0 && (
                  <div className={`mt-10 grid gap-6 ${section.screenshots.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                    {section.screenshots.map((shot, i) => (
                      <figure key={i} className="w-full">
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          width={900}
                          height={560}
                          className="w-full h-auto border border-[var(--color-ink-200)]"
                          loading="lazy"
                        />
                        {shot.caption && (
                          <figcaption className="mt-2 text-xs text-[var(--color-ink-300)] font-serif tracking-wide text-center">
                            {shot.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}

                {section.phases && section.phases.length > 0 && (
                  <div className="mt-10 space-y-8">
                    {section.phases.map((phase) => (
                      <div
                        key={phase.name}
                        className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-6 pt-8 border-t border-[var(--color-ink-200)] first:pt-0 first:border-t-0"
                      >
                        <span
                          className="text-xs uppercase tracking-[0.15em] font-serif sm:pt-0.5"
                          style={{ color: '#B8925A' }}
                        >
                          {phase.label}
                        </span>
                        <div>
                          <strong className="block text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-off-black)] mb-2">
                            {phase.name}
                          </strong>
                          <p className="text-[var(--color-ink-300)] font-serif text-[0.95rem] leading-[1.75] m-0">
                            {phase.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </article>

    </div>
  )
}
