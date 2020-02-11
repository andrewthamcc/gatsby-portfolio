import React from "react"
import styled from "styled-components"
import { TextContainer, Paragraph, SectionHeading } from "./Styles"

const WorksSection = styled.section`
  padding: 2rem 0 4rem;
`

const Works = () => {
  return (
    <WorksSection>
      <TextContainer>
        <SectionHeading right>Work</SectionHeading>
      </TextContainer>
    </WorksSection>
  )
}

export default Works
