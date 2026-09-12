
import { useState ,useEffect} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import OpeningHours from "./components/OpeningHours";
import About from "./components/About";
function App() {


  return (
    <>
      <Navbar restaurantName="AROMA" />
      <Hero />
     <OpeningHours />
     <About/>
    </>
  );
}

export default App;