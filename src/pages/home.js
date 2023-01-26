import React, { useState } from "react";
import FooterSection from "../components/Footer/FooterSection";
import HeroSection from "../components/HeroSection/HeroSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import InfoSections from "../components/InfoSection/InfoSections";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import SectionIconos from "../components/SectionIconos/SectionIconos";
import Planes from "../components/Planes/Planes";
import Card from "../components/Card/Card";
import Homee from "./Homee.css"
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
      <Planes />
      <Card />
      <SectionIconos />
      <InfoSections {...homeObjOne} />
      <InfoSections {...homeObjTwo}></InfoSections>
     <FooterSection></FooterSection>
      <div class="whatsapp-btn">
        <a href="https://wa.me/573148880850" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1383/1383269.png"
            alt="WhatsApp"
            width={100}
            height={100}
          />
        </a>
      </div>
    </>
  );
};
 
export default Home;
