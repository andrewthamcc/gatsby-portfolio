import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Paragraph } from "../components/styles"
import SEO from "../components/seo"

const NotFondTitle = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #080808;
`

const FullHeightContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  height: calc(100vh - 5rem - 28px);

  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <FullHeightContainer>
      <NotFondTitle>404 Not Found :(</NotFondTitle>
      <Paragraph>Uh Oh! That route that doesn&#39;t exist...</Paragraph>
    </FullHeightContainer>
  </Layout>
)

export default NotFoundPage
