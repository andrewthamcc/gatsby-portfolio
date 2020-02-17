import React from "react"
import styled from "styled-components"
import {
  Container,
  TextContainer,
  SectionHeading,
  Paragraph,
} from "./SharedStyles"

const SkillsSection = styled.section`
  margin: 4rem 0 2rem;
`

const SkillsContainer = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #080808;

  display: flex;
  margin-top: 1rem;
`

const SkillsList = styled.ul`
  width: 25%;
`

const SkillsListItem = styled.li`
  margin: 1rem 0 0 2rem;
  list-style: circle;
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
        <SkillsContainer>
          <SkillsList>
            <SkillsListItem>HTML5</SkillsListItem>
            <SkillsListItem>CSS3</SkillsListItem>
            <SkillsListItem>SASS</SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem>JavaScript</SkillsListItem>
            <SkillsListItem>jQuery</SkillsListItem>
            <SkillsListItem>TypeScript</SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem>React</SkillsListItem>
            <SkillsListItem>Redux</SkillsListItem>
            <SkillsListItem>GraphQL</SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem>Firebase</SkillsListItem>
            <SkillsListItem>Styled-Components</SkillsListItem>
            <SkillsListItem>Git</SkillsListItem>
          </SkillsList>
        </SkillsContainer>
      </Container>
    </SkillsSection>
  )
}

export default Skills
