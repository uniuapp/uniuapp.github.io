/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import "./style.css"
import "@styles/normalize.css"
import "@styles/typography.css"
import "@styles/global.css"

import Footer from "@components/Footer"
import Header from "@components/Header"
import PropTypes from "prop-types"
import React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div
        style={{
          margin: `0 auto`,
          padding: `0`,
          transition: "color 0.2s ease-out, background 0.2s ease-out",
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
