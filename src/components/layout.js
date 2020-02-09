import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Container from "./Container"

const Footer = styled.footer`
  color: #080808;
  padding: 0.25rem;
  font-size: 0.7rem;
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
      <div>
        <main>{children}</main>
        <Footer>
          <Container>Andrew Tham © {new Date().getFullYear()}</Container>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
