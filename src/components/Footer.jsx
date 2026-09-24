// src/sections/Footer.jsx
import { footerContent } from "../data/restaurantData";
import "../styles/footer.css";

export default function Footer() {
  const { brand, quickLinks, contact, hours, socialLinks, copyright } = footerContent;

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">

        {/* ---------- Column 1: Brand ---------- */}
        <div className="footer-col footer-col--brand">
          <h2 className="footer-brand-name">{brand.name}</h2>
          <p className="footer-brand-tagline">{brand.tagline}</p>
        </div>

        {/* ---------- Column 2: Quick Links ---------- */}
        <nav className="footer-col" aria-labelledby="footer-links-heading">
          <h3 id="footer-links-heading" className="footer-col-heading">
            Quick Links
          </h3>
          <ul className="footer-list">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ---------- Column 3: Contact ---------- */}
        <div className="footer-col">
          <h3 className="footer-col-heading">{contact.heading}</h3>

          <address className="footer-address">
            {contact.address.map((line, i) => (
              <span key={i} className="footer-address-line">
                {line}
              </span>
            ))}

            <a href={contact.phone.href} className="footer-link">
              {contact.phone.label}
            </a>

            <a href={contact.email.href} className="footer-link">
              {contact.email.label}
            </a>
          </address>
        </div>

        {/* ---------- Column 4: Hours ---------- */}
        <div className="footer-col">
          <h3 className="footer-col-heading">{hours.heading}</h3>
          <ul className="footer-list footer-hours">
            {hours.groups.map((group) => (
              <li key={group.label} className="footer-hour">
                <span className="footer-hour-label">{group.label}</span>
                <span className="footer-hour-time">{group.time}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ---------- Social row ---------- */}
      <div className="footer-social">
        {socialLinks.map((link, i) => (
          <span key={link.label} className="footer-social-item">
            <a
              href={link.href}
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
            {i < socialLinks.length - 1 && (
              <span className="footer-social-dot" aria-hidden="true">·</span>
            )}
          </span>
        ))}
      </div>

      {/* ---------- Bottom ---------- */}
      <div className="footer-bottom">
        <p className="footer-copyright">{copyright}</p>
      </div>
    </footer>
  );
}