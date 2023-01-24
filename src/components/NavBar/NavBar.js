import React from "react";
import { Nav, NavBarContainer, NavLogo } from "./NavBarElements";
const NavBar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo>Medianet</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="Sobre Nosotros">Sobre Nosotros</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};
export default NavBar;
