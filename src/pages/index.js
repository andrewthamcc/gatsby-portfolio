import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Works from "../components/Works"
import Contact from "../components/Contact"

import { SectionImage, Container } from "../components/Styles"
import SkillsImage from "../images/lagape.jpg"
import ContactImage from "../images/contact.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    <About />
    <Container>
      <SectionImage image={SkillsImage} y={55} />
    </Container>
    <Skills />
    <Works />
    <Container>
      <SectionImage image={ContactImage} y={70} />
    </Container>
    <Contact />
  </Layout>
)

export default IndexPage
