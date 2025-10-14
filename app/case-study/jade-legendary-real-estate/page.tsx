import Image from 'next/image';
import Link from 'next/link';

export default function JadeCaseStudy() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="inline-block bg-off-white/10 px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-6">
              Case Study
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-light text-off-white mb-6">
              Jade's Success Story
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From frustrated content creator to lead generation powerhouse - how we transformed Jade's digital marketing strategy and tripled her inbound leads in one quarter.
            </p>
          </div>
        </div>
      </section>

      {/* Client Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-off-black mb-6">
                Meet Jade from Legendary Real Estate Services
              </h2>
              <div className="space-y-6 text-gray-dark leading-relaxed">
                <p>
                  She had everything - blogs, videos, and a strong online presence. But no matter how much content she published, leads weren't coming in.
                </p>
                <p>
                  She was frustrated. Week after week, she saw website traffic, but it wasn't converting. Her biggest worry - Was she wasting time on content that wasn't working?
                </p>
                <p>
                  We took a deep dive and found the issue. Her blogs were live, but they weren't optimized - the wrong topics, missing the keywords buyers & sellers actually search for, no structure for ranking on Google, and no clear path for turning traffic into actual conversations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-off-white p-8 border border-gray-200">
                <div className="text-center">
                  <div className="w-24 h-24 bg-off-black text-off-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-serif">J</span>
                  </div>
                  <h3 className="text-2xl font-serif font-light text-off-black mb-2">Jade Goodhue</h3>
                  <p className="text-gray-dark mb-4">Legendary Real Estate Services</p>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-dark italic">
                    "He works with us like a partner, rather than a vendor dealing with just another number."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding bg-off-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              The Challenge
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              Despite having all the right content pieces, Jade's marketing wasn't converting visitors into leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white border border-gray-200">
              <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-off-black mb-2">Wrong Topics</h3>
              <p className="text-gray-dark text-sm">Blogs targeting irrelevant keywords</p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-200">
              <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-off-black mb-2">Poor SEO Structure</h3>
              <p className="text-gray-dark text-sm">No clear path to Google rankings</p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-200">
              <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-off-black mb-2">Unoptimized GMB</h3>
              <p className="text-gray-dark text-sm">Google My Business not fully leveraged</p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-200">
              <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-off-black mb-2">No Lead Nurturing</h3>
              <p className="text-gray-dark text-sm">Missing follow-up systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Our Solution
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              We implemented a comprehensive digital marketing strategy that transformed Jade's online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-off-white border border-gray-200">
              <div className="w-12 h-12 bg-off-black text-off-white flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-off-black mb-4">
                Google My Business Optimization
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Optimized her Google My Business listing to bring in high-converting local traffic with strategic keyword targeting and local SEO best practices.
              </p>
            </div>

            <div className="p-8 bg-off-white border border-gray-200">
              <div className="w-12 h-12 bg-off-black text-off-white flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-off-black mb-4">
                Strategic Blog Optimization
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Reworked her blog strategy to target active buyers and sellers with content that ranks for high-intent keywords and drives conversions.
              </p>
            </div>

            <div className="p-8 bg-off-white border border-gray-200">
              <div className="w-12 h-12 bg-off-black text-off-white flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-off-black mb-4">
                Automated Lead Nurturing
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Set up automated nurturing sequences to keep leads engaged and moving toward closing with personalized follow-up campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-white mb-4">
              The Results
            </h2>
            <div className="w-24 h-px bg-off-white mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Jade's inbound leads tripled within one quarter. Now she knows her content is working.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-6xl font-serif font-light text-off-white mb-4">3x</div>
                  <div className="text-xl text-gray-300 mb-2">Lead Generation Increase</div>
                  <div className="text-sm text-gray-400">Within one quarter</div>
                </div>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    No more second-guessing. No more hoping for results. Now she has a predictable pipeline of leads - and couldn't be happier.
                  </p>
                  <p>
                    This is what her quarterly summary looked like...
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/5 border border-white/10 p-6">
                <Image
                  src="/images/JadeCRM.png"
                  alt="Jade's CRM dashboard showing lead generation results"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-off-white p-12 border border-gray-200">
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/JadeReview.jpeg"
                  alt="Jade's Google review testimonial"
                  width={400}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
              
              <blockquote className="text-2xl font-serif font-light text-off-black mb-8 leading-relaxed">
                "We started working with Andrew about a month ago. He's articulate, responsive, and provides amazing weekly updates. He's taken the time to really explain what the issues were on why we weren't ranking despite all our blogs and videos. It's exciting to watch his weekly progress, and he even provides us feedback for how we can better engage the leads we have. He works with us like a partner, rather than a vendor dealing with just another number. If you have the opportunity to work with him, just DO IT. You'll be grateful you did!"
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-off-black text-off-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-serif">J</span>
                </div>
                <div className="text-left">
                  <div className="text-xl font-medium text-off-black">Jade Goodhue</div>
                  <div className="text-gray-dark">Legendary Real Estate Services</div>
                  <div className="flex text-yellow-400 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-off-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join Jade and other luxury real estate professionals who have transformed their digital marketing with DMR <span className="italic">Media</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Start Your Campaign
            </Link>
            <Link href="/" className="btn-outline">
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
