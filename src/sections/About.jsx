import "../styles/about.css";
import "../data/restaurantData";

export default function About({
  label,
  heading,
  headingHighlight,
  paragraphs = [],
  cta,
  mainImage,
}) {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about-container">
        {/* --- Single Framed Card Holding Everything (Image + Text) --- */}
        <article className="about-card">
          {/* Image is now inside the card layout */}
          {mainImage && (
            <div className="about-image-wrapper">
              <img src={mainImage} alt="Restaurant ambiance or dish" loading="lazy" />
            </div>
          )}

          <div className="about-content-wrapper">
            <p className="about-label">{label}</p>

            <h2 id="about-heading" className="about-heading">
              {headingHighlight ? (
                <>
                  {heading.split(headingHighlight)[0]}
                  <span className="about-highlight">{headingHighlight}</span>
                  {heading.split(headingHighlight)[1]}
                </>
              ) : (
                heading
              )}
            </h2>

            <div className="about-divider" aria-hidden="true">
              
              <span />
            </div>

            {paragraphs.map((text, i) => (
              <p key={i} className="about-paragraph">
                {text}
              </p>
            ))}

            {cta && (
              <a href={cta.href} className="about-button">
                {cta.label}
              </a>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}