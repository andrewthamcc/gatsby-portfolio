import React from "react"
import styled from "styled-components"
import { Icon } from "@iconify/react"

import apollostackIcon from "@iconify/icons-logos/apollostack"
import gatsbyIcon from "@iconify/icons-logos/gatsby"
import gitIcon from "@iconify/icons-logos/git-icon"
import graphqlIcon from "@iconify/icons-logos/graphql"
import html5 from "@iconify/icons-logos/html-5"
import javascriptIcon from "@iconify/icons-logos/javascript"
import jqueryIcon from "@iconify/icons-logos/jquery"
import reactIcon from "@iconify/icons-logos/react"
import reduxIcon from "@iconify/icons-logos/redux"
import sassIcon from "@iconify/icons-logos/sass"
import typeScriptIcon from "@iconify/icons-logos/typescript-icon"

const importedIcons = {
  apollostackIcon,
  gitIcon,
  gatsbyIcon,
  graphqlIcon,
  html5,
  javascriptIcon,
  jqueryIcon,
  reactIcon,
  reduxIcon,
  sassIcon,
  typeScriptIcon,
}

export const iconTypes = {
  apollo: "apollostackIcon",
  gatsby: "gatsbyIcon",
  git: "gitIcon",
  graphql: "graphqlIcon",
  html: "html5",
  javascript: "javascriptIcon",
  jquery: "jqueryIcon",
  react: "reactIcon",
  redux: "reduxIcon",
  sass: "sassIcon",
  typescript: "typeScriptIcon",
}

const TechList = styled.ul`
  display: flex;
  justify-content: ${props =>
    props.tech.length > 3 ? "space-around" : "center"};
  margin: 4rem 0;
  font-size: 2rem;

  li {
    display: flex;
    align-items: center;
    border: 50%;
    margin: ${props => (props.tech.length <= 3 ? "0 1rem" : "0")};
    padding: 1rem;
    box-shadow: 0 16px 32px 0 rgba(55, 58, 75, 0.12);
  }
`

const TechIcons = props => {
  return (
    <TechList tech={props.tech}>
      {props.tech.map(iconToUse => (
        <li key={iconToUse}>
          <Icon icon={importedIcons[iconToUse]} />
        </li>
      ))}
    </TechList>
  )
}

export default TechIcons
