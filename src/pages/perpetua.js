import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Icon } from "@iconify/react"
import {
  Container,
  TextContainer,
  SectionHeading,
  Paragraph,
} from "../components/styles"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import typeScriptIcon from "@iconify/icons-logos/typescript-icon"
import sassIcon from "@iconify/icons-logos/sass"
import reactIcon from "@iconify/icons-logos/react"
import reduxIcon from "@iconify/icons-logos/redux"
import graphqlIcon from "@iconify/icons-logos/graphql"
import apollostackIcon from "@iconify/icons-logos/apollostack"
import gitIcon from "@iconify/icons-logos/git-icon"

const PerpetuaSection = styled.section`
  padding: 2rem 0;
`

const TechList = styled.ul`
  display: flex;
  justify-content: space-around;

  margin: 4rem 0;
  font-size: 2rem;

  li {
    display: flex;
    align-items: center;
    border: 50%;
    padding: 1rem;
    box-shadow: 0 16px 32px 0 rgba(55, 58, 75, 0.12);
  }
`

const Perpetua = () => {
  const data = useStaticQuery(graphql`
    query {
      perpetua: file(relativePath: { eq: "perpetua.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      perpetuaTeam: file(relativePath: { eq: "perpetua-team.png" }) {
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
      <PerpetuaSection>
        <TextContainer>
          <SectionHeading>Working at Perpetua</SectionHeading>
        </TextContainer>
        <Container>
          <Img
            fluid={data.perpetua.childImageSharp.fluid}
            style={{ maxHeight: "100%" }}
            imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
            style={{
              boxShadow: "0 16px 32px 0 rgba(55,58,75,.12)",
              margin: "4rem 0",
            }}
          />
        </Container>
        <TextContainer>
          <Paragraph>
            I had the opportunity to work as a Frontend Engineering Intern at
            Draper AI from October 2019 to January 2020. I was incredibly
            fortunate to have this experience and work alongside a team of
            highly intelligent, creative, and motivated engineers. I was the
            first hire from a web development bootcamp and their first hire
            without the deep experience of an Engineering or Computer Science
            background that the majority of the team possessed.
          </Paragraph>
          <Paragraph>
            One of my main interests in working at Draper AI was due to their
            technology stack and deepening my knowledge of React and being
            exposed to a production scale codebase of that stack.
          </Paragraph>

          <TechList>
            <li>
              <Icon icon={typeScriptIcon} />
            </li>
            <li>
              <Icon icon={sassIcon} />
            </li>
            <li>
              <Icon icon={reactIcon} />
            </li>
            <li>
              <Icon icon={reduxIcon} />
            </li>
            <li>
              <Icon icon={graphqlIcon} />
            </li>
            <li>
              <Icon icon={apollostackIcon} />
            </li>
            <li>
              <Icon icon={gitIcon} />
            </li>
          </TechList>
          <Paragraph>
            Working at Draper AI was one of the most challenging work
            experiences I have ever had. I was able to learn about working as a
            member in a team of engineers, understand how to navigate and work
            within a large complex codebase, and understanding how the
            development process works from ideation, to design and development,
            and then release.
          </Paragraph>
          <Paragraph>
            Some of my biggest takeaways were coming away with more of an
            understanding of what it means to write maintainable code for other
            developers and the future, the importance of reading and writing
            documentation of both the tools being used and built, and the
            knowledge that development is more about the process of solving
            problems, thinking of creative solutions, and building tools without
            necessarily being tied to a specific language, framework, or
            library.
          </Paragraph>
        </TextContainer>
        <Container>
          <Img
            fluid={data.perpetuaTeam.childImageSharp.fluid}
            style={{ maxHeight: "100%" }}
            imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
            style={{
              margin: "4rem 0",
            }}
          />
        </Container>
        <TextContainer>
          <Paragraph>
            I have learned tremendously from my time at Draper AI and have
            become a better developer. I am excited to keep an eye on the team
            and what the company will accomplish next.
          </Paragraph>
        </TextContainer>
      </PerpetuaSection>
    </Layout>
  )
}

export default Perpetua
