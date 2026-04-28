export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24">
        <div className="container-max">
          <div className="flex flex-col gap-14 sm:gap-16 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start lg:gap-x-16 xl:gap-x-20">
            {/* Mobile-first: intro and trust first; embed follows at the bottom of the column */}
            <div className="min-w-0 w-full max-w-xl mx-auto lg:mx-0 lg:max-w-none">
              <header className="text-center lg:text-left space-y-5 sm:space-y-6">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[var(--color-ink-400)] font-serif">
                  Application · mutual fit
                </p>
                <h1 className="text-[1.625rem] sm:text-3xl md:text-[2.125rem] font-serif font-light text-[var(--color-off-black)] leading-[1.12] tracking-[-0.02em]">
                  Apply to see if we are the right fit
                </h1>
                <p className="text-sm sm:text-base font-serif font-light text-[var(--color-ink-300)] leading-relaxed max-w-md mx-auto lg:mx-0">
                  Share a few details below so we can understand your goals and confirm whether this is the
                  right fit for both sides before a call.
                </p>
              </header>

              <div className="mt-12 sm:mt-14 lg:mt-16 pt-10 sm:pt-12 border-t border-[var(--color-ink-200)]">
                <ul className="flex flex-col gap-8 sm:gap-10">
                  <li className="flex items-start justify-between gap-6 text-left">
                    <div className="min-w-0 space-y-1 pr-4">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] font-serif">
                        SEMrush
                      </p>
                      <p className="text-sm font-serif font-light text-[var(--color-off-black)] leading-snug">
                        Agency partner
                      </p>
                    </div>
                    <img
                      src="/images/logo.BwihUn5s.svg"
                      alt=""
                      className="h-4 w-auto shrink-0 opacity-50 mt-0.5"
                      width={64}
                      height={20}
                    />
                  </li>
                </ul>

                <blockquote className="mt-12 sm:mt-14 pl-5 sm:pl-6 border-l border-[rgba(15,15,15,0.1)]">
                  <p className="text-sm sm:text-[0.9375rem] font-serif font-light text-[var(--color-off-black)] leading-[1.65] italic">
                    &ldquo;Once we met with Andrew at DMR, it was a done deal… we cancelled all the other
                    meetings.&rdquo;
                  </p>
                  <footer className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif">
                    Linda F.
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Application form last on mobile; right column + sticky on large screens */}
            <div
              id="strategy-scheduler"
              tabIndex={-1}
              className="min-w-0 w-full scroll-mt-28 lg:sticky lg:top-24 lg:self-start xl:top-28 outline-none"
            >
              <p className="text-center lg:text-left text-[10px] uppercase tracking-[0.28em] text-[var(--color-ink-400)] font-serif mb-4 lg:mb-5">
                Application call
              </p>
              <div className="border border-[rgba(15,15,15,0.12)] bg-white p-6 sm:p-8 shadow-[0_18px_50px_rgba(15,15,15,0.08)]">
                <form
                  className="space-y-6"
                  action="/api/application"
                  method="POST"
                >
                  <input type="hidden" name="formName" value="calendar-application" />

                  <div className="space-y-5 border-t border-[rgba(15,15,15,0.1)] pt-6">
                    <h2 className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-off-black)] font-serif">
                      Contact details
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)]"
                        >
                          Name*
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Andrew"
                          className="w-full min-h-[48px] border-0 border-b border-[rgba(15,15,15,0.18)] px-0 text-[15px] bg-transparent text-[var(--color-off-black)] placeholder:text-[var(--color-ink-400)] focus:outline-none focus:border-[var(--color-off-black)]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)]"
                        >
                          Email*
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="arohm@dmrmedia.org"
                          className="w-full min-h-[48px] border-0 border-b border-[rgba(15,15,15,0.18)] px-0 text-[15px] bg-transparent text-[var(--color-off-black)] placeholder:text-[var(--color-ink-400)] focus:outline-none focus:border-[var(--color-off-black)]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)]"
                      >
                        Phone*
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        className="w-full min-h-[48px] border-0 border-b border-[rgba(15,15,15,0.18)] px-0 text-[15px] bg-transparent text-[var(--color-off-black)] placeholder:text-[var(--color-ink-400)] focus:outline-none focus:border-[var(--color-off-black)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-5 border-t border-[rgba(15,15,15,0.1)] pt-6">
                    <h2 className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-off-black)] font-serif">
                      Business profile
                    </h2>
                    <div className="space-y-2">
                      <label
                        htmlFor="profile-type"
                        className="block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)]"
                      >
                        Which of the following best describes you:*
                      </label>
                      <select
                        id="profile-type"
                        name="profileType"
                        required
                        defaultValue=""
                        className="w-full min-h-[48px] border-0 border-b border-[rgba(15,15,15,0.18)] px-0 text-[15px] bg-transparent text-[var(--color-off-black)] focus:outline-none focus:border-[var(--color-off-black)]"
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        <option value="real-estate-agent">Real Estate Agent</option>
                        <option value="real-estate-team">Real Estate Team (5+ agents)</option>
                        <option value="brokerage">Brokerage</option>
                        <option value="developer">Developer</option>
                        <option value="investor">Investor</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="website"
                        className="block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)]"
                      >
                        Current Website
                      </label>
                      <input
                        id="website"
                        name="website"
                        type="url"
                        placeholder="https://"
                        className="w-full min-h-[48px] border-0 border-b border-[rgba(15,15,15,0.18)] px-0 text-[15px] bg-transparent text-[var(--color-off-black)] placeholder:text-[var(--color-ink-400)] focus:outline-none focus:border-[var(--color-off-black)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-5 border-t border-[rgba(15,15,15,0.1)] pt-6">
                    <h2 className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-off-black)] font-serif">
                      Intent
                    </h2>
                    <fieldset className="space-y-2">
                      <legend className="block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)]">
                        What is the reason you are booking? (Select all that apply)
                      </legend>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        <label className="inline-flex items-center gap-2 rounded-sm border border-[rgba(15,15,15,0.12)] bg-[var(--color-off-white)]/30 px-3 py-2 text-sm text-[var(--color-off-black)] hover:border-[rgba(15,15,15,0.25)] transition-colors">
                          <input type="checkbox" name="bookingReason" value="just-looking" />
                          Just looking
                        </label>
                        <label className="inline-flex items-center gap-2 rounded-sm border border-[rgba(15,15,15,0.12)] bg-[var(--color-off-white)]/30 px-3 py-2 text-sm text-[var(--color-off-black)] hover:border-[rgba(15,15,15,0.25)] transition-colors">
                          <input type="checkbox" name="bookingReason" value="want-website-built" />
                          Want a website built
                        </label>
                        <label className="inline-flex items-center gap-2 rounded-sm border border-[rgba(15,15,15,0.12)] bg-[var(--color-off-white)]/30 px-3 py-2 text-sm text-[var(--color-off-black)] hover:border-[rgba(15,15,15,0.25)] transition-colors">
                          <input type="checkbox" name="bookingReason" value="want-more-sales" />
                          Want more Sales
                        </label>
                        <label className="inline-flex items-center gap-2 rounded-sm border border-[rgba(15,15,15,0.12)] bg-[var(--color-off-white)]/30 px-3 py-2 text-sm text-[var(--color-off-black)] hover:border-[rgba(15,15,15,0.25)] transition-colors">
                          <input type="checkbox" name="bookingReason" value="property-marketing" />
                          Property Marketing
                        </label>
                        <label className="inline-flex items-center gap-2 rounded-sm border border-[rgba(15,15,15,0.12)] bg-[var(--color-off-white)]/30 px-3 py-2 text-sm text-[var(--color-off-black)] hover:border-[rgba(15,15,15,0.25)] transition-colors">
                          <input type="checkbox" name="bookingReason" value="looking-for-sellers" />
                          Looking for Sellers
                        </label>
                      </div>
                    </fieldset>
                    <div className="space-y-2">
                      <label
                        htmlFor="notes"
                        className="block text-[11px] uppercase tracking-[0.12em] text-[var(--color-off-black)]"
                      >
                        Any additional information you would like us to know?
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={5}
                        className="w-full border-0 border-b border-[rgba(15,15,15,0.18)] px-0 py-2 text-[15px] bg-transparent text-[var(--color-off-black)] placeholder:text-[var(--color-ink-400)] focus:outline-none focus:border-[var(--color-off-black)]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[50px] bg-[var(--color-off-black)] text-white text-[11px] sm:text-xs uppercase tracking-[0.24em] font-serif hover:opacity-95 transition-opacity mt-2"
                  >
                    Submit application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
