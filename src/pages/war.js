import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import {
  Container,
  TextContainer,
  SectionHeading,
  Paragraph,
} from "../components/styles"
import TechIcons, { iconTypes } from "../components/TechIcons"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WarSection = styled.section`
  padding: 2rem 0;
`

const War = () => {
  const data = useStaticQuery(graphql`
    query {
      war: file(relativePath: { eq: "war.png" }) {
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
      <WarSection>
        <TextContainer>
          <SectionHeading>War</SectionHeading>
        </TextContainer>
        <Container>
          <Paragraph>
            War is a JavaScript and jQuery project created as part of Juno
            College's Web Development Immersive course. The focus of the project
            was to create a JavaScript focused web application that interacts
            with DOM elements and requires user input.
          </Paragraph>
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
        </TextContainer>
      </WarSection>
    </Layout>
  )
}

export default War
