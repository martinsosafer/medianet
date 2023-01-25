import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
} from "./SidebarElements";
const SideBar = ({ isOpen, toogle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toogle}>
      <Icon onClick={toogle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="SobreNosotros" onClick={toogle}>
            Sobre Nosotros
          </SideBarLink>
          <SideBarLink to="Planes" onClick={toogle}>
            Planes
          </SideBarLink>
          <SideBarLink to="Contacto" onClick={toogle}>
            Contacto
          </SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};
//SideBar es el el menu desplegable que vemos en dispositivos mobiles
export default SideBar;
