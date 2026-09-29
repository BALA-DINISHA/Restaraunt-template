// src/sections/Hero.jsx
import { useRestaurant } from "../context/RestaurantContext";

export default function Hero() {
  const { hero } = useRestaurant();
  const { subtitle, heading, description, cta } = hero;

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}

        <h1>{heading}</h1>

        {description && <p className="hero-description">{description}</p>}

        {cta && (
          <a href={cta.href} className="hero-button">
            {cta.label}
          </a>
        )}
      </div>
    </section>
  );
}