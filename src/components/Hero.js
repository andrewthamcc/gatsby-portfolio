import React, { useEffect } from "react"
import styled from "styled-components"

import { Container, TextContainer, SectionImage } from "./Styles"
import SocialIcons from "./SocialIcons"
import HeroImage from "../images/hero.jpg"

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;

  padding: 3.5rem 0;
`

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
  color: #080808;
  text-align: right;
  text-transform: uppercase;
  margin-top: 3rem;
`

const Hero = () => {
  useEffect(() => {
    console.log(`
    #     #                                      
    #     #  #####  #     #      #####
    #     #  #      #     #      #   #
    #######  ###    #     #      #   #     
    #     #  #      #     #      #   #          
    #     #  #      #     #      #   #        
    #     #  #####  ####  #####  #####`)
    console.log("Built by Andrew Tham")
    // eslint-disable-next-line
  }, [])

  return (
    <HeroSection>
      <TextContainer>
        <HeroHeading>Andrew Tham</HeroHeading>
        <SocialIcons flexEnd />
      </TextContainer>

      <Container>
        <SectionImage image={HeroImage} y={60} style={{ marginTop: "2rem" }} />
      </Container>
    </HeroSection>
  )
}

export default Hero
