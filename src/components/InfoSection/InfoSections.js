import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  ImgWrap,
  TextWrapper,
  Topline,
  Heading,
  Subtitle,
  Img,
} from "./InfoElements";

const InfoSections = ({
  lightBg,
  id,
  imgStart,
  topline,
  lightText,
  headline,
  darkText,
  description,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Topline>{topline}</Topline>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSections;
