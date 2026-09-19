// src/sections/Gallery.jsx
import { useEffect, useRef, useState } from "react";
import { galleryIntro } from "../data/restaurantData";
import "../styles/gallery.css";

const AUTO_SCROLL_SPEED = 0.6;      // px per frame (~36px/sec at 60fps)
const AUTOPLAY_PAUSE_ON_HOVER = true;

export default function Gallery() {
  const { label, headingTop, headingBottom, subtitle, images } = galleryIntro;

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const stripRef = useRef(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0, moved: false });
  const autoScrollRef = useRef({ raf: 0, dir: 1, paused: false });

  const isOpen = lightboxIndex !== null;
  const active = isOpen ? images[lightboxIndex] : null;

  /* ---------- Lightbox: keyboard nav + scroll lock ---------- */
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i - 1 + images.length) % images.length);
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, images.length]);

  /* ---------- Auto-scroll loop (ping-pong, pauses on hover) ---------- */
  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;

    const state = autoScrollRef.current;

    const tick = () => {
      const shouldPause =
        state.paused ||
        dragState.current.isDown ||
        document.hidden ||
        isOpen;

      if (!shouldPause) {
        el.scrollLeft += AUTO_SCROLL_SPEED * state.dir;

        const max = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= max - 1) {
          state.dir = -1;
        } else if (el.scrollLeft <= 1 && state.dir === -1) {
          state.dir = 1;
        }
      }

      state.raf = requestAnimationFrame(tick);
    };

    state.raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(state.raf);
  }, [isOpen]);

  /* ---------- Pause on hover ---------- */
  const handleMouseEnter = () => {
    if (!AUTOPLAY_PAUSE_ON_HOVER) return;
    autoScrollRef.current.paused = true;
  };
  const handleMouseLeave = () => {
    if (!AUTOPLAY_PAUSE_ON_HOVER) return;
    autoScrollRef.current.paused = false;
  };

  /* ---------- Drag-to-scroll (desktop) ---------- */
  const onPointerDown = (e) => {
    const el = stripRef.current;
    if (!el) return;
    dragState.current = {
      isDown: true,
      startX: e.pageX,
      scrollLeft: el.scrollLeft,
      moved: false,
    };
    el.setPointerCapture?.(e.pointerId);
    el.classList.add("is-dragging");
  };

  const onPointerMove = (e) => {
    const el = stripRef.current;
    if (!el || !dragState.current.isDown) return;
    const dx = e.pageX - dragState.current.startX;
    if (Math.abs(dx) > 4) dragState.current.moved = true;
    el.scrollLeft = dragState.current.scrollLeft - dx;
  };

  const endDrag = (e) => {
    const el = stripRef.current;
    if (!el) return;
    dragState.current.isDown = false;
    el.releasePointerCapture?.(e.pointerId);
    el.classList.remove("is-dragging");
  };

  /* ---------- Arrow scroll buttons ---------- */
  const scrollByCard = (dir) => {
    const el = stripRef.current;
    if (!el) return;
    autoScrollRef.current.paused = true;
    const card = el.querySelector(".strip-item");
    const gap = 16;
    const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
    window.setTimeout(() => {
      autoScrollRef.current.paused = false;
    }, 700);
  };

  /* ---------- Prevent click after drag ---------- */
  const handleCardClick = (i) => {
    if (dragState.current.moved) return;
    setLightboxIndex(i);
  };

  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-heading">
      {/* ---------- Header ---------- */}
      <header className="gallery-header">
        {label && <p className="gallery-label">{label}</p>}

        <h2 id="gallery-heading" className="gallery-heading">
          <span className="gallery-heading-top">{headingTop}</span>{" "}
          <span className="gallery-heading-bottom">{headingBottom}</span>
        </h2>

        <span className="gallery-underline" aria-hidden="true" />

        {subtitle && <p className="gallery-subtitle">{subtitle}</p>}
      </header>

      {/* ---------- Strip wrapper ---------- */}
      <div
        className="gallery-strip-wrap"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          className="strip-arrow strip-arrow--prev"
          onClick={() => scrollByCard(-1)}
          aria-label="Scroll gallery left"
        >
          ‹
        </button>

        <div
          className="gallery-strip"
          ref={stripRef}
          role="list"
          aria-label="Photo gallery"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
        >
          {images.map((img, i) => (
            <button
              key={img.id}
              type="button"
              role="listitem"
              className="strip-item"
              onClick={() => handleCardClick(i)}
              aria-label={`Open image: ${img.caption || img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                draggable="false"
                className="strip-img"
              />
              <span className="strip-caption-wrap">
                <span className="strip-caption-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="strip-caption">{img.caption}</span>
              </span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="strip-arrow strip-arrow--next"
          onClick={() => scrollByCard(1)}
          aria-label="Scroll gallery right"
        >
          ›
        </button>
      </div>

      {/* ---------- Lightbox ---------- */}
      {isOpen && active && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close image viewer"
          >
            ✕
          </button>

          <button
            type="button"
            className="lightbox-nav lightbox-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <figure
            className="lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="lightbox-img"
            />
            {active.caption && (
              <figcaption className="lightbox-caption">
                {active.caption}
              </figcaption>
            )}
          </figure>

          <button
            type="button"
            className="lightbox-nav lightbox-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i + 1) % images.length);
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}