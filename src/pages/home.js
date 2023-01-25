import React, { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
//utilizamos el use state para hacer el toogle del menu cuando tocamos las fabars(menu del movil)
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toogle={toogle} />
      <NavBar toogle={toogle} />
      <HeroSection />
    </>
  );
};

export default Home;