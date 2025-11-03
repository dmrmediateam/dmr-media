import Link from 'next/link';
import Image from 'next/image';
import { getAllStates, getFeaturedBrokerages } from '@/data/brokerages';

export const metadata = {
  title: 'Real Estate Brokerage Directory | Top Real Estate Teams by State | DMR Media',
  description: 'Explore top-performing real estate brokerages and teams across the United States. Discover industry-leading firms driving innovation and results.',
};

export default function BrokeragesPage() {
  const states = getAllStates();
  const featuredBrokerages = getFeaturedBrokerages();

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="relative bg-off-black text-off-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-off-black via-off-black/95 to-off-black/90"></div>
        
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-gold/90 text-off-black font-semibold text-sm uppercase tracking-wider mb-6">
              Brokerage Directory
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-white">
              Top Real Estate <span className="italic">Brokerages</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Discover industry-leading real estate firms and teams across the United States who are dominating their markets with innovation, technology, and proven results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-off-black text-off-white border-t border-white/10">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light text-gold mb-4">
                {featuredBrokerages.length}
              </div>
              <div className="text-lg text-gray-300 mb-2">Featured Brokerages</div>
              <div className="text-sm text-gray-400">Top-performing teams</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light text-gold mb-4">
                {states.length}
              </div>
              <div className="text-lg text-gray-300 mb-2">States Covered</div>
              <div className="text-sm text-gray-400">Growing nationwide</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-light text-gold mb-4">
                $200M+
              </div>
              <div className="text-lg text-gray-300 mb-2">Combined Volume</div>
              <div className="text-sm text-gray-400">Annual transactions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by State Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Browse by <span className="italic">State</span>
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              Explore top-performing real estate brokerages organized by state
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {states.map((state) => (
              <Link
                key={state.slug}
                href={`/brokerages/${state.slug}`}
                className="group bg-off-white border border-gray-200 p-8 hover:border-gold hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-serif font-light text-off-black group-hover:text-gold transition-colors">
                    {state.name}
                  </h3>
                  <span className="text-sm font-semibold text-gray-400 group-hover:text-gold transition-colors">
                    {state.abbr}
                  </span>
                </div>
                <p className="text-gray-dark text-sm mb-4 leading-relaxed">
                  {state.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-gray-400">
                    {state.brokerageCount} {state.brokerageCount === 1 ? 'Brokerage' : 'Brokerages'}
                  </span>
                  <svg
                    className="w-5 h-5 text-gold transform group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brokerages Section */}
      <section className="section-padding bg-off-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Featured <span className="italic">Brokerages</span>
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              Industry leaders driving innovation and results in their markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBrokerages.slice(0, 6).map((brokerage) => (
              <Link
                key={brokerage.id}
                href={`/brokerages/${brokerage.stateSlug}/${brokerage.id}`}
                className="group bg-white border border-gray-200 hover:border-gold hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="mb-4">
                    <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                      {brokerage.city}, {brokerage.stateAbbr}
                    </div>
                    <h3 className="text-xl font-serif font-light text-off-black group-hover:text-gold transition-colors mb-2">
                      {brokerage.name}
                    </h3>
                    <p className="text-sm text-gray-600 italic mb-4">
                      {brokerage.tagline}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <p className="text-xs text-gray-500 mb-2">Brokerage</p>
                    <p className="text-sm font-medium text-off-black">
                      {brokerage.brokerage}
                    </p>
                  </div>

                  {brokerage.stats && (
                    <div className="flex flex-wrap gap-4 mb-4">
                      {brokerage.stats.closings && (
                        <div>
                          <div className="text-lg font-serif text-gold">
                            {brokerage.stats.closings}
                          </div>
                          <div className="text-xs text-gray-500">Closings</div>
                        </div>
                      )}
                      {brokerage.stats.volume && (
                        <div>
                          <div className="text-lg font-serif text-gold">
                            {brokerage.stats.volume}
                          </div>
                          <div className="text-xs text-gray-500">Volume</div>
                        </div>
                      )}
                      {brokerage.stats.agents && (
                        <div>
                          <div className="text-lg font-serif text-gold">
                            {brokerage.stats.agents}
                          </div>
                          <div className="text-xs text-gray-500">Agents</div>
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-sm text-gray-dark leading-relaxed mb-4">
                    "{brokerage.oneLiner}"
                  </p>

                  <div className="flex items-center text-gold text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                    View Profile
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-off-white mb-6">
            Ready to <span className="italic">Dominate</span> Your Market?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join these top-performing brokerages who trust DMR Media for exceptional SEO and digital marketing results.
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
    </div>
  );
}
