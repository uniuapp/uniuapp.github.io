import "./style.css"

import { ReactComponent as Logo } from "@assets/logo.svg"
import React from "react"
import Toggle from "@components/Toggle"

const Header = () => {
  return (
    <header>
      <nav>
        <a href="/">
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
            <a href="/">Go dark</a>
          </li>
          <li>
            <a href="/">Download</a>
          </li>
        </ul>
      </nav>
      {/* <Toggle /> */}
    </header>
  )
}

export default Header
