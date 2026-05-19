import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Guarantee | DMR Media',
  description:
    'DMR Media performance guarantee for luxury real estate marketing: qualified leads, scope, and terms.',
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

export default function OurGuaranteePage() {
  return (
    <div className="min-h-screen bg-off-white">
      <section className="section-padding border-b border-gray-200 bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 font-serif text-4xl font-light text-off-black md:text-5xl">Our Guarantee</h1>
            <div className="mb-8 h-px w-24 bg-off-black" />
            <p className="mb-12 text-sm text-[var(--color-ink-300)]">
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-8 text-[var(--color-ink-300)]">
              <section>
                <p className="text-lg leading-relaxed text-[var(--color-ink-300)]">
                  Have you been burned by a real estate marketing company before? We get it. Most companies will take
                  $2k/m or 15% ad spend and you&apos;re left wondering where your money is going—maybe some
                  &ldquo;SEO traffic.&rdquo; Unlike them, we stand behind our work with a performance guarantee so you
                  know what you&apos;re paying for.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">The guarantee</h2>
                <p>
                  If we do not deliver <strong>qualified leads</strong> within the first <strong>30 days</strong> of
                  active engagement under your signed scope, we will waive our management fees and continue working at no
                  management charge until qualified leads are delivered—or for up to <strong>90 calendar days</strong>{' '}
                  from the start of your engagement, whichever comes first.
                </p>
                <p className="mt-3">
                  &ldquo;Active engagement&rdquo; means your account is live, tracking is in place, and any client-side
                  requirements below are met. The guarantee applies to management and execution fees charged by DMR
                  Media—not third-party media or pass-through costs.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">
                  What counts as a qualified lead
                </h2>
                <p className="mb-3">For purposes of this guarantee, a <strong>qualified lead</strong> is a submission that includes all of the following:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>A full name</li>
                  <li>A valid phone number</li>
                  <li>A valid email address</li>
                  <li>Intent to buy or sell real estate within the next 12 months (as stated by the lead or captured in your intake form)</li>
                </ul>
                <p className="mt-3">
                  Leads must be attributable to DMR-managed campaigns or organic systems under your engagement (per
                  agreed tracking). Spam, duplicates, wrong numbers, and incomplete records do not count.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">What we do not guarantee</h2>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Closings or commission.</strong> We generate and route demand; whether a lead signs, lists,
                    or closes is determined by your follow-up, market conditions, and negotiation—not by DMR Media.
                  </li>
                  <li>
                    <strong>Specific rankings or impression volumes</strong> unless explicitly written into a separate
                    statement of work.
                  </li>
                  <li>
                    <strong>Results when the client pauses campaigns, withholds access, or fails to meet responsibilities</strong>{' '}
                    outlined in the signed agreement.
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
                  <li>Google Ads (or other paid platforms) setup, management, and reporting</li>
                  <li>CRM integrations, automations, and lead routing we configure</li>
                  <li>Regular reporting tied to leads, cost per lead, and pipeline metrics you define with us</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">Out of scope (not included)</h2>
                <p className="mb-3">The following are <strong>not</strong> covered by this guarantee and remain your responsibility unless a separate written agreement says otherwise:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Ad spend and media budgets</strong> paid directly to Google, Meta, or other platforms
                  </li>
                  <li>
                    <strong>Backlink purchases, link schemes, or paid placements</strong> for SEO engagements
                  </li>
                  <li>MLS, IDX, CRM, or software subscription fees</li>
                  <li>Photography, staging, print, or offline production</li>
                  <li>Legal, compliance, or licensing advice</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">Your responsibilities</h2>
                <p className="mb-3">The guarantee assumes you will:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Provide timely access to ad accounts, website, CRM, and analytics</li>
                  <li>Approve creative and landing updates within agreed turnaround times</li>
                  <li>Respond to leads in a reasonable timeframe so conversion data stays accurate</li>
                  <li>Maintain accurate market, budget, and compliance information</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">How to claim</h2>
                <p>
                  If you believe the guarantee applies, contact your DMR account lead in writing within 14 days of the
                  end of the applicable 30- or 90-day window. We will review lead logs, call tracking, and form
                  records against the qualified-lead definition above and confirm next steps in writing.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl font-light text-off-black">Contact</h2>
                <p>Questions about this guarantee or your engagement?</p>
                <p className="mt-3">
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
