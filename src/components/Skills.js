import React from "react"
import styled from "styled-components"
import {
  Container,
  TextContainer,
  SectionHeading,
  Paragraph,
} from "./SharedStyles"

const SkillsSection = styled.section`
  padding: 4rem 0 2rem;
`

const SkillList = styled.div`
  font-weight: 600;
  color: #080808;

  display: flex;
  margin-top: 1rem;

  ul {
    list-style: none;
    width: 25%;

    li {
      margin: 1rem 0 0 2rem;
      list-style: circle;
    }
  }
`

const Skills = () => {
  return (
    <SkillsSection>
      <TextContainer>
        <SectionHeading>Skills</SectionHeading>
        <Paragraph>
          Some of the technologies I've learned and worked with include:
        </Paragraph>
      </TextContainer>
      <Container>
        <SkillList>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
          </ul>
          <ul>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>TypeScript</li>
          </ul>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>GraphQL</li>
          </ul>
          <ul>
            <li>Firebase</li>
            <li>Styled-Components</li>
            <li>Git</li>
          </ul>
        </SkillList>
      </Container>
    </SkillsSection>
  )
}

export default Skills
