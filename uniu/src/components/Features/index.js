import "./style.css"
import Slider from "react-slick"

import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Features = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      <div>
        <img src="https://picsum.photos/id/100/500/500" />
      </div>
      <div>
        <img src="https://picsum.photos/id/200/500/500" />
      </div>
      <div>
        <img src="https://picsum.photos/id/200/500/500" />
      </div>
      <div>
        <img src="https://picsum.photos/id/200/500/500" />
      </div>
      <div>
        <img src="https://picsum.photos/id/200/500/500" />
      </div>
      <div>
        <img src="https://picsum.photos/id/200/500/500" />
      </div>
    </Slider>
  )
}

export default Features
