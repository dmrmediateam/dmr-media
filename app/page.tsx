import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import ServicesShowcase from '@/components/ServicesShowcase';
import { getAllBlogPosts } from '@/data/blogPosts';
import Link from 'next/link';

export default async function Home() {
  const blogPosts = await getAllBlogPosts();
  // Filter out posts without valid slugs
  const validPosts = blogPosts.filter((post) => post.slug?.current);
  const featuredPosts = validPosts.slice(0, 3);
  const stats = [
    { value: '$11K', label: 'Average Client GCI', description: 'Monthly revenue lift across luxury campaigns.' },
    { value: '100+', label: 'Partners Nationwide', description: 'Agents, teams, and developers we support.' },
    { value: '4.9★', label: 'Client Satisfaction', description: 'Referrals, retention, and verified reviews.' },
  ];

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <Hero />

      <section className="py-24">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
            <div>
              <span className="uppercase tracking-[0.4em] text-[11px] text-[var(--color-ink-400)] mb-4 block">
                Proof in the numbers
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] tracking-tight">
                Growth that feels effortless--and looks intentional.
              </h2>
            </div>
            <p className="text-[var(--color-ink-400)] max-w-xl text-base leading-relaxed">
              Every engagement brings measurable lift in lead quality, market share, and brand perception. We operate like an embedded team, not a vendor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[20px] border border-[var(--color-ink-200)] bg-white/70 backdrop-blur-sm p-10 flex flex-col gap-3 hover:border-[var(--color-trust)] transition-colors duration-300"
              >
                <span className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)]">{stat.value}</span>
                <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-ink-400)]">
                  {stat.label}
                </span>
                <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudies />

      <ServicesShowcase />

      <section className="py-24 bg-[var(--surface-base)]">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
            <div>
              <span className="uppercase tracking-[0.4em] text-[11px] text-[var(--color-ink-400)] mb-4 block">
                Latest insights
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] tracking-tight">
                Strategy, timing, and positioning for the luxury market.
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 border border-[var(--color-ink-200)] text-[var(--color-off-black)] uppercase tracking-[0.3em] text-[11px] hover:border-[var(--color-trust)] hover:text-[var(--color-trust)] transition-colors duration-300 self-start md:self-auto"
            >
              View all insights
            </Link>
          </div>

          {featuredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className="group bg-white border border-[var(--color-ink-200)] overflow-hidden rounded-[20px] hover:border-[var(--color-trust)] transition-all duration-300"
                  >
                    <div className="relative h-64 bg-gray-light overflow-hidden">
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />
                      <div className="absolute top-4 left-4 bg-white/80 text-[var(--color-off-black)] px-3 py-1 text-[11px] uppercase tracking-[0.3em] z-10 rounded-full">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-4 flex items-center gap-2">
                        <span>{formattedDate}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-3 leading-snug group-hover:text-[var(--color-trust)] transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-[var(--color-ink-400)] text-sm leading-relaxed mb-6">
                        {post.description}
                      </p>

                      <div className="flex items-center gap-2 text-[13px] uppercase tracking-[0.24em] text-[var(--color-off-black)] group-hover:text-[var(--color-trust)] transition-colors duration-300">
                        Read article
                        <span className="inline-block w-5 h-px bg-current group-hover:w-8 transition-all duration-300" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="bg-white border border-[var(--color-ink-200)] p-12 text-center rounded-[20px]">
              <p className="text-[var(--color-ink-400)] text-lg">
                Marketing insights and strategies coming soon
              </p>
            </div>
          )}
        </div>
      </section>

      <Testimonials />

      <section className="py-24 bg-[var(--surface-base)]">
        <div className="container-max">
          <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/85 backdrop-blur-sm px-10 py-16 md:px-14 md:py-18 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-xl">
              <span className="uppercase tracking-[0.35em] text-[10px] text-[var(--color-ink-400)] mb-4 block">
                Connect
              </span>
              <h2 className="text-[36px] sm:text-[44px] font-serif font-light text-[var(--color-off-black)] leading-[1.05] tracking-tight">
                Tell us where you want the market to move.
              </h2>
              <p className="mt-5 text-sm sm:text-base text-[var(--color-ink-400)] leading-relaxed">
                We’ll design a calm, measurable marketing system around your portfolio—no noise, just the next milestone mapped out.
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-3 min-w-[220px]">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors duration-300 justify-center"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-trust)]" />
                Start a Project
              </Link>
              <Link
                href="/calendar"
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 border border-[var(--color-ink-200)] text-[var(--color-off-black)] uppercase tracking-[0.3em] text-[11px] hover:border-[var(--color-trust)] hover:text-[var(--color-trust)] transition-colors duration-300 justify-center"
              >
                Request a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
