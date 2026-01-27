import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | DMR Media',
  description: 'Privacy Policy for DMR Media - Luxury Real Estate Marketing Agency',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
            Privacy Policy
          </h1>
            <div className="w-24 h-px bg-off-black mb-8"></div>
            <p className="text-sm text-[var(--color-ink-300)] mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

            <div className="prose prose-lg max-w-none space-y-8 text-[var(--color-ink-300)]">
              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">1. Introduction</h2>
                <p>
                  DMR Media ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">2. Information We Collect</h2>
                <p className="mb-3">We may collect information about you in various ways:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact information you provide when contacting us or using our services.</li>
                  <li><strong>Business Information:</strong> Information about your real estate business, market, and marketing needs.</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage data collected through cookies and similar technologies.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">3. How We Use Your Information</h2>
                <p className="mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Analyze website usage and trends</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">4. Information Sharing and Disclosure</h2>
                <p>
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Service providers who assist us in operating our business</li>
                  <li>Business partners with your consent</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">6. Your Rights</h2>
                <p className="mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">7. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar technologies to enhance your experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">9. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">10. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">11. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at:
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
