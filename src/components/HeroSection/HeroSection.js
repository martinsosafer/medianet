import React, { useState } from "react";
import Video from "../../video/video.mp4";
import Logo from "../../images/medianetlogo.png"
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  MedianetLogo
} from "./HeroElements";
import { Button } from "../Button/ButtonElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="/video/mp4" />
      </HeroBg>
      <HeroContent>
        <MedianetLogo src={Logo}></MedianetLogo>
        <HeroH1>Tu mejor servicio de Internet</HeroH1>
        <HeroP>Comunicate hoy para tener los mejores precios </HeroP>
        <HeroBtnWrapper>
          <Button
            to="Planes"
            smooth={true}
            duration={1200}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true "
          >
            Planes {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
