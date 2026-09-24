// src/sections/Contact.jsx
import { contactIntro } from "../data/restaurantData";
import ContactForm from "../components/ContactForm";
import "../styles/contact.css";

export default function Contact() {
  const { label, headingTop, headingBottom, subtitle, map, bgImage } = contactIntro;

  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-heading"
      style={{ "--contact-bg-image": `url('${bgImage}')` }}
    >
      {/* ---------- Header ---------- */}
      <header className="contact-header">
        {label && <p className="contact-label">{label}</p>}

        <h2 id="contact-heading" className="contact-heading">
          <span className="contact-heading-top">{headingTop}</span>{" "}
          <span className="contact-heading-bottom">{headingBottom}</span>
        </h2>

        <span className="contact-underline" aria-hidden="true" />

        {subtitle && <p className="contact-subtitle">{subtitle}</p>}
      </header>

      {/* ---------- Grid: Map | Contact Form ---------- */}
      <div className="contact-grid">
        {/* LEFT: Google Map */}
        <figure className="contact-image contact-map">
          <iframe
            title="Restaurant location map"
            src={map.embedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </figure>

        {/* RIGHT: Contact form */}
        <ContactForm />
      </div>
    </section>
  );
}