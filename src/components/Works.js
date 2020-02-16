import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {
  TextContainer,
  SectionHeading,
  Paragraph,
  LinkStyle,
} from "./SharedStyles"

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

const WorkImageContainer = styled.div`
  transition-duration: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

const WorkItemTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 1rem 0;
  padding: 0;
`

const Story = styled.div`
  margin: 2rem 0;
  text-align: center;
`

const StoryImage = styled.div`
  height: 350px;
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
      desk: file(relativePath: { eq: "desk.jpg" }) {
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
              <WorkImageContainer>
                <Img fluid={data.perpetua.childImageSharp.fluid} />
              </WorkImageContainer>
            </Link>
            <WorkItemTitle>Perpetua / Draper AI</WorkItemTitle>
            <Paragraph>
              I had the opportunity to work as an intern at Perpetua, a start-up
              based in Toronto.
            </Paragraph>
            <Link to="/perpetua">
              <LinkStyle>Read about my experience</LinkStyle>
            </Link>
          </WorkItem>

          <WorkItem>
            <Link to="/cafikmartin">
              <WorkImageContainer>
                <Img fluid={data.lcm.childImageSharp.fluid} />
              </WorkImageContainer>
            </Link>
            <WorkItemTitle>Cafik-Martin Coaching</WorkItemTitle>
            <Paragraph>
              A three page static site designed, built, and deployed for
              Orthodontic Speaker Laura Cafik-Martin.
            </Paragraph>
            <Link to="/cafikmartin">
              <LinkStyle>View Project</LinkStyle>
            </Link>
          </WorkItem>

          <WorkItem>
            <Link to="/bikewatch">
              <WorkImageContainer>
                <Img fluid={data.bikewatch.childImageSharp.fluid} />
              </WorkImageContainer>
            </Link>
            <WorkItemTitle>BikeWatch Toronto</WorkItemTitle>
            <Paragraph>
              React Application built as part of Juno College's Web Development
              Immersive program.
            </Paragraph>
            <Link to="/bikewatch">
              <LinkStyle>View Project</LinkStyle>
            </Link>
          </WorkItem>

          <WorkItem>
            <Link to="/war">
              <WorkImageContainer>
                <Img
                  fluid={data.war.childImageSharp.fluid}
                  imgStyle={{ objectFit: "contain" }}
                />
              </WorkImageContainer>
            </Link>
            <WorkItemTitle>War Card Game</WorkItemTitle>
            <Paragraph>
              jQuery & JavaScript game built as part of Juno College's Web
              Development Immersive program.
            </Paragraph>
            <Link to="/war">
              <LinkStyle>View Project</LinkStyle>
            </Link>
          </WorkItem>
        </WorkItemContainer>

        <Story>
          <StoryImage>
            <Img
              fluid={data.desk.childImageSharp.fluid}
              style={{ maxHeight: "100%" }}
              imgStyle={{ objectFit: "cover", objectPosition: "50% 30%" }}
            />
          </StoryImage>
          <Paragraph>
            I get asked a lot about what my story is and how I went from cooking
            to becoming a developer.
          </Paragraph>
          <Link to="/mystory">
            <LinkStyle center>Read about my journey...</LinkStyle>
          </Link>
        </Story>
      </TextContainer>
    </WorksSection>
  )
}

export default Works
