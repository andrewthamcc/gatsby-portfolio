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

const BikeWatchSection = styled.section`
  padding: 2rem 0;
`;

const AppImages = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 4rem;

  @media (max-width: ${MediaWidths.tabletS}) {
    flex-direction: column;
    align-items: center;

    margin-top: 2rem;
  }
`;

const AppImagesLeft = styled.div`
  width: 50%;
  margin-right: 1rem;

  @media (max-width: ${MediaWidths.tabletS}) {
    width: 100%;
    margin: 1rem 0;
  }
`;

const AppImagesRight = styled.div`
  width: 50%;
  margin-left: 1rem;

  @media (max-width: ${MediaWidths.tabletS}) {
    width: 100%;
    margin: 1rem 0;
  }
`;

const BikeWatch = () => {
  const data = useStaticQuery(graphql`
    query {
      bikewatch: file(relativePath: { eq: "bike/bikewatch.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bikewatchMap: file(relativePath: { eq: "bike/bikewatch-map.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bikewatchReport: file(relativePath: { eq: "bike/bikewatch-report.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="BikeWatch" />
      <BikeWatchSection>
        <TextContainer>
          <SectionHeading>BikeWatch</SectionHeading>
          <Paragraph>
            BikeWatch is a React project created as part of Juno College's Web
            Development Immersive course. The focus of the project was to create
            a React web application utilizing an API.
          </Paragraph>
          <Paragraph>
            As an avid cyclist and vitim of bicycle theft this project was
            personally important to me. I wanted to create a tool that could be
            used by Toronto's cycling community and act a digital neighborhood
            watch.
          </Paragraph>

          <PortfolioLinkContainer>
            <a
              href="https://github.com/andrewthamcc/bikewatch-hooks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PortfolioLink>View Repository</PortfolioLink>
            </a>{" "}
            <a
              href="https://andrewthamcc.github.io/bikewatch-hooks/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PortfolioLink>View Live</PortfolioLink>
            </a>
          </PortfolioLinkContainer>
        </TextContainer>
        <Container>
          <Img
            fluid={data.bikewatch.childImageSharp.fluid}
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
            BikeWatch utilizes the BikeWise.org API to query user reports to
            their database. GeoJSON data from BikeWise is utilized and displayed
            using React Leaflet library for mapping.
          </Paragraph>
          <TechIcons tech={[iconTypes.react, iconTypes.sass]} />
          <Paragraph>
            The challenge of creating this project was the compressed time
            during the bootcamp and being given only 7 days to complete while
            also concurrently learning React.
          </Paragraph>
          <Paragraph>
            Since completing the bootcamp this project was refactored from Class
            based components to all Functional components with React Hooks and
            implements React's Context API for state management. In the future I
            would like to build out a dedicated database with Node.js and
            Express instead of depending on BikeWise.
          </Paragraph>
          <AppImages>
            <AppImagesLeft>
              <Img
                fluid={data.bikewatchReport.childImageSharp.fluid}
                style={{
                  boxShadow: "0 16px 32px 0 rgba(55,58,75,.12)",
                }}
              />
            </AppImagesLeft>
            <AppImagesRight>
              <Img
                fluid={data.bikewatchMap.childImageSharp.fluid}
                style={{
                  boxShadow: "0 16px 32px 0 rgba(55,58,75,.12)",
                }}
              />
            </AppImagesRight>
          </AppImages>
        </TextContainer>
      </BikeWatchSection>
    </Layout>
  );
};

export default BikeWatch;
