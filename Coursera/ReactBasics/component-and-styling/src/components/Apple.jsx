import React from 'react'

export default function Apple(props) {
  return (
    <div className="promo-section">
        <div>
            <h2>These apples are: {props.color}</h2>
            </div>
            <div>
            <h3>{props.number === 0 || props.number === null ? " " : `There are ${props.number} apples.`}</h3>
        </div>
    </div>
  )
}
