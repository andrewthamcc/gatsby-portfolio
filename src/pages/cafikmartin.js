import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Layout from "../components/layout";
import {
  Container,
  TextContainer,
  SectionHeading,
  Paragraph,
  PortfolioLinkContainer,
  PortfolioLink,
  MediaWidths,
} from "../components/SharedStyles";
import TechIcons, { iconTypes } from "../components/TechIcons";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const CafikMartinSection = styled.section`
  padding: 2rem 0;
`;

const AppImages = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 2rem;

  @media (max-width: ${MediaWidths.tabletS}) {
    flex-direction: column;
    align-items: center;

    margin-top: 2rem;
  }
`;

const AppImagesLeft = styled.div`
  width: 40%;
  margin-right: 1rem;

  @media (max-width: ${MediaWidths.tabletS}) {
    width: 75%;
    margin: 1rem auto;
  }
`;

const AppImagesRight = styled.div`
  width: 60%;
  margin-left: 1rem;

  @media (max-width: ${MediaWidths.tabletS}) {
    width: 100%;
    margin: 1rem 0;
    order: -1;
  }
`;

const Cafikmartin = () => {
  const data = useStaticQuery(graphql`
    query {
      lcmCoaching: file(relativePath: { eq: "lcm/lcm.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lcmLogin: file(relativePath: { eq: "lcm/lcm-login.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lcmModules: file(relativePath: { eq: "lcm/lcm-modules.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lcmPage: file(relativePath: { eq: "lcm/lcm-full.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="LCM Coaching" />
      <CafikMartinSection>
        <TextContainer>
          <SectionHeading>Cafik-Martin Coaching</SectionHeading>
          <Paragraph>
            I worked with Orthodontic Speaker and Coach Laura Cafik-Martin to
            design, create, and deploy a website of her portfolio, services, and
            information.
          </Paragraph>
          <PortfolioLinkContainer>
            {/* <a
              href="https://github.com/andrewthamcc/LCM-coaching"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PortfolioLink>View Repository</PortfolioLink>
            </a> */}
            <a
              href="http://cafikmartincoaching.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PortfolioLink>View Live</PortfolioLink>
            </a>
          </PortfolioLinkContainer>
        </TextContainer>
        <Container>
          <Img
            fluid={data.lcmCoaching.childImageSharp.fluid}
            imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
            style={{
              maxHeight: "100%",
              boxShadow: "0 16px 32px 0 rgba(55,58,75,.12)",
              margin: "4rem 0",
            }}
          />
        </Container>
        <TextContainer>
          <Paragraph>
            I had built a website for Laura in 2019 fresh out of web development
            bootcamp. The website was a very simple three page static build
            written with HTML, SCSS and some JavaScript. A year later Laura
            approached me with plans to expand on her website to include a
            section where she could launch her online mentoring and coaching
            program. We also took this opportunity to redesign her page and
            update the codebase to utilize a static site generator.
          </Paragraph>
          <Paragraph>
            The challenge to this update was building out a client portal that
            included authentication and tracked user progress through the
            course. Not wanting to build out a database or dedicated server I
            turned to Firebase which provided a simple database and could handle
            secure user authentication. Firebase's console panel also allows for
            multiple users and is user friendly and simple enough for Laura to
            understand and use on her own.
          </Paragraph>

          <Paragraph>
            Another benefit of Firebase are its good documentation and large
            userbase. Gatsby also has good documentation on usage and
            interaction with Firebase on their official documentation.
          </Paragraph>

          <TechIcons
            tech={[iconTypes.gatsby, iconTypes.firebase, iconTypes.sass]}
          />
          <Paragraph>
            With this build I was able to flex and improve on my design and UX
            skills and create an interesting Fullstack type project. In the
            future we will continue to expand on Laura's website adding a Blog
            by connected to a CMS such as Contentful or Strapi.
          </Paragraph>

          <AppImages>
            <AppImagesLeft>
              <Img
                fluid={data.lcmPage.childImageSharp.fluid}
                style={{
                  boxShadow: "0 16px 32px 0 rgba(55,58,75,.12)",
                }}
              />
            </AppImagesLeft>

            <AppImagesRight>
              <Img
                fluid={data.lcmLogin.childImageSharp.fluid}
                style={{
                  boxShadow: "0 16px 32px 0 rgba(55,58,75,.12)",
                  marginBottom: "2rem",
                }}
              />
              <Img
                fluid={data.lcmModules.childImageSharp.fluid}
                style={{
                  boxShadow: "0 16px 32px 0 rgba(55,58,75,.12)",
                  marginBottom: "2rem",
                }}
              />
            </AppImagesRight>
          </AppImages>
        </TextContainer>
      </CafikMartinSection>
    </Layout>
  );
};

export default Cafikmartin;
