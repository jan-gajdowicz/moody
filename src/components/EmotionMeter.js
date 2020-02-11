import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { SCALE, TEST_DELAY } from '../config'

const EmotionMeter = ({ order, emotion: { name }, activeInput, setEmotion, setActiveInput }) => {
  const [value, setValue] = useState(0)
  const [touched, markAsTouched] = useState(false)

  const active = activeInput === order ? '--active' : ''

  const handleInputChange = index => () => {
    setValue(index)
    markAsTouched(true)
    setEmotion({ [name]: index })
    setTimeout(() => setActiveInput(order + 1), TEST_DELAY)
  }

  return (
    <div className={`emotion-meter__container${active}`}>
      <h2 className="emotion-meter__header">{name}</h2>
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
  emotion: PropTypes.string,
  activeInput: PropTypes.number,
  setEmotion: PropTypes.func,
  setActiveInput: PropTypes.func,
}

export default EmotionMeter
