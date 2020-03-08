import React from "react";
import { useStaticQuery } from "gatsby";
import styled from "styled-components";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Works from "../components/Works";
import SocialIcons from "../components/SocialIcons";
import {
  SectionImage,
  Container,
  TextContainer,
  Paragraph,
  SectionHeading,
  LinkStyle,
} from "../components/SharedStyles";

const AboutSection = styled.section`
  margin: 4rem 0;
`;

const ContactSection = styled.section`
  margin: 4rem 0;
`;

const IndexPage = () => {
  const { skills, contact } = useStaticQuery(
    graphql`
      query {
        skills: file(relativePath: { eq: "home/lagape.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        contact: file(relativePath: { eq: "home/contact.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  );

  const imageSkillsData = skills.childImageSharp.fluid;
  const imageContactData = contact.childImageSharp.fluid;

  return (
    <Layout none>
      <SEO title="Frontend Developer" />
      <Hero />
      <AboutSection>
        <TextContainer>
          <Paragraph>
            I'm a front end developer based in Toronto, Canada. I graduated from
            The University of Toronto with a degree in Physics after which I
            trained and worked as a Chef. I've opened a national test kitchen
            for Sobeys Inc., cooked in fine dining restaurants in Melbourne,
            Australia, headed kitchens in Toronto, and have been a part of food
            focused technology startups.
          </Paragraph>
          <Paragraph>
            I'm an adept problem solver, have a strong background of working in
            teams, and enjoy challenges. I'm passionate about technology and
            using code to solve problems and to create and bring websites and
            web applications to life.
          </Paragraph>
        </TextContainer>
      </AboutSection>
      <Container>
        <SectionImage fluid={imageSkillsData} y={55} />
      </Container>
      <Skills />
      <Works />
      <Container>
        <SectionImage fluid={imageContactData} y={70} />
      </Container>
      <ContactSection>
        <TextContainer>
          <SectionHeading>Contact Me</SectionHeading>
          <Paragraph>
            Reach out if you're looking for a developer, have a question, or
            would like to connect.
          </Paragraph>
          <a href="mailto: hello@andrewtham.cc" title="hello@andrewtham.cc">
            <LinkStyle>hello@andrewtham.cc</LinkStyle>
          </a>
          <SocialIcons />
        </TextContainer>
      </ContactSection>
    </Layout>
  );
};

export default IndexPage;
