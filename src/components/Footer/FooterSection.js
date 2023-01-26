import React from 'react'
import { FooterContainer,FooterWrap,FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink   } from "./FooterElements"
const FooterSection = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>

            <FooterLinkTitle>Contacto</FooterLinkTitle>
              <FooterLink>whatsapp: 2616597694</FooterLink>
              <FooterLink>whatsapp: 2616597694</FooterLink>
              <FooterLink>whatsapp: 2616597694</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default FooterSection
