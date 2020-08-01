import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import {
  Container,
  TextContainer,
  SectionImage,
  MediaWidths,
} from "./SharedStyles";
import SocialIcons from "./SocialIcons";

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;

  padding: 3.5rem 0;

  @media (max-width: ${MediaWidths.tabletL}) {
    height: auto;
  }
`;

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
  color: #080808;
  text-align: right;
  text-transform: uppercase;
  margin-top: 3rem;

  @media (max-width: ${MediaWidths.tabletL}) {
    font-size: 3rem;
  }

  @media (max-width: ${MediaWidths.tabletS}) {
    font-size: 2rem;
  }

  @media (max-width: ${MediaWidths.mobileL}) {
    font-size: 1.75rem;
  }
`;

const Hero = () => {
  useEffect(() => {
    console.log(`
    #     #                                      
    #     #  #####  #     #      #####
    #     #  #      #     #      #   #
    #######  ###    #     #      #   #     
    #     #  #      #     #      #   #          
    #     #  #      #     #      #   #        
    #     #  #####  ####  #####  #####`);
    console.log("Built by Andrew Tham");
    // eslint-disable-next-line
  }, []);

  const { hero } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "home/hero.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  );

  const imageData = hero.childImageSharp.fluid;

  return (
    <HeroSection>
      <TextContainer>
        <HeroHeading>Andrew Tham</HeroHeading>
        <SocialIcons flexEnd />
      </TextContainer>

      <Container>
        <SectionImage fluid={imageData} y={60} style={{ marginTop: "2rem" }} />
      </Container>
    </HeroSection>
  );
};

export default Hero;
