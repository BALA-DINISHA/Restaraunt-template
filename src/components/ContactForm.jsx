// src/components/ContactForm.jsx
import { useState } from "react";
import { contactIntro } from "../data/restaurantData";

export default function ContactForm() {
  const { form } = contactIntro;

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Replace with your actual endpoint / Formspree / EmailJS
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) });

      await new Promise((r) => setTimeout(r, 900)); // simulated delay
      setStatus("sent");
      setValues({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-form-card">
      <header className="contact-form-head">
        <p className="contact-form-label">{form.label}</p>
        <h3 className="contact-form-title">{form.title}</h3>
        <p className="contact-form-sub">{form.subtitle}</p>
      </header>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="contact-field">
          <label htmlFor="cf-name" className="contact-field-label">
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={handleChange}
            className="contact-input"
          />
        </div>

        {/* Email + Phone (two columns) */}
        <div className="contact-field-row">
          <div className="contact-field">
            <label htmlFor="cf-email" className="contact-field-label">
              Email
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={handleChange}
              className="contact-input"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="cf-phone" className="contact-field-label">
              Phone
            </label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              value={values.phone}
              onChange={handleChange}
              className="contact-input"
            />
          </div>
        </div>

        {/* Message */}
        <div className="contact-field">
          <label htmlFor="cf-message" className="contact-field-label">
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            required
            placeholder="Tell us about your reservation or enquiry…"
            value={values.message}
            onChange={handleChange}
            className="contact-input contact-textarea"
          />
        </div>

        {/* Footer: status + submit */}
        <div className="contact-form-footer">
          <p
            className={`contact-form-status ${
              status === "sent"
                ? "is-sent"
                : status === "error"
                ? "is-error"
                : ""
            }`}
            aria-live="polite"
          >
            {status === "sending" && "Sending…"}
            {status === "sent" && "✓ Message sent. We'll be in touch."}
            {status === "error" && "Something went wrong. Try again."}
          </p>

          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : form.ctaLabel}
            <span className="contact-submit-arrow" aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}