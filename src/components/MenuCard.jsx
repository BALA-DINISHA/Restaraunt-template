// src/components/MenuCard.jsx
import "../styles/menu.css";

export default function MenuCard({ name, price, description, image, veg }) {
  return (
    <article className="menu-card">

      <div className="menu-card-image">
        <img src={image} alt={name} loading="lazy" decoding="async" />
      </div>

      <div className="menu-card-body">

        <span className={`menu-card-badge ${veg ? "is-veg" : "is-nonveg"}`}>
          <span className="menu-card-dot" />
          {veg ? "VEG" : "NON-VEG"}
        </span>

        <h3 className="menu-card-name">{name}</h3>

        <p className="menu-card-description">{description}</p>

        <p className="menu-card-price">₹{price}</p>

      </div>
    </article>
  );
}