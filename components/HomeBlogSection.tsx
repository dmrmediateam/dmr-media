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
}

export default function HomeBlogSection({ posts }: HomeBlogSectionProps) {
  return (
    <section className="pt-10 pb-32 bg-[var(--surface-base)]">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-300)] mb-6 block font-serif">
              Latest insights
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1]">
              Strategy, timing, and positioning for the luxury market.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity duration-300 self-start md:self-auto"
          >
            View all insights
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post) => {
              const formattedDate = post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                : '';

              return (
                <div key={post._id}>
                  <Link
                    href={`/blog/${post.slug?.current || ''}`}
                    className="group bg-white border-b border-[var(--color-ink-200)] pb-8 hover:opacity-60 transition-opacity duration-300 block"
                  >
                    <div className="relative h-64 bg-[var(--color-ink-200)] overflow-hidden mb-6">
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
                        <div className="absolute inset-0 flex items-center justify-center text-[var(--color-ink-400)] text-sm font-serif">
                          No image
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] mb-4 font-serif">
                        {formattedDate}
                      </div>

                      <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-3 leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-[var(--color-ink-300)] text-sm leading-relaxed mb-6">
                        {post.description}
                      </p>

                      <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif">
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
