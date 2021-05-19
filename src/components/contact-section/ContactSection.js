import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";

import DynamicScrollToTop from "../DynamicScrollToTop";

const ContactSection = () => {
  return (
    <main className="contact-section-container">
      <DynamicScrollToTop />
      <ContactHeader />
      <ContactForm />
      <ContactLinks />
    </main>
  );
};

export default ContactSection;
