import "./style.css"
import Slider from "react-slick"

import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ScreenOrari from "@assets/screen-orari.png"
import ScreenEsami from "@assets/screen-esami.png"
import ScreenPrevisioni from "@assets/screen-previsioni.png"

const Features = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const slides = [
    { title: "slide 1", paragraph: "this is a paragraph", screen: ScreenOrari },
    { title: "slide 2", paragraph: "this is a paragraph", screen: ScreenEsami },
    {
      title: "slide 3",
      paragraph: "this is a paragraph",
      screen: ScreenPrevisioni,
    },
  ]

  return (
    <Slider {...settings}>
      {slides.map((item, index) => (
        <div key={index} className="slides" style={{ display: "flex" }}>
          <div className="slides__screen-wrapper">
            <img src={item.screen} />
          </div>

          <h1>{item.title}</h1>
          <p>{item.paragraph}</p>
        </div>
      ))}
    </Slider>
  )
}

export default Features
