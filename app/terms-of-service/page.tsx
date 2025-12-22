import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | DMR Media',
  description: 'Terms of Service for DMR Media - Luxury Real Estate Marketing Agency',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-off-white">
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Terms of Service
            </h1>
            <div className="w-24 h-px bg-off-black mb-8"></div>
            <p className="text-sm text-[var(--color-ink-400)] mb-12">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-8 text-[var(--color-ink-300)]">
              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using DMR Media's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">2. Services</h2>
                <p>
                  DMR Media provides digital marketing services including but not limited to search engine optimization (SEO), Google Ads management, website optimization, and analytics reporting for real estate professionals.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">3. Client Responsibilities</h2>
                <p className="mb-3">As a client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Grant necessary access to accounts and systems</li>
                  <li>Respond to requests in a timely manner</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Pay all fees as agreed upon in service agreements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">4. Payment Terms</h2>
                <p>
                  Payment terms will be specified in individual service agreements. Fees are typically due as outlined in the agreement. Late payments may result in service suspension or termination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">5. Intellectual Property</h2>
                <p>
                  All content, materials, and intellectual property on our website and provided through our services remain the property of DMR Media or its licensors. You may not reproduce, distribute, or create derivative works without our written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">6. Service Guarantees</h2>
                <p>
                  While we strive to deliver exceptional results, we cannot guarantee specific rankings, traffic numbers, or conversion rates. Results depend on various factors including market conditions, competition, and client cooperation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">7. Limitation of Liability</h2>
                <p>
                  DMR Media shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by you for our services in the twelve months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">8. Termination</h2>
                <p>
                  Either party may terminate service agreements with appropriate notice as specified in the agreement. Upon termination, you remain responsible for all fees incurred up to the termination date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">9. Confidentiality</h2>
                <p>
                  We respect the confidentiality of your business information and will not disclose it to third parties except as necessary to provide our services or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">10. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">11. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State of Wisconsin, United States.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">12. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-3">
                  <strong>Email:</strong> team@dmrmedia.org<br />
                  <strong>Phone:</strong> +1 (920) 940-4049
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
