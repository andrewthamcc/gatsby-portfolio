import React from "react"
import styled from "styled-components"
import { TextContainer, SectionHeading, Paragraph } from "./Styles"

const SkillsSection = styled.section`
  padding: 4rem 0 2rem;
`

const SkillList = styled.ul`
  font-weight: 600;
  color: #080808;

  display: flex;

  div {
    width: 33.33%;
  }

  li {
    margin: 1rem 0 0 2rem;
    list-style: circle;
  }
`

const Skills = () => {
  return (
    <SkillsSection>
      <TextContainer>
        <SectionHeading>Skills</SectionHeading>
        <Paragraph>
          Some of the technologies I've learned and worked with include:
          <SkillList>
            <div>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
            </div>
            <div>
              <li>TypeScript</li>
              <li>React</li>
              <li>Redux</li>
            </div>
            <div>
              <li>GraphQL</li>
              <li>Styled-Components</li>
              <li>Git</li>
            </div>
          </SkillList>
        </Paragraph>
      </TextContainer>
    </SkillsSection>
  )
}

export default Skills
