import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'The Jennifer Landro Real Estate Team | Appleton, WI | DMR Media',
  description: "Eastern Wisconsin's Tech-Driven Winners. 4,000+ homes sold, 40-agent powerhouse. AI-powered pricing + 3D tours = listings sell 42% faster.",
  keywords: 'Jennifer Landro, Appleton real estate, Fox Cities realtors, Wisconsin real estate team, LPT Realty',
};

export default function JenniferLandroPage() {
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
              The Jennifer Landro Real Estate Team
            </h1>
            <p className="text-2xl md:text-3xl text-[#D4AF37] mb-4">
              Eastern Wisconsin's Tech-Driven Winners
            </p>
            <p className="text-xl text-gray-300 mb-8">
              We don't just list homes—we engineer wins.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Homes Sold</div>
                <div className="text-2xl font-bold">4,000+</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Team Size</div>
                <div className="text-2xl font-bold">40 Agents</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Recognition</div>
                <div className="text-2xl font-bold">U.S. News Top</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://jenniferlandro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
              >
                Visit Website
              </a>
              <a 
                href="tel:920-759-2036"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Call: 920-759-2036
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">About The Jennifer Landro Real Estate Team</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                LPT Realty independent team with offices in Appleton (Fox Cities) and Brookfield (Metro Milwaukee). A 40-agent powerhouse leveraging cutting-edge technology.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Signature Move</h3>
              <p className="text-gray-700 mb-8">
                AI-powered pricing + 3D tours = listings sell 42% faster than market average.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Perfect For</h3>
              <p className="text-gray-700 mb-8">
                First-time buyers in Green Bay or empty-nesters downsizing in Wauwatosa.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">2024 Achievements</h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>4,000+ homes sold lifetime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>40-agent powerhouse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>U.S. News "Top Wisconsin Firm"</span>
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
            <h2 className="text-4xl font-bold mb-12">Office Locations</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Appleton (Fox Cities)</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Phone:</span>
                    <a href="tel:920-759-2036" className="text-[#D4AF37] hover:underline">920-759-2036</a>
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Website:</span>
                    <a href="https://jenniferlandro.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                      jenniferlandro.com
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Instagram:</span>
                    <a href="https://instagram.com/jenniferlandrorealestate" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                      @jenniferlandrorealestate
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Brookfield (Metro Milwaukee)</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="text-gray-600">Second office location serving the Milwaukee metro area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Work With The Jennifer Landro Team</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Ready to experience tech-driven real estate? Contact the team that's engineered 4,000+ successful transactions.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
