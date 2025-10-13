import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blogPosts';
import type { Metadata } from 'next';

export const revalidate = 60; // Revalidate every 60 seconds

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.description,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.description,
      images: [post.mainImage.asset.url],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

// Portable Text components for styling
const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-light text-off-black mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-light text-off-black mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-normal text-off-black mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-dark text-lg leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-off-black pl-6 my-8 italic text-gray-dark">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-6 text-gray-dark space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-6 text-gray-dark space-y-2">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-off-black hover:text-gray-dark underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] bg-off-black">
        <img
          src={post.mainImage.asset.url}
          alt={post.mainImage.alt}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-off-black/50 to-off-black/80 flex items-end">
          <div className="container-max pb-16">
            <div className="max-w-4xl">
              {/* Category Badge */}
              <div className="inline-block bg-off-white text-off-black px-4 py-2 text-xs uppercase tracking-wider mb-6">
                {post.category}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-off-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-off-white/90 text-sm">
                <div className="flex items-center gap-2">
                  {post.author.image && (
                    <img
                      src={post.author.image}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full border-2 border-off-white"
                    />
                  )}
                  <span>{post.author.name}</span>
                </div>
                <span>•</span>
                <span>{formattedDate}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="section-padding bg-off-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Lead Paragraph */}
          <div className="text-xl text-gray-dark leading-relaxed mb-12 pb-8 border-b border-gray-200">
            {post.description}
          </div>

          {/* Main Content - Portable Text */}
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-sm uppercase tracking-wider text-gray-dark mb-4">
                Topics
              </h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-off-white text-off-black text-sm border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-white border border-gray-200">
            <div className="flex items-start gap-6">
              {post.author.image && (
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-24 h-24 rounded-full border-2 border-off-black"
                />
              )}
              <div>
                <h3 className="text-2xl font-light text-off-black mb-3">
                  About {post.author.name}
                </h3>
                <p className="text-gray-dark leading-relaxed mb-4">
                  Marketing experts specializing in luxury real estate SEO, Google Ads, and digital strategy.
                  Helping premium agents dominate their markets with data-driven campaigns and proven results.
                </p>
                <Link href="/contact" className="btn-primary inline-block">
                  Work With Us
                </Link>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-16 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-off-black hover:text-gray-dark transition-colors duration-200"
            >
              <span>←</span>
              <span className="text-lg">Back to All Insights</span>
            </Link>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-off-black mb-6">
            Ready to Elevate Your Real Estate Marketing?
          </h2>
          <p className="text-lg text-gray-dark max-w-2xl mx-auto mb-8">
            Let's build a custom marketing strategy that drives results. From SEO to Google Ads, we help luxury agents dominate their markets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Start Your Campaign
            </Link>
            <Link href="/blog" className="btn-outline">
              More Insights
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

