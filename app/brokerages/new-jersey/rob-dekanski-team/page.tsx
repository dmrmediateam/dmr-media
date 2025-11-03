import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'The Rob Dekanski Team | Parsippany, NJ | DMR Media',
  description: "The $3 Billion Behemoth. 5,000+ families served with the 'Zero-Down Dekanski Plan.' In-house lender finds grants most agents miss.",
  keywords: 'Rob Dekanski, Parsippany real estate, Morris County realtors, New Jersey real estate, zero down payment',
};

export default function RobDekanskiTeamPage() {
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
              The Rob Dekanski Team
            </h1>
            <p className="text-2xl md:text-3xl text-[#D4AF37] mb-4">
              The $3 Billion Behemoth
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Three billion closed and still counting your savings.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Families Served</div>
                <div className="text-2xl font-bold">5,000+</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Career Volume</div>
                <div className="text-2xl font-bold">$3B+</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-[#D4AF37] font-semibold">Specialty</div>
                <div className="text-2xl font-bold">Zero-Down Plan</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://newjerseyrealestatenetwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#B8941F] transition-colors"
              >
                Visit Website
              </a>
              <a 
                href="tel:973-462-7455"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Call: 973-462-7455
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">About The Rob Dekanski Team</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Independent team powered by RE/MAX backbone, based in Parsippany (dead-center NJ). With over $3 billion in career volume, this is New Jersey's true behemoth team.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Signature Move</h3>
              <p className="text-gray-700 mb-8">
                "Zero-Down Dekanski Plan"—in-house lender finds grants most agents miss.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">Perfect For</h3>
              <p className="text-gray-700 mb-8">
                Trade-up families in Morris County or NYC commuters hunting Wayne.
              </p>

              <h3 className="text-2xl font-bold text-black mb-4">2025 Achievements</h3>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>$3,000,000,000+ career volume</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>5,000+ families served</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-xl">✓</span>
                  <span>"Zero-Down Dekanski Plan"</span>
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
              <h3 className="text-2xl font-bold mb-4">Parsippany, NJ</h3>
              <p className="text-gray-600 mb-4">2200 Route 10 West, Parsippany (dead-center NJ)</p>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Phone:</span>
                  <a href="tel:973-462-7455" className="text-[#D4AF37] hover:underline">973-462-7455</a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Website:</span>
                  <a href="https://newjerseyrealestatenetwork.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                    newjerseyrealestatenetwork.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-semibold mr-2">Instagram:</span>
                  <a href="https://instagram.com/robdekanski" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                    @robdekanski
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero-Down Plan Feature */}
      <section className="py-20 bg-[#D4AF37]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-black">
              The Zero-Down Dekanski Plan
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Our in-house lender specializes in finding grants and programs that most agents don't even know exist. Get into your dream home with zero down—yes, really.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Join 5,000+ Happy Families</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Ready to unlock zero-down opportunities? Contact the $3 billion team that's revolutionizing homeownership.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
