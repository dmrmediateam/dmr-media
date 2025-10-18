import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

export const metadata = {
  title: 'SEO Optimization for Real Estate | DMR Media',
  description: 'Dominate local search results and attract high-value clients with strategic SEO campaigns tailored for luxury real estate professionals.',
};

export default function SEOOptimizationPage() {
  const caseStudies = [
    {
      id: 'rick-visions-first-realty',
      title: "Rick's SEO Transformation",
      client: "Rick Grueble",
      company: "Visions First Realty",
      result: "2-3 Leads/Day",
      description: "From wrong keywords to qualified leads - how we fixed Rick's SEO strategy and transformed his website into a lead generation machine.",
      image: "/images/RickAfter.png",
    },
    {
      id: 'michael-seo-transformation',
      title: "Michael's SEO Success",
      client: "Michael",
      company: "Real Estate Professional",
      result: "21x Impressions",
      description: "From abandoned SEO to 21x impressions growth - how we transformed Michael's website into a lead generation machine in just 7.5 weeks.",
      image: "/images/MichealTraffic.png",
    }
  ];

  const topCities = [
    { name: 'New York', state: 'NY', slug: 'new-york-ny', image: '/images/Cities/NewYork.jpeg' },
    { name: 'Los Angeles', state: 'CA', slug: 'los-angeles-ca', image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg' },
    { name: 'Chicago', state: 'IL', slug: 'chicago-il', image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg' },
    { name: 'Houston', state: 'TX', slug: 'houston-tx', image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg' },
    { name: 'Phoenix', state: 'AZ', slug: 'phoenix-az', image: '/images/Cities/phoenix-arizona-state-capitol-2025-03-13-12-59-21-utc.jpg' },
    { name: 'All Other Cities', state: 'USA', slug: '#contact', image: '/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg' },
  ];

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg"
          alt="SEO Optimization for Real Estate"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 container-max text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-white">
              SEO Optimization for <span className="italic">Luxury Real Estate</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Dominate local search results and attract high-value clients with strategic SEO campaigns tailored for luxury real estate professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary">
                Get Started Today
              </Link>
              <Link href="#how-it-works" className="btn-outline border-white text-white hover:bg-white hover:text-off-black">
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light text-off-white mb-4">
                300%+
              </div>
              <div className="text-lg text-gray-300 mb-2">Average Traffic Growth</div>
              <div className="text-sm text-gray-400">First 90 Days</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light text-off-white mb-4">
                #1
              </div>
              <div className="text-lg text-gray-300 mb-2">Page Rankings</div>
              <div className="text-sm text-gray-400">For Targeted Keywords</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light text-off-white mb-4">
                2-3x
              </div>
              <div className="text-lg text-gray-300 mb-2">Lead Generation</div>
              <div className="text-sm text-gray-400">Monthly Average</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              SEO Success Stories
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              Real results from real estate professionals who dominated their local markets
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-study/${study.id}`}
                className="relative h-[500px] overflow-hidden group cursor-pointer"
              >
                <Image
                  src={study.image}
                  alt={`${study.client} case study results`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500"></div>
                
                <div className="relative h-full flex flex-col justify-end p-10">
                  <div className="inline-block px-5 py-2 bg-gold/90 text-off-black font-bold text-lg mb-6 w-fit">
                    {study.result}
                  </div>
                  <h3 className="text-3xl font-serif font-light text-white mb-3 group-hover:text-gold transition-colors duration-500">
                    {study.title}
                  </h3>
                  <div className="text-white/90 mb-4">
                    <div className="font-semibold text-lg">{study.client}</div>
                    <div className="text-sm">{study.company}</div>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6">
                    {study.description}
                  </p>
                  <div className="flex items-center text-white group-hover:text-gold transition-colors duration-500">
                    <span className="text-sm font-medium mr-2">Read Full Case Study</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding bg-off-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              How Our SEO <span className="italic">Process Works</span>
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              A proven 4-step process to dominate your local real estate market
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: '01',
                title: 'SEO Audit & Strategy',
                description: 'We analyze your current website performance, identify opportunities, and create a comprehensive SEO strategy tailored to your market and goals.',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
              },
              {
                step: '02',
                title: 'On-Page Optimization',
                description: 'We optimize your website structure, content, meta tags, and technical elements to ensure search engines can properly index and rank your site.',
                icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
              },
              {
                step: '03',
                title: 'Content Creation',
                description: 'We develop high-quality, keyword-optimized content that positions you as a local market authority and attracts your ideal clients.',
                icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
              },
              {
                step: '04',
                title: 'Monitoring & Optimization',
                description: 'We continuously track rankings, analyze performance data, and refine our strategy to ensure sustained growth and maximum ROI.',
                icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 border-l-4 border-gold hover:shadow-xl transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gold/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div className="text-6xl font-serif font-light text-gold/20 mt-4">{item.step}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-light text-off-black mb-3">{item.title}</h3>
                    <p className="text-gray-dark leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Cities We Serve */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Cities We <span className="italic">Serve</span>
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              Specialized SEO services for real estate professionals in major markets
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCities.map((city) => (
              <Link
                key={city.slug}
                href={city.slug.startsWith('#') ? city.slug : `/seo-optimization/${city.slug}`}
                className="group relative h-48 overflow-hidden border border-gray-200 hover:border-gold transition-all duration-500"
              >
                <Image
                  src={city.image}
                  alt={`SEO Services in ${city.name}, ${city.state}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500"></div>
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-serif font-light text-white group-hover:text-gold transition-colors duration-500">
                    {city.name}{city.state !== 'USA' ? `, ${city.state}` : ''}
                  </h3>
                  <p className="text-white text-sm mt-2">
                    {city.slug.startsWith('#') ? 'Contact us for your city →' : 'View local SEO services →'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Start Now CTA */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Ready to Dominate Your Market?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join successful real estate professionals who trust DMR Media to deliver exceptional SEO results and drive sustainable growth.
          </p>
          <Link href="#contact" className="btn-primary inline-block">
            Start Your SEO Campaign
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}

