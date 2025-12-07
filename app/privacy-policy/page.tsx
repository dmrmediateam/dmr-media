import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - DMR Media',
  description: 'Privacy Policy for DMR Media - Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Page Header */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
            Privacy Policy
          </h1>
          <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
          <p className="text-gray-dark max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-gray-dark leading-relaxed">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-off-black mb-4">
                  Introduction
                </h2>
                <p>
                  DMR Media ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, register for our webinars, or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-off-black mb-4">
                  Information We Collect
                </h2>
                <p>
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Information you provide when registering for webinars or events</li>
                  <li>Information you provide when contacting us or requesting services</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-off-black mb-4">
                  How We Use Your Information
                </h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your registrations and send you related information</li>
                  <li>Send you marketing communications, including emails, text messages (SMS), and phone calls</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-off-black mb-4">
                  Marketing Communications and Consent
                </h2>
                <p className="font-semibold text-off-black mb-2">
                  By registering for our webinars, events, or services, you expressly consent to receive marketing communications from DMR Media through the following channels:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Phone Calls:</strong> We may contact you via telephone, including automated or pre-recorded calls, for marketing purposes.</li>
                  <li><strong>Text Messages (SMS):</strong> We may send you text messages for marketing and promotional purposes. Message and data rates may apply.</li>
                  <li><strong>Email:</strong> We may send you marketing emails, newsletters, and promotional materials.</li>
                  <li><strong>Other Communications:</strong> We may use other forms of communication for marketing purposes as permitted by law.</li>
                </ul>
                <p className="mt-4">
                  Your consent to receive marketing communications is not a condition of purchase or registration. You may opt out of receiving marketing communications at any time by:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Following the unsubscribe instructions in any email or text message we send you</li>
                  <li>Contacting us directly at team@dmrmedia.org or +1 (920) 940-4049</li>
                  <li>Replying "STOP" to any text message</li>
                </ul>
                <p className="mt-4">
                  Please note that even if you opt out of marketing communications, we may still send you transactional or administrative messages related to your account or our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-off-black mb-4">
                  Information Sharing and Disclosure
                </h2>
                <p>
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>With service providers who perform services on our behalf</li>
                  <li>When we believe disclosure is necessary to comply with the law or protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-off-black mb-4">
                  Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-off-black mb-4">
                  Your Rights
                </h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to opt out of marketing communications</li>
                  <li>The right to data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-off-black mb-4">
                  Children's Privacy
                </h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-off-black mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-light text-off-black mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="mt-4 space-y-2">
                  <p>
                    <strong>Email:</strong> <a href="mailto:team@dmrmedia.org" className="text-trust hover:underline">team@dmrmedia.org</a>
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (920) 940-4049
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

