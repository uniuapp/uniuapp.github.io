import "./style.css"

import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class Toggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="toggle">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
            Go dark
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default Toggle
