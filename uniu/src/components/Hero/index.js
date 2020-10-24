import "./style.css"

import React from "react"
import { ReactComponent as Ellipse } from "@assets/ellipse.svg"
import { ReactComponent as Blob } from "@assets/blob-1.svg"
import { ReactComponent as Triangles } from "@assets/triangles.svg"

import ScreenEsami from "@assets/screen-esami.png"
import Phone from "@components/Phone"

const Home = () => {
  return (
    <div
      className="hero"
      style={{ transition: "color 0.2s ease-out, background 0.2s ease-out" }}
    >
      <div className="hero__copy">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Donec vehicula arcu ac neque ornare tincidunt. Ut vitae nisl
          odio.uspendisse libero sapien, lobortis vitae.
        </p>
      </div>
      <div className="hero__media">
        <div className="hero__media__ellipse">
          <Ellipse />
        </div>
        <div className="hero__media__blob">
          <Blob />
        </div>
        <Phone screen={ScreenEsami} />
      </div>
    </div>
  )
}

export default Home
