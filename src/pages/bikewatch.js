import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import {
  Container,
  TextContainer,
  SectionHeading,
  Paragraph,
  LinkStyle,
} from "../components/SharedStyles"
import TechIcons, { iconTypes } from "../components/TechIcons"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BikeWatchSection = styled.section`
  padding: 2rem 0;
`

const BikeWatch = () => {
  const data = useStaticQuery(graphql`
    query {
      bikewatch: file(relativePath: { eq: "bikewatch.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
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

          <Paragraph>
            <a
              href="https://github.com/andrewthamcc/LCM-coaching"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkStyle>View Repository</LinkStyle>
            </a>{" "}
            <a
              href="http://cafikmartincoaching.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkStyle>View Live</LinkStyle>
            </a>
          </Paragraph>
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
        </TextContainer>
      </BikeWatchSection>
    </Layout>
  )
}

export default BikeWatch
