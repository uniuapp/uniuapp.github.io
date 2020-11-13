import "./style.css"

import React, { useContext } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { ThemeContext } from "@context/ThemeContext"
import { ReactComponent as Sun } from "@assets/sun.svg"
import { ReactComponent as Moon } from "@assets/moon.svg"

const Toggle = () => {
  const assetsToggle = useContext(ThemeContext)

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div
          onClick={() => {
            toggleTheme(theme === "light" ? "dark" : "light")
            assetsToggle.toggleAssets()
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
