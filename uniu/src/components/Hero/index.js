import "./style.css"

import React, { useContext, useEffect, useState } from "react"
import { ReactComponent as Ellipse } from "@assets/ellipse.svg"
import { ReactComponent as Blob } from "@assets/blob-1.svg"

import ScreenEsami from "../../assets/screen-esami.png"
import ScreenEsamiDark from "../../assets/screen-esami-dark.png"
import Phone from "@components/Phone"
import { ThemeContext } from "@context/ThemeContext"

const Home = () => {
  const assetsToggle = useContext(ThemeContext)

  const [isDarkMode, setCurrent] = useState(
    typeof window !== `undefined` && window.localStorage.theme === "dark"
      ? true
      : false
  )

  useEffect(() => {
    setCurrent(assetsToggle.darkAssets)
  }, [assetsToggle.darkAssets])

  return (
    <div
      className="hero"
      style={{ transition: "color 0.2s ease-out, background 0.2s ease-out" }}
    >
      <div className="hero__copy">
        <h1>UniU - l'università smart</h1>
        <p>
          UniU porta la tua università all'interno del tuo smartphone. Tutto ciò
          di cui hai bisogno a portata di mano: consulta i dati relativi alla
          tua carriera universitaria, la tua media, i tuoi voti, gli esami
          sostenuti e quelli mancanti e tanto altro ancora.
        </p>
      </div>
      <div className="hero__media">
        <div className="hero__media__ellipse">
          <Ellipse />
        </div>
        <div className="hero__media__blob">
          <Blob />
        </div>
        <div className="hero__media__device">
          <Phone screen={isDarkMode ? ScreenEsamiDark : ScreenEsami} />
        </div>
      </div>
    </div>
  )
}

export default Home
