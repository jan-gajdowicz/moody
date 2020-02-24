import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import { SCALE, TEST_DELAY } from '../config'

import { WizzardContext } from 'contexts/WizzardContext'

const EmotionMeter = ({ order, step: { name, color }, saveStep }) => {
  const [value, setValue] = useState(0)
  const { currentStep, handleStepChange } = useContext(WizzardContext)
  const { wizzardData, handleWizzardData } = useContext(WizzardContext)
  const [touched, markAsTouched] = useState(false)

  const active = currentStep === order ? '--active' : ''

  const handleInputChange = value => () => {
    setValue(value)
    markAsTouched(true)
    handleWizzardData({ [name]: value })
    setTimeout(() => handleStepChange(order + 1), TEST_DELAY)
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
  saveStep: PropTypes.func,
}

export default EmotionMeter
