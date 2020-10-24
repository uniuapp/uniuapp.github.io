import "./style.css"

import React from "react"

const Phone = props => {
  const { screen, bezels } = props

  return (
    <div className="phone" style={{ width: bezels ? 300 : null }}>
      {bezels ? (
        <img className="phone__bezels" src={screen} />
      ) : (
        <img className="phone__screen" src={screen} />
      )}
    </div>
  )
}
export default Phone
