import "./style.css"

import React from "react"
import { ReactComponent as AppStore } from "@assets/app-store-badge.svg"
import GooglePlay from "@assets/google-play-badge.png"

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__left">
        <div className="banner__left__copy">
          <h5>UNIU</h5>
          <h3>
            Download it on <br /> Google Play and App Store
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
    </div>
  )
}

export default Banner
