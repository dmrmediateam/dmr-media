import ContactForm from '@/components/ContactForm';
import SEOWrapper from '@/components/SEOWrapper';
import { metadataFromRegistry } from '@/lib/content-registry';

export const metadata = metadataFromRegistry('/contact');

export default function ContactPage() {
  return (
    <SEOWrapper slug="/contact">
      <div className="min-h-screen bg-white">
        {/* Contact Form Section */}
        <ContactForm />
      </div>
    </SEOWrapper>
  );
}
