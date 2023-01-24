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
//cambios a sidebar
export default SideBar;
