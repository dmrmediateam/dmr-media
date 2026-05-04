'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Post {
  _id: string;
  title: string;
  description?: string;
  publishedAt?: string;
  slug?: { current?: string };
  mainImage?: {
    asset?: { url?: string };
    alt?: string;
  };
}

interface HomeBlogSectionProps {
  posts: Post[];
  /** Defaults: "Latest insights" */
  eyebrow?: string;
  /** Defaults: strategy / luxury market heading */
  heading?: string;
  /** Defaults: /blog */
  viewAllHref?: string;
  /** Defaults: "View all insights" */
  viewAllLabel?: string;
  /** Extra section classes (e.g. background) */
  sectionClassName?: string;
  /** Match /seo-optimization section typography and cards */
  layoutVariant?: 'default' | 'seo';
}

const DEFAULT_EYEBROW = 'Latest insights';
const DEFAULT_HEADING = 'Strategy, timing, and positioning for the luxury market.';
const DEFAULT_VIEW_ALL = 'View all insights';

export default function HomeBlogSection({
  posts,
  eyebrow = DEFAULT_EYEBROW,
  heading = DEFAULT_HEADING,
  viewAllHref = '/blog',
  viewAllLabel = DEFAULT_VIEW_ALL,
  sectionClassName = '',
  layoutVariant = 'default',
}: HomeBlogSectionProps) {
  const isSeoLayout = layoutVariant === 'seo';

  const sectionClasses = isSeoLayout
    ? `scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)] ${sectionClassName}`.trim()
    : `pt-10 pb-32 bg-[var(--surface-base)] ${sectionClassName}`.trim();

  return (
    <section className={sectionClasses}>
      <div className="container-max">
        <div
          className={
            isSeoLayout
              ? 'mb-10 flex flex-col gap-8 md:mb-12 md:flex-row md:items-end md:justify-between'
              : 'mb-20 flex flex-col gap-10 md:flex-row md:items-end md:justify-between'
          }
        >
          <div className="max-w-2xl">
            {isSeoLayout ? (
              <>
                <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
                  {eyebrow}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
                  {heading}
                </h2>
                <div
                  className="mt-5 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent sm:w-20"
                  aria-hidden
                />
              </>
            ) : (
              <>
                <span className="mb-6 block font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)]">
                  {eyebrow}
                </span>
                <h2 className="font-serif text-3xl font-light leading-[1.1] tracking-tight text-[var(--color-off-black)] md:text-4xl">
                  {heading}
                </h2>
              </>
            )}
          </div>
          <Link
            href={viewAllHref}
            className={
              isSeoLayout
                ? 'inline-flex items-center self-start font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] transition-opacity hover:opacity-60 md:self-auto'
                : 'inline-flex items-center self-start font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] transition-opacity duration-300 hover:opacity-60 md:self-auto'
            }
          >
            {viewAllLabel}
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className={isSeoLayout ? 'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3' : 'grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'}>
            {posts.map((post) => {
              const formattedDate = post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                : '';

              const cardLinkClass = isSeoLayout
                ? 'group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/10 hover:shadow-md motion-reduce:hover:translate-y-0'
                : 'group block border-b border-[var(--color-ink-200)] bg-white pb-8 transition-opacity duration-300 hover:opacity-60';

              const imageWrapClass = isSeoLayout
                ? 'relative h-56 overflow-hidden border-b border-[var(--color-ink-200)] bg-[var(--color-ink-200)]'
                : 'relative mb-6 h-64 overflow-hidden bg-[var(--color-ink-200)]';

              const bodyPadding = isSeoLayout ? 'flex flex-1 flex-col p-6' : '';

              return (
                <div key={post._id}>
                  <Link href={`/blog/${post.slug?.current || ''}`} className={`${cardLinkClass} block`}>
                    <div className={imageWrapClass}>
                      {post.mainImage?.asset?.url ? (
                        <Image
                          src={post.mainImage.asset.url}
                          alt={post.mainImage.alt || post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center font-serif text-sm text-[var(--color-ink-400)]">
                          No image
                        </div>
                      )}
                    </div>

                    <div className={bodyPadding}>
                      <div className={`font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] ${isSeoLayout ? 'mb-3' : 'mb-4'}`}>
                        {formattedDate}
                      </div>

                      <h3 className={`font-serif text-xl font-light leading-snug text-[var(--color-off-black)] ${isSeoLayout ? 'mb-3' : 'mb-3'}`}>
                        {post.title}
                      </h3>

                      <p className={`text-sm leading-relaxed text-[var(--color-ink-300)] ${isSeoLayout ? 'mb-6 flex-1' : 'mb-6'}`}>
                        {post.description}
                      </p>

                      <div className="font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)]">
                        Read article
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white border-b border-[var(--color-ink-200)] pb-12 pt-12 text-center">
            <p className="text-[var(--color-ink-300)] text-base font-serif">
              Marketing insights and strategies coming soon
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
