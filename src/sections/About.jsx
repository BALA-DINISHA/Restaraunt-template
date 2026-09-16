import "../styles/about.css";
import "../data/restaurantData"
export default function About({
  label,
  heading,
  headingHighlight,
  paragraphs = [],
  cta,
  decorationImages = [],
}) {
  return (
    <section
      className="about"
      id="about"
      aria-labelledby="about-heading"
    >
      {/* --- Side decorations (spice bowls) --- */}
      {decorationImages.length >= 2 && (
        <>
          <div className="about-decoration about-decoration--left" aria-hidden="true">
            {decorationImages.slice(0, 2).map((src, i) => (
              <img key={`l-${i}`} src={src} alt="" loading="lazy" />
            ))}
          </div>

          <div className="about-decoration about-decoration--right" aria-hidden="true">
            {decorationImages.slice(2, 4).map((src, i) => (
              <img key={`r-${i}`} src={src} alt="" loading="lazy" />
            ))}
          </div>
        </>
      )}

      {/* --- Central framed card --- */}
      <article className="about-card">
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
      </article>
    </section>
  );
}