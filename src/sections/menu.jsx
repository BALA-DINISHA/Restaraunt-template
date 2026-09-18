import { useState, useEffect } from "react";
import "../styles/menu.css";

const menuData = [
  {
    id: "breakfast",
    title: "Breakfast",
    subtitle: "Fresh Morning Selection",
    images: [
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop"
    ],
    items: [
      { name: "Idli & Sambar", price: "₹80", desc: "Steamed rice cakes served with hot lentil stew and chutney." },
      { name: "Crispy Masala Dosa", price: "₹120", desc: "Golden crepe filled with spiced potato masala." },
      { name: "Soft Idiyappam", price: "₹90", desc: "String hoppers paired with aromatic coconut milk." },
      { name: "Indori Poha", price: "₹70", desc: "Flattened rice cooked with mustard seeds, turmeric & sev." },
    
      
    ]
  },
  {
    id: "lunch",
    title: "Lunch",
    subtitle: "Wholesome Afternoon Feasts",
    images: [
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop"
    ],
    items: [
      { name: "Rice & Dal Tadka", price: "₹150", desc: "Steamed Basmati rice served with tempered yellow lentils." },
      { name: "Roti & Paneer Sabzi", price: "₹180", desc: "Fresh butter rotis paired with rich cottage cheese curry." },
      { name: "South Indian Thali", price: "₹220", desc: "Complete meal with rice, rasam, sambar, and side dishes." },
      { name: "Chaat & Snacks Platter", price: "₹130", desc: "Crispy Samosa, Pani Puri, and spicy Bhel Puri." }
    ]
  },
  {
    id: "dinner",
    title: "Dinner",
    subtitle: "Comforting Evening Specialties",
    images: [
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop"
    ],
    items: [
      { name: "Dal Khichdi / Veg Pulao", price: "₹160", desc: "Comforting rice-lentil blend or fragrant vegetable rice." },
      { name: "Chapati with Curry", price: "₹170", desc: "Soft chapatis served with rich rich vegetable gravies." },
      { name: "Special Sweets & Tea ☕", price: "₹90", desc: "Hot Gulab Jamun served alongside spiced masala tea." }
    ]
  }
];

export default function Menu() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % menuData.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? menuData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % menuData.length);
  };

  const currentCard = menuData[currentIndex];
  const halfLength = Math.ceil(currentCard.items.length / 2);

  return (
    <section className="menu" id="menu">
      <header className="menu-header">
        <p className="menu-label">OUR SPECIALTIES</p>
        <h2 className="menu-heading">
          <span className="menu-heading-top">Special Food</span>{" "}
          <span className="menu-heading-bottom">Menu</span>
        </h2>
        <div className="menu-divider">
          <span className="menu-line" />
          <span className="menu-diamond">◆</span>
          <span className="menu-line" />
        </div>
      </header>

      <div 
        className="menu-carousel-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="carousel-arrow arrow-left" onClick={handlePrev} aria-label="Previous Menu">
          &#8249;
        </button>

        <div className="single-card-container">
          <article className="menu-card" key={currentCard.id}>
            <h3 className="card-category-title">{currentCard.title}</h3>
            <p className="card-category-subtitle">{currentCard.subtitle}</p>

            {/* Top items */}
            <div className="menu-list-section">
              {currentCard.items.slice(0, halfLength).map((item) => (
                <div key={item.name} className="menu-list-item">
                  <div className="item-main">
                    <span className="item-name">{item.name}</span>
                    <span className="item-dots"></span>
                    <span className="item-price">{item.price}</span>
                  </div>
                  <p className="item-desc">{item.desc}</p>
                </div>
              ))}
            </div>

            
            {/* Bottom items */}
            <div className="menu-list-section">
              {currentCard.items.slice(halfLength).map((item) => (
                <div key={item.name} className="menu-list-item">
                  <div className="item-main">
                    <span className="item-name">{item.name}</span>
                    <span className="item-dots"></span>
                    <span className="item-price">{item.price}</span>
                  </div>
                  <p className="item-desc">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Second Circular Image */}
            <div className="card-media-block">
              <div className="image-frame-circle">
                <img src={currentCard.images[1]} alt={currentCard.title} />
              </div>
            </div>
          </article>
        </div>

        <button className="carousel-arrow arrow-right" onClick={handleNext} aria-label="Next Menu">
          &#8250;
        </button>
      </div>

      <div className="carousel-dots">
        {menuData.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
}