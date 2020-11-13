import "./style.css"

import React, { useEffect, useRef, useState, useContext } from "react"

import ScreenOrari from "@assets/screen-orari.png"
import ScreenEsami from "@assets/screen-esami.png"
import ScreenPrevisioni from "@assets/screen-previsioni.png"
import ScreenOrariDark from "@assets/screen-orari-dark.png"
import ScreenEsamiDark from "@assets/screen-esami-dark.png"
import ScreenPrevisioniDark from "@assets/screen-previsioni-dark.png"
import Phone from "@components/Phone"
import { ReactComponent as Arrow } from "@assets/arrow.svg"
import { ReactComponent as Blob } from "@assets/blob-2.svg"
import { ThemeContext } from "@context/ThemeContext"

const Features = () => {
  const itemRef = useRef()
  const carouselRef = useRef()
  const containerRef = useRef()

  const assetsToggle = useContext(ThemeContext)

  const [isDarkMode, setCurrent] = useState(
    window.localStorage.theme === "dark" ? true : false
  )

  useEffect(() => {
    console.log(window.localStorage.theme, isDarkMode)
    setCurrent(assetsToggle.darkAssets)
  }, [assetsToggle.darkAssets])

  const [index, setIndex] = useState(0)

  const [nextDisabled, setNextDisabled] = useState(false)
  const [prevDisabled, setPrevDisabled] = useState(true)

  const [carouselWidth, setCarouselWidth] = useState()

  const slides = [
    {
      title: "Le tue lezioni",
      paragraph:
        "Registrara l'orario delle lezioni e visualizza il piano della giornata o dell'intera settimana. L'app ti invierà una notifica quando è arrivato il momento di cambiare aula.",
      screen: isDarkMode ? ScreenOrari : ScreenOrariDark,
    },
    {
      title: "I tuoi esami",
      paragraph:
        "Monitora facilmente la tua carriera universitaria. Esami, CFU e voti sempre a portata di mano.",
      screen: isDarkMode ? ScreenEsami : ScreenEsamiDark,
    },
    {
      title: "Le tue statistiche",
      paragraph:
        "Fai previsioni sugli esami futuri in maniera intelligente e monitora come cambierebbe la tua media.",
      screen: isDarkMode ? ScreenPrevisioni : ScreenPrevisioniDark,
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
              <div
                className="carousel__item__ellipse"
                style={{
                  backgroundColor:
                    i === 0 ? "#9472ee" : i === 1 ? "#007afe" : "#ea6ba3",
                }}
              />
              <div
                className="carousel__item__blob"
                style={{
                  color: i === 0 ? "#ebb303" : i === 1 ? "#28b227" : "#6c829e",
                }}
              >
                <Blob />
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
