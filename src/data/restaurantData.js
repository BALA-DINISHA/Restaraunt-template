

export const restaurantProfile = {
  name: "Aroma",
  tagline: "Fine Indian dining since 2010",
  logo: "/images/logo.svg",
};
export const heroContent = {
  subtitle: "Welcome to",
  heading: "AROMA RESTAURANT",
  description: "Authentic flavors, memorable moments.",
  cta: {
    label: "Explore Our Menu",
    href: "#menu",
  },
  bgImage: "src/assets/hero-background.png",
};
export const aboutContent = {
  label: "About Us",

  heading: "Love For Food",

  paragraphs: [
    "At AROMA Restaurant, we believe that great food brings people together. Inspired by the rich flavors and traditions of Indian cuisine, we bring together carefully selected ingredients, authentic recipes, and modern presentation to create a memorable dining experience.",

    "From comforting classics to flavorful specialties, every dish is thoughtfully prepared with passion and attention to detail. Whether you are enjoying a meal with family, celebrating a special moment, or simply discovering something new, AROMA is a place where good food and warm hospitality come together."
  ],

  decorationImages:[
    
    "src/assets/images/spice-2.jpg",
    "src/assets/images/spice-3.jpg",
    "src/assets/images/spice-4.jpg",
  ],
  mainImage:"https://img.magnific.com/free-photo/restaurant-interior_1127-3392.jpg?semt=ais_hybrid&w=740&q=80"
};

// src/data/restaurantData.js
export const signatureDishes = [
  {
    id: "d1",
    name: "Truffle Risotto",
    tagline: "Creamy Arborio, black truffle, aged parmesan.",
    description:
      "Slow-stirred Italian rice finished with truffle oil and shaved parmesan — a warm, earthy indulgence.",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
    alt: "Saffron pasta with prawns",
  },
];


export const galleryIntro = {
  label: "Gallery",
  headingTop: "A Glimpse",
  headingBottom: "Inside",
  subtitle:
    "Step inside our world — warm lighting, crafted plates, and moments worth savouring.",
  images: [
    {
      id: "g1",
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      alt: "Warm restaurant interior with ambient lighting",
      caption: "The main dining hall",
    },
    {
      id: "g2",
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
      alt: "Chef plating a signature dish",
      caption: "Signature plating",
    },
    {
      id: "g3",
      src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
      alt: "Friends toasting over dinner",
      caption: "Evenings together",
    },
    {
      id: "g4",
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      alt: "Cozy corner seating area",
      caption: "Corner booth",
    },
    {
      id: "g5",
      src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      alt: "Fresh salad bowl close-up",
      caption: "Garden bowl",
    },
    {
      id: "g6",
      src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
      alt: "Candlelit table setting",
      caption: "Candlelit nights",
    },
    {
      id: "g7",
      src: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1200&q=80",
      alt: "Bar counter with bottles",
      caption: "The bar",
    },
    {
      id: "g8",
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      alt: "Grilled steak plated dish",
      caption: "Fire-grilled cuts",
    },
  ],
};
// src/data/restaurantData.js

// src/data/restaurantData.js

export const contactIntro = {
  label: "Get in Touch",
  headingTop: "Visit",
  headingBottom: "Us",
  subtitle:
    "Find us on Marine Drive — walk-ins welcome, reservations recommended on weekends.",

  /* ── Left: Google Map ── */
  map: {
    // Paste your Google Maps embed URL (Share → Embed a map → copy src)
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.309!2d76.2673!3d9.9312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFort%20Kochi!5e0!3m2!1sen!2sin!4v1700000000000",
    directionsHref: "https://maps.google.com/?q=Fort+Kochi",
  },

  /* ── Right: contact form ── */
  form: {
    label: "Reservations",
    title: "Book a Table",
    subtitle: "We'll confirm by email within an hour.",
    ctaLabel: "Send Message",
  },

  /* ── Background image for the section ── */
  bgImage:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1920&q=80",
};

// src/data/restaurantData.js

export const footerContent = {
  brand: {
    name: "Aroma",
    tagline: "Fine dining experience since 2010.",
  },

  quickLinks: [
    { label: "Home",    href: "#home" },
    { label: "About",   href: "#about" },
    { label: "Menu",    href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],

  contact: {
    heading: "Contact",
    address: ["123 Main Street", "Chennai, Tamil Nadu 600001"],
    phone: { label: "+91 98765 43210", href: "tel:+919876543210" },
    email: { label: "hello@aroma.com", href: "mailto:hello@aroma.com" },
  },

  hours: {
    heading: "Hours",
    groups: [
      { label: "Mon – Fri", time: "11:00 AM – 10:00 PM" },
      { label: "Sat – Sun", time: "10:00 AM – 11:00 PM" },
    ],
  },

  socialLinks: [
    { label: "Instagram", href: "https://instagram.com/aroma" },
    { label: "Facebook",  href: "https://facebook.com/aroma" },
    { label: "Twitter",   href: "https://twitter.com/aroma" },
  ],

  copyright: "© 2025 Aroma Restaurant. All rights reserved.",
};