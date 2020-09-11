import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import styled from "styled-components";
import {
  Container,
  TextContainer,
  SectionHeading,
  Paragraph,
} from "../components/SharedStyles";
import TechIcons, { iconTypes } from "../components/TechIcons";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const SmoothSection = styled.section`
  padding: 2rem 0;
`;

const SmoothSolutions = () => {
  const data = useStaticQuery(graphql`
    query {
      echub: file(relativePath: { eq: "smoothsolutions/echub.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      echubAssessment: file(
        relativePath: { eq: "smoothsolutions/assessment.png" }
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
      <SEO title="Draper AI" />
      <SmoothSection>
        <TextContainer>
          <SectionHeading>Working at Smooth Solutions</SectionHeading>
          <Paragraph>
            I was offered an extension after my internship at{" "}
            <Link to="/perpetua">Perpetua/Draper AI</Link> ended but I took it
            as an opportunity to search for different experiences wanting to see
            and work with different teams.
          </Paragraph>

          <Paragraph>
            In May 2020 I landed a position as a Frontend Software Developer at
            Smooth Solutions. The company is the outsourced development workshop
            for the non-profit energy conservation company{" "}
            <a href="https://greensaver.org/" target="_blank">
              Greensaver
            </a>
            . Smooth Solutions was digitizing GreenSaver and moving their
            scheduling processses and pen and paper audits to a web application.
          </Paragraph>
        </TextContainer>
        <Container>
          <Img
            fluid={data.echub.childImageSharp.fluid}
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
            I am the sole frontend developer with Smooth Solutions working on
            Greensaver's web application, Energy Conservation Hub. This hub acts
            as a calendar dashboard allowing its users to see their scheduled
            appointments and complete their in home energy audits.
          </Paragraph>

          <TechIcons
            tech={[
              iconTypes.materialUI,
              iconTypes.typescript,
              iconTypes.react,
              iconTypes.redux,
              iconTypes.graphql,
              iconTypes.apollo,
              iconTypes.git,
            ]}
          />
          <Paragraph>
            With ownership of the entirety of the frontend codebase I provide
            feedback and input on the entire application's design and user
            experience. As the only developer I have to find my own solutions
            and surpass my own roadblocks to deliver results. Being a
            development team of one has been challenging and rewarding. I have
            complete control and freedom of input of the frontend development
            process from end to end. I regularly partake in product iteration
            meetings, communicate with project stakeholders, and contribute to
            every key development decisions.
          </Paragraph>

          <Container>
            <Img
              fluid={data.echubAssessment.childImageSharp.fluid}
              imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
              style={{
                maxHeight: "100%",
                boxShadow: "0 16px 32px 0 rgba(55,58,75,.12)",
                margin: "4rem 0",
              }}
            />
          </Container>

          <Paragraph>
            I would love to be part of a larger development engineering team in
            the future but working as a sole developer has forced me to be
            creative, resilient, and granted me insights to areas of software
            development I normally would not have touched on so early in my
            career.
          </Paragraph>
        </TextContainer>
      </SmoothSection>
    </Layout>
  );
};

export default SmoothSolutions;
