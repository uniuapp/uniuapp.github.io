import Layout from "../components/Layout"
import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import Hero from "@components/Hero"
import Features from "@components/Features"
import Banner from "@components/Banner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features />
    <Banner />
  </Layout>
)

export default IndexPage
