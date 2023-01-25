import React from "react";
import { FaBars } from "react-icons/fa";
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
              <NavLinks to="SobreNosotros">Sobre Nosotros</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Planes">Planes</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Contacto">Contacto</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};
export default NavBar;
