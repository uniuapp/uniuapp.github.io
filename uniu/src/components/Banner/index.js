import "./style.css"

import React, { useContext, useEffect, useState } from "react"
import { ReactComponent as AppStore } from "@assets/app-store-badge.svg"
import GooglePlay from "@assets/google-play-badge.png"
import Phone from "@components/Phone"
import ScreenOrariBezels from "@assets/screen-orari-bezels.png"
import ScreenEsamiBezels from "@assets/screen-esami-bezels.png"
import ScreenOrariBezelsDark from "@assets/screen-orari-bezels-dark.png"
import ScreenEsamiBezelsDark from "@assets/screen-esami-bezels-dark.png"
import { ThemeContext } from "@context/ThemeContext"

const Banner = () => {
  const assetsToggle = useContext(ThemeContext)

  const [isDarkMode, setCurrent] = useState(
    window.localStorage.theme === "dark" ? true : false
  )

  useEffect(() => {
    setCurrent(assetsToggle.darkAssets)
  }, [assetsToggle.darkAssets])

  return (
    <div
      className="banner"
      style={{ transition: "color 0.2s ease-out, background 0.2s ease-out" }}
    >
      <div className="banner__left">
        <div className="banner__left__copy">
          <h5>UNIU</h5>
          <h3>
            Scaricala ora su <br /> Google Play e App Store
          </h3>
        </div>
        <div className="banner__left__badges">
          <a href="/" className="banner__left__badges__apple">
            <AppStore />
          </a>
          <a href="/" className="banner__left__badges__google">
            <img src={GooglePlay} />
          </a>
        </div>
      </div>
      <div className="banner__right">
        <Phone
          screen={isDarkMode ? ScreenOrariBezels : ScreenOrariBezelsDark}
          bezels
        />
        <Phone
          screen={isDarkMode ? ScreenEsamiBezels : ScreenEsamiBezelsDark}
          bezels
        />
      </div>
    </div>
  )
}

export default Banner
