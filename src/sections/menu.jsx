// src/sections/Menu.jsx
import { useEffect, useState } from "react";
import "../styles/menu.css";

const signatureDishes = [
  {
    id: "d1",
    name: "Truffle Risotto",
    tagline: "Creamy Arborio, black truffle, aged parmesan.",
    description:
      "Slow-stirred Italian rice finished with truffle oil and shaved parmesan — a warm, earthy indulgence.",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
    alt: "Truffle risotto plated on ceramic",
  },
  {
    id: "d2",
    name: "Grilled Salmon",
    tagline: "Charred citrus glaze, herb butter, greens.",
    description:
      "Wild-caught salmon seared over open flame, brushed with citrus glaze and served with seasonal greens.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80",
    alt: "Grilled salmon fillet with herbs",
  },
  {
    id: "d3",
    name: "Lamb Shank",
    tagline: "Slow-braised, red wine jus, root vegetables.",
    description:
      "Tender lamb braised for hours in red wine and herbs, falling off the bone with a rich reduction.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1920&q=80",
    alt: "Braised lamb shank on plate",
  },
  {
    id: "d4",
    name: "Saffron Pasta",
    tagline: "Handmade tagliatelle, saffron cream, prawns.",
    description:
      "Silky handmade pasta tossed in a saffron-infused cream sauce with plump tiger prawns and fresh basil.",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80",
    alt: "Saffron pasta with prawns",
  },
];

const AUTOPLAY_MS = 5000;

export default function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const active = signatureDishes[activeIndex];

  /* ---------- Cross-fading background state ---------- */
  const [bg, setBg] = useState({
    front: signatureDishes[0].bgImage,
    back: null,
    flip: false,
  });

  useEffect(() => {
    const next = active.bgImage;
    setBg((prev) => {
      if (prev.front === next) return prev;
      return { front: next, back: prev.front, flip: !prev.flip };
    });
  }, [active.bgImage]);

  /* ---------- Navigation ---------- */
  const goTo = (i) =>
    setActiveIndex(
      ((i % signatureDishes.length) + signatureDishes.length) %
        signatureDishes.length
    );
  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  /* ---------- Autoplay ---------- */
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      if (document.hidden) return;
      goTo(activeIndex + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [activeIndex, isPaused]);

  /* ---------- Keyboard nav ---------- */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  /* ---------- Preload all background images ---------- */
  useEffect(() => {
    signatureDishes.forEach((d) => {
      const img = new Image();
      img.src = d.bgImage;
    });
  }, []);

  return (
    <section className="menu" id="menu" aria-labelledby="menu-heading">
      {/* ---------- Cross-fading background layers ---------- */}
      <div
        className={`menu-bg-layer ${bg.flip ? "is-front" : ""}`}
        style={{ backgroundImage: `url('${bg.front}')` }}
        aria-hidden="true"
      />
      {bg.back && (
        <div
          className={`menu-bg-layer ${bg.flip ? "" : "is-front"}`}
          style={{ backgroundImage: `url('${bg.back}')` }}
          aria-hidden="true"
        />
      )}
      <div className="menu-bg-overlay" aria-hidden="true" />

      <div
        className="menu-inner"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* ───────── LEFT: Text ───────── */}
        <div className="menu-copy">
          <p className="menu-label">Our Specialties</p>

          <h2 id="menu-heading" className="menu-heading">
            Signature
            <br />
            <span className="menu-heading-accent">Foods</span>
          </h2>

          <span className="menu-underline" aria-hidden="true" />

          <div key={active.id} className="menu-dish-text">
            <h3 className="menu-dish-name">{active.name}</h3>
            <p className="menu-dish-desc">{active.description}</p>
          </div>

          <p className="menu-tagline">Creativity is always on our menu.</p>
        </div>

        {/* ───────── RIGHT: Image + arrows ───────── */}
        <div className="menu-visual">
          <span className="menu-ring menu-ring--outer" aria-hidden="true" />
          <span className="menu-ring menu-ring--inner" aria-hidden="true" />

          <div className="menu-image-frame">
            {signatureDishes.map((dish, i) => (
              <img
                key={dish.id}
                src={dish.image}
                alt={dish.alt}
                loading={i === 0 ? "eager" : "lazy"}
                className={`menu-image ${
                  i === activeIndex ? "is-active" : ""
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            className="menu-arrow menu-arrow--prev"
            onClick={goPrev}
            aria-label="Previous dish"
          >
            ◆
          </button>

          <button
            type="button"
            className="menu-arrow menu-arrow--next"
            onClick={goNext}
            aria-label="Next dish"
          >
            ◆
          </button>
        </div>
      </div>

      {/* ───────── DOTS ───────── */}
      <div className="menu-dots" role="tablist" aria-label="Signature dishes">
        {signatureDishes.map((dish, i) => (
          <button
            key={dish.id}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Show ${dish.name}`}
            className={`menu-dot ${i === activeIndex ? "is-active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}