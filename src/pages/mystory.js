import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import styled from "styled-components";
import {
  Container,
  TextContainer,
  SectionHeading,
  Paragraph,
  MediaWidths,
} from "../components/SharedStyles";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const StorySection = styled.section`
  padding-top: 2rem;
`;

const StoryImageContainer = styled.div`
  height: 600px;
  margin-bottom: 2rem;

  @media (max-width: ${MediaWidths.tabletS}) {
    height: 400px;
  }
`;

const StoryParagraph = styled(Paragraph)`
  margin-bottom: 2rem;
`;

const Mystory = () => {
  const data = useStaticQuery(graphql`
    query {
      rousillon: file(relativePath: { eq: "story/rousillon.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="My Journey" />
      <StorySection>
        <TextContainer>
          <SectionHeading>My Story</SectionHeading>
        </TextContainer>
        <Container>
          <StoryImageContainer>
            <Img
              fluid={data.rousillon.childImageSharp.fluid}
              style={{ maxHeight: "100%" }}
              imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </StoryImageContainer>
        </Container>
        <TextContainer>
          <StoryParagraph>
            I've always had a fondness and curiosity for the web since I was
            teenager learning HTML in the early days of the internet. I've also
            always enjoyed programming and studied the sciences throughout
            highschool and then continued onwards to post-secondary where I
            completed a degree in Physics at The University of Toronto.
          </StoryParagraph>

          <StoryParagraph>
            After University I decided to pursue the childhood dream of becoming
            a Chef. I've been lucky and privileged enough to work and travel as
            a Chef and have lead kitchens in both Toronto and abroad. I have
            experience in fine dining kitchens, corporate food development, and
            food-tech start ups. I've cooked 12 course tasting menu dinners,
            slung lettuce wraps at street festivals, been part of a team
            resolving one of the largest Canadian food recalls, and more.
          </StoryParagraph>

          <StoryParagraph>
            After working as a Chef for a decade I decided to leave the
            hospitality industry in 2019. While I had succeeded and climbed the
            ladder of professional kitchens I could no longer ignore the growing
            income disparity, lack of employee rights and proper employment
            practices, and restaurants often being fixated on and driven by
            social media influence over quality of food and service.
          </StoryParagraph>

          <StoryParagraph>
            I've applied my programming knowledge during my studies in various
            courses and have also had the opportunity to write small bits of
            code to help my job as a Chef.
          </StoryParagraph>

          <StoryParagraph>
            With a background in the sciences and a familiarity with programming
            basics I enrolled in the part time continuing education web
            development program at Juno College in November 2018 and was later
            admitted to their 8-Week immersive program in April 2019.
          </StoryParagraph>

          <StoryParagraph>
            Even though I miss cooking professionally I haven't looked back to
            restaurant kitchens. I've only fallen more in love with programming
            and am dedicated to growing my career as a developer. I now just
            keep to cooking at home for friends and family.
          </StoryParagraph>
        </TextContainer>
      </StorySection>
    </Layout>
  );
};

export default Mystory;
