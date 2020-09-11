import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import {
  TextContainer,
  SectionHeading,
  Paragraph,
  LinkStyle,
  MediaWidths,
} from "./SharedStyles";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const WorksSection = styled.section`
  margin: 4rem 0;
`;

const WorkItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${MediaWidths.mobileL}) {
    flex-direction: column;
  }
`;

const WorkItem = styled.div`
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

  @media (max-width: ${MediaWidths.tabletS}) {
    width: 100%;
    margin: 2rem 0;
  }
`;

const WorkImageContainer = styled.div`
  box-shadow: 0 16px 32px 0 rgba(55, 58, 75, 0.12);
  transition-duration: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const WorkItemTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 1rem 0;
  padding: 0;

  @media (max-width: ${MediaWidths.tabletL}) {
    font-size: 1rem;
  }
`;

const Story = styled.div`
  margin: 4rem 0;
  text-align: center;

  @media (max-width: ${MediaWidths.tabletS}) {
    text-align: left;
  }
`;

const StoryImage = styled.div`
  height: 400px;

  @media (max-width: ${MediaWidths.tabletL}) {
    height: 250px;
  }
`;

const Works = () => {
  const data = useStaticQuery(graphql`
    query {
      smoothSolutions: file(relativePath: { eq: "smoothsolutions/echub.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      perpetua: file(relativePath: { eq: "perpetua/perpetua.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      marcherunner: file(
        relativePath: { eq: "marcherunner/marcherunner.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lcm: file(relativePath: { eq: "lcm/lcm.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desk: file(relativePath: { eq: "story/desk.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <WorksSection>
      <TextContainer>
        <SectionHeading>Work</SectionHeading>
        <Paragraph>Selected works and past projects.</Paragraph>

        <WorkItemContainer>
          <WorkItem>
            <Link to="/smoothsolutions">
              <WorkImageContainer>
                <Img fluid={data.smoothSolutions.childImageSharp.fluid} />
              </WorkImageContainer>
            </Link>
            <WorkItemTitle>Smooth Solutions</WorkItemTitle>
            <Paragraph>
              I'm a software developer for a team digitizing and modernizing a
              leading energy conservation non-profit company. I'm responsible
              for the entirity of the frontend development process and codebase.
            </Paragraph>
            <Link to="/smoothsolutions">
              <LinkStyle>Read about my experience</LinkStyle>
            </Link>
          </WorkItem>

          <WorkItem>
            <Link to="/perpetua">
              <WorkImageContainer>
                <Img fluid={data.perpetua.childImageSharp.fluid} />
              </WorkImageContainer>
            </Link>
            <WorkItemTitle>Perpetua / Draper AI</WorkItemTitle>
            <Paragraph>
              I had the opportunity to work as an intern at Draper AI, a
              start-up based in Toronto.
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
              Website with secure client portal designed, built, and deployed
              for Orthodontic Speaker and Coach Laura Cafik-Martin.
            </Paragraph>
            <Link to="/cafikmartin">
              <LinkStyle>View Project</LinkStyle>
            </Link>
          </WorkItem>

          <WorkItem>
            <Link to="/marcherunner">
              <WorkImageContainer>
                <Img fluid={data.marcherunner.childImageSharp.fluid} />
              </WorkImageContainer>
            </Link>
            <WorkItemTitle>MarchéRunner</WorkItemTitle>
            <Paragraph>
              My first fullstack MERN web application to help you on your weekly
              shopping trips and plan meals.
            </Paragraph>
            <Link to="/marcherunner">
              <LinkStyle>View Project</LinkStyle>
            </Link>
          </WorkItem>

          {/* <WorkItem>
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
          </WorkItem> */}

          {/* <WorkItem>
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
          </WorkItem> */}
        </WorkItemContainer>

        <Story>
          <StoryImage>
            <Img
              fluid={data.desk.childImageSharp.fluid}
              style={{ maxHeight: "100%" }}
              imgStyle={{ objectFit: "cover", objectPosition: "50% 40%" }}
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
  );
};

export default Works;
