import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule a Consultation | DMR Media',
  description: 'Book a consultation with DMR Media to discuss your luxury real estate marketing needs. Get expert insights on SEO, Google Ads, and digital strategy.',
  keywords: 'real estate marketing consultation, luxury real estate SEO, Google Ads strategy, digital marketing consultation',
  openGraph: {
    title: 'Schedule a Consultation | DMR Media',
    description: 'Book a consultation with DMR Media to discuss your luxury real estate marketing needs.',
    type: 'website',
  },
};

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
            Schedule Your Consultation
          </h1>
          <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-dark max-w-2xl mx-auto mb-8">
            Book a strategic consultation to discuss your luxury real estate marketing goals and discover how DMR Media can help you dominate your market.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-dark mb-12">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-off-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>team@dmrmedia.org</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-off-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+1 (920) 940-4049</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Widget Section */}
      <section className="py-16 bg-off-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* iClosed Calendar Widget */}
            <div className="bg-white border border-gray-200 shadow-lg">
              <div className="iclosed-widget" 
                   data-url="https://app.iclosed.io/e/arohm/meeting-andrew" 
                   title="Website Audit" 
                   style={{width: '100%', height: '620px'}}>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-off-black mb-4">
              What to Expect
            </h2>
            <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
            <p className="text-gray-dark max-w-2xl mx-auto">
              Your consultation will be a comprehensive discussion about your marketing goals and how we can help you achieve them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-off-black text-off-white flex items-center justify-center mx-auto mb-6 font-serif text-xl">
                1
              </div>
              <h3 className="text-xl font-serif font-light text-off-black mb-4">
                Strategy Assessment
              </h3>
              <p className="text-gray-dark leading-relaxed">
                We'll analyze your current marketing efforts and identify opportunities for growth in your luxury market.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-off-black text-off-white flex items-center justify-center mx-auto mb-6 font-serif text-xl">
                2
              </div>
              <h3 className="text-xl font-serif font-light text-off-black mb-4">
                Custom Recommendations
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Receive personalized recommendations for SEO, Google Ads, and content strategies tailored to your market.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-off-black text-off-white flex items-center justify-center mx-auto mb-6 font-serif text-xl">
                3
              </div>
              <h3 className="text-xl font-serif font-light text-off-black mb-4">
                Action Plan
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Leave with a clear roadmap for implementing strategies that will drive results for your luxury real estate business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-off-black text-off-white">
        <div className="container-max text-center">
          <div className="text-sm text-gray-400">
            <p>© {new Date().getFullYear()} DMR Media. All rights reserved.</p>
            <p className="mt-2">Luxury Real Estate Marketing Agency</p>
          </div>
        </div>
      </footer>

      {/* iClosed Widget Script */}
      <script 
        type="text/javascript" 
        src="https://app.iclosed.io/assets/widget.js" 
        async
        dangerouslySetInnerHTML={{
          __html: `
            // Initialize the widget when the script loads
            if (typeof window !== 'undefined') {
              window.addEventListener('load', function() {
                // The widget script will automatically initialize the calendar
              });
            }
          `
        }}
      />
    </div>
  );
}
