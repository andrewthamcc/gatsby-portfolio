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

const CafikMartinSection = styled.section`
  padding: 2rem 0;
`

const Cafikmartin = () => {
  const data = useStaticQuery(graphql`
    query {
      lcmCoaching: file(relativePath: { eq: "lcm.png" }) {
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
            <a
              href="https://github.com/andrewthamcc/LCM-coaching"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PortfolioLink>View Repository</PortfolioLink>
            </a>
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
            Lauara's website is a three page static site. The biggest challenge
            with creating this website was interpreting Laura's aesthetic
            desires and translating them into a design. I do not have a strong
            design background or skills but felt like we were able to acheive
            her goal of vibrant colours on a dark background and keeping it
            simple with easy to access information.
          </Paragraph>
          <TechIcons
            tech={[iconTypes.html, iconTypes.sass, iconTypes.javascript]}
          />
          <Paragraph>
            In the future we will continue to expand on Laura's website adding
            links to her various content outlets and possibly a blog page. With
            these changes I would also ideally like to translate her site to
            Gatsby with Styled-Components.
          </Paragraph>
        </TextContainer>
      </CafikMartinSection>
    </Layout>
  )
}

export default Cafikmartin
