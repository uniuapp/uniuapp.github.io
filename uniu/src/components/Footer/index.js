import "./style.css"

import { ReactComponent as Email } from "@assets/email.svg"
import { ReactComponent as Instagram } from "@assets/instagram.svg"
import { ReactComponent as Facebook } from "@assets/facebook.svg"
import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="content__left">
          <h2>UNIU</h2>
          <p>© Marco Tammaro - Serena Falchieri</p>
        </div>
        <div className="content__middle">
          <a href="mailto:uniu.app@gmail.com">
            <Email />
          </a>
          <a href="https://www.instagram.com/uniu.app/" target="_blank">
            <Instagram />
          </a>
          <a href="https://www.facebook.com/UniUapp" target="_blank">
            <Facebook />
          </a>
        </div>

        <div className="content__right">
          <Link
            to="/terms-and-conditions"
            activeStyle={{ textDecoration: "none" }}
          >
            Termini e Condizioni
          </Link>
          <Link to="/privacy-policy" activeStyle={{ textDecoration: "none" }}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
