import React ,{useState} from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavBarElements";

const NavBar = ({ toogle }) => {
  
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo>Medianet</NavLogo>
          <MobileIcon onClick={toogle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="Sobrenosotros" smooth={true} duration={1000}>Sobre Nosotros</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Planes" smooth={true} duration={1500}>Planes</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Contacto" smooth={true} duration={1500}>Contacto</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};
export default NavBar;
