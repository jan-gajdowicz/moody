import React, { useState } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import { SCALE } from '../config/index.js'

const MoodInput = ({ index, emotion, activeInput, setActiveInput }) => {
  const [value, setValue] = useState(0)
  const active = activeInput === index ? '--active' : ''
  const handleSliderChange = value => {
    setValue(value)
  }
  const handleSliderComplete = () => {
    setActiveInput(index + 1)
  }

  const min = SCALE[0]
  const max = SCALE.length - 1

  return (
    <div className={`mood-input__container${active}`}>
      <h2 className="mood-input__header">{emotion}</h2>
      <Slider
        labels={SCALE}
        max={max}
        min={min}
        onChange={handleSliderChange}
        onChangeComplete={handleSliderComplete}
        value={value}
      />
    </div>
  )
}

export default MoodInput
