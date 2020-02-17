import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import {
  Container,
  TextContainer,
  SectionHeading,
  Paragraph,
  PortfolioLinkContainer,
  PortfolioLink,
} from "../components/SharedStyles"
import TechIcons, { iconTypes } from "../components/TechIcons"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WarSection = styled.section`
  padding: 2rem 0;
`

const AppImages = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const AppImagesLeft = styled.div`
  width: 40%;
  margin-right: 1rem;
`

const AppImagesRight = styled.div`
  width: 60%;
  margin-left: 1rem;
`

const War = () => {
  const data = useStaticQuery(graphql`
    query {
      war: file(relativePath: { eq: "war/war.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      appImage: file(relativePath: { eq: "war/war-app.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gameplay: file(relativePath: { eq: "war/gameplay.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ceasefire: file(relativePath: { eq: "war/ceasefire.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="War" />
      <WarSection>
        <TextContainer>
          <SectionHeading>War</SectionHeading>
          <Paragraph>
            War is a JavaScript and jQuery project created as part of Juno
            College's Web Development Immersive course. The focus of the project
            was to create a JavaScript focused web application that interacts
            with DOM elements and requires user input.
          </Paragraph>
          <PortfolioLinkContainer>
            <a
              href="https://github.com/andrewthamcc/war-card-game"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PortfolioLink>View Repository</PortfolioLink>
            </a>{" "}
            <a
              href="https://andrewthamcc.github.io/war-card-game/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PortfolioLink>View Live</PortfolioLink>
            </a>
          </PortfolioLinkContainer>
        </TextContainer>
        <Container>
          <Img
            fluid={data.war.childImageSharp.fluid}
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
            The War game was built to also utilize the Deck of Cards API to
            generate and handle a deck of cards and provide card images.
            However, this feature was disconnected after the API had crashed
            leading up to the submission of this project.
          </Paragraph>

          <TechIcons
            tech={[iconTypes.html, iconTypes.sass, iconTypes.jquery]}
          />

          <AppImages>
            <AppImagesLeft>
              <Img
                fluid={data.appImage.childImageSharp.fluid}
                style={{
                  boxShadow: "0 16px 32px 0 rgba(55,58,75,.12)",
                }}
              />
            </AppImagesLeft>

            <AppImagesRight>
              <Img
                fluid={data.gameplay.childImageSharp.fluid}
                style={{
                  boxShadow: "0 16px 32px 0 rgba(55,58,75,.12)",
                  marginBottom: "2rem",
                }}
              />
              <Img
                fluid={data.ceasefire.childImageSharp.fluid}
                style={{
                  boxShadow: "0 16px 32px 0 rgba(55,58,75,.12)",
                }}
              />
            </AppImagesRight>
          </AppImages>
        </TextContainer>
      </WarSection>
    </Layout>
  )
}

export default War
