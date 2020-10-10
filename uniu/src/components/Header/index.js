import "./style.css"

import { ReactComponent as Logo } from "@assets/logo.svg"
import React from "react"
import Toggle from "@components/Toggle"

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <a className="logo" href="/">
            <Logo />
          </a>
          <ul>
            <li>
              <a href="/">Discover</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <Toggle />
            </li>
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
