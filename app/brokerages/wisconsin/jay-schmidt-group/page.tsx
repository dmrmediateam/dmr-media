import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'The Jay Schmidt Group | Shorewood, WI | DMR Media',
  description: "Wisconsin's #1 Volume Team with 440+ closings in 2024. Keller Williams North Shore's top team offering concierge 'Cadillac' service.",
  keywords: 'Jay Schmidt Group, Milwaukee real estate, Shorewood realtors, Wisconsin top team, Keller Williams',
};

export default function JaySchmidtGroupPage() {
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
              The Jay Schmidt Group
            </h1>
            <p className="text-2xl md:text-3xl text-[#D4AF37] mb-4">
              Wisconsin's #1 Volume Team (440+ closings last year)
            </p>
            <p className="text-xl text-gray-300 mb-8">
              440 families last year can't be wrong.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">2024 Closings</div>
                <div className="text-2xl font-bold">440+</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">State Ranking</div>
                <div className="text-2xl font-bold">#1 Team</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Location</div>
                <div className="text-2xl font-bold">Shorewood</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://jayschmidtgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
              >
                Visit Website
              </a>
              <a 
                href="tel:414-852-6153"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Call: 414-852-6153
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">About The Jay Schmidt Group</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Keller Williams North Shore team based in Shorewood, Metro Milwaukee. The #1 team in the entire state of Wisconsin.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Signature Move</h3>
              <p className="text-gray-700 mb-8">
                Concierge "Cadillac" service—every client gets a licensed partner agent so nothing falls through the cracks.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Perfect For</h3>
              <p className="text-gray-700 mb-8">
                North Shore families trading up or Lake Country second-home buyers.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">2024 Achievements</h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>#1 team in the entire state</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>440+ closings in 2024</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>In-house stager + pro photographer on every listing</span>
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
              <h3 className="text-2xl font-bold mb-4">Shorewood (Metro Milwaukee)</h3>
              <p className="text-gray-600 mb-4">4050 N Oakland Ave, Shorewood, WI</p>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Phone:</span>
                  <a href="tel:414-852-6153" className="text-[#D4AF37] hover:underline">414-852-6153</a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Website:</span>
                  <a href="https://jayschmidtgroup.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                    jayschmidtgroup.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Instagram:</span>
                  <a href="https://instagram.com/jayschmidtgroup" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                    @jayschmidtgroup
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Work With Wisconsin's #1 Team</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Experience the concierge "Cadillac" service that made us the state's top team. Contact us today.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
