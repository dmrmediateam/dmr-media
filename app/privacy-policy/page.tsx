import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | DMR Media',
  description: 'Privacy Policy for DMR Media LLC — how we collect, use, share, and protect your information.',
};

const LAST_UPDATED = 'August 19, 2026';

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
            <p className="text-sm text-[var(--color-ink-300)] mb-12">Last updated: {LAST_UPDATED}</p>

            <div className="prose prose-lg max-w-none space-y-8 text-[var(--color-ink-300)]">
              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">1. Introduction</h2>
                <p>
                  DMR Media LLC, a Wisconsin limited liability company (&ldquo;DMR Media,&rdquo; &ldquo;we,&rdquo;
                  &ldquo;our,&rdquo; or &ldquo;us&rdquo;), is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit
                  www.dmrmedia.org (the &ldquo;Site&rdquo;), submit a form, register for a webinar or event, or engage
                  our marketing services (collectively, the &ldquo;Services&rdquo;).
                </p>
                <p className="mt-3">
                  By using the Site or Services, you agree to the practices described in this Privacy Policy. If you do
                  not agree, please do not use the Site or Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">2. Information We Collect</h2>
                <p className="mb-3"><strong>Information you provide directly:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact information:</strong> name, email address, phone number, and business website when you submit a form, request an audit or quote, register for a webinar, apply to work with us, or contact us.</li>
                  <li><strong>Business information:</strong> your brokerage or team, market, annual sales volume, team size, marketing goals and pain points, and other details you share during intake or qualification.</li>
                  <li><strong>Payment information:</strong> when you purchase a paid offering, payment is processed by Stripe. We do not store your full card number; we receive confirmation of payment and limited billing details.</li>
                  <li><strong>Communications:</strong> the contents of emails, form messages, SMS replies, and call recordings or notes where permitted by law.</li>
                </ul>
                <p className="mb-3 mt-5"><strong>Information collected automatically:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Usage and device data:</strong> IP address, browser type, device identifiers, operating system, pages viewed, time on page, referring URLs, and interactions with the Site.</li>
                  <li><strong>Campaign attribution data:</strong> UTM parameters (source, medium, campaign, term, content), Google click IDs (gclid), and Meta click IDs (fbclid), which we attach to your form submission so we know which campaign brought you to us.</li>
                  <li><strong>Session analytics:</strong> anonymized heatmaps, scroll depth, and session replays via Microsoft Clarity to understand how visitors use the Site.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">3. Cookies and Tracking Technologies</h2>
                <p className="mb-3">
                  We and our service providers use cookies, pixels, tags, and similar technologies on the Site. These
                  include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Tag Manager and Google Analytics</strong> — site analytics and tag management.</li>
                  <li><strong>Google Ads conversion tracking and remarketing</strong> — measuring ad performance and showing you relevant ads on Google properties.</li>
                  <li><strong>Meta (Facebook) Pixel</strong> — measuring ad performance and remarketing on Meta platforms.</li>
                  <li><strong>OpenAI Ads pixel</strong> — measuring the performance of our advertising in ChatGPT.</li>
                  <li><strong>Microsoft Clarity</strong> — heatmaps and session analytics.</li>
                  <li><strong>Elfsight widgets</strong> — the review display and chat widgets embedded on the Site.</li>
                  <li><strong>Embedded content</strong> — videos (e.g., YouTube) and booking tools may set their own cookies when loaded.</li>
                </ul>
                <p className="mt-3">
                  A consent notice appears when you first visit the Site. You can also control cookies through your
                  browser settings, opt out of Google&apos;s ad personalization at{' '}
                  <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-trust)] hover:underline">adssettings.google.com</a>, and adjust Meta ad
                  preferences in your Facebook settings. Blocking some cookies may affect Site functionality.
                </p>
                <p className="mt-3">
                  <strong>Do Not Track:</strong> some browsers offer a &ldquo;Do Not Track&rdquo; signal. Because no
                  industry standard currently exists, the Site does not respond to these signals.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">4. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve the Site and Services</li>
                  <li>Respond to inquiries, audits, quote requests, and webinar registrations</li>
                  <li>Qualify and route leads, including assessing fit for specific programs and offers</li>
                  <li>Send service communications and, with your consent, marketing communications by email, phone, and SMS</li>
                  <li>Measure and improve our advertising, including conversion tracking and remarketing</li>
                  <li>Process payments and maintain business records</li>
                  <li>Detect and prevent spam, fraud, and abuse (including automated spam filtering on our forms)</li>
                  <li>Comply with legal obligations and enforce our agreements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">5. SMS / Text Message Program</h2>
                <p>
                  When you submit a form that discloses SMS communications and provide your phone number, you consent
                  to receive calls and text messages from DMR Media, including messages sent using automated
                  technology, at the number you provided. Consent is not a condition of purchase. Message frequency
                  varies; message and data rates may apply. Reply <strong>STOP</strong> to opt out at any time or{' '}
                  <strong>HELP</strong> for help. We do not share your mobile number or SMS opt-in consent with third
                  parties or affiliates for their own marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">6. How We Share Information</h2>
                <p className="mb-3">We do not sell your personal information for money. We share information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service providers</strong> that help us operate — hosting (Vercel), payment processing (Stripe), automation and lead routing (Zapier), CRM and communication platforms, analytics providers, and advertising platforms listed in Section 3.</li>
                  <li><strong>Advertising partners:</strong> our use of Google, Meta, Microsoft, and OpenAI advertising tools may constitute &ldquo;sharing&rdquo; or &ldquo;targeted advertising&rdquo; under some state privacy laws. You can opt out as described in Sections 3 and 8.</li>
                  <li><strong>Professional advisors</strong> (lawyers, accountants) under confidentiality obligations.</li>
                  <li><strong>Legal authorities</strong> when required by law, subpoena, or to protect rights, safety, or property.</li>
                  <li><strong>Business transfers:</strong> in connection with a merger, acquisition, or sale of assets, subject to this Policy.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">7. Data Retention and Security</h2>
                <p>
                  We retain personal information for as long as needed to provide the Services, comply with legal
                  obligations, resolve disputes, and enforce agreements — then delete or de-identify it. We use
                  appropriate technical and organizational safeguards, including encrypted transmission (HTTPS),
                  access controls, and reputable infrastructure providers. No method of transmission or storage is
                  100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">8. Your Privacy Rights (U.S. State Laws)</h2>
                <p className="mb-3">
                  Depending on your state of residence (including California, Colorado, Connecticut, Texas, Virginia,
                  and others with comprehensive privacy laws), you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Know / access</strong> the personal information we hold about you</li>
                  <li><strong>Correct</strong> inaccurate personal information</li>
                  <li><strong>Delete</strong> your personal information, subject to legal exceptions</li>
                  <li><strong>Portability</strong> — receive a copy of your information in a usable format</li>
                  <li><strong>Opt out</strong> of targeted advertising and of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information as those terms are defined by applicable law</li>
                  <li><strong>Non-discrimination</strong> — we will not penalize you for exercising your rights</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, email <strong>team@dmrmedia.org</strong> with the subject line
                  &ldquo;Privacy Request&rdquo; and the right you wish to exercise. We will verify your identity and
                  respond within the timeframe required by applicable law (generally 45 days). Authorized agents may
                  submit requests on your behalf with proof of authorization. If we decline a request, you may appeal
                  by replying to our decision.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">9. Marketing Choices</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Email:</strong> use the unsubscribe link in any marketing email.</li>
                  <li><strong>SMS:</strong> reply STOP to any message.</li>
                  <li><strong>Phone:</strong> ask to be removed during any call, or email us.</li>
                  <li><strong>Ads:</strong> use the platform opt-outs in Section 3 or your device&apos;s ad settings.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">10. Third-Party Links and Client Sites</h2>
                <p>
                  The Site links to third-party websites, including client websites and live design samples. We are not
                  responsible for the privacy practices of external sites. Websites we build and operate for clients
                  are governed by those clients&apos; own privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">11. Children&apos;s Privacy</h2>
                <p>
                  The Site and Services are intended for business professionals and are not directed to individuals
                  under 18. We do not knowingly collect personal information from children. If you believe a child has
                  provided us information, contact us and we will delete it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">12. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Material changes will be posted on this page
                  with an updated &ldquo;Last updated&rdquo; date. Your continued use of the Site after changes are
                  posted constitutes acceptance of the revised Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">13. Contact Us</h2>
                <p>Questions or privacy requests:</p>
                <p className="mt-3">
                  <strong>DMR Media LLC</strong><br />
                  100 W College Ave, Office No. 326<br />
                  Appleton, Wisconsin 54911<br />
                  <strong>Email:</strong> team@dmrmedia.org<br />
                  <strong>Phone:</strong> +1 920-249-5210
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
