import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'The Tiffany Holtz Real Estate Group | Appleton, WI | DMR Media',
  description: "#3 Coldwell Banker Team in ALL of North America. $200M+ closed in 2024. Barbara Corcoran-endorsed. Written 'Sell it or I'll Buy it' guarantee.",
  keywords: 'Tiffany Holtz, Appleton real estate, Coldwell Banker Wisconsin, luxury real estate, Fox Valley realtors',
};

export default function TiffanyHoltzPage() {
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
              The Tiffany Holtz Real Estate Group
            </h1>
            <p className="text-2xl md:text-3xl text-[#D4AF37] mb-4">
              #3 Coldwell Banker Team in ALL of North America
            </p>
            <p className="text-xl text-gray-300 mb-8">
              We sell so fast we'll buy it if we don't.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">2024 Volume</div>
                <div className="text-2xl font-bold">$200M+</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">National Ranking</div>
                <div className="text-2xl font-bold">#3 CB Team</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">WI Ranking</div>
                <div className="text-2xl font-bold">#1 Team</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://tiffanyholtz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
              >
                Visit Website
              </a>
              <a 
                href="tel:920-574-4422"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Call: 920-574-4422
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">About The Tiffany Holtz Real Estate Group</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Coldwell Banker Real Estate Group team based in Appleton, Wisconsin. #1 team in Wisconsin (any brand) and #3 Coldwell Banker Team in all of North America.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Signature Move</h3>
              <p className="text-gray-700 mb-8">
                Written "Sell it or I'll Buy it" guarantee + free staging, drone video, and 3D tours on every listing.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Perfect For</h3>
              <p className="text-gray-700 mb-8">
                Luxury lake homes in Oshkosh or move-up buyers in the Fox Valley.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">2024 Achievements</h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>$200M+ closed in 2024</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>#1 team in Wisconsin (any brand)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>Barbara Corcoran-endorsed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>#3 Coldwell Banker Team in North America</span>
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
              <h3 className="text-2xl font-bold mb-4">Appleton, WI</h3>
              <p className="text-gray-600 mb-4">2830 E John St, Appleton, WI</p>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Phone:</span>
                  <a href="tel:920-574-4422" className="text-[#D4AF37] hover:underline">920-574-4422</a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Website:</span>
                  <a href="https://tiffanyholtz.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                    tiffanyholtz.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Instagram:</span>
                  <a href="https://instagram.com/tiffanyholtzrealestate" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                    @tiffanyholtzrealestate
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barbara Corcoran Endorsement */}
      <section className="py-20 bg-[#D4AF37]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-black">
              Barbara Corcoran-Endorsed Excellence
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Recognized by one of America's most trusted real estate experts and backed by our written "Sell it or I'll Buy it" guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Work With North America's #3 Team</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Experience the guarantee that's backed by $200M+ in proven results. Contact us today.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
