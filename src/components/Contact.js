import React from "react"
import styled from "styled-components"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"

import { TextContainer, Container, Paragraph, SectionHeading } from "./Styles"
import MainImage from "../images/contact.jpg"

const ContactImage = styled.div`
  background-image: url(${MainImage});
  filter: grayscale();
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 65%;
  height: 350px;

  margin: 5rem 0 4rem;
`

const ContactEmail = styled(Paragraph)`
  font-weight: 500;
  color: #080808;
  display: inline;
  transition: 0.3s border ease;
  padding-bottom: 2px;
  border-bottom: 1.5px solid #080808;

  &:hover,
  &:focus {
    border-bottom: 1.5px solid transparent;
  }
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.5rem;
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

const Contact = () => {
  return (
    <>
      <Container>
        <ContactImage />
      </Container>
      <TextContainer>
        <SectionHeading>Contact Me</SectionHeading>
        <Paragraph>
          Reach out if you're looking for a developer, have a question, or would
          like to connect.
        </Paragraph>
        <a href="mailto: hello@andrewtham.cc">
          <ContactEmail>hello@andrewtham.cc</ContactEmail>
        </a>

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
      </TextContainer>
    </>
  )
}

export default Contact
