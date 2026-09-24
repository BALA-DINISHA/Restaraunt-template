
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


  return (
    <>
      <Navbar restaurantName="AROMA" />
      <Hero />
       <About {...aboutContent} />
       <Menu />
      <Gallery />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;