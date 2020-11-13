import "./style.css"

import React, { useContext } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { ThemeContext } from "@context/ThemeContext"

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
          <span className="toggle__label">
            {theme === "light" ? "DARK" : "LIGHT"}
          </span>
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
