import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

// Location data with SEO-optimized content
const locationData: Record<string, {
  name: string;
  state: string;
  stateAbbr: string;
  population: string;
  medianHomePrice: string;
  marketType: string;
  topNeighborhoods: string[];
  keyFeatures: string[];
}> = {
  'new-york-ny': {
    name: 'New York',
    state: 'New York',
    stateAbbr: 'NY',
    population: '8.3M',
    medianHomePrice: '$680K',
    marketType: 'Ultra-Competitive Luxury Market',
    topNeighborhoods: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'],
    keyFeatures: ['High competition', 'Luxury market focus', 'International buyers']
  },
  'los-angeles-ca': {
    name: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9M',
    medianHomePrice: '$890K',
    marketType: 'Premium Coastal Market',
    topNeighborhoods: ['Beverly Hills', 'Santa Monica', 'Hollywood', 'Venice', 'Malibu'],
    keyFeatures: ['Celebrity market', 'Coastal properties', 'High-end luxury']
  },
  'chicago-il': {
    name: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    population: '2.7M',
    medianHomePrice: '$310K',
    marketType: 'Urban Professional Market',
    topNeighborhoods: ['Lincoln Park', 'Gold Coast', 'River North', 'Wicker Park', 'Loop'],
    keyFeatures: ['Urban luxury', 'Corporate relocations', 'Architectural significance']
  },
  'houston-tx': {
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2.3M',
    medianHomePrice: '$280K',
    marketType: 'Growing Business Hub',
    topNeighborhoods: ['River Oaks', 'Memorial', 'The Heights', 'Montrose', 'Bellaire'],
    keyFeatures: ['Energy sector growth', 'Suburban expansion', 'No state income tax']
  },
  'phoenix-az': {
    name: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '1.7M',
    medianHomePrice: '$430K',
    marketType: 'Fast-Growing Sun Belt Market',
    topNeighborhoods: ['Paradise Valley', 'Scottsdale', 'Arcadia', 'Biltmore', 'Camelback East'],
    keyFeatures: ['Rapid growth', 'Retirement destination', 'Desert luxury']
  }
};

export async function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({
    location: location,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  
  if (!location) {
    return {
      title: 'Location Not Found | DMR Media',
    };
  }

  return {
    title: `SEO Services in ${location.name}, ${location.stateAbbr} | Real Estate SEO | DMR Media`,
    description: `Expert SEO optimization for real estate professionals in ${location.name}, ${location.stateAbbr}. Dominate local search results and attract high-value clients in the ${location.name} market. ${location.population} population, ${location.medianHomePrice} median home price.`,
  };
}

export default async function LocationSEOPage({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];

  if (!location) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg"
          alt={`SEO Services in ${location.name}, ${location.stateAbbr}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 container-max text-white">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-gold/90 text-off-black font-semibold text-sm uppercase tracking-wider mb-6">
              {location.name}, {location.stateAbbr}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-white">
              SEO Services for <span className="italic">Real Estate</span> in {location.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Dominate {location.name}'s {location.marketType.toLowerCase()} with strategic SEO campaigns that attract qualified buyers and sellers in your target neighborhoods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary">
                Get Started in {location.name}
              </Link>
              <Link href="/seo-optimization" className="btn-outline border-white text-white hover:bg-white hover:text-off-black">
                View All Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Stats */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-off-white mb-4">
              {location.name} Market Overview
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-light text-off-white mb-3">
                {location.population}
              </div>
              <div className="text-sm text-gray-400">Population</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-light text-off-white mb-3">
                {location.medianHomePrice}
              </div>
              <div className="text-sm text-gray-400">Median Home Price</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-light text-off-white mb-3">
                300%+
              </div>
              <div className="text-sm text-gray-400">Avg Traffic Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-light text-off-white mb-3">
                #1
              </div>
              <div className="text-sm text-gray-400">Local Rankings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SEO Matters in This Location */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-8 text-center">
              Why SEO Matters in <span className="italic">{location.name}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {location.keyFeatures.map((feature, index) => (
                <div key={index} className="bg-off-white p-6 border-l-4 border-gold">
                  <p className="text-gray-dark">{feature}</p>
                </div>
              ))}
            </div>
            <div className="prose prose-lg max-w-none text-gray-dark">
              <p className="text-lg leading-relaxed mb-6">
                {location.name}'s {location.marketType.toLowerCase()} presents unique opportunities for real estate professionals. With a population of {location.population} and a median home price of {location.medianHomePrice}, standing out online is crucial.
              </p>
              <p className="text-lg leading-relaxed">
                Our specialized SEO strategies help you dominate search results in {location.name}'s most sought-after neighborhoods, ensuring your listings and services reach the right buyers and sellers at the right time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Neighborhoods */}
      <section className="section-padding bg-off-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Top Neighborhoods in <span className="italic">{location.name}</span>
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              We specialize in SEO for these high-demand {location.name} areas
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {location.topNeighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white p-6 text-center border border-gray-200 hover:border-gold hover:shadow-lg transition-all duration-300">
                <p className="font-serif text-lg text-off-black">{neighborhood}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Location Specific */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Our {location.name} <span className="italic">SEO Process</span>
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: `${location.name} Market Analysis`,
                description: `We research ${location.name}'s real estate market, analyze your competitors, and identify the most valuable keywords for your target neighborhoods.`,
              },
              {
                title: 'Local SEO Optimization',
                description: `Optimize your Google Business Profile, local citations, and website for ${location.name}-specific searches to dominate local results.`,
              },
              {
                title: `${location.name} Content Strategy`,
                description: `Create neighborhood guides, market reports, and localized content that positions you as the go-to expert in ${location.name} real estate.`,
              },
              {
                title: 'Performance Tracking',
                description: `Monitor your rankings for ${location.name} keywords, track lead generation, and continuously optimize for maximum ROI.`,
              }
            ].map((item, index) => (
              <div key={index} className="bg-off-white p-8 border-l-4 border-gold">
                <div className="text-6xl font-serif font-light text-gold/20 mb-4">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="text-2xl font-serif font-light text-off-black mb-3">{item.title}</h3>
                <p className="text-gray-dark leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Ready to Dominate {location.name}?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join successful real estate professionals in {location.name}, {location.stateAbbr} who trust DMR Media for exceptional SEO results.
          </p>
          <Link href="#contact" className="btn-primary inline-block">
            Start Your {location.name} SEO Campaign
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

