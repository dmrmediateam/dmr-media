import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

export const metadata = {
  title: 'Google Ads Management for Real Estate | DMR Media',
  description: 'Maximize ROI with precision-targeted Google Ads campaigns designed to reach affluent homebuyers and sellers in luxury real estate markets.',
};

export default function GoogleAdsPage() {
  const caseStudies = [
    {
      id: 'jade-legendary-real-estate',
      title: "Jade's Lead Generation Success",
      client: "Jade Goodhue",
      company: "Legendary Real Services",
      result: "3x Lead Generation",
      description: "From frustrated content creator to lead generation powerhouse - how we transformed Jade's digital marketing strategy and tripled her inbound leads in one quarter.",
      image: "/images/JadeCRM.png",
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
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/StockHomes/spacious-living-room-with-staircase-in-residence-2025-10-10-15-17-44-utc (1).jpg"
          alt="Google Ads Management for Real Estate"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 container-max text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-white">
              Google Ads for <span className="italic">Luxury Real Estate</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Maximize ROI with precision-targeted Google Ads campaigns designed to reach affluent homebuyers and sellers.
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

      {/* Stats */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light mb-4">450%</div>
              <div className="text-lg text-gray-300 mb-2">Average ROI</div>
              <div className="text-sm text-gray-400">On Ad Spend</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light mb-4">3-5x</div>
              <div className="text-lg text-gray-300 mb-2">Lead Increase</div>
              <div className="text-sm text-gray-400">First 60 Days</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light mb-4">$2.50</div>
              <div className="text-lg text-gray-300 mb-2">Avg Cost Per Lead</div>
              <div className="text-sm text-gray-400">Luxury Markets</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Google Ads Success Stories
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
          </div>

          <div className="max-w-7xl mx-auto">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-study/${study.id}`}
                className="relative h-[500px] overflow-hidden group cursor-pointer block"
              >
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500"></div>
                
                <div className="relative h-full flex flex-col justify-end p-10">
                  <div className="inline-block px-5 py-2 bg-gold/90 text-off-black font-bold text-lg mb-6 w-fit">
                    {study.result}
                  </div>
                  <h3 className="text-3xl font-serif font-light text-white mb-3">{study.title}</h3>
                  <p className="text-white/80 leading-relaxed max-w-3xl">{study.description}</p>
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
              Our Google Ads <span className="italic">Process</span>
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: '01',
                title: 'Strategy & Targeting',
                description: 'We research your ideal client demographics, create buyer personas, and develop a comprehensive targeting strategy for maximum reach and efficiency.',
              },
              {
                step: '02',
                title: 'Campaign Creation',
                description: 'We build compelling ad copy, design attention-grabbing visuals, and structure campaigns for optimal performance across search, display, and remarketing.',
              },
              {
                step: '03',
                title: 'Budget Optimization',
                description: 'We carefully manage your ad spend, adjusting bids in real-time to maximize conversions while maintaining your target cost-per-lead.',
              },
              {
                step: '04',
                title: 'Testing & Scaling',
                description: 'We continuously A/B test ad variations, landing pages, and audiences to improve performance and scale winning campaigns.',
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 border-l-4 border-gold hover:shadow-xl transition-all duration-500">
                <div className="text-6xl font-serif font-light text-gold/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-serif font-light text-off-black mb-3">{item.title}</h3>
                <p className="text-gray-dark leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Cities */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Cities We <span className="italic">Serve</span>
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCities.map((city) => (
              <Link
                key={city.slug}
                href={city.slug.startsWith('#') ? city.slug : `/google-ads-management/${city.slug}`}
                className="group relative h-48 overflow-hidden border border-gray-200 hover:border-gold transition-all duration-500"
              >
                <Image
                  src={city.image}
                  alt={`Google Ads in ${city.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500"></div>
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-serif font-light text-white group-hover:text-gold transition-colors duration-500">
                    {city.name}{city.state !== 'USA' ? `, ${city.state}` : ''}
                  </h3>
                  <p className="text-white text-sm mt-2">
                    {city.slug.startsWith('#') ? 'Contact us for your city →' : 'View local Google Ads services →'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Ready to Generate Quality Leads?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Start your Google Ads campaign today and connect with buyers actively searching for properties in your market.
          </p>
          <Link href="#contact" className="btn-primary inline-block">
            Launch Your Campaign
          </Link>
        </div>
      </section>

      {/* Contact */}
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}

