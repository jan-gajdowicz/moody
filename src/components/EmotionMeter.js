import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { SCALE, TEST_DELAY } from '../config'

const EmotionMeter = ({ order, step: { name, color }, activeStep, saveStep, setActiveStep }) => {
  const [value, setValue] = useState(0)
  const [touched, markAsTouched] = useState(false)

  const active = activeStep === order ? '--active' : ''

  const handleInputChange = value => () => {
    setValue(value)
    markAsTouched(true)
    saveStep({ [name]: value })
    setTimeout(() => setActiveStep(order + 1), TEST_DELAY)
  }

  return (
    <div className={`emotion-meter__container${active}`}>
      <h2
        className="emotion-meter__header"
        style={{
          color: `${color}`,
        }}
      >
        {name}
      </h2>
      <div className="emotion-meter__field">
        {SCALE.map(rank => {
          return (
            <div key={rank}>
              <input
                checked={value === rank && touched}
                className="emotion-meter__input"
                id="emotion"
                readOnly
                type="radio"
              />
              <label
                className="emotion-meter__label"
                htmlFor="emotion"
                key={rank}
                onClick={handleInputChange(rank)}
                style={{
                  color: `${color}`,
                  border: `2px solid ${color}`,
                }}
              >
                {rank}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

EmotionMeter.propTypes = {
  order: PropTypes.number,
  step: PropTypes.object,
  activeStep: PropTypes.number,
  saveStep: PropTypes.func,
  setActiveStep: PropTypes.func,
}

export default EmotionMeter
