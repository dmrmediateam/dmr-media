import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';

const locationData: Record<string, {
  name: string;
  stateAbbr: string;
  dataComplexity: string;
}> = {
  'new-york-ny': { name: 'New York', stateAbbr: 'NY', dataComplexity: 'Very High' },
  'los-angeles-ca': { name: 'Los Angeles', stateAbbr: 'CA', dataComplexity: 'Very High' },
  'chicago-il': { name: 'Chicago', stateAbbr: 'IL', dataComplexity: 'High' },
  'houston-tx': { name: 'Houston', stateAbbr: 'TX', dataComplexity: 'Medium-High' },
  'phoenix-az': { name: 'Phoenix', stateAbbr: 'AZ', dataComplexity: 'Medium' }
};

export async function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({ location }));
}

export async function generateMetadata({ params }: { params: { location: string } }) {
  const location = locationData[params.location];
  if (!location) return { title: 'Location Not Found' };

  return {
    title: `Analytics & Reporting in ${location.name}, ${location.stateAbbr} | Real Estate Marketing Analytics | DMR Media`,
    description: `Comprehensive analytics and reporting services for real estate professionals in ${location.name}, ${location.stateAbbr}. Data-driven insights that optimize your marketing ROI.`,
  };
}

export default function LocationAnalyticsPage({ params }: { params: { location: string } }) {
  const location = locationData[params.location];
  if (!location) notFound();

  return (
    <div className="min-h-screen bg-off-white">
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <Image src="/images/StockHomes/a-backyard-with-a-swimming-pool-hot-tub-and-pati-2025-02-10-06-23-51-utc.jpg" alt={`Analytics in ${location.name}`} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 container-max text-white">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-gold/90 text-off-black font-semibold text-sm uppercase tracking-wider mb-6">
              {location.name}, {location.stateAbbr}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-white">
              Analytics & Reporting in <span className="italic">{location.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Data-driven insights and transparent reporting for {location.name} real estate professionals.
            </p>
            <Link href="#contact" className="btn-primary">Get Started</Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-light mb-3">Weekly</div>
              <div className="text-sm text-gray-400">Report Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-light mb-3">50+</div>
              <div className="text-sm text-gray-400">Metrics Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-light mb-3">100%</div>
              <div className="text-sm text-gray-400">Transparent</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-8">
              {location.name} Market <span className="italic">Intelligence</span>
            </h2>
            <p className="text-lg text-gray-dark leading-relaxed mb-6">
              Navigate {location.name}'s {location.dataComplexity.toLowerCase()} market complexity with comprehensive analytics and actionable insights tailored to your business goals.
            </p>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Ready for Data-Driven Success in {location.name}?
          </h2>
          <Link href="#contact" className="btn-primary inline-block">Get Started</Link>
        </div>
      </section>

      <div id="contact"><ContactForm /></div>
    </div>
  );
}

