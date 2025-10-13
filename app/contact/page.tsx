import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Page Header */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
            Get In Touch
          </h1>
          <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
          <p className="text-gray-dark max-w-2xl mx-auto">
            Ready to elevate your real estate marketing? Let's discuss how we can help you dominate the luxury market.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}
