// src/App.jsx
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Customer sections
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/menu";
import Gallery from "./sections/gallery";
import Contact from "./sections/contact";
import Footer from "./components/footer";

// Data
import { aboutContent } from "./data/restaurantData";

import "./App.css";

/* =====================================================
   CUSTOMER SITE — your existing page, unchanged
   ===================================================== */
function CustomerSite() {
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-sections > section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.18 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar restaurantName="AROMA" />
      <main className="scroll-sections">
        <Hero />
        <About {...aboutContent} />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* =====================================================
   ADMIN — placeholder (will be replaced in Step 4)
   ===================================================== */
function AdminPlaceholder() {
  return (
    <div style={{ padding: "4rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Admin Dashboard</h1>
      <p>Coming in Step 4. For now, this proves routing works. ✅</p>
    </div>
  );
}

/* =====================================================
   ROUTES
   ===================================================== */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CustomerSite />} />
      <Route path="/admin" element={<AdminPlaceholder />} />
    </Routes>
  );
}