// src/sections/Contact.jsx
import { useState } from "react";
import { contactIntro } from "../data/restaurantData";
import "../styles/contact.css";

export default function Contact() {
  const {
    label,
    headingTop,
    headingBottom,
    subtitle,
    details,
    socials,
    form,
    bgImage,
  } = contactIntro;

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // 🔌 Replace this with your real API call (Formspree, Resend, own backend…)
    // Example:
    // fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(values),
    // }).then(r => r.ok ? setStatus("success") : setStatus("error"));

    // Simulated success for now:
    setTimeout(() => {
      setStatus("success");
      setValues({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 900);
  };

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

      {/* ---------- Two-column grid ---------- */}
      <div className="contact-grid">
        {/* ───────── LEFT: Details ───────── */}
        <aside className="contact-info">
          <ul className="contact-detail-list">
            {details.map((d) => (
              <li key={d.id} className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true">
                  {d.icon}
                </span>

                <div className="contact-detail-body">
                  <p className="contact-detail-label">{d.label}</p>

                  {d.href ? (
                    <a
                      href={d.href}
                      className="contact-detail-value contact-detail-link"
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {d.lines.map((line, i) => (
                        <span key={i} className="contact-detail-line">
                          {line}
                        </span>
                      ))}
                    </a>
                  ) : (
                    <p className="contact-detail-value">
                      {d.lines.map((line, i) => (
                        <span key={i} className="contact-detail-line">
                          {line}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="contact-socials">
            <p className="contact-socials-label">Follow Us</p>
            <ul className="contact-socials-list">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ───────── RIGHT: Form ───────── */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h3 className="contact-form-title">{form.title}</h3>

          <div className="contact-form-row">
            {form.fields.map((f) => (
              <div
                key={f.name}
                className={`contact-field ${
                  f.name === "name" || f.name === "email" ? "" : ""
                }`}
              >
                <label htmlFor={`contact-${f.name}`} className="contact-field-label">
                  {f.label}
                  {f.required && <span aria-hidden="true"> *</span>}
                </label>
                <input
                  id={`contact-${f.name}`}
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  required={f.required}
                  value={values[f.name] || ""}
                  onChange={handleChange}
                  className="contact-input"
                  autoComplete={
                    f.name === "name"
                      ? "name"
                      : f.name === "email"
                      ? "email"
                      : f.name === "phone"
                      ? "tel"
                      : "off"
                  }
                />
              </div>
            ))}
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message" className="contact-field-label">
              {form.messageLabel} <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder={form.messagePlaceholder}
              required
              value={values.message}
              onChange={handleChange}
              className="contact-textarea"
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : form.submitLabel}
          </button>

          {status === "success" && (
            <p className="contact-message contact-message--success" role="status">
              {form.successMessage}
            </p>
          )}
          {status === "error" && (
            <p className="contact-message contact-message--error" role="alert">
              {form.errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}