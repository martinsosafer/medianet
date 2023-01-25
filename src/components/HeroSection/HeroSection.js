import React from "react";
import Video from "../../video/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";
const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="/video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Tu mejor servicio de Internet</HeroH1>
        <HeroP>Comunicate hoy para tener los mejores precios </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
