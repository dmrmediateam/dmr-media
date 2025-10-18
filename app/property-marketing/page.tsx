import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

export const metadata = {
  title: 'Property Marketing for Real Estate | DMR Media',
  description: 'Showcase premium listings with sophisticated digital marketing campaigns that attract qualified buyers and maximize property exposure.',
};

export default function PropertyMarketingPage() {
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
          src="/images/StockHomes/studio-apartment-interior-with-wooden-furniture-2025-02-09-23-29-43-utc.jpg"
          alt="Property Marketing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 container-max text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-white">
              Premium Property <span className="italic">Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Showcase luxury listings with sophisticated digital campaigns that attract qualified buyers and maximize property exposure.
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
              <div className="text-5xl md:text-6xl font-serif font-light mb-4">40%</div>
              <div className="text-lg text-gray-300 mb-2">Faster Sales</div>
              <div className="text-sm text-gray-400">Than Market Average</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light mb-4">250K+</div>
              <div className="text-lg text-gray-300 mb-2">Avg Impressions</div>
              <div className="text-sm text-gray-400">Per Listing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light mb-4">95%</div>
              <div className="text-lg text-gray-300 mb-2">Client Satisfaction</div>
              <div className="text-sm text-gray-400">5-Star Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Our Marketing <span className="italic">Process</span>
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: '01',
                title: 'Professional Photography',
                description: 'High-quality photos and videos that showcase your property\'s best features and create emotional connections with potential buyers.',
              },
              {
                step: '02',
                title: 'Multi-Channel Distribution',
                description: 'Strategic distribution across MLS, social media, email campaigns, and premium real estate platforms for maximum exposure.',
              },
              {
                step: '03',
                title: 'Targeted Advertising',
                description: 'Precision-targeted ads on Facebook, Instagram, and Google to reach qualified buyers actively searching in your price range.',
              },
              {
                step: '04',
                title: 'Performance Analytics',
                description: 'Detailed tracking of views, engagement, and leads to continuously optimize your property\'s marketing performance.',
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
                href={city.slug.startsWith('#') ? city.slug : `/property-marketing/${city.slug}`}
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
                    {city.slug.startsWith('#') ? 'Contact us for your city →' : 'View local property marketing →'}
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
            Ready to Market Your Listings?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let us create stunning marketing campaigns that sell your properties faster and for top dollar.
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

