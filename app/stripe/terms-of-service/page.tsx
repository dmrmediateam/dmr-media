import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Service Terms — Subscriptions & Agreements | DMR Media',
  description:
    'Service terms for DMR Media subscription programs and traditional SEO & Google Ads agreements, referenced from Stripe invoices.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const LAST_UPDATED = 'August 28, 2026';

export default function StripeTermsOfServicePage() {
  return (
    <div className="min-h-screen bg-off-white">
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Service Terms
            </h1>
            <p className="text-lg text-[var(--color-ink-300)] mb-4">
              Subscription Programs &amp; Traditional SEO / Google Ads Agreements
            </p>
            <div className="w-24 h-px bg-off-black mb-8"></div>
            <p className="text-sm text-[var(--color-ink-300)] mb-12">Last updated: {LAST_UPDATED}</p>

            <div className="prose prose-lg max-w-none space-y-8 text-[var(--color-ink-300)]">
              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">1. About These Terms</h2>
                <p>
                  These service terms (&ldquo;Service Terms&rdquo;) are provided by DMR Media Specialists, LLC, a
                  Wisconsin limited liability company (&ldquo;DMR Media,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                  &ldquo;us&rdquo;), and are referenced from our Stripe invoices, checkout pages, and payment receipts.
                  They describe the specific commercial terms of the programs below and supplement our general{' '}
                  <Link href="/terms-of-service" className="text-[var(--color-trust)] hover:underline">Terms of Service</Link>{' '}
                  and{' '}
                  <Link href="/privacy-policy" className="text-[var(--color-trust)] hover:underline">Privacy Policy</Link>,
                  which are incorporated by reference and apply to every engagement.
                </p>
                <p className="mt-3">
                  By starting a free trial, completing a Stripe checkout, paying an invoice, or otherwise purchasing one
                  of the programs described below, you agree to these Service Terms on behalf of yourself and, where
                  applicable, the company or team you represent. If you have signed a separate services agreement with
                  DMR Media, the signed agreement controls where it conflicts with this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">
                  Part I — Google Ads Simple (Subscription)
                </h2>

                <h3 className="text-xl font-serif font-light text-off-black mb-3 mt-6">2. What&apos;s Included</h3>
                <p className="mb-3">The Google Ads Simple program includes, for the duration of your subscription:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Managed Google Ads.</strong> Setup and ongoing management of Google Ads campaigns for your
                    market.
                  </li>
                  <li>
                    <strong>One (1) batch of Performance Max ads.</strong> A single build of Performance Max ad assets
                    (copy and creative) deployed to your ad account. Additional Performance Max batches, refreshes, or
                    redesigns are not included unless separately purchased.
                  </li>
                  <li>
                    <strong>Website (only if purchased).</strong> If your checkout or invoice includes a website
                    product, DMR Media will build and operate a website for your use on the IDX Broker platform. If you
                    did not purchase a website, no website design, development, or hosting is included in this program.
                  </li>
                  <li>
                    <strong>Website ownership.</strong> Any website provided under this program is{' '}
                    <strong>owned by DMR Media, not by you</strong>. It is built on IDX Broker and licensed for your
                    use while your subscription remains active and in good standing. On cancellation or expiration of
                    the subscription, DMR Media may take the website offline and retains all rights to its design,
                    code, templates, and configuration. Your brand assets, listings, photos, and content you supplied
                    remain yours, and your domain name remains yours if registered in your name. This ownership
                    provision supersedes the deliverable-ownership language in our general Terms of Service for
                    websites provided under this program.
                  </li>
                  <li>
                    <strong>Team email access.</strong> Direct access to the DMR Media team via email at{' '}
                    <a href="mailto:team@dmrmedia.org" className="text-[var(--color-trust)] hover:underline">team@dmrmedia.org</a>{' '}
                    for questions, requests, and support during business hours.
                  </li>
                </ul>
                <p className="mt-3">
                  Advertising spend is <strong>not</strong> included. Media budgets are paid by you directly to Google
                  and are set, funded, and controlled through your own advertising account.
                </p>

                <h3 className="text-xl font-serif font-light text-off-black mb-3 mt-6">3. Free Trial</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your subscription begins with a <strong>fourteen (14) day free trial</strong>.</li>
                  <li>
                    You may cancel at any time <strong>before the trial ends</strong> by emailing{' '}
                    <a href="mailto:team@dmrmedia.org" className="text-[var(--color-trust)] hover:underline">team@dmrmedia.org</a>,
                    and you will not be charged.
                  </li>
                  <li>
                    <strong>If you complete the trial without canceling, your subscription automatically converts into
                    the one-year commitment described in Section 4</strong>, and billing begins on the first day after
                    the trial ends using the payment method on file with Stripe.
                  </li>
                </ul>

                <h3 className="text-xl font-serif font-light text-off-black mb-3 mt-6">4. Billing and Commitment</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Billing cycle.</strong> You are billed <strong>every four (4) weeks</strong>, in advance,
                    automatically through Stripe, at the rate shown at checkout or on your invoice.
                  </li>
                  <li>
                    <strong>Commitment term.</strong> Upon completion of the free trial, you are committing to{' '}
                    <strong>one (1) year of service</strong> — thirteen (13) consecutive four-week billing periods —
                    beginning on your first billing date.
                  </li>
                  <li>
                    <strong>Early cancellation.</strong> Because pricing reflects the full one-year commitment, the
                    commitment is not cancelable for convenience during the year. If you stop payment or cancel during
                    the commitment term without DMR Media&apos;s uncured material breach, the remaining billing periods
                    of the commitment become due, except where we agree otherwise in writing.
                  </li>
                  <li>
                    <strong>Renewal.</strong> After the one-year commitment, the subscription continues on a rolling
                    four-week basis and either party may cancel with fourteen (14) days written notice to{' '}
                    <a href="mailto:team@dmrmedia.org" className="text-[var(--color-trust)] hover:underline">team@dmrmedia.org</a>.
                  </li>
                  <li>
                    <strong>Failed payments</strong> may result in campaign pausing and suspension of service until the
                    account is brought current. Suspension does not extend or terminate the commitment term.
                  </li>
                  <li>
                    <strong>Refunds</strong> are not provided for billing periods that have begun, except where required
                    by law or expressly agreed in writing.
                  </li>
                </ul>

                <h3 className="text-xl font-serif font-light text-off-black mb-3 mt-6">5. Price Changes</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Your rate is <strong>locked for the duration of your one-year commitment</strong>.
                  </li>
                  <li>
                    DMR Media may increase the subscription fee by <strong>up to fifty percent (50%)</strong> per
                    adjustment, effective at the start of a renewal period after your commitment ends, with at least
                    thirty (30) days written notice to your billing email.
                  </li>
                  <li>
                    If you do not accept an announced increase, you may cancel before it takes effect by emailing{' '}
                    <a href="mailto:team@dmrmedia.org" className="text-[var(--color-trust)] hover:underline">team@dmrmedia.org</a>;
                    continued use of the service after the effective date constitutes acceptance of the new rate.
                  </li>
                </ul>

                <h3 className="text-xl font-serif font-light text-off-black mb-3 mt-6">6. Your Responsibilities</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide administrator access to your Google Ads account (and website/CRM access where applicable).</li>
                  <li>Maintain a funded advertising budget paid directly to Google.</li>
                  <li>Provide timely feedback, approvals, and the information we need to launch and manage campaigns.</li>
                  <li>Respond to leads promptly and comply with all laws applicable to your profession, including fair housing and advertising rules.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">
                  Part II — Traditional SEO &amp; Google Ads Agreements
                </h2>
                <p>
                  Clients on our traditional programs sign the DMR Media Specialists, LLC Services Agreement (Google
                  Ads &amp; SEO Packages). The summary below is provided for reference alongside Stripe invoices; the
                  signed Services Agreement is the governing document and controls if anything on this page differs
                  from it.
                </p>

                <h3 className="text-xl font-serif font-light text-off-black mb-3 mt-6">7. Packages and Fees</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Option A — Google Ads Management:</strong> $2,000.00 USD per month, plus ten percent (10%)
                    of monthly Ad Spend. Includes fully managed Google Ads campaigns (two new ad sets/groups per week,
                    conversion tracking, and ongoing optimization) and setup and management of Google Local Service
                    Ads.
                  </li>
                  <li>
                    <strong>Option B — Google Ads + SEO:</strong> $4,000.00 USD per month, plus ten percent (10%) of
                    monthly Ad Spend. Includes everything in Option A plus SEO and organic visibility services: Google
                    Business Profile management with 3&ndash;5 updates per week, an average of 50 citations per month,
                    three SEO-optimized blog posts per week, a custom SEO strategy revisited quarterly, a minimum of
                    two verified backlinks per month (including at least one DR&nbsp;30+ and one DR&nbsp;40+ source),
                    and additional SEO pages as strategy requires.
                  </li>
                  <li>
                    <strong>Ad Spend</strong> means the total actual spend across campaigns we manage for you
                    (including Google Ads and Local Service Ads). Ad Spend is paid by you directly to the advertising
                    platform; the 10% fee is paid to DMR Media and is invoiced with the following monthly fee based on
                    platform-reported spend.
                  </li>
                  <li>
                    <strong>Reporting</strong> (bi-weekly Loom updates and end-of-month reports) is available upon
                    request during onboarding or in writing during the engagement.
                  </li>
                </ul>

                <h3 className="text-xl font-serif font-light text-off-black mb-3 mt-6">8. Minimum Commitment and Termination</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Every traditional SEO and Google Ads engagement carries a minimum initial term of three
                    (3) consecutive months.</strong>
                  </li>
                  <li>
                    The agreement may not be terminated during the initial term except for DMR Media&apos;s material
                    breach that remains uncured fourteen (14) days after written notice. If services or payment stop
                    during the initial term without such cause, the remaining monthly fees for the initial term become
                    immediately due.
                  </li>
                  <li>
                    After the initial term, the agreement renews month-to-month, and either party may terminate with
                    fourteen (14) days written notice to{' '}
                    <a href="mailto:team@dmrmedia.org" className="text-[var(--color-trust)] hover:underline">team@dmrmedia.org</a>.
                  </li>
                  <li>
                    Fees accrued through termination (including the Ad Spend percentage on spend through that date)
                    remain due. Amounts unpaid more than ten (10) days after the due date may result in suspension of
                    services until the account is current. Prepaid or multi-month payments are non-refundable once
                    services have begun.
                  </li>
                </ul>

                <h3 className="text-xl font-serif font-light text-off-black mb-3 mt-6">9. Additional Agreement Terms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Client responsibilities:</strong> Google Ads administrator access, Google Business Profile
                    access where applicable, CRM access for lead and conversion tracking, a funded ad budget paid
                    directly to the platform, and timely feedback and approvals.
                  </li>
                  <li>
                    <strong>Intellectual property:</strong> creative work, content, and SEO assets created under the
                    agreement become the Client&apos;s property upon full payment, excluding website source code and
                    proprietary frameworks unless separately purchased. DMR Media retains a license to reference the
                    Client in case studies and display anonymized results, and will not disclose the Client&apos;s
                    private contact information without written consent.
                  </li>
                  <li>
                    <strong>Referral program:</strong> Clients receive 10% of the first paid invoice from any new
                    client they directly refer, paid within 30 days of the referred client&apos;s first payment.
                  </li>
                  <li>
                    <strong>Non-solicitation:</strong> during the agreement and for twelve (12) months after, the
                    Client may not hire or contract DMR Media personnel who performed services under the agreement
                    without written consent.
                  </li>
                  <li>
                    <strong>No guaranteed results; limitation of liability:</strong> services are built around
                    measurable goals but no specific outcome (rankings, leads, conversions, or revenue) is guaranteed,
                    and DMR Media&apos;s total liability is capped at the amount paid in the most recent billing cycle.
                  </li>
                  <li>
                    <strong>Fee changes:</strong> fees under a signed Services Agreement change only as that agreement
                    provides (currently, by written agreement of both Parties). Where a signed agreement or renewal
                    permits repricing, any increase will not exceed fifty percent (50%) per adjustment and will take
                    effect only after the initial term, on at least thirty (30) days written notice.
                  </li>
                  <li>
                    <strong>Governing law:</strong> the State of Wisconsin.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">10. Contact</h2>
                <p>Questions about an invoice, subscription, or these Service Terms:</p>
                <p className="mt-3">
                  <strong>DMR Media Specialists, LLC</strong><br />
                  100 W College Ave, Office No. 326<br />
                  Appleton, Wisconsin 54911<br />
                  <strong>Email:</strong>{' '}
                  <a href="mailto:team@dmrmedia.org" className="text-[var(--color-trust)] hover:underline">team@dmrmedia.org</a><br />
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
