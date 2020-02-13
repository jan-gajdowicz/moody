import React from 'react'
import PropTypes from 'prop-types'

export default function MoonIcon({ color, size }) {
  return (
    <svg style={{ width: `${size}px`, height: `${size}`, color: `${color}` }} viewBox="0 0 24 24">
      <path
        d="M9,2C7.95,2 6.95,2.16 6,2.46C10.06,3.73 13,7.5 13,12C13,16.5 10.06,20.27 6,21.54C6.95,21.84 7.95,22 9,22A10,10 0 0,0 19,12A10,10 0 0,0 9,2Z"
        fill="currentColor"
      />
    </svg>
  )
}

MoonIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}
