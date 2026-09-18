
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import "./App.css";
import { aboutContent } from "./data/restaurantData";
import Menu from "./sections/menu";

function App() {


  return (
    <>
      <Navbar restaurantName="AROMA" />
      <Hero />
       <About {...aboutContent} />
       <Menu />
    </>
  );
}

export default App;