import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { SCALE, TEST_DELAY } from '../config'

const EmotionMeter = ({ order, emotion, activeInput, setActiveInput }) => {
  const [value, setValue] = useState(0)
  const [touched, markAsTouched] = useState(false)
  const active = activeInput === order ? '--active' : ''
  const handleInputChange = index => () => {
    setValue(index)
    markAsTouched(true)
    setTimeout(() => setActiveInput(order + 1), TEST_DELAY)
  }

  return (
    <div className={`emotion-meter__container${active}`}>
      <h2 className="emotion-meter__header">{emotion}</h2>
      {SCALE.map((rank, index) => {
        return (
          <>
            <input
              checked={value === index && touched}
              className="emotion-meter__input"
              id="emotion"
              readOnly
              type="radio"
            />

            <label
              className="emotion-meter__label"
              htmlFor="emotion"
              key={index}
              onClick={handleInputChange(index)}
            >
              {rank}
            </label>
          </>
        )
      })}
    </div>
  )
}

EmotionMeter.propTypes = {
  index: PropTypes.number,
  emotion: PropTypes.string,
  activeInput: PropTypes.number,
  setActiveInput: PropTypes.func,
}

export default EmotionMeter
