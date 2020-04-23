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
} from "../components/SharedStyles";
import TechIcons, { iconTypes } from "../components/TechIcons";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const MarcheRunnerSection = styled.section`
  padding: 2rem 0;
`;

const MarcheRunner = () => {
  const data = useStaticQuery(graphql`
    query {
      marcherunner: file(
        relativePath: { eq: "marcherunner/marcherunner.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      marcherunnerDashboard: file(
        relativePath: { eq: "marcherunner/marcherunner-dashboard.png" }
      ) {
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
      <SEO title="MarchéRunner" />
      <MarcheRunnerSection>
        <TextContainer>
          <SectionHeading>MarchéRunner</SectionHeading>
          <Paragraph>
            MarchéRunner is a fullstack web application built utilizing the MERN
            stack. TypeScript, React, and Redux on the Frontend, NodeJS,
            Express, and Mongoose/MongoDB for the backend, and deployed with
            Heroku.
          </Paragraph>
          <Paragraph>
            When going grocery shopping I was using a draft email in Gmail to
            write down my lists before heading out the door. I built this
            project out of desire for a better experience and way of handling
            lists for my weekly runs. This project has turned out to be an
            incredibly rewarding and fun experience - and there's even some
            friends that will be using it as well
          </Paragraph>
          <PortfolioLinkContainer>
            <a
              href="https://github.com/andrewthamcc/marche-runner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PortfolioLink>View Repository</PortfolioLink>
            </a>
            <a
              href="http://marcherunner.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PortfolioLink>View Live</PortfolioLink>
            </a>
          </PortfolioLinkContainer>
        </TextContainer>
        <Container>
          <Img
            fluid={data.marcherunner.childImageSharp.fluid}
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
            MarchéRunner is my first fullstack application. I learned NodeJS,
            Express, and Mongoose/MongoDB from Andrew Mead's Node.js course and
            also through a section from Brad Traversy's React course (both of
            which I wholehartedly recommend). I have barely scratched the
            surface on the backend and the possibilities ther MERN stack and I'm
            looking forward to learning much more.
          </Paragraph>
          <TechIcons
            tech={[
              iconTypes.typescript,
              iconTypes.react,
              iconTypes.redux,
              iconTypes.nodejs,
              iconTypes.express,
              iconTypes.mongodb,
              iconTypes.heroku,
            ]}
          />
          <Paragraph>
            This project is currently a glorified To-Do List/Task application
            but I have future plans to expand on its abilities. My original idea
            for a fullstack application was a recipe database where users could
            add recipes and then convert measurement units and scale yields. A
            desire to build this application came from my experience as a Chef
            and spending much of my time with hardcopy recipes whereas I would
            have preferred digital. I would like to build my original plans into
            MarchéRunner and also be able to extrapolate shopping lists from
            recipes.
          </Paragraph>
          <Img
            fluid={data.marcherunnerDashboard.childImageSharp.fluid}
            imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
            style={{
              maxHeight: "100%",
              boxShadow: "0 16px 32px 0 rgba(55,58,75,.12)",
              margin: "4rem 0",
            }}
          />
          <Paragraph>
            Much of the UI in this build was inspired from my time at Draper AI.
            It was there that I had the opportunity to interact with a component
            library where much of it was completely customized - majority of
            which was done before I joined the team. I used this project as the
            perfect opportunity to expand my React skills and build out a
            frontend with minimal packages and libraries to showcase my own
            custom component library and abilities with React.
          </Paragraph>
        </TextContainer>
      </MarcheRunnerSection>
    </Layout>
  );
};

export default MarcheRunner;
