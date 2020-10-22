import Layout from "../components/Layout"
import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import Hero from "@components/Hero"
import Features from "@components/Features"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features />
    <br />
    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <br />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
