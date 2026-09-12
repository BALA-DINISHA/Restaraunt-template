<<<<<<< HEAD
import { useState } from "react";
import Navbar from "./components/Navbar";
=======
import { useState ,useEffect} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import OpeningHours from "./components/OpeningHours";
>>>>>>> c54b14516aa52fff67c52144747090feb498777b
function App() {


  return (
    <>
      <Navbar restaurantName="AROMA" />
      <Hero />
     <OpeningHours />
    </>
  );
}

export default App;