
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

export const menuCategories = [
  "All",
  "Starters",
  "Main Course",
  "Biryani",
  "Desserts",
  "Beverages",
];

export const menuItems = [
  {
    id: 1,
    name: "Paneer Tikka",
    price: 280,
    category: "Starters",
    veg: true,
    description: "Char-grilled cottage cheese with smoked spices.",
    image: "/images/menu/paneer-tikka.jpg",
  },
  {
    id: 2,
    name: "Chicken 65",
    price: 220,
    category: "Starters",
    veg: false,
    description: "Crispy South Indian fried chicken with curry leaves.",
    image: "/images/menu/chicken-65.jpg",
  },
  {
    id: 3,
    name: "Veg Biryani",
    price: 250,
    category: "Biryani",
    veg: true,
    description: "Fragrant basmati rice with garden vegetables.",
    image: "/images/menu/veg-biryani.jpg",
  },
  {
    id: 4,
    name: "Chicken Biryani",
    price: 320,
    category: "Biryani",
    veg: false,
    description: "Slow-cooked basmati rice with tender chicken.",
    image: "/images/menu/chicken-biryani.jpg",
  },
  {
    id: 5,
    name: "Gulab Jamun",
    price: 120,
    category: "Desserts",
    veg: true,
    description: "Warm milk dumplings in cardamom-rose syrup.",
    image: "/images/menu/gulab-jamun.jpg",
  },
  {
    id: 6,
    name: "Masala Chai",
    price: 80,
    category: "Beverages",
    veg: true,
    description: "Spiced Indian tea brewed with milk and ginger.",
    image: "/images/menu/masala-chai.jpg",
  },
];

// src/data/restaurantData.js  (menu portion only)

export const menuIntro = {
  label: "Explore",
  headingTop: "Our",
  headingBottom: "Menu",
  subtitle:
    "From the famous South Indian idli sambar to indulgent faloodas and crispy vadais — discover a world of authentic flavors.",
  tabs: [
    {
      id: "breakfast",
      label: "Breakfast",
      icon: "☕",              // ☕ or use a real icon library later
      items: [
        { name: "Idli Sambar",       description: "Steamed rice cakes with lentil soup" },
        { name: "Masala Dosa",       description: "Crispy dosa with spiced potato filling" },
        { name: "Upma",              description: "Warm semolina with vegetables" },
        { name: "Pongal",            description: "Comforting rice and lentil dish" },
        { name: "Vada",              description: "Crispy lentil fritters" },
        { name: "Poori Masala",      description: "Fluffy bread with potato curry" },
      ],
    },
    {
      id: "lunch",
      label: "Lunch",
      icon: "🍽",
      items: [
        { name: "South Indian Meals", description: "Traditional thali with rice and curries" },
        { name: "Curd Rice",          description: "Cooling rice with yogurt and tempering" },
        { name: "Sambar Rice",        description: "Rice with lentil and tamarind" },
        { name: "Rasam Rice",         description: "Peppery rice with tomato broth" },
        { name: "Lemon Rice",         description: "Bright, tangy rice with peanuts" },
        { name: "Bisi Bele Bath",     description: "Karnataka rice and lentil classic" },
      ],
    },
    {
      id: "snacks",
      label: "Chaat & Snacks",
      icon: "🥗",
      items: [
        { name: "Bhel Puri",       description: "Puffed rice with tangy chutneys" },
        { name: "Pani Puri",       description: "Crisp shells with spiced water" },
        { name: "Dahi Puri",       description: "Cool yogurt and sweet chutney" },
        { name: "Samosa",          description: "Fried pastry with spiced potato" },
        { name: "Vada Pav",        description: "Mumbai-style potato slider" },
        { name: "Cut Mirchi",      description: "Spicy stuffed chilli fritters" },
      ],
    },
    {
      id: "dinner",
      label: "Dinner",
      icon: "🌙",
      items: [
        { name: "Veg Biryani",     description: "Fragrant rice with garden vegetables" },
        { name: "Chicken Biryani", description: "Slow-cooked with heirloom spices" },
        { name: "Paneer Butter Masala", description: "Creamy tomato-cashew gravy" },
        { name: "Dal Tadka",       description: "Yellow lentils with garlic tempering" },
        { name: "Butter Naan",     description: "Soft tandoor bread with butter" },
        { name: "Raita",           description: "Cooling yogurt with cucumber" },
      ],
    },
    {
      id: "sweets",
      label: "Sweets",
      icon: "🍮",
      items: [
        { name: "Badam Halwa",     description: "Rich almond halwa" },
        { name: "Pineapple Kesari", description: "Semolina sweet with pineapple" },
        { name: "Gulab Jamun",     description: "Soft milk dumplings in syrup" },
        { name: "Cashew Sweets",   description: "Assorted cashew delicacies" },
        { name: "Mysore Pak",      description: "Traditional gram flour sweet" },
        { name: "Jangiri",         description: "South Indian jalebi" },
      ],
    },
  ],
};
// src/data/restaurantData.js  

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