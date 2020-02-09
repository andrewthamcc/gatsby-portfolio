import React from "react"
import styled from "styled-components"

import Container from "../Container"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import MainImage from "../../images/hero.jpg"

const HeroSection = styled.section`
  /* height: 95vh; */
`

const H1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 400;
  text-align: right;
  text-transform: uppercase;
  margin: 7rem 0 0;
  padding: 0;
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

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
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
  return (
    <HeroSection>
      <Container>
        <H1>Andrew Tham</H1>

        <IconContainer>
          <IconSpan>
            <FaGithub />
          </IconSpan>
          <IconSpan>
            <FaLinkedinIn />
          </IconSpan>
          <IconSpan>
            <FaTwitter />
          </IconSpan>
        </IconContainer>

        <HeroImage />
      </Container>
    </HeroSection>
  )
}

export default Hero
