import React from 'react'
import PropTypes from 'prop-types'
import { buttonStyle } from 'config'

export default function SmartButton({ color, text, isChecked, handleChange }) {
  const style = buttonStyle(isChecked, color)

  return (
    <label className="graph-filters__filter" htmlFor={text} style={style}>
      <input
        checked={isChecked}
        className="graph-filters__input"
        id={text}
        name={text}
        onChange={handleChange}
        type="checkbox"
      />
      {text}
    </label>
  )
}

SmartButton.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  isChecked: PropTypes.number,
  handleChange: PropTypes.func,
}
