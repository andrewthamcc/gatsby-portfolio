import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Container, TextContainer, SectionHeading } from "../components/styles"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StorySection = styled.section`
  padding: 2rem 0;
`

const Mystory = () => {
  const data = useStaticQuery(graphql`
    query {
      rousillon: file(relativePath: { eq: "rousillon.jpg" }) {
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
      <StorySection>
        <TextContainer>
          <SectionHeading>My Story</SectionHeading>
        </TextContainer>
        <Container>
          <div style={{ height: "600px" }}>
            <Img
              fluid={data.rousillon.childImageSharp.fluid}
              style={{ maxHeight: "100%" }}
              imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
        </Container>
        <TextContainer>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
          repellendus ullam architecto dicta asperiores soluta hic aperiam in
          blanditiis reiciendis suscipit, enim placeat, dolorem dolorum
          reprehenderit explicabo! Quibusdam, provident vero?
        </TextContainer>
      </StorySection>
    </Layout>
  )
}

export default Mystory
