import React, { createContext, useState, useContext, useEffect } from "react"

export const ThemeContext = createContext({})

export const ThemeContextConsumer = ThemeContext.Consumer

export const useToggleDarkMode = () => useContext(ThemeContext)

export const ThemeContextProvider = ({ children }) => {
  const storedTheme = window.localStorage.theme
  const [darkAssets, setDarkAssets] = useState(
    storedTheme === "dark" ? true : false
  )

  useEffect(() => {
    setDarkAssets(!darkAssets)
  }, [])

  const toggleAssets = () => {
    setDarkAssets(!darkAssets)
  }

  return (
    <ThemeContext.Provider value={{ darkAssets, toggleAssets }}>
      {children}
    </ThemeContext.Provider>
  )
}

/* 
  The dark mode can def. be improved and turned into something that actually makes sense.
  We only use react context to change the assets but it would be good to use it for the whole theme too
  and avoid gatsby plugin
*/
