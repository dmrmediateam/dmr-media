import Image from 'next/image';
import Link from 'next/link';

export default function MichaelCaseStudy() {
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
              Michael's SEO Transformation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From abandoned SEO to 21x impressions growth - how we transformed Michael's website into a lead generation machine in just 7.5 weeks.
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
                Meet Michael - Our Camera-Shy Success Story
              </h2>
              <div className="space-y-6 text-gray-dark leading-relaxed">
                <p>
                  Meet Michael, one of our clients who's soft-spoken and camera-shy. Despite all this, he gave us a video testimonial!
                </p>
                <p>
                  We've been working with Michael for 2 months now, generating leads through SEO. His transformation from an abandoned website to a lead generation powerhouse is nothing short of remarkable.
                </p>
                <p>
                  When we found Michael's website, it was a standard KVcore website - simply a template and a prayer.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-off-white p-8 border border-gray-200">
                <div className="text-center">
                  <div className="w-24 h-24 bg-off-black text-off-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-serif">M</span>
                  </div>
                  <h3 className="text-2xl font-serif font-light text-off-black mb-2">Michael</h3>
                  <p className="text-gray-dark mb-4">Real Estate Professional</p>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-dark italic">
                    "Despite being camera-shy, Michael gave us a video testimonial!"
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
              How We Found It
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              When we found Michael's website, it was a standard KVcore website - simply a template and a prayer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white border border-gray-200">
              <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-off-black mb-2">Settings Unused</h3>
              <p className="text-gray-dark text-sm">KVcore features left abandoned</p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-200">
              <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-off-black mb-2">SEO Abandoned</h3>
              <p className="text-gray-dark text-sm">No search optimization strategy</p>
            </div>

            <div className="text-center p-6 bg-white border border-gray-200">
              <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-off-black mb-2">Generic Squeeze Page</h3>
              <p className="text-gray-dark text-sm">Template-based lead capture</p>
            </div>
          </div>

          {/* Before Screenshot */}
          <div className="bg-white p-8 border border-gray-200">
            <h3 className="text-2xl font-serif font-light text-off-black mb-6 text-center">Before: Abandoned Settings</h3>
            <div className="relative">
              <Image
                src="/images/KVCoreshowingUnusedSettings.png"
                alt="Michael's website showing unused KVcore settings"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Website Re-Development */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Website Re-Development
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              That's when we came in to turn their website into a lead machine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6 text-gray-dark leading-relaxed">
                <p>
                  The first step was to get the website up and indexed with Google. To do this, we had to completely redo the website - every page, every post, every URL slug, the whole nine yards.
                </p>
                <p>
                  The website, now on WordPress, could be properly indexed by search engines. This was the foundation for everything that followed.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-off-white p-8 border border-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6 rounded-full">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-light text-off-black mb-4">Complete Rebuild</h3>
                  <ul className="text-gray-dark text-left space-y-2">
                    <li>• Every page redesigned</li>
                    <li>• Every post optimized</li>
                    <li>• Every URL slug restructured</li>
                    <li>• WordPress migration</li>
                    <li>• Google indexing enabled</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The SEO Process */}
      <section className="section-padding bg-off-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              The SEO Process
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              We began our SEO process to draw people to the website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-gray-200">
              <div className="w-12 h-12 bg-off-black text-off-white flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-off-black mb-4">
                Local & Niche Backlinking
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Strategic link building targeting local real estate authority sites and niche-specific directories to boost domain authority.
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-200">
              <div className="w-12 h-12 bg-off-black text-off-white flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-off-black mb-4">
                Quality Blog Posts
              </h3>
              <p className="text-gray-dark leading-relaxed">
                High-value content creation targeting buyer and seller intent keywords to establish topical authority and drive organic traffic.
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-200">
              <div className="w-12 h-12 bg-off-black text-off-white flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-off-black mb-4">
                Google My Business Optimization
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Complete GMB profile optimization with strategic keyword targeting and local SEO best practices for maximum visibility.
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
              Seven and a half weeks later, Michael's website is getting 21x the impressions and most importantly, actually generating leads.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-6xl font-serif font-light text-off-white mb-4">21x</div>
                  <div className="text-xl text-gray-300 mb-2">Impressions Growth</div>
                  <div className="text-sm text-gray-400">In just 7.5 weeks</div>
                </div>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    These leads are now leading to a steady stream of closings. No more guesswork. Just dial and sign.
                  </p>
                  <p>
                    Michael's transformation from an abandoned website to a lead generation machine proves that with the right strategy and execution, any real estate professional can dominate their local market.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/5 border border-white/10 p-6">
                <Image
                  src="/images/MichealTraffic.png"
                  alt="Michael's traffic analytics showing 21x growth in impressions"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-off-white p-12 border border-gray-200">
              <h3 className="text-3xl font-serif font-light text-off-black mb-8">
                Michael's Video Testimonial
              </h3>
              
              <div className="relative w-full h-0 pb-[56.25%] mb-8">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/ng_7ysEAlkc?si=0JYkw5J99GOUWYOE"
                  title="Michael's Video Testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              
              <blockquote className="text-xl font-serif font-light text-off-black italic mb-6">
                "Despite being camera-shy, Michael gave us a video testimonial!"
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-off-black text-off-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-serif">M</span>
                </div>
                <div className="text-left">
                  <div className="text-xl font-medium text-off-black">Michael</div>
                  <div className="text-gray-dark">Real Estate Professional</div>
                  <div className="flex text-yellow-400 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* YouTube Link */}
              <div className="mt-8 pt-6 border-t border-gray-300">
                <p className="text-gray-dark mb-4">Watch the full testimonial on YouTube:</p>
                <a 
                  href="https://youtu.be/ng_7ysEAlkc?si=0JYkw5J99GOUWYOE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-off-black hover:text-gray-dark transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="font-medium">Watch on YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-off-white mb-6">
            Ready to Transform Your Website?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join Michael and other real estate professionals who have transformed their digital presence with DMR <span className="italic">Media</span>.
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
