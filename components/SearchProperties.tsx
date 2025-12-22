const SearchProperties = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4 heading-underline pb-4">
            Search Properties
          </h2>
          <p className="scroll-animate text-base text-[var(--color-ink-300)] max-w-2xl mx-auto mt-8">
            Find your dream home with our advanced search tools.
          </p>
        </div>

        {/* TODO: Integrate iHomeFinder or MLS property search widget */}
        <div className="scroll-animate bg-gray-light p-12 rounded-sm text-center">
          <img 
            src="/images/no-image.svg" 
            alt="No listings yet" 
            className="w-48 opacity-60 mx-auto mb-4"
          />
          <p className="text-[var(--color-ink-300)] text-lg">
            Advanced property search integration coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchProperties;

