import React from "react"
import styled from "styled-components"
import { Icon } from "@iconify/react"
import githubIcon from "@iconify/icons-fa-brands/github"
import linkedinIn from "@iconify/icons-fa-brands/linkedin-in"
import twitterIcon from "@iconify/icons-fa-brands/twitter"

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.flexEnd ? "flex-end" : "flex-start")};
  align-items: center;
  margin-top: 1rem;
`

const IconSpan = styled.span`
  font-size: 1rem;
  margin: 0 0.5rem;
  display: flex;
  transition: 0.3s transform ease;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`

const SocialIcons = props => {
  return (
    <IconContainer flexEnd={props.flexEnd}>
      <IconSpan>
        <a
          href="https://github.com/andrewthamcc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={githubIcon} />
        </a>
      </IconSpan>
      <IconSpan>
        <a
          href="https://linkedin.com/in/andrewthamcc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={linkedinIn} />
        </a>
      </IconSpan>
      <IconSpan>
        <a
          href="https://twitter.com/andrew_tham"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={twitterIcon} />
        </a>
      </IconSpan>
    </IconContainer>
  )
}

export default SocialIcons
