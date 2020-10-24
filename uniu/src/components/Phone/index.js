import "./style.css"

import React from "react"

const Phone = props => {
  const { screen } = props
  return (
    <div className="phone">
      <img src={screen} />
    </div>
  )
}
export default Phone
