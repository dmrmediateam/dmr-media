import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Guarantee | DMR Media',
  description:
    'Every performance promise DMR Media makes, in writing: the 30-day qualified-lead guarantee, the free audit promise, and the lead generation pilot guarantee.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-image-preview': 'none',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const LAST_UPDATED = 'August 19, 2026'

export default function OurGuaranteePage() {
  return (
    <div className="min-h-screen bg-off-white">
      <section className="section-padding border-b border-gray-200 bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 font-serif text-4xl font-light text-off-black md:text-5xl">Our Guarantee</h1>
            <div className="mb-8 h-px w-24 bg-off-black" />
            <p className="mb-12 text-sm text-[var(--color-ink-300)]">Last updated: {LAST_UPDATED}</p>

            <div className="prose prose-lg max-w-none space-y-8 text-[var(--color-ink-300)]">
              <section>
                <p className="text-lg leading-relaxed text-[var(--color-ink-300)]">
                  Have you been burned by a real estate marketing company before? We get it. Most companies will take
                  $2k/m or 15% of ad spend and you&apos;re left wondering where your money is going — maybe some
                  &ldquo;SEO traffic.&rdquo; Unlike them, we put every performance promise we make in writing, on one
                  page, with its exact terms. This page is that record. If we say it in an ad, you can hold us to it
                  here.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">
                  Guarantee 1 — The 30-day qualified-lead guarantee
                </h2>
                <p>
                  If we do not deliver <strong>qualified leads</strong> within the first <strong>30 days</strong> of
                  active engagement under your signed scope, we will waive our management fees and continue working at
                  no management charge until qualified leads are delivered — or for up to{' '}
                  <strong>90 calendar days</strong> from the start of your engagement, whichever comes first.
                </p>
                <p className="mt-3">
                  &ldquo;Active engagement&rdquo; means your account is live, tracking is in place, and the client-side
                  requirements below are met. The guarantee applies to management and execution fees charged by DMR
                  Media — not third-party media or pass-through costs.
                </p>
                <p className="mt-3">
                  <strong>Applies to:</strong> ongoing marketing engagements (SEO, Google Ads / PPC management, and
                  combined programs) under a signed scope that references this guarantee.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">
                  Guarantee 2 — The free audit promise
                </h2>
                <p>
                  Our marketing audit (offered on this site as a free 30-minute Google Ads, PPC, SEO, or lead audit) is
                  free, full stop. And it comes with teeth: if we do not identify at least{' '}
                  <strong>$30,000 in annual wasted spend or missed pipeline opportunity</strong> in your audit, you owe
                  us nothing and we&apos;ll tell you plainly that your current setup is sound. There is no purchase
                  required to receive your audit findings.
                </p>
                <p className="mt-3">
                  <strong>How it&apos;s measured:</strong> &ldquo;wasted spend&rdquo; means identifiable budget going
                  to irrelevant queries, placements, or audiences in your existing accounts; &ldquo;missed
                  pipeline&rdquo; means quantified opportunities (search volume, conversion gaps, cost benchmarks) you
                  are not currently capturing. We document both in the audit itself so you can verify the math —
                  whether or not you ever hire us.
                </p>
                <p className="mt-3">
                  <strong>Requires:</strong> read access to the relevant ad or analytics accounts (or enough account
                  history to review), and an active marketing presence to audit.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">
                  Guarantee 3 — The lead generation pilot guarantee
                </h2>
                <p>
                  For flagship lead generation engagements that include a setup fee: if we do not deliver{' '}
                  <strong>10 or more qualified leads in your first month</strong> of active engagement, your{' '}
                  <strong>setup fee is on us</strong> — refunded or credited in full.
                </p>
                <p className="mt-3">
                  <strong>Applies to:</strong> lead generation programs sold with a 30-day pilot guarantee in the
                  signed scope. The month is measured from launch (campaigns live and tracking verified), not from
                  contract signature.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">
                  What counts as a qualified lead
                </h2>
                <p className="mb-3">
                  For every guarantee on this page, a <strong>qualified lead</strong> is a submission that includes all
                  of the following:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>A full name</li>
                  <li>A valid phone number</li>
                  <li>A valid email address</li>
                  <li>
                    Intent to buy or sell real estate within the next 12 months (as stated by the lead or captured in
                    your intake form)
                  </li>
                </ul>
                <p className="mt-3">
                  Leads must be attributable to DMR-managed campaigns or organic systems under your engagement (per
                  agreed tracking). Spam, bots, duplicates, wrong numbers, solicitations, and incomplete records do not
                  count — we filter those out before they ever reach the tally, on both sides of the ledger.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">What we do not guarantee</h2>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Closings or commission.</strong> We generate and route demand; whether a lead signs, lists,
                    or closes is determined by your follow-up, market conditions, and negotiation — not by DMR Media.
                  </li>
                  <li>
                    <strong>Specific rankings, impression volumes, or costs per lead</strong> unless explicitly written
                    into a separate statement of work. Case studies on this site are real results from specific
                    engagements, not promises that your numbers will match them.
                  </li>
                  <li>
                    <strong>Results when the client pauses campaigns, withholds access or budget, or fails to meet
                    responsibilities</strong>{' '}
                    outlined in the signed agreement. The guarantee clock pauses while a client-side blocker is open.
                  </li>
                  <li>
                    <strong>Third-party platforms.</strong> We cannot guarantee against outages, policy changes, or
                    account actions by Google, Meta, OpenAI, or other platforms, though we manage through them at no
                    extra management charge.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">In scope (included in our work)</h2>
                <p className="mb-3">Depending on your program, in-scope services may include:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Strategy, campaign structure, and ongoing optimization</li>
                  <li>Landing pages, forms, and conversion paths we build or maintain under contract</li>
                  <li>SEO and content execution (technical fixes, on-site content, internal linking, reporting)</li>
                  <li>Google Ads, ChatGPT Ads, and other paid platform setup, management, and reporting</li>
                  <li>CRM integrations, automations, and lead routing we configure</li>
                  <li>Regular reporting tied to leads, cost per lead, and pipeline metrics you define with us</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">Out of scope (not included)</h2>
                <p className="mb-3">
                  The following are <strong>not</strong> covered by these guarantees and remain your responsibility
                  unless a separate written agreement says otherwise:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li><strong>Ad spend and media budgets</strong> paid directly to Google, Meta, OpenAI, or other platforms</li>
                  <li><strong>Backlink purchases, link schemes, or paid placements</strong> for SEO engagements</li>
                  <li>MLS, IDX, CRM, or software subscription fees</li>
                  <li>Photography, staging, print, or offline production</li>
                  <li>Legal, compliance, or licensing advice</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">Your responsibilities</h2>
                <p className="mb-3">Every guarantee on this page assumes you will:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Provide timely access to ad accounts, website, CRM, and analytics</li>
                  <li>Fund the agreed media budget without interruption during the guarantee window</li>
                  <li>Approve creative and landing updates within agreed turnaround times</li>
                  <li>Respond to leads in a reasonable timeframe so conversion data stays accurate</li>
                  <li>Maintain accurate market, budget, and compliance information</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">How to claim</h2>
                <p>
                  If you believe a guarantee applies, contact your DMR account lead (or team@dmrmedia.org) in writing
                  within <strong>14 days</strong> of the end of the applicable guarantee window. Tell us which
                  guarantee you are claiming. We will review lead logs, call tracking, and form records against the
                  qualified-lead definition above and confirm the outcome — and the remedy — in writing within 10
                  business days. If we owe you, we pay without a fight; that&apos;s the point of putting it in writing.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">One rule above all</h2>
                <p>
                  If an ad, landing page, or proposal from DMR Media ever states a promise more generous than this
                  page, the more generous written promise wins for the campaign it appeared in. We will never use this
                  page to walk back something we said to win your business.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">Contact</h2>
                <p>Questions about these guarantees or your engagement?</p>
                <p className="mt-3">
                  <strong>DMR Media LLC</strong>
                  <br />
                  100 W College Ave, Office No. 326
                  <br />
                  Appleton, Wisconsin 54911
                  <br />
                  <strong>Email:</strong> team@dmrmedia.org
                  <br />
                  <strong>Phone:</strong> +1 920-249-5210
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
