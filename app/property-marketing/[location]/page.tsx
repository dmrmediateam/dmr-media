import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

const locationData: Record<string, {
  name: string;
  stateAbbr: string;
  avgDaysOnMarket: string;
  luxuryMarketShare: string;
}> = {
  'new-york-ny': { name: 'New York', stateAbbr: 'NY', avgDaysOnMarket: '45', luxuryMarketShare: '28%' },
  'los-angeles-ca': { name: 'Los Angeles', stateAbbr: 'CA', avgDaysOnMarket: '38', luxuryMarketShare: '32%' },
  'chicago-il': { name: 'Chicago', stateAbbr: 'IL', avgDaysOnMarket: '52', luxuryMarketShare: '18%' },
  'houston-tx': { name: 'Houston', stateAbbr: 'TX', avgDaysOnMarket: '48', luxuryMarketShare: '15%' },
  'phoenix-az': { name: 'Phoenix', stateAbbr: 'AZ', avgDaysOnMarket: '35', luxuryMarketShare: '22%' }
};

export async function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({ location }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  if (!location) return { title: 'Location Not Found' };

  return {
    title: `Property Marketing in ${location.name}, ${location.stateAbbr} | Luxury Real Estate Marketing | DMR Media`,
    description: `Professional property marketing services in ${location.name}, ${location.stateAbbr}. Showcase luxury listings with stunning campaigns that attract qualified buyers.`,
  };
}

export default async function LocationPropertyMarketingPage({ params }: { params: Promise<{ location: string }> }) {
  const { location: locationSlug } = await params;
  const location = locationData[locationSlug];
  if (!location) notFound();

  return (
    <div className="min-h-screen bg-off-white">
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <Image src="/images/StockHomes/studio-apartment-interior-with-wooden-furniture-2025-02-09-23-29-43-utc.jpg" alt={`Property Marketing in ${location.name}`} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 container-max text-white">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-gold/90 text-off-black font-semibold text-sm uppercase tracking-wider mb-6">
              {location.name}, {location.stateAbbr}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-white">
              Property Marketing in <span className="italic">{location.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Showcase premium {location.name} listings with sophisticated marketing campaigns that attract qualified buyers.
            </p>
            <Link href="#contact" className="btn-primary">Market Your Property</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-light mb-3">{location.avgDaysOnMarket}</div>
              <div className="text-sm text-gray-400">Avg Days On Market</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-light mb-3">{location.luxuryMarketShare}</div>
              <div className="text-sm text-gray-400">Luxury Market Share</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-light mb-3">250K+</div>
              <div className="text-sm text-gray-400">Avg Impressions</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-8">
              Premium Marketing for <span className="italic">{location.name}</span> Properties
            </h2>
            <p className="text-lg text-gray-dark leading-relaxed mb-6">
              Stand out in {location.name}'s competitive market with professional photography, multi-channel distribution, and targeted advertising that reaches serious buyers.
            </p>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Ready to Market Your {location.name} Property?
          </h2>
          <Link href="#contact" className="btn-primary inline-block">Get Started</Link>
        </div>
      </section>

      <div id="contact"><ContactForm /></div>
    </div>
  );
}

