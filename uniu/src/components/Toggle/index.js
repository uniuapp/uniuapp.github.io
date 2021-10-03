import "./style.css"

import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import { ReactComponent as Sun } from "@assets/sun.svg"
import { ReactComponent as Moon } from "@assets/moon.svg"

const Toggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div
          onClick={() => {
            toggleTheme(theme === "light" ? "dark" : "light")
          }}
          className="toggle"
        >
          <Moon />
          <Sun />

          <span
            style={{
              transform: `translateX(${theme === "dark" ? 26 : 0}px)`,
            }}
            className="toggle__handle"
          />
        </div>
      )}
    </ThemeToggler>
  )
}

export default Toggle
