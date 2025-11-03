import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Legendary Real Estate Services | Lake Geneva, WI | DMR Media',
  description: "Lake Geneva's Lead Generation Powerhouse. Content-driven SEO strategy that tripled inbound leads. Partner with DMR Media for cutting-edge digital marketing.",
  keywords: 'Legendary Real Estate Services, Lake Geneva real estate, Wisconsin realtors, lead generation, SEO optimization',
};

export default function LegendaryRealEstateServicesPage() {
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
              Legendary Real Estate Services
            </h1>
            <p className="text-2xl md:text-3xl text-[#D4AF37] mb-4">
              Lake Geneva's Lead Generation Powerhouse
            </p>
            <p className="text-xl text-gray-300 mb-8">
              We don't just market homes—we engineer lead generation machines.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Lead Growth</div>
                <div className="text-2xl font-bold">3x Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Location</div>
                <div className="text-2xl font-bold">Lake Geneva</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Partnership</div>
                <div className="text-2xl font-bold">DMR Media</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.legendaryrealestateservices.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
              >
                Visit Website
              </a>
              <a 
                href="tel:262-555-0100"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Call: 262-555-0100
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">About Legendary Real Estate Services</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Independent brokerage serving Lake Geneva, Wisconsin with cutting-edge digital marketing strategies.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Signature Move</h3>
              <p className="text-gray-700 mb-8">
                Content-driven SEO strategy that tripled inbound leads through strategic keyword targeting and Google My Business optimization.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Perfect For</h3>
              <p className="text-gray-700 mb-8">
                Lake Geneva luxury buyers and sellers looking for boutique service with cutting-edge digital marketing.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">2024 Achievements</h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>3x lead generation increase</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>Strategic SEO & content optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>DMR Media partnership success story</span>
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
              <h3 className="text-2xl font-bold mb-4">Lake Geneva, WI</h3>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Phone:</span>
                  <a href="tel:262-555-0100" className="text-[#D4AF37] hover:underline">262-555-0100</a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Website:</span>
                  <a href="https://www.legendaryrealestateservices.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                    legendaryrealestateservices.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Instagram:</span>
                  <a href="https://instagram.com/legendaryrealestateservices" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                    @legendaryrealestateservices
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
              See How We Helped Legendary Real Estate Services
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Read the full case study to learn how our partnership tripled their lead generation through strategic SEO and content optimization.
            </p>
            <Link 
              href="/case-study/jade-legendary-real-estate"
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
              Ready to replicate this success for your brokerage? Let's talk about engineering your lead generation machine.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
