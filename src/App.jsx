import { useState ,useEffect} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {


  return (
    <>
      <Navbar restaurantName="Aroma" />
      <Hero />
    </>
  );
}

export default App;