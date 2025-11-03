import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Roman Balandin Realty Company | Manalapan, NJ | DMR Media',
  description: "Central NJ's $300 Million Closer. 1,000+ homes sold, 24-hour 'Ninja Negotiations' that squeeze an extra $15k on average.",
  keywords: 'Roman Balandin, Manalapan real estate, Central NJ realtors, Princeton area real estate, New Jersey homes',
};

export default function RomanBalandinRealtyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/brokerages/new-jersey"
            className="inline-flex items-center text-[#D4AF37] hover:text-[#B8941F] mb-6 transition-colors"
          >
            ← Back to New Jersey Brokerages
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Roman Balandin Realty Company
            </h1>
            <p className="text-2xl md:text-3xl text-[#D4AF37] mb-4">
              Central NJ's $300 Million Closer
            </p>
            <p className="text-xl text-gray-300 mb-8">
              We don't just close—we conquer.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Homes Sold</div>
                <div className="text-2xl font-bold">1,000+</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Career Volume</div>
                <div className="text-2xl font-bold">$300M+</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Specialty</div>
                <div className="text-2xl font-bold">Ninja Negotiations</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://newjerseyresidence.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
              >
                Visit Website
              </a>
              <a 
                href="tel:732-851-4470"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Call: 732-851-4470
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">About Roman Balandin Realty Company</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                100% Independent brokerage located in Manalapan, just 15 minutes to Princeton. A master negotiator with over $300 million in closed transactions.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Signature Move</h3>
              <p className="text-gray-700 mb-8">
                24-hour "Ninja Negotiations"—clients brag he squeezes an extra $15k on average.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Perfect For</h3>
              <p className="text-gray-700 mb-8">
                First-timers in Freehold or doctors relocating to Marlboro.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">2025 Achievements</h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>1,000+ homes sold lifetime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>$300M+ closed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>24-hour "Ninja Negotiations"</span>
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
              <h3 className="text-2xl font-bold mb-4">Manalapan, NJ</h3>
              <p className="text-gray-600 mb-4">7 South Main St, Manalapan (15 min to Princeton)</p>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Phone:</span>
                  <a href="tel:732-851-4470" className="text-[#D4AF37] hover:underline">732-851-4470</a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Website:</span>
                  <a href="https://newjerseyresidence.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                    newjerseyresidence.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Instagram:</span>
                  <a href="https://instagram.com/romanbalandinrealty" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                    @romanbalandinrealty
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ninja Negotiations Feature */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              The Extra $15k Difference
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our 24-hour "Ninja Negotiations" aren't just fast—they're strategic. Clients consistently see an average of $15k more in their pockets thanks to our aggressive yet professional negotiation tactics.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Experience Ninja Negotiations</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Ready to get $15k more on your deal? Contact Central NJ's $300 Million Closer today.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
