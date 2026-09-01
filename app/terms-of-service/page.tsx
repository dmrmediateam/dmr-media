import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | DMR Media',
  description: 'Terms of Service for DMR Media LLC — the terms governing use of our website and marketing services.',
};

const LAST_UPDATED = 'August 19, 2026';

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
            <p className="text-sm text-[var(--color-ink-300)] mb-12">Last updated: {LAST_UPDATED}</p>

            <div className="prose prose-lg max-w-none space-y-8 text-[var(--color-ink-300)]">
              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">1. Agreement to Terms</h2>
                <p>
                  These Terms of Service (&ldquo;Terms&rdquo;) are a binding agreement between you and DMR Media LLC, a
                  Wisconsin limited liability company (&ldquo;DMR Media,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                  &ldquo;us&rdquo;). By accessing www.dmrmedia.org (the &ldquo;Site&rdquo;), submitting a form,
                  registering for a webinar, or engaging our services (the &ldquo;Services&rdquo;), you agree to these
                  Terms and our <Link href="/privacy-policy" className="text-[var(--color-trust)] hover:underline">Privacy Policy</Link>. If you do not agree, do not use the Site or Services.
                </p>
                <p className="mt-3">
                  If you use the Services on behalf of a company or team, you represent that you have authority to bind
                  that entity, and &ldquo;you&rdquo; refers to that entity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">2. Services</h2>
                <p>
                  DMR Media provides digital marketing services for real estate professionals, including search engine
                  optimization (SEO), pay-per-click and Google Ads management, ChatGPT and emerging-channel
                  advertising, website design and development, single-property and development marketing, landing
                  pages, CRM integration and lead routing, analytics and reporting, and related consulting, webinars,
                  and educational content.
                </p>
                <p className="mt-3">
                  Specific engagements are governed by a signed proposal, statement of work, or service agreement (an
                  &ldquo;Order&rdquo;). If an Order conflicts with these Terms, the Order controls for that engagement.
                </p>
                <p className="mt-3">
                  If you purchased a subscription or service through Stripe (checkout, invoice, or free trial), the
                  program-specific{' '}
                  <Link href="/stripe/terms-of-service" className="text-[var(--color-trust)] hover:underline">Service Terms</Link>{' '}
                  also apply to your purchase and control over these Terms for that program, including its billing
                  cycle, commitment term, trial conversion, and website ownership provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">3. Client Responsibilities</h2>
                <p className="mb-3">You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, current, and complete information, and keep it updated</li>
                  <li>Grant timely access to the accounts and systems needed to perform the work (ad accounts, website, CRM, analytics, domain/DNS where applicable)</li>
                  <li>Review and approve deliverables and creative within agreed turnaround times</li>
                  <li>Respond to leads promptly so campaign data and any performance guarantee remain measurable</li>
                  <li>Hold and maintain all licenses required for your profession, and ensure content you supply (listings, photos, claims, testimonials) is accurate and lawful — including compliance with fair housing and advertising laws (see our <Link href="/fair-housing" className="text-[var(--color-trust)] hover:underline">Commitment to Fair Housing</Link>)</li>
                  <li>Pay all fees when due under your Order</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">4. Fees, Billing, and Ad Spend</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Fees</strong> are stated in your Order. Unless the Order says otherwise, management fees are billed in advance on a recurring basis, and setup or build fees are due before work begins.</li>
                  <li><strong>Ad spend is separate.</strong> Media budgets are paid by you directly to the advertising platforms (Google, Meta, OpenAI, etc.) and are never included in, or refundable through, DMR Media fees unless your Order expressly says spend is included.</li>
                  <li><strong>Minimum terms.</strong> Some programs carry a minimum commitment (for example, three-month website engagements). Minimums are stated in your Order.</li>
                  <li><strong>Late payment</strong> may result in suspension of work and campaign pausing after notice. You remain responsible for fees accrued through suspension.</li>
                  <li><strong>Payments</strong> are processed by Stripe or by invoice. Except where a written guarantee or your Order provides otherwise, fees are non-refundable once the billing period has begun.</li>
                  <li><strong>Taxes.</strong> Fees exclude applicable taxes, which are your responsibility (other than taxes on our income).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">5. Guarantees and Disclaimers of Results</h2>
                <p>
                  Any performance promise we make is limited to the exact written terms on our{' '}
                  <Link href="/our-guarentee" className="text-[var(--color-trust)] hover:underline">Our Guarantee</Link>{' '}
                  page or in your Order — including its qualification requirements, remedies, and claim windows.
                  Beyond those written commitments, we do not guarantee specific rankings, traffic, lead volumes,
                  costs per lead, appointments, closings, or revenue. Marketing results depend on factors outside any
                  agency&apos;s control, including market conditions, competition, platform changes, budgets, and your
                  own follow-up.
                </p>
                <p className="mt-3">
                  Case studies and statistics on the Site are real client results from specific engagements. They are
                  examples, not promises that your results will match them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">6. Intellectual Property</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Your materials</strong> (brand assets, listings, photos, content you supply) remain yours. You grant us a license to use them to perform the Services and, with your permission, to showcase completed work in our portfolio and marketing.</li>
                  <li><strong>Deliverables:</strong> upon full payment, you own the final deliverables we create specifically for you (website content, ad creative, landing pages), subject to third-party license terms (fonts, stock media, themes, plugins).</li>
                  <li><strong>Our toolkit:</strong> we retain ownership of our pre-existing materials, frameworks, processes, templates, and know-how, and may reuse general learnings that do not include your confidential information.</li>
                  <li><strong>Site content:</strong> the Site and its content are owned by DMR Media or its licensors. You may not scrape, reproduce, or create derivative works without written permission.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">7. Confidentiality</h2>
                <p>
                  Each party will protect the other&apos;s non-public business information with reasonable care, use it
                  only to perform under these Terms, and not disclose it except to personnel and advisors who need it
                  (bound by similar obligations) or as required by law. Aggregate, de-identified performance data may
                  be used to improve and benchmark our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">8. Communications Consent</h2>
                <p>
                  By submitting a form with your contact details, you consent to receive communications from DMR Media
                  by email, phone, and SMS as described in our{' '}
                  <Link href="/privacy-policy" className="text-[var(--color-trust)] hover:underline">Privacy Policy</Link>.
                  You can opt out of marketing at any time (unsubscribe link, reply STOP, or ask us).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">9. Acceptable Use</h2>
                <p className="mb-3">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Site or Services for unlawful, deceptive, or discriminatory purposes, including violations of fair housing or advertising law</li>
                  <li>Submit false, misleading, or spam form entries, or interfere with the Site&apos;s operation or security</li>
                  <li>Reverse engineer, scrape, or harvest data from the Site</li>
                  <li>Misrepresent your identity, licensure, or authority</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">10. Termination</h2>
                <p>
                  Either party may terminate an engagement as provided in the applicable Order (including any minimum
                  term and notice period). We may suspend or terminate immediately for non-payment, material breach, or
                  unlawful use. Upon termination: you owe fees accrued through the termination date; we will hand off
                  accounts and deliverables you have paid for; and sections of these Terms that by their nature should
                  survive (payment, IP, confidentiality, disclaimers, liability limits, disputes) survive.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">11. Disclaimer of Warranties</h2>
                <p>
                  EXCEPT AS EXPRESSLY STATED IN THESE TERMS OR AN ORDER, THE SITE AND SERVICES ARE PROVIDED &ldquo;AS
                  IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo; TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                  OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  AND NON-INFRINGEMENT. WE DO NOT PROVIDE LEGAL, TAX, OR COMPLIANCE ADVICE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">12. Limitation of Liability</h2>
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY LAW, DMR MEDIA WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL,
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, DATA, OR GOODWILL. OUR
                  TOTAL LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATING TO THE SITE OR SERVICES WILL NOT EXCEED THE
                  FEES YOU PAID TO DMR MEDIA IN THE TWELVE (12) MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM.
                  THESE LIMITS DO NOT APPLY WHERE PROHIBITED BY LAW.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">13. Indemnification</h2>
                <p>
                  You will defend and indemnify DMR Media against third-party claims arising from content or
                  instructions you supply, your violation of law (including fair housing and licensing requirements),
                  or your breach of these Terms. We will defend and indemnify you against third-party claims that
                  deliverables we created (excluding materials you supplied) infringe U.S. intellectual property
                  rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">14. Dispute Resolution — Binding Arbitration and Class Waiver</h2>
                <p>
                  <strong>Please read this section carefully — it affects your legal rights.</strong>
                </p>
                <p className="mt-3">
                  Any dispute arising out of or relating to these Terms, the Site, or the Services that cannot be
                  resolved informally will be resolved by <strong>binding individual arbitration</strong> administered
                  by the American Arbitration Association under its Commercial Arbitration Rules. The arbitration will
                  be conducted by a single arbitrator in Outagamie County, Wisconsin, or remotely by agreement.
                  Judgment on the award may be entered in any court of competent jurisdiction.
                </p>
                <p className="mt-3">
                  <strong>Class action waiver:</strong> disputes will be arbitrated only on an individual basis.
                  Neither party may participate in a class, consolidated, or representative action. Either party may
                  bring qualifying claims in small claims court, and either party may seek injunctive relief in court
                  for misuse of intellectual property or confidential information.
                </p>
                <p className="mt-3">
                  Before initiating arbitration, the party raising the dispute will give written notice and both
                  parties will attempt in good faith to resolve it within 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">15. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the State of Wisconsin, without regard to conflict-of-law
                  rules. Subject to Section 14, exclusive venue for any court proceeding is the state or federal
                  courts located in Outagamie County, Wisconsin.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">16. Changes to These Terms</h2>
                <p>
                  We may update these Terms from time to time. Changes take effect when posted on this page with an
                  updated &ldquo;Last updated&rdquo; date. Material changes to an active engagement will be
                  communicated directly. Continued use of the Site or Services after changes are posted constitutes
                  acceptance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">17. Miscellaneous</h2>
                <p>
                  These Terms plus any Order are the entire agreement between us regarding their subject matter. If a
                  provision is unenforceable, the rest remains in effect. Our failure to enforce a provision is not a
                  waiver. You may not assign these Terms without our consent; we may assign them in connection with a
                  merger or sale. Neither party is liable for delays caused by events beyond its reasonable control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">18. Contact Information</h2>
                <p>Questions about these Terms:</p>
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
