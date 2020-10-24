import "./style.css"

import React, { useEffect, useRef, useState } from "react"

import ScreenOrari from "@assets/screen-orari.png"
import ScreenEsami from "@assets/screen-esami.png"
import ScreenPrevisioni from "@assets/screen-previsioni.png"

const Features = () => {
  const itemRef = useRef()
  const carouselRef = useRef()
  const containerRef = useRef()

  const [index, setIndex] = useState(0)

  const [nextDisabled, setNextDisabled] = useState(false)
  const [prevDisabled, setPrevDisabled] = useState(true)

  const [carouselWidth, setCarouselWidth] = useState()

  const slides = [
    { title: "slide 1", paragraph: "this is a paragraph", screen: ScreenOrari },
    { title: "slide 2", paragraph: "this is a paragraph", screen: ScreenEsami },
    {
      title: "slide 3",
      paragraph: "this is a paragraph",
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

    if (nextIndex == slides.length - 1) {
      setNextDisabled(true)
    }
    setPrevDisabled(false)
  }
  const prevSlide = () => {
    const translate = carouselWidth * (index - 1)
    container.style.transform = `translateX(${-translate}px)`

    const nextIndex = index - 1
    setIndex(nextIndex)

    if (nextIndex == 0) {
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
                backgroundColor: i === 0 ? "blue" : i === 1 ? "red" : "yellow",
              }}
            >
              <p>ciao</p>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel__controls">
        <button disabled={prevDisabled} onClick={prevSlide}>
          prev
        </button>
        <button disabled={nextDisabled} onClick={nextSlide}>
          next
        </button>
      </div>
    </>
  )
}

export default Features
