import Link from 'next/link';
import Image from 'next/image';
import { getBrokeragesByState } from '@/data/brokerages';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'New Jersey Real Estate Brokerages | Top Teams & Firms | DMR Media',
  description: 'Explore New Jersey\'s top-performing real estate brokerages and teams. From Manalapan to Parsippany, Toms River to the Shore - discover the state\'s leading firms.',
};

export default function NewJerseyBrokeragesPage() {
  const brokerages = getBrokeragesByState('new-jersey');

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="relative bg-off-black text-off-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-off-black via-off-black/95 to-off-black/90"></div>
        
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/brokerages"
              className="inline-flex items-center text-sm text-gray-300 hover:text-gold transition-colors mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All States
            </Link>
            
            <div className="inline-block px-4 py-2 bg-gold/90 text-off-black font-semibold text-sm uppercase tracking-wider mb-6">
              New Jersey Brokerages
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-white">
              New Jersey's Elite <span className="italic">Real Estate</span> Brokerages
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              From Central Jersey to the Shore, discover the Garden State's most successful real estate teams dominating one of America's most competitive markets.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-off-black text-off-white border-t border-white/10">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light text-gold mb-4">
                {brokerages.length}
              </div>
              <div className="text-lg text-gray-300 mb-2">Featured Brokerages</div>
              <div className="text-sm text-gray-400">Top New Jersey teams</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light text-gold mb-4">
                6,400+
              </div>
              <div className="text-lg text-gray-300 mb-2">Combined Closings</div>
              <div className="text-sm text-gray-400">Lifetime transactions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light text-gold mb-4">
                $3.3B+
              </div>
              <div className="text-lg text-gray-300 mb-2">Total Volume</div>
              <div className="text-sm text-gray-400">Career transactions</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light text-gold mb-4">
                #1
              </div>
              <div className="text-lg text-gray-300 mb-2">Market Leaders</div>
              <div className="text-sm text-gray-400">In their regions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brokerages Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              All New Jersey <span className="italic">Brokerages</span>
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              From ninja negotiations to billion-dollar closings, explore New Jersey's most innovative and successful real estate brokerages
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {brokerages.map((brokerage) => (
              <div
                key={brokerage.id}
                className="bg-off-white border border-gray-200 hover:border-gold hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                          {brokerage.city}, {brokerage.stateAbbr}
                        </div>
                        <h3 className="text-2xl font-serif font-light text-off-black mb-2">
                          {brokerage.name}
                        </h3>
                        <p className="text-sm text-gray-600 italic mb-3">
                          {brokerage.tagline}
                        </p>
                        <p className="text-xs text-gray-500 mb-2">Brokerage</p>
                        <p className="text-sm font-medium text-off-black">
                          {brokerage.brokerage}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  {brokerage.stats && (
                    <div className="border-t border-b border-gray-200 py-4 mb-6">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {brokerage.stats.closings && (
                          <div>
                            <div className="text-2xl font-serif text-gold mb-1">
                              {brokerage.stats.closings}
                            </div>
                            <div className="text-xs text-gray-500">Closings</div>
                          </div>
                        )}
                        {brokerage.stats.volume && (
                          <div>
                            <div className="text-2xl font-serif text-gold mb-1">
                              {brokerage.stats.volume}
                            </div>
                            <div className="text-xs text-gray-500">Volume</div>
                          </div>
                        )}
                        {brokerage.stats.agents && (
                          <div>
                            <div className="text-2xl font-serif text-gold mb-1">
                              {brokerage.stats.agents}
                            </div>
                            <div className="text-xs text-gray-500">Agents</div>
                          </div>
                        )}
                        {brokerage.stats.ranking && (
                          <div className="col-span-2 md:col-span-3">
                            <div className="text-sm font-medium text-off-black">
                              🏆 {brokerage.stats.ranking}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Signature Move */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                      Signature Move
                    </h4>
                    <p className="text-sm text-gray-dark leading-relaxed">
                      {brokerage.signatureMove}
                    </p>
                  </div>

                  {/* Perfect For */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                      Perfect For
                    </h4>
                    <p className="text-sm text-gray-dark leading-relaxed">
                      {brokerage.perfectFor}
                    </p>
                  </div>

                  {/* One Liner */}
                  <div className="bg-white border-l-4 border-gold p-4 mb-6">
                    <p className="text-sm font-medium text-off-black italic">
                      "{brokerage.oneLiner}"
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3">
                      {brokerage.highlights.year} Highlights
                    </h4>
                    <ul className="space-y-2">
                      {brokerage.highlights.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-dark">
                          <svg className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex flex-wrap gap-4 mb-4">
                      <a
                        href={`tel:${brokerage.phone}`}
                        className="flex items-center text-sm text-gray-dark hover:text-gold transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {brokerage.phone}
                      </a>
                      {brokerage.social.instagram && (
                        <a
                          href={`https://instagram.com/${brokerage.social.instagram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-gray-dark hover:text-gold transition-colors"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          {brokerage.social.instagram}
                        </a>
                      )}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={brokerage.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-6 py-3 bg-off-black text-off-white hover:bg-gold hover:text-off-black transition-colors text-sm font-medium"
                      >
                        Visit Website
                      </a>
                      <Link
                        href={`/brokerages/new-jersey/${brokerage.id}`}
                        className="flex-1 text-center px-6 py-3 border-2 border-off-black text-off-black hover:bg-off-black hover:text-off-white transition-colors text-sm font-medium"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-off-white mb-6">
            Ready to <span className="italic">Dominate</span> New Jersey Real Estate?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join these top-performing New Jersey brokerages who trust DMR Media for exceptional SEO and digital marketing results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Partner With Us
            </Link>
            <Link href="/case-studies" className="btn-outline">
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
