import React from 'react'
import PropTypes from 'prop-types'

export default function SmartButton({ color, text, isChecked, handleChange }) {
  const style = isChecked
    ? {
        color: `${color}`,
        borderColor: `${color}`,
        background: `linear-gradient(${color} -900%, transparent 100%)`,
      }
    : null

  return (
    <label className="smart-button__label" htmlFor={text} style={style}>
      <input
        checked={isChecked}
        className="smart-button__input"
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
  isChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  handleChange: PropTypes.func,
}
