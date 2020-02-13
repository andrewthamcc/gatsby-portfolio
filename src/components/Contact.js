import React from "react"
import styled from "styled-components"
import { TextContainer, Container, Paragraph, SectionHeading } from "./Styles"
import SocialIcons from "../components/SocialIcons"

const ContactSection = styled.section`
  padding-top: 4rem;
`

const ContactEmail = styled(Paragraph)`
  font-weight: 600;
  color: #080808;
  display: inline;
  transition: 0.3s border ease;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;

  &:hover,
  &:focus {
    border-bottom: 2px solid #080808;
  }
`

const Contact = () => {
  return (
    <ContactSection>
      <TextContainer>
        <SectionHeading>Contact Me</SectionHeading>
        <Paragraph>
          Reach out if you're looking for a developer, have a question, or would
          like to connect.
        </Paragraph>
        <a href="mailto: hello@andrewtham.cc">
          <ContactEmail>hello@andrewtham.cc</ContactEmail>
        </a>
        <SocialIcons />
      </TextContainer>
    </ContactSection>
  )
}

export default Contact
