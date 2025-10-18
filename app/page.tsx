import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
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

          {/* Brick/Staggered Layout */}
          <div className="max-w-7xl mx-auto">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* SEO Optimization - Large (spans 2 columns) */}
              <Link href="/seo-optimization" className="md:col-span-2 relative h-[400px] overflow-hidden group cursor-pointer">
                {/* Background Image */}
                <img
                  src="/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg"
                  alt="SEO Optimization"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-10">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-serif font-light mb-4 text-white">
                    SEO Optimization
                  </h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    Dominate local search results and attract high-value clients with strategic SEO campaigns tailored for luxury real estate.
                  </p>
                </div>
              </Link>

              {/* Property Marketing - Small */}
              <Link href="/property-marketing" className="relative h-[400px] overflow-hidden group cursor-pointer">
                {/* Background Image */}
                <img
                  src="/images/StockHomes/studio-apartment-interior-with-wooden-furniture-2025-02-09-23-29-43-utc.jpg"
                  alt="Property Marketing"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-light mb-3 text-white">
                    Property Marketing
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Showcase premium listings with sophisticated campaigns.
                  </p>
                </div>
              </Link>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Analytics & Reporting - Small */}
              <Link href="/analytics-reporting" className="relative h-[400px] overflow-hidden group cursor-pointer">
                {/* Background Image */}
                <img
                  src="/images/StockHomes/a-backyard-with-a-swimming-pool-hot-tub-and-pati-2025-02-10-06-23-51-utc.jpg"
                  alt="Analytics & Reporting"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-light mb-3 text-white">
                    Analytics & Reporting
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Data-driven insights and transparent performance tracking.
                  </p>
                </div>
              </Link>

              {/* Google Ads Management - Large (spans 2 columns) */}
              <Link href="/google-ads-management" className="md:col-span-2 relative h-[400px] overflow-hidden group cursor-pointer">
                {/* Background Image */}
                <img
                  src="/images/StockHomes/spacious-living-room-with-staircase-in-residence-2025-10-10-15-17-44-utc (1).jpg"
                  alt="Google Ads Management"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-10">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-serif font-light mb-4 text-white">
                    Google Ads Management
                  </h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    Maximize ROI with precision-targeted Google Ads campaigns designed to reach affluent homebuyers and sellers.
                  </p>
                </div>
              </Link>
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
                      {/* 40% Black Overlay */}
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="absolute top-4 left-4 bg-off-black text-off-white px-3 py-1 text-xs uppercase tracking-wider z-10">
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
      <Testimonials />

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
