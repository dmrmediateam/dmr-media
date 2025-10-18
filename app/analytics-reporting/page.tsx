import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

export const metadata = {
  title: 'Analytics & Reporting for Real Estate | DMR Media',
  description: 'Data-driven insights and transparent reporting to track campaign performance and optimize results for luxury real estate professionals.',
};

export default function AnalyticsReportingPage() {
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
          src="/images/StockHomes/a-backyard-with-a-swimming-pool-hot-tub-and-pati-2025-02-10-06-23-51-utc.jpg"
          alt="Analytics & Reporting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 container-max text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-white">
              Analytics & <span className="italic">Reporting</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Data-driven insights and transparent reporting to track campaign performance and optimize results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary">Get Started</Link>
              <Link href="#how-it-works" className="btn-outline border-white text-white hover:bg-white hover:text-off-black">
                How It Works
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
              <div className="text-5xl md:text-6xl font-serif font-light mb-4">Weekly</div>
              <div className="text-lg text-gray-300 mb-2">Report Delivery</div>
              <div className="text-sm text-gray-400">Detailed Insights</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light mb-4">50+</div>
              <div className="text-lg text-gray-300 mb-2">Metrics Tracked</div>
              <div className="text-sm text-gray-400">Comprehensive Data</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light mb-4">100%</div>
              <div className="text-lg text-gray-300 mb-2">Transparent</div>
              <div className="text-sm text-gray-400">No Hidden Metrics</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Our Reporting <span className="italic">Process</span>
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: '01',
                title: 'Custom Dashboard Setup',
                description: 'We create personalized dashboards that track the metrics that matter most to your real estate business and goals.',
              },
              {
                step: '02',
                title: 'Real-Time Monitoring',
                description: 'Access live data on website traffic, lead generation, ad performance, and conversion rates anytime, anywhere.',
              },
              {
                step: '03',
                title: 'Weekly Reports',
                description: 'Receive comprehensive weekly reports with actionable insights, performance trends, and strategic recommendations.',
              },
              {
                step: '04',
                title: 'Strategy Optimization',
                description: 'We use data insights to continuously refine your marketing strategy, focusing budget on what works best.',
              }
            ].map((item, index) => (
              <div key={index} className="bg-off-white p-8 border-l-4 border-gold hover:shadow-xl transition-all duration-500">
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
                href={city.slug.startsWith('#') ? city.slug : `/analytics-reporting/${city.slug}`}
                className="group relative h-48 overflow-hidden border border-gray-200 hover:border-gold transition-all duration-500"
              >
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500"></div>
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-serif font-light text-white group-hover:text-gold transition-colors duration-500">
                    {city.name}{city.state !== 'USA' ? `, ${city.state}` : ''}
                  </h3>
                  <p className="text-white text-sm mt-2">
                    {city.slug.startsWith('#') ? 'Contact us for your city →' : 'View local analytics services →'}
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
            Ready for Data-Driven Success?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Get transparent reporting and actionable insights that drive real results for your real estate business.
          </p>
          <Link href="#contact" className="btn-primary inline-block">
            Get Started Today
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

