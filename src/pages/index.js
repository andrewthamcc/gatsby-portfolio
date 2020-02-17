import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Works from "../components/Works"
import SocialIcons from "../components/SocialIcons"
import {
  SectionImage,
  Container,
  TextContainer,
  Paragraph,
  SectionHeading,
  LinkStyle,
} from "../components/SharedStyles"
import SkillsImage from "../images/home/lagape.jpg"
import ContactImage from "../images/home/contact.jpg"

const AboutSection = styled.section`
  margin-bottom: 4rem;
`

const ContactSection = styled.section`
  margin-top: 4rem;
`

const IndexPage = () => (
  <Layout none>
    <SEO title="Frontend Developer" />
    <Hero />
    <AboutSection>
      <TextContainer>
        <Paragraph>
          I'm a front end developer based in Toronto, Canada. I graduated from
          The University of Toronto with a degree in Physics after which I
          trained and worked as a Chef. I've opened a national test kitchen for
          Sobeys Inc., cooked in fine dining restaurants in Melbourne,
          Australia, headed kitchens in Toronto, and have been a part of food
          focused technology startups.
        </Paragraph>
        <Paragraph>
          In 2019, after a decade of pursuing and accomplishing my childhood
          dreams, I decided to retire from the hospitality industry and retrain
          in web development. I've always had a fondness and curiosity for the
          web since I was young teenager learning HTML in the early days of the
          internet. I have also always enjoyed programming which I studied
          throughout high school and during my time at university.
        </Paragraph>
        <Paragraph>
          I'm an adept problem solver, have a strong background of working in
          teams, and enjoy challenge. I'm passionate about technology and using
          code to solve problems and to create and bring websites and web
          applications to life.
        </Paragraph>
      </TextContainer>
    </AboutSection>
    <Container>
      <SectionImage image={SkillsImage} y={55} />
    </Container>
    <Skills />
    <Works />
    <Container>
      <SectionImage image={ContactImage} y={70} />
    </Container>
    <ContactSection>
      <TextContainer>
        <SectionHeading>Contact Me</SectionHeading>
        <Paragraph>
          Reach out if you're looking for a developer, have a question, or would
          like to connect.
        </Paragraph>
        <a href="mailto: hello@andrewtham.cc">
          <LinkStyle>hello@andrewtham.cc</LinkStyle>
        </a>
        <SocialIcons />
      </TextContainer>
    </ContactSection>
  </Layout>
)

export default IndexPage
