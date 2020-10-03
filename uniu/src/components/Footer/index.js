import "./style.css"

import { ReactComponent as Email } from "@assets/email.svg"
import { ReactComponent as Instagram } from "@assets/instagram.svg"
import { ReactComponent as LogoWhite } from "@assets/logo-white.svg"
import React from "react"

const Footer = () => {
  return (
    <footer>
      <div className="upper">
        <a href="/">
          <LogoWhite />
        </a>
        <div className="upper__contacts">
          <a href="mailto:uniu.app@gmail.com">
            <Email />
          </a>
          <a href="https://www.instagram.com/uniu.app/" target="_blank">
            <Instagram />
          </a>
        </div>
      </div>
      <div className="lower">
        <p>© Marco Tammaro - Serena Falchieri</p>
        <div className="lower__links">
          <a href="/">Termini e Condizioni</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
