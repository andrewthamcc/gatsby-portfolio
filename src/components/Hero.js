import React, { useEffect } from "react"
import styled from "styled-components"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"

import { Container } from "./Styles"
import MainImage from "../images/hero.jpg"

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
  color: #080808;
  text-align: right;
  text-transform: uppercase;
  margin-top: 8rem;
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0.5rem 0.5rem 0;
`

const IconSpan = styled.span`
  font-size: 1rem;
  margin: 0 0.5rem;
  display: flex;
  transition: 0.3s transform ease;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`

const HeroImage = styled.div`
  background-image: url(${MainImage});
  filter: grayscale();
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 70%;
  height: 350px;

  margin: 3rem 0;
`

const Hero = () => {
  useEffect(() => {
    console.log(`
    #     #      #######                             
    #     # #       #    #    # ###### #####  ######  
    #     # #       #    #    # #      #    # #       
    ####### #       #    ###### #####  #    # #####     
    #     # #       #    #    # #      #####  #          
    #     # #       #    #    # #      #   #  #       
    #     # #       #    #    # ###### #    # ######`)
    console.log("Website built by Andrew Tham")
    // eslint-disable-next-line
  }, [])

  return (
    <HeroSection>
      <Container>
        <HeroHeading>Andrew Tham</HeroHeading>

        <IconContainer>
          <IconSpan>
            <a
              href="https://github.com/andrewthamcc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </IconSpan>
          <IconSpan>
            <a
              href="https://linkedin.com/in/andrewthamcc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </IconSpan>
          <IconSpan>
            <a
              href="https://twitter.com/andrew_tham"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </IconSpan>
        </IconContainer>

        <HeroImage />
      </Container>
    </HeroSection>
  )
}

export default Hero
