import Hero from '@/components/Hero';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ContactForm from '@/components/ContactForm';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import { getAllBlogPosts } from '@/data/blogPosts';
import Link from 'next/link';

export default async function Home() {
  const blogPosts = await getAllBlogPosts();
  // Filter out posts without valid slugs
  const validPosts = blogPosts.filter((post) => post.slug?.current);
  const featuredPosts = validPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <Hero />
      
      <ClientLogosSlider />

      <CaseStudies />

      <section className="py-32 bg-[var(--surface-base)]">
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

          {featuredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {featuredPosts.map((post) => {
                const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                });

                return (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug?.current || ''}`}
                    className="group bg-white border-b border-[var(--color-ink-200)] pb-8 hover:opacity-60 transition-opacity duration-300"
                  >
                    <div className="relative h-64 bg-gray-light overflow-hidden mb-6">
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full h-full object-cover"
                      />
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

      <Testimonials />

     
    </div>
  );
}
