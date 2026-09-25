
import { useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import "./App.css";
import { aboutContent } from "./data/restaurantData";
import Menu from "./sections/menu";
import Gallery from "./sections/gallery";
import Contact from "./sections/contact";
import Footer from "./components/footer";
function App() {
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
      <Footer/>
    </>
  );
}

export default App;