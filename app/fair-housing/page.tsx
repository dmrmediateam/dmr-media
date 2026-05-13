import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commitment to Fair Housing | DMR Media',
  description: 'DMR Media\'s commitment to fair housing and equal opportunity in real estate marketing',
};

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
            <p className="text-sm text-[var(--color-ink-300)] mb-12">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-8 text-[var(--color-ink-300)]">
              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Our Commitment</h2>
                <p>
                  DMR Media is committed to promoting fair housing and equal opportunity in all aspects of real estate marketing. We believe that everyone has the right to fair and equal access to housing, regardless of race, color, religion, sex, national origin, familial status, disability, or any other protected characteristic.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Fair Housing Laws</h2>
                <p>
                  The Fair Housing Act, Title VIII of the Civil Rights Act of 1968, prohibits discrimination in the sale, rental, and financing of housing based on race, color, national origin, religion, sex, familial status, or disability. Many states and localities have additional protected classes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Our Practices</h2>
                <p className="mb-3">In our marketing services, we:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use inclusive language that does not discriminate against any protected class</li>
                  <li>Avoid any marketing content that suggests preferences, limitations, or discrimination</li>
                  <li>Ensure all property descriptions and marketing materials comply with fair housing laws</li>
                  <li>Provide equal marketing opportunities to all clients regardless of their background</li>
                  <li>Regularly review and update our practices to ensure compliance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Prohibited Language</h2>
                <p className="mb-3">We avoid using language that could be considered discriminatory, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>References to race, color, religion, or national origin</li>
                  <li>Statements about familial status (e.g., "perfect for families" or "adults only")</li>
                  <li>Discriminatory references to disabilities</li>
                  <li>Language that suggests preferences or limitations based on protected characteristics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Client Education</h2>
                <p>
                  We work with our real estate professional clients to ensure their marketing materials comply with fair housing laws. We provide guidance on appropriate language and help create inclusive marketing content that attracts all qualified buyers and renters.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Reporting Discrimination</h2>
                <p>
                  If you believe you have experienced housing discrimination, you can file a complaint with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li><strong>U.S. Department of Housing and Urban Development (HUD):</strong> Visit <a href="https://www.hud.gov/fairhousing" target="_blank" rel="noopener noreferrer" className="text-[var(--color-trust)] hover:underline">hud.gov/fairhousing</a> or call 1-800-669-9777</li>
                  <li><strong>Your local fair housing agency</strong></li>
                  <li><strong>State and local civil rights agencies</strong></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Our Promise</h2>
                <p>
                  DMR Media is dedicated to creating marketing strategies that are effective, ethical, and compliant with all fair housing laws. We are committed to helping create a more inclusive real estate market where everyone has equal access to housing opportunities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-light text-off-black mb-4">Contact Us</h2>
                <p>
                  If you have questions about our fair housing commitment or practices, please contact us at:
                </p>
                <p className="mt-3">
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
