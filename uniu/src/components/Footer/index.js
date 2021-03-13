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
          <a
            target="_blank"
            href="https://www.instagram.com/uniu.app/"
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/UniUapp"
            rel="noreferrer"
          >
            <Facebook />
          </a>
        </div>

        <div className="content__right">
          <Link to="/privacy_policy" activeStyle={{ textDecoration: "none" }}>
            Termini e Condizioni
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
