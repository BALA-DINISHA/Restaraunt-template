// src/sections/About.jsx  
import { useRestaurant } from "../context/RestaurantContext";
import "../styles/about.css";

export default function About() {
  const { about } = useRestaurant();
  const { label, heading, paragraphs = [], mainImage } = about;

  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about-container">
        <article className="about-card">
          {mainImage && (
            <div className="about-image-wrapper">
              <img src={mainImage} alt="Restaurant ambiance or dish" loading="lazy" />
            </div>
          )}

          <div className="about-content-wrapper">
            <p className="about-label">{label}</p>

            <h2 id="about-heading" className="about-heading">
              {heading}
            </h2>

            <div className="about-divider" aria-hidden="true">
              <span />
            </div>

            {paragraphs.map((text, i) => (
              <p key={i} className="about-paragraph">
                {text}
              </p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}