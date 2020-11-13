import "./style.css"

import { ReactComponent as Logo } from "@assets/logo.svg"
import React, { useEffect, useState } from "react"

const Header = () => {
  const [downloadBanner, setDownloadBanner] = useState()

  useEffect(() => {
    setDownloadBanner(
      typeof document !== `undefined` && document.querySelector(".banner")
    )
  }, [])

  const scrollToBanner = () => {
    downloadBanner.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <>
      <header
        style={{ transition: "color 0.2s ease-out, background 0.2s ease-out" }}
      >
        <nav>
          <a className="logo" href="/">
            <Logo />
          </a>
          <ul>
            <li>
              <span onClick={scrollToBanner} href="/">
                Download
              </span>
            </li>
          </ul>
        </nav>
      </header>
      <div className="fake-header"></div>
    </>
  )
}

export default Header
