import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import styled from "styled-components";
import {
  Container,
  TextContainer,
  SectionHeading,
  Paragraph,
} from "../components/SharedStyles";
import TechIcons, { iconTypes } from "../components/TechIcons";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const SmoothSection = styled.section`
  padding: 2rem 0;
`;

const SmoothSolutions = () => {
  const data = useStaticQuery(graphql`
    query {
      perpetua: file(relativePath: { eq: "perpetua/perpetua.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      perpetuaTeam: file(relativePath: { eq: "perpetua/perpetua-team.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Draper AI" />
      <SmoothSection>
        <TextContainer>
          <SectionHeading>Working at Smooth Solutions</SectionHeading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi
            ratione aspernatur distinctio impedit quaerat! Voluptatibus, amet
            quis! A dicta dolorem sequi nostrum quae temporibus, perferendis at
            atque beatae nulla?
          </Paragraph>
        </TextContainer>
        <Container>
          <Img
            fluid={data.perpetua.childImageSharp.fluid}
            imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
            style={{
              maxHeight: "100%",
              boxShadow: "0 16px 32px 0 rgba(55,58,75,.12)",
              margin: "4rem 0",
            }}
          />
        </Container>
        <TextContainer>
          <Paragraph>
            One of my main interests in working at Draper AI was due to their
            technology stack and deepening my knowledge of React and being
            exposed to a production scale codebase of that stack.
          </Paragraph>

          <TechIcons
            tech={[
              iconTypes.materialUI,
              iconTypes.typescript,
              iconTypes.react,
              iconTypes.redux,
              iconTypes.graphql,
              iconTypes.apollo,
              iconTypes.git,
            ]}
          />

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
            imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
            style={{
              maxHeight: "100%",
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
      </SmoothSection>
    </Layout>
  );
};

export default SmoothSolutions;
