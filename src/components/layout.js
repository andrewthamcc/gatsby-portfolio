import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import { Container } from "./Styles"

const FadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

const LayoutDiv = styled.div`
  opacity: 0;
  animation: ${FadeIn} 0.6s 0.3s ease-in-out forwards;
`

const Footer = styled.footer`
  background-color: #080808;
  color: #ffffff;
  padding: 0.25rem 0;
  font-size: 0.7rem;
  margin-top: 5rem;
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <LayoutDiv>
        <main>{children}</main>
        <Footer>
          <Container>Andrew Tham © {new Date().getFullYear()}</Container>
        </Footer>
      </LayoutDiv>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
