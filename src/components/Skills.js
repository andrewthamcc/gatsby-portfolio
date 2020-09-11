import React from "react";
import styled from "styled-components";
import {
  TextContainer,
  SectionHeading,
  Paragraph,
  MediaWidths,
} from "./SharedStyles";

const SkillsSection = styled.section`
  margin: 4rem 0;
`;

const SkillsContainer = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: #080808;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 1rem;

  @media (max-width: ${MediaWidths.tabletL}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;

const SkillsListItem = styled.li`
  margin: 1.5rem 0 0 1rem;
  list-style: circle;

  @media (max-width: ${MediaWidths.tabletL}) {
    margin-left: 1rem;
  }
`;

const Skills = () => {
  return (
    <SkillsSection>
      <TextContainer>
        <SectionHeading>Skills</SectionHeading>
        <Paragraph>
          Some of the technologies I've learned and worked with include:
        </Paragraph>

        <SkillsContainer>
          <SkillsList>
            <SkillsListItem>HTML5</SkillsListItem>
            <SkillsListItem>CSS3</SkillsListItem>
            <SkillsListItem>SASS</SkillsListItem>
            <SkillsListItem>JavaScript</SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem>Jest</SkillsListItem>
            <SkillsListItem>NodeJS</SkillsListItem>
            <SkillsListItem>TypeScript</SkillsListItem>
            <SkillsListItem>jQuery</SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem>React</SkillsListItem>
            <SkillsListItem>Redux</SkillsListItem>
            <SkillsListItem>Gatsby</SkillsListItem>
            <SkillsListItem>GraphQL/Apollo Client</SkillsListItem>
          </SkillsList>
          <SkillsList>
            <SkillsListItem>Git</SkillsListItem>
            <SkillsListItem>Express</SkillsListItem>
            <SkillsListItem>MongoDB/Mongoose</SkillsListItem>
            <SkillsListItem>Firebase</SkillsListItem>
          </SkillsList>
        </SkillsContainer>
      </TextContainer>
    </SkillsSection>
  );
};

export default Skills;
