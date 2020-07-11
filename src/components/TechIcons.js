import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { MediaWidths } from "./SharedStyles";

import apollostackIcon from "@iconify/icons-logos/apollostack";
import expressIcon from "@iconify/icons-logos/express";
import firebaseIcon from '@iconify/icons-logos/firebase';
import gatsbyIcon from "@iconify/icons-logos/gatsby";
import gitIcon from "@iconify/icons-logos/git-icon";
import graphqlIcon from "@iconify/icons-logos/graphql";
import herokuIcon from "@iconify/icons-logos/heroku-icon";
import html5 from "@iconify/icons-logos/html-5";
import javascriptIcon from "@iconify/icons-logos/javascript";
import jqueryIcon from "@iconify/icons-logos/jquery";
import mongodbIcon from "@iconify/icons-logos/mongodb";
import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
import reactIcon from "@iconify/icons-logos/react";
import reduxIcon from "@iconify/icons-logos/redux";
import sassIcon from "@iconify/icons-logos/sass";
import typeScriptIcon from "@iconify/icons-logos/typescript-icon";

const importedIcons = {
  apollostackIcon,
  expressIcon,
  firebaseIcon,
  gitIcon,
  gatsbyIcon,
  graphqlIcon,
  herokuIcon,
  html5,
  javascriptIcon,
  jqueryIcon,
  mongodbIcon,
  nodejsIcon,
  reactIcon,
  reduxIcon,
  sassIcon,
  typeScriptIcon,
};

export const iconTypes = {
  apollo: "apollostackIcon",
  express: "expressIcon",
  firebase: "firebaseIcon",
  gatsby: "gatsbyIcon",
  git: "gitIcon",
  graphql: "graphqlIcon",
  heroku: "herokuIcon",
  html: "html5",
  javascript: "javascriptIcon",
  jquery: "jqueryIcon",
  mongodb: "mongodbIcon",
  nodejs: "nodejsIcon",
  react: "reactIcon",
  redux: "reduxIcon",
  sass: "sassIcon",
  typescript: "typeScriptIcon",
};

const ariaLabels = {
  apollo: "Apollo Client",
  express: "Express",
  firebase: "Firebase",
  gatsby: "Gatsby",
  git: "Git",
  graphql: "Graph QL",
  heroku: "Heroku",
  html: "HTML",
  javascript: "JavaScript",
  jquery: "jQuery",
  mongodb: "MongoDB",
  nodejs: "Node JS",
  react: "React",
  redux: "Redux",
  sass: "SASS",
  typescript: "TypeScript",
};

const TechList = styled.ul`
  display: flex;
  justify-content: ${props =>
    props.tech.length > 3 ? "space-around" : "center"};
  align-items: center;
  flex-wrap: wrap;
  margin: 4rem 0;
  font-size: 2rem;

  li {
    margin: ${props => (props.tech.length <= 4 ? "0 1rem" : "1rem")};
  }

  @media (max-width: ${MediaWidths.tabletS}) {
    font-size: 1.5rem;
    flex-wrap: wrap;
    justify-content: space-evenly;

    li {
      margin: 1rem 0;
    }
  }
`;

const TechListItem = styled.li`
  display: flex;
  align-items: center;
  border: 50%;
  padding: 1rem;
  box-shadow: 0 16px 32px 0 rgba(55, 58, 75, 0.12);
`;

const TechIcons = props => {
  return (
    <TechList tech={props.tech}>
      {props.tech.map(iconToUse => (
        <TechListItem key={iconToUse}>
          <Icon
            icon={importedIcons[iconToUse]}
            aria-label={ariaLabels[iconToUse]}
          />
        </TechListItem>
      ))}
    </TechList>
  );
};

export default TechIcons;
