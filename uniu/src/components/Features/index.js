import "./style.css"

import React, { useEffect, useRef, useState } from "react"

import ScreenOrari from "@assets/screen-orari.png"
import ScreenEsami from "@assets/screen-esami.png"
import ScreenPrevisioni from "@assets/screen-previsioni.png"
import Phone from "@components/Phone"
import { ReactComponent as Arrow } from "@assets/arrow.svg"

const Features = () => {
  const itemRef = useRef()
  const carouselRef = useRef()
  const containerRef = useRef()

  const [index, setIndex] = useState(0)

  const [nextDisabled, setNextDisabled] = useState(false)
  const [prevDisabled, setPrevDisabled] = useState(true)

  const [carouselWidth, setCarouselWidth] = useState()

  const slides = [
    {
      title: "Slide 1",
      paragraph:
        "this is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraph",
      screen: ScreenOrari,
    },
    {
      title: "Slide 2",
      paragraph:
        "this is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraph",
      screen: ScreenEsami,
    },
    {
      title: "Slide 3",
      paragraph:
        "this is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraphthis is a paragraph",
      screen: ScreenPrevisioni,
    },
  ]

  const container = document.querySelector(".carousel__inner-container")

  useEffect(() => {
    setCarouselWidth(carouselRef.current.offsetWidth)
  })

  const nextSlide = () => {
    const translate = carouselWidth * (index + 1)
    container.style.transform = `translateX(${-translate}px)`
    const nextIndex = index + 1
    setIndex(nextIndex)

    if (nextIndex === slides.length - 1) {
      setNextDisabled(true)
    }
    setPrevDisabled(false)
  }
  const prevSlide = () => {
    const translate = carouselWidth * (index - 1)
    container.style.transform = `translateX(${-translate}px)`

    const nextIndex = index - 1
    setIndex(nextIndex)

    if (nextIndex === 0) {
      setPrevDisabled(true)
    }
    setNextDisabled(false)
  }

  return (
    <>
      <div className="carousel" ref={carouselRef}>
        <div
          className="carousel__inner-container"
          ref={containerRef}
          style={{ width: carouselWidth && carouselWidth * slides.length }}
        >
          {slides.map((item, i) => (
            <div
              className="carousel__item"
              key={i}
              ref={itemRef}
              style={{
                width: carouselWidth,
                // backgroundColor: i === 0 ? "blue" : i === 1 ? "red" : "yellow",
              }}
            >
              <Phone screen={item.screen} />
              <div className="carousel__item__copy">
                <h2>{item.title}</h2>
                <p>{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel__controls--prev"
          disabled={prevDisabled}
          onClick={prevSlide}
          style={{ opacity: prevDisabled ? 0 : null }}
        >
          <Arrow />
        </button>

        <button
          className="carousel__controls--next"
          disabled={nextDisabled}
          onClick={nextSlide}
          style={{ opacity: nextDisabled ? 0 : null }}
        >
          <Arrow />
        </button>
      </div>
    </>
  )
}

export default Features
