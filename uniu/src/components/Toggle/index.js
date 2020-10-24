import "./style.css"

import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class Toggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div
            onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
            className="toggle"
          >
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
}

export default Toggle
