import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    <About />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
