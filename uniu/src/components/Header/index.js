import "./style.css"

import { ReactComponent as Logo } from "@assets/logo.svg"
import React from "react"

const Header = () => {
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
              <a href="/">Download</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="fake-header"></div>
    </>
  )
}

export default Header
