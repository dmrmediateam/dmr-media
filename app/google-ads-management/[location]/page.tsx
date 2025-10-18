import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

const locationData: Record<string, {
  name: string;
  state: string;
  stateAbbr: string;
  population: string;
  medianHomePrice: string;
  avgCostPerClick: string;
  competitionLevel: string;
}> = {
  'new-york-ny': {
    name: 'New York',
    state: 'New York',
    stateAbbr: 'NY',
    population: '8.3M',
    medianHomePrice: '$680K',
    avgCostPerClick: '$4.50',
    competitionLevel: 'Very High'
  },
  'los-angeles-ca': {
    name: 'Los Angeles',
    state: 'California',
    stateAbbr: 'CA',
    population: '3.9M',
    medianHomePrice: '$890K',
    avgCostPerClick: '$5.20',
    competitionLevel: 'Very High'
  },
  'chicago-il': {
    name: 'Chicago',
    state: 'Illinois',
    stateAbbr: 'IL',
    population: '2.7M',
    medianHomePrice: '$310K',
    avgCostPerClick: '$3.10',
    competitionLevel: 'High'
  },
  'houston-tx': {
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    population: '2.3M',
    medianHomePrice: '$280K',
    avgCostPerClick: '$2.80',
    competitionLevel: 'Medium'
  },
  'phoenix-az': {
    name: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    population: '1.7M',
    medianHomePrice: '$430K',
    avgCostPerClick: '$3.40',
    competitionLevel: 'Medium-High'
  }
};

export async function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({ location }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  if (!location) return { title: 'Location Not Found' };

  return {
    title: `Google Ads Management in ${location.name}, ${location.stateAbbr} | Real Estate PPC | DMR Media`,
    description: `Expert Google Ads management for real estate in ${location.name}, ${location.stateAbbr}. Generate qualified leads with targeted PPC campaigns. ${location.population} population, ${location.medianHomePrice} median price.`,
  };
}

export default async function LocationGoogleAdsPage({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  if (!location) notFound();

  return (
    <div className="min-h-screen bg-off-white">
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <Image src="/images/StockHomes/spacious-living-room-with-staircase-in-residence-2025-10-10-15-17-44-utc (1).jpg" alt={`Google Ads in ${location.name}`} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 container-max text-white">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-gold/90 text-off-black font-semibold text-sm uppercase tracking-wider mb-6">
              {location.name}, {location.stateAbbr}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-white">
              Google Ads for <span className="italic">Real Estate</span> in {location.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Generate qualified leads with precision-targeted Google Ads campaigns designed for the {location.name} real estate market.
            </p>
            <Link href="#contact" className="btn-primary">Start Your Campaign</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-light mb-3">{location.avgCostPerClick}</div>
              <div className="text-sm text-gray-400">Avg Cost Per Click</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-light mb-3">{location.competitionLevel}</div>
              <div className="text-sm text-gray-400">Competition Level</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-light mb-3">450%</div>
              <div className="text-sm text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-light mb-3">3-5x</div>
              <div className="text-sm text-gray-400">Lead Increase</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-8">
              Why Google Ads in <span className="italic">{location.name}</span>
            </h2>
            <div className="prose prose-lg max-w-none text-gray-dark">
              <p className="text-lg leading-relaxed mb-6">
                {location.name}'s real estate market demands strategic digital advertising. With {location.population} potential clients and a median home price of {location.medianHomePrice}, Google Ads provides immediate visibility for your listings and services.
              </p>
              <p className="text-lg leading-relaxed">
                Our {location.name}-specific campaigns target buyers actively searching for properties, generating qualified leads while you focus on closing deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Ready to Generate Leads in {location.name}?
          </h2>
          <Link href="#contact" className="btn-primary inline-block">Start Your Campaign</Link>
        </div>
      </section>

      <div id="contact"><ContactForm /></div>
    </div>
  );
}

