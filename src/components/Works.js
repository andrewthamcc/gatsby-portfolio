import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"
import { TextContainer, Paragraph, SectionHeading } from "./Styles"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorksSection = styled.section`
  padding: 2rem 0 4rem;
`

const WorkItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const WorkItem = styled.div`
  height: 20rem;
  width: calc(50% - 3rem);
  margin: 2rem 3rem;

  display: flex;
  flex-direction: column;

  &:nth-child(odd) {
    margin-left: 0;
  }

  &:nth-child(even) {
    margin-right: 0;
  }

  p {
    flex-grow: 1;
  }
`

const WorkItemTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 1rem 0;
  padding: 0;
`

const WorkLink = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 1rem;
  display: inline-block;
  border-bottom: 2px solid transparent;
  transition: 0.3s border ease;

  &:hover,
  &:focus {
    border-bottom: 2px solid #080808;
  }
`

const Story = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`

const StoryParagraph = styled(Paragraph)`
  margin-top: 1rem;
`

const Works = () => {
  const data = useStaticQuery(graphql`
    query {
      perpetua: file(relativePath: { eq: "perpetua.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lcm: file(relativePath: { eq: "lcm.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bikewatch: file(relativePath: { eq: "bikewatch.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      war: file(relativePath: { eq: "war.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
    <WorksSection>
      <TextContainer>
        <SectionHeading>Work</SectionHeading>
        <Paragraph>Selected works and past projects.</Paragraph>

        <WorkItemContainer>
          <WorkItem>
            <Link to="/perpetua">
              <Img fluid={data.perpetua.childImageSharp.fluid} />
            </Link>
            <WorkItemTitle>Perpetua</WorkItemTitle>
            <Paragraph>
              I had the opportunity to work as an intern at Perpetua, a start-up
              based in Toronto.
            </Paragraph>
            <Link to="/perpetua">
              <WorkLink>Read about my experience</WorkLink>
            </Link>
          </WorkItem>

          <WorkItem>
            <Link to="/cafikmartin">
              <Img fluid={data.lcm.childImageSharp.fluid} />
            </Link>
            <WorkItemTitle>Cafik-Martin Coaching</WorkItemTitle>
            <Paragraph>
              A three page static portfolio website designed, built, and
              deployed for Orthodontic Speaker Laura Cafik-Martin.
            </Paragraph>
            <Link to="/cafikmartin">
              <WorkLink>View Project</WorkLink>
            </Link>
          </WorkItem>

          <WorkItem>
            <Link to="/bikewatch">
              <Img fluid={data.bikewatch.childImageSharp.fluid} />
            </Link>
            <WorkItemTitle>BikeWatch Toronto</WorkItemTitle>
            <Paragraph>
              React Application built as part of Juno College's Web Development
              Immersive program.
            </Paragraph>
            <Link to="/bikewatch">
              <WorkLink>View Project</WorkLink>
            </Link>
          </WorkItem>

          <WorkItem>
            <Link to="/war">
              <Img fluid={data.war.childImageSharp.fluid} />
            </Link>
            <WorkItemTitle>War Card Game</WorkItemTitle>
            <Paragraph>
              jQuery & JavaScript game built as part of Juno College's Web
              Development Immersive program.
            </Paragraph>
            <Link to="/war">
              <WorkLink>View Project</WorkLink>
            </Link>
          </WorkItem>
        </WorkItemContainer>

        <Story>
          <Img fluid={data.rousillon.childImageSharp.fluid} />
          <StoryParagraph>
            I get asked a lot about what my story is and how I went from cooking
            to becoming a developer.
          </StoryParagraph>
          <Link to="/mystory">
            <WorkLink center>Read about my journey...</WorkLink>
          </Link>
        </Story>
      </TextContainer>
    </WorksSection>
  )
}

export default Works
