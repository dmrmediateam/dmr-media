import Image from 'next/image';
import Link from 'next/link';

export default function RickCaseStudy() {
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
              Rick's SEO Transformation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From wrong keywords to qualified leads - how we fixed Rick's SEO strategy and transformed his website into a lead generation machine.
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
                Meet Rick from Visions First Realty
              </h2>
              <div className="space-y-6 text-gray-dark leading-relaxed">
                <p>
                  Rick from Visions First Realty had been doing SEO for years. Traffic was coming in, but the leads? Nothing. Something was wrong. The question was what?
                </p>
                <p>
                  Rick had hired an SEO expert on Upwork, but his site was ranking for all the wrong things. Instead of attracting buyers and sellers, he was showing up for discount store searches.
                </p>
                <p>
                  The problem? Positioning. Ranking for the wrong keywords meant he was getting traffic, but not the right kind. It wasn't converting into leads, and it definitely wasn't turning into closings.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-off-white p-8 border border-gray-200">
                <div className="text-center">
                  <div className="w-24 h-24 bg-off-black text-off-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-serif">R</span>
                  </div>
                  <h3 className="text-2xl font-serif font-light text-off-black mb-2">Rick</h3>
                  <p className="text-gray-dark mb-4">Visions First Realty</p>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-dark italic">
                    "Exceptional SEO services with strategic approach"
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
              The Problem
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              Rick was getting traffic, but not the right kind. His SEO was targeting the wrong audience entirely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white border border-gray-200">
              <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-off-black mb-2">Wrong Keywords</h3>
              <p className="text-gray-dark text-sm">Ranking for discount store searches instead of real estate</p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-200">
              <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-off-black mb-2">Wrong Audience</h3>
              <p className="text-gray-dark text-sm">Attracting bargain hunters instead of buyers and sellers</p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-200">
              <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-off-black mb-2">No Conversions</h3>
              <p className="text-gray-dark text-sm">Traffic without leads or closings</p>
            </div>
          </div>

          {/* Before Screenshot */}
          <div className="bg-white p-8 border border-gray-200">
            <h3 className="text-2xl font-serif font-light text-off-black mb-6 text-center">Before: Wrong Keyword Targeting</h3>
            <div className="relative">
              <Image
                src="/images/RickBefore.png"
                alt="Rick's website before optimization showing wrong keyword rankings"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              The Solution
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              Fixing it wasn't complicated. It took two months to undo what had been done and bring in the right traffic.
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
                Right Keyword Targeting
              </h3>
              <p className="text-gray-dark leading-relaxed">
                The site was optimized to target real buyers and sellers with high-intent keywords that actually convert into leads.
              </p>
            </div>

            <div className="p-8 bg-off-white border border-gray-200">
              <div className="w-12 h-12 bg-off-black text-off-white flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-off-black mb-4">
                Google My Business Optimization
              </h3>
              <p className="text-gray-dark leading-relaxed">
                His Google My Business listing was cleaned up and ranked properly to capture local real estate searches.
              </p>
            </div>

            <div className="p-8 bg-off-white border border-gray-200">
              <div className="w-12 h-12 bg-off-black text-off-white flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-off-black mb-4">
                Lead Generation Focus
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Most importantly—leads started coming in. The focus shifted from traffic to actual conversions and closings.
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
              Now? Rick's website generates two to three qualified leads per day. No ads. No gimmicks. Just SEO done right.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-6xl font-serif font-light text-off-white mb-4">2-3</div>
                  <div className="text-xl text-gray-300 mb-2">Qualified Leads Per Day</div>
                  <div className="text-sm text-gray-400">No ads, no gimmicks</div>
                </div>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    Most agents think SEO is about traffic. It's not. It's about leads, commission, and closings.
                  </p>
                  <p>
                    Rick's transformation proves that the right SEO strategy doesn't just bring traffic—it brings the right traffic that converts into real business.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/5 border border-white/10 p-6">
                <Image
                  src="/images/RickAfter.png"
                  alt="Rick's website after optimization showing proper keyword rankings"
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
                  src="/images/RickReview.jpeg"
                  alt="Rick's 5-star review testimonial"
                  width={400}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
              
              <blockquote className="text-2xl font-serif font-light text-off-black mb-8 leading-relaxed">
                "Exceptional SEO services. DMR <span className="italic">Media</span> provided a strategic approach to SEO that resulted in top rankings for real estate search terms, significantly increased organic traffic, and a higher volume of qualified leads and property inquiries. Their transparent communication, regular performance reporting, and detailed analytics made the process seamless. I highly recommend DMR <span className="italic">Media</span> to any real estate business looking to enhance their online presence and generate more leads."
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-off-black text-off-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-serif">R</span>
                </div>
                <div className="text-left">
                  <div className="text-xl font-medium text-off-black">Rick</div>
                  <div className="text-gray-dark">Visions First Realty</div>
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
            Ready to Fix Your SEO Strategy?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join Rick and other real estate professionals who have transformed their SEO from traffic-focused to lead-focused with DMR <span className="italic">Media</span>.
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
