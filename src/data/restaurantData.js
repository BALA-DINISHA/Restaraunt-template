
export const aboutContent = {
  label: "About Us",

  heading: "Love For Food",

  paragraphs: [
    "At AROMA Restaurant, we believe that great food brings people together. Inspired by the rich flavors and traditions of Indian cuisine, we bring together carefully selected ingredients, authentic recipes, and modern presentation to create a memorable dining experience.",

    "From comforting classics to flavorful specialties, every dish is thoughtfully prepared with passion and attention to detail. Whether you are enjoying a meal with family, celebrating a special moment, or simply discovering something new, AROMA is a place where good food and warm hospitality come together."
  ],

  cta: {
    label: "Explore Our Menu",
    href: "#menu",
  },

  decorationImages:[
    
    "src/assets/images/spice-2.jpg",
    "src/assets/images/spice-3.jpg",
    "src/assets/images/spice-4.jpg",
  ],
  mainImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1b0GoB0ew9zvJIDr0d1lBaNEvb3Pg_fMdi6hU3LqAw&s=10"
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