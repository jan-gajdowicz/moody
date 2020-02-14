import React from 'react'
import PropTypes from 'prop-types'

export default function Icon({ color, size, path }) {
  return (
    <svg style={{ width: `${size}px`, height: `${size}`, color: `${color}` }} viewBox="0 0 24 24">
      {path}
    </svg>
  )
}

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  path: PropTypes.object,
}
