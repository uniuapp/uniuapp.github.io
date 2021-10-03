import React, { createContext, useState, useContext, useEffect } from "react"

export const ThemeContext = createContext({})

export const ThemeContextConsumer = ThemeContext.Consumer

export const useToggleDarkMode = () => useContext(ThemeContext)

export const ThemeContextProvider = ({ children }) => {
  const storedTheme = typeof window !== `undefined` && window.localStorage.theme
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
