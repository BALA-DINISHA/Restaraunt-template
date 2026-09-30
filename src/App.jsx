// src/App.jsx
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { RestaurantProvider } from "./context/RestaurantContext";

// Customer sections
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/menu";
import Gallery from "./sections/gallery";
import Contact from "./sections/contact";
import Footer from "./components/footer";

// Admin
import AdminLayout from "./admin/AdminLayout";
import ProtectedRoute from "./admin/ProtectedRoute";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminProfile from "./admin/AdminProfile";
import AdminHero from "./admin/AdminHero";
import AdminAbout from "./admin/AdminAbout";
import AdminSignature from "./admin/AdminSignature";
import AdminGallery from "./admin/AdminGallery";
import AdminContact from "./admin/AdminContact";
import AdminFooter from "./admin/AdminFooter";

import "./App.css";

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
      <Navbar />
      <main className="scroll-sections">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <RestaurantProvider>
      <Routes>
        {/* Customer site */}
        <Route path="/" element={<CustomerSite />} />

        {/* Public admin login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected admin — everything below requires login */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="hero" element={<AdminHero />} />
          <Route path="about" element={<AdminAbout />} />
          <Route path="signature" element={<AdminSignature />} />
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="contact" element={<AdminContact />} />
          <Route path="footer" element={<AdminFooter />} />
        </Route>
      </Routes>
    </RestaurantProvider>
  );
}