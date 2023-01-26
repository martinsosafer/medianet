import React from 'react'
import { FooterContainer,FooterWrap,FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink   } from "./FooterElements"
const FooterSection = () => {
  return (
    <FooterContainer id="Contacto">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>

            <FooterLinkTitle></FooterLinkTitle>
              <FooterLink>whatsapp 2616597694</FooterLink>
              <FooterLink>Calle Echeverría 134 – Ciudad, Mendoza ,Argentina</FooterLink>
              <FooterLink>info@medianet.com.ar</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default FooterSection
