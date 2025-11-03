import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'South Jersey Realty | Toms River, NJ | DMR Media',
  description: "Shore-to-Philly Speed Demons. 400+ closings with the '48-Hour Shore Blitz.' Top 1% Keller Williams NJ team dominating the Jersey Shore market.",
  keywords: 'South Jersey Realty, Toms River real estate, Jersey Shore homes, LBI real estate, Ocean County realtors',
};

export default function SouthJerseyRealtyPage() {
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
              South Jersey Realty
            </h1>
            <p className="text-2xl md:text-3xl text-[#D4AF37] mb-4">
              Shore-to-Philly Speed Demons
            </p>
            <p className="text-xl text-gray-300 mb-8">
              From bay to bay in 48 hours.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Annual Closings</div>
                <div className="text-2xl font-bold">400+</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">KW Ranking</div>
                <div className="text-2xl font-bold">Top 1% NJ</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Specialty</div>
                <div className="text-2xl font-bold">Shore Blitz</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://southjerseyrealty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
              >
                Visit Website
              </a>
              <a 
                href="tel:609-693-2800"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Call: 609-693-2800
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">About South Jersey Realty</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Keller Williams Shore Properties team based in Toms River, just 10 minutes to LBI bridges. Top 1% of all Keller Williams agents in New Jersey.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Signature Move</h3>
              <p className="text-gray-700 mb-8">
                "48-Hour Shore Blitz"—drone video + Matterport + TikTok reel = 3 offers in the first weekend.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Perfect For</h3>
              <p className="text-gray-700 mb-8">
                Vacation-home buyers in Barnegat or Cherry Hill empty-nesters cashing out.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">2025 Achievements</h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>400+ closings last 12 months</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>Top 1% KW NJ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>"48-Hour Shore Blitz"</span>
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
              <h3 className="text-2xl font-bold mb-4">Toms River, NJ</h3>
              <p className="text-gray-600 mb-4">818 N Main St, Toms River (10 min to LBI bridges)</p>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Phone:</span>
                  <a href="tel:609-693-2800" className="text-[#D4AF37] hover:underline">609-693-2800</a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Website:</span>
                  <a href="https://southjerseyrealty.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                    southjerseyrealty.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Instagram:</span>
                  <a href="https://instagram.com/southjerseyrealty" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                    @southjerseyrealty
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shore Blitz Feature */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              The 48-Hour Shore Blitz
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We don't wait for buyers—we create urgency. Drone video captures the property from every angle. Matterport 3D tours let buyers walk through from anywhere. TikTok reels go viral with the shore lifestyle. Result? Three offers in the first weekend, every time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Experience the Shore Blitz</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Ready to sell your shore property in 48 hours? Contact New Jersey's Top 1% KW team today.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
