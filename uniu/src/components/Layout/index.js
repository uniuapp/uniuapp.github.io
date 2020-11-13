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
import React, { useEffect, useState } from "react"
import Toggle from "@components/Toggle"
import { ThemeContextProvider } from "@context/ThemeContext"

const Layout = ({ children }) => {
  useEffect(() => {
    const el =
      typeof document !== `undefined` && document.querySelector("footer")
    const toggle =
      typeof document !== `undefined` && document.querySelector(".toggle")

    // hide toggle when footer is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          toggle.style.bottom = null
          toggle.style.transform = `translateY(300%)`
        } else {
          toggle.style.bottom = `2.5rem`
          toggle.style.transform = `translateY(0%)`
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    )
    if (el) {
      observer.observe(el)
    }
  }, [])

  return (
    <>
      <ThemeContextProvider>
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
        <Toggle />
      </ThemeContextProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
