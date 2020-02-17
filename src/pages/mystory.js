import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import styled from "styled-components"
import {
  Container,
  TextContainer,
  SectionHeading,
  Paragraph,
} from "../components/SharedStyles"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StorySection = styled.section`
  padding-top: 2rem;
`

const StoryParagraph = styled(Paragraph)`
  margin-bottom: 2rem;
`

const Mystory = () => {
  const data = useStaticQuery(graphql`
    query {
      rousillon: file(relativePath: { eq: "story/rousillon.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      python: file(relativePath: { eq: "story/python.jpg" }) {
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
      <SEO title="My Journey" />
      <StorySection>
        <TextContainer>
          <SectionHeading>My Story</SectionHeading>
        </TextContainer>
        <Container>
          <div style={{ height: "600px", marginBottom: "2rem" }}>
            <Img
              fluid={data.rousillon.childImageSharp.fluid}
              style={{ maxHeight: "100%" }}
              imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
        </Container>
        <TextContainer>
          <StoryParagraph>
            In 2019 I decided to leave the hospitality industry. While I had
            succeeded and climbed the ladder of professional kitchens I could no
            longer ignore the growing income disparity, lack of employee rights
            and proper employment practices, and restaurants more often being
            driven by social media influence and sales over quality of food and
            service.
          </StoryParagraph>

          <StoryParagraph>
            I decided to attend Juno College (formerly HackerYou) after a close
            friend of mine had completed their program and found employment as a
            Frontend Developer with Rakuten Kobo. I also had the opportunity to
            work in tech startups and found myself interested in the work the
            developers were doing.
          </StoryParagraph>

          <StoryParagraph>
            I have always enjoyed programming. I was creating websites on
            GeoCities as a teenager and taking computer programming through
            highschool learning Visual Basic and Java. At The University of
            Toronto I studied Physics and had courses where we programmed with
            Python. I applied my programming knowledge during my studies in
            various courses and assignments and have also had the opportunity to
            write small bits of code to help my job as a Chef.
          </StoryParagraph>

          <StoryParagraph>
            With a background in the sciences and a familiarity with programming
            basics I enrolled into the part time program at Juno College in
            November 2018 and was admitted to their 8-Week immersive program in
            April 2019.
          </StoryParagraph>

          <StoryParagraph>
            I haven’t looked back to the world of cooking since and fallen more
            in love with programming and growing my career as a developer.
          </StoryParagraph>
        </TextContainer>
      </StorySection>
    </Layout>
  )
}

export default Mystory
