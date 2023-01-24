import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
} from "./SidebarElements";
const SideBar = () => {
  return (
    <SideBarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="SobreNosotros">Sobre Nosotros</SideBarLink>
          <SideBarLink to="Planes">Planes</SideBarLink>
          <SideBarLink to="Contacto">Contacto</SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};
//SideBar es el el menu desplegable que vemos en dispositivos mobiles
export default SideBar;
