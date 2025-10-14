import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import CANSFramework from '@/components/CANSFramework';
import CaseStudies from '@/components/CaseStudies';
import { getAllBlogPosts } from '@/data/blogPosts';
import Link from 'next/link';

export default async function Home() {
  const blogPosts = await getAllBlogPosts();
  const featuredPosts = blogPosts.slice(0, 3); // Show latest 3 posts

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <Hero />

      {/* Statistics Section */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-white mb-4">
              Proven Results
            </h2>
            <div className="w-24 h-px bg-off-white mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Trusted by luxury real estate professionals nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Average Client GCI */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light text-off-white mb-4">
                $11K
              </div>
              <div className="text-lg text-gray-300 mb-2">Average Client GCI</div>
              <div className="text-sm text-gray-400">Monthly Revenue Growth</div>
            </div>

            {/* Total Clients */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light text-off-white mb-4">
                100+
              </div>
              <div className="text-lg text-gray-300 mb-2">Total Clients</div>
              <div className="text-sm text-gray-400">Luxury Real Estate Professionals</div>
            </div>

            {/* Average Rating */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light text-off-white mb-4">
                4.9★
              </div>
              <div className="text-lg text-gray-300 mb-2">Average Rating</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CANS Framework Section */}
      <CANSFramework />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Our Services
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              Specialized marketing solutions for luxury real estate professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Optimization */}
            <div className="p-8 bg-off-white border border-gray-200 hover:border-off-black transition-all duration-400 group">
              <div className="w-12 h-12 bg-off-black text-off-white flex items-center justify-center mb-6 group-hover:bg-gray-dark transition-colors duration-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-off-black mb-4">
                SEO Optimization
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Dominate local search results and attract high-value clients with strategic SEO campaigns tailored for luxury real estate.
              </p>
            </div>

            {/* Google Ads */}
            <div className="p-8 bg-off-white border border-gray-200 hover:border-off-black transition-all duration-400 group">
              <div className="w-12 h-12 bg-off-black text-off-white flex items-center justify-center mb-6 group-hover:bg-gray-dark transition-colors duration-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-off-black mb-4">
                Google Ads Management
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Maximize ROI with precision-targeted Google Ads campaigns designed to reach affluent homebuyers and sellers.
              </p>
            </div>

            {/* Content Strategy */}
            <div className="p-8 bg-off-white border border-gray-200 hover:border-off-black transition-all duration-400 group">
              <div className="w-12 h-12 bg-off-black text-off-white flex items-center justify-center mb-6 group-hover:bg-gray-dark transition-colors duration-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-off-black mb-4">
                Content Strategy
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Elevate your brand with compelling content that positions you as the authority in luxury real estate.
              </p>
            </div>

            {/* Property Marketing */}
            <div className="p-8 bg-off-white border border-gray-200 hover:border-off-black transition-all duration-400 group">
              <div className="w-12 h-12 bg-off-black text-off-white flex items-center justify-center mb-6 group-hover:bg-gray-dark transition-colors duration-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-off-black mb-4">
                Property Marketing
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Showcase premium listings with sophisticated digital marketing campaigns that attract qualified buyers.
              </p>
            </div>

            {/* Analytics & Reporting */}
            <div className="p-8 bg-off-white border border-gray-200 hover:border-off-black transition-all duration-400 group">
              <div className="w-12 h-12 bg-off-black text-off-white flex items-center justify-center mb-6 group-hover:bg-gray-dark transition-colors duration-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-off-black mb-4">
                Analytics & Reporting
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Data-driven insights and transparent reporting to track campaign performance and optimize results.
              </p>
            </div>

            {/* Brand Development */}
            <div className="p-8 bg-off-white border border-gray-200 hover:border-off-black transition-all duration-400 group">
              <div className="w-12 h-12 bg-off-black text-off-white flex items-center justify-center mb-6 group-hover:bg-gray-dark transition-colors duration-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 10h6m-6 4h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-off-black mb-4">
                Brand Development
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Build a distinguished personal brand that resonates with high-net-worth clients in the luxury market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-off-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Latest Insights
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              Expert strategies and proven tactics for luxury real estate marketing
            </p>
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
                    href={`/blog/${post.slug.current}`}
                    className="group bg-white border border-gray-200 overflow-hidden hover:border-off-black transition-all duration-400"
                  >
                    {/* Image */}
                    <div className="relative h-64 bg-gray-light overflow-hidden">
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                      />
                      <div className="absolute top-4 left-4 bg-off-black text-off-white px-3 py-1 text-xs uppercase tracking-wider">
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-sm text-gray-dark mb-3 flex items-center gap-2">
                        <span>{formattedDate}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-normal text-off-black mb-3 group-hover:text-gray-dark transition-colors duration-400 leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-gray-dark text-sm leading-relaxed mb-4">
                        {post.description}
                      </p>

                      <div className="flex items-center text-off-black group-hover:text-gray-dark transition-colors duration-400">
                        <span className="text-sm font-normal mr-2">Read Article</span>
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="bg-white border border-gray-200 p-12 text-center">
              <p className="text-gray-dark text-lg">
                Marketing insights and strategies coming soon
              </p>
            </div>
          )}

          {/* View All Blog Posts CTA */}
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="btn-outline inline-block"
            >
              View All Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-white mb-4">
              Client Success Stories
            </h2>
            <div className="w-24 h-px bg-off-white mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from luxury real estate professionals who have transformed their business with DMR <span className="italic">Media</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 bg-white/5 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="flex text-off-white">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-300 leading-relaxed mb-6">
                "DMR <span className="italic">Media</span> transformed our digital presence. Our monthly GCI increased by 300% within the first quarter. Their Google Ads strategies are unmatched."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-off-white/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-off-white font-semibold">SC</span>
                </div>
                <div>
                  <div className="text-off-white font-medium">Sarah Chen</div>
                  <div className="text-gray-400 text-sm">Luxury Real Estate Agent</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 bg-white/5 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="flex text-off-white">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-300 leading-relaxed mb-6">
                "The SEO results speak for themselves. We're now ranking #1 for all our target luxury keywords. DMR <span className="italic">Media</span> delivers exceptional value."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-off-white/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-off-white font-semibold">MR</span>
                </div>
                <div>
                  <div className="text-off-white font-medium">Michael Rodriguez</div>
                  <div className="text-gray-400 text-sm">Boutique Real Estate</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 bg-white/5 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="flex text-off-white">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-300 leading-relaxed mb-6">
                "Professional, results-driven, and incredibly knowledgeable. DMR <span className="italic">Media</span> helped us dominate our local luxury market. Highly recommended."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-off-white/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-off-white font-semibold">AL</span>
                </div>
                <div>
                  <div className="text-off-white font-medium">Amanda Lee</div>
                  <div className="text-gray-400 text-sm">Premium Properties Group</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-dark max-w-2xl mx-auto mb-8">
            Join 100+ luxury real estate professionals who trust DMR <span className="italic">Media</span> to deliver exceptional marketing results and drive sustainable growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Start Your Campaign
            </Link>
            <Link href="/blog" className="btn-outline">
              View Our Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
}
