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
    typeof window !== `undefined` && window.localStorage.theme === "dark"
      ? true
      : false
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
          <a
            target="_blank"
            href="https://apps.apple.com/it/app/uniu-luniversit%C3%A0-smart/id1486762229"
            rel="noreferrer"
            className="banner__left__badges__apple"
          >
            <AppStore />
          </a>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=it.uniu"
            rel="noreferrer"
            className="banner__left__badges__google"
          >
            <img src={GooglePlay} alt="Google Play Download Button" />
          </a>
        </div>
      </div>
      <div className="banner__right">
        <Phone
          screen={isDarkMode ? ScreenOrariBezelsDark : ScreenOrariBezels}
          bezels
        />
        <Phone
          screen={isDarkMode ? ScreenEsamiBezelsDark : ScreenEsamiBezels}
          bezels
        />
      </div>
    </div>
  )
}

export default Banner
