import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commitment to Fair Housing | DMR Media',
  description:
    'DMR Media LLC\'s commitment to fair housing and equal opportunity in real estate marketing — our standards, digital advertising practices, and how to report concerns.',
};

const LAST_UPDATED = 'August 19, 2026';

export default function FairHousingPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
              Commitment to Fair Housing
            </h1>
            <div className="w-24 h-px bg-off-black mb-8"></div>
            <p className="text-sm text-[var(--color-ink-300)] mb-12">Last updated: {LAST_UPDATED}</p>

            <div className="prose prose-lg max-w-none space-y-8 text-[var(--color-ink-300)]">
              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Our Commitment</h2>
                <p>
                  DMR Media LLC is committed to fair housing and equal opportunity in every piece of marketing we
                  create, manage, or advise on. Everyone deserves fair and equal access to housing — and marketing
                  plays a real role in whether that happens. As a marketing agency serving real estate professionals,
                  we treat fair housing compliance as a design requirement of our work, not an afterthought: it shapes
                  the words in our ads, the audiences our campaigns target, and the guidance we give clients.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">The Laws We Follow</h2>
                <p className="mb-3">
                  The federal Fair Housing Act (Title VIII of the Civil Rights Act of 1968, as amended) prohibits
                  discrimination in the sale, rental, financing, and <strong>advertising</strong> of housing based on
                  seven protected classes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Race</li>
                  <li>Color</li>
                  <li>Religion</li>
                  <li>National origin</li>
                  <li>Sex (including sexual orientation and gender identity)</li>
                  <li>Familial status (including families with children and pregnant people)</li>
                  <li>Disability</li>
                </ul>
                <p className="mt-3">
                  Many states and localities protect additional classes. Wisconsin&apos;s Open Housing Law, for
                  example, also protects marital status, ancestry, lawful source of income, age, and status as a
                  victim of domestic abuse, sexual assault, or stalking. Because our clients operate across many
                  states, we hold our work to the strictest applicable standard: when in doubt, we write and target as
                  if every protection applies.
                </p>
                <p className="mt-3">
                  Section 804(c) of the Fair Housing Act specifically makes it unlawful to make, print, or publish any
                  advertisement that indicates a preference, limitation, or discrimination based on a protected class.
                  That provision applies directly to the work we do every day — which is why this page exists.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Our Advertising Copy Standards</h2>
                <p className="mb-3">In every ad, landing page, listing description, and email we produce, we:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Describe the property, not the people.</strong> &ldquo;Four bedrooms and a fenced yard&rdquo; — never &ldquo;perfect for families.&rdquo; &ldquo;Steps from the marina&rdquo; — never who we imagine walking those steps.</li>
                  <li><strong>Avoid preference, limitation, or steering language</strong> — no &ldquo;ideal for,&rdquo; &ldquo;suited to,&rdquo; &ldquo;exclusive community,&rdquo; or &ldquo;traditional neighborhood&rdquo; framing that signals who is welcome.</li>
                  <li><strong>Never reference protected classes</strong> — no direct or coded references to race, color, religion, national origin, sex, familial status, disability, or state-protected classes like age, marital status, or source of income.</li>
                  <li><strong>Treat &ldquo;luxury&rdquo; as a property standard, not a people filter.</strong> Our positioning describes price point, finish, and service level — it never implies who belongs in a neighborhood.</li>
                  <li><strong>Use accurate imagery.</strong> We avoid photo and model selections that signal a preferred demographic for a property or community.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Digital Targeting Practices</h2>
                <p className="mb-3">
                  Fair housing risk in modern marketing lives as much in <em>targeting</em> as in copy. Our practices
                  on ad platforms:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Housing ad categories:</strong> where a platform provides a housing-specific ad category with restricted targeting (such as Meta&apos;s Special Ad Category), we use it for housing ads as required.</li>
                  <li><strong>No exclusionary audience targeting:</strong> we do not target or exclude audiences by protected class or close proxies for protected classes — including narrow age bands, gender segments, or ethnic-affinity style audiences — for housing ads.</li>
                  <li><strong>Geography is drawn around markets, not around people:</strong> location targeting follows the client&apos;s actual service area and inventory. We do not use geographic exclusions as a proxy for demographic exclusion (digital redlining).</li>
                  <li><strong>Keywords and prompts:</strong> search and AI-channel campaigns are built on intent (&ldquo;waterfront homes for sale&rdquo;), never on protected characteristics.</li>
                  <li><strong>Platform evolution:</strong> when Google, Meta, OpenAI, or other platforms change their housing advertising policies, we update our practices to comply — for every account we manage.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">How We Work With Clients</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Review:</strong> marketing copy we produce is screened against the standards above before it ships. Client-supplied copy that raises fair housing concerns is flagged with a suggested compliant rewrite.</li>
                  <li><strong>Guidance:</strong> we advise clients on compliant language and targeting, and we document our reasoning when a claim or audience is declined.</li>
                  <li><strong>Refusal:</strong> we will decline — and have declined — to publish content or configure targeting that we believe violates fair housing law, even at a client&apos;s request. No engagement is worth participating in discrimination.</li>
                  <li><strong>Equal service:</strong> we offer our services to real estate professionals without regard to any protected characteristic, and our lead qualification criteria are strictly business-based (market, volume, team size, goals).</li>
                  <li><strong>Not legal advice:</strong> we are marketers, not lawyers. We hold our work to the standards above, and we encourage clients to consult their broker, association, or attorney on specific compliance questions.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Accessibility</h2>
                <p>
                  Equal access includes access to information. We build client websites and landing pages with
                  accessibility in mind — semantic markup, keyboard navigability, alt text on meaningful images, and
                  readable contrast — and we work toward WCAG-informed standards across the sites we ship. If you have
                  difficulty accessing content on this site, contact us and we will provide the information in an
                  accessible format.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Training and Accountability</h2>
                <p>
                  Everyone who writes copy, builds audiences, or configures campaigns at DMR Media is trained on the
                  standards on this page, and we review them as platform policies and regulations evolve. Fair housing
                  compliance is part of our internal QA checklist for ad launches and website content — a launch
                  blocker, not a suggestion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Reporting Discrimination</h2>
                <p className="mb-3">
                  If you believe you have experienced housing discrimination — or believe any marketing associated
                  with our clients falls short of these standards — please report it:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>To us directly:</strong> email team@dmrmedia.org with the subject &ldquo;Fair Housing
                    Concern.&rdquo; We review every report, and confirmed issues are corrected immediately.
                  </li>
                  <li>
                    <strong>U.S. Department of Housing and Urban Development (HUD):</strong>{' '}
                    <a href="https://www.hud.gov/fairhousing" target="_blank" rel="noopener noreferrer" className="text-[var(--color-trust)] hover:underline">hud.gov/fairhousing</a>{' '}
                    or 1-800-669-9777 (TTY: 1-800-877-8339)
                  </li>
                  <li><strong>Wisconsin Department of Workforce Development, Equal Rights Division</strong> (for Wisconsin properties), or your state&apos;s civil rights agency</li>
                  <li><strong>Your local fair housing council or agency</strong></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Our Promise</h2>
                <p>
                  Great marketing widens the front door; it never narrows it. DMR Media is dedicated to marketing that
                  is effective, ethical, and compliant with all fair housing laws — and to helping build a real estate
                  market where every qualified buyer, seller, and renter has equal access to opportunity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Contact Us</h2>
                <p>Questions about our fair housing commitment or practices:</p>
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
