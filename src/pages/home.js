import React, { useState } from "react";
import FooterSection from "../components/Footer/FooterSection";
import HeroSection from "../components/HeroSection/HeroSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import InfoSections from "../components/InfoSection/InfoSections";
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
      <InfoSections {...homeObjOne} />
      <InfoSections {...homeObjTwo}></InfoSections>
     <FooterSection></FooterSection>
    </>
  );
};
 
export default Home;
