// src/components/Location.jsx
import { useEffect, useState } from "react";
import { contactIntro } from "../data/restaurantData";

function formatTime(mins) {
  const h = Math.floor(mins / 60) % 24;
  const m = mins % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function computeStatus(hours) {
  const now = new Date();
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();

  const today = hours[day];
  if (!today) return { isOpen: false, label: "Closed today" };

  const isOpen = minutes >= today.open && minutes < today.close;
  if (isOpen) {
    return { isOpen: true, label: `Open now · closes ${formatTime(today.close)}` };
  }

  if (minutes < today.open) {
    return { isOpen: false, label: `Closed · opens ${formatTime(today.open)}` };
  }

  for (let i = 1; i <= 7; i++) {
    const nextDay = (day + i) % 7;
    const next = hours[nextDay];
    if (next) {
      const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][nextDay];
      return {
        isOpen: false,
        label: `Closed · opens ${dayName} ${formatTime(next.open)}`,
      };
    }
  }

  return { isOpen: false, label: "Closed" };
}

export default function Location() {
  const { details, hours, ctaLabel, ctaHref } = contactIntro;
  const [status, setStatus] = useState(() => computeStatus(hours));

  useEffect(() => {
    const id = setInterval(() => setStatus(computeStatus(hours)), 60_000);
    return () => clearInterval(id);
  }, [hours]);

  return (
    <div className="location">
      <ul className="location-list">
        {details.map((item) => (
          <li key={item.id} className="location-item">
            <span className="location-icon" aria-hidden="true">
              {item.icon}
            </span>

            <div className="location-body">
              <p className="location-label">{item.label}</p>

              {item.href ? (
                <a
                  href={item.href}
                  className="location-value location-link"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {item.lines.map((line, i) => (
                    <span key={i} className="location-line">{line}</span>
                  ))}
                </a>
              ) : (
                <p className="location-value">
                  {item.lines.map((line, i) => (
                    <span key={i} className="location-line">{line}</span>
                  ))}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="location-footer">
        <p
          className={`location-status ${status.isOpen ? "is-open" : "is-closed"}`}
          aria-live="polite"
        >
          <span className="location-status-dot" aria-hidden="true" />
          <span className="location-status-text">{status.label}</span>
        </p>

        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="location-cta"
        >
          {ctaLabel}
          <span className="location-cta-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}