import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Visions First Realty | Ashland, WI | DMR Media',
  description: "Northern Wisconsin's SEO Leaders. Hyperlocal content strategy dominating Lake Superior search results. 2.7x impressions increase with DMR Media partnership.",
  keywords: 'Visions First Realty, Ashland real estate, Northern Wisconsin realtors, SEO optimization, local rankings',
};

export default function VisionsFirstRealtyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/brokerages/wisconsin"
            className="inline-flex items-center text-[#D4AF37] hover:text-[#B8941F] mb-6 transition-colors"
          >
            ← Back to Wisconsin Brokerages
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Visions First Realty
            </h1>
            <p className="text-2xl md:text-3xl text-[#D4AF37] mb-4">
              Northern Wisconsin's SEO Leaders
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Connecting Northern Wisconsin families with their dream properties through proven local expertise.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Rankings</div>
                <div className="text-2xl font-bold">Top Local</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Impressions</div>
                <div className="text-2xl font-bold">2.7x Growth</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Location</div>
                <div className="text-2xl font-bold">Ashland</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.visionsfirstrealty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
              >
                Visit Website
              </a>
              <a 
                href="tel:715-555-0200"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Call: 715-555-0200
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">About Visions First Realty</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Independent brokerage serving Ashland, Washburn, and Lake Superior communities with hyperlocal expertise.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Signature Move</h3>
              <p className="text-gray-700 mb-8">
                Hyperlocal content strategy featuring community events and neighborhood spotlights that dominate Northern Wisconsin search results.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Perfect For</h3>
              <p className="text-gray-700 mb-8">
                Buyers and sellers in Ashland, Washburn, and surrounding Lake Superior communities.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">2024 Achievements</h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>Top rankings for key real estate search terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>2.7x impressions increase</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>Rural market SEO success story</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Office Location</h2>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Ashland, WI</h3>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Phone:</span>
                  <a href="tel:715-555-0200" className="text-[#D4AF37] hover:underline">715-555-0200</a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Website:</span>
                  <a href="https://www.visionsfirstrealty.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                    visionsfirstrealty.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              See How We Helped Visions First Realty
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Read the full case study to learn how our hyperlocal SEO strategy achieved top rankings and 2.7x impressions growth.
            </p>
            <Link 
              href="/case-study/rick-visions-first-realty"
              className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
            >
              Read Case Study →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Partner With DMR Media</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Ready to dominate your local market like Visions First Realty? Let's build your hyperlocal SEO strategy.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
